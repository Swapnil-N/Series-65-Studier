import {
  Bar,
  BarChart,
  Cell,
  ErrorBar,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  BUFFER,
  MIN_N_PER_TOPIC,
  PASS,
  type ReadinessResult,
} from "../lib/readiness";

export interface ReadinessChartProps {
  readiness: ReadinessResult;
}

/**
 * Per-topic readiness BarChart.
 *
 * Each topic renders as one bar. Bars for sufficient topics use a point
 * estimate + Wilson CI error bar; insufficient topics render as greyed-out
 * zero-height stubs with an "n/20" label so the user knows how many more
 * questions they need to attempt.
 *
 * We use recharts' ResponsiveContainer so the chart fills its parent width
 * regardless of viewport, and fix the height at ~220px — the dashboard needs
 * it compact enough to sit above the fold on an iPhone SE.
 */
export function ReadinessChart({ readiness }: ReadinessChartProps) {
  const data = readiness.perTopic.map((t) => {
    const point = t.sufficient && t.point !== null ? t.point : 0;
    const half = t.sufficient && t.halfWidth !== null ? t.halfWidth : 0;
    return {
      topicId: t.topicId,
      label: `T${t.topicId}`,
      point,
      halfWidth: half,
      sufficient: t.sufficient,
      n: t.n,
      // For insufficient topics we surface "n/20" as a dataKey so the chart's
      // tooltip (if users hover) shows progress rather than a misleading 0%.
      nLabel: `${t.n}/${MIN_N_PER_TOPIC}`,
    };
  });

  return (
    <div className="w-full" data-testid="readiness-chart">
      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 12, right: 12, bottom: 8, left: 0 }}>
            <XAxis dataKey="label" tick={{ fontSize: 12 }} />
            <YAxis
              domain={[0, 100]}
              tick={{ fontSize: 12 }}
              tickFormatter={(v) => `${v}%`}
              width={40}
            />
            <ReferenceLine
              y={PASS}
              stroke="#ef4444"
              strokeDasharray="3 3"
              label={{ value: `Pass ${PASS}%`, position: "insideTopRight", fontSize: 10, fill: "#ef4444" }}
            />
            <ReferenceLine
              y={BUFFER}
              stroke="#22c55e"
              strokeDasharray="3 3"
              label={{ value: `Buffer ${BUFFER}%`, position: "insideTopRight", fontSize: 10, fill: "#22c55e" }}
            />
            <Bar dataKey="point" isAnimationActive={false}>
              {data.map((entry) => (
                <Cell
                  key={entry.topicId}
                  fill={entry.sufficient ? "#3b82f6" : "#9ca3af"}
                  fillOpacity={entry.sufficient ? 1 : 0.4}
                />
              ))}
              <ErrorBar
                dataKey="halfWidth"
                width={8}
                strokeWidth={2}
                stroke="#1e3a8a"
                direction="y"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Per-topic readout — complements the visual with hard numbers and
          surfaces the "n/20" label for insufficient topics. */}
      <ul
        className="mt-2 grid grid-cols-4 gap-2 text-xs"
        data-testid="readiness-legend"
      >
        {data.map((t) => (
          <li
            key={t.topicId}
            className="flex flex-col items-center rounded-md border border-neutral-200 bg-white px-2 py-1 dark:border-neutral-800 dark:bg-ink-surface"
            data-testid={`readiness-topic-${t.topicId}`}
          >
            <span className="font-semibold">{t.label}</span>
            {t.sufficient ? (
              <span className="tabular-nums">
                {Math.round(t.point)}% ± {Math.round(t.halfWidth)}%
              </span>
            ) : (
              <span className="text-neutral-500">{t.nLabel}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadinessChart;

import { useState } from "react";
import {
  Citation,
  EmptyState,
  MarkdownRenderer,
  QuestionCard,
  RatingButtons,
  ReviewedBadge,
  TopicPicker,
  type TopicPickerValue,
} from "../components/shared";
import type { Question } from "../types/content";

/**
 * Dev-only sandbox route that renders each SharedUIKit primitive with mock
 * data so `npm run dev` can visually verify them without pulling in real
 * generated content. Rendered nothing in production bundles.
 */

const MOCK_QUESTION: Question = {
  id: "demo-q-1",
  subtopicId: "2.3",
  stem: "Which of the following is a **debt** security?",
  choices: [
    "Common stock",
    "Preferred stock",
    "Corporate bond",
    "Warrant",
  ],
  answerIndex: 2,
  rationale:
    "A corporate bond represents a loan to the issuer and is a debt security. Common/preferred stock and warrants are equity-related.",
  citation: { source: "NASAA", ref: "2.3.B" },
  difficulty: "easy",
  reviewed: false,
};

const MOCK_MARKDOWN = `# Markdown demo

The Sharpe ratio is $\\text{Sharpe} = \\frac{R_p - R_f}{\\sigma_p}$.

Block math:

$$\\text{CAPM: } E(R_i) = R_f + \\beta_i (E(R_m) - R_f)$$

- First item
- Second item with \`inline code\`

| Col A | Col B |
| --- | --- |
| 1 | 2 |
`;

export default function UIKitDemo() {
  // Guard: never render in production. Demo exists purely for dev visual QA.
  if (!import.meta.env.DEV) return null;

  const [selected, setSelected] = useState<0 | 1 | 2 | 3 | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [lastRating, setLastRating] = useState<1 | 2 | 3 | 4 | null>(null);
  const [topic, setTopic] = useState<TopicPickerValue>("all");

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 p-4">
      <h1 className="text-2xl font-semibold">SharedUIKit demo</h1>

      <Section title="Citation">
        <div className="flex flex-col gap-2">
          <Citation citation={{ source: "NASAA", ref: "1.A" }} />
          <Citation citation={{ source: "SEC", ref: "10b-5" }} />
          <Citation citation={{ source: "IA_ACT", ref: "203" }} />
          <Citation
            citation={{ source: "NASAA_MODEL_RULE", ref: "102(a)" }}
          />
        </div>
      </Section>

      <Section title="ReviewedBadge">
        <div className="flex items-center gap-3">
          <span>reviewed=false:</span> <ReviewedBadge reviewed={false} />
          <span className="ml-4">reviewed=true:</span>{" "}
          <ReviewedBadge reviewed={true} />
          <span className="text-sm text-neutral-500">(nothing rendered)</span>
        </div>
      </Section>

      <Section title="TopicPicker">
        <TopicPicker value={topic} onChange={setTopic} />
        <p className="mt-2 text-sm text-neutral-500">
          Selected: <code>{topic}</code>
        </p>
      </Section>

      <Section title="MarkdownRenderer (with KaTeX + GFM)">
        <MarkdownRenderer>{MOCK_MARKDOWN}</MarkdownRenderer>
      </Section>

      <Section title="QuestionCard">
        <QuestionCard
          question={MOCK_QUESTION}
          selectedIndex={selected}
          revealed={revealed}
          onSelect={(i) => setSelected(i)}
        />
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            className="min-h-[44px] rounded-lg border border-neutral-300 px-4 py-2 dark:border-neutral-700"
            onClick={() => setRevealed((r) => !r)}
          >
            {revealed ? "Hide" : "Reveal"} answer
          </button>
          <button
            type="button"
            className="min-h-[44px] rounded-lg border border-neutral-300 px-4 py-2 dark:border-neutral-700"
            onClick={() => {
              setSelected(null);
              setRevealed(false);
            }}
          >
            Reset
          </button>
        </div>
      </Section>

      <Section title="RatingButtons">
        <RatingButtons onRate={(g) => setLastRating(g)} />
        <p className="mt-2 text-sm text-neutral-500">
          Last rating: <code>{lastRating ?? "none"}</code>
        </p>
      </Section>

      <Section title="EmptyState">
        <EmptyState
          title="No cards due"
          message="You're all caught up. Come back later or start new cards."
          cta={
            <button
              type="button"
              className="min-h-[44px] rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white"
            >
              Start new cards
            </button>
          }
        />
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 className="mb-3 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

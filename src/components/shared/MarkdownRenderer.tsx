import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// KaTeX CSS is scoped to this component intentionally; importing it from a
// global entry file would pull ~23 KB of CSS onto routes that never render
// math. Keeping the import here lets the bundler tree-shake it out of chunks
// that don't reach MarkdownRenderer.
import "katex/dist/katex.min.css";

/**
 * Thin wrapper around `react-markdown` with GFM + math (KaTeX) support.
 *
 * We don't use the `@tailwindcss/typography` plugin — the plan explicitly
 * forbids it to keep the vendor chunk lean. Instead, each element type gets
 * a Tailwind class map via the `components` prop.
 */
const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="my-4 text-xl font-semibold" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="my-3 text-lg font-semibold" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="my-3 text-base font-semibold" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="my-2 text-base font-semibold" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-3 leading-relaxed" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-3 list-disc pl-6" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="my-3 list-decimal pl-6" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="my-1" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-blue-600 underline hover:no-underline dark:text-blue-400"
      {...props}
    />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-3 border-l-4 border-neutral-300 pl-4 italic text-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-neutral-100 px-1 py-0.5 font-mono text-sm dark:bg-neutral-800"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-3 overflow-x-auto rounded bg-neutral-100 p-3 font-mono text-sm dark:bg-neutral-800"
      {...props}
    />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-3 overflow-x-auto">
      <table className="min-w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border border-neutral-300 px-2 py-1 text-left font-semibold dark:border-neutral-700"
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="border border-neutral-300 px-2 py-1 dark:border-neutral-700"
      {...props}
    />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className="my-4 border-neutral-200 dark:border-neutral-800"
      {...props}
    />
  ),
};

export function MarkdownRenderer({ children }: { children: string }) {
  return (
    <div className="max-w-none text-base text-neutral-900 dark:text-ink-text">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={components}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

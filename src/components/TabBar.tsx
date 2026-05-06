import { useState } from "react";
import { NavLink } from "react-router-dom";

type Tab = { to: string; label: string };

const primary: Tab[] = [
  { to: "/", label: "Home" },
  { to: "/learn", label: "Learn" },
  { to: "/cards", label: "Cards" },
  { to: "/quiz", label: "Quiz" },
];

const moreLinks: Tab[] = [
  { to: "/mock", label: "Mock" },
  { to: "/missed", label: "Missed" },
  { to: "/review", label: "Review queue" },
  { to: "/reference", label: "Reference" },
  { to: "/saved", label: "Saved" },
  { to: "/settings", label: "Settings" },
];

export default function TabBar() {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <>
      {moreOpen && (
        <div
          role="dialog"
          aria-label="More"
          className="fixed inset-0 z-40 flex items-end bg-black/40"
          onClick={() => setMoreOpen(false)}
        >
          <div
            className="w-full rounded-t-2xl bg-white p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] dark:bg-ink-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <ul className="flex flex-col">
              {moreLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMoreOpen(false)}
                    className="flex min-h-[44px] items-center rounded-md px-3 text-base hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <nav
        aria-label="Primary"
        data-testid="tab-bar"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-neutral-200 bg-white pb-[env(safe-area-inset-bottom)] dark:border-neutral-800 dark:bg-ink-surface"
      >
        <ul className="mx-auto flex max-w-screen-md items-stretch justify-around">
          {primary.map((tab) => (
            <li key={tab.to} className="flex-1">
              <NavLink
                to={tab.to}
                end={tab.to === "/"}
                className={({ isActive }) =>
                  [
                    "flex min-h-[44px] min-w-[44px] flex-col items-center justify-center py-2 text-xs",
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-neutral-600 dark:text-neutral-400",
                  ].join(" ")
                }
              >
                <span>{tab.label}</span>
              </NavLink>
            </li>
          ))}
          <li className="flex-1">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((v) => !v)}
              className="flex min-h-[44px] min-w-[44px] w-full flex-col items-center justify-center py-2 text-xs text-neutral-600 dark:text-neutral-400"
            >
              <span>More</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

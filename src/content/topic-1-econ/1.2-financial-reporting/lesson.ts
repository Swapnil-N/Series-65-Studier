import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Reading Financial Reports: Statements, Filings, and Audits",
  "bodyMd": "Financial reports are the standardized way companies tell investors how they are doing. For Series 65 candidates, the focus is on understanding what each statement shows, how the statements connect, what an auditor's stamp of approval really means, and which forms public companies must file with the SEC. You do not need to become a CPA. You do need vocabulary precise enough to read client portfolios with a critical eye and to spot the warning signs an investment adviser is expected to catch.\n\n### The Three Core Financial Statements\n\nEvery business produces three primary financial statements, each answering a different question. The form and content of these statements in SEC filings are prescribed by Regulation S-X, while the underlying recognition and measurement rules come from U.S. Generally Accepted Accounting Principles (GAAP) as codified by the Financial Accounting Standards Board (FASB).\n\n**Income statement (profit and loss).** This shows performance *over a period* — a quarter or a fiscal year — by listing revenue, subtracting expenses, and arriving at net income. The basic identity is:\n\n$$\\text{Net Income} = \\text{Revenue} - \\text{COGS} - \\text{Operating Expenses} - \\text{Interest} - \\text{Taxes}$$\n\nNet income is called the \"bottom line\" because it literally sits at the bottom of the statement. Earnings per share (EPS) is derived from it:\n\n$$\\text{EPS} = \\frac{\\text{Net Income} - \\text{Preferred Dividends}}{\\text{Weighted Average Common Shares Outstanding}}$$\n\n**Balance sheet.** A snapshot of the firm *at one moment in time*, structured around the fundamental accounting equation:\n\n$$\\text{Assets} = \\text{Liabilities} + \\text{Stockholders' Equity}$$\n\nAssets are what the company owns (cash, receivables, inventory, plant, intangibles). Liabilities are what it owes (payables, debt, deferred taxes). Equity — also called net worth or book value — is the residual claim of the owners. Where the income statement covers a span, the balance sheet is always \"as of\" a single date.\n\n**Statement of cash flows.** This statement bridges the gap between accrual-basis net income and the actual movement of cash. It is divided into three sections: cash flow from **operating** activities (running the business), cash flow from **investing** activities (buying or selling long-term assets), and cash flow from **financing** activities (issuing or repaying debt and equity, paying dividends). A profitable company can still go bankrupt if it cannot generate cash, which is why the cash flow statement sits beside — not behind — the income statement.\n\n### Cash vs. Accrual Accounting and Audited vs. Unaudited Reports\n\nTwo pairs of terms recur on the exam.\n\n**Cash vs. accrual.** Under **cash-basis** accounting, revenue is recorded when cash is received and expenses when cash is paid; the books mirror a checkbook. Under **accrual-basis** accounting, revenue is recognized when *earned* and expenses when *incurred*, regardless of when cash changes hands. GAAP requires accrual accounting for public companies because it matches revenues to the expenses that generated them. Cash accounting is simpler and is permitted for many small private businesses and certain tax filings, but it can hide the timing of obligations.\n\nA quick illustration: a software firm signs a $120{,}000 one-year service contract on January 1 and collects all of the cash up front. Under cash basis, January revenue is $120{,}000. Under accrual basis, January revenue is only $10{,}000 — one-twelfth of the contract — and the remaining $110{,}000 sits on the balance sheet as *deferred revenue*, a liability, until the service is delivered. The cash inflow is identical; the reported earnings differ dramatically.\n\n**Audited vs. unaudited.** Audited financial statements have been examined by an independent certified public accountant in accordance with Generally Accepted Auditing Standards (GAAS) issued by the American Institute of Certified Public Accountants. For SEC registrants, the audit must follow standards set by the Public Company Accounting Oversight Board (PCAOB), which was created by the Sarbanes-Oxley Act of 2002. Sarbanes-Oxley Section 404 requires management — and, for larger filers, the auditor — to assess and report on internal control over financial reporting. Sarbanes-Oxley Section 302 forces the CEO and CFO to personally certify the accuracy of each periodic report; false certifications carry criminal penalties.\n\nThe auditor's opinion takes one of four forms:\n\n- **Unqualified (clean) opinion** — the statements present fairly, in all material respects, in conformity with GAAP. This is what investors want to see.\n- **Qualified opinion** — the statements are fair *except for* a specific, identified issue (for example, one inventory account could not be verified). The exception is described in a separate explanatory paragraph.\n- **Adverse opinion** — the statements are *not* fairly presented. A serious red flag.\n- **Disclaimer of opinion** — the auditor cannot form an opinion, usually because of a scope limitation or substantial doubt about the firm's ability to continue as a going concern.\n\nUnaudited statements — such as the quarterly numbers in Form 10-Q — are *reviewed* but not audited; investors should weight them accordingly.\n\n### SEC Filings and the Annual Report\n\nSection 13 of the Securities Exchange Act of 1934 requires reporting issuers to file periodic reports so that the public has current information about them. The three most important forms for the Series 65 are:\n\n- **Form 10-K** — the annual report filed with the SEC. It contains audited financial statements, Management's Discussion and Analysis (MD&A), risk factors, and the non-financial disclosures required by Regulation S-K. Large accelerated filers must file within 60 days of fiscal year-end.\n- **Form 10-Q** — the quarterly report. Financials are unaudited but reviewed; due 40 days after quarter-end for accelerated filers. Only three 10-Qs are filed per year because the fourth quarter is rolled into the 10-K.\n- **Form 8-K** — the \"current report\" used to disclose material events (CEO change, acquisition, bankruptcy, auditor resignation, ratings downgrade) generally within four business days.\n\nThe glossy, photo-laden **annual report to shareholders** that arrives in the mail is a marketing document. It usually includes a chairman's letter, a discussion of strategy, and the audited financial statements, but it is *not* the same filing as the 10-K. Many public companies satisfy both requirements by wrapping the 10-K inside the annual report. An investment adviser reviewing a client's holdings should pull the 10-K and read the audit opinion, not rely solely on glossy commentary.\n\n### Worked Example: Reading the Numbers Together\n\nConsider Acme Corp's year-end figures (in millions):\n\n| Item | Value |\n|---|---|\n| Revenue | $500 |\n| COGS + Operating Expenses | $410 |\n| Interest Expense | $10 |\n| Taxes (21%) | $16.8 |\n| Total Assets | $800 |\n| Total Liabilities | $500 |\n| Weighted Avg. Shares | 50 million |\n\nPretax income is $500 - 410 - 10 = \\$80$ million. Tax at 21% is $0.21 \\times 80 = \\$16.8$ million, so net income is $\\$63.2$ million. Earnings per share is $63.2 / 50 = \\$1.264$. Stockholders' equity equals $800 - 500 = \\$300$ million, giving a book value per share of $300 / 50 = \\$6.00$.\n\nNow suppose Acme's auditor issues a **qualified** opinion noting that inventory at a foreign subsidiary could not be confirmed. The income statement still reports $63.2 million, but a careful adviser flags the qualification, reads the explanatory paragraph, and considers whether the unconfirmed inventory could materially overstate assets — which would shrink the $300 million equity figure and inflate the price-to-book ratio. The audit opinion is not boilerplate; it is the lens through which the numbers should be read.\n\n### Summary\n\nThe income statement, balance sheet, and cash flow statement together describe performance, position, and liquidity. Accrual accounting under GAAP drives recognition; cash accounting is simpler but can mislead. An unqualified auditor's opinion issued under PCAOB and AICPA standards is the gold standard, while qualified, adverse, and disclaimer opinions are escalating warning signs. Form 10-K, Form 10-Q, and Form 8-K — required by Section 13 of the Exchange Act and shaped by Regulations S-X and S-K — are the filings a Series 65 candidate must recognize on test day.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "SEC",
      "ref": "Regulation S-X"
    },
    {
      "source": "SEC",
      "ref": "Regulation S-K"
    },
    {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 13"
    },
    {
      "source": "SEC",
      "ref": "Form 10-K"
    },
    {
      "source": "SEC",
      "ref": "Form 10-Q"
    },
    {
      "source": "SEC",
      "ref": "Form 8-K"
    },
    {
      "source": "SEC",
      "ref": "Sarbanes-Oxley Act of 2002"
    },
    {
      "source": "SEC",
      "ref": "Sarbanes-Oxley Section 302"
    },
    {
      "source": "SEC",
      "ref": "Sarbanes-Oxley Section 404"
    },
    {
      "source": "OTHER",
      "ref": "Generally Accepted Accounting Principles"
    },
    {
      "source": "OTHER",
      "ref": "GAAP"
    },
    {
      "source": "OTHER",
      "ref": "Generally Accepted Auditing Standards"
    },
    {
      "source": "OTHER",
      "ref": "GAAS"
    },
    {
      "source": "OTHER",
      "ref": "Financial Accounting Standards Board"
    },
    {
      "source": "OTHER",
      "ref": "American Institute of Certified Public Accountants"
    },
    {
      "source": "OTHER",
      "ref": "Public Company Accounting Oversight Board"
    },
    {
      "source": "OTHER",
      "ref": "PCAOB"
    }
  ],
  "subtopicId": "1.2",
  "reviewed": false
};

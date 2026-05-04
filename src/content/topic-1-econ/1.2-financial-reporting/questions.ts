import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Which financial statement reports a company's revenues, expenses, and net income over a specified period?",
    "choices": [
      "Balance sheet",
      "Income statement",
      "Statement of cash flows",
      "Statement of stockholders' equity"
    ],
    "answerIndex": 1,
    "rationale": "The income statement (also called the profit and loss statement) summarizes revenues earned and expenses incurred over a period to arrive at net income. The balance sheet is the top distractor but it is incorrect because the balance sheet reports financial position at a single point in time, not flows over a period.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "easy",
    "id": "83636992485f",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "The balance sheet reports a company's financial position based on which fundamental accounting equation?",
    "choices": [
      "Revenues - Expenses = Net Income",
      "Assets = Liabilities + Stockholders' Equity",
      "Cash In - Cash Out = Net Cash Flow",
      "Current Assets - Current Liabilities = Working Capital"
    ],
    "answerIndex": 1,
    "rationale": "The balance sheet is anchored by the accounting identity Assets = Liabilities + Stockholders' Equity, showing what a company owns, owes, and the residual claim of owners. The first choice is the income statement equation, and while the working-capital formula is derived from balance-sheet items, it is not the underlying equation that defines the statement.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "easy",
    "id": "7ddb682536a8",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "The statement of cash flows is divided into which three sections?",
    "choices": [
      "Revenue, expense, and net income",
      "Operating, investing, and financing activities",
      "Current, long-term, and contingent activities",
      "Assets, liabilities, and equity activities"
    ],
    "answerIndex": 1,
    "rationale": "Under GAAP (FASB ASC 230), the statement of cash flows is organized into operating, investing, and financing activities. Choice A describes income-statement components and is a common distractor; it does not reflect the cash-flow categorization required by GAAP.",
    "citation": {
      "source": "OTHER",
      "ref": "FASB Accounting Standards Codification"
    },
    "difficulty": "easy",
    "id": "4ae308095ed0",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Which auditor's opinion indicates that the financial statements are presented fairly, in all material respects, in conformity with GAAP?",
    "choices": [
      "Qualified opinion",
      "Adverse opinion",
      "Unqualified (clean) opinion",
      "Disclaimer of opinion"
    ],
    "answerIndex": 2,
    "rationale": "An unqualified opinion - often called a 'clean' opinion - is the most favorable conclusion an auditor can issue, signaling that statements conform with GAAP without material exception. A qualified opinion is the closest distractor but it indicates that, except for a specifically identified issue, the statements are fairly presented - it is not a clean opinion.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAS"
    },
    "difficulty": "easy",
    "id": "d255ceedf2f4",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Public companies registered under the Securities Exchange Act of 1934 must file which form as their annual report with the SEC?",
    "choices": [
      "Form 10-Q",
      "Form 8-K",
      "Form 10-K",
      "Form S-1"
    ],
    "answerIndex": 2,
    "rationale": "Form 10-K is the SEC's annual report filing required of domestic reporting issuers and contains audited financial statements and management's discussion and analysis. Form 10-Q is the quarterly report (unaudited) and is the most common distractor because both contain financial statements; the 10-K is annual and audited while the 10-Q is interim.",
    "citation": {
      "source": "SEC",
      "ref": "Form 10-K"
    },
    "difficulty": "easy",
    "id": "7e9624b1aa2b",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "How frequently must a domestic reporting issuer file Form 10-Q with the SEC?",
    "choices": [
      "Annually",
      "Semi-annually",
      "Quarterly for the first three quarters of each fiscal year",
      "Monthly"
    ],
    "answerIndex": 2,
    "rationale": "Form 10-Q is filed for the first three fiscal quarters; the fourth quarter results are folded into the annual Form 10-K, so only three 10-Qs are filed per year. 'Semi-annually' is the closest distractor because some non-U.S. issuers report on that cadence, but U.S. domestic issuers report quarterly via Form 10-Q.",
    "citation": {
      "source": "SEC",
      "ref": "Form 10-Q"
    },
    "difficulty": "easy",
    "id": "dc8837dcebd9",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Which SEC form is used to disclose the occurrence of significant material events between periodic filings, such as a CEO change or bankruptcy?",
    "choices": [
      "Form 10-K",
      "Form 8-K",
      "Form 10-Q",
      "Form S-1"
    ],
    "answerIndex": 1,
    "rationale": "Form 8-K is the 'current report' used to announce major events that shareholders should know about between regularly scheduled 10-Q and 10-K filings. Form 10-Q is a popular distractor because both are interim filings, but the 10-Q is a periodic quarterly financial report rather than an event-driven disclosure.",
    "citation": {
      "source": "SEC",
      "ref": "Form 8-K"
    },
    "difficulty": "easy",
    "id": "6a0e4fbf04c9",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Under cash basis accounting, revenue is recognized when:",
    "choices": [
      "Goods are shipped or services are performed",
      "Cash is actually received",
      "An invoice is sent to the customer",
      "The customer signs a contract"
    ],
    "answerIndex": 1,
    "rationale": "Cash basis accounting recognizes revenue only when cash is received and expenses only when cash is paid, regardless of when services are performed. 'Goods shipped or services performed' is the top distractor because that describes the accrual basis under GAAP, not the cash basis.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "easy",
    "id": "46bbb13e2d68",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Which body inspects and oversees the auditors of U.S. public companies?",
    "choices": [
      "FINRA",
      "PCAOB",
      "FASB",
      "AICPA"
    ],
    "answerIndex": 1,
    "rationale": "The Public Company Accounting Oversight Board (PCAOB) was created by Sarbanes-Oxley to register, inspect, and discipline auditors of public companies. The AICPA is the closest distractor because it sets standards for auditors of private entities and offers credentials, but it does not oversee public-company auditors - that authority shifted to the PCAOB in 2002.",
    "citation": {
      "source": "OTHER",
      "ref": "PCAOB"
    },
    "difficulty": "easy",
    "id": "f41aad2ed1cf",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "An annual report sent directly to shareholders of a public company typically includes which of the following?",
    "choices": [
      "Audited financial statements and management's discussion and analysis",
      "Only the proxy statement",
      "Only Form 8-K event disclosures",
      "A list of customer accounts"
    ],
    "answerIndex": 0,
    "rationale": "The annual report to shareholders includes audited financial statements, MD&A, and the auditor's report, often distributed alongside or in conjunction with the Form 10-K. The proxy statement (Schedule 14A) is the closest distractor because it accompanies the annual report at meeting time, but the proxy itself is a separate solicitation document, not the annual report.",
    "citation": {
      "source": "SEC",
      "ref": "Form 10-K"
    },
    "difficulty": "easy",
    "id": "d8d79d625b1a",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "An auditor issues a qualified opinion when:",
    "choices": [
      "The financial statements contain pervasive material misstatements",
      "Except for a specific, isolated issue, the financial statements are fairly presented",
      "The auditor cannot obtain sufficient evidence to form an opinion at all",
      "Financial statements are perfectly compliant with GAAP"
    ],
    "answerIndex": 1,
    "rationale": "A qualified opinion indicates the statements are fairly presented except for a specifically identified, material but not pervasive issue (e.g., a single GAAP departure or scope limitation). Choice A describes an adverse opinion and is the top distractor because students often confuse 'qualified' with 'adverse'; an adverse opinion is reserved for pervasive misstatements.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAS"
    },
    "difficulty": "medium",
    "id": "6572fb20769c",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "An adverse audit opinion most strongly signals which conclusion?",
    "choices": [
      "The financial statements are reliable and conform to GAAP",
      "The auditor was unable to gather sufficient evidence to form an opinion",
      "The financial statements are materially misstated and do NOT fairly present the company's financial position",
      "The auditor performed only a review, not a full audit"
    ],
    "answerIndex": 2,
    "rationale": "An adverse opinion is the most negative audit conclusion: it states that the financial statements are not fairly presented in accordance with GAAP because of pervasive material misstatements. A 'disclaimer of opinion' (choice B) is the top distractor because both are unfavorable, but a disclaimer reflects insufficient evidence rather than a definitive conclusion of misstatement.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAS"
    },
    "difficulty": "medium",
    "id": "c7484c2e1e37",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Working capital is calculated as:",
    "choices": [
      "Total assets minus total liabilities",
      "Current assets minus current liabilities",
      "Cash plus marketable securities",
      "Stockholders' equity minus retained earnings"
    ],
    "answerIndex": 1,
    "rationale": "Working capital equals current assets minus current liabilities and is a key short-term liquidity measure. 'Total assets minus total liabilities' is the most common distractor but that formula yields stockholders' equity (net worth), not working capital.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "medium",
    "id": "90a88f9533af",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "On the income statement, operating income differs from net income because operating income:",
    "choices": [
      "Includes the effects of interest expense and income taxes",
      "Excludes interest expense, taxes, and certain non-operating items",
      "Equals revenues minus cost of goods sold only",
      "Is calculated after preferred dividends are deducted"
    ],
    "answerIndex": 1,
    "rationale": "Operating income (EBIT) reflects results from core business operations and excludes non-operating items like interest expense and income tax. Choice C is the top distractor because that formula gives gross profit (revenue - COGS), which is calculated before operating expenses are subtracted to yield operating income.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "medium",
    "id": "36458845474c",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Which item would normally be classified within cash flows from financing activities on the statement of cash flows?",
    "choices": [
      "Cash collected from customers",
      "Cash paid for new manufacturing equipment",
      "Proceeds from issuing common stock",
      "Cash paid to suppliers for inventory"
    ],
    "answerIndex": 2,
    "rationale": "Financing activities include cash flows from raising or repaying capital - issuing or repurchasing equity, issuing or paying down debt, and paying dividends. Cash paid for equipment (choice B) is the top distractor because students confuse it with financing, but capital expenditures fall under investing activities, not financing.",
    "citation": {
      "source": "OTHER",
      "ref": "FASB Accounting Standards Codification"
    },
    "difficulty": "medium",
    "id": "c2af18363fe0",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Which item is classified within cash flows from investing activities?",
    "choices": [
      "Dividends paid to shareholders",
      "Cash received from selling long-term equipment",
      "Cash received from customers for sales",
      "Issuance of long-term bonds"
    ],
    "answerIndex": 1,
    "rationale": "Investing activities include cash flows from buying or selling long-term assets such as PP&E and securities of other entities. The closest distractor is dividends paid - many beginners assume dividend payouts are 'investing,' but they are explicitly classified as a financing outflow because they relate to the company's capital structure.",
    "citation": {
      "source": "OTHER",
      "ref": "FASB Accounting Standards Codification"
    },
    "difficulty": "medium",
    "id": "cecf096bc951",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "GAAP differs from IFRS primarily in that GAAP is:",
    "choices": [
      "Principles-based and used internationally",
      "Rules-based and applied to financial reporting in the United States",
      "Mandatory in all member countries of the European Union",
      "Issued exclusively by the Securities and Exchange Commission"
    ],
    "answerIndex": 1,
    "rationale": "Generally Accepted Accounting Principles (GAAP) is the rules-based standard set by the FASB and used in the United States. IFRS is the principles-based international standard - swapping these descriptions is the most common distractor; IFRS, not GAAP, is principles-based and applied internationally.",
    "citation": {
      "source": "OTHER",
      "ref": "Generally Accepted Accounting Principles"
    },
    "difficulty": "medium",
    "id": "0d2975e62501",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Which organization is the primary private-sector body responsible for establishing financial accounting and reporting standards in the United States?",
    "choices": [
      "FASB",
      "SEC",
      "PCAOB",
      "IRS"
    ],
    "answerIndex": 0,
    "rationale": "The Financial Accounting Standards Board (FASB) issues U.S. GAAP through the Accounting Standards Codification. The SEC is the closest distractor because it has statutory authority over public-company financial reporting and oversees the FASB, but it has historically delegated standard-setting to the FASB rather than writing GAAP itself.",
    "citation": {
      "source": "OTHER",
      "ref": "Financial Accounting Standards Board"
    },
    "difficulty": "medium",
    "id": "89f15b67aa9b",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Sarbanes-Oxley Section 302 requires which group to personally certify the accuracy of corporate financial reports?",
    "choices": [
      "The internal audit committee",
      "The company's outside legal counsel",
      "The CEO and CFO",
      "The lead independent director"
    ],
    "answerIndex": 2,
    "rationale": "SOX Section 302 requires the principal executive officer (CEO) and principal financial officer (CFO) to personally certify in each periodic SEC filing that the report does not contain material misstatements and that internal controls have been evaluated. The audit committee (choice A) is a top distractor because it oversees financial reporting, but it is the CEO and CFO - not the committee - who must sign the Section 302 certification.",
    "citation": {
      "source": "SEC",
      "ref": "Sarbanes-Oxley Section 302"
    },
    "difficulty": "medium",
    "id": "66ec70a0e7cb",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "The Public Company Accounting Oversight Board (PCAOB) was established by which legislation?",
    "choices": [
      "Securities Exchange Act of 1934",
      "Investment Advisers Act of 1940",
      "Sarbanes-Oxley Act of 2002",
      "Dodd-Frank Wall Street Reform and Consumer Protection Act"
    ],
    "answerIndex": 2,
    "rationale": "Sarbanes-Oxley, enacted in 2002 in response to the Enron and WorldCom scandals, created the PCAOB to oversee auditors of public companies. Dodd-Frank is the closest distractor because it also significantly expanded financial regulation, but it focused on systemic risk and investment-adviser oversight, not on creating the PCAOB.",
    "citation": {
      "source": "SEC",
      "ref": "Sarbanes-Oxley Act of 2002"
    },
    "difficulty": "medium",
    "id": "9b1c1546128e",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "A reviewed financial statement differs from an audited financial statement in that a review:",
    "choices": [
      "Provides reasonable assurance that the statements conform to GAAP",
      "Provides only limited assurance based on inquiries and analytical procedures",
      "Provides no assurance whatsoever",
      "Is more rigorous than an audit"
    ],
    "answerIndex": 1,
    "rationale": "A review provides limited (negative) assurance through inquiries and analytical procedures rather than the substantive testing performed in an audit. Choice C is the top distractor because students confuse 'review' with 'compilation'; a compilation provides no assurance, while a review provides limited assurance - they are not the same engagement.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAS"
    },
    "difficulty": "medium",
    "id": "cfae9d78e55c",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Retained earnings appears in which financial statement?",
    "choices": [
      "Income statement",
      "Statement of cash flows",
      "Balance sheet, within stockholders' equity",
      "Schedule of accounts payable"
    ],
    "answerIndex": 2,
    "rationale": "Retained earnings is the cumulative net income that has not been distributed as dividends and appears in the stockholders' equity section of the balance sheet. The income statement (choice A) is the closest distractor because retained earnings are derived from net income, but the balance sheet itself reports the running balance of retained earnings.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "medium",
    "id": "1ea3f6698fb0",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Under accrual accounting, an expense should be recognized when:",
    "choices": [
      "Cash is paid",
      "It is incurred to generate the related revenue, regardless of when cash is paid",
      "The fiscal year ends",
      "It is approved by management"
    ],
    "answerIndex": 1,
    "rationale": "Accrual accounting applies the matching principle: expenses are recognized when incurred to generate revenue, regardless of when cash changes hands. 'Cash is paid' is the most common distractor because it describes the cash basis of accounting, not the accrual basis required by GAAP for most public companies.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "medium",
    "id": "932cbc8cfbcc",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following events would most likely trigger a Form 8-K filing?",
    "choices": [
      "The completion of normal quarterly bookkeeping",
      "Annual reconciliation of vendor accounts",
      "The resignation of the company's CEO",
      "Payroll processing for the second quarter"
    ],
    "answerIndex": 2,
    "rationale": "Form 8-K reports unscheduled material events such as departures of executive officers, bankruptcies, acquisitions, and changes in auditors. Routine bookkeeping or payroll (choices A, B, D) are not material events to investors and would not trigger an 8-K; the resignation of a principal officer is specifically enumerated as a triggering event.",
    "citation": {
      "source": "SEC",
      "ref": "Form 8-K"
    },
    "difficulty": "medium",
    "id": "7c98a5cdd669",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Footnotes (notes to the financial statements) are most useful to an analyst because they:",
    "choices": [
      "Restate the income statement in a different format",
      "Disclose accounting policies, contingencies, and details that supplement the statements",
      "Replace the auditor's report",
      "Are required only for non-public entities"
    ],
    "answerIndex": 1,
    "rationale": "Footnotes disclose accounting policies (e.g., depreciation method, revenue recognition), commitments, contingencies, and other information that supplements but does not replace the primary statements. Choice A is the top distractor because students sometimes assume the notes are alternate income statement views, but the notes are explanatory disclosures, not restated statements.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "medium",
    "id": "c62bc0424a63",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "An auditor's report that includes a 'going concern' qualification means:",
    "choices": [
      "The company will definitely go bankrupt within twelve months",
      "There is substantial doubt about the company's ability to continue operating for a reasonable period",
      "The auditor has refused to express any opinion at all",
      "The financial statements are completely free of material misstatements"
    ],
    "answerIndex": 1,
    "rationale": "A going-concern qualification signals substantial doubt about the company's ability to continue operations for a reasonable period, typically the next year, but it is not a guarantee of bankruptcy. Choice A is the top distractor because investors often interpret going concern as a death knell, but it is a probabilistic warning, not a certainty.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAS"
    },
    "difficulty": "medium",
    "id": "6e0ebe12ceb6",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Which form provides the SEC with the most comprehensive annual disclosure, including audited financial statements and management's discussion and analysis?",
    "choices": [
      "Form 10-Q",
      "Form 8-K",
      "Form 10-K",
      "Schedule 13D"
    ],
    "answerIndex": 2,
    "rationale": "Form 10-K is the comprehensive annual disclosure containing audited financial statements, MD&A, risk factors, and other narrative items prescribed by Regulation S-K. Schedule 13D is a top distractor only for unfamiliar candidates - it is filed by 5% beneficial owners, not by issuers, and contains no company-level financial reporting.",
    "citation": {
      "source": "SEC",
      "ref": "Form 10-K"
    },
    "difficulty": "medium",
    "id": "ef66993e8ff1",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Which characteristic best describes audited financial statements?",
    "choices": [
      "They are compiled by management without any third-party review",
      "They have been subject to substantive testing by an independent accountant who provides an opinion",
      "They are guaranteed to be free from any error",
      "They are required only for private companies"
    ],
    "answerIndex": 1,
    "rationale": "Audited statements are tested by an independent accountant who issues an opinion on whether the statements conform to GAAP in all material respects. Choice C is a tempting distractor but is wrong - an audit provides reasonable assurance, not absolute assurance, and immaterial errors may still exist.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAS"
    },
    "difficulty": "medium",
    "id": "2c813af22b7a",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Which SEC regulation prescribes the form and content of financial statements that must be filed with the SEC?",
    "choices": [
      "Regulation S-K",
      "Regulation S-X",
      "Regulation FD",
      "Regulation BI"
    ],
    "answerIndex": 1,
    "rationale": "Regulation S-X governs the form, content, and presentation of financial statements filed with the SEC, including periods to be covered and required schedules. Regulation S-K is the closest distractor because it prescribes non-financial disclosure (MD&A, risk factors, business descriptions); the financial-statement rules live in Reg S-X.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation S-X"
    },
    "difficulty": "hard",
    "id": "bd6afcde20b1",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Sarbanes-Oxley Section 404 requires public companies to:",
    "choices": [
      "Disclose any insider stock sales within two business days",
      "Establish, document, and assess internal controls over financial reporting",
      "Limit auditor non-audit services for clients",
      "Register privately offered securities with the SEC"
    ],
    "answerIndex": 1,
    "rationale": "SOX Section 404 mandates that management establish and assess internal controls over financial reporting, with the external auditor attesting to the effectiveness of those controls for accelerated filers. Choice A describes the Section 16 two-day insider reporting rule under the Exchange Act, not SOX 404, and is the top distractor for examinees who confuse SOX provisions with insider-trading rules.",
    "citation": {
      "source": "SEC",
      "ref": "Sarbanes-Oxley Section 404"
    },
    "difficulty": "hard",
    "id": "0d3d863eafe6",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Under the indirect method, the operating activities section of the statement of cash flows BEGINS with which figure?",
    "choices": [
      "Total revenue",
      "Net income",
      "Cash collected from customers",
      "Total operating expenses"
    ],
    "answerIndex": 1,
    "rationale": "Under the indirect method (the most commonly used in practice), the operating section begins with net income and reconciles it to cash from operations by adding back non-cash items (e.g., depreciation) and adjusting for changes in working capital. 'Cash collected from customers' is the top distractor because it is the starting point under the direct method, not the indirect method.",
    "citation": {
      "source": "OTHER",
      "ref": "FASB Accounting Standards Codification"
    },
    "difficulty": "hard",
    "id": "bec487ae1e57",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Which auditor's opinion is issued when the auditor cannot obtain sufficient appropriate audit evidence to form a basis for an opinion?",
    "choices": [
      "Unqualified opinion",
      "Qualified opinion",
      "Adverse opinion",
      "Disclaimer of opinion"
    ],
    "answerIndex": 3,
    "rationale": "A disclaimer of opinion is issued when scope limitations are so pervasive that the auditor cannot obtain sufficient appropriate evidence to express any opinion. The top distractor is an adverse opinion, but an adverse opinion is reserved for cases where the auditor concludes that statements ARE materially misstated; a disclaimer means the auditor cannot conclude either way.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAS"
    },
    "difficulty": "hard",
    "id": "9b632f667a98",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Auditor independence under Sarbanes-Oxley generally requires that:",
    "choices": [
      "The audit firm provide both bookkeeping and audit services to the same public-company client",
      "Lead audit partners rotate off public-company audit engagements at least every five years",
      "Auditors be employees of the audit committee",
      "Auditors maintain ownership in the client's stock"
    ],
    "answerIndex": 1,
    "rationale": "SOX requires lead and concurring audit partners on public-company audits to rotate off engagements at least every five years to preserve independence. Choice A is the top distractor because pre-SOX firms often combined services, but SOX expressly prohibits an auditor from providing certain non-audit services - including bookkeeping - to public-company audit clients.",
    "citation": {
      "source": "SEC",
      "ref": "Sarbanes-Oxley Act of 2002"
    },
    "difficulty": "hard",
    "id": "f0b896f7eb32",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "A subsequent event that provides evidence about conditions that existed at the balance-sheet date is generally:",
    "choices": [
      "Ignored entirely under GAAP",
      "Recognized through adjustment to the financial statements",
      "Disclosed only in the auditor's letter to management",
      "Recorded in the next year's financial statements only"
    ],
    "answerIndex": 1,
    "rationale": "Recognized (Type 1) subsequent events provide additional evidence about conditions that existed at the balance-sheet date and require adjustment to the financial statements. The top distractor (choice C) is incorrect because management's letter is not the proper vehicle - GAAP requires adjustment in the financial statements themselves for Type 1 events; non-recognized (Type 2) events are disclosed in the notes.",
    "citation": {
      "source": "OTHER",
      "ref": "FASB Accounting Standards Codification"
    },
    "difficulty": "hard",
    "id": "5b99ba6e9f8b",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Depreciation expense recorded under the indirect method on the statement of cash flows is added back to net income because depreciation:",
    "choices": [
      "Increases the company's tax liability",
      "Is a non-cash expense that reduces net income but does not consume cash in the period",
      "Represents a cash outflow that has not yet been paid",
      "Is a financing-activity adjustment, not an operating one"
    ],
    "answerIndex": 1,
    "rationale": "Depreciation is a non-cash expense - it allocates the cost of long-lived assets but does not require cash in the current period - so it is added back to net income to reconcile to cash from operations under the indirect method. Choice C is the top distractor because students mistakenly view depreciation as deferred cash; in fact, the cash outflow occurred when the asset was purchased and recorded as an investing outflow then.",
    "citation": {
      "source": "OTHER",
      "ref": "FASB Accounting Standards Codification"
    },
    "difficulty": "hard",
    "id": "95625136a7fb",
    "subtopicId": "1.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following is a key reason a small private business might use cash basis accounting rather than accrual accounting?",
    "choices": [
      "It is required for all SEC-registered issuers",
      "It produces more conservative financial statements compliant with GAAP",
      "It is simpler to maintain and may align with the business's tax reporting needs",
      "It must be used by any business audited under GAAS"
    ],
    "answerIndex": 2,
    "rationale": "Cash basis is simpler to administer and often aligns with how very small businesses track activity for tax purposes - the IRS allows cash-method accounting for many small taxpayers. Choice B is the top distractor because while cash basis is simpler, it is generally NOT considered GAAP-compliant; only accrual accounting satisfies GAAP for most reporting entities.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "9d80a2ae65f1",
    "subtopicId": "1.2",
    "reviewed": false
  }
];

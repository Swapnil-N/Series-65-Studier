import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Analytical Methods: Time Value of Money, Statistics, Ratios, and Valuation",
  "bodyMd": "The Series 65 expects you to perform basic calculations and, more importantly, to interpret what the numbers mean. This lesson covers four toolkits: time value of money (TVM), descriptive statistics and risk measures, balance-sheet ratios, and valuation multiples. None of the math is heavy -- most of it is arithmetic plus exponentiation -- but you must know which tool fits which question.\n\n### Time Value of Money: FV, NPV, and IRR\n\nThe core idea is that a dollar today is worth more than a dollar tomorrow because it can be invested. **Future value** answers, \"If I invest a lump sum today at a known rate, what will it grow to?\" With $PV$ as the present value, $r$ as the periodic rate, and $n$ as the number of compounding periods:\n\n$$FV = PV \\times (1 + r)^n$$\n\nIf interest compounds more than once per period, divide $r$ by the number of compounds and multiply $n$ by it.\n\n**Net present value** discounts an entire stream of expected cash flows ($CF_t$) by a chosen rate $r$ (often the investor's required return or the project's cost of capital):\n\n$$NPV = \\sum_{t=0}^{n} \\frac{CF_t}{(1 + r)^t}$$\n\nA positive NPV means the discounted inflows exceed the initial outlay at the chosen rate, so the investment should add value. A negative NPV means it destroys value at that rate.\n\n**Internal rate of return** is the discount rate that drives NPV to exactly zero:\n\n$$0 = \\sum_{t=0}^{n} \\frac{CF_t}{(1 + IRR)^t}$$\n\nIRR is solved iteratively -- a financial calculator or spreadsheet handles it. Use IRR to compare a project's implied yield to a hurdle rate. If IRR exceeds the required return, the project is acceptable; if it is below, it is not.\n\n### Descriptive Statistics and Risk Measures\n\nDescriptive statistics summarize a distribution of returns. Each of the following should be recognized on sight.\n\n- **Mean** is the arithmetic average. For returns $R_1, R_2, \\ldots, R_n$: $\\bar{R} = \\frac{1}{n}\\sum R_i$.\n- **Median** is the middle value when observations are sorted; it is less distorted by outliers than the mean.\n- **Mode** is the most frequently occurring value.\n- **Range** is the largest observation minus the smallest. It is a crude measure of dispersion.\n- **Standard deviation** ($\\sigma$) measures how widely returns are scattered around the mean and serves as the standard proxy for total risk in modern portfolio theory:\n\n$$\\sigma = \\sqrt{\\frac{1}{n}\\sum_{i=1}^{n}(R_i - \\bar{R})^2}$$\n\n- **Beta** ($\\beta$) measures a security's sensitivity to overall market movements. The market itself has $\\beta = 1$. A stock with $\\beta = 1.3$ is expected to move roughly 1.3% for every 1% move in the market; with $\\beta = 0.7$, only 0.7%. Beta captures *systematic* (non-diversifiable) risk.\n- **Alpha** ($\\alpha$) is the portion of return that cannot be explained by exposure to the market. Using the Capital Asset Pricing Model, expected return is $R_f + \\beta (R_m - R_f)$; alpha is the realized return minus this expected return. Positive alpha indicates outperformance on a risk-adjusted basis.\n- **Sharpe ratio** measures excess return per unit of total risk:\n\n$$\\text{Sharpe} = \\frac{R_p - R_f}{\\sigma_p}$$\n\nA higher Sharpe ratio indicates a better return for the volatility taken. Because the denominator is total standard deviation, Sharpe is most useful for evaluating an entire portfolio rather than a single security held inside a diversified one.\n\n- **Correlation** ($\\rho$) ranges from $-1$ to $+1$ and measures how two return series move together. Combining assets with low or negative correlation reduces portfolio standard deviation -- the central insight of diversification.\n\n### Financial Ratios from the Balance Sheet\n\nThese ratios test a company's ability to meet short-term and long-term obligations. They are computed from financial statements prepared under generally accepted accounting principles.\n\n- **Current ratio** measures short-term liquidity:\n\n$$\\text{Current Ratio} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$$\n\nA ratio above 1 means current assets cover current liabilities. Industry norms vary; many manufacturers target 2.0 or higher.\n\n- **Quick ratio** (acid-test) excludes inventory because inventory may not convert quickly to cash:\n\n$$\\text{Quick Ratio} = \\frac{\\text{Cash} + \\text{Marketable Securities} + \\text{Receivables}}{\\text{Current Liabilities}}$$\n\n- **Debt-to-equity** measures leverage:\n\n$$\\text{D/E} = \\frac{\\text{Total Liabilities}}{\\text{Shareholders' Equity}}$$\n\nHigher D/E means more reliance on borrowed capital, which amplifies both potential returns and bankruptcy risk. Acceptable D/E varies by industry; utilities run higher, technology firms typically lower.\n\n### Valuation Multiples: P/E and P/B\n\n- **Price-to-earnings (P/E)**:\n\n$$\\text{P/E} = \\frac{\\text{Price per Share}}{\\text{Earnings per Share}}$$\n\nA P/E of 20 means investors pay $\\$20$ today for each $\\$1$ of current annual earnings. High P/E ratios imply growth expectations; low P/E ratios may signal a value opportunity -- or deteriorating fundamentals.\n\n- **Price-to-book (P/B)**:\n\n$$\\text{P/B} = \\frac{\\text{Price per Share}}{\\text{Book Value per Share}}$$\n\nBook value per share is shareholders' equity divided by shares outstanding. A P/B below 1 means the market prices the company at less than the accounting value of its net assets, common for distressed firms or asset-heavy industries.\n\n### Worked Example\n\nA client is evaluating a small project: invest $\\$10{,}000$ today, receive $\\$4{,}000$ at the end of year 1, $\\$4{,}500$ at the end of year 2, and $\\$3{,}500$ at the end of year 3. The required return is 8%.\n\nCompute NPV by discounting each inflow:\n\n- Year 1: $\\$4{,}000 / 1.08 = \\$3{,}703.70$\n- Year 2: $\\$4{,}500 / 1.08^2 = \\$3{,}858.02$\n- Year 3: $\\$3{,}500 / 1.08^3 = \\$2{,}778.86$\n- Sum of discounted inflows: $\\$10{,}340.58$\n- $NPV = \\$10{,}340.58 - \\$10{,}000 = \\$340.58$\n\nNPV is positive at 8%, so the project beats the hurdle. The IRR -- the rate that drives NPV to zero -- is approximately 9.8% (a calculator iterates to find it). Because IRR is greater than the required return, the project is acceptable.\n\nNow suppose a stock returned 12% over the past year while the risk-free rate was 4%, the market returned 10%, and the stock's beta was 1.5. CAPM predicts an expected return of $4\\% + 1.5 \\times (10\\% - 4\\%) = 13\\%$. Alpha is $12\\% - 13\\% = -1\\%$ -- the stock underperformed on a risk-adjusted basis even though the absolute return was respectable. If the portfolio's standard deviation was 16%, its Sharpe ratio is $(12 - 4) / 16 = 0.50$.\n\n### Summary\n\nTime value of money tools (FV, NPV, IRR) translate cash flows across time. Descriptive statistics describe a return distribution; standard deviation, beta, alpha, Sharpe ratio, and correlation translate that distribution into risk and risk-adjusted performance. Balance-sheet ratios (current, quick, debt-to-equity) measure liquidity and leverage. P/E and P/B describe how the market values earnings and net assets. For the exam, memorize each formula and -- more importantly -- be ready to interpret what a high or low value implies.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "NASAA",
      "ref": "Section I"
    },
    {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    {
      "source": "OTHER",
      "ref": "Markowitz (1952)"
    },
    {
      "source": "OTHER",
      "ref": "Generally Accepted Accounting Principles"
    },
    {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    }
  ],
  "subtopicId": "1.3",
  "reviewed": false
};

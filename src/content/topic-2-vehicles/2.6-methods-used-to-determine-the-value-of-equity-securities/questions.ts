import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "An analyst who studies a company's income statement, balance sheet, management quality, and competitive position to estimate a stock's intrinsic value is engaged primarily in:",
    "choices": [
      "Technical analysis",
      "Fundamental analysis",
      "Sentiment analysis",
      "Quantitative arbitrage"
    ],
    "answerIndex": 1,
    "rationale": "Fundamental analysis evaluates the underlying economics of a business — financial statements, earnings power, management, and industry — to derive an estimate of intrinsic value. The leading distractor, technical analysis, ignores fundamentals and instead studies price and volume patterns, so it is incorrect.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "b65d00d6b96e",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "A market participant who relies on price charts, trendlines, and trading volume — and largely disregards earnings or book value — is using which valuation approach?",
    "choices": [
      "Fundamental analysis",
      "Discounted cash flow analysis",
      "Technical analysis",
      "Dividend discount analysis"
    ],
    "answerIndex": 2,
    "rationale": "Technical analysis assumes that all relevant information is reflected in price and volume, so charts and patterns suffice for forecasting. Fundamental analysis is the leading distractor, but it focuses on financial statements and economic data, not price patterns, making it the wrong choice.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "f6df6679c3e9",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "The dividend discount model (DDM) values a share of common stock as:",
    "choices": [
      "The present value of expected future dividends",
      "Book value per share plus retained earnings",
      "Earnings per share multiplied by the industry P/E",
      "The discounted value of a firm's free cash flow to the firm"
    ],
    "answerIndex": 0,
    "rationale": "The DDM treats a stock's intrinsic value as the present value of all expected future dividend payments to shareholders. The free-cash-flow distractor confuses DDM with a discounted cash flow (DCF) model; DCF discounts cash flows to the firm or to equity, not dividends.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "b5f41e1b7d71",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Discounted cash flow (DCF) valuation uses which of the following as the discount rate when valuing the entire firm?",
    "choices": [
      "The risk-free rate alone",
      "The weighted average cost of capital (WACC)",
      "The dividend yield",
      "The firm's marginal tax rate"
    ],
    "answerIndex": 1,
    "rationale": "When DCF is applied to free cash flow to the firm (FCFF), the appropriate discount rate is the weighted average cost of capital, which blends the after-tax cost of debt and cost of equity in proportion to the firm's capital structure. Using the risk-free rate alone, the leading distractor, would ignore the equity risk premium and the cost of debt, materially understating the discount rate.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "afc188fe16fc",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "The price-to-earnings (P/E) ratio is calculated as:",
    "choices": [
      "Market price per share divided by earnings per share",
      "Earnings per share divided by market price per share",
      "Net income divided by total equity",
      "Dividends per share divided by market price per share"
    ],
    "answerIndex": 0,
    "rationale": "P/E is computed by dividing the current market price of a share by the company's earnings per share, indicating how much investors will pay per dollar of earnings. The earnings yield (E/P) is the leading distractor — it is the reciprocal of the P/E and is not what the question describes.",
    "citation": {
      "source": "OTHER",
      "ref": "Generally Accepted Accounting Principles"
    },
    "difficulty": "easy",
    "id": "a4c36c9c30b5",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Earnings per share (EPS) is most accurately defined as:",
    "choices": [
      "Net income available to common shareholders divided by weighted-average common shares outstanding",
      "Total revenue divided by total shares outstanding",
      "Operating income divided by total assets",
      "Dividends paid divided by net income"
    ],
    "answerIndex": 0,
    "rationale": "EPS is net income after preferred dividends divided by weighted-average common shares outstanding, isolating the earnings attributable to each common share. The 'dividends paid divided by net income' distractor is the dividend payout ratio, a different metric measuring how much of earnings is distributed.",
    "citation": {
      "source": "OTHER",
      "ref": "Generally Accepted Accounting Principles"
    },
    "difficulty": "easy",
    "id": "78d907f19ebe",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Book value per share for a common stock is most accurately calculated as:",
    "choices": [
      "(Total assets − Total liabilities − Preferred equity) / Common shares outstanding",
      "Net income / Common shares outstanding",
      "(Total assets − Preferred equity) / Common shares outstanding",
      "Market capitalization / Common shares outstanding"
    ],
    "answerIndex": 0,
    "rationale": "Book value per share equals common stockholders' equity (assets minus liabilities, minus any preferred equity) divided by common shares outstanding. The 'market capitalization' distractor describes market value per share rather than book value, which is recorded on the balance sheet.",
    "citation": {
      "source": "OTHER",
      "ref": "Generally Accepted Accounting Principles"
    },
    "difficulty": "easy",
    "id": "494c6b5b96f7",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Dividend yield on a common stock is calculated as:",
    "choices": [
      "Annual dividends per share / Current market price per share",
      "Annual dividends per share / Earnings per share",
      "Earnings per share / Market price per share",
      "Net income / Total dividends paid"
    ],
    "answerIndex": 0,
    "rationale": "Dividend yield is the cash return from dividends as a percentage of price — annual dividends per share divided by the current market price. The leading distractor is the dividend payout ratio (dividends ÷ EPS), which measures the portion of earnings returned to shareholders, not the yield on the stock.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "828ba56b3c96",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "On a price chart, a 'support' level is best described as:",
    "choices": [
      "A price level at which buying pressure has historically been strong enough to halt a decline",
      "A price level at which selling pressure has historically capped advances",
      "The 200-day moving average regardless of price action",
      "The strike price of the most actively traded option"
    ],
    "answerIndex": 0,
    "rationale": "Support is a price area where demand has previously been sufficient to absorb supply and stop a decline, so technicians watch it as a potential floor. The leading distractor describes resistance — the mirror concept on the upside — and is therefore incorrect.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "05b5cb10a23f",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "On a price chart, a 'resistance' level is best described as:",
    "choices": [
      "A price below which a stock cannot trade",
      "A price level at which selling pressure has historically been strong enough to cap a rally",
      "The intrinsic value computed by a DDM",
      "A regulatory price ceiling imposed by the SEC"
    ],
    "answerIndex": 1,
    "rationale": "Resistance is a price zone at which supply has previously overwhelmed demand and stalled an advance, marking a likely ceiling until broken. The leading distractor — that resistance is a floor below which a stock cannot trade — confuses resistance with support and is wrong.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "84dc1309f8ae",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Under the constant-growth dividend discount model (Gordon Growth Model), the intrinsic value of a share equals:",
    "choices": [
      "D1 / (r − g)",
      "D0 × (1 + r)",
      "EPS × (r − g)",
      "(D0 + g) / r"
    ],
    "answerIndex": 0,
    "rationale": "The Gordon model states that a share's value equals next year's expected dividend (D1) divided by the difference between the required return r and the constant dividend growth rate g. The 'D0 × (1 + r)' distractor is just one period of growth at the required return and produces a future value, not a present value, so it does not correspond to the model.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "e3c597d75d0a",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "A stock is expected to pay a $2.00 dividend next year. Investors require a 10% return, and dividends are expected to grow at 4% per year forever. Using the Gordon Growth Model, the intrinsic value of the stock is closest to:",
    "choices": [
      "$20.00",
      "$33.33",
      "$50.00",
      "$200.00"
    ],
    "answerIndex": 1,
    "rationale": "Applying P0 = D1 / (r − g) gives $2.00 / (0.10 − 0.04) = $2.00 / 0.06 ≈ $33.33. The $20.00 distractor would result from dividing D1 by r alone (no growth), which incorrectly treats the stock as a zero-growth perpetuity.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "c40287df8744",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "The Gordon Growth Model breaks down (produces a negative or undefined value) when:",
    "choices": [
      "The dividend growth rate equals or exceeds the required rate of return",
      "The required rate of return exceeds the risk-free rate",
      "The firm has positive earnings",
      "The dividend payout ratio is below 50%"
    ],
    "answerIndex": 0,
    "rationale": "The model assumes constant growth forever and discounts at r; when g ≥ r the denominator (r − g) is zero or negative, so the formula fails to give a meaningful price. The 'required rate exceeds risk-free rate' distractor is actually the normal case (a positive risk premium) and does not invalidate the model.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "50dbb16a65cf",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Which of the following companies is LEAST suitable for valuation using a traditional dividend discount model?",
    "choices": [
      "A regulated electric utility with a long history of stable dividends",
      "A blue-chip consumer staples company that pays steady dividends",
      "A high-growth technology firm that pays no dividends and reinvests all earnings",
      "A mature financial services firm with a 60% payout ratio"
    ],
    "answerIndex": 2,
    "rationale": "DDMs require expected future dividends as inputs; if a firm pays no dividends and is not expected to in the foreseeable future, the model has no cash flows to discount. The utility distractor is actually the textbook case for which DDMs were designed because of stable, predictable dividends, so it is the wrong answer.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "784adf99ffff",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "The two-stage dividend discount model is most appropriate when:",
    "choices": [
      "A company is expected to grow at a high rate for several years before settling into a lower, sustainable long-term rate",
      "A company is in liquidation",
      "A company pays no dividend and is unlikely to ever pay one",
      "A company's dividend growth rate equals its required return"
    ],
    "answerIndex": 0,
    "rationale": "Two-stage models split the future into a high-growth phase and a stable-growth phase, fitting firms expected to grow rapidly for a finite period and then mature. The 'no dividend' distractor describes a case in which any DDM is unsuitable, so two-stage DDM does not solve that problem.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "18dc964f8dfc",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "An investor expects ABC Corp. to pay a $3.00 dividend in one year and to be sold at $52.00 immediately after that dividend. If the required return is 10%, the intrinsic value of one share today using a single-period DDM is closest to:",
    "choices": [
      "$50.00",
      "$45.45",
      "$52.00",
      "$55.00"
    ],
    "answerIndex": 0,
    "rationale": "Single-period valuation discounts the sum of D1 and the year-end price: ($3 + $52) / 1.10 = $55 / 1.10 = $50.00. The $45.45 distractor results from discounting only the $50 ex-dividend portion of next year's price and ignoring the dividend.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "c8dfbddf63fe",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "The PEG ratio adjusts the P/E ratio for:",
    "choices": [
      "Expected earnings growth",
      "The dividend payout ratio",
      "Inflation",
      "Industry beta"
    ],
    "answerIndex": 0,
    "rationale": "PEG = (P/E) / earnings growth rate (in %), and is used to compare valuations across firms with different growth profiles. The dividend-payout distractor is wrong because PEG is concerned with growth in earnings, not cash distributions.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "917e01d4ddbe",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes free cash flow to the firm (FCFF)?",
    "choices": [
      "Operating cash flow available to all capital providers (debt and equity) after capital expenditures",
      "Net income plus dividends paid",
      "Cash flow available only to common equity holders after debt service",
      "Revenue minus cost of goods sold"
    ],
    "answerIndex": 0,
    "rationale": "FCFF is the cash generated by the firm's operations after reinvestment in fixed assets and working capital but before payments to debt or equity holders, so it is available to all capital providers. The leading distractor describes free cash flow to equity (FCFE), which subtracts net debt repayments and is therefore a different metric.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "3a47cc69f8ea",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "When valuing a firm using FCFF, the appropriate discount rate is the WACC; when valuing the equity directly using FCFE, the appropriate discount rate is:",
    "choices": [
      "The cost of debt",
      "The risk-free rate",
      "The cost of equity",
      "WACC again"
    ],
    "answerIndex": 2,
    "rationale": "FCFE represents cash flows already net of debt obligations and belongs only to equity holders, so it must be discounted at the required return on equity. WACC is the leading distractor, but applying it to FCFE would double-count the effect of debt because the cash flows have already been adjusted for it.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "ffbd22541a94",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "In computing WACC, the cost of debt is multiplied by (1 − tax rate) because:",
    "choices": [
      "Interest is tax-deductible at the corporate level, lowering the effective cost",
      "Bond investors receive dividend payments rather than interest",
      "The IRS requires after-tax disclosure on Form 10-K",
      "Debt holders are taxed at preferential rates"
    ],
    "answerIndex": 0,
    "rationale": "Interest expense reduces a corporation's taxable income, so each dollar of interest effectively costs the firm only (1 − tax rate) dollars; this 'tax shield' lowers the effective cost of debt component of WACC. The 'preferential rates for debt holders' distractor confuses the issuer's tax shield with how investors are taxed personally and is wrong.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "b8c9d3ed7c75",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "All else equal, a DCF valuation will produce a LOWER intrinsic value when:",
    "choices": [
      "Forecast cash flows are increased",
      "The discount rate is increased",
      "The terminal growth rate is increased",
      "The forecast horizon is shortened with no terminal value change"
    ],
    "answerIndex": 1,
    "rationale": "Raising the discount rate reduces the present value of every future cash flow, including the terminal value, lowering intrinsic value. The 'increase forecast cash flows' distractor would raise — not lower — value, so it is incorrect.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "98032ae40f85",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "In a DCF model, the 'terminal value' represents:",
    "choices": [
      "The book value of the firm at year zero",
      "The estimated value of all cash flows beyond the explicit forecast period",
      "The liquidation value of the firm if it goes bankrupt",
      "The market capitalization on the valuation date"
    ],
    "answerIndex": 1,
    "rationale": "Because forecasting cash flows indefinitely is impractical, analysts capture cash flows after the explicit forecast period (often 5–10 years) in a single 'terminal value' typically computed via a perpetuity-growth or exit-multiple method. The liquidation-value distractor describes a wind-down scenario rather than the going-concern continuation that terminal value assumes.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "bf1b97d39a35",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "A technical analyst observes a 50-day moving average crossing above a 200-day moving average ('golden cross'). This pattern is most commonly interpreted as:",
    "choices": [
      "A bearish reversal signal",
      "A bullish trend confirmation",
      "Confirmation that the stock is overvalued on a P/E basis",
      "A signal that earnings will exceed consensus next quarter"
    ],
    "answerIndex": 1,
    "rationale": "A 'golden cross' — short-term average rising through a long-term average — is treated by technicians as a bullish trend-confirmation signal. The 'overvalued on P/E' distractor blends technical and fundamental analysis incorrectly; technicians do not derive valuation conclusions from moving averages.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "cedc9ef21875",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "A 'head and shoulders' pattern formed after an extended uptrend is generally interpreted by technical analysts as:",
    "choices": [
      "A continuation pattern signaling further gains",
      "A bearish reversal pattern",
      "A signal that fundamentals are improving",
      "A confirmation of insider buying"
    ],
    "answerIndex": 1,
    "rationale": "The classic head and shoulders is treated as a topping pattern that signals a likely reversal from up-trend to down-trend once the 'neckline' is broken. Calling it a 'continuation pattern' is the leading distractor and is wrong because the pattern's hallmark is reversal, not continuation.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "998762d3a828",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "The weak form of the efficient market hypothesis (EMH) most directly challenges the value of:",
    "choices": [
      "Fundamental analysis",
      "Technical analysis",
      "Insider trading",
      "Passive index investing"
    ],
    "answerIndex": 1,
    "rationale": "Weak-form EMH states that current prices fully reflect all past price and volume data, so studying historical price patterns (technical analysis) cannot generate excess risk-adjusted returns. Fundamental analysis is the leading distractor, but it is challenged by the semi-strong form, not the weak form.",
    "citation": {
      "source": "OTHER",
      "ref": "Fama (1970)"
    },
    "difficulty": "medium",
    "id": "85364a5bb67f",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "If markets are semi-strong-form efficient, which of the following statements is most accurate?",
    "choices": [
      "Technical analysis can reliably produce excess returns",
      "Public information, including financial statements, is already reflected in prices, limiting the usefulness of fundamental analysis",
      "Insider trading offers no advantage over public investors",
      "Stock prices follow a deterministic, predictable path"
    ],
    "answerIndex": 1,
    "rationale": "Semi-strong-form efficiency holds that current prices incorporate all publicly available information, meaning that fundamental analysis based on public data should not, on average, produce excess risk-adjusted returns. The 'insider trading' distractor describes strong-form efficiency, which is a stricter condition not implied by semi-strong-form alone.",
    "citation": {
      "source": "OTHER",
      "ref": "Efficient Market Hypothesis"
    },
    "difficulty": "medium",
    "id": "621329c52e86",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "A stock has a market price of $40 and an analyst's DCF intrinsic value estimate of $50. Based solely on this information, the stock would generally be considered:",
    "choices": [
      "Overvalued",
      "Fairly valued",
      "Undervalued",
      "Mispriced only if beta exceeds 1.0"
    ],
    "answerIndex": 2,
    "rationale": "When intrinsic value (analyst's DCF estimate) exceeds the market price, the stock is considered undervalued and a candidate to buy. The 'overvalued' distractor reverses the comparison; overvaluation requires market price above intrinsic value.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "c5fe229ecaa0",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Return on equity (ROE) is most accurately calculated as:",
    "choices": [
      "Net income / Total assets",
      "Net income / Average shareholders' equity",
      "Operating income / Total liabilities",
      "Dividends per share / Earnings per share"
    ],
    "answerIndex": 1,
    "rationale": "ROE measures the return earned on the equity capital provided by shareholders and equals net income divided by average common shareholders' equity. The 'Net income / Total assets' distractor is return on assets (ROA), which uses the entire asset base rather than equity alone.",
    "citation": {
      "source": "OTHER",
      "ref": "Generally Accepted Accounting Principles"
    },
    "difficulty": "easy",
    "id": "42ec33b385e6",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Under the sustainable growth rate framework, a firm's long-run dividend growth rate can be approximated as:",
    "choices": [
      "ROE × Retention ratio",
      "ROE × Payout ratio",
      "Risk-free rate + Beta",
      "P/E × Earnings growth"
    ],
    "answerIndex": 0,
    "rationale": "If a firm finances internally and maintains a stable ROE and payout policy, its sustainable growth equals ROE multiplied by the retention ratio (1 − payout ratio), which captures earnings reinvested at the firm's return. 'ROE × Payout ratio' is the leading distractor but uses the wrong factor — only retained, not paid-out, earnings drive future growth.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "9b870fdc87ae",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Under the DuPont decomposition, ROE can be expressed as the product of:",
    "choices": [
      "Net profit margin × Total asset turnover × Equity multiplier",
      "Gross margin × Inventory turnover × Tax rate",
      "Operating margin × Debt-to-equity ratio × Beta",
      "EPS × P/E × Payout ratio"
    ],
    "answerIndex": 0,
    "rationale": "DuPont decomposes ROE into profitability (net margin), efficiency (asset turnover), and leverage (equity multiplier), helping analysts isolate the drivers of return on equity. The 'gross margin × inventory turnover × tax rate' distractor invents an unrelated combination of metrics that does not equal ROE.",
    "citation": {
      "source": "OTHER",
      "ref": "Generally Accepted Accounting Principles"
    },
    "difficulty": "medium",
    "id": "1acf32c567b9",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Which valuation method MOST directly relies on the assumption that all relevant information is reflected in past price and volume data?",
    "choices": [
      "Dividend discount model",
      "Discounted cash flow analysis",
      "Technical analysis",
      "Comparable company multiples"
    ],
    "answerIndex": 2,
    "rationale": "Technical analysis presumes that price and volume already encode the market's collective information, so studying patterns is sufficient to forecast future prices. The DDM distractor relies on dividends and required returns, not historical price action, and so does not share that assumption.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "8b33d1c7fee4",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "An analyst values a stock by projecting next year's free cash flow to equity at $4, expecting a constant growth rate of 5%, and assuming a cost of equity of 9%. Using a constant-growth FCFE model, the intrinsic value per share is closest to:",
    "choices": [
      "$44.44",
      "$80.00",
      "$100.00",
      "$133.33"
    ],
    "answerIndex": 2,
    "rationale": "The constant-growth FCFE model parallels the Gordon DDM: P0 = FCFE1 / (r − g) = $4 / (0.09 − 0.05) = $4 / 0.04 = $100.00. The $44.44 distractor uses the formula $4 / 0.09, which mistakenly omits the growth rate from the denominator.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "230ad78e9992",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Using a 'justified' P/E framework based on the constant-growth model, the leading P/E ratio (P0/E1) for a firm equals:",
    "choices": [
      "(1 − Retention ratio) / (r − g)",
      "Retention ratio / r",
      "ROE × Retention ratio",
      "Beta × (rm − rf)"
    ],
    "answerIndex": 0,
    "rationale": "Starting from P0 = D1/(r − g) and noting D1 = E1 × (1 − retention ratio), dividing both sides by E1 gives P0/E1 = (1 − retention ratio)/(r − g), the justified leading P/E. 'ROE × Retention ratio' is the sustainable growth rate g, not a P/E, so that distractor confuses two different formulas.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "3c60fffc6587",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Which of the following inputs is required for a discounted cash flow valuation but NOT for a constant-growth dividend discount model?",
    "choices": [
      "An estimate of the required rate of return",
      "An estimate of growth",
      "Explicit forecasts of free cash flow over a multi-year horizon",
      "An estimate of next period's cash distribution"
    ],
    "answerIndex": 2,
    "rationale": "A DCF typically requires explicit, year-by-year forecasts of free cash flow over an explicit forecast period plus a terminal value, while the constant-growth DDM collapses everything into D1, r, and g without a year-by-year forecast. Required return is needed in both models, so the 'required rate of return' distractor is wrong.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "99c0b910f6c7",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Compared with technical analysis, fundamental analysis is generally LESS concerned with:",
    "choices": [
      "Earnings quality and accounting policies",
      "A company's competitive position and management",
      "Short-term price patterns and trading volume",
      "The macroeconomic environment"
    ],
    "answerIndex": 2,
    "rationale": "Fundamental analysts focus on financial statements, business quality, and macroeconomic context to estimate intrinsic value, paying relatively little attention to short-term price and volume patterns, which are the centerpiece of technical analysis. The 'earnings quality' distractor describes precisely what fundamental analysts care about, so it is wrong.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "ed94e983ce50",
    "subtopicId": "2.6",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes the relationship between intrinsic value and market price in fundamental analysis?",
    "choices": [
      "Intrinsic value is always equal to market price in efficient markets",
      "An analyst buys when intrinsic value exceeds market price and sells when intrinsic value is below market price",
      "Intrinsic value is observed directly on the consolidated tape",
      "Market price determines intrinsic value through the law of one price"
    ],
    "answerIndex": 1,
    "rationale": "Fundamental analysts compare a calculated intrinsic value to the observable market price; perceived undervaluation (intrinsic > price) is a buy signal, perceived overvaluation (intrinsic < price) is a sell signal. The 'always equal in efficient markets' distractor describes a strong form of EMH that, even if true, would eliminate the rationale for fundamental analysis rather than describe how analysts use it.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "8dae433a7e58",
    "subtopicId": "2.6",
    "reviewed": false
  }
];

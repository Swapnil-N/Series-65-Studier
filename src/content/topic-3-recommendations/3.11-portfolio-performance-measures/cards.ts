import type { Card } from "../../../types/content";

export const cards: Card[] = [
  {
    "front": "What does total return on an investment include?",
    "back": "Total return combines all income received (interest or dividends) plus any capital appreciation or depreciation over a measurement period, expressed as a percentage of the initial investment.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "d29a55c96184",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Holding period return formula",
    "back": "HPR = (Ending value - Beginning value + Income received) / Beginning value. It captures total return over the entire time the asset was held and is not annualized.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "190da392f533",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Define annualized return",
    "back": "Annualized return restates a return earned over any period as the equivalent compound annual rate, allowing comparison across investments with different holding periods.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "5996b40d5953",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "How does time-weighted return differ from dollar-weighted return?",
    "back": "Time-weighted return measures the compound growth of one dollar invested at the start, ignoring the timing of cash flows. Dollar-weighted return is the IRR of the portfolio's cash flows, so it is sensitive to the timing and size of contributions and withdrawals.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "e51f41826036",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Which return measure is most appropriate for judging an investment manager's skill?",
    "back": "Time-weighted return, because it neutralizes the impact of client-driven cash flows that the manager does not control, isolating the performance of the manager's investment decisions.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "423ceca3e1f7",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Which return measure best reflects an individual investor's actual experience with deposits and withdrawals?",
    "back": "Dollar-weighted return (internal rate of return), because it incorporates the timing and amount of each cash flow into and out of the portfolio.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "485c24ff9758",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Define internal rate of return (IRR)",
    "back": "IRR is the discount rate that makes the net present value of all cash flows from an investment equal to zero. For portfolios with cash flows, IRR equals the dollar-weighted return.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "a1abf0a4a7f2",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "What is a risk-adjusted return?",
    "back": "A return measure that adjusts raw performance for the amount of risk taken, enabling comparisons across investments with different volatility or systematic risk. Examples include the Sharpe ratio, Treynor ratio, and Jensen's alpha.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "id": "478d6cba9584",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Sharpe ratio formula",
    "back": "Sharpe ratio = (Portfolio return - Risk-free rate) / Portfolio standard deviation. It measures excess return per unit of total risk.",
    "citation": {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    "id": "7df676958587",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Treynor ratio formula and the risk measure it uses",
    "back": "Treynor ratio = (Portfolio return - Risk-free rate) / Portfolio beta. It measures excess return per unit of systematic (market) risk rather than total risk.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "id": "2dbf2d055866",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "What does Jensen's alpha measure?",
    "back": "Jensen's alpha is the portfolio's actual return minus the return predicted by the Capital Asset Pricing Model given its beta. A positive alpha indicates outperformance relative to risk-adjusted expectations.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "id": "18c6b220c43f",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "When is the Sharpe ratio preferred over the Treynor ratio?",
    "back": "Sharpe is preferred for non-diversified portfolios or single securities because it uses total risk (standard deviation). Treynor assumes the portfolio is well-diversified so that only systematic risk (beta) is relevant.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "id": "5927cfdbb2e2",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Define expected return on a portfolio",
    "back": "Expected return is the probability-weighted average of all possible returns, computed by multiplying each potential outcome by its probability and summing. For a portfolio, it equals the weighted average of the expected returns of its components.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "id": "637e9603ac78",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Inflation-adjusted (real) return formula",
    "back": "Real return = [(1 + Nominal return) / (1 + Inflation rate)] - 1. A common approximation subtracts the inflation rate from the nominal return.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "66d84d8ba061",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Where does the inflation rate used in real-return calculations typically come from?",
    "back": "The Consumer Price Index (CPI), published monthly by the Bureau of Labor Statistics, is the standard inflation gauge used to convert nominal returns to real returns.",
    "citation": {
      "source": "OTHER",
      "ref": "Bureau of Labor Statistics"
    },
    "id": "ce64752abdb0",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "After-tax return calculation",
    "back": "After-tax return = Pre-tax return x (1 - investor's marginal tax rate). Interest income is taxed at ordinary rates, while qualified dividends and long-term capital gains use lower preferential rates.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "id": "9002095f4f2b",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Tax-equivalent yield formula for a municipal bond",
    "back": "Tax-equivalent yield = Municipal bond yield / (1 - investor's marginal federal tax rate). It shows the pre-tax yield a taxable bond would need to offer to match a tax-free muni.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "id": "c954dcafd793",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Current yield on a bond",
    "back": "Current yield = Annual coupon interest / Current market price of the bond. It ignores capital gains or losses at maturity and any reinvestment of coupons.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "779a6ad92b6f",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Current yield on a common stock",
    "back": "Current yield (dividend yield) = Annual dividend per share / Current market price per share.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "205a47f4b9ec",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Purpose of a benchmark in portfolio performance evaluation",
    "back": "A benchmark is an unmanaged index that represents the asset class, style, or strategy of a portfolio. It provides a passive standard against which an active manager's returns and risk can be compared.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "badb9e5f92bf",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Standard benchmark for U.S. large-capitalization equity portfolios",
    "back": "The S&P 500 Index, a market-capitalization-weighted index of 500 leading U.S. companies, is the most widely used benchmark for large-cap U.S. stock portfolios.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "128e3b2a6aa1",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Common benchmark for U.S. small-capitalization equity portfolios",
    "back": "The Russell 2000 Index, which tracks the 2,000 smallest companies in the Russell 3000, is the standard benchmark for U.S. small-cap stock portfolios.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "80d59de8cb9f",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Benchmark typically used for U.S. investment-grade bond portfolios",
    "back": "The Bloomberg US Aggregate Bond Index (formerly the Barclays/Lehman Aggregate) is the most widely used benchmark for U.S. investment-grade taxable fixed-income portfolios.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "ca529fa6463c",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Benchmark for international developed-market equity portfolios",
    "back": "The MSCI EAFE Index (Europe, Australasia, and Far East) is the standard benchmark for developed-market non-U.S. equity portfolios.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "0ef38492ed88",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Why does a portfolio outperforming its benchmark not by itself prove manager skill?",
    "back": "Outperformance may simply reflect taking more risk than the benchmark, such as higher beta or volatility. Risk-adjusted measures like alpha or the Sharpe ratio are required to determine whether the excess return reflects skill rather than added risk.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "id": "b59cc430d5da",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "front": "Geometric vs arithmetic mean return: which is used to annualize historical performance?",
    "back": "The geometric (compound) mean is used to annualize multi-period historical returns because it properly accounts for compounding. The arithmetic mean overstates compound growth and is generally reserved for forecasting expected one-period returns.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "e71269b06e70",
    "subtopicId": "3.11",
    "reviewed": false
  }
];

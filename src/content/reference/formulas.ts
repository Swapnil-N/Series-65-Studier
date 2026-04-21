// Hand-curated Series 65 formula reference.
//
// `latex` is a raw KaTeX expression WITHOUT `$` wrappers so the UI can choose
// inline vs. block rendering. The Reference route wraps each formula in
// `$$...$$` to produce display-mode math.
import type { Citation } from "../../types/content";

export interface Formula {
  id: string;
  name: string;
  latex: string;
  variables: { symbol: string; meaning: string }[];
  description: string;
  tags?: string[];
  citation?: Citation;
}

export const formulas: Formula[] = [
  {
    id: "present-value",
    name: "Present Value (PV)",
    latex: "PV = \\frac{FV}{(1 + r)^n}",
    variables: [
      { symbol: "PV", meaning: "Present value (today's worth of a future sum)" },
      { symbol: "FV", meaning: "Future value (amount received later)" },
      { symbol: "r", meaning: "Periodic discount rate (as a decimal)" },
      { symbol: "n", meaning: "Number of compounding periods" },
    ],
    description:
      "Discounts a single future cash flow back to its value today at rate r.",
    tags: ["time value of money", "discounting", "TVM"],
  },
  {
    id: "future-value",
    name: "Future Value (FV)",
    latex: "FV = PV\\,(1 + r)^n",
    variables: [
      { symbol: "FV", meaning: "Future value" },
      { symbol: "PV", meaning: "Present value (initial deposit)" },
      { symbol: "r", meaning: "Periodic interest / growth rate" },
      { symbol: "n", meaning: "Number of compounding periods" },
    ],
    description:
      "Projects a present amount forward under compound growth.",
    tags: ["time value of money", "compounding", "TVM"],
  },
  {
    id: "sharpe-ratio",
    name: "Sharpe Ratio",
    latex: "S = \\frac{R_p - R_f}{\\sigma_p}",
    variables: [
      { symbol: "S", meaning: "Sharpe ratio (risk-adjusted return)" },
      { symbol: "R_p", meaning: "Portfolio return" },
      { symbol: "R_f", meaning: "Risk-free rate (typically short-term Treasuries)" },
      { symbol: "\\sigma_p", meaning: "Standard deviation of the portfolio's returns (total risk)" },
    ],
    description:
      "Measures excess return per unit of total risk (standard deviation).",
    tags: ["risk-adjusted return", "performance", "volatility"],
  },
  {
    id: "treynor-ratio",
    name: "Treynor Ratio",
    latex: "T = \\frac{R_p - R_f}{\\beta_p}",
    variables: [
      { symbol: "T", meaning: "Treynor ratio" },
      { symbol: "R_p", meaning: "Portfolio return" },
      { symbol: "R_f", meaning: "Risk-free rate" },
      { symbol: "\\beta_p", meaning: "Portfolio beta (systematic risk)" },
    ],
    description:
      "Excess return per unit of systematic (market) risk; appropriate for well-diversified portfolios.",
    tags: ["risk-adjusted return", "beta", "systematic risk"],
  },
  {
    id: "jensens-alpha",
    name: "Jensen's Alpha",
    latex: "\\alpha = R_p - \\bigl[R_f + \\beta_p (R_m - R_f)\\bigr]",
    variables: [
      { symbol: "\\alpha", meaning: "Jensen's alpha (excess return over CAPM expectation)" },
      { symbol: "R_p", meaning: "Portfolio return" },
      { symbol: "R_f", meaning: "Risk-free rate" },
      { symbol: "\\beta_p", meaning: "Portfolio beta" },
      { symbol: "R_m", meaning: "Market return" },
    ],
    description:
      "The portfolio's return above what CAPM would predict given its beta; positive alpha indicates outperformance.",
    tags: ["alpha", "performance", "CAPM"],
  },
  {
    id: "capm",
    name: "Capital Asset Pricing Model (CAPM)",
    latex: "E(R) = R_f + \\beta (R_m - R_f)",
    variables: [
      { symbol: "E(R)", meaning: "Expected return on the asset" },
      { symbol: "R_f", meaning: "Risk-free rate" },
      { symbol: "\\beta", meaning: "Asset's beta relative to the market" },
      { symbol: "R_m", meaning: "Expected market return" },
      { symbol: "R_m - R_f", meaning: "Market risk premium" },
    ],
    description:
      "Prices expected return as the risk-free rate plus a beta-scaled market risk premium.",
    tags: ["CAPM", "expected return", "beta"],
  },
  {
    id: "standard-deviation",
    name: "Standard Deviation",
    latex: "\\sigma = \\sqrt{\\frac{\\sum (x_i - \\mu)^2}{N}}",
    variables: [
      { symbol: "\\sigma", meaning: "Standard deviation (total risk)" },
      { symbol: "x_i", meaning: "Each observed return" },
      { symbol: "\\mu", meaning: "Mean of the returns" },
      { symbol: "N", meaning: "Number of observations" },
    ],
    description:
      "Dispersion of returns around the mean; a common proxy for total (both systematic and unsystematic) risk.",
    tags: ["risk", "volatility", "statistics"],
  },
  {
    id: "beta",
    name: "Beta",
    latex: "\\beta = \\frac{\\operatorname{Cov}(R_p, R_m)}{\\operatorname{Var}(R_m)}",
    variables: [
      { symbol: "\\beta", meaning: "Beta (sensitivity to market movements)" },
      { symbol: "\\operatorname{Cov}(R_p, R_m)", meaning: "Covariance of portfolio and market returns" },
      { symbol: "\\operatorname{Var}(R_m)", meaning: "Variance of market returns" },
    ],
    description:
      "Measures systematic risk; a beta of 1 moves with the market, >1 is more volatile, <1 is less volatile.",
    tags: ["beta", "systematic risk", "market"],
  },
  {
    id: "macaulay-duration",
    name: "Macaulay Duration",
    latex:
      "D_{mac} = \\frac{\\sum_{t=1}^{n} t \\cdot \\frac{C_t}{(1 + y)^t}}{P}",
    variables: [
      { symbol: "D_{mac}", meaning: "Macaulay duration (weighted-average time to cash flows)" },
      { symbol: "t", meaning: "Time period of the cash flow (years)" },
      { symbol: "C_t", meaning: "Cash flow in period t (coupon or principal)" },
      { symbol: "y", meaning: "Yield to maturity per period" },
      { symbol: "P", meaning: "Current bond price" },
      { symbol: "n", meaning: "Total number of periods to maturity" },
    ],
    description:
      "Weighted-average time (in years) to receive a bond's cash flows, using their present values as weights.",
    tags: ["bond", "duration", "fixed income"],
  },
  {
    id: "modified-duration",
    name: "Modified Duration",
    latex: "D_{mod} = \\frac{D_{mac}}{1 + YTM}",
    variables: [
      { symbol: "D_{mod}", meaning: "Modified duration (approx. % price change per 1% yield change)" },
      { symbol: "D_{mac}", meaning: "Macaulay duration" },
      { symbol: "YTM", meaning: "Yield to maturity (per period)" },
    ],
    description:
      "Price sensitivity of a bond to yield changes: a modified duration of 6 implies ~6% price drop if yields rise 1%.",
    tags: ["bond", "duration", "interest-rate risk"],
  },
  {
    id: "after-tax-yield",
    name: "After-Tax Yield",
    latex: "ATY = R_{taxable} \\times (1 - t)",
    variables: [
      { symbol: "ATY", meaning: "After-tax yield" },
      { symbol: "R_{taxable}", meaning: "Taxable (pre-tax) yield" },
      { symbol: "t", meaning: "Investor's marginal tax rate (as a decimal)" },
    ],
    description:
      "Converts a taxable yield into the yield the investor actually keeps after tax.",
    tags: ["tax", "yield", "municipal"],
  },
  {
    id: "taxable-equivalent-yield",
    name: "Taxable-Equivalent Yield (TEY)",
    latex: "TEY = \\frac{R_{tax\\text{-}free}}{1 - t}",
    variables: [
      { symbol: "TEY", meaning: "Taxable-equivalent yield" },
      { symbol: "R_{tax\\text{-}free}", meaning: "Tax-free (municipal) yield" },
      { symbol: "t", meaning: "Investor's marginal tax rate (as a decimal)" },
    ],
    description:
      "The pre-tax yield a taxable bond must offer to match a tax-free municipal yield for this investor.",
    tags: ["municipal", "tax", "yield"],
  },
  {
    id: "current-yield",
    name: "Current Yield",
    latex: "CY = \\frac{\\text{Annual coupon}}{\\text{Market price}}",
    variables: [
      { symbol: "CY", meaning: "Current yield" },
      { symbol: "\\text{Annual coupon}", meaning: "Total annual interest paid (coupon rate × par)" },
      { symbol: "\\text{Market price}", meaning: "Current market price of the bond" },
    ],
    description:
      "Annual coupon income as a percentage of the bond's current price; ignores capital gain/loss at maturity.",
    tags: ["bond", "yield", "fixed income"],
  },
  {
    id: "ytm-approximation",
    name: "Yield to Maturity (Approximation)",
    latex:
      "YTM \\approx \\frac{C + \\dfrac{F - P}{n}}{\\dfrac{F + P}{2}}",
    variables: [
      { symbol: "YTM", meaning: "Approximate yield to maturity" },
      { symbol: "C", meaning: "Annual coupon payment" },
      { symbol: "F", meaning: "Face (par) value" },
      { symbol: "P", meaning: "Current price" },
      { symbol: "n", meaning: "Years to maturity" },
    ],
    description:
      "Rough YTM estimate combining coupon income and amortized price gain/loss over average invested capital.",
    tags: ["bond", "yield", "YTM"],
  },
  {
    id: "expected-return-weighted",
    name: "Expected Return (Weighted Average)",
    latex: "E(R) = \\sum_{i=1}^{n} w_i R_i",
    variables: [
      { symbol: "E(R)", meaning: "Expected portfolio return" },
      { symbol: "w_i", meaning: "Weight of asset i (sums to 1)" },
      { symbol: "R_i", meaning: "Expected return of asset i" },
      { symbol: "n", meaning: "Number of assets in the portfolio" },
    ],
    description:
      "Portfolio expected return is the weight-average of its components' expected returns.",
    tags: ["portfolio", "expected return", "weighted average"],
  },
  {
    id: "geometric-mean-return",
    name: "Geometric Mean Return",
    latex:
      "R_{geo} = \\left(\\prod_{i=1}^{n} (1 + R_i)\\right)^{1/n} - 1",
    variables: [
      { symbol: "R_{geo}", meaning: "Geometric (time-weighted) mean return" },
      { symbol: "R_i", meaning: "Periodic return i (as a decimal)" },
      { symbol: "n", meaning: "Number of periods" },
    ],
    description:
      "Compound average return per period; the correct measure when returns are reinvested across multiple periods.",
    tags: ["return", "compound", "performance"],
  },
];

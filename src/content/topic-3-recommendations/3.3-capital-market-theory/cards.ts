import type { Card } from "../../../types/content";

export const cards: Card[] = [
  {
    "front": "What does the Capital Asset Pricing Model (CAPM) calculate?",
    "back": "CAPM calculates the required (expected) rate of return on a risky asset as a function of the risk-free rate plus a risk premium scaled to that asset's systematic risk. It is used to price assets and to determine an appropriate discount rate for cash flows.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "id": "f478117057b1",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "State the CAPM formula.",
    "back": "Required return = Rf + Beta x (Rm - Rf), where Rf is the risk-free rate, Rm is the expected return on the market, and (Rm - Rf) is the equity (market) risk premium.",
    "citation": {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    "id": "2bf0fdeead68",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "In CAPM, what does beta measure?",
    "back": "Beta measures an asset's systematic (non-diversifiable) risk relative to the overall market; the market itself has a beta of 1.0. A beta above 1.0 indicates greater volatility than the market, and below 1.0 indicates less.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "id": "0b978969ffcd",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "Compute the CAPM required return for a stock with beta 1.4 when Rf = 3% and Rm = 9%.",
    "back": "Required return = 3% + 1.4 x (9% - 3%) = 3% + 1.4 x 6% = 3% + 8.4% = 11.4%.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "id": "609faf1d5b92",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "What proxy is most commonly used for the risk-free rate in CAPM?",
    "back": "The yield on short-term U.S. Treasury bills (often the 90-day T-bill) is the standard proxy for the risk-free rate because it has effectively no default risk and minimal interest-rate risk.",
    "citation": {
      "source": "OTHER",
      "ref": "U.S. Treasury"
    },
    "id": "8e2623fb25e1",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "Define the market risk premium.",
    "back": "The market risk premium is the excess return investors demand for holding the broad market portfolio over the risk-free asset, expressed as Rm - Rf. It represents compensation for bearing systematic risk that cannot be diversified away.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "id": "1baa4278c260",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "What is the Security Market Line (SML)?",
    "back": "The SML is the graphical representation of CAPM, plotting expected return (y-axis) against beta (x-axis). Its intercept is the risk-free rate and its slope is the market risk premium; correctly priced assets lie on the line.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "id": "e9ade46631be",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "If a stock plots above the Security Market Line, how is it characterized?",
    "back": "It is offering more return than CAPM requires for its level of systematic risk, so it is considered undervalued. Stocks plotting below the SML are overvalued because they offer less return than required.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "id": "ecd7dc465f8c",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "List the key assumptions of CAPM.",
    "back": "Investors are rational and risk-averse, hold diversified portfolios, can borrow and lend at the risk-free rate, share homogeneous expectations, face no taxes or transaction costs, and only systematic risk is priced.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "1064bf97acc4",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "Who developed Modern Portfolio Theory and when?",
    "back": "Harry Markowitz introduced Modern Portfolio Theory in his 1952 Journal of Finance article 'Portfolio Selection,' which mathematically formalized the benefits of diversification.",
    "citation": {
      "source": "OTHER",
      "ref": "Markowitz (1952)"
    },
    "id": "a397e9e8e0c8",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "What is the central insight of Modern Portfolio Theory?",
    "back": "An asset should be evaluated by its contribution to overall portfolio risk and return, not in isolation; combining imperfectly correlated assets reduces portfolio variance without proportionally reducing expected return.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "id": "eea2a1e71890",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "Define the efficient frontier.",
    "back": "The efficient frontier is the set of portfolios that offer the highest expected return for each level of risk (or equivalently, the lowest risk for each level of expected return). Portfolios below the frontier are dominated and suboptimal.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "id": "38fe4660d82d",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "Distinguish systematic from unsystematic risk.",
    "back": "Systematic (market) risk affects all securities and cannot be eliminated through diversification, while unsystematic (specific or idiosyncratic) risk is unique to a company or industry and can largely be diversified away.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "id": "6a9b642203a3",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "Under MPT, which type of risk is rewarded with higher expected return?",
    "back": "Only systematic risk is compensated, because unsystematic risk can be eliminated through diversification at no cost. Investors should not expect a premium for bearing diversifiable risk.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "id": "ae4b300af888",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "What role does correlation play in MPT diversification benefits?",
    "back": "The lower (or more negative) the correlation between assets, the greater the reduction in portfolio variance from combining them. Diversification benefits diminish when assets are highly positively correlated.",
    "citation": {
      "source": "OTHER",
      "ref": "Markowitz (1952)"
    },
    "id": "816668b9d225",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "What is the Capital Market Line (CML)?",
    "back": "The CML plots expected return against total risk (standard deviation) for portfolios that combine the risk-free asset with the market portfolio. Its slope equals the Sharpe ratio of the market portfolio.",
    "citation": {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    "id": "dc63b4eb7cb4",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "How does the Capital Market Line differ from the Security Market Line?",
    "back": "The CML uses total risk (standard deviation) on its x-axis and applies only to efficient portfolios, whereas the SML uses systematic risk (beta) and applies to any individual security or portfolio.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "50356fa7435a",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "Define the Sharpe ratio.",
    "back": "Sharpe ratio = (Portfolio return - Risk-free rate) / Portfolio standard deviation. It measures excess return per unit of total risk and is used to compare risk-adjusted performance across portfolios.",
    "citation": {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    "id": "871bef191d17",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "Who formalized the Efficient Market Hypothesis and when?",
    "back": "Eugene Fama formalized the Efficient Market Hypothesis in his 1970 paper 'Efficient Capital Markets: A Review of Theory and Empirical Work,' organizing it into weak, semi-strong, and strong forms.",
    "citation": {
      "source": "OTHER",
      "ref": "Fama (1970)"
    },
    "id": "76df16431861",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "State the core claim of the Efficient Market Hypothesis.",
    "back": "Asset prices fully reflect all available information at any given time, so it is not possible to consistently earn risk-adjusted excess returns through analysis of that information.",
    "citation": {
      "source": "OTHER",
      "ref": "Efficient Market Hypothesis"
    },
    "id": "6a8e954d8a09",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "What information set does the weak form of EMH assume is reflected in prices?",
    "back": "The weak form holds that prices already incorporate all historical price and volume data, implying that technical analysis cannot consistently generate abnormal returns.",
    "citation": {
      "source": "OTHER",
      "ref": "Fama (1970)"
    },
    "id": "29a869238a82",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "What information set does the semi-strong form of EMH assume is reflected in prices?",
    "back": "The semi-strong form holds that prices reflect all publicly available information, including financial statements, news, and analyst reports, so neither technical nor fundamental analysis can consistently produce abnormal returns.",
    "citation": {
      "source": "OTHER",
      "ref": "Fama (1970)"
    },
    "id": "91e92206e6e8",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "What information set does the strong form of EMH assume is reflected in prices?",
    "back": "The strong form holds that prices reflect all information, public and private (including insider information), so even insiders cannot consistently earn excess risk-adjusted returns.",
    "citation": {
      "source": "OTHER",
      "ref": "Fama (1970)"
    },
    "id": "220b33cc51e2",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "Which form of EMH is contradicted by the existence of profitable insider trading?",
    "back": "Profitable insider trading evidence contradicts the strong form, since the strong form claims even non-public information is already priced in. The semi-strong and weak forms remain consistent with insider profitability.",
    "citation": {
      "source": "OTHER",
      "ref": "Efficient Market Hypothesis"
    },
    "id": "63412c6c65e4",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "What investment management style is most directly supported by the Efficient Market Hypothesis?",
    "back": "Passive (index) investing, because if markets are efficient, the costs of active research and trading cannot be recovered through superior risk-adjusted returns. Low-cost broad market index funds are the rational default.",
    "citation": {
      "source": "OTHER",
      "ref": "Efficient Market Hypothesis"
    },
    "id": "b92c918f69c8",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "Identify a market anomaly that challenges the Efficient Market Hypothesis.",
    "back": "Documented anomalies include the small-firm (size) effect, the value effect, momentum, the January effect, and post-earnings-announcement drift, all of which suggest that risk-adjusted excess returns may be earned in violation of strict EMH.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "d7e54c47b91c",
    "subtopicId": "3.3",
    "reviewed": false
  },
  {
    "front": "How does CAPM relate to MPT and EMH conceptually?",
    "back": "CAPM is the equilibrium pricing model that emerges from MPT's diversification framework when investors hold the market portfolio, and it is typically presented alongside EMH because both assume rational, well-informed investors operating in efficient markets.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "d7f896cc8592",
    "subtopicId": "3.3",
    "reviewed": false
  }
];

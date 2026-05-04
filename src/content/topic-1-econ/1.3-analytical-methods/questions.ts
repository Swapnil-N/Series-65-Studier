import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "An investor deposits $1,000 in an account earning 5% simple interest annually. What is the future value after 3 years?",
    "choices": [
      "$1,150",
      "$1,158",
      "$1,500",
      "$1,050"
    ],
    "answerIndex": 0,
    "rationale": "With simple interest, FV = Principal x (1 + r x t) = $1,000 x (1 + 0.05 x 3) = $1,150. The top distractor, $1,158, is the result of compound interest (1,000 x 1.05^3 = 1,157.63), which is incorrect because the question specifies simple interest, where interest does not accrue on prior interest.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "f356799cab7a",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "What is the future value of $10,000 invested for 2 years at 10% compounded annually?",
    "choices": [
      "$11,000",
      "$12,000",
      "$12,100",
      "$12,210"
    ],
    "answerIndex": 2,
    "rationale": "FV = PV x (1 + r)^n = $10,000 x (1.10)^2 = $10,000 x 1.21 = $12,100. The top distractor, $12,000, results from applying simple interest ($10,000 + 2 x $1,000), which omits the second-year interest earned on the first year's interest.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "85cef330f4ec",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "Under the net present value (NPV) decision rule, an independent capital project should generally be accepted when:",
    "choices": [
      "NPV is positive",
      "NPV is negative",
      "NPV equals the IRR",
      "NPV equals zero"
    ],
    "answerIndex": 0,
    "rationale": "A positive NPV means that, at the chosen discount rate, the discounted cash inflows exceed the cost of the project, so accepting it adds dollar value to the firm. The top distractor, NPV equals zero, represents the breakeven point at which the project earns exactly the required return; theory does not call this an 'accept' signal because it adds no value.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "ee46dfa20eab",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "A project has an internal rate of return of 9% while the firm's required rate of return is 11%. Under the IRR decision rule, the project should be:",
    "choices": [
      "Accepted, because IRR is positive",
      "Rejected, because IRR is below the required rate",
      "Accepted, because the cost of capital is irrelevant",
      "Rejected, because IRR cannot be calculated"
    ],
    "answerIndex": 1,
    "rationale": "Under the IRR rule, accept a project only when IRR is greater than or equal to the required rate of return (cost of capital). Here 9% < 11%, so the project should be rejected. The top distractor incorrectly treats a positive IRR as sufficient, but the IRR must be measured against the firm's cost of capital, not against zero.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "4ea1b3940d22",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "A portfolio earned the following annual returns over five years: 4%, 6%, 8%, 10%, and 12%. What is the arithmetic mean return?",
    "choices": [
      "6%",
      "8%",
      "10%",
      "40%"
    ],
    "answerIndex": 1,
    "rationale": "The arithmetic mean is the sum of observations divided by the number of observations: (4 + 6 + 8 + 10 + 12) / 5 = 40 / 5 = 8%. The top distractor, 6%, is one of the data points but not the average; choosing it confuses an individual observation with the central tendency.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "easy",
    "id": "9a7cc6d45278",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "A data set of stock returns is: 3%, 5%, 7%, 9%, 16%. What is the median return?",
    "choices": [
      "5%",
      "7%",
      "8%",
      "9%"
    ],
    "answerIndex": 1,
    "rationale": "The median is the middle value when the data is ordered. With five observations, the third value is the median, which is 7%. The top distractor, 8%, is the arithmetic mean (40 / 5), not the median; the median is unaffected by extreme values such as the 16% observation.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "easy",
    "id": "ed4217fb29a0",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "In statistics, the mode of a data set is best defined as:",
    "choices": [
      "The arithmetic average of the values",
      "The middle value when the data is ordered",
      "The value that occurs most frequently",
      "The difference between the highest and lowest values"
    ],
    "answerIndex": 2,
    "rationale": "The mode is the most frequently occurring observation in a data set. The top distractor describes the median, which identifies the middle observation in an ordered data set, not the most common one. Mean, median, and mode are all measures of central tendency but each captures a different concept.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "easy",
    "id": "09dc9b49ee1f",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "What is the range of the data set 5, 8, 12, 15, 20?",
    "choices": [
      "12",
      "15",
      "20",
      "60"
    ],
    "answerIndex": 1,
    "rationale": "The range is the highest observation minus the lowest: 20 - 5 = 15. The top distractor, 20, is simply the maximum value, not the spread of the data; the range measures dispersion, not magnitude of any single observation.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "easy",
    "id": "8fceb0a06ea5",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "A common stock has a beta of 1.0. Compared to the broader market, the stock is expected to:",
    "choices": [
      "Move twice as much as the overall market",
      "Move in line with the overall market",
      "Move in the opposite direction of the market",
      "Have zero volatility"
    ],
    "answerIndex": 1,
    "rationale": "Beta measures a security's sensitivity to systematic (market) movements. A beta of 1.0 implies the stock is expected to move in line with the market on average. The top distractor describes a beta of 2.0; a beta of 1.0 indicates equal, not amplified, sensitivity to market moves.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "difficulty": "easy",
    "id": "3d91fb5733ad",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "The current ratio is calculated as:",
    "choices": [
      "Current assets divided by current liabilities",
      "Current assets minus inventory divided by current liabilities",
      "Total assets divided by total liabilities",
      "Current liabilities divided by total equity"
    ],
    "answerIndex": 0,
    "rationale": "The current ratio is a basic liquidity measure: current assets / current liabilities. The top distractor describes the quick (acid-test) ratio, which excludes inventory from current assets to focus on the most liquid resources; while related, it is not the current ratio.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "easy",
    "id": "32c5c44033da",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "The debt-to-equity ratio is most commonly defined as:",
    "choices": [
      "Total debt divided by total equity",
      "Total equity divided by total debt",
      "Current liabilities divided by current assets",
      "Long-term debt divided by total assets"
    ],
    "answerIndex": 0,
    "rationale": "The debt-to-equity ratio measures financial leverage as total debt / total stockholders' equity. The top distractor, long-term debt / total assets, is a different leverage metric (debt-to-assets), which uses total assets in the denominator rather than equity.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "easy",
    "id": "db705f09189b",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "The price-to-earnings (P/E) ratio of a common stock is calculated by dividing:",
    "choices": [
      "Market price per share by earnings per share",
      "Earnings per share by market price per share",
      "Book value per share by market price per share",
      "Market price per share by dividends per share"
    ],
    "answerIndex": 0,
    "rationale": "The P/E ratio = market price per share / earnings per share, indicating how much investors are paying for each dollar of earnings. The top distractor inverts the formula; that ratio (EPS / price) is the earnings yield, not the P/E.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "1d320c828725",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "A project requires a $10,000 initial outlay and is expected to generate $5,500 at the end of year 1 and $5,500 at the end of year 2. Using a 10% discount rate, the project's NPV is closest to:",
    "choices": [
      "-$455",
      "$0",
      "+$546",
      "+$1,000"
    ],
    "answerIndex": 0,
    "rationale": "PV(Y1) = 5,500 / 1.10 = 5,000.00; PV(Y2) = 5,500 / 1.21 = 4,545.45; total PV = 9,545.45; NPV = 9,545.45 - 10,000 = -$455. The top distractor, +$1,000, ignores discounting and simply subtracts the outlay from undiscounted cash flows ($11,000 - $10,000), which overstates value by failing to apply the time value of money.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "2f5de9cd96e5",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "What is the future value of $5,000 invested for 4 years at 8% compounded annually?",
    "choices": [
      "$6,600",
      "$6,802",
      "$5,400",
      "$20,000"
    ],
    "answerIndex": 1,
    "rationale": "FV = $5,000 x (1.08)^4 = $5,000 x 1.36049 = $6,802.44. The top distractor, $6,600, applies simple interest (5,000 x (1 + 0.08 x 4) = 6,600), which understates the FV because it ignores interest earned on prior interest.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "7b033e65fcb3",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "The internal rate of return (IRR) on a project is best described as:",
    "choices": [
      "The market interest rate at which the project is funded",
      "The discount rate that makes the NPV of all cash flows equal to zero",
      "The accounting profit divided by the initial investment",
      "The dividend yield earned on the project"
    ],
    "answerIndex": 1,
    "rationale": "By definition, IRR is the discount rate that makes the present value of all cash flows (inflows and outflows) sum to zero, i.e., the rate at which NPV = 0. The top distractor confuses IRR with the firm's borrowing or financing rate; IRR is a property of the project's cash flows, not the cost of capital used to evaluate it.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "eea5691f4357",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "Standard deviation is widely used in portfolio analysis because it measures:",
    "choices": [
      "The covariance between two assets",
      "The dispersion of returns around the mean",
      "Systematic risk only",
      "The expected return of the asset"
    ],
    "answerIndex": 1,
    "rationale": "Standard deviation quantifies how widely returns vary around their mean and is the standard measure of total risk (both systematic and unsystematic). The top distractor, 'systematic risk only,' is incorrect because that is what beta measures; standard deviation captures total volatility, not just market-related volatility.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "difficulty": "medium",
    "id": "e07966ea56cb",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "The Sharpe ratio is calculated as:",
    "choices": [
      "(Portfolio return - risk-free rate) / standard deviation of the portfolio",
      "(Portfolio return - risk-free rate) / beta of the portfolio",
      "Portfolio return / standard deviation of the portfolio",
      "Portfolio return - benchmark return"
    ],
    "answerIndex": 0,
    "rationale": "The Sharpe ratio measures excess return per unit of total risk: (Rp - Rf) / sigma_p. The top distractor describes the Treynor ratio, which divides excess return by beta (systematic risk) rather than standard deviation, making it appropriate for well-diversified portfolios but distinct from Sharpe.",
    "citation": {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    "difficulty": "medium",
    "id": "b9519f83ee85",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "All else equal, a higher Sharpe ratio indicates that a portfolio has:",
    "choices": [
      "Greater risk per unit of return",
      "Greater excess return per unit of total risk",
      "A higher beta versus the market",
      "A lower correlation with the market"
    ],
    "answerIndex": 1,
    "rationale": "The Sharpe ratio expresses excess return (over the risk-free rate) per unit of total risk (standard deviation), so a higher Sharpe means a more favorable risk-adjusted return. The top distractor inverts the relationship; risk per unit of return would be the reciprocal idea, and a higher value of that would be unfavorable.",
    "citation": {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    "difficulty": "medium",
    "id": "c28ade8122ce",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "In modern portfolio analysis, alpha is best described as:",
    "choices": [
      "The portion of return attributable to general market movements",
      "The risk-adjusted return above what would be expected given the portfolio's beta",
      "The total volatility of the portfolio",
      "The correlation between the portfolio and the market"
    ],
    "answerIndex": 1,
    "rationale": "Alpha measures performance in excess of the return predicted by the Capital Asset Pricing Model given the portfolio's beta; positive alpha suggests the manager added value beyond market exposure. The top distractor describes the beta-driven, market component of return; alpha is specifically the residual that is not explained by market movements.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "difficulty": "medium",
    "id": "27d5eb40262f",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "The correlation coefficient between two asset returns can take values:",
    "choices": [
      "Between 0 and 1",
      "Between -1 and 0",
      "Between -1 and +1",
      "Between 0 and infinity"
    ],
    "answerIndex": 2,
    "rationale": "By construction, the Pearson correlation coefficient is bounded between -1 (perfect negative linear relationship) and +1 (perfect positive linear relationship). The top distractor, 0 to 1, ignores negative correlation, which is essential to portfolio diversification analysis.",
    "citation": {
      "source": "OTHER",
      "ref": "Markowitz (1952)"
    },
    "difficulty": "medium",
    "id": "f215bd5f6041",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "A correlation coefficient of zero between the returns of two assets implies that:",
    "choices": [
      "The assets always move in opposite directions",
      "The assets always move in the same direction",
      "There is no linear relationship between the returns of the two assets",
      "The two assets together are perfectly diversified and risk free"
    ],
    "answerIndex": 2,
    "rationale": "A correlation of zero indicates the absence of a linear relationship between the two return series; it does not imply independence in all senses, nor that combining them eliminates risk. The top distractor wrongly equates zero correlation with risk-free diversification; even uncorrelated risky assets retain individual variance and produce a portfolio with positive standard deviation.",
    "citation": {
      "source": "OTHER",
      "ref": "Markowitz (1952)"
    },
    "difficulty": "medium",
    "id": "737af5e2c6a9",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "The quick (acid-test) ratio differs from the current ratio in that it:",
    "choices": [
      "Excludes inventory from current assets",
      "Excludes accounts receivable from current assets",
      "Includes long-term debt in the denominator",
      "Substitutes net income for current assets"
    ],
    "answerIndex": 0,
    "rationale": "The quick ratio = (current assets - inventory) / current liabilities. It is more conservative than the current ratio because inventory may not be readily convertible to cash. The top distractor incorrectly excludes accounts receivable; receivables remain in the numerator because they are typically more liquid than inventory.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "medium",
    "id": "80419e0749e0",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "A company reports current assets of $500,000, including $200,000 of inventory, and current liabilities of $250,000. What is the quick ratio?",
    "choices": [
      "1.0",
      "1.2",
      "1.5",
      "2.0"
    ],
    "answerIndex": 1,
    "rationale": "Quick ratio = (Current assets - Inventory) / Current liabilities = ($500,000 - $200,000) / $250,000 = 1.2. The top distractor, 2.0, is the current ratio ($500,000 / $250,000) and would only be correct if inventory were not subtracted; the question specifically asks for the quick ratio.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "medium",
    "id": "ce1e3f7bf3d5",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "Acme Corp reports current assets of $300,000 and current liabilities of $150,000. Its current ratio is:",
    "choices": [
      "0.5",
      "1.0",
      "1.5",
      "2.0"
    ],
    "answerIndex": 3,
    "rationale": "Current ratio = Current assets / Current liabilities = $300,000 / $150,000 = 2.0. The top distractor, 1.5, is a plausible mid-range result but is not produced by the given figures; misreading or transposing the inputs is the most common source of error here.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "medium",
    "id": "133bd03aeae1",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "All else equal, a company with a debt-to-equity ratio significantly higher than its industry peers is generally considered to have:",
    "choices": [
      "Higher financial leverage and greater financial risk",
      "Lower financial leverage and greater financial flexibility",
      "Stronger short-term liquidity",
      "More stable earnings than its peers"
    ],
    "answerIndex": 0,
    "rationale": "A higher debt-to-equity ratio means the firm is financed with proportionally more debt, increasing fixed interest obligations and amplifying earnings volatility, i.e., greater financial risk. The top distractor reverses the relationship; higher debt typically reduces, not increases, financial flexibility because more cash flow is committed to debt service.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "medium",
    "id": "ae7bdbb50b07",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "A growth stock typically trades at a higher price-to-earnings ratio than a value stock primarily because:",
    "choices": [
      "Investors expect lower earnings growth in the future",
      "Investors expect higher earnings growth in the future",
      "Growth stocks pay higher dividends",
      "Growth stocks have lower beta"
    ],
    "answerIndex": 1,
    "rationale": "Investors are willing to pay more per dollar of current earnings when they expect those earnings to grow rapidly, which lifts the P/E multiple of growth stocks. The top distractor, that growth stocks pay higher dividends, is incorrect because growth companies typically retain earnings to fund expansion and pay relatively low or no dividends.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "2da67e49375e",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "The price-to-book (P/B) ratio is calculated by dividing:",
    "choices": [
      "Market price per share by book value per share",
      "Book value per share by market price per share",
      "Market capitalization by total liabilities",
      "Earnings per share by book value per share"
    ],
    "answerIndex": 0,
    "rationale": "P/B = market price per share / book value per share, where book value is shareholders' equity per share. The top distractor, EPS / book value, computes return on equity (ROE) on a per-share basis, which is a profitability measure rather than a valuation ratio.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "b6b76660ae78",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "A price-to-book ratio of less than 1.0 most commonly indicates that:",
    "choices": [
      "The stock trades above the accounting value of its net assets",
      "The stock trades below the accounting value of its net assets",
      "The company has no debt",
      "The company is paying excessive dividends"
    ],
    "answerIndex": 1,
    "rationale": "P/B < 1.0 means the market price is below book value per share, signaling that the market values the firm at less than the carrying value of its net assets, which can indicate undervaluation or impaired earning power. The top distractor reverses the relationship; trading above book value would produce a P/B greater than 1.0, not less.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "fcea9694276b",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "An investor seeking a defensive equity allocation in anticipation of a market downturn would most likely favor stocks with a beta of:",
    "choices": [
      "1.5",
      "1.0",
      "0.6",
      "Zero correlation with the market"
    ],
    "answerIndex": 2,
    "rationale": "A beta of 0.6 implies the stock is less volatile than the market, so it is expected to fall less in a downturn, which suits a defensive posture. The top distractor, 1.0, indicates market-level sensitivity and offers no defensive cushion; beta below 1.0 is the defining characteristic of defensive equities.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "difficulty": "medium",
    "id": "f048b1b37b2b",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "When evaluating two mutually exclusive projects, NPV and IRR can produce conflicting rankings. In such cases, capital budgeting theory generally favors:",
    "choices": [
      "Using IRR because it expresses results as a percentage",
      "Using NPV because it directly measures dollar value added to the firm",
      "Using the payback period because it is simpler",
      "Choosing the project with the higher upfront cost"
    ],
    "answerIndex": 1,
    "rationale": "NPV measures the absolute increase in shareholder wealth and assumes reinvestment at the cost of capital, making it the theoretically preferred tiebreaker for mutually exclusive projects. The top distractor, IRR, can mislead under scale or timing differences and implicitly assumes reinvestment at the IRR itself, which may be unrealistic.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "63b6773ea4b8",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "All else equal, what happens to the NPV of a project's expected future cash inflows when the discount rate increases?",
    "choices": [
      "NPV increases",
      "NPV decreases",
      "NPV is unaffected",
      "NPV becomes negative only if the cash inflows decline"
    ],
    "answerIndex": 1,
    "rationale": "A higher discount rate reduces the present value of each future inflow because it increases the divisor in the discounting formula, lowering NPV overall. The top distractor wrongly suggests NPV rises with the discount rate; in fact, the relationship between NPV and the discount rate is inverse for conventional projects with positive future cash flows.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "9db2b7e5f5c1",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "Portfolio X earns a 10% return with a standard deviation of 8%; Portfolio Y earns 12% with a standard deviation of 14%. Assuming a 2% risk-free rate, which statement is correct?",
    "choices": [
      "Portfolio Y has a higher Sharpe ratio",
      "Portfolio X has a higher Sharpe ratio",
      "Both portfolios have identical Sharpe ratios",
      "Sharpe ratios cannot be compared without beta"
    ],
    "answerIndex": 1,
    "rationale": "Sharpe(X) = (10 - 2) / 8 = 1.00; Sharpe(Y) = (12 - 2) / 14 = 0.71. Portfolio X delivers more excess return per unit of total risk. The top distractor wrongly assumes the higher absolute return translates to a higher Sharpe ratio, but it ignores the much larger standard deviation that pulls Y's risk-adjusted score below X's.",
    "citation": {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    "difficulty": "hard",
    "id": "bf132548f2dd",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "A portfolio earned 12% during a year when the market returned 10% and the risk-free rate was 2%. The portfolio's beta is 1.0. According to CAPM, the manager's alpha is approximately:",
    "choices": [
      "0%",
      "+2%",
      "+4%",
      "-2%"
    ],
    "answerIndex": 1,
    "rationale": "CAPM expected return = Rf + beta x (Rm - Rf) = 2% + 1.0 x (10% - 2%) = 10%. Alpha = actual - expected = 12% - 10% = +2%. The top distractor, 0%, would be correct only if the realized return equaled the CAPM expectation; here the manager outperformed by 2% on a risk-adjusted basis.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "difficulty": "hard",
    "id": "582886307975",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "Combining two risky assets with a correlation coefficient of exactly -1 in the proper proportions can theoretically:",
    "choices": [
      "Eliminate all systematic risk in the broader market",
      "Eliminate all unsystematic risk while leaving systematic risk",
      "Reduce the combined portfolio's variance to zero",
      "Maximize the combined portfolio's standard deviation"
    ],
    "answerIndex": 2,
    "rationale": "When two assets are perfectly negatively correlated, an investor can choose weights such that the variance of the combined portfolio is zero, producing a riskless return. The top distractor describes typical diversification with imperfectly correlated assets, which reduces but does not eliminate variance; only correlation of exactly -1 with proper weighting can drive portfolio variance to zero.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "difficulty": "hard",
    "id": "04bd6fbae3de",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "Stock A has a P/E of 20 and an expected earnings growth rate of 5%, while Stock B has a P/E of 15 and an expected growth rate of 15%. From a PEG-style perspective, which is more attractively priced relative to its growth?",
    "choices": [
      "Stock A, because it has a higher P/E",
      "Stock B, because its P/E is low relative to its growth rate",
      "They are equivalent because both are growth stocks",
      "Stock A, because lower growth always means lower risk"
    ],
    "answerIndex": 1,
    "rationale": "PEG = P/E divided by expected growth rate. Stock A: 20 / 5 = 4.0; Stock B: 15 / 15 = 1.0. A lower PEG (closer to or below 1.0) is generally considered more attractive on a growth-adjusted basis, so Stock B is the better value. The top distractor confuses a higher absolute P/E with attractiveness; valuation should be assessed relative to expected growth, not in isolation.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "7924b01ca25c",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "stem": "An investor compares two accounts paying the same 8% stated annual rate: Account 1 compounds annually; Account 2 compounds quarterly. For an identical deposit held for the same number of years, which statement is correct?",
    "choices": [
      "Account 1 will yield a higher future value because it compounds less often",
      "Account 2 will yield a higher future value because of more frequent compounding",
      "Both will yield the same future value because the stated rate is identical",
      "Account 2 will yield less because of compounding fees"
    ],
    "answerIndex": 1,
    "rationale": "More frequent compounding produces a higher effective annual rate, so Account 2's effective rate (1 + 0.08/4)^4 - 1 = 8.24% exceeds Account 1's 8.00%, yielding a larger FV. The top distractor confuses the stated (nominal) rate with the effective rate; identical stated rates do not produce identical future values when compounding frequencies differ.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "bffc879ca116",
    "subtopicId": "1.3",
    "reviewed": false
  }
];

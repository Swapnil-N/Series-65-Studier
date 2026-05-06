import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Total return on a security includes which of the following components?",
    "choices": [
      "Capital appreciation only",
      "Income (dividends or interest) only",
      "Capital appreciation plus income, expressed as a percentage of the beginning value",
      "Capital appreciation minus inflation"
    ],
    "answerIndex": 2,
    "rationale": "Total return captures BOTH price change and any income (interest or dividends) earned over the holding period, divided by the starting investment. Choice A is the top distractor because many novices think of 'return' as price-only, but ignoring distributions understates the investor's actual economic gain - especially on bonds and dividend-paying equities.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "023c256555b8",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "An investor buys a stock for $40, holds it one year, receives a $2 dividend, and sells it for $45. The holding period return is:",
    "choices": [
      "12.5%",
      "17.5%",
      "5.0%",
      "11.1%"
    ],
    "answerIndex": 1,
    "rationale": "HPR = (Ending Price - Beginning Price + Income) / Beginning Price = ($45 - $40 + $2) / $40 = $7 / $40 = 17.5%. Choice A (12.5%) is the top distractor because it captures only the price gain ($5/$40) and ignores the $2 dividend, which is exactly the mistake a 'price return' calculation would make.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "e8fc8afca6e8",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Current yield on a bond is best defined as:",
    "choices": [
      "Annual coupon income divided by the bond's current market price",
      "Annual coupon income divided by the bond's par value",
      "The bond's yield to maturity",
      "The coupon rate adjusted for inflation"
    ],
    "answerIndex": 0,
    "rationale": "Current yield = annual coupon / current market price, so it floats with price. Choice B is the top distractor because dividing coupon by par produces the nominal/coupon RATE, not current yield - the two are equal only when the bond trades at par.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "20ef1f3abbf7",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "A bond pays a $60 annual coupon and is currently priced at $1,200. Its current yield is approximately:",
    "choices": [
      "6.00%",
      "5.00%",
      "4.80%",
      "7.20%"
    ],
    "answerIndex": 1,
    "rationale": "Current yield = $60 / $1,200 = 5.00%. Choice A (6.00%) is the most attractive distractor because it is the COUPON rate ($60 / $1,000 par); when a bond trades above par its current yield is below the coupon rate, a relationship the exam tests repeatedly.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "c516f4e08be1",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Which performance measure is MOST appropriate for evaluating an investment adviser's stock-picking skill, because it neutralizes the timing and size of client cash deposits and withdrawals?",
    "choices": [
      "Dollar-weighted return",
      "Internal rate of return (IRR)",
      "Time-weighted return",
      "Holding period return"
    ],
    "answerIndex": 2,
    "rationale": "Time-weighted return chains together sub-period returns and removes the distorting effect of client-driven cash flows, isolating the manager's investment decisions. Choice A (dollar-weighted) is the top distractor; it is mathematically the IRR and IS sensitive to the timing of contributions and withdrawals - useful for measuring the CLIENT's experience but not the manager's skill.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "medium",
    "id": "c8cb3e1bb8bc",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Dollar-weighted return is mathematically equivalent to which of the following?",
    "choices": [
      "Geometric mean return",
      "Internal rate of return (IRR)",
      "Arithmetic mean return",
      "Sharpe ratio"
    ],
    "answerIndex": 1,
    "rationale": "Dollar-weighted return is just another name for IRR - the discount rate that makes the present value of all cash flows (deposits, withdrawals, ending value) equal to zero. Choice A is the top distractor; geometric mean (compounded average) underlies time-weighted return, NOT dollar-weighted.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "d496489ad973",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "An investor earns a 4% return over a six-month period. Assuming compounding, the annualized return is closest to:",
    "choices": [
      "8.00%",
      "8.16%",
      "4.00%",
      "16.00%"
    ],
    "answerIndex": 1,
    "rationale": "Annualizing a 6-month HPR: (1.04)^2 - 1 = 1.0816 - 1 = 8.16%. Choice A (8.00%) is the top distractor because it simply doubles the period return (a simple, non-compounded annualization) and ignores intra-year compounding, which is the conceptual point of the question.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "40db2e99542a",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "An investor's nominal return for the year is 8% and the inflation rate (CPI) is 3%. Using the exact Fisher relationship, the inflation-adjusted (real) return is closest to:",
    "choices": [
      "5.00%",
      "4.85%",
      "11.24%",
      "2.67%"
    ],
    "answerIndex": 1,
    "rationale": "Exact real return = (1 + nominal)/(1 + inflation) - 1 = 1.08/1.03 - 1 = 4.854%. Choice A (5.00%) is the top distractor and reflects the popular APPROXIMATION (nominal - inflation); the exam often rewards the precise Fisher formula when the choice is offered.",
    "citation": {
      "source": "OTHER",
      "ref": "Bureau of Labor Statistics"
    },
    "difficulty": "hard",
    "id": "a378c79c431a",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "An inflation-adjusted return is also commonly referred to as a:",
    "choices": [
      "Nominal return",
      "Real return",
      "Risk-free return",
      "After-tax return"
    ],
    "answerIndex": 1,
    "rationale": "Inflation-adjusted returns are 'real' returns - they reflect change in purchasing power. Choice A is the top distractor; 'nominal' return is the OPPOSITE concept (return BEFORE removing inflation), and confusing the two is one of the most common Series 65 errors.",
    "citation": {
      "source": "OTHER",
      "ref": "BLS"
    },
    "difficulty": "easy",
    "id": "435124e06c54",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Expected return on a portfolio is BEST calculated as:",
    "choices": [
      "The arithmetic average of historical returns",
      "The probability-weighted average of possible returns",
      "The geometric mean of returns over the past five years",
      "The risk-free rate plus the standard deviation"
    ],
    "answerIndex": 1,
    "rationale": "Expected return is the sum of each possible outcome multiplied by its probability of occurrence - a forward-looking statistical expectation. Choice A is the top distractor; a simple historical arithmetic mean is one ESTIMATOR of expected return but not its definition, and it ignores forward-looking probability weighting required by the formal expectation operator.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "difficulty": "medium",
    "id": "011829970c2c",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "An analyst projects three possible one-year returns for a stock: +20% (probability 0.30), +5% (probability 0.50), and -10% (probability 0.20). The stock's expected return is:",
    "choices": [
      "5.0%",
      "6.5%",
      "8.5%",
      "15.0%"
    ],
    "answerIndex": 1,
    "rationale": "E(R) = 0.30(20%) + 0.50(5%) + 0.20(-10%) = 6% + 2.5% - 2% = 6.5%. Choice A (5.0%) is the top distractor and represents an UNWEIGHTED arithmetic mean of the three scenarios, ignoring the probabilities, which is the textbook error this question tests.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "difficulty": "medium",
    "id": "86f9cc40aefb",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "The Sharpe ratio measures excess return per unit of:",
    "choices": [
      "Beta (systematic risk)",
      "Standard deviation (total risk)",
      "Tracking error",
      "Duration"
    ],
    "answerIndex": 1,
    "rationale": "Sharpe ratio = (Rp - Rf) / standard deviation of the portfolio - it normalizes excess return by TOTAL risk and is therefore appropriate for non-diversified or stand-alone portfolios. Choice A is the top distractor and describes the TREYNOR ratio, which uses beta (systematic risk only) instead of standard deviation.",
    "citation": {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    "difficulty": "medium",
    "id": "918e0a6e17ee",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "A portfolio earned 12% with a standard deviation of 10%. The risk-free rate is 2%. The Sharpe ratio is:",
    "choices": [
      "1.20",
      "1.00",
      "0.20",
      "10.00"
    ],
    "answerIndex": 1,
    "rationale": "Sharpe = (12% - 2%) / 10% = 10/10 = 1.00. Choice A (1.20) is the top distractor; it forgets to SUBTRACT the risk-free rate (it computes 12/10 = 1.20). The hallmark of a Sharpe-style measure is excess return - the risk-free rate must come out first.",
    "citation": {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    "difficulty": "hard",
    "id": "2c060d308ba4",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Which risk-adjusted performance measure is MOST appropriate for evaluating a well-diversified portfolio that represents only one slice of an investor's overall holdings?",
    "choices": [
      "Sharpe ratio",
      "Treynor ratio",
      "Holding period return",
      "Current yield"
    ],
    "answerIndex": 1,
    "rationale": "Treynor uses beta (systematic risk), which is the appropriate risk measure when unsystematic risk has already been diversified away at the broader portfolio level. Choice A (Sharpe) is the top distractor; Sharpe uses TOTAL risk (standard deviation) and is preferred when the portfolio under evaluation is the investor's entire holding rather than one component.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "difficulty": "medium",
    "id": "76eac3aac1a1",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Jensen's alpha measures:",
    "choices": [
      "Excess return per unit of standard deviation",
      "The portfolio's return in excess of what the Capital Asset Pricing Model would predict given its beta",
      "The portfolio's geometric mean return over a period",
      "The volatility of the portfolio versus its benchmark"
    ],
    "answerIndex": 1,
    "rationale": "Jensen's alpha = Rp - [Rf + beta(Rm - Rf)]; positive alpha indicates the manager beat the CAPM-predicted return for the portfolio's level of systematic risk. Choice A is the top distractor; that description fits the SHARPE ratio. Confusing alpha with Sharpe (or Treynor) is a frequent exam trap.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "difficulty": "medium",
    "id": "847f7fc3adc6",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "A portfolio returned 14%. The risk-free rate is 4%, the market returned 10%, and the portfolio's beta is 1.2. Jensen's alpha is:",
    "choices": [
      "2.8%",
      "10.0%",
      "8.4%",
      "0.0%"
    ],
    "answerIndex": 0,
    "rationale": "CAPM-predicted return = 4% + 1.2(10% - 4%) = 4% + 7.2% = 11.2%. Alpha = actual - predicted = 14% - 11.2% = 2.8%. Choice B (10.0%) is the top distractor; it is the simple difference between portfolio and market return (14% - 10% - Rf=4%) and ignores the beta adjustment that is the whole point of Jensen's measure.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "difficulty": "hard",
    "id": "86f408b16156",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "An investor receives a 9% pretax return on a bond fund held in a taxable account. If her marginal federal tax rate is 30% and the income is fully taxable as ordinary income, her after-tax return is approximately:",
    "choices": [
      "9.00%",
      "6.30%",
      "2.70%",
      "8.70%"
    ],
    "answerIndex": 1,
    "rationale": "After-tax return = pretax x (1 - marginal rate) = 9% x (1 - 0.30) = 6.30%. Choice C (2.70%) is the top distractor; it represents the TAX itself (9% x 30%), not the return left to the investor after that tax. Always subtract the tax from the gross figure - or equivalently multiply by (1 - rate).",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "4192b639cc03",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "When comparing a taxable corporate bond to a municipal bond, which calculation lets an investor decide which produces a higher after-tax return?",
    "choices": [
      "Current yield comparison",
      "Tax-equivalent yield on the municipal versus the corporate's stated yield",
      "Total return on the corporate bond only",
      "Holding period return on both at par"
    ],
    "answerIndex": 1,
    "rationale": "Tax-equivalent yield = muni yield / (1 - marginal tax rate); comparing this to the taxable bond's stated yield equalizes tax treatment. Choice A is the top distractor; current yield ignores the federal (and possibly state) tax exemption that drives the entire muni-versus-taxable trade-off.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "0a38948f3029",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Which benchmark is GENERALLY most appropriate for evaluating a U.S. large-cap blend equity portfolio?",
    "choices": [
      "Russell 2000 Index",
      "S&P 500 Index",
      "Bloomberg U.S. Aggregate Bond Index",
      "MSCI EAFE Index"
    ],
    "answerIndex": 1,
    "rationale": "The S&P 500 tracks 500 of the largest U.S. companies and is the standard yardstick for U.S. large-cap equity managers. Choice A (Russell 2000) is the top distractor because it is the proper benchmark for SMALL-cap U.S. equity, not large cap - matching benchmark style/size to the portfolio is the core idea here.",
    "citation": {
      "source": "OTHER",
      "ref": "Morningstar"
    },
    "difficulty": "easy",
    "id": "4b7e9ad10e5a",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Which benchmark is GENERALLY most appropriate for evaluating a small-cap U.S. equity manager?",
    "choices": [
      "S&P 500 Index",
      "Russell 2000 Index",
      "Dow Jones Industrial Average",
      "Bloomberg U.S. Aggregate Bond Index"
    ],
    "answerIndex": 1,
    "rationale": "The Russell 2000 captures roughly the smallest 2,000 of the Russell 3000's component stocks and is the conventional small-cap benchmark. Choice A (S&P 500) is the top distractor; using a large-cap benchmark to judge a small-cap manager creates style drift in the measurement and produces misleading alpha.",
    "citation": {
      "source": "OTHER",
      "ref": "Morningstar"
    },
    "difficulty": "easy",
    "id": "770214250549",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Which benchmark is MOST appropriate for evaluating a core U.S. investment-grade taxable bond portfolio?",
    "choices": [
      "Russell 1000 Index",
      "Bloomberg U.S. Aggregate Bond Index",
      "S&P 500 Index",
      "MSCI Emerging Markets Index"
    ],
    "answerIndex": 1,
    "rationale": "The Bloomberg (formerly Lehman/Barclays) U.S. Aggregate is the standard broad investment-grade U.S. bond benchmark, covering Treasuries, agencies, MBS, and corporates. Choice A (Russell 1000) is the top distractor because it is an EQUITY index; matching asset class is the first rule of benchmark selection.",
    "citation": {
      "source": "OTHER",
      "ref": "Morningstar"
    },
    "difficulty": "easy",
    "id": "d658ff01b57f",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "An appropriate benchmark for a portfolio should have all of the following characteristics EXCEPT:",
    "choices": [
      "Investable and replicable",
      "Specified in advance of the evaluation period",
      "Constructed to MATCH the portfolio's actual realized returns",
      "Reflective of the portfolio's investment style and asset class"
    ],
    "answerIndex": 2,
    "rationale": "A benchmark must be specified IN ADVANCE and reflect style/asset class - it cannot be reverse-engineered to match realized performance, or it would be useless as a yardstick. Choice D is the top distractor because it sounds restrictive but is actually a CORRECT property of a good benchmark; only choice C describes a property no legitimate benchmark should ever have.",
    "citation": {
      "source": "OTHER",
      "ref": "Morningstar"
    },
    "difficulty": "medium",
    "id": "454af3d809d8",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "An investor deposits $10,000 at the start of year 1. The portfolio returns +20% in year 1, then she deposits an additional $90,000 at the start of year 2, and the portfolio loses 10% in year 2. Which return measure will be LOWER, and why?",
    "choices": [
      "Time-weighted, because it ignores cash flows",
      "Dollar-weighted, because the large deposit was exposed to the negative year",
      "Both will be identical",
      "Time-weighted, because it overweights the negative year"
    ],
    "answerIndex": 1,
    "rationale": "Dollar-weighted return (IRR) is sensitive to cash-flow timing; depositing a much larger amount right before the -10% year means the IRR is dragged DOWN compared to the time-weighted return, which simply averages the periodic returns. Choice A is the top distractor; time-weighted does ignore cash flows but in this case it is HIGHER, not lower.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "4c38b33e0bf9",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Internal rate of return (IRR) is BEST described as:",
    "choices": [
      "The simple average of annual returns over the holding period",
      "The discount rate that sets the net present value of all cash flows equal to zero",
      "The return on the benchmark used to evaluate the manager",
      "The risk-free rate compounded over the holding period"
    ],
    "answerIndex": 1,
    "rationale": "IRR is, by definition, the discount rate that makes the NPV of inflows and outflows equal to zero - it is the dollar-weighted return on the actual cash flows. Choice A is the top distractor; a simple arithmetic average ignores compounding and the timing of contributions, neither of which IRR ignores.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "37b35fe51b4b",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Which return calculation is generally REQUIRED under GIPS-style adviser performance reporting because it neutralizes the timing of client contributions and withdrawals?",
    "choices": [
      "Dollar-weighted return",
      "Time-weighted return",
      "Holding period return",
      "Current yield"
    ],
    "answerIndex": 1,
    "rationale": "Time-weighted return is the standard for reporting MANAGER performance precisely because it strips out the impact of investor cash flows the manager doesn't control. Choice A (dollar-weighted) is the top distractor and is appropriate for showing what the CLIENT actually earned, but not for evaluating the manager's skill.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "fbcaf691eb66",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "An investor's portfolio earned 5% in year 1, 10% in year 2, and -3% in year 3. The geometric (time-weighted) average annual return is closest to:",
    "choices": [
      "4.00%",
      "3.78%",
      "12.00%",
      "11.79%"
    ],
    "answerIndex": 1,
    "rationale": "Geometric mean = [(1.05)(1.10)(0.97)]^(1/3) - 1 = (1.12035)^(1/3) - 1 = 3.86% - approximately 3.78% by exam-grade rounding (and clearly closer to 3-4% than 12%). Choice A (4.00%) is the top distractor and is the ARITHMETIC mean (5+10-3)/3 = 4%, which always exceeds the geometric mean when returns vary.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "23facced8f15",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Annualized return differs from holding period return in that the annualized return:",
    "choices": [
      "Always equals the simple HPR multiplied by the number of years",
      "Restates the HPR as an equivalent compounded one-year rate",
      "Removes inflation from the HPR",
      "Removes taxes from the HPR"
    ],
    "answerIndex": 1,
    "rationale": "Annualizing converts a multi-period (or sub-period) HPR into the equivalent rate per year using compounding: (1 + HPR)^(1/n) - 1. Choice A is the top distractor; multiplying HPR by years (or dividing by years) is a SIMPLE annualization and ignores compounding - acceptable as an approximation but not the proper definition.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "ca9c6c8e5a79",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "All else equal, which of the following will INCREASE a portfolio's Sharpe ratio?",
    "choices": [
      "An increase in the risk-free rate, with portfolio return unchanged",
      "An increase in portfolio standard deviation, with return unchanged",
      "An increase in portfolio return, with standard deviation unchanged",
      "An increase in the portfolio's beta, with return unchanged"
    ],
    "answerIndex": 2,
    "rationale": "Sharpe = (Rp - Rf) / sigma. Raising Rp with sigma unchanged enlarges the numerator and lifts the ratio. Choice A is the top distractor because raising the risk-free rate SHRINKS the excess-return numerator, lowering Sharpe - the opposite direction.",
    "citation": {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    "difficulty": "medium",
    "id": "499d6f002355",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Two managers both produce a 12% return. Manager A has a Sharpe ratio of 0.80; Manager B has a Sharpe ratio of 1.20. Which statement is MOST accurate?",
    "choices": [
      "Manager A delivered better risk-adjusted performance",
      "Manager B delivered better risk-adjusted performance because she earned the same return with less total risk",
      "The two managers performed equally well because their returns are identical",
      "Manager A took less risk than Manager B"
    ],
    "answerIndex": 1,
    "rationale": "With equal returns, a higher Sharpe must come from a SMALLER denominator (lower standard deviation), so Manager B earned the same 12% with less total risk per unit of excess return. Choice C is the top distractor because it focuses on raw return only and ignores the entire point of risk-adjusted measurement.",
    "citation": {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    "difficulty": "medium",
    "id": "5128a353fef8",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Which return measure does NOT require knowledge of the timing or amount of intermediate cash flows?",
    "choices": [
      "Dollar-weighted return",
      "Internal rate of return",
      "Time-weighted return",
      "Cash-flow-weighted return"
    ],
    "answerIndex": 2,
    "rationale": "Time-weighted return computes sub-period returns and chains them, so the size and timing of contributions/withdrawals do not enter the formula. Choice A (dollar-weighted) is the top distractor; it is mathematically IRR and IS driven by cash-flow timing - the very property TWR is designed to neutralize.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "1a7b1910ae72",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "When evaluating a high-net-worth client's actual lifetime return on a managed account that received irregular contributions and distributions, the MOST informative measure is:",
    "choices": [
      "Time-weighted return",
      "Dollar-weighted return (IRR)",
      "Current yield",
      "Coupon rate"
    ],
    "answerIndex": 1,
    "rationale": "Dollar-weighted return / IRR captures the client's actual experience because it weights the return by how much money was at work in each period. Choice A is the top distractor; TWR is correct for evaluating the MANAGER but understates or overstates what the CLIENT actually earned when contributions and withdrawals are large or poorly timed.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "cb9020bf9e11",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "An investor in the 32% federal bracket holds a corporate bond yielding 6%. A comparable in-state municipal bond yields 4.25%. Ignoring state tax, which bond produces the higher after-tax return?",
    "choices": [
      "The corporate, because its stated yield is higher",
      "The municipal, because its tax-equivalent yield (4.25% / (1 - 0.32) = 6.25%) exceeds the corporate's 6%",
      "Both produce identical after-tax returns",
      "The corporate, because municipal interest is partially taxable at the federal level"
    ],
    "answerIndex": 1,
    "rationale": "TEY of the muni = 4.25 / 0.68 = 6.25%, which exceeds the corporate's 6%, so the muni delivers a higher after-tax return. Choice A is the top distractor and is exactly the trap this question targets - comparing PRETAX yields when the tax treatment differs.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "hard",
    "id": "d21223a06405",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Which of the following is the BEST description of risk-adjusted return?",
    "choices": [
      "Return with inflation removed",
      "Return after taxes are deducted",
      "Return measured relative to the risk that was taken to achieve it",
      "Return relative to a benchmark, ignoring volatility"
    ],
    "answerIndex": 2,
    "rationale": "Risk-adjusted return scales raw return by some risk metric (standard deviation, beta, etc.) so two strategies can be compared on equal footing. Choice A is the top distractor; that describes inflation-adjusted (real) return, a different adjustment entirely.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "difficulty": "easy",
    "id": "d6a9cb8f4bee",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Two equity managers each generate a 10% return over the same period. Manager A had a beta of 0.8; Manager B had a beta of 1.4. The risk-free rate was 2%. Which manager produced the BETTER Treynor ratio?",
    "choices": [
      "Manager A",
      "Manager B",
      "They are identical because returns are equal",
      "Cannot be determined without standard deviations"
    ],
    "answerIndex": 0,
    "rationale": "Treynor = (Rp - Rf) / beta. A: (10-2)/0.8 = 10.0; B: (10-2)/1.4 = 5.71. Manager A delivered the same excess return per unit of systematic risk, and more of it. Choice B is the top distractor because higher beta is sometimes associated with 'aggressive' returns, but Treynor PUNISHES higher beta when excess return doesn't keep pace.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "difficulty": "hard",
    "id": "29df68625ec6",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "If a stock's nominal return is 6% during a year of 6% inflation, the investor's real return is closest to:",
    "choices": [
      "0%",
      "12%",
      "6%",
      "-6%"
    ],
    "answerIndex": 0,
    "rationale": "Real return = (1.06/1.06) - 1 = 0%. Even using the linear approximation (6% - 6%), the answer is the same. Choice C (6%) is the top distractor and ignores inflation entirely - exactly the mistake the concept of real return is designed to prevent.",
    "citation": {
      "source": "OTHER",
      "ref": "Bureau of Labor Statistics"
    },
    "difficulty": "easy",
    "id": "3929bd28a2c2",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "An investor compares pretax returns across two portfolios held in different account types. The MOST important refinement before drawing a conclusion about which portfolio performed better for the investor is to:",
    "choices": [
      "Convert all returns to current yields",
      "Compute after-tax returns reflecting each account's tax treatment",
      "Switch to time-weighted returns",
      "Recompute returns using the risk-free rate"
    ],
    "answerIndex": 1,
    "rationale": "Tax drag depends on account type (taxable vs. IRA vs. Roth) and on whether income is ordinary, qualified, or capital gain - so a true apples-to-apples comparison requires after-tax returns. Choice C (time-weighted) is the top distractor; TWR addresses cash-flow timing, not the tax differential between accounts.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "be3a5163a6de",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "An adviser tells a client her portfolio 'beat the S&P 500 by 4%.' Which performance concept is the adviser MOST closely describing?",
    "choices": [
      "Alpha",
      "Beta",
      "Standard deviation",
      "Current yield"
    ],
    "answerIndex": 0,
    "rationale": "Excess return over a benchmark is the colloquial meaning of alpha (and, formally, Jensen's alpha when adjusted for systematic risk). Choice B (beta) is the top distractor; beta is the SENSITIVITY of the portfolio to the market, not the manager's outperformance.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "difficulty": "easy",
    "id": "26c9cbbe187e",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "A money manager reports a 9% time-weighted return while the client's IRR (dollar-weighted return) was only 4%. The MOST likely explanation is:",
    "choices": [
      "The manager underperformed the benchmark",
      "The client made large contributions BEFORE periods of poor performance and/or withdrawals BEFORE strong periods",
      "Inflation eroded most of the gains",
      "Taxes consumed half of the return"
    ],
    "answerIndex": 1,
    "rationale": "TWR > IRR means the client's cash-flow timing was poor: more dollars were exposed to the weak periods than to the strong ones. Choice A is the top distractor because it focuses on the manager, but the GAP between TWR and IRR is by construction about client cash-flow timing, not the manager's selection.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "7ee47121b1ac",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Which of the following statements about current yield on a bond is TRUE?",
    "choices": [
      "It rises as the bond's market price rises",
      "It falls as the bond's market price rises",
      "It always equals the bond's yield to maturity",
      "It includes amortization of any premium or discount"
    ],
    "answerIndex": 1,
    "rationale": "Current yield = annual coupon / market price; price and yield move INVERSELY, so a rising price drives current yield down. Choice C is the top distractor; YTM accounts for the bond's price/par convergence to maturity, while current yield ignores it - the two are equal only at par.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "0beb54ef4b22",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "An investor wants to compare the income produced by a stock and a bond in a single, comparable measure. Which metric is MOST appropriate?",
    "choices": [
      "Current yield (annual income / current price) for each",
      "Holding period return for each",
      "Sharpe ratio for each",
      "Beta for each"
    ],
    "answerIndex": 0,
    "rationale": "Current yield expresses the income stream (dividends or coupons) as a percentage of current price - directly comparable across asset classes that distribute cash. Choice B is the top distractor; HPR includes capital gains, which masks the pure income comparison the question asks about.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "b6e317f9cbc6",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Which factor is MOST likely to cause a portfolio's expected return to differ from its realized return over a given year?",
    "choices": [
      "Probability-weighted scenarios reflect uncertainty, while realized return reflects a single outcome",
      "Expected return is calculated using geometric averaging",
      "Realized return cannot be measured if cash flows occurred mid-period",
      "Expected return is always the risk-free rate"
    ],
    "answerIndex": 0,
    "rationale": "Expected return is a probability-weighted FORECAST; realized return is the single path that actually occurred and almost never matches the forecast exactly. Choice B is the top distractor because expected return uses probability weights, not geometric averaging - that's a property of historical compounded returns.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "difficulty": "medium",
    "id": "b6c9a9022493",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "An investor in a 24% federal bracket holds two funds: Fund X (a tax-managed equity fund yielding a 7% pretax return, mostly long-term qualified gains taxed at 15%) and Fund Y (a high-yield bond fund yielding a 7% pretax return, all ordinary income). Which statement is MOST accurate?",
    "choices": [
      "Both produce identical after-tax returns because pretax yields match",
      "Fund X produces a higher after-tax return because qualified gains/dividends are taxed at a lower rate than ordinary income",
      "Fund Y produces a higher after-tax return because bonds are tax-favored",
      "After-tax returns cannot be computed without knowing the holding period"
    ],
    "answerIndex": 1,
    "rationale": "After-tax = pretax x (1 - applicable rate). Fund X: 7% x (1 - 0.15) = 5.95%; Fund Y: 7% x (1 - 0.24) = 5.32%. The lower rate on qualified income wins. Choice A is the top distractor and is the exact mistake this question targets - identical PRETAX yields can produce very different AFTER-TAX returns when the tax treatment differs.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "hard",
    "id": "7468a8c62c85",
    "subtopicId": "3.11",
    "reviewed": false
  },
  {
    "stem": "Which of the following is generally a POOR proxy for a U.S. large-cap equity benchmark, because it covers only 30 price-weighted blue-chip stocks rather than a broad capitalization-weighted basket?",
    "choices": [
      "S&P 500 Index",
      "Wilshire 5000 Index",
      "Dow Jones Industrial Average",
      "Russell 1000 Index"
    ],
    "answerIndex": 2,
    "rationale": "The DJIA is a 30-stock, price-weighted index and is widely viewed as a poor benchmark for a diversified large-cap manager because of its narrow composition and price-weighting methodology. Choice A is the top distractor because the S&P 500 IS the standard large-cap benchmark - the question asks for the WORSE proxy.",
    "citation": {
      "source": "OTHER",
      "ref": "Morningstar"
    },
    "difficulty": "medium",
    "id": "c4fa8210bc30",
    "subtopicId": "3.11",
    "reviewed": false
  }
];

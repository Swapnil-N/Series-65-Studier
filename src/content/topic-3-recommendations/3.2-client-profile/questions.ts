import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "When constructing a client profile, an investment adviser representative is gathering information primarily to determine which of the following?",
    "choices": [
      "Whether the client's brokerage firm is a member of SIPC",
      "Whether a recommendation is suitable in light of the client's financial situation, objectives, and needs",
      "Whether the client's chosen mutual fund has a 12b-1 fee",
      "Whether the firm should accept the client as a custodial fiduciary"
    ],
    "answerIndex": 1,
    "rationale": "The fundamental purpose of building a client profile is to obtain information sufficient to make suitable, in-the-best-interest recommendations under fiduciary, suitability, and Reg BI standards. The top distractor about SIPC membership is wrong because SIPC coverage is a firm-level disclosure issue, not a client-profiling input that drives suitability.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2111"
    },
    "difficulty": "easy",
    "id": "60119425425d",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Under the customer-specific suitability obligation, an adviser must have a reasonable basis to believe a recommendation is suitable based on information obtained through reasonable diligence. Which of the following is NOT typically part of that customer profile?",
    "choices": [
      "Investment objectives and time horizon",
      "Risk tolerance and liquidity needs",
      "Tax status and other investments",
      "The client's preferred social media platform"
    ],
    "answerIndex": 3,
    "rationale": "FINRA Rule 2111 enumerates customer profile factors such as age, other investments, financial situation, tax status, objectives, time horizon, liquidity needs, risk tolerance, and experience; preferred social media is not a required profile element. The top distractor 'investment objectives and time horizon' is incorrect as a non-profile item because those are explicit, required profile elements.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2111"
    },
    "difficulty": "easy",
    "id": "71e2dcdae326",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Which document is typically used to systematically collect a new client's financial and nonfinancial information at account opening?",
    "choices": [
      "A Form ADV Part 2A brochure",
      "A new account form / client questionnaire",
      "A Form U4",
      "A Form 13F"
    ],
    "answerIndex": 1,
    "rationale": "Advisers and broker-dealers gather client profile data primarily through a written client questionnaire or new account form, supplemented by interviews. The top distractor 'Form ADV Part 2A' is wrong because that form is a disclosure document the adviser delivers to the client, not a tool for collecting client information.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 4512"
    },
    "difficulty": "easy",
    "id": "ca53feb20546",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "A 28-year-old client with stable employment, ample emergency reserves, and no dependents states that her primary objective is long-term growth. Which of the following best describes an appropriate time horizon assumption for her retirement portfolio?",
    "choices": [
      "Short-term, less than 1 year",
      "Intermediate-term, 1 to 5 years",
      "Long-term, generally 10 years or more",
      "Indeterminate, because retirement assets have no time horizon"
    ],
    "answerIndex": 2,
    "rationale": "A client decades from retirement has a long time horizon, generally 10+ years, which supports a higher equity allocation and tolerance of short-term volatility. The top distractor 'indeterminate' is wrong because every goal-funded portfolio has a definable horizon; here the goal is retirement, which provides a measurable horizon.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "easy",
    "id": "dcfb369e3c84",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Risk tolerance is best understood as a function of which two components?",
    "choices": [
      "The client's risk capacity (financial ability to absorb losses) and risk attitude (willingness to accept losses)",
      "The client's marginal tax bracket and state of residence",
      "The client's age and gender",
      "The client's occupation and political affiliation"
    ],
    "answerIndex": 0,
    "rationale": "Risk tolerance combines an objective component (capacity to bear loss given assets, income, time horizon) and a subjective component (psychological willingness to accept volatility). The top distractor 'marginal tax bracket and state of residence' relates to tax planning, not to risk tolerance.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "medium",
    "id": "5cce871e8ed3",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "A client's personal balance sheet provides a snapshot of which of the following at a specific point in time?",
    "choices": [
      "Income and expenses over the past year",
      "Assets, liabilities, and resulting net worth",
      "Realized capital gains and losses for tax reporting",
      "Projected Social Security benefits at full retirement age"
    ],
    "answerIndex": 1,
    "rationale": "A balance sheet lists what the client owns (assets) less what they owe (liabilities), yielding net worth at a single date. The top distractor 'income and expenses over the past year' describes a cash-flow or income statement, which is a flow measure, not a balance sheet stock measure.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "easy",
    "id": "885bc507962a",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "A personal cash-flow statement is most useful for evaluating which of the following?",
    "choices": [
      "Whether the client's net worth has increased over the year",
      "Whether the client has discretionary income available to invest after expenses",
      "Whether the client's portfolio has outperformed its benchmark",
      "Whether the client has adequate property and casualty insurance"
    ],
    "answerIndex": 1,
    "rationale": "A cash-flow statement summarizes inflows (wages, interest, dividends) and outflows (living expenses, debt service), revealing surplus or deficit available for saving or investing. The top distractor about net worth is wrong because that is the role of the balance sheet, not the cash-flow statement.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "difficulty": "easy",
    "id": "5f62e93a8435",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "When reviewing a client's existing investments, an IAR notices that 80% of the client's net worth is concentrated in employer stock. The most important consideration this raises is...",
    "choices": [
      "Concentration risk and the need for diversification",
      "The need to make a charitable gift of the position",
      "Whether the employer pays a 12b-1 fee",
      "Whether the position generates qualified dividends"
    ],
    "answerIndex": 0,
    "rationale": "A single-stock concentration tied to the client's primary income source compounds employment and investment risk and is a textbook diversification problem the IAR must address. The top distractor on charitable gifting is a possible tax-efficient unwind tactic but is a downstream solution, not the central profiling concern raised by concentration.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "medium",
    "id": "7f144ae13508",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "A client tells her IAR that she would lose sleep if her portfolio fell 10% in a year, even though her financial plan can absorb a 30% drawdown. The IAR should conclude that...",
    "choices": [
      "Risk capacity is high and risk attitude is low; the binding constraint is the client's lower willingness to take risk",
      "Risk capacity and risk attitude are the same thing and the IAR may average them",
      "The client must be invested at her risk capacity regardless of attitude",
      "The IAR should disregard the stated discomfort because the financial plan can withstand losses"
    ],
    "answerIndex": 0,
    "rationale": "When capacity and attitude diverge, planners typically build to the more conservative of the two; ignoring an emotional pain threshold leads clients to sell at the worst time. The top distractor 'must be invested at her risk capacity regardless of attitude' is wrong because suitability and fiduciary duty consider both willingness and ability to take risk.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "medium",
    "id": "d587cdf47023",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes the difference between a client's investment objective and an investment constraint?",
    "choices": [
      "Objectives describe what the client wants to achieve, while constraints (such as time horizon, liquidity needs, taxes, legal/regulatory factors, and unique circumstances) describe limits on how it can be achieved",
      "Objectives are short-term and constraints are long-term",
      "Objectives apply only to retail clients and constraints apply only to institutional clients",
      "Objectives are quantitative and constraints are always qualitative"
    ],
    "answerIndex": 0,
    "rationale": "The standard IPS framework distinguishes goals (return, risk) from constraints (time horizon, liquidity, taxes, legal/regulatory, unique circumstances) that bound feasible portfolios. The top distractor 'short-term vs long-term' is wrong because both objectives and constraints can apply across any horizon.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "324c5b7770cb",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "An IAR is recommending a tax-aware allocation to a high-income client. Which of the following is most directly relevant when assessing the client's tax situation?",
    "choices": [
      "The client's marginal federal and state income tax brackets, holding-period considerations, and use of tax-advantaged accounts",
      "The client's preferred mutual fund share class",
      "Whether the client has named a contingent beneficiary on a life insurance policy",
      "The client's score on a behavioral risk questionnaire"
    ],
    "answerIndex": 0,
    "rationale": "Marginal tax brackets, the long- vs short-term holding period, and capacity in IRAs/401(k)s drive after-tax asset location and product selection. The top distractor on share class confuses an expense-management decision with a tax-bracket analysis; share class affects fees, not tax brackets directly.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 17"
    },
    "difficulty": "medium",
    "id": "b64b79677b25",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Qualified dividends received by an individual investor in 2026 are generally taxed at...",
    "choices": [
      "Ordinary income tax rates",
      "Preferential long-term capital gains rates (0%, 15%, or 20%, depending on income)",
      "A flat 28% rate regardless of income",
      "The same rate as municipal bond interest, which is zero federally"
    ],
    "answerIndex": 1,
    "rationale": "Qualified dividends meet holding-period and qualifying-corporation tests and are taxed at the same preferential rates as long-term capital gains (0%, 15%, or 20%). The top distractor 'ordinary income tax rates' applies to nonqualified dividends and short-term gains, which is the common confusion exam writers exploit.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "cb9641d9269a",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "When projecting a client's retirement income, Social Security benefits should generally be modeled as...",
    "choices": [
      "Tax-free in all states and at the federal level",
      "A potentially taxable, inflation-adjusted income stream that depends on filing age and earnings history",
      "An after-tax stream guaranteed to keep pace with the S&P 500",
      "An asset on the client's balance sheet at present value of contributions"
    ],
    "answerIndex": 1,
    "rationale": "Social Security retirement benefits are indexed for inflation (COLA), depend on filing age (62-70) and earnings record, and may be partially taxable for federal purposes depending on combined income. The top distractor 'tax-free at the federal level' is wrong because up to 85% of benefits can be federally taxable depending on provisional income.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 17"
    },
    "difficulty": "medium",
    "id": "ddf1a3ea4b90",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "A defined benefit pension that pays a single-life annuity of $4,000 per month at retirement is best described to a client as which of the following?",
    "choices": [
      "An employer-promised income stream subject to longevity but not market risk; survivor protection requires electing a joint-and-survivor option",
      "A self-directed account whose balance fluctuates with market returns",
      "A government-guaranteed substitute for Social Security",
      "A tax-free distribution to the participant in all cases"
    ],
    "answerIndex": 0,
    "rationale": "Defined benefit pensions provide a formula-based income; the participant bears longevity risk on a single-life option, and a joint-and-survivor election is required to continue payments to a spouse. The top distractor describing market-fluctuating balances applies to defined contribution plans, not defined benefit pensions.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Employee Retirement Income Security Act of 1974"
    },
    "difficulty": "medium",
    "id": "2208b5b80d92",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Which behavioral finance bias is most consistent with a client who refuses to sell a losing stock because she 'doesn't want to make the loss real'?",
    "choices": [
      "Anchoring",
      "Confirmation bias",
      "Loss aversion / disposition effect",
      "Overconfidence"
    ],
    "answerIndex": 2,
    "rationale": "Loss aversion (and the related disposition effect) describes investors' tendency to hold losers too long and sell winners too soon because realized losses are felt more acutely than equivalent gains. The top distractor 'anchoring' refers to fixating on a reference point such as a purchase price for valuation, which is related but does not fully explain the refusal to realize a loss.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "3d81969f67c2",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "An investor who repeatedly extrapolates recent strong returns into the future and increases his equity allocation after a bull market is most clearly exhibiting...",
    "choices": [
      "Recency bias",
      "Mental accounting",
      "Regret aversion",
      "Familiarity bias"
    ],
    "answerIndex": 0,
    "rationale": "Recency bias gives undue weight to the most recent observations, leading investors to project current trends forward and chase performance. The top distractor 'regret aversion' would more typically cause inaction (failure to rebalance) rather than active performance-chasing.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "07db56c4e483",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "A client tells the IAR she wants to avoid investments in firearms manufacturers and fossil fuel companies for personal-values reasons. This is best characterized as...",
    "choices": [
      "A nonfinancial consideration that should be reflected in the investment policy as a screen or constraint",
      "A regulatory prohibition that the IAR must impose under Reg BI",
      "An automatic ground for refusing the engagement",
      "A behavioral bias the IAR must educate the client to overcome"
    ],
    "answerIndex": 0,
    "rationale": "ESG, religious, and other values-based screens are nonfinancial considerations that should be incorporated into the IPS as constraints when the client requests them. The top distractor on Reg BI is wrong because Reg BI does not impose values-based screens; it requires acting in the retail customer's best interest, including respecting stated objectives.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "medium",
    "id": "e5079ea1c3fa",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes Sharia-compliant (Islamic) investing as a nonfinancial constraint?",
    "choices": [
      "It prohibits investing in companies that derive material income from interest (riba), alcohol, gambling, pork, or conventional financial services",
      "It mandates a 60/40 stock-bond allocation",
      "It is required for any client receiving Social Security benefits",
      "It is an SEC-defined investment strategy with prescribed allocation rules"
    ],
    "answerIndex": 0,
    "rationale": "Sharia-compliant investing screens out interest-based finance (riba) and several industries (alcohol, gambling, pork, weapons), and uses purification of incidental impermissible income. The top distractor on a 60/40 mandate is wrong because Sharia rules govern permissibility of holdings, not asset-class targets.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "hard",
    "id": "bc94f4998734",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Mental accounting most directly causes which of the following client behaviors?",
    "choices": [
      "Treating a year-end bonus as 'play money' to gamble in speculative stocks while keeping wage income invested conservatively",
      "Ignoring sunk costs when evaluating a new investment",
      "Diversifying systematically across asset classes",
      "Selecting low-cost index funds over actively managed funds"
    ],
    "answerIndex": 0,
    "rationale": "Mental accounting is the tendency to assign money to mental 'buckets' and treat dollars differently based on source rather than as fungible; bonus money treated as risk capital is a classic example. The top distractor about ignoring sunk costs would actually be a rational behavior, the opposite of a mental-accounting error.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "d49899e7c728",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "A new client recently received a large inheritance and lost a spouse in the same year. From a client-profile perspective, these are best characterized as...",
    "choices": [
      "Life events that materially affect goals, risk tolerance, time horizons, and tax/estate considerations and require profile updates",
      "Routine market events with no impact on the IPS",
      "Grounds for terminating the advisory relationship",
      "Issues handled exclusively by the client's accountant, with no input from the IAR"
    ],
    "answerIndex": 0,
    "rationale": "Major life events (death of a spouse, inheritance, divorce, birth of a child, job change) typically require reassessment of goals, cash flow, risk tolerance, and beneficiary/estate planning. The top distractor 'routine market events' confuses personal life events with market events; they are conceptually distinct.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "easy",
    "id": "a8309bc56287",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "An IAR is required to verify the identity of a new client by collecting name, date of birth, address, and a government identification number. This requirement most directly arises from...",
    "choices": [
      "The Securities Act of 1933 registration regime",
      "The USA PATRIOT Act customer identification program (CIP) under the Bank Secrecy Act",
      "Sarbanes-Oxley Section 404 internal controls",
      "Regulation FD"
    ],
    "answerIndex": 1,
    "rationale": "AML rules under the USA PATRIOT Act and Bank Secrecy Act require financial institutions to operate a Customer Identification Program collecting name, DOB, address, and TIN/ID. The top distractor 'Securities Act of 1933' is wrong because that act governs offer/sale of securities, not customer identity verification.",
    "citation": {
      "source": "SEC",
      "ref": "USA PATRIOT Act"
    },
    "difficulty": "medium",
    "id": "2b99e036d264",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Reasonable diligence under FINRA's customer-profile suitability obligation requires that a representative attempt to obtain information about all of the following EXCEPT...",
    "choices": [
      "The customer's age, other investments, and financial situation and needs",
      "The customer's tax status, investment objectives, and investment experience",
      "The customer's investment time horizon, liquidity needs, and risk tolerance",
      "The customer's preferred political party"
    ],
    "answerIndex": 3,
    "rationale": "FINRA Rule 2111 enumerates specific customer-profile factors but does not include political party. The top distractor 'tax status, investment objectives, and investment experience' is incorrect as the EXCEPT answer because those are explicit, required profile factors under the rule.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2111"
    },
    "difficulty": "easy",
    "id": "47c33f4bb332",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following changes in a client's situation should generally trigger an update to the client profile and investment policy?",
    "choices": [
      "Birth of a child, divorce, retirement, large inheritance, or significant change in income",
      "A 1% intraday move in the S&P 500",
      "An interest rate change of 25 basis points",
      "Quarterly publication of new economic data by the BEA"
    ],
    "answerIndex": 0,
    "rationale": "Personal life events that change cash flows, dependents, or goals require a profile update; ordinary market and macro fluctuations generally do not. The top distractor about a 1% market move is wrong because routine market volatility is anticipated within the existing IPS and does not by itself indicate a changed profile.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "easy",
    "id": "d455dc062722",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "An adviser is profiling a 70-year-old retiree whose primary objective is current income with capital preservation. The most appropriate description of her time horizon and risk profile is generally...",
    "choices": [
      "Long horizon and aggressive risk tolerance because growth is the priority",
      "Shorter, ongoing income horizon with lower risk tolerance, but still requiring some growth to address longevity and inflation risk",
      "Zero horizon, so all assets should be held in cash",
      "Indeterminate horizon, so 100% small-cap equity is appropriate"
    ],
    "answerIndex": 1,
    "rationale": "A retiree's profile typically shows a shorter spending horizon and lower risk tolerance, but also requires inflation-protected growth to fund a potentially 20-30 year retirement and avoid longevity risk. The top distractor 'zero horizon, all cash' overlooks longevity and inflation risk and would likely cause the portfolio to fail in real terms.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "medium",
    "id": "f56abb36193a",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "When an IAR conducts an in-person interview as part of client data gathering, the principal advantage over a written questionnaire alone is...",
    "choices": [
      "It allows the IAR to observe nonverbal cues, probe vague answers, and clarify objectives that questionnaires often miss",
      "It eliminates the need to keep written records",
      "It allows the IAR to make recommendations without considering risk tolerance",
      "It satisfies all anti-money-laundering requirements automatically"
    ],
    "answerIndex": 0,
    "rationale": "Interviews supplement questionnaires by uncovering qualitative context, conflicting goals, and behavioral tendencies that boxes on a form cannot capture. The top distractor about eliminating recordkeeping is wrong because interviews must be documented; FINRA Rule 4512 and adviser recordkeeping rules still require written customer information.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 4512"
    },
    "difficulty": "medium",
    "id": "0b5da968c3d4",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "The 'know your customer' obligation as articulated by FINRA generally requires firms to use reasonable diligence to know which of the following?",
    "choices": [
      "The essential facts concerning every customer and the authority of each person acting on the customer's behalf",
      "The identity of every counterparty in every trade the customer executes",
      "The specific recommendations the customer's prior adviser made",
      "The customer's voting record in federal elections"
    ],
    "answerIndex": 0,
    "rationale": "FINRA Rule 2090 requires firms to use reasonable diligence to know the essential facts concerning every customer and any person acting on the customer's behalf. The top distractor on counterparties is wrong because KYC focuses on the customer themselves, not the universe of counterparties to their trades.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2090"
    },
    "difficulty": "medium",
    "id": "580993302efc",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following pairs of objectives is most likely to be in tension within a single portfolio?",
    "choices": [
      "Capital preservation and aggressive growth",
      "Tax efficiency and long time horizon",
      "Diversification and asset allocation",
      "Liquidity for an emergency fund and use of a money market fund"
    ],
    "answerIndex": 0,
    "rationale": "Capital preservation requires low-volatility, often lower-return assets, while aggressive growth requires accepting volatility; the two are inherently in tension. The top distractor 'tax efficiency and long time horizon' is wrong because long horizons usually complement tax-efficient strategies (such as buy-and-hold and asset location) rather than conflict with them.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "medium",
    "id": "c8b8c06fd56f",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Liquidity needs are best described in the context of a client profile as...",
    "choices": [
      "The client's required ability to convert assets to cash promptly without material loss in value to meet expected or unexpected obligations",
      "The dollar amount the client wishes to donate to charity each year",
      "The number of mutual funds held in the client's portfolio",
      "The amount of margin the client is permitted to use under Regulation T"
    ],
    "answerIndex": 0,
    "rationale": "Liquidity needs measure the timing and amount of cash outflows the portfolio must support without forced sales at depressed prices. The top distractor about Reg T margin is wrong because Reg T addresses borrowing limits, not the client's planned cash needs.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "medium",
    "id": "0619972e5fff",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "A client age 55 plans to retire at 65, then expects to live until age 90. From a planning standpoint, the time horizon for her retirement assets is best characterized as...",
    "choices": [
      "10 years, ending at retirement",
      "Multi-stage: a roughly 10-year accumulation phase and a roughly 25-year distribution phase",
      "1 year, because the IPS is reviewed annually",
      "Indeterminate, so a single equity allocation should be held forever"
    ],
    "answerIndex": 1,
    "rationale": "Retirement planning involves at least two life-cycle stages: accumulation up to retirement and distribution thereafter, each with different cash flow, risk, and asset-allocation implications. The top distractor '10 years ending at retirement' incorrectly truncates the horizon at retirement and ignores the long distribution phase.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "medium",
    "id": "257e1ba4c7b6",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "An IAR who recommends a private placement to a client without first confirming the client's accredited investor status and risk tolerance has most likely failed to satisfy...",
    "choices": [
      "Only Securities Act registration requirements",
      "The customer-specific suitability and best-interest care obligations",
      "Only state escheatment rules",
      "The Form 13F reporting threshold"
    ],
    "answerIndex": 1,
    "rationale": "Recommending an illiquid, often-restricted private placement without verifying that it fits the client's profile and risk capacity violates suitability/best-interest care obligations under FINRA Rule 2111 and Reg BI. The top distractor about Securities Act registration is wrong because the placement itself may be exempt; the breakdown is on the suitability side, not registration.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation Best Interest"
    },
    "difficulty": "hard",
    "id": "a164e1bfd7f4",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Familiarity bias most often appears in client portfolios as...",
    "choices": [
      "Excessive home-country or employer-stock concentration despite available diversification",
      "Aggressive trading of unfamiliar derivatives",
      "Holding only Treasury bills regardless of horizon",
      "Buying mutual funds with the lowest expense ratios"
    ],
    "answerIndex": 0,
    "rationale": "Familiarity bias leads investors to overweight what they know - their home market, their employer's stock - which undermines diversification. The top distractor on aggressive derivative trading better fits overconfidence or sensation-seeking, not familiarity bias.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "8ca9c40d8391",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "When evaluating a client's existing investments, an IAR should consider all of the following EXCEPT...",
    "choices": [
      "Concentration and overlap with proposed new positions",
      "Embedded unrealized gains/losses and tax cost of selling",
      "How the holdings fit the client's stated objectives, risk tolerance, and time horizon",
      "The personal political views of the prior adviser who selected them"
    ],
    "answerIndex": 3,
    "rationale": "Existing-investment review should consider overlap, embedded tax cost, and fit with the IPS - not the prior adviser's politics. The top distractor 'embedded unrealized gains/losses' is incorrect as the EXCEPT answer because tax cost is a core consideration when deciding whether to liquidate legacy holdings.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "easy",
    "id": "52ec6ee068b0",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Overconfidence bias most often manifests as...",
    "choices": [
      "Excessive trading and concentrated bets driven by overestimation of one's ability to pick winners",
      "Refusal to ever buy a stock",
      "A strict preference for fixed-rate annuities",
      "Only investing in passive index funds"
    ],
    "answerIndex": 0,
    "rationale": "Overconfident investors trade too frequently and concentrate positions because they overestimate their information and skill, hurting net returns. The top distractor 'refusal to buy a stock' is wrong because that would reflect risk aversion, status quo bias, or paralysis, not overconfidence.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "62323922ff20",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes 'risk capacity' as distinguished from 'risk tolerance'?",
    "choices": [
      "The objective ability of a client's financial situation to absorb losses without derailing goals, distinct from the subjective willingness to accept losses",
      "Identical concepts that may be used interchangeably",
      "The client's preferred sector exposure",
      "The maximum margin loan available under Regulation T"
    ],
    "answerIndex": 0,
    "rationale": "Risk capacity is the objective, financially measurable ability to absorb losses; risk tolerance often refers to the subjective willingness. The top distractor treating the two as interchangeable is a common conceptual error tested on the Series 65.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "medium",
    "id": "07a6d036409b",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "An IAR working with a client whose primary goal is funding a child's college education in 4 years should generally treat the time horizon as...",
    "choices": [
      "Short-to-intermediate, requiring meaningful allocation to lower-volatility assets as the goal date approaches",
      "Long-term, supporting full equity exposure",
      "Indefinite, so cash equivalents are unnecessary",
      "Equivalent to retirement, so the same allocation applies"
    ],
    "answerIndex": 0,
    "rationale": "A 4-year goal demands a tighter risk budget and growing fixed-income/cash exposure as the goal nears, because there is little time to recover from a drawdown. The top distractor 'long-term, supporting full equity exposure' is wrong because a sequence-of-returns shock right before the tuition bill could permanently impair the goal.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "medium",
    "id": "c92614a4b654",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Anchoring bias is best illustrated by which of the following client behaviors?",
    "choices": [
      "Refusing to sell a stock until 'it gets back to what I paid for it'",
      "Spreading purchases across multiple unrelated industries",
      "Selling a winning position to lock in long-term capital gains",
      "Choosing a target-date fund matched to retirement year"
    ],
    "answerIndex": 0,
    "rationale": "Anchoring is the tendency to fixate on a reference value such as the original purchase price even when current fundamentals warrant a sell decision. The top distractor about selling for long-term gains is a deliberate tax decision, not a cognitive bias.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "31b98f0ade4c",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "A client receives 401(k) contributions from her employer and will begin Required Minimum Distributions at age 73. When building her profile, the IAR should treat the future RMD stream as...",
    "choices": [
      "An ordinary-income tax event that must be planned for in distribution-phase cash flow",
      "A tax-free withdrawal exempt from federal income tax",
      "Not relevant until the client is age 100",
      "A capital-gain-rate withdrawal"
    ],
    "answerIndex": 0,
    "rationale": "Distributions from traditional 401(k)/IRA accounts are taxed as ordinary income, and RMDs starting at the applicable age (73 under SECURE 2.0) must be incorporated into retirement-phase planning. The top distractor 'tax-free withdrawal' is incorrect because Roth, not traditional, qualified accounts permit tax-free qualified distributions.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 590-B"
    },
    "difficulty": "hard",
    "id": "24f2d2ffbf64",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following clients has the GREATEST need to emphasize liquidity in the investment policy?",
    "choices": [
      "A 35-year-old saving for a home purchase in 18 months",
      "A 30-year-old contributing to an IRA for retirement at 65",
      "An endowment with a perpetual horizon and a 5% spending rule",
      "A 45-year-old with stable income and no near-term spending goals"
    ],
    "answerIndex": 0,
    "rationale": "An 18-month down-payment goal demands high liquidity because the funds must be available with minimal price risk. The top distractor of a 30-year-old saving for retirement is wrong because long horizons reduce the need for liquidity and allow tolerance of short-term volatility.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "easy",
    "id": "0e341fc9024f",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "An IAR notes that a client's financial situation is characterized by high income, high savings rate, and low fixed obligations relative to assets. From a profile perspective, this most directly suggests...",
    "choices": [
      "Higher risk capacity, though risk attitude must still be assessed separately",
      "Risk capacity is automatically equal to risk attitude",
      "The client must be invested entirely in equities",
      "The client cannot have any tax-sensitive accounts"
    ],
    "answerIndex": 0,
    "rationale": "Strong cash flow, low fixed obligations, and substantial net worth raise the objective capacity to absorb losses, but the IAR must still test the client's psychological willingness. The top distractor 'must be invested entirely in equities' over-extrapolates a high-capacity profile into a deterministic allocation, ignoring objectives, time horizon, and attitude.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "medium",
    "id": "2aefc6a6e05b",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Confirmation bias most directly affects a client by causing him to...",
    "choices": [
      "Seek out information that supports his existing investment thesis and discount contradictory evidence",
      "Always buy the cheapest available index fund",
      "Refuse to read any financial news",
      "Diversify globally across asset classes"
    ],
    "answerIndex": 0,
    "rationale": "Confirmation bias is the selective attention to information that supports a prior belief while discounting contradictory data, which leads to entrenched and under-tested positions. The top distractor 'refuse to read any financial news' would reflect avoidance or paralysis rather than confirmation bias.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "7ff1984bd0e0",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "An ESG (environmental, social, governance) integration approach within a client's IPS most accurately describes...",
    "choices": [
      "The systematic incorporation of material ESG factors alongside traditional financial factors when evaluating securities",
      "A regulatory mandate requiring all advisers to use ESG screens",
      "An exclusively passive strategy that tracks the S&P 500",
      "A guarantee of higher risk-adjusted returns relative to a non-ESG portfolio"
    ],
    "answerIndex": 0,
    "rationale": "ESG integration adds material environmental, social, and governance factors to traditional financial analysis when assessing risk and return; it is not a regulatory mandate or a guaranteed performance enhancer. The top distractor on a regulatory mandate is wrong because incorporation of ESG is client-driven, not legally compelled at the federal level.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "hard",
    "id": "93429678b544",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Status quo bias in a 401(k) participant is most clearly demonstrated when the participant...",
    "choices": [
      "Remains in the plan's default investment option year after year despite changing circumstances",
      "Aggressively rebalances every quarter",
      "Switches plans every year for the lowest fees",
      "Pays attention to fund prospectuses in detail"
    ],
    "answerIndex": 0,
    "rationale": "Status quo bias - inertia in maintaining current allocations - is exactly why default options under ERISA's QDIA framework are designed to be reasonable diversified defaults. The top distractor 'aggressively rebalancing each quarter' is the opposite of status quo behavior.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA QDIA Regulation"
    },
    "difficulty": "hard",
    "id": "9dce4a1b740a",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Investment experience is part of a complete client profile chiefly because it...",
    "choices": [
      "Helps the IAR judge what products and strategies the client genuinely understands and can knowledgeably consent to",
      "Determines the client's marginal income tax rate",
      "Substitutes for risk tolerance entirely",
      "Eliminates the need to gather financial information"
    ],
    "answerIndex": 0,
    "rationale": "A client's familiarity with markets and products informs whether complex recommendations (options, alternatives, leverage) are understood well enough to be suitable. The top distractor 'substitutes for risk tolerance entirely' is wrong because experience and risk tolerance are distinct profile dimensions.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2111"
    },
    "difficulty": "medium",
    "id": "5b452a203aea",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Under Regulation Best Interest's Care Obligation, a broker-dealer recommending a securities transaction to a retail customer must exercise reasonable diligence, care, and skill to understand all of the following EXCEPT...",
    "choices": [
      "The potential risks, rewards, and costs of the recommendation",
      "Whether the recommendation is in the retail customer's best interest based on the customer's investment profile",
      "Whether a reasonable basis exists to believe a series of recommendations is not excessive",
      "The retail customer's preferred web browser"
    ],
    "answerIndex": 3,
    "rationale": "Reg BI's Care Obligation requires understanding risks/rewards/costs, the customer's investment profile, and whether series of recommendations are not excessive - browser preferences are irrelevant. The top distractor 'whether reasonable basis exists that recommendations are not excessive' is incorrect as the EXCEPT answer because that quantitative-suitability concept is part of Reg BI's care obligation.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation Best Interest"
    },
    "difficulty": "hard",
    "id": "7aeefd42563d",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "A 45-year-old client has a $200,000 emergency fund, a $1.5 million 401(k), a paid-off home, and stable employment. The client's life stage is best described as...",
    "choices": [
      "Accumulation phase, with a long horizon supporting growth-oriented investing",
      "Conservation phase, requiring a fully fixed-income portfolio",
      "Distribution phase, drawing down assets",
      "Pre-employment phase, with no savings"
    ],
    "answerIndex": 0,
    "rationale": "A working-age client with significant time until retirement is in the accumulation phase, where growth-tilted, long-horizon allocations are typically appropriate. The top distractor 'conservation phase, requiring a fully fixed-income portfolio' overstates the conservatism for a 45-year-old with stable employment.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.B"
    },
    "difficulty": "easy",
    "id": "cdfe100d3cef",
    "subtopicId": "3.2",
    "reviewed": false
  },
  {
    "stem": "Which IRS publication is the most appropriate primary reference for explaining the basic federal taxation of investment income such as interest, dividends, and capital gains to a retail client?",
    "choices": [
      "IRS Publication 17",
      "IRS Publication 525",
      "IRS Publication 550",
      "IRS Publication 590-A"
    ],
    "answerIndex": 2,
    "rationale": "IRS Publication 550 'Investment Income and Expenses' is the dedicated guide to tax treatment of interest, dividends, and capital gains for individuals. The top distractor 'IRS Publication 17' is the general individual income tax overview but is broader than the specific investment-income focus of Pub 550.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "hard",
    "id": "b2828d8c0ef1",
    "subtopicId": "3.2",
    "reviewed": false
  }
];

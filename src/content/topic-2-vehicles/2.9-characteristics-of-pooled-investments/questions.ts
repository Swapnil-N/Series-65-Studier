import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "An investor purchases mutual fund shares at 10:30 AM. At what price will the order be executed under SEC Rule 22c-1?",
    "choices": [
      "The NAV calculated at the close of trading the prior business day",
      "The NAV calculated next at the fund's next pricing time after the order is received",
      "The bid price displayed on the consolidated tape at 10:30 AM",
      "The midpoint between bid and ask quoted by the fund's distributor at 10:30 AM"
    ],
    "answerIndex": 1,
    "rationale": "Rule 22c-1 (the forward-pricing rule) requires open-end fund orders to be filled at the next NAV calculated after the order is received, typically the 4:00 PM ET close. Using yesterday's NAV is wrong because it would let investors lock in stale prices and dilute existing shareholders, which is precisely the abuse forward pricing was adopted to prevent.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 22c-1"
    },
    "difficulty": "medium",
    "id": "c4a584df2be4",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Which mutual fund share class is most commonly associated with a front-end sales load and breakpoint discounts on large purchases?",
    "choices": [
      "Class A shares",
      "Class B shares",
      "Class C shares",
      "Institutional (Class I) shares"
    ],
    "answerIndex": 0,
    "rationale": "Class A shares charge a front-end sales load that is reduced through breakpoints based on purchase size, rights of accumulation, or letters of intent. Class B shares are wrong because they instead carry a contingent deferred sales charge (CDSC) that declines over time and convert to A shares; they do not offer front-end breakpoints.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2210"
    },
    "difficulty": "easy",
    "id": "b8e28bbbc82a",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "An investor in a Class B mutual fund share holds the position for several years. The most distinctive feature of Class B shares is:",
    "choices": [
      "A higher front-end sales load than Class A but no 12b-1 fee",
      "A contingent deferred sales charge that declines over time, often converting to Class A after a holding period",
      "No sales charges of any kind, intended for retirement plans only",
      "A level 1.00% 12b-1 fee that never converts to another class"
    ],
    "answerIndex": 1,
    "rationale": "Class B shares charge no front-end load but impose a back-end CDSC that declines each year and typically convert to lower-expense Class A shares after a set period (commonly 6-8 years). The level-load 12b-1 description fits Class C, not B; Class C shares generally do not convert to A and keep their higher ongoing 12b-1 fee indefinitely.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 12b-1"
    },
    "difficulty": "medium",
    "id": "0c1fd656b119",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Class C mutual fund shares are best characterized by:",
    "choices": [
      "A high front-end load and no ongoing distribution fees",
      "No front-end load, a small CDSC that disappears after about a year, and a level annual 12b-1 fee",
      "A guaranteed conversion to Class A shares after one year",
      "Eligibility only for accounts above $1 million"
    ],
    "answerIndex": 1,
    "rationale": "Class C shares are 'level-load' shares: no front-end charge, a short (typically 1-year) CDSC, and a continuing 12b-1 fee (often 1.00%) that makes them costly for long holding periods. Guaranteed conversion to Class A is incorrect; that is a Class B feature, and many C shares never convert or convert only after a long delay.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 12b-1"
    },
    "difficulty": "medium",
    "id": "2ffaaa4cb041",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Under SEC Rule 12b-1, the fees that may be charged against fund assets to pay for distribution and shareholder servicing must be:",
    "choices": [
      "Approved annually by the fund's board, including a majority of independent directors",
      "Approved only once at the inception of the fund and never re-evaluated",
      "Set by the fund's largest shareholder",
      "Capped by statute at 0.10% per year regardless of class"
    ],
    "answerIndex": 0,
    "rationale": "Rule 12b-1 plans must be adopted under a written plan and reapproved at least annually by the board, including a majority of directors who are not interested persons of the fund. The annual cap is industry/FINRA-driven (e.g., 0.25% to be marketed as 'no-load' and a 1.00% maximum total under FINRA rules), not a 0.10% statutory ceiling, so that distractor is wrong.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 12b-1"
    },
    "difficulty": "hard",
    "id": "354ca8ba1c1c",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "An open-end mutual fund's NAV per share is computed as:",
    "choices": [
      "(Total assets - total liabilities) / shares outstanding",
      "Market price / earnings per share of the underlying portfolio",
      "Total liabilities / shares outstanding",
      "Sum of the bid prices of all portfolio securities at noon ET"
    ],
    "answerIndex": 0,
    "rationale": "NAV per share equals net assets (assets minus liabilities) divided by shares outstanding, calculated at least once each business day under Rule 22c-1, normally at 4:00 PM ET. The bid-price-at-noon distractor is wrong both as to time (close, not noon) and as to method (mark to market less liabilities, not a simple sum of bids).",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 2"
    },
    "difficulty": "easy",
    "id": "2b98274c380f",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Closed-end fund shares typically trade in the secondary market at:",
    "choices": [
      "Exactly NAV at all times because the sponsor stands ready to redeem at NAV",
      "A premium or discount to NAV determined by supply and demand for the fund's shares",
      "A statutory 5% premium to NAV set by FINRA",
      "Whatever the fund's portfolio manager declares each morning"
    ],
    "answerIndex": 1,
    "rationale": "Closed-end funds issue a fixed number of shares that trade on an exchange; the market price is set by supply and demand and frequently differs from NAV, producing a discount or premium. The 'always at NAV' distractor describes open-end funds, which are continuously redeemable at NAV under Section 22; closed-end funds are not redeemable at the shareholder's option.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 5"
    },
    "difficulty": "easy",
    "id": "4246fa5021e1",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "An ETF's market price diverges meaningfully from its intraday NAV. Which mechanism is primarily designed to keep the two prices closely aligned?",
    "choices": [
      "Daily auctions conducted by the fund sponsor at the close",
      "Creation and redemption of large baskets ('creation units') by authorized participants",
      "An SEC-mandated maximum 1% deviation rule enforced by the listing exchange",
      "Mandatory NAV resets every 15 minutes by the custodian bank"
    ],
    "answerIndex": 1,
    "rationale": "Authorized participants arbitrage any meaningful gap between ETF market price and the value of the underlying basket by creating shares when the ETF trades at a premium and redeeming when it trades at a discount, which keeps prices tightly tethered to NAV. The '1% deviation rule' is fabricated; there is no such SEC cap, although deviations are disclosed.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "medium",
    "id": "592abcd8b8cf",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Which of the following pooled vehicles offers the GREATEST intraday liquidity for a retail investor?",
    "choices": [
      "An open-end mutual fund",
      "A non-traded REIT",
      "An exchange-traded fund (ETF)",
      "A unit investment trust held to maturity"
    ],
    "answerIndex": 2,
    "rationale": "ETFs trade continuously on an exchange during market hours, so investors can buy or sell at any time at a market-determined price. Open-end mutual funds price only once per day at NAV (Rule 22c-1), so the order does not execute intraday; non-traded REITs are highly illiquid with limited sponsor redemption windows.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 22c-1"
    },
    "difficulty": "easy",
    "id": "06cdd0d52911",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Section 22(e) of the Investment Company Act generally requires an open-end fund to pay redemption proceeds within how many days of the tender?",
    "choices": [
      "1 business day",
      "Seven days",
      "30 days",
      "Whenever the portfolio manager determines liquidity allows"
    ],
    "answerIndex": 1,
    "rationale": "Section 22(e) prohibits an open-end fund from suspending the right of redemption or postponing payment for more than seven days after tender, except under specific SEC-approved conditions (e.g., NYSE closed for an emergency). 'Whenever the manager determines' is wrong because the seven-day rule is a hard statutory protection.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 22(e)"
    },
    "difficulty": "medium",
    "id": "22d52272afcc",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Which of the following is a FUNDAMENTAL policy of an open-end fund that may be changed only with shareholder approval under Section 13 of the Investment Company Act?",
    "choices": [
      "The custodian bank used by the fund",
      "The fund's classification as diversified or non-diversified",
      "The portfolio manager's compensation",
      "The fund's marketing tagline"
    ],
    "answerIndex": 1,
    "rationale": "Section 13 requires shareholder approval to change policies stated as fundamental in the registration statement, including the diversification status, borrowing limits, and the fund's stated investment objective. Choosing a custodian or marketing tagline is an operational matter that the board may handle without a shareholder vote.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 13"
    },
    "difficulty": "hard",
    "id": "6e018b024c96",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "An investment adviser is comparing two large-cap growth funds. Which 'apples-to-apples' benchmark is MOST appropriate for relative performance comparison?",
    "choices": [
      "Bloomberg U.S. Aggregate Bond Index",
      "Russell 2000 Index",
      "S&P 500 Growth Index or Russell 1000 Growth Index",
      "MSCI Emerging Markets Index"
    ],
    "answerIndex": 2,
    "rationale": "A benchmark must match the fund's investment style and capitalization range; for U.S. large-cap growth, the S&P 500 Growth or Russell 1000 Growth indexes are appropriate. The Russell 2000 captures small caps, the Aggregate is bonds, and MSCI EM is non-U.S. equities, so all three would distort the relative comparison.",
    "citation": {
      "source": "OTHER",
      "ref": "Morningstar"
    },
    "difficulty": "easy",
    "id": "15209401df0f",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "A fund's prospectus shows a 5.00% maximum sales charge with breakpoints starting at $25,000. An investor signs a 13-month letter of intent (LOI) to invest $30,000. The LOI primarily allows the investor to:",
    "choices": [
      "Receive the lower breakpoint sales charge immediately on the initial purchase",
      "Waive all 12b-1 fees for the LOI period",
      "Convert Class C shares to Class A automatically after 13 months",
      "Avoid paying any taxes on reinvested dividends during the LOI period"
    ],
    "answerIndex": 0,
    "rationale": "A letter of intent permits the investor to pay the reduced sales charge as if the full intended amount were invested up front, with shares held in escrow to recover the higher charge if the LOI is not completed within 13 months. The LOI does not address 12b-1 fees, share-class conversion, or taxation.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2210"
    },
    "difficulty": "medium",
    "id": "48502eed4f67",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Failing to inform a customer of available breakpoint discounts and recommending purchases just below a breakpoint is known as:",
    "choices": [
      "Selling away",
      "A breakpoint sale, which is an unethical practice",
      "Rights of accumulation arbitrage",
      "Front-running the fund"
    ],
    "answerIndex": 1,
    "rationale": "A breakpoint sale - placing an order in an amount just below the threshold for a reduced sales charge in order to earn a higher commission - is an unethical practice prohibited under NASAA and FINRA rules. 'Selling away' refers to executing securities transactions outside the broker-dealer's supervision, an unrelated violation.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Statement of Policy on Dishonest and Unethical Practices of Broker-Dealers and Agents"
    },
    "difficulty": "medium",
    "id": "1ba71724d11a",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "When a mutual fund makes a long-term capital gains distribution, the tax treatment to a non-corporate U.S. shareholder is generally:",
    "choices": [
      "Always taxed as ordinary income regardless of how long the shareholder has held the fund",
      "Taxed at long-term capital gains rates regardless of how long the shareholder has held the fund shares",
      "Tax-free if reinvested in the fund",
      "Subject to a flat 28% collectibles rate"
    ],
    "answerIndex": 1,
    "rationale": "Capital gain distributions paid by a regulated investment company retain their long-term character and are taxed to shareholders at long-term capital gains rates, even if the shareholder has held the fund shares for less than a year. Reinvestment is irrelevant - reinvested distributions are still taxable in the year paid.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "4749fe13cef7",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "An investor sells fund shares at a loss on March 1 and buys substantially identical shares of the same fund on March 20. The loss is:",
    "choices": [
      "Fully deductible in the current year",
      "Disallowed under the wash-sale rule, with the disallowed loss added to the basis of the new shares",
      "Disallowed permanently with no basis adjustment",
      "Eligible for a 50% deduction only"
    ],
    "answerIndex": 1,
    "rationale": "IRC Section 1091 disallows a loss on a sale of stock or securities if substantially identical securities are purchased within 30 days before or after the sale; the disallowed loss is added to the basis of the replacement shares and the holding period tacks. A permanent disallowance is wrong because the basis adjustment effectively defers, not destroys, the loss.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 1091"
    },
    "difficulty": "hard",
    "id": "0b4ac3558d78",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Why are mutual funds sometimes described as creating 'embedded' or 'phantom' capital gains for new shareholders?",
    "choices": [
      "Because the fund pre-pays state income tax on behalf of new investors",
      "Because new investors may receive year-end capital gain distributions on appreciation that occurred before they bought the fund",
      "Because every new purchase triggers an immediate gain to the seller of the shares",
      "Because the SEC requires funds to mark up new shareholders' basis above NAV"
    ],
    "answerIndex": 1,
    "rationale": "A regulated investment company must distribute realized gains; a shareholder who buys just before the record date can receive a taxable distribution attributable to gains that accrued before they owned the fund. The other distractors describe mechanisms that do not exist (no SEC basis markup, no pre-payment of state tax).",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "hard",
    "id": "43c4869b2f11",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Which of the following BEST describes a fund's expense ratio?",
    "choices": [
      "Sales loads divided by NAV",
      "Annual operating expenses (management, 12b-1, other) divided by average net assets",
      "Total trading commissions paid by the fund",
      "Brokerage costs of buying fund shares in the secondary market"
    ],
    "answerIndex": 1,
    "rationale": "The expense ratio expresses ongoing operating expenses - investment management fees, 12b-1 fees, and other administrative costs - as a percentage of average net assets and is paid by the fund (not directly by the investor). It does not include sales loads or portfolio trading commissions, which are reported separately.",
    "citation": {
      "source": "SEC",
      "ref": "Form N-1A"
    },
    "difficulty": "easy",
    "id": "e03f0565f2fe",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Section 36(b) of the Investment Company Act of 1940 imposes a fiduciary duty on investment advisers to mutual funds with respect to:",
    "choices": [
      "Selection of brokerage firms",
      "Compensation received from the fund",
      "Choice of custodian",
      "Mark-to-market valuation methods"
    ],
    "answerIndex": 1,
    "rationale": "Section 36(b) makes the adviser a fiduciary specifically with respect to its receipt of compensation for services from the fund and gives shareholders a right of action for excessive fees. Brokerage selection and custodian choice are governed by other sections and the board's general fiduciary duties, not by Section 36(b)'s fee-specific cause of action.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 36(b)"
    },
    "difficulty": "hard",
    "id": "c363e904a586",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Which of the following is the MOST significant risk of investing in a non-diversified, sector-concentrated mutual fund relative to a broad-market index fund?",
    "choices": [
      "Higher unsystematic (specific) risk because returns depend heavily on a single industry",
      "Loss of FDIC insurance coverage",
      "Loss of SIPC coverage on the fund's securities",
      "Inability to be held in an IRA"
    ],
    "answerIndex": 0,
    "rationale": "A sector or non-diversified fund concentrates exposure in one industry, increasing unsystematic risk that diversification would otherwise reduce. FDIC insurance never applies to securities; SIPC coverage applies based on broker-dealer membership, not fund type; and sector funds are routinely held in IRAs.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 5"
    },
    "difficulty": "medium",
    "id": "333b11c89d7c",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "An investment adviser comparing two mutual funds notices Fund A has had three different portfolio managers in the past five years while Fund B has had the same manager for 15 years. From a due-diligence standpoint, the high turnover at Fund A is most concerning because:",
    "choices": [
      "The published long-term track record may not reflect the strategy of the current manager",
      "It automatically produces higher 12b-1 fees",
      "It eliminates SIPC coverage for the fund's investors",
      "It triggers a mandatory shareholder vote under Section 13"
    ],
    "answerIndex": 0,
    "rationale": "Manager tenure matters because past performance is most meaningful when the same person who produced it remains responsible; high turnover means historical results may not be repeatable by the current team. Manager turnover does not by itself raise 12b-1 fees, eliminate SIPC, or trigger a shareholder vote.",
    "citation": {
      "source": "OTHER",
      "ref": "Morningstar"
    },
    "difficulty": "medium",
    "id": "42198e0d0ead",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "A fund changes its style classification from 'large-cap value' to 'mid-cap growth' without amending its prospectus. This phenomenon is commonly described as:",
    "choices": [
      "Style drift",
      "Soft-dollar leakage",
      "Reverse churning",
      "Tracking error"
    ],
    "answerIndex": 0,
    "rationale": "Style drift occurs when a fund's actual portfolio characteristics deviate from its stated investment style, undermining an investor's asset allocation and complicating benchmark comparisons. Tracking error is a quantitative measure of return deviation from a benchmark, not a change in style; it is not the term for the drift itself.",
    "citation": {
      "source": "OTHER",
      "ref": "Morningstar"
    },
    "difficulty": "medium",
    "id": "5dc7e2c2bdfd",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Which document is the principal disclosure document used by an open-end mutual fund to register its shares with the SEC and disclose fees, objectives, and risks?",
    "choices": [
      "Form 10-K",
      "Form N-1A",
      "Form ADV Part 2",
      "Form U4"
    ],
    "answerIndex": 1,
    "rationale": "Form N-1A is the registration statement and prospectus form for open-end management investment companies; it includes the fee table, investment objectives, principal risks, and financial highlights. Form 10-K is for operating companies, ADV Part 2 is the adviser's brochure, and U4 is the registration form for an associated person.",
    "citation": {
      "source": "SEC",
      "ref": "Form N-1A"
    },
    "difficulty": "easy",
    "id": "1124dbc4f842",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Which fund vehicle has a fixed portfolio of securities that does not actively trade and typically self-liquidates on a stated termination date?",
    "choices": [
      "Open-end mutual fund",
      "Closed-end fund",
      "Unit investment trust (UIT)",
      "Hedge fund"
    ],
    "answerIndex": 2,
    "rationale": "A UIT is organized under Section 4 of the Investment Company Act with a fixed, unmanaged portfolio of securities and a defined termination date at which it liquidates. Open-end and closed-end funds are managed; hedge funds are typically organized as private partnerships under Section 3(c)(1) or 3(c)(7) and are not pooled vehicles registered as investment companies.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 4"
    },
    "difficulty": "easy",
    "id": "9456e15b628e",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Compared with a comparable mutual fund, an ETF generally provides which tax efficiency advantage?",
    "choices": [
      "ETFs are exempt from federal income tax at the fund level under all conditions",
      "In-kind creation/redemption of baskets typically reduces realized capital gain distributions to shareholders",
      "ETF dividends are always treated as tax-free return of capital",
      "ETFs avoid the wash-sale rule for all investors"
    ],
    "answerIndex": 1,
    "rationale": "ETFs use in-kind transfers with authorized participants on creations and redemptions, which generally allows the fund to dispose of low-basis securities without triggering taxable gains at the fund level, reducing the capital-gain distributions shareholders receive. ETFs are not exempt from tax, do not turn dividends into return of capital, and do not bypass the wash-sale rule.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "hard",
    "id": "e62759656f07",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "An open-end mutual fund must compute its NAV at least how often?",
    "choices": [
      "Once per week",
      "Once per business day",
      "Once per month",
      "Continuously, every 15 minutes"
    ],
    "answerIndex": 1,
    "rationale": "Rule 22c-1 generally requires an open-end fund to compute NAV at least once each business day, customarily as of the close of regular trading on the NYSE. ETFs publish indicative intraday values, but registered open-end funds are not required to revalue every 15 minutes.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 22c-1"
    },
    "difficulty": "easy",
    "id": "e625af56e38c",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "An adviser tells a client that 'the public offering price (POP) of a Class A mutual fund equals NAV plus the sales charge.' This statement is:",
    "choices": [
      "False - POP equals NAV minus the sales charge",
      "True - the sales charge is added to NAV to derive the POP at which investors buy",
      "True only for closed-end funds",
      "False - POP is unrelated to NAV under SEC rules"
    ],
    "answerIndex": 1,
    "rationale": "For a load mutual fund, POP = NAV + sales charge, where the sales charge is the maximum permitted by the prospectus (subject to breakpoints). Closed-end funds price by supply and demand on an exchange, not by adding a load to NAV, so the 'closed-end only' choice is incorrect.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 22(d)"
    },
    "difficulty": "medium",
    "id": "28ae4841e0ff",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Section 22(d) of the Investment Company Act prohibits dealers from selling open-end fund shares to the public at a price OTHER than:",
    "choices": [
      "Whatever price they negotiate with the buyer",
      "The current public offering price described in the fund's prospectus",
      "The previous day's closing NAV",
      "A price set by the fund's transfer agent each morning"
    ],
    "answerIndex": 1,
    "rationale": "Section 22(d) requires that mutual fund shares be sold to the public only at the current public offering price stated in the prospectus, preventing dealers from cutting prices and undermining uniform sales-charge pricing. Negotiated prices and stale (prior-day) NAV would conflict with both Section 22(d) and the forward-pricing rule.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 22(d)"
    },
    "difficulty": "hard",
    "id": "242023f453db",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Which feature is unique to closed-end funds compared with traditional open-end mutual funds?",
    "choices": [
      "They continuously issue and redeem shares at NAV",
      "They may issue senior securities (such as preferred stock) and use leverage subject to Section 18 limits",
      "They are required to compute NAV once per day under Rule 22c-1",
      "They are prohibited from charging management fees"
    ],
    "answerIndex": 1,
    "rationale": "Closed-end funds, having a fixed capital structure, are permitted to issue senior securities and employ leverage subject to the asset-coverage limits of Section 18 of the Investment Company Act. Continuous issuance and redemption at NAV is the defining feature of open-end funds, not closed-end funds, so that distractor is wrong.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 5"
    },
    "difficulty": "medium",
    "id": "6d37ff1ffd23",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "An IAR explains 'tracking error' to a client. In the context of an index ETF, tracking error MOST accurately means:",
    "choices": [
      "The bid-ask spread of the ETF's shares",
      "The difference between the ETF's return and the return of the index it is designed to replicate",
      "The premium or discount to NAV at the close",
      "The standard deviation of the underlying index over 12 months"
    ],
    "answerIndex": 1,
    "rationale": "Tracking error measures the deviation of fund returns from the targeted benchmark over a period, typically reported as the standard deviation of return differences. The premium/discount-to-NAV and bid-ask spread are separate liquidity/pricing metrics, not measures of how closely the ETF replicates its index.",
    "citation": {
      "source": "OTHER",
      "ref": "Morningstar"
    },
    "difficulty": "medium",
    "id": "6ccd619d0f72",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Hedge funds and private equity funds typically rely on which exemption from Investment Company Act registration?",
    "choices": [
      "Section 3(c)(1) (limited number of beneficial owners) or Section 3(c)(7) (qualified purchasers)",
      "Rule 144 safe harbor for restricted securities",
      "Regulation A+ Tier 2",
      "Securities Act Section 3(a)(2) bank exemption"
    ],
    "answerIndex": 0,
    "rationale": "Sections 3(c)(1) and 3(c)(7) exclude pooled vehicles from the 'investment company' definition based on a limited number of beneficial owners or limiting investors to qualified purchasers, which is why hedge funds and PE funds avoid 1940 Act registration. Rule 144, Regulation A+, and the bank exemption deal with securities issuance, not investment company status.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 3(c)"
    },
    "difficulty": "hard",
    "id": "552ecc011a15",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Which statement about the liquidity of pooled investments is MOST accurate?",
    "choices": [
      "Open-end mutual fund shares are redeemable on demand at NAV (within seven days), while interval funds offer only periodic repurchase windows",
      "Closed-end funds are redeemable at NAV daily on demand by the shareholder",
      "Hedge funds typically offer same-day redemption with no notice",
      "ETFs are not tradeable until 30 days after settlement"
    ],
    "answerIndex": 0,
    "rationale": "Open-end funds redeem shares within seven days at NAV under Section 22(e); interval funds (a hybrid registered structure) repurchase shares only at scheduled intervals (e.g., quarterly). Closed-end funds are bought and sold in the secondary market - they are NOT redeemable on demand - and hedge funds typically have lockups and notice periods.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 22(e)"
    },
    "difficulty": "medium",
    "id": "9928176af3bd",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Which of the following changes would NOT typically require shareholder approval under the Investment Company Act?",
    "choices": [
      "A change in the fund's fundamental investment objective",
      "A change in the fund's status from diversified to non-diversified",
      "A change in the fund's auditor",
      "Adoption or material amendment of a 12b-1 plan"
    ],
    "answerIndex": 2,
    "rationale": "Auditor selection is overseen by the audit committee/board (and ratified per board procedures), but does not require a shareholder vote. Changes in fundamental policies, diversification status, and material 12b-1 plan amendments do require shareholder approval under Sections 13 and Rule 12b-1.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 13"
    },
    "difficulty": "hard",
    "id": "58080d9aa001",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "An investor purchases a closed-end fund trading at a 12% discount to NAV. Which statement BEST describes the implication of buying at a discount?",
    "choices": [
      "The investor is guaranteed a 12% return when the discount inevitably closes",
      "The investor pays less than the per-share value of the fund's underlying portfolio, but the discount may persist or widen",
      "The discount is illegal and must be eliminated within 30 days under SEC rules",
      "The fund's NAV must be increased to match the market price"
    ],
    "answerIndex": 1,
    "rationale": "A discount means market price is below NAV; the buyer obtains exposure to portfolio assets at less than their accounting value, but discounts can widen or persist for years - there is no mechanism that forces convergence. There is no SEC rule that eliminates discounts, and NAV is computed from the portfolio, not adjusted to market price.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 5"
    },
    "difficulty": "medium",
    "id": "0a8f578b7ff4",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Class I (institutional) mutual fund shares typically differ from Class A shares in that Class I shares:",
    "choices": [
      "Carry higher front-end loads than Class A",
      "Have low or no sales loads and lower 12b-1 fees, with high investment minimums",
      "Are sold only to non-U.S. investors",
      "Are required by FINRA to convert to Class C after one year"
    ],
    "answerIndex": 1,
    "rationale": "Class I (institutional) shares typically have no front-end load and minimal or no 12b-1 fees, but require large minimum investments (often $1 million+) and are aimed at retirement plans, advisory platforms, and institutions. They are not restricted to non-U.S. investors and do not convert to Class C.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 12b-1"
    },
    "difficulty": "medium",
    "id": "7a468e839f7f",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "A mutual fund's prospectus reports a 'turnover rate' of 150%. The MOST important investor implication is:",
    "choices": [
      "Higher trading costs and potentially greater short-term capital gain distributions, which can reduce after-tax returns",
      "A guaranteed positive return relative to the benchmark",
      "Automatic loss of qualified dividend treatment for all distributions",
      "A 150% increase in the 12b-1 fee for the year"
    ],
    "answerIndex": 0,
    "rationale": "Higher portfolio turnover increases brokerage costs and is more likely to generate short-term gains, which are taxed at ordinary income rates and reduce after-tax returns - especially in taxable accounts. Turnover does not by itself disqualify dividends from qualified treatment, guarantee benchmark outperformance, or alter 12b-1 fees.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "3febae14e7ed",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Compared with directly owning a diversified portfolio of stocks, a primary BENEFIT a small investor obtains from a pooled investment is:",
    "choices": [
      "Federal deposit insurance on principal",
      "Professional management and economies of scale providing diversification at low minimums",
      "Guaranteed minimum returns set by the SEC",
      "Exemption from federal income tax on distributions"
    ],
    "answerIndex": 1,
    "rationale": "Pooled vehicles let small investors access professional management, diversification, and lower per-trade costs that would be impractical individually. FDIC coverage applies to bank deposits, the SEC does not guarantee returns, and pass-through taxation does not exempt distributions from tax.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "easy",
    "id": "335e421d1386",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Which of the following is a recognized risk of investing in pooled vehicles such as mutual funds?",
    "choices": [
      "Possible underperformance of the chosen benchmark net of fees and expenses",
      "Mandatory leverage at 4:1 imposed by the SEC",
      "Total loss of principal mandated under Rule 22c-1",
      "Forced liquidation if NAV ever rises above $20"
    ],
    "answerIndex": 0,
    "rationale": "Even diversified, professionally managed funds may underperform their benchmarks once fees, transaction costs, and cash drag are accounted for; this is a fundamental risk for active strategies. The other options are fabricated - the SEC does not impose 4:1 leverage, mandate principal loss, or force liquidation based on NAV thresholds.",
    "citation": {
      "source": "OTHER",
      "ref": "Morningstar"
    },
    "difficulty": "easy",
    "id": "2d87068821e5",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Under Rule 22c-2, an open-end fund's board may approve a redemption fee (up to 2%) primarily intended to:",
    "choices": [
      "Compensate the portfolio manager directly",
      "Discourage short-term trading and frequent redemptions that harm long-term shareholders",
      "Replace 12b-1 distribution fees",
      "Subsidize directed brokerage arrangements"
    ],
    "answerIndex": 1,
    "rationale": "Rule 22c-2 lets a fund impose a redemption fee, payable back into the fund, to deter market timing and short-term trading that imposes costs on long-term shareholders. The fee is not paid to the manager, is not a substitute for 12b-1 distribution fees, and has nothing to do with directed brokerage.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 22c-2"
    },
    "difficulty": "hard",
    "id": "5ee6b6beb725",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "An IAR is comparing two large-cap value funds with similar 5-year returns. Fund X has an expense ratio of 0.40% and Fund Y has 1.40%. Holding all else equal, the higher-expense fund must:",
    "choices": [
      "Generate gross returns about 1.00 percentage point higher than Fund X simply to match Fund X net of fees",
      "Be classified as non-diversified under Section 5",
      "Pay higher dividends than Fund X by IRS rule",
      "Convert to Class A shares within five years"
    ],
    "answerIndex": 0,
    "rationale": "Net return equals gross return minus expenses, so a 100-basis-point higher expense ratio requires roughly 100 bps of additional gross return just to deliver the same net result, which compounds significantly over time. The other options are unrelated to expense ratios and are simply incorrect.",
    "citation": {
      "source": "SEC",
      "ref": "Form N-1A"
    },
    "difficulty": "medium",
    "id": "5de74ae512c7",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "Two equity funds are categorized in the same Morningstar 'large-blend' style box. Which COMPARISON is generally MOST informative when assessing relative performance?",
    "choices": [
      "Risk-adjusted return versus a peer group and a style-matched benchmark over multiple full market cycles",
      "Last week's daily NAV change",
      "The most recent 12b-1 fee announcement only",
      "The fund's marketing literature alone"
    ],
    "answerIndex": 0,
    "rationale": "Meaningful relative analysis compares risk-adjusted returns (e.g., Sharpe ratio) against an appropriate benchmark and peer group over multiple market cycles, controlling for style, fees, and risk. Single-day NAV moves, isolated fee announcements, and marketing literature do not support a sound performance evaluation.",
    "citation": {
      "source": "OTHER",
      "ref": "Morningstar"
    },
    "difficulty": "medium",
    "id": "6033bdf1d7bf",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "A client owning a closed-end fund hopes to redeem shares directly with the fund at NAV. The IAR should explain that:",
    "choices": [
      "Closed-end funds redeem at NAV within seven days like open-end funds",
      "Closed-end shares are not redeemable on demand; the investor must sell them on the secondary market at the prevailing market price, which may be at a premium or discount to NAV",
      "Closed-end shares may only be sold back to the original underwriter at par",
      "All closed-end funds convert to open-end status after five years"
    ],
    "answerIndex": 1,
    "rationale": "Closed-end funds have a fixed share count and are not continuously redeemable; investors exit by selling on an exchange at market price, which differs from NAV. The 'seven-day at NAV' choice describes open-end fund redemption under Section 22(e), not closed-end funds.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 22(e)"
    },
    "difficulty": "easy",
    "id": "f8ba7beaf6a4",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "stem": "An investor receives a Form 1099-DIV showing $1,000 of ordinary dividends and $500 of long-term capital gain distributions from a mutual fund. The MOST accurate tax statement is:",
    "choices": [
      "Both amounts are taxed at the investor's ordinary income rate",
      "Both amounts are tax-exempt if reinvested in additional fund shares",
      "The $500 capital gain distribution is taxed at long-term capital gain rates regardless of the investor's holding period in the fund",
      "Capital gain distributions are deferred until the shares are sold"
    ],
    "answerIndex": 2,
    "rationale": "Capital gain distributions from a regulated investment company are taxed to shareholders at long-term capital gain rates regardless of how long the investor has owned the fund shares; ordinary dividends are taxable in the year paid. Reinvestment is irrelevant - reinvested distributions are still taxable when received.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "610414b994d6",
    "subtopicId": "2.9",
    "reviewed": false
  }
];

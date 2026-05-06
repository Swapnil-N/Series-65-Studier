import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "A limited partnership (LP) is best characterized as which of the following?",
    "choices": [
      "An entity in which all owners have unlimited personal liability",
      "A pass-through entity with at least one general partner who manages the business and one or more limited partners whose liability is limited to their investment",
      "A pooled investment vehicle registered under the Investment Company Act of 1940 that issues redeemable shares",
      "A debt security that pays a fixed coupon based on the performance of a benchmark index"
    ],
    "answerIndex": 1,
    "rationale": "An LP has at least one general partner with management authority and unlimited liability and one or more limited partners whose exposure is generally capped at their capital contribution; income, gains, and losses pass through to partners. The 'pooled investment vehicle registered under the Investment Company Act' distractor describes a mutual fund, not an LP - LPs are typically structured to avoid 1940 Act registration.",
    "citation": {
      "source": "NASAA",
      "ref": "Series 65 Content Outline"
    },
    "difficulty": "easy",
    "id": "3a43ee9c055c",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "In a limited partnership, the general partner has which of the following responsibilities and exposures?",
    "choices": [
      "Unlimited personal liability for partnership obligations and authority to manage the business",
      "Liability limited to the amount of the capital contribution and no role in operations",
      "The right to vote on all material decisions but no liability for partnership debts",
      "An obligation to register as an investment adviser under federal law solely because of the GP role"
    ],
    "answerIndex": 0,
    "rationale": "The general partner runs the partnership and is personally liable for partnership obligations, which is the core trade-off for the management authority granted by the partnership agreement. The 'liability limited to capital contribution' distractor describes the limited partner, not the general partner.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "8b5a7c081d72",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "A limited partner's exposure to the obligations of a limited partnership is generally limited to which of the following?",
    "choices": [
      "The amount of capital contributed plus any amounts personally guaranteed",
      "Their pro rata share of total partnership debt regardless of capital contribution",
      "An unlimited amount, identical to the general partner",
      "Only the cash distributions actually received from the partnership"
    ],
    "answerIndex": 0,
    "rationale": "A limited partner's downside is generally capped at the capital invested plus any personal guarantees or recourse obligations the LP signs. The 'unlimited' distractor is wrong - that exposure belongs to the general partner; the entire reason an investor accepts the LP role is to obtain limited liability.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "4abe9079f8c3",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "Limited partnerships pass income, gains, losses, deductions, and credits through to investors each year on which IRS form?",
    "choices": [
      "Form 1099-DIV",
      "Form 1099-INT",
      "Schedule K-1",
      "Form W-2"
    ],
    "answerIndex": 2,
    "rationale": "An LP files Form 1065 and reports each partner's allocable share of income, deductions, and credits on Schedule K-1. The Form 1099-DIV distractor is wrong because 1099-DIV reports corporate dividends from regulated investment companies and corporations, not partnership pass-through items.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS"
    },
    "difficulty": "easy",
    "id": "780c354cf233",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "Which of the following BEST describes an exchange traded note (ETN)?",
    "choices": [
      "A pooled investment vehicle that physically holds a basket of underlying securities",
      "An unsecured, unsubordinated debt obligation of an issuer that promises to pay a return tied to a reference index, less fees",
      "A registered open-end investment company that issues redeemable shares at end-of-day NAV",
      "A standardized futures contract listed on a designated contract market"
    ],
    "answerIndex": 1,
    "rationale": "An ETN is a senior, unsecured debt obligation of the issuer (typically a bank) that contractually pays the return of a stated reference index, less fees, at maturity or on redemption. The 'pooled investment vehicle that physically holds a basket' distractor describes an ETF - ETNs do not own the underlying assets and are not investment companies.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "easy",
    "id": "fcea547095f2",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "Which risk is borne by an investor in an exchange traded note (ETN) but NOT by an investor in an exchange traded fund (ETF) tracking the same index?",
    "choices": [
      "Market risk of the reference index",
      "Daily liquidity risk on the secondary market",
      "Credit risk of the issuing financial institution",
      "Custodial risk on the underlying index components"
    ],
    "answerIndex": 2,
    "rationale": "An ETN is unsecured debt, so a default or material credit event of the issuer can wipe out an ETN holder even if the reference index is unchanged; an ETF holds the underlying securities so the issuer's credit is largely irrelevant. The 'market risk of the reference index' distractor is shared by both products and therefore does not distinguish them.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "826cea676392",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "A leveraged fund is most accurately described as a fund that:",
    "choices": [
      "Borrows from custodial banks to purchase additional shares of its benchmark for buy-and-hold investors",
      "Uses derivatives, swaps, or borrowing to seek a multiple (e.g., 2x or 3x) of the daily return of a reference index",
      "Holds a long-only portfolio of large-capitalization domestic equities",
      "Distributes monthly long-term capital gains to investors"
    ],
    "answerIndex": 1,
    "rationale": "Leveraged ETFs and mutual funds use total return swaps, futures, and other derivatives to deliver a stated multiple - typically 2x or 3x - of the daily return of an index. The 'long-only large-cap portfolio' distractor describes a plain index fund, which has no leverage and no daily reset.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "easy",
    "id": "5942fe0bdd27",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "An inverse fund is designed to:",
    "choices": [
      "Track the same direction as the underlying index but with a one-day lag",
      "Provide returns that move opposite to the daily performance of a reference index",
      "Generate fixed coupon payments regardless of the direction of the reference index",
      "Lock in the inverse of the index's annual return at year-end"
    ],
    "answerIndex": 1,
    "rationale": "An inverse fund uses derivatives to deliver the opposite of the daily return of a stated index - if the index loses 1% on a day, a -1x inverse fund seeks to gain roughly 1% that day. The 'fixed coupon' distractor describes a debt security; an inverse fund pays no coupon and tracks index direction inversely.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "easy",
    "id": "9be3f79c96d0",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "Most leveraged and inverse exchange traded products are designed to deliver their stated multiple over which time period?",
    "choices": [
      "One trading day",
      "One calendar week",
      "One calendar quarter",
      "The full life of the fund"
    ],
    "answerIndex": 0,
    "rationale": "The prospectus objective for almost all listed leveraged and inverse ETFs is a stated multiple of the index's return for one trading day; the fund rebalances daily. The 'full life of the fund' distractor is wrong - precisely because of daily rebalancing and compounding, returns over longer periods can diverge sharply from the stated daily multiple.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "easy",
    "id": "fcd5b3f0c6bb",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "A structured product is generally described as which of the following?",
    "choices": [
      "A senior secured bank loan held in a syndicated portfolio",
      "A pre-packaged investment, typically a debt instrument, whose return is contractually linked to one or more underlying assets, indexes, or derivatives",
      "A money market mutual fund subject to Rule 2a-7 quality and maturity limits",
      "An open-end fund that invests exclusively in U.S. Treasury securities"
    ],
    "answerIndex": 1,
    "rationale": "Structured products are bank- or broker-dealer-issued instruments that combine a debt component with one or more derivatives to create a customized payoff tied to a reference asset. The 'money market fund' distractor is incorrect because a money market fund is a registered investment company subject to Rule 2a-7 and has nothing to do with engineered derivative payoffs.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "easy",
    "id": "b75b2de3ab3c",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "The principal benefit to an investor of holding a limited partner interest, rather than a general partner interest, in an LP is:",
    "choices": [
      "Day-to-day control over the partnership's business operations",
      "Limited liability for partnership debts and obligations",
      "A guaranteed annual cash distribution",
      "FDIC insurance on the LP investment up to $250,000"
    ],
    "answerIndex": 1,
    "rationale": "Limited partners trade away management authority for liability that is generally limited to their capital contribution, which is the defining benefit of the LP role. The 'day-to-day control' distractor is wrong - active management is the responsibility of the general partner, and an LP that participates in management may risk losing limited liability protection.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "287013d66a2c",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "An exchange traded note (ETN) typically trades:",
    "choices": [
      "Only over-the-counter between dealers, with no exchange listing",
      "On a national securities exchange in continuous secondary trading throughout the trading day",
      "Only at end-of-day net asset value, similar to an open-end mutual fund",
      "Only in private placements to accredited investors under Regulation D"
    ],
    "answerIndex": 1,
    "rationale": "ETNs are listed on a national securities exchange and trade intraday at market prices that may differ from the indicative value of the reference index. The 'end-of-day NAV' distractor describes mutual funds priced once per day under Rule 22c-1; ETNs are continuously priced like equities.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934"
    },
    "difficulty": "easy",
    "id": "3ffb04973b68",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "Compared to an exchange traded fund tracking the same index, an exchange traded note generally has:",
    "choices": [
      "Higher tracking error because the ETN must physically hold the underlying basket",
      "Lower or no tracking error because the ETN's return is contractually tied to the index, less fees",
      "Greater protection from issuer default than the ETF",
      "Mandatory daily creation and redemption of the underlying physical securities"
    ],
    "answerIndex": 1,
    "rationale": "Because an ETN is a contractual debt obligation that pays the index return less fees, it generally has minimal tracking error from sampling, dividend timing, or rebalancing - issues that can affect physically replicated ETFs. The 'higher tracking error because the ETN must physically hold the underlying basket' distractor is backwards - ETNs do not hold the basket at all; ETFs do.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "17bdae5156d1",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "An advantage that ETNs may offer over comparable ETFs from a federal income tax perspective is that:",
    "choices": [
      "ETN holders typically receive larger annual income distributions",
      "ETN gains are exempt from federal income tax",
      "ETNs generally do not pass through annual interest, dividend, or capital gain distributions, so investors typically defer recognition until sale, redemption, or maturity",
      "ETNs are treated as municipal securities and pay tax-exempt interest"
    ],
    "answerIndex": 2,
    "rationale": "Because an ETN is a single debt instrument rather than a flow-through fund, it generally does not throw off annual taxable distributions; the holder typically recognizes capital gain or loss when the position is closed. The 'tax-exempt as municipal securities' distractor is plainly wrong - ETNs are corporate debt of the issuing bank and are not municipal securities.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "bc174b4d784b",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "Holding a 2x daily leveraged ETF for several months in a volatile, sideways market is MOST likely to produce which result?",
    "choices": [
      "A return exactly equal to two times the cumulative index return for that period",
      "A return greater than two times the index return because of beneficial compounding",
      "A return that diverges from twice the index return because of daily compounding and volatility decay",
      "No change in the value of the ETF, since the index ended where it began"
    ],
    "answerIndex": 2,
    "rationale": "Daily rebalancing of a 2x leveraged fund causes its multi-day return to compound off a moving base; in a sideways but volatile market, the geometric path generally drags the fund below 2x the index return - a phenomenon known as volatility decay. The 'exactly two times' distractor ignores compounding and is only approximately true for a single trading day, not multi-period returns.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2111"
    },
    "difficulty": "medium",
    "id": "8e8c77403c58",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "Which of the following is the MOST significant concern when an investor holds a daily inverse ETF for longer than one trading day?",
    "choices": [
      "The fund's expense ratio will reset to zero each calendar quarter",
      "Compounding of daily inverse returns can cause performance over the period to differ materially from the simple inverse of the index's cumulative return",
      "The fund will be automatically redeemed by the issuer at the end of the next trading day",
      "The investor loses voting rights on the underlying portfolio securities"
    ],
    "answerIndex": 1,
    "rationale": "Inverse ETFs reset to a -1x exposure each day, so multi-day returns are the geometric product of inverse daily returns and routinely diverge from minus one times the cumulative index return, especially in volatile markets. The 'voting rights' distractor is wrong because an inverse ETF holds derivatives, not voting shares; voting rights were never part of the product.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2210"
    },
    "difficulty": "medium",
    "id": "aa86e08d9feb",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "An investment adviser representative is considering recommending a 3x leveraged ETF to a long-term, conservative retiree as a buy-and-hold core position. Under FINRA's suitability rule, this recommendation is BEST described as:",
    "choices": [
      "Suitable, because leveraged ETFs are registered under the Investment Company Act of 1940",
      "Suitable, because the fund trades on a national securities exchange",
      "Generally unsuitable, because leveraged ETFs are designed to deliver a multiple of the index return on a daily basis and create amplified, path-dependent losses for long-term holders, particularly in volatile markets",
      "Suitable only if the customer signs a pre-dispute arbitration agreement"
    ],
    "answerIndex": 2,
    "rationale": "FINRA has issued repeated guidance that leveraged and inverse ETFs are typically not appropriate for buy-and-hold retail investors because daily reset and compounding can produce large losses over time, especially against a conservative profile. The 'suitable because registered under the 1940 Act' distractor confuses regulatory status with suitability - registration under the Investment Company Act does not make a complex product appropriate for any particular customer.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2111"
    },
    "difficulty": "medium",
    "id": "a28ec03b4b80",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "A typical structured product issued by a bank or broker-dealer is constructed by combining which two general components?",
    "choices": [
      "A common stock position and a margin loan",
      "A debt instrument (such as a zero-coupon or coupon-bearing note) and a derivative position (such as an option or swap) on a reference asset",
      "Two long futures contracts on different underlying commodities",
      "A money market fund and a deferred variable annuity"
    ],
    "answerIndex": 1,
    "rationale": "Structured notes are typically packaged as a debt obligation of the issuer combined with embedded derivatives that deliver the engineered payoff (cap, participation rate, principal protection, etc.). The 'common stock plus margin loan' distractor is just a leveraged equity position and is not a structured product; structured products are normally debt of the issuer.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "ace9c87f9702",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "An equity-linked note pays the investor:",
    "choices": [
      "A fixed semiannual coupon, regardless of equity performance",
      "A return at maturity that is contractually linked to the performance of an underlying equity, equity index, or basket, subject to caps, floors, or participation rates set in the offering documents",
      "The actual cash dividends paid by the reference equity each quarter",
      "A guaranteed return equal to twice the equity index's annual return"
    ],
    "answerIndex": 1,
    "rationale": "An ELN is a debt security whose payment at maturity is determined by a formula tied to one or more reference equities or equity indexes, often with caps, floors, knock-in barriers, or participation rates. The 'fixed semiannual coupon regardless of equity performance' distractor describes a plain corporate bond, not an equity-linked product whose payoff hinges on the reference asset.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "medium",
    "id": "0a361474fc1d",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "A 'principal-protected note' marketed to retail investors generally provides:",
    "choices": [
      "Federal deposit insurance through the FDIC",
      "A contractual promise from the issuer to return the investor's principal at maturity, plus a return tied to a reference asset, subject to the issuer's credit risk",
      "A guaranteed minimum 5% annual return regardless of issuer solvency",
      "Tax-free interest payments under the Internal Revenue Code"
    ],
    "answerIndex": 1,
    "rationale": "A PPN is structured to repay 100% of principal at maturity if held to term, plus an upside payoff tied to a reference index or basket - but the 'protection' is only as strong as the credit of the issuer that wrote the note. The 'FDIC insurance' distractor is wrong because PPNs are typically not bank deposits; they are senior unsecured debt instruments and are not covered by FDIC.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "medium",
    "id": "20561739de00",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "A reverse convertible note typically exposes the investor to which of the following risks?",
    "choices": [
      "Mandatory conversion into a higher-rated bond at maturity",
      "Loss of principal if the reference asset falls below a specified barrier or strike, in which case the investor may receive depreciated reference shares rather than full cash principal",
      "Increased FDIC coverage on amounts above $250,000",
      "Forced sale of the position at the issuer's discretion before settlement"
    ],
    "answerIndex": 1,
    "rationale": "A reverse convertible pays an above-market coupon but contains an embedded short put: if the reference asset breaches a downside barrier, the investor is paid back in depreciated shares rather than cash, which can produce substantial losses. The 'mandatory conversion into a higher-rated bond' distractor inverts the actual structure - the conversion in a reverse convertible is downward into shares, not upward into a better bond.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "42f5aff08546",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "Limited partnership interests sold to investors in private offerings most commonly rely on which exemption from federal registration?",
    "choices": [
      "Registered offerings under Section 5 of the Securities Act of 1933 with full SEC merit review",
      "Regulation D, often Rule 506(b) or Rule 506(c), and offered primarily to accredited investors",
      "Section 3(a)(2) bank securities exemption",
      "Open-end fund prospectus delivery under the Investment Company Act"
    ],
    "answerIndex": 1,
    "rationale": "Most private LP offerings - hedge funds, real estate LPs, private equity vehicles - rely on the Regulation D safe harbor (Rule 506(b) for nonsolicited offerings, Rule 506(c) when general solicitation is used and all purchasers are verified accredited) under Section 4(a)(2). The 'registered Section 5 offering' distractor is wrong because the entire purpose of using an LP wrapper is typically to avoid full SEC registration and merit review.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation D"
    },
    "difficulty": "medium",
    "id": "873d63590894",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "Which of the following is a common tax-reporting drawback of investing in a limited partnership?",
    "choices": [
      "Investors receive a Form 1099-DIV that arrives in January",
      "Schedule K-1s are typically issued late in the tax filing season, which can delay the limited partner's individual tax return",
      "Limited partnerships are taxed as C-corporations, producing double taxation on distributions",
      "Limited partners may not deduct any of their share of partnership losses"
    ],
    "answerIndex": 1,
    "rationale": "Because a partnership must complete its own books and prepare K-1s for every partner, K-1s often arrive in March or later and can force investors to file extensions or amend returns. The 'taxed as a C-corporation' distractor is wrong - partnerships are pass-through entities, and avoiding entity-level tax is a primary reason investors choose the LP form.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS"
    },
    "difficulty": "medium",
    "id": "01c328213aa1",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "Compared with an exchange-listed common stock, a limited partnership interest is typically:",
    "choices": [
      "More liquid because of continuous auction-market trading",
      "Less liquid, with limited or no active secondary market and possible transfer restrictions in the partnership agreement",
      "Marginable on the same terms as a listed equity under Regulation T",
      "Always redeemable at net asset value upon investor request"
    ],
    "answerIndex": 1,
    "rationale": "Most LP interests, especially private placements, lack a continuous market and are subject to transfer restrictions in the partnership agreement; secondary sales often require GP consent and may price at substantial discounts. The 'always redeemable at NAV' distractor describes an open-end mutual fund - LPs are generally closed and do not offer daily redemption.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "8e6851357000",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "An index closes at 100, rises 10% on day 1 to 110, then falls about 9.09% on day 2 back to 100. A 2x daily leveraged ETF tracking this index will end day 2 closest to which of the following values, starting at 100?",
    "choices": [
      "100.00, matching the index",
      "98.18, slightly below par",
      "110.00, the day-1 high",
      "120.00, the day-1 leveraged value"
    ],
    "answerIndex": 1,
    "rationale": "Day 1 the ETF rises 20% to 120; day 2 it falls 18.18% (2 x 9.09%) to 120 x 0.8182 ~ 98.18. The index returns to 100 but the 2x ETF lags below par because daily compounding off the new base produces volatility decay. The '100.00 matching the index' distractor ignores that the ETF rebalances each day off the previous close, not off the original starting price.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "6a74ae07940f",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "A client wants short-term exposure that profits when the S&P 500 falls. Compared with selling short an index ETF, holding an inverse ETF offers which of the following features?",
    "choices": [
      "Unlimited theoretical loss potential, the same as a short equity position",
      "A long-only structure with losses limited to the amount invested, eliminating margin calls on the position itself",
      "Mandatory delivery of the underlying index basket at expiration",
      "FDIC insurance coverage on the position up to $250,000"
    ],
    "answerIndex": 1,
    "rationale": "Owning an inverse ETF is a long position whose maximum loss is the premium paid; the investor is not subject to margin calls or theoretically unlimited losses that accompany short selling. The 'unlimited theoretical loss potential' distractor describes short selling, not the inverse ETF, where downside is capped at the investment.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "78425e82768c",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "Many ETNs include an issuer 'call' or early redemption feature that allows the issuer to:",
    "choices": [
      "Force the investor to convert ETN holdings into common stock of the issuer",
      "Redeem the ETN prior to its scheduled maturity at a price tied to the indicative value, subject to terms in the prospectus",
      "Reset the underlying reference index to a new benchmark without notice",
      "Terminate any short positions held by other investors in the same ETN"
    ],
    "answerIndex": 1,
    "rationale": "Most ETN prospectuses give the issuer the right to call the note early - for example, when assets fall below a threshold or for tax reasons - paying holders an amount tied to the indicative value, which exposes the investor to reinvestment risk. The 'forced conversion into the issuer's common stock' distractor describes a convertible bond, not a typical ETN call right.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "medium",
    "id": "c84294455259",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "A structured note offers 100% participation in an equity index's gains up to a 'cap' of 30% over a 5-year term, with full principal repayment at maturity if held to term. If the index returns 50% over the 5 years, the investor receives:",
    "choices": [
      "The full 50% appreciation of the index at maturity",
      "The capped 30% return plus return of principal, subject to issuer credit risk",
      "A floor of 10% plus principal, regardless of cap terms",
      "Nothing until the investor holds for an additional five-year period"
    ],
    "answerIndex": 1,
    "rationale": "The cap explicitly limits the upside to 30% even when the index outperforms - the trade-off for principal protection and a defined participation rate. The 'full 50% appreciation' distractor ignores the cap, which is the defining feature of a capped participation note.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "33f366531edd",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "A private equity fund organized as a limited partnership commonly relies on which Investment Company Act exclusions to avoid registration as an investment company?",
    "choices": [
      "Section 3(c)(1) (no more than 100 beneficial owners) or Section 3(c)(7) (interests sold only to qualified purchasers)",
      "Section 22(d) (uniform pricing of redeemable shares)",
      "Rule 12b-1 (distribution and service fees)",
      "Section 17(b) (orders permitting affiliated transactions)"
    ],
    "answerIndex": 0,
    "rationale": "Private LP funds escape Investment Company Act registration by relying on Section 3(c)(1) (limited number of beneficial owners) or Section 3(c)(7) (qualified purchasers only). The 'Section 22(d) uniform pricing' distractor governs forward pricing of redeemable shares for registered funds and has nothing to do with the private fund exclusions.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 3(c)"
    },
    "difficulty": "medium",
    "id": "1ddbf1b76a8a",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "Leveraged and inverse ETFs typically rebalance their derivative exposure:",
    "choices": [
      "On a calendar quarter basis, in line with their underlying index rebalancing",
      "Daily, in order to maintain the stated leverage or inverse exposure relative to one trading day's index return",
      "Only when investors purchase or redeem creation units",
      "Only when the prospectus is updated each year"
    ],
    "answerIndex": 1,
    "rationale": "Because the prospectus objective is a daily multiple, the manager rebalances exposure each day so that, going into the next session, leverage is back to the stated multiple - this daily reset is the source of compounding effects over multi-day horizons. The 'quarterly rebalancing' distractor is wrong; that cadence describes how some indexes rebalance constituents, not how leveraged ETFs reset leverage.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "medium",
    "id": "b3a9a99ab506",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "A limited partner who signs a subscription agreement for a real-estate limited partnership and provides a recourse promissory note for additional capital:",
    "choices": [
      "Continues to have liability limited only to the cash already contributed, regardless of the recourse note",
      "May be personally liable for the full amount of the recourse note in addition to the cash already contributed",
      "Becomes a general partner under federal law as soon as the recourse note is signed",
      "Loses limited liability protection for all unrelated personal assets in every case"
    ],
    "answerIndex": 1,
    "rationale": "A recourse note is a personal obligation to fund additional capital and creates direct liability up to the face of the note even though the investor remains a limited partner. The 'limited only to cash already contributed' distractor ignores the recourse obligation; signing recourse paper expands the LP's downside beyond the initial check.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "817086e3d233",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "From a federal income tax standpoint, an investor who buys an ETN at issuance and sells it before maturity at a higher price typically:",
    "choices": [
      "Recognizes annual ordinary income from interest distributions during the holding period",
      "Recognizes capital gain or loss on sale, with no annual interest or dividend distributions to report during the holding period",
      "Receives a Schedule K-1 each year reflecting the ETN's pro-rata partnership income",
      "Owes federal estate tax annually based on the appreciated value of the ETN"
    ],
    "answerIndex": 1,
    "rationale": "Because most equity-linked ETNs are non-coupon prepaid forward-style debt, the holder generally has no current taxable income and recognizes capital gain or loss on sale, redemption, or maturity. The 'Schedule K-1' distractor is wrong because ETNs are debt securities of a corporation, not partnership interests, so they do not produce K-1s.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "8e3e246f9536",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "A 'principal-protected note' is most commonly engineered by combining which two components, both issued or guaranteed by the same issuer?",
    "choices": [
      "A long stock position and a written covered call",
      "A zero-coupon bond sized to mature at par plus a long call option (or similar derivative) on a reference asset",
      "A money market fund and a Treasury bill",
      "A short futures contract and an offsetting short option"
    ],
    "answerIndex": 1,
    "rationale": "PPNs are typically built by buying a discounted zero-coupon bond that grows back to par at maturity (the 'protection') and using the remaining proceeds to buy a call or other derivative that delivers upside tied to a reference asset. The 'long stock plus written covered call' distractor describes a covered call strategy, which has equity downside and is not principal-protected.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "7889b0a998d0",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "The secondary market for a typical structured note issued by a single broker-dealer is BEST described as:",
    "choices": [
      "Deep and continuous, comparable to that of an on-the-run U.S. Treasury security",
      "Limited and often dependent on the issuer's willingness to repurchase, frequently at a discount, and may be discontinued at any time, creating significant liquidity risk",
      "Operated by the FDIC for insured retail products",
      "Required by SEC rules to maintain a minimum two-way quote at all times"
    ],
    "answerIndex": 1,
    "rationale": "Most structured notes have no listed market; liquidity is driven by the issuer's discretionary bid, which may include a substantial markdown and can be withdrawn entirely - investors buying a 5-year note should be prepared to hold to maturity. The 'deep and continuous like Treasuries' distractor is wrong because structured notes are bespoke, single-issuer instruments without a centralized market.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2210"
    },
    "difficulty": "hard",
    "id": "832cb6e9d310",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "Under the Internal Revenue Code's passive activity loss rules, a non-active limited partner generally may:",
    "choices": [
      "Deduct LP losses against wage and portfolio income immediately, but only after a 5-year carryforward",
      "Deduct LP losses only against income from other passive activities, such as other limited partnership interests, with disallowed losses carried forward",
      "Use LP losses to claim a refundable federal tax credit",
      "Reclassify all LP income as long-term capital gain regardless of holding period"
    ],
    "answerIndex": 1,
    "rationale": "Losses from a passive activity (such as a non-active LP interest) generally can only offset passive income; excess losses are suspended and carried forward until the investor has passive income or disposes of the entire interest. The 'deduct against wages and portfolio income immediately' distractor is exactly what the passive activity rules are designed to prevent.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "6097c4f9b506",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "A reverse convertible note pays an above-market coupon. The above-market yield primarily compensates the investor for:",
    "choices": [
      "Bearing the credit risk of the U.S. Treasury",
      "Effectively having sold a put option on the reference asset to the issuer, exposing the investor to downside in the reference asset",
      "Forgoing voting rights on the issuer's preferred stock",
      "Agreeing to lock the position for ten years without any coupon payments"
    ],
    "answerIndex": 1,
    "rationale": "A reverse convertible embeds a short put on the reference asset; the issuer pays the investor the put premium in the form of an above-market coupon, and the investor bears downside if the reference asset breaches the barrier. The 'Treasury credit risk' distractor is incorrect because the issuer is typically a bank or broker-dealer, not the U.S. government, and Treasuries do not pay above-market coupons for credit risk.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "294abf8f6342",
    "subtopicId": "2.12",
    "reviewed": false
  },
  {
    "stem": "Which statement BEST captures the credit-risk relationship between an ETN and its issuer?",
    "choices": [
      "ETNs are collateralized by the underlying index components, so a default by the issuer has no impact on holders",
      "ETNs are senior secured obligations and rank ahead of the issuer's deposits in liquidation",
      "ETNs are senior unsecured debt of the issuer, so a bankruptcy or material credit event of the issuer can cause significant or total loss even when the reference index is unchanged",
      "ETNs are insured by SIPC up to $500,000 against issuer default"
    ],
    "answerIndex": 2,
    "rationale": "Because ETN holders are general unsecured creditors of the sponsoring bank, a default on the note - regardless of how the reference index has performed - can wipe out principal, as illustrated when issuers like Lehman Brothers failed. The 'SIPC insurance against issuer default' distractor misstates SIPC's coverage: SIPC protects against the failure of a brokerage firm to return customer assets, not against the credit risk of an issuer's debt securities.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "7371ede03676",
    "subtopicId": "2.12",
    "reviewed": false
  }
];

import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "An investor sells stock held for 14 months at a $10,000 gain. How is this gain taxed for federal income tax purposes?",
    "choices": [
      "As ordinary income at the investor's marginal tax bracket",
      "As a long-term capital gain at preferential rates (0%, 15%, or 20%)",
      "As a short-term capital gain at preferential rates",
      "Tax-free because it qualifies for like-kind treatment"
    ],
    "answerIndex": 1,
    "rationale": "Assets held more than one year qualify for long-term capital gain treatment, which is taxed at preferential federal rates of 0%, 15%, or 20% depending on taxable income. Choice A is the top distractor — that treatment applies to short-term gains (assets held one year or less), but here the 14-month holding period clearly exceeds one year. Like-kind treatment under IRC Section 1031 is limited to real property and does not apply to securities.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "easy",
    "id": "5df1f42175a7",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following is required for a dividend to be classified as a qualified dividend?",
    "choices": [
      "The investor must hold the stock for more than 60 days during the 121-day period beginning 60 days before the ex-dividend date",
      "The dividend must be paid by a money market fund",
      "The investor must be in the highest marginal tax bracket",
      "The dividend must be reinvested through a DRIP"
    ],
    "answerIndex": 0,
    "rationale": "To be a qualified dividend taxed at long-term capital gains rates, the investor must satisfy the holding period of more than 60 days during the 121-day window centered on the ex-dividend date, and the dividend must come from a U.S. corporation or qualified foreign corporation. Choice B is the top distractor — money market fund distributions are typically interest, taxed as ordinary income, not qualified dividends. Reinvestment and tax bracket are irrelevant to qualification.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "2d626b7fc178",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "A client inherits 1,000 shares of stock from her father. He purchased the shares for $20 per share; on the date of death, the shares were worth $80. What is the client's tax basis per share?",
    "choices": [
      "$20 (carryover basis)",
      "$50 (average of cost and FMV)",
      "$80 (stepped-up to fair market value at death)",
      "$0 until sold"
    ],
    "answerIndex": 2,
    "rationale": "Property acquired from a decedent receives a step-up (or step-down) in basis to its fair market value on the date of death under IRC Section 1014. This is a key wealth-transfer planning advantage of inherited assets. Choice A is the top distractor — carryover basis applies to gifted property during the donor's lifetime, not to property transferred at death.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "easy",
    "id": "8fbeee224bf1",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "A donor gifts stock to her nephew. The donor's basis was $10,000 and the fair market value at the time of the gift was $25,000. What is the nephew's basis for determining gain on a later sale?",
    "choices": [
      "$10,000 (the donor's carryover basis)",
      "$25,000 (fair market value at the date of the gift)",
      "$17,500 (average of basis and FMV)",
      "Zero, because gifts have no basis"
    ],
    "answerIndex": 0,
    "rationale": "For gifted appreciated property, the donee takes the donor's carryover basis when computing gain on a later sale. Unlike inheritance, gifts during life do NOT receive a step-up. Choice B is the top distractor — FMV at the date of the gift only matters when the property has depreciated below the donor's basis (the 'dual-basis' rule for losses).",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "b22a292c95de",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Which statement best describes a taxpayer's marginal tax bracket?",
    "choices": [
      "The total tax owed divided by total income",
      "The rate that applies to the next dollar of taxable income earned",
      "A flat rate set by Congress for all wage earners",
      "The blended state and federal rate combined"
    ],
    "answerIndex": 1,
    "rationale": "The marginal tax bracket is the rate applied to the next (or last) dollar of taxable income, which drives many planning decisions such as Roth conversions and tax-loss harvesting. Choice A is the top distractor — that calculation describes the effective (average) tax rate, which differs from the marginal rate in a progressive system.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 17"
    },
    "difficulty": "easy",
    "id": "06dd45792443",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following is most likely to trigger Alternative Minimum Tax (AMT) liability?",
    "choices": [
      "Deductible mortgage interest on a primary residence",
      "Exercise of incentive stock options (ISOs) without selling the shares",
      "Standard deduction claimed by a single filer",
      "Receipt of qualified dividends"
    ],
    "answerIndex": 1,
    "rationale": "Exercising ISOs and holding the shares creates a 'bargain element' (FMV minus exercise price) that is a preference item for AMT, even though no cash has changed hands. Choice D is the top distractor — qualified dividends are taxed at preferential rates under both the regular tax and AMT, so they generally do not trigger AMT exposure.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "1fef9dc95f98",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Under current law (post-SECURE 2.0), at what age must an individual generally begin taking required minimum distributions (RMDs) from a traditional IRA?",
    "choices": [
      "Age 59 1/2",
      "Age 65",
      "Age 70 1/2",
      "Age 73"
    ],
    "answerIndex": 3,
    "rationale": "SECURE 2.0 raised the RMD beginning age to 73 (and to 75 starting in 2033 for those born in 1960 or later). Age 70 1/2 (Choice C) is the legacy threshold from before the SECURE Act of 2019 and is now obsolete for new RMD-age determinations.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 590-B"
    },
    "difficulty": "medium",
    "id": "c2302028af81",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "A retiree fails to take her full required minimum distribution from her traditional IRA. Under SECURE 2.0, what is the standard excise tax penalty on the shortfall?",
    "choices": [
      "10% of the shortfall",
      "25% of the shortfall (potentially reduced to 10% if corrected timely)",
      "50% of the shortfall",
      "100% of the shortfall"
    ],
    "answerIndex": 1,
    "rationale": "SECURE 2.0 reduced the missed-RMD excise tax from 50% to 25%, with a further reduction to 10% if the shortfall is corrected within a defined correction window. Choice C (50%) is the top distractor — that was the historical penalty before SECURE 2.0 took effect.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 590-B"
    },
    "difficulty": "medium",
    "id": "1d2d69b55e34",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following accounts is NOT subject to required minimum distributions during the original owner's lifetime?",
    "choices": [
      "Traditional IRA",
      "SEP IRA",
      "SIMPLE IRA",
      "Roth IRA"
    ],
    "answerIndex": 3,
    "rationale": "Roth IRAs are not subject to RMDs during the original account owner's lifetime; this is one of their key planning advantages. Beneficiaries of inherited Roth IRAs are subject to distribution rules. Choice A is the top distractor because traditional IRAs and other pre-tax retirement accounts are subject to RMDs starting at age 73.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 590-B"
    },
    "difficulty": "easy",
    "id": "49a4b7fa6588",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "What does IRMAA refer to in the context of a retiree's tax and benefit planning?",
    "choices": [
      "A federal estate tax credit available to surviving spouses",
      "An income-based surcharge that increases Medicare Part B and Part D premiums",
      "An IRS rule limiting deductibility of investment advisory fees",
      "A penalty for late filing of Form 1040"
    ],
    "answerIndex": 1,
    "rationale": "IRMAA (Income-Related Monthly Adjustment Amount) is a surcharge added to Medicare Part B and Part D premiums for higher-income beneficiaries, generally based on modified adjusted gross income from two years earlier. Choice A is the top distractor — that describes the unlimited marital deduction or portability, which are estate-tax concepts, not Medicare-related.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 17"
    },
    "difficulty": "medium",
    "id": "feaa45209030",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "A large Roth conversion in a single year is most likely to cause which collateral effect for a retiree on Medicare?",
    "choices": [
      "Loss of Social Security benefits",
      "Increased Medicare Part B and Part D premiums via IRMAA",
      "Disqualification from Medicare entirely",
      "Conversion of Medicare to Medicaid"
    ],
    "answerIndex": 1,
    "rationale": "Roth conversions count as ordinary income, which can push MAGI into a higher IRMAA tier and increase Medicare Part B and Part D premiums two years later. Choice A is the top distractor — Social Security benefits are not lost due to high income, though up to 85% of benefits may become taxable.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 17"
    },
    "difficulty": "hard",
    "id": "58c85c7dc6ed",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following correctly distinguishes a C corporation from an S corporation for federal income tax purposes?",
    "choices": [
      "A C corporation is a passthrough; an S corporation pays entity-level tax",
      "A C corporation is taxed at the entity level and again on dividends; an S corporation generally passes income through to shareholders",
      "Only S corporations are eligible for the 21% flat corporate rate",
      "C corporations are limited to 100 shareholders; S corporations have no limit"
    ],
    "answerIndex": 1,
    "rationale": "C corporations face entity-level tax at a flat 21% federal rate (post-TCJA), and dividends are taxed again at the shareholder level — the classic 'double taxation.' S corporations elect passthrough treatment under Subchapter S. Choice D reverses the rule — S corporations are limited to 100 shareholders, while C corporations have no such cap.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "d022446a9204",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "A REIT distributes ordinary dividends to a unit holder. How are those distributions generally taxed at the federal level?",
    "choices": [
      "As qualified dividends at long-term capital gains rates",
      "As ordinary income (though a portion may qualify for the QBI deduction)",
      "As tax-free return of capital",
      "As long-term capital gain regardless of holding period"
    ],
    "answerIndex": 1,
    "rationale": "Most REIT ordinary distributions are taxed at the investor's ordinary income rate because REITs themselves avoid entity-level tax by distributing at least 90% of taxable income; they generally do not pay the corporate-level tax that would make their dividends 'qualified.' A portion may be eligible for the Section 199A (QBI) deduction. Choice A is the top distractor — REIT ordinary dividends do not meet the qualified-dividend definition.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "177a6693675e",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "A Master Limited Partnership (MLP) sends investors a Schedule K-1 each year. Which characteristic is true of MLP investments?",
    "choices": [
      "MLPs are taxed as C corporations at the entity level",
      "MLPs pass income, gains, losses, and deductions through to unitholders",
      "MLP distributions are always treated as qualified dividends",
      "MLPs cannot generate unrelated business taxable income (UBTI)"
    ],
    "answerIndex": 1,
    "rationale": "MLPs are passthrough entities; income, gains, losses, and deductions flow through to unitholders via Schedule K-1, and there is no entity-level tax. Choice D is the top distractor — MLPs commonly produce UBTI, which can create tax filing complications for tax-exempt entities and IRAs holding MLP units above the $1,000 threshold.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "hard",
    "id": "9d28af6b194f",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Which entity type is generally treated as a passthrough by default for federal tax purposes when it has more than one member, absent a different election?",
    "choices": [
      "C corporation",
      "Limited Liability Company (LLC)",
      "Publicly traded C corp",
      "Investment trust treated as a corporation"
    ],
    "answerIndex": 1,
    "rationale": "By default, a multi-member LLC is taxed as a partnership (passthrough) under the check-the-box regulations, though it may elect S or C corporation treatment. Choice A is the top distractor — C corporations are always taxed at the entity level regardless of ownership structure.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "90003b93581d",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "An irrevocable trust accumulates investment income rather than distributing it. How is the trust generally taxed?",
    "choices": [
      "Income flows through to the grantor's personal return regardless",
      "Income retained by the trust is taxed to the trust at compressed trust tax brackets",
      "Trust income is always exempt from federal tax",
      "Trust income is taxed only when paid to a beneficiary, never at the trust level"
    ],
    "answerIndex": 1,
    "rationale": "A non-grantor irrevocable trust that retains income pays tax at compressed trust brackets, which reach the top marginal rate at a far lower income threshold than for individuals. Distributed income is generally taxed to the beneficiary instead via the distribution deduction and DNI rules. Choice A is the top distractor — grantor-trust treatment shifts tax to the grantor, but not all irrevocable trusts are grantor trusts.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "106818c0ba48",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "For 2026, the federal annual gift tax exclusion permits a donor to give up to a specified amount per donee per year without filing a gift tax return. Which statement about the annual exclusion is correct?",
    "choices": [
      "The annual exclusion is per donor per donee per calendar year",
      "The annual exclusion can only be used once in a donor's lifetime",
      "Spouses cannot combine their annual exclusions through gift-splitting",
      "The annual exclusion only applies to gifts of cash"
    ],
    "answerIndex": 0,
    "rationale": "The annual gift tax exclusion is calculated per donor per donee per calendar year, allowing a donor to give that amount to as many people as they want without consuming any lifetime exemption. Choice C is the top distractor — spouses can elect gift-splitting on Form 709 to treat gifts as made one-half by each, effectively doubling the per-donee amount.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "easy",
    "id": "9d4a4f4dba20",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Which statement best describes the unified credit in federal estate and gift tax?",
    "choices": [
      "A separate credit for estate tax and a separate credit for gift tax, used independently",
      "A single combined exemption applied against both lifetime gifts and the taxable estate at death",
      "A credit available only to surviving spouses",
      "A deduction equal to charitable bequests only"
    ],
    "answerIndex": 1,
    "rationale": "The federal estate and gift tax systems share a single 'unified' lifetime exemption — taxable lifetime gifts (above the annual exclusion) reduce the amount available at death. Choice A is the top distractor; pre-1976 the systems were separate, but they have been unified ever since.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "e55b7ea67278",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "What does 'portability' refer to in federal estate tax planning?",
    "choices": [
      "The ability to move retirement accounts between custodians",
      "The ability of a surviving spouse to use the deceased spouse's unused exemption (DSUE)",
      "Transferring tax basis between siblings",
      "Carrying capital losses forward to future tax years"
    ],
    "answerIndex": 1,
    "rationale": "Portability allows a surviving spouse to use the Deceased Spousal Unused Exemption (DSUE) amount of the predeceased spouse, but only if a timely Form 706 estate tax return is filed electing portability — even if no tax is otherwise due. Choice A is the top distractor — that describes IRA rollovers and account transfers, not estate-tax planning.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "aa8bdc6777ab",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Under federal estate tax rules, transfers between U.S.-citizen spouses during life or at death are generally:",
    "choices": [
      "Subject to gift or estate tax above the annual exclusion",
      "Eligible for the unlimited marital deduction",
      "Capped at the annual gift exclusion only",
      "Treated as taxable gifts requiring Form 709 each year"
    ],
    "answerIndex": 1,
    "rationale": "The unlimited marital deduction allows U.S.-citizen spouses to transfer any amount of property between themselves, during life or at death, free of federal gift or estate tax. Choice A is the top distractor — without the marital deduction, transfers above the annual exclusion would generally consume the unified exemption.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "easy",
    "id": "b6c43038a234",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "An investor's adjusted cost basis in a mutual fund position has increased over time. The most likely reason is:",
    "choices": [
      "Ordinary dividends paid in cash to the investor",
      "Reinvested capital gain distributions on which tax was already paid",
      "Realized capital losses inside the fund",
      "Decline in net asset value"
    ],
    "answerIndex": 1,
    "rationale": "Capital gain distributions and dividends that are reinvested have already been taxed and increase the investor's cost basis in additional shares — preventing the same dollars from being taxed twice on later sale. Choice A is the top distractor — cash dividends do not change basis because the proceeds leave the account.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "7dd48e72aaf5",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "An investor sells a stock at a loss on December 1 and repurchases the identical stock on December 15 of the same year. Which rule applies?",
    "choices": [
      "The investor receives a deductible short-term capital loss",
      "The wash sale rule disallows the loss; the disallowed amount is added to the basis of the replacement shares",
      "The loss is fully deductible because more than one week has elapsed",
      "The transaction triggers an automatic AMT adjustment"
    ],
    "answerIndex": 1,
    "rationale": "Under IRC Section 1091, repurchasing the same or substantially identical security within 30 days before or after a loss sale (a 61-day window total) triggers the wash sale rule: the loss is disallowed and added to the basis of the replacement shares, preserving it for the future. Choice A is the top distractor — the loss is not deductible currently because of the wash sale rule.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 1091"
    },
    "difficulty": "medium",
    "id": "a6ed40697723",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "A taxpayer has $20,000 in net long-term capital losses and no capital gains in the current year. How much may she generally deduct against ordinary income on her current-year Form 1040?",
    "choices": [
      "$0 — capital losses can only offset capital gains",
      "Up to $3,000, with the remainder carried forward indefinitely",
      "The full $20,000 in the current year",
      "Up to $10,000, with no carryforward"
    ],
    "answerIndex": 1,
    "rationale": "Net capital losses deduct against ordinary income up to $3,000 per year ($1,500 if married filing separately), with any remaining loss carried forward indefinitely until used. Choice A is the top distractor — losses can offset both gains and, to a limited extent, ordinary income.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "easy",
    "id": "2414a8d4e337",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "How is the sale of a security held for exactly one year and one day generally taxed?",
    "choices": [
      "Short-term capital gain at ordinary income rates",
      "Long-term capital gain at preferential rates",
      "Dividend income",
      "Tax-deferred under Section 1031"
    ],
    "answerIndex": 1,
    "rationale": "Long-term capital gain treatment requires holding the asset for MORE than one year; one year and one day satisfies the test. Choice A is the top distractor — short-term treatment applies only when the holding period is one year or less.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "easy",
    "id": "51c8f7f3d1b9",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "A C corporation pays a $1,000,000 dividend to its individual shareholders. From a tax-system perspective, this illustrates:",
    "choices": [
      "The single-tax passthrough principle",
      "Double taxation: tax at the corporate level and again at the shareholder level",
      "Tax-free distribution under Section 1014",
      "An automatic step-up in basis"
    ],
    "answerIndex": 1,
    "rationale": "C corporations are taxed at the entity level on profits, and shareholders are taxed again on distributions — the classic double-taxation issue. Choice A is the top distractor — passthrough treatment applies to S corps, partnerships, and LLCs, not C corps.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "easy",
    "id": "61c4f05c3866",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following accurately compares ordinary dividends and qualified dividends for an individual U.S. investor?",
    "choices": [
      "Ordinary dividends are taxed at long-term capital gains rates; qualified dividends are taxed at ordinary rates",
      "Qualified dividends are taxed at long-term capital gains rates; ordinary (nonqualified) dividends are taxed at ordinary income rates",
      "Both are taxed at ordinary rates with no distinction",
      "Both are exempt from federal income tax"
    ],
    "answerIndex": 1,
    "rationale": "Qualified dividends, when the holding-period and issuer requirements are met, are taxed at preferential long-term capital gains rates (0%, 15%, or 20%). Ordinary (nonqualified) dividends are taxed at the investor's ordinary income rate. Choice A reverses the treatment.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "easy",
    "id": "72efa010172c",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "An investor in the 32% federal marginal bracket holds a corporate bond yielding 5% and is considering a municipal bond. What approximate municipal tax-equivalent yield would make the investor indifferent (ignoring state tax)?",
    "choices": [
      "3.40%",
      "5.00%",
      "6.50%",
      "7.35%"
    ],
    "answerIndex": 0,
    "rationale": "The taxable-equivalent calculation for swapping a corporate for a muni: muni yield = corporate yield x (1 - marginal rate). 5% x (1 - 0.32) = 3.40%. The investor would need at least a 3.40% muni yield to match the 5% taxable bond on an after-tax basis. Choice D incorrectly divides by (1 - rate), reversing the formula.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "hard",
    "id": "6fb6488fcc07",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Which best describes a generation-skipping transfer (GST) tax?",
    "choices": [
      "A separate federal tax on transfers that 'skip' a generation, such as gifts directly to grandchildren above the GST exemption",
      "A state-level inheritance tax replacing the federal estate tax",
      "A penalty on early IRA withdrawals for grandchildren",
      "A surcharge on Roth conversions"
    ],
    "answerIndex": 0,
    "rationale": "The GST tax is a separate federal transfer tax imposed on gifts or bequests to 'skip persons' (typically grandchildren or unrelated persons more than 37 1/2 years younger), in addition to gift or estate tax, with its own exemption that is currently equal to the unified estate exemption. Choice B is the top distractor — state inheritance taxes are unrelated to the federal GST regime.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "39a5f0dbffd7",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "A traditional 401(k) participant takes a distribution at age 55 after separating from service in the year she turns 55. Which statement is most accurate?",
    "choices": [
      "The distribution is automatically subject to the 10% early-withdrawal penalty",
      "The distribution may qualify for the 'separation from service at age 55 or later' exception to the 10% penalty",
      "The distribution is tax-free as long as it is from a 401(k)",
      "The 10% penalty is waived only after age 70 1/2"
    ],
    "answerIndex": 1,
    "rationale": "The IRC provides an exception to the 10% early-withdrawal penalty for distributions from a qualified plan (such as a 401(k)) following separation from service in or after the year the employee reaches age 55 (age 50 for certain public safety employees). The distribution is still subject to ordinary income tax. Choice A is the top distractor — it ignores the age-55 separation-from-service exception.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 575"
    },
    "difficulty": "hard",
    "id": "799f1fd58972",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "A married couple uses gift-splitting on Form 709. What is the practical effect?",
    "choices": [
      "Each spouse is treated as making one-half of the gifts, doubling the effective annual exclusion per donee",
      "The donor spouse pays double tax on the gift",
      "Only the non-donor spouse uses lifetime exemption",
      "Gift-splitting eliminates the need for any return filing"
    ],
    "answerIndex": 0,
    "rationale": "Gift-splitting between U.S.-citizen spouses allows them to treat all gifts made by either as one-half from each, effectively doubling the per-donee annual exclusion and the use of unified exemption. Form 709 must be filed to elect gift-splitting. Choice D is the top distractor — gift-splitting requires a Form 709 filing to make the election; it does not eliminate filing.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "aeb58764e35d",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following is correct about Roth IRA distributions?",
    "choices": [
      "All distributions are taxable as ordinary income",
      "Qualified distributions are entirely federal-tax-free",
      "Distributions are always subject to a 10% penalty before age 73",
      "Roth IRAs are subject to RMDs at age 73 for the original owner"
    ],
    "answerIndex": 1,
    "rationale": "Qualified Roth IRA distributions — generally those made after age 59 1/2 once the five-year holding period is satisfied — are entirely free of federal income tax. Choice D is the top distractor — original-owner Roth IRAs are NOT subject to lifetime RMDs (a key planning advantage).",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 590-B"
    },
    "difficulty": "easy",
    "id": "cae496b3dfe9",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "A C corporation has $500,000 of taxable income. Approximately how much federal corporate income tax is owed at the entity level (post-TCJA)?",
    "choices": [
      "$75,000 at a graduated 15% bracket",
      "$105,000 at the 21% flat rate",
      "$185,000 at the 37% top individual rate",
      "$0 because corporations are passthroughs"
    ],
    "answerIndex": 1,
    "rationale": "The Tax Cuts and Jobs Act of 2017 replaced the prior graduated corporate-tax schedule with a flat 21% federal corporate rate, so $500,000 x 21% = $105,000. Choice A reflects the pre-TCJA graduated regime that no longer applies.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "6be92f13c1eb",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "To maintain its tax status, a Real Estate Investment Trust (REIT) must annually distribute what minimum percentage of its taxable income to shareholders?",
    "choices": [
      "50%",
      "75%",
      "90%",
      "100%"
    ],
    "answerIndex": 2,
    "rationale": "To qualify as a REIT and avoid entity-level corporate tax, a REIT must distribute at least 90% of its taxable income (excluding net capital gains) to shareholders annually. Choice D is a top distractor because some REITs distribute close to 100% to also avoid retained-income taxation, but the statutory threshold is 90%.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "9c3b89b067f8",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "An investor buys 100 shares at $50 in January and another 100 shares at $70 in March of the same security. In November, she sells 100 shares at $80 without specifying which lot. Under default IRS rules for stocks, which method generally applies?",
    "choices": [
      "Last-In, First-Out (LIFO)",
      "First-In, First-Out (FIFO)",
      "Average cost",
      "Highest-In, First-Out (HIFO)"
    ],
    "answerIndex": 1,
    "rationale": "For individual stocks (non-mutual fund), the default cost-basis method when the investor does not specify is FIFO — the earliest shares are deemed sold first. Choice C (average cost) is available by default for mutual funds and certain DRIPs but is not the default for individual stocks.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "hard",
    "id": "2f92c27fc077",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "An advisor's client wants to make a charitable gift of appreciated stock held for over a year. Which statement most accurately summarizes the tax benefit relative to selling the stock and donating cash?",
    "choices": [
      "No tax benefit — both produce the same after-tax outcome",
      "Donating the appreciated stock directly avoids realizing the capital gain and generally allows a fair-market-value charitable deduction (subject to AGI limits)",
      "The donor must recognize the gain on transfer to charity",
      "Charitable gifts of stock are limited to the donor's basis"
    ],
    "answerIndex": 1,
    "rationale": "Donating long-term-appreciated public stock directly to a qualified charity avoids capital-gain recognition AND generally allows a fair-market-value deduction up to applicable AGI limits, making it more tax-efficient than selling and donating the after-tax cash. Choice A is the top distractor — the two approaches are not equivalent because outright sale triggers gain.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "b793f5814dc6",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following is a key feature of the federal alternative minimum tax (AMT)?",
    "choices": [
      "It replaces ordinary income tax for low-income filers",
      "It is a parallel tax computation; the taxpayer pays the higher of regular tax or AMT",
      "It applies only to corporations after 2017",
      "It eliminates capital gains taxation"
    ],
    "answerIndex": 1,
    "rationale": "AMT is a parallel tax system that adds back certain preferences and deductions; the taxpayer compares the tentative AMT to regular tax and pays the higher amount. Choice C is the top distractor — TCJA repealed corporate AMT for tax years after 2017, but the Inflation Reduction Act introduced a new corporate AMT for very large corporations (separate from individual AMT).",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "421bb599d7f5",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "A taxpayer in a 24% marginal federal bracket also pays Social Security and Medicare on wages. Which statement about marginal vs. effective tax rates is correct?",
    "choices": [
      "The marginal rate is always lower than the effective rate",
      "The effective rate is the average rate paid across all taxable income and is generally lower than the top marginal rate in a progressive system",
      "Marginal and effective rates are identical in all cases",
      "The effective rate excludes federal income tax entirely"
    ],
    "answerIndex": 1,
    "rationale": "In a progressive system, lower brackets apply to lower income tranches, so the effective (average) rate is generally lower than the top marginal rate. Choice A reverses the relationship.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 17"
    },
    "difficulty": "medium",
    "id": "5650bd126dc2",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "For tax purposes, an MLP unitholder generally receives which form to report income, gains, and deductions?",
    "choices": [
      "Form 1099-DIV",
      "Form 1099-B only",
      "Schedule K-1",
      "Form W-2"
    ],
    "answerIndex": 2,
    "rationale": "As a passthrough partnership, an MLP issues a Schedule K-1 to each unitholder reporting their share of income, gains, deductions, and credits. Choice A is the top distractor — 1099-DIV is used for corporate dividends (including REITs), not partnership interests.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "3acc25bf0651",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Which statement about Qualified Charitable Distributions (QCDs) from a traditional IRA is correct?",
    "choices": [
      "QCDs are limited to taxpayers under age 59 1/2",
      "A QCD allows an IRA owner age 70 1/2 or older to transfer up to the annual statutory limit directly to a qualified charity, and the distribution is excluded from taxable income (and may satisfy the RMD)",
      "QCDs are taxable but produce a charitable deduction",
      "QCDs are limited to Roth IRAs"
    ],
    "answerIndex": 1,
    "rationale": "QCDs are available to IRA owners age 70 1/2 or older, allowing direct transfers to qualified charities up to an annually-indexed cap; the amount is excluded from gross income, can satisfy an RMD, and avoids AGI inflation that affects IRMAA, Social Security taxation, and itemized-deduction phaseouts. Choice C is the top distractor — QCDs are excluded from income, not deducted as itemized contributions.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 590-B"
    },
    "difficulty": "hard",
    "id": "37eb0efa70ae",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "A grantor establishes a revocable living trust and funds it with marketable securities. While the grantor is alive and the trust is revocable, how is the trust's investment income taxed?",
    "choices": [
      "Taxed to the trust at compressed trust brackets",
      "Taxed to the beneficiaries upon distribution only",
      "Reported on the grantor's individual Form 1040 as if owned directly",
      "Tax-exempt because trusts are pass-through entities"
    ],
    "answerIndex": 2,
    "rationale": "A revocable living trust is a grantor trust for tax purposes — its income, deductions, and credits flow through to the grantor's individual Form 1040 as if the trust did not exist. Choice A is the top distractor — compressed trust brackets apply to non-grantor trusts that retain income.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "107a0bb839c6",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes the Net Investment Income Tax (NIIT)?",
    "choices": [
      "A 3.8% tax on net investment income for taxpayers above specified MAGI thresholds",
      "A 10% surcharge on all dividend income",
      "A flat tax on Social Security benefits",
      "A municipal bond surcharge"
    ],
    "answerIndex": 0,
    "rationale": "The NIIT is an additional 3.8% federal tax on the lesser of net investment income or MAGI exceeding statutory thresholds (e.g., $200,000 single / $250,000 MFJ — these thresholds are not indexed). Choice B is the top distractor — there is no flat 10% surcharge on dividends; rather, qualified dividends may face the NIIT on top of preferential capital gains rates.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "7536a56f5409",
    "subtopicId": "3.5",
    "reviewed": false
  },
  {
    "stem": "An adviser is reviewing a client's brokerage statement showing 'return of capital' distributions on a non-REIT stock position. How should these distributions generally be treated?",
    "choices": [
      "As ordinary income in the year received",
      "As tax-free, but they reduce the investor's cost basis (potentially creating gain on later sale)",
      "As short-term capital gain",
      "As nondeductible contributions"
    ],
    "answerIndex": 1,
    "rationale": "Return of capital distributions are generally not currently taxable; instead, they reduce the investor's cost basis in the security. Once basis is reduced to zero, any further return-of-capital distributions become capital gains. Choice A is the top distractor — return of capital is specifically NOT ordinary income.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "962769039fe4",
    "subtopicId": "3.5",
    "reviewed": false
  }
];

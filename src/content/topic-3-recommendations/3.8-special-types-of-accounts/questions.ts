import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Under Section 529 of the Internal Revenue Code, who is the legal owner of a 529 college savings plan account?",
    "choices": [
      "The designated beneficiary",
      "The account owner (typically the donor/parent)",
      "The state sponsoring the plan",
      "The custodian bank holding the assets"
    ],
    "answerIndex": 1,
    "rationale": "The account owner (typically the parent or donor) retains legal ownership and control of a 529 plan, including the right to change the beneficiary, take distributions, or terminate the account. The beneficiary has no ownership rights, which is why 529 assets are reported as the owner's asset on the FAFSA, not the student's. This contrasts with UTMA/UGMA accounts, where the minor is the owner.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 529"
    },
    "difficulty": "easy",
    "id": "b3d5eb018576",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes a 'prepaid tuition' 529 plan as distinguished from a 529 'education savings' plan?",
    "choices": [
      "It allows the donor to lock in current tuition rates at participating institutions",
      "It allows tax-free withdrawals only for K-12 tuition",
      "It is funded with pre-tax dollars deductible on the federal return",
      "It is the only 529 type that permits beneficiary changes"
    ],
    "answerIndex": 0,
    "rationale": "Prepaid tuition plans let the owner purchase tuition credits at today's rates for future use at participating (often in-state) colleges, hedging against tuition inflation. Education savings plans, by contrast, are investment accounts whose performance determines the account value. Federal contributions are after-tax in either case, eliminating the third choice.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 529"
    },
    "difficulty": "easy",
    "id": "aa502ab92bdd",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Earnings inside a 529 plan are best described as:",
    "choices": [
      "Taxable annually as ordinary income to the owner",
      "Tax-deferred while in the plan and tax-free if used for qualified education expenses",
      "Tax-free in all circumstances",
      "Taxable annually to the beneficiary at the kiddie-tax rate"
    ],
    "answerIndex": 1,
    "rationale": "529 earnings grow tax-deferred at the federal level, and qualified distributions for tuition, fees, books, room and board (if enrolled at least half-time), and certain other expenses are entirely federally tax-free. The 'taxable annually to the beneficiary at the kiddie-tax rate' choice describes the treatment of unearned income in an UTMA/UGMA, not a 529.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 529"
    },
    "difficulty": "easy",
    "id": "d56c445eeaa5",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "A grandparent contributes $90,000 to a 529 plan for a grandchild in a single year and elects to treat the gift under the special 5-year averaging rule. What is the federal gift-tax consequence?",
    "choices": [
      "The full $90,000 is immediately a taxable gift",
      "The contribution is treated as if made ratably over five years for purposes of the annual gift exclusion",
      "Only earnings on the contribution are subject to gift tax",
      "529 contributions are exempt from gift-tax rules entirely"
    ],
    "answerIndex": 1,
    "rationale": "Section 529(c)(2)(B) permits a donor to elect to treat a lump-sum contribution of up to five times the annual gift-tax exclusion as if it were made in equal installments over five years, sheltering the gift from immediate gift-tax exposure. The full amount is not immediately taxable when the election is made, ruling out the first choice. 529 contributions are not exempt from gift-tax rules; they are simply afforded this special averaging election.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 529"
    },
    "difficulty": "medium",
    "id": "3ebbda34fb0f",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "If a 529 plan owner takes a non-qualified distribution, the federal tax treatment generally is:",
    "choices": [
      "Earnings portion is subject to ordinary income tax plus a 10% additional tax",
      "The entire distribution is subject to a 20% additional tax",
      "Principal is taxed; earnings are tax-free",
      "Both principal and earnings are subject to a 10% additional tax"
    ],
    "answerIndex": 0,
    "rationale": "Non-qualified 529 withdrawals trigger ordinary income tax plus a 10% additional federal tax on the earnings portion only, since contributions were already made with after-tax dollars. The 20% penalty applies to non-qualified HSA distributions before age 65, not 529 plans, so the second choice is a common confusion-distractor between the two account types.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 529"
    },
    "difficulty": "medium",
    "id": "f95481c9f259",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Under current federal law, 529 plan distributions for K-12 tuition expenses are:",
    "choices": [
      "Always treated as non-qualified",
      "Treated as qualified up to $10,000 per beneficiary per year",
      "Treated as qualified without dollar limit",
      "Permitted only if the beneficiary attends a public school"
    ],
    "answerIndex": 1,
    "rationale": "The Tax Cuts and Jobs Act of 2017 expanded 529 qualified expenses to include up to $10,000 per beneficiary per year for tuition at an elementary or secondary public, private, or religious school. Distributions above that ceiling are non-qualified. The choice 'always treated as non-qualified' reflects pre-2018 law and is incorrect today.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 529"
    },
    "difficulty": "medium",
    "id": "35e90335a966",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Under the SECURE Act, qualified 529 expenses now include repayment of student loan principal or interest, subject to what cap?",
    "choices": [
      "$5,000 per beneficiary per year",
      "$10,000 lifetime per beneficiary (plus $10,000 lifetime per sibling)",
      "$25,000 lifetime per beneficiary",
      "There is no cap as long as the loan is for the named beneficiary"
    ],
    "answerIndex": 1,
    "rationale": "The SECURE Act (2019) added student loan repayments as a qualified 529 expense, capped at a $10,000 lifetime limit per beneficiary, with an additional $10,000 lifetime limit available for each of the beneficiary's siblings. Choosing 'no cap' overlooks this lifetime ceiling that Congress imposed to limit revenue loss.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "9b82c4b21bf3",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Under SECURE Act 2.0, a 529 plan that has been open for at least 15 years may be rolled over to:",
    "choices": [
      "A traditional IRA for the account owner with no dollar limit",
      "A Roth IRA for the beneficiary, subject to a $35,000 lifetime cap and annual IRA contribution limits",
      "A Coverdell ESA for the beneficiary without limit",
      "Any qualified retirement plan, treated as a non-qualified distribution"
    ],
    "answerIndex": 1,
    "rationale": "Beginning in 2024, SECURE 2.0 permits tax-free rollovers from a long-held 529 plan to a Roth IRA in the beneficiary's name, capped at a $35,000 lifetime amount and limited each year by the IRA annual contribution limit. The traditional-IRA choice is wrong because the rollover destination must be a Roth IRA, and it must be in the beneficiary's name, not the owner's.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "cf67bb9d797c",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following changes to the beneficiary of a 529 plan would generally NOT be a tax-free transfer?",
    "choices": [
      "From a child to that child's sibling",
      "From a niece to a nephew",
      "From a child to the child's first cousin",
      "From a child to a friend who is not a family member"
    ],
    "answerIndex": 3,
    "rationale": "Section 529 allows tax-free beneficiary changes only to a 'member of the family' as defined by the Code, which includes siblings, cousins, nieces, nephews, and other specified relatives, but not unrelated friends. A change to a non-family member is treated as a non-qualified distribution and may also have gift-tax implications.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 529"
    },
    "difficulty": "medium",
    "id": "a40236460ea3",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "For federal financial-aid (FAFSA) purposes, a 529 plan owned by a dependent student's parent is generally:",
    "choices": [
      "Counted as a student asset assessed at roughly 20%",
      "Counted as a parental asset assessed at roughly 5.64%",
      "Excluded from FAFSA entirely",
      "Counted as untaxed income to the student"
    ],
    "answerIndex": 1,
    "rationale": "A 529 plan owned by a custodial parent of a dependent student is reported as a parental asset on the FAFSA and assessed at a maximum of about 5.64%, far less impactful than student-owned assets such as UTMA/UGMA accounts, which are assessed at roughly 20%. Treating it as a student asset would understate the planning advantage of parent ownership.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "f70f606aeaee",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "For federal income-tax purposes, contributions to a 529 plan are:",
    "choices": [
      "Deductible on the federal return up to a statutory annual limit",
      "Not deductible federally, although many states offer a state-tax deduction or credit",
      "Deductible only if the contributor is the parent of the beneficiary",
      "Pre-tax contributions made through payroll deduction"
    ],
    "answerIndex": 1,
    "rationale": "529 contributions are made with after-tax dollars and are not deductible on the federal return, but most states that have an income tax offer a state-level deduction or credit for residents who use their state's plan. The federal-deduction choice is a frequent misconception that confuses 529s with traditional IRAs or 401(k)s.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 529"
    },
    "difficulty": "easy",
    "id": "5cdb47083d0d",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following is generally TRUE about contributions to a Coverdell Education Savings Account (ESA)?",
    "choices": [
      "There is no annual contribution limit",
      "The aggregate limit is $2,000 per beneficiary per year across all contributors",
      "Contributions are deductible on the federal return",
      "Contributions can be made indefinitely with no age limit on the beneficiary"
    ],
    "answerIndex": 1,
    "rationale": "Coverdell ESAs are subject to a $2,000 aggregate annual limit per beneficiary, regardless of how many contributors are involved. Contributions are made with after-tax dollars (not deductible federally), and contributions may generally not be made after the beneficiary reaches age 18 (other than a special-needs beneficiary). The 'no limit' choices reflect the very different rules that apply to 529 plans.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "easy",
    "id": "4c4e3c3b4334",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Coverdell ESA contributions are subject to phase-out based on:",
    "choices": [
      "The beneficiary's earned income",
      "The contributor's modified adjusted gross income",
      "The beneficiary's age only",
      "The state of residence of the contributor"
    ],
    "answerIndex": 1,
    "rationale": "The ability to contribute to a Coverdell ESA phases out as the contributor's modified adjusted gross income (MAGI) exceeds statutory thresholds (currently $95,000-$110,000 for single filers and $190,000-$220,000 for joint filers). Higher-income contributors can sometimes work around this limit by gifting to the beneficiary, who can then contribute. The beneficiary's earned income is irrelevant to a Coverdell.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "8da14fd5ade5",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Generally, all amounts remaining in a Coverdell ESA must be distributed by the time the beneficiary reaches what age (absent special-needs status)?",
    "choices": [
      "18",
      "21",
      "30",
      "59 1/2"
    ],
    "answerIndex": 2,
    "rationale": "Funds remaining in a Coverdell ESA must generally be distributed within 30 days of the beneficiary turning 30 (a special-needs beneficiary is excepted). At that point, undistributed earnings become taxable and subject to the 10% additional tax, although amounts can alternatively be rolled over to a Coverdell for an eligible family member under age 30. Age 18 is the contribution-cutoff age, not the distribution-deadline age - a common pair to confuse.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "a4400d568479",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following expenses can be paid tax-free from a Coverdell ESA but generally NOT from a traditional 529 prepaid tuition plan?",
    "choices": [
      "Qualified higher-education tuition",
      "Qualified K-12 education expenses such as books, uniforms, tutoring, and supplies",
      "Qualified room and board for a half-time college student",
      "Mandatory student fees at a state university"
    ],
    "answerIndex": 1,
    "rationale": "Coverdell ESAs allow tax-free distributions for a broad range of qualified K-12 expenses including tuition, books, supplies, equipment, tutoring, uniforms, and transportation. 529 plans allow K-12 distributions only for tuition (subject to a $10,000 annual cap), and prepaid tuition plans by design pay only tuition and fees, not the broader K-12 categories. Higher-education tuition and college room and board are qualified for both account types and are not distinguishing features.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "b05dc47716b1",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Compared with a 529 plan, a Coverdell ESA generally offers which of the following advantages to an account owner?",
    "choices": [
      "Higher annual contribution limits",
      "Wider investment selection because the account can be self-directed",
      "Federal income-tax deduction for contributions",
      "No income limit on contributors"
    ],
    "answerIndex": 1,
    "rationale": "A Coverdell ESA can typically be self-directed at a brokerage firm, giving the account owner a broad universe of stocks, bonds, ETFs, and mutual funds. 529 plans are limited to the investment menu the state plan offers and are generally restricted to no more than two investment changes per year per beneficiary. Coverdells have lower contribution limits ($2,000), no federal deduction, and income-based phaseouts, ruling out the other answers.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "6b13dcd9bfc7",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following is the most accurate statement about the relationship between UGMA and UTMA accounts?",
    "choices": [
      "UGMA replaced UTMA and is the more modern statute",
      "UTMA is a broader update of UGMA that allows a wider range of property to be gifted to a minor",
      "UGMA accounts are governed by federal law and UTMA by state law",
      "UTMA accounts are revocable, while UGMA accounts are irrevocable"
    ],
    "answerIndex": 1,
    "rationale": "The Uniform Transfers to Minors Act (UTMA) is a successor to the older Uniform Gifts to Minors Act (UGMA). UGMA generally permits gifts of cash, securities, and insurance products only, whereas UTMA allows almost any kind of property, including real estate and intellectual property. Both are state-law statutes, both create irrevocable gifts, and UTMA is the broader, more modern of the two.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "easy",
    "id": "168171996df8",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Once a gift has been made into an UTMA account for a minor, the donor:",
    "choices": [
      "May revoke the gift at any time before the minor reaches majority",
      "Has made an irrevocable gift; the assets belong to the minor",
      "Retains ownership but transfers control to the custodian",
      "May reclaim the assets only if the minor predeceases the donor"
    ],
    "answerIndex": 1,
    "rationale": "A transfer to an UTMA (or UGMA) account is an irrevocable gift; legal ownership passes immediately to the minor, and the custodian merely manages the property until the minor reaches the age of majority specified by state law. Choices that suggest the donor can revoke or reclaim the gift mischaracterize the fundamental nature of these accounts.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "easy",
    "id": "2d3602dce166",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "How many minors and how many custodians may an UTMA account have?",
    "choices": [
      "One minor and one custodian",
      "Multiple minors and one custodian",
      "One minor and multiple custodians",
      "Any combination, at the discretion of the donor"
    ],
    "answerIndex": 0,
    "rationale": "Under UTMA (and UGMA), each account is established for exactly one minor with exactly one custodian. If a donor wishes to benefit multiple minors, separate accounts must be opened for each, and a single custodian may serve as custodian on multiple accounts but each is its own legal arrangement. The 'multiple minors' choice is wrong because the rule is one minor per account.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "f622c37507c4",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Income (interest, dividends, capital gains) generated in an UTMA account is generally taxable to:",
    "choices": [
      "The custodian",
      "The donor",
      "The minor (subject to the 'kiddie tax' rules)",
      "The state in which the account is opened"
    ],
    "answerIndex": 2,
    "rationale": "Because the assets in an UTMA belong to the minor, investment income is reported on the minor's return. However, the so-called 'kiddie tax' rules subject a minor's unearned income above an annual threshold to taxation at the parents' marginal tax rate, eliminating much of the income-shifting benefit historically associated with these accounts. Choosing 'the donor' confuses the gift-giver's role with continued ownership; the donor is not taxed on UTMA income simply for having funded the account.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "570f49ca1446",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "An UTMA custodian who is also the donor of the gifted property creates which planning issue?",
    "choices": [
      "The gift is voided as a matter of state law",
      "The custodial property may be included in the donor's gross estate for federal estate-tax purposes if the donor dies while serving as custodian",
      "The minor automatically receives full control at age 16",
      "The account loses 'kiddie tax' protections"
    ],
    "answerIndex": 1,
    "rationale": "If the donor of the property serves as custodian and dies while the minor is still a minor, the IRS treats the donor as having retained sufficient powers over the assets that the property is includible in the donor's gross estate. Best practice is therefore to have someone other than the donor serve as custodian. The gift itself is not voided, and there is no automatic age-16 distribution rule.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "ac5e65d8ab9e",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following describes a key disadvantage of using an UTMA account (versus a 529 plan) for college funding?",
    "choices": [
      "UTMA contributions are capped at $2,000 per year",
      "When the beneficiary reaches the age of majority, the assets become the beneficiary's to use for any purpose",
      "UTMA earnings are always tax-deferred",
      "UTMA assets are exempt from FAFSA reporting"
    ],
    "answerIndex": 1,
    "rationale": "Because the gift is irrevocable and ownership passes to the minor, once the beneficiary reaches the age of majority defined by state law (often 18 or 21) the funds belong outright to the beneficiary, who is free to use them for any purpose - not necessarily college. The contribution-cap and tax-deferral choices misstate UTMA features (no contribution limit, no tax deferral), and UTMA assets are reported on the FAFSA as student assets at the punitive ~20% rate.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "58b59a1c5790",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following types of property may generally be transferred into an UTMA account but NOT into an UGMA account?",
    "choices": [
      "Mutual fund shares",
      "Cash and bank deposits",
      "Corporate bonds",
      "Real estate"
    ],
    "answerIndex": 3,
    "rationale": "UGMA was historically limited to financial assets such as cash, securities, and insurance contracts. UTMA expanded the scope to include almost any kind of property, including real estate, tangible personal property, and intellectual property. Cash, mutual fund shares, and corporate bonds are permissible in either UGMA or UTMA accounts, so they do not distinguish the two.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "5dbe374ab16d",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following is a requirement for an individual to be eligible to contribute to a Health Savings Account (HSA)?",
    "choices": [
      "The individual must be self-employed",
      "The individual must be enrolled in a qualifying high-deductible health plan (HDHP) and not be enrolled in Medicare",
      "The individual must have earned income from a W-2 job",
      "The individual must be age 50 or older"
    ],
    "answerIndex": 1,
    "rationale": "HSA eligibility requires coverage under an HSA-qualified HDHP and prohibits enrollment in Medicare or having other disqualifying health coverage. Self-employment status, W-2 earned income, and minimum age 50 are not requirements; in fact, HSA eligibility ends once a person enrolls in Medicare (typically at 65), making HSA planning especially time-sensitive near retirement.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "easy",
    "id": "cee649d9f14e",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following is the most accurate description of the federal tax treatment of an HSA?",
    "choices": [
      "Contributions are deductible, growth is tax-deferred, and qualified withdrawals are taxable",
      "Contributions are after-tax, growth is tax-deferred, and qualified withdrawals are tax-free",
      "Contributions are deductible, growth is tax-free, and qualified withdrawals are tax-free",
      "Contributions and growth are after-tax, but qualified withdrawals are tax-free"
    ],
    "answerIndex": 2,
    "rationale": "The HSA is often described as offering a 'triple tax advantage': contributions are tax-deductible (or made pre-tax through payroll), earnings grow tax-free, and qualified medical-expense withdrawals are tax-free. No other federally favored account combines all three of these benefits. The traditional-IRA-style treatment in the first choice gets the contribution deduction right but mistakenly taxes withdrawals.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "easy",
    "id": "32b007231181",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Funds in a Health Savings Account that are not used by the end of the year are:",
    "choices": [
      "Forfeited to the employer",
      "Forfeited to the federal government",
      "Carried over indefinitely with no 'use it or lose it' rule",
      "Distributed to the account holder as taxable income"
    ],
    "answerIndex": 2,
    "rationale": "Unlike a Flexible Spending Arrangement (FSA), an HSA has no 'use it or lose it' rule; unused balances roll over from year to year and continue to grow tax-deferred. Many HSA holders treat the account as a long-term, investment-oriented retirement healthcare vehicle. The 'forfeited to the employer' answer describes traditional FSA forfeiture, not HSA treatment.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "easy",
    "id": "33d820d8d067",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "An HSA holder under age 65 takes a distribution that is NOT used for qualified medical expenses. The non-qualified distribution is generally subject to:",
    "choices": [
      "No tax or penalty if held more than 5 years",
      "Ordinary income tax plus a 20% additional tax",
      "Ordinary income tax plus a 10% additional tax",
      "Capital gains tax only"
    ],
    "answerIndex": 1,
    "rationale": "Non-qualified HSA withdrawals before age 65 are taxed as ordinary income and assessed an additional 20% federal tax. The 10% additional-tax answer reflects the penalty for non-qualified 529 withdrawals or early IRA distributions and is a common confusion. Once the account holder reaches age 65, the 20% additional tax no longer applies to non-medical withdrawals, which are simply taxed as ordinary income.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "1a8cdc97d460",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "After an HSA owner reaches age 65, a withdrawal NOT used for qualified medical expenses is treated for federal tax purposes:",
    "choices": [
      "As tax-free in all cases",
      "As ordinary income, similar to a traditional IRA distribution, with no additional 20% tax",
      "As ordinary income plus a 20% additional tax",
      "As long-term capital gain"
    ],
    "answerIndex": 1,
    "rationale": "Once the account holder reaches age 65, the 20% additional tax on non-qualified HSA withdrawals no longer applies, and the distribution is simply taxable as ordinary income, much like a traditional-IRA distribution. Qualified medical-expense withdrawals continue to be tax-free at any age. The 'tax-free in all cases' answer overstates the benefit.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "a1a0287073f0",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "An HSA owner age 55 or older may make an additional 'catch-up' contribution each year of:",
    "choices": [
      "$500",
      "$1,000",
      "$3,500",
      "$7,500"
    ],
    "answerIndex": 1,
    "rationale": "An HSA holder who is age 55 or older may contribute an additional $1,000 catch-up contribution per year above the regular HSA contribution limits. The $7,500 figure resembles 401(k)/IRA catch-up amounts and is a common confusion-distractor; the $1,000 HSA catch-up is fixed by statute and is not indexed for inflation.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "e34d5e0980bb",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following is most accurately characterized as 'portable'?",
    "choices": [
      "A 529 plan, because contributions are pre-tax federally",
      "An HSA, because the account belongs to the individual and stays with the individual when changing jobs or insurers",
      "A Coverdell ESA, because contribution limits are not indexed for inflation",
      "An UTMA account, because the custodian can be changed"
    ],
    "answerIndex": 1,
    "rationale": "An HSA is owned by the individual (not the employer), so the account, its balance, and any investments stay with the holder regardless of changes in employment or insurance carrier. The 529 portability rationale is wrong because federal contributions are after-tax. UTMA accounts are not 'portable' in this sense - they are tied to the named minor.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "746003ecb2d6",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "An investment adviser representative is comparing accounts for a high-income family that wants to fund a 7-year-old child's future college education with maximum funding flexibility. Which account type permits the LARGEST aggregate contributions on behalf of one beneficiary?",
    "choices": [
      "A 529 college savings plan",
      "A Coverdell ESA",
      "A Roth IRA in the child's name",
      "A Health Savings Account for the parent"
    ],
    "answerIndex": 0,
    "rationale": "529 plans permit the largest aggregate contributions for a single beneficiary; states set high lifetime contribution maximums often in the $300,000-$500,000 range, and there are no income limits on contributors. Coverdell ESAs are capped at $2,000 per year and have income phaseouts; Roth IRAs require the child to have earned income; HSAs are capped at the annual HDHP family limit and have no education-specific use.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 529"
    },
    "difficulty": "medium",
    "id": "a2bafe561bf4",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "An investor with a $50,000 inheritance asks an IAR to recommend an account for K-12 private-school tuition for a young child. Which feature of a Coverdell ESA most likely makes it less useful than a 529 for this purpose?",
    "choices": [
      "Coverdell distributions cannot be used for K-12 expenses",
      "The $2,000 annual contribution limit prevents the investor from quickly deploying the inheritance into the account",
      "Coverdell earnings are taxable when withdrawn",
      "Coverdells cannot be self-directed"
    ],
    "answerIndex": 1,
    "rationale": "The $2,000 annual contribution limit of a Coverdell ESA makes it impractical for parking a sizable lump sum, even though the account does qualify for K-12 use and offers self-directed investment choice. A 529 plan's much higher contribution ceilings (and its 5-year gift-tax averaging election) better suit a $50,000 inheritance scenario. Coverdell distributions are clearly permitted for K-12 use, ruling out the first choice.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "29c8a3b7809d",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following statements about 529 plans is FALSE?",
    "choices": [
      "The owner may change the beneficiary to an eligible family member without tax consequence",
      "Investment changes are limited to no more than two per year per beneficiary",
      "Contributions are deductible on the federal return",
      "Earnings are tax-free if used for qualified education expenses"
    ],
    "answerIndex": 2,
    "rationale": "529 contributions are not deductible federally; that is the FALSE statement. Beneficiary changes to family members, the two-investment-change-per-year rule, and tax-free qualified earnings are all accurate features of 529 plans. Many states do offer state-level deductions or credits, which can be confused with a federal deduction.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 529"
    },
    "difficulty": "medium",
    "id": "f7814abe6da9",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "An IAR is reviewing options to fund a trade-school program for a client's child. Under SECURE Act expansions, which of the following expenses can now be paid from a 529 plan tax-free?",
    "choices": [
      "Apprenticeship program fees, books, supplies, and required equipment for an apprenticeship registered and certified with the Department of Labor",
      "Any vocational training program selected by the family",
      "Personal living expenses unrelated to the program",
      "Transportation costs to and from the program"
    ],
    "answerIndex": 0,
    "rationale": "Under the SECURE Act, costs of registered apprenticeship programs (those registered and certified with the Secretary of Labor) - including fees, books, supplies, and required equipment - are qualified 529 expenses. Unregistered vocational programs, personal living expenses, and routine transportation are NOT qualified 529 expenses. The choice 'any vocational training program' is too broad and a common over-extrapolation.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "f3293d4b7815",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following accounts would generally have the LEAST favorable impact on a dependent student's federal financial-aid eligibility?",
    "choices": [
      "A parent-owned 529 plan",
      "An UTMA/UGMA account in the student's name",
      "A Coverdell ESA owned by the parent",
      "A grandparent-owned 529 plan from which no distributions have yet been made"
    ],
    "answerIndex": 1,
    "rationale": "UTMA/UGMA assets belong to the student and are reported as student assets on the FAFSA, where they are assessed at approximately 20% - significantly more punitive than the ~5.64% parental-asset assessment that applies to a parent-owned 529 or Coverdell. Grandparent-owned 529 plans are not currently reported on the FAFSA at all under recent simplification rules, making them potentially the least burdensome.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "hard",
    "id": "9cebfbd2055b",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "An UTMA account terminates and the assets must be turned over to the beneficiary when:",
    "choices": [
      "The beneficiary turns 18 in every state",
      "The beneficiary reaches the age of majority specified by the state's UTMA statute (often 18 or 21)",
      "The custodian decides the beneficiary is mature enough to receive the assets",
      "The beneficiary completes college"
    ],
    "answerIndex": 1,
    "rationale": "The age at which UTMA assets must be delivered to the beneficiary is set by state statute and varies (commonly 18, 21, or in some states even 25 for certain transfers). The 'in every state' choice is incorrect because state law - not a uniform federal age - controls; the custodian has no discretion to delay the transfer past the statutory age.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "112ce0ce667b",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "An IAR opens an UTMA account funded by a client for the client's grandchild. Which of the following is the MOST appropriate action by the IAR with respect to investment recommendations?",
    "choices": [
      "Recommend speculative high-risk securities because the time horizon is long",
      "Make recommendations consistent with the minor's circumstances and a prudent custodian standard",
      "Refuse to make recommendations until the minor reaches majority",
      "Recommend only insurance products to provide guaranteed growth"
    ],
    "answerIndex": 1,
    "rationale": "An IAR servicing an UTMA must make recommendations suited to the minor's circumstances and the custodian's prudent-investor obligations, taking into account time horizon, the minor's circumstances, and the irrevocable nature of the gift. Recommending speculative securities or, conversely, refusing to make any recommendations both fail the suitability and fiduciary obligations that apply.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "83a93e2b3d16",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following best explains why an HSA is sometimes called a 'stealth IRA'?",
    "choices": [
      "It is governed by the same Code section as IRAs",
      "After age 65, non-medical withdrawals are taxed as ordinary income with no penalty, mirroring traditional-IRA treatment, while medical withdrawals remain tax-free",
      "It is reported on Form 5498 along with IRA contributions",
      "Its investment options are limited to the same menu as a traditional IRA"
    ],
    "answerIndex": 1,
    "rationale": "After age 65, the HSA effectively behaves like a traditional IRA for non-medical use (ordinary-income tax with no additional penalty) and like a Roth IRA for qualified medical use (entirely tax-free). This duality - which lets the HSA serve as a supplemental retirement vehicle - earns it the 'stealth IRA' nickname. The other choices misstate the technical reasons for the analogy.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "hard",
    "id": "6ddbaaf2ec3a",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following accounts must be funded with cash only (not securities transferred in-kind)?",
    "choices": [
      "UTMA account",
      "529 plan",
      "Coverdell ESA",
      "All HSA contributions"
    ],
    "answerIndex": 1,
    "rationale": "529 plan contributions must be made in cash (or by check or electronic transfer); securities cannot be transferred in-kind into a 529. UTMA accounts can be funded with virtually any type of property; Coverdell ESAs accept cash contributions but the broad cash-only restriction is most identified with 529s in the Series 65 curriculum. HSA contributions are also generally cash, but the most exam-typical answer for the cash-only rule is the 529 plan.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 529"
    },
    "difficulty": "hard",
    "id": "03e99b8b0b94",
    "subtopicId": "3.8",
    "reviewed": false
  },
  {
    "stem": "An owner of a 529 plan wishes to roll the account over to an ABLE account for the benefit of the same beneficiary, who has a qualifying disability. Which of the following best describes federal treatment of such a rollover?",
    "choices": [
      "It is prohibited; 529 funds may never be moved to an ABLE account",
      "It is permitted, subject to the annual ABLE contribution limit, and treated as a qualified rollover",
      "It is treated as a non-qualified distribution subject to the 10% additional tax",
      "It is permitted only for adult beneficiaries age 26 or older"
    ],
    "answerIndex": 1,
    "rationale": "Federal law permits a 529-to-ABLE rollover for the same beneficiary or a member of the family, treated as a qualified transfer when within annual ABLE contribution limits. This option helps families adapt their education-savings plan when a child develops a qualifying disability. The first answer (prohibition) and the third answer (10% penalty) misstate the law.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "32a99b736f6e",
    "subtopicId": "3.8",
    "reviewed": false
  }
];

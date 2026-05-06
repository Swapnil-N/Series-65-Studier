import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "To make a contribution to a traditional IRA, an individual must have which of the following?",
    "choices": [
      "Earned income from wages or self-employment",
      "Investment income from a brokerage account",
      "Long-term capital gains from a real estate sale",
      "A federal income tax refund of any size"
    ],
    "answerIndex": 0,
    "rationale": "IRC Section 408 conditions IRA contributions on earned (compensation) income such as wages, salary, or net self-employment earnings; investment income, capital gains, and tax refunds do not qualify. The most attractive distractor is investment income because it is reported on the same Form 1040, but unearned investment income is specifically excluded as a source for IRA funding.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 408"
    },
    "difficulty": "easy",
    "id": "e5d07bbb7920",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Which statement about Roth IRA contributions is correct?",
    "choices": [
      "They are deductible in the year of contribution.",
      "They are made with after-tax dollars and grow tax-free if qualified.",
      "They are exempt from FICA tax for the contributor.",
      "They reduce both federal income tax wages and Social Security wages."
    ],
    "answerIndex": 1,
    "rationale": "Roth IRAs under IRC Section 408A receive after-tax contributions; qualified distributions of contributions and earnings are tax-free. The most tempting distractor is choice A, but Roth contributions are never deductible - that feature belongs to a traditional IRA.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 408A"
    },
    "difficulty": "easy",
    "id": "dd0e3f65c092",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Under SECURE 2.0, the required beginning date for distributions from a traditional IRA is generally tied to the year the owner reaches what age?",
    "choices": [
      "59 1/2",
      "65",
      "73",
      "80"
    ],
    "answerIndex": 2,
    "rationale": "SECURE 2.0 raised the RMD age to 73 (scheduled to rise to 75 in 2033). The most common distractor is age 59 1/2, but that is the threshold for penalty-free withdrawals, not for required minimum distributions.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 590-B"
    },
    "difficulty": "easy",
    "id": "16661c9c8cff",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Compared with a traditional IRA, a unique feature of a Roth IRA during the original owner's lifetime is that:",
    "choices": [
      "Contributions are tax-deductible up to the annual limit.",
      "The owner is not required to take RMDs.",
      "Contribution amounts are unlimited regardless of income.",
      "Withdrawals are always subject to ordinary income tax."
    ],
    "answerIndex": 1,
    "rationale": "IRC Section 408A exempts the original Roth IRA owner from lifetime RMDs, allowing the account to compound indefinitely. Choice A is wrong because Roth contributions are never deductible - that is the trade-off for tax-free qualified withdrawals.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 408A"
    },
    "difficulty": "easy",
    "id": "0d792003021a",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Qualified retirement plans must comply with which federal law that establishes minimum standards for fiduciary conduct, vesting, reporting, and disclosure?",
    "choices": [
      "Investment Company Act of 1940",
      "Employee Retirement Income Security Act of 1974",
      "Securities Act of 1933",
      "Sarbanes-Oxley Act of 2002"
    ],
    "answerIndex": 1,
    "rationale": "ERISA (1974) is the federal statute governing private-sector qualified retirement plans, including fiduciary duties, vesting, reporting, and participant protections. The Investment Company Act regulates registered investment companies (mutual funds), not retirement plans, making it an attractive but incorrect distractor.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Employee Retirement Income Security Act of 1974"
    },
    "difficulty": "easy",
    "id": "d49fdf81985d",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "A 403(b) plan is generally available to employees of:",
    "choices": [
      "For-profit corporations of any size",
      "Public school systems and certain 501(c)(3) tax-exempt organizations",
      "Sole proprietorships with no employees",
      "Federal government civilian agencies only"
    ],
    "answerIndex": 1,
    "rationale": "IRC Section 403(b) extends tax-deferred annuity and custodial account treatment to public school employees and 501(c)(3) nonprofit workers. Option A is wrong because for-profit employers offer 401(k) plans, not 403(b) plans.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 403(b)"
    },
    "difficulty": "easy",
    "id": "b71cecb981d1",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "A 457(b) deferred compensation plan is most commonly sponsored by:",
    "choices": [
      "Sole proprietorships with self-employed earnings",
      "Investment advisory firms for their clients",
      "State and local governments and certain tax-exempt organizations",
      "Federal credit unions only"
    ],
    "answerIndex": 2,
    "rationale": "IRC Section 457 governs deferred compensation arrangements maintained by state and local governments and certain tax-exempt employers. The most plausible distractor is option D, but federal credit unions are not the typical sponsor and the statute is far broader.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 457"
    },
    "difficulty": "easy",
    "id": "ea21ef00b8b2",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "In a Simplified Employee Pension (SEP) IRA, contributions are made by:",
    "choices": [
      "Employees only, through salary deferrals",
      "The employer only, on behalf of eligible employees",
      "Both employees and the employer with a mandatory match",
      "An insurance company funding a guaranteed annuity"
    ],
    "answerIndex": 1,
    "rationale": "SEP IRAs are funded exclusively by employer contributions; eligible employees do not make their own salary deferrals into a SEP. Option C confuses the SEP with a SIMPLE IRA, which does involve mandatory employer matching alongside employee deferrals.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 408"
    },
    "difficulty": "easy",
    "id": "6ce5619964ee",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "In a defined contribution plan such as a 401(k), the investment risk is generally borne by:",
    "choices": [
      "The employer",
      "The plan participant (employee)",
      "The Pension Benefit Guaranty Corporation",
      "The plan's actuary"
    ],
    "answerIndex": 1,
    "rationale": "In a defined contribution plan, the ultimate retirement benefit depends on contributions plus investment performance, so the employee bears the investment risk. The employer bears the investment risk in a defined benefit plan, which is the opposite arrangement and a common point of confusion.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 401(a)"
    },
    "difficulty": "easy",
    "id": "5227d6a40ebc",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "In a defined benefit pension plan, who generally bears the investment risk?",
    "choices": [
      "The participant, based on personal investment elections",
      "The plan sponsor (employer), which must fund the promised benefit",
      "The Social Security Administration",
      "The participant's beneficiaries after death"
    ],
    "answerIndex": 1,
    "rationale": "A DB plan promises a defined retirement benefit, so the employer is responsible for funding whatever is needed to deliver that benefit and bears the investment risk. Option A reverses the structure - participants only bear investment risk in a defined contribution plan.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 401(a)"
    },
    "difficulty": "easy",
    "id": "2c698d0d3758",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Compared with a qualified plan, a nonqualified deferred compensation plan generally:",
    "choices": [
      "Provides an immediate employer tax deduction at the time amounts are credited",
      "Is not subject to ERISA's broad coverage and nondiscrimination rules",
      "Must cover all employees on uniform terms",
      "Is insured by the Pension Benefit Guaranty Corporation"
    ],
    "answerIndex": 1,
    "rationale": "Nonqualified plans are designed for select executives ('top-hat' arrangements) and are exempt from most ERISA coverage and nondiscrimination requirements. Choice A is wrong because the employer's deduction is delayed until the executive recognizes the income, mirroring the participant's deferred recognition.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Employee Retirement Income Security Act of 1974"
    },
    "difficulty": "easy",
    "id": "e51c77baab83",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "To take a fully tax-free qualified distribution from a Roth IRA, the account must have been open for at least five tax years AND the owner must:",
    "choices": [
      "Be at least age 50",
      "Be at least 59 1/2, disabled, deceased, or use up to $10,000 for a first-time home purchase",
      "Have been with the same employer for five years",
      "Have transferred the assets from a 401(k) plan"
    ],
    "answerIndex": 1,
    "rationale": "Section 408A defines a qualified distribution as one satisfying the 5-year rule plus one of: age 59 1/2, death, disability, or first-time home purchase up to a $10,000 lifetime limit. Age 50 (option A) only triggers catch-up contributions and has no bearing on Roth qualification.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 408A"
    },
    "difficulty": "medium",
    "id": "75a13366accd",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Which of the following is NOT an exception to the 10% early withdrawal penalty for a distribution from a traditional IRA before age 59 1/2?",
    "choices": [
      "First-time home purchase up to $10,000",
      "Qualified higher education expenses for the owner or family",
      "Death or total and permanent disability of the account owner",
      "A discretionary withdrawal to fund a child's wedding"
    ],
    "answerIndex": 3,
    "rationale": "A wedding is not among the statutory exceptions to the 10% additional tax. First-time home purchase, higher education expenses, death, and disability are all listed exceptions in the Internal Revenue Code and IRS guidance.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 590-B"
    },
    "difficulty": "medium",
    "id": "bfc6676d63c5",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "A married investor whose spouse is an active participant in an employer-sponsored retirement plan may find that the deductibility of their own traditional IRA contribution is:",
    "choices": [
      "Always fully deductible regardless of household income",
      "Phased out at higher modified adjusted gross income levels",
      "Phased out only for filers older than age 50",
      "Disallowed entirely under all circumstances"
    ],
    "answerIndex": 1,
    "rationale": "When either spouse is an active participant, traditional IRA deductibility is phased out across published MAGI ranges (with a different range when only the non-contributing spouse is the active participant). Option A ignores the phaseout entirely and is the most common misconception worth flagging.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 590-A"
    },
    "difficulty": "medium",
    "id": "8a3ac04fdb5c",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "The ability to make direct contributions to a Roth IRA is best described as:",
    "choices": [
      "Available only to single filers",
      "Phased out above certain modified adjusted gross income thresholds that vary by filing status",
      "Permitted only for individuals over age 50",
      "Independent of income at any level"
    ],
    "answerIndex": 1,
    "rationale": "IRC Section 408A phases out direct Roth contributions over MAGI ranges that depend on filing status; high earners may be barred from direct contributions altogether. Option D is incorrect because the income-based phaseout is a defining feature of the Roth contribution rules.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 408A"
    },
    "difficulty": "medium",
    "id": "0c8d9bc6d2bf",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "A self-employed dentist with no employees other than her spouse establishes a Solo 401(k). Compared with a SEP IRA, the Solo 401(k) generally allows her to:",
    "choices": [
      "Make both employee elective deferrals and employer profit-sharing contributions, often increasing total funding capacity",
      "Avoid all reporting and recordkeeping obligations indefinitely",
      "Cover unrelated rank-and-file employees automatically without testing",
      "Skip nondiscrimination testing forever even after hiring outside staff"
    ],
    "answerIndex": 0,
    "rationale": "A Solo 401(k) layers an elective deferral (subject to the 402(g) limit) on top of an employer profit-sharing contribution, which often beats a SEP at moderate self-employment income. Option B overstates the simplicity - Form 5500-EZ is required once plan assets exceed $250,000.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 401(k)"
    },
    "difficulty": "medium",
    "id": "8d5982e3d920",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Under a SIMPLE IRA, the employer must EITHER:",
    "choices": [
      "Match employee deferrals dollar-for-dollar up to 3% of compensation, OR make a 2% nonelective contribution for all eligible employees",
      "Contribute 25% of compensation for each employee annually",
      "Match only highly compensated employees",
      "Make no contributions in any year the firm reports a net operating loss"
    ],
    "answerIndex": 0,
    "rationale": "A SIMPLE IRA requires the employer to elect annually between a 3% dollar-for-dollar match and a 2% nonelective contribution for all eligible employees regardless of whether they defer. Option D is wrong because the employer's funding obligation is fixed once the plan is in place; profitability does not waive it.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 408"
    },
    "difficulty": "medium",
    "id": "26a94024cc8b",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Which statement about 457(b) plans is correct?",
    "choices": [
      "Governmental 457(b) assets must be held in trust for participants, while nongovernmental 457(b) assets remain general assets of the employer",
      "All 457(b) plans are insured by the PBGC",
      "Nongovernmental 457(b) plans can be rolled into a traditional IRA on separation",
      "Only the federal government may sponsor a 457(b) plan"
    ],
    "answerIndex": 0,
    "rationale": "Governmental 457(b) plans must hold assets in trust for the exclusive benefit of participants, but nongovernmental ('top-hat') 457(b) plans remain unfunded promises subject to the employer's creditors. Option C is wrong because rollovers to an IRA are permitted only from governmental 457(b) plans, not from the nongovernmental version.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 457"
    },
    "difficulty": "medium",
    "id": "c5382229d308",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Catch-up contributions to retirement accounts are generally available beginning in the year a participant attains what age?",
    "choices": [
      "40",
      "50",
      "55",
      "65"
    ],
    "answerIndex": 1,
    "rationale": "Catch-up contributions to IRAs, 401(k), 403(b), 457, and SIMPLE plans become available at age 50, with an additional enhanced catch-up at ages 60-63 under SECURE 2.0. Age 55 (choice C) is a common distractor because it is the threshold for HSA catch-ups - a different program.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 590-A"
    },
    "difficulty": "medium",
    "id": "48fae8599c90",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Under ERISA, employer matching contributions in a defined contribution plan must vest under one of two permissible accelerated schedules. One acceptable schedule is:",
    "choices": [
      "3-year cliff vesting",
      "7-year cliff vesting",
      "Immediate vesting only - no schedule allowed",
      "10-year graded vesting"
    ],
    "answerIndex": 0,
    "rationale": "Post-Pension Protection Act, employer matching contributions must vest no slower than a 3-year cliff or a 2-to-6-year graded schedule. The older 5-year cliff and 7-year graded schedules (and option B's 7-year cliff) no longer satisfy ERISA's minimum vesting standards for matching contributions.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Employee Retirement Income Security Act of 1974"
    },
    "difficulty": "medium",
    "id": "a491d2c1799a",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "A qualified retirement plan is considered 'top-heavy' when more than what percentage of plan benefits or account balances are attributable to key employees?",
    "choices": [
      "25%",
      "50%",
      "60%",
      "90%"
    ],
    "answerIndex": 2,
    "rationale": "The Internal Revenue Code defines a plan as top-heavy when key employees hold more than 60% of plan assets, triggering accelerated vesting and minimum contribution requirements for non-key employees. Option B (50%) is the leading distractor because it sounds like a majority threshold but understates the statutory cutoff.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 401(a)"
    },
    "difficulty": "medium",
    "id": "b98b592fcf6b",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Permitted investments inside a 403(b) plan are generally limited to:",
    "choices": [
      "Individual stocks held in a self-directed brokerage account",
      "Annuity contracts and mutual funds (custodial accounts)",
      "Limited partnerships and direct real estate",
      "Commodity futures and options"
    ],
    "answerIndex": 1,
    "rationale": "IRC Section 403(b) historically authorized only annuity contracts (originally called Tax-Sheltered Annuities) and was later expanded to permit mutual fund custodial accounts. Direct equities, partnerships, real estate, and commodities are not permissible 403(b) investments, ruling out the most attractive distractor of self-directed brokerage.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 403(b)"
    },
    "difficulty": "medium",
    "id": "2f8426076d89",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "A common reason an employer adopts a nonqualified deferred compensation plan instead of expanding its 401(k) is to:",
    "choices": [
      "Disproportionately reward selected highly compensated executives outside ERISA's nondiscrimination limits",
      "Capture an immediate corporate tax deduction for funded amounts",
      "Provide PBGC insurance coverage to participants",
      "Allow employees to contribute pre-tax dollars without any IRC limit"
    ],
    "answerIndex": 0,
    "rationale": "Nonqualified plans are deliberately discriminatory - 'top-hat' arrangements that escape ERISA's coverage and nondiscrimination tests so executives can defer more than qualified-plan limits permit. Option B is wrong because the employer's deduction is delayed until the executive recognizes the deferred income.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Employee Retirement Income Security Act of 1974"
    },
    "difficulty": "medium",
    "id": "483902af3bb8",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Under the SECURE Act, most non-spouse designated beneficiaries who inherit a traditional IRA must generally:",
    "choices": [
      "Distribute the entire account by the end of the 10th year following the original owner's death",
      "Take RMDs spread over the beneficiary's own life expectancy",
      "Transfer the account to their own IRA as if they were the original owner",
      "Wait until age 73 before taking any distribution"
    ],
    "answerIndex": 0,
    "rationale": "The SECURE Act generally eliminated the 'stretch IRA' for non-spouse beneficiaries and imposed a 10-year complete payout rule, with exceptions for 'eligible designated beneficiaries' such as minors, disabled individuals, and those not more than 10 years younger. Option B describes the prior-law stretch, which is no longer broadly available.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 590-B"
    },
    "difficulty": "medium",
    "id": "deb392900e87",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Under ERISA Section 404(a), a plan fiduciary must act:",
    "choices": [
      "For the exclusive benefit of plan participants and beneficiaries with the care of a prudent expert",
      "In the best interest of the plan sponsor's shareholders first",
      "Solely to maximize plan returns regardless of risk taken",
      "Only in accordance with applicable state common-law trust principles"
    ],
    "answerIndex": 0,
    "rationale": "ERISA 404(a) imposes the duty of loyalty (exclusive benefit), prudence (the prudent-expert standard), diversification, and adherence to plan documents. Option B is a classic confusion - corporate fiduciary loyalty runs to participants and beneficiaries of the plan, not the plan sponsor's shareholders.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "medium",
    "id": "a0e38013ed36",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Compliance with ERISA Section 404(c) generally requires that the plan:",
    "choices": [
      "Allow participants to direct their own investments and offer a broad range of investment options with adequate disclosure",
      "Have the employer guarantee minimum returns each year",
      "Restrict every participant to a single default fund",
      "Limit investment options to U.S. Treasury securities"
    ],
    "answerIndex": 0,
    "rationale": "404(c) shifts liability for investment outcomes to participants when the plan offers a broad range of investments and adequate information for prudent self-direction. Option B inverts the rule - guaranteeing returns would be inconsistent with self-direction and is not a 404(c) requirement.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(c)"
    },
    "difficulty": "medium",
    "id": "afafb2506d78",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "A client receives a distribution from her traditional IRA paid directly to herself rather than via trustee-to-trustee transfer. To avoid taxation and the 10% penalty, she must redeposit the funds into another eligible IRA within how many days?",
    "choices": [
      "30 days",
      "60 days",
      "90 days",
      "180 days"
    ],
    "answerIndex": 1,
    "rationale": "Indirect IRA rollovers must be completed within 60 days of receipt, and the once-per-12-months limit on indirect IRA-to-IRA rollovers (the Bobrow rule) also applies. There is no 30-day shortcut, making option A a clean distractor.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 590-A"
    },
    "difficulty": "medium",
    "id": "430801024c10",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "An employee's traditional pre-tax 401(k) elective deferrals reduce which of the following in the year of contribution?",
    "choices": [
      "Both federal income tax wages and FICA wages",
      "Federal income tax wages but NOT Social Security and Medicare (FICA) wages",
      "FICA wages only, leaving federal income tax wages unchanged",
      "Neither federal income tax wages nor FICA wages"
    ],
    "answerIndex": 1,
    "rationale": "Pre-tax 401(k) deferrals reduce Box 1 federal income tax wages but remain subject to Social Security and Medicare taxes, so Boxes 3 and 5 are not reduced. Option A is the most common misconception - investors often forget that FICA still applies to elective deferrals.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 401(k)"
    },
    "difficulty": "medium",
    "id": "c8b196716763",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Beginning in 2024, designated Roth accounts within an employer 401(k) plan are:",
    "choices": [
      "No longer subject to lifetime RMDs for the original participant",
      "Required to begin RMDs at age 59 1/2 in all cases",
      "Required to be distributed within 5 years of the first contribution",
      "Treated identically to traditional 401(k) accounts for RMD purposes"
    ],
    "answerIndex": 0,
    "rationale": "SECURE 2.0 eliminated lifetime RMDs from designated Roth accounts in employer plans starting in 2024, aligning them with Roth IRAs. Option D was true under prior law but has been superseded - Roth 401(k) accounts no longer trigger RMDs while the original participant is alive.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 575"
    },
    "difficulty": "medium",
    "id": "d43eeb3ceb5d",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "A public school teacher participates in both a 403(b) plan and a governmental 457(b) plan. Regarding employee elective deferrals, the teacher generally may:",
    "choices": [
      "Defer the full elective contribution to each plan separately because the limits are not coordinated between 403(b) and 457(b)",
      "Defer up to the 403(b) limit total, aggregated across both plans",
      "Defer up to the 457(b) limit total, aggregated across both plans",
      "Defer no more than 50% of compensation in total across all plans"
    ],
    "answerIndex": 0,
    "rationale": "The 457(b) elective deferral limit is a separate bucket from the 401(k)/403(b) limit, so an employee participating in both can fund each plan up to its own ceiling. Option B is wrong because it incorrectly aggregates two limits that the Code expressly keeps separate.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 457"
    },
    "difficulty": "medium",
    "id": "989b81b2b834",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "For a defined contribution plan, IRC Section 415 limits the total annual additions (employee deferrals plus employer contributions plus forfeitures) per participant to the lesser of:",
    "choices": [
      "100% of compensation or an inflation-adjusted dollar limit",
      "25% of compensation or $50,000",
      "50% of compensation or $25,000",
      "Whatever amount the plan document specifies, with no IRC ceiling"
    ],
    "answerIndex": 0,
    "rationale": "Section 415(c) caps annual additions at the lesser of 100% of compensation or an annually indexed dollar limit, separate from the elective deferral limit. Option B references outdated dollar amounts and the wrong percentage and is therefore the most attractive but incorrect distractor.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 401(a)"
    },
    "difficulty": "hard",
    "id": "11a61b9e4630",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "For 401(k) nondiscrimination testing, a 'highly compensated employee' is generally one who:",
    "choices": [
      "Owned more than 5% of the employer at any time in the current or prior year, OR earned more than the indexed compensation threshold in the prior year",
      "Earns the highest absolute salary at the company",
      "Holds any officer title regardless of compensation",
      "Has worked for the company longer than 10 years"
    ],
    "answerIndex": 0,
    "rationale": "An HCE is defined by either the more-than-5% owner test or the prior-year compensation test (indexed annually). Tenure (option D) and title alone (option C) are not part of the HCE definition, though officer status overlaps with the separately defined 'key employee' category used for top-heavy testing.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 401(a)"
    },
    "difficulty": "hard",
    "id": "ff2b071d560f",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "The Pension Benefit Guaranty Corporation insures benefits in:",
    "choices": [
      "All defined contribution plans, including 401(k)s",
      "Most private-sector defined benefit pension plans",
      "Roth IRAs and traditional IRAs",
      "Governmental Section 457 plans"
    ],
    "answerIndex": 1,
    "rationale": "The PBGC insures most private-sector defined benefit pension plans against employer insolvency; it does not cover defined contribution plans, IRAs, or governmental plans. Option A is wrong because each participant's benefit in a DC plan is the account balance itself - there is no fixed benefit promise to insure.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Employee Retirement Income Security Act of 1974"
    },
    "difficulty": "hard",
    "id": "266404434a9f",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Under current law (post-Tax Cuts and Jobs Act), a Roth IRA conversion from a traditional IRA may NOT be:",
    "choices": [
      "Reversed (recharacterized) back to a traditional IRA after the conversion",
      "Subject to ordinary income tax in the year of conversion",
      "Made by a taxpayer with high modified adjusted gross income",
      "Executed via a direct trustee-to-trustee transfer"
    ],
    "answerIndex": 0,
    "rationale": "TCJA permanently eliminated the ability to recharacterize a Roth conversion; once converted, the assets stay in the Roth IRA. The conversion is still taxable as ordinary income (B is true), there is no income limit on conversions (C is allowed), and direct transfers remain the cleanest method (D is allowed).",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 408A"
    },
    "difficulty": "hard",
    "id": "0946502ee983",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "A taxpayer holds $90,000 of pre-tax assets in a traditional IRA, then makes a $7,000 nondeductible traditional IRA contribution and immediately converts that $7,000 to a Roth IRA. Under the IRS pro-rata (aggregation) rule, the conversion will be:",
    "choices": [
      "Entirely tax-free, because only the nondeductible amount was converted",
      "Taxed proportionally based on the ratio of after-tax basis to total traditional IRA balances",
      "Taxed entirely as ordinary income, with no recovery of basis",
      "Treated as an excess contribution subject to a 6% penalty"
    ],
    "answerIndex": 1,
    "rationale": "The pro-rata rule aggregates ALL of a taxpayer's traditional IRA balances and applies the same after-tax/pre-tax ratio to any distribution or conversion, so most of the converted amount becomes taxable when significant pre-tax balances exist. Option A is the classic 'backdoor Roth' misconception - it only works cleanly when the taxpayer has no other pre-tax IRA assets.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 590-A"
    },
    "difficulty": "hard",
    "id": "767dc23e530e",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Which 457(b) distribution is eligible to be rolled over directly into a traditional IRA?",
    "choices": [
      "A distribution from a governmental 457(b) plan",
      "A distribution from a nongovernmental ('top-hat') 457(b) plan",
      "Either type of 457(b) plan, without restriction",
      "Neither, because no 457 plan distribution is rollover-eligible"
    ],
    "answerIndex": 0,
    "rationale": "Only governmental 457(b) plan distributions are eligible for rollover to an IRA or another qualified plan. Nongovernmental 457(b) assets remain general assets of the employer and cannot be rolled to an IRA, eliminating option B.",
    "citation": {
      "source": "OTHER",
      "ref": "IRC Section 457"
    },
    "difficulty": "hard",
    "id": "d29f92c6e5de",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Under SECURE 2.0, a traditional IRA owner who attains age 73 during 2026 must take her FIRST required minimum distribution no later than:",
    "choices": [
      "December 31, 2026",
      "April 1, 2027",
      "December 31, 2027",
      "April 1 of the year after she turns 75"
    ],
    "answerIndex": 1,
    "rationale": "The Required Beginning Date is April 1 of the year following the year the owner attains the applicable age (currently 73). She may defer the first RMD to April 1, 2027, but the second RMD will then be due by December 31, 2027, often producing two taxable RMDs in the same year. Option A would be correct only if she took the first RMD in the year she turned 73 instead of using the deferral.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 590-B"
    },
    "difficulty": "hard",
    "id": "573e99fbe0bd",
    "subtopicId": "3.6",
    "reviewed": false
  },
  {
    "stem": "Under ERISA Section 406, prohibited transactions generally include:",
    "choices": [
      "The sale, exchange, or lease of plan property between the plan and a 'party in interest', absent an exemption",
      "Any plan investment in publicly traded securities",
      "A participant directing investments among offered options",
      "Any plan loan to a participant under any circumstance"
    ],
    "answerIndex": 0,
    "rationale": "ERISA 406 forbids self-dealing transactions between the plan and parties in interest (employer, fiduciaries, certain related parties) unless a statutory or administrative exemption applies. Option D is too absolute - participant loans are permitted under ERISA when they meet the conditions in the Code and DOL regulations.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 406"
    },
    "difficulty": "hard",
    "id": "2e87006b0454",
    "subtopicId": "3.6",
    "reviewed": false
  }
];

import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Special Types of Accounts: 529s, Coverdell ESAs, UTMA/UGMA, and HSAs",
  "bodyMd": "Beyond ordinary brokerage and retirement accounts, the Series 65 expects you to recognize a handful of *special-purpose* accounts that the tax code (or state law) creates to channel savings toward specific goals: paying for school, transferring assets to a child, or covering medical bills. Each wrapper has its own contribution limits, tax mechanics, and rules about who actually controls the money. The exam tests whether you can match the right account to a client's goal and explain why one choice produces a better after-tax outcome than another.\n\n### Education-related accounts: 529 plans and Coverdell ESAs\n\nA **529 plan** is a state-sponsored, tax-advantaged savings vehicle named after the section of the Internal Revenue Code that authorizes it. Contributions go in with *after-tax* dollars, earnings grow tax-deferred, and qualified withdrawals — for tuition, fees, books, supplies, and room and board at an eligible post-secondary institution — come out federal-income-tax-free. The federal code also permits up to $10{,}000$ per year of K-12 tuition to be paid from a 529 tax-free. There is no federal annual contribution limit, but contributions are treated as completed gifts for transfer-tax purposes, so most clients use the annual gift-tax exclusion. A donor can also *front-load* up to five years of exclusions into a single year — a planning feature unique to 529s. The **account owner** (typically a parent or grandparent) keeps control of the money, can change the beneficiary among qualifying family members, and can take the assets back as a non-qualified distribution at any time.\n\nNon-qualified withdrawals are the trap. The *earnings* portion of a non-qualified distribution is subject to ordinary income tax plus a 10% federal penalty. The contribution portion comes back tax-free because it was never deducted federally.\n\nThe **Coverdell Education Savings Account (ESA)** is the smaller cousin. The annual contribution is capped at $2{,}000$ per beneficiary, aggregated across all contributors, and the right to contribute is phased out at higher incomes. Unlike a 529, a Coverdell can pay broad K-12 expenses (uniforms, tutoring, transportation), not just tuition. Two cliffs to remember: contributions must stop at the beneficiary's 18th birthday, and the balance generally must be spent or rolled to a family member by age 30 — otherwise the earnings are distributed, taxed, and penalized.\n\n| Feature | 529 Plan | Coverdell ESA |\n|---|---|---|\n| Federal annual contribution cap | None | $2{,}000 per beneficiary |\n| Contributor income limits | No | Yes (phase-out) |\n| K-12 use | Up to $10{,}000/yr tuition | Broad K-12 expenses |\n| Age cliff for beneficiary | None | Roll or spend by ~30 |\n| Owner control | Yes (donor controls) | Custodial (limited) |\n\n### UTMA and UGMA custodial accounts\n\nThe **Uniform Gifts to Minors Act (UGMA)** and the broader **Uniform Transfers to Minors Act (UTMA)** are state laws — not federal tax statutes — that let an adult hold property for a minor without the cost and complexity of a formal trust. UGMA, the older statute, accepts only cash and securities. UTMA, adopted in nearly every state, expands the universe to real estate, art, royalties, and other tangibles.\n\nKey facts the exam tests:\n\n1. **The gift is irrevocable.** Assets in the account belong to the minor immediately. The *custodian* has a fiduciary duty to manage them prudently for the minor's benefit and cannot take the money back.\n2. **One custodian, one minor, one account.** Joint custodianship is generally not permitted, and each account names a single beneficiary.\n3. **\"Kiddie-tax\" treatment.** Because the assets are the child's, the unearned income is taxed to the child. The first slice of unearned income is sheltered by the child's standard deduction, the next slice is taxed at the child's rate, and amounts above an annual threshold are taxed at the parents' marginal rate. The structure deliberately blunts the income-shifting incentive.\n4. **Termination at the age of majority.** UGMA assets generally pass to the beneficiary outright at age 18; UTMA can extend custodianship to 21 or 25 depending on state law. At termination, the (now adult) beneficiary takes full control — there is no way to keep the funds restricted.\n5. **Financial-aid impact.** Because the account is owned by the child, it counts more heavily against need-based aid than a parent-owned 529.\n\n### Health Savings Accounts (HSAs)\n\nAn **HSA** is the only wrapper in this group that is *triple-tax-advantaged*: contributions are deductible (or pre-tax through payroll), earnings grow tax-deferred, and qualified medical withdrawals come out tax-free. To contribute, the individual must be covered by a high-deductible health plan (HDHP), carry no disqualifying additional coverage, not be enrolled in Medicare, and not be claimed as a dependent. The IRS sets and indexes annual contribution limits each year — separate, larger limits apply to family HDHP coverage, and account holders age 55 or older can add a catch-up contribution.\n\nThe planning hook the exam likes: after age 65, non-medical withdrawals are no longer hit with the 20% penalty — only ordinary income tax. That makes the HSA function like a traditional IRA for any unused balance, with the bonus that *qualified* medical withdrawals remain tax-free at any age. A client who can pay current medical bills out of pocket and let the HSA compound effectively gets a better-than-IRA retirement account.\n\n### Worked example — comparing the tax math\n\nA 35-year-old saves $\\$5{,}000$ per year toward her newborn's college. Every dollar earns 7% annually. Compare the after-tax accumulation in a 529 plan versus a fully taxable brokerage account after 18 years.\n\nFuture value of an annuity:\n\n$$FV = C \\cdot \\frac{(1+r)^n - 1}{r}$$\n\nGross balance in either account, ignoring taxes during the accumulation phase:\n\n$$FV_{18} = 5000 \\cdot \\frac{1.07^{18} - 1}{0.07} \\approx 5000 \\cdot 33.999 \\approx \\$169{,}995$$\n\n**Inside a 529** used for qualified college expenses, the entire $\\$169{,}995$ is spendable. Earnings are never taxed.\n\n**Inside a taxable brokerage**, dividends, interest, and realized gains are taxed every year. A reasonable approximation is a 1.5-percentage-point annual tax drag, reducing the net compounding rate to about 5.5%:\n\n$$FV^{taxable}_{18} = 5000 \\cdot \\frac{1.055^{18} - 1}{0.055} \\approx \\$145{,}500$$\n\nThe 529 wrapper is worth roughly $\\$24{,}000$ — about 14% of the ending balance — for *the same investments and the same contributions*. The advantage is purely the tax wrapper.\n\nIf the client instead had funded a Coverdell, the $\\$2{,}000$ annual cap would have produced an analogous tax-free balance of:\n\n$$5000 \\to 2000: \\quad FV_{18} \\approx 2000 \\cdot 33.999 \\approx \\$68{,}000$$\n\n— illustrating why high-savers prefer 529s and use Coverdells only for the K-12 flexibility.\n\n### Summary\n\n- **529 plan:** state-sponsored, tax-deferred growth, tax-free qualified withdrawals for education, no federal contribution cap, donor retains control, 5-year gift-tax front-loading.\n- **Coverdell ESA:** $\\$2{,}000$/year cap, income-limited, broader K-12 use than a 529, age-30 spending cliff.\n- **UTMA/UGMA:** state-law custodial gifts to a minor, irrevocable, kiddie-tax applies, custodianship terminates at age of majority.\n- **HSA:** triple tax-advantaged, requires HDHP coverage, doubles as a stealth retirement account once the holder turns 65.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "OTHER",
      "ref": "IRC Section 529"
    },
    {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    {
      "source": "OTHER",
      "ref": "IRS"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 17"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 590-A"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 590-B"
    },
    {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    }
  ],
  "subtopicId": "3.8",
  "reviewed": false
};

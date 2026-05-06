import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Retirement Plans: IRAs, Qualified Plans, and Nonqualified Arrangements",
  "bodyMd": "Retirement plans let workers shift current income into future income while changing the timing of tax. The Series 65 outline asks an investment adviser representative to know the major federal retirement vehicles well enough to match a client to the right account, explain contribution limits and tax treatment in plain English, and recognize when to refer the client to a CPA or ERISA attorney. Two regimes govern the field. The Internal Revenue Code controls who may contribute, how much, and when distributions are taxed. The Employee Retirement Income Security Act of 1974 (ERISA) controls how employer-sponsored plans are administered, who acts as fiduciary, and how plan assets are protected from the employer's creditors. ERISA does not cover IRAs (those are creatures of the Code) and does not cover government or church plans, but it does cover virtually every private-sector qualified plan.\n\nA common shorthand: **qualified** plans satisfy IRC Section 401(a) and (where employer-sponsored) ERISA, so contributions are deductible to the employer, earnings grow tax-deferred, and assets are creditor-protected. **Nonqualified** plans skip those requirements in exchange for design flexibility — but they lose the deductibility, ERISA protection, and the broad tax deferral on funded amounts.\n\n### Individual Retirement Accounts: Traditional vs. Roth\n\nAn **IRA** is a personal account established under IRC Section 408 (traditional) or IRC Section 408A (Roth). Anyone with **earned income** may contribute up to the annual limit, subject to an additional catch-up for taxpayers age 50 and older. The two flavors invert each other on tax timing:\n\n- **Traditional IRA:** contributions may be deductible (the deduction phases out when the taxpayer or spouse is an active participant in an employer plan); earnings grow tax-deferred; and **all** withdrawals are taxed as ordinary income. Distributions before age 59½ trigger an additional 10% early-withdrawal penalty unless an enumerated exception (first-home purchase up to $10{,}000, qualifying higher-education expenses, disability, certain medical costs) applies. Required minimum distributions begin at the statutory age, currently 73.\n- **Roth IRA:** contributions are made with after-tax dollars and are subject to a **MAGI phase-out** that excludes high earners. **Qualified** distributions — taken after the account has been open at least five years AND the owner is at least 59½, disabled, deceased, or using up to $10{,}000 for a first home — are entirely tax-free. Roth IRAs have **no lifetime RMDs**, which makes them attractive as estate-planning vehicles.\n\nA **Roth conversion** moves traditional dollars into a Roth IRA. The converted amount is taxable in the year of conversion but starts a fresh five-year clock for the converted basis. There is no income limit on conversions (only on direct contributions), which underlies the so-called \"back-door Roth\" planning technique.\n\n### Qualified Plans: Defined Benefit vs. Defined Contribution\n\nA **defined benefit (DB) plan** — the classic pension — promises a specified retirement benefit, usually a monthly annuity. The benefit is set by formula:\n\n$$\\text{Annual Benefit} = \\text{Years of Service} \\times \\text{Benefit \\%} \\times \\text{Final Average Salary}$$\n\nThe employer bears all investment, longevity, and funding risk; an actuary sets the contribution level needed each year to keep the plan adequately funded.\n\nA **defined contribution (DC) plan** specifies what goes **in**, not what comes out. The retirement benefit equals the participant's accumulated balance, so the employee bears the investment risk:\n\n$$\\text{Account Value} = \\sum_{t=1}^{n} \\text{Contribution}_t \\times (1 + r_t)^{n - t}$$\n\nThe major DC vehicles tested on the exam:\n\n- **Company 401(k):** sponsored by for-profit corporations under IRC Section 401(k). Employees defer pre-tax salary (or after-tax for a designated **Roth 401(k)**); employers commonly add a matching contribution. ERISA Section 404(c) shields the employer fiduciary from liability for participant-directed investment losses if the plan offers a broad menu and adequate disclosure, and default investments must be **Qualified Default Investment Alternatives (QDIAs)** under the Department of Labor's QDIA regulation.\n- **403(b):** sponsored by public schools, 501(c)(3) charities, and certain ministers under IRC Section 403(b). Investment menus are limited by statute to mutual funds and annuity contracts.\n- **457 plan:** sponsored by state and local governments and certain tax-exempt employers under IRC Section 457. A defining feature: governmental 457(b) distributions are **not** subject to the 10% early-withdrawal penalty even before age 59½ — a useful planning point for early retirees from public service.\n- **Profit-sharing plan:** the employer makes discretionary contributions allocated by a non-discriminatory formula written into the plan document.\n\nAll ERISA plans must follow Section 404(a) — the duties of **loyalty** (act solely in the interest of participants and beneficiaries) and **prudence** (the \"prudent expert\" standard, a higher bar than the common-law prudent person). Section 406 prohibits self-dealing transactions between the plan and \"parties in interest\" except where a statutory or administrative exemption applies.\n\n### Small-Business and Solo Plans: SEP, SIMPLE, Solo 401(k)\n\nFor small employers and self-employed individuals, three streamlined plans dominate:\n\n- **SEP-IRA (Simplified Employee Pension):** the employer (often a sole proprietor) contributes to an IRA established for each eligible employee. **Only the employer contributes**; contributions are discretionary year-to-year but must be a **uniform percentage** of compensation across all eligible employees. SEPs are easy to set up and avoid most ERISA reporting overhead.\n- **SIMPLE IRA (Savings Incentive Match Plan for Employees):** for employers with 100 or fewer employees. Employees defer salary up to the SIMPLE limit (lower than the 401(k) limit), and the employer must either match dollar-for-dollar up to 3% of compensation or make a 2% non-elective contribution to all eligible employees. **Early-distribution penalty trap:** the usual 10% penalty rises to **25%** for SIMPLE IRA withdrawals taken within the first two years of participation.\n- **Solo 401(k):** also called an \"individual 401(k),\" available to a self-employed person (and their spouse) with no common-law employees other than the spouse. The owner wears two hats and can contribute as both the **employee** (elective deferral up to the 401(k) limit) and the **employer** (profit-sharing contribution up to 25% of compensation), pushing the combined limit far above what a SEP alone would allow at most income levels. Solo 401(k)s come in **traditional and Roth** flavors and may permit participant loans, which IRAs cannot.\n\n### Nonqualified Retirement Plans\n\nA **nonqualified plan** is an arrangement that does not meet IRC Section 401(a) and is not subject to ERISA's funding and nondiscrimination rules. Examples include **deferred compensation** plans for executives, **supplemental executive retirement plans (SERPs)**, and so-called \"ineligible\" 457(f) plans for tax-exempt employer executives. Three trade-offs distinguish nonqualified plans from qualified plans:\n\n1. **Discrimination is allowed.** The employer can offer the plan only to a select group of management or highly compensated employees — the so-called \"top-hat\" group.\n2. **No employer deduction until the employee includes the income.** The employer's deduction is deferred to match the employee's recognition; the employee's tax is also deferred so long as the deferral arrangement satisfies the statutory deferred-compensation rules.\n3. **No ERISA creditor protection.** Plan assets, if any, remain the employer's general assets and are reachable by the employer's creditors in bankruptcy. To mitigate that risk without triggering current taxation, employers often use a **rabbi trust** — an irrevocable trust that protects the participant from a change of corporate heart but still leaves assets exposed to corporate creditors.\n\n### Worked Example\n\nA 45-year-old self-employed graphic designer with $120{,}000 of net self-employment income wants to compare a SEP-IRA with a Solo 401(k) for the year.\n\nSEP-IRA contribution (employer side only, roughly 20% of net SE earnings after the SE-tax deduction):\n\n$$0.20 \\times 120{,}000 \\approx 24{,}000$$\n\nSolo 401(k) contribution: she may add the employee elective deferral (assume the current $23{,}000 limit) on top of the same 20% employer share:\n\n$$23{,}000 + 24{,}000 = 47{,}000$$\n\nThe Solo 401(k) lets her shelter roughly **$23{,}000 more** than the SEP at the same income level, and she may direct the employee deferral to the **Roth** sub-account if she expects higher tax rates in retirement. Either contribution is fully deductible to her business; a Roth deferral, if elected, is included in current taxable income but produces tax-free qualified distributions.\n\n### Summary\n\nQualified plans (IRAs, 401(k), 403(b), 457, SEP, SIMPLE, DB pensions) get current-year tax deferral, tax-deferred growth, and ERISA creditor protection (other than IRAs, which are governed by the Code rather than ERISA) in exchange for IRS contribution limits and nondiscrimination rules. Traditional accounts tax distributions; Roth accounts tax contributions and exempt qualified withdrawals. DB plans guarantee a benefit funded by the employer; DC plans guarantee a contribution funded by salary deferral and matching, leaving investment risk on the employee. SEP, SIMPLE, and Solo 401(k) bring qualified-plan economics to small employers and the self-employed, with the Solo 401(k) typically allowing the largest deferral. Nonqualified plans skip the limits and discrimination tests but expose participants to employer credit risk and defer the employer's deduction until the employee is taxed.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    {
      "source": "OTHER",
      "ref": "IRC Section 408"
    },
    {
      "source": "OTHER",
      "ref": "IRC Section 408A"
    },
    {
      "source": "OTHER",
      "ref": "IRC Section 401(a)"
    },
    {
      "source": "OTHER",
      "ref": "IRC Section 401(k)"
    },
    {
      "source": "OTHER",
      "ref": "IRC Section 403(b)"
    },
    {
      "source": "OTHER",
      "ref": "IRC Section 457"
    },
    {
      "source": "OTHER",
      "ref": "Internal Revenue Service"
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
      "ref": "IRS Publication 575"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "Employee Retirement Income Security Act of 1974"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(c)"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 406"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA QDIA Regulation"
    },
    {
      "source": "OTHER",
      "ref": "Department of Labor"
    },
    {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    }
  ],
  "subtopicId": "3.6",
  "reviewed": false
};

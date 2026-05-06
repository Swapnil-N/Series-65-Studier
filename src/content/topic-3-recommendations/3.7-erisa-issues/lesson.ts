import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "ERISA Issues: Fiduciary Duty, IPS, QDIAs, and Prohibited Transactions",
  "bodyMd": "The Employee Retirement Income Security Act of 1974 (ERISA) is the federal law that governs most private-sector retirement plans, including 401(k) and pension plans. Series 65 candidates must understand ERISA because investment advisers who manage assets for, or give advice to, qualified plans are usually held to ERISA's fiduciary standards in addition to the Investment Advisers Act of 1940. ERISA does not cover IRAs, government plans, or most church plans, but it sets the model that the Uniform Prudent Investor Act and many state rules follow.\n\nThis lesson focuses on three exam-tested ideas: (1) the fiduciary duties imposed on plan trustees and investment managers, (2) the investment policy statement (IPS) used to document those duties, and (3) prohibited transactions, including the Qualified Default Investment Alternative (QDIA) safe harbor that lets a plan invest a participant's money even when the participant has not given direction.\n\n### Fiduciary Duties Under ERISA Section 404\n\nERISA Section 404(a) imposes four core duties on every plan fiduciary. A fiduciary is anyone who exercises discretionary authority over plan assets, gives investment advice for a fee, or has discretionary responsibility in plan administration. The four duties are:\n\n1. **Duty of loyalty (the \"exclusive benefit\" rule).** The fiduciary must act solely in the interest of participants and beneficiaries and for the exclusive purpose of providing benefits and paying reasonable expenses.\n2. **Duty of prudence (the \"prudent expert\" rule).** ERISA goes beyond the common-law \"prudent person\" standard. A fiduciary must act with the care, skill, prudence, and diligence that a *prudent person familiar with such matters* would use. This is why the standard is often called the prudent-expert rule — ignorance of investments is not a defense.\n3. **Duty to diversify.** The fiduciary must diversify plan investments to minimize the risk of large losses, unless under the circumstances it is clearly prudent not to. Concentrating a 401(k) in a single security — even employer stock — is a classic fact pattern for a Section 404 violation.\n4. **Duty to follow the plan documents.** The fiduciary must act in accordance with the written plan, but only insofar as the documents are consistent with ERISA.\n\nA fiduciary who breaches these duties is personally liable to make the plan whole for any losses and to disgorge any profits made through misuse of plan assets, under ERISA Section 502. ERISA Section 405 adds *co-fiduciary* liability: a fiduciary can be liable for another fiduciary's breach if it knowingly participates, conceals, or fails to make reasonable efforts to remedy it.\n\nA plan sponsor can shift much of this liability by hiring an **ERISA Section 3(38) investment manager** — a registered investment adviser, bank, or qualified insurance company that takes written *discretionary* authority over plan assets. Once appointed, the 3(38) manager becomes the fiduciary for those investment decisions. (A 3(21) adviser, by contrast, only gives non-discretionary advice and shares fiduciary status with the sponsor.)\n\n### The Investment Policy Statement (IPS)\n\nERISA does not literally require an IPS, but the Department of Labor has long taken the position that maintaining one is an essential part of demonstrating prudence under Section 404(a). In practice, every well-run qualified plan has one. An IPS is a written document that:\n\n- States the plan's investment objectives and time horizon.\n- Identifies the asset classes that may be used and target allocation ranges.\n- Sets criteria for selecting and monitoring investment options (expense ratios, tracking error, manager tenure, performance versus benchmark over rolling periods).\n- Describes the procedure for replacing an option that is placed on a watch list or fails its criteria.\n- Designates who has authority — the trustee, investment committee, 3(38) manager, or 3(21) adviser — for each decision.\n\nFor exam purposes, remember that the IPS guides — but does not guarantee — outcomes. A fiduciary is judged on the *process* used, not on hindsight performance. A diversified portfolio that loses money in a bear market does not breach Section 404(a) if the selection and monitoring process followed the IPS and was prudent at the time.\n\n### QDIAs and the Section 404(c) Safe Harbor\n\nERISA Section 404(c) provides a safe harbor: if a participant-directed plan lets participants choose from a broad range of investments and gives them adequate disclosure, fiduciaries are not liable for investment losses that result from the participant's own choices.\n\nBut what happens when an employee is auto-enrolled in a 401(k) and never picks an investment? The DOL's Qualified Default Investment Alternative regulation (the ERISA QDIA Regulation, 29 CFR 2550.404c-5) extends 404(c) protection to a default investment selected by the fiduciary, *as if the participant had chosen it*, provided the default fits one of these QDIA categories:\n\n- A **target-date / lifecycle fund** that adjusts allocation based on the participant's age or expected retirement date.\n- A **balanced fund** with a mix appropriate for the plan as a whole.\n- A **managed account** that allocates among the plan's options based on the participant's age and risk tolerance.\n- A **capital-preservation product** (such as a stable-value fund), but only for the first 120 days after the participant's first contribution.\n\nA stand-alone money market fund is *not* a permanent QDIA — it fails the long-term diversification requirement. Notice to participants must be given at least 30 days before the first investment and annually thereafter, and participants must be allowed to redirect out of the QDIA without penalty.\n\n### Prohibited Transactions Under Section 406\n\nERISA Section 406 forbids self-dealing and conflicted transactions between the plan and a \"party in interest\" (the employer, fiduciaries, service providers, and certain relatives and affiliates). Two broad categories are flagged: (a) sales, exchanges, leases, loans, or services between the plan and a party in interest; and (b) any use of plan assets for the personal benefit of a fiduciary.\n\nERISA Section 408(b)(2) carves out an exemption for *reasonable* contracts for services necessary to operate the plan, provided the compensation is reasonable. This is why 408(b)(2) fee-disclosure documents are required from plan service providers — sponsors need them to evaluate reasonableness. Violations expose the fiduciary to a 15% IRS excise tax and to civil penalties under Section 502.\n\n### Worked Example: Diversification and Excise Tax\n\nA plan trustee invests 60% of plan assets — $$\\text{plan assets} = \\$10{,}000{,}000$$ — in the employer's stock, which then drops 50%. Loss attributable to over-concentration:\n\n$$L = 0.60 \\times \\$10{,}000{,}000 \\times 0.50 = \\$3{,}000{,}000$$\n\nUnder Section 404(a)'s diversification duty, the trustee is personally liable to make the plan whole for the imprudent portion of that loss. If the transaction is also deemed prohibited (for example, the stock was purchased from a party in interest at an inflated price), an excise tax applies. The first-tier excise tax is 15% of the *amount involved* per year:\n\n$$\\text{Tax} = 0.15 \\times \\text{amount involved}$$\n\nIf the conflicted purchase amount was $1,000,000, the first-year excise tax is $$0.15 \\times \\$1{,}000{,}000 = \\$150{,}000$$, and an additional 100% tax can apply if the transaction is not corrected within the IRS's correction period.\n\n### Summary\n\nERISA holds plan fiduciaries to a prudent-expert standard, requires diversification and loyalty, and imposes personal liability for breaches. An IPS documents the prudent process. Section 404(c) protects fiduciaries when participants direct their own investments, and the QDIA regulation extends that protection to default options like target-date funds. Section 406 bans self-dealing, with a narrow Section 408(b)(2) exemption for reasonable service contracts.",
  "citations": [
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
      "ref": "ERISA Section 405"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 406"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 408(b)(2)"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 502"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 3(38)"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA QDIA Regulation"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Prudent Investor Act"
    },
    {
      "source": "OTHER",
      "ref": "Department of Labor"
    },
    {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    }
  ],
  "subtopicId": "3.7",
  "reviewed": false
};

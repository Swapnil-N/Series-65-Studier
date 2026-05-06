import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "A \"natural person\" client refers to:",
    "choices": [
      "A human being acting in an individual capacity",
      "A corporation chartered under state law",
      "A trust established by an individual for tax purposes",
      "Any entity recognized as a 'person' under federal law"
    ],
    "answerIndex": 0,
    "rationale": "Natural person specifically means a human being, distinguished from 'legal persons' (entities). The Uniform Securities Act defines 'person' broadly to include both natural persons and legal entities, but 'natural person' is reserved for individual human beings. (D) is wrong because while the broader 'person' definition includes entities, 'natural person' specifically excludes non-human entities.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    "difficulty": "easy",
    "id": "a3c5cc509c4a",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "For tax and liability purposes, a sole proprietorship is best characterized as:",
    "choices": [
      "A separate legal entity from its owner with limited liability",
      "Indistinguishable from its owner for both tax reporting and personal liability",
      "A pass-through entity that protects personal assets from business creditors",
      "A small corporation that automatically elects S-corp treatment"
    ],
    "answerIndex": 1,
    "rationale": "A sole proprietorship has no legal existence apart from its owner — business income is reported on the owner's Schedule C of Form 1040, and the owner has unlimited personal liability for business debts. (A) is wrong because a sole proprietorship offers no liability shield; that protection requires forming a separate legal entity such as an LLC or corporation.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 17"
    },
    "difficulty": "easy",
    "id": "bb4155564630",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "In a general partnership, the partners' liability for partnership debts is:",
    "choices": [
      "Limited to each partner's capital contribution",
      "Joint and several, including reaching personal assets",
      "Borne solely by the managing partner",
      "Limited to the partnership's net assets"
    ],
    "answerIndex": 1,
    "rationale": "General partners are jointly and severally liable for partnership obligations, meaning a creditor can pursue any one partner for the full amount of the debt, including reaching personal assets. (A) describes the protection enjoyed by limited partners in a limited partnership, not by general partners; it is precisely this exposure that motivates many clients to form LPs or LLCs instead.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    "difficulty": "easy",
    "id": "f910b27f91e8",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "Which statement most accurately describes a limited partner's exposure in a limited partnership (LP)?",
    "choices": [
      "Liability limited to the amount invested, provided the limited partner does not actively manage the partnership",
      "Joint and several liability with the general partner",
      "Personal liability up to twice the amount invested",
      "No liability whatsoever in any circumstances"
    ],
    "answerIndex": 0,
    "rationale": "A limited partner's liability is generally capped at his or her capital contribution, but if the limited partner takes part in management (the 'control rule'), the limited liability protection can be lost. (D) overstates the protection — limited partners can still lose their entire investment, and they can become personally liable if they exercise control over partnership business.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    "difficulty": "easy",
    "id": "02c29c83e12c",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "The owners of a limited liability company (LLC) are referred to as:",
    "choices": [
      "Shareholders",
      "Partners",
      "Members",
      "Beneficiaries"
    ],
    "answerIndex": 2,
    "rationale": "LLC owners are called 'members,' and the LLC's governance is typically set forth in an operating agreement filed alongside the articles of organization. (A) is wrong because 'shareholders' describes owners of a corporation (C-corp or S-corp); using corporate terminology for an LLC is a common but incorrect usage.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "easy",
    "id": "bfdac361fe51",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "A C-corporation's income is taxed:",
    "choices": [
      "Only at the shareholder level when dividends are paid",
      "Once at the corporate level and again at the shareholder level (double taxation)",
      "Only at the corporate level, with dividends being tax-free to shareholders",
      "As pass-through income on each shareholder's individual return"
    ],
    "answerIndex": 1,
    "rationale": "C-corporations face 'double taxation' — earnings are taxed at the corporate level under the corporate income tax, and dividends paid from after-tax earnings are taxed again at the shareholder level. (D) describes pass-through treatment, which applies to S-corporations, partnerships, and LLCs that elect partnership taxation, not to C-corps.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "easy",
    "id": "8dd17f690a1b",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "Compared to a C-corporation, an S-corporation:",
    "choices": [
      "May have an unlimited number of shareholders",
      "Provides pass-through taxation of corporate income to shareholders",
      "May freely issue multiple classes of common and preferred stock",
      "Has no restrictions on the citizenship status of its shareholders"
    ],
    "answerIndex": 1,
    "rationale": "An S-corporation passes its income, losses, deductions, and credits through to shareholders, who report them on their personal returns, avoiding the C-corp's double-taxation problem. (A) is wrong because S-corp shareholders are capped at 100, and shareholders generally must be U.S. citizens or resident individuals.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "easy",
    "id": "b85614d4dd5b",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "The three principal parties to an express trust are:",
    "choices": [
      "Settlor, custodian, and remainderman",
      "Grantor (settlor), trustee, and beneficiary",
      "Donor, agent, and beneficiary",
      "Executor, trustee, and heir"
    ],
    "answerIndex": 1,
    "rationale": "A trust is created when a grantor (also called the settlor or trustor) transfers assets to a trustee, who manages them for the benefit of one or more beneficiaries. (D) confuses trust roles with estate-administration roles — an executor is appointed under a will to administer an estate, not to manage a trust.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Prudent Investor Act"
    },
    "difficulty": "easy",
    "id": "4a686028d686",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "An estate as a client is best described as:",
    "choices": [
      "A trust created during the decedent's lifetime",
      "A legal entity that holds the assets of a deceased person and is administered by an executor or administrator",
      "A revocable arrangement that terminates at the grantor's incapacity",
      "A foundation organized for charitable purposes"
    ],
    "answerIndex": 1,
    "rationale": "An estate comes into existence at death and exists as a separate legal and taxable entity until the decedent's debts and taxes are paid and the remaining assets are distributed under the will (or by intestate succession). (A) describes an inter vivos (living) trust, which is a separate concept from a probate estate.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "easy",
    "id": "216cf8f76f67",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "A private foundation is generally:",
    "choices": [
      "An ERISA-covered retirement plan",
      "A tax-exempt charitable organization typically described under IRC Section 501(c)(3)",
      "A federally chartered banking institution",
      "A government agency that issues municipal grants"
    ],
    "answerIndex": 1,
    "rationale": "Foundations and charities are tax-exempt organizations recognized under IRC Section 501(c)(3); private foundations are typically funded by a single source (family or corporation) and have specific payout requirements. (A) is wrong because ERISA applies to private-sector employee benefit plans, not to charitable organizations.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "easy",
    "id": "53bed5339199",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "The Uniform Securities Act's definition of 'person' includes which of the following?",
    "choices": [
      "Only natural persons (human beings)",
      "Natural persons and U.S. corporations only",
      "Natural persons, business entities, trusts, estates, and governments",
      "Only U.S. residents and U.S.-domiciled entities"
    ],
    "answerIndex": 2,
    "rationale": "USA Section 102(15) defines 'person' broadly to encompass individuals, corporations, partnerships, LLCs, associations, joint ventures, business trusts, estates, trusts, governments and their subdivisions, and other legal or commercial entities. (B) is too narrow — it omits trusts, estates, partnerships, governments, and unincorporated organizations that the statute expressly covers.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    "difficulty": "medium",
    "id": "7cdc7c8314b2",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "Which of the following is NOT a requirement for an entity to maintain its S-corporation status?",
    "choices": [
      "No more than 100 shareholders",
      "Only one class of stock",
      "Shareholders must generally be U.S. citizens or resident individuals",
      "Annual gross revenue under $25 million"
    ],
    "answerIndex": 3,
    "rationale": "There is no revenue cap on S-corp eligibility; the requirements relate to ownership structure (≤100 shareholders, one class of stock, individual U.S. citizen/resident shareholders, plus certain qualifying trusts and estates), not size. (A) and (B) are real S-corp requirements, while (D) is a fabricated criterion that confuses S-corp rules with various other tax thresholds.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "bae8791c3140",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "A limited partner who actively participates in the management of partnership business risks:",
    "choices": [
      "Losing limited-liability protection and being treated as a general partner",
      "Forfeiting his or her capital contribution to the partnership",
      "Triggering automatic dissolution of the partnership",
      "Becoming personally subject to SEC registration as an investment adviser"
    ],
    "answerIndex": 0,
    "rationale": "Under partnership law, the so-called 'control rule' provides that a limited partner who exercises management control over the limited partnership can be held personally liable for partnership debts as if she were a general partner. (C) is wrong — limited-partner participation does not automatically dissolve the partnership, although it does jeopardize that partner's liability shield.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    "difficulty": "medium",
    "id": "621088f14a21",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes the difference between a revocable and an irrevocable trust?",
    "choices": [
      "A revocable trust may be amended or terminated by the grantor; an irrevocable trust generally cannot be unilaterally changed by the grantor",
      "A revocable trust must be testamentary, while an irrevocable trust must be inter vivos",
      "A revocable trust is exempt from probate, but an irrevocable trust is not",
      "Only an irrevocable trust may name a corporate trustee"
    ],
    "answerIndex": 0,
    "rationale": "The defining feature of a revocable (living) trust is that the grantor retains the power to amend or revoke it during life, while an irrevocable trust generally cannot be modified by the grantor without beneficiary consent or court order. (C) is wrong because both trust types — when properly funded — generally avoid probate; the revocable/irrevocable distinction concerns modification rights, not probate exposure.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Prudent Investor Act"
    },
    "difficulty": "medium",
    "id": "fc4424250efc",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "When opening an account for a trust, the IAR should look to whom for investment authority?",
    "choices": [
      "The grantor, in all circumstances",
      "The trustee, acting in accordance with the trust document and applicable fiduciary duties",
      "The eldest current income beneficiary",
      "The probate court"
    ],
    "answerIndex": 1,
    "rationale": "The trustee holds legal title to trust assets and has the authority — and the fiduciary duty — to invest those assets consistent with the trust instrument and the Uniform Prudent Investor Act. (A) is incorrect because in an irrevocable trust the grantor relinquishes investment authority once the trust is funded; in a revocable trust the grantor may serve as trustee, but the legal authority still derives from the trust document, not from grantor status itself.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Prudent Investor Act"
    },
    "difficulty": "medium",
    "id": "ab92b31462cb",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "A trustee's investment decisions are evaluated under the Uniform Prudent Investor Act based on:",
    "choices": [
      "The performance of each individual security in isolation",
      "The portfolio as a whole and as part of an overall investment strategy that incorporates risk and return objectives",
      "Whether each investment outperforms a designated benchmark every year",
      "Whether the trustee personally would have made the same choice with their own money"
    ],
    "answerIndex": 1,
    "rationale": "The Uniform Prudent Investor Act expressly adopts modern portfolio theory: investments are judged in the context of the entire portfolio and overall strategy, not individually in hindsight. (A) is wrong because the older 'prudent man rule' focused on each individual investment — UPIA replaced that with a portfolio-based standard.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Prudent Investor Act"
    },
    "difficulty": "medium",
    "id": "0b1e5b949d80",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "A C-corporation distributes a $100,000 cash dividend out of its after-tax earnings. The federal tax consequence is generally:",
    "choices": [
      "Tax-free to shareholders because the corporation has already paid tax",
      "Taxable to shareholders as ordinary or qualified dividend income, in addition to the corporate-level tax already paid",
      "Deductible to the corporation when paid",
      "Subject only to a flat 15% withholding tax for all shareholders"
    ],
    "answerIndex": 1,
    "rationale": "Dividends paid by a C-corporation are not deductible by the corporation; they come from after-tax earnings and are taxable again to the shareholder receiving them — the classic 'double taxation' scenario. (C) is wrong because, unlike interest on debt, dividend distributions are never deductible against corporate taxable income.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "7011e83ce909",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "For federal tax purposes, an LLC with two or more members:",
    "choices": [
      "Is by default treated as a C-corporation",
      "Is by default treated as a partnership but may elect corporate (C or S) treatment",
      "Must always elect S-corporation treatment",
      "Is automatically taxed as a sole proprietorship"
    ],
    "answerIndex": 1,
    "rationale": "Under the IRS 'check-the-box' regulations, a multi-member LLC is by default treated as a partnership for federal tax purposes, but it can elect to be taxed as a C-corp or, if it qualifies, an S-corp. (D) is wrong because sole-proprietorship treatment applies to a single-member LLC that has not elected corporate status, not to an LLC with multiple members.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "0e180eaa52ca",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "An IAR is opening a brokerage account for the estate of a deceased client. The person with authority to direct investments and sign account documents is:",
    "choices": [
      "The decedent's eldest child",
      "The personal representative — the executor named in the will or the administrator appointed by the probate court",
      "Any beneficiary named in the will",
      "The state's attorney general"
    ],
    "answerIndex": 1,
    "rationale": "An estate is administered by a personal representative — an executor (named in the will) or, if no valid will exists, an administrator appointed by the court — who has fiduciary authority and signs account paperwork on behalf of the estate. (C) is wrong because beneficiaries do not have authority to direct estate investments; their interest is in receiving distributions only after debts and taxes are paid.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "587639cccd22",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "Which of the following may NOT generally be a shareholder of an S-corporation?",
    "choices": [
      "An individual U.S. citizen",
      "Certain qualifying domestic trusts",
      "An estate of a deceased shareholder",
      "Another C-corporation"
    ],
    "answerIndex": 3,
    "rationale": "S-corp shareholders are limited to individual U.S. citizens or residents, certain qualifying trusts, estates, and select tax-exempt organizations; corporate or partnership shareholders disqualify S-corp status. (B) is incorrect to choose because some trusts (such as grantor trusts and Qualified Subchapter S Trusts, or QSSTs) may hold S-corp shares.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "77bdc610411d",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "A general partnership generally begins business when:",
    "choices": [
      "The partners file articles of incorporation with the state",
      "Two or more persons agree to carry on a business for profit, even without a written agreement",
      "The partnership receives a federal employer identification number",
      "The partnership registers with the SEC under the Investment Advisers Act"
    ],
    "answerIndex": 1,
    "rationale": "A general partnership can be formed by oral agreement or even by conduct — formal filings are not required at the federal or state level for partnership formation, although a written agreement is highly advisable. (A) is wrong because articles of incorporation form a corporation, not a partnership.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "07b53c70561a",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "A limited partnership must have at least:",
    "choices": [
      "One general partner and one limited partner",
      "Two general partners",
      "Three limited partners",
      "One general partner with at least 51% of the partnership's equity"
    ],
    "answerIndex": 0,
    "rationale": "A limited partnership requires at least one general partner (with management authority and unlimited liability) and at least one limited partner (with limited liability and a passive role). (D) is wrong because there is no statutory percentage-ownership requirement for the general partner; partnership interests can be allocated in any proportion the partnership agreement specifies.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "41d559692a1f",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "A married couple opens a joint brokerage account as 'tenants by the entirety.' For client-classification purposes, this account holds the assets of:",
    "choices": [
      "A single natural person",
      "Two natural persons holding property under a marital ownership form",
      "A general partnership",
      "A revocable trust"
    ],
    "answerIndex": 1,
    "rationale": "Tenants by the entirety is a form of joint ownership available only to married couples in certain states; the account holders remain two natural persons with joint rights of survivorship, not a partnership or trust. (C) is wrong because a partnership requires the partners to 'carry on a business for profit,' not merely co-own investment property.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    "difficulty": "medium",
    "id": "80ec8bf94593",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "Which characteristic distinguishes a private foundation from a public charity?",
    "choices": [
      "Foundations may not invest in equities, while public charities may",
      "Foundations are typically funded by a single source (family or corporation) and are subject to private-foundation excise rules and minimum-distribution requirements",
      "Public charities are taxable, while foundations are tax-exempt",
      "Foundations are formed under ERISA, while public charities are formed under state nonprofit law"
    ],
    "answerIndex": 1,
    "rationale": "Private foundations typically have a single (or few) sources of funding and are subject to additional federal rules including a minimum annual distribution requirement and excise tax on net investment income; public charities draw broader public support and face fewer of these strictures. (C) is wrong because both are tax-exempt under 501(c)(3) — the distinction is structural, not tax-status-based.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "f8c4ea5ef11a",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "A sole proprietor seeks investment advice for 'the business.' For suitability purposes, the IAR should:",
    "choices": [
      "Consider the business and the owner as the same client because legal and tax identities are the same",
      "Treat the business as a separate client and ignore the owner's personal financial situation",
      "Refuse to give advice unless the proprietor incorporates first",
      "Require the proprietor to register as an investment adviser"
    ],
    "answerIndex": 0,
    "rationale": "A sole proprietorship is not a separate legal entity from its owner — assets, debts, taxes, and liability all flow to the owner — so suitability analysis must treat the proprietor and the business interests as a single financial picture. (B) is wrong because business and personal finances are legally fused, so isolating the business would yield an incomplete suitability analysis.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 17"
    },
    "difficulty": "medium",
    "id": "113397ecdaae",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "Which statement about S-corp shareholder rules is most accurate?",
    "choices": [
      "An S-corporation may have up to 100 shareholders, with members of a family eligible to be counted as a single shareholder under a qualifying election",
      "An S-corporation may have an unlimited number of U.S. shareholders",
      "An S-corporation may issue both common and preferred stock to differentiate distribution rights",
      "Non-resident aliens may hold S-corp stock so long as they file a U.S. tax return"
    ],
    "answerIndex": 0,
    "rationale": "The 100-shareholder cap applies, and a family election under IRC Section 1361(c)(1) permits members of a family (and their estates) to be counted as one shareholder, easing the cap for closely held businesses. (C) is incorrect because S-corps are limited to a single class of stock — differences in voting rights are permitted, but differences in distribution or liquidation rights are not.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "c1785d73d6d0",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "A private foundation must generally distribute approximately what minimum percentage of its net investment assets annually to qualified charitable purposes?",
    "choices": [
      "1%",
      "3%",
      "5%",
      "10%"
    ],
    "answerIndex": 2,
    "rationale": "IRC Section 4942 imposes an annual minimum-distribution requirement of approximately 5% of the foundation's average net investment assets; failure to meet this triggers excise taxes. (B) understates the requirement and reflects a common confusion with older rules of foundation law that no longer apply.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "e3c064f5f641",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "An inter vivos (living) trust differs from a testamentary trust principally because:",
    "choices": [
      "An inter vivos trust is created during the grantor's lifetime, while a testamentary trust is created by the will and arises only at the grantor's death",
      "A testamentary trust is always revocable, while an inter vivos trust is always irrevocable",
      "Only an inter vivos trust may name a corporate trustee",
      "Testamentary trusts are exempt from probate; inter vivos trusts are not"
    ],
    "answerIndex": 0,
    "rationale": "An inter vivos trust is funded and effective during life, while a testamentary trust is established under a will and comes into existence only after the will is admitted to probate at death. (D) reverses the truth — assets in a properly funded inter vivos trust generally bypass probate, whereas testamentary trusts arise out of the probate process itself.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Prudent Investor Act"
    },
    "difficulty": "hard",
    "id": "e8a05bd5a595",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "A grantor establishes a charitable remainder trust (CRT). Which statement most accurately describes how it operates?",
    "choices": [
      "The grantor or other non-charitable beneficiaries receive an income stream for a term, with the remainder passing to a qualified charity",
      "The charity receives an income stream during the trust term, with the remainder passing to non-charitable beneficiaries",
      "Both the income and remainder must be paid to charity",
      "The trust assets must be liquidated and distributed within one year of formation"
    ],
    "answerIndex": 0,
    "rationale": "In a charitable remainder trust, the non-charitable income beneficiaries (often the grantor and spouse) receive payments — at least 5% annually — for life or a term up to 20 years, after which the remaining assets pass to the named charity. (B) describes the inverse — a charitable lead trust — where the charity receives the income stream and the remainder reverts to family.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "0528d48d9f16",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "Under modern partnership and LLC law, the principal advantage of an LLC over a limited partnership for closely held businesses is:",
    "choices": [
      "All LLC members may participate in management without losing limited-liability protection",
      "An LLC always provides perpetual existence, while LPs automatically dissolve at the end of each taxable year",
      "Only LLCs may elect pass-through taxation",
      "LLCs are exempt from state-level securities registration as a matter of federal law"
    ],
    "answerIndex": 0,
    "rationale": "All LLC members can participate in management without losing limited-liability protection — unlike LPs, where active management by a limited partner can pierce the liability shield under the control rule. (C) is wrong because both LPs and LLCs can elect pass-through treatment; the distinguishing feature is the management/liability framework.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "hard",
    "id": "d3c0b3fd670f",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "A corporation chartered in Delaware that pays federal income tax at the entity level on its net earnings is a:",
    "choices": [
      "Sole proprietorship",
      "C-corporation",
      "Partnership",
      "Trust"
    ],
    "answerIndex": 1,
    "rationale": "C-corporations are separate taxable entities under Subchapter C of the Internal Revenue Code, paying tax at the corporate level on their net income. (D) is wrong because trusts have their own tax regime under Subchapter J, not Subchapter C, and are not formed as state-chartered corporations.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "easy",
    "id": "c3730f551d0d",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "An IAR is reviewing the suitability of a recommendation for a charitable foundation. The board's primary fiduciary duty when investing the foundation's portfolio is to:",
    "choices": [
      "Maximize short-term gains for distribution",
      "Invest in accordance with the foundation's charitable purpose and applicable prudent-investor standards",
      "Mirror the asset allocation of the largest similar foundation",
      "Avoid any equity exposure because principal must always be preserved"
    ],
    "answerIndex": 1,
    "rationale": "Foundation trustees and directors are subject to fiduciary duties of loyalty and prudence and must invest consistent with the organization's charitable purpose, typically under state versions of prudent-investor standards. (D) overstates conservatism — most foundations must seek growth and income to fund both current grants and long-term mission.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Prudent Investor Act"
    },
    "difficulty": "medium",
    "id": "a2a52201ef80",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "A general partnership generally files which of the following federal income-tax forms?",
    "choices": [
      "Form 1040 with Schedule C",
      "Form 1120 (corporate income tax)",
      "Form 1065, with each partner receiving Schedule K-1",
      "Form 1041 (fiduciary income tax)"
    ],
    "answerIndex": 2,
    "rationale": "A general partnership is a pass-through entity that files an informational return on Form 1065; each partner receives a Schedule K-1 reporting his or her allocable share of income, deductions, and credits, which flows to the partner's individual return. (D) is wrong because Form 1041 is filed by trusts and estates, not by partnerships.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "9da38649e1e3",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "An IA is opening an account for a trust. Which document is most important for confirming the trustee's investment authority?",
    "choices": [
      "The grantor's will",
      "The trust agreement (declaration of trust) or a certification of trust derived from it",
      "The beneficiaries' written consent",
      "The state's general probate code"
    ],
    "answerIndex": 1,
    "rationale": "The trust instrument itself defines the trustee's powers, restrictions, and investment-direction authority; the IA should review the trust agreement (or a certification of trust) before accepting investment instructions. (A) is wrong because a will controls a probate estate; even for a testamentary trust, once the trust is established the operative trust language — not generic probate authority — governs ongoing investment decisions.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Prudent Investor Act"
    },
    "difficulty": "hard",
    "id": "23c63ab4004f",
    "subtopicId": "3.1",
    "reviewed": false
  },
  {
    "stem": "When advising an LLC client, the IAR should look to which document to determine member voting and management rights?",
    "choices": [
      "The articles of organization filed with the state",
      "The operating agreement among the members",
      "The corporate bylaws",
      "The partnership agreement"
    ],
    "answerIndex": 1,
    "rationale": "While the articles of organization create the LLC at the state level, the operating agreement is the contract among members governing voting rights, capital contributions, distributions, and management structure. (C) is wrong because bylaws govern corporations (C-corps and S-corps), not LLCs; using corporate documents as the source of LLC governance is a common but incorrect practice.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "115f572a1dac",
    "subtopicId": "3.1",
    "reviewed": false
  }
];

import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Two unrelated business partners purchase a brokerage account titled JTWROS. When one partner dies, what happens to the deceased partner's interest in the account?",
    "choices": [
      "It passes automatically to the surviving joint tenant outside of probate",
      "It is distributed under the deceased partner's will after probate",
      "It is divided equally among the deceased partner's children by intestate succession",
      "It is held in escrow by the broker-dealer until the estate is settled"
    ],
    "answerIndex": 0,
    "rationale": "Joint tenants with rights of survivorship hold equal undivided interests, and on the death of one tenant the interest passes by operation of law to the surviving tenant(s) outside probate. Choice B is the strongest distractor; it confuses JTWROS with tenants in common (TIC), where a deceased owner's interest does pass through the will/probate. Survivorship — not the will — controls the disposition of JTWROS property.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.I"
    },
    "difficulty": "easy",
    "id": "30c40fac3f45",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "The defining feature that distinguishes JTWROS from tenants in common (TIC) is:",
    "choices": [
      "TIC interests pass through the deceased owner's estate, while JTWROS interests pass automatically to surviving owners",
      "TIC requires owners to hold strictly equal shares while JTWROS permits unequal shares",
      "JTWROS interests are nontransferable during the owner's lifetime, while TIC interests are freely transferable",
      "TIC accounts may only be opened by spouses, while JTWROS may be opened by anyone"
    ],
    "answerIndex": 0,
    "rationale": "The hallmark difference is the survivorship feature: JTWROS automatically transfers a decedent's share to surviving owners, while a TIC interest passes through the decedent's estate by will or intestacy. Choice B reverses reality — JTWROS requires equal undivided interests, while TIC permits unequal ownership shares. Survivorship is the doctrinally defining attribute, not share equality.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.I"
    },
    "difficulty": "easy",
    "id": "82f532b9bc3e",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Three siblings open a brokerage account in which one contributed 50%, another 30%, and the third 20% of the funding. Which form of ownership best matches that contribution structure?",
    "choices": [
      "JTWROS, because survivorship preserves their original contribution percentages",
      "Tenancy by the entirety (TBE)",
      "Tenants in common (TIC), because TIC permits unequal ownership interests",
      "Community property with rights of survivorship"
    ],
    "answerIndex": 2,
    "rationale": "TIC is the only one of these forms that allows owners to hold unequal fractional interests, which precisely fits the 50/30/20 split. Choice A is wrong because JTWROS requires equal undivided interests under unity of interest. TBE is restricted to spouses, and CPWROS applies only to spouses in community property states.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.I"
    },
    "difficulty": "easy",
    "id": "163fbc6b7db9",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Tenancy by the entirety (TBE) is generally available only to:",
    "choices": [
      "Business partners forming an LLC",
      "Married spouses in states that recognize the form",
      "Domestic partners in any U.S. state",
      "A parent and a minor child"
    ],
    "answerIndex": 1,
    "rationale": "TBE is a marital form of ownership recognized only in certain states and reserved for spouses; both spouses are treated as a single legal entity owning the whole. The strongest distractor (C) is incorrect because TBE generally requires legal marriage, and even where domestic partnerships exist, most TBE states do not extend the form to non-spouses. TBE is therefore narrower than JTWROS, which any persons may use.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.I"
    },
    "difficulty": "easy",
    "id": "f6e166fbfeec",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "An IAR is reviewing how to title an investment account for a married couple in a state that recognizes tenancy by the entirety. Which of the following is a key practical advantage of TBE compared to JTWROS?",
    "choices": [
      "TBE allows each spouse to unilaterally sell or pledge the entire account",
      "TBE assets generally cannot be reached by creditors of only one spouse",
      "TBE eliminates federal estate tax on the assets at the first spouse's death",
      "TBE provides a full step-up in basis on 100% of the account at the first death"
    ],
    "answerIndex": 1,
    "rationale": "A leading practical feature of TBE is creditor protection: in most TBE states, a creditor of only one spouse generally cannot attach property held by the entirety. Choice A is wrong because TBE specifically prohibits unilateral transfer — both spouses must consent. Estate tax is unaffected by titling alone (C), and full step-up at the first death is generally a community-property feature, not TBE (D).",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.I"
    },
    "difficulty": "medium",
    "id": "d22b6b7089c6",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Community property with rights of survivorship (CPWROS) is a titling option available primarily in:",
    "choices": [
      "All 50 states",
      "Approximately nine community property states",
      "Only states that have adopted the Uniform Probate Code",
      "Only New York and Massachusetts"
    ],
    "answerIndex": 1,
    "rationale": "Community property is a marital regime recognized in roughly nine states (e.g., California, Texas, Arizona, Nevada, Washington, Idaho, Louisiana, New Mexico, Wisconsin), several of which permit a CPWROS variant adding survivorship to community property. Choice A is wrong because most states are common-law (separate property) states. The Uniform Probate Code does not create community property (C), and CPWROS is not unique to NY/MA — those are common-law states.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.I"
    },
    "difficulty": "medium",
    "id": "be0fab54652f",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A widowed client adds a transfer-on-death (TOD) designation to her individual brokerage account naming her two adult children equally. What is the primary planning result of this designation?",
    "choices": [
      "At her death, the account passes to the named beneficiaries outside of probate",
      "Half of the account is removed from her taxable estate during her lifetime",
      "The children gain immediate ownership and voting rights in the underlying securities",
      "The account is automatically retitled as JTWROS with the children"
    ],
    "answerIndex": 0,
    "rationale": "A TOD designation is a non-probate transfer mechanism: at the owner's death the assets pass directly to named beneficiaries, bypassing the will and probate. Choice B confuses TOD with a completed lifetime gift — a TOD designation is revocable and the assets remain wholly in the owner's taxable estate until death. The children have no current ownership rights (C), and TOD does not retitle the account into JTWROS (D).",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.I"
    },
    "difficulty": "medium",
    "id": "51ace38c05e2",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A pay-on-death (POD) designation is most commonly associated with:",
    "choices": [
      "Bank accounts such as checking, savings, and CDs",
      "Real estate held as JTWROS",
      "401(k) plan benefits, which use POD instead of beneficiary forms",
      "Restricted stock awarded to corporate executives"
    ],
    "answerIndex": 0,
    "rationale": "POD designations are the bank-account counterpart to TOD on brokerage accounts; they let depositors name a beneficiary who takes the funds directly at death without probate. Choice C is wrong because qualified plans such as 401(k)s use plan beneficiary designations governed by ERISA, not POD. Real estate is typically transferred by deed (with some states permitting TOD deeds), and restricted stock is governed by the equity-grant agreement.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "easy",
    "id": "05d6ce096ff7",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A beneficiary designation reads 'to my children, in equal shares, per stirpes.' One of the client's three children predeceases the client, leaving two grandchildren of that deceased child. How is the deceased child's share distributed?",
    "choices": [
      "Reverts pro rata to the two surviving children",
      "Divided equally between the two grandchildren of the deceased child",
      "Paid to the client's estate and distributed under the will",
      "Forfeited to the trust residuary"
    ],
    "answerIndex": 1,
    "rationale": "Per stirpes — 'by the roots' — directs that a deceased beneficiary's share pass to that beneficiary's descendants by representation; the two grandchildren split their parent's one-third share. Choice A reflects a per capita result, in which a predeceased beneficiary's share is reallocated only among surviving named beneficiaries. The point of per stirpes is exactly to keep a deceased beneficiary's branch whole rather than redistributing horizontally.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "26e9a2d54e6f",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Which statement best contrasts per stirpes with per capita beneficiary designations?",
    "choices": [
      "Per stirpes splits a deceased beneficiary's share among that beneficiary's descendants; per capita divides equally among the named beneficiaries who survive",
      "Per capita designations apply only to retirement accounts; per stirpes only applies to trusts",
      "Per stirpes is required by federal law on all IRAs; per capita is optional",
      "Per capita automatically includes the donor's spouse; per stirpes excludes the spouse"
    ],
    "answerIndex": 0,
    "rationale": "Per stirpes preserves a deceased beneficiary's branch by passing that share to the descendants of the predeceased beneficiary; per capita simply divides among the beneficiaries who are alive at distribution. Choice B is wrong because both designations are available across many account types and trusts — they describe how a share is distributed, not which account type uses them. Federal law does not mandate per stirpes on IRAs (C).",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "4cfd3063a142",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes a revocable living trust?",
    "choices": [
      "It removes the trust assets from the grantor's gross estate for federal estate tax purposes",
      "It permits the grantor to amend or terminate the trust during the grantor's lifetime",
      "It is prohibited from holding marketable securities such as stocks and bonds",
      "It eliminates the need for the grantor to file income tax returns on its earnings"
    ],
    "answerIndex": 1,
    "rationale": "The defining feature of a revocable living trust is that the grantor retains the power to amend or revoke the trust while alive and competent. Choice A is the most common misconception: because the grantor retains control, the assets remain in the grantor's gross estate for federal estate tax purposes. The trust's earnings are typically reported on the grantor's individual return as a grantor trust (so D is wrong), and trusts may hold securities.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "easy",
    "id": "def1c7a335bc",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A primary non-tax benefit of funding a revocable living trust during one's lifetime is:",
    "choices": [
      "Reducing the income tax on trust earnings",
      "Avoiding probate of the assets titled in the trust",
      "Eliminating estate tax for the grantor",
      "Shielding assets from the grantor's general creditors"
    ],
    "answerIndex": 1,
    "rationale": "Probate avoidance is the principal lifetime benefit: assets titled in the trust pass under the trust's terms at death without going through probate, providing privacy and faster administration. Choice C is the strongest distractor — but a revocable trust does NOT reduce estate tax because the grantor retains control, so the assets remain in the gross estate. There is also no income tax savings (A), and the grantor's creditors can typically reach revocable-trust assets (D).",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "78f4187632f9",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Which of the following is generally true of an irrevocable trust funded by the grantor with appreciated securities?",
    "choices": [
      "The grantor can change the beneficiaries at any time",
      "Once the gift to the trust is complete, the assets are typically removed from the grantor's gross estate",
      "The grantor is entitled to an immediate income tax deduction equal to the fair market value of the gift",
      "The trust is automatically subject to ERISA fiduciary rules"
    ],
    "answerIndex": 1,
    "rationale": "When the grantor relinquishes dominion and control, an irrevocable trust constitutes a completed gift and the assets are generally excluded from the grantor's gross estate at death. Choice A is wrong — irrevocability means the grantor cannot freely change beneficiaries. Funding a private (non-charitable) irrevocable trust does not produce an income tax deduction (C), and ERISA only governs employee benefit plans (D).",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "fe020d461bb0",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A testamentary trust is best described as:",
    "choices": [
      "A trust created and funded during the grantor's lifetime",
      "A trust created under the terms of a decedent's will and funded at the decedent's death",
      "A revocable arrangement that may hold only bank accounts",
      "A grantor trust used to bypass community property rules"
    ],
    "answerIndex": 1,
    "rationale": "A testamentary trust springs into existence under the will of the decedent and is funded out of the probate estate after death. Choice A describes an inter vivos (living) trust, which is the most likely confusion. There is no asset-class limitation as in C, and testamentary trusts are unrelated to community property regimes.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "139079634098",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A will is best described as a legal document that:",
    "choices": [
      "Avoids probate for the assets it disposes of",
      "Directs how a person's probate estate is to be distributed at death",
      "Overrides beneficiary designations on retirement plans",
      "Transfers assets to the named heirs immediately upon execution"
    ],
    "answerIndex": 1,
    "rationale": "A will speaks at death and instructs the probate court how to distribute probate property; it does not transfer property until death and does not avoid probate. Choice A is the typical misconception — a will is the very document that triggers probate, not a probate-avoidance tool. Beneficiary designations and survivorship titling control independently of the will (C is wrong), and execution alone transfers nothing (D).",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "easy",
    "id": "99165bb208a1",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A formally executed amendment to an existing will is called a:",
    "choices": [
      "Codicil",
      "Letter of intent",
      "Proxy",
      "Durable power of attorney"
    ],
    "answerIndex": 0,
    "rationale": "A codicil is a separate, formally executed instrument that modifies, adds to, or revokes a portion of an existing will, and it must generally satisfy the same execution formalities as the will itself. Choice D is the strongest distractor because a power of attorney also operates in the estate-planning space, but it grants lifetime authority — it does not amend a will. Letters of intent are non-binding, and proxies authorize voting of shares.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "6492be55a149",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A client dies without a valid will. The distribution of the client's probate estate is determined by:",
    "choices": [
      "The client's most recent beneficiary designations on bank and brokerage accounts",
      "State intestacy law",
      "Federal intestacy guidelines published by the SEC",
      "The will of the client's surviving spouse"
    ],
    "answerIndex": 1,
    "rationale": "When a person dies intestate, the probate court applies the state's intestacy statutes to determine heirs and shares. Choice A is wrong because beneficiary designations only control the specific accounts on which they were made — they do not govern probate property generally. There are no federal intestacy rules (C is wrong), and a spouse's will controls only the spouse's own estate (D).",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "2ee95adc2690",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A qualified domestic relations order (QDRO) is issued by a:",
    "choices": [
      "Federal bankruptcy court at the request of the plan participant",
      "State court, typically as part of a divorce, separation, or support proceeding",
      "The U.S. Department of Labor",
      "The plan administrator at the request of the spouse"
    ],
    "answerIndex": 1,
    "rationale": "A QDRO is a state domestic relations court order that creates or recognizes the right of an alternate payee (commonly a spouse, former spouse, child, or other dependent) to receive plan benefits. Choice D is a common misconception — the plan administrator does not issue the order; it merely reviews and approves whether the order qualifies under ERISA. Bankruptcy courts and DOL do not issue QDROs.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Employee Retirement Income Security Act of 1974"
    },
    "difficulty": "easy",
    "id": "a6b5752bf939",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Under a QDRO, when a portion of a 401(k) is awarded to an alternate payee (such as a former spouse) and is paid directly in cash to that payee, the distribution is generally:",
    "choices": [
      "Tax-free to the alternate payee because of the divorce decree",
      "Includible in the alternate payee's taxable income but exempt from the 10% early withdrawal penalty",
      "Taxable to the participant who originally earned the benefit",
      "Free of ordinary income tax but subject to the 10% early withdrawal penalty"
    ],
    "answerIndex": 1,
    "rationale": "A QDRO distribution to an alternate payee (spouse or former spouse) is taxed to the alternate payee as ordinary income, but is specifically exempted from the 10% early withdrawal penalty even if the alternate payee is under 59 1/2. Choice C is wrong because the QDRO shifts both the benefit and the income tax to the alternate payee; the participant is not taxed on amounts paid out under a valid QDRO.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Employee Retirement Income Security Act of 1974"
    },
    "difficulty": "medium",
    "id": "3b35b2d37e68",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Which of the following retirement arrangements is NOT divisible by a QDRO?",
    "choices": [
      "A traditional 401(k) plan",
      "A defined benefit pension plan",
      "A traditional IRA",
      "A 403(b) plan"
    ],
    "answerIndex": 2,
    "rationale": "QDROs apply only to ERISA-covered qualified retirement plans (401(k), defined benefit, 403(b), etc.). IRAs are not ERISA plans and are instead divided in divorce by a 'transfer incident to divorce' under the IRC. Choice B is the strongest distractor for test-takers because pensions are the classic textbook QDRO target — but they are divisible. The IRA is the outlier here.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Employee Retirement Income Security Act of 1974"
    },
    "difficulty": "medium",
    "id": "314cd1742191",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Contributions to a donor advised fund (DAF) sponsored by a public charity are generally:",
    "choices": [
      "Deductible as a charitable contribution in the year the gift to the DAF is made",
      "Deductible only when the sponsoring charity ultimately grants the funds to a working charity",
      "Treated as transfers to a private foundation for deduction-limit purposes",
      "Nondeductible because the donor retains advisory privileges over distributions"
    ],
    "answerIndex": 0,
    "rationale": "Because the DAF sponsor is a public charity and the contribution is irrevocable, the donor receives an immediate income tax charitable deduction in the year of contribution, even though grants to operating charities may be recommended later. Choice B is the strongest distractor; it confuses the tax-deduction timing with grant timing. DAFs receive public-charity (not private-foundation) deduction limits, and advisory privileges do not destroy the deduction.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "easy",
    "id": "02027be1be41",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A client wants the immediate income tax deduction of a charitable gift today but has not decided which specific charities to support. Which vehicle is most directly designed for that need?",
    "choices": [
      "A donor advised fund",
      "A pour-over will",
      "An irrevocable life insurance trust (ILIT)",
      "A qualified domestic relations order (QDRO)"
    ],
    "answerIndex": 0,
    "rationale": "A DAF is purpose-built for this fact pattern: contribute now (and deduct now), then recommend grants to specific operating charities later. A pour-over will is an estate-planning bridge to a living trust; an ILIT is a life-insurance estate-tax tool; and a QDRO divides retirement plans in divorce. None of those produce a current charitable deduction with deferred selection of grantees.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "99861a859c04",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "After a contribution has been made to a donor advised fund, the donor retains:",
    "choices": [
      "Legal ownership of the contributed assets",
      "Advisory privileges to recommend grants and, often, investment allocations, but not legal ownership",
      "The unilateral right to revoke the contribution at any time",
      "A statutory voting seat on the sponsoring charity's board of directors"
    ],
    "answerIndex": 1,
    "rationale": "DAF contributions are irrevocable; legal ownership transfers to the sponsoring public charity, while the donor retains advisory privileges to recommend grantees and investments. Choice A is wrong precisely because the donor parts with legal ownership in exchange for the immediate deduction. The contribution is not revocable (C), and donors do not get statutory governance roles in the sponsoring charity (D).",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "2074b8f499fa",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "JTWROS at common law traditionally requires the four 'unities' of time, title, interest, and possession. The unity of interest specifically requires that:",
    "choices": [
      "All joint tenants take title under the same instrument at the same time",
      "All joint tenants hold equal undivided ownership interests",
      "All joint tenants must use the property simultaneously",
      "All joint tenants must be related to one another by blood or marriage"
    ],
    "answerIndex": 1,
    "rationale": "Unity of interest requires that each joint tenant own an equal fractional, undivided share with the same duration and quality of interest. Choice A is the strongest distractor because it actually describes unities of time and title — relevant but distinct. Unity of possession concerns the right of all tenants to possess the whole, not actual simultaneous use, and JTWROS is not limited to relatives.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "hard",
    "id": "787b74130ea8",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A brokerage account is held by three siblings as tenants in common with shares of 60%/25%/15%. The 60% owner dies, leaving a will that gives 'all my property' to her spouse. What happens to her TIC interest?",
    "choices": [
      "It is divided pro rata among the surviving TIC owners",
      "It passes through her probate estate to her spouse as directed by the will",
      "It is forfeited because TIC has no survivorship feature",
      "It is automatically retitled as JTWROS between the surviving siblings"
    ],
    "answerIndex": 1,
    "rationale": "TIC interests have no survivorship: a deceased owner's fractional interest passes through that owner's probate estate under the will (or by intestacy), so the spouse receives the 60% share. Choice A is the textbook trap — that result describes JTWROS, not TIC. The TIC interest is not 'forfeited' (C), and TIC does not auto-convert to JTWROS at death (D).",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.I"
    },
    "difficulty": "hard",
    "id": "843c40befbad",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Which of the following actions by a JTWROS co-owner generally severs the joint tenancy and converts the relevant interest to a tenancy in common?",
    "choices": [
      "Adding a TOD beneficiary to the account",
      "Selling or transferring that owner's interest to a third party",
      "Receiving a margin call on the account",
      "Naming a successor in the owner's will"
    ],
    "answerIndex": 1,
    "rationale": "A unilateral conveyance of one tenant's interest to a third party destroys the unities of time and title for that share, severing the joint tenancy and turning the new owner's relationship with the remaining tenants into a tenancy in common. Choice D is the most tempting distractor — but a will cannot sever JTWROS, because the survivorship right operates the moment before death and prevents any will provision from reaching the joint asset.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "hard",
    "id": "c1302cc01da8",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A married couple lives in a community property state and titles their brokerage account simply as 'community property' (NOT as CPWROS). On the death of one spouse, the deceased spouse's one-half interest:",
    "choices": [
      "Passes automatically to the surviving spouse free of probate",
      "Passes under the deceased spouse's will or, if none, by state intestacy, generally subject to probate",
      "Reverts to the state under escheat rules",
      "Is automatically retitled into a separate JTWROS account"
    ],
    "answerIndex": 1,
    "rationale": "Plain community property gives each spouse testamentary control over their one-half interest, which passes through the will or intestacy and ordinarily goes through probate. Choice A is wrong because automatic non-probate transfer at death is the very feature that distinguishes CPWROS from ordinary community property — without the survivorship election, the half is part of the probate estate.",
    "citation": {
      "source": "NASAA",
      "ref": "Section III.I"
    },
    "difficulty": "hard",
    "id": "c3355f964c55",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A client establishes TOD designations on all of her individual brokerage accounts. Assuming her gross estate exceeds the federal estate tax exemption, the TOD-titled assets are:",
    "choices": [
      "Excluded from her gross estate because TOD avoids probate",
      "Included in her gross estate for federal estate tax purposes despite avoiding probate",
      "Treated as an irrevocable lifetime gift on the date the TOD form is signed",
      "Counted as community property regardless of the state of residence"
    ],
    "answerIndex": 1,
    "rationale": "Probate and the federal gross estate are different concepts; TOD avoids probate but does not remove assets from the taxable estate because the owner kept full lifetime control and could revoke the designation at any time. Choice A confuses probate avoidance with estate tax exclusion. A TOD form is not a completed gift (C), and it does not affect community property characterization (D).",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "9ed5439a32b1",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A client's IRA names her three children as primary beneficiaries 'per stirpes' in equal shares. One child predeceases her, leaving two surviving grandchildren of that child. The IRA is divided into:",
    "choices": [
      "Two equal shares between the two surviving children",
      "Three shares: one each to the surviving children and one one-third share split equally between the deceased child's two grandchildren",
      "Five equal shares among the surviving children and grandchildren",
      "One share paid to the eldest surviving child"
    ],
    "answerIndex": 1,
    "rationale": "Per stirpes preserves the deceased child's branch: each surviving child takes a one-third share, and the deceased child's one-third share is split equally between her two children, giving each grandchild a one-sixth share. Choice A is the per capita result that ignores representation. Choice C ignores the branch structure and treats all surviving descendants as equal claimants, which is also incorrect.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "630703da0b48",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "An attorney suggests that a high-net-worth client place appreciated stock into an irrevocable trust 'to remove the assets from the estate.' For estate-tax exclusion to be achieved, which of the following must typically be true?",
    "choices": [
      "The grantor retains the right to revoke or amend the trust",
      "The grantor relinquishes substantial control over and beneficial enjoyment of the trust assets",
      "The grantor remains the sole trustee with full discretionary investment authority",
      "The trust is structured as a revocable living trust"
    ],
    "answerIndex": 1,
    "rationale": "Estate-tax exclusion of trust assets generally requires that the grantor give up dominion and control such that the transfer is a completed gift; retained powers can pull the assets back into the gross estate. Choice A is the textbook trap — retaining the power to revoke or amend is precisely what causes inclusion under the IRC. Choices C and D similarly indicate retained control and produce inclusion.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "f5a24203bd60",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A 'pour-over will' is most commonly used to:",
    "choices": [
      "Direct any probate assets at death into a previously established living trust",
      "Avoid the need for any will at all",
      "Override beneficiary designations on retirement accounts",
      "Transfer property to a donor advised fund during the testator's life"
    ],
    "answerIndex": 0,
    "rationale": "A pour-over will captures any probate assets that were not retitled into the living trust during life and 'pours' them into the trust at death so they are administered under one document. Choice B is wrong because the pour-over will is itself a will. Beneficiary designations operate independently of the will (C), and lifetime DAF gifts are made directly, not via a will.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "4e7677b43670",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Which of the following statements about a QDRO is MOST accurate?",
    "choices": [
      "A QDRO can divide any retirement account, including IRAs, by court order",
      "A QDRO applies to ERISA-covered qualified plans; IRAs are divided in divorce by a 'transfer incident to divorce' rather than by QDRO",
      "A QDRO triggers immediate income tax to the participant on the entire vested plan balance",
      "A QDRO is enforceable only after the alternate payee has reached age 59 1/2"
    ],
    "answerIndex": 1,
    "rationale": "QDROs are creatures of ERISA and the Internal Revenue Code and apply only to qualified plans (401(k), 403(b), defined benefit, etc.). IRAs are not ERISA plans and are divided under IRC rules using a transfer incident to divorce. Choice A overstates QDRO scope. The participant is not taxed on the alternate payee's share (C), and there is no age-59 1/2 prerequisite for QDRO enforceability (D).",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Employee Retirement Income Security Act of 1974"
    },
    "difficulty": "hard",
    "id": "027b64c79305",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Compared to a private foundation, a donor advised fund typically offers:",
    "choices": [
      "Higher percentage-of-AGI deduction limits and lower administrative burden on the donor",
      "Lower deduction limits but full operational and grant-making control by the donor",
      "A required 5% annual minimum distribution regulated by the SEC",
      "Greater investment flexibility because contributions to a DAF are revocable"
    ],
    "answerIndex": 0,
    "rationale": "Because a DAF sponsor is a public charity, donors enjoy the higher AGI deduction limits applicable to public charity gifts (e.g., 60% for cash) and avoid the operational, recordkeeping, and excise-tax burdens of running a private foundation. Choice B inverts the trade-off — private foundations give donors more control but worse tax treatment. Foundations have a 5% payout requirement, but it is enforced by the IRS, not the SEC.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "9f0f7bb7810d",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "An IAR's client wants 'complete control' over how donated dollars are invested and granted, with binding authority. Which vehicle most closely meets that need?",
    "choices": [
      "A donor advised fund, because the donor retains legal ownership of contributed assets",
      "A private foundation, in which the donor (or family members) typically serve as directors and control grants and investments",
      "A 529 plan, because the account owner controls distributions",
      "A revocable living trust, because the trustee follows the grantor's binding instructions"
    ],
    "answerIndex": 1,
    "rationale": "A private foundation gives the donor (or family) board-level control over grants and investments — the trade-off is greater administrative burden, lower deduction limits, and a 5% annual payout requirement. Choice A is the strongest distractor: in a DAF the donor only has advisory privileges, not binding authority, and does not retain legal ownership. 529s and revocable trusts are not charitable vehicles in this sense.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "5347f357734d",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A married couple owns appreciated stock in a JTWROS account in a non-community-property state. When one spouse dies, the cost basis of the stock for federal income tax purposes:",
    "choices": [
      "Receives a step-up to fair market value on only the deceased spouse's half; the surviving spouse's half retains its original basis",
      "Receives a full step-up on 100% of the account",
      "Is unchanged on either half, since JTWROS avoids probate",
      "Is increased only after probate is closed"
    ],
    "answerIndex": 0,
    "rationale": "In a common-law (non-community-property) state, only the decedent's includable half of JTWROS property receives a date-of-death basis adjustment; the survivor's half keeps its historical basis. Choice B describes the community-property double step-up, which only applies to community property (or CPWROS) — not to JTWROS in a common-law state. Probate timing is irrelevant to the basis adjustment.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "55b165de0d13",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Two unmarried co-owners hold a brokerage account as JTWROS, and each has contributed equally to funding the account. On the first owner's death, what portion of the account is included in the deceased owner's gross estate for federal estate tax purposes?",
    "choices": [
      "Zero, because JTWROS assets pass outside the probate estate",
      "100% of the date-of-death value, less the portion the survivor can prove was attributable to the survivor's own contributions",
      "Exactly 50% by statute, regardless of contributions",
      "25% of the account value, regardless of contributions"
    ],
    "answerIndex": 1,
    "rationale": "For non-spousal JTWROS, the IRC's 'consideration furnished' rule includes 100% of the joint property in the deceased owner's gross estate except to the extent the survivor can prove their own contribution. Choice C reflects the special automatic 50/50 rule that applies only to spousal JTWROS, not to unmarried co-owners. Probate avoidance does not equal estate-tax exclusion (A).",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "eabe776aeccd",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "An IAR is opening a JTWROS account for a parent and an adult child. From an estate-planning standpoint, the IAR should specifically caution that:",
    "choices": [
      "Each owner has equal undivided rights, so the child has full authority to withdraw, pledge, or transact in the assets even during the parent's lifetime",
      "JTWROS automatically terminates if either owner moves to another state",
      "The account cannot hold mutual funds because of the joint titling",
      "All withdrawals are treated as taxable income to the parent"
    ],
    "answerIndex": 0,
    "rationale": "The lifetime exposure is the central caution: in JTWROS, the adult child becomes a present co-owner and can unilaterally withdraw or transact, and the assets are also exposed to the child's creditors and divorce risk. Choice B is incorrect — JTWROS does not terminate by relocation. There is no asset-class restriction (C), and tax treatment of withdrawals is not based on titling (D).",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "1f1eb71bf55b",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Which type of trust is created and takes effect during the grantor's lifetime?",
    "choices": [
      "Testamentary trust",
      "Living (inter vivos) trust",
      "Pour-over trust",
      "Charitable remainder testamentary trust"
    ],
    "answerIndex": 1,
    "rationale": "An inter vivos, or living, trust is created and funded during the grantor's lifetime; it can be either revocable or irrevocable. Choice A is the typical confusion — a testamentary trust is created under a will and arises only at death. 'Pour-over trust' is not a standard category; the term refers to a pour-over will that funds an existing living trust at death.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "easy",
    "id": "144a7efba854",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "Naming a beneficiary directly on a retirement account or life insurance policy generally:",
    "choices": [
      "Is overridden by any contrary provision in the owner's will",
      "Allows the proceeds to pass directly to the named beneficiary outside of probate",
      "Requires court approval before the proceeds can be paid",
      "Triggers an immediate gift tax to the beneficiary at the time of designation"
    ],
    "answerIndex": 1,
    "rationale": "A valid beneficiary designation is a non-probate transfer mechanism that controls disposition at death — proceeds are paid directly to the beneficiary on filing a death claim. Choice A is the most common misconception: beneficiary designations override the will for the asset to which they apply. Court approval is not generally required (C), and a designation is revocable, so no gift occurs at the time of naming (D).",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "difficulty": "easy",
    "id": "02e0ccf4ba59",
    "subtopicId": "3.9",
    "reviewed": false
  },
  {
    "stem": "A client establishes a revocable living trust and serves as both grantor and trustee. For federal income tax purposes, the trust's earnings while the grantor is alive are generally:",
    "choices": [
      "Taxed at the highest compressed trust rates",
      "Reported on the grantor's individual Form 1040 as a 'grantor trust'",
      "Tax-exempt because they are held inside a trust",
      "Reported on each beneficiary's individual return regardless of whether distributions were made"
    ],
    "answerIndex": 1,
    "rationale": "A revocable living trust is a 'grantor trust' for income tax purposes; all items of income, deduction, and credit flow through to the grantor's individual return as if the trust did not exist. Choice A is the strongest distractor — the compressed trust brackets apply to non-grantor trusts that pay tax at the entity level, not to grantor trusts. Trusts are not categorically tax-exempt (C).",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "96369605ae4b",
    "subtopicId": "3.9",
    "reviewed": false
  }
];

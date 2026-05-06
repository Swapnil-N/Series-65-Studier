import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Regulation of Investment Adviser Representatives: Definition, Registration, and Maintenance",
  "bodyMd": "An Investment Adviser Representative (IAR) is the human face of an advisory firm — the licensed individual who actually meets with clients, recommends portfolios, or manages their money. The Series 65 itself is the qualification examination most state administrators require before granting an IAR license, so understanding how IARs are defined, registered, and maintained sits at the heart of what the exam tests. Regulation here is layered: while advisory firms split between federal-covered (SEC) and state-registered, **individual IARs are always registered at the state level**. This lesson covers the statutory definition of an IAR, who must register and who is excluded, who has registration authority, and the post-registration duties — Form U4 amendments, reportable-event disclosures, and continuing education — that keep that registration in good standing.\n\n### Defining an Investment Adviser Representative\n\nThe federal definition is in **Section 202(a)(17)** of the Investment Advisers Act of 1940, which defines an IAR as a 'supervised person' of an investment adviser who, on behalf of the firm, provides investment advice. The SEC narrows this for state-registration purposes in **Rule 203A-3**: at a federal-covered firm, only a supervised person who has *more than five* retail clients (or for whom retail clients exceed 10% of the client base) is an IAR for state-registration purposes, and the state may require registration only if the IAR has a **place of business** in that state. 'Place of business' is itself defined inside Rule 203A-3 as an office where the IAR regularly provides advisory services or any other location held out to the public as such.\n\nThe parallel state-level definition is in **USA Section 102(15)**, which captures any individual — partner, officer, director, or other person — employed by or associated with an investment adviser who:\n\n- makes recommendations or otherwise renders advice on securities,\n- manages accounts or portfolios of clients,\n- determines which recommendations or advice should be given,\n- solicits, offers, or negotiates the sale of advisory services, or\n- directly **supervises** any employee doing any of the above.\n\nClerical or ministerial staff — receptionists, IT support, bookkeepers — are *excluded* from the definition under USA Section 102(15) because their work is purely administrative, not advisory.\n\n### Registration Authority: Why Only the State Registers IARs\n\nBecause **Section 203A(b)** of the Advisers Act preserves state authority over individual representatives, **there is no SEC registration for IARs**. Whether the firm is federal-covered or state-registered, the IAR registers with the state securities administrator by filing **Form U4** through the CRD/IARD system operated by **FINRA** on behalf of the states.\n\nTwo scenarios appear repeatedly on the exam:\n\n1. **IAR of a state-registered firm.** Registers in the firm's home state and in any other state where the IAR has a place of business or exceeds the state's de minimis client threshold. Most states adopt a *five-client* de minimis under variants of **NASAA Model Rule 203**: an IAR with no place of business in a state and five or fewer non-institutional clients there over a 12-month period need not register in that state.\n2. **IAR of a federal-covered firm.** Registers only in states where the IAR has a 'place of business,' per Section 203A(b) and Rule 203A-3. The client count is irrelevant; the place-of-business test controls.\n\nA fee is paid to each registering state (and to the CRD operator) at filing and again on annual renewal. The applicant must also pass the **Series 65** — or hold an equivalent FINRA combination such as Series 7 + Series 66 — pursuant to **USA Section 201** and the **NASAA Series 65 Content Outline**.\n\nFully **excluded from IAR registration** are clerical/ministerial staff (USA Section 102(15)) and persons whose advisory activities are *solely incidental* to a parallel exclusion enjoyed by the firm itself — for example, employees of an excluded bank or broker-dealer under **Section 202(a)(11)(A)** and **Section 202(a)(11)(C)** of the Advisers Act.\n\n### Post-Registration: Updates, Reportable Events, and CE\n\nOnce registered, an IAR's job is to keep the public CRD record accurate. Three duties dominate the exam.\n\n**1. Form U4 amendments.** Material changes — a new residence, a new outside business activity, a new disciplinary action — must be reported on a Form U4 amendment. Under parallel state requirements rooted in **NASAA Model Rule 204**, the deadline for most updates is **within 30 days** of the IAR learning of the event; statutory-disqualification events shorten that window to **10 days**. When an IAR leaves a firm, the firm files **Form U5** within **30 days** of termination and delivers a copy to the IAR within the same window.\n\n**2. Reportable events ('disclosure questions').** Form U4 requires affirmative disclosure of:\n\n- Criminal charges or convictions (felonies and many investment-related misdemeanors).\n- Regulatory actions by the SEC, NASAA-member states, FINRA, the CFTC, or foreign regulators.\n- Civil judicial actions involving investment-related conduct.\n- Customer complaints, arbitrations, and settlements above the threshold.\n- Personal financial events: bankruptcy filings within the last ten years, unsatisfied judgments or liens, and bonding-company actions.\n- Termination after allegations of violation, fraud, or theft.\n\nFalse or misleading answers on Form U4 are themselves grounds for denial, suspension, or revocation under **USA Section 204** and are explicitly listed as unethical conduct in the **NASAA Statement of Policy on Unethical or Dishonest Practices of IAs and IARs**.\n\n**3. Continuing education.** The **NASAA IAR Continuing Education Model Rule** (effective in adopting states from January 1, 2022) requires every IAR to complete **12 CE credits per reporting year**, split as:\n\n$$\n\\text{Annual CE} = \\underbrace{6\\ \\text{credits Products \\& Practice}}_{\\text{technical}} + \\underbrace{6\\ \\text{credits Ethics \\& Professional Responsibility}}_{\\text{ethics}}\n$$\n\nCredits must come from NASAA-authorized providers. Failure to complete CE by **December 31** moves the IAR to '**CE inactive**' status; a renewal application is denied until the deficit is cured. Two consecutive missed years can require re-examination.\n\n### Worked Example\n\nCarlos passed the Series 65 last month and has just been hired by **Polaris Wealth, LLC** — a state-registered IA whose home state is California, with offices in Los Angeles and Phoenix. Carlos works out of LA but visits Phoenix two days each month to meet clients in a permanent shared office. Polaris currently has no clients in Nevada.\n\n1. **California (firm's home state).** Carlos files Form U4 through CRD/IARD and pays the California fee; his passing Series 65 score satisfies USA Section 201.\n2. **Arizona.** Carlos has a *place of business* in Phoenix (he meets clients there regularly), so under NASAA Model Rule 203 he must register in Arizona regardless of client count.\n3. **Nevada.** No place of business; no clients. No registration needed unless he later exceeds Nevada's de minimis (typically five non-institutional clients in 12 months).\n4. **CE.** Both California and Arizona are CE-adopting states. Beginning the calendar year after his initial registration, Carlos must complete:\n\n$$\n12 = 6_{\\text{P\\&P}} + 6_{\\text{Ethics}}\\ \\text{credits per year}\n$$\n\n5. **Reportable event mid-year.** Carlos files personal bankruptcy in October. He must file an amended Form U4 within **30 days** disclosing the bankruptcy under NASAA Model Rule 204; failure to do so is itself unethical conduct.\n6. **Termination.** If Polaris fires Carlos in December, Polaris files Form U5 within 30 days and delivers a copy to Carlos. His registration is 'parked' on CRD until a new firm files a U4 transfer.\n\n### Summary\n\nAn IAR is an individual associated with an advisory firm who gives advice, manages accounts, solicits clients, or supervises others doing those things — defined federally in **Section 202(a)(17)** and refined for state purposes by **Rule 203A-3**, with a parallel state definition in **USA Section 102(15)** that excludes clerical staff. Registration is **always state-level**: file Form U4 through CRD/IARD, pay the fee, and pass the Series 65. Maintenance means amending Form U4 within 30 days of any material change, disclosing reportable events truthfully, completing 12 NASAA CE credits per year (6 P&P + 6 Ethics), and tendering Form U5 within 30 days of termination.",
  "citations": [
    {
      "source": "IA_ACT",
      "ref": "Investment Advisers Act of 1940"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 202(a)(17)"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 203A"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 203A(b)"
    },
    {
      "source": "IA_ACT",
      "ref": "Rule 203A-3"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 202(a)(11)(A)"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 202(a)(11)(C)"
    },
    {
      "source": "SEC",
      "ref": "Form U4"
    },
    {
      "source": "SEC",
      "ref": "Form U5"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule 203"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule 204"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule on Continuing Education"
    },
    {
      "source": "NASAA",
      "ref": "NASAA IAR Continuing Education Model Rule"
    },
    {
      "source": "NASAA",
      "ref": "NASAA Statement of Policy on Unethical or Dishonest Practices of IAs and IARs"
    },
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "OTHER",
      "ref": "FINRA"
    }
  ],
  "subtopicId": "4.2",
  "reviewed": false
};

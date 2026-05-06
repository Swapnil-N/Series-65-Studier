import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Regulation of Investment Advisers: Federal-Covered vs. State-Registered",
  "bodyMd": "Investment advisers are the central professionals you will be tested on as a Series 65 candidate, because the exam is itself a state-administered qualification for becoming an Investment Adviser Representative (IAR). This lesson explains who counts as an investment adviser, where they register, what they file after registering, what records they must keep, and how their representatives are supervised. Throughout, the key idea is a two-track system: the **Investment Advisers Act of 1940** governs federal-covered advisers, while the **Uniform Securities Act** (USA) and the NASAA Model Rules govern state-registered advisers and IARs.\n\n### Who Is an Investment Adviser?\n\nThe federal definition is in **Section 202(a)(11)** of the Investment Advisers Act of 1940: any person who, for compensation, engages in the business of advising others — directly or through publications — as to the value of securities or the advisability of investing in, buying, or selling securities. Test-takers memorize this as the **ABC test**: **A**dvice about securities, as a regular **B**usiness, for **C**ompensation. All three prongs must be satisfied. A neighbor who tells you over coffee that ABC stock looks cheap is not an adviser; a person who charges a flat fee to publish weekly stock recommendations generally is.\n\nSection 202(a)(11) also lists **statutory exclusions**. Banks and bank holding companies are excluded under **Section 202(a)(11)(A)**. Lawyers, accountants, teachers, and engineers (the \"LATE\" mnemonic) are excluded under **Section 202(a)(11)(B)** when their advice is solely incidental to their profession. Broker-dealers are excluded under **Section 202(a)(11)(C)** when advice is incidental to brokerage and no special compensation is received. Publishers of bona fide newspapers and magazines are excluded under **Section 202(a)(11)(D)**, and advisers solely on U.S. government securities under **Section 202(a)(11)(E)**.\n\nA separate category — the **Exempt Reporting Adviser (ERA)** — was created by Title IV of the **Dodd-Frank Wall Street Reform and Consumer Protection Act**. ERAs are not exempt from the Act, only from full registration; they still file portions of **Form ADV Part 1A** electronically through the IARD. The two ERA buckets are venture-capital fund advisers and private-fund advisers managing less than $150 million in U.S. private-fund assets, both anchored in **Section 203** of the Act.\n\n### Federal-Covered vs. State-Registered: The AUM Thresholds\n\n**Section 203A** of the Investment Advisers Act splits the universe by **assets under management (AUM)**. The thresholds are operationalized in **Rule 203A-1**:\n\n$$\n\\text{Required SEC registration:}\\quad \\text{AUM} \\geq \\$110\\text{M}\n$$\n\n$$\n\\text{Optional SEC registration (\"buffer\"):}\\quad \\$100\\text{M} \\leq \\text{AUM} < \\$110\\text{M}\n$$\n\n$$\n\\text{Mandatory withdrawal from SEC:}\\quad \\text{AUM} < \\$90\\text{M}\n$$\n\nAdvisers below those numbers generally register with the **state(s)** where they have a place of business or more than five clients (the **de minimis** rule of **USA Section 102(11)** / Section 222 of the Act). Three additional categories are **federal-covered** regardless of size: advisers to registered investment companies, advisers operating in fifteen or more states (the multi-state exemption under **Rule 203A-2**), and pension consultants meeting the rule's threshold.\n\nA practical corollary: a \"mid-sized adviser\" with $25M–$100M of AUM normally registers at the **state** level under Section 203A(a), unless the home state does not examine advisers (for instance, Wyoming historically did not), in which case the adviser must register with the SEC.\n\n### Notice Filing, Form ADV, and Post-Registration Duties\n\n**Notice filing** is the bridge between the two systems. Under **USA Section 303** and **NASAA Model Rule on Notice Filings**, a federal-covered adviser is not required to **register** with a state but may still be required to **notice file** — submit Form ADV plus the state's filing fee — in any state where it has clients or a place of business. The state cannot examine the federal-covered firm's books, but it can collect fees and police antifraud violations.\n\nEvery applicant — federal or state — files **Form ADV** through the IARD/CRD system. The form has three pieces:\n\n- **Form ADV Part 1A** — regulator-facing disclosure of ownership, AUM, disciplinary history.\n- **Form ADV Part 2A** — the plain-English \"brochure\" given to clients.\n- **Form ADV Part 2B** — brochure supplement on individual IARs.\n- **Form ADV Part 3** (a/k/a **Form CRS**) — the relationship summary for retail clients.\n\nUnder **Rule 204-1** of the Act, every adviser must file an **annual updating amendment** within 90 days of fiscal-year end and must amend promptly when material information changes. Under **Rule 204-3** (the \"brochure rule\"), an adviser must deliver Part 2A and 2B at or before entering into an advisory contract and offer or deliver updates annually.\n\n**Books and records** for federal advisers are governed by **Rule 204-2**: maintain required journals, ledgers, advertisements, contracts, and client communications for **five years** from the end of the fiscal year in which the last entry was made, with the first **two years** kept in an easily accessible place at the principal office. The parallel state regime is the **NASAA Model Rule on Recordkeeping**, which mirrors the five-year period.\n\n### IAR Registration, Supervision, and Continuing Education\n\nIndividuals who give advice on behalf of a firm are **Investment Adviser Representatives**. They register through **Form U4** and terminate through **Form U5**. Federal-covered firms register their IARs only at the state level — there is no SEC IAR registration. **Section 203A(b)** preserves state authority over IARs even when their firm is federally covered.\n\nSupervision duties flow from **Section 203(e)** and **Section 204A** of the Act, which require advisers to establish, maintain, and enforce written policies and procedures reasonably designed to prevent the misuse of material non-public information. The NASAA-side supervisory standard is set by the **NASAA Investment Adviser Model Rule** (codified by states under USA Section 411 and analogous provisions in **USA Section 412**).\n\n**Continuing education** is the newest layer. The **NASAA IAR Continuing Education Model Rule** (adopted 2020, effective in adopting states from January 1, 2022) requires every IAR registered in an adopting state to complete **12 CE credits per year**, split as:\n\n$$\n\\text{12 CE credits} = \\underbrace{6\\ \\text{Products & Practice}}_{\\text{technical}} + \\underbrace{6\\ \\text{Ethics & Professional Responsibility}}_{\\text{ethics}}\n$$\n\nFailure to complete CE results in \"CE inactive\" status; renewal is denied until the deficit is cured.\n\n### Worked Example\n\nApex Advisors LLC manages **$140 million** for individual clients in three states (Texas, Oklahoma, Arkansas) and has **22 IARs**. One IAR, Maria, has just been hired in Arkansas. Walk through the regulatory map:\n\n1. **Firm registration.** AUM = $140M, which exceeds the $110M required-registration line of Rule 203A-1, so Apex is **federal-covered** and registers with the SEC on Form ADV Part 1A. \n2. **Notice filing.** Under USA Section 303, Apex must notice file Form ADV in TX, OK, and AR and pay each state's fee. \n3. **IAR registration.** Maria registers with the **Arkansas** Securities Department on Form U4; the SEC does not register IARs. \n4. **Books and records.** Apex keeps required records under Rule 204-2 for five years, first two on-site. \n5. **Brochure delivery.** Apex delivers Form ADV Part 2A and Maria's Part 2B before signing Maria's first advisory contract (Rule 204-3). \n6. **CE.** If Arkansas has adopted the NASAA IAR CE Model Rule, Maria owes 12 credits in her first full calendar year of registration.\n\nIf next year Apex's AUM drops to $85M, it falls below the $90M floor of Rule 203A-1 and must **withdraw** from SEC registration on Form ADV-W, then state-register in TX, OK, and AR.\n\n### Summary\n\nFederal-covered advisers (≥$110M AUM, RIC advisers, multi-state advisers) register with the SEC under the Investment Advisers Act of 1940 and **notice file** with the states. Smaller advisers register with the state under the Uniform Securities Act and NASAA Model Rules. Both groups file Form ADV, deliver the Part 2 brochure, keep five years of books, and supervise IARs registered on Form U4. The NASAA IAR CE Model Rule adds 12 annual CE credits (6 P&P + 6 Ethics) for IARs in adopting states.",
  "citations": [
    {
      "source": "IA_ACT",
      "ref": "Investment Advisers Act of 1940"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 202(a)(11)"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 202(a)(11)(A)"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 202(a)(11)(B)"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 202(a)(11)(C)"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 202(a)(11)(D)"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 202(a)(11)(E)"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 203"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 203A"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 203A(a)"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 203A(b)"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 204A"
    },
    {
      "source": "IA_ACT",
      "ref": "Rule 203A-1"
    },
    {
      "source": "IA_ACT",
      "ref": "Rule 203A-2"
    },
    {
      "source": "IA_ACT",
      "ref": "Rule 204-1"
    },
    {
      "source": "IA_ACT",
      "ref": "Rule 204-2"
    },
    {
      "source": "IA_ACT",
      "ref": "Rule 204-3"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 222"
    },
    {
      "source": "SEC",
      "ref": "Dodd-Frank Wall Street Reform and Consumer Protection Act"
    },
    {
      "source": "SEC",
      "ref": "Dodd-Frank Title IV"
    },
    {
      "source": "SEC",
      "ref": "Form ADV"
    },
    {
      "source": "SEC",
      "ref": "Form ADV Part 1A"
    },
    {
      "source": "SEC",
      "ref": "Form ADV Part 2A"
    },
    {
      "source": "SEC",
      "ref": "Form ADV Part 2B"
    },
    {
      "source": "SEC",
      "ref": "Form ADV Part 3"
    },
    {
      "source": "SEC",
      "ref": "Form CRS"
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
      "ref": "Uniform Securities Act of 2002"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(11)"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 303"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule on Notice Filings"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule on Recordkeeping"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Investment Adviser Model Rule"
    },
    {
      "source": "NASAA",
      "ref": "NASAA IAR Continuing Education Model Rule"
    },
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    }
  ],
  "subtopicId": "4.1",
  "reviewed": false
};

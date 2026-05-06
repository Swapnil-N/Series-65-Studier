import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Remedies and Administrative Provisions",
  "bodyMd": "State securities laws would have no teeth without the people and procedures that enforce them. This lesson covers the third leg of state regulation — the **Administrator's authority**, the **administrative actions** an Administrator can take against registrants and issuers, and the **civil and criminal penalties** that flow from violating the act. Most rules below come from the Uniform Securities Act (USA), the model statute drafted by NASAA and adopted in some form by every state. The exam draws specific numbers and procedures from the USA, so memorize the figures as you read.\n\n### The Authority of the State Securities Administrator\n\nEvery state appoints a **securities Administrator** — sometimes called the commissioner, secretary of state, or director of the state securities division. Under USA Section 401 the Administrator is defined as the officer charged with administering the Act, and Sections 402–404 lay out what that officer is empowered to do.\n\nThe Administrator's authority falls into three buckets:\n\n1. **Rulemaking.** The Administrator may adopt, amend, and rescind **rules and forms** and issue **interpretative opinions** clarifying how the Act applies to specific facts. Rules have the force of law within the state; forms standardize filings such as state registration of securities and the registration of agents and IARs. NASAA itself drafts Model Rules — for example the **NASAA Investment Adviser Model Rule** and the **NASAA Model Rule on Custody** — that states then adopt to keep their requirements roughly uniform.\n2. **Investigations.** The Administrator may conduct public or private **investigations** inside or outside the state, **administer oaths**, **subpoena witnesses and documents**, and require sworn statements. The Administrator does not need to prove a violation has actually occurred to open an investigation — a reasonable belief is enough.\n3. **Coordination.** The Administrator can share information with the SEC, FINRA, and other state Administrators and can rely on filings made in other jurisdictions. The **NASAA Investment Adviser Coordinated Review Committee** is one such cooperation mechanism for large multistate IA filings.\n\n**Jurisdictional reach** is wider than students expect. The Administrator has authority over an offer or sale that **originates in the state**, **is directed into the state**, or **is accepted in the state**. Even an out-of-state adviser making a single phone call into a state can trigger state jurisdiction, subject to the de minimis safe harbors under Sections 403 and 404.\n\n### Administrative Actions\n\nWhen the Administrator believes a violation has occurred or is about to occur, the Act provides several administrative remedies — actions taken by the Administrator's office, not by a court.\n\n**Stop orders** can suspend the registration of a security being offered in the state. The Administrator must give the issuer notice and an opportunity for a hearing, and must issue findings of fact and conclusions of law in writing. A stop order ends a public offering until the deficiency is cured.\n\n**Denial, suspension, and revocation** of a broker-dealer, agent, investment adviser, or IAR registration is permitted only for cause. Cause includes filing a misleading application, a felony or securities-related misdemeanor conviction within ten years, an injunction, willful violations of the Act, insolvency, lack of qualifications, or unethical practices listed in the **NASAA Statement of Policy on Dishonest and Unethical Practices of Broker-Dealers and Agents** and the **NASAA Statement of Policy on Unethical or Dishonest Practices of IAs and IARs**. Lack of qualifications alone cannot be the sole basis for denying a registrant who has otherwise met training and experience standards.\n\n**Cease-and-desist orders** can be issued — with or without a prior hearing — when the Administrator determines that a person has engaged in or is about to engage in conduct that would violate the Act. A summary order issued without a hearing must be followed promptly by an opportunity for one.\n\n**Procedural protections.** Anyone subject to an order is entitled to **written notice**, a **statement of reasons**, and a **hearing** if requested in writing within fifteen days. Final orders are subject to **judicial review**; the respondent generally has **60 days** after the order's entry to appeal in state court.\n\n### Civil and Criminal Penalties\n\nBeyond administrative actions, the USA gives both private parties and prosecutors their own remedies.\n\n**Civil liability** under the Act lets a buyer who purchased securities sold in violation of the Act sue the seller for **rescission**. The buyer recovers the **consideration paid**, plus **interest at the legal rate** (set by state law), **less any income received** on the security, in exchange for tendering the security back. If the buyer no longer owns the security, the recovery is the same calculation minus the price received on resale. Reasonable attorney fees and court costs are also recoverable.\n\nSymbolically, for a buyer who still holds the security:\n\n$$ \\text{Recovery} = P + I - D $$\n\nwhere $P$ is the purchase price, $I$ is interest at the legal state rate from the date of payment, and $D$ is income (interest or dividends) received by the buyer. For a buyer who has already sold the security:\n\n$$ \\text{Recovery} = P + I - D - S $$\n\nwhere $S$ is the sale proceeds.\n\nThe **statute of limitations** for civil claims under the 1956 Uniform Securities Act is the **earlier of two years from discovery or three years from the sale**.\n\n**Criminal penalties** apply only to **willful** violations. A person convicted of a willful violation is subject to a fine of up to **\\$5,000**, imprisonment of up to **3 years**, or both, per count. The criminal **statute of limitations is five years** from the date of the violation. Critical exam point: lack of knowledge of the *rule* allegedly violated is **not** a defense — but the prosecution must still prove the underlying act was committed knowingly.\n\n**Other liabilities.** The Administrator may also seek an **injunction** in court to halt ongoing violations, ask a court to **appoint a receiver** over an insolvent registrant's assets, and **bar** an individual from the industry. NASAA Statements of Policy provide the detailed list of conduct considered \"dishonest or unethical\" and therefore actionable, and the antifraud provisions in Sections 501–504 reach fraud in both the sale of securities and the provision of investment advice.\n\n### Worked Example\n\nA client buys \\$20,000 of an unregistered, non-exempt security from a broker-dealer and holds it for 18 months. During that time the client receives \\$400 in dividends. The state's legal rate of interest is 8%. The Administrator finds the sale violated the registration provisions. What can the client recover?\n\nCompute interest first:\n\n$$ I = \\$20{,}000 \\times 8\\% \\times 1.5 = \\$2{,}400 $$\n\nApply the rescission formula for a buyer who still owns the security:\n\n$$ \\text{Recovery} = P + I - D = \\$20{,}000 + \\$2{,}400 - \\$400 = \\$22{,}000 $$\n\nThe client tenders the security back to the seller and recovers **\\$22,000**, plus reasonable attorney fees and court costs. If the client had instead already sold the position for \\$15,000 before suing, the recovery would be $\\$22{,}000 - \\$15{,}000 = \\$7{,}000$.\n\nIf the violation was willful, the broker-dealer and the responsible individuals also face up to **\\$5,000** in fines and **3 years** imprisonment per count, plus possible administrative revocation of registration.\n\n### Summary\n\nThe Administrator runs the show at the state level: rulemaking, investigations, subpoenas, and coordination with other regulators. Administrative actions include **stop orders** on securities registrations, **denial, suspension, or revocation** of broker-dealer, agent, IA, and IAR registrations, and **cease-and-desist orders** — all backed by notice-and-hearing protections and a 60-day judicial-review window. Civil liability lets harmed buyers **rescind** the sale, recovering price plus interest less income, subject to the **earlier of 2 years from discovery or 3 years from sale**. Criminal penalties for **willful** violations are up to **\\$5,000**, **3 years**, or both, with a **5-year** statute of limitations. Memorize the dollar amounts, the time periods, and the rescission formula — they appear on the exam in nearly every form.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "Section IV"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Securities Act of 1956"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Securities Act of 2002"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 402"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 403"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 404"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 501"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 502"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 503"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 504"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Investment Adviser Model Rule"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule on Custody"
    },
    {
      "source": "NASAA",
      "ref": "NASAA Investment Adviser Coordinated Review Committee"
    },
    {
      "source": "NASAA",
      "ref": "NASAA Statement of Policy on Dishonest and Unethical Practices of Broker-Dealers and Agents"
    },
    {
      "source": "NASAA",
      "ref": "NASAA Statement of Policy on Unethical or Dishonest Practices of IAs and IARs"
    }
  ],
  "subtopicId": "4.6",
  "reviewed": false
};

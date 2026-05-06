import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Ethical Practices and Fiduciary Obligations",
  "bodyMd": "The fiduciary duty owed by an investment adviser (IA) is the central ethical concept tested on the Series 65. Section 206 of the Investment Advisers Act of 1940 makes it unlawful for any adviser to engage in fraudulent, deceptive, or manipulative practices. The Supreme Court interpreted Section 206 as imposing a federal fiduciary standard that requires the adviser to act in the client's best interest, fully disclose all material conflicts of interest, and seek best execution. This lesson translates that abstract duty into the specific compliance obligations the exam tests.\n\n### Compensation, Custody, and Discretion\n\nAdvisers are typically paid through (1) a percentage of assets under management, (2) hourly or flat fees, (3) commissions if they are dually registered as broker-dealers, or (4) performance-based fees. **Performance fees** are restricted by Section 205(a)(1) of the Advisers Act and may only be charged to a 'qualified client' as defined in Rule 205-3 — generally a natural person or company with at least $1.1 million managed by the adviser or a $2.2 million net worth (excluding primary residence). All compensation arrangements must be disclosed in plain English on **Form ADV Part 2A** before or at the time of contracting.\n\nA 'fulcrum' performance fee adjusts compensation symmetrically around a benchmark:\n\n$$\\text{Fee} = \\text{Base Fee} \\pm \\alpha \\times (R_{portfolio} - R_{benchmark})$$\n\n**Soft dollars** describe the practice of an adviser directing brokerage commissions to a firm that, in return, provides research or execution services. The Section 28(e) safe harbor of the Securities Exchange Act of 1934 only protects this when the goods or services are eligible 'research or brokerage' that demonstrably benefits clients; everything else (rent, computers, marketing materials) must be paid in hard dollars or the arrangement becomes a breach of fiduciary duty.\n\n**Custody** is defined in Rule 206(4)-2 as holding, directly or indirectly, client funds or securities, or having any authority to obtain possession of them. An adviser deemed to have custody must:\n\n- Hold client assets at a 'qualified custodian'\n- Ensure account statements are delivered at least quarterly directly to clients\n- Submit to an annual surprise verification by an independent public accountant\n\nMost states adopt the NASAA Model Rule on Custody, which adds heightened net-worth or surety-bond requirements. Merely being authorized to deduct advisory fees from a client account is technically custody, but is generally exempt from the surprise audit if specified safeguards are followed.\n\n**Discretion** is the authority to decide what security, in what quantity, and at what price to trade without first contacting the client. 'Time-and-price' authority — the client says 'buy 100 shares today, you pick the moment' — is *not* full discretion. True discretion requires prior written client authorization in advance, and most states impose a minimum net worth for advisers exercising it.\n\n### Conflicts of Interest and Prohibited Practices\n\nSections 206(1) and 206(2) prohibit fraud and material misrepresentation. Section 206(3) prohibits principal and agency cross transactions without prior written client consent on a transaction-by-transaction basis. Section 206(4) and its rules, supplemented at the state level by the **NASAA Statement of Policy on Unethical or Dishonest Practices of IAs and IARs**, enumerate specific prohibitions:\n\n- **Loans to or from clients** — generally prohibited unless the client is a bank, broker-dealer, or affiliate in the lending business.\n- **Sharing in profits and losses** — prohibited for IAs entirely. (For broker-dealers, FINRA Rule 2010's general standards of commercial honor still apply.)\n- **Insider trading** — Section 204A requires written policies and procedures reasonably designed to prevent misuse of material nonpublic information, supplemented by Rule 10b-5 and the affirmative-defense framework of Rule 10b5-1 trading plans.\n- **Selling away** — agents may not execute transactions in securities not held or supervised by their employing firm without written approval.\n- **Market manipulation** — wash trades, matched orders, and 'painting the tape' are prohibited under Section 9 of the Exchange Act.\n- **Personal securities transactions** — Rule 204A-1 (the Code of Ethics rule) requires 'access persons' to file an initial holdings report within 10 days of becoming an access person, quarterly transaction reports within 30 days of quarter end, and annual holdings reports.\n- **Outside securities accounts** — must be disclosed to and pre-approved by the firm.\n- **Political contributions** — Rule 206(4)-5 ('pay-to-play') imposes a two-year time-out on receiving compensation from a government client after a covered associate contributes more than $350 to a candidate the contributor can vote for (or $150 otherwise).\n- **Excessive trading ('churning')** — generating commissions inconsistent with the client's objectives violates the standard of care.\n- **Exploitation of vulnerable adults** — permits temporary transaction holds and mandatory reporting under state senior-investor protection laws.\n- **Client confidentiality** — protected under Regulation S-P and the Gramm-Leach-Bliley Act, which require annual privacy notices and written information-safeguarding programs.\n- **Anti-money laundering (AML)** — the Bank Secrecy Act and the USA PATRIOT Act require Customer Identification Programs (CIP), suspicious activity reports (SARs), and currency transaction reports (CTRs) for cash transactions greater than $10,000.\n\n### Cybersecurity, Privacy, and Business Continuity\n\nBeyond Regulation S-P, **Regulation S-ID** (the Identity Theft Red Flags Rule) requires advisers and broker-dealers that maintain 'covered accounts' to adopt programs to detect and respond to identity theft. The **NASAA Model Rule on Cybersecurity** requires state-registered advisers to maintain written information-security policies addressing risk assessment, access controls, incident response, and vendor oversight.\n\nThe **NASAA Model Rule on Business Continuity and Succession Planning** mandates that every state-registered IA adopt a written BCP covering: (1) protection, backup, and recovery of books and records; (2) alternate communication with clients, employees, and regulators; (3) office relocation; (4) assignment of duties to qualified persons in the event of death or unavailability of key personnel; and (5) minimization of service disruption. Federal advisers are also subject to Rule 206(4)-7 (the Compliance Rule), which requires annually reviewed written policies and a designated chief compliance officer.\n\n### Worked Example\n\nA state-registered IA, 'PrudentPath,' manages a $5,000,000 portfolio for an elderly client. A junior IAR — a covered associate under Rule 206(4)-5 — donates $500 to the mayoral campaign of a city whose pension board PrudentPath is courting. Two months later the city awards PrudentPath an advisory mandate at 50 basis points.\n\nAnnual fee:\n\n$$\\$5{,}000{,}000 \\times 0.0050 = \\$25{,}000$$\n\nBecause the $500 contribution exceeded the $350 de minimis (the IAR could vote for the mayor), Rule 206(4)-5 imposes a **two-year ban** on the firm receiving compensation from that city — PrudentPath must forgo or disgorge approximately $50,000. Separately, the unapproved political contribution likely violates the firm's code of ethics under Rule 204A-1, must be disclosed on Form ADV Part 2A, and is independently prosecutable as an unethical practice under the NASAA Statement of Policy.\n\n### Summary\n\nFiduciary duty requires undivided loyalty and full disclosure (Section 206). Compensation, custody, and discretion each carry technical definitions, quantitative thresholds, and disclosure obligations. State and federal rules — Rules 204A-1, 206(4)-2, 206(4)-5, and 206(4)-7, the NASAA Statement of Policy, and the NASAA Model Rules on cybersecurity and business continuity — operationalize that duty into concrete reports, recordkeeping, and supervisory programs.",
  "citations": [
    {
      "source": "IA_ACT",
      "ref": "Investment Advisers Act of 1940"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 204A"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 205"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 205(a)(1)"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 206"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 206(1)"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 206(2)"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 206(3)"
    },
    {
      "source": "IA_ACT",
      "ref": "Section 206(4)"
    },
    {
      "source": "IA_ACT",
      "ref": "Rule 204A-1"
    },
    {
      "source": "IA_ACT",
      "ref": "Rule 205-3"
    },
    {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-2"
    },
    {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-5"
    },
    {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-7"
    },
    {
      "source": "SEC",
      "ref": "Form ADV Part 2A"
    },
    {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934"
    },
    {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 9"
    },
    {
      "source": "SEC",
      "ref": "Rule 10b-5"
    },
    {
      "source": "SEC",
      "ref": "Rule 10b5-1"
    },
    {
      "source": "SEC",
      "ref": "Regulation S-P"
    },
    {
      "source": "SEC",
      "ref": "Regulation S-ID"
    },
    {
      "source": "SEC",
      "ref": "Gramm-Leach-Bliley Act"
    },
    {
      "source": "SEC",
      "ref": "USA PATRIOT Act"
    },
    {
      "source": "SEC",
      "ref": "Bank Secrecy Act"
    },
    {
      "source": "NASAA",
      "ref": "NASAA Statement of Policy on Unethical or Dishonest Practices of IAs and IARs"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule on Custody"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule on Cybersecurity"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule on Business Continuity and Succession Planning"
    },
    {
      "source": "OTHER",
      "ref": "FINRA Rule 2010"
    }
  ],
  "subtopicId": "4.8",
  "reviewed": false
};

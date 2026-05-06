import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Under the Investment Advisers Act of 1940, the statutory definition of an 'investment adviser' rests on a three-part test commonly summarized as ABC. Which of the following best states that test?",
    "choices": [
      "Any person who, for compensation, engages in the business of advising others as to the value of securities or the advisability of investing in securities",
      "Any person registered with the SEC who manages discretionary client accounts in excess of $100 million",
      "Any person who holds themselves out as a financial planner regardless of whether compensation is received",
      "Any person who buys or sells securities for the account of others"
    ],
    "answerIndex": 0,
    "rationale": "Section 202(a)(11) defines an investment adviser using the three-part test: (A) compensation, (B) engaged in the business, and (C) advising others as to securities. The second choice describes only one type of federal covered adviser, not the underlying definition; many advisers are not registered with the SEC and the AUM threshold is relevant only to who registers where, not to who is an adviser.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 202(a)(11)"
    },
    "difficulty": "easy",
    "id": "1b6e2fe48cdd",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "A practicing attorney occasionally discusses securities with estate-planning clients as part of drafting wills. Which exclusion from the definition of 'investment adviser' is she most likely relying on?",
    "choices": [
      "The publisher exclusion",
      "The broker-dealer exclusion",
      "The 'LATE' professional exclusion for advice that is solely incidental to her practice",
      "The bank exclusion"
    ],
    "answerIndex": 2,
    "rationale": "The Investment Advisers Act excludes lawyers, accountants, teachers, and engineers (LATE) whose advice on securities is solely incidental to their professional practice and for which they receive no special compensation. The broker-dealer exclusion is a separate category and applies only when securities advice is incidental to brokerage activity and no special compensation is received.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 202(a)(11)(B)"
    },
    "difficulty": "easy",
    "id": "9d2003613eef",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "A firm publishes a weekly subscription newsletter giving general securities commentary that does not respond to individual subscriber circumstances. Under federal law, the firm is most likely:",
    "choices": [
      "An investment adviser that must register under Section 203 of the Investment Advisers Act",
      "Excluded from the definition of investment adviser under the publisher exclusion",
      "Required to register only if total subscriber AUM exceeds $100 million",
      "An exempt reporting adviser under Section 203(m)"
    ],
    "answerIndex": 1,
    "rationale": "Under Section 202(a)(11)(D), the publisher of a bona fide newspaper, news magazine, or business or financial publication of general and regular circulation that is not tailored to individual clients is excluded from the definition of investment adviser. The first choice ignores the exclusion; AUM thresholds in the third choice are irrelevant unless the entity first qualifies as an investment adviser.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 202(a)(11)(D)"
    },
    "difficulty": "medium",
    "id": "c48bce7ae291",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under Section 203A of the Investment Advisers Act and the Dodd-Frank amendments, an adviser that has between $100 million and $110 million in regulatory assets under management is generally:",
    "choices": [
      "Required to register with the SEC immediately",
      "Permitted (but not required) to register with the SEC, otherwise registers with the states",
      "Required to register with both the SEC and every state in which it has a client",
      "Considered an exempt reporting adviser regardless of activity"
    ],
    "answerIndex": 1,
    "rationale": "Dodd-Frank's Title IV created a buffer: an adviser with $100M-$110M of AUM may register with the SEC but is not required to until reaching $110M. The first choice ignores the buffer; mandatory SEC registration kicks in at $110M, and the buffer prevents constant flipping between state and federal registration.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 203A"
    },
    "difficulty": "medium",
    "id": "153cc0ce5cfe",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Which of the following advisers is NOT eligible to register with the SEC as a federal covered adviser?",
    "choices": [
      "An adviser to a registered investment company",
      "An adviser with $30 million in regulatory AUM that is not subject to examination by the state in which it maintains its principal office",
      "A pension consultant with $250 million in plan assets under advisement",
      "A small adviser with $20 million AUM that wishes to avoid state registration paperwork"
    ],
    "answerIndex": 3,
    "rationale": "An adviser with under $25 million AUM is generally prohibited from federal registration unless another exception applies (e.g., adviser to an RIC, multi-state adviser, internet adviser). The mid-sized adviser exception in choice 2 is correct because mid-sized advisers (\\$25M-\\$100M) must federally register if not subject to state examination; pension consultants meet the $200M threshold under Rule 203A-2.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 203A(a)"
    },
    "difficulty": "medium",
    "id": "9de30d2a7369",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "An adviser with offices only in State A would be required by State B to make a notice filing if:",
    "choices": [
      "It is a federal covered adviser with retail clients in State B",
      "Its principal officer once vacationed in State B",
      "It exclusively advises private funds with no individual investors",
      "It has fewer than five non-institutional clients in State B during a 12-month period"
    ],
    "answerIndex": 0,
    "rationale": "Under Section 307 of the Uniform Securities Act and the NASAA Model Rule on Notice Filings, a federal covered adviser is required to file notice (typically Form ADV plus a fee) in any state where it has a place of business or more than a de minimis number of retail clients. Choice 4 describes the de minimis exemption, which avoids notice filing rather than triggering it.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule on Notice Filings"
    },
    "difficulty": "medium",
    "id": "e04ad836200a",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, an investment adviser with no place of business in a state is generally exempt from registration in that state if, during the preceding 12 months, it had no more than how many non-institutional clients there?",
    "choices": [
      "Three",
      "Five",
      "Ten",
      "Fifteen"
    ],
    "answerIndex": 1,
    "rationale": "The de minimis exemption under USA Section 201 allows an out-of-state adviser with no place of business to have up to five non-institutional clients in the state in a 12-month period without registering. The other numbers do not match the Uniform Securities Act standard adopted by most states.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "easy",
    "id": "241df7d2824f",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Form ADV Part 2A is best described as:",
    "choices": [
      "The brochure that describes the adviser's services, fees, conflicts of interest, and disciplinary history in plain English narrative form",
      "The brochure supplement covering individual investment adviser representatives",
      "The relationship summary required to be delivered to retail investors",
      "An internal compliance attestation kept in the adviser's books and records"
    ],
    "answerIndex": 0,
    "rationale": "Form ADV Part 2A is the firm 'brochure' written in plain English. Part 2B is the IAR-specific brochure supplement (choice 2), and Part 3 (Form CRS) is the relationship summary required for retail clients (choice 3). Choice 4 is incorrect because the brochure is delivered externally, not merely retained internally.",
    "citation": {
      "source": "SEC",
      "ref": "Form ADV Part 2A"
    },
    "difficulty": "easy",
    "id": "26a19142bc57",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under SEC Rule 204-3 (the 'brochure rule'), an investment adviser must deliver its Form ADV Part 2A brochure to a new advisory client:",
    "choices": [
      "Within 30 days after the client's first deposit",
      "At or before entering into the advisory contract with the client",
      "Only upon written request by the client",
      "Annually within 90 days of the adviser's fiscal year end"
    ],
    "answerIndex": 1,
    "rationale": "Rule 204-3 requires initial brochure delivery at or before the time the client enters into the advisory contract. Choice 4 confuses initial delivery with the annual offer; the annual brochure delivery requirement is to provide an updated brochure or summary of material changes within 120 days of fiscal year end, not 90.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-3"
    },
    "difficulty": "medium",
    "id": "a99a7b24242c",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "An SEC-registered adviser must update its Form ADV by filing an annual updating amendment:",
    "choices": [
      "Within 30 days of the close of its fiscal year",
      "Within 60 days of the close of its fiscal year",
      "Within 90 days of the close of its fiscal year",
      "Within 120 days of the close of its fiscal year"
    ],
    "answerIndex": 2,
    "rationale": "Rule 204-1 requires the annual updating amendment to Form ADV within 90 days after the end of the adviser's fiscal year. Choice 4 (120 days) is the deadline for delivering or offering the updated brochure to existing clients, not for the regulatory filing itself.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-1"
    },
    "difficulty": "medium",
    "id": "55603e3c574e",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Beyond the annual updating amendment, an adviser must also file an 'other-than-annual' amendment to Form ADV:",
    "choices": [
      "Promptly upon the occurrence of certain material changes such as a new disciplinary event or a change in custody",
      "Quarterly, within 45 days of each quarter end",
      "Only when AUM crosses a registration threshold",
      "Whenever an IAR's home address changes"
    ],
    "answerIndex": 0,
    "rationale": "Rule 204-1 also requires prompt amendments for certain Part 1 items (such as new disciplinary disclosures or material changes to custody) and for any materially inaccurate information in the brochure. Choice 2 is incorrect because there is no quarterly Form ADV filing; choice 4 confuses Form ADV with Form U4 changes.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-1"
    },
    "difficulty": "hard",
    "id": "a4d25a3fc31c",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under Rule 204-2 of the Investment Advisers Act, an SEC-registered adviser must generally preserve required books and records for:",
    "choices": [
      "Three years from the end of the fiscal year, all in an easily accessible place",
      "Five years from the end of the fiscal year, the first two years in an easily accessible location",
      "Seven years from the end of the fiscal year, the first three years in an easily accessible location",
      "Ten years from the end of the fiscal year, all in offsite storage"
    ],
    "answerIndex": 1,
    "rationale": "Rule 204-2 sets a five-year retention period for most adviser records, with the first two years required to be kept in an easily accessible place (typically the principal office). Choice 1 confuses the IA recordkeeping rule with shorter recordkeeping rules applicable to other contexts.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-2"
    },
    "difficulty": "medium",
    "id": "f2a9ff7aaceb",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under Rule 204-2, certain records relating to the formation of the adviser, such as articles of incorporation, partnership agreements, and minute books, must be preserved:",
    "choices": [
      "For two years after the end of the calendar year in which an order was first entered",
      "For three years total",
      "For the life of the firm and three years after termination of the enterprise",
      "Indefinitely with no termination provision"
    ],
    "answerIndex": 2,
    "rationale": "Rule 204-2(e) imposes a special rule for organizational documents: they must be kept in the principal office for the life of the firm and for three years after the firm has terminated. The other choices conflate this organizational-records rule with the standard 5-year general retention rule.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-2"
    },
    "difficulty": "hard",
    "id": "bac0995d0877",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "An adviser wishing to terminate its registration files which form?",
    "choices": [
      "Form ADV-W",
      "Form ADV Part 2B",
      "Form U5",
      "Form CRS"
    ],
    "answerIndex": 0,
    "rationale": "Form ADV-W is used by an investment adviser to withdraw its registration. Form U5 (choice 3) is used to terminate an individual representative's association, not the firm's registration. Form ADV Part 2B is the brochure supplement, and Form CRS is the relationship summary, neither of which terminates registration.",
    "citation": {
      "source": "SEC",
      "ref": "Form ADV"
    },
    "difficulty": "easy",
    "id": "e11e070af160",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "An 'Exempt Reporting Adviser' (ERA) under the Investment Advisers Act is generally:",
    "choices": [
      "An adviser that is fully registered with the SEC but exempt from delivering a brochure",
      "An adviser that relies on the venture capital fund exemption (Section 203(l)) or the private fund adviser exemption (Section 203(m)) and files only certain items of Form ADV Part 1",
      "Any state-registered adviser with fewer than 15 clients in a calendar year",
      "An adviser that does not receive special compensation for advice"
    ],
    "answerIndex": 1,
    "rationale": "ERAs are advisers exempt from full SEC registration under Section 203(l) (advisers solely to venture capital funds) or Section 203(m) (private fund advisers managing under $150M in U.S. AUM). They still must file specified portions of Form ADV Part 1 with the SEC. Choice 3 references the pre-Dodd-Frank private adviser exemption that has been repealed.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 203(b)"
    },
    "difficulty": "medium",
    "id": "49f4aa89d3a7",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Which of the following advisers may register with the SEC under the 'multi-state' exemptive rule?",
    "choices": [
      "An adviser that would otherwise be required to register in 15 or more states",
      "An adviser with more than five clients in a single state",
      "Any state-registered adviser that wishes to avoid annual amendments",
      "Any adviser with at least one client in two different states"
    ],
    "answerIndex": 0,
    "rationale": "Rule 203A-2 permits an adviser that would otherwise be required to register in 15 or more states to register with the SEC instead. The other choices do not match the regulatory threshold; merely having clients in multiple states is not enough to qualify for federal registration.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 203A-2"
    },
    "difficulty": "hard",
    "id": "776890a7e41d",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under the National Securities Markets Improvement Act and Section 203A, a state may NOT require which of the following from a federal covered adviser that has a place of business in the state?",
    "choices": [
      "A notice filing of Form ADV and a fee",
      "Substantive registration as an investment adviser in the state",
      "Investigation and enforcement action for fraud",
      "Registration of investment adviser representatives located there"
    ],
    "answerIndex": 1,
    "rationale": "NSMIA preempted state substantive registration of federal covered advisers; states may, however, require notice filings, retain antifraud authority, and require IAR registration for IARs with a place of business in the state. Choice 1 describes the permitted notice filing, not preempted regulation.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 203A"
    },
    "difficulty": "medium",
    "id": "459c85f7f4e4",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, an 'investment adviser representative' (IAR) is generally a partner, officer, director, or employee of an adviser who:",
    "choices": [
      "Holds an MBA and at least three years of industry experience",
      "Makes investment recommendations, manages accounts, solicits, or supervises persons who do these activities, and is not purely clerical or ministerial",
      "Has passed the Series 7 and SIE exams",
      "Provides only impersonal investment commentary on television"
    ],
    "answerIndex": 1,
    "rationale": "USA Section 102(15) defines an IAR functionally: an associated person who gives investment advice, manages accounts, solicits, negotiates, or supervises others doing these activities. Educational credentials in choice 1 are irrelevant to the legal definition; passing exams is a registration requirement, not the definitional element.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    "difficulty": "medium",
    "id": "54fdc3045764",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under the NASAA IAR Continuing Education Model Rule, an IAR must complete how many hours of CE each reporting period?",
    "choices": [
      "6 hours, all in ethics",
      "10 hours of products and practice",
      "12 hours total: 6 hours of IAR Products and Practice plus 6 hours of Ethics and Professional Responsibility",
      "20 hours total split equally between products and ethics"
    ],
    "answerIndex": 2,
    "rationale": "The NASAA IAR Continuing Education Model Rule requires 12 CE credits per reporting year: 6 in IAR Products and Practice and 6 in Ethics and Professional Responsibility. Choice 4 describes a hypothetical 20-hour program that does not match the model rule's specific allocation.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA IAR Continuing Education Model Rule"
    },
    "difficulty": "easy",
    "id": "ac80f4084953",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "An IAR who fails to complete the required NASAA continuing education for two consecutive reporting periods will most likely face which consequence?",
    "choices": [
      "An automatic monetary penalty assessed by the SEC",
      "Conversion to exempt reporting adviser status",
      "Their state registration becoming 'CE inactive,' preventing them from acting as an IAR until deficient hours are made up",
      "Permanent revocation of their securities license with no remediation"
    ],
    "answerIndex": 2,
    "rationale": "Under the NASAA IAR CE Model Rule, an IAR whose CE is not satisfied is rendered 'CE inactive' and may not transact business as an IAR until deficiencies are cured. The SEC does not enforce IAR CE - it is a state-level requirement; permanent revocation is not the automatic consequence of CE noncompliance.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA IAR Continuing Education Model Rule"
    },
    "difficulty": "medium",
    "id": "f583b6819fa5",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under SEC Rule 206(4)-7, an SEC-registered adviser must, at a minimum:",
    "choices": [
      "Adopt and implement written policies and procedures reasonably designed to prevent violations, designate a Chief Compliance Officer, and review the policies at least annually",
      "Maintain $1 million of fidelity bonding regardless of business model",
      "File quarterly compliance certifications with the SEC",
      "Engage a third-party attorney to draft all client contracts"
    ],
    "answerIndex": 0,
    "rationale": "Rule 206(4)-7 requires written policies and procedures, a designated CCO, and at least an annual compliance review. Quarterly certifications and a $1M fidelity bond are not required by Rule 206(4)-7; bonding requirements are state-specific and tied to custody or discretion.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-7"
    },
    "difficulty": "medium",
    "id": "7a497dfa356b",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "An IAR is supervised principally by:",
    "choices": [
      "The SEC's Division of Examinations",
      "The investment adviser firm with which the IAR is associated",
      "The IAR's individual professional designation board (e.g., CFP Board)",
      "The exchange on which client securities are traded"
    ],
    "answerIndex": 1,
    "rationale": "Day-to-day supervision of an IAR is the responsibility of the associated investment adviser firm, which must adopt written supervisory procedures under Rule 206(4)-7 and applicable state rules. The SEC and states examine but do not supervise IARs in the operational sense; designation boards enforce ethics codes but do not supervise registered activity.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-7"
    },
    "difficulty": "easy",
    "id": "d897dcd0e22c",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "When does the registration of a state-registered investment adviser typically become effective if no order denying registration has been entered?",
    "choices": [
      "Immediately upon receipt by the Administrator",
      "At noon on the 30th day after a complete application has been filed",
      "60 days after the end of the adviser's fiscal year",
      "Upon publication of approval in the Federal Register"
    ],
    "answerIndex": 1,
    "rationale": "Under USA Section 302 (and parallel state statutes), registration becomes effective at noon of the 30th day after a complete application is filed unless a stop order or denial is entered. State Administrators handle filings; nothing under federal IA registration goes through the Federal Register publication.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 302"
    },
    "difficulty": "hard",
    "id": "4d545ecf5da0",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Form ADV Part 3 (Form CRS) must be delivered by an SEC-registered adviser to:",
    "choices": [
      "Any prospective client, regardless of whether the client is an institution or natural person",
      "Only retail investors who are natural persons (or their legal representatives) seeking services primarily for personal, family, or household purposes",
      "Only clients with more than $1 million invested",
      "Only clients of broker-dealers, not investment advisers"
    ],
    "answerIndex": 1,
    "rationale": "Form CRS is required only for retail investors as defined in the SEC's instructions: a natural person (or legal representative) seeking services primarily for personal, family, or household purposes. Choice 4 is incorrect because Form CRS applies to both broker-dealers and investment advisers serving retail customers.",
    "citation": {
      "source": "SEC",
      "ref": "Form CRS"
    },
    "difficulty": "medium",
    "id": "e2b6f2e1c2fb",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "An adviser maintains custody of client funds and securities. Which rule sets out the principal federal protections, including the surprise annual examination by an independent public accountant?",
    "choices": [
      "Rule 204-2",
      "Rule 206(4)-2",
      "Rule 206(4)-1",
      "Rule 17a-3"
    ],
    "answerIndex": 1,
    "rationale": "Rule 206(4)-2 (the Custody Rule) requires use of a qualified custodian, account statements to clients, and a surprise annual examination by an independent public accountant. Rule 204-2 is the recordkeeping rule and Rule 206(4)-1 is the marketing rule; Rule 17a-3 applies to broker-dealers.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-2"
    },
    "difficulty": "medium",
    "id": "c2c2a6d3ff22",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "An IAR moves from one investment adviser firm to another. Which uniform forms are typically used to terminate the prior association and reestablish registration?",
    "choices": [
      "Form ADV-W to terminate and Form ADV to register",
      "Form U5 filed by the prior firm and Form U4 filed by the new firm",
      "Form CRS filed at both firms",
      "Form 8-K filed by the prior firm and Form S-1 filed by the new firm"
    ],
    "answerIndex": 1,
    "rationale": "Form U5 is filed by the firm with which the IAR is terminating association, and Form U4 is filed by the new firm to register the IAR. Form ADV-W terminates a firm's registration, not an individual's; Forms 8-K and S-1 are issuer disclosure documents.",
    "citation": {
      "source": "SEC",
      "ref": "Form U5"
    },
    "difficulty": "easy",
    "id": "1565d730185f",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under Rule 205-3, an adviser may charge a performance-based fee only to a 'qualified client.' A qualified client is generally defined to include a natural person or company that:",
    "choices": [
      "Has at least $250,000 in liquid net worth",
      "Has at least $1.1 million in assets under management with the adviser, or a net worth of more than $2.2 million",
      "Has earned more than $200,000 in each of the last two years",
      "Is a U.S. citizen with a federal tax filing"
    ],
    "answerIndex": 1,
    "rationale": "As periodically adjusted, a 'qualified client' under Rule 205-3 is one with at least $1.1 million under management with the adviser or a net worth of more than $2.2 million (excluding primary residence). Choice 3 confuses the qualified client thresholds with the unrelated 'accredited investor' income test.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 205-3"
    },
    "difficulty": "hard",
    "id": "46bd930a1418",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Section 205 of the Investment Advisers Act generally prohibits investment advisory contracts from:",
    "choices": [
      "Requiring written form",
      "Containing a provision compensating the adviser based on a share of capital gains or capital appreciation in the client's account, except as permitted by SEC rule",
      "Permitting termination by the client at any time",
      "Disclosing the adviser's fee schedule"
    ],
    "answerIndex": 1,
    "rationale": "Section 205(a)(1) prohibits performance-based compensation tied to capital gains or appreciation, with exceptions, the most important being the qualified client exception in Rule 205-3. Choices 1, 3, and 4 describe contract terms that are encouraged or required, not prohibited.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 205"
    },
    "difficulty": "medium",
    "id": "8427f7821941",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under Section 205, an investment advisory contract must also:",
    "choices": [
      "Permit assignment without the client's consent",
      "Require the client's consent to any assignment of the contract",
      "Be perpetual once executed",
      "Identify the SIPC coverage applicable to the account"
    ],
    "answerIndex": 1,
    "rationale": "Section 205(a)(2) prohibits assignment of an advisory contract without the client's consent. Perpetual contracts are not required, and SIPC coverage applies to broker-dealer customer accounts, not advisory contracts.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 205"
    },
    "difficulty": "medium",
    "id": "f70b8b1e0d37",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, the Administrator of a state may by rule require an investment adviser registered in that state to:",
    "choices": [
      "Maintain minimum financial requirements such as net worth or a surety bond",
      "Pay federal SEC registration fees",
      "Replace the Form ADV with a state-specific document",
      "Avoid all use of social media in marketing"
    ],
    "answerIndex": 0,
    "rationale": "USA Section 202 (and the NASAA Model Rule) authorizes the Administrator to set financial requirements such as bonding for advisers with custody or discretion and minimum net worth. Federal SEC fees are not collected by states; advisers use the federal Form ADV through IARD even at the state level.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 202"
    },
    "difficulty": "medium",
    "id": "414b5a969ee5",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under NASAA Model Rules, an adviser that takes custody of client assets but is not federal covered is typically required to:",
    "choices": [
      "Carry a fidelity bond in an amount set by the state Administrator (commonly $35,000) or maintain minimum net worth",
      "Convert to broker-dealer registration",
      "File quarterly Form 13F with the state",
      "Operate exclusively through omnibus accounts"
    ],
    "answerIndex": 0,
    "rationale": "NASAA Model Rules require state-registered advisers with custody to maintain a surety bond or specified minimum net worth (commonly $35,000 bond and a higher minimum net worth where custody is taken). Form 13F is an institutional investment manager reporting form unrelated to the custody bond requirement.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule on Custody"
    },
    "difficulty": "hard",
    "id": "1f3cc568af1b",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Section 204A of the Investment Advisers Act requires advisers to establish, maintain, and enforce written policies and procedures reasonably designed to prevent:",
    "choices": [
      "Any losses in client accounts",
      "Misuse of material, nonpublic information by the adviser or its associated persons",
      "Late filing of Form ADV amendments",
      "Custody of client funds in any form"
    ],
    "answerIndex": 1,
    "rationale": "Section 204A is the 'insider trading' provision applied to advisers: it mandates policies and procedures to prevent the misuse of material nonpublic information. Late filings are addressed by Rule 204-1; client losses cannot be guaranteed against and are not the focus of Section 204A.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 204A"
    },
    "difficulty": "medium",
    "id": "fcdaae312295",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under Section 222, when an investment adviser has a place of business in a state, the state may impose its own books-and-records or financial requirements only if those requirements:",
    "choices": [
      "Are stricter than federal requirements applicable to SEC-registered advisers",
      "Are not different from, or in addition to, the federal requirements applicable to SEC-registered advisers",
      "Apply only to broker-dealers, not advisers",
      "Are first approved by FINRA"
    ],
    "answerIndex": 1,
    "rationale": "Section 222(b) prohibits state requirements for books, records, or financial standards on SEC-registered advisers that differ from or add to federal requirements. The first choice describes precisely the type of state add-on Congress preempted; FINRA does not approve state IA rules.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 222"
    },
    "difficulty": "hard",
    "id": "2d7da35ce24c",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "An adviser delivers its annual updated Form ADV Part 2A brochure to existing clients. Under Rule 204-3, the adviser must do so each year:",
    "choices": [
      "Within 30 days of the fiscal year end",
      "Within 60 days of the fiscal year end",
      "Within 120 days of the fiscal year end",
      "Within 6 months of the fiscal year end"
    ],
    "answerIndex": 2,
    "rationale": "Rule 204-3 requires advisers to deliver, free of charge, an updated brochure or a summary of material changes (with offer of the full brochure) within 120 days after fiscal year end. The 90-day deadline applies to the regulatory filing of the annual updating amendment, not to client delivery.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-3"
    },
    "difficulty": "medium",
    "id": "e2100b201263",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Form ADV is filed electronically through which system, used by both SEC-registered and state-registered advisers?",
    "choices": [
      "EDGAR",
      "IARD (the Investment Adviser Registration Depository)",
      "Web CRD only",
      "FedLine"
    ],
    "answerIndex": 1,
    "rationale": "Form ADV is filed through IARD, operated by FINRA on behalf of the SEC and state regulators. EDGAR is for issuer filings; Web CRD is the central registration depository for broker-dealers and their representatives (and IARs through linked systems).",
    "citation": {
      "source": "SEC",
      "ref": "Form ADV"
    },
    "difficulty": "easy",
    "id": "66956f0e8e6e",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under the NASAA Model Rule on Recordkeeping, a state-registered investment adviser must generally retain advertising and marketing communications for:",
    "choices": [
      "1 year from the date of last use",
      "3 years from the end of the fiscal year in which last used",
      "5 years from the end of the fiscal year in which last used, the first two years in the principal office",
      "Indefinitely"
    ],
    "answerIndex": 2,
    "rationale": "The NASAA recordkeeping model rule mirrors Rule 204-2: most records, including advertising, must be kept for 5 years from the end of the relevant fiscal year, the first two readily accessible at the principal office. The shorter retention periods conflict with the model rule's explicit 5-year minimum.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule on Recordkeeping"
    },
    "difficulty": "medium",
    "id": "e8996f53e5f8",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "The marketing rule for SEC-registered investment advisers, governing the use of testimonials, endorsements, and performance presentations, is:",
    "choices": [
      "Rule 206(4)-1",
      "Rule 206(4)-3",
      "Rule 144",
      "Regulation Best Interest"
    ],
    "answerIndex": 0,
    "rationale": "The amended Rule 206(4)-1 (the 'marketing rule') replaced the prior advertising rule and the cash solicitation rule (former Rule 206(4)-3) and now governs testimonials, endorsements, third-party ratings, and performance advertising for SEC-registered advisers. Rule 144 governs sales of restricted securities; Regulation BI applies to broker-dealers.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-1"
    },
    "difficulty": "medium",
    "id": "3d77203a663a",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "An investment adviser that is registered only with the SEC discovers that one of its IARs has a place of business in State X. With respect to that IAR, State X may:",
    "choices": [
      "Require the IAR to register at the state level even though the firm is federal covered",
      "Require the firm to substantively re-register at the state level",
      "Force the firm to deregister from the SEC",
      "Apply different books-and-records requirements to the firm"
    ],
    "answerIndex": 0,
    "rationale": "NSMIA preempts state substantive registration of federal covered firms (choices 2 and 4) but expressly preserves state authority over IARs who have a place of business in the state. Hence the IAR registers in State X even though the firm itself is federal covered. The state cannot force SEC deregistration.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 203A"
    },
    "difficulty": "hard",
    "id": "38a3d1a9eb14",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "An adviser must make and keep a memorandum of each order placed for the purchase or sale of any security, including the terms and conditions of the order. This requirement is found in:",
    "choices": [
      "Rule 17a-4",
      "Rule 204-2",
      "Rule 144A",
      "Section 13(d) of the Securities Exchange Act"
    ],
    "answerIndex": 1,
    "rationale": "Rule 204-2(a)(3) requires advisers to keep a memorandum of each order, including terms and conditions and identifying the IAR responsible. Rule 17a-4 applies to broker-dealers. Section 13(d) governs beneficial ownership reporting by 5% holders, not adviser order tickets.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-2"
    },
    "difficulty": "hard",
    "id": "4e173af3bd6b",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "An IAR's individual registration is initially established by filing which uniform form?",
    "choices": [
      "Form U4",
      "Form U5",
      "Form ADV Part 2B",
      "Form CRS"
    ],
    "answerIndex": 0,
    "rationale": "Form U4 is the Uniform Application for Securities Industry Registration or Transfer used to register an IAR. Form ADV Part 2B is delivered to clients about an IAR but does not effect registration; Form U5 terminates a registration; Form CRS is a relationship summary.",
    "citation": {
      "source": "SEC",
      "ref": "Form U4"
    },
    "difficulty": "easy",
    "id": "1cd7dcd011f0",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Form ADV Part 2B (the brochure supplement) must contain information about:",
    "choices": [
      "The firm's overall fee schedule and conflicts",
      "The educational background, business experience, disciplinary history, and supervision of each IAR who provides advice to a client",
      "The custody arrangements maintained by the adviser",
      "The annual updating amendment timeline"
    ],
    "answerIndex": 1,
    "rationale": "Part 2B is the IAR-specific brochure supplement covering education, experience, disciplinary history, other business activities, additional compensation, and supervision of the IAR. The fee schedule and firm conflicts go in Part 2A; custody and amendments are addressed in Part 1 and Rule 204-1.",
    "citation": {
      "source": "SEC",
      "ref": "Form ADV Part 2B"
    },
    "difficulty": "medium",
    "id": "fc0477b67301",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under SEC Rule 203A-3, a 'pension consultant' may register as a federal covered adviser if it provides investment advice to employee benefit plans with aggregate assets of at least:",
    "choices": [
      "$25 million",
      "$50 million",
      "$100 million",
      "$200 million"
    ],
    "answerIndex": 3,
    "rationale": "Rule 203A-2 (with definitions in Rule 203A-3) sets the pension consultant threshold at $200 million in plan assets to elect SEC registration. Lower thresholds describe other regulatory cutoffs (such as the small/mid-sized adviser thresholds) and do not apply to pension consultants.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 203A-3"
    },
    "difficulty": "hard",
    "id": "a0cde21e3ba9",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Which of the following is NOT a category of federal covered adviser under Section 203A?",
    "choices": [
      "An adviser to a registered investment company",
      "A pension consultant meeting the $200 million threshold",
      "An adviser with $50 million in regulatory AUM and a single retail client",
      "An adviser that would have to register in 15 or more states absent SEC registration"
    ],
    "answerIndex": 2,
    "rationale": "An adviser with $50 million AUM and only state-level activity is a 'mid-sized adviser' that, in most states, must register at the state level. The other choices are recognized federal covered categories under Section 203A and Rule 203A-2. The mere presence of one client does not change the AUM-based registration framework.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 203A"
    },
    "difficulty": "medium",
    "id": "e618ae5a23df",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "Under FINRA Rule 3110, broker-dealers must establish and maintain a supervisory system for associated persons. While this rule applies to broker-dealers, on the investment adviser side the analogous source of supervisory obligations is principally:",
    "choices": [
      "Rule 206(4)-7 and parallel state model rules",
      "Rule 10b-5",
      "Regulation NMS",
      "Rule 144A"
    ],
    "answerIndex": 0,
    "rationale": "Rule 206(4)-7 (and corresponding NASAA model rule provisions) imposes the compliance program and supervisory framework on advisers, paralleling the broker-dealer rules under FINRA Rule 3110. Rule 10b-5 is a general antifraud rule; Regulation NMS governs equity market structure; Rule 144A relates to private resales.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 3110"
    },
    "difficulty": "hard",
    "id": "465d7794c324",
    "subtopicId": "4.1",
    "reviewed": false
  },
  {
    "stem": "An adviser to private funds with $80 million in U.S. AUM, none of which is a venture capital fund, is most likely:",
    "choices": [
      "Required to register as an SEC investment adviser",
      "Eligible as an Exempt Reporting Adviser under Section 203(m)",
      "Exempt from any SEC filing whatsoever",
      "Required to register with FINRA as a broker-dealer"
    ],
    "answerIndex": 1,
    "rationale": "Section 203(m) exempts advisers solely to private funds with less than $150 million in U.S. AUM from full registration; they remain Exempt Reporting Advisers and must file specified items of Form ADV Part 1. Choice 3 is wrong because ERAs still file with the SEC; choice 4 confuses adviser status with broker-dealer status.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 203(b)"
    },
    "difficulty": "medium",
    "id": "5a45fc18d579",
    "subtopicId": "4.1",
    "reviewed": false
  }
];

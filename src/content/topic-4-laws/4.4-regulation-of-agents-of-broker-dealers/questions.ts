import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Under the Uniform Securities Act of 1956, the term \"agent\" refers to which of the following?",
    "choices": [
      "Any broker-dealer registered in the state",
      "An individual, other than a broker-dealer, who represents a broker-dealer or issuer in effecting or attempting to effect purchases or sales of securities",
      "A corporation or partnership that buys and sells securities for its own account",
      "Any person providing investment advice for compensation"
    ],
    "answerIndex": 1,
    "rationale": "Section 401(b) of the USA defines an agent as an individual (a natural person) other than a broker-dealer who represents a BD or issuer in effecting or attempting to effect securities transactions. Choice A is wrong because a broker-dealer itself is excluded from the agent definition; the BD and its agents are two separate categories of registrant under the Act.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "easy",
    "id": "b802e6994425",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following is true regarding the definition of \"agent\" under the Uniform Securities Act?",
    "choices": [
      "An agent may be either a natural person or a legal entity",
      "An agent must be a natural person (an individual)",
      "Only firms that hold customer funds qualify as agents",
      "An agent must be a licensed CPA"
    ],
    "answerIndex": 1,
    "rationale": "Under USA Section 401(b), only natural persons (individuals) can be agents; entities such as corporations or partnerships register as broker-dealers, not as agents. Choice A is wrong because legal entities cannot be agents — that conflates the BD definition with the agent definition.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "easy",
    "id": "83793071a010",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following individuals is most clearly an \"agent\" required to register under the Uniform Securities Act?",
    "choices": [
      "A receptionist at a broker-dealer who only answers phones",
      "A registered representative who solicits orders for securities from customers",
      "The CFO of the BD's parent holding company who never speaks to clients",
      "An IT contractor who maintains the BD's trading platform"
    ],
    "answerIndex": 1,
    "rationale": "A registered rep who solicits orders is engaged in effecting securities transactions on behalf of the BD, which is the core activity that triggers agent status under Section 401(b). The receptionist (Choice A) is the top distractor because she is at the BD; however, purely clerical and ministerial activities that do not involve effecting or attempting to effect transactions do not make someone an agent.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "easy",
    "id": "1d95fa871cbe",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Which person at a broker-dealer would NOT be considered an \"agent\" under the Uniform Securities Act?",
    "choices": [
      "A registered representative",
      "A sales manager who solicits new customers",
      "A clerical employee who only files paperwork and never solicits or effects securities transactions",
      "A trader who executes customer orders"
    ],
    "answerIndex": 2,
    "rationale": "Purely clerical or administrative employees who do not effect or attempt to effect securities transactions are not agents under Section 401(b). The sales manager (Choice B) is the top distractor — but because she solicits customers, she is engaged in effecting securities transactions and must register as an agent.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "easy",
    "id": "3fc58b2cd596",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "An individual representing an issuer in selling US Treasury securities directly to investors is, under USA 1956:",
    "choices": [
      "An agent who must register in each state of sale",
      "Excluded from the definition of agent because Treasuries are exempt securities under the issuer-agent exclusion",
      "A broker-dealer required to register with the state",
      "An investment adviser representative"
    ],
    "answerIndex": 1,
    "rationale": "Section 401(b) excludes from the agent definition individuals representing an issuer in transactions involving certain exempt securities, including U.S. government (Treasury) obligations. Choice A is the top distractor; while sales activity normally triggers agent status, the issuer-agent exclusion applies precisely because the underlying security is exempt.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "medium",
    "id": "94d21d158445",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Under USA 1956, an individual representing an issuer in selling qualifying commercial paper is generally:",
    "choices": [
      "Always an agent who must register in every state of sale",
      "Excluded from the agent definition under the issuer-agent exclusion for prime commercial paper",
      "Treated as a broker-dealer regardless of activity",
      "Required to register only in the issuer's home state"
    ],
    "answerIndex": 1,
    "rationale": "The Act excludes from the agent definition issuer representatives selling certain instruments, including prime commercial paper that meets specified maturity, denomination, and rating tests. Choice A is wrong because the issuer-agent exclusion specifically removes those representatives from the definition for that class of exempt securities.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "medium",
    "id": "4eee988a2548",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Section 3(a)(4) of the Securities Exchange Act of 1934 defines a \"broker.\" Which best contrasts that federal definition with the state-law concept of an \"agent\"?",
    "choices": [
      "A broker is always a corporation while an agent is always an individual, with no functional differences",
      "The 1934 Act broker definition refers to the firm engaged in effecting transactions for the account of others, while under state law an \"agent\" is the individual representing a BD or issuer",
      "The two terms are fully synonymous under federal and state law",
      "A broker only handles options while an agent only handles equities"
    ],
    "answerIndex": 1,
    "rationale": "Federal law (Section 3(a)(4)) defines a \"broker\" as any person engaged in effecting transactions for others — typically a firm — whereas state law (USA Section 401(b)) calls the individual representative an \"agent.\" Choice A captures the natural-person distinction but oversimplifies; the principal difference is functional, not just structural.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 3(a)(4)"
    },
    "difficulty": "medium",
    "id": "ba8639cd59ff",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Form U4 is used primarily to:",
    "choices": [
      "Terminate an agent's registration with a broker-dealer",
      "Register a broker-dealer firm with the SEC",
      "Apply for registration as an individual securities agent (or representative of an investment adviser)",
      "File the BD's net capital report"
    ],
    "answerIndex": 2,
    "rationale": "Form U4 (Uniform Application for Securities Industry Registration or Transfer) is the form used by individuals applying to register as agents of broker-dealers and as IARs. Choice A is the top distractor — Form U5 (not U4) is used at termination, while U4 is used at the start and to amend registration data.",
    "citation": {
      "source": "SEC",
      "ref": "Form U4"
    },
    "difficulty": "medium",
    "id": "f2141a8f16f3",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "When an agent's employment with a broker-dealer is terminated, which uniform form is required to be filed?",
    "choices": [
      "Form U4",
      "Form U5",
      "Form ADV",
      "Form BD"
    ],
    "answerIndex": 1,
    "rationale": "Form U5 (Uniform Termination Notice) is filed by the BD to terminate an agent's registration. Choice A is wrong because Form U4 is used to apply for or amend registration, not to terminate it.",
    "citation": {
      "source": "SEC",
      "ref": "Form U5"
    },
    "difficulty": "easy",
    "id": "822349a5a0e7",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "If a broker-dealer's state registration is suspended or revoked, what generally happens to its agents' registrations in that state?",
    "choices": [
      "They remain in effect indefinitely without further action",
      "They are also placed in suspense until the agent associates with another registered BD",
      "They automatically convert to direct SEC registrations",
      "They convert to IAR registrations by default"
    ],
    "answerIndex": 1,
    "rationale": "Under state registration provisions, an agent's registration is dependent on association with a registered BD; if the BD's registration is no longer in effect, the agent's registration is also no longer in effect until the agent re-associates with another registered firm. Choice C is wrong because there is no automatic federal conversion — registration is firm-linked at the state level.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "medium",
    "id": "eaa2666a9f2a",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "An agent leaves Broker-Dealer A to join Broker-Dealer B. Under the Uniform Securities Act, who is required to notify the state Administrator of the change?",
    "choices": [
      "Only the agent",
      "Only Broker-Dealer A",
      "The agent, the former BD, and the new BD all must give prompt notice",
      "Only Broker-Dealer B"
    ],
    "answerIndex": 2,
    "rationale": "When an agent moves between BDs, USA Section 201 requires all three parties — the agent, the former employing BD, and the new employing BD — to promptly notify the Administrator. Choice A is wrong because notice from the agent alone is insufficient; both BDs are also obligated to notify.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "hard",
    "id": "f4c6542fa011",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "An agent is registered only in State X. A long-time customer temporarily vacations in State Y and calls to place a securities order. Under the USA, the agent typically may handle this order if:",
    "choices": [
      "State Y requires immediate registration regardless of the existing relationship",
      "The transaction qualifies under a de minimis or \"snowbird\" exclusion that permits limited contact with an existing client temporarily in another state",
      "The agent must always register in State Y before doing anything",
      "The transaction is illegal in all cases without dual registration"
    ],
    "answerIndex": 1,
    "rationale": "The USA permits limited contacts with existing clients who are temporarily in another state without triggering registration in that other state, provided the agent and BD meet the conditions of the exclusion. Choice A is wrong because the Act and most state rules carve out limited-customer relationships from the obligation to register in every state of contact.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "medium",
    "id": "c0e21a3216f6",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "A securities corporation registered as a broker-dealer is, under the USA:",
    "choices": [
      "An agent of itself",
      "Not an agent, because only individuals (natural persons) can be agents",
      "Both a BD and an agent simultaneously",
      "An investment adviser by default"
    ],
    "answerIndex": 1,
    "rationale": "Section 401(b) restricts \"agent\" status to natural persons — entities such as corporations and partnerships register as broker-dealers, not agents. Choice C is wrong because the Act establishes BD and agent as distinct, mutually exclusive categories of registrant.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "easy",
    "id": "7ed9144de3f3",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "An individual represents an issuer in selling securities issued by a U.S. bank chartered by a federal regulator. Under USA 1956, the individual is:",
    "choices": [
      "An agent who must register in each state of sale",
      "Excluded from the agent definition because the bank's securities are exempt securities under the issuer-agent exclusion",
      "Required to register as a broker-dealer",
      "Required to register as an investment adviser representative"
    ],
    "answerIndex": 1,
    "rationale": "Section 401(b) excludes from the agent definition individuals representing the issuer in selling certain exempt securities, including those issued by federally chartered banks. Choice A is wrong because Section 401(b)'s issuer-agent exclusion expressly removes the registration trigger for this class of exempt securities.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "medium",
    "id": "4e9f28a2bf2c",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Commercial paper that qualifies for the issuer-agent exclusion under USA 1956 generally must satisfy which conditions?",
    "choices": [
      "Be rated below investment grade and have a maturity of more than one year",
      "Have a maturity of nine months (270 days) or less, denominations of $50,000 or more, and rank in one of the top three ratings of an NRSRO",
      "Be issued only by foreign banks",
      "Be convertible into the issuer's common stock"
    ],
    "answerIndex": 1,
    "rationale": "The Act and SEC interpretive guidance on commercial paper require short maturity (≤270 days), large denominations (≥$50,000), and a top-tier NRSRO rating to qualify as exempt commercial paper, allowing the issuer-agent exclusion to apply. Choice A is wrong because below-investment-grade and longer-dated paper does not satisfy the prime commercial paper criteria.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "medium",
    "id": "f081462c374e",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "An employee of an issuer sells investment contracts representing interests in the issuer's employee profit-sharing plan, receiving no commissions. Under USA 1956, the employee is:",
    "choices": [
      "Required to register as an agent of the issuer",
      "Excluded from the definition of agent under the issuer-agent exclusion for employee benefit plans",
      "Required to register as a broker-dealer",
      "Required to register as an investment adviser representative"
    ],
    "answerIndex": 1,
    "rationale": "Section 401(b)'s issuer-agent exclusion covers individuals selling investment contracts in connection with certain employee benefit plans of the issuer, particularly where no commission or remuneration tied to the sale is paid. Choice A is wrong because the issuer-agent exclusion was designed to remove employer-administered retirement and benefit plan sales from the registration trigger.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "hard",
    "id": "91777ff75e67",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "An individual representing an issuer solely in connection with an exempt transaction under USA Section 402 is generally:",
    "choices": [
      "Always required to register as an agent in each state of sale",
      "Excluded from the agent definition for that exempt transaction under USA 1956",
      "Required to register as a broker-dealer",
      "Subject only to federal SEC registration"
    ],
    "answerIndex": 1,
    "rationale": "Section 401(b)'s issuer-agent exclusion extends to individuals representing the issuer in exempt transactions enumerated under Section 402; for those specific transactions, the individual is not an \"agent\" requiring registration. Choice A is wrong because the statute carves out these exempt transactions precisely to relieve the registration burden.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 402"
    },
    "difficulty": "medium",
    "id": "4dc121b260ba",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act of 2002, the definition of \"agent\":",
    "choices": [
      "Eliminated all issuer-agent exclusions present in the 1956 Act",
      "Continued the basic 1956 framework — an individual representing a BD or issuer in effecting securities transactions, with certain exclusions for exempt securities and transactions",
      "Required all agents to also register simultaneously as IARs",
      "Removed the natural-person requirement so that entities could register as agents"
    ],
    "answerIndex": 1,
    "rationale": "The 2002 Act preserved the core 1956 concept of \"agent\" — a natural person representing a BD or issuer in securities transactions — while modernizing certain exclusions and definitions. Choice A is wrong because exempt securities and transaction-based exclusions continue under the 2002 framework.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Securities Act of 2002"
    },
    "difficulty": "hard",
    "id": "c2bef50feff0",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "An agent of a broker-dealer must be registered in:",
    "choices": [
      "Only the BD's state of headquarters",
      "Each state in which the agent solicits or effects securities transactions (subject to limited exclusions)",
      "Only the agent's state of personal residence",
      "No state — only the BD itself registers"
    ],
    "answerIndex": 1,
    "rationale": "USA Section 201 conditions agent activity on registration in each state where the agent solicits or effects securities transactions, subject to narrowly tailored de minimis carve-outs. Choice A is wrong because state law applies based on where activity occurs, not where the BD is headquartered.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "easy",
    "id": "99c31db8983d",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Under USA 1956, an individual is acting as an agent if she \"effects or attempts to effect\" securities transactions. Which of the following BEST illustrates \"attempting to effect\"?",
    "choices": [
      "A receptionist transferring calls to a registered representative",
      "A salesperson cold-calling prospects to solicit them to buy securities",
      "An accountant preparing the BD's tax return",
      "An IT specialist updating the BD's order-routing software"
    ],
    "answerIndex": 1,
    "rationale": "Soliciting prospects to buy or sell securities — even if no order is ultimately placed — is the canonical example of \"attempting to effect\" a transaction and triggers agent status under Section 401(b). Choice A is the top distractor — purely connecting calls without any sales solicitation is ministerial and does not, by itself, make the receptionist an agent.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "medium",
    "id": "b7d4af641a66",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "A senior partner at a broker-dealer who never solicits customers and only handles internal operations is:",
    "choices": [
      "Always an agent because she is a partner of the BD",
      "Generally not required to register as an agent because she does not effect or attempt to effect securities transactions",
      "Required to register both as an agent and as a broker-dealer",
      "Required to register as an investment adviser representative"
    ],
    "answerIndex": 1,
    "rationale": "Status as a partner, officer, or director does not automatically confer \"agent\" status; the test is whether the individual effects or attempts to effect securities transactions. A partner who does only internal/operational work is not an agent under Section 401(b). Choice A is wrong because title alone does not trigger the registration requirement.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "medium",
    "id": "db20177da991",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Form U4 generally requires an applicant to disclose all of the following EXCEPT:",
    "choices": [
      "Prior employment history for the past 10 years",
      "Criminal and regulatory disciplinary history",
      "The applicant's social media account passwords",
      "Customer complaints, civil judicial proceedings, and arbitration disclosures"
    ],
    "answerIndex": 2,
    "rationale": "Form U4 captures employment history, disciplinary history, and customer-complaint disclosures so regulators and firms can assess fitness for registration, but it does not require disclosure of personal account passwords. Choice B is the top distractor — disciplinary history is required, which is exactly what makes Form U4 a key tool for regulators.",
    "citation": {
      "source": "SEC",
      "ref": "Form U4"
    },
    "difficulty": "easy",
    "id": "7c2750e101bb",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "An individual receives no compensation for soliciting securities transactions on behalf of a registered broker-dealer. Under USA 1956, is the individual an agent?",
    "choices": [
      "No, because compensation is required to be an agent",
      "Yes — agent status under Section 401(b) does NOT depend on compensation; it depends on representing a BD or issuer in effecting securities transactions",
      "Only if she signed a written employment contract",
      "Only if she works on commission rather than salary"
    ],
    "answerIndex": 1,
    "rationale": "Section 401(b) defines \"agent\" by function (representing a BD or issuer in effecting/attempting transactions), not by whether the person is compensated. Choice A is the top distractor and reflects a common misconception — there is no \"paid\" element in the agent definition.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "medium",
    "id": "6eb466679267",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "An agent registered in State A travels to State B and, while there, solicits new prospects (with whom she has no preexisting relationship) for securities sales. Under the USA, this generally:",
    "choices": [
      "Is permitted because the agent is on personal travel",
      "Triggers a registration requirement in State B because solicitation of new prospects in that state is the activity that requires state agent registration",
      "Requires only that the BD register in State B",
      "Requires only notification to FINRA"
    ],
    "answerIndex": 1,
    "rationale": "Soliciting new (non-existing) clients in a state is the activity that triggers agent registration in that state under Section 201. Choice C is the top distractor — registering only the BD does not satisfy the separate, individual-level requirement for the agent to register where she conducts business.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "hard",
    "id": "10cd5513a456",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "An agent's existing client temporarily relocates to another state for less than 30 days. Under typical state de minimis (snowbird) provisions:",
    "choices": [
      "The agent must immediately register in the new state to take any orders",
      "The agent may continue to service the existing client's transactions without registering in the temporary state, subject to the conditions of the exclusion",
      "The agent must terminate the relationship until the client returns home",
      "The agent must transfer the account to a local broker-dealer"
    ],
    "answerIndex": 1,
    "rationale": "State de minimis/snowbird-style provisions permit an agent registered elsewhere to continue servicing an existing client who is temporarily in another state, without registration in that state, when the conditions of the exclusion are met. Choice A is wrong because immediate registration in every state of contact would defeat the purpose of these limited-contact carve-outs.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "hard",
    "id": "7408a327d883",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "A BD's sales assistant accepts unsolicited customer orders for securities while the registered representative is unavailable. Under USA 1956:",
    "choices": [
      "The assistant need not register because she is \"just clerical\"",
      "Even taking unsolicited orders is part of effecting a transaction, so the assistant generally must be registered as an agent",
      "The assistant is exempt as an issuer-agent",
      "The assistant must register as a broker-dealer"
    ],
    "answerIndex": 1,
    "rationale": "Accepting customer orders — even unsolicited — is part of \"effecting\" a securities transaction and brings the individual within the Section 401(b) agent definition; the activity, not the source of the order, drives the analysis. Choice A is wrong because the \"clerical\" label does not save someone whose actual functions include handling customer orders.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "medium",
    "id": "8665ccc059b5",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "A summer intern is hired by a broker-dealer to make cold calls and solicit prospective new securities accounts. The intern:",
    "choices": [
      "Is exempt from registration because she is an unpaid student",
      "Must be registered as an agent of the broker-dealer because she is soliciting securities transactions",
      "Is exempt if the internship lasts fewer than 90 days",
      "Must register as an investment adviser"
    ],
    "answerIndex": 1,
    "rationale": "Soliciting prospects to buy or sell securities is the activity that triggers agent status under Section 401(b), regardless of whether the individual is a student, intern, or unpaid. Choice A is wrong because Section 401(b) does not turn on student status, internship status, or compensation.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "easy",
    "id": "4e469297a7a2",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following BEST distinguishes a broker-dealer agent from an investment adviser representative (IAR)?",
    "choices": [
      "The two roles are functionally identical",
      "A BD agent represents a BD or issuer in effecting securities transactions, while an IAR provides investment advice on behalf of a state- or federally-registered investment adviser",
      "Only an IAR is required to be a natural person",
      "Only a BD agent must register with the SEC"
    ],
    "answerIndex": 1,
    "rationale": "BD agents and IARs are defined by different activities — transactional sales and solicitation versus advisory services — and arise from different statutory regimes (Securities Exchange Act / state BD law versus Investment Advisers Act and state IA law). Choice A is wrong because, while many individuals are dual-registered, the role definitions and obligations differ materially.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Securities Act of 1956"
    },
    "difficulty": "medium",
    "id": "2c14ef6e67de",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "The general state-law requirement that a person may not transact business as an agent unless registered is found in:",
    "choices": [
      "USA Section 102 (definitions)",
      "USA Section 201 (registration of broker-dealers, agents, IAs, and IARs)",
      "The Investment Company Act of 1940",
      "Sarbanes-Oxley Section 404"
    ],
    "answerIndex": 1,
    "rationale": "Section 201 of the USA contains the general registration requirement for broker-dealers, agents, investment advisers, and IARs at the state level. Choice A is wrong because Section 102 sets out definitions but does not by itself impose the obligation to register.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "easy",
    "id": "90e75cbd8c56",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Under the USA, an agent's application for registration generally becomes effective:",
    "choices": [
      "Immediately upon submission of Form U4",
      "At noon of the 30th day after a complete application is filed, unless the Administrator orders an earlier effective date or finds a deficiency",
      "Only after one full calendar year",
      "Upon SEC notice"
    ],
    "answerIndex": 1,
    "rationale": "Under USA Section 201, registration becomes effective at noon on the 30th day after a complete application is filed, absent administrative deficiencies or an earlier order by the Administrator. Choice A is wrong because mere submission does not make the registration effective; the statutory waiting period must run.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "hard",
    "id": "49571d87c9ba",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Under USA 1956, may an individual be registered as an agent of more than one broker-dealer at the same time?",
    "choices": [
      "Yes, in all cases without restriction",
      "Generally no, unless the Administrator authorizes it (such as where the BDs are under common control or affiliated)",
      "Yes, only if the agent passes the Series 65",
      "Yes, only if the customer consents in writing"
    ],
    "answerIndex": 1,
    "rationale": "The USA generally prohibits dual agent registration with unaffiliated BDs to prevent conflicts and supervisory gaps; affiliated BDs or special Administrator authorization can create exceptions. Choice A is wrong because unrestricted dual registration is not permitted under the standard state framework.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "medium",
    "id": "9eba866b0003",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following CANNOT be an \"agent\" under the Uniform Securities Act?",
    "choices": [
      "A natural person who solicits securities transactions for a BD",
      "A natural person who places trades on behalf of an issuer in non-exempt transactions",
      "A registered investment company (a corporation)",
      "An employee who routinely receives orders for securities"
    ],
    "answerIndex": 2,
    "rationale": "Section 401(b) limits \"agent\" status to natural persons; a corporation (such as an investment company) cannot itself be an agent. Choice B is the top distractor — natural persons selling non-exempt securities for an issuer can fall within the agent definition.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "medium",
    "id": "d4672802c604",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "An individual sells general-obligation municipal bonds on behalf of the issuing municipality. Under USA 1956, the individual is:",
    "choices": [
      "An agent who must register in each state of sale",
      "Excluded from the agent definition because municipal securities are exempt securities under the issuer-agent exclusion",
      "Required to register as a broker-dealer",
      "Required to be a CPA"
    ],
    "answerIndex": 1,
    "rationale": "Section 401(b) carves out individuals representing an issuer in transactions involving exempt securities, including municipal securities issued by states and political subdivisions. Choice A is wrong because the issuer-agent exclusion eliminates the registration requirement for this category of exempt securities.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "hard",
    "id": "a8fff2b5f316",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "A broker-dealer pays an unregistered finder a transaction-based \"finder's fee\" for referrals that produce securities sales. Under USA 1956, this practice is:",
    "choices": [
      "Permissible because finders are not \"agents\"",
      "Generally a violation, because compensation tied to securities transactions typically requires the recipient to be registered as an agent",
      "Permitted in any state without registration",
      "Preempted by federal law"
    ],
    "answerIndex": 1,
    "rationale": "Paying transaction-based compensation for securities referrals to an unregistered person typically converts the recipient into a de facto agent and raises a registration violation under Section 401(b)/201. Choice A is wrong because the \"finder\" label does not insulate someone whose compensation is tied to securities transactions.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "medium",
    "id": "31808accd79a",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Form U5 (the Uniform Termination Notice) generally must be filed by the broker-dealer within how many days of an agent's termination?",
    "choices": [
      "90 days",
      "30 days",
      "60 days",
      "1 year"
    ],
    "answerIndex": 1,
    "rationale": "Industry rules require the filing of Form U5 within 30 days of an agent's termination, with a copy to the agent. Choice A (90 days) is the top distractor but reflects an incorrect, longer window — the standard rule is 30 days.",
    "citation": {
      "source": "SEC",
      "ref": "Form U5"
    },
    "difficulty": "medium",
    "id": "0d8ebf0471cd",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "An agent associated with a registered broker-dealer effects transactions for customers exclusively in U.S. Treasury securities. Under USA 1956, the agent:",
    "choices": [
      "Is exempt from registration as an agent because Treasuries are exempt securities",
      "Must still register as an agent because he represents a BD; the exempt-security carve-out applies to ISSUER agents, not BD agents",
      "Must register as a broker-dealer",
      "Is automatically converted to an IAR"
    ],
    "answerIndex": 1,
    "rationale": "Section 401(b)'s exempt-security carve-outs apply to individuals representing ISSUERS, not to individuals representing BDs. A BD agent who sells Treasuries to customers is still an agent and must register. Choice A is the top distractor — confusing the issuer-agent exclusion with a general exempt-security pass for everyone.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "medium",
    "id": "1265a7c33c3a",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "An issuer's employee sells the issuer's stock to existing employees under a stock-purchase plan and receives no commission tied to sales. Under USA 1956, this employee:",
    "choices": [
      "Must register as an agent of the issuer in every state of sale",
      "May qualify for exclusion from the agent definition under USA 1956's issuer-agent exclusions for employee benefit plans, where conditions are met",
      "Must register as an IAR of the issuer",
      "Must register as a broker-dealer"
    ],
    "answerIndex": 1,
    "rationale": "Section 401(b) excludes from the agent definition individuals representing the issuer in connection with certain employee benefit plans, particularly where no commissions or special remuneration are paid for the sales. Choice A is wrong because the issuer-agent exclusion is precisely designed to remove the registration burden for this category of internal benefit-plan sales.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "easy",
    "id": "32c17c1cbb02",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Under USA 1956, the Administrator may by rule or order exclude additional persons from the definition of \"agent\" if doing so is consistent with:",
    "choices": [
      "The public interest and the protection of investors",
      "Maximizing broker-dealer profitability",
      "The exclusive discretion of the SEC",
      "FINRA bylaws and local custom"
    ],
    "answerIndex": 0,
    "rationale": "The Administrator's authority to grant exclusions or exemptions under the USA is bounded by the standard \"in the public interest and for the protection of investors,\" which is the touchstone for state-administered carve-outs. Choice B is wrong because the Administrator's powers exist to protect investors, not to advance BD profits.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "medium",
    "id": "bb69af56de50",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "A broker-dealer is registered with the SEC under Section 15 of the Securities Exchange Act of 1934. Its individual agents:",
    "choices": [
      "Are also automatically registered with the SEC at the individual level",
      "Must separately register with each state where they conduct business; SEC BD registration does not register them as state agents",
      "Are exempt from FINRA registration",
      "Need not file Form U4"
    ],
    "answerIndex": 1,
    "rationale": "Section 15 of the 1934 Act registers the broker-dealer firm at the federal level; agents must still register with the states where they conduct business and with FINRA, typically via Form U4. Choice A is wrong because federal BD registration is separate from individual agent registration at the state level.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 15"
    },
    "difficulty": "medium",
    "id": "aecdbeff411e",
    "subtopicId": "4.4",
    "reviewed": false
  },
  {
    "stem": "Under USA 1956, whether a person is an \"agent\" is determined principally by:",
    "choices": [
      "Whether the individual is paid commissions for sales",
      "Whether the individual represents a BD or issuer in effecting or attempting to effect securities transactions, regardless of compensation",
      "Whether the individual has passed the Series 65 exam",
      "Whether the individual is a U.S. citizen"
    ],
    "answerIndex": 1,
    "rationale": "Section 401(b) defines \"agent\" by representational and functional activity — representing a BD or issuer in effecting (or attempting to effect) securities transactions — and is independent of whether or how compensation is paid. Choice A is the top distractor; commissions are common but not part of the statutory definition.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "hard",
    "id": "f9119d6e4807",
    "subtopicId": "4.4",
    "reviewed": false
  }
];

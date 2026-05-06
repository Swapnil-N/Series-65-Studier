import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Under the Securities Exchange Act of 1934, the term 'broker' is defined as any person engaged in the business of effecting transactions in securities for which of the following?",
    "choices": [
      "The person's own account",
      "The account of others",
      "Either own account or account of others, with no distinction",
      "The U.S. government exclusively"
    ],
    "answerIndex": 1,
    "rationale": "Section 3(a)(4) of the Exchange Act defines a broker as any person engaged in the business of effecting securities transactions for the account of others. Choice A describes a dealer under Section 3(a)(5), which acts as principal for its own account. The 'for the account of others' element is what makes a broker an agent rather than a principal.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 3(a)(4)"
    },
    "difficulty": "easy",
    "id": "9757097cc9a0",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Securities Exchange Act of 1934, a 'dealer' is best described as a person who:",
    "choices": [
      "Effects securities transactions solely for the account of customers",
      "Is engaged in the business of buying and selling securities for the person's own account",
      "Merely holds securities as a long-term investor",
      "Provides investment advice for compensation"
    ],
    "answerIndex": 1,
    "rationale": "Section 3(a)(5) defines a dealer as any person engaged in the business of buying and selling securities for the person's own account, through a broker or otherwise. Choice A confuses the dealer (principal) with the broker (agent for others) defined in Section 3(a)(4). Choice C is excluded by the statutory 'trader exclusion,' which carves out persons who buy/sell for their own account but not as a regular business.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 3(a)(5)"
    },
    "difficulty": "easy",
    "id": "6b0b04b20ff3",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Which of the following best characterizes the capacity in which a broker acts versus the capacity in which a dealer acts?",
    "choices": [
      "A broker acts as principal for its own account; a dealer acts as agent for customers",
      "A broker acts as agent for customers; a dealer acts as principal for its own account",
      "Both act exclusively as fiduciaries to retail customers",
      "Both act only as market makers on an exchange"
    ],
    "answerIndex": 1,
    "rationale": "The fundamental capacity distinction is that a broker acts in an agency capacity for the account of others while a dealer acts in a principal capacity for its own account. Choice A is the inverse of the correct answer and is a common trap. The same firm can act in both capacities at different times, but each individual transaction has only one capacity, which must be disclosed on the trade confirmation.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "difficulty": "easy",
    "id": "b0d3ba1cd26e",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, the term 'broker-dealer' includes any person engaged in the business of effecting transactions in securities for the account of others or:",
    "choices": [
      "For the person's own account",
      "Solely for the account of an issuer",
      "Solely for the U.S. Treasury",
      "Solely for affiliated banks"
    ],
    "answerIndex": 0,
    "rationale": "USA Section 401(c) collapses the federal broker and dealer definitions into a single 'broker-dealer' category that covers any person effecting transactions for others or for its own account. Choice B is wrong because issuers selling their own securities are specifically excluded from the broker-dealer definition under the USA. The single combined definition is one of the principal differences between state and federal law.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "easy",
    "id": "231bb55ae6a6",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, which of the following is specifically excluded from the definition of broker-dealer?",
    "choices": [
      "An agent",
      "A national securities exchange member firm with retail clients in the state",
      "A foreign broker-dealer that opens a branch in the state",
      "A market maker registered with FINRA"
    ],
    "answerIndex": 0,
    "rationale": "USA Section 401(c) explicitly excludes agents, issuers, and banks/savings institutions from the broker-dealer definition because each is treated under a separate framework. Choice B is wrong because a member firm with in-state retail clients is precisely the kind of entity required to register as a broker-dealer. The exclusion of agents avoids double-registration of the natural-person sales force.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "easy",
    "id": "4554dc295a86",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "When a registered representative employed by a member firm effects securities transactions for retail customers, that individual is technically classified under the Uniform Securities Act as a(n):",
    "choices": [
      "Broker-dealer",
      "Investment adviser",
      "Agent",
      "Issuer"
    ],
    "answerIndex": 2,
    "rationale": "Under the USA, a natural person who represents a broker-dealer or issuer in effecting securities transactions is an 'agent,' not a broker-dealer. Choice A is wrong because the broker-dealer is the entity (the firm); an individual cannot register as a broker-dealer in this context. The agent registers using Form U4 with the firm sponsoring the registration.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401"
    },
    "difficulty": "easy",
    "id": "82374c5db670",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Federal registration of broker-dealers operating in interstate commerce is generally required under which provision?",
    "choices": [
      "Section 15(a) of the Securities Exchange Act of 1934",
      "Section 11 of the Securities Act of 1933",
      "Section 203(a) of the Investment Advisers Act of 1940",
      "Section 17(a) of the Securities Act of 1933"
    ],
    "answerIndex": 0,
    "rationale": "Section 15(a) of the Exchange Act makes it unlawful for a broker or dealer to use the mails or interstate commerce to effect securities transactions unless registered with the SEC. Choice C governs investment advisers, not broker-dealers, and is a common distractor on Series 65 exams. Section 15(b) covers the application and granting of registration once Section 15(a) is triggered.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 15(a)"
    },
    "difficulty": "easy",
    "id": "6f3b516fddd7",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "An issuer that sells its own newly issued common stock directly to the public:",
    "choices": [
      "Must register as a broker-dealer under the USA",
      "Is specifically excluded from the definition of broker-dealer under the USA",
      "Must register as an agent under the USA",
      "Is automatically a dealer under federal law"
    ],
    "answerIndex": 1,
    "rationale": "USA Section 401(c) excludes issuers from the definition of broker-dealer because the issuer is selling its own securities, not effecting transactions for the account of others as a regular business. Choice C is incorrect because the issuer itself is an entity, not a natural person, and the natural persons who sell on its behalf may have to register as agents. The exclusion does not relieve the underlying securities from registration requirements.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "easy",
    "id": "58fc268a3eed",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, a 'person' for definitional purposes includes:",
    "choices": [
      "Only natural persons resident in the state",
      "Only corporations and partnerships, never individuals",
      "Both natural persons and legal entities such as corporations, partnerships, and trusts",
      "Only entities that are SEC-registered"
    ],
    "answerIndex": 2,
    "rationale": "The USA defines 'person' broadly to include both natural persons and legal entities (corporations, partnerships, associations, trusts, governments, and political subdivisions). This breadth is why the broker-dealer definition's reach can extend to virtually any kind of organized entity. Choice A is wrong because non-residents and entities are equally captured if they otherwise meet the definition.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102"
    },
    "difficulty": "easy",
    "id": "0b11ad0ff7b5",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "A firm that buys 1,000 shares from one customer at one price and immediately sells the same 1,000 shares to another customer at a higher price is acting in what capacity on the second leg?",
    "choices": [
      "Agent",
      "Principal (dealer)",
      "Issuer",
      "Investment adviser"
    ],
    "answerIndex": 1,
    "rationale": "Buying for and selling from the firm's own inventory or trading book makes the firm a principal (dealer), even on a 'riskless principal' basis where both legs are nearly simultaneous. Choice A is incorrect because an agent merely arranges the trade between two outside parties for a commission; here, the firm itself takes title to the security on each leg and is compensated by a markup. Disclosure of capacity is required on the customer confirmation under Rule 10b-10.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "difficulty": "easy",
    "id": "fe8140cbcda6",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Securities Exchange Act of 1934, the phrase 'engaged in the business' in defining a broker is generally interpreted to require:",
    "choices": [
      "A single isolated transaction in any 12-month period",
      "Regular participation in securities transactions, often with transaction-based compensation",
      "SEC registration as a precondition",
      "Membership on a national securities exchange"
    ],
    "answerIndex": 1,
    "rationale": "The SEC and courts look at factors such as regularity of participation, holding oneself out as a broker, and receipt of transaction-based compensation to determine whether a person is 'engaged in the business.' Choice A is wrong because a single isolated transaction generally does not meet the regularity element. Choice C reverses cause and effect: registration is required because one is engaged in the business, not the other way around.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 3(a)(4)"
    },
    "difficulty": "medium",
    "id": "7bafacb82ec4",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "An out-of-state broker-dealer with no place of business in State X effects transactions in State X exclusively with existing customers who are residents of State Y temporarily vacationing in State X. Under the Uniform Securities Act, the broker-dealer is:",
    "choices": [
      "Required to register in State X immediately",
      "Excluded from the definition of broker-dealer in State X",
      "Required to register only its agents in State X",
      "Required to file a consent to service of process in State X"
    ],
    "answerIndex": 1,
    "rationale": "This is the classic 'snowbird' exclusion in USA Section 401(c): a BD with no place of business in the state and whose only in-state activities are with existing customers who are not residents of the state is not a broker-dealer in that state. Choice A is wrong because the snowbird carve-out specifically prevents that result. The exclusion would be lost if the BD opened an office or solicited new in-state residents.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "medium",
    "id": "23d96f3861d3",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, an out-of-state broker-dealer with no place of business in the state may be excluded from the broker-dealer definition if its only in-state customers are:",
    "choices": [
      "Public retail walk-in customers",
      "Issuers, other broker-dealers, and institutional investors such as banks, insurance companies, and investment companies",
      "Any customer with at least $100,000 in net worth",
      "Any non-accredited investor"
    ],
    "answerIndex": 1,
    "rationale": "USA Section 401(c) excludes a BD with no place of business in the state whose only in-state activities are with issuers, other BDs, or specified institutional investors (banks, savings institutions, trust companies, insurance companies, investment companies under the Investment Company Act of 1940, pension/profit-sharing trusts, and similar institutions). Choice A is wrong because retail walk-in customers are exactly the activity that triggers state registration. The list of qualifying institutional buyers is closed and does not turn on customer net worth alone.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "medium",
    "id": "d639acf81a81",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, a 'place of business' for broker-dealer registration purposes is generally:",
    "choices": [
      "Any state where the BD's customers reside",
      "Any office or location at which the BD regularly provides securities services or holds itself out as doing so",
      "Only the firm's principal headquarters",
      "Any restaurant where a single client meeting once occurred"
    ],
    "answerIndex": 1,
    "rationale": "A 'place of business' is generally an office or other location where the broker-dealer regularly conducts a securities business or otherwise holds itself out as available. Choice A is wrong because customer residence does not, by itself, create a place of business for the firm. The presence or absence of a place of business is critical because the no-place-of-business carve-outs (snowbird and institutional-only) are available only when the BD has no in-state office.",
    "citation": {
      "source": "OTHER",
      "ref": "Kaplan Series 65 Study Guide"
    },
    "difficulty": "medium",
    "id": "10086874dd6f",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, which of the following customers is generally NOT considered an 'institutional investor' for purposes of the broker-dealer no-place-of-business exclusion?",
    "choices": [
      "A commercial bank",
      "An insurance company",
      "An investment company registered under the Investment Company Act of 1940",
      "A retail individual investor with $1 million of net worth"
    ],
    "answerIndex": 3,
    "rationale": "The institutional-investor list under USA Section 401(c) is statutory and includes banks, savings institutions, trust companies, insurance companies, registered investment companies, and pension/profit-sharing trusts; an individual is not on the list regardless of net worth. Choice C is wrong as a distractor because investment companies are explicitly named institutional investors. Net-worth tests come from federal Regulation D 'accredited investor' rules, not the USA institutional-investor exclusion.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "medium",
    "id": "b7ad467ea5c3",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, banks and savings institutions are generally:",
    "choices": [
      "Included in the broker-dealer definition because they hold securities for customers",
      "Specifically excluded from the broker-dealer definition",
      "Required to register as agents but not as broker-dealers",
      "Treated as issuers for all securities activities"
    ],
    "answerIndex": 1,
    "rationale": "USA Section 401(c) excludes banks, savings institutions, and trust companies from the broker-dealer definition, mirroring the historical federal exclusion. Choice A is wrong because the very purpose of the exclusion is to keep these entities outside the BD framework, recognizing that they are regulated by banking authorities. Federal treatment was modified by Gramm-Leach-Bliley, but the basic state exclusion in the USA remains.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "medium",
    "id": "2edd4bf97946",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "After the Gramm-Leach-Bliley Act, banks engaged in securities activities under federal law:",
    "choices": [
      "Lost all exclusions and must register as broker-dealers for any securities activity",
      "Retained narrow statutory exceptions (such as trust, custody, networking, and sweep activities) but otherwise must push securities activities into a registered broker-dealer affiliate",
      "Were entirely re-categorized as investment advisers",
      "Are exempt from federal securities laws altogether"
    ],
    "answerIndex": 1,
    "rationale": "Gramm-Leach-Bliley replaced the blanket federal bank exclusion with a list of specified permissible activities (trust, custody, networking, sweep accounts, etc.); other securities activities have to be conducted through a registered broker-dealer affiliate. Choice A overstates the change because GLB preserved targeted exceptions rather than eliminating all exclusions. The SEC implemented these distinctions in Regulation R.",
    "citation": {
      "source": "SEC",
      "ref": "Gramm-Leach-Bliley Act"
    },
    "difficulty": "hard",
    "id": "c7220a3c0cf6",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, an out-of-state broker-dealer with no in-state office whose only in-state activity is effecting transactions with other broker-dealers located in that state:",
    "choices": [
      "Must register in the state as a foreign broker-dealer",
      "Is excluded from the state's broker-dealer definition",
      "Must obtain consent to service of process before each trade",
      "Must register only its agents, not the firm itself"
    ],
    "answerIndex": 1,
    "rationale": "Trading exclusively with other broker-dealers, with no in-state office, fits squarely within the USA Section 401(c) exclusion that recognizes BD-to-BD activity as professional and not requiring state registration. Choice A is wrong because the very point of the exclusion is to prevent unnecessary state-level registration when there is no in-state retail activity. If the firm later opened a branch or solicited retail customers in the state, the exclusion would be lost.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "medium",
    "id": "b0ce3d6a6dd7",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, an 'agent' is best defined as:",
    "choices": [
      "Any entity that effects securities transactions for compensation",
      "Any individual, other than a broker-dealer, who represents a broker-dealer or issuer in effecting or attempting to effect securities transactions",
      "A securities issuer selling its own securities",
      "An investment adviser representative providing financial planning"
    ],
    "answerIndex": 1,
    "rationale": "Under the USA, an agent is a natural person, not an entity, who represents a broker-dealer or issuer in effecting (or attempting to effect) securities transactions. Choice A is wrong because the agent definition expressly excludes the broker-dealer entity itself, and entities cannot be agents in this sense. Distinguishing the agent (natural person) from the broker-dealer (firm) is foundational on the Series 65.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401"
    },
    "difficulty": "easy",
    "id": "c5947f3ec712",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "If an out-of-state broker-dealer opens a permanent branch office in a new state and begins soliciting retail clients there, the firm:",
    "choices": [
      "Can continue to rely on the snowbird exclusion in that state",
      "Must register as a broker-dealer in that state",
      "Is automatically excluded as an institutional dealer",
      "Need only register its branch manager as an agent"
    ],
    "answerIndex": 1,
    "rationale": "Once a firm has a place of business in the state and solicits retail customers, the no-place-of-business carve-outs of USA Section 401(c) (snowbird, institutional-only, BD-to-BD) are lost, and registration is required. Choice A is wrong because the snowbird exclusion requires both the absence of a place of business and limitation to existing non-resident customers. Maintaining a branch office is the textbook trigger for state registration.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "easy",
    "id": "3b13fa2f5e4b",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Federal law distinguishes a 'dealer' from a 'trader' primarily on the basis of:",
    "choices": [
      "The size of the firm's net capital",
      "Whether the person buys and selling securities for own account as part of a regular business (dealer) versus solely for own investment (trader)",
      "Membership in SIPC",
      "The geographic scope of operations"
    ],
    "answerIndex": 1,
    "rationale": "Section 3(a)(5) of the Exchange Act excludes from the dealer definition any person who buys or sells securities for the person's own account but not as part of a regular business — the so-called 'trader exclusion.' Choice A is wrong because net capital is a regulatory consequence of dealer status, not its definition. The trader exclusion is the reason ordinary investors trading their own portfolios are not dealers.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 3(a)(5)"
    },
    "difficulty": "medium",
    "id": "e385e8b01f70",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Which of the following best explains why an issuer selling its own newly registered securities is generally not considered a broker-dealer?",
    "choices": [
      "Issuers are exempt from all federal securities laws",
      "An issuer effecting transactions in its own securities is acting for itself, not 'for the account of others' or as a regular dealer business",
      "Issuers are always banks excluded from the BD definition",
      "Issuers must instead register as investment advisers"
    ],
    "answerIndex": 1,
    "rationale": "The broker definition under Section 3(a)(4) requires acting 'for the account of others,' and the dealer definition contemplates engagement in the regular business of buying and selling for one's own account; an issuer selling its own securities does neither in the relevant sense. Choice A is wrong because issuers remain subject to many federal securities laws, particularly the Securities Act of 1933 registration regime. State-level analysis under USA Section 401(c) reaches the same result through an explicit issuer exclusion.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 3(a)(4)"
    },
    "difficulty": "medium",
    "id": "d7db21896e88",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Securities Exchange Act of 1934, a broker-dealer that sells securities in interstate commerce without being SEC-registered:",
    "choices": [
      "Has not violated any federal law as long as it is registered in at least one state",
      "Has violated Section 15(a) and is subject to enforcement action",
      "Need only register if it exceeds $100 million in customer assets",
      "Is exempt if it limits activity to penny stocks"
    ],
    "answerIndex": 1,
    "rationale": "Section 15(a) of the Exchange Act makes it unlawful for a non-exempt broker or dealer to use the mails or interstate commerce to effect transactions in non-exempt securities without SEC registration. Choice A confuses state and federal regulation; state registration does not satisfy the federal requirement. Penny-stock activity actually triggers heightened obligations rather than exemptions.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 15(a)"
    },
    "difficulty": "medium",
    "id": "654cecff7589",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under federal law, the principal difference between a broker and a dealer is best summarized as:",
    "choices": [
      "Brokers handle equities and dealers handle bonds",
      "Brokers act in an agency capacity for customers; dealers act as principals trading from their own accounts",
      "Brokers register with FINRA, while dealers register only with the SEC",
      "Dealers may not charge any compensation"
    ],
    "answerIndex": 1,
    "rationale": "The agency-versus-principal distinction is the operative federal test: brokers (Section 3(a)(4)) act as agent for the account of others, while dealers (Section 3(a)(5)) buy and sell for their own account in the regular course of business. Choice A is wrong because both brokers and dealers may handle equities and debt; product type does not determine capacity. The same firm can act as broker on one trade and dealer on another, with capacity disclosed on the confirmation.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934"
    },
    "difficulty": "medium",
    "id": "81934e4e8b98",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "A firm executes a customer trade by selling shares from its own inventory at a marked-up price. The firm is acting as:",
    "choices": [
      "Agent (broker)",
      "Principal (dealer)",
      "Issuer",
      "Investment adviser"
    ],
    "answerIndex": 1,
    "rationale": "Filling a customer order from the firm's own inventory and charging a markup is the textbook principal (dealer) transaction. Choice A is wrong because an agent is paid a commission for arranging a trade between two outside parties and does not take title to the security. Markup-based principal capacity must be disclosed on the trade confirmation under Rule 10b-10.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 3(a)(5)"
    },
    "difficulty": "easy",
    "id": "3128a015c943",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, an out-of-state broker-dealer with no place of business in the state effects transactions in the state only with insurance companies and registered investment companies. Under USA Section 401(c), the firm is most likely:",
    "choices": [
      "Required to register as a broker-dealer in the state",
      "Excluded from the broker-dealer definition in the state",
      "Required to register as an investment adviser instead",
      "Required to register only at the federal level"
    ],
    "answerIndex": 1,
    "rationale": "Effecting transactions exclusively with named institutional investors (insurance companies and Investment Company Act of 1940 registered funds), without an in-state office, falls squarely within the USA institutional-only carve-out. Choice A is wrong because the carve-out is designed to avoid state registration in exactly this scenario. Adding any in-state retail customer or opening an office would defeat the exclusion.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "medium",
    "id": "936739680a18",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Which of the following persons would most clearly NOT meet the federal definition of broker under Section 3(a)(4) of the Exchange Act?",
    "choices": [
      "A firm that solicits retail clients and earns commissions on each completed securities trade",
      "A registered representative who arranges securities purchases for customers and receives transaction-based compensation",
      "A long-term individual investor who occasionally rebalances a personal brokerage account",
      "A finder who routinely introduces investors to private placements for transaction-based fees"
    ],
    "answerIndex": 2,
    "rationale": "An individual occasionally trading a personal account is not 'engaged in the business of effecting transactions for the account of others' — the trading is for the person's own account, on a sporadic basis, and without solicitation or transaction-based compensation from third parties. Choice D is the leading distractor because finders who introduce investors and earn transaction-based compensation are routinely treated as unregistered brokers under SEC enforcement positions. The presence of regularity, third-party clients, and transaction-based pay is what triggers broker status.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 3(a)(4)"
    },
    "difficulty": "hard",
    "id": "c9cb44a1ced0",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Which of the following is true about the structure of the federal broker-dealer definition compared to the Uniform Securities Act?",
    "choices": [
      "Federal law uses one combined 'broker-dealer' definition; the USA splits it into broker and dealer",
      "Federal law splits 'broker' and 'dealer' into separate definitions; the USA uses a single combined 'broker-dealer' definition",
      "Both federal and state law use a single 'broker-dealer' definition with no internal distinction",
      "Both federal and state law treat dealers as a sub-category of investment advisers"
    ],
    "answerIndex": 1,
    "rationale": "Sections 3(a)(4) and 3(a)(5) of the Exchange Act define 'broker' and 'dealer' separately at the federal level, while USA Section 401(c) consolidates them into one 'broker-dealer' category covering activity for others or for own account. Choice A inverts the relationship and is the most common trap. Understanding which level of law uses which structure is essential to applying the correct exclusions.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "hard",
    "id": "19b465b73cd1",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Which of the following is the best description of a 'riskless principal' transaction?",
    "choices": [
      "An agency trade in which the broker takes no inventory position",
      "A principal trade in which the firm, after receiving an order, immediately buys (or sells) the security in the market and offsets it against the customer order",
      "A principal trade involving only Treasury securities",
      "An agency trade for the firm's own account"
    ],
    "answerIndex": 1,
    "rationale": "In a riskless principal transaction, the firm fills a customer order by simultaneously executing an offsetting transaction in the market, taking title only briefly and without significant market risk; it is still a principal (dealer) capacity. Choice A is wrong because an agency trade does not involve the firm taking title at any point. Rule 10b-10 requires disclosure of principal capacity even when the position is effectively riskless.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "difficulty": "medium",
    "id": "0119901b5099",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, which of the following is NOT excluded from the definition of broker-dealer?",
    "choices": [
      "An agent",
      "An issuer",
      "A bank or savings institution",
      "A foreign broker-dealer that opens a branch office in the state and solicits retail residents"
    ],
    "answerIndex": 3,
    "rationale": "Under USA Section 401(c), agents, issuers, and banks/savings institutions are explicitly excluded; a foreign BD with an in-state office and retail solicitation does not fit any exclusion and must register. Choice A is wrong because agents are the classic excluded category — they register separately. The presence of both a place of business and retail solicitation is fatal to the no-place-of-business carve-outs.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "medium",
    "id": "c2644107ad1a",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "An out-of-state broker-dealer maintains a permanent office in State A. From that office, it phones a State B resident who is a brand-new prospect to solicit a securities transaction. Under the Uniform Securities Act, the broker-dealer most likely:",
    "choices": [
      "May rely on the snowbird exclusion in State B",
      "Must register as a broker-dealer in State B because it is soliciting an in-state retail customer",
      "Is exempt because it is registered in State A",
      "Is exempt because it has no in-state office in State B"
    ],
    "answerIndex": 1,
    "rationale": "Soliciting a new retail resident in State B brings the firm within State B's broker-dealer registration jurisdiction; the no-place-of-business carve-outs in USA Section 401(c) require activity to be limited to existing non-resident customers, other BDs, issuers, or institutional investors. Choice A is wrong because the snowbird exception applies to existing customers vacationing across state lines, not new in-state prospects. Registration in another state does not substitute for registration in the state where retail activity occurs.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "hard",
    "id": "773ccf960c84",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under Section 3(a)(5) of the Exchange Act, which of the following is most likely to fall within the 'trader exclusion' from the definition of dealer?",
    "choices": [
      "A market-making firm that continuously quotes bid and offer prices in a security",
      "A natural person who actively manages a personal portfolio for own account, not as a regular business of buying and selling for others",
      "A broker-dealer that holds securities in inventory to facilitate customer trades",
      "An underwriter that takes securities from an issuer for resale to the public"
    ],
    "answerIndex": 1,
    "rationale": "The trader exclusion in Section 3(a)(5) carves out persons who buy and sell securities for their own account but not as part of a regular business — that is, ordinary investors, even active ones, are not dealers. Choice A is wrong because continuous two-sided quoting is precisely the dealer/market-maker activity Congress intended to capture. The line between trader and dealer turns on regularity, customer-facing activity, and holding oneself out to the market.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 3(a)(5)"
    },
    "difficulty": "hard",
    "id": "827cd3e528e5",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, a broker-dealer's 'existing customer' for snowbird-exclusion purposes is best understood as:",
    "choices": [
      "Any individual who has ever heard of the firm",
      "A person who already had an account or pre-existing securities relationship with the firm before traveling temporarily into the state",
      "Any in-state resident the firm has solicited",
      "Any institutional investor"
    ],
    "answerIndex": 1,
    "rationale": "The snowbird carve-out under USA Section 401(c) protects the BD only when the customer relationship pre-existed the temporary in-state visit; opening a new account during the visit defeats the exclusion. Choice C is wrong because the very purpose of the carve-out is to limit, not expand, in-state retail activity. Properly, the exclusion preserves continuity of service for clients who travel rather than enabling new in-state solicitation.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "hard",
    "id": "a0eb2a4933ea",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Which of the following self-regulatory organizations is the principal SRO for federally registered broker-dealers in the United States?",
    "choices": [
      "FINRA",
      "MSRB",
      "NFA",
      "NASAA"
    ],
    "answerIndex": 0,
    "rationale": "FINRA is the principal SRO for federally registered broker-dealers; broker-dealers registered under Section 15 of the Exchange Act must generally also be FINRA members. Choice B is wrong because the MSRB writes municipal-securities rules but does not directly examine or discipline most broker-dealers — that enforcement is delegated to FINRA. Choice D is the state-regulator association, not an SRO with broker-dealer membership.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA"
    },
    "difficulty": "easy",
    "id": "aece058dddbc",
    "subtopicId": "4.3",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, which of the following situations would most likely require an entity to register as a broker-dealer in the state?",
    "choices": [
      "A bank trust department effecting transactions in a fiduciary capacity",
      "An issuer selling only its own newly issued securities to investors",
      "A securities firm with a branch office in the state that solicits retail residents and effects transactions for them",
      "An out-of-state firm with no place of business in the state whose only in-state activity is with other broker-dealers"
    ],
    "answerIndex": 2,
    "rationale": "Maintaining an in-state branch office and soliciting retail residents is the textbook scenario requiring broker-dealer registration under USA Section 401(c). Choices A and B are explicitly excluded categories (banks and issuers), and choice D fits the no-place-of-business / BD-to-BD carve-out. Recognizing which fact patterns trip the exclusions is a recurring Series 65 testing point.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(c)"
    },
    "difficulty": "medium",
    "id": "493aa7706ace",
    "subtopicId": "4.3",
    "reviewed": false
  }
];

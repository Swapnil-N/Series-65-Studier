import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Under the Uniform Securities Act, which of the following is the broadest test used by courts to determine whether a particular instrument is a 'security'?",
    "choices": [
      "The Sharpe ratio test",
      "The Howey test for investment contracts",
      "The risk-based capital test",
      "The Modigliani-Miller test"
    ],
    "answerIndex": 1,
    "rationale": "SEC v. Howey (1946) established the four-element test for an investment contract: an investment of money, in a common enterprise, with an expectation of profits, derived primarily from the efforts of others. Choice A is the top distractor because it sounds like a securities-law test, but the Sharpe ratio is a risk-adjusted return measure used in performance evaluation, not a definition test for what is a security.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 2(a)(1)"
    },
    "difficulty": "easy",
    "id": "ad65351160c9",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following is NOT one of the four elements of the Howey test for an investment contract?",
    "choices": [
      "An investment of money",
      "In a common enterprise",
      "With an expectation of profits derived primarily from the efforts of others",
      "Held for at least one year before resale"
    ],
    "answerIndex": 3,
    "rationale": "The Howey four elements are: (1) investment of money, (2) common enterprise, (3) expectation of profits, and (4) profits derived primarily from the efforts of others. There is no holding-period requirement built into the Howey test. The closest distractor (D) is wrong because a holding period is associated with Rule 144 affiliate-resale restrictions, not with whether something is a security.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 2(a)(1)"
    },
    "difficulty": "easy",
    "id": "196e6087aab9",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following is generally considered a security under the Uniform Securities Act?",
    "choices": [
      "A fixed annuity contract",
      "A whole life insurance policy",
      "A variable annuity contract",
      "A bank-issued certificate of deposit"
    ],
    "answerIndex": 2,
    "rationale": "Variable annuities are securities because the contract owner bears the investment risk through subaccount choices, satisfying the Howey-style investment-contract analysis. Choice A is the top distractor because students often conflate the two — but a fixed annuity is an insurance product with guaranteed value where the insurer bears the investment risk and is therefore not a security.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(m)"
    },
    "difficulty": "easy",
    "id": "4df4356317e0",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "A client purchases a fixed annuity from a state-licensed insurance producer. Which of the following statements about that contract under the Uniform Securities Act is TRUE?",
    "choices": [
      "The fixed annuity is a security and the producer must register as an agent",
      "The fixed annuity is not a security because the insurer bears the investment risk",
      "The fixed annuity is a security exempt from antifraud rules",
      "Only the registration provisions of the USA apply, not the antifraud provisions"
    ],
    "answerIndex": 1,
    "rationale": "A fixed annuity is not a security; the issuing insurance company bears the investment risk and the contract value is guaranteed, so it is regulated by the state insurance commissioner rather than under securities law. Choice A is the top distractor because students confuse fixed and variable annuities — variable annuities (where the contract holder bears investment risk) are securities, but fixed annuities are not.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(m)"
    },
    "difficulty": "easy",
    "id": "ee3a8fa6712d",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following statements about commodity futures contracts is TRUE under the Uniform Securities Act?",
    "choices": [
      "They are securities and their sale requires state securities registration",
      "They are not securities and are regulated primarily under the Commodity Exchange Act",
      "They are exempt securities under USA Section 402(a)",
      "They are securities only when traded on a national exchange"
    ],
    "answerIndex": 1,
    "rationale": "Commodity futures contracts are not securities under the USA; they are subject to CFTC jurisdiction under the Commodity Exchange Act, not state securities registration. Choice C is the top distractor because students incorrectly try to fit commodity futures into the USA's exempt-security list, but futures fall entirely outside the USA's definition of 'security' rather than being treated as exempt securities.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Exchange Act"
    },
    "difficulty": "medium",
    "id": "a49cb50751c5",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "ABC Distillery sells investors fractional ownership interests in barrels of aging whiskey, with all aging, storage, and resale handled by ABC. Are these interests 'securities' under the Uniform Securities Act?",
    "choices": [
      "No, because physical commodities are never securities",
      "No, because only stocks and bonds qualify as securities",
      "Yes, because they are investment contracts under the Howey analysis",
      "Yes, but only if registered with the CFTC"
    ],
    "answerIndex": 2,
    "rationale": "Whiskey-warehouse receipts marketed as investments where the promoter handles aging, storage, and sale satisfy the Howey test (investment of money, common enterprise, profits expected from the efforts of others) and are therefore investment contracts and securities. Choice A is the top distractor because students assume physical commodities can never be securities, but courts have repeatedly treated commodity-based investment offerings (whiskey, beavers, citrus groves) as securities when packaged as managed investment programs.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 2(a)(1)"
    },
    "difficulty": "medium",
    "id": "b0f29f77e762",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, no security may be offered or sold in a state unless which of the following is true?",
    "choices": [
      "The offering has been approved in writing by the state Administrator",
      "The security is registered, federal covered, exempt, or sold in an exempt transaction",
      "The issuer maintains an office in that state",
      "The sale is reported to the SEC within 15 days"
    ],
    "answerIndex": 1,
    "rationale": "USA Section 301 makes it unlawful to offer or sell a security unless it is registered, the security is federal covered, the security is exempt, or the transaction is exempt. Choice A is the top distractor because students think the Administrator 'approves' offerings; in fact, the Act prohibits any representation that registration constitutes approval or endorsement of the security.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 301"
    },
    "difficulty": "easy",
    "id": "85fd362f3c4a",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following is a recognized method of registering a security at the state level under the Uniform Securities Act?",
    "choices": [
      "Registration by coordination",
      "Registration by exemption",
      "Registration by accreditation",
      "Registration by certification"
    ],
    "answerIndex": 0,
    "rationale": "Under the USA, the permitted state registration methods are notification, coordination, and qualification; coordination is used when the issuer concurrently files with the SEC under the 1933 Act. Choice B is the top distractor because 'exemption' is not a registration method — exempt securities and exempt transactions bypass registration entirely rather than being a way of becoming registered.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 303"
    },
    "difficulty": "easy",
    "id": "4b0cc56abb2e",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Registration by coordination under the USA is most appropriately used by which type of issuer?",
    "choices": [
      "An intrastate issuer offering only to state residents",
      "An issuer concurrently filing a Form S-1 registration with the SEC under the Securities Act of 1933",
      "An issuer claiming a Regulation D Rule 506 exemption",
      "An issuer that has been in operation for fewer than three years"
    ],
    "answerIndex": 1,
    "rationale": "Registration by coordination (USA Section 303) is available when the issuer is concurrently registering with the SEC under the Securities Act of 1933, with state effectiveness coordinated to federal effectiveness. Choice A is the top distractor because intrastate-only offerings are exactly the situation where coordination is unavailable — those issuers must use registration by qualification under Section 304 since there is no SEC filing to coordinate with.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 303"
    },
    "difficulty": "medium",
    "id": "98f6f161df31",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "An issuer that intends to offer securities only to residents of a single state and is not registering with the SEC would most appropriately register under which method?",
    "choices": [
      "Notice filing",
      "Registration by coordination",
      "Registration by qualification",
      "Registration by exemption"
    ],
    "answerIndex": 2,
    "rationale": "Registration by qualification (USA Section 304) is the method used for intrastate offerings or any other offering that is not registered with the SEC; the Administrator reviews the filing on the merits. Choice B is the top distractor because students frequently default to coordination, but coordination requires a concurrent SEC filing under the 1933 Act, which is absent in a state-only intrastate offering.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 304"
    },
    "difficulty": "medium",
    "id": "30578300d4c9",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "A federal covered security is offered into State X by an issuer. Which of the following best describes State X's registration treatment of that security?",
    "choices": [
      "The issuer must register the security by qualification with the State X Administrator",
      "The issuer is exempt from any state filing or fee requirements",
      "The state may require a notice filing, payment of fees, and consent to service of process, but not substantive registration",
      "The issuer must register only if the offering exceeds $5 million"
    ],
    "answerIndex": 2,
    "rationale": "Federal covered securities are preempted from state substantive registration by NSMIA, but states retain authority to require notice filings, fees, and consents to service of process. Choice B is the top distractor because students overstate the scope of federal preemption; while substantive merit review is preempted, notice-filing and fee requirements are explicitly preserved.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 302"
    },
    "difficulty": "easy",
    "id": "7f3739bb4bec",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, the registration statement of a security generally remains effective for...",
    "choices": [
      "90 days from the effective date",
      "Six months",
      "One year from the effective date",
      "Indefinitely, unless revoked by the Administrator"
    ],
    "answerIndex": 2,
    "rationale": "Under USA Section 305, a securities registration is effective for one year from the effective date (and may extend so long as the same offering continues). Choice D is the top distractor because students assume that, once approved, registration lasts forever; in fact state securities registrations expire and must be renewed if the offering continues.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 305"
    },
    "difficulty": "medium",
    "id": "6bf7a2ef1658",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following is true about post-registration requirements for securities registered under the Uniform Securities Act?",
    "choices": [
      "The Administrator may require periodic reports of sales activity, including the amount of securities sold in the state",
      "No post-registration filings are required after the registration becomes effective",
      "Only IPO issuers are subject to any post-registration reporting",
      "Post-registration filings must be made monthly with the SEC, not the state Administrator"
    ],
    "answerIndex": 0,
    "rationale": "USA Section 305 authorizes the Administrator to require periodic reports — frequently quarterly — concerning the progress of the offering and the amount of securities sold in the state. Choice B is the top distractor because students mistakenly assume that effectiveness ends regulatory contact; in fact ongoing reporting and recordkeeping obligations may continue throughout the life of the registration.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 305"
    },
    "difficulty": "medium",
    "id": "bd8384f0cd9b",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following is an EXEMPT SECURITY under USA Section 402(a)?",
    "choices": [
      "Common stock of a small private start-up",
      "U.S. Treasury bonds",
      "Stock in a closely held LLC",
      "Limited partnership interests in a real-estate venture"
    ],
    "answerIndex": 1,
    "rationale": "U.S. government and U.S. agency securities are exempt securities under USA Section 402(a) because of the issuer's federal status — there is no need for state-level merit review. Choice A is the top distractor because students believe small private offerings are categorically exempt; in fact, small private start-up shares typically must rely on an exempt *transaction* (e.g., the limited-offering exemption), not an exempt-security category.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 402"
    },
    "difficulty": "easy",
    "id": "3445247fde22",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following is an EXEMPT SECURITY (not merely an exempt transaction) under the Uniform Securities Act?",
    "choices": [
      "Securities issued or guaranteed by Canada or a Canadian province",
      "Stock issued by a private real estate fund",
      "Promissory notes of a closely held corporation",
      "Limited partnership interests issued in a private placement"
    ],
    "answerIndex": 0,
    "rationale": "USA Section 402(a) exempts securities issued or guaranteed by Canada or any Canadian province (and certain other foreign sovereign issuers) as exempt securities. Choice D is the top distractor because students label private placements as 'exempt' generally; however, a private placement is an exempt *transaction* under Section 402(b), not an exempt security under 402(a) — the security itself remains non-exempt.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 402"
    },
    "difficulty": "easy",
    "id": "db5bc75ce1e8",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following statements regarding bank securities under the Uniform Securities Act is MOST accurate?",
    "choices": [
      "Securities issued by U.S. banks are exempt securities; securities issued by bank holding companies are not categorically exempt",
      "Both bank and bank-holding-company securities are exempt securities",
      "Neither bank nor bank-holding-company securities are exempt",
      "Only securities of state-chartered banks are exempt"
    ],
    "answerIndex": 0,
    "rationale": "Securities issued by federally chartered banks (and most state-chartered banks subject to bank examination) are exempt under USA Section 402(a). Securities issued by *bank holding companies* are not categorically exempt and must be registered or sold in an exempt transaction. Choice B is the top distractor because students conflate the bank and its parent — only the bank's own securities qualify for the exemption.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 402"
    },
    "difficulty": "medium",
    "id": "d5e47fcdb251",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Insurance company securities are treated as exempt securities under the USA when the issuing insurance company...",
    "choices": [
      "Is authorized to do business in the state and is regulated by the state insurance commissioner",
      "Has at least $50 million in total assets",
      "Is licensed to operate in all 50 states",
      "Has been in business for at least 10 years"
    ],
    "answerIndex": 0,
    "rationale": "USA Section 402(a) exempts securities of insurance companies authorized to do business in the state, recognizing that they are already substantively regulated by the state insurance commissioner. Choice B is the top distractor because students invent a financial-size threshold; the USA exemption turns on regulatory authorization, not on asset size.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 402"
    },
    "difficulty": "medium",
    "id": "b788a261fbd5",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following is an EXEMPT TRANSACTION under USA Section 402(b)?",
    "choices": [
      "A primary offering of newly issued common stock by an unregistered start-up to the public",
      "An isolated non-issuer transaction",
      "A securities sale by an issuer to its own employees with general advertising",
      "Sale of a closely held company's stock through a public ad in a local newspaper"
    ],
    "answerIndex": 1,
    "rationale": "An isolated non-issuer transaction (one in which the seller is not the issuer and the transaction is not part of a continuing series) is a long-standing exempt transaction under USA Section 402(b). Choice A is the top distractor because students confuse 'small' offerings with exempt transactions; a primary offering by the issuer to the public is exactly the kind of activity that requires registration unless it qualifies for a private-placement or institutional-investor exemption.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 402"
    },
    "difficulty": "medium",
    "id": "722f7f66e4f6",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes the USA's private-placement (limited-offering) exempt transaction?",
    "choices": [
      "Any transaction with up to 35 accredited investors in a 12-month period",
      "Offers directed to no more than 10 non-institutional persons in the state during 12 consecutive months, with no general solicitation, no commissions paid for soliciting non-institutional buyers, and a reasonable belief that buyers are purchasing for investment",
      "Sales of any amount to a single retail buyer",
      "Any sale exempt under SEC Rule 506(c)"
    ],
    "answerIndex": 1,
    "rationale": "USA Section 402(b) exempts transactions in which offers are made to no more than 10 non-institutional persons in the state during any 12 consecutive months, with no general solicitation, no commissions paid for soliciting non-institutional buyers, and a reasonable belief that the buyers are purchasing for investment. Choice A is the top distractor because students confuse the federal Rule 506 framework (35 non-accredited purchasers) with the much more restrictive USA state-law private-placement test.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 402"
    },
    "difficulty": "hard",
    "id": "86ed7a713aee",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Sales of securities to which of the following counterparties are typically exempt as transactions under the Uniform Securities Act?",
    "choices": [
      "A retail customer in the state",
      "An insurance company, investment company, bank, or other institutional investor",
      "The issuer's own employees, with no further restrictions",
      "Existing common-stock holders in a transaction with general solicitation"
    ],
    "answerIndex": 1,
    "rationale": "Sales to institutional investors — banks, savings institutions, trust companies, insurance companies, investment companies, broker-dealers, and similar entities — are exempt transactions under USA Section 402(b). Choice A is the top distractor because retail customers are precisely the unsophisticated buyers that registration is designed to protect, so retail sales of non-exempt securities require registration unless another exemption (e.g., unsolicited brokerage) applies.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 402"
    },
    "difficulty": "easy",
    "id": "bda4c013e34a",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "An unsolicited buy order for a non-exempt security is received from a customer at a registered broker-dealer. Under the Uniform Securities Act, this transaction is best characterized as...",
    "choices": [
      "An exempt transaction (the unsolicited non-issuer transaction exemption)",
      "A non-exempt transaction requiring full registration of the security",
      "Permitted only if the customer qualifies as accredited",
      "Prohibited unless the security is federal covered"
    ],
    "answerIndex": 0,
    "rationale": "Unsolicited non-issuer transactions executed at the customer's instruction are exempt transactions under USA Section 402(b). Most states require the broker-dealer to obtain and retain a written acknowledgment evidencing the unsolicited nature of the order. Choice B is the top distractor because students assume the underlying security must be registered for any sale to be lawful; in fact, the unsolicited character of the order is what brings the transaction within the exemption.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 402"
    },
    "difficulty": "medium",
    "id": "0d2652aeb72b",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, an 'issuer' is best defined as...",
    "choices": [
      "Any broker-dealer that brings a security to market",
      "Any person who issues or proposes to issue a security",
      "The transfer agent named on the security certificate",
      "The state agency that registers a security"
    ],
    "answerIndex": 1,
    "rationale": "An issuer under the USA is any person who issues or proposes to issue a security; this typically means the corporation, partnership, government, or other entity that creates the security. Choice A is the top distractor because students confuse distribution participants with the issuer; a broker-dealer that distributes the security on behalf of the issuer is an underwriter or selling agent, not the issuer itself.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102"
    },
    "difficulty": "easy",
    "id": "db9727cf94a7",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following is true about the definition of 'issuer' under the Uniform Securities Act?",
    "choices": [
      "A natural person can never be an issuer",
      "The U.S. government and its agencies are excluded from the definition of issuer",
      "A person who proposes to issue a security qualifies as an issuer even before the security is actually sold",
      "Only public corporations qualify as issuers"
    ],
    "answerIndex": 2,
    "rationale": "The USA's issuer definition expressly captures any person who 'issues or proposes to issue' a security, so coverage attaches at the proposal/pre-sale stage. Choice A is the top distractor because students assume only entities can be issuers; in fact the definition uses 'person', which encompasses both natural persons and entities, and even governments are issuers of their own securities.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102"
    },
    "difficulty": "medium",
    "id": "50c2734d5443",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Sally is the founder and sole officer of XYZ Corp., a small start-up. She personally telephones 50 prospective investors in her state to solicit purchases of XYZ common stock. Under the Uniform Securities Act, Sally is...",
    "choices": [
      "Acting as an issuer agent and is generally required to register as an agent unless an exemption applies to the security or the transaction",
      "Exempt from agent registration because she is the issuer's executive officer",
      "Exempt because there is no broker-dealer involved",
      "Exempt because executive officers never need to register"
    ],
    "answerIndex": 0,
    "rationale": "An individual representing an issuer in effecting or attempting to effect securities transactions is an agent under USA Section 401(b) and generally must register as an issuer agent unless an exemption applies (e.g., the security itself is exempt or the transaction qualifies under Section 402(b)). Choice B is the top distractor because students assume officer/founder status confers an exemption; in reality, an executive who solicits buyers is an agent unless the underlying security or transaction is exempt — title alone does not trigger any exemption.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "hard",
    "id": "75b561e044f4",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "An individual representing an issuer in effecting transactions in which of the following types of securities is generally NOT required to register as an agent under the Uniform Securities Act?",
    "choices": [
      "Common stock of a private start-up",
      "Securities issued or guaranteed by the U.S. government",
      "A non-exempt limited partnership interest",
      "Privately placed promissory notes that do not qualify for any exemption"
    ],
    "answerIndex": 1,
    "rationale": "Issuer representatives effecting transactions in exempt securities listed in USA Section 402(a) — such as U.S. government and municipal securities — are generally exempt from agent registration. Choice A is the top distractor because students believe small private-company stock automatically gets the same treatment as exempt securities; in fact, non-exempt private-company stock requires agent registration unless the underlying transaction is exempt under Section 402(b).",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 402"
    },
    "difficulty": "medium",
    "id": "6706fa24a72d",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "An individual is hired to represent an issuer solely in selling to institutional investors in the state pursuant to USA Section 402(b)(8). Under the USA, the individual...",
    "choices": [
      "Must register as an agent of the issuer in any case",
      "Must register as an investment adviser representative",
      "Is generally not required to register as an agent because the transactions qualify as exempt transactions",
      "Must register as a broker-dealer"
    ],
    "answerIndex": 2,
    "rationale": "Individuals representing issuers exclusively in transactions exempt under Section 402(b) — including sales to institutional investors — are generally not required to register as issuer agents. Choice A is the top distractor because students apply a default 'always register' rule; the correct trigger is whether the underlying security or transaction is exempt, and exempt-transaction sales do not require issuer-agent registration.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 402"
    },
    "difficulty": "medium",
    "id": "6d57bed77319",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "A finder introduces a potential investor to an issuer and is paid a $5,000 fee each time an introduction results in a closed securities transaction. Under the Uniform Securities Act, this finder...",
    "choices": [
      "Is exempt from agent registration as long as the fee is below a $25,000 ceiling",
      "Is generally treated as an agent because the compensation is contingent on a securities transaction (transaction-based)",
      "Is treated as an investment adviser representative",
      "May operate without registration as long as the issuer disclaims responsibility"
    ],
    "answerIndex": 1,
    "rationale": "When a finder receives compensation that is contingent on consummation of a securities transaction (transaction-based comp), state regulators generally treat the finder as effecting securities transactions and therefore as an agent who must register. Choice A is the top distractor because students invent a de minimis dollar threshold; the USA agent definition contains no fee ceiling that exempts transaction-based finder compensation from registration.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "hard",
    "id": "1827b5dd84dc",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Under the USA antifraud authority, the prohibition on fraud in connection with the offer, sale, or purchase of securities applies to...",
    "choices": [
      "Only securities that have been registered under the Act",
      "Only securities that are not federal covered",
      "All securities, including exempt securities and securities sold in exempt transactions",
      "Only securities sold by registered broker-dealers"
    ],
    "answerIndex": 2,
    "rationale": "USA Section 501 prohibits fraud, deceit, and material misstatements in connection with the offer, sale, or purchase of *any* security — registered, exempt, or federal covered. Choice A is the top distractor because students confuse registration exemptions with antifraud exemptions; exemption from the registration provisions never confers exemption from the antifraud provisions.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 501"
    },
    "difficulty": "medium",
    "id": "acae368c5632",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Under USA Section 501, which of the following is most clearly prohibited?",
    "choices": [
      "Charging a high commission that is fully disclosed in the prospectus",
      "Making an untrue statement of a material fact in connection with the offer or sale of a security",
      "Selling municipal bonds without state registration",
      "Distributing offering memoranda to qualified institutional buyers"
    ],
    "answerIndex": 1,
    "rationale": "USA Section 501 explicitly prohibits any device or scheme to defraud, any untrue statement of a material fact (or omission of material fact necessary to prevent statements from being misleading), and any practice that operates as a fraud, in connection with the offer, sale, or purchase of any security. Choice C is the top distractor because students assume any unregistered sale is fraudulent; municipal bonds are exempt securities under Section 402(a) and need not be state-registered to be lawfully sold.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 501"
    },
    "difficulty": "medium",
    "id": "75f9c078af21",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, the state Administrator's enforcement authority generally includes the power to...",
    "choices": [
      "Convict an individual of a felony without judicial process",
      "Issue cease-and-desist orders, conduct investigations, and seek injunctions and other equitable relief in court",
      "Set monetary policy in the state",
      "Adjust federal margin requirements"
    ],
    "answerIndex": 1,
    "rationale": "The Administrator may issue cease-and-desist orders, conduct investigations (taking testimony and subpoenaing records), and seek injunctive and other equitable relief in court; criminal prosecutions, however, must proceed through the state's judicial branch. Choice A is the top distractor because students overstate the Administrator's powers; the Administrator can refer matters to a prosecutor, but cannot impose criminal convictions without judicial process.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 501"
    },
    "difficulty": "hard",
    "id": "5448e0eeed9d",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, which of the following best describes the Administrator's authority to investigate?",
    "choices": [
      "The Administrator may investigate only conduct occurring within his or her own state",
      "The Administrator may investigate within or outside the state, may issue subpoenas for testimony or documents, and may administer oaths",
      "The Administrator must obtain SEC approval before issuing any subpoena",
      "The Administrator is limited to investigating registered persons"
    ],
    "answerIndex": 1,
    "rationale": "The USA broadly authorizes the Administrator to conduct investigations within or outside the state, administer oaths, take evidence, and issue subpoenas to determine whether any person has violated, is violating, or is about to violate the Act, even with respect to non-residents whose conduct affects the state. Choice A is the top distractor because students assume strict territorial limits; the Act does not limit investigations to in-state conduct, and Administrators routinely cooperate cross-border in fraud matters.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 501"
    },
    "difficulty": "hard",
    "id": "851d762ffc8c",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Under USA Section 506, it is unlawful to...",
    "choices": [
      "Sell exempt securities without registration",
      "Represent or imply that the Administrator has approved, sponsored, or recommended any security or person",
      "Make any private offering to fewer than 35 investors",
      "Charge a performance-based advisory fee"
    ],
    "answerIndex": 1,
    "rationale": "USA Section 506 prohibits representations that the registration of a security or person, or the existence of an exemption, means that the Administrator has approved, sponsored, or passed on the merits of the security or person. Choice A is the top distractor because students confuse exempt-status with prohibited conduct; exempt securities by definition do not require registration, so selling them without registration is permitted, but misrepresenting Administrator approval is unlawful.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 506"
    },
    "difficulty": "hard",
    "id": "35294ae15494",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following is typically required for a broker-dealer to rely on the unsolicited brokerage transaction exemption when a customer asks to buy an unregistered, non-exempt security?",
    "choices": [
      "The broker-dealer must obtain a written acknowledgment from the customer that the order was unsolicited",
      "The customer must qualify as an accredited investor",
      "The order must be executed within 24 hours of receipt",
      "The broker-dealer must register the security in the state before settlement"
    ],
    "answerIndex": 0,
    "rationale": "Under USA Section 402(b), the unsolicited non-issuer transaction is exempt, and most states require the broker-dealer to retain a written acknowledgment from the customer evidencing the unsolicited nature of the order. Choice B is the top distractor because students confuse the unsolicited-transaction exemption with the institutional/accredited-investor exemption; the unsolicited exemption does not depend on the customer's accredited status, only on the unsolicited character of the order.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 402"
    },
    "difficulty": "medium",
    "id": "c8d84add8186",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes the relationship between federal covered securities and state securities regulation?",
    "choices": [
      "Federal covered securities are subject to full state registration on the merits",
      "NSMIA preempts state substantive registration of federal covered securities, but states retain authority over notice filings, fees, and antifraud enforcement",
      "States have no authority of any kind over federal covered securities",
      "Federal covered status applies only to securities issued by federal government agencies"
    ],
    "answerIndex": 1,
    "rationale": "The National Securities Markets Improvement Act of 1996 (NSMIA) preempts state substantive registration of federal covered securities (such as exchange-listed stocks, investment company shares, and Rule 506 offerings), while preserving the states' notice-filing, fee, and antifraud authority. Choice C is the top distractor because students overstate preemption; antifraud and notice-filing authority were explicitly preserved by NSMIA.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 302"
    },
    "difficulty": "hard",
    "id": "b5bdcae4d40a",
    "subtopicId": "4.5",
    "reviewed": false
  },
  {
    "stem": "An issuer agent solicits orders for the issuer's common stock from prospective investors in three different states. Under the Uniform Securities Act, the agent generally must...",
    "choices": [
      "Register only in the state where the issuer is incorporated",
      "Register as an agent in each state where the agent effects or attempts to effect securities transactions, unless an exemption applies",
      "Register only in the state where the agent personally resides",
      "Register only with the SEC, not with any state"
    ],
    "answerIndex": 1,
    "rationale": "Under USA Sections 201 and 401(b), an agent must register in each state where the agent effects or attempts to effect securities transactions, unless an exemption applies (e.g., transactions in exempt securities, exempt transactions, or limited de minimis customer contacts). Choice A is the top distractor because students assume jurisdiction follows the issuer's home state; in reality, state registration follows the location of the customer or the place where the offer is made, not the issuer's state of incorporation.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    "difficulty": "medium",
    "id": "d81370396e5c",
    "subtopicId": "4.5",
    "reviewed": false
  }
];

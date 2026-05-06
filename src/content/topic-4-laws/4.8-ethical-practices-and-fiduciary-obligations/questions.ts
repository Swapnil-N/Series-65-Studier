import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "An investment adviser registered under the Investment Advisers Act of 1940 owes its clients which standard of care?",
    "choices": [
      "A suitability standard requiring only that recommendations be reasonable",
      "A fiduciary duty consisting of duties of loyalty and care, requiring the adviser to act in the client's best interest",
      "A counterparty/arms-length standard limited to obligations contained in the advisory contract",
      "A best-execution standard with no separate duty of loyalty to the client"
    ],
    "answerIndex": 1,
    "rationale": "Section 206 of the Investment Advisers Act, as interpreted by the SEC and the courts (e.g., SEC v. Capital Gains Research Bureau), establishes a federal fiduciary duty composed of duties of loyalty and care; the adviser must put the client's interest ahead of its own and disclose all material conflicts. The top distractor 'suitability' is the standard historically applicable to broker-dealer recommendations under FINRA Rule 2111, not the higher fiduciary standard imposed on advisers.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 206"
    },
    "difficulty": "easy",
    "id": "aee274d3f25d",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Under SEC Rule 206(4)-2 and parallel NASAA rules, an investment adviser is generally deemed to have 'custody' of client assets when the adviser:",
    "choices": [
      "Is granted discretionary authority but does not hold any client funds or securities",
      "Holds, directly or indirectly, client funds or securities or has any authority to obtain possession of them",
      "Recommends a qualified custodian to the client",
      "Receives a single advisory fee billed in arrears"
    ],
    "answerIndex": 1,
    "rationale": "Custody is defined as holding, directly or indirectly, client funds or securities, or having any authority to obtain possession of them; this includes general powers of attorney and check-writing authority. The top distractor (discretionary authority alone) is incorrect because investment discretion to direct trades through a qualified custodian, by itself, does not confer possession or control of assets and is not custody.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-2"
    },
    "difficulty": "easy",
    "id": "3c4f1a667ea9",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Performance-based compensation by an SEC-registered investment adviser is generally permitted only when the client is a 'qualified client,' which currently requires the client to have either:",
    "choices": [
      "At least $100,000 in AUM with the adviser or net worth of at least $500,000",
      "At least $1.1 million in AUM with the adviser or a net worth of more than $2.2 million (excluding primary residence)",
      "At least $5 million in liquid investments",
      "An ERISA-covered retirement plan"
    ],
    "answerIndex": 1,
    "rationale": "Rule 205-3 under the Advisers Act conditions performance fees on the client meeting 'qualified client' thresholds, currently $1.1 million AUM with the adviser or more than $2.2 million net worth (excluding primary residence), with periodic inflation adjustment. The top distractor confuses these qualified-client thresholds with the much-lower 'accredited investor' net-worth test ($1 million ex-primary residence) which does not satisfy Rule 205-3.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 205-3"
    },
    "difficulty": "easy",
    "id": "47e4b343d74d",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "A broker-dealer must file a Currency Transaction Report (CTR) with FinCEN whenever a customer conducts cash transactions in a single business day totaling more than:",
    "choices": [
      "$3,000",
      "$5,000",
      "$10,000",
      "$25,000"
    ],
    "answerIndex": 2,
    "rationale": "The Bank Secrecy Act CTR threshold is cash transactions aggregating more than $10,000 in a single business day; structuring transactions to evade the threshold is itself a federal violation. The top distractor $5,000 is the threshold for filing a Suspicious Activity Report (SAR) by a broker-dealer under the BSA, not the CTR threshold.",
    "citation": {
      "source": "SEC",
      "ref": "Bank Secrecy Act"
    },
    "difficulty": "easy",
    "id": "57ee66ba5dac",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Insider trading liability under Rule 10b-5 is most commonly premised on trading on the basis of:",
    "choices": [
      "Publicly disclosed but obscure information about a small-cap issuer",
      "Material nonpublic information in breach of a duty of trust or confidence",
      "Information acquired through legitimate proprietary research",
      "Any information obtained from a corporate executive, regardless of duty"
    ],
    "answerIndex": 1,
    "rationale": "Rule 10b-5 prohibits the purchase or sale of securities on the basis of material nonpublic information when the trader breaches a duty of trust or confidence (classical or misappropriation theory). The top distractor 'any information from a corporate executive' is wrong because casual social information shared without breach of duty does not by itself create 10b-5 liability; both materiality and duty/breach are required.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-5"
    },
    "difficulty": "easy",
    "id": "188eaa3cec97",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "An agent of a broker-dealer privately effects securities transactions for compensation outside the regular course of his BD's business and without giving notice to or receiving approval from the BD. This practice is best described as:",
    "choices": [
      "A soft-dollar arrangement",
      "Selling away (a private securities transaction)",
      "Front running",
      "A permissible outside business activity"
    ],
    "answerIndex": 1,
    "rationale": "Selling away occurs when an associated person effects securities transactions outside the firm's books and records without the firm's prior written notice and (where compensation is involved) approval; it is enumerated as an unethical/dishonest practice in NASAA policy statements. The top distractor 'permissible outside business activity' is wrong because OBA disclosure addresses non-securities activities; private securities transactions require separate notice and approval and are otherwise prohibited.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Statement of Policy on Dishonest and Unethical Practices of Broker-Dealers and Agents"
    },
    "difficulty": "easy",
    "id": "2866ddd5cecc",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Under the soft-dollar safe harbor, an investment adviser may use client commission dollars to obtain which of the following from an executing broker-dealer without breaching its fiduciary duty?",
    "choices": [
      "Office furniture for the adviser's headquarters",
      "Personal travel and entertainment for the adviser's principals",
      "Brokerage and research services that provide lawful and appropriate assistance to the adviser's investment decision-making",
      "Salaries of the adviser's portfolio managers"
    ],
    "answerIndex": 2,
    "rationale": "Section 28(e) of the Securities Exchange Act of 1934 protects an adviser only when client commissions purchase 'brokerage and research services' that aid investment decision-making and the commissions are reasonable in relation to the value received. The top distractor 'office furniture' is wrong because such administrative overhead is not 'research' or 'execution' and falls outside the safe harbor.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934"
    },
    "difficulty": "easy",
    "id": "2ab6933f2488",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Under most state rules, before an investment adviser may exercise discretion in a client's account, the adviser must:",
    "choices": [
      "Have obtained prior written discretionary authorization from the client",
      "Notify the SEC within 10 business days of the first discretionary trade",
      "Limit discretion to the client's first 10 trades",
      "Obtain only oral authorization from the client"
    ],
    "answerIndex": 0,
    "rationale": "NASAA model rules and most states' rules require investment advisers to obtain prior written discretionary authorization before exercising discretion (federal IA Act practice allows oral authorization for the first ten business days, but the state-level adviser rule on the Series 65 is the stricter prior-written-authorization standard). The top distractor 'oral authorization' applies (briefly) only to federal-covered advisers and is not the rule tested for state-registered IAs/IARs.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule 102(a)(4)-1"
    },
    "difficulty": "easy",
    "id": "95318666229e",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "An investment adviser's fee schedule, methods of compensation, and material conflicts of interest are principally disclosed to clients in:",
    "choices": [
      "Form U4",
      "Form ADV Part 2A (the brochure)",
      "Form D",
      "Schedule 13D"
    ],
    "answerIndex": 1,
    "rationale": "Rule 204-3 (the brochure rule) requires advisers to deliver Form ADV Part 2A, which must disclose advisory services, fees and compensation, methods of analysis, conflicts, disciplinary information, and other items in plain English. The top distractor Form U4 covers the registration of individuals (employment history, disciplinary disclosures) and does not contain the firm's fee schedule and conflict disclosures.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-3"
    },
    "difficulty": "easy",
    "id": "ba43032e27e0",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "SEC Rule 206(4)-5, the 'pay-to-play' rule, addresses primarily which of the following conflicts?",
    "choices": [
      "Misuse of soft-dollar commissions for non-research items",
      "Political contributions by an adviser or its covered associates that may influence the award of advisory business by government entities",
      "Performance-fee arrangements with retail clients",
      "Personal trading by access persons of the adviser"
    ],
    "answerIndex": 1,
    "rationale": "Rule 206(4)-5 prohibits an adviser from receiving compensation for advisory services provided to a government entity for two years after the adviser or its covered associate makes a contribution above the de minimis amount to an official able to influence the selection of advisers. The top distractor (soft dollars) is governed by Section 28(e) of the Exchange Act and is unrelated to the political-contribution conflict targeted by the pay-to-play rule.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-5"
    },
    "difficulty": "easy",
    "id": "ba3173eef249",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "The practice of effecting transactions in a customer's account that are excessive in size or frequency given the customer's objectives and resources, principally to generate commissions, is known as:",
    "choices": [
      "Painting the tape",
      "Churning (excessive trading)",
      "Marking the close",
      "Selling away"
    ],
    "answerIndex": 1,
    "rationale": "Churning is enumerated as a dishonest and unethical practice; it focuses on quantity and frequency of trades relative to the client's profile rather than the propriety of any individual trade. The top distractor 'painting the tape' is a market-manipulation technique involving prearranged trades to create false volume signals, not a conflict over commission generation in a single client's account.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Statement of Policy on Dishonest and Unethical Practices of Broker-Dealers and Agents"
    },
    "difficulty": "easy",
    "id": "13f52cede3c4",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "A registered representative reasonably believes that a 78-year-old client is being financially exploited by a relative who has obtained the client's account credentials. Under the NASAA model approach to the protection of vulnerable adults, the firm is generally permitted to:",
    "choices": [
      "Immediately close the account without notification to anyone",
      "Place a temporary hold on the disbursement or transaction and notify the state administrator and adult protective services",
      "Continue executing transactions as usual to avoid exposure to the firm",
      "Publicly disclose the suspected exploitation to deter the bad actor"
    ],
    "answerIndex": 1,
    "rationale": "NASAA's model framework on senior exploitation gives qualified individuals a safe harbor to delay disbursements/transactions and to notify the state securities administrator and adult protective services upon a reasonable belief of exploitation of an eligible adult. The top distractor (immediately close the account) goes beyond the protections offered and could itself harm the client; the model rule contemplates a temporary hold, not unilateral account closure.",
    "citation": {
      "source": "NASAA",
      "ref": "Section IV.H"
    },
    "difficulty": "easy",
    "id": "62f20fd6c2cc",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "An investment adviser deducts its quarterly advisory fee directly from the client's account at a qualified custodian. Under SEC Rule 206(4)-2, this practice:",
    "choices": [
      "Always disqualifies the adviser from federal registration",
      "Constitutes 'custody,' but is generally exempted from the surprise-examination requirement if specified conditions are met (e.g., the qualified custodian sends statements directly to the client and the adviser sends an invoice)",
      "Requires the adviser to register as a broker-dealer",
      "Does not constitute custody under any circumstances"
    ],
    "answerIndex": 1,
    "rationale": "Direct fee deduction is technically custody because the adviser has authority to obtain client funds, but Rule 206(4)-2 provides relief from surprise audit when the custodian delivers statements at least quarterly directly to the client and (per SEC staff guidance) the adviser sends a corresponding invoice. The top distractor (never custody) is wrong because the SEC has long treated direct fee deduction as a form of custody requiring at least the disclosed-on-Form-ADV treatment.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-2"
    },
    "difficulty": "medium",
    "id": "a7c649bf7429",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "An investment adviser that has custody of client funds or securities (other than via fee deduction meeting specific conditions) is generally required to:",
    "choices": [
      "Cease custody within 30 days",
      "Engage an independent public accountant to conduct an annual surprise examination of client assets and file Form ADV-E",
      "Self-audit annually",
      "File a Form 10-K with the SEC"
    ],
    "answerIndex": 1,
    "rationale": "Rule 206(4)-2 requires advisers with custody to maintain client assets at a qualified custodian and to engage an independent public accountant to conduct an annual unannounced (surprise) examination of those assets, with the accountant filing Form ADV-E within 120 days. The top distractor 'self-audit' is the antithesis of the rule, which expressly requires an independent third party to provide assurance.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-2"
    },
    "difficulty": "medium",
    "id": "4d72c703fb07",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Which of the following is LEAST likely to fall within the Section 28(e) soft-dollar safe harbor?",
    "choices": [
      "Third-party research reports on companies and industries",
      "Conferences and seminars whose content is research-oriented and informs investment decisions",
      "Software whose primary function is securities research and analytics",
      "Office rent and utilities for the adviser's headquarters"
    ],
    "answerIndex": 3,
    "rationale": "The Section 28(e) safe harbor protects only 'brokerage and research services' that provide lawful and appropriate assistance in the investment decision-making process; ordinary overhead such as rent, utilities, and salaries falls outside the safe harbor and represents a fiduciary breach when paid with client commissions. The top distractor 'research-oriented seminars' is potentially eligible if the content directly aids investment decisions, so it is not the least-likely choice.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934"
    },
    "difficulty": "medium",
    "id": "fb8bf21c4069",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "A broker-dealer is generally required to file a Suspicious Activity Report (SAR) when it identifies a transaction conducted or attempted at the firm involving aggregate funds or assets of:",
    "choices": [
      "$1,000 or more that the firm believes is unusual",
      "$5,000 or more that the firm knows, suspects, or has reason to suspect involves illegal funds, evades the BSA, lacks an apparent business purpose, or facilitates criminal activity",
      "$10,000 or more in cash only",
      "$25,000 or more in any form"
    ],
    "answerIndex": 1,
    "rationale": "Under the Bank Secrecy Act regulations applicable to broker-dealers, the SAR threshold is $5,000 where the firm has the requisite suspicion or knowledge regarding the transaction. The top distractor $10,000 is the CTR threshold for currency transactions, not the SAR threshold; SARs are not currency-only and arise from suspicion, not amount alone.",
    "citation": {
      "source": "SEC",
      "ref": "Bank Secrecy Act"
    },
    "difficulty": "medium",
    "id": "f7e2dd0b4ba0",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "A corporate insider establishes in good faith a written trading plan at a time when she does not possess material nonpublic information; the plan specifies the amounts, prices, and dates of future trades. Under Rule 10b5-1, the plan:",
    "choices": [
      "Provides an affirmative defense against insider-trading liability for trades executed pursuant to the plan",
      "Automatically prohibits the insider from selling stock for one year after adoption",
      "Must be filed with and approved by the SEC before becoming effective",
      "Exempts trades made under the plan from short-swing-profit recovery under Section 16(b)"
    ],
    "answerIndex": 0,
    "rationale": "A properly drafted Rule 10b5-1 plan provides an affirmative defense to claims under Rule 10b-5 that the insider traded on the basis of MNPI, provided the plan was entered into in good faith without MNPI and is not modified during a time when the insider possesses MNPI. The top distractor regarding Section 16(b) is wrong because 10b5-1 plans address 10b-5 liability and do not change the strict-liability disgorgement framework of short-swing profits.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b5-1"
    },
    "difficulty": "medium",
    "id": "0896ae0c1031",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "SEC Rule 204A-1 requires SEC-registered investment advisers to adopt a code of ethics that, among other items, requires their 'access persons' to:",
    "choices": [
      "Cease all personal securities trading entirely",
      "Submit initial and annual holdings reports and quarterly transaction reports of personal securities holdings to the adviser",
      "Pre-clear every transaction in open-end mutual funds with management",
      "Trade only after notifying the state securities administrator"
    ],
    "answerIndex": 1,
    "rationale": "Rule 204A-1 requires a written code of ethics that includes personal-trading reporting by access persons, with specific timing rules for initial holdings (within 10 days), quarterly transactions (within 30 days of quarter end), and annual holdings (current within 45 days of submission). The top distractor 'pre-clear mutual funds' is wrong because most open-end mutual funds are reportable funds (and direct-issued securities) generally exempt from the reporting and pre-clearance requirements unless they are reportable funds advised by the adviser.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204A-1"
    },
    "difficulty": "medium",
    "id": "ee2f1183c049",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Under SEC Rule 204A-1, an access person must submit:",
    "choices": [
      "An initial holdings report within 10 days of becoming an access person and a quarterly transactions report within 30 days after each quarter-end",
      "A monthly holdings report and an annual transactions summary",
      "A quarterly holdings report only",
      "A daily personal trading blotter to the firm's CCO"
    ],
    "answerIndex": 0,
    "rationale": "Rule 204A-1 sets specific timing: initial holdings within 10 days of access-person status (current within 45 days), quarterly transactions within 30 days of calendar quarter-end, and annual holdings (current within 45 days of submission). The top distractor 'monthly holdings' overstates the frequency the rule actually imposes.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204A-1"
    },
    "difficulty": "medium",
    "id": "c63fd8dafae3",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Under Rule 206(4)-5, if a covered associate of an adviser makes a political contribution above the de minimis amount to an official of a government entity who can influence the selection of advisers, the adviser is generally:",
    "choices": [
      "Required to immediately resign from the engagement",
      "Barred for two years from receiving compensation for advisory services to that government entity",
      "Subject only to a small civil penalty",
      "Required to amend Form ADV but may continue receiving advisory fees"
    ],
    "answerIndex": 1,
    "rationale": "Rule 206(4)-5 imposes a two-year 'time-out' during which the adviser may not receive compensation for advisory services to a covered government client following a triggering contribution by the adviser or a covered associate. The top distractor (resignation) misstates the remedy: the rule prohibits compensation, not necessarily continued service, allowing the adviser to elect whether to continue without fees.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-5"
    },
    "difficulty": "medium",
    "id": "5b0d29cd36fa",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "SEC Rule 206(4)-5 includes a de minimis exception that permits a covered associate to contribute, per official, per election, up to:",
    "choices": [
      "$50 if entitled to vote for the official; $25 otherwise",
      "$350 if entitled to vote for the official; $150 if not entitled to vote",
      "$500 in all cases",
      "$1,000, but only in primary elections"
    ],
    "answerIndex": 1,
    "rationale": "The de minimis exception permits up to $350 per official per election if the covered associate is entitled to vote for the official, and up to $150 if not entitled to vote, without triggering the two-year compensation ban. The top distractor $500 is a higher figure not found in Rule 206(4)-5 and would conflate the de minimis amount with other unrelated regulatory thresholds.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-5"
    },
    "difficulty": "medium",
    "id": "bb309431f155",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "A registered representative is generally prohibited from borrowing money from a customer EXCEPT when:",
    "choices": [
      "The customer is a regulated lending institution (e.g., a bank or broker-dealer) in the business of lending and the loan complies with the firm's written procedures",
      "The customer agrees informally over email and the loan is for less than $5,000",
      "The customer and rep have been friends for more than five years",
      "The customer signs a verbal acknowledgment witnessed by another agent"
    ],
    "answerIndex": 0,
    "rationale": "Loans between agents and customers are presumptively unethical because of the conflict of interest; narrow exceptions exist (e.g., the customer is in the business of lending such as a bank, the parties are immediate family, or the firm's written procedures permit and the firm has approved the loan). The top distractor (long friendship) is not a recognized exception under NASAA or industry rules; personal relationships do not cure the conflict.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Statement of Policy on Dishonest and Unethical Practices of Broker-Dealers and Agents"
    },
    "difficulty": "medium",
    "id": "6b04aeeee486",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "A broker-dealer agent proposes to share in the profits and losses of a customer's account. Such an arrangement is generally:",
    "choices": [
      "Always prohibited regardless of any approval",
      "Permitted only with prior written authorization from the broker-dealer and the customer, and the agent's share must be proportionate to the agent's financial contribution to the account",
      "Permitted if the customer agrees orally",
      "Required by NASAA when the agent makes recommendations"
    ],
    "answerIndex": 1,
    "rationale": "Sharing in profits and losses is permitted only with prior written authorization from both the firm and the customer, and the sharing must be proportionate to the agent's actual financial contribution (with limited family exceptions). The top distractor (always prohibited) is too strong; properly authorized and proportionate arrangements are allowed under NASAA's policy statements.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Statement of Policy on Dishonest and Unethical Practices of Broker-Dealers and Agents"
    },
    "difficulty": "medium",
    "id": "efd027becd4b",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Regulation S-P implements the privacy provisions of the Gramm-Leach-Bliley Act and requires broker-dealers and SEC-registered investment advisers to:",
    "choices": [
      "Provide initial and annual privacy notices to customers and a reasonable opt-out opportunity before disclosing nonpublic personal information to non-affiliated third parties",
      "Permanently bar all sharing of customer information with affiliates",
      "Encrypt all client emails using AES-256",
      "Submit privacy policies to FINRA for prior approval"
    ],
    "answerIndex": 0,
    "rationale": "Regulation S-P requires initial and annual delivery of a privacy notice describing what nonpublic personal information is collected and shared, plus an opt-out mechanism for sharing with non-affiliated third parties (subject to enumerated exceptions like service providers). The top distractor (bar all affiliate sharing) is incorrect because GLBA and Regulation S-P generally permit information sharing with affiliates, with FCRA-driven opt-outs in some marketing-information contexts.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation S-P"
    },
    "difficulty": "medium",
    "id": "0165956ce30d",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Regulation S-ID requires SEC-regulated financial institutions and creditors that hold 'covered accounts' to:",
    "choices": [
      "File a SAR for every wire transfer over $5,000",
      "Develop and implement a written Identity Theft Prevention Program ('Red Flags Rule') appropriate to the size and complexity of the firm",
      "Encrypt all data at rest using FIPS-validated cryptography",
      "Provide free credit monitoring to every retail client"
    ],
    "answerIndex": 1,
    "rationale": "Regulation S-ID is the SEC's identity-theft Red Flags Rule, which requires firms holding covered accounts to identify, detect, and respond to red flags indicative of identity theft and to periodically update the program with board or senior-management oversight. The top distractor (mandatory credit monitoring) is wrong; Regulation S-ID does not impose such a customer-facing service obligation.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation S-ID"
    },
    "difficulty": "medium",
    "id": "438701f30bca",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "An investment adviser to a private fund organized as a limited partnership is deemed to have custody of fund assets. The adviser may avoid the surprise-examination requirement of Rule 206(4)-2 if it:",
    "choices": [
      "Distributes audited financial statements of the fund prepared in accordance with U.S. GAAP to investors annually within 120 days of the fund's fiscal year-end",
      "Files unaudited financials with the SEC quarterly",
      "Posts financials on the adviser's public website",
      "Hires a separate adviser to act as a check on its activities"
    ],
    "answerIndex": 0,
    "rationale": "Rule 206(4)-2 provides an alternative to the surprise audit for pooled-vehicle advisers if the fund is audited annually by a PCAOB-registered and -inspected accountant and the audited GAAP financials are distributed to investors within 120 days of fiscal year-end (180 days for fund-of-funds). The top distractor (filing unaudited financials with the SEC) does not satisfy the audit-and-distribute pathway and would not avoid the surprise-exam requirement.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-2"
    },
    "difficulty": "medium",
    "id": "01bd1945e405",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Regulation Best Interest (Reg BI) applies to:",
    "choices": [
      "Investment advisers and their representatives when providing personalized advice",
      "Broker-dealers and their associated persons when making a recommendation of a securities transaction or investment strategy to a retail customer",
      "Banks selling certificates of deposit",
      "Insurance agents selling fixed annuities"
    ],
    "answerIndex": 1,
    "rationale": "Reg BI imposes a best-interest standard on broker-dealers and their associated persons at the time a recommendation of a securities transaction or strategy is made to a retail customer, with disclosure, care, conflict-of-interest, and compliance obligations. The top distractor (investment advisers) is wrong because IAs are governed by the federal fiduciary duty under the Advisers Act, not by Reg BI.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation Best Interest"
    },
    "difficulty": "medium",
    "id": "56969267cd2e",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Under the NASAA model approach to protecting vulnerable adults, a qualified individual who reasonably believes that financial exploitation has been attempted may direct the firm to delay a disbursement or transaction for an initial period of up to:",
    "choices": [
      "5 calendar days",
      "15 business days, with possible extension by court order or agency request",
      "60 calendar days",
      "6 months"
    ],
    "answerIndex": 1,
    "rationale": "The model framework permits a temporary hold of up to 15 business days, with extensions available based on continued reasonable belief and on requests from state administrators, APS, or court orders. The top distractor (60 calendar days) overstates the initial hold period; the model rule is calibrated to balance protection with the customer's right to access funds.",
    "citation": {
      "source": "NASAA",
      "ref": "Section IV.H"
    },
    "difficulty": "medium",
    "id": "817f4f9a30c7",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "NASAA's Model Rule on Business Continuity and Succession Planning requires investment advisers to maintain and follow a written plan that, at a minimum, addresses:",
    "choices": [
      "Marketing and advertising strategies during a downturn",
      "Protection, backup, and recovery of books and records; alternate means of communication; office relocation; assignment of duties to qualified persons; and minimization of client harm in the event of significant disruption",
      "Profit projections in adverse markets",
      "Engagement of a third-party auditor to certify business strategy"
    ],
    "answerIndex": 1,
    "rationale": "The NASAA model rule on BCP/succession requires a written plan covering data backup and records protection, alternate communications, office relocation, qualified-person succession, and minimizing service disruption to clients. The top distractor (marketing strategy) misses the operational-resiliency focus of the rule, which is to keep client interests protected during disruption rather than to plan revenue.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule on Business Continuity and Succession Planning"
    },
    "difficulty": "medium",
    "id": "f884c6417e71",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "An investment adviser discovers a new material conflict of interest mid-year that is not disclosed in its current brochure. The adviser should:",
    "choices": [
      "Wait until the next annual updating amendment of Form ADV to disclose",
      "Promptly deliver an interim brochure or supplement disclosing the new material conflict to clients",
      "Disclose only if a client specifically asks",
      "Disclose only on the SEC's IARD system, with no client delivery"
    ],
    "answerIndex": 1,
    "rationale": "Rule 204-3 and the underlying Section 206 fiduciary duty require prompt delivery of an interim brochure or supplement when a material change in disciplinary information or other material information arises mid-year. The top distractor (wait for the annual amendment) is wrong because the duty of loyalty and full and fair disclosure does not allow the adviser to defer disclosure of a known material conflict for up to a year.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-3"
    },
    "difficulty": "medium",
    "id": "e678355581e0",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Under the NASAA Statement of Policy on Unethical or Dishonest Practices of IAs and IARs, an investment adviser representative who maintains a brokerage account at an outside firm must generally:",
    "choices": [
      "Notify the IA in writing and arrange for the executing firm to send duplicate confirmations and statements as required by the IA's procedures",
      "Close the outside account",
      "Trade only mutual funds in that account",
      "Restrict trading to non-securities products only"
    ],
    "answerIndex": 0,
    "rationale": "Outside-account disclosure rules require written notice to the employing IA and an arrangement (often duplicate confirms/statements) so the IA can monitor for conflicts, front-running, and personal-trading code violations. The top distractor (close the account) overstates the rule; outside accounts are permitted with proper notice and oversight.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Statement of Policy on Unethical or Dishonest Practices of IAs and IARs"
    },
    "difficulty": "medium",
    "id": "ce99511c408f",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "An investment adviser proposes to act as a principal (i.e., from its own inventory) in a transaction with an advisory client. Under Section 206(3) of the Advisers Act, the adviser must:",
    "choices": [
      "Disclose its capacity in writing and obtain the client's consent before completion of the transaction",
      "Refuse the trade in all circumstances",
      "Disclose the conflict only in the next annual ADV amendment",
      "Obtain SEC pre-approval before each principal trade"
    ],
    "answerIndex": 0,
    "rationale": "Section 206(3) prohibits an adviser from acting as principal (or as agent for the other party) in a transaction with a client unless the adviser discloses in writing the capacity in which it is acting and obtains the client's consent before completion of the transaction; consent must be transaction-by-transaction (with limited relief for non-discretionary clients under Rule 206(3)-3T historically). The top distractor (next ADV amendment) is wrong because the disclosure-and-consent requirement is transaction-specific, not periodic.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 206(3)"
    },
    "difficulty": "hard",
    "id": "80e4688d7c27",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "A client mistakenly mails an investment adviser a check made payable to the adviser (rather than to the qualified custodian). To avoid being deemed to have custody under Rule 206(4)-2, the adviser should:",
    "choices": [
      "Deposit the check into its operating account and reimburse the client",
      "Hold the check indefinitely while it contacts the client",
      "Forward the check to the qualified custodian or return it to the sender, generally within three business days of receipt",
      "Endorse the check over to the client and physically deliver it to the client's home"
    ],
    "answerIndex": 2,
    "rationale": "SEC staff guidance treats receipt of a client check made payable to the adviser as triggering custody unless the adviser forwards it to the custodian or returns it to the sender within three business days of receipt and maintains records of the activity. The top distractor (depositing the check) would cause the adviser to actually hold client funds and would be the very conduct that triggers custody and its surprise-audit/qualified-custodian obligations.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-2"
    },
    "difficulty": "hard",
    "id": "2f06486dc84f",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Two parties prearrange the simultaneous purchase and sale of a security at a specified time and price to create a misleading appearance of trading volume. This conduct is best characterized as:",
    "choices": [
      "Painting the tape via matched orders, a manipulative device prohibited by Section 9 of the Securities Exchange Act of 1934",
      "A permitted soft-dollar arrangement",
      "An ordinary cross trade between two unrelated clients",
      "Selling away"
    ],
    "answerIndex": 0,
    "rationale": "Section 9 of the Exchange Act prohibits manipulative practices including matched orders and wash trades intended to give a false or misleading appearance of active trading; 'painting the tape' is the colloquial term. The top distractor 'cross trade' would be a bona fide trade between unrelated clients at a fair price, not a fictitious appearance of liquidity, and is therefore not the same conduct.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 9"
    },
    "difficulty": "hard",
    "id": "96918ec3d6e4",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "A money manager directs trades to a particular broker-dealer because the broker provides research that materially benefits client portfolios. The Section 28(e) safe harbor protects the manager only to the extent that:",
    "choices": [
      "The manager makes a good-faith determination that the commissions paid are reasonable in relation to the value of brokerage and research services received",
      "The broker-dealer is registered with NASAA",
      "The clients sign individual consent forms before each commission",
      "The manager rebates the commissions to the clients"
    ],
    "answerIndex": 0,
    "rationale": "Section 28(e) requires a good-faith determination of reasonableness of commission to value of brokerage/research, and the qualifying services must aid investment decision-making (eligible under SEC Release 34-54165 / 2006 interpretive guidance). The top distractor (rebating commissions) describes a commission-recapture program, which is unrelated to the safe-harbor analysis.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934"
    },
    "difficulty": "hard",
    "id": "53f9a32d06d5",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "An adviser hires a new covered associate. Under Rule 206(4)-5, the adviser may be prohibited from receiving compensation from a government client because of triggering contributions made by the new hire within:",
    "choices": [
      "30 days prior to becoming a covered associate, in all cases",
      "Six months prior to becoming a covered associate (or two years if the new hire solicits clients on behalf of the adviser)",
      "90 days prior, regardless of role",
      "Five years prior to becoming a covered associate"
    ],
    "answerIndex": 1,
    "rationale": "The look-back under Rule 206(4)-5 is six months for covered associates whose duties do not include soliciting clients and two years if the covered associate solicits government clients; the look-back attaches contributions made before employment to the new employer. The top distractor (30 days) understates the look-back and would defeat the rule's purpose of preventing pre-employment quid pro quo contributions.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-5"
    },
    "difficulty": "hard",
    "id": "c20fc65d469c",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "For an SEC-registered investment adviser subject to the surprise-examination requirement of Rule 206(4)-2, the independent public accountant must:",
    "choices": [
      "Be selected by the adviser's compliance officer with no other criteria",
      "Be registered with and subject to regular inspection by the PCAOB and file Form ADV-E with the SEC within 120 days of completing the surprise exam",
      "Be the same accountant who prepares the adviser's tax returns to ensure efficiency",
      "Conduct the exam on the same calendar date each year for predictability"
    ],
    "answerIndex": 1,
    "rationale": "Rule 206(4)-2 requires the surprise examination to be performed by an independent public accountant registered with and inspected by the PCAOB; the firm must file Form ADV-E with the surprise-exam certificate within 120 days. The top distractor 'same calendar date each year' contradicts the central feature of the rule, which is that the timing must be unannounced (surprise) to the adviser.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-2"
    },
    "difficulty": "hard",
    "id": "dc12b37f3ed6",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Section 204A of the Investment Advisers Act of 1940 requires every investment adviser to:",
    "choices": [
      "Establish, maintain, and enforce written policies and procedures reasonably designed to prevent the misuse of material nonpublic information by the adviser or any associated person",
      "Reimburse clients for any losses related to insider trading by personnel",
      "Register all access persons with FINRA",
      "Furnish the SEC with all email correspondence on a quarterly basis"
    ],
    "answerIndex": 0,
    "rationale": "Section 204A obligates advisers to adopt and enforce written policies and procedures (commonly including information barriers, restricted/watch lists, and pre-clearance) reasonably designed to prevent insider-trading misuse of MNPI, taking into consideration the adviser's nature of business. The top distractor (reimburse losses) is wrong because Section 204A is preventive in nature; reimbursement remedies arise under enforcement actions or private rights of action, not under the obligation to maintain policies.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 204A"
    },
    "difficulty": "hard",
    "id": "a027fee99c7d",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "Two clients of a multi-service firm are involved in a confidential merger. To prevent the firm's investment-advisory personnel from trading on this information, the firm should rely most directly on:",
    "choices": [
      "Section 28(e) soft-dollar arrangements",
      "Information barriers ('Chinese Walls') supported by written policies, restricted lists, and surveillance, consistent with Section 204A",
      "Margin lending limits under Regulation T",
      "Adoption of a Rule 12b-1 plan"
    ],
    "answerIndex": 1,
    "rationale": "Information barriers separate personnel with access to MNPI from those making investment decisions or recommendations and are a core component of Section 204A policies and procedures. The top distractor (soft-dollar arrangements) addresses how commission dollars are spent and has no functional relationship to preventing the misuse of MNPI between business units.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 204A"
    },
    "difficulty": "hard",
    "id": "569e27f11553",
    "subtopicId": "4.8",
    "reviewed": false
  },
  {
    "stem": "NASAA's Model Rule on Information Security and Privacy (cybersecurity) requires state-registered investment advisers to:",
    "choices": [
      "Adopt and enforce written policies and procedures reasonably designed to ensure cybersecurity, including risk assessments, access controls, training, incident response, and at least annual review",
      "Use only government-operated cloud computing services",
      "Notify all customers of any phishing attempt within 24 hours regardless of impact",
      "Maintain ISO 27001 certification at all times"
    ],
    "answerIndex": 0,
    "rationale": "The NASAA model cybersecurity rule requires written policies and procedures appropriate to the adviser's business, including risk assessments, role-based access controls, training, incident response, and periodic review, with reference to a confidentiality/integrity/availability framework. The top distractor (24-hour customer notification of any phishing attempt) overstates the rule, which focuses on a reasonable program rather than a single fixed-hour client-notification mandate for unsuccessful attempts.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule on Cybersecurity"
    },
    "difficulty": "hard",
    "id": "8beee2fe09ed",
    "subtopicId": "4.8",
    "reviewed": false
  }
];

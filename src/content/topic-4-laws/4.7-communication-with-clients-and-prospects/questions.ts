import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Under the SEC's brochure rule, a federal-covered investment adviser must deliver Form ADV Part 2A to a new client either at least how many hours before entering into the advisory contract, or at the time of entry into the contract with a 5-business-day rescission right?",
    "choices": [
      "24 hours",
      "36 hours",
      "48 hours",
      "72 hours"
    ],
    "answerIndex": 2,
    "rationale": "Rule 204-3 (the brochure rule) requires delivery of Form ADV Part 2A either at least 48 hours before entering into the advisory contract OR at the time of entering with the client's right to terminate without penalty within 5 business days. The 24-hour option is the common distractor because students confuse the brochure rule with shorter cooling-off periods used elsewhere, but the brochure rule's specific timing is 48 hours.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-3"
    },
    "difficulty": "easy",
    "id": "5d4903da1569",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "An IAR tells a prospect, 'Because our firm is registered with the SEC, you can be confident the SEC has approved our investment strategy.' This statement is:",
    "choices": [
      "Permissible because the firm is in fact SEC-registered.",
      "Permissible if the IAR also discloses risks.",
      "Prohibited because registration does not imply SEC approval or endorsement.",
      "Prohibited only if the strategy is high risk."
    ],
    "answerIndex": 2,
    "rationale": "It is unlawful to represent or imply that registration with the SEC or a state Administrator means the regulator has passed on the merits, approved, sponsored, or recommended the adviser or any security. Choice A is the top distractor because the underlying registration fact is true, but the inference drawn from registration ('approved our strategy') is the prohibited misrepresentation.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 502"
    },
    "difficulty": "easy",
    "id": "34684fa60ad7",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Which of the following statements is consistent with NASAA's Statement of Policy regarding investment adviser communications?",
    "choices": [
      "We guarantee that no client will lose principal.",
      "Our strategy has produced positive returns each of the last five years and is guaranteed to do so going forward.",
      "Past performance does not guarantee future results, and investment in securities involves risk of loss.",
      "Our performance has been verified by NASAA."
    ],
    "answerIndex": 2,
    "rationale": "NASAA treats guarantees against loss and guarantees of future performance as dishonest and unethical practices, and prohibits implying regulatory endorsement. Choice C is a standard, accurate disclosure that does not guarantee performance or imply endorsement. Choice B is the top distractor because it begins with a true historical statement, but the trailing 'guaranteed to do so going forward' is the prohibited performance guarantee.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Statement of Policy on Unethical or Dishonest Practices of IAs and IARs"
    },
    "difficulty": "easy",
    "id": "30ca2adfdac6",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "An SEC-registered investment adviser must, within how many days after the end of its fiscal year, deliver to existing clients either an updated Form ADV Part 2A or a summary of material changes with an offer to provide the brochure?",
    "choices": [
      "30 days",
      "60 days",
      "90 days",
      "120 days"
    ],
    "answerIndex": 3,
    "rationale": "Rule 204-3 requires the IA to deliver, within 120 days of fiscal year end, either an updated brochure or a summary of material changes plus an offer to provide the full updated brochure. The 90-day distractor is common because students confuse this with other advisory deadlines (such as the annual updating amendment deadline), but the client-delivery window is 120 days.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-3"
    },
    "difficulty": "medium",
    "id": "76960fd83718",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "In Form ADV Part 2A Item 9, an investment adviser must disclose material legal or disciplinary events involving the firm or its management persons that occurred within the past how many years?",
    "choices": [
      "5 years",
      "10 years",
      "15 years",
      "Lifetime"
    ],
    "answerIndex": 1,
    "rationale": "Form ADV Part 2A Item 9 establishes a presumption that disciplinary events within the prior 10 years are material and must be disclosed; older or less serious events may also be material. The 5-year distractor is incorrect because it conflates this with shorter look-back periods used in other contexts (such as Form U4 question windows for some items), but the IA brochure standard is 10 years.",
    "citation": {
      "source": "SEC",
      "ref": "Form ADV Part 2A"
    },
    "difficulty": "medium",
    "id": "37a9e3354bbb",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Under Section 205 of the Investment Advisers Act of 1940, an advisory contract may NOT be assigned by the adviser without:",
    "choices": [
      "SEC approval",
      "The client's consent",
      "Notice to NASAA",
      "A 30-day public comment period"
    ],
    "answerIndex": 1,
    "rationale": "Section 205(a)(2) prohibits assignment of an advisory contract without the client's consent, recognizing that the client engaged that specific adviser based on a personal fiduciary relationship. SEC approval is the top distractor, but the SEC does not approve assignments at all; it is the client's consent that controls.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 205(a)(2)"
    },
    "difficulty": "medium",
    "id": "39aa1ad90b90",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Section 205 of the Investment Advisers Act generally prohibits which type of fee arrangement, subject to limited exceptions?",
    "choices": [
      "Asset-based fees",
      "Hourly fees",
      "Performance-based fees tied to capital gains or appreciation",
      "Fixed retainer fees"
    ],
    "answerIndex": 2,
    "rationale": "Section 205(a)(1) prohibits compensation 'on the basis of a share of capital gains upon or capital appreciation of' client funds, subject to exceptions such as Rule 205-3 for qualified clients. Asset-based fees (a percentage of AUM) are explicitly NOT performance-based under the rule and are permitted, which is why choice A is the leading distractor for students who confuse 'percentage' fees with 'performance' fees.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 205(a)(1)"
    },
    "difficulty": "medium",
    "id": "e304154d2e1c",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Under Rule 205-3, an SEC-registered IA may charge a performance-based fee to a 'qualified client.' Which of the following meets the qualified-client thresholds currently in effect?",
    "choices": [
      "Any natural person with at least $500,000 in net worth",
      "A natural person with at least $1,100,000 under the adviser's management OR a net worth in excess of $2,200,000 (excluding primary residence)",
      "Any accredited investor under Regulation D",
      "Any client with a college degree in finance"
    ],
    "answerIndex": 1,
    "rationale": "Following the SEC's 2021 inflation adjustment, a qualified client is generally a person with at least $1.1 million under the adviser's management or net worth in excess of $2.2 million (excluding primary residence). Choice C is the top distractor because accredited-investor thresholds ($1 million net worth or $200K/$300K income) are lower and serve a different statutory purpose (Reg D), not Rule 205-3.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 205-3"
    },
    "difficulty": "hard",
    "id": "3007939915b7",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Form ADV Part 2A is also commonly known as the:",
    "choices": [
      "Brochure",
      "Brochure supplement",
      "Customer relationship summary",
      "Notice filing"
    ],
    "answerIndex": 0,
    "rationale": "Form ADV Part 2A is the firm's 'brochure,' which describes the adviser's business, services, fees, conflicts, and disciplinary history. The brochure 'supplement' is Part 2B and covers individual supervised persons, which is the most common point of confusion among test-takers.",
    "citation": {
      "source": "SEC",
      "ref": "Form ADV Part 2A"
    },
    "difficulty": "easy",
    "id": "6c5fb3c34e68",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Form ADV Part 2B (the brochure supplement) provides information about:",
    "choices": [
      "The firm's overall fee schedule",
      "The specific supervised persons who provide investment advice to a particular client",
      "The firm's audited financial statements",
      "The firm's privacy policy"
    ],
    "answerIndex": 1,
    "rationale": "Part 2B discloses educational background, business experience, disciplinary information, other business activities, additional compensation, and supervision for the individual supervised persons giving advice to a client. Choice A describes Part 2A content; students often conflate the firm-level brochure with the person-level supplement.",
    "citation": {
      "source": "SEC",
      "ref": "Form ADV Part 2B"
    },
    "difficulty": "medium",
    "id": "75e49a38ff46",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Form CRS (Form ADV Part 3) is required to be delivered by SEC-registered investment advisers to:",
    "choices": [
      "Other registered investment advisers",
      "Retail investors at the beginning of the relationship",
      "Only institutional clients",
      "The SEC on a quarterly basis"
    ],
    "answerIndex": 1,
    "rationale": "Form CRS is a brief 'relationship summary' that SEC-registered IAs (and BDs) must deliver to retail investors at or before the start of the advisory relationship. Choice C is incorrect because Form CRS specifically targets retail investors, not institutional clients, who are presumed to have sufficient sophistication.",
    "citation": {
      "source": "SEC",
      "ref": "Form CRS"
    },
    "difficulty": "easy",
    "id": "f3b5dfc16ca4",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "On a registered representative's social media page, content posted by the rep that does not change in real time and cannot be modified by user reactions is generally classified as:",
    "choices": [
      "Interactive content",
      "Correspondence",
      "Static content",
      "A public appearance"
    ],
    "answerIndex": 2,
    "rationale": "FINRA's framework on social media classifies fixed posts (e.g., a profile, banner, or blog post) as 'static' content, which is treated like a retail communication subject to principal pre-use approval. Choice A (interactive) describes real-time chat or comment threads, which are supervised under different rules but generally do not require pre-approval, making it the prime confusion point.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2210"
    },
    "difficulty": "easy",
    "id": "8af0892519c6",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Under FINRA Rule 2210, which of the following is generally subject to principal pre-use approval before distribution?",
    "choices": [
      "A private one-to-one email to a single existing client",
      "Retail communications distributed to more than 25 retail investors within any 30-calendar-day period",
      "Internal-use-only memos",
      "Spoken telephone conversations"
    ],
    "answerIndex": 1,
    "rationale": "Rule 2210 categorizes communications as 'retail communications' when distributed to more than 25 retail investors in 30 days, requiring principal approval before first use. Choice A is correspondence (25 or fewer retail investors in 30 days) and is generally subject to supervision and review but not pre-use principal approval.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2210"
    },
    "difficulty": "medium",
    "id": "8478167f0a47",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Under SEC Rule 204-2, an investment adviser's advertisements, social media communications, and other client correspondence must generally be preserved for at least:",
    "choices": [
      "1 year",
      "3 years",
      "5 years, with the first 2 years readily accessible",
      "7 years"
    ],
    "answerIndex": 2,
    "rationale": "Rule 204-2 requires IAs to retain books and records, including advertisements and communications, for not less than 5 years from the end of the fiscal year in which the last entry was made, with the first 2 years readily accessible at the principal office. The 3-year option is a common distractor because BD recordkeeping under Rule 17a-4 has shorter retention periods for some categories.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-2"
    },
    "difficulty": "medium",
    "id": "63a539c1cc49",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Which of the following statements by an IAR is unlawful?",
    "choices": [
      "Our firm is registered as an investment adviser in this state.",
      "Our firm has been approved by the state securities Administrator.",
      "Our firm has filed Form ADV with the state.",
      "Our firm has $50 million under management."
    ],
    "answerIndex": 1,
    "rationale": "Stating that the Administrator has 'approved' a firm or person is expressly unlawful because registration does not constitute approval, sponsorship, or finding of merit. Choice A is the leading distractor because students assume any reference to registration is risky, but a truthful statement that the firm is registered (without implying merit-based approval) is permitted.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 502"
    },
    "difficulty": "easy",
    "id": "b6baa21a4549",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Under SEC Rule 206(4)-1 (the 'Marketing Rule'), an IA may use testimonials in advertising provided that:",
    "choices": [
      "The IA does not pay any cash or non-cash compensation to the testimonial-giver",
      "Required disclosures are clearly and prominently provided (paid/unpaid status, material conflicts, etc.) and the IA exercises required oversight",
      "The testimonial appears only in print, not on the internet",
      "Testimonials are entirely prohibited under all circumstances"
    ],
    "answerIndex": 1,
    "rationale": "The amended Marketing Rule permits testimonials and endorsements subject to disclosure, oversight, and disqualification conditions, abandoning the historic flat ban. Choice D is the top distractor because the prior rule did effectively prohibit testimonials, and many test-takers learned the old framework; the current rule allows them with conditions.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-1"
    },
    "difficulty": "medium",
    "id": "d3fb54beb070",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Under the SEC Marketing Rule, when an IA presents performance results in an advertisement to a non-private-fund retail audience, gross performance must generally be accompanied by:",
    "choices": [
      "The Sharpe ratio",
      "Net performance presented with at least equal prominence and over comparable time periods",
      "A signed client release",
      "SEC pre-approval of each advertisement"
    ],
    "answerIndex": 1,
    "rationale": "Rule 206(4)-1 requires net performance to be shown with at least equal prominence to gross performance, calculated over the same time periods and using the same methodology, so that fees do not obscure the picture. Choice C reflects the incorrect assumption that client consent cures performance-presentation defects; the rule's protections cannot be waived by client signature.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-1"
    },
    "difficulty": "medium",
    "id": "72f439bab32d",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Under Rule 206(4)-1, hypothetical performance (including back-tested or model performance) may be included in advertising only if the IA:",
    "choices": [
      "Includes a clear statement that the performance is guaranteed for the future",
      "Adopts policies to ensure the audience has the financial sophistication and resources to understand it, and provides information regarding criteria, assumptions, and risks/limitations",
      "Excludes any disclosure of material risks",
      "Caps such advertising at 30 calendar days per year"
    ],
    "answerIndex": 1,
    "rationale": "The Marketing Rule places three conditions on hypothetical performance: tailored audience policies, sufficient information about underlying assumptions and methodology, and risks and limitations disclosures. Choice A is the most appealing wrong answer because students associate hypothetical performance with bold claims, but ANY guarantee of future performance is itself a separate prohibited misrepresentation.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-1"
    },
    "difficulty": "hard",
    "id": "9148c0a6502c",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "An IAR's brochure states that the firm specializes in 'guaranteed market-beating returns.' Under NASAA's policy on adviser communications, this is:",
    "choices": [
      "Permissible if disclosed in small print",
      "Permissible only for accredited investors",
      "Prohibited as a misleading communication and a guarantee against loss/of performance",
      "Permissible if also displayed on the website"
    ],
    "answerIndex": 2,
    "rationale": "NASAA's Statement of Policy treats guarantees of investment performance and misleading advertising as dishonest and unethical practices, regardless of disclaimer placement. Choice A is wrong because no amount of fine print can rehabilitate a guarantee of performance; disclaimer cannot cure a prohibited core message.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Statement of Policy on Unethical or Dishonest Practices of IAs and IARs"
    },
    "difficulty": "easy",
    "id": "a83da4841927",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Section 502 of the Uniform Securities Act prohibits a person from representing that registration of a security or person:",
    "choices": [
      "Has been disclosed to the IRS",
      "Implies that the Administrator has approved or recommended the security or person",
      "Has been audited by FINRA",
      "Has been published in the Federal Register"
    ],
    "answerIndex": 1,
    "rationale": "USA Section 502 expressly forbids representing or implying that the Administrator has passed on the merits, approved, sponsored, or recommended a person or security. Choice D is a distractor that mixes up registration concepts: filings under federal securities laws are sometimes published, but no published listing constitutes 'approval' under USA Section 502.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 502"
    },
    "difficulty": "medium",
    "id": "f03048d914c2",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "NASAA's Statement of Policy treats which of the following as a dishonest or unethical practice by an IA or IAR?",
    "choices": [
      "Charging an asset-based fee disclosed in the contract",
      "Guaranteeing a client against any investment loss",
      "Disclosing material conflicts of interest",
      "Providing the brochure 48 hours in advance of contract execution"
    ],
    "answerIndex": 1,
    "rationale": "NASAA expressly identifies guaranteeing a client against loss as a prohibited dishonest and unethical practice, because no advisor can ensure market outcomes. Choice A is the leading distractor for students who incorrectly remember that ALL fee arrangements are scrutinized; properly disclosed asset-based fees are routine and permitted.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Statement of Policy on Unethical or Dishonest Practices of IAs and IARs"
    },
    "difficulty": "easy",
    "id": "89f78a795e2a",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Item 11 of Form ADV Part 2A requires an investment adviser to describe its:",
    "choices": [
      "Asset allocation strategy",
      "Code of ethics, including how the IA addresses conflicts arising from personal trading and participation in client transactions",
      "Marketing budget",
      "Audited fee schedule"
    ],
    "answerIndex": 1,
    "rationale": "Item 11 requires a description of the IA's code of ethics adopted under Rule 204A-1 and an explanation of how it addresses conflicts from personal trading, including agency cross and principal transactions. Choice A is the top distractor because students associate Form ADV with investment strategies, but those go in Item 8 (Methods of Analysis), not Item 11.",
    "citation": {
      "source": "SEC",
      "ref": "Form ADV Part 2A"
    },
    "difficulty": "medium",
    "id": "032af832d152",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "The 'brochure rule' under the Investment Advisers Act requires delivery to clients of:",
    "choices": [
      "Form U4",
      "Form ADV Part 2A and any applicable Part 2B",
      "Form 10-K",
      "Form S-1"
    ],
    "answerIndex": 1,
    "rationale": "Rule 204-3 requires delivery of the firm brochure (Part 2A) plus any applicable brochure supplements (Part 2B) for the supervised persons providing advice to that client. Choice A is wrong because Form U4 is a registration form filed by the individual with regulators, not a client-facing disclosure document.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-3"
    },
    "difficulty": "easy",
    "id": "aa49eb975102",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Under Form ADV Part 2A Item 18 (Financial Information), an IA must disclose any financial condition reasonably likely to impair its ability to meet contractual commitments to clients if it:",
    "choices": [
      "Has fewer than 10 employees",
      "Has discretionary authority or custody of client assets, OR requires prepayment of fees of more than $1,200 per client six or more months in advance",
      "Earns less than $5 million in annual revenue",
      "Has no full-time IARs"
    ],
    "answerIndex": 1,
    "rationale": "Item 18's enhanced financial disclosure obligation is triggered specifically by discretionary authority, custody, or substantial prepayment of fees more than six months in advance, because in those circumstances the IA holds or controls client assets/funds. Choice A is the leading distractor; small-firm size alone does not raise the disclosure to a regulatory presumption.",
    "citation": {
      "source": "SEC",
      "ref": "Form ADV Part 2A"
    },
    "difficulty": "medium",
    "id": "fad42b460091",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "An IA's principal was convicted of a securities-related felony 8 years ago. With respect to disclosure to clients, the IA:",
    "choices": [
      "Need not disclose because the conviction is more than 5 years old",
      "Must disclose this material disciplinary event in Form ADV Part 2A",
      "Need only disclose orally if asked by a client",
      "May omit it because no clients have inquired"
    ],
    "answerIndex": 1,
    "rationale": "Form ADV Part 2A Item 9 presumes a 10-year window of materiality for legal/disciplinary events, and a securities-related felony of a management person is presumptively material and must be disclosed in writing. Choice A is the top distractor because students confuse materiality windows from other contexts; the IA brochure standard is 10 years, not 5.",
    "citation": {
      "source": "SEC",
      "ref": "Form ADV Part 2A"
    },
    "difficulty": "medium",
    "id": "731814c34338",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Under the antifraud provisions applicable to investment advisers, the adviser's duty regarding conflicts of interest in client communications is to:",
    "choices": [
      "Eliminate them entirely",
      "Fully and fairly disclose material conflicts so that the client can give informed consent",
      "Disclose them only if asked by the client",
      "Disclose them only to institutional clients"
    ],
    "answerIndex": 1,
    "rationale": "Section 206 of the Advisers Act, as interpreted in SEC v. Capital Gains Research Bureau, imposes an affirmative fiduciary duty to fully and fairly disclose all material conflicts so the client can render informed consent. Choice A is wrong because the law does not require elimination of conflicts; many conflicts are inherent to advisory relationships and are addressed by adequate disclosure and consent.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 206(2)"
    },
    "difficulty": "medium",
    "id": "877e9fc2350d",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "An IAR's website states: 'Our adviser is licensed by the State, which means the State endorses our investment recommendations.' This statement is:",
    "choices": [
      "Permitted under USA Section 502",
      "Prohibited because it implies regulatory endorsement of the recommendations",
      "Permitted if disclaimed elsewhere on the website",
      "Permitted only on the firm's homepage"
    ],
    "answerIndex": 1,
    "rationale": "USA Section 502 expressly bars representations that registration implies endorsement, sponsorship, or recommendation by the Administrator. Choice C is the most tempting wrong answer because students assume disclaimers cure misleading content, but a contradictory disclaimer placed elsewhere does not neutralize an unlawful representation about regulatory endorsement.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 502"
    },
    "difficulty": "easy",
    "id": "6c3c024a0658",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "An SEC-registered investment adviser's fiscal year ends December 31. By what date must the IA deliver to existing clients either an updated brochure or a summary of material changes with an offer to provide the brochure?",
    "choices": [
      "March 1",
      "April 30 (within 120 days of fiscal year end)",
      "June 30",
      "Each anniversary date of the client's contract"
    ],
    "answerIndex": 1,
    "rationale": "Rule 204-3 requires annual client delivery within 120 days of the IA's fiscal year end; for a December 31 year-end, 120 days falls on April 30 (May 1 in leap years, but April 30 is the standard test answer). Choice D is incorrect because the brochure rule's annual obligation is firm-wide and tied to the IA's fiscal year, not to individual client anniversaries.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-3"
    },
    "difficulty": "hard",
    "id": "dbaf3b9b8330",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Client emails sent and received by an IA's firm constitute 'communications' that, under SEC recordkeeping rules, must be:",
    "choices": [
      "Deleted after 90 days for client privacy",
      "Maintained for at least 5 years (with the first 2 years readily accessible at the IA's principal office)",
      "Maintained only if they discuss specific securities transactions",
      "Forwarded to NASAA each quarter"
    ],
    "answerIndex": 1,
    "rationale": "Rule 204-2 sweeps all client communications, including email and other digital messaging, into the 5-year retention rule with the first 2 years readily accessible. Choice C is wrong because the rule is not limited to transaction-related messages; routine client correspondence is also a 'record' under the rule.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 204-2"
    },
    "difficulty": "medium",
    "id": "6f7449d4ebf4",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Under the NASAA-style 'internet adviser' (de minimis) position, a state-registered IA or IAR that distributes general advisory content over the internet may rely on the exclusion only if:",
    "choices": [
      "It discloses to each visitor the AUM of every client",
      "Its communications include a legend that the IA/IAR may only conduct business in a state if registered or exempt, and the communications do not contain specific investment advice directed to residents of that state",
      "It refrains from using any electronic communications at all",
      "It mails Form ADV by first-class mail prior to any website visit"
    ],
    "answerIndex": 1,
    "rationale": "The internet exclusion typically requires (a) general content not involving specific advice rendered to a state's residents, (b) a prominent legend describing where the IA/IAR may conduct business, and (c) follow-up only after compliance with applicable state registration. Choice A is wrong because client AUM disclosures have nothing to do with the internet exclusion's conditions; it is about scope of communication, not content of client information.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Investment Adviser Model Rule"
    },
    "difficulty": "hard",
    "id": "3f98c0dee07f",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "An IA receives soft-dollar benefits from a broker-dealer it directs client trades to. Under Form ADV Part 2A, the IA must:",
    "choices": [
      "Disclose the existence and conflicts associated with the soft-dollar arrangement, including the products/services received and how the IA addresses the conflict",
      "Refund the value of the benefits to clients each quarter",
      "Disclose only if total benefits exceed $10,000 per year",
      "Disclose only at the request of the SEC"
    ],
    "answerIndex": 0,
    "rationale": "Form ADV Part 2A Item 12 (Brokerage Practices) requires explicit disclosure of soft-dollar arrangements, the products/services obtained, and the conflicts they create, because soft dollars represent a benefit to the IA paid out of client commission dollars. Choice C is the leading distractor because students invent dollar thresholds, but the rule requires qualitative disclosure regardless of dollar amount.",
    "citation": {
      "source": "SEC",
      "ref": "Form ADV Part 2A"
    },
    "difficulty": "medium",
    "id": "fd5423176416",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "An IAR's online ad lists only the firm's three best stock picks of the past year, omitting losing recommendations. Under the SEC Marketing Rule, this is:",
    "choices": [
      "Permitted because the picks were actual past recommendations",
      "Permitted with a small-print disclaimer at the bottom",
      "Prohibited because advertising of past specific recommendations cannot be selected in a way that is not fair and balanced",
      "Permitted if the IAR also includes the firm's overall return"
    ],
    "answerIndex": 2,
    "rationale": "Rule 206(4)-1 forbids cherry-picking past specific investment advice; selective presentation of profitable picks without comparable presentation of losers (or other appropriate context) is misleading. Choice D is the top distractor because adding the overall return helps but does not, by itself, satisfy the requirement that any presentation of specific past recommendations be fair and balanced.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-1"
    },
    "difficulty": "hard",
    "id": "909d123a4e4d",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "If an IAR 'likes' or 'shares' a third-party social media post praising her firm's services, under FINRA's social-media guidance she generally:",
    "choices": [
      "Has done nothing requiring supervision",
      "Has 'adopted' the third-party content, making it firm communication subject to recordkeeping and supervision rules",
      "Has converted the content into static communication automatically exempt from review",
      "Has converted the content into research material exempt from rules"
    ],
    "answerIndex": 1,
    "rationale": "FINRA's framework treats 'liking,' sharing, or favorably forwarding third-party content as adoption (and active involvement in preparing it as entanglement), bringing the content under the firm's supervision and recordkeeping obligations. Choice A is the leading distractor because students mistakenly view casual social-media interactions as personal, but reps cannot escape supervision by characterizing business-related interactions as informal clicks.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2210"
    },
    "difficulty": "medium",
    "id": "442ed3b99964",
    "subtopicId": "4.7",
    "reviewed": false
  },
  {
    "stem": "Under amended SEC Rule 206(4)-1, the term 'testimonial' refers to statements by current clients about their experience with the IA, while 'endorsement' refers to statements by:",
    "choices": [
      "The SEC about the adviser",
      "Persons other than current clients (for example, paid promoters, industry figures, or non-client third parties)",
      "The IA's own employees only",
      "State Administrators about the adviser"
    ],
    "answerIndex": 1,
    "rationale": "The Marketing Rule formally distinguishes 'testimonials' (statements by current clients) from 'endorsements' (statements by persons other than current clients), with both subject to comparable disclosure, oversight, and disqualification requirements. Choice C is the top distractor because students reasonably guess that internal voices count as 'endorsement,' but employees and other affiliates fall under the same regulatory regime as third-party endorsers and require disclosure of the affiliation/conflict.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-1"
    },
    "difficulty": "hard",
    "id": "513e8108099f",
    "subtopicId": "4.7",
    "reviewed": false
  }
];

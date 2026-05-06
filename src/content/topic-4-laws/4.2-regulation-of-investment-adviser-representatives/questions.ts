import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Under the Investment Advisers Act of 1940, an investment adviser representative (IAR) is best described as which of the following?",
    "choices": [
      "Any natural person associated with an investment adviser who, on behalf of the adviser, gives investment advice, manages client accounts, solicits advisory business, or supervises employees who do those things",
      "Any firm that for compensation engages in the business of advising others as to the value of securities",
      "Any natural person registered as a broker-dealer agent who occasionally discusses investment ideas with clients",
      "Any clerical employee of an investment adviser who answers phones and routes incoming mail to portfolio managers"
    ],
    "answerIndex": 0,
    "rationale": "Section 202(a)(17) of the Investment Advisers Act defines a 'supervised person' that includes individuals who give advice, manage accounts, solicit, or supervise such persons on behalf of the adviser. Choice B describes the firm-level investment adviser, not the individual representative. Choice D is incorrect because purely clerical or ministerial personnel are excluded from IAR status by both federal and state definitions.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 202(a)(17)"
    },
    "difficulty": "easy",
    "id": "ba0893cf17a0",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Under the Uniform Securities Act, which activity by a natural person associated with an investment adviser would NOT, by itself, cause that person to be classified as an investment adviser representative?",
    "choices": [
      "Performing exclusively clerical and ministerial duties such as photocopying account statements",
      "Soliciting advisory clients for compensation",
      "Managing discretionary client portfolios",
      "Determining which specific recommendations should be given to clients"
    ],
    "answerIndex": 0,
    "rationale": "Under USA Section 102(15), an IAR is any individual who makes recommendations, manages accounts, determines advice, solicits advisory business, or supervises those who do; clerical and ministerial employees are expressly excluded. Choice B is wrong because solicitors who receive compensation to solicit advisory clients are explicitly within the IAR definition under the USA.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    "difficulty": "easy",
    "id": "81172033cce6",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An individual who is employed by an SEC-registered (federal covered) investment adviser and gives advice to retail clients out of an office located in State X must:",
    "choices": [
      "Register as an IAR in State X",
      "Register with the SEC as an IAR",
      "Register with FINRA as an IAR",
      "Avoid all state registration because federal preemption covers the IAR as well as the firm"
    ],
    "answerIndex": 0,
    "rationale": "Section 203A of the Investment Advisers Act preempts states from substantively regulating federal covered advisers, but it expressly preserves state authority to license, register, and regulate IARs who have a place of business in the state. Choice D is wrong because preemption applies to the firm's regulation, not to individual IAR licensing.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 203A(b)"
    },
    "difficulty": "medium",
    "id": "91553cb7fc2d",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An IAR works for a federal covered investment adviser. Her only office is in State A, but she has six retail advisory clients who reside in State B. Under Section 203A and applicable NASAA guidance, in which state(s) is she required to register as an IAR?",
    "choices": [
      "State A only",
      "State B only",
      "Both State A and State B",
      "Neither, because the firm is federal covered"
    ],
    "answerIndex": 0,
    "rationale": "For IARs of a federal covered adviser, state registration is triggered solely by having a 'place of business' in the state, regardless of how many clients reside elsewhere. The five-or-fewer 'de minimis' exemption for advisers themselves does not extend client-based registration to IARs of federal covered firms; thus State B has no jurisdiction to require her registration. Choice C is wrong because client residency alone does not create an IAR registration obligation when the firm is federal covered.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 203A(b)"
    },
    "difficulty": "medium",
    "id": "a8d366c01126",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes the registration authority for IARs?",
    "choices": [
      "IARs are always registered at the state level, even when their employing investment adviser is registered with the SEC",
      "IARs of federal covered advisers are registered with the SEC; IARs of state-registered advisers register with their states",
      "IARs are registered exclusively with FINRA through the IARD",
      "IARs are registered with NASAA, which then notifies each state"
    ],
    "answerIndex": 0,
    "rationale": "There is no federal IAR registration regime; the SEC does not register individuals as IARs. All IAR licensing occurs at the state level under the Uniform Securities Act and is preserved as to federal covered advisers by Section 203A(b). Choice B is incorrect because the SEC does not license individual IARs - only firms.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 203A(b)"
    },
    "difficulty": "medium",
    "id": "1de6f894abef",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Form U4 is best described as:",
    "choices": [
      "The Uniform Application for Securities Industry Registration or Transfer used by IARs (and others) to apply for state registration",
      "A firm-level application filed by an investment adviser to register with the SEC",
      "A periodic filing used to disclose an adviser's assets under management",
      "A termination notice filed when an IAR leaves a firm"
    ],
    "answerIndex": 0,
    "rationale": "Form U4 is the uniform application used by individuals seeking registration as agents and IARs, and is filed electronically through the CRD/IARD systems. Choice D describes Form U5, the Uniform Termination Notice for Securities Industry Registration, which is filed when an individual's association ends.",
    "citation": {
      "source": "SEC",
      "ref": "Form U4"
    },
    "difficulty": "easy",
    "id": "4c52c5ef8982",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "When an IAR's employment with a state-registered investment adviser is terminated, the firm is generally required to file Form U5 within how many days of the termination?",
    "choices": [
      "30 days",
      "10 business days",
      "60 days",
      "90 days"
    ],
    "answerIndex": 0,
    "rationale": "Form U5 must be filed within 30 days of an IAR's termination of association with a firm; the firm must also deliver a copy to the IAR. Choice C is wrong - 60 days has no basis in the uniform termination requirements.",
    "citation": {
      "source": "SEC",
      "ref": "Form U5"
    },
    "difficulty": "medium",
    "id": "fe5b92f6b60f",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An IAR is convicted of a felony involving the theft of advisory client funds. Within how many days must the firm and the IAR amend Form U4 to disclose this reportable event?",
    "choices": [
      "30 days",
      "10 days",
      "60 days",
      "By the next annual updating amendment"
    ],
    "answerIndex": 0,
    "rationale": "Material changes to Form U4, including disclosure of a reportable event such as a criminal conviction, must be reported promptly - generally by amendment within 30 days. Choice D is wrong because annual updating amendments apply to Form ADV, not to ad hoc U4 disclosure events, which require prompt reporting.",
    "citation": {
      "source": "SEC",
      "ref": "Form U4"
    },
    "difficulty": "medium",
    "id": "c61aa04e7626",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following events is a 'reportable event' that must be disclosed by amending Form U4?",
    "choices": [
      "A written customer complaint alleging sales practice violations involving compensatory damages of $5,000 or more",
      "An oral complaint received from a client about market performance",
      "A change in the IAR's preferred mailing address",
      "An internal goal-setting review giving the IAR a low performance rating"
    ],
    "answerIndex": 0,
    "rationale": "Form U4 disclosure questions specifically capture written customer complaints alleging sales practice violations and meeting reportable thresholds. Choice B is wrong because oral complaints, without more, are generally not Form U4 disclosure events; only written allegations rise to that level under the uniform reporting standards.",
    "citation": {
      "source": "SEC",
      "ref": "Form U4"
    },
    "difficulty": "medium",
    "id": "a4ab3fbfb4e4",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Under the NASAA IAR Continuing Education Model Rule, an IAR registered in an adopting state must complete how many CE credits each reporting period (year)?",
    "choices": [
      "12 credits, consisting of 6 IAR Regulatory and Ethics credits and 6 IAR Products and Practice credits",
      "10 credits, all of which must be in regulatory ethics",
      "20 credits, evenly split between products and ethics",
      "8 credits, with no specified content allocation"
    ],
    "answerIndex": 0,
    "rationale": "The NASAA IAR CE Model Rule requires 12 credits annually: 6 in IAR Regulatory and Ethics Content and 6 in IAR Products and Practice. Choice C is incorrect because 20 credits is the FINRA Regulatory Element timing benchmark for some legacy programs, not the IAR CE total under the NASAA model.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA IAR Continuing Education Model Rule"
    },
    "difficulty": "easy",
    "id": "521b3c899531",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An IAR fails to complete the required IAR continuing education credits by the end of the reporting period in an adopting state. What is the most likely consequence under the NASAA IAR CE Model Rule?",
    "choices": [
      "The IAR's registration is renewed but designated 'CE inactive,' and the IAR may not continue acting as an IAR until deficient credits are satisfied",
      "The IAR is automatically barred from the industry for life",
      "There is no consequence as long as the IAR completes the credits within the next five years",
      "The IAR is required to retake the Series 65 exam immediately"
    ],
    "answerIndex": 0,
    "rationale": "Under the NASAA IAR CE Model Rule, failure to complete the required credits results in a CE-inactive status and renewal is contingent on satisfying outstanding credits; the IAR cannot lawfully transact advisory business while inactive. Choice D is wrong because CE failure does not automatically trigger reexamination - only termination longer than two years triggers the standard exam-retake rule under most state regimes.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA IAR Continuing Education Model Rule"
    },
    "difficulty": "medium",
    "id": "671886d0ca4d",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following is most likely to require IAR registration?",
    "choices": [
      "An employee of a state-registered investment adviser who meets prospects, recommends advisory programs, and is paid based on assets gathered",
      "An IT contractor who installs and maintains the firm's portfolio accounting software",
      "A receptionist who schedules client meetings",
      "A janitor employed by the firm's building services vendor"
    ],
    "answerIndex": 0,
    "rationale": "Soliciting advisory business and recommending programs for compensation are defining IAR activities under USA Section 102(15). Choices B, C, and D involve only ministerial or non-advisory functions and are excluded from the IAR definition.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    "difficulty": "easy",
    "id": "d797edc317c6",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "A senior portfolio manager at a state-registered IA also supervises three junior advisers who give advice to clients. Under the Uniform Securities Act, the supervisor:",
    "choices": [
      "Must himself register as an IAR because supervising persons who give advice is an IAR activity",
      "Need not register because supervisors of IARs are categorically excluded",
      "Need not register so long as he does not personally meet with clients",
      "Must register as an investment adviser, not as an IAR"
    ],
    "answerIndex": 0,
    "rationale": "USA Section 102(15) expressly includes individuals who supervise employees performing IAR functions within the IAR definition. Choice B is wrong because there is no categorical exclusion for supervisors - in fact, supervision is an enumerated triggering activity.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    "difficulty": "medium",
    "id": "6593d8223c31",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Which Uniform Securities Act provision generally prescribes the registration requirements (filings, fees, effective date) for IARs at the state level?",
    "choices": [
      "USA Section 201",
      "Securities Act of 1933 Section 5",
      "Investment Company Act of 1940 Section 8",
      "Securities Exchange Act of 1934 Section 15(b)"
    ],
    "answerIndex": 0,
    "rationale": "USA Section 201 is the registration provision under the Uniform Securities Act that governs broker-dealers, agents, IAs, and IARs at the state level. Choice D applies to broker-dealer registration with the SEC under the 1934 Act, not state IAR registration.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "medium",
    "id": "602ae57cc978",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An IAR's state registration generally becomes effective:",
    "choices": [
      "At noon on the 30th day after a complete application is filed, unless the Administrator orders otherwise",
      "Immediately upon submission of Form U4",
      "Only after the IAR personally appears before the Administrator",
      "After the IAR completes 12 hours of continuing education"
    ],
    "answerIndex": 0,
    "rationale": "Under USA Section 201 (and the corresponding effective-date provisions), registrations of broker-dealers, agents, IAs, and IARs become effective at noon of the 30th day after a complete application is filed unless the Administrator postpones, denies, or accelerates that date. Choice D confuses an ongoing CE obligation with the initial effective-date rule.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "medium",
    "id": "50046cf6d809",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An IAR moves from Firm A (a state-registered IA) to Firm B (also state-registered) on the same day. Which combination of filings is required to effect the transfer?",
    "choices": [
      "Firm A files Form U5 within 30 days, and Firm B files Form U4 to register the IAR",
      "Firm B files Form U5 and Firm A files Form U4",
      "The IAR files Form ADV-W with the Administrator",
      "Only a single Form ADV amendment is needed"
    ],
    "answerIndex": 0,
    "rationale": "Termination of an IAR's association is reported by the prior firm on Form U5; the new firm registers the IAR by submitting a Form U4. Choice C is incorrect because Form ADV-W is a withdrawal form filed by an investment adviser firm, not by an individual representative.",
    "citation": {
      "source": "SEC",
      "ref": "Form U5"
    },
    "difficulty": "medium",
    "id": "b25239f8a82a",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following individuals is NOT an IAR under the Uniform Securities Act?",
    "choices": [
      "A secretary who only opens mail and prints client statements without giving advice",
      "A person who solicits advisory clients for compensation",
      "An employee who manages client portfolios on a discretionary basis",
      "An employee who determines specific securities recommendations to be made to clients"
    ],
    "answerIndex": 0,
    "rationale": "USA Section 102(15) excludes purely clerical and ministerial personnel from the IAR definition. The remaining choices each describe an enumerated IAR activity (soliciting, managing, or determining recommendations) and therefore require registration.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    "difficulty": "easy",
    "id": "9448f9a46fc5",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Under Section 203A of the Investment Advisers Act, states retain which authority over an IAR of a federal covered investment adviser?",
    "choices": [
      "The authority to license, register, and discipline the IAR if the IAR has a place of business in the state",
      "The authority to require the firm to register as a state investment adviser",
      "The authority to impose state recordkeeping rules on the federal covered firm",
      "The authority to require the federal covered firm to file a Form ADV with the state Administrator as primary regulator"
    ],
    "answerIndex": 0,
    "rationale": "Section 203A(b) preempts most state substantive regulation of federal covered advisers but expressly preserves state licensing and disciplinary authority over their IARs with a place of business in the state. Choice C is wrong because Section 203A preempts states from substantive recordkeeping rules on federal covered advisers, leaving recordkeeping to the SEC.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 203A(b)"
    },
    "difficulty": "hard",
    "id": "b7297c7573d6",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following Form U4 disclosures generally must be reported regardless of how long ago they occurred (i.e., there is no time-limited 'look-back')?",
    "choices": [
      "Felony charges or convictions",
      "A consumer bankruptcy",
      "An unsatisfied judgment or lien",
      "A compromise with creditors"
    ],
    "answerIndex": 0,
    "rationale": "All felony charges and convictions must be disclosed on Form U4 with no time limitation. By contrast, bankruptcies and similar financial events are limited to a 10-year look-back, making Choice B incorrect as the 'always-disclosed' answer.",
    "citation": {
      "source": "SEC",
      "ref": "Form U4"
    },
    "difficulty": "medium",
    "id": "e9996a6922f3",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Personal bankruptcies are generally reportable on Form U4 when they occurred within how many years of the filing?",
    "choices": [
      "10 years",
      "5 years",
      "2 years",
      "Forever - there is no time limit"
    ],
    "answerIndex": 0,
    "rationale": "The U4 disclosure questions for bankruptcies, compromises with creditors, and similar financial matters use a 10-year look-back. Choice D confuses the 'no time limit' rule applicable to felonies with the financial disclosure look-back, which is finite.",
    "citation": {
      "source": "SEC",
      "ref": "Form U4"
    },
    "difficulty": "medium",
    "id": "8c4fe2d04b05",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An IAR is dually registered as a registered representative of a broker-dealer and is currently completing FINRA's Regulatory and Firm Element CE programs. Does that satisfy the NASAA IAR CE requirement?",
    "choices": [
      "No - FINRA CE for broker-dealer agents does not, by itself, satisfy the IAR CE Model Rule, although certain FINRA-approved courses may also be accepted as IAR Products and Practice content",
      "Yes - any FINRA CE automatically satisfies IAR CE in adopting states",
      "Yes - the SEC has waived IAR CE for dually registered persons",
      "No - dually registered IARs are exempt from IAR CE altogether"
    ],
    "answerIndex": 0,
    "rationale": "The NASAA IAR CE Model Rule requires content specifically approved as IAR CE; FINRA's separate CE program is not automatically sufficient, although there is overlap in approved Products and Practice courses. Choice B is wrong because IAR CE has its own NASAA-approved content categories that are distinct from FINRA's Regulatory Element.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA IAR Continuing Education Model Rule"
    },
    "difficulty": "hard",
    "id": "10667f9d863c",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following is most accurate regarding state registration of an IAR?",
    "choices": [
      "Registration is on an individual basis, with the IAR sponsored by a registered investment adviser",
      "An IAR may be registered without an associated firm so long as fees are paid",
      "An individual may register simultaneously with two unaffiliated investment advisers without each firm's consent",
      "The Administrator registers IARs as part of a firm's group registration"
    ],
    "answerIndex": 0,
    "rationale": "Under USA Section 201 and related provisions, an IAR registers individually but must be sponsored by, and associated with, a registered IA. Choice B is wrong because an IAR cannot be registered in a vacuum - the registration is automatically inactive when the IAR is not associated with a sponsoring firm.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "medium",
    "id": "bb87658467a6",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An IAR who has been terminated 'for cause' for failing to follow firm policies regarding suitability:",
    "choices": [
      "Must have the reason for termination disclosed by the firm on Form U5",
      "Cannot have the termination reason disclosed because of privacy laws",
      "Is automatically barred for life from the industry",
      "Need not be reported until the next annual amendment"
    ],
    "answerIndex": 0,
    "rationale": "Form U5 contains specific disclosure questions about whether the individual was terminated 'for cause' and the reason; the firm has an obligation to answer truthfully. Choice B is wrong - U5 disclosure obligations override the firm's general privacy preferences and are mandatory.",
    "citation": {
      "source": "SEC",
      "ref": "Form U5"
    },
    "difficulty": "medium",
    "id": "d608d57ea532",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An individual exclusively engaged in selling fixed annuities through an insurance license, who never recommends or transacts in securities and is not associated with an investment adviser, must register as an IAR if:",
    "choices": [
      "She begins providing investment advice about securities for compensation, on behalf of an investment adviser",
      "She uses a business card identifying herself as a 'wealth professional'",
      "She holds an active state insurance license",
      "She offers fixed annuities to retired individuals"
    ],
    "answerIndex": 0,
    "rationale": "IAR status hinges on engaging in advisory activities concerning securities on behalf of an IA. Selling only fixed annuities is generally not an IAR activity, but giving investment advice for compensation about securities makes the person an IAR under USA Section 102(15). Choice B is wrong because mere job titles do not create regulated status absent advisory activity.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    "difficulty": "medium",
    "id": "68bcd1911580",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An investment adviser representative gives a speech open to the general public in State X. The IAR is associated with a federal covered IA and has no office in State X but mentions she is happy to take questions from prospective clients. Under Section 203A and NASAA guidance, does she trigger IAR registration in State X?",
    "choices": [
      "No - merely speaking in a state where she has no place of business does not, without more, require IAR registration for an IAR of a federal covered adviser",
      "Yes - any contact with prospective clients in a state requires IAR registration there",
      "Yes - all federal covered IAs must register their IARs in every state they visit",
      "No - federal covered IAs are exempt, so their IARs need not register anywhere"
    ],
    "answerIndex": 0,
    "rationale": "For IARs of federal covered advisers, state registration is triggered by having a place of business in that state. Choice D is wrong because IARs must still register in states where they do have a place of business, despite the firm's federal covered status.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 203A(b)"
    },
    "difficulty": "hard",
    "id": "f6efe1198b23",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "The Uniform Securities Act allows the Administrator to deny, suspend, or revoke an IAR registration when the applicant has:",
    "choices": [
      "Been convicted within the past 10 years of any felony or any misdemeanor involving securities or any aspect of the securities business",
      "Refused to play golf with the Administrator's staff",
      "Charged advisory fees that are higher than competitors' fees",
      "Been employed by more than three IAs over a career"
    ],
    "answerIndex": 0,
    "rationale": "USA Section 204(b) and related provisions allow regulatory action against an IAR who has been convicted within 10 years of any felony or of a misdemeanor involving the securities business. Choice C is wrong because the Administrator has no authority to set fee levels; only fraudulent or unethical practices around fees are regulated.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule 204"
    },
    "difficulty": "medium",
    "id": "1bbc4e6da6eb",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Which Form ADV-related event is most directly relevant to an IAR's individual disclosure obligations?",
    "choices": [
      "A statutory disqualification of the IAR that the firm must reflect in Form ADV Part 1 disciplinary disclosures and the IAR must reflect in Form U4 amendments",
      "An annual updating amendment of the firm's Form ADV Part 2A brochure, which is solely a firm-level event without IAR involvement",
      "A Form ADV-W withdrawal made when an IAR retires",
      "The filing of a Form U5 to register a new advisory firm"
    ],
    "answerIndex": 0,
    "rationale": "Disciplinary events affecting an IAR can require both firm-level Form ADV updates and individual U4 amendments, reflecting the dual reporting structure. Choice C is wrong because Form ADV-W is the firm's withdrawal form; an individual IAR's departure is reported on Form U5, not ADV-W.",
    "citation": {
      "source": "SEC",
      "ref": "Form ADV"
    },
    "difficulty": "hard",
    "id": "dd468b295b30",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Under most state interpretations of the USA, an officer or director of a state-registered investment adviser must register as an IAR when:",
    "choices": [
      "The officer or director also performs IAR functions, such as soliciting clients, managing accounts, or supervising advisory employees",
      "The officer or director is over the age of 21",
      "The officer or director earns more than $200,000 annually",
      "The officer or director uses a corporate email address"
    ],
    "answerIndex": 0,
    "rationale": "Officer or director status alone is not what triggers IAR registration - what matters under USA Section 102(15) is whether the individual performs an enumerated IAR activity. Choice C is wrong because compensation level is irrelevant to IAR status; the analysis turns on the function performed.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    "difficulty": "medium",
    "id": "2f5a36865cd9",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An IAR who has been the subject of an investor's written complaint alleging unsuitable recommendations and seeking $25,000 in damages must:",
    "choices": [
      "Have the complaint disclosed by amendment to Form U4, generally within 30 days",
      "Wait until the next annual amendment of Form ADV",
      "Provide oral notice to the Administrator only",
      "Take no action because oral acknowledgment of the complaint is sufficient"
    ],
    "answerIndex": 0,
    "rationale": "Customer-initiated written complaints alleging sales practice violations of specified amounts are reportable on Form U4 by amendment within 30 days. Choice B is wrong because firm-level Form ADV does not capture individual IAR customer complaints; that disclosure occurs on Form U4.",
    "citation": {
      "source": "SEC",
      "ref": "Form U4"
    },
    "difficulty": "medium",
    "id": "555e365fe597",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Which entity operates the central electronic system through which IARs file Form U4 and Form U5 disclosures?",
    "choices": [
      "FINRA (via the CRD/IARD systems)",
      "The SEC's EDGAR filing system",
      "The U.S. Treasury through FinCEN",
      "The Federal Reserve via FedLine"
    ],
    "answerIndex": 0,
    "rationale": "FINRA operates the Central Registration Depository (CRD) and Investment Adviser Registration Depository (IARD), through which Forms U4, U5, and ADV are filed. Choice B is wrong because EDGAR is for issuer filings under the 1933 and 1934 Acts, not individual IAR registrations.",
    "citation": {
      "source": "OTHER",
      "ref": "Financial Industry Regulatory Authority"
    },
    "difficulty": "easy",
    "id": "c48e3e22f3b3",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Under the NASAA IAR CE Model Rule, an IAR who is also a registered representative subject to FINRA CE may receive credit toward the IAR Products and Practice component when:",
    "choices": [
      "The IAR completes a FINRA continuing education course that has been approved as eligible IAR Products and Practice content",
      "The IAR completes any FINRA Regulatory Element regardless of content",
      "The IAR sells more than $1 million of advisory services in the year",
      "The IAR is dually registered for at least 10 years"
    ],
    "answerIndex": 0,
    "rationale": "The NASAA IAR CE Model Rule allows specifically approved courses (which may include certain FINRA-recognized content) to satisfy IAR Products and Practice credits, but blanket FINRA CE completion does not satisfy IAR Regulatory and Ethics requirements. Choice B is wrong because IAR-specific Regulatory and Ethics credits are not auto-satisfied by FINRA Regulatory Element content.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA IAR Continuing Education Model Rule"
    },
    "difficulty": "hard",
    "id": "7574726924c5",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes 'place of business' for purposes of triggering IAR state registration?",
    "choices": [
      "An office where the IAR regularly provides advisory services or any location held out to the public as such",
      "Solely the address listed on the IAR's tax return",
      "The location of the IAR's main bank account",
      "Any state in which the IAR has at least one client"
    ],
    "answerIndex": 0,
    "rationale": "NASAA and SEC guidance define 'place of business' as any office at which the IAR regularly provides advisory services, solicits, meets with, or otherwise communicates with clients, plus any other location held out to the public as such. Choice D is wrong because client residency alone does not establish a place of business for an IAR of a federal covered adviser.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 203A-3"
    },
    "difficulty": "medium",
    "id": "ec231a4b2805",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An IAR's registration in a state generally:",
    "choices": [
      "Expires on December 31 of each year unless renewed by paying the annual fee and (in adopting states) completing CE",
      "Is permanent once granted and does not require renewal",
      "Renews automatically for life upon first registration",
      "Lapses only if the IAR moves to another state"
    ],
    "answerIndex": 0,
    "rationale": "Like agent and IA registrations, IAR registrations expire on December 31 each year and must be renewed annually with payment of the renewal fee and, in adopting states, satisfaction of the IAR CE requirement. Choice B is wrong - state registrations are not perpetual and require affirmative annual renewal.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "medium",
    "id": "f8d8f662e640",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An individual is paid a flat fee solely to refer prospective clients to a state-registered investment adviser. Under the Uniform Securities Act, this person:",
    "choices": [
      "Is generally an IAR (a 'solicitor') because soliciting advisory business for compensation is an enumerated IAR activity",
      "Is exempt from registration so long as she does not personally give investment advice",
      "Is regulated only by the federal securities laws",
      "Need not register because referral payments are not 'compensation'"
    ],
    "answerIndex": 0,
    "rationale": "Under USA Section 102(15), receiving compensation to solicit, offer, or negotiate for the sale of investment advisory services makes the individual an IAR. Choice B is wrong because solicitation, even without giving advice, is itself an enumerated IAR function and triggers registration.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(15)"
    },
    "difficulty": "medium",
    "id": "c9958893b085",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "A state-registered investment adviser hires a new IAR. The earliest the IAR may lawfully begin acting in that capacity is:",
    "choices": [
      "When the IAR's registration becomes effective (generally 30 days after a complete Form U4 filing, or earlier if accelerated by the Administrator)",
      "On the day the IAR signs an offer letter",
      "When the IAR begins her first day of work",
      "Upon completion of internal firm training, regardless of state status"
    ],
    "answerIndex": 0,
    "rationale": "An individual cannot transact business as an IAR in a state until registration is effective, which is generally noon on the 30th day after a complete Form U4 application unless accelerated. Choice D is wrong because internal firm policies cannot substitute for state regulatory effectiveness.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "medium",
    "id": "43d2e076001f",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "Which body adopted the model rule that, when implemented by a state, imposes annual continuing education requirements on IARs registered in that state?",
    "choices": [
      "NASAA (the North American Securities Administrators Association)",
      "FINRA",
      "The SEC",
      "The Federal Reserve Board"
    ],
    "answerIndex": 0,
    "rationale": "NASAA adopted the IAR Continuing Education Model Rule, which states implement at their option to require annual CE for IARs. Choice C is wrong because the SEC does not impose CE on IARs; the SEC does not register or directly supervise individual IARs.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA IAR Continuing Education Model Rule"
    },
    "difficulty": "easy",
    "id": "627dbd9a9ddc",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An IAR who lets her registration lapse for more than two years and then seeks to re-register will generally be required to:",
    "choices": [
      "Retake the qualifying examination (such as the Series 65) before her new registration can become effective",
      "Wait an additional five years before applying",
      "Register only as an investment adviser firm",
      "Receive an automatic waiver of the exam requirement"
    ],
    "answerIndex": 0,
    "rationale": "States generally require re-examination if an individual has been out of the industry for more than two years; absent dual registration or other exemption, the qualifying exam must be retaken. Choice D is wrong because automatic waivers are not granted after a multi-year lapse; the exam requirement is reinstated.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    "difficulty": "hard",
    "id": "33e41054b465",
    "subtopicId": "4.2",
    "reviewed": false
  },
  {
    "stem": "An IAR provides her current home address on Form U4. Six months later, she moves. What action is required?",
    "choices": [
      "The Form U4 must be amended to reflect the new residential address, generally within 30 days",
      "No action - residential addresses are not collected on Form U4",
      "Notify only the post office",
      "Wait until the next annual renewal"
    ],
    "answerIndex": 0,
    "rationale": "Form U4 collects, among other things, the IAR's residential history and current address; material changes must be updated by amendment within 30 days. Choice D is wrong because the U4 has no annual updating amendment cycle - amendments are event-driven.",
    "citation": {
      "source": "SEC",
      "ref": "Form U4"
    },
    "difficulty": "medium",
    "id": "1eb6ae437b43",
    "subtopicId": "4.2",
    "reviewed": false
  }
];

import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Under ERISA Section 404(a), a plan fiduciary must discharge duties solely in the interest of plan participants and beneficiaries. This standard is most often described as which of the following?",
    "choices": [
      "The prudent person rule",
      "The prudent expert rule",
      "The reasonable man rule",
      "The suitability rule"
    ],
    "answerIndex": 1,
    "rationale": "ERISA Section 404(a)(1)(B) requires fiduciaries to act with the care, skill, prudence, and diligence that a prudent person 'familiar with such matters' would use - this elevated standard is commonly called the prudent expert rule. The prudent person rule (B) is the older trust-law standard ERISA deliberately raised; ERISA expects fiduciaries to either possess expertise or hire experts.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "medium",
    "id": "84e95e43d17b",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Which federal agency has primary enforcement authority over ERISA's fiduciary provisions for private-sector retirement plans?",
    "choices": [
      "Securities and Exchange Commission",
      "Internal Revenue Service",
      "Department of Labor",
      "Federal Reserve Board"
    ],
    "answerIndex": 2,
    "rationale": "The Department of Labor's Employee Benefits Security Administration enforces ERISA's fiduciary, reporting, and disclosure rules for private retirement plans. The IRS is the top distractor because it shares jurisdiction over qualified plans, but its role is limited to tax-qualification matters (Title II of ERISA), not fiduciary conduct.",
    "citation": {
      "source": "OTHER",
      "ref": "Department of Labor"
    },
    "difficulty": "easy",
    "id": "b1457878cf1f",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "An investment adviser to a 401(k) plan recommends that 100% of plan assets be invested in employer stock. Which ERISA fiduciary duty has most clearly been violated?",
    "choices": [
      "The duty of loyalty",
      "The duty to diversify",
      "The duty to follow plan documents",
      "The duty to pay only reasonable expenses"
    ],
    "answerIndex": 1,
    "rationale": "ERISA Section 404(a)(1)(C) imposes an explicit duty to diversify plan investments to minimize the risk of large losses, unless under the circumstances it is clearly prudent not to do so. The duty of loyalty (A) is a separate Section 404(a)(1)(A) requirement and is not the most direct violation when the issue is concentration risk.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "medium",
    "id": "9f6ad0fafbdd",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Under ERISA, which type of investment vehicle is NOT one of the permitted long-term qualified default investment alternatives (QDIAs)?",
    "choices": [
      "A target date / lifecycle fund",
      "A balanced fund based on participant demographics",
      "A professionally managed account",
      "A stable value or money market fund used indefinitely"
    ],
    "answerIndex": 3,
    "rationale": "Under the DOL's QDIA regulation, the three long-term QDIA categories are target date funds, balanced funds, and managed accounts. Capital preservation products like stable value or money market funds qualify only for the first 120 days of participation, not as long-term defaults. Choice A is the top distractor because target date funds are the most common QDIA, but the question asks which is NOT permitted long-term.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA QDIA Regulation"
    },
    "difficulty": "medium",
    "id": "762729759421",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "An employer who properly defaults non-electing participants into a QDIA receives which key ERISA protection?",
    "choices": [
      "Complete exemption from all fiduciary duties",
      "Relief from liability for investment losses on defaulted assets, similar to Section 404(c)",
      "Tax-deductibility for plan contributions",
      "A waiver of the prohibited transaction rules"
    ],
    "answerIndex": 1,
    "rationale": "The QDIA regulation extends ERISA Section 404(c)-style relief to fiduciaries: when participants fail to make an investment election, defaulting them into a QDIA shields the fiduciary from liability for resulting investment losses. Choice A is wrong because the fiduciary still has duties to prudently select and monitor the QDIA; QDIA relief is narrow, not blanket.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA QDIA Regulation"
    },
    "difficulty": "medium",
    "id": "160c555741ff",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "ERISA Section 404(c) provides a safe harbor from fiduciary liability for investment losses when which of the following is true?",
    "choices": [
      "The plan is funded entirely with employer contributions",
      "Participants exercise control over their own account investments and have a broad range of options",
      "The plan offers only index funds",
      "The trustee has obtained a fidelity bond"
    ],
    "answerIndex": 1,
    "rationale": "Section 404(c) shields fiduciaries from liability for investment losses only when participants actually direct their own investments and the plan offers a broad range of investment alternatives meeting DOL requirements. Choice A is irrelevant - 404(c) hinges on participant control, not contribution source.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(c)"
    },
    "difficulty": "medium",
    "id": "a3ca61a546e9",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "An ERISA Section 3(38) 'investment manager' is best described as a fiduciary that:",
    "choices": [
      "Provides only nondiscretionary investment advice",
      "Has full discretion to select and replace plan investments and acknowledges fiduciary status in writing",
      "Acts solely as the plan recordkeeper",
      "Selects the plan's third-party administrator"
    ],
    "answerIndex": 1,
    "rationale": "An ERISA 3(38) investment manager must be a registered investment adviser, bank, or insurance company; have full discretionary authority over plan assets; and acknowledge fiduciary status in writing. This contrasts with a 3(21) adviser (Choice A's flavor), who only makes recommendations and shares co-fiduciary status with the plan sponsor.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 3(38)"
    },
    "difficulty": "medium",
    "id": "ecc4a8d10665",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Which of the following is generally considered a 'prohibited transaction' under ERISA Section 406?",
    "choices": [
      "The plan investing in a publicly traded mutual fund",
      "The plan paying reasonable expenses for plan administration",
      "The plan lending money to a party in interest, such as the plan sponsor",
      "The plan diversifying across asset classes"
    ],
    "answerIndex": 2,
    "rationale": "ERISA Section 406 prohibits transactions between the plan and a party in interest, including loans, extensions of credit, and sales or exchanges, absent an applicable exemption. Choice B is a top distractor because services to the plan can superficially look like self-dealing, but Section 408(b)(2) specifically exempts reasonable arrangements for necessary services at reasonable compensation.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 406"
    },
    "difficulty": "medium",
    "id": "2468b4f24fb8",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "An investment policy statement (IPS) for an ERISA plan is best described as:",
    "choices": [
      "A document required by statute that must be filed with the DOL annually",
      "A written framework establishing the plan's investment objectives, asset allocation, and selection / monitoring criteria",
      "A binding contract between the plan participants and the trustees",
      "A summary plan description provided to participants at enrollment"
    ],
    "answerIndex": 1,
    "rationale": "An IPS is a written policy that documents investment objectives, asset allocation guidelines, fund-selection criteria, and monitoring procedures - serving as evidence of a prudent process under ERISA 404(a). Choice A is wrong: the IPS is not statutorily mandated by ERISA, though the DOL strongly endorses one as evidence of prudent fiduciary process.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "easy",
    "id": "61f7b8d352ee",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Under ERISA, who is a 'party in interest' for purposes of the prohibited transaction rules?",
    "choices": [
      "Only the plan sponsor",
      "Only the plan participants",
      "Plan fiduciaries, service providers, the employer, unions, and certain owners and relatives",
      "Only individuals who own more than 50% of plan assets"
    ],
    "answerIndex": 2,
    "rationale": "ERISA defines 'party in interest' broadly to include plan fiduciaries, service providers, the employer whose employees are covered, employee organizations (unions), 50%+ owners of the employer, and certain family members and affiliated entities. Choice A is too narrow; the term is intentionally expansive to prevent self-dealing.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 406"
    },
    "difficulty": "medium",
    "id": "1fc10f5b40c4",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Under ERISA Section 405, a plan fiduciary may be held liable for the breaches of a co-fiduciary in all of the following circumstances EXCEPT:",
    "choices": [
      "Knowingly participating in or concealing the other fiduciary's breach",
      "Enabling the breach through a failure to comply with Section 404(a)",
      "Failing to make reasonable efforts to remedy a known breach",
      "Disagreeing with an investment selection at a committee meeting that was ultimately approved"
    ],
    "answerIndex": 3,
    "rationale": "Section 405(a) creates co-fiduciary liability in three situations - knowing participation/concealment, enabling through one's own breach, and failure to remedy a known breach. Merely disagreeing with a properly approved decision does not impose liability. Choice A is the top distractor because participation is the most blatant trigger, but the stem asks for the EXCEPTION.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 405"
    },
    "difficulty": "hard",
    "id": "5498c3b25ee8",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "An investment adviser charges a covered ERISA plan a 1% annual fee to provide ongoing advisory services. Which provision generally allows this arrangement despite the prohibited transaction rules?",
    "choices": [
      "ERISA Section 404(c)",
      "ERISA Section 408(b)(2)",
      "ERISA Section 502(a)",
      "ERISA Section 3(38)"
    ],
    "answerIndex": 1,
    "rationale": "Section 408(b)(2) provides a statutory exemption from the Section 406 prohibited transaction rules for arrangements with parties in interest that involve necessary services for the plan and reasonable compensation. Section 404(c) (Choice A) is the participant-directed safe harbor, which addresses fiduciary liability for investment losses, not service-provider compensation.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 408(b)(2)"
    },
    "difficulty": "medium",
    "id": "18ccde312c24",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Which of the following is a stated requirement for the long-term QDIA categories under DOL regulations?",
    "choices": [
      "The QDIA must be managed by a registered investment company, an ERISA 3(38) manager, or be a plan sponsor-managed balanced fund",
      "The QDIA must guarantee principal",
      "The QDIA must invest only in U.S. Treasury securities",
      "The QDIA must be reviewed by participants annually"
    ],
    "answerIndex": 0,
    "rationale": "The DOL's QDIA regulation requires that the long-term QDIA be managed by a registered investment company, an ERISA 3(38) investment manager, or the plan sponsor as a fiduciary in the case of a balanced fund. Choice B is wrong because QDIAs are not required to guarantee principal - they generally must include both equity and fixed-income exposure to balance risk over time.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA QDIA Regulation"
    },
    "difficulty": "hard",
    "id": "a329b3832363",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "An IAR is helping an employer document its 401(k) plan investment policy statement. Which of the following is LEAST appropriate to include?",
    "choices": [
      "Asset allocation ranges and permissible investment categories",
      "Procedures for selecting and replacing investment options",
      "A list of specific securities the plan promises to hold for 10 years",
      "Criteria for evaluating investment performance"
    ],
    "answerIndex": 2,
    "rationale": "An IPS should provide guiding principles, ranges, and processes - not lock the plan into specific securities for fixed periods, which would conflict with the duty to monitor and replace imprudent investments. Choice A is the top distractor since asset allocation ranges are clearly proper IPS content; the question asks for the LEAST appropriate item.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "medium",
    "id": "91fc7ede649e",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "A plan trustee uses plan assets to purchase office equipment from a company owned by the trustee's spouse. This is most likely a violation of:",
    "choices": [
      "ERISA Section 404(c)",
      "ERISA Section 406 prohibited transaction rules",
      "ERISA Section 502 enforcement provisions",
      "ERISA Section 3(38) manager requirements"
    ],
    "answerIndex": 1,
    "rationale": "Section 406(a) prohibits sales or exchanges between a plan and a party in interest; the trustee's spouse, as a relative of a fiduciary, is a party in interest, so this constitutes self-dealing. Section 502 (Choice C) is the enforcement provision allowing participants and the DOL to bring civil actions, not the substantive prohibition itself.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 406"
    },
    "difficulty": "medium",
    "id": "88938338e808",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "A participant in a 401(k) plan with proper Section 404(c) protection makes a self-directed allocation that loses 30% of value. Who bears the loss?",
    "choices": [
      "The plan sponsor, because it is the fiduciary",
      "The trustee, who must make the participant whole",
      "The participant, because Section 404(c) shields the fiduciary from liability for participant-directed losses",
      "The Department of Labor, through the PBGC"
    ],
    "answerIndex": 2,
    "rationale": "When 404(c) requirements are met (broad range of options, sufficient information, ability to direct one's account), the fiduciary is relieved of liability for losses caused by the participant's own investment choices. Choice A is the top distractor - sponsors are still fiduciaries with selection/monitoring duties, but they are not liable for losses arising from a participant's exercise of investment control.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(c)"
    },
    "difficulty": "medium",
    "id": "5ae5008fa12f",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Which document or framework is generally recognized as the most important written evidence that ERISA fiduciaries followed a prudent process when selecting plan investments?",
    "choices": [
      "Form 5500",
      "Investment policy statement (IPS)",
      "Summary plan description (SPD)",
      "Form ADV"
    ],
    "answerIndex": 1,
    "rationale": "Although ERISA does not mandate an IPS, regulators and courts treat a well-followed IPS as primary evidence of a prudent process under Section 404(a). Form 5500 (Choice A) is the annual reporting return, and the SPD describes plan terms to participants - neither documents the investment selection process the way an IPS does.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "easy",
    "id": "f8b8ae1ffd54",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Under ERISA, the duty to monitor plan investments after they are selected is best characterized as:",
    "choices": [
      "A one-time obligation at the inception of the plan",
      "An ongoing fiduciary duty that requires periodic review and replacement of imprudent options",
      "Optional, provided the plan has more than 100 participants",
      "Limited to options that have lost more than 50% of value"
    ],
    "answerIndex": 1,
    "rationale": "The Supreme Court in Tibble v. Edison and DOL guidance under Section 404(a) confirm that fiduciaries have a continuing duty to monitor plan investments and remove imprudent ones - not just to make a prudent initial selection. Choice A is wrong; a 'set and forget' approach is itself a fiduciary breach.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "medium",
    "id": "0a006023b59b",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "A 401(k) plan sponsor wishes to delegate all investment selection authority to a third party so that the sponsor will not be liable for investment decisions. The most appropriate fiduciary to engage is:",
    "choices": [
      "A 3(21) non-discretionary co-fiduciary adviser",
      "A 3(38) investment manager with full discretion",
      "A registered representative under FINRA Rule 2111",
      "An ERISA 408(b)(2) service provider"
    ],
    "answerIndex": 1,
    "rationale": "Hiring a 3(38) investment manager - who must have full discretion and acknowledge fiduciary status in writing - shifts investment-selection liability away from the sponsor (though the sponsor retains a duty to prudently select and monitor the 3(38) manager). A 3(21) adviser only co-shares fiduciary status because the sponsor retains decision-making authority.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 3(38)"
    },
    "difficulty": "medium",
    "id": "df6d31703492",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Under ERISA, plan assets must be held for the:",
    "choices": [
      "Exclusive purpose of providing benefits to participants and beneficiaries and defraying reasonable plan expenses",
      "Primary purpose of maximizing employer profits",
      "Discretion of the plan sponsor with no specific purpose",
      "Sole purpose of avoiding taxes"
    ],
    "answerIndex": 0,
    "rationale": "ERISA Section 404(a)(1)(A) - the 'exclusive benefit rule' - requires fiduciaries to act solely in the interest of participants and beneficiaries and for the exclusive purpose of providing benefits and defraying reasonable plan expenses. Choice B inverts the rule entirely; ERISA prohibits the use of plan assets to benefit the employer.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "easy",
    "id": "3a0553e1295e",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "An ERISA fiduciary who breaches Section 404 duties is personally liable to:",
    "choices": [
      "Restore plan losses caused by the breach and disgorge any profits made through the use of plan assets",
      "Pay only the cost of an outside auditor",
      "Pay only a $5,000 fixed fine",
      "Forfeit the right to participate in future plans"
    ],
    "answerIndex": 0,
    "rationale": "Section 409 of ERISA makes a breaching fiduciary personally liable to restore plan losses caused by the breach and to disgorge any profits gained through use of plan assets, plus other equitable relief. Choices B and C are made-up flat penalties; ERISA's remedies are make-whole and restitutionary, not capped fixed amounts.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 502"
    },
    "difficulty": "medium",
    "id": "1382db10b260",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Capital preservation investments such as money market or stable value funds may serve as a QDIA under DOL rules:",
    "choices": [
      "Indefinitely, as a long-term default",
      "Only for participants over age 65",
      "Only during the first 120 days of a participant's enrollment",
      "Only if approved annually by the IRS"
    ],
    "answerIndex": 2,
    "rationale": "The QDIA regulation permits capital preservation products as a default only for the initial 120 days of plan participation, after which assets must be moved to a permitted long-term QDIA. Choice A is wrong because the DOL viewed indefinite use of low-yield, capital-preservation products as inconsistent with retirement-savings goals.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA QDIA Regulation"
    },
    "difficulty": "hard",
    "id": "e41845733a5f",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Which of the following is NOT required for a Section 404(c) safe harbor?",
    "choices": [
      "A broad range of investment alternatives with materially different risk-return characteristics",
      "The ability for participants to exchange among options at least quarterly",
      "The plan to guarantee a minimum rate of return on each option",
      "Sufficient information for participants to make informed decisions"
    ],
    "answerIndex": 2,
    "rationale": "404(c) does not require any minimum rate of return; in fact, ERISA generally would not permit a fiduciary to guarantee returns. Required elements include a broad range of options, the ability to direct investments with appropriate frequency (generally at least quarterly), and adequate disclosure. Choice A is the top distractor because it sounds like a soft requirement, but it is actually a core mandatory element, not the answer.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(c)"
    },
    "difficulty": "hard",
    "id": "f8e68474e825",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "When evaluating fees paid by an ERISA plan, fiduciaries must determine that the fees are:",
    "choices": [
      "The lowest available in the market",
      "Reasonable in relation to the services provided",
      "Always paid by the employer rather than the plan",
      "Approved by the IRS in writing"
    ],
    "answerIndex": 1,
    "rationale": "Under ERISA Section 408(b)(2) and DOL guidance, fees must be reasonable in relation to the services received - not necessarily the lowest available. Choice A is the top distractor and a common misconception; the duty is to evaluate reasonableness, balancing cost, quality, and services, rather than to chase the cheapest option.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 408(b)(2)"
    },
    "difficulty": "medium",
    "id": "efa310f75dc8",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "An investment adviser who provides advice to a plan participant about distributions and rollovers from a 401(k) is generally treated under ERISA and DOL guidance as:",
    "choices": [
      "Not a fiduciary, since rollover advice is incidental",
      "A fiduciary with respect to that advice if the advice meets the regulatory definition of investment advice for a fee",
      "A fiduciary only if the participant is the plan sponsor",
      "A fiduciary only after the rollover is complete"
    ],
    "answerIndex": 1,
    "rationale": "Under DOL guidance and the regulatory definition of investment advice, recommending a rollover for compensation - when given on a regular basis with a mutual understanding the advice serves as a primary basis for decisions - generally creates fiduciary status under ERISA. Choice A reflects an outdated view; the DOL has repeatedly stated rollover recommendations can be fiduciary advice.",
    "citation": {
      "source": "OTHER",
      "ref": "DOL Fiduciary Rule"
    },
    "difficulty": "hard",
    "id": "9c27285e9f4f",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes the difference between an ERISA 3(21) and 3(38) fiduciary?",
    "choices": [
      "A 3(21) has discretion; a 3(38) does not",
      "A 3(21) provides recommendations; a 3(38) has discretionary authority over investment decisions",
      "Only a 3(21) must be a registered investment adviser",
      "Only a 3(38) is subject to ERISA's fiduciary standards"
    ],
    "answerIndex": 1,
    "rationale": "A 3(21) fiduciary provides investment advice or recommendations and shares co-fiduciary status with the plan sponsor, while a 3(38) investment manager has full discretionary authority and accepts fiduciary status in writing, allowing the sponsor to offload investment-decision liability. Both are fiduciaries (Choice D is wrong); the key distinction is discretion.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 3(38)"
    },
    "difficulty": "medium",
    "id": "1aec286b022e",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "ERISA fiduciaries must act 'in accordance with the documents and instruments governing the plan' insofar as:",
    "choices": [
      "Such documents are consistent with ERISA",
      "Such documents have been approved by the SEC",
      "Such documents are reviewed by the plan auditor",
      "Such documents are signed by all participants"
    ],
    "answerIndex": 0,
    "rationale": "Section 404(a)(1)(D) requires fiduciaries to follow plan documents only insofar as they are consistent with ERISA - if a plan document conflicts with ERISA, the fiduciary must follow ERISA. Choice B is wrong because the SEC does not review or approve ERISA plan documents.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "hard",
    "id": "13dab7656911",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Which of the following is most accurate regarding ERISA fiduciary status?",
    "choices": [
      "Fiduciary status is determined solely by title",
      "A person becomes a fiduciary by exercising discretionary authority over the plan or its assets, or by giving investment advice for a fee",
      "Only attorneys named in the plan document are fiduciaries",
      "Plan participants are fiduciaries"
    ],
    "answerIndex": 1,
    "rationale": "ERISA's functional definition makes fiduciary status turn on what a person does - exercising discretion over plan management or assets, or giving investment advice for compensation - not on titles. Choice A is wrong; ERISA explicitly rejects a 'titles-only' approach in favor of a functional test.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Employee Retirement Income Security Act of 1974"
    },
    "difficulty": "medium",
    "id": "fce2384b968c",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "A typical investment policy statement for an ERISA-covered defined contribution plan would generally include all of the following EXCEPT:",
    "choices": [
      "The plan's investment objectives and risk tolerance",
      "Asset class guidelines and permitted investment vehicles",
      "Procedures for selecting, monitoring, and replacing investment options",
      "A binding promise of specific dollar returns to participants"
    ],
    "answerIndex": 3,
    "rationale": "An IPS describes objectives, allocation guidelines, selection criteria, and monitoring procedures - never a guarantee of specific dollar returns, which would be inconsistent with prudent fiduciary practice and the nature of investment risk. Choice A is the top distractor because it sounds 'soft,' but objectives and risk tolerance are clearly proper IPS elements.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "easy",
    "id": "7b7dc8d7696a",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Which of the following is generally considered a per-se prohibited transaction under ERISA Section 406, absent an applicable exemption?",
    "choices": [
      "Hiring a fee-only adviser to recommend funds",
      "A fiduciary using plan assets in their own interest",
      "Diversifying across asset classes",
      "Holding 5% of plan assets in employer stock in a defined contribution plan"
    ],
    "answerIndex": 1,
    "rationale": "Section 406(b) prohibits a fiduciary from dealing with plan assets in his or her own interest or for own account - so-called 'self-dealing' transactions - without exemption. Choice D is the top distractor because employer stock raises diversification concerns, but defined contribution plans (especially eligible individual account plans) may hold employer securities subject to specific rules; it is not automatically prohibited.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 406"
    },
    "difficulty": "hard",
    "id": "a26cc9075037",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Under the QDIA regulations, in order to qualify for fiduciary relief, the plan must provide participants with:",
    "choices": [
      "No notice; participants discover the QDIA on their first statement",
      "An advance notice describing the QDIA and the participant's right to opt out, generally at least 30 days before the first investment",
      "A signed acknowledgment from a spouse",
      "A notarized acceptance of the QDIA"
    ],
    "answerIndex": 1,
    "rationale": "The QDIA regulation requires plans to give participants an initial notice and annual notices that describe the QDIA, the participant's right to direct investments, and the consequences of failing to do so - generally at least 30 days before the first investment. Choice A is incorrect; without proper notice, the fiduciary loses QDIA relief.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA QDIA Regulation"
    },
    "difficulty": "hard",
    "id": "b359664d9221",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "An ERISA plan trustee invests plan assets in a fund managed by a wholly owned subsidiary of the plan sponsor. Which is the most accurate analysis?",
    "choices": [
      "This is automatically permissible because the sponsor controls both entities",
      "This is a prohibited transaction unless an exemption applies, because the sponsor is a party in interest",
      "This is permissible only if the fund's expense ratio is below the industry median",
      "This is a violation of the Investment Company Act, not ERISA"
    ],
    "answerIndex": 1,
    "rationale": "The plan sponsor and its affiliates are parties in interest under ERISA, so investing plan assets in their products presents a Section 406 prohibited transaction risk that must rely on a specific exemption (statutory or DOL class/individual exemption). Choice A inverts the rule; common control aggravates rather than excuses the conflict.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 406"
    },
    "difficulty": "medium",
    "id": "8d4be8391432",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Which of the following is a key practical reason fiduciaries adopt and follow a written investment policy statement?",
    "choices": [
      "It eliminates all fiduciary liability",
      "It provides a documented, repeatable framework that demonstrates a prudent process under ERISA Section 404(a)",
      "It removes the need to monitor investments",
      "It is required to be filed with the SEC"
    ],
    "answerIndex": 1,
    "rationale": "An IPS is the primary written evidence of process - which under ERISA Section 404(a) is what fiduciary prudence is judged on. Choice A overstates the benefit; an IPS does not eliminate liability, and ignoring or selectively applying an IPS can actually create breach exposure.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "easy",
    "id": "95791b55f643",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "ERISA's diversification requirement under Section 404(a)(1)(C) requires fiduciaries to:",
    "choices": [
      "Hold a fixed 60/40 stock/bond split",
      "Diversify investments to minimize the risk of large losses, unless under the circumstances it is clearly prudent not to do so",
      "Invest only in U.S. domiciled securities",
      "Avoid all alternative assets"
    ],
    "answerIndex": 1,
    "rationale": "Section 404(a)(1)(C) is principles-based: fiduciaries must diversify to minimize the risk of large losses unless circumstances make non-diversification clearly prudent. Choice A is wrong; ERISA does not specify any particular allocation, and rigid splits would themselves often be imprudent.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "easy",
    "id": "0f3806be249e",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Which of the following parties may bring a civil action under ERISA Section 502 to enforce fiduciary duties?",
    "choices": [
      "Only the IRS",
      "Only the SEC",
      "The Secretary of Labor, plan participants, beneficiaries, and other fiduciaries",
      "Only the plan sponsor"
    ],
    "answerIndex": 2,
    "rationale": "ERISA Section 502 grants enforcement authority to the Secretary of Labor (DOL), participants, beneficiaries, and other fiduciaries to recover losses, obtain equitable relief, and remove breaching fiduciaries. Choices A and B are wrong because the IRS focuses on plan-qualification under the Internal Revenue Code, while the SEC has no direct enforcement role under ERISA.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 502"
    },
    "difficulty": "medium",
    "id": "8ae83d39a186",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "An IAR is reviewing the investment options on a 401(k) menu and discovers that a high-cost share class is being used when a lower-cost share class of the same fund is available. Under ERISA, the fiduciary's most appropriate response is to:",
    "choices": [
      "Continue with the existing share class to avoid disrupting participants",
      "Document the analysis and replace the option with the lower-cost share class if doing so is prudent for participants",
      "Refer the question to the IRS",
      "Close the plan and start over"
    ],
    "answerIndex": 1,
    "rationale": "Under ERISA's duty of prudence and the Tibble v. Edison continuing duty to monitor, fiduciaries must investigate and act on lower-cost alternatives where prudent for participants - paying excessive fees by using a more expensive share class can itself be a fiduciary breach. Choice A is the top distractor (status quo bias) but failing to act on a known cheaper share class has resulted in numerous successful ERISA lawsuits.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "medium",
    "id": "8c276332a474",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Which statement about ERISA's coverage is most accurate?",
    "choices": [
      "ERISA covers federal, state, and local government plans",
      "ERISA generally covers private-sector employee benefit plans but not most governmental or church plans",
      "ERISA covers only individual retirement accounts (IRAs)",
      "ERISA applies only to employers with more than 1,000 employees"
    ],
    "answerIndex": 1,
    "rationale": "ERISA primarily regulates private-sector employer-sponsored plans; governmental plans and many church plans are exempted. Choice C is wrong because IRAs are governed by the Internal Revenue Code rather than ERISA's fiduciary provisions, although IRA rollover advice can implicate ERISA fiduciary considerations under DOL guidance.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "Employee Retirement Income Security Act of 1974"
    },
    "difficulty": "easy",
    "id": "f5553e08ef3e",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "An ERISA fiduciary's duty of loyalty under Section 404(a)(1)(A) requires that the fiduciary act:",
    "choices": [
      "In the best interest of the plan sponsor",
      "Solely in the interest of plan participants and beneficiaries",
      "In the best interest of the investment manager",
      "To preserve employer goodwill"
    ],
    "answerIndex": 1,
    "rationale": "The duty of loyalty - one of ERISA's two cornerstone fiduciary duties along with prudence - requires fiduciaries to act solely in the interest of plan participants and beneficiaries. Choice A is the top distractor because the sponsor establishes the plan, but once acting as a fiduciary, sponsor interests cannot trump participant interests.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "easy",
    "id": "0e6c7fed90d5",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Which is the most accurate statement regarding written investment policy statements (IPSs) under ERISA?",
    "choices": [
      "ERISA explicitly mandates that every plan adopt and file an IPS",
      "ERISA does not explicitly require an IPS, but DOL guidance treats it as a best practice and evidence of fiduciary process",
      "An IPS is required only for defined benefit plans",
      "An IPS is required only for plans covered by Section 404(c)"
    ],
    "answerIndex": 1,
    "rationale": "ERISA does not explicitly mandate an IPS, but DOL guidance and case law strongly endorse its use as evidence that fiduciaries have established and followed a prudent process under Section 404(a). Choice A is the top distractor because IPS use is so universally encouraged that it is often misremembered as statutorily required.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "easy",
    "id": "4e43474920df",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "An adviser to an ERISA plan receives revenue sharing payments from a mutual fund company whose funds are on the plan's menu. Under ERISA, this arrangement:",
    "choices": [
      "Is automatically permissible if disclosed in Form ADV",
      "May create a prohibited transaction or self-dealing concern that must be analyzed under Sections 406 and 408(b)(2)",
      "Is permissible only if the adviser is dually registered",
      "Is exempt from ERISA fiduciary rules"
    ],
    "answerIndex": 1,
    "rationale": "Receipt of variable third-party compensation tied to investment selection raises both Section 406(b) self-dealing concerns and Section 408(b)(2) reasonable-compensation concerns; the fiduciary must ensure compensation is reasonable and the conflict is properly addressed (often by offsetting fees). Choice A is wrong - Form ADV disclosure is an SEC concept and does not by itself satisfy ERISA's prohibited transaction rules.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 406"
    },
    "difficulty": "hard",
    "id": "e6a318cfbb3c",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Which of the following is a stated duty of an ERISA fiduciary under Section 404(a)?",
    "choices": [
      "Maximize employer profits",
      "Diversify investments unless it is clearly prudent not to do so",
      "Guarantee a minimum return to participants",
      "Use plan assets to fund non-plan business expenses"
    ],
    "answerIndex": 1,
    "rationale": "Section 404(a)(1)(C) explicitly imposes the duty to diversify investments to minimize the risk of large losses unless circumstances clearly make non-diversification prudent. Choices A and D would actually constitute fiduciary breaches and likely prohibited transactions; ERISA's exclusive benefit rule prohibits using plan assets for non-plan purposes.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "easy",
    "id": "ac127bf394ab",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Which of the following is the most accurate statement about target-date funds (TDFs) used as QDIAs?",
    "choices": [
      "TDFs automatically satisfy fiduciary duties without further evaluation",
      "Fiduciaries must still prudently select and monitor TDFs, including reviewing glidepath, fees, and underlying holdings",
      "TDFs cannot be QDIAs because they include equities",
      "TDFs are required by ERISA in every 401(k) plan"
    ],
    "answerIndex": 1,
    "rationale": "DOL guidance specifically warns that QDIA status does not relieve fiduciaries of the duty to prudently select and monitor target-date funds - including reviewing the glidepath, expenses, and underlying investments. Choice A is the top distractor because the QDIA safe harbor protects against losses, but the selection and monitoring duties remain fully in force.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA QDIA Regulation"
    },
    "difficulty": "medium",
    "id": "4e4b0924be8b",
    "subtopicId": "3.7",
    "reviewed": false
  },
  {
    "stem": "Under ERISA, the prudent expert standard is best applied by a fiduciary who:",
    "choices": [
      "Lacks investment experience but acts in good faith",
      "Possesses investment expertise or hires qualified experts and follows a documented, prudent process",
      "Delegates all decisions to participants regardless of plan structure",
      "Relies exclusively on past performance rankings"
    ],
    "answerIndex": 1,
    "rationale": "ERISA's prudent expert standard requires the level of care a prudent person 'familiar with such matters' would use - so a fiduciary lacking expertise must engage qualified professionals and follow a documented, prudent process. Choice A is wrong because good faith alone does not satisfy the standard; ERISA evaluates process and expertise, not intent.",
    "citation": {
      "source": "NASAA_MODEL_RULE",
      "ref": "ERISA Section 404(a)"
    },
    "difficulty": "medium",
    "id": "96fdeea3b294",
    "subtopicId": "3.7",
    "reviewed": false
  }
];

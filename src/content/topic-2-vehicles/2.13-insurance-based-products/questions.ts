import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "A variable annuity is best described as which of the following?",
    "choices": [
      "A pure insurance product exempt from federal securities registration",
      "A bank deposit product insured up to $250,000 by the FDIC",
      "A contract that is both an insurance product and a security; the contract must be registered under the Securities Act of 1933 and the separate account is an investment company under the Investment Company Act of 1940",
      "A commodity contract regulated by the CFTC"
    ],
    "answerIndex": 2,
    "rationale": "Beginning with SEC v. VALIC (1959), variable annuities have been treated as both insurance contracts and federal securities because the owner bears investment risk on assets held in a separate account. The contract is registered under the Securities Act of 1933 and the separate account is an investment company subject to the Investment Company Act of 1940. The top distractor (pure insurance product) describes a fixed annuity, not a variable annuity, because in a fixed annuity the insurer assumes the investment risk and the contract qualifies for the Section 3(a)(8) insurance exemption.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "easy",
    "id": "615206ac2408",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Which statement most accurately characterizes a fixed annuity?",
    "choices": [
      "A security registered under the Securities Act of 1933 whose performance varies with the issuer's separate account",
      "An insurance contract under which the insurer assumes the investment risk and credits a guaranteed minimum rate of interest",
      "A contract whose returns are tied to a stock index, subject to a participation rate and cap",
      "A pure insurance product with no tax deferral feature"
    ],
    "answerIndex": 1,
    "rationale": "In a fixed annuity, premiums are deposited into the insurer's general account, the insurer guarantees a minimum interest crediting rate, and the insurer (not the owner) bears the investment risk; for that reason fixed annuities are exempt insurance products under Section 3(a)(8) of the Securities Act and are regulated principally by state insurance commissioners. The top distractor describes an indexed annuity, whose return is linked to an external index, not a fixed annuity.",
    "citation": {
      "source": "OTHER",
      "ref": "State Insurance Commissioner"
    },
    "difficulty": "easy",
    "id": "ec66bdb08fe0",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Term life insurance is best defined as a policy that...",
    "choices": [
      "Builds cash value at a current crediting rate set by the insurer",
      "Provides a death benefit only if the insured dies during a specified period and ordinarily has no cash value",
      "Allows the owner to direct premiums into separate-account subaccounts",
      "Pays a lifetime income to the owner regardless of mortality"
    ],
    "answerIndex": 1,
    "rationale": "Term life insurance is pure protection: it pays a death benefit only if the insured dies within the policy term and typically accumulates no cash value, which is why premiums per dollar of face amount are lower than for permanent insurance. The top distractor (cash value at a current crediting rate) describes universal life, which is a permanent product with a cash value account that earns interest, not term insurance.",
    "citation": {
      "source": "OTHER",
      "ref": "American Council of Life Insurers"
    },
    "difficulty": "easy",
    "id": "95fcfd7537de",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Which of the following is the defining feature of a traditional whole life policy?",
    "choices": [
      "Coverage that automatically expires at a stated age with no death benefit thereafter",
      "Permanent coverage with level premiums and a guaranteed cash value that accumulates on a tax-deferred basis",
      "A death benefit and cash value that vary with the performance of separate-account subaccounts",
      "Premiums that may be skipped or varied at the policyowner's discretion"
    ],
    "answerIndex": 1,
    "rationale": "Whole life is permanent insurance characterized by level premiums for life, a guaranteed death benefit, and a guaranteed cash value that grows tax-deferred per IRC rules on inside buildup. The top distractor (death benefit and cash value vary with separate-account performance) describes variable life, which shifts investment risk to the policyowner and is a security, unlike traditional whole life.",
    "citation": {
      "source": "OTHER",
      "ref": "American Council of Life Insurers"
    },
    "difficulty": "easy",
    "id": "839f3d8e06be",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "In a variable annuity contract, the 'separate account' refers to...",
    "choices": [
      "The insurer's general account holding fixed-income reserves",
      "An account that holds premiums apart from the insurer's general assets and is invested in subaccounts whose performance flows through to the contract owner",
      "A trust account at a custodian bank holding only cash equivalents",
      "An escrow account for surrender charges"
    ],
    "answerIndex": 1,
    "rationale": "The separate account segregates variable contract assets from the insurer's general account so that investment performance (and risk) is borne by the contract owner; the separate account is itself an investment company registered under the Investment Company Act of 1940. The top distractor describes the general account, where fixed annuity reserves are held and the insurer (not the owner) bears the investment risk.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "easy",
    "id": "5e328a4c138c",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "An agent who wishes to recommend and sell variable annuities must, at minimum, hold...",
    "choices": [
      "A state insurance license only",
      "A securities license only (such as Series 6 or Series 7)",
      "Both a state insurance/life producer license and an appropriate securities registration",
      "A Series 65 investment adviser representative registration only"
    ],
    "answerIndex": 2,
    "rationale": "Because a variable annuity is both an insurance contract and a security, a representative selling it must hold a state insurance license to transact insurance plus an appropriate securities registration (typically Series 6 or Series 7 with FINRA). The top distractor (insurance license only) is wrong because the security side of the variable annuity contract requires a securities registration, in contrast to fixed annuities where only an insurance license is required.",
    "citation": {
      "source": "OTHER",
      "ref": "NAIC"
    },
    "difficulty": "easy",
    "id": "04de5c786440",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "An indexed (equity-indexed) annuity credits interest based on...",
    "choices": [
      "The performance of an external equity index, typically subject to a participation rate, cap rate, and/or floor",
      "The performance of subaccounts selected by the contract owner",
      "A floating short-term Treasury rate set daily",
      "Dividends paid by the insurance company on its common stock"
    ],
    "answerIndex": 0,
    "rationale": "An indexed annuity ties credited interest to changes in an external index such as the S&P 500, modified by features like the participation rate, the cap rate, and a downside floor that protects against negative crediting. The top distractor (subaccounts selected by the owner) describes a variable annuity, in which the owner bears investment risk on actual securities rather than receiving a formula-based credit tied to an index.",
    "citation": {
      "source": "OTHER",
      "ref": "NAIC"
    },
    "difficulty": "easy",
    "id": "ea902f5a9cae",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Of the standard annuity payout (settlement) options, which produces the largest periodic payment for a given premium?",
    "choices": [
      "Joint and 100% survivor",
      "Life with 20-year period certain",
      "Straight life (life-only)",
      "Installment refund"
    ],
    "answerIndex": 2,
    "rationale": "A straight-life (life-only) payout pays the largest periodic amount because the insurer's obligation ends at the annuitant's death with no guarantee to a beneficiary, so all of the principal and earnings can be spread over the annuitant's life expectancy alone. The top distractor (life with 20-year period certain) pays less because the insurer must continue payments to a beneficiary if the annuitant dies during the certain period, raising the insurer's expected payout cost.",
    "citation": {
      "source": "OTHER",
      "ref": "American Council of Life Insurers"
    },
    "difficulty": "easy",
    "id": "3a67e3d71e0a",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Which feature most distinguishes universal life insurance from traditional whole life?",
    "choices": [
      "Universal life has no cash value while whole life does",
      "Universal life offers flexible premiums and an adjustable death benefit, with cash value earning a current interest rate set by the insurer",
      "Universal life is a security registered under the Investment Company Act of 1940",
      "Universal life premiums are paid only as a single lump sum"
    ],
    "answerIndex": 1,
    "rationale": "Universal life is a flexible-premium permanent policy: within limits, the policyowner may vary premium payments and adjust the death benefit, while cash value grows at a current interest rate (subject to a guaranteed minimum). The top distractor (no cash value) is incorrect because universal life is a permanent product with a cash value account; it is term insurance, not universal life, that typically lacks cash value.",
    "citation": {
      "source": "OTHER",
      "ref": "American Council of Life Insurers"
    },
    "difficulty": "easy",
    "id": "caf49b870764",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Which of the following is true about the cash value of a traditional whole life policy?",
    "choices": [
      "It must be reported as taxable income each year as it grows",
      "It accumulates on a tax-deferred basis, can be borrowed against by the policyowner, and has a guaranteed minimum schedule",
      "It is invested in separate-account subaccounts at the policyowner's direction",
      "It is insured by the FDIC up to $250,000"
    ],
    "answerIndex": 1,
    "rationale": "Inside buildup of cash value in a traditional whole life policy is not currently taxable, the policyowner generally may borrow against it, and the insurer guarantees a minimum cash value schedule. The top distractor (taxable each year) is wrong because life insurance inside buildup is tax-deferred under the Internal Revenue Code; taxation occurs only on certain distributions or upon a non-tax-free surrender.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 525"
    },
    "difficulty": "easy",
    "id": "8b31bf61dbe5",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "The mortality and expense (M&E) risk charge in a variable annuity primarily compensates the insurer for...",
    "choices": [
      "Investment management of the underlying portfolios",
      "The risk that annuitants will live longer than expected and the risk that expenses will exceed projections, including any guaranteed death benefit",
      "Marketing and distribution costs to broker-dealers",
      "State premium taxes"
    ],
    "answerIndex": 1,
    "rationale": "The M&E charge compensates the insurer for assuming mortality risk (paying lifetime income or guaranteed death benefits regardless of how long the annuitant lives) and for the risk that contract expenses exceed those built into pricing. The top distractor (investment management) describes a separate investment management fee charged at the subaccount level (typically reflected in the subaccount expense ratio), not the M&E charge.",
    "citation": {
      "source": "OTHER",
      "ref": "NAIC"
    },
    "difficulty": "easy",
    "id": "db867f47ada4",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Earnings inside a non-qualified annuity contract are generally...",
    "choices": [
      "Taxed each year as ordinary income to the contract owner",
      "Taxed each year at long-term capital gains rates",
      "Tax-deferred during the accumulation phase and taxed as ordinary income on amounts in excess of cost basis when withdrawn",
      "Permanently exempt from federal income tax"
    ],
    "answerIndex": 2,
    "rationale": "Annuity earnings grow tax-deferred while held inside the contract; on withdrawal, the gain portion is taxed as ordinary income (capital gains rates do not apply to annuities). The top distractor (taxed each year as ordinary income) is incorrect because tax deferral, not annual taxation, is one of the principal features that distinguishes annuities from taxable investment accounts.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 575"
    },
    "difficulty": "easy",
    "id": "975571d69d36",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "An indexed annuity has a participation rate of 80%. If the linked index rises 10% during the crediting period and there is no cap or floor in effect, the credited interest before any other adjustments is approximately...",
    "choices": [
      "10%",
      "8%",
      "2%",
      "0%"
    ],
    "answerIndex": 1,
    "rationale": "The participation rate determines what fraction of the index's gain is credited, so an 80% participation rate applied to a 10% index gain yields roughly 8% credited interest before any cap or spread is applied. The top distractor (10%) is wrong because that would imply 100% participation; the participation rate is the mechanism that allows the insurer to fund the downside floor and other guarantees by sharing only part of the index gain with the contract owner.",
    "citation": {
      "source": "OTHER",
      "ref": "NAIC"
    },
    "difficulty": "medium",
    "id": "4a1ebe2fc8e2",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Which statement best contrasts variable life insurance with traditional whole life insurance?",
    "choices": [
      "In variable life, cash value is invested in separate-account subaccounts at the policyowner's direction and the death benefit can vary with performance, while in whole life the cash value is held in the insurer's general account with a guaranteed minimum schedule",
      "Whole life is a security under the Investment Company Act of 1940 while variable life is purely an insurance product",
      "Variable life guarantees a fixed cash value while whole life cash value fluctuates daily",
      "Both products require only a state insurance license to sell"
    ],
    "answerIndex": 0,
    "rationale": "Variable life shifts investment risk to the policyowner by investing cash value in separate-account subaccounts, and the death benefit varies with subaccount performance subject to a minimum guarantee; whole life cash value is held in the insurer's general account with guaranteed values. The top distractor (whole life as a security) reverses the regulatory treatment: variable life is the product registered under the Investment Company Act because of its separate-account investment risk.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "medium",
    "id": "b56af8826ab0",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Under a joint and 100% survivor annuity payout, what happens upon the death of the first annuitant?",
    "choices": [
      "All payments cease immediately",
      "Payments continue at the same level to the surviving annuitant for life",
      "Payments are reduced by half and continue to the survivor",
      "A lump-sum death benefit is paid and payments stop"
    ],
    "answerIndex": 1,
    "rationale": "A joint and 100% survivor option pays the same periodic amount to the survivor for life after the first annuitant dies, providing the strongest survivor protection of the joint options. The top distractor (payments cease at the first death) describes a straight-life or joint-life-only option, not a joint and survivor option, and would expose the survivor to longevity risk after the first death.",
    "citation": {
      "source": "OTHER",
      "ref": "American Council of Life Insurers"
    },
    "difficulty": "medium",
    "id": "c0d4fd4331d0",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "The 'surrender period' in a deferred annuity is best described as...",
    "choices": [
      "The period after which the death benefit lapses if premiums are not paid",
      "The period during which surrender or withdrawal in excess of free-withdrawal limits triggers a contingent deferred sales charge",
      "The period before contract issuance during which the application can be canceled",
      "The period during which the contract owner cannot be charged any fees"
    ],
    "answerIndex": 1,
    "rationale": "Annuities typically impose a contingent deferred sales charge (CDSC), or surrender charge, on amounts withdrawn during the surrender period (often 5-10 years), declining to zero by the end of that period. The top distractor (death benefit lapse) confuses annuities with insurance lapse mechanics; an annuity contract is not voided by failure to make additional payments after issue, but surrender charges apply to withdrawals during the stated surrender period.",
    "citation": {
      "source": "OTHER",
      "ref": "NAIC"
    },
    "difficulty": "medium",
    "id": "3368ef62ecb7",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Which best describes the difference between the accumulation and annuitization phases of a deferred annuity?",
    "choices": [
      "During accumulation the owner receives payments; during annuitization the owner pays premiums",
      "Accumulation is the phase during which premiums and earnings build value in the contract; annuitization is the phase during which the contract is converted into a stream of income payments",
      "Accumulation applies only to fixed annuities; annuitization only to variable annuities",
      "Annuitization is taxable while accumulation is not"
    ],
    "answerIndex": 1,
    "rationale": "Accumulation refers to the build-up of contract value during which premiums are paid and earnings accumulate tax-deferred; annuitization refers to converting the accumulated value into periodic income payments under one of the settlement options. The top distractor reverses the two phases; in accumulation it is the owner who pays in (or holds) premiums, and in annuitization the insurer makes the periodic payments to the annuitant.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 575"
    },
    "difficulty": "medium",
    "id": "c7ade4a732a8",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "The Assumed Interest Rate (AIR) used in a variable annuity is best described as...",
    "choices": [
      "A guaranteed minimum interest rate credited to the separate account each year",
      "A benchmark return used to calculate annuity payments during the payout phase; if separate-account performance exceeds the AIR, the next payment increases, and if it falls short, the next payment decreases",
      "The current crediting rate set by the insurer for the general account",
      "The rate of inflation assumed in setting the contract's surrender charge schedule"
    ],
    "answerIndex": 1,
    "rationale": "During annuitization of a variable annuity, the AIR is the assumed earnings benchmark used to compute periodic payments; if the separate account earns more than the AIR, the next payment goes up, and if less, it goes down. The top distractor (a guaranteed minimum credit) is wrong because the AIR is not a guarantee of return on the separate account; it is purely a calculation benchmark for the variable payout.",
    "citation": {
      "source": "OTHER",
      "ref": "NAIC"
    },
    "difficulty": "medium",
    "id": "8a98f7d9fbf5",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "A Section 1035 exchange of insurance contracts allows tax-free exchange in which of the following directions?",
    "choices": [
      "Life insurance to annuity, life insurance to life insurance, and annuity to annuity, but NOT annuity to life insurance",
      "Any insurance contract to any other insurance contract, including annuity to life insurance",
      "Variable annuity to a mutual fund without tax recognition",
      "Life insurance to a Roth IRA"
    ],
    "answerIndex": 0,
    "rationale": "Section 1035 of the Internal Revenue Code permits tax-free exchanges of life insurance for life insurance, life insurance for annuities, and annuities for annuities, but does NOT permit a tax-free exchange from an annuity into a life insurance contract because that would convert ordinary-income gain into potentially tax-free death benefit. The top distractor (any-to-any) misstates the rule by ignoring the prohibition on annuity-to-life exchanges.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "0fe574c8af42",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "An indexed annuity has a 6% cap rate for the crediting period. If the linked index rises 10% and the participation rate is 100% with a 0% floor, the credited interest is...",
    "choices": [
      "10%",
      "6%",
      "0%",
      "4%"
    ],
    "answerIndex": 1,
    "rationale": "The cap rate sets the maximum interest that can be credited regardless of how much the index rises, so a 10% index gain with a 6% cap (and 100% participation) is credited at 6%. The top distractor (10%) is wrong because the cap is the upper limit on credited interest; gains above the cap are retained by the insurer and help fund the floor and other contractual guarantees.",
    "citation": {
      "source": "OTHER",
      "ref": "NAIC"
    },
    "difficulty": "medium",
    "id": "78860ddeddbb",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Before or at the time of solicitation, a variable annuity must be accompanied by which document under federal securities law?",
    "choices": [
      "A FINRA-approved sales brochure only",
      "A current statutory prospectus disclosing fees, risks, separate-account information, and the underlying portfolios",
      "A state-issued certificate of deposit disclosure",
      "Form ADV Part 2A"
    ],
    "answerIndex": 1,
    "rationale": "Because a variable annuity contract is a security registered under the Securities Act of 1933, prospectus delivery requirements apply, and a current statutory prospectus describing the contract, separate account, fees, and underlying portfolios must be provided. The top distractor (Form ADV Part 2A) is wrong because Form ADV Part 2A is the brochure required of investment advisers under the Investment Advisers Act, not the disclosure document for a variable insurance contract.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "medium",
    "id": "b2c2464dc11e",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "A universal life policy with Death Benefit Option A (Option 1) provides which of the following?",
    "choices": [
      "A level death benefit, with the net amount at risk decreasing as cash value grows",
      "A death benefit that increases dollar-for-dollar with cash value, equal to face amount plus accumulated cash value",
      "A death benefit that is reset to zero each year",
      "Two separate death benefits paid to two beneficiaries"
    ],
    "answerIndex": 0,
    "rationale": "Option A (Option 1) keeps the total death benefit level; as cash value accumulates, the net amount at risk to the insurer declines, which generally results in lower mortality charges than Option B for the same face amount. The top distractor (face plus cash value) describes Option B (Option 2), under which the death benefit grows with cash value and the insurer therefore charges higher cost of insurance.",
    "citation": {
      "source": "OTHER",
      "ref": "American Council of Life Insurers"
    },
    "difficulty": "medium",
    "id": "09bb86a88745",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "A 'conversion privilege' on a term life policy generally allows the policyowner to...",
    "choices": [
      "Convert a permanent policy to term coverage at an older age without proof of insurability",
      "Convert the term policy to a specified type of permanent insurance, before a stated deadline, without evidence of insurability",
      "Convert the cash value of the policy into an immediate annuity",
      "Convert the policy from variable to fixed by the insurer's election"
    ],
    "answerIndex": 1,
    "rationale": "A standard conversion privilege gives the term policyowner the right to exchange the term coverage for a designated permanent policy by a specified deadline without further medical underwriting, protecting against insurability changes. The top distractor reverses the direction of the conversion (permanent to term) and is not the standard meaning of the privilege; the value of the privilege lies in upgrading from temporary to permanent coverage without re-underwriting.",
    "citation": {
      "source": "OTHER",
      "ref": "American Council of Life Insurers"
    },
    "difficulty": "medium",
    "id": "4f256868dc4d",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "How are premiums structured in a traditional whole life policy issued today?",
    "choices": [
      "They increase with the insured's attained age each year",
      "They are level (fixed) for the life of the policy",
      "They decrease over time as the insured ages",
      "They are paid only as a single premium at issue, with no further payment options"
    ],
    "answerIndex": 1,
    "rationale": "Traditional whole life policies are designed with a level premium structure under which the insurer charges more than the cost of insurance in early years and less in later years, with the excess accumulating as cash value. The top distractor (premiums increase with age) describes annual renewable term insurance, not whole life, and ignores the level-premium design that produces guaranteed cash values.",
    "citation": {
      "source": "OTHER",
      "ref": "American Council of Life Insurers"
    },
    "difficulty": "medium",
    "id": "5ab5869703ea",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes the death benefit in a typical variable life policy?",
    "choices": [
      "There is no death benefit guarantee; the benefit equals only the cash value at death",
      "There is a minimum guaranteed death benefit, but the actual death benefit may exceed the minimum if separate-account performance has been favorable",
      "The death benefit is fixed and cannot vary regardless of subaccount performance",
      "The death benefit is paid only if the policy has been in force more than 10 years"
    ],
    "answerIndex": 1,
    "rationale": "Variable life policies guarantee a minimum death benefit (the face amount at issue) regardless of separate-account performance, but if performance is favorable the actual death benefit can exceed the minimum. The top distractor (no guarantee) is wrong because the minimum guaranteed death benefit is one of the key insurance features that distinguishes variable life from a pure investment account, and is one reason variable life is regulated as both a security and insurance.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "medium",
    "id": "d9e6becc8508",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "A 35-year-old surrenders a non-qualified deferred annuity and receives a lump sum that includes $20,000 of accumulated earnings above cost basis. Which federal tax consequence applies to that gain?",
    "choices": [
      "Long-term capital gains rates apply to the entire gain",
      "The gain is taxable as ordinary income, plus a 10% federal additional tax on the taxable portion because the owner is under age 59 1/2",
      "The gain is exempt from federal income tax as life insurance proceeds",
      "Only state income tax applies; federal tax is deferred until age 59 1/2"
    ],
    "answerIndex": 1,
    "rationale": "Annuity gains are always taxed as ordinary income, and a 10% federal additional tax applies to the taxable portion of distributions before age 59 1/2 unless an exception applies. The top distractor (long-term capital gains) is wrong because annuities never receive capital gains treatment regardless of how long the contract has been held; tax deferral is the trade-off for that ordinary-income treatment.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 575"
    },
    "difficulty": "medium",
    "id": "d49ced9df4ac",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "In a fixed annuity, the investment risk on contract values is borne primarily by...",
    "choices": [
      "The contract owner, who selects subaccounts and absorbs market gains and losses",
      "The insurance company, which guarantees a minimum interest rate from its general account",
      "The state insurance guaranty association on a daily basis",
      "FINRA, through SIPC coverage"
    ],
    "answerIndex": 1,
    "rationale": "Because a fixed annuity is held in the insurer's general account and the insurer guarantees a minimum crediting rate, the insurer absorbs investment risk; that allocation of risk is the basis for the Section 3(a)(8) insurance exemption from federal securities registration. The top distractor (owner bears the risk) describes a variable annuity, not a fixed annuity; in a variable annuity the owner directs subaccount allocations and bears market risk on the separate account.",
    "citation": {
      "source": "OTHER",
      "ref": "State Insurance Commissioner"
    },
    "difficulty": "medium",
    "id": "6216989b7cf4",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Within a variable annuity, the 'subaccounts' available to the contract owner are best described as...",
    "choices": [
      "Money market sweep options held outside the separate account",
      "Investment portfolios within the separate account that operate similarly to mutual funds; the owner allocates premium among them and bears the resulting market risk",
      "FDIC-insured deposit accounts that pay a guaranteed rate",
      "Deferred-income accounts that begin paying income immediately"
    ],
    "answerIndex": 1,
    "rationale": "Subaccounts are the investment portfolios within a variable annuity's separate account; they generally mirror mutual fund objectives, and the contract owner chooses an allocation among them and bears the resulting investment risk. The top distractor (FDIC-insured) is wrong because variable annuity subaccounts are securities subject to market risk, not insured bank deposits; FDIC insurance does not apply to insurance products.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "medium",
    "id": "fe132807f542",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Day-to-day regulation of a fixed annuity (a non-variable insurance contract) falls primarily under which authority?",
    "choices": [
      "The Securities and Exchange Commission",
      "FINRA",
      "The state insurance commissioner of the state in which the policy is issued",
      "The Commodity Futures Trading Commission"
    ],
    "answerIndex": 2,
    "rationale": "Fixed annuities are insurance contracts qualifying for the Section 3(a)(8) insurance exemption from federal securities regulation, so they are regulated principally by state insurance commissioners (with national coordination through the NAIC). The top distractor (SEC) is wrong because the SEC regulates the security side of variable annuities and variable life, not pure fixed annuities, where the insurer bears investment risk.",
    "citation": {
      "source": "OTHER",
      "ref": "State Insurance Commissioner"
    },
    "difficulty": "medium",
    "id": "1c3dceb2d551",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "An indexed annuity with a 0% floor provides what protection in a year when the linked index declines 15%?",
    "choices": [
      "The contract is credited with a -15% return, just like a direct index investment",
      "The contract receives no interest credit for that period, but the index loss is not deducted from contract value (downside protection)",
      "The owner must pay an additional 15% premium to keep the contract in force",
      "The contract is automatically surrendered for cash value"
    ],
    "answerIndex": 1,
    "rationale": "A 0% floor means that during a negative index period the contract is credited with 0% interest rather than the index loss, providing protection against negative crediting. The top distractor (full -15% pass-through) describes a direct index investment such as an index ETF, but the floor is a defining feature of indexed annuities funded by the insurer keeping a portion of upside (via cap and participation rate).",
    "citation": {
      "source": "OTHER",
      "ref": "NAIC"
    },
    "difficulty": "medium",
    "id": "8c98a0bca7c4",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "When a partial withdrawal is taken from a non-qualified deferred annuity issued after August 13, 1982, what is the federal tax-ordering rule for the amount withdrawn?",
    "choices": [
      "FIFO: cost basis is treated as withdrawn first, so early withdrawals are tax-free until basis is exhausted",
      "LIFO (interest-first): earnings are treated as withdrawn first and taxed as ordinary income, with non-taxable return of basis only after gains have been fully withdrawn",
      "Pro-rata: each withdrawal is part basis and part gain in the same proportion as the contract overall",
      "Capital gains: each withdrawal is taxed at long-term capital gains rates"
    ],
    "answerIndex": 1,
    "rationale": "For non-qualified annuities entered into after August 13, 1982, the tax law applies a LIFO (interest-first) ordering rule: any partial withdrawal is treated as gain to the extent of accumulated earnings before any non-taxable return of basis, and the gain is ordinary income with a possible 10% additional tax if the owner is under 59 1/2. The top distractor (FIFO) was the rule for older contracts but does not apply to modern non-qualified annuities and is a frequent point of confusion.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 575"
    },
    "difficulty": "hard",
    "id": "7563a5ee9199",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Which statement most accurately distinguishes variable life (VL) from variable universal life (VUL)?",
    "choices": [
      "VL and VUL are the same product with different marketing names",
      "VL has scheduled fixed premiums and a fixed face amount, while VUL adds the universal-life features of flexible premium payments and an adjustable death benefit",
      "VUL has scheduled fixed premiums while VL has flexible premiums",
      "VL invests cash value in the general account while VUL invests in separate-account subaccounts"
    ],
    "answerIndex": 1,
    "rationale": "Both VL and VUL invest cash value in separate-account subaccounts and therefore are securities, but VL has the level-premium structure of traditional whole life while VUL adopts universal-life features (flexible premiums and adjustable death benefit) on top of the variable investment chassis. The top distractor (same product) is wrong because the premium and death-benefit flexibility of VUL is the principal distinction tested on the exam.",
    "citation": {
      "source": "OTHER",
      "ref": "American Council of Life Insurers"
    },
    "difficulty": "hard",
    "id": "03322f6a12b7",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "When evaluating a variable annuity that offers a 5% 'bonus credit' on each premium, the most important consideration for an investor is...",
    "choices": [
      "The bonus is essentially free money and improves all investors' outcomes",
      "Bonus credits are typically funded by higher mortality and expense charges and/or longer or larger surrender charge schedules, which can offset or exceed the value of the bonus",
      "Bonus credits eliminate federal income tax on withdrawals",
      "Bonus credits convert the variable annuity into a fixed annuity"
    ],
    "answerIndex": 1,
    "rationale": "Bonus annuities are frequently structured so that the issuer recovers the cost of the bonus through higher recurring fees or extended/heavier surrender charges, often making the bonus a wash or a net negative for investors who do not hold to the end of the surrender period; the SEC has issued investor alerts on this point. The top distractor (free money) is wrong because the bonus is funded by other contract features the investor pays, and selling these contracts without disclosure of the offsetting costs has been the basis of suitability and disclosure enforcement actions.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "hard",
    "id": "fd97679066ce",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes the regulatory status of fixed indexed annuities under federal securities law following the SEC's adoption and the D.C. Circuit's 2009 vacatur of Rule 151A?",
    "choices": [
      "Fixed indexed annuities are uniformly registered as securities under the Securities Act of 1933",
      "Rule 151A would have classified many indexed annuities as securities, but it was vacated by the D.C. Circuit, and Section 989J of the Dodd-Frank Act subsequently provided that indexed annuities meeting specified state insurance standards are exempt from federal securities registration",
      "Indexed annuities are regulated solely by the CFTC",
      "Indexed annuities are treated as 1940 Act investment companies"
    ],
    "answerIndex": 1,
    "rationale": "The SEC's Rule 151A would have classified many indexed annuities as securities, but the D.C. Circuit vacated the rule in 2009 (American Equity v. SEC), and Section 989J of the Dodd-Frank Act (the so-called Harkin Amendment) directed that indexed annuities meeting specified state insurance suitability standards remain insurance products exempt from federal registration. The top distractor (uniform federal registration) is wrong because, since Dodd-Frank, fixed indexed annuities are generally regulated as state insurance products rather than as securities.",
    "citation": {
      "source": "SEC",
      "ref": "Dodd-Frank Wall Street Reform and Consumer Protection Act"
    },
    "difficulty": "hard",
    "id": "cb464d9eacd1",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Under Section 1035 of the Internal Revenue Code, which of the following exchanges is NOT permitted on a tax-free basis?",
    "choices": [
      "Life insurance to life insurance",
      "Life insurance to a non-qualified annuity",
      "Non-qualified annuity to a non-qualified annuity",
      "Non-qualified annuity to a life insurance policy"
    ],
    "answerIndex": 3,
    "rationale": "Section 1035 permits tax-free exchanges of life-to-life, life-to-annuity, and annuity-to-annuity, but does NOT permit annuity-to-life, because doing so would allow ordinary-income gains in the annuity to be converted into tax-free life insurance death benefits. The top distractor (life to annuity) is permitted under Section 1035 and is a common planning move for clients who no longer need the death benefit but want a tax-deferred income vehicle.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "02548da15484",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Within a variable annuity contract, which party bears which risk?",
    "choices": [
      "The insurer bears investment risk; the contract owner bears mortality risk",
      "The contract owner bears investment risk on the separate account, while the insurer bears mortality and expense risk and any guaranteed living/death benefits",
      "The contract owner bears all risks, including the cost of guaranteed lifetime income",
      "Neither party bears any risk because all risk is transferred to a guaranty association"
    ],
    "answerIndex": 1,
    "rationale": "In a variable annuity, the separate-account structure shifts investment performance risk to the owner, while the insurer continues to bear mortality risk (the obligation to make life-contingent payments however long the annuitant lives) and expense risk on the contract. The top distractor reverses the assignment and is the classic fixed-annuity allocation; in a fixed annuity the insurer bears investment risk, but in a variable annuity the owner does.",
    "citation": {
      "source": "OTHER",
      "ref": "NAIC"
    },
    "difficulty": "hard",
    "id": "227df6489353",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "A Single Premium Immediate Annuity (SPIA) is best described as which of the following?",
    "choices": [
      "A deferred annuity funded with periodic premiums whose payout begins at age 65",
      "An annuity funded with a single lump-sum premium under which annuity payments begin within a short period (typically within one year) after issue",
      "A pure life insurance policy paid up with a single premium",
      "A variable contract whose payments adjust quarterly with an index"
    ],
    "answerIndex": 1,
    "rationale": "A SPIA is purchased with a single lump-sum premium and immediately enters annuitization, with periodic income beginning shortly thereafter (typically within a year), making it useful for converting savings into lifetime income. The top distractor describes a deferred annuity, which has an accumulation phase before annuitization rather than the immediate-income structure of a SPIA.",
    "citation": {
      "source": "OTHER",
      "ref": "American Council of Life Insurers"
    },
    "difficulty": "hard",
    "id": "8fa83c639958",
    "subtopicId": "2.13",
    "reviewed": false
  },
  {
    "stem": "Death Benefit Option B (Option 2) under a universal life policy provides...",
    "choices": [
      "A level death benefit equal only to the original face amount, with cash value not adding to the benefit",
      "An increasing death benefit equal to the policy's face amount plus the accumulated cash value, generally producing higher cost of insurance charges than Option A",
      "A decreasing death benefit that approaches zero at age 100",
      "Death benefit only if the insured dies within 20 years of issue"
    ],
    "answerIndex": 1,
    "rationale": "Under Option B (Option 2) of a universal life policy, the death benefit equals the face amount plus the accumulated cash value, so total benefits grow as cash value grows, and the higher net amount at risk in early years means the insurer charges higher cost of insurance than under Option A. The top distractor (level only) describes Option A (Option 1), under which cash value reduces, but does not add to, the net amount at risk on the insurer.",
    "citation": {
      "source": "OTHER",
      "ref": "American Council of Life Insurers"
    },
    "difficulty": "hard",
    "id": "68fe3ba0957e",
    "subtopicId": "2.13",
    "reviewed": false
  }
];

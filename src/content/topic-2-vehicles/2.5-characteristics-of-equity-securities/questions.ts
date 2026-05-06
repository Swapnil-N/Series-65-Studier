import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Each share of a company's common stock generally entitles the holder to how many votes per share at the annual shareholder meeting?",
    "choices": [
      "One vote per share",
      "Ten votes per share",
      "One vote per shareholder regardless of shares held",
      "No vote unless the shareholder is an officer"
    ],
    "answerIndex": 0,
    "rationale": "Common stock conventionally carries one vote per share on matters submitted to shareholders, including the election of directors. The third choice describes per-capita voting (used in some cooperatives), not corporate voting; corporate law allocates voting power by share ownership, not by headcount.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "easy",
    "id": "fbd689f75a6d",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Which class of equity security typically does NOT carry voting rights in routine matters such as director elections?",
    "choices": [
      "Common stock",
      "Straight (non-cumulative) preferred stock",
      "Founders' Class A common",
      "Voting trust certificates"
    ],
    "answerIndex": 1,
    "rationale": "Most preferred stock is non-voting; investors accept the loss of voting power in exchange for a stated dividend and senior claim in liquidation. Common stock, by contrast, is the residual ownership class and carries voting rights on director elections and major corporate actions.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "easy",
    "id": "7f9bd80b9d0f",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Treasury stock — shares the issuer has repurchased and is holding in its own treasury — has which of the following characteristics?",
    "choices": [
      "It votes and receives dividends like any other outstanding share",
      "It has no voting rights and receives no dividends",
      "It votes but receives no dividends",
      "It receives dividends but does not vote"
    ],
    "answerIndex": 1,
    "rationale": "Once a corporation reacquires its own shares, those shares are not considered outstanding; treasury stock therefore neither votes nor receives dividends. Choice A is wrong because the shares are no longer in public hands and a corporation cannot vote or pay a dividend to itself.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "medium",
    "id": "09a66c8a8482",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Under STATUTORY voting, a shareholder who owns 200 shares and is voting on the election of five directors may cast a maximum of how many votes for any single candidate?",
    "choices": [
      "1,000",
      "200",
      "40",
      "5"
    ],
    "answerIndex": 1,
    "rationale": "Statutory voting allots one vote per share per board seat, and votes cannot be aggregated; the cap on any single candidate equals the number of shares owned (200). Choice A (1,000) describes the cumulative-voting maximum, which lets the shareholder pile all 200 × 5 votes onto one nominee.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "medium",
    "id": "6a13b8a2ef10",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "A company is electing four directors and a shareholder owns 300 shares. Under CUMULATIVE voting, what is the maximum number of votes the shareholder may cast for a single nominee?",
    "choices": [
      "75",
      "300",
      "1,200",
      "4"
    ],
    "answerIndex": 2,
    "rationale": "Cumulative voting lets a shareholder multiply shares owned by board seats up for election (300 × 4 = 1,200) and concentrate the entire pool on one candidate, advantaging minority holders. Choice B (300) reflects statutory voting, which caps any single candidate at the number of shares owned.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "hard",
    "id": "4876c523da26",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Which voting method is generally considered MORE favorable to minority shareholders seeking board representation?",
    "choices": [
      "Statutory voting",
      "Cumulative voting",
      "Per-capita voting",
      "Proxy voting"
    ],
    "answerIndex": 1,
    "rationale": "Cumulative voting permits a minority to concentrate aggregated votes on a single nominee, increasing the chance of seating at least one director. Statutory voting, in contrast, lets the majority sweep every seat because votes cannot be aggregated across candidates.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "medium",
    "id": "621653be6f1c",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Solicitations of shareholder proxies by a company subject to the federal proxy rules are governed primarily by which provision?",
    "choices": [
      "Section 14(a) of the Securities Exchange Act of 1934",
      "Section 5 of the Securities Act of 1933",
      "Section 17 of the Investment Company Act of 1940",
      "Rule 506(b) of Regulation D"
    ],
    "answerIndex": 0,
    "rationale": "Section 14(a) of the Exchange Act and the rules thereunder (e.g., Schedule 14A disclosure, Rule 14a-9 anti-fraud) govern proxy solicitations for reporting companies. Section 5 of the 1933 Act addresses registration of securities offerings, not the conduct of proxy solicitations.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 14(a)"
    },
    "difficulty": "medium",
    "id": "2fc1f495dd24",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Which SEC rule prohibits the use of false or misleading statements in connection with the solicitation of proxies?",
    "choices": [
      "Rule 10b-5",
      "Rule 14a-9",
      "Rule 144",
      "Rule 482"
    ],
    "answerIndex": 1,
    "rationale": "Rule 14a-9 is the proxy anti-fraud rule and forbids materially false or misleading statements (or omissions) in proxy solicitations. Rule 10b-5 is the broader anti-fraud rule for purchases and sales of any security; Rule 14a-9 is the rule specifically tailored to proxy materials.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 14a-9"
    },
    "difficulty": "medium",
    "id": "d92ace0a48c6",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "The PREEMPTIVE right of a common shareholder is best described as the right to:",
    "choices": [
      "Receive a fixed dividend before common shareholders are paid",
      "Maintain proportional ownership by purchasing newly issued shares before they are sold to outsiders",
      "Demand cash redemption of shares at net asset value",
      "Convert common stock into a debt instrument at par"
    ],
    "answerIndex": 1,
    "rationale": "A preemptive (antidilution) right lets existing shareholders subscribe to a pro-rata portion of new share issuances so their percentage ownership and voting power are not diluted. Choice A confuses preemptive rights with preferred-stock dividend preference; the two concepts are unrelated.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "easy",
    "id": "99f4d1c092ae",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "A corporation conducts a rights offering to current shareholders. The PRIMARY purpose of issuing rights is to:",
    "choices": [
      "Reward employees with deferred compensation",
      "Raise additional capital while giving existing holders the chance to avoid dilution",
      "Allow short sellers to cover their positions",
      "Replace cash dividends with stock dividends"
    ],
    "answerIndex": 1,
    "rationale": "A rights offering raises new equity capital while honoring shareholders' preemptive (antidilution) rights — they may subscribe at the discounted price or sell the rights. Choice A describes employee stock options/grants, not rights offerings, which are issued to public shareholders rather than as employee compensation.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "medium",
    "id": "b4cc4e43bb64",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Stock subscription rights distributed to common shareholders typically have which of the following characteristics?",
    "choices": [
      "A subscription price set above the current market price and a multi-year life",
      "A subscription price set below the current market price and a short life (often 30-45 days)",
      "No expiration date and a subscription price equal to par value",
      "A subscription price equal to book value and a 10-year life"
    ],
    "answerIndex": 1,
    "rationale": "Rights are short-lived (commonly 30-45 days) and have a subscription price set below current market so the offering is attractive enough to fully subscribe. A rights price set above market would be worthless and defeat the offering's capital-raising purpose.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "medium",
    "id": "02a7cc972b07",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "A company's stock trades cum-rights at $30. The subscription price is $25 and four rights are required to purchase one new share. What is the theoretical value of one right?",
    "choices": [
      "$5.00",
      "$1.25",
      "$1.00",
      "$0.80"
    ],
    "answerIndex": 2,
    "rationale": "Cum-rights value = (Market price - Subscription price) / (N + 1) = ($30 - $25) / (4 + 1) = $1.00. Choice B ($1.25) uses the ex-rights formula (divide by N rather than N+1), which understates the rights' value while the stock is still trading with the right attached.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "hard",
    "id": "cbeaaa7456b5",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "In a corporate liquidation, which class of claimants is paid LAST out of remaining assets?",
    "choices": [
      "Secured creditors",
      "General creditors",
      "Preferred shareholders",
      "Common shareholders"
    ],
    "answerIndex": 3,
    "rationale": "The liquidation priority is: secured creditors, unsecured/general creditors (including bondholders), preferred shareholders, and finally common shareholders, who receive only what is left. Choice C is incorrect because preferred stock has a stated liquidation preference that is satisfied before any distribution to common shareholders.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "easy",
    "id": "58d99e2f5468",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Within the equity portion of the capital structure, preferred shareholders' claim in liquidation is:",
    "choices": [
      "Senior to common shareholders but junior to all creditors",
      "Senior to all creditors but junior to common shareholders",
      "Equal in priority to common shareholders",
      "Senior to secured creditors holding bonds"
    ],
    "answerIndex": 0,
    "rationale": "Preferred stock is equity, so it is junior to every class of debt (secured and unsecured) but senior to common stock. Choice D mistakenly elevates equity above debt; bondholders, especially secured ones, are always paid before any equity holder receives anything in liquidation.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "medium",
    "id": "a27cc2955b2f",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "A corporation issues CUMULATIVE preferred stock. Two annual dividends have been omitted (passed). In a subsequent liquidation, the cumulative feature requires that:",
    "choices": [
      "The omitted dividends be forgiven once liquidation begins",
      "Common shareholders receive the omitted amount before preferred holders",
      "All accumulated arrears be paid to preferred holders before any distribution to common",
      "Preferred holders be paid only the current year's dividend, not the arrears"
    ],
    "answerIndex": 2,
    "rationale": "Cumulative preferred stock means missed (passed) dividends accrue and must be paid in full, in arrears, before common shareholders receive anything in either dividends or liquidation. Choice A is wrong because the entire benefit of a cumulative feature is that arrears are NOT forgiven; they survive into liquidation.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "hard",
    "id": "4e0001fab280",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "In bankruptcy, which group has the HIGHEST priority claim against the assets of a liquidating corporation?",
    "choices": [
      "Holders of subordinated debentures",
      "Holders of common stock",
      "Secured creditors",
      "Holders of cumulative preferred stock"
    ],
    "answerIndex": 2,
    "rationale": "Secured creditors hold liens or pledges of specific collateral and are paid first from that collateral, ahead of unsecured creditors and all equity holders. Subordinated debentures (Choice A) are unsecured AND contractually junior to other unsecured debt, placing them well below secured creditors.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "medium",
    "id": "6e865ada5b38",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following BEST describes restricted stock?",
    "choices": [
      "Stock that is subject to short-swing profit recovery under Section 16(b)",
      "Unregistered stock acquired in a private placement or compensation grant that cannot be freely resold without an exemption",
      "Stock placed in escrow during a tender offer",
      "Stock that has been delisted from a national exchange"
    ],
    "answerIndex": 1,
    "rationale": "Restricted stock typically refers to unregistered shares acquired directly from an issuer (e.g., Reg D placement, employee grant) that cannot be resold publicly absent registration or an exemption such as Rule 144. Choice A confuses restricted stock with the short-swing rule, which targets insiders' round-trip trading regardless of restriction status.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 144"
    },
    "difficulty": "easy",
    "id": "bb0737fd5655",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Under Rule 144, what is the minimum holding period before a non-affiliate may resell restricted securities of an SEC reporting issuer without volume or other limitations (assuming current public information is available)?",
    "choices": [
      "30 days",
      "90 days",
      "Six months",
      "One year"
    ],
    "answerIndex": 2,
    "rationale": "For a reporting issuer, Rule 144 imposes a six-month holding period; once met, non-affiliates may resell freely (subject to current-public-information condition until one year). For a non-reporting issuer the holding period is one year, which is Choice D; Choice D would be correct only if the issuer were non-reporting.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 144"
    },
    "difficulty": "medium",
    "id": "809f211a99f1",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Under Rule 144, what is the minimum holding period for restricted securities of a NON-reporting issuer before a non-affiliate may resell without restriction?",
    "choices": [
      "Six months",
      "Nine months",
      "One year",
      "Two years"
    ],
    "answerIndex": 2,
    "rationale": "Rule 144 requires a one-year holding period for restricted securities issued by non-reporting issuers; afterward, non-affiliates may resell freely. The six-month period (Choice A) applies only when the issuer is subject to Exchange Act reporting requirements.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 144"
    },
    "difficulty": "medium",
    "id": "ccc825e515ec",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "An affiliate of a reporting issuer wishes to sell shares under Rule 144. The volume limitation in any three-month period is the GREATER of:",
    "choices": [
      "1% of outstanding shares OR the average weekly trading volume reported during the four weeks preceding the Form 144 filing",
      "5% of outstanding shares OR the average daily trading volume",
      "10% of the float OR $1 million in market value",
      "0.5% of outstanding shares OR the prior month's volume"
    ],
    "answerIndex": 0,
    "rationale": "Rule 144 caps an affiliate's three-month resales at the GREATER of 1% of outstanding shares of the class or the average weekly reported trading volume during the four calendar weeks preceding the Form 144 filing. Choice B's 5% threshold is far above the actual cap and is not the formula used by the rule.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 144"
    },
    "difficulty": "medium",
    "id": "f29ea32df8cc",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "An affiliate plans to sell stock of a reporting company under Rule 144. The company has 10,000,000 shares outstanding, and the average weekly reported trading volume over the prior four weeks was 80,000 shares. What is the maximum number of shares the affiliate may sell in a three-month period?",
    "choices": [
      "80,000 shares",
      "100,000 shares",
      "320,000 shares",
      "500,000 shares"
    ],
    "answerIndex": 1,
    "rationale": "The cap is the greater of 1% of outstanding shares (1% of 10,000,000 = 100,000) or the four-week average weekly trading volume (80,000). The greater figure, 100,000 shares, is the limit. Choice C (320,000) erroneously sums four weeks of volume rather than using the average weekly amount, which the rule already implicitly multiplies over the three-month window.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 144"
    },
    "difficulty": "hard",
    "id": "0511746c7b15",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "An affiliate selling securities pursuant to Rule 144 must file a Form 144 with the SEC if, during any three-month period, sales exceed:",
    "choices": [
      "1,000 shares or $10,000",
      "5,000 shares or $50,000",
      "10,000 shares or $100,000",
      "50,000 shares or $500,000"
    ],
    "answerIndex": 1,
    "rationale": "Form 144 must be filed concurrently with placing the sell order if the affiliate's sales exceed 5,000 shares OR $50,000 in any three-month period. Choice C (10,000 / $100,000) is the threshold often confused with this rule but is not the actual filing trigger under Rule 144.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 144"
    },
    "difficulty": "medium",
    "id": "80fddc6b032c",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Rule 144A under the Securities Act of 1933 provides a safe-harbor exemption for resales of restricted securities to:",
    "choices": [
      "Any retail investor with at least $200,000 of annual income",
      "Qualified institutional buyers (QIBs)",
      "Accredited investors as defined in Rule 501",
      "Foreign investors only, under Regulation S"
    ],
    "answerIndex": 1,
    "rationale": "Rule 144A permits resales of restricted securities only to qualified institutional buyers (QIBs) — generally institutions owning and investing on a discretionary basis at least $100 million in securities. Choice C confuses Rule 144A's QIB universe with Reg D's broader 'accredited investor' category; QIBs are a much narrower, institution-only subset.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 144A"
    },
    "difficulty": "medium",
    "id": "a442d078da33",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following BEST distinguishes 'control stock' from 'restricted stock' as those terms are used in connection with Rule 144?",
    "choices": [
      "Control stock is unregistered; restricted stock is fully registered and freely tradable",
      "Control stock is held by an affiliate (such as an officer, director, or 10% holder), regardless of how it was acquired; restricted stock is unregistered stock acquired directly from the issuer",
      "Control stock is non-voting; restricted stock has full voting rights",
      "Control stock and restricted stock are synonyms"
    ],
    "answerIndex": 1,
    "rationale": "Control stock is defined by who holds it (an affiliate of the issuer); restricted stock is defined by HOW it was acquired (in an unregistered transaction). The same shares can be both, in which case Rule 144 imposes both volume limits and the holding-period requirement. Choice D is wrong because the two concepts overlap but are not identical.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 144"
    },
    "difficulty": "easy",
    "id": "6143eccc9fd6",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Which body has the legal authority to declare a corporate dividend on common stock?",
    "choices": [
      "The company's CEO",
      "The board of directors",
      "Common shareholders by majority vote",
      "The SEC"
    ],
    "answerIndex": 1,
    "rationale": "Dividends on common stock are declared by the board of directors at its discretion; the obligation to pay arises only upon declaration. Choice C is wrong because shareholders elect directors but cannot force a dividend declaration; that is a board-level decision under state corporate law.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "easy",
    "id": "c048c98c7092",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Common stockholders generally have which of the following with respect to dividends?",
    "choices": [
      "A guaranteed quarterly dividend at par",
      "An unconditional contractual right to receive dividends",
      "No right to a dividend until the board of directors declares one",
      "A right superior to that of preferred shareholders"
    ],
    "answerIndex": 2,
    "rationale": "A common shareholder has no right to any dividend unless and until the board declares one; the dividend then becomes a debt of the corporation. Choice D is incorrect because preferred shareholders ALWAYS have priority over common shareholders for any declared dividend.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "easy",
    "id": "b7a9b6df8240",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Place the following dividend dates in CHRONOLOGICAL order: (I) Record date, (II) Declaration date, (III) Payment date, (IV) Ex-dividend date.",
    "choices": [
      "I, II, III, IV",
      "II, IV, I, III",
      "II, I, IV, III",
      "IV, II, I, III"
    ],
    "answerIndex": 1,
    "rationale": "The board first declares the dividend, then the ex-dividend date arrives (the date on or after which a buyer is not entitled to the dividend), then the record date, and finally the payment date. Choice C reverses the ex-date and record date — under current settlement conventions the ex-date precedes (or coincides with) the record date, never falls between record and payment.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "medium",
    "id": "c6cd136ccbde",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Cash dividends classified as 'qualified' dividends under federal tax law are generally taxed at:",
    "choices": [
      "The investor's ordinary income tax rate",
      "Long-term capital gains rates (0%, 15%, or 20%, depending on taxable income)",
      "A flat 28% collectibles rate",
      "A flat 10% withholding rate, with no further tax"
    ],
    "answerIndex": 1,
    "rationale": "Qualified dividends — generally those paid by U.S. corporations or qualified foreign corporations on stock held for the requisite period — are taxed at preferential long-term capital gains rates. Choice A applies to non-qualified (ordinary) dividends, such as most REIT distributions, which receive no rate preference.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "0e637a3241c9",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "To qualify for preferential 'qualified dividend' tax rates on common stock, the investor must satisfy a holding-period test. That test generally requires the investor to hold the shares for more than:",
    "choices": [
      "30 days during the 60-day period beginning 30 days before the ex-dividend date",
      "60 days during the 121-day period beginning 60 days before the ex-dividend date",
      "90 days during the 180-day period beginning 90 days before the ex-dividend date",
      "One year ending on the dividend record date"
    ],
    "answerIndex": 1,
    "rationale": "Qualified-dividend treatment for common stock requires holding the share for more than 60 days within the 121-day window starting 60 days BEFORE the ex-dividend date. Choice A halves the correct windows and is the most common distractor; using it would disqualify legitimate qualified dividends.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "hard",
    "id": "5a9418ff18eb",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "An investor receives a 10% stock dividend on 100 shares purchased at $20 per share. Which of the following is TRUE immediately after the distribution?",
    "choices": [
      "The investor recognizes ordinary income equal to the market value of the new shares",
      "The investor now owns 110 shares with an adjusted cost basis of approximately $18.18 per share",
      "The investor's total cost basis in the position has increased by 10%",
      "The investor must pay capital gains tax on the new shares"
    ],
    "answerIndex": 1,
    "rationale": "A pro-rata stock dividend is generally non-taxable; the investor's total basis ($2,000) is reallocated across 110 shares, producing a per-share basis of about $18.18. Choice A is wrong because no income is recognized at distribution — the basis is simply spread over more shares.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "260baef6661f",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "A corporation declares a 2-for-1 forward stock split. An investor who owned 100 shares at a market price of $80 will, immediately after the split, own:",
    "choices": [
      "100 shares at $160 per share",
      "200 shares at $40 per share",
      "200 shares at $80 per share",
      "50 shares at $160 per share"
    ],
    "answerIndex": 1,
    "rationale": "A 2-for-1 split doubles the share count and halves the per-share price; aggregate market value and proportional ownership are unchanged. Choice A inverts the effect (a reverse split would reduce shares while raising price), and Choice C ignores the price adjustment that necessarily accompanies the share increase.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "easy",
    "id": "b85c9dac0b4b",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following BEST distinguishes an Incentive Stock Option (ISO) from a Nonqualified Stock Option (NQSO)?",
    "choices": [
      "ISOs may be granted to non-employees; NQSOs may not",
      "ISOs receive preferential tax treatment if statutory holding-period rules are met; NQSOs are taxed as ordinary compensation income upon exercise",
      "ISOs convey voting rights; NQSOs do not",
      "ISOs trade publicly on options exchanges; NQSOs do not"
    ],
    "answerIndex": 1,
    "rationale": "ISOs are 'qualified' under the Internal Revenue Code and, if statutory holding-period requirements are met, the entire gain is taxed as long-term capital gain at sale; NQSOs trigger ordinary compensation income equal to the bargain element at exercise. Choice A reverses the rule: ISOs may be granted ONLY to employees, while NQSOs may go to consultants and directors as well.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 525"
    },
    "difficulty": "easy",
    "id": "5d19680fd14d",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "An employee exercises an Incentive Stock Option (ISO) when the FMV exceeds the strike price. For REGULAR federal income tax purposes, what is the tax consequence at exercise (assuming the shares are not sold in the same year)?",
    "choices": [
      "The bargain element is taxed as ordinary wage income, just like an NQSO",
      "There is no regular-tax consequence at exercise, although the bargain element is an AMT preference item",
      "The bargain element is taxed as long-term capital gain",
      "The entire FMV of the shares is taxed as ordinary income"
    ],
    "answerIndex": 1,
    "rationale": "An ISO exercise creates no regular-tax event; tax is deferred until the underlying shares are sold. The bargain element (FMV minus strike) IS, however, an AMT preference item in the year of exercise. Choice A describes NQSO treatment, which is the most common error candidates make when conflating ISO and NQSO tax timing.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 525"
    },
    "difficulty": "medium",
    "id": "1da5f39c6ad4",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "For an Incentive Stock Option (ISO) sale to be a 'qualifying disposition' eligible for full long-term capital gain treatment, the employee must hold the underlying shares for at least:",
    "choices": [
      "One year from the grant date and six months from the exercise date",
      "Two years from the grant date AND one year from the exercise date",
      "Six months from the grant date and six months from the exercise date",
      "Three years from the grant date"
    ],
    "answerIndex": 1,
    "rationale": "The ISO 'two-and-one' rule requires holding the stock more than two years from the GRANT date and more than one year from the EXERCISE date. Failing either prong creates a 'disqualifying disposition,' which converts some or all of the gain into ordinary compensation income. Choice A inverts the holding periods.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "331abd9b355c",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "An employee makes a 'disqualifying disposition' of ISO shares (sells before satisfying the two-year-from-grant and one-year-from-exercise holding requirements). The PRIMARY tax consequence is that:",
    "choices": [
      "The entire transaction is exempt from tax",
      "The bargain element at exercise is converted into ordinary compensation income, with any additional gain treated as capital gain",
      "The employee owes only the AMT, with no regular tax",
      "The employee may not deduct any losses"
    ],
    "answerIndex": 1,
    "rationale": "A disqualifying disposition strips the favorable ISO treatment as to the bargain element, taxing it as ordinary compensation income (added to W-2); appreciation beyond the bargain element retains capital-gain character based on the holding period from exercise. Choice A is plainly wrong — selling shares is always a taxable event absent some other exclusion.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 525"
    },
    "difficulty": "medium",
    "id": "21e910c604b1",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "An employee exercises a Nonqualified Stock Option (NQSO) with a strike price of $20 when the stock is trading at $35. What is the federal income tax consequence at exercise (assuming the option had no readily ascertainable FMV at grant)?",
    "choices": [
      "No tax until the stock is sold",
      "$15 per share is taxed as ordinary compensation income (the 'bargain element')",
      "$15 per share is taxed as long-term capital gain",
      "$35 per share is taxed as ordinary income"
    ],
    "answerIndex": 1,
    "rationale": "On NQSO exercise, the bargain element (FMV minus strike, here $15) is taxed as ordinary W-2 compensation in the year of exercise; subsequent appreciation is capital gain measured from the FMV at exercise. Choice A describes ISO treatment — the deferred regular-tax timing is what differentiates ISOs from NQSOs.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 525"
    },
    "difficulty": "medium",
    "id": "b104c8a75b59",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Which of the following individuals MAY validly receive a grant of Nonqualified Stock Options (NQSOs) from a corporation?",
    "choices": [
      "Only full-time W-2 employees",
      "Employees, outside directors, and independent consultants",
      "Only the company's officers and directors",
      "Only persons who are also accredited investors"
    ],
    "answerIndex": 1,
    "rationale": "NQSOs are flexible and may be granted to employees, outside (non-employee) directors, and independent contractors/consultants. ISOs, by contrast, may be granted ONLY to employees. Choice A confuses NQSO recipient eligibility with ISO eligibility; only ISOs are limited to W-2 employees.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "medium",
    "id": "3578e7590c91",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "When an employee exercises an Incentive Stock Option (ISO), the bargain element (FMV at exercise minus strike price) is treated for ALTERNATIVE MINIMUM TAX (AMT) purposes as:",
    "choices": [
      "A non-event with no AMT consequences",
      "A preference item that increases alternative minimum taxable income in the year of exercise",
      "A long-term capital gain that reduces AMT liability",
      "A foreign-tax credit eligible item"
    ],
    "answerIndex": 1,
    "rationale": "Even though ISO exercise creates no regular-tax event, the bargain element is an AMT preference item in the exercise year, potentially generating an AMT liability that exceeds the regular tax. This 'AMT trap' is a frequent surprise for employees who exercise but do not sell in the same year and is the principal trade-off of the ISO's regular-tax deferral.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "hard",
    "id": "cd6c8f344b8a",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "An ISO holder exercises options and sells the underlying shares more than two years after the grant date and more than one year after the exercise date. The total gain (sale price minus strike price) is taxed as:",
    "choices": [
      "Ordinary compensation income",
      "Short-term capital gain",
      "Long-term capital gain",
      "Tax-exempt income"
    ],
    "answerIndex": 2,
    "rationale": "Because both prongs of the ISO holding-period rule are met (more than two years from grant AND more than one year from exercise), the disposition is 'qualifying' and the entire spread between sale price and strike price is taxed at long-term capital gain rates. Choice A would apply only if the disposition were disqualifying, in which case the bargain element would be ordinary income.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 525"
    },
    "difficulty": "hard",
    "id": "904da02af9d9",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "An issuer pays a regular cash dividend on its common stock. Which of the following statements about that dividend is MOST accurate?",
    "choices": [
      "It must be paid out of par-value capital",
      "It is generally paid out of retained earnings (or legally available surplus)",
      "It must equal at least 5% of the share's market value",
      "It is determined by majority vote of common shareholders"
    ],
    "answerIndex": 1,
    "rationale": "Cash dividends are paid out of retained earnings or legally available surplus and represent a distribution of accumulated profits. Choice A is wrong because corporations cannot legally distribute par-value capital as a dividend; doing so would impair the issuer's capital and is forbidden by state corporate law.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "medium",
    "id": "f89f51d9c015",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "An employee receives 1,000 shares of restricted STOCK (not an option) as compensation, with a four-year vesting schedule. In the absence of a Section 83(b) election, when is the value of the shares included in the employee's ordinary income?",
    "choices": [
      "At the grant date based on FMV at grant",
      "Ratably as the shares vest, based on FMV on each vesting date",
      "Only when the shares are ultimately sold",
      "Never; restricted stock grants are non-taxable"
    ],
    "answerIndex": 1,
    "rationale": "Without a Section 83(b) election, restricted stock is taxed as ordinary income as the shares vest, using each tranche's FMV at vesting. A timely 83(b) election would instead accelerate income recognition to the grant date based on grant-date FMV — the answer in Choice A — but only if the election is made.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 525"
    },
    "difficulty": "hard",
    "id": "b131cc97b5cf",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "Preemptive rights are most commonly associated with which of the following corporate actions?",
    "choices": [
      "A secondary offering by an existing shareholder",
      "An issuer's primary offering of additional shares to raise new capital",
      "The issuer's repurchase of treasury stock",
      "A merger paid entirely in cash"
    ],
    "answerIndex": 1,
    "rationale": "Preemptive (antidilution) rights apply when the issuer issues NEW shares (a primary offering), letting existing holders maintain their proportional ownership. Choice A describes a secondary sale by an existing holder — no new shares are issued, so preemptive rights are not implicated.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "difficulty": "medium",
    "id": "3d28d794cc49",
    "subtopicId": "2.5",
    "reviewed": false
  },
  {
    "stem": "A common-stock investor receives a non-cash distribution that is characterized as a 'return of capital' rather than a dividend. The PRIMARY tax effect is that the distribution:",
    "choices": [
      "Is taxed as ordinary dividend income immediately",
      "Reduces the investor's cost basis and is generally not taxed currently",
      "Is taxed at long-term capital gains rates",
      "Is wholly excluded from gross income permanently"
    ],
    "answerIndex": 1,
    "rationale": "A return of capital is treated as a recovery of the investor's cost; it reduces basis and triggers no current tax until basis reaches zero, after which further distributions are taxable as capital gain. Choice A confuses a return of capital with an ordinary dividend, which is paid out of earnings and profits and is taxable on receipt.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "hard",
    "id": "328d8d928365",
    "subtopicId": "2.5",
    "reviewed": false
  }
];

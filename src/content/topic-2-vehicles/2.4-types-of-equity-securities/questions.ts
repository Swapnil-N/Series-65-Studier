import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Which of the following best describes the rights of a common stockholder upon a corporation's liquidation?",
    "choices": [
      "First claim on assets, ahead of all creditors",
      "Claim ahead of preferred stockholders but behind bondholders",
      "Last claim on assets, after all creditors and preferred stockholders",
      "Equal claim with secured creditors"
    ],
    "answerIndex": 2,
    "rationale": "Common stockholders have a residual claim, meaning they are paid only after all creditors (secured, then unsecured) and preferred shareholders are satisfied. Choice B is wrong because preferred stock ranks ahead of common in the liquidation waterfall, not behind it.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "2e8826aa4419",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "An American Depositary Receipt (ADR) is best described as a:",
    "choices": [
      "Bond issued by a foreign government and registered with the SEC",
      "Negotiable certificate issued by a U.S. depositary bank representing shares of a foreign company",
      "Direct ownership interest in shares listed on a foreign stock exchange",
      "Mutual fund holding only foreign equities"
    ],
    "answerIndex": 1,
    "rationale": "ADRs are negotiable receipts issued by a U.S. depositary bank that hold underlying foreign shares on deposit, allowing U.S. investors to trade foreign equities in dollars on U.S. markets. Choice C is incorrect because the investor holds the depositary receipt — the depositary bank holds the underlying foreign shares.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "easy",
    "id": "83aad25c093b",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Dividends on ADRs are typically paid to U.S. holders in:",
    "choices": [
      "The foreign currency of the issuing company",
      "U.S. dollars after conversion by the depositary bank",
      "Either currency at the holder's election at the time of declaration",
      "Only as additional ADRs (no cash option)"
    ],
    "answerIndex": 1,
    "rationale": "The depositary bank collects the foreign-currency dividend, converts it to U.S. dollars (net of any foreign withholding tax and conversion fees), and distributes dollars to ADR holders. Choice A is wrong because U.S. ADR investors receive U.S. dollars from the depositary, not foreign currency.",
    "citation": {
      "source": "OTHER",
      "ref": "Kaplan Series 65 Study Guide"
    },
    "difficulty": "easy",
    "id": "e9d8fbed5176",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Which feature is generally NOT associated with straight (non-cumulative, non-participating) preferred stock?",
    "choices": [
      "A stated, fixed dividend rate",
      "Priority over common stock in liquidation",
      "Voting rights equivalent to common stock",
      "Par value used to compute the dividend"
    ],
    "answerIndex": 2,
    "rationale": "Preferred stock typically does not carry voting rights; the trade-off for the fixed, priority dividend is the loss of vote on most corporate matters. The other three are standard preferred features. Choice D is a real attribute — preferred dividends are usually expressed as a percentage of par.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "1737437edc08",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "An issuer skips two annual dividend payments on its 6% cumulative preferred stock. Before the issuer can pay any dividend on its common stock, it must:",
    "choices": [
      "Pay only the current year's preferred dividend",
      "Pay all skipped (in arrears) preferred dividends plus the current preferred dividend",
      "Obtain shareholder approval to skip the arrears",
      "Convert the unpaid dividends into additional preferred shares"
    ],
    "answerIndex": 1,
    "rationale": "Cumulative preferred requires the issuer to make up all dividends in arrears before any common dividend may be paid. Choice A is incorrect because the cumulative feature specifically protects holders by accumulating skipped dividends, not just the current period's.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "4ad6c746f6ca",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Convertible preferred stock gives the holder the right to:",
    "choices": [
      "Force the issuer to redeem the shares at par",
      "Exchange the preferred shares for a set number of the issuer's common shares",
      "Convert the shares into the issuer's senior debt",
      "Vote on the issuer's board of directors"
    ],
    "answerIndex": 1,
    "rationale": "Convertible preferred stock embeds an option allowing the holder to exchange each preferred share for a fixed number of common shares (the conversion ratio). Choice A describes a callable or redeemable feature held by the issuer, not the holder, and the issuer is not forced to redeem at par by virtue of the conversion feature.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "73b76731ae53",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following best characterizes floating rate preferred stock?",
    "choices": [
      "The dividend is fixed for the life of the security",
      "The dividend resets periodically based on a benchmark interest rate",
      "The principal floats with prevailing equity prices",
      "The shares are automatically called when rates rise"
    ],
    "answerIndex": 1,
    "rationale": "Floating (or adjustable) rate preferred stock has a dividend that resets at scheduled intervals against a reference rate (e.g., a Treasury rate or SOFR plus a spread), which tends to keep its market price closer to par as rates move. Choice A describes straight (fixed-rate) preferred, which is exactly what floating-rate preferred is designed to differ from.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "4602fd144577",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "A U.S. investor purchases shares of a Japanese auto manufacturer through ADRs trading on the NYSE. Which risk is the investor MOST directly exposed to that a domestic-stock investor would not face?",
    "choices": [
      "Inflation risk",
      "Currency exchange-rate risk",
      "Default risk on the underlying shares",
      "Interest-rate risk on the depositary bank"
    ],
    "answerIndex": 1,
    "rationale": "Even though the ADR trades in dollars, its price reflects the value of the underlying foreign shares; movements in the yen-dollar exchange rate affect the dollar value of the position and the dollar amount of dividends received. Choice A is shared with domestic equities — inflation risk is not unique to foreign stock.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "756e919c2ae7",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "The maximum economic loss for a holder of common stock in a publicly traded U.S. corporation is:",
    "choices": [
      "Unlimited, because shareholders are jointly liable for corporate debts",
      "Limited to the amount paid for the shares plus accrued dividends",
      "Limited to the amount the shareholder paid for the shares",
      "Limited to the par value of the shares"
    ],
    "answerIndex": 2,
    "rationale": "A core attribute of common stock is limited liability — the shareholder cannot lose more than the amount invested in the shares. Choice D is wrong because limited liability is measured by the purchase price, not the (often nominal) par value.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "9b081cc913b2",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Treasury stock is best described as shares that are:",
    "choices": [
      "Authorized but not yet issued",
      "Issued and currently held by the public",
      "Issued, then repurchased by the issuing corporation, and held in the corporate treasury",
      "Held by the U.S. Department of the Treasury"
    ],
    "answerIndex": 2,
    "rationale": "Treasury stock consists of previously issued shares that the corporation has reacquired; these shares carry no voting rights and receive no dividends while held by the issuer. Choice A confuses treasury stock with authorized-but-unissued stock, which has never been sold.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "43d38b8749ee",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "An investor holds a 7% cumulative preferred stock with $100 par. The issuer paid no dividend last year and intends to declare a common dividend this year. Before paying the common dividend, the issuer must pay each preferred share:",
    "choices": [
      "$7",
      "$14",
      "$70",
      "Nothing — preferred dividends are discretionary"
    ],
    "answerIndex": 1,
    "rationale": "The annual preferred dividend is 7% × $100 = $7. Because the stock is cumulative, the missed prior-year $7 plus the current-year $7 — a total of $14 — must be paid before any common dividend. Choice A would be correct only if the preferred were non-cumulative.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "503820cedcd5",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Compared with straight (fixed-rate) preferred stock, the market price of floating rate preferred stock is generally:",
    "choices": [
      "More volatile in response to interest-rate changes",
      "Less volatile in response to interest-rate changes",
      "Indifferent to interest-rate changes because preferred is an equity",
      "Tied solely to the issuer's earnings"
    ],
    "answerIndex": 1,
    "rationale": "Because the dividend resets toward prevailing rates, floating rate preferred experiences much smaller price swings from interest-rate movements than fixed-rate preferred, whose price must adjust because its coupon does not. Choice A reverses the actual relationship.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "72cae3e48db0",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "A convertible preferred stock has a par value of $100 and a conversion ratio of 4. If the issuer's common stock trades at $30, the parity (conversion) value of the preferred is:",
    "choices": [
      "$25",
      "$100",
      "$120",
      "$130"
    ],
    "answerIndex": 2,
    "rationale": "Parity value equals conversion ratio × common stock price = 4 × $30 = $120. The preferred is therefore trading 'in the money' relative to par. Choice A reflects the conversion price ($100/4 = $25), not parity value, which is a common trap.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "17287d52821a",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Which statement best describes a sponsored ADR program?",
    "choices": [
      "Created by a U.S. depositary bank without involvement of the foreign issuer",
      "Established by the foreign issuer in cooperation with a single depositary bank",
      "A program in which the foreign issuer guarantees U.S. dividend amounts",
      "A program restricted to qualified institutional buyers under Rule 144A"
    ],
    "answerIndex": 1,
    "rationale": "Sponsored ADRs are established by the foreign issuer with one selected depositary bank under a deposit agreement; the issuer typically bears the costs and provides financial information. Choice A describes an unsponsored ADR, which is set up by one or more banks without the issuer's involvement.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "medium",
    "id": "866a21a28d37",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following is generally TRUE regarding voting rights of an ADR holder?",
    "choices": [
      "ADR holders may vote the underlying foreign shares directly at the foreign company's meetings",
      "ADR holders have no economic interest in the underlying shares and therefore no voting interest",
      "ADR holders may instruct the depositary bank how to vote the underlying shares, subject to the deposit agreement",
      "ADR holders automatically receive double voting rights to compensate for currency risk"
    ],
    "answerIndex": 2,
    "rationale": "ADR holders typically pass voting instructions through the depositary bank, which then votes the underlying shares on their behalf in accordance with the deposit agreement. Choice A is incorrect because the depositary bank — not the ADR holder — is the registered owner of the underlying shares.",
    "citation": {
      "source": "OTHER",
      "ref": "Solomon Series 65"
    },
    "difficulty": "medium",
    "id": "98209ce66b53",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Statutory voting differs from cumulative voting for common stock in that statutory voting:",
    "choices": [
      "Allows shareholders to concentrate all votes on a single director",
      "Requires shareholders to allocate one vote per share, per director seat",
      "Is mandated by the Investment Advisers Act of 1940",
      "Eliminates the need for a quorum at shareholder meetings"
    ],
    "answerIndex": 1,
    "rationale": "Under statutory voting, a holder of N shares may cast up to N votes for each open seat, but cannot stack them on one candidate. Cumulative voting (choice A) is the alternative system that lets minority shareholders concentrate votes to elect at least one director.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "0d3693f23b79",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "All of the following are typical features of preferred stock EXCEPT:",
    "choices": [
      "A stated dividend rate",
      "Priority over common stock in dividend payment",
      "A maturity date at which par value is repaid",
      "Priority over common stock in liquidation"
    ],
    "answerIndex": 2,
    "rationale": "Preferred stock is a perpetual equity security and does not have a maturity date, although it may be callable. The other three features — fixed dividend, dividend priority, and liquidation priority over common — are standard. Choice C confuses preferred stock with debt, which does mature.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "d5b999d9d7b1",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "An investor wants exposure to a German pharmaceutical company but does not want to open a foreign brokerage account or trade in euros. Which security is BEST suited?",
    "choices": [
      "A direct purchase of the company's ordinary shares on the Frankfurt exchange",
      "A sponsored Level II or III ADR of the company listed on the NYSE or Nasdaq",
      "A U.S. Treasury note",
      "An interest-only stripped bond"
    ],
    "answerIndex": 1,
    "rationale": "Sponsored Level II/III ADRs trade on U.S. exchanges in U.S. dollars, are SEC-registered, and provide exposure to foreign equities without requiring foreign-market access. Choice A would expose the investor to currency conversion, foreign-market settlement, and foreign brokerage requirements — exactly what the investor wishes to avoid.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "medium",
    "id": "4962ae2878c0",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Participating preferred stock allows holders to:",
    "choices": [
      "Vote on all matters submitted to common shareholders",
      "Receive additional dividends beyond the stated rate when corporate earnings exceed specified thresholds",
      "Convert their shares to debt at the issuer's option",
      "Participate only in stock splits, not cash dividends"
    ],
    "answerIndex": 1,
    "rationale": "Participating preferred receives the stated preferred dividend AND shares with common in additional distributions when profits exceed defined levels — a feature that adds upside potential. Choice A confuses participating preferred with voting rights, which it does not normally confer.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "d09e3b2a52af",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Callable preferred stock is most attractive to issuers when:",
    "choices": [
      "Interest rates rise after issuance",
      "Interest rates fall after issuance",
      "The common stock price rises sharply",
      "The issuer's credit rating declines"
    ],
    "answerIndex": 1,
    "rationale": "When market rates fall, the issuer can call the high-coupon preferred and refinance with a lower-coupon issue, reducing dividend cost. Choice A reverses the relationship — rising rates make the existing low-coupon preferred cheap for the issuer, so there is no incentive to call.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "c7584868e873",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "A convertible preferred stock has a conversion price of $25 and a par value of $100. The conversion ratio is:",
    "choices": [
      "2 shares of common per preferred",
      "4 shares of common per preferred",
      "25 shares of common per preferred",
      "100 shares of common per preferred"
    ],
    "answerIndex": 1,
    "rationale": "Conversion ratio = par / conversion price = $100 / $25 = 4. Each preferred share can therefore be converted into 4 common shares. Choice C confuses conversion price with conversion ratio, a common error.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "72e9b4990e17",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "If the preferred stock in the previous question (par $100, conversion price $25) is trading at $110 and the common stock is at $26, the preferred is trading:",
    "choices": [
      "At a discount to its parity value",
      "At a premium over its parity value",
      "At parity",
      "Below par"
    ],
    "answerIndex": 1,
    "rationale": "Parity value = 4 × $26 = $104. The preferred is at $110, which is $6 above parity, so it trades at a premium over parity (reflecting the value of the conversion option and the fixed dividend). Choice A would be true only if the preferred traded below $104.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "4840da37196e",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Which equity security typically offers investors the LEAST income volatility but the HIGHEST sensitivity to changes in long-term interest rates?",
    "choices": [
      "Common stock",
      "Floating rate preferred stock",
      "Fixed-rate (straight) preferred stock",
      "Convertible preferred stock"
    ],
    "answerIndex": 2,
    "rationale": "Straight preferred has a fixed dividend (low income volatility) but, like a long-duration bond, its price moves inversely and significantly with long-term rates. Choice B has stable price because the dividend resets, which precisely reduces — not increases — its rate sensitivity.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "d0fbb7fabd17",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Preemptive rights, when granted to common shareholders, allow them to:",
    "choices": [
      "Buy newly issued shares before the public offering, in proportion to their existing holdings, to avoid dilution",
      "Receive priority in dividend payments over preferred shareholders",
      "Force the company to redeem their shares at fair market value",
      "Vote on every transaction undertaken by the board of directors"
    ],
    "answerIndex": 0,
    "rationale": "Preemptive rights protect existing shareholders from ownership dilution by allowing them to maintain their pro rata stake in any new equity issuance. Choice B is wrong because preferred always has dividend priority over common — preemptive rights do not change the order of dividend payments.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "df50df7d6b6f",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "A non-cumulative preferred stock pays a stated 5% annual dividend. The board passes (skips) the dividend in Year 1. In Year 2, the board declares the regular preferred dividend and a common dividend. Preferred holders are entitled to receive:",
    "choices": [
      "Two years of preferred dividends before any common dividend",
      "Only the Year 2 preferred dividend; the Year 1 dividend is permanently lost",
      "The Year 1 dividend in arrears, plus interest",
      "Nothing, because the Year 1 skip extinguishes all future preferred dividends"
    ],
    "answerIndex": 1,
    "rationale": "On non-cumulative preferred, a skipped dividend is gone forever — only the current-year dividend must be paid before common dividends. Choice A would be correct only if the preferred were cumulative, which is the cumulative feature's defining benefit.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "8cfb060d7478",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Which document is filed with the SEC by the depositary bank to register ADRs in connection with a sponsored program?",
    "choices": [
      "Form 10-K",
      "Form F-6",
      "Form 13D",
      "Form U4"
    ],
    "answerIndex": 1,
    "rationale": "Form F-6 is the SEC registration form specifically used to register ADRs against deposited foreign shares. Choice A is the annual report for U.S. domestic issuers and is unrelated to ADR registration; it does not register the receipts themselves.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "hard",
    "id": "106d0716510e",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "An investor compares the dividend yield on a 6% straight preferred stock and the after-tax cash flow on a corporate bond paying the same coupon, both held by an individual taxpayer. The preferred is generally:",
    "choices": [
      "More tax-favored to the individual because qualified preferred dividends may be taxed at long-term capital-gains rates",
      "Less tax-favored than the bond because preferred dividends are always taxed as ordinary income",
      "Identical in tax treatment to the bond's interest",
      "Tax-exempt for any individual U.S. investor"
    ],
    "answerIndex": 0,
    "rationale": "Most domestic preferred dividends meet the IRS 'qualified dividend' tests and are taxed at preferential long-term capital-gains rates for individuals, whereas bond interest is taxed as ordinary income. Choice B incorrectly states preferred dividends are always ordinary; that is wrong for qualified dividends to individuals.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "hard",
    "id": "14ebdab4eb72",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following BEST explains why convertible preferred stock typically has a lower stated dividend rate than otherwise comparable straight preferred from the same issuer?",
    "choices": [
      "The conversion privilege has value to the holder, who accepts a lower dividend in exchange for the equity-upside option",
      "Convertible preferred ranks ahead of straight preferred in liquidation, justifying a lower dividend",
      "Convertible preferred is always insured by the SIPC",
      "Federal law caps the dividend rate on convertibles at 75% of straight preferred"
    ],
    "answerIndex": 0,
    "rationale": "The embedded option to convert into common stock has value, so investors accept a lower dividend on the convertible than on the comparable non-convertible preferred. Choice B is incorrect; convertible preferred does not rank ahead of straight preferred — they typically share the same priority.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "008a85ddbb44",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "An auction rate preferred stock has its dividend reset every 7, 28, or 35 days through a Dutch auction. If an auction fails (insufficient bidders), the holder typically:",
    "choices": [
      "Has the shares automatically redeemed at par by the issuer",
      "Continues to hold an illiquid security with the dividend resetting to a contractual maximum (penalty) rate",
      "Is paid the dividend by the SEC's failed-auction guarantee fund",
      "Loses all dividend rights until a successful auction occurs"
    ],
    "answerIndex": 1,
    "rationale": "When an auction fails, the security does not automatically liquidate; instead, the holder is locked in until the next auction (or successful refinancing) and the rate resets to a predetermined maximum (penalty) rate. Choice A is incorrect because there is no automatic redemption — many holders learned this painfully during the 2008 ARS market freeze.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "3c926d4f9caf",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Which statement about Level I, II, and III ADRs is TRUE?",
    "choices": [
      "Only Level I ADRs are registered with the SEC; Levels II and III are exempt",
      "Level I ADRs trade over the counter, Level II ADRs are listed on a U.S. exchange, and Level III ADRs are used to raise new capital in the U.S.",
      "Level III ADRs trade only on foreign exchanges",
      "Level II ADRs are restricted to qualified institutional buyers under Rule 144A"
    ],
    "answerIndex": 1,
    "rationale": "The standard categorization is: Level I = OTC pink-sheet ADRs with limited SEC reporting; Level II = exchange-listed, full SEC reporting; Level III = exchange-listed AND used by the foreign issuer to raise new capital in a U.S. public offering. Choice A reverses the registration requirements — Levels II and III have MORE SEC obligations than Level I.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "hard",
    "id": "351de7466e88",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "An issuer's capital structure shows: 10,000,000 shares authorized, 6,000,000 issued, and 500,000 held in treasury. The number of shares outstanding is:",
    "choices": [
      "10,000,000",
      "6,000,000",
      "5,500,000",
      "4,000,000"
    ],
    "answerIndex": 2,
    "rationale": "Outstanding shares = issued - treasury = 6,000,000 - 500,000 = 5,500,000. Only outstanding shares are held by public investors, vote, and receive dividends. Choice B confuses 'issued' with 'outstanding' — issued includes treasury shares the company has bought back.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "8764faf5961b",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Compared to common stock, preferred stock generally exhibits:",
    "choices": [
      "Higher long-term price appreciation potential",
      "More stable dividend income but limited capital appreciation",
      "Greater voting influence on corporate matters",
      "Higher claim priority than secured creditors in bankruptcy"
    ],
    "answerIndex": 1,
    "rationale": "Preferred stock is bond-like: it pays a fixed dividend and trades within a narrower price band, so income is more stable but appreciation is capped. Choice A reverses the relationship; common stock — not preferred — is the equity security designed for capital appreciation.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "41291527f7f9",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following is the MOST likely reason an investor would prefer ADRs over directly purchasing the underlying foreign shares?",
    "choices": [
      "ADRs eliminate all currency risk inherent in foreign investing",
      "ADRs settle, trade, and pay dividends in U.S. dollars on U.S. markets, simplifying access for U.S. investors",
      "ADRs are guaranteed by the U.S. Treasury",
      "ADRs receive favorable tax treatment that ordinary foreign shares do not"
    ],
    "answerIndex": 1,
    "rationale": "The principal benefit of an ADR is convenience: U.S. investors get dollar-denominated trading and dividends, U.S.-style settlement, and SEC disclosure for sponsored programs. Choice A is wrong — although the trade is in dollars, the underlying value reflects the foreign share, so currency risk is NOT eliminated.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "346b337faed2",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "An investor holds 1,000 shares of a 5% non-cumulative preferred stock with $50 par. The board pays only half the stated dividend in Year 1 and a full common dividend in Year 2. In Year 2, before paying common, the issuer must pay the preferred holder:",
    "choices": [
      "$1,250 (Year 1 shortfall plus Year 2 full dividend)",
      "$2,500 (full Year 1 plus full Year 2 dividends)",
      "$2,500 (Year 2 full dividend only)",
      "Nothing — the partial Year 1 payment satisfied the preferred"
    ],
    "answerIndex": 2,
    "rationale": "Annual preferred dividend per share = 5% × $50 = $2.50, so 1,000 shares × $2.50 = $2,500 for Year 2. Because the stock is non-cumulative, the Year 1 shortfall is permanently lost. Choice A would be correct only for cumulative preferred — here the missed amount cannot be recovered.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "dba17d2d8068",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Which order BEST reflects the typical ranking of corporate securities in a bankruptcy liquidation, from highest to lowest priority?",
    "choices": [
      "Common stock, preferred stock, debentures, secured debt",
      "Secured debt, debentures, preferred stock, common stock",
      "Debentures, secured debt, common stock, preferred stock",
      "Preferred stock, secured debt, debentures, common stock"
    ],
    "answerIndex": 1,
    "rationale": "The priority is creditors first (secured ahead of unsecured), then preferred shareholders, then common shareholders. The correct sequence is therefore secured debt, debentures, preferred, common. Choice A inverts the order, putting equity ahead of debt.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "9f6a86a5f3d6",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "A floating rate preferred stock pays the 3-month Treasury bill rate plus 200 basis points, reset quarterly. Which of the following statements is MOST accurate?",
    "choices": [
      "The market price will move sharply with interest-rate changes because the dividend is fixed",
      "Holders bear reinvestment risk because the dividend can rise, but price stability is greater than for fixed-rate preferred",
      "The security is exempt from SEC registration as a money-market instrument",
      "The dividend is paid in arrears five years after issuance"
    ],
    "answerIndex": 1,
    "rationale": "Because the dividend resets toward current rates, the market price stays close to par; however, holders face reinvestment / income uncertainty since the dividend itself fluctuates. Choice A reverses the rate-sensitivity comparison — floating-rate preferred is LESS price-sensitive than fixed-rate preferred.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "90084bb62b10",
    "subtopicId": "2.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following is the BEST description of the depositary bank's role in a sponsored ADR program?",
    "choices": [
      "Acts as the underwriter of the foreign company's domestic shares",
      "Holds the underlying foreign shares on deposit, issues the ADRs, and handles dividend conversion and shareholder communications",
      "Insures the ADR holder against currency fluctuations",
      "Acts as the SEC's enforcement agent against the foreign issuer"
    ],
    "answerIndex": 1,
    "rationale": "The depositary bank is the central plumbing of an ADR: it holds the foreign shares (often via a custodian), issues ADRs, converts dividends to dollars, and forwards proxy materials to ADR holders. Choice A confuses the depositary's role with that of an investment bank in an underwriting, which is a different function.",
    "citation": {
      "source": "OTHER",
      "ref": "Solomon Series 65"
    },
    "difficulty": "medium",
    "id": "6064af517b4e",
    "subtopicId": "2.4",
    "reviewed": false
  }
];

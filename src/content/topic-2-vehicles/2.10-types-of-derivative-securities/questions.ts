import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Which of the following best describes a call option?",
    "choices": [
      "An obligation to buy the underlying asset at the strike price",
      "The right, but not the obligation, to buy the underlying asset at the strike price before expiration",
      "The right to sell the underlying asset at the strike price before expiration",
      "An obligation to sell the underlying asset at the current market price"
    ],
    "answerIndex": 1,
    "rationale": "A call option grants the holder the right (not the obligation) to buy a specified quantity of the underlying at the strike price on or before expiration. The 'right to sell' distractor describes a put, not a call, so it is incorrect.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "easy",
    "id": "d4db534d6dab",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes a put option?",
    "choices": [
      "The right to buy the underlying at the strike price",
      "The obligation to buy the underlying at the strike price",
      "The right, but not the obligation, to sell the underlying at the strike price before expiration",
      "The obligation to sell the underlying at the market price"
    ],
    "answerIndex": 2,
    "rationale": "A put option gives the owner the right, but not the obligation, to sell the underlying at the strike price on or before expiration. The 'right to buy' distractor describes a call, not a put.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "easy",
    "id": "d4f9936dede4",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Each standard equity option contract in the United States generally represents how many shares of the underlying stock?",
    "choices": [
      "1 share",
      "10 shares",
      "100 shares",
      "1,000 shares"
    ],
    "answerIndex": 2,
    "rationale": "Listed equity options are standardized to cover 100 shares of the underlying per contract, so a premium quoted at $2 represents $200 per contract. The '10 shares' distractor confuses the contract size with a typical odd-lot threshold and is not the standardized contract size.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "easy",
    "id": "e02cb5724c69",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "The price paid by the buyer of an option to the seller (writer) is called the:",
    "choices": [
      "Strike price",
      "Premium",
      "Margin",
      "Par value"
    ],
    "answerIndex": 1,
    "rationale": "The premium is the price paid by the option buyer to the writer in exchange for the rights conveyed by the contract. The 'strike price' distractor is the price at which the underlying may be bought or sold if the option is exercised, not the price of the option itself.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "easy",
    "id": "42ee5e2c57aa",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "An investor is long 1 XYZ September 50 call. XYZ is currently trading at $58. The call's intrinsic value is:",
    "choices": [
      "$0",
      "$3",
      "$8",
      "$58"
    ],
    "answerIndex": 2,
    "rationale": "Intrinsic value of a call equals the amount by which the underlying price exceeds the strike (max of zero), so $58 - $50 = $8. The '$0' distractor would be correct only if the call were at- or out-of-the-money, but this call is in-the-money.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "1652b243270b",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "An XYZ September 60 put has a premium of $5. XYZ is trading at $57. What is the put's time value?",
    "choices": [
      "$0",
      "$2",
      "$3",
      "$5"
    ],
    "answerIndex": 1,
    "rationale": "Intrinsic value of the put is $60 - $57 = $3, and time value equals premium minus intrinsic value, so $5 - $3 = $2. The '$3' distractor confuses intrinsic value with time value.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "cd3b8ee0ca10",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "An option whose strike price equals the current price of the underlying is described as:",
    "choices": [
      "In-the-money",
      "Out-of-the-money",
      "At-the-money",
      "Exercised"
    ],
    "answerIndex": 2,
    "rationale": "When the strike price equals the underlying's market price, the option is at-the-money and has no intrinsic value, only time value. The 'in-the-money' distractor requires the underlying to be above (call) or below (put) the strike, which is not the case here.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "easy",
    "id": "125b48f8267c",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Which type of option may be exercised by the holder only on the expiration date and not before?",
    "choices": [
      "American-style option",
      "European-style option",
      "Bermudan-style option",
      "Asian-style option"
    ],
    "answerIndex": 1,
    "rationale": "European-style options can only be exercised on the expiration date itself, while American-style options may be exercised at any time prior to and including expiration. The 'American-style' distractor is incorrect because it allows early exercise.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "medium",
    "id": "5055c1bd57e6",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Which of the following correctly describes the maximum loss for the buyer of a long call option?",
    "choices": [
      "Unlimited",
      "The strike price minus the premium",
      "The premium paid",
      "The market value of the underlying"
    ],
    "answerIndex": 2,
    "rationale": "A long call buyer can lose at most the premium paid, since the option simply expires worthless if it is not exercised. The 'unlimited' distractor describes the maximum loss of a short (uncovered) call writer, not the long holder.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "medium",
    "id": "da76afa1528e",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "An investor who writes (sells) an uncovered call option faces what maximum potential loss?",
    "choices": [
      "Limited to the premium received",
      "Limited to the strike price minus the premium",
      "Theoretically unlimited",
      "Limited to par value of the underlying"
    ],
    "answerIndex": 2,
    "rationale": "Because the underlying stock has no theoretical upper price limit, an uncovered call writer's loss is theoretically unlimited as the stock could rise indefinitely. The 'limited to the premium' distractor describes the maximum profit, not the maximum loss.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "medium",
    "id": "31a55b94b2fb",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "An investor writes a put on stock currently at $40 with a strike of $35 and receives $2 premium. What is the maximum loss?",
    "choices": [
      "$200",
      "$3,300",
      "$3,500",
      "Unlimited"
    ],
    "answerIndex": 1,
    "rationale": "The worst case is the stock falling to $0, forcing the writer to buy at $35; the loss is ($35 - $0) x 100 - $200 premium = $3,300 per contract. The '$3,500' distractor ignores the offsetting premium received.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "hard",
    "id": "39e0d14e3064",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Which entity is the issuer and guarantor of all listed standardized equity options in the United States?",
    "choices": [
      "Securities Investor Protection Corporation",
      "Options Clearing Corporation",
      "Financial Industry Regulatory Authority",
      "Commodity Futures Trading Commission"
    ],
    "answerIndex": 1,
    "rationale": "The Options Clearing Corporation issues, clears, and guarantees performance on listed U.S. options, eliminating counterparty risk between buyer and seller. The 'SIPC' distractor protects customer brokerage accounts in a broker-dealer failure but does not guarantee option performance.",
    "citation": {
      "source": "OTHER",
      "ref": "Options Clearing Corporation"
    },
    "difficulty": "medium",
    "id": "7ededcdcbbde",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Before a customer's first options trade, a broker-dealer must deliver which of the following disclosure documents?",
    "choices": [
      "Form ADV Part 2",
      "Options Disclosure Document (Characteristics and Risks of Standardized Options)",
      "Prospectus on Form S-1",
      "Statement of additional information"
    ],
    "answerIndex": 1,
    "rationale": "FINRA-member firms must deliver the OCC's Options Disclosure Document, also called Characteristics and Risks of Standardized Options, at or prior to approving the customer for options trading. The 'Form ADV Part 2' distractor is the IA brochure, not an options-risk disclosure.",
    "citation": {
      "source": "OTHER",
      "ref": "Options Disclosure Document"
    },
    "difficulty": "medium",
    "id": "3e61b39b91ed",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "A warrant is best described as:",
    "choices": [
      "A short-term right to sell stock back to the issuer",
      "A long-term right, issued by a corporation, to purchase its own stock at a specified price",
      "A debt instrument convertible into preferred stock",
      "An exchange-listed obligation to deliver commodities"
    ],
    "answerIndex": 1,
    "rationale": "A warrant is a long-term security issued directly by a corporation that gives the holder the right to buy the issuer's stock at a stated exercise price, typically over several years. The 'short-term right to sell' distractor confuses warrants with put options and misstates both the direction and the issuer.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "3e6e8b4b59bb",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Which of the following is a key difference between warrants and listed call options?",
    "choices": [
      "Warrants are issued by the OCC; calls are issued by the company",
      "Warrants are typically long-term and issued by the underlying corporation, while listed calls are short-term and issued by the OCC",
      "Warrants give the right to sell stock, while calls give the right to buy",
      "Warrants are settled in cash; listed calls are always physically settled"
    ],
    "answerIndex": 1,
    "rationale": "Warrants are issued by the corporation whose shares underlie them and typically have multi-year lives, while listed equity calls are standardized contracts created and guaranteed by the OCC and generally expire within months. The first distractor reverses the issuers and is incorrect.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "9cd20860a4b0",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "When a warrant is exercised, the issuing corporation typically:",
    "choices": [
      "Buys back outstanding shares from the open market",
      "Issues new shares of stock, which can dilute existing shareholders",
      "Pays the holder the cash difference between strike and market price only",
      "Transfers existing treasury bonds"
    ],
    "answerIndex": 1,
    "rationale": "Because warrants are issued by the company itself, exercise typically results in the issuance of new shares, which dilutes existing shareholders' ownership. The 'buys back outstanding shares' distractor describes a buyback program, not warrant exercise.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "6b56003cba82",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Warrants are most commonly attached to which of the following at original issuance?",
    "choices": [
      "Treasury bills",
      "Money market mutual funds",
      "Corporate bonds or preferred stock as a 'sweetener'",
      "Listed stock options"
    ],
    "answerIndex": 2,
    "rationale": "Issuers often attach warrants to corporate bonds or preferred stock as a sweetener to make the offering more attractive and lower the required coupon. The 'Treasury bills' distractor is incorrect because the U.S. Treasury does not issue warrants on its short-term bills.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "56e382e4d629",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Compared to a typical listed call option, a warrant generally has:",
    "choices": [
      "A shorter time to expiration",
      "A longer time to expiration",
      "The same standardized 9-month maximum life",
      "No expiration date"
    ],
    "answerIndex": 1,
    "rationale": "Warrants typically have multi-year lives, often five years or longer, while standard listed equity options usually expire within nine months (LEAPS aside). The 'shorter time to expiration' distractor reverses the actual relationship.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "8b152086bd9c",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Which of the following statements about warrants is TRUE?",
    "choices": [
      "Warrant holders receive dividends on the underlying stock",
      "Warrant holders have voting rights on the underlying stock",
      "Warrants are typically issued at an exercise price above the current market price of the stock",
      "Warrants must be exercised on the day they are issued"
    ],
    "answerIndex": 2,
    "rationale": "Warrants are usually issued out-of-the-money, with an exercise price set above the current market price of the stock at the time of issuance, giving them only time value initially. The 'receive dividends' distractor is wrong because warrant holders are not shareholders and have no claim to dividends until they exercise.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "83bcc7abf82d",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Under federal law, warrants and options are considered:",
    "choices": [
      "Commodities, not securities",
      "Securities under the Securities Act of 1933",
      "Insurance products, not securities",
      "Bank deposits"
    ],
    "answerIndex": 1,
    "rationale": "The Securities Act of 1933 expressly includes warrants, puts, calls, options, and similar instruments within the statutory definition of 'security'. The 'commodities, not securities' distractor confuses derivatives on physical commodities with options/warrants on securities, which are themselves securities.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 2(a)(1)"
    },
    "difficulty": "hard",
    "id": "22a8e6499ae1",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "A futures contract is best defined as:",
    "choices": [
      "A non-standardized over-the-counter agreement to exchange currencies",
      "A standardized, exchange-traded contract to buy or sell a specific quantity of an asset at a specified price on a future date",
      "An equity security with a delayed settlement",
      "A short-term debt instrument issued by the U.S. Treasury"
    ],
    "answerIndex": 1,
    "rationale": "Futures are standardized contracts traded on regulated exchanges that obligate the parties to buy or sell a specific quantity of an underlying at a stated price on a future delivery date. The 'non-standardized OTC' distractor describes a forward contract, not a futures contract.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "easy",
    "id": "593f3c3f26af",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Which of the following is the primary regulator of U.S. futures markets?",
    "choices": [
      "Securities and Exchange Commission",
      "Commodity Futures Trading Commission",
      "Options Clearing Corporation",
      "Federal Reserve Board"
    ],
    "answerIndex": 1,
    "rationale": "The Commodity Futures Trading Commission, created under the Commodity Exchange Act, is the federal regulator of U.S. futures and most commodity-derivative markets. The 'SEC' distractor is the federal regulator of securities, but jurisdiction over commodity futures rests with the CFTC.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "easy",
    "id": "6def6da96c6d",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Which self-regulatory organization performs registration and oversight of futures commission merchants and other futures industry professionals?",
    "choices": [
      "FINRA",
      "MSRB",
      "National Futures Association",
      "PCAOB"
    ],
    "answerIndex": 2,
    "rationale": "The National Futures Association is the SRO for the U.S. futures industry, registering futures professionals and enforcing rules under CFTC oversight. The 'FINRA' distractor is the SRO for broker-dealers in securities, not futures.",
    "citation": {
      "source": "OTHER",
      "ref": "National Futures Association"
    },
    "difficulty": "medium",
    "id": "91323b623760",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Which of the following best distinguishes a forward contract from a futures contract?",
    "choices": [
      "Forwards are exchange-traded, futures are OTC",
      "Forwards are standardized, futures are customizable",
      "Forwards are privately negotiated and OTC, while futures are standardized and exchange-traded",
      "Forwards are cleared by a central clearinghouse, futures are not"
    ],
    "answerIndex": 2,
    "rationale": "Forwards are private, customizable agreements traded over-the-counter, while futures are standardized contracts traded on exchanges and cleared through a central clearinghouse. The 'forwards are exchange-traded' distractor reverses the actual relationship.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "74bcc1660799",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "An investor who is 'long' a futures contract has agreed to:",
    "choices": [
      "Sell the underlying at the contract price on the delivery date",
      "Buy the underlying at the contract price on the delivery date",
      "Receive a cash dividend equal to the futures price",
      "Pay only the premium and abandon the contract"
    ],
    "answerIndex": 1,
    "rationale": "The long side of a futures contract agrees to buy (take delivery of) the underlying at the agreed price on the delivery date. The 'sell the underlying' distractor describes the short side of the contract.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "easy",
    "id": "e4f228d202fd",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Unlike an option, a futures contract:",
    "choices": [
      "Gives the holder the right but not the obligation to transact",
      "Obligates both parties to perform unless the contract is offset before delivery",
      "Has a premium paid up front",
      "Cannot be traded on an organized exchange"
    ],
    "answerIndex": 1,
    "rationale": "A futures contract obligates both the long and the short to perform at expiration unless the position is closed (offset) prior to delivery. The 'right but not obligation' distractor describes options, not futures.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "medium",
    "id": "b5000a6d7e5a",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Which of the following is generally true about margin in a futures contract?",
    "choices": [
      "It represents the full purchase price of the underlying",
      "It is a good-faith performance bond, typically a small percentage of contract value",
      "It is the same as Regulation T margin for stocks",
      "It is paid only by the buyer"
    ],
    "answerIndex": 1,
    "rationale": "Futures margin is a good-faith performance bond posted by both long and short to assure performance, and it is typically a small fraction of the contract's notional value. The 'full purchase price' distractor describes a cash market purchase, not the leveraged margin used in futures.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "medium",
    "id": "574370600b37",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Daily 'mark-to-market' in futures means that:",
    "choices": [
      "Gains and losses are settled in cash daily through the clearinghouse",
      "Position values are revised only at expiration",
      "Margin is required only when the contract expires",
      "Both parties must take physical delivery each day"
    ],
    "answerIndex": 0,
    "rationale": "Futures positions are marked to market daily, with gains credited and losses debited to each side's margin account through the clearinghouse, reducing counterparty risk. The 'only at expiration' distractor describes how forward contracts settle, not futures.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "2fc7169a0bb4",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Which of the following exchanges is most associated with the trading of standardized listed equity options in the United States?",
    "choices": [
      "Chicago Mercantile Exchange",
      "Chicago Board Options Exchange",
      "Intercontinental Exchange",
      "New York Mercantile Exchange"
    ],
    "answerIndex": 1,
    "rationale": "The Chicago Board Options Exchange pioneered listed standardized equity options and remains a leading U.S. options exchange. The 'Chicago Mercantile Exchange' distractor is best known for futures contracts, not listed equity options.",
    "citation": {
      "source": "OTHER",
      "ref": "Chicago Board Options Exchange"
    },
    "difficulty": "easy",
    "id": "532257ece91f",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Which exchange group is the largest U.S. marketplace for futures contracts on financial and agricultural products?",
    "choices": [
      "CBOE",
      "CME Group",
      "OCC",
      "FINRA"
    ],
    "answerIndex": 1,
    "rationale": "CME Group operates the largest U.S. derivatives marketplace and lists futures on interest rates, equity indices, currencies, energy, metals, and agricultural commodities. The 'CBOE' distractor is principally an options exchange, not the leading futures venue.",
    "citation": {
      "source": "OTHER",
      "ref": "CME Group"
    },
    "difficulty": "medium",
    "id": "504b4694706c",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "A wheat farmer who sells wheat futures to lock in a price for his upcoming harvest is engaging in:",
    "choices": [
      "Speculation",
      "Hedging",
      "Insider trading",
      "Arbitrage"
    ],
    "answerIndex": 1,
    "rationale": "Selling futures to offset the risk of a price decline in an asset the farmer already owns or will produce is a textbook hedge that reduces price risk. The 'speculation' distractor is incorrect because the farmer is reducing existing exposure, not taking on new risk to profit from price movement.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "39aa1639fc10",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Which of the following is NOT typical of a listed options contract relative to a futures contract?",
    "choices": [
      "Standardized strike prices and expirations",
      "Exchange listing and central clearing",
      "Both parties obligated to perform at expiration",
      "Buyer pays a premium up front to the seller"
    ],
    "answerIndex": 2,
    "rationale": "In an option, only the writer has an obligation to perform if assigned; the buyer holds a right and may let the option expire. The mutual obligation to perform at expiration is characteristic of futures, not options, making this the statement that is NOT typical of options.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "hard",
    "id": "bff867adfaf7",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "An index option, such as one based on the S&P 500, is typically settled in:",
    "choices": [
      "Physical delivery of the underlying basket of stocks",
      "Cash, based on the difference between the index value and the strike",
      "U.S. Treasury bills",
      "Shares of a specific company in the index"
    ],
    "answerIndex": 1,
    "rationale": "Broad-based index options are cash-settled because physical delivery of every component would be impractical; settlement reflects the difference between the index level and the strike. The 'physical delivery' distractor is typical of single-stock options, not index options.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "hard",
    "id": "68ea343bdca3",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "An investor who buys a put option on a stock she already owns is most likely seeking to:",
    "choices": [
      "Generate additional income while keeping upside",
      "Hedge against a decline in the stock's price",
      "Lock in dividends",
      "Increase voting rights in the company"
    ],
    "answerIndex": 1,
    "rationale": "Buying a put against a long stock position (a 'protective put') hedges downside risk by giving the investor the right to sell at the strike price. The 'generate additional income' distractor describes a covered call strategy, not a protective put.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "medium",
    "id": "7b8dc646a03b",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes the leverage feature of derivatives such as options and futures?",
    "choices": [
      "Investors must post the full notional value of the contract",
      "A small amount of capital can control a much larger underlying position, magnifying both gains and losses",
      "Returns are capped at the risk-free rate",
      "Counterparty risk is eliminated by FDIC insurance"
    ],
    "answerIndex": 1,
    "rationale": "Derivatives are inherently leveraged: the premium for an option, or the margin posted on a futures contract, is small relative to the notional underlying value, so percentage gains and losses are amplified. The 'capped at the risk-free rate' distractor misstates derivatives as low-return, low-risk instruments, which contradicts their leveraged nature.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "f57e2e671f00",
    "subtopicId": "2.10",
    "reviewed": false
  }
];

import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "A derivative security is best described as:",
    "choices": [
      "A debt instrument issued directly by a corporation",
      "A financial instrument whose value is derived from an underlying asset, index, or rate",
      "An equity claim entitling the holder to dividends and voting rights",
      "A pooled investment vehicle registered under the Investment Company Act of 1940"
    ],
    "answerIndex": 1,
    "rationale": "A derivative derives its value from something else - a stock, index, commodity, currency, or interest rate. The 'pooled investment vehicle' distractor describes mutual funds and other investment companies, which hold the underlying assets directly rather than deriving value from them.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "easy",
    "id": "1e99bddf7fe7",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "The buyer of a call option acquires which of the following?",
    "choices": [
      "The obligation to buy the underlying at the strike price",
      "The right, but not the obligation, to buy the underlying at the strike price",
      "The right, but not the obligation, to sell the underlying at the strike price",
      "The obligation to sell the underlying at the strike price"
    ],
    "answerIndex": 1,
    "rationale": "A call option gives the holder a right (not an obligation) to buy the underlying at the strike. The 'right to sell' distractor describes a put, not a call, so it is incorrect.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "easy",
    "id": "8176b5f5cb74",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "The buyer of a put option acquires which of the following?",
    "choices": [
      "The right to buy the underlying at the strike price",
      "The right to sell the underlying at the strike price",
      "The obligation to sell the underlying at the strike price",
      "The obligation to buy the underlying at the strike price"
    ],
    "answerIndex": 1,
    "rationale": "A put gives the holder the right to sell the underlying at the strike price. The 'obligation to sell' distractor describes the writer of a call, not the holder of a put.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "easy",
    "id": "d182b74446ab",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "A standard listed equity option contract in the United States typically covers how many shares of the underlying stock?",
    "choices": [
      "10 shares",
      "50 shares",
      "100 shares",
      "1,000 shares"
    ],
    "answerIndex": 2,
    "rationale": "A standard listed equity option represents 100 shares of the underlying. The '1,000 shares' distractor is wrong; that figure relates to bond par values, not option contract size.",
    "citation": {
      "source": "OTHER",
      "ref": "Chicago Board Options Exchange"
    },
    "difficulty": "easy",
    "id": "9d9b620f8cf7",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "The premium paid by a long option holder represents:",
    "choices": [
      "The maximum profit available on the trade",
      "The strike price of the contract",
      "The price paid to acquire the option contract",
      "Margin collateral posted with the clearinghouse"
    ],
    "answerIndex": 2,
    "rationale": "The premium is the price the buyer pays the writer to obtain the option. The 'maximum profit' distractor inverts the relationship; the premium is the buyer's maximum loss, not maximum profit.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "easy",
    "id": "2731bb00323c",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "A call option on XYZ stock with a strike of $50 is in-the-money when the stock is trading at:",
    "choices": [
      "$45",
      "$50",
      "$55",
      "Any price - calls are always in the money"
    ],
    "answerIndex": 2,
    "rationale": "A call is in the money when the stock price exceeds the strike, so $55 > $50 qualifies. At $45 the call is out of the money because exercising to buy at $50 would be worse than buying in the open market.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "a2f81cd6682e",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "Which entity issues, guarantees, and clears all standardized listed equity options in the U.S.?",
    "choices": [
      "The Securities and Exchange Commission",
      "The Options Clearing Corporation",
      "FINRA",
      "The Federal Reserve Bank of New York"
    ],
    "answerIndex": 1,
    "rationale": "The Options Clearing Corporation (OCC) is the central counterparty that issues and guarantees performance on all listed U.S. options. The SEC is the regulator of the markets but is not itself the issuer or clearing agent for option contracts.",
    "citation": {
      "source": "OTHER",
      "ref": "Options Clearing Corporation"
    },
    "difficulty": "easy",
    "id": "0dd8ad79fa28",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "Before opening an options account at a broker-dealer, the firm must deliver to the customer a copy of:",
    "choices": [
      "Form ADV Part 2A",
      "The Options Disclosure Document (ODD)",
      "Form CRS only",
      "The fund's Statement of Additional Information"
    ],
    "answerIndex": 1,
    "rationale": "The ODD - 'Characteristics and Risks of Standardized Options' - must be delivered at or before account approval so the customer understands the risks. Form ADV Part 2A is the investment adviser brochure and has nothing to do with options account opening.",
    "citation": {
      "source": "OTHER",
      "ref": "Options Disclosure Document"
    },
    "difficulty": "easy",
    "id": "022b2973982f",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "A primary benefit of using derivatives is that they typically allow an investor to:",
    "choices": [
      "Eliminate all market risk from a portfolio",
      "Obtain leveraged exposure to an underlying with relatively little capital",
      "Earn a guaranteed rate of return regardless of market conditions",
      "Avoid all counterparty and credit risk"
    ],
    "answerIndex": 1,
    "rationale": "Leverage is a defining feature of derivatives: a small premium or margin deposit controls a much larger notional position. The 'eliminate all market risk' distractor is wrong; hedging can reduce risk but cannot eliminate it, and many derivative strategies actually increase risk.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "0f980b41bb74",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "When an investor buys a put on stock she already owns in order to limit downside, the strategy is called:",
    "choices": [
      "A covered call",
      "A protective put",
      "A naked put",
      "A short straddle"
    ],
    "answerIndex": 1,
    "rationale": "Buying a put against a long stock position locks in a floor selling price and is a protective put. A 'covered call' is the opposite construction - selling a call against long stock to generate income, not to floor losses.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "easy",
    "id": "6d84416c2358",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "A speculator who uses options instead of buying the underlying stock primarily seeks to:",
    "choices": [
      "Reduce the leverage of the position",
      "Magnify percentage returns through leverage while limiting the dollar outlay",
      "Earn the dividend on the underlying stock",
      "Acquire voting rights at a lower cost"
    ],
    "answerIndex": 1,
    "rationale": "Options provide leveraged exposure: a small premium controls 100 shares, so percentage gains can be much larger than holding the stock outright. The 'earn the dividend' distractor is wrong because an option holder is not the stockholder of record and receives no dividends.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "2485d0492d28",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "What is the maximum loss for an investor who is long one call option?",
    "choices": [
      "Unlimited",
      "The strike price minus the premium",
      "The premium paid",
      "The strike price times 100"
    ],
    "answerIndex": 2,
    "rationale": "A long call holder's worst case is that the option expires worthless, in which case she loses only the premium paid. 'Unlimited' is the maximum loss for a writer of an uncovered call, not for a buyer.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "medium",
    "id": "8c90b546edc2",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "What is the maximum potential loss for an investor who writes (sells) an uncovered (naked) call?",
    "choices": [
      "The premium received",
      "The strike price times 100",
      "Theoretically unlimited",
      "Zero, because the writer has already collected the premium"
    ],
    "answerIndex": 2,
    "rationale": "Because there is no theoretical ceiling on a stock's price, a naked call writer faces unlimited upside risk on the underlying. The 'premium received' distractor reflects the maximum gain, not loss; uncovered calls are among the riskiest option strategies.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "medium",
    "id": "b65262e0b6a9",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "What is the maximum loss for the buyer of a put option?",
    "choices": [
      "Unlimited",
      "The strike price minus the premium",
      "The premium paid",
      "The strike price times 100"
    ],
    "answerIndex": 2,
    "rationale": "A put buyer can lose only the premium paid; if the option expires out-of-the-money it simply lapses worthless. 'Strike price minus premium' describes the breakeven, not the maximum loss.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "medium",
    "id": "4379f5113987",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "An investor who writes a covered call on stock she owns gives up which of the following?",
    "choices": [
      "Most of the downside protection on her stock position",
      "Upside appreciation in the stock above the strike price",
      "All voting rights on the underlying stock",
      "Any future dividends on the underlying stock"
    ],
    "answerIndex": 1,
    "rationale": "If the stock rallies above the strike, the call will likely be exercised and the writer is forced to sell at the strike, capping upside participation. The 'downside protection' distractor is wrong - the only downside cushion the writer gets is the premium received; the strategy still carries most of the stock's downside risk.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "medium",
    "id": "3bb6972079a7",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "An XYZ 50 call is trading for a premium of $4 when XYZ stock is at $52. The intrinsic value of the call is:",
    "choices": [
      "$0",
      "$2",
      "$4",
      "$6"
    ],
    "answerIndex": 1,
    "rationale": "Intrinsic value of a call equals the stock price minus the strike when in-the-money: $52 - $50 = $2. The remaining $2 of the $4 premium is time value, which is a separate component and not the intrinsic value.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "7fdf25c72735",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "An XYZ 30 put is trading for a premium of $5 when XYZ stock is at $26. The intrinsic value of the put is:",
    "choices": [
      "$0",
      "$1",
      "$4",
      "$5"
    ],
    "answerIndex": 2,
    "rationale": "A put's intrinsic value is the strike minus the stock price when in-the-money: $30 - $26 = $4. The full $5 premium includes both intrinsic value ($4) and time value ($1), so $5 reflects the entire premium and not just intrinsic value.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "b9082c000495",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "An option's time value is best described as:",
    "choices": [
      "The portion of the premium that exceeds intrinsic value",
      "The strike price discounted at the risk-free rate",
      "The intrinsic value of an in-the-money option",
      "The difference between the bid and ask prices"
    ],
    "answerIndex": 0,
    "rationale": "Premium = intrinsic value + time value, so time value is whatever portion of the premium is not intrinsic. The 'intrinsic value of an ITM option' distractor confuses the two components; intrinsic value reflects how deep ITM the option is, while time value reflects the chance the option becomes more valuable before expiration.",
    "citation": {
      "source": "OTHER",
      "ref": "Black-Scholes Model"
    },
    "difficulty": "medium",
    "id": "8af281635a92",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "American-style and European-style options differ primarily in that:",
    "choices": [
      "American options trade only in the U.S., and European options trade only in Europe",
      "American options can be exercised at any time before expiration; European options can be exercised only at expiration",
      "American options pay dividends; European options do not",
      "European options have lower premiums by regulation"
    ],
    "answerIndex": 1,
    "rationale": "The distinction is exercise style, not geography: American style permits exercise on any day up to expiration, while European style permits exercise only on the expiration date. The 'trade only in...' distractor reflects a common misconception; both styles trade globally and on U.S. exchanges (e.g., index options are typically European style).",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "medium",
    "id": "6274e8505dc4",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "LEAPS are best described as:",
    "choices": [
      "Long-term equity anticipation securities - listed options with expirations greater than nine months",
      "Leveraged exchange-traded funds tracking equity indexes",
      "Bonds whose principal adjusts for inflation",
      "Cash-settled futures contracts on Treasury bonds"
    ],
    "answerIndex": 0,
    "rationale": "LEAPS are simply long-dated listed options, originally with expirations up to about three years out, allowing longer-horizon strategies. The 'leveraged ETFs' distractor confuses LEAPS with a different product entirely; LEAPS are options, not pooled funds.",
    "citation": {
      "source": "OTHER",
      "ref": "Chicago Board Options Exchange"
    },
    "difficulty": "medium",
    "id": "9e7c75cb949e",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "Listed broad-based stock index options (such as those on the S&P 500) most commonly settle:",
    "choices": [
      "By physical delivery of a basket of stocks",
      "In cash, based on the difference between the index value and the strike",
      "In cash, only at the writer's election",
      "By delivery of an ETF tracking the index"
    ],
    "answerIndex": 1,
    "rationale": "Index options are cash-settled because physical delivery of every stock in a broad index would be impractical; the writer pays the in-the-money amount in cash. The 'physical delivery' distractor describes equity options, where delivery of 100 shares is the norm.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "medium",
    "id": "efb626fa53e4",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "A U.S. importer that will owe euros in 90 days can hedge currency risk by:",
    "choices": [
      "Selling euro futures or buying a euro call option",
      "Buying euro futures or buying a euro call option",
      "Selling a euro put option only",
      "Buying U.S. dollar futures denominated in euros"
    ],
    "answerIndex": 1,
    "rationale": "The importer is short euros (will need to buy them later) and is hurt if the euro strengthens; buying euro futures or a euro call locks in or caps the purchase cost. 'Selling euro futures' is the wrong direction - that hedges someone who will receive euros in the future, not someone who will pay them.",
    "citation": {
      "source": "OTHER",
      "ref": "Chicago Mercantile Exchange"
    },
    "difficulty": "medium",
    "id": "bf0219a59db1",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "In a plain-vanilla interest rate swap, the two counterparties typically exchange:",
    "choices": [
      "A fixed-rate cash flow stream for a floating-rate cash flow stream on a notional principal",
      "Principal amounts in two different currencies",
      "Equity returns for a debt return",
      "Commodity prices for cash"
    ],
    "answerIndex": 0,
    "rationale": "An interest rate swap exchanges a fixed for a floating cash flow stream computed on a notional amount that itself is not exchanged. The 'principal amounts in two different currencies' distractor describes a currency swap, not a plain-vanilla interest rate swap.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "16997b36f269",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "Counterparty (credit) risk is generally a significantly greater concern in:",
    "choices": [
      "Listed equity options cleared by the OCC",
      "Over-the-counter forwards and swaps",
      "Index options cleared by the OCC",
      "Exchange-traded futures cleared by a central counterparty"
    ],
    "answerIndex": 1,
    "rationale": "OTC derivatives are bilateral contracts without a central guarantor, so each party bears the risk that the other defaults. Listed options and exchange-traded futures are guaranteed by a central clearinghouse (OCC for options, an exchange CCP for futures), substantially reducing counterparty risk.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "572f1654f187",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "Initial margin posted on a futures contract is best described as:",
    "choices": [
      "The full purchase price of the underlying commodity",
      "A good-faith performance bond required to enter the position",
      "A loan from the broker to buy the underlying",
      "A non-refundable premium paid to the seller"
    ],
    "answerIndex": 1,
    "rationale": "Futures margin is a performance bond that secures the trader's daily mark-to-market obligations, not a partial payment for goods. The 'loan from the broker' distractor confuses futures margin with Reg T equity margin; futures margin is collateral, not borrowed funds.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "medium",
    "id": "e0a116083b73",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "The notional value of a derivative contract refers to:",
    "choices": [
      "The market value of the contract today",
      "The face amount of the underlying on which payments are calculated",
      "The premium paid to acquire the contract",
      "The margin posted with the clearinghouse"
    ],
    "answerIndex": 1,
    "rationale": "Notional is the reference amount used to compute cash flows (e.g., $10 million notional in an interest rate swap), and it usually is not exchanged. The 'market value' distractor is different - market value is typically far smaller than notional and changes daily as prices move.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "1857724213e8",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "An investor holding a diversified equity portfolio worried about a near-term market decline can most directly hedge by:",
    "choices": [
      "Buying calls on a broad equity index",
      "Buying puts on a broad equity index",
      "Selling puts on a broad equity index",
      "Writing covered calls on Treasury bonds"
    ],
    "answerIndex": 1,
    "rationale": "Long index puts gain value when the index falls, offsetting losses on the long equity portfolio - a classic protective put hedge. 'Selling puts' would be the wrong direction; that strategy benefits when the market is flat or rising and adds to losses if the market drops.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "medium",
    "id": "be00cab34d6e",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "The principal economic role played by speculators in derivative markets is to:",
    "choices": [
      "Eliminate price volatility",
      "Provide liquidity and assume risks that hedgers wish to transfer",
      "Guarantee delivery of physical commodities",
      "Set the regulated price of the underlying"
    ],
    "answerIndex": 1,
    "rationale": "Speculators take the other side of hedgers' trades, supplying liquidity and bearing price risk in exchange for expected profit. The 'eliminate volatility' distractor inverts reality - speculation can dampen or amplify volatility, but its function is risk transfer, not volatility elimination.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "28542a0634cd",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "Forwards differ from exchange-traded futures primarily in that forwards are:",
    "choices": [
      "Standardized and traded on an exchange",
      "Customized OTC contracts that carry significant counterparty risk",
      "Cleared centrally and marked to market daily",
      "Regulated by the SEC under the Investment Company Act of 1940"
    ],
    "answerIndex": 1,
    "rationale": "Forwards are bilateral, customizable OTC contracts, so terms can be tailored but counterparty risk is borne directly by the parties. The 'standardized and exchange-traded' distractor describes futures, which are standardized and centrally cleared.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Exchange Act"
    },
    "difficulty": "medium",
    "id": "4edc1e91d56c",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "ABC stock is at $40. An investor buys an ABC 45 call for $1 and writes an ABC 45 call expiring on the same date. The position is best described as:",
    "choices": [
      "A long straddle",
      "A protective put",
      "A flat (closed) position",
      "A bull call spread"
    ],
    "answerIndex": 2,
    "rationale": "Buying and writing the same strike and expiration produces offsetting rights and obligations and effectively closes the position. A 'long straddle' would require simultaneously buying a call and a put at the same strike, not buying and writing the same call.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "medium",
    "id": "bb043b9be1d6",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "Under U.S. federal securities law, listed options are generally treated as:",
    "choices": [
      "Commodities only, regulated solely by the CFTC",
      "Securities, falling within the SEC's regulatory authority",
      "Banking products, regulated by the Federal Reserve",
      "Insurance contracts subject to state insurance law"
    ],
    "answerIndex": 1,
    "rationale": "The Securities Act of 1933 expressly includes options on securities within the definition of a 'security,' bringing them under SEC jurisdiction. The 'commodities only' distractor is wrong because security options are SEC-regulated; the CFTC's jurisdiction covers commodity futures and most swaps, not equity options.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 2(a)(1)"
    },
    "difficulty": "medium",
    "id": "d3bb53f57db1",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "The Black-Scholes option pricing model takes into account all of the following inputs EXCEPT:",
    "choices": [
      "The current price of the underlying",
      "The strike price",
      "The expected dividends paid by the option writer",
      "The volatility of the underlying"
    ],
    "answerIndex": 2,
    "rationale": "The Black-Scholes inputs are the underlying price, strike, time to expiration, risk-free rate, and volatility - not 'dividends paid by the option writer.' Option writers do not pay dividends to holders; if the underlying pays dividends, that is captured by an extension of the model, not as a writer payment.",
    "citation": {
      "source": "OTHER",
      "ref": "Black-Scholes Model"
    },
    "difficulty": "hard",
    "id": "95b112997167",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "An option's delta is most accurately described as:",
    "choices": [
      "The expected change in the option's price for a $1 change in the underlying",
      "The annualized volatility of the underlying",
      "The probability that the option will be assigned",
      "The portion of the premium attributable to time value"
    ],
    "answerIndex": 0,
    "rationale": "Delta measures sensitivity of option price to changes in the underlying - approximately $0.50 of price change per $1 move for an at-the-money option. The 'annualized volatility' distractor describes vega's input (or implied volatility itself), not delta.",
    "citation": {
      "source": "OTHER",
      "ref": "Black-Scholes Model"
    },
    "difficulty": "hard",
    "id": "beeb8e8f34ba",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "Theta in option pricing primarily reflects:",
    "choices": [
      "The rate at which an option loses time value as expiration approaches",
      "The sensitivity of the option to a change in the underlying price",
      "The sensitivity of the option to a change in volatility",
      "The change in delta as the underlying price changes"
    ],
    "answerIndex": 0,
    "rationale": "Theta is the time-decay measure: with all else constant, an option's value erodes as it approaches expiration, generally accelerating in the final weeks. The 'sensitivity to underlying price' distractor describes delta, not theta.",
    "citation": {
      "source": "OTHER",
      "ref": "Black-Scholes Model"
    },
    "difficulty": "hard",
    "id": "183780da32f8",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "An investor is simultaneously long one ABC call and short one ABC put with the same strike and expiration. This synthetic position behaves most similarly to:",
    "choices": [
      "Short stock",
      "Long stock",
      "A long straddle",
      "A short straddle"
    ],
    "answerIndex": 1,
    "rationale": "Long call plus short put at the same strike replicates the payoff profile of long stock - a key result of put-call parity. A long straddle would be long call plus long put (not short put), so that distractor describes a different strategy entirely.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "6ff7f64603ee",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "Basis risk in a futures hedge refers to the risk that:",
    "choices": [
      "The futures contract is non-transferable",
      "The futures price and the spot (cash) price of the underlying do not converge as expected",
      "The clearinghouse will default",
      "The underlying commodity will be delisted"
    ],
    "answerIndex": 1,
    "rationale": "Basis is the cash price minus the futures price; basis risk is the chance this relationship moves unfavorably, leaving a hedge imperfect. The 'clearinghouse will default' distractor describes counterparty/clearing risk, which is a separate, distinct type of derivative risk.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "hard",
    "id": "85eb31af4453",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "An investor sells a put on XYZ with a $50 strike and sets aside $5,000 in cash to buy 100 shares if assigned. This strategy is best described as:",
    "choices": [
      "A naked put",
      "A cash-secured put",
      "A protective put",
      "A short straddle"
    ],
    "answerIndex": 1,
    "rationale": "Setting aside enough cash to honor potential assignment makes the short put 'cash-secured,' eliminating the leverage of a naked put. A 'naked put' has no cash or short stock backing the obligation, which is precisely what is not the case here.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "difficulty": "hard",
    "id": "1bdd71afeea0",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "stem": "A defining operational feature of exchange-traded futures - that helps mitigate counterparty risk - is:",
    "choices": [
      "Negotiated terms tailored to each customer",
      "Daily mark-to-market settlement of gains and losses through margin accounts",
      "Quarterly cash settlement after the option expires",
      "Physical delivery on the trade date"
    ],
    "answerIndex": 1,
    "rationale": "Futures positions are marked to market each day, with gains and losses moved between margin accounts so unpaid exposure does not build up. 'Negotiated, tailored terms' describes forwards (OTC), not standardized futures.",
    "citation": {
      "source": "OTHER",
      "ref": "Chicago Mercantile Exchange"
    },
    "difficulty": "hard",
    "id": "f50cd4d7b4b5",
    "subtopicId": "2.11",
    "reviewed": false
  }
];

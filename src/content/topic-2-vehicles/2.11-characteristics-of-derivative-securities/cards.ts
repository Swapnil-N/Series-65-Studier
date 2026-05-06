import type { Card } from "../../../types/content";

export const cards: Card[] = [
  {
    "front": "What is a derivative security?",
    "back": "A derivative is a financial instrument whose value is derived from the price of an underlying asset, index, or rate such as a stock, commodity, interest rate, or currency. Common derivatives include options, futures, forwards, swaps, rights, and warrants.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "0af7fc52c652",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "What right does the holder of a call option have?",
    "back": "The call holder has the right, but not the obligation, to buy the underlying asset at the strike price on or before expiration. The holder pays a premium for this right.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "a5fd9a60f797",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "What right does the holder of a put option have?",
    "back": "The put holder has the right, but not the obligation, to sell the underlying asset at the strike price on or before expiration. The holder pays a premium for this right.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "933710f84286",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "What is the obligation of an option writer (seller)?",
    "back": "The writer must perform if the holder exercises: a call writer must deliver shares at the strike, and a put writer must purchase shares at the strike. The writer receives the premium in exchange for assuming this obligation.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "ecd5a2c308e0",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Define an option premium.",
    "back": "The premium is the price the buyer pays the writer to acquire the option contract. It represents the maximum loss for the holder and the maximum gain for the writer.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "1b5c3ae14a90",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "How many shares does one standard listed equity option contract represent?",
    "back": "One standard listed equity option contract represents 100 shares of the underlying stock. Premiums quoted per share are therefore multiplied by 100 to find the dollar cost of one contract.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "1ecb5f7ea12b",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Distinguish American-style from European-style options.",
    "back": "American-style options can be exercised at any time up to and including expiration; European-style options can be exercised only at expiration. Most listed equity options are American-style and most broad-based index options are European-style.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "6b3ea0b9f8b9",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Define the intrinsic value of an option.",
    "back": "Intrinsic value is the amount by which an option is in-the-money: max(0, market - strike) for a call and max(0, strike - market) for a put. Out-of-the-money and at-the-money options have zero intrinsic value.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "597becce8b6f",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Define the time value (extrinsic value) of an option.",
    "back": "Time value equals the option's premium minus its intrinsic value. It reflects the probability the option will gain intrinsic value before expiration and decays toward zero as expiration approaches.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "4d8fb0a325df",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Maximum loss for the buyer of a call or put?",
    "back": "The maximum loss for a long call or long put is limited to the premium paid. If the option expires out-of-the-money the holder simply lets it expire worthless.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "b7d33447d18f",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Maximum loss for an uncovered (naked) call writer?",
    "back": "The maximum loss is theoretically unlimited because the underlying's price has no upper bound. The writer must deliver shares at the strike regardless of how high the market price rises.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "8f88c6513e9c",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Maximum loss for an uncovered put writer?",
    "back": "The maximum loss equals the strike price minus the premium received, times 100 shares per contract, because the stock can fall only to zero. The writer is obligated to buy worthless stock at the strike.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "463037b202b3",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Role of the Options Clearing Corporation in listed options markets?",
    "back": "The OCC issues, guarantees, and clears every listed option traded on U.S. exchanges. By acting as central counterparty to both sides of each trade it effectively eliminates counterparty default risk for holders and writers.",
    "citation": {
      "source": "OTHER",
      "ref": "Options Clearing Corporation"
    },
    "id": "57597a25f024",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "What disclosure document must be delivered before a customer is approved for options trading?",
    "back": "The Options Disclosure Document, formally titled 'Characteristics and Risks of Standardized Options,' must be provided at or before account approval. It outlines the mechanics, risks, and tax aspects of standardized options.",
    "citation": {
      "source": "OTHER",
      "ref": "Options Disclosure Document"
    },
    "id": "5e7a6e5f9763",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Distinguish a forward contract from a futures contract.",
    "back": "A forward is a customized, privately negotiated OTC contract that carries counterparty default risk. A futures contract is standardized, exchange-traded, and centrally cleared with daily mark-to-market margin requirements.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "id": "11f3dfa3eb21",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "What is a swap?",
    "back": "A swap is a derivative contract in which two counterparties exchange cash flows over time, such as a fixed-for-floating interest rate swap or a currency swap. After Dodd-Frank, many standardized swaps must be centrally cleared and reported.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "id": "405d79ae2a3b",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Distinguish a warrant from a stock right.",
    "back": "Warrants are long-term (often multi-year) instruments commonly attached to bond or preferred stock issues as sweeteners and let the holder buy shares at a stated price. Rights are short-term (typically 30-45 days) and issued to existing shareholders so they can maintain proportional ownership in a new stock offering.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 2(a)(1)"
    },
    "id": "e844f23104b4",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Distinguish a warrant from a listed call option.",
    "back": "Warrants are issued by the underlying corporation, typically have multi-year lives, and exercise creates new shares (causing dilution). Listed calls are issued by the OCC, have short lives, and exercise transfers existing shares without dilution.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "570fcd5f7896",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Primary benefits of using derivatives in a portfolio?",
    "back": "Derivatives enable hedging (transferring price risk to a willing counterparty), speculation with leverage, income generation such as covered call writing, exposure to markets that are otherwise hard to access, and price discovery.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "d1414bd97090",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Primary risks of investing in derivatives?",
    "back": "Key risks include leverage that magnifies P&L, total loss of premium for option buyers, theoretically unlimited loss for naked call writers, counterparty risk in OTC contracts, liquidity risk in thinly traded series, and complexity that creates suitability concerns.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "c90105c1350f",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Costs an investor incurs when trading exchange-listed options?",
    "back": "Costs include the premium paid by buyers, commissions, the bid-ask spread, margin or collateral requirements imposed on writers, and taxes on realized gains. Frequent rolling or repositioning of contracts compounds these frictions.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "a1cc895438c5",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "When is a call option 'in-the-money' versus a put?",
    "back": "A call is in-the-money when the market price of the underlying exceeds the strike. A put is in-the-money when the market price is below the strike. In both cases the option has positive intrinsic value.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "a32c4e4448dd",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Define a covered call.",
    "back": "A covered call is the simultaneous ownership of 100 shares of the underlying and the writing of one call against those shares. It generates premium income and caps upside at the strike, with downside cushioned only by the premium received.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "580c4c8efdcf",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Breakeven at expiration for a long call with strike $50 and premium $3?",
    "back": "Breakeven equals strike plus premium, so $50 + $3 = $53. The underlying must close above $53 at expiration for the holder to net a profit.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "0aeefde8f3bc",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Breakeven at expiration for a long put with strike $50 and premium $3?",
    "back": "Breakeven equals strike minus premium, so $50 - $3 = $47. The underlying must close below $47 at expiration for the holder to net a profit.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "0a312c1e1746",
    "subtopicId": "2.11",
    "reviewed": false
  },
  {
    "front": "Which pricing model is most commonly cited for valuing European-style options?",
    "back": "The Black-Scholes model is the standard closed-form valuation framework for European options. Inputs are the underlying price, strike, time to expiration, risk-free rate, and volatility; extensions handle dividends.",
    "citation": {
      "source": "OTHER",
      "ref": "Black-Scholes Model"
    },
    "id": "02f45c6761b8",
    "subtopicId": "2.11",
    "reviewed": false
  }
];

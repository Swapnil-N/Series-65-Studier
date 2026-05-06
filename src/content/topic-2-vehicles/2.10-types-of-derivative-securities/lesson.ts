import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Derivative Securities: Options, Warrants, and Futures",
  "bodyMd": "A derivative is a financial instrument whose value is *derived* from another asset — a stock, an index, a bond, a commodity, or a currency. The Series 65 outline names three derivative types you must recognize: options, warrants, and futures. The exam tests your ability to define each one, identify its parties and terms, and distinguish a security from a non-security. You will not be asked to price exotic strategies or construct multi-leg hedges, but you will be asked which contracts are exchange-traded, who clears them, and which regulator has jurisdiction.\n\n### What Is a Derivative?\n\nA derivative gets its value from an underlying asset; the contract itself is just a bundle of rights or obligations referencing that asset. Among the three named in the outline, options and warrants give the holder a *right* to buy or sell, while a futures contract creates a two-sided *obligation* to buy or sell. Options and warrants are securities under Section 2(a)(1) of the Securities Act of 1933, which expressly lists any \"option\" or \"warrant on a security\" in its definition. Futures contracts on physical commodities, by contrast, are *not* securities — they are commodity interests regulated by the Commodity Futures Trading Commission under the Commodity Exchange Act. That single distinction reappears throughout the exam: it determines who registers the product, who supervises sales practices, and which anti-fraud regime applies.\n\n### Options: Calls and Puts\n\nA standardized listed option is a contract that gives its buyer the right, but not the obligation, to buy or sell 100 shares of an underlying stock at a fixed **strike price** at any time before expiration (American style) or only on the expiration date (European style). A **call** gives the right to buy; a **put** gives the right to sell. The buyer pays a **premium** up front, and that premium is the buyer's maximum loss if the option expires out of the money. The seller (writer) collects the premium and takes on a corresponding obligation: a call writer must deliver shares at the strike if assigned, and a put writer must buy shares at the strike if assigned.\n\nThe four basic positions are:\n\n- **Long call** — bullish; profits if the stock rises above $K + \\text{premium}$.\n- **Long put** — bearish; profits if the stock falls below $K - \\text{premium}$.\n- **Short (uncovered) call** — bearish/neutral; loss is theoretically unlimited because the stock has no ceiling.\n- **Short put** — bullish/neutral; maximum loss is $K - \\text{premium}$ per share if the stock falls to zero.\n\nListed equity options in the United States trade on exchanges such as the Chicago Board Options Exchange (CBOE) and are cleared by the Options Clearing Corporation (OCC). The OCC interposes itself as the buyer to every seller and the seller to every buyer, eliminating counterparty credit risk. Before a broker-dealer or investment adviser opens an options account for a customer, the firm must deliver the Options Disclosure Document (ODD) — the OCC publication formally titled *Characteristics and Risks of Standardized Options*.\n\nThe **intrinsic value** of an option is what it would be worth if exercised right now:\n\n$$\\text{Call intrinsic value} = \\max(S - K, 0) \\qquad \\text{Put intrinsic value} = \\max(K - S, 0)$$\n\nwhere $S$ is the current stock price and $K$ is the strike. Anything the buyer pays above intrinsic value is **time value**, compensation for the chance the option moves further in the money before expiration.\n\n### Warrants\n\nA warrant looks like a long-dated call option, but it is issued by the company itself rather than written by another investor. A warrant gives its holder the right to buy newly issued shares directly from the issuer at a stated **subscription** (or exercise) price, on or before an expiration date that is usually measured in years — often five, ten, or longer. When a warrant is exercised, the issuer creates fresh shares and receives the exercise price as new capital, which **dilutes** existing shareholders. Listed options never create new shares; they merely transfer existing shares between investors through the OCC.\n\nThree other distinctions reliably show up on the exam:\n\n- **Strike at issuance.** A warrant's exercise price is typically set *above* the market price on the day of issuance, so the warrant starts out of the money. Listed call options offer strikes both above and below the current market price.\n- **Bundling.** Warrants are commonly attached to a bond or preferred-stock offering as a \"sweetener\" so the issuer can pay a lower coupon. The buyer can detach the warrant and trade it separately once the unit unbundles.\n- **Status as a security.** Both options and warrants are securities under Section 2(a)(1) of the Securities Act of 1933, so anti-fraud rules, suitability obligations, and investment-adviser fiduciary duties extend to them.\n\n### Futures\n\nA futures contract is a standardized, exchange-traded agreement to buy or sell a specific quantity of an underlying asset at a fixed price on a specified future date. Both sides are *obligated* — there is no premium and no walk-away right. Futures trade on designated contract markets such as the Chicago Mercantile Exchange (CME) and the Intercontinental Exchange (ICE), are regulated by the Commodity Futures Trading Commission (CFTC) under the Commodity Exchange Act, and have the National Futures Association (NFA) as their industry self-regulator.\n\nThe mechanics differ from options in three ways the exam likes to test:\n\n1. **Margin and mark-to-market.** Each side posts an initial *performance bond* — typically 5 to 15 percent of contract value, far smaller than a stock-margin requirement. Gains and losses are credited or debited daily through the clearinghouse, a process called *mark-to-market*. If the account falls below the maintenance level, a margin call is issued.\n2. **Standardization.** The exchange specifies contract size, deliverable grade, delivery month, and tick size; only the price is negotiated. A privately negotiated, OTC cousin called a **forward** is *customized*, is not cleared, and exposes both sides to counterparty credit risk. Forwards are not on the Series 65 outline but the contrast clarifies what makes a futures contract distinctive.\n3. **Settlement.** Most futures are closed out by entering an offsetting position before expiration; only a small fraction go to physical delivery. Stock-index and Eurodollar contracts settle in cash.\n\nUnderlying assets fall into broad buckets: agricultural (corn, wheat, soybeans), energy (crude oil, natural gas), metals (gold, silver, copper), financial (Treasury notes, Eurodollars, S&P 500 index), and currencies. Commodity futures are not securities. Security-based futures (single-stock futures and narrow-based index futures) sit in a joint SEC/CFTC regime, but Series 65 candidates are responsible mainly for the broader commodity-and-financial framework.\n\n### Worked Example\n\nAn investor buys one XYZ January 50 call for a premium of \\$3.00 per share. The standard contract covers 100 shares.\n\n- Total cost: $3.00 \\times 100 = \\$300$.\n- **Breakeven** at expiration: strike + premium $= 50 + 3 = \\$53$.\n- If XYZ closes at \\$58 on expiration, intrinsic value is $\\max(58 - 50, 0) = \\$8$ per share. The investor's profit is $(58 - 50 - 3) \\times 100 = \\$500$.\n- If XYZ closes at \\$48, the call expires worthless and the investor loses the full \\$300 premium — but no more.\n\nNow contrast a futures position. Suppose the same investor buys one CME corn futures contract (5,000 bushels) at \\$4.50/bu and posts \\$1,500 of initial margin. There is no premium and no walk-away right; the investor's account is debited or credited $5{,}000 \\times \\Delta P$ each day until the position is closed. A \\$0.30 drop in corn would cost $5{,}000 \\times 0.30 = \\$1{,}500$ — wiping out the entire initial margin and triggering a margin call. Same notional exposure to a price view, very different loss profile.\n\n### Summary\n\nOptions give the holder a right, warrants give the holder a right against the issuer, and futures impose a two-sided obligation. Listed options trade on exchanges such as the CBOE, are cleared by the OCC, and are introduced to customers through the ODD. Warrants are issued by the underlying company, typically expire in years rather than months, are usually struck above the market at issuance, and dilute existing shareholders when exercised. Futures are exchange-traded, standardized, marked to market daily, and regulated by the CFTC under the Commodity Exchange Act, with the NFA as the self-regulatory organization. Options and warrants are securities under Section 2(a)(1) of the Securities Act of 1933; commodity futures are not.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 2(a)(1)"
    },
    {
      "source": "OTHER",
      "ref": "Options Clearing Corporation"
    },
    {
      "source": "OTHER",
      "ref": "OCC"
    },
    {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    {
      "source": "OTHER",
      "ref": "Options Disclosure Document"
    },
    {
      "source": "OTHER",
      "ref": "ODD"
    },
    {
      "source": "OTHER",
      "ref": "Chicago Board Options Exchange"
    },
    {
      "source": "OTHER",
      "ref": "CBOE"
    },
    {
      "source": "OTHER",
      "ref": "Chicago Mercantile Exchange"
    },
    {
      "source": "OTHER",
      "ref": "CME"
    },
    {
      "source": "OTHER",
      "ref": "Intercontinental Exchange"
    },
    {
      "source": "OTHER",
      "ref": "ICE"
    },
    {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    {
      "source": "OTHER",
      "ref": "CFTC"
    },
    {
      "source": "OTHER",
      "ref": "Commodity Exchange Act"
    },
    {
      "source": "OTHER",
      "ref": "National Futures Association"
    },
    {
      "source": "OTHER",
      "ref": "NFA"
    }
  ],
  "subtopicId": "2.10",
  "reviewed": false
};

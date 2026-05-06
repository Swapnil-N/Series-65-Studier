import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Derivative Securities: Costs, Benefits, and Risks",
  "bodyMd": "A derivative is a contract whose value comes from another asset — a stock, an index, a commodity, an interest rate, or a currency. The Series 65 outline asks you to weigh the costs, benefits, and risks of using these contracts, not to design exotic strategies. The framework matters because the same instrument can be a prudent hedge in one client's portfolio and a reckless bet in another's. Before any retail customer trades a listed option, the broker-dealer or investment adviser must deliver the Options Disclosure Document — the OCC publication formally titled *Characteristics and Risks of Standardized Options* — precisely because the cost and risk profile of derivatives is not intuitive to a layperson.\n\n### Benefits: Leverage, Hedging, Income, and Price Discovery\n\nThe most-cited benefit of a derivative is **leverage**. A long call or a futures contract gives an investor exposure to the full notional value of an underlying asset for a small fraction of its price. A typical equity call premium runs a few percent of the underlying share price; a futures performance bond is usually 5 to 15 percent of contract value. The capital that would otherwise be tied up in stock is freed up to be invested elsewhere or held in cash, raising potential return on equity:\n\n$$\\text{Leverage ratio} = \\frac{\\text{Notional exposure}}{\\text{Capital posted}}$$\n\nA second benefit is **hedging**. A long stockholder can buy a protective put that pays off if the stock falls below the strike, capping downside while leaving upside intact. A wheat farmer can sell wheat futures months before harvest, locking in a sale price and shifting price risk to a speculator willing to bear it. The Commodity Exchange Act and the CFTC's market structure exist largely to support this hedging function.\n\nA third benefit is **income generation**. An investor who already owns 100 shares can write a covered call, collect the premium, and accept a cap on upside in exchange for current cash. Cash-secured put writing similarly produces income for an investor willing to be assigned shares at the strike.\n\nA fourth, more diffuse benefit is **price discovery**. Active futures and options markets aggregate the views of hedgers and speculators and produce forward prices that the broader economy uses for planning. Listed options on the CBOE and futures on the CME and ICE are publicly quoted, so anyone — not just contract participants — can read implied volatility and forward prices off a screen.\n\n### Costs: Premiums, Spreads, Margin, and Opportunity Cost\n\nThe buyer of an option pays a **premium** up front. That premium has two components — intrinsic value plus time value:\n\n$$\\text{Premium} = \\text{Intrinsic value} + \\text{Time value}$$\n\nThe intrinsic piece is what the option is worth if exercised right now; for a call, $\\max(S - K, 0)$. The time value is paid for the chance the option moves further into the money before expiration, and it is a real economic cost because it erodes to zero as expiration approaches.\n\nBeyond the premium, derivative users pay **commissions** on each contract and absorb a **bid-ask spread**. Listed-option spreads are typically wider in percentage terms than the spreads on the underlying stock, and they widen further for low-volume strikes and distant expirations. Round-tripping a position therefore costs more than the screen quote suggests.\n\nFutures users do not pay a premium, but they post **initial margin** (a performance bond) and may be required to top it up through daily mark-to-market. The capital posted is unavailable for other investments — an opportunity cost — and any cash borrowed to meet a margin call carries interest. OTC derivatives such as forwards and swaps embed a **counterparty credit charge** in the price, since the dealer must hold capital against the chance the customer defaults.\n\nFinally, every derivative carries a **regulatory and supervisory cost**. Firms must train representatives, document suitability under FINRA Rule 2111 and Regulation Best Interest where applicable, deliver the ODD before opening an options account, and meet recordkeeping requirements. Those costs are real even if the customer never sees them on a confirmation.\n\n### Risks: Loss Magnification, Time Decay, Assignment, and Counterparty Default\n\nThe leverage that makes derivatives attractive also magnifies losses. A 1 percent move in the underlying can wipe out a far larger percentage of the capital posted; the same arithmetic that produces an outsized gain produces an outsized loss in the other direction.\n\n**Time decay** is unique to options. Even if the underlying does not move, an option's time value erodes as expiration approaches, accelerating in the final weeks. A long-option buyer who is right about direction but early about timing can still lose the entire premium.\n\n**Assignment risk** affects writers. A call writer who is assigned must deliver shares at the strike; an uncovered (naked) call writer faces theoretically unlimited loss because there is no ceiling on the underlying's price. A put writer's maximum loss is large but bounded at $K - \\text{premium}$ per share, since the underlying cannot fall below zero.\n\n**Counterparty (credit) risk** is small for exchange-traded contracts because the Options Clearing Corporation for listed options, and the futures clearinghouse for futures, stand between buyer and seller and guarantee performance. It is a major risk for OTC forwards and swaps, which are bilateral contracts with no central guarantor.\n\n**Liquidity risk** is the chance that a contract cannot be closed at a fair price when the holder wants out. Front-month listed options on heavily traded names are liquid; deep out-of-the-money strikes and distant expirations often are not.\n\n**Basis risk** affects hedgers. A farmer using corn futures to hedge a local cash crop may find that local prices and futures prices do not move in lockstep — the residual gap is the basis. A perfect hedge eliminates price risk; an imperfect one trades price risk for basis risk.\n\n**Margin-call risk** is specific to futures and short options. Because futures are marked to market every day, an adverse move can drain the performance bond overnight and force the trader either to post more cash or to close the position at a loss.\n\n### Worked Example\n\nAn investor has \\$5,000 and is bullish on stock XYZ at \\$50. Consider two ways to express that view:\n\n- **Buy 100 shares.** Cost: $100 \\times 50 = \\$5{,}000$. A move to \\$55 produces a gain of \\$500, or 10 percent on capital. A move to \\$45 produces a loss of \\$500, or about –10 percent.\n- **Buy 10 XYZ 50-strike calls** at a \\$3 premium. Cost: $10 \\times 100 \\times 3 = \\$3{,}000$, with \\$2,000 left in cash. Each contract controls 100 shares, so the investor controls 1,000 shares' worth of upside. At expiration with XYZ at \\$55, intrinsic value is \\$5 and profit is $(5 - 3) \\times 1{,}000 = \\$2{,}000$ — a 67 percent gain on the \\$3,000 at risk. At \\$45, however, every call expires worthless and the full \\$3,000 premium is lost: –100 percent on the option capital, versus –10 percent on the stock.\n\nThe same directional view, leveraged by a derivative, produced more upside *and* more downside per dollar at risk. That asymmetry — together with the time-value cost embedded in the \\$3 premium — is the cost-benefit-risk trade in a single trade ticket.\n\n### Summary\n\nDerivatives offer leverage, hedging, income, and price discovery; they cost a premium plus spreads, commissions, margin opportunity cost, and disclosure overhead; and they impose risks of magnified loss, time decay, assignment, counterparty default (OTC), illiquidity, basis mismatch, and margin calls. Because that profile is not obvious to retail customers, options accounts must receive the OCC's *Characteristics and Risks of Standardized Options* before trading, and recommendations remain subject to suitability under FINRA Rule 2111 and to Regulation Best Interest where applicable.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
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
      "ref": "FINRA Rule 2111"
    },
    {
      "source": "SEC",
      "ref": "Regulation Best Interest"
    }
  ],
  "subtopicId": "2.11",
  "reviewed": false
};

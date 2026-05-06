import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Trading Securities: Orders, Accounts, and Execution",
  "bodyMd": "Securities transactions look simple from the outside — you click 'buy' and shares appear in your account — but the Series 65 expects you to know the layered system of orders, accounts, intermediaries, and rules that turns that click into a settled trade. This lesson walks through the vocabulary, the players, the costs, and the duty of best execution.\n\n### Order terminology and account types\n\n**Bids and offers.** A *bid* is the highest price a buyer is willing to pay; an *offer* (or *ask*) is the lowest price a seller is willing to accept. The difference between the two is the *bid-ask spread*. A retail buyer normally pays the offer and a retail seller normally receives the bid.\n\n**Order types.**\n- A *market order* executes immediately at the best available price. It guarantees execution but not price.\n- A *limit order* sets a maximum price for a buy or a minimum price for a sell. It guarantees price but not execution — if the market never reaches the limit, nothing trades.\n- A *stop order* (or stop-loss) becomes a market order once the stock trades at or through the stop price. It is used to cap losses or protect gains. A *stop-limit order* converts to a limit order at the trigger, which guarantees price but risks not filling.\n\nIf a buy stop is placed at $52$ on a stock currently at $50$, the order activates only when the price climbs to $52$, at which point a market order is sent. A sell stop at $48$ triggers only if the price falls to $48$.\n\n**Short sale.** A short seller borrows shares, sells them in the open market, and hopes to repurchase them later at a lower price. Because losses are theoretically unlimited (the stock can rise without bound), short sales are governed by Regulation SHO, which requires the broker to *locate* shares before executing and applies an alternative uptick rule during sharp single-day declines.\n\n**Cash and margin accounts.** In a *cash account* the customer pays in full by settlement. In a *margin account* the customer borrows part of the purchase price from the broker, secured by the securities. The Federal Reserve's *Regulation T* sets the initial margin requirement at 50% for most equities, so $\\$10{,}000$ of stock can be bought with $\\$5{,}000$ of equity and a $\\$5{,}000$ broker loan. Margin amplifies both gains and losses:\n\n$$\\text{Return on equity} = \\frac{P_1 - P_0 - \\text{interest}}{\\text{Initial equity}}$$\n\nA 10% rise in the stock price translates into roughly a 20% return on the investor's own money before interest, and a 10% drop translates into roughly a 20% loss — which is why a margin account requires a signed margin agreement, a hypothecation agreement, and disclosure of interest charges.\n\n**Principal vs. agency trades.** The Securities Exchange Act of 1934 defines a *broker* as one engaged in effecting transactions in securities for the account of others, and a *dealer* as one buying and selling securities for its own account. A firm acts as *agent* when it matches a customer with a counterparty and earns an explicit commission. It acts as *principal* when it sells securities out of its own inventory or buys them into inventory, earning a markup or markdown embedded in the price. A single firm typically does both, and must disclose the capacity on every trade confirmation under Rule 10b-10.\n\n**Payment for order flow.** A wholesale market maker may pay a retail broker a small per-share rebate to route customer orders to it. The arrangement subsidizes the broker (often allowing zero-commission trading) but creates a conflict — the broker has an incentive to route to the highest-paying venue rather than the venue offering the best price. SEC rules require disclosure of the practice on customer confirmations and in periodic order-routing reports, and Regulation Best Interest requires the broker to act in the retail customer's best interest notwithstanding the rebate.\n\n### Roles in the trading ecosystem\n\n**Introducing broker-dealers** open accounts, take orders, and make recommendations but do not hold customer cash or securities. They contract with a *clearing broker-dealer* — a larger firm that executes, clears, settles, and custodies the assets. The clearing firm runs the operational plumbing: matching trades, settling money, holding customer assets in segregated accounts under the SEC's customer protection rule (Rule 15c3-3), and meeting the Rule 15c3-1 net capital requirement.\n\n**Market makers** stand ready to buy at their bid and sell at their offer in specific securities, providing continuous liquidity. They earn the spread between bid and offer and bear inventory risk. On Nasdaq and other dealer markets, multiple market makers compete in the same security; on listed exchanges, designated market makers and electronic order books play similar roles.\n\n**Exchanges** are auction venues where orders are matched under transparent rules — the NYSE and Nasdaq are the largest U.S. examples. Regulation NMS coordinates the U.S. national market system across exchanges and electronic communication networks (ECNs), and its order-protection (trade-through) rule generally requires execution at the best displayed price across venues.\n\n**Custodians** hold customer cash and securities. For brokerage assets, the Securities Investor Protection Corporation (SIPC), created by the Securities Investor Protection Act of 1970, insures up to $\\$500{,}000$ per customer (including a $\\$250{,}000$ sub-limit for cash) if the broker-dealer fails. SIPC does *not* protect against market losses — only against missing assets.\n\n### Costs of trading\n\nThree cost concepts appear on the exam:\n\n1. **Commission** — the explicit fee charged on an *agency* trade. It is itemized on the confirmation.\n2. **Markup or markdown** — the difference between the dealer's cost (or current market) and the price charged to the customer on a *principal* trade. It is implicit in the price and disclosed on most equity confirmations under Rule 10b-10.\n3. **Spread** — the difference between the bid and the offer:\n\n$$\\text{Spread} = \\text{Offer} - \\text{Bid}$$\n\nWider spreads signal lower liquidity and higher implicit trading costs. FINRA's 5% Markup Policy is a guideline (not a hard cap) suggesting that aggregate markups, markdowns, and commissions should generally not exceed 5%; reasonableness depends on price, security type, availability, and market conditions.\n\n### Best execution\n\nA broker-dealer owes every customer the duty of *best execution* — the obligation to seek the most favorable terms reasonably available. This duty is grounded in common-law agency principles, Section 15 of the Securities Exchange Act of 1934, FINRA conduct rules, and Regulation Best Interest for retail recommendations. Best execution is evaluated on a 'regular and rigorous review' basis, weighing price, speed, likelihood of execution, size, and the character of the market — not a single trade in isolation. The NASAA Statement of Policy on Dishonest and Unethical Practices of Broker-Dealers and Agents treats execution failures and undisclosed markups as actionable misconduct.\n\n### Worked example\n\nA customer buys 200 shares of XYZ in a margin account at $\\$40$ through her introducing broker on an agency basis. The commission is $\\$0.02$ per share. The clearing firm settles the trade and custodies the position.\n\n- Total principal: $200 \\times \\$40 = \\$8{,}000$.\n- Commission: $200 \\times \\$0.02 = \\$4$.\n- Regulation T initial margin: $50\\% \\times \\$8{,}000 = \\$4{,}000$ of customer equity; the broker lends the remaining $\\$4{,}000$.\n\nSix months later, with the stock at $\\$48$, she instructs the broker to sell 100 shares at the market. The order is routed to a wholesale market maker that pays the broker for order flow. The displayed national best bid is $\\$47.99$, and her execution prints at $\\$47.99$. Best execution requires that her broker not have routed to a venue offering an inferior price merely to capture a higher rebate; Regulation NMS's order-protection rule reinforces the duty by prohibiting trade-throughs of the best displayed price.\n\nIf, instead, she had placed a sell limit at $\\$50$, the order would have rested until either the market reached $\\$50$ or she canceled. A sell stop at $\\$45$ would have done nothing while the stock rose but would have triggered a market sell if the stock later dropped to $\\$45$.\n\n### Summary\n\n- *Bid* is what buyers pay; *offer* is what sellers accept; the *spread* between them is an implicit cost.\n- *Market* orders prioritize execution, *limit* orders prioritize price, and *stop* orders trigger only after a price threshold is crossed.\n- *Cash* accounts settle in full; *margin* accounts borrow under Regulation T and amplify both returns and risk.\n- *Agency* trades earn a commission; *principal* trades earn a markup or markdown — capacity must be disclosed on the confirmation.\n- The execution chain runs introducing broker → clearing broker / custodian → market maker or exchange, with SIPC backstopping missing customer assets.\n- *Best execution* is an ongoing duty owed by every broker-dealer, judged by price, speed, likelihood of execution, and overall market quality.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "NASAA",
      "ref": "NASAA Statement of Policy on Dishonest and Unethical Practices of Broker-Dealers and Agents"
    },
    {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 3(a)(4)"
    },
    {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 3(a)(5)"
    },
    {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 15"
    },
    {
      "source": "SEC",
      "ref": "Regulation T"
    },
    {
      "source": "SEC",
      "ref": "Regulation NMS"
    },
    {
      "source": "SEC",
      "ref": "Regulation SHO"
    },
    {
      "source": "SEC",
      "ref": "Regulation Best Interest"
    },
    {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    {
      "source": "SEC",
      "ref": "Rule 15c3-3"
    },
    {
      "source": "SEC",
      "ref": "Rule 15c3-1"
    },
    {
      "source": "SEC",
      "ref": "Securities Investor Protection Act of 1970"
    },
    {
      "source": "OTHER",
      "ref": "SIPC"
    },
    {
      "source": "OTHER",
      "ref": "FINRA"
    },
    {
      "source": "OTHER",
      "ref": "Federal Reserve"
    }
  ],
  "subtopicId": "3.10",
  "reviewed": false
};

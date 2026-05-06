import type { Card } from "../../../types/content";

export const cards: Card[] = [
  {
    "front": "Define a bid in a quoted market for a security.",
    "back": "A bid is the highest price a buyer (typically a market maker or dealer) is currently willing to pay for a security. An investor selling 'at the market' sells at the prevailing bid.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation NMS"
    },
    "id": "46f6b355ca89",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "Define an offer (ask) in a quoted market for a security.",
    "back": "An offer, or ask, is the lowest price a seller is currently willing to accept for a security. An investor buying 'at the market' pays the prevailing ask.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation NMS"
    },
    "id": "c62321b28616",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "What is the bid-ask spread, and what does a wide spread typically signal?",
    "back": "The spread is the difference between the best bid and the best offer. A wide spread generally signals lower liquidity, thin trading volume, or greater dealer risk in the security.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation NMS"
    },
    "id": "c0a6dfafa293",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "What is the National Best Bid and Offer (NBBO)?",
    "back": "The NBBO is the highest displayed bid and lowest displayed offer for a security across all U.S. exchanges and trading venues. Under Regulation NMS, marketable customer orders must generally be executed at prices no worse than the NBBO.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation NMS"
    },
    "id": "22abfe8e68da",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "How does a market order execute, and what does it guarantee?",
    "back": "A market order is executed immediately at the best available price. It guarantees execution but not price; in fast or thin markets the fill can be far from the last quoted price.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "2e4465ae0b7b",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "How is a buy limit order priced relative to the current market, and what does it guarantee?",
    "back": "A buy limit is placed at or below the current market and executes only at the limit price or lower. It guarantees a maximum price but not execution.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "d0d45052154b",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "How is a sell limit order priced relative to the current market, and what does it guarantee?",
    "back": "A sell limit is placed at or above the current market and executes only at the limit price or higher. It guarantees a minimum price but not execution.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "c54af6c3e691",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "When is a buy stop order triggered, and how is it commonly used?",
    "back": "A buy stop is placed above the current market and is triggered when the stock trades at or through the stop price, after which it becomes a market order to buy. It is commonly used to protect a short position or to enter a position on upward momentum.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "94ab8f1d3c26",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "When is a sell stop order triggered, and what is its typical defensive use?",
    "back": "A sell stop is placed below the current market and is triggered when the stock trades at or through the stop price, after which it becomes a market order to sell. It is commonly used to limit losses on a long position.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "ddd2260c24f9",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "Distinguish a stop order from a stop-limit order.",
    "back": "Once triggered, a stop order becomes a market order, guaranteeing execution but not price. A stop-limit order becomes a limit order at the stated limit, guaranteeing price (within the limit) but not execution.",
    "citation": {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    "id": "bb227966b385",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "What is a short sale?",
    "back": "A short sale is the sale of a security the seller does not own, accomplished by borrowing the shares and delivering them to the buyer. The short seller profits if the price falls and the position can later be repurchased (covered) at a lower price.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation SHO"
    },
    "id": "8e1d52b7e4a0",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "What does Regulation SHO require before a broker-dealer accepts a short-sale order?",
    "back": "Reg SHO's locate rule requires the firm to have reasonable grounds to believe the security can be borrowed and delivered by settlement, and to mark the order long, short, or short-exempt. It also imposes close-out obligations on persistent fails-to-deliver.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation SHO"
    },
    "id": "942db5132827",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "What kinds of activity are permitted (and prohibited) in a cash account?",
    "back": "In a cash account the customer must pay in full for purchases by settlement and may not borrow from the broker-dealer. Short sales and uncovered options writing are prohibited in a cash account.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation T"
    },
    "id": "4ea6cc4b4d23",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "What is a margin account, and what document evidences the customer's pledge of securities?",
    "back": "A margin account permits the customer to borrow funds from the broker-dealer to purchase securities or to sell short, with securities in the account serving as collateral. The customer signs a hypothecation agreement permitting the firm to pledge those securities and pays interest on the debit balance.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation T"
    },
    "id": "c0d5cb8e923b",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "What is the Regulation T initial margin requirement on a marginable equity purchase?",
    "back": "Regulation T, administered by the Federal Reserve Board, currently requires the customer to deposit at least 50% of the purchase price of marginable equities. The remaining 50% may be financed by the broker-dealer.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation T"
    },
    "id": "87f40f54b528",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "How does FINRA's maintenance margin on a long equity position differ from Regulation T initial margin?",
    "back": "Regulation T sets the 50% initial deposit at the time of purchase, while FINRA maintenance margin requires the customer's equity to remain at least 25% of the long market value going forward. Most firms impose 'house' maintenance minimums above the 25% floor.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA"
    },
    "id": "11f9195e324b",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "Distinguish a principal trade from an agency trade.",
    "back": "In an agency trade the broker-dealer acts as a middleman between the customer and a third party and charges a commission. In a principal trade the firm trades from its own inventory, buying from or selling to the customer at a price that includes a markup or markdown.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "id": "de482ed22d2b",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "What is the difference between a markup and a commission?",
    "back": "A markup is the dealer's compensation built into the price when the firm acts as principal (selling from inventory above its cost). A commission is an explicit fee charged when the firm acts as agent on the customer's behalf. Both must be disclosed on the trade confirmation.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "id": "e916269ea317",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "What capacity-related disclosures must appear on a customer trade confirmation under Rule 10b-10?",
    "back": "The confirmation must disclose whether the broker-dealer acted as agent or principal, the trade and settlement dates, the price and quantity, the commission (when acting as agent), and the source and amount of any third-party remuneration such as payment for order flow.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "id": "835be5e16075",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "Define payment for order flow.",
    "back": "Payment for order flow is compensation a broker-dealer receives from a market maker or other execution venue in exchange for routing customer orders to that venue. It must be disclosed at account opening, annually, and on each trade confirmation.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "id": "300954d16c90",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "What is an introducing broker-dealer, and what does it not do?",
    "back": "An introducing broker-dealer maintains the customer relationship, takes orders, and may provide advice, but it does not hold customer cash or securities or perform clearance and settlement. It introduces accounts to a clearing firm under a fully-disclosed clearing agreement.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 3(a)(4)"
    },
    "id": "457031861b92",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "What functions does a clearing broker-dealer or custodian perform, and what rule governs the segregation of customer assets?",
    "back": "The clearing firm handles trade comparison, clearance and settlement, and custody of customer cash and fully-paid securities. SEC Rule 15c3-3 (the Customer Protection Rule) requires those customer assets to be segregated from the firm's own assets.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 15c3-3"
    },
    "id": "ae210b772806",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "What is a market maker, and how does it earn the spread?",
    "back": "A market maker is a dealer that continuously stands ready to buy and sell a security for its own account, posting firm two-sided quotes. Its profit comes primarily from the spread between the bid (where it buys) and the offer (where it sells).",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934"
    },
    "id": "af6984fcd123",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "What is a securities exchange, and how is it regulated?",
    "back": "An exchange is an SRO marketplace that brings together buyers and sellers of listed securities and is registered with and overseen by the SEC under the Securities Exchange Act of 1934. Examples include the NYSE and Nasdaq.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934"
    },
    "id": "59c4e5e0a0eb",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "What does the duty of best execution require of a broker-dealer handling a customer order?",
    "back": "Best execution requires a firm to use reasonable diligence to obtain the most favorable terms reasonably available, considering price, speed, likelihood of execution, and overall transaction cost. Firms must conduct regular and rigorous reviews of execution quality across competing venues.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2010"
    },
    "id": "7e337107b16d",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "front": "How does Regulation Best Interest relate to a broker-dealer's handling of retail customer orders?",
    "back": "Regulation BI requires a broker-dealer to act in the retail customer's best interest when recommending a securities transaction or account type, satisfying care, disclosure, conflict-of-interest, and compliance obligations. It supplements but does not replace the firm's separate duty of best execution.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation Best Interest"
    },
    "id": "1dfe2ec93853",
    "subtopicId": "3.10",
    "reviewed": false
  }
];

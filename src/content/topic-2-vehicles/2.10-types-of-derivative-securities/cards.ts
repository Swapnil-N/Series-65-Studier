import type { Card } from "../../../types/content";

export const cards: Card[] = [
  {
    "front": "Define a derivative security.",
    "back": "A derivative is a financial instrument whose value is derived from the price of an underlying asset, index, or reference rate (such as a stock, commodity, currency, or interest rate). Common examples include options, warrants, and futures contracts.",
    "citation": {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    "id": "334ba62b50a6",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "What is a call option?",
    "back": "A call option gives the holder the right, but not the obligation, to buy a specified quantity of an underlying asset at a fixed strike price on or before expiration. The buyer pays a premium to the writer for this right.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "0b5fd3d972de",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "What is a put option?",
    "back": "A put option gives the holder the right, but not the obligation, to sell a specified quantity of an underlying asset at a fixed strike price on or before expiration. The buyer pays a premium for this right.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "a0f2845289a4",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "What is the option premium?",
    "back": "The premium is the price the option buyer pays to the option writer (seller) for the rights conveyed by the contract. It represents the writer's maximum gain and the buyer's maximum loss.",
    "citation": {
      "source": "OTHER",
      "ref": "Options Disclosure Document"
    },
    "id": "5d1e83723eb5",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "What does the strike (exercise) price of an option represent?",
    "back": "The strike price is the fixed price at which the underlying asset can be bought (call) or sold (put) if the option is exercised. It is set when the contract is created and does not change.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "24107282d961",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "American-style vs European-style options.",
    "back": "American-style options can be exercised at any time up to and including expiration, while European-style options can be exercised only on the expiration date itself. Most listed equity options in the U.S. are American-style.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "a76976e9aac0",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "How many shares does one standard listed equity option contract cover?",
    "back": "One standard listed equity option contract represents 100 shares of the underlying stock. A premium quoted at $2 therefore costs $200 per contract.",
    "citation": {
      "source": "OTHER",
      "ref": "Chicago Board Options Exchange"
    },
    "id": "c9f54b2a500d",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Obligations of a call writer (short call).",
    "back": "The writer of a call is obligated to deliver (sell) the underlying asset at the strike price if the holder exercises. The writer's maximum gain is the premium received and, for an uncovered call, the loss potential is theoretically unlimited.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "a48e8ed9eb5d",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Obligations of a put writer (short put).",
    "back": "The writer of a put is obligated to buy the underlying asset at the strike price if the holder exercises. Maximum gain is the premium and maximum loss is the strike minus the premium (occurring if the underlying falls to zero).",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "f2db5f2fe147",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Intrinsic value of a call option.",
    "back": "Intrinsic value of a call equals the underlying price minus the strike price, but never less than zero. A call is in-the-money when the underlying trades above the strike.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "4be0ea69d3a6",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Intrinsic value of a put option.",
    "back": "Intrinsic value of a put equals the strike price minus the underlying price, but never less than zero. A put is in-the-money when the underlying trades below the strike.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "8a9e067cb7d2",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Breakeven for a long call at expiration.",
    "back": "Breakeven on a long call equals the strike price plus the premium paid. Above that level the buyer profits dollar-for-dollar; at or below the strike the entire premium is lost.",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "cc538b304f3a",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Breakeven for a long put at expiration.",
    "back": "Breakeven on a long put equals the strike price minus the premium paid. The buyer's maximum gain is the strike minus the premium (if the underlying goes to zero).",
    "citation": {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    "id": "14584447ef8b",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Define a warrant.",
    "back": "A warrant is a long-term security, typically issued by a corporation, that gives the holder the right to purchase the issuer's stock at a specified price for a specified period (often several years). Warrants are usually issued at an exercise price above the current market price.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 2(a)(1)"
    },
    "id": "f1bac26e392e",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "How are warrants commonly issued to investors?",
    "back": "Warrants are frequently attached to bond or preferred stock offerings as a 'sweetener' to make the issue more attractive. They may later be detached and trade separately in the secondary market.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "4e340644fd81",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Warrant vs call option — key distinctions.",
    "back": "Warrants are issued by the underlying corporation and dilute existing shareholders when exercised, while listed call options are created by market participants and do not affect share count. Warrants typically have multi-year (often 5-10 year) lives, whereas listed equity options usually expire within months.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "028227c5cbd0",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "What happens to share count when a warrant is exercised?",
    "back": "When a warrant is exercised, the issuing corporation issues new shares and receives the exercise proceeds, increasing shares outstanding and diluting existing shareholders. This is unlike a listed call, which involves the transfer of existing shares.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "9cdee6afc02a",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "What is a right (subscription right) and how does it differ from a warrant?",
    "back": "A subscription right is a short-term security (typically 30-45 days) granting existing shareholders the ability to buy new shares at a discount to maintain proportional ownership. Warrants are longer-lived and are usually issued at a price above the current market.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "928ecf6fc8bc",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Define a futures contract.",
    "back": "A futures contract is a standardized, exchange-traded agreement obligating the buyer to take delivery and the seller to make delivery of a specified quantity of an underlying commodity or financial instrument at a set price on a future date. Both parties are obligated to perform.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Exchange Act"
    },
    "id": "009d20628cba",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Futures contract vs option — fundamental obligation difference.",
    "back": "An option gives the buyer a right but no obligation, while a futures contract obligates both buyer and seller to perform at expiration unless the position is closed beforehand. A futures buyer therefore has unlimited loss exposure, unlike an option buyer.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "id": "8f2fb396e6fd",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Futures contract vs forward contract.",
    "back": "Futures are standardized contracts traded on regulated exchanges and cleared through a clearinghouse, while forwards are private, customized OTC agreements between two counterparties. Futures are marked to market daily; forwards generally settle only at maturity.",
    "citation": {
      "source": "OTHER",
      "ref": "Chicago Mercantile Exchange"
    },
    "id": "f2f76487b352",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Margin in futures trading.",
    "back": "Futures margin is a good-faith performance bond posted by both buyer and seller, typically a small percentage of contract value, not a loan. Initial margin is required to open a position and maintenance margin must be met to keep it open.",
    "citation": {
      "source": "OTHER",
      "ref": "Chicago Mercantile Exchange"
    },
    "id": "e3b7f2fdf58b",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "What does daily mark-to-market mean for futures?",
    "back": "At the end of each trading day, gains and losses on futures positions are credited or debited to the trader's margin account based on the day's settlement price. A margin call is issued if the account falls below the maintenance level.",
    "citation": {
      "source": "OTHER",
      "ref": "Chicago Mercantile Exchange"
    },
    "id": "454a50ed5610",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Which federal agency regulates U.S. futures markets?",
    "back": "The Commodity Futures Trading Commission (CFTC) is the federal agency that regulates U.S. futures and most derivatives markets under the Commodity Exchange Act. The SEC, by contrast, regulates securities such as equity options and warrants.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "id": "fe35b9a6a914",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Role of the National Futures Association (NFA).",
    "back": "The NFA is the industry-wide self-regulatory organization for the U.S. derivatives industry, including futures, swaps, and forex. It registers and oversees futures commission merchants, commodity pool operators, and commodity trading advisors.",
    "citation": {
      "source": "OTHER",
      "ref": "National Futures Association"
    },
    "id": "19c8f9a46c1c",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Role of the Options Clearing Corporation (OCC).",
    "back": "The OCC is the central clearinghouse for U.S.-listed options contracts, acting as guarantor and counterparty to every option trade. It also issues the Options Disclosure Document that must be delivered to customers before they trade options.",
    "citation": {
      "source": "OTHER",
      "ref": "Options Clearing Corporation"
    },
    "id": "76f47f1ec828",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "What is the Options Disclosure Document (ODD)?",
    "back": "The ODD, titled 'Characteristics and Risks of Standardized Options,' is a risk-disclosure booklet that must be delivered to a customer at or before approval of an options account. It explains how listed options work and the risks of various strategies.",
    "citation": {
      "source": "OTHER",
      "ref": "Options Disclosure Document"
    },
    "id": "2dbf71adbd68",
    "subtopicId": "2.10",
    "reviewed": false
  },
  {
    "front": "Typical underlyings for futures contracts.",
    "back": "Futures are written on physical commodities (such as oil, wheat, corn, gold, and livestock) and on financial instruments (such as Treasury bonds, stock indexes, currencies, and interest rates). Most positions are closed prior to delivery rather than physically settled.",
    "citation": {
      "source": "OTHER",
      "ref": "CME Group"
    },
    "id": "8e74f5ebcf98",
    "subtopicId": "2.10",
    "reviewed": false
  }
];

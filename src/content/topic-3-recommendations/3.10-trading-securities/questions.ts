import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "On a Level I quote of $50.00 - $50.10, the $50.00 figure represents what?",
    "choices": [
      "The bid - the highest price at which a market maker is currently willing to buy the security",
      "The offer - the price at which a market maker is willing to sell the security",
      "The midpoint at which retail orders must execute",
      "The previous day's closing price"
    ],
    "answerIndex": 0,
    "rationale": "By convention the bid is quoted first and the ask second. The bid is what a dealer will pay to BUY shares from a customer, which is therefore the price at which a customer can sell. Choice B is the top distractor; the offer (ask) is the higher number on the right ($50.10) at which a customer would BUY, not the $50.00 figure.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation NMS"
    },
    "difficulty": "easy",
    "id": "489dbfc62c28",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "When a customer wants to BUY a security at the prevailing market quote, which side of the quote does the customer pay?",
    "choices": [
      "The bid",
      "The offer (ask)",
      "The mark-to-market price",
      "The volume-weighted average price"
    ],
    "answerIndex": 1,
    "rationale": "Customers buy at the offer (ask) and sell at the bid; the dealer/market-maker captures the spread. Choice A is the most attractive distractor because students reverse the two sides, but the bid is what the dealer pays, not what a buying customer pays.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation NMS"
    },
    "difficulty": "easy",
    "id": "a80f893068f6",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "A market maker quotes XYZ at $24.85 - $25.00. The 'spread' on this quote is:",
    "choices": [
      "$24.85",
      "$25.00",
      "$0.15",
      "$49.85"
    ],
    "answerIndex": 2,
    "rationale": "The bid-ask spread is simply ask minus bid: $25.00 - $24.85 = $0.15, and represents the dealer's gross compensation on a round-trip principal trade. Choice D is the top distractor (it is the SUM, not the difference) and reflects a common arithmetic confusion.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation NMS"
    },
    "difficulty": "easy",
    "id": "c78a179e8d1d",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "A customer instructs her agent to 'buy 500 shares of ABC at the market.' This order will:",
    "choices": [
      "Execute immediately at the best available offer price",
      "Execute only if ABC trades at or below a stated limit",
      "Be triggered if ABC declines through a stop price",
      "Be held until the close and executed at the closing print"
    ],
    "answerIndex": 0,
    "rationale": "A market order prioritizes speed of execution over price - it fills immediately at the best available price (the offer for buys, the bid for sells). Choice B describes a buy limit order, which trades execution certainty for price certainty.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2010"
    },
    "difficulty": "easy",
    "id": "00a2cd904e2b",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Which feature distinguishes a limit order from a market order?",
    "choices": [
      "A limit order guarantees execution; a market order does not",
      "A limit order specifies a maximum price to pay or minimum price to accept; a market order does not",
      "A limit order can only be entered before the open; a market order can be entered any time",
      "A limit order is always a day order; a market order is always GTC"
    ],
    "answerIndex": 1,
    "rationale": "A limit order caps the buy price (or floors the sell price). It guarantees price but NOT execution; a market order is the opposite. Choice A is the most tempting distractor because it inverts the trade-off - market orders are what guarantee execution, not limit orders.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2010"
    },
    "difficulty": "easy",
    "id": "669d0d0295d3",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "An investor is short 200 shares of MNO at $40 and wants protection against a sharp rally. Which order is appropriate?",
    "choices": [
      "Sell limit at $45",
      "Sell stop at $35",
      "Buy stop at $45",
      "Buy limit at $45"
    ],
    "answerIndex": 2,
    "rationale": "To cap losses on a short position, the investor needs a buy order that triggers if the price RISES. A buy stop is placed ABOVE the current market and becomes a market order to buy once touched - covering the short. Choice D (buy limit) is the top distractor; a buy limit at $45 would fill at $45 OR LOWER and is therefore not a protective stop above the market.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2010"
    },
    "difficulty": "medium",
    "id": "510b2293ba85",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "A customer holds a long stock position purchased at $60 and now trading at $58. To limit further downside, the customer enters a sell stop at $55. What happens at $55?",
    "choices": [
      "The stop is triggered and the order becomes a market order to sell",
      "The order is cancelled because the stock has moved against the customer",
      "The order becomes a limit order good only at $55",
      "The order executes only if the stock trades back up through $55"
    ],
    "answerIndex": 0,
    "rationale": "A plain sell stop becomes a MARKET order once the stop price is touched on a transaction or quote, so the next available sale could occur below $55 in a fast market. Choice C describes a STOP-LIMIT order, not a plain stop; that is the most common point of confusion.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2010"
    },
    "difficulty": "medium",
    "id": "7eda6be1b01c",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "A customer enters a 'sell stop $30 limit $29.50' order on a stock currently trading at $32. Which statement is accurate?",
    "choices": [
      "The order will execute immediately at $32",
      "The order is invalid because the limit is below the stop",
      "The order will execute as a market sell when $30 trades",
      "When $30 is touched, the order becomes a limit order to sell at $29.50 or higher"
    ],
    "answerIndex": 3,
    "rationale": "A stop-limit converts to a LIMIT order (not a market order) once the stop is hit. With a $29.50 limit, the firm cannot sell below $29.50 - protecting against a fast-market gap, but at the cost of potentially not filling at all. Choice C is the top distractor because it confuses a stop-limit with a plain stop.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2010"
    },
    "difficulty": "medium",
    "id": "50e4b49548f7",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "A 'short sale' under SEC rules is best described as:",
    "choices": [
      "The sale of a security held in the customer's name in physical form",
      "The sale of a security the seller does not own, executed by borrowing the security to deliver to the buyer",
      "The sale of a security at a price below the prior trade",
      "The forced liquidation of a margin position by the broker-dealer"
    ],
    "answerIndex": 1,
    "rationale": "A short sale under Regulation SHO is the sale of a security the seller does not own (or does not deliver from a long position); the seller borrows shares to deliver and must later buy them back to close. Choice C is the top distractor because students confuse 'short' with 'down-tick' price movement, but those are unrelated concepts.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation SHO"
    },
    "difficulty": "easy",
    "id": "c8cde7b2f5b6",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Which of the following is the principal economic risk unique to a short seller?",
    "choices": [
      "Loss is limited to the amount initially invested",
      "The position cannot be closed before settlement",
      "Theoretical loss is unlimited because there is no ceiling on how high the price can rise",
      "Dividends paid by the issuer reduce the seller's tax basis"
    ],
    "answerIndex": 2,
    "rationale": "A long buyer can lose at most 100% of the price paid; a short seller's potential loss is unbounded because the stock can rise indefinitely while the seller still owes the borrowed shares. Choice D is misleading - the short seller actually OWES dividends to the lender (a cost, not a basis adjustment).",
    "citation": {
      "source": "SEC",
      "ref": "Regulation SHO"
    },
    "difficulty": "easy",
    "id": "085e2e39171f",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Before accepting a short sale order, a broker-dealer must comply with the 'locate' requirement, which means the firm must:",
    "choices": [
      "Have reasonable grounds to believe the security can be borrowed and delivered by the settlement date",
      "Verify the customer has sufficient cash equal to 100% of the short sale proceeds",
      "Confirm the issuer has not declared a stock dividend within the past 30 days",
      "Receive written approval from FINRA before entering the order"
    ],
    "answerIndex": 0,
    "rationale": "Regulation SHO Rule 203(b)(1) requires a 'locate' - reasonable grounds that the security can be borrowed - documented before any short sale is accepted, to curb naked shorting. Choice B is the top distractor; cash deposit is part of the Reg T short-sale margin requirement (typically 150% of market value), not the locate rule.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation SHO"
    },
    "difficulty": "medium",
    "id": "10efb9ed5075",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Under Regulation SHO's 'alternative uptick' restriction, short selling in a covered security is restricted for the remainder of the day and the following day after the security's price declines by what percentage from the prior day's closing price?",
    "choices": [
      "5%",
      "10%",
      "20%",
      "25%"
    ],
    "answerIndex": 1,
    "rationale": "Rule 201 (the 'circuit-breaker' or alternative uptick rule) is triggered by a 10% intraday decline; once triggered, short sales may only be executed at a price ABOVE the current national best bid for the rest of that day and all of the next session. The other percentages are common distractors but are not the regulatory threshold.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation SHO"
    },
    "difficulty": "hard",
    "id": "5ea260666953",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Which of the following is a defining feature of a CASH account?",
    "choices": [
      "The customer may borrow up to 50% of the purchase price from the broker-dealer",
      "Short sales are routinely permitted in cash accounts",
      "All purchases must be paid for in full by the settlement date and no credit is extended",
      "Customers must sign a hypothecation agreement before opening the account"
    ],
    "answerIndex": 2,
    "rationale": "In a cash account, the customer pays in full by settlement (T+1 for most equities); no credit is extended by the broker-dealer. Choice A describes a Regulation T margin account, not a cash account, and is the most common point of confusion.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation T"
    },
    "difficulty": "easy",
    "id": "8866054b5257",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Under Regulation T, what is the current initial margin requirement on a long purchase of a marginable equity security?",
    "choices": [
      "10%",
      "25%",
      "30%",
      "50%"
    ],
    "answerIndex": 3,
    "rationale": "The Federal Reserve Board's Regulation T sets initial margin on equities at 50% - the customer must deposit at least half of the purchase price. 25% is the FINRA MAINTENANCE minimum (not initial), which is the top distractor; 10% and 30% are not Reg T values.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation T"
    },
    "difficulty": "medium",
    "id": "9d9a9387044f",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "A customer's long margin account shows long market value of $40,000 and a debit balance of $18,000. The customer's equity is:",
    "choices": [
      "$58,000",
      "$22,000",
      "$18,000",
      "$8,000"
    ],
    "answerIndex": 1,
    "rationale": "Equity in a long margin account = LMV - debit balance = $40,000 - $18,000 = $22,000. Choice A is the top distractor; students sometimes ADD instead of subtracting the loan, which double-counts the borrowed money the customer does not own.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation T"
    },
    "difficulty": "medium",
    "id": "c437b2f24fa1",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "When a customer signs a margin agreement, the 'hypothecation agreement' authorizes the broker-dealer to:",
    "choices": [
      "Pledge the customer's margin securities as collateral for a bank loan to finance the customer's debit balance",
      "Lend the customer's fully paid securities to other customers for short sales",
      "Exercise discretion over the customer's account without further consent",
      "Charge management fees in lieu of commissions"
    ],
    "answerIndex": 0,
    "rationale": "Hypothecation = the customer pledges securities to the BD; rehypothecation = the BD repledges those securities to a bank to finance the customer's debit. Choice B describes a separate document - the loan consent / stock-loan agreement - which is OPTIONAL, not the hypothecation agreement itself.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 15c3-3"
    },
    "difficulty": "medium",
    "id": "c3f351f96adb",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "A trade in which the broker-dealer fills a customer's order from its own inventory, taking the other side of the trade, is known as a:",
    "choices": [
      "Agency trade",
      "Principal trade",
      "Riskless principal trade",
      "Soft-dollar trade"
    ],
    "answerIndex": 1,
    "rationale": "When the firm acts as a dealer for its own account it is a PRINCIPAL trade and the firm is compensated by a markup or markdown built into the price. Choice A (agency) is the top distractor; in an agency trade the firm is a broker matching the customer to the market and charges a separately disclosed commission.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "difficulty": "easy",
    "id": "7f101b218eda",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "When a broker-dealer executes a customer order by routing it to an exchange or another dealer and earning a commission, the firm is acting in what capacity?",
    "choices": [
      "Principal",
      "Investment adviser",
      "Agent (broker)",
      "Issuer"
    ],
    "answerIndex": 2,
    "rationale": "Acting as agent means the firm is a middleman; it does not take the other side of the trade and is compensated through a commission. Choice A is the most attractive distractor - principal capacity involves trading from the firm's own account and earning a markup or markdown, not a commission.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "difficulty": "easy",
    "id": "98ddd8978526",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Under SEC Rule 10b-10, a customer trade confirmation must disclose at or before completion of the transaction:",
    "choices": [
      "Whether the broker-dealer acted as agent or principal, and if as agent, the commission charged",
      "Only the total dollar amount of the transaction",
      "The identity of the contra-party in every trade",
      "Only the issuer's CUSIP and the trade date"
    ],
    "answerIndex": 0,
    "rationale": "Rule 10b-10 requires the confirmation to disclose capacity (agent or principal), commission (if agent), trade date, price, and other key terms - so the customer can evaluate the transaction and the firm's compensation. Choice C is wrong because the contra-party identity is generally NOT required to be disclosed to retail customers.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "difficulty": "medium",
    "id": "c3fa4275210c",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Which of the following correctly pairs the form of broker-dealer compensation with the trading capacity?",
    "choices": [
      "Markup - agency trade; commission - principal trade",
      "Commission - principal trade; markdown - agency trade",
      "12b-1 fee - principal trade; markup - agency trade",
      "Markup or markdown - principal trade; commission - agency trade"
    ],
    "answerIndex": 3,
    "rationale": "When the BD acts as principal it earns a markup (on a sale to the customer) or markdown (on a purchase from the customer); when acting as agent the BD charges a separately disclosed commission. Choice A is the top distractor because it inverts the pairing; this confusion is one of the most-tested points on the exam.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "difficulty": "medium",
    "id": "f241b8f6d1ac",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "In a principal transaction, a 'markup' is defined as:",
    "choices": [
      "The amount added to the prevailing market price when the dealer sells a security from its own inventory to a customer",
      "The commission charged when the firm acts as agent on an exchange",
      "The 12b-1 fee paid by mutual funds to selling broker-dealers",
      "The difference between net asset value and public offering price on a closed-end fund IPO"
    ],
    "answerIndex": 0,
    "rationale": "A markup is the dealer's profit added to the prevailing market price on a SELL to a customer (a markdown is the corresponding subtraction on a BUY from a customer). Choice B is the top distractor because students confuse the principal-side markup with the agency-side commission - the two are mutually exclusive on the same trade.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "difficulty": "easy",
    "id": "59f7c77bf37c",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "From the perspective of a market maker quoting both a bid and an offer, the bid-ask spread primarily represents:",
    "choices": [
      "A fee paid to the exchange for posting quotes",
      "The dealer's gross compensation for providing liquidity by committing capital",
      "Mandatory price improvement passed on to the retail customer",
      "A regulatory tax collected by the SEC"
    ],
    "answerIndex": 1,
    "rationale": "Market makers earn the spread by buying at the bid and selling at the offer. Wider spreads compensate them for the risk of holding inventory in less liquid names. Choice C is the opposite of reality; price improvement (filling INSIDE the spread) reduces, rather than represents, dealer compensation.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934"
    },
    "difficulty": "medium",
    "id": "2f0a87e8dafe",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "'Payment for order flow' (PFOF) describes which arrangement?",
    "choices": [
      "A customer pays an introducing broker an annual asset-based fee",
      "A clearing firm rebates margin interest to the introducing firm",
      "A wholesale market maker pays a retail broker-dealer for routing customer orders to that market maker for execution",
      "An exchange refunds listing fees to issuers based on traded volume"
    ],
    "answerIndex": 2,
    "rationale": "PFOF is compensation paid by an executing market maker to the broker-dealer that routes customer orders to it - common in equity options and increasingly in equities. Choice B is the top distractor because it sounds like an inter-firm payment, but it is unrelated to PFOF and concerns interest sharing, not order routing.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "difficulty": "medium",
    "id": "0e7c92b52630",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Which statement about payment for order flow is MOST accurate?",
    "choices": [
      "The existence and source of any payment for order flow must be disclosed on customer trade confirmations and on annual/quarterly disclosures",
      "PFOF is prohibited under Regulation NMS",
      "PFOF eliminates the broker-dealer's duty to seek best execution because the market maker has assumed that duty",
      "PFOF is permitted only on listed options, not equities"
    ],
    "answerIndex": 0,
    "rationale": "Rule 10b-10 and Rule 606 require BDs to disclose PFOF arrangements on confirmations and in periodic public reports; the BD ALSO retains its best-execution duty. Choice C is the top distractor - and a serious misconception - because best execution is non-delegable; the routing firm cannot outsource the duty.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "difficulty": "hard",
    "id": "7ffb2a548365",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "An 'introducing' broker-dealer is one that:",
    "choices": [
      "Holds customer funds and securities and issues all confirmations and statements",
      "Solicits and accepts customer orders but forwards them to a clearing firm for execution, settlement, and custody on a fully disclosed basis",
      "Is registered exclusively with state regulators and not with the SEC",
      "Acts only as an underwriter on initial public offerings"
    ],
    "answerIndex": 1,
    "rationale": "Introducing firms 'introduce' clients to a clearing firm under a fully disclosed clearing agreement - the clearing firm holds assets, settles trades, and produces statements. Choice A is the top distractor because it describes a SELF-CLEARING firm or the CLEARING side of a clearing arrangement, not an introducing firm.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 15"
    },
    "difficulty": "easy",
    "id": "d0ebbe20dfe2",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "A clearing broker-dealer (also called the 'carrying' firm) is generally responsible for which of the following on behalf of an introducing broker-dealer's customers?",
    "choices": [
      "Performing suitability reviews and recommending securities to retail customers",
      "Drafting the introducing firm's marketing materials and approving its principals",
      "Executing, clearing, and settling trades; holding customer cash and securities; issuing confirmations and statements",
      "Setting commission rates that the introducing firm must charge"
    ],
    "answerIndex": 2,
    "rationale": "The clearing/carrying firm is the back-office engine: it holds customer assets in custody and complies with Rule 15c3-3 (Customer Protection Rule), processes settlement, and issues required confirmations and account statements. Choice A is incorrect because suitability remains with the firm that has the customer relationship - typically the introducing firm.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 15c3-3"
    },
    "difficulty": "medium",
    "id": "b7a79cd04dc6",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "The primary regulatory function of a 'qualified custodian' for an investment adviser's client is to:",
    "choices": [
      "Hold client funds and securities in segregation, generating account statements that protect against the adviser's misappropriation",
      "Provide investment recommendations to the adviser's clients",
      "Vote proxies on behalf of the adviser's clients",
      "Calculate and bill the adviser's management fees"
    ],
    "answerIndex": 0,
    "rationale": "A qualified custodian (typically a bank or broker-dealer) safekeeps client assets and sends account statements directly to clients - a structural protection against advisers having direct access to (and misappropriating) client funds. Choice D describes a service custodians often perform, but it is incidental, not the primary regulatory function.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-2"
    },
    "difficulty": "easy",
    "id": "a730319f00ff",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "A 'market maker' is best described as a firm that:",
    "choices": [
      "Acts only as an agent and never trades from inventory",
      "Stands ready to buy at its posted bid and sell at its posted offer in a security on a continuous basis, providing liquidity",
      "Is owned and operated by the SEC",
      "Acts as the issuer's exclusive underwriter for all secondary offerings"
    ],
    "answerIndex": 1,
    "rationale": "Market makers commit capital by maintaining two-sided continuous quotes; they earn the spread between their bid and offer in exchange for assuming inventory risk. Choice A is the opposite of reality - market makers act as PRINCIPALS, not agents.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934"
    },
    "difficulty": "easy",
    "id": "06d9db9a2754",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Compared with an organized exchange (e.g., NYSE, Nasdaq), the OTC market is best characterized by:",
    "choices": [
      "A physical trading floor with a single specialist for each security",
      "Centralized auction-style price discovery for all listed issues",
      "A decentralized network of dealers that negotiate trades electronically and by phone, often acting as principals from inventory",
      "Trading restricted to securities with at least $1 billion in market capitalization"
    ],
    "answerIndex": 2,
    "rationale": "The OTC market is a dealer-to-dealer NEGOTIATED market - decentralized, with market makers transacting from inventory - rather than a centralized auction. Choice B is the top distractor because students may forget that exchange trading is auction-driven while the OTC market relies on dealer negotiation.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934"
    },
    "difficulty": "medium",
    "id": "071611ec34f6",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Under Regulation NMS, the 'NBBO' is the:",
    "choices": [
      "National best bid and offer - the highest published bid and lowest published offer across all eligible market centers for an NMS stock",
      "Net basis bid and offer published quarterly by the SEC",
      "National benchmark bid and offer used only to calculate index values",
      "Negotiated block bid and offer applicable to trades over 10,000 shares"
    ],
    "answerIndex": 0,
    "rationale": "Regulation NMS consolidates quotes across exchanges and market makers into a single national best bid and offer; the order-protection rule (Rule 611) prohibits trade-throughs of NBBO-protected quotations. Choice D is incorrect because Reg NMS expressly excepts large block trades from the order-protection rule but does not define NBBO around them.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation NMS"
    },
    "difficulty": "medium",
    "id": "91a0fe49cb3d",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "An investment adviser's duty to seek 'best execution' for client trades arises principally from which legal source?",
    "choices": [
      "Internal Revenue Code Section 408",
      "Regulation T",
      "Securities Act of 1933 Section 5",
      "The fiduciary duty under Section 206 of the Investment Advisers Act of 1940 and the SEC's interpretive guidance thereunder"
    ],
    "answerIndex": 3,
    "rationale": "Best execution flows from the adviser's fiduciary duty under IA Act Section 206 (anti-fraud provisions) and SEC interpretations, not from a tax or securities-distribution rule. Choice B (Reg T) is incorrect because Reg T governs margin lending, not the duty owed to clients on order routing.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 206"
    },
    "difficulty": "medium",
    "id": "ff1417020034",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Best execution analysis for a customer order considers ALL of the following factors EXCEPT:",
    "choices": [
      "Price (including price improvement opportunities)",
      "The personal political views of the broker-dealer's principals",
      "Speed of execution and likelihood of execution and settlement",
      "Order size and the character of the market for the security"
    ],
    "answerIndex": 1,
    "rationale": "Best-execution factors are economic and operational - price, speed, likelihood of execution, size, market character, transaction costs, and similar elements. Choice C is the top distractor because students sometimes treat best execution as a 'best price' standard, but speed and likelihood of execution are equally legitimate components alongside price.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2010"
    },
    "difficulty": "hard",
    "id": "24013194580a",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Which of the following typically signals that a security is highly LIQUID?",
    "choices": [
      "A wide bid-ask spread and few market makers",
      "Wide spreads with low average daily volume",
      "A narrow (tight) bid-ask spread and high average daily volume",
      "Trading exclusively in the pink sheets"
    ],
    "answerIndex": 2,
    "rationale": "Liquid securities exhibit narrow spreads and large quoted size because many participants compete to provide liquidity. Choice A is the inverse signal - wide spreads and few market makers indicate ILLIQUIDITY and elevated transaction costs.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation NMS"
    },
    "difficulty": "medium",
    "id": "84af1a3e9e39",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "When a broker-dealer buys a security from a customer for its own inventory at a price below the prevailing market, the difference is known as a:",
    "choices": [
      "Markdown",
      "Markup",
      "Commission",
      "Concession"
    ],
    "answerIndex": 0,
    "rationale": "On a principal PURCHASE from a customer the dealer subtracts profit from the prevailing price - this is a markdown. The mirror concept on a principal SALE to a customer is a markup. Choice B is the top distractor; students often use 'markup' loosely to mean either direction, but the exam tests the directional terminology.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "difficulty": "medium",
    "id": "328c70eb90f2",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "A customer enters a buy limit at $20 marked 'GTC' (good till cancelled). Which statement is TRUE?",
    "choices": [
      "The order expires at the end of the trading day if not executed",
      "The order may be executed only at $20 and not at any price below $20",
      "The order remains live across multiple trading sessions until executed or cancelled, subject to firm policy on periodic reconfirmation",
      "The order automatically becomes a market order at the close"
    ],
    "answerIndex": 2,
    "rationale": "GTC orders persist beyond a single session until filled, cancelled, or aged out per firm or exchange policy. Choice B is wrong on a different point: a buy limit of $20 may execute at $20 OR LOWER (price improvement is permissible), not strictly at $20.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2010"
    },
    "difficulty": "medium",
    "id": "cc5b5f12b4c8",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Customer cash balances and fully paid-for securities held by a clearing broker-dealer must be segregated from the firm's proprietary assets pursuant to:",
    "choices": [
      "Regulation T",
      "Securities Exchange Act Rule 15c3-3 (the Customer Protection Rule)",
      "Investment Company Act Section 17",
      "Rule 144"
    ],
    "answerIndex": 1,
    "rationale": "Rule 15c3-3 requires BDs to maintain customer-reserve bank accounts and to segregate fully paid and excess-margin securities to protect customers in the event of firm insolvency. Choice A (Reg T) is the top distractor because students confuse the customer-protection rule with the margin rule, but Reg T governs credit extension, not segregation.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 15c3-3"
    },
    "difficulty": "medium",
    "id": "1e196a19f95f",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "If a customer holding stock in 'street name' through a SIPC-member broker-dealer suffers losses because the failed firm cannot return the customer's securities, SIPC coverage protects the customer up to:",
    "choices": [
      "$100,000 total per customer, including unlimited cash",
      "$500,000 per customer including a $250,000 sub-limit on cash claims",
      "$1,000,000 per customer with no cash sub-limit",
      "An unlimited amount, regardless of asset class"
    ],
    "answerIndex": 1,
    "rationale": "SIPC protects customers of failed BDs up to $500,000 per separate customer, of which up to $250,000 may be cash claims. SIPC does NOT cover market losses - only the failure of the BD to return assets. Choice C is the top distractor because students inflate the limits or forget the cash sub-limit.",
    "citation": {
      "source": "OTHER",
      "ref": "SIPC"
    },
    "difficulty": "medium",
    "id": "9d16cfae80ee",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "An investment adviser must aggregate trades across client accounts and seek best execution because:",
    "choices": [
      "The adviser is acting as a principal in every block trade",
      "Aggregation eliminates the adviser's duty to disclose its trade-allocation policy",
      "The adviser's fiduciary duty obligates it to act in the client's best interest, including minimizing transaction costs and obtaining favorable terms",
      "FINRA registration replaces fiduciary obligations for investment advisers"
    ],
    "answerIndex": 2,
    "rationale": "Best execution and fair allocation are core fiduciary obligations under IA Act Section 206; the adviser must seek the most favorable terms reasonably available and disclose its allocation methodology. Choice B is the inverse of reality; the duty INCREASES disclosure obligations rather than removing them.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 206"
    },
    "difficulty": "medium",
    "id": "c80a7bafe76f",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Which statement about commissions versus markups is MOST accurate from a customer's perspective?",
    "choices": [
      "A markup is itemized separately on a confirmation, while a commission is embedded in the price",
      "A commission is itemized separately on the confirmation; a markup is generally embedded in the net price the customer pays the dealer",
      "Both must always be disclosed as a separate line item under Rule 10b-10",
      "Neither is required to be disclosed under federal law"
    ],
    "answerIndex": 1,
    "rationale": "Agency commissions appear as a discrete line item on the confirmation, while principal markups/markdowns are reflected in the net price paid (with FINRA fixed-income rules requiring separate disclosure of markup amounts on certain retail trades). Choice A inverts the convention and is the most attractive distractor.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "difficulty": "medium",
    "id": "d1ea5763ad16",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "A customer in a long margin account has LMV $30,000 and a debit balance of $24,000. Equity is $6,000, or 20% of LMV. Under FINRA's 25% maintenance margin minimum, the firm will most likely:",
    "choices": [
      "Issue a maintenance call requiring the customer to deposit funds or marginable securities to bring equity back to the maintenance level",
      "Close the account immediately without any notice",
      "Convert the account to a cash account at the customer's option",
      "Pay the customer the difference between equity and the 25% maintenance level"
    ],
    "answerIndex": 0,
    "rationale": "When equity falls below the 25% maintenance minimum, the BD issues a maintenance ('house') call; if not met, securities can be liquidated to restore compliance. Choice B is the top distractor because immediate liquidation 'without any notice' overstates the firm's typical practice and the rule's mechanics.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2010"
    },
    "difficulty": "hard",
    "id": "e94289b16c1e",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Which combination of orders would MOST commonly be used as an OCO ('one cancels other') bracket on an existing long stock position?",
    "choices": [
      "A sell limit above the market AND a sell stop below the market, where execution of one cancels the other",
      "A buy limit below the market AND a buy stop above the market, where execution of one cancels the other",
      "Two identical buy market orders entered at the same time",
      "A short sale and an offsetting long purchase entered simultaneously"
    ],
    "answerIndex": 0,
    "rationale": "A typical bracket on a long position uses an upside sell limit (profit target) and a downside sell stop (protective exit); whichever fills first cancels the other. Choice B describes a bracket appropriate to a SHORT position, not a long, which is the most common point of confusion.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA Rule 2010"
    },
    "difficulty": "hard",
    "id": "c95008890bf1",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "Settlement of regular-way trades in most listed equities currently occurs on which day relative to the trade date?",
    "choices": [
      "Trade date (T+0)",
      "T+1 (the business day after the trade date)",
      "T+3",
      "T+5"
    ],
    "answerIndex": 1,
    "rationale": "Effective May 28, 2024, the standard settlement cycle for most U.S. equities, corporate and municipal bonds, and unit investment trusts moved from T+2 to T+1. Choice C (T+3) is the top distractor because it was the long-standing pre-2017 settlement cycle that students may remember from older study material.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 17A"
    },
    "difficulty": "medium",
    "id": "1ea184abaea6",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "A market order to BUY 1,000 shares routed to a market maker is filled at $0.01 better than the displayed offer. This is best described as:",
    "choices": [
      "A trade-through violation under Regulation NMS",
      "Price improvement, which is consistent with - and a positive indicator of - best execution",
      "An illegal markup under Rule 10b-10",
      "Front-running by the market maker"
    ],
    "answerIndex": 1,
    "rationale": "Filling INSIDE the NBBO (better than the displayed quote) is price improvement and is a recognized best-execution measure; it is exactly what regulators want to see when evaluating a routing firm. Choice A inverts the rule - a 'trade-through' is filling AT a price WORSE than the protected NBBO, not better.",
    "citation": {
      "source": "SEC",
      "ref": "Regulation NMS"
    },
    "difficulty": "medium",
    "id": "cd271acb16c1",
    "subtopicId": "3.10",
    "reviewed": false
  },
  {
    "stem": "All of the following are considered 'costs of trading securities' that may erode a customer's return EXCEPT:",
    "choices": [
      "The bid-ask spread paid to a market maker on a round-trip principal trade",
      "Agency commissions charged on exchange-routed orders",
      "Markups embedded in net principal prices",
      "The unrealized appreciation on the customer's other long positions"
    ],
    "answerIndex": 3,
    "rationale": "Spreads, commissions, and markups/markdowns are direct trading costs the customer bears. Unrealized appreciation on OTHER positions is a separate portfolio-return concept and not a cost of executing the current trade. Choice A is correct as a cost - the spread is the dealer's compensation that the customer effectively pays.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-10"
    },
    "difficulty": "easy",
    "id": "ca7a865acdcd",
    "subtopicId": "3.10",
    "reviewed": false
  }
];

import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Other Assets: Commodities, Precious Metals, and Digital Assets",
  "bodyMd": "Beyond stocks, bonds, and cash, the Series 65 outline asks candidates to recognize a residual category of investments often called **other assets**. Two families dominate the discussion: physical **commodities and precious metals**, which have been traded for centuries on regulated exchanges, and **digital assets**, a much newer category whose legal status is still being worked out. Both sit outside the traditional securities framework in important ways, and both come with distinctive risks the exam expects you to articulate. The unifying theme is that these instruments are not claims on a business and do not pay dividends or interest; their return depends entirely on price changes in an underlying physical or digital good.\n\nUnderstanding where these assets fit also clarifies who regulates them. Commodities futures are policed by the Commodity Futures Trading Commission and the National Futures Association, not the SEC. Digital assets, by contrast, may be commodities, currencies, or securities depending on how they are structured, which is why the outline highlights the distinction explicitly.\n\n### Commodities and Precious Metals\n\nA **commodity** is a fungible, raw input — wheat, corn, soybeans, crude oil, natural gas, copper, gold, silver, platinum, palladium. Fungibility means one bushel of No. 2 yellow corn is interchangeable with any other, which is why commodities can trade on standardized exchanges. The two largest U.S. venues are the Chicago Mercantile Exchange (now part of CME Group) and the Intercontinental Exchange. Authority to regulate the futures markets that trade these contracts comes from the Commodity Exchange Act, which Congress assigned to the Commodity Futures Trading Commission. Brokers and pool operators in this space register with the National Futures Association, the self-regulatory organization for the futures industry.\n\nInvestors gain exposure to commodities in several ways:\n\n- **Spot (physical) ownership.** Buying gold coins or bullion, or storing physical silver. The investor bears storage, insurance, and assay costs and earns no income.\n- **Futures contracts.** Standardized agreements to buy or sell a fixed quantity of the commodity at a future date, traded on exchange and cleared centrally. Most retail investors never take delivery; positions are closed before expiration.\n- **Commodity pools and managed futures funds.** Pooled vehicles run by Commodity Pool Operators that allocate to futures and options.\n- **Commodity-linked ETFs and ETNs.** Exchange-traded products that track a single commodity (often via futures) or a basket.\n\n**Precious metals** — gold, silver, platinum, palladium — are the subset most commonly discussed on the exam. They are valued for industrial use, jewelry, and as a perceived store of value during inflationary or geopolitical stress. Because precious metals pay no cash flow, their price is driven almost entirely by supply, demand, real interest rates, and the strength of the U.S. dollar. The Federal Reserve's monetary stance therefore matters: rising real rates raise the opportunity cost of holding non-yielding metal, which historically pressures gold prices, while a weaker dollar tends to support them.\n\nThe practical risks the outline expects you to recognize:\n\n- **No income.** Total return depends entirely on price appreciation. There is no dividend, coupon, or rental yield to cushion a flat market.\n- **Volatility and leverage.** Futures are highly leveraged — a small margin deposit controls a much larger contract value, so adverse moves can wipe out the deposit and trigger margin calls.\n- **Storage, transport, and insurance costs.** Physical positions carry carrying costs that drag on returns.\n- **Tax treatment.** The IRS treats most physical precious metals as **collectibles**, which are taxed at a maximum long-term capital gains rate of 28% rather than the lower rates that apply to stocks and bonds. Rules for reporting are summarized in IRS Publication 550.\n- **Counterparty and clearing risk.** Mitigated for exchange-traded futures by central clearing through the exchange's clearinghouse, but present for over-the-counter or unregulated bullion dealers.\n\nA simple way to see the leverage embedded in a futures position is the notional-to-margin ratio. For a contract with notional value $N$ and required initial margin $M$:\n\n$$\\text{Leverage} = \\frac{N}{M}$$\n\nA standard CME gold futures contract represents 100 troy ounces. If gold is at $2{,}000 per ounce, the notional is $N = 100 \\times 2{,}000 = 200{,}000$. If the exchange sets initial margin at $10{,}000, leverage is $200{,}000 / 10{,}000 = 20\\times$. A 5% adverse move in the gold price ($100 per ounce, or $10{,}000 in notional terms) erases the entire margin deposit.\n\n### Digital Assets: Definition, Distinctions, and Risks\n\nA **digital asset** is, broadly, a representation of value that exists in electronic form and is recorded on a distributed ledger such as a blockchain. The Series 65 outline asks you to distinguish three overlapping legal characterizations a digital asset can take: **security**, **currency**, or **commodity**. The classification determines who regulates the asset and what disclosure rules apply.\n\n- **Digital asset as a security.** Under the Securities Act of 1933 Section 2(a)(1), the term \"security\" is defined broadly and includes any \"investment contract.\" The SEC has applied the long-standing investment-contract test to many token offerings: if buyers invest money in a common enterprise with an expectation of profit derived primarily from the efforts of others, the token is a security and triggers SEC registration and antifraud rules. Initial coin offerings and most yield-bearing tokens have generally been treated this way.\n- **Digital asset as a currency.** Some assets — notably Bitcoin in many regulatory statements — function primarily as a medium of exchange. The U.S. Department of the Treasury, through FinCEN, treats convertible virtual currency as subject to anti-money-laundering rules. Stablecoins designed to track the U.S. dollar fall in this bucket for many regulatory purposes.\n- **Digital asset as a commodity.** The Commodity Futures Trading Commission has determined that Bitcoin and certain other digital assets are commodities under the Commodity Exchange Act, which gives the CFTC jurisdiction over futures and over fraud and manipulation in spot markets, even though spot trading itself is largely unregulated at the federal level.\n\nFor tax purposes, the Internal Revenue Service treats virtual currency as **property**, not currency. Every disposition — selling, swapping one token for another, or spending tokens to buy goods — is a taxable event that generates capital gain or loss measured against the holder's cost basis. The basic reporting framework for capital assets is in IRS Publication 550.\n\nThe risks the exam expects you to articulate are unusually broad:\n\n- **Legal and regulatory uncertainty.** A token that is a commodity today may be reclassified as a security tomorrow, exposing issuers and platforms to enforcement.\n- **Extreme price volatility.** Daily moves of 5–10% are routine; intraday moves of 20% or more occur during stress.\n- **Custody and operational risk.** Private keys can be lost, stolen, or seized. Exchange failures have left customers as unsecured creditors. Unlike a brokerage account, digital-asset accounts are not covered by SIPC.\n- **Fraud and manipulation.** Pump-and-dump schemes, wash trading, and outright theft are common in less-regulated venues.\n- **Liquidity risk.** Smaller tokens can be effectively unsellable during stress, even if they appeared liquid in normal conditions.\n- **No intrinsic cash flow.** Like precious metals, most digital assets generate no dividend or interest, so valuation depends entirely on what the next buyer is willing to pay.\n\n### Worked Example\n\nA client buys 1.0 Bitcoin for $30{,}000 in March, then in November uses 0.4 Bitcoin to pay for a $20{,}000 car when Bitcoin is trading at $50{,}000. What is the tax outcome under IRS rules?\n\nBecause the IRS treats virtual currency as property, the November payment is a disposition of 0.4 BTC. Cost basis on the disposed coins is $0.4 \\times 30{,}000 = 12{,}000$. Fair-market value at disposition is $0.4 \\times 50{,}000 = 20{,}000$. The realized gain is:\n\n$$20{,}000 - 12{,}000 = 8{,}000$$\n\nBecause the holding period is less than one year, the $8{,}000 is a short-term capital gain taxed at ordinary income rates. The remaining 0.6 BTC keeps its original $18{,}000 cost basis. The car dealer separately recognizes $20{,}000 of revenue. None of this would be true if Bitcoin were treated as currency rather than property.\n\n### Summary\n\nCommodities, precious metals, and digital assets are non-traditional holdings that produce no cash flow and depend on price changes for return. Commodities and metals trade on CFTC-regulated futures exchanges such as the CME and ICE; physical metals are taxed as collectibles. Digital assets may be securities, currencies, or commodities depending on structure, which determines whether the SEC, Treasury/FinCEN, or CFTC takes the lead. The IRS treats virtual currency as property, so every disposition is a taxable event. Across the category, the dominant risks are volatility, leverage, custody and counterparty failure, regulatory uncertainty, and the absence of any intrinsic income.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 2(a)(1)"
    },
    {
      "source": "OTHER",
      "ref": "Commodity Exchange Act"
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
      "ref": "National Futures Association"
    },
    {
      "source": "OTHER",
      "ref": "NFA"
    },
    {
      "source": "OTHER",
      "ref": "Chicago Mercantile Exchange"
    },
    {
      "source": "OTHER",
      "ref": "CME Group"
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
      "ref": "Federal Reserve"
    },
    {
      "source": "OTHER",
      "ref": "U.S. Department of the Treasury"
    },
    {
      "source": "OTHER",
      "ref": "Internal Revenue Service"
    },
    {
      "source": "OTHER",
      "ref": "IRS"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    {
      "source": "OTHER",
      "ref": "SIPC"
    }
  ],
  "subtopicId": "2.14",
  "reviewed": false
};

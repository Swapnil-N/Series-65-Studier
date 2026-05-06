import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Under federal law, commodities such as corn, crude oil, and gold are primarily regulated by which of the following agencies?",
    "choices": [
      "Securities and Exchange Commission",
      "Commodity Futures Trading Commission",
      "Federal Reserve Board",
      "Federal Deposit Insurance Corporation"
    ],
    "answerIndex": 1,
    "rationale": "The CFTC, established by the Commodity Exchange Act, has primary federal jurisdiction over commodity futures, options on futures, and most derivative markets for physical commodities. The top distractor (SEC) regulates securities and securities-based derivatives; futures on physical commodities and the spot market for digital-asset commodities such as Bitcoin fall outside the SEC's primary jurisdiction.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "easy",
    "id": "c78782ab3efe",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Which statement best describes the federal-securities-law status of physical commodities such as wheat or copper?",
    "choices": [
      "They are securities defined under Section 2(a)(1) of the Securities Act of 1933",
      "They are not securities; they are tangible goods regulated under the Commodity Exchange Act",
      "They are exempt securities under Section 3(a) of the Securities Act of 1933",
      "They are investment contracts as defined by the Howey decision"
    ],
    "answerIndex": 1,
    "rationale": "Tangible commodities themselves are not securities; they are real goods subject to the Commodity Exchange Act and CFTC oversight. The top distractor would treat them as exempt securities, but they never fall within the Section 2(a)(1) definition of 'security' in the first place, so an exemption is unnecessary.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Exchange Act"
    },
    "difficulty": "easy",
    "id": "8a4df24c7279",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Which group consists exclusively of precious metals commonly traded as commodities on U.S. exchanges?",
    "choices": [
      "Gold, silver, platinum, palladium",
      "Copper, nickel, aluminum, zinc",
      "Iron, lead, tin, mercury",
      "Gold, silver, copper, oil"
    ],
    "answerIndex": 0,
    "rationale": "Gold, silver, platinum, and palladium are the four exchange-traded precious metals on COMEX/NYMEX. The top distractor lists base or industrial metals (copper, nickel, aluminum, zinc), which are not precious metals; choice D mixes two precious metals with copper and oil and is therefore incorrect.",
    "citation": {
      "source": "OTHER",
      "ref": "Chicago Mercantile Exchange"
    },
    "difficulty": "easy",
    "id": "2700ad04828f",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Compared with a forward contract, an exchange-traded futures contract is principally distinguished by which feature?",
    "choices": [
      "Privately negotiated terms tailored to the counterparties",
      "Standardized contract size, quality, and delivery terms with daily mark-to-market and a clearinghouse guarantee",
      "Settlement only by physical delivery on the contract's expiration date",
      "Exemption from CFTC oversight"
    ],
    "answerIndex": 1,
    "rationale": "A futures contract is exchange-traded, standardized in size and grade, novated through a clearinghouse, and marked to market daily. The top distractor (privately negotiated, tailored terms) describes a forward contract, which is bespoke and not centrally cleared.",
    "citation": {
      "source": "OTHER",
      "ref": "CME Group"
    },
    "difficulty": "medium",
    "id": "18139eb35ff4",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "An investor opens a long crude oil futures position by posting initial margin equal to roughly 5%-10% of contract value. The margin in a futures contract is best characterized as:",
    "choices": [
      "An equity down payment toward the eventual purchase of the underlying commodity",
      "A loan from the broker on which interest accrues, similar to a Regulation T margin loan",
      "A good-faith performance bond that ensures the trader can meet daily mark-to-market obligations",
      "An insurance premium paid to the clearinghouse to cap downside risk"
    ],
    "answerIndex": 2,
    "rationale": "Futures margin is a performance bond, not borrowed funds; both buyer and seller post it so the clearinghouse can cover daily settlement variation. The top distractor (Reg T loan) describes equity margin under Regulation T, which involves an actual loan and interest charges, unlike futures margin.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "medium",
    "id": "4d2787d0384f",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "On a long crude oil futures position, the price falls $0.50 per barrel and the trader's broker requires additional funds the next morning. This process is known as:",
    "choices": [
      "Daily mark-to-market and a variation margin call",
      "A capital gains distribution",
      "Conversion to a forward contract",
      "An ex-dividend adjustment"
    ],
    "answerIndex": 0,
    "rationale": "Futures positions are settled to the closing price each day; gains are credited and losses debited, and if equity falls below maintenance, additional variation margin must be posted. The top distractor (capital gains distribution) is a mutual-fund concept that has nothing to do with daily futures settlement.",
    "citation": {
      "source": "OTHER",
      "ref": "CME Group"
    },
    "difficulty": "medium",
    "id": "f59f13e87883",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "An airline that buys jet-fuel-related futures to lock in input costs is acting as a:",
    "choices": [
      "Speculator",
      "Hedger",
      "Commodity pool operator",
      "Market maker"
    ],
    "answerIndex": 1,
    "rationale": "A hedger uses derivatives to offset existing or anticipated business exposure - here, the airline's exposure to rising fuel prices. The top distractor (speculator) takes risk to profit from price movement and has no underlying business exposure to offset.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "medium",
    "id": "1c512befa163",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Which characteristic best distinguishes investment-grade gold bullion from numismatic gold coins?",
    "choices": [
      "Bullion's value is driven primarily by its metal content, while numismatic coins derive significant value from rarity and collectibility",
      "Numismatic coins are securities, while bullion is not",
      "Bullion is regulated by the SEC, while numismatic coins are regulated by the CFTC",
      "Numismatic coins always trade at a discount to spot metal prices"
    ],
    "answerIndex": 0,
    "rationale": "Bullion (bars, ingots, common-date coins) trades at the spot price of metal plus a small fabrication premium, while numismatic coins carry collector premiums based on rarity, condition, and historical significance. The top distractor reversing SEC and CFTC jurisdiction is incorrect; neither agency regulates collectible coins as securities.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "6a978cc9541f",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "An exchange-traded product such as SPDR Gold Shares (GLD) that holds physical gold bullion in a vault is best described as:",
    "choices": [
      "A registered investment company under the Investment Company Act of 1940",
      "A grantor trust whose shares represent fractional undivided interests in the underlying gold",
      "A commodity futures contract",
      "A direct-participation program (DPP)"
    ],
    "answerIndex": 1,
    "rationale": "Physically-backed metal ETFs are typically organized as grantor trusts (or similar passive trusts) whose shares represent pro-rata interests in the bullion held by the trust; they do not register under the 1940 Act. The top distractor would treat them as 1940 Act funds, but they do not qualify because they hold a single physical commodity rather than a diversified portfolio of securities.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "a57e7884520d",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "An investor in a commodity futures-based ETF that 'rolls' near-month contracts forward each month notices that fund returns lag spot price gains during periods of contango. The most likely explanation is that:",
    "choices": [
      "The fund is paying a 12b-1 fee that erodes returns",
      "When the futures curve is upward sloping, the fund sells expiring contracts at a lower price and buys deferred contracts at a higher price, creating a negative roll yield",
      "The CFTC limits the fund's leverage so it cannot fully participate in spot price gains",
      "Contango automatically increases the fund's federal income tax liability"
    ],
    "answerIndex": 1,
    "rationale": "In contango, deferred futures trade above near-month futures, so each monthly roll forces the ETF to sell low and buy high, producing a negative roll yield even when spot prices are stable or rising. The top distractor (12b-1 fees) involves equity mutual funds and does not explain the structural drag that comes from rolling contracts.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "e7dcdc4b40a2",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "An adviser to a publicly offered commodity pool that trades CME futures must generally register with which self-regulatory organization?",
    "choices": [
      "FINRA",
      "MSRB",
      "National Futures Association",
      "PCAOB"
    ],
    "answerIndex": 2,
    "rationale": "The NFA is the SRO for the U.S. derivatives industry; commodity pool operators (CPOs) and commodity trading advisors (CTAs) must register with the CFTC and become NFA members. The top distractor (FINRA) is the SRO for broker-dealers and does not have authority over commodity pool operators.",
    "citation": {
      "source": "OTHER",
      "ref": "National Futures Association"
    },
    "difficulty": "medium",
    "id": "c1e69a92c70a",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Which statement most accurately describes the cash-flow profile of an investment in physical gold bullion?",
    "choices": [
      "It produces a steady stream of dividend income for the holder",
      "It produces interest income at the prevailing federal funds rate",
      "It produces no current income; total return depends on price appreciation, and the holder typically incurs storage and insurance costs",
      "It produces a tax-deferred coupon similar to a zero-coupon bond"
    ],
    "answerIndex": 2,
    "rationale": "Bullion is a non-income-producing asset whose return derives entirely from price changes, and holders ordinarily pay vault, insurance, or assay costs. The top distractor (steady dividends) confuses gold mining stocks (which can pay dividends) with the physical metal, which has no issuer and therefore no cash flow.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "e49952fc8b7e",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Many advisers recommend a small allocation to gold or commodities for clients concerned about inflation. The principal rationale is that:",
    "choices": [
      "Commodity prices are guaranteed to rise more than inflation each year",
      "Commodity prices have historically been positively correlated with inflation and exhibit relatively low correlation with traditional stock and bond returns",
      "The CFTC sets a floor price for commodities that increases with the CPI",
      "Commodities pay an inflation-linked coupon similar to TIPS"
    ],
    "answerIndex": 1,
    "rationale": "Real-asset commodities such as gold tend to retain purchasing power because their prices reflect underlying input costs, and their returns historically exhibit low correlation with stocks and bonds, providing diversification. The top distractor (guaranteed to outpace inflation) overstates the relationship; commodities have underperformed inflation over substantial periods.",
    "citation": {
      "source": "OTHER",
      "ref": "Bureau of Labor Statistics"
    },
    "difficulty": "medium",
    "id": "bb52cda6c87d",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Which of the following is true about a speculator who sells (writes) crude oil futures?",
    "choices": [
      "The speculator has limited downside risk equal to the premium received",
      "The speculator is obligated to deliver the underlying crude oil (or cash settle) at expiration if the position is not closed out",
      "The speculator owns the physical commodity and is automatically required to register as an investment adviser",
      "The speculator's potential loss is capped at the initial margin"
    ],
    "answerIndex": 1,
    "rationale": "A short futures position obliges the seller to deliver the underlying (or cash settle) on the contract's delivery date if the position is not offset. The top distractor (limited risk equal to premium) describes a written option, not a short futures position; a short future has theoretically unlimited loss potential as prices rise.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "medium",
    "id": "241eaabbddff",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Which characteristic is shared by both a forward contract and a futures contract?",
    "choices": [
      "Daily settlement through a clearinghouse",
      "Standardized terms set by an exchange",
      "An obligation to buy or sell a specified quantity of an underlying asset on a specified future date at a price agreed today",
      "Listing on a CFTC-regulated futures exchange"
    ],
    "answerIndex": 2,
    "rationale": "Both contracts create a binding obligation to exchange a specified quantity of the underlying at a future date and price agreed today. The top distractor (daily settlement) is unique to futures; forwards settle only at maturity and are typically privately negotiated.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "medium",
    "id": "14256875ec6c",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Crude oil futures contracts traded on the CME are primarily subject to oversight by:",
    "choices": [
      "The SEC",
      "The CFTC",
      "MSRB",
      "FDIC"
    ],
    "answerIndex": 1,
    "rationale": "The CFTC has primary jurisdiction over futures contracts under the Commodity Exchange Act, including energy futures listed on the CME or ICE. The top distractor (SEC) regulates securities futures and securities-based swaps, but not single-commodity energy or agricultural futures.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Exchange Act"
    },
    "difficulty": "easy",
    "id": "2939fb0ea68b",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "A commodity pool operator that limits its pool's investors to 'qualified eligible persons' may rely on which CFTC rule for relief from certain disclosure and reporting requirements?",
    "choices": [
      "CFTC Regulation 1.3",
      "CFTC Regulation 4.7",
      "Rule 144A",
      "Rule 506(c)"
    ],
    "answerIndex": 1,
    "rationale": "CFTC Regulation 4.7 grants exemptive relief from full Part 4 disclosure and reporting requirements to CPOs and CTAs whose participants are qualified eligible persons, analogous to securities-law private-fund exemptions. The top distractor (Reg 1.3) supplies general CFTC definitions and does not provide the QEP exemptive relief.",
    "citation": {
      "source": "OTHER",
      "ref": "CFTC Regulation 4.7"
    },
    "difficulty": "hard",
    "id": "58c6a5c98a24",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "A privately offered fund that trades futures on CME and ICE for the benefit of its limited partners is best described as a:",
    "choices": [
      "Real estate investment trust",
      "Commodity pool operated by a CPO",
      "Variable annuity separate account",
      "Unit investment trust under the Investment Company Act of 1940"
    ],
    "answerIndex": 1,
    "rationale": "A pooled investment vehicle that engages in futures trading is a commodity pool, and its operator must register with the CFTC as a CPO unless an exemption applies. The top distractor (REIT) holds real estate, not derivatives, and is governed by entirely different securities and tax rules.",
    "citation": {
      "source": "OTHER",
      "ref": "National Futures Association"
    },
    "difficulty": "medium",
    "id": "8ec4a68ab0d3",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "An investor seeking exposure to gold price changes without arranging physical storage and insurance would most appropriately consider:",
    "choices": [
      "COMEX gold futures or a physically-backed gold ETF that handles vaulting and insurance through its trust structure",
      "Buying numismatic collectible coins to hold in a home safe",
      "Opening a fixed annuity contract",
      "Purchasing a long-dated zero-coupon Treasury bond"
    ],
    "answerIndex": 0,
    "rationale": "COMEX gold futures or a physically-backed gold ETF provide gold price exposure while transferring delivery, vaulting, and insurance issues to the futures clearinghouse or trust sponsor. The top distractor (numismatic coins) involves physical custody, illiquidity, and grading risk - the very burdens the investor is trying to avoid.",
    "citation": {
      "source": "OTHER",
      "ref": "CME Group"
    },
    "difficulty": "medium",
    "id": "ea3b97a8ffe4",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "A digital asset is most accurately defined as:",
    "choices": [
      "An asset issued and/or transferred using distributed ledger or blockchain technology and recorded electronically rather than in physical form",
      "Any electronic record of a corporate stockholder, regardless of the underlying medium",
      "An exchange-traded fund that tracks the technology sector",
      "Any asset that earns interest in a digital savings account at a bank"
    ],
    "answerIndex": 0,
    "rationale": "A digital asset is broadly defined as a unit of value or rights recorded on a blockchain or distributed ledger; the SEC has used this language in its 'Framework for Investment Contract Analysis of Digital Assets.' The top distractor (electronic stockholder records) describes book-entry recordkeeping at a transfer agent, which is not what makes something a digital asset.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "easy",
    "id": "28293171e766",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Bitcoin (BTC) is best described as:",
    "choices": [
      "A centrally issued digital fiat currency backed by the U.S. Treasury",
      "A decentralized cryptocurrency recorded on a public blockchain that the CFTC has classified as a commodity",
      "A debt security registered with the SEC under the Securities Act of 1933",
      "An equity security entitling holders to dividends from a distributed corporation"
    ],
    "answerIndex": 1,
    "rationale": "Bitcoin is a peer-to-peer, decentralized cryptocurrency without a central issuer; the CFTC has classified it as a commodity, and Bitcoin futures trade on CFTC-regulated exchanges. The top distractor (centrally issued digital fiat) describes a central bank digital currency, not Bitcoin.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "easy",
    "id": "2c834ee840f5",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "An issuer raises capital by selling tokens that promise buyers a share of the company's future profits if the management team builds a successful platform. Under SEC v. W.J. Howey Co., these tokens are most likely:",
    "choices": [
      "Excluded from the definition of 'security' because they are digital",
      "Treated as commodities subject solely to CFTC jurisdiction",
      "Investment contracts and therefore securities, requiring registration or an exemption",
      "Currencies exempt from federal securities laws"
    ],
    "answerIndex": 2,
    "rationale": "Tokens sold with the expectation that profits will derive predominantly from the issuer's efforts meet the Howey investment-contract test and are securities under Section 2(a)(1) of the 1933 Act, regardless of being labeled tokens or coins. The top distractor (excluded because digital) ignores the SEC's clear position - the form of the instrument does not control whether it is a security.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 2(a)(1)"
    },
    "difficulty": "medium",
    "id": "a94b6f335271",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Under the Howey test, which of the following is NOT an element required for an arrangement to be an 'investment contract' (and therefore a security)?",
    "choices": [
      "An investment of money",
      "In a common enterprise",
      "With an expectation of profits derived from the efforts of others",
      "Listing on a national securities exchange"
    ],
    "answerIndex": 3,
    "rationale": "The Howey test requires (i) an investment of money, (ii) in a common enterprise, (iii) with an expectation of profits, (iv) derived primarily from the efforts of others. Listing on a national exchange is not an element; many securities exist that have never been exchange-listed.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 2(a)(1)"
    },
    "difficulty": "medium",
    "id": "1a11200bfa1e",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "When applying the Howey test to digital assets, the SEC has indicated that the network's degree of decentralization is relevant because:",
    "choices": [
      "Decentralized networks are exempt from federal taxation",
      "When holders no longer reasonably expect that an active developer team or promoter is essential to the asset's success, the 'efforts of others' prong may no longer be satisfied",
      "Centralized networks are automatically commodities",
      "The CFTC controls all decentralized networks by statute"
    ],
    "answerIndex": 1,
    "rationale": "SEC staff guidance has noted that as a network becomes sufficiently decentralized and the success of the asset no longer depends materially on identifiable promoters, the Howey 'efforts of others' element may be absent, in which case the asset may not be a security. The top distractor (tax exemption) confuses tax treatment with securities classification.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "hard",
    "id": "20ae35ca3599",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "A stablecoin is best described as:",
    "choices": [
      "A digital asset designed to maintain a stable value relative to a reference asset, typically a fiat currency such as the U.S. dollar",
      "A government-issued bond that pays interest in cryptocurrency",
      "A cryptocurrency whose price is fixed by federal statute",
      "A type of preferred stock issued on a blockchain"
    ],
    "answerIndex": 0,
    "rationale": "Stablecoins are tokens that aim to peg their value to an external reference (commonly USD) through fiat reserves, crypto collateral, or algorithmic mechanisms. The top distractor (price fixed by statute) is wrong because no federal statute fixes the price of any private cryptocurrency.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "medium",
    "id": "38873dc541f2",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "A non-fungible token (NFT) differs from a typical cryptocurrency primarily because:",
    "choices": [
      "NFTs are always insured by the FDIC",
      "Each NFT is a unique digital token and is not interchangeable on a one-for-one basis with another NFT",
      "NFTs trade only on the New York Stock Exchange",
      "NFTs are issued exclusively by the U.S. Treasury"
    ],
    "answerIndex": 1,
    "rationale": "NFTs use blockchain technology to certify uniqueness and authenticity of an individual digital item; in contrast, cryptocurrencies are fungible (each unit is identical to every other). The top distractor (FDIC insurance) is plainly wrong - the FDIC insures bank deposits, not digital tokens.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "easy",
    "id": "e706d5658cd3",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Which statement most accurately distinguishes a 'cold wallet' from a 'hot wallet' for digital-asset custody?",
    "choices": [
      "A cold wallet stores private keys offline and is generally less exposed to internet-based hacks; a hot wallet is connected to the internet and offers greater convenience but a higher attack surface",
      "A cold wallet is FDIC-insured; a hot wallet is SIPC-insured",
      "A cold wallet holds stablecoins only; a hot wallet holds Bitcoin only",
      "A cold wallet is regulated by the SEC; a hot wallet is regulated by the CFTC"
    ],
    "answerIndex": 0,
    "rationale": "Cold wallets store private keys offline (e.g., on hardware devices or paper) and are less vulnerable to remote intrusion, while hot wallets are internet-connected for fast access at the cost of higher cyber risk. The top distractor (FDIC/SIPC) is wrong because neither agency insures private keys or self-custodied digital assets.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "814eec6e56a5",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "When recommending direct ownership of digital assets, an investment adviser should advise the client that:",
    "choices": [
      "Digital assets in a self-custody wallet are insured by SIPC up to $500,000 per account",
      "Loss of the client's private key can result in permanent loss of the asset, since transactions on most public blockchains cannot be reversed",
      "The CFTC will reimburse losses caused by exchange hacks",
      "Digital-asset transactions on public blockchains are always reversible by court order"
    ],
    "answerIndex": 1,
    "rationale": "Most public blockchains finalize transactions irreversibly, and possession of the private key is functionally equivalent to ownership; lost or stolen keys cannot be recovered. The top distractor (SIPC coverage) is wrong because SIPC coverage applies only to securities held at SIPC-member broker-dealers, not to self-custodied digital assets.",
    "citation": {
      "source": "OTHER",
      "ref": "Securities Investor Protection Corporation"
    },
    "difficulty": "medium",
    "id": "0db031a50af6",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "An IAR with discretion over a client's wallet that holds tokens the SEC has alleged are securities would most likely be subject to which custody-related obligation?",
    "choices": [
      "None - digital assets are categorically excluded from the Custody Rule",
      "Rule 206(4)-2 safekeeping requirements, including use of a qualified custodian and an annual surprise examination, to the extent the assets are deemed securities and the adviser has 'custody'",
      "Mandatory registration of the tokens under Section 12 of the Securities Exchange Act of 1934",
      "An obligation to file a Schedule 13D for each token holding"
    ],
    "answerIndex": 1,
    "rationale": "To the extent digital assets are securities and the adviser has 'custody,' the federal-covered adviser must comply with Rule 206(4)-2, generally requiring use of a qualified custodian and an annual surprise examination by an independent public accountant; SEC staff has spoken directly to this issue. The top distractor (categorical exclusion) misstates the rule - the analysis turns on whether the asset is a security and whether the adviser has custody, not the digital form.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Rule 206(4)-2"
    },
    "difficulty": "hard",
    "id": "348b76efc56e",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "A 'central bank digital currency' (CBDC) differs from Bitcoin primarily because a CBDC:",
    "choices": [
      "Is issued by, and represents a direct liability of, a central bank",
      "Has no fixed supply and is mined by anonymous participants",
      "Is regulated by the CFTC as a commodity rather than as fiat",
      "Always trades at a discount to its face value"
    ],
    "answerIndex": 0,
    "rationale": "CBDCs are digital forms of sovereign fiat currency issued and backed by the central bank, fundamentally different from a decentralized, non-sovereign cryptocurrency such as Bitcoin. The top distractor (no fixed supply, mined by anonymous participants) describes Bitcoin or similar networks, not a CBDC.",
    "citation": {
      "source": "OTHER",
      "ref": "Federal Reserve"
    },
    "difficulty": "medium",
    "id": "4348916cba08",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "The CFTC's authority over Bitcoin is best described as:",
    "choices": [
      "The CFTC has classified Bitcoin as a commodity, has anti-fraud and anti-manipulation authority over its spot market, and has full regulatory authority over Bitcoin futures",
      "The CFTC has no authority over Bitcoin in any market",
      "The CFTC requires Bitcoin to be registered as a security",
      "The CFTC sets the price of Bitcoin daily through open-market operations"
    ],
    "answerIndex": 0,
    "rationale": "The CFTC has classified virtual currencies including Bitcoin as commodities under the Commodity Exchange Act; it has full regulatory authority over Bitcoin futures and limited anti-fraud and anti-manipulation jurisdiction over the spot market. The top distractor (no authority) ignores well-publicized CFTC enforcement actions and futures-market oversight.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "medium",
    "id": "7b3fa1410379",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Which of the following is a primary risk an adviser should disclose to a client considering an investment in a public cryptocurrency such as Bitcoin or Ether?",
    "choices": [
      "Daily price movements are limited to plus or minus 1% by federal law",
      "Extreme price volatility, evolving regulatory treatment, and the possibility of total loss due to security failures, fraud, or insolvency at trading platforms",
      "The Federal Reserve guarantees the par value of all major cryptocurrencies",
      "Cryptocurrencies are protected by SIPC up to $500,000 in any wallet"
    ],
    "answerIndex": 1,
    "rationale": "Cryptocurrencies are characterized by significant volatility, evolving regulation, and platform-specific risks (hacks, custody failures, fraud), all of which advisers should disclose. The top distractor (1% daily limit) is invented - there are no federal price limits on cryptocurrencies.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "easy",
    "id": "560334cf9a90",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "A spot bitcoin ETF approved by the SEC most likely:",
    "choices": [
      "Holds physical bitcoin in custody at a qualified custodian and issues shares that trade on a national securities exchange under a registration statement filed under the Securities Act of 1933",
      "Holds only Bitcoin futures contracts and is therefore exempt from SEC registration",
      "Is regulated solely by the CFTC because Bitcoin is a commodity",
      "Is a closed-end mutual fund whose shares trade only over-the-counter"
    ],
    "answerIndex": 0,
    "rationale": "Spot bitcoin ETFs hold actual bitcoin, are typically organized as grantor trusts, and are registered under the Securities Act of 1933 with shares listed on a national securities exchange. The top distractor (futures-only, no SEC registration) is wrong; even bitcoin futures ETFs were registered investment companies under the 1940 Act.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    "difficulty": "medium",
    "id": "3989ac815d25",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Which of the following is a key difference between a typical cryptocurrency such as Bitcoin and a fiat currency such as the U.S. dollar?",
    "choices": [
      "Bitcoin is the legal tender of the United States, but the dollar is not",
      "Bitcoin is decentralized and not backed by any government, while the U.S. dollar is issued by the U.S. government and is legal tender for all debts public and private",
      "Bitcoin is insured by the FDIC, while the dollar is not",
      "Bitcoin can only be used for retail purchases, while the dollar can only be used for institutional purchases"
    ],
    "answerIndex": 1,
    "rationale": "Bitcoin is a private, decentralized digital asset with no government issuer, while the U.S. dollar is sovereign fiat currency and legal tender. The top distractor reverses legal-tender status; Bitcoin is not legal tender in the United States.",
    "citation": {
      "source": "OTHER",
      "ref": "Federal Reserve"
    },
    "difficulty": "easy",
    "id": "73383a27f460",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "An adviser is reviewing risks of a client's holdings on a centralized cryptocurrency exchange. Which risk is most distinctive to such platforms?",
    "choices": [
      "Inflation risk caused by Federal Reserve open-market operations",
      "Counterparty and custodial risk - in a bankruptcy, customers may be treated as general unsecured creditors and may not recover the digital assets the exchange held on their behalf",
      "Interest-rate risk identical to that of long-duration corporate bonds",
      "Tax risk because exchanges are required to issue Form 1099-DIV"
    ],
    "answerIndex": 1,
    "rationale": "Centralized exchanges typically hold customer assets in commingled or omnibus accounts; recent failures (FTX, Celsius) showed that customers may rank as general unsecured creditors and recover only a fraction of their assets. The top distractor (inflation) is a macroeconomic risk that does not vary based on whether assets sit at a centralized exchange.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "cea0ce609176",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "An online influencer accumulates a thinly traded altcoin, then promotes it heavily on social media, sells into the resulting buying pressure, and disappears. The conduct is best described as:",
    "choices": [
      "An exempt private offering under Rule 506(b)",
      "A pump-and-dump market manipulation that may violate antifraud provisions of federal and state securities laws if the token is a security",
      "A permissible promotion under Regulation FD",
      "A hedging strategy under CFTC Regulation 4.7"
    ],
    "answerIndex": 1,
    "rationale": "Where the token meets the definition of a security, coordinated promotion to inflate the price followed by insider selling can violate Section 17(a) of the 1933 Act, Section 10(b) and Rule 10b-5 of the 1934 Act, and analogous state antifraud provisions. The top distractor (Reg D) is wrong because Rule 506(b) governs private offerings and does not authorize fraudulent market manipulation.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 10b-5"
    },
    "difficulty": "hard",
    "id": "b57671cfcb6a",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Under the Investment Advisers Act of 1940, before recommending a specific digital asset to a retail client, an investment adviser must:",
    "choices": [
      "Obtain SEC pre-clearance for the recommendation",
      "Have a reasonable basis to believe the recommendation is in the client's best interest given the client's profile, fully disclose material risks and conflicts, and act consistently with the adviser's fiduciary duty",
      "Disclaim all fiduciary duties because digital assets are unregulated",
      "Recommend digital assets to all clients as a matter of policy to ensure portfolio diversification"
    ],
    "answerIndex": 1,
    "rationale": "An adviser owes a fiduciary duty under Section 206 of the Advisers Act, encompassing duties of care (a reasonable basis for the recommendation given the client's specific situation) and loyalty (full and fair disclosure of material conflicts and risks). The top distractor (SEC pre-clearance) describes a process that does not exist - advisers do not pre-clear recommendations with the SEC.",
    "citation": {
      "source": "IA_ACT",
      "ref": "Section 206"
    },
    "difficulty": "hard",
    "id": "1a806653107d",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Which of the following best describes the meaning of 'decentralized' in the context of a public blockchain such as Bitcoin?",
    "choices": [
      "Transactions are validated by a single trusted intermediary, such as a bank",
      "Transaction validation and ledger maintenance are performed by a distributed network of independent nodes rather than a single central authority",
      "The Bitcoin network is operated by the U.S. Treasury",
      "The network's rules can be changed at any time by any single participant acting alone"
    ],
    "answerIndex": 1,
    "rationale": "A decentralized network distributes transaction validation across many independent nodes, removing the need for a central trusted intermediary. The top distractor (single trusted intermediary) describes a traditional centralized payment system, the opposite of decentralization.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "e96bfb97dd5a",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Which statement best distinguishes a proof-of-work blockchain from a proof-of-stake blockchain?",
    "choices": [
      "Proof-of-work secures the network through energy-intensive computational mining, while proof-of-stake selects validators based on the amount of cryptocurrency they 'stake' as collateral",
      "Proof-of-stake is illegal under U.S. law, while proof-of-work is permitted",
      "Proof-of-work assets are securities, while proof-of-stake assets are commodities",
      "Proof-of-work is centralized, while proof-of-stake is centralized only outside the U.S."
    ],
    "answerIndex": 0,
    "rationale": "Proof-of-work secures the network through computational mining, while proof-of-stake selects validators based on the quantity of cryptocurrency they have staked. The top distractor (illegality) is unfounded - both consensus mechanisms exist and operate lawfully in the United States.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "04a73a88b7c3",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "An issuer markets a 'crypto savings program' under which investors deposit cryptocurrency in exchange for a promise of variable interest funded by the issuer's lending activities. Which analytic framework is generally most relevant to determining whether these arrangements are securities?",
    "choices": [
      "The Howey investment-contract test only",
      "The 'family resemblance' test of Reves v. Ernst & Young, which presumes that notes are securities and identifies categories of notes that are not, alongside a Howey analysis where appropriate",
      "The 'good faith' test of Section 4(a)(1) of the Securities Act of 1933",
      "The 'efficient market' test of Fama (1970)"
    ],
    "answerIndex": 1,
    "rationale": "Where the digital-asset arrangement is structured as a note paying interest, the SEC and courts apply the Reves family-resemblance test, which begins with a presumption that notes are securities. The top distractor (Howey only) is incomplete - while Howey applies to investment-contract token offerings, Reves is the controlling framework for note-style yield products.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 2(a)(1)"
    },
    "difficulty": "hard",
    "id": "9628bb418346",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "An issuer offers tokens that grant holders the right to use a not-yet-built decentralized cloud-storage platform; promotional materials emphasize that early buyers will profit if the team builds the network and adoption grows. The SEC is most likely to view these tokens as:",
    "choices": [
      "Pure 'utility' tokens that fall outside the federal securities laws solely because of their label",
      "Investment contracts under Howey, because buyers are providing capital with an expectation of profits derived from the entrepreneurial efforts of the issuer",
      "Commodities subject solely to the CFTC under the Commodity Exchange Act",
      "Digital fiat currency issued under authority of the Federal Reserve"
    ],
    "answerIndex": 1,
    "rationale": "Even a token labeled 'utility' is treated as an investment contract when promotional efforts focus on the issuer's role in driving future profits and the network is not yet functional - the hallmarks of the Howey test. The top distractor (pure utility) is the same defense the SEC has rejected in cases like Telegram and Kik because labels do not control the legal analysis.",
    "citation": {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 2(a)(1)"
    },
    "difficulty": "medium",
    "id": "106036e481d4",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "A U.S. cryptocurrency exchange that handles fiat-to-crypto conversions for retail customers is generally treated as a 'money services business' subject to which body of law?",
    "choices": [
      "The Bank Secrecy Act, including FinCEN AML/KYC, customer identification, and currency-transaction reporting requirements",
      "Sarbanes-Oxley Section 404 internal control reporting",
      "Regulation FD selective-disclosure rules",
      "Investment Company Act of 1940 Section 22 redemption requirements"
    ],
    "answerIndex": 0,
    "rationale": "FinCEN and Treasury have applied the Bank Secrecy Act, including AML/KYC and currency-transaction reporting, to cryptocurrency exchanges that exchange fiat for virtual currency. The top distractor (Sarbanes-Oxley 404) addresses public-company internal controls and is unrelated to AML.",
    "citation": {
      "source": "SEC",
      "ref": "Bank Secrecy Act"
    },
    "difficulty": "hard",
    "id": "c1e0eb93e73b",
    "subtopicId": "2.14",
    "reviewed": false
  },
  {
    "stem": "Which of the following is the most accurate statement about leverage in commodity futures investing?",
    "choices": [
      "Margin is small relative to contract value, so a small adverse move in the underlying can produce a percentage loss many times the initial margin and may trigger additional margin calls",
      "Futures positions are unleveraged because the trader pays the full contract value upfront",
      "Federal law caps futures losses at the initial margin posted",
      "The clearinghouse pays any losses that exceed initial margin"
    ],
    "answerIndex": 0,
    "rationale": "Initial futures margin is typically 5%-10% of contract value, so the leverage embedded in a futures position can magnify both gains and losses; adverse moves can wipe out initial margin and trigger variation margin calls that exceed it. The top distractor (unleveraged) misstates a defining feature of futures, which derive much of their risk and return profile precisely from leverage.",
    "citation": {
      "source": "OTHER",
      "ref": "Commodity Futures Trading Commission"
    },
    "difficulty": "medium",
    "id": "74f5a9812d26",
    "subtopicId": "2.14",
    "reviewed": false
  }
];

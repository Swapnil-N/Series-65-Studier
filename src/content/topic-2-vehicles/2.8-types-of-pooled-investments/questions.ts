import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Open-end mutual fund shares are bought and sold at...",
    "choices": [
      "The next net asset value (NAV) calculated after the order is received",
      "A market-determined price that may include a premium or discount to NAV",
      "A price negotiated bilaterally between buyer and seller",
      "The previous business day's closing NAV"
    ],
    "answerIndex": 0,
    "rationale": "Open-end fund shares are continuously offered and redeemed at NAV next computed after the order is received — the 'forward pricing' principle of Rule 22c-1. The top distractor (premium/discount to NAV) describes closed-end funds, which trade in the secondary market at prices set by supply and demand and may diverge significantly from NAV.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 22c-1"
    },
    "difficulty": "easy",
    "id": "f4fef43a6d32",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Closed-end fund shares typically trade...",
    "choices": [
      "Only by redemption with the issuer at NAV",
      "On stock exchanges at prices that may be at a premium or discount to NAV",
      "At forward-priced NAV after the close of trading",
      "Privately, only among accredited investors"
    ],
    "answerIndex": 1,
    "rationale": "After their initial public offering, closed-end fund shares trade in the secondary market like other listed equities, and the market price can be above (premium) or below (discount) NAV depending on supply and demand. The top distractor (redemption at NAV) describes open-end funds; closed-end funds do not redeem shares from holders on demand at NAV.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 5"
    },
    "difficulty": "easy",
    "id": "2395529f206f",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "An exchange-traded fund (ETF) differs from a typical open-end mutual fund in that ETF shares...",
    "choices": [
      "Trade intraday on a stock exchange at market prices",
      "Are sold only at the end-of-day NAV through the fund sponsor",
      "May only be purchased by qualified purchasers",
      "Cannot be held in an ordinary brokerage account"
    ],
    "answerIndex": 0,
    "rationale": "ETFs are registered investment companies whose shares are listed on an exchange and trade throughout the day at market prices, unlike traditional open-end mutual funds, which transact only at end-of-day NAV. The top distractor (end-of-day NAV only) is precisely what distinguishes traditional open-end funds from ETFs.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "easy",
    "id": "13f16c2dcbeb",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "A unit investment trust (UIT) differs from an open-end mutual fund primarily because...",
    "choices": [
      "A UIT has a fixed, unmanaged portfolio and a defined termination date",
      "A UIT continuously issues redeemable shares at NAV",
      "A UIT must be listed on a major national securities exchange",
      "A UIT's portfolio is rebalanced daily by an investment adviser"
    ],
    "answerIndex": 0,
    "rationale": "A UIT is a type of investment company that buys a fixed portfolio of securities, issues redeemable units representing an interest in that portfolio, and terminates on a specified date when the portfolio is liquidated and proceeds distributed. The top distractor (continuous issuance at NAV) describes open-end mutual funds, which are actively managed and have no termination date.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 4"
    },
    "difficulty": "easy",
    "id": "98861edb2cce",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "To maintain favorable tax treatment, a real estate investment trust (REIT) generally must distribute at least what percentage of its taxable income to shareholders annually?",
    "choices": [
      "50%",
      "75%",
      "90%",
      "100%"
    ],
    "answerIndex": 2,
    "rationale": "Under the Internal Revenue Code, a REIT must distribute at least 90% of its taxable income each year to shareholders to retain its conduit (pass-through) tax status; otherwise it is taxed as a regular corporation. The top distractor of 100% is incorrect because the REIT may retain a small portion of taxable income, although any retained income is taxable at the entity level.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "difficulty": "easy",
    "id": "5611995eb683",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Hedge funds in the United States typically rely on which exemption to avoid registration as an investment company?",
    "choices": [
      "Section 3(c)(1) or Section 3(c)(7) of the Investment Company Act of 1940",
      "Rule 144 of the Securities Act of 1933",
      "Regulation A+ tier 2",
      "Section 4(a)(5) of the Securities Act of 1933"
    ],
    "answerIndex": 0,
    "rationale": "Most U.S. hedge funds are organized to fit within the 3(c)(1) (limited number of beneficial owners) or 3(c)(7) (qualified purchasers only) exclusions from the definition of an investment company under the 1940 Act. The top distractor (Rule 144) governs the resale of restricted and control securities, not the formation or exemption of pooled investment vehicles.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 3(c)"
    },
    "difficulty": "easy",
    "id": "79f8164dda67",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Venture capital funds primarily invest in...",
    "choices": [
      "Publicly traded large-cap equities",
      "Distressed debt of public companies",
      "Early-stage and growth-stage privately held companies",
      "Investment-grade municipal bonds"
    ],
    "answerIndex": 2,
    "rationale": "Venture capital funds provide equity capital — and frequently active management guidance — to startup and emerging-growth private companies, accepting illiquidity in exchange for the possibility of large outsized returns when an investee company is sold or goes public. The top distractor (large-cap public equities) describes the universe targeted by mutual funds and ETFs, not VC funds.",
    "citation": {
      "source": "NASAA",
      "ref": "Section II.H"
    },
    "difficulty": "easy",
    "id": "d0b4a5dde2b3",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "A typical private equity buyout fund seeks to...",
    "choices": [
      "Acquire controlling stakes in private operating companies, improve operations, and exit at a higher valuation",
      "Earn current yield by holding investment-grade corporate bonds",
      "Track a broad equity index at low cost with daily transparency",
      "Provide investors with daily liquidity at NAV"
    ],
    "answerIndex": 0,
    "rationale": "Private equity buyout funds typically take controlling stakes in operating companies (often using significant leverage), drive operational or strategic changes, and exit through sale or IPO over a multi-year holding period. The top distractor (daily liquidity at NAV) describes open-end mutual funds and is incompatible with the illiquid, long-duration nature of private equity.",
    "citation": {
      "source": "NASAA",
      "ref": "Section II.H"
    },
    "difficulty": "easy",
    "id": "dc11c3c5f17d",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Open-end mutual funds are required to redeem shares from investors...",
    "choices": [
      "Only on a quarterly redemption window",
      "Within a reasonable time, generally within seven days of tender",
      "At a secondary-market price set by an exchange specialist",
      "Only with the consent of the fund's principal underwriter"
    ],
    "answerIndex": 1,
    "rationale": "Section 22(e) of the Investment Company Act of 1940 generally requires that a registered open-end fund pay redemption proceeds within seven days of the tender of the security, except in narrow extraordinary circumstances. The top distractor (quarterly window) confuses open-end funds with hedge funds and many non-traded REITs, which often impose periodic redemption windows because they are not subject to Section 22(e).",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 22(e)"
    },
    "difficulty": "easy",
    "id": "3604bf35d520",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "The registration form used by an open-end management investment company is...",
    "choices": [
      "Form N-1A",
      "Form N-2",
      "Form N-3",
      "Form S-1"
    ],
    "answerIndex": 0,
    "rationale": "Form N-1A is the registration form prescribed by the SEC for open-end management investment companies (i.e., mutual funds and most ETFs organized as open-end funds). The top distractor (Form N-2) is the form used by closed-end management investment companies, including most listed closed-end funds and many business development companies, not open-end funds.",
    "citation": {
      "source": "SEC",
      "ref": "Form N-1A"
    },
    "difficulty": "easy",
    "id": "4d1f2ca2d519",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Under the 'forward pricing' rule, a mutual fund purchase or redemption order must be executed at...",
    "choices": [
      "The next NAV calculated after receipt of the order",
      "The most recent NAV calculated before the order was received",
      "The opening market price on the next business day",
      "A price negotiated between the broker-dealer and the fund's adviser"
    ],
    "answerIndex": 0,
    "rationale": "Rule 22c-1 under the Investment Company Act requires that orders for redeemable securities be priced at the NAV next computed after receipt of the order, eliminating the ability of investors to lock in a stale (already-known) NAV. The top distractor (most recent NAV) describes 'backward pricing,' the very abuse Rule 22c-1 was designed to prevent.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 22c-1"
    },
    "difficulty": "medium",
    "id": "fb8facfc2f0c",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Closed-end fund market prices may differ materially from net asset value because...",
    "choices": [
      "The fund's share price is determined by supply and demand in the secondary market",
      "The fund must continuously issue new shares whenever demand exceeds supply",
      "SEC rules expressly permit the adviser to set any premium it chooses",
      "Closed-end funds are subject to the forward pricing requirement of Rule 22c-1"
    ],
    "answerIndex": 0,
    "rationale": "After its IPO, a closed-end fund issues a fixed number of shares that trade on an exchange; the trading price reflects investor sentiment and order flow and need not equal NAV. The top distractor (continuous issuance) is wrong because closed-end funds do not issue shares continuously the way open-end funds do — that fixed-share structure is precisely why discounts and premiums can persist.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 5"
    },
    "difficulty": "medium",
    "id": "a8b5fccdcecf",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Section 3(c)(1) of the Investment Company Act of 1940 generally exempts a private fund from registration if its outstanding securities are owned by no more than...",
    "choices": [
      "35 non-accredited investors",
      "100 beneficial owners and the fund does not propose a public offering",
      "250 qualified clients",
      "500 qualified purchasers"
    ],
    "answerIndex": 1,
    "rationale": "Section 3(c)(1) excludes from the definition of an investment company an issuer whose outstanding securities (other than short-term paper) are beneficially owned by not more than 100 persons and that is not making and does not propose to make a public offering. The top distractor (500 qualified purchasers) describes the unrelated 3(c)(7) regime, which has no 100-owner cap but instead requires that all investors be qualified purchasers.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 3(c)(1)"
    },
    "difficulty": "medium",
    "id": "ff98db71146a",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "For purposes of Section 3(c)(7) of the Investment Company Act, a 'qualified purchaser' (natural person) generally must own not less than...",
    "choices": [
      "$1 million in liquid net worth",
      "$5 million in investments",
      "$10 million in net assets including primary residence",
      "$25 million in assets under management"
    ],
    "answerIndex": 1,
    "rationale": "A natural-person qualified purchaser is generally an individual (or family company) that owns at least $5 million in investments. The top distractor ($1 million in liquid net worth) is closer to the accredited investor net-worth standard under Regulation D, which is a much lower threshold and is not the same concept as a qualified purchaser.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 3(c)(7)"
    },
    "difficulty": "medium",
    "id": "dd3b0d0dd55f",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "A 12b-1 fee charged by a mutual fund is best described as...",
    "choices": [
      "An asset-based fee used to pay for the fund's distribution and shareholder servicing expenses",
      "A one-time front-end sales load deducted from the initial investment",
      "A deferred sales charge that declines over a multi-year holding period",
      "A performance fee on capital appreciation above a hurdle rate"
    ],
    "answerIndex": 0,
    "rationale": "Rule 12b-1 under the Investment Company Act permits a fund to use its own assets to pay for distribution and (often) shareholder-servicing expenses, charged as an annual percentage of fund assets and disclosed in the prospectus. The top distractor (front-end sales load) is a separate one-time charge paid at purchase, distinct from the recurring asset-based 12b-1 fee.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 12b-1"
    },
    "difficulty": "medium",
    "id": "98e7b19606f1",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "The role of an 'authorized participant' (AP) in an exchange-traded fund is to...",
    "choices": [
      "Custody investor assets and process individual share redemptions in cash",
      "Create or redeem ETF shares in large in-kind blocks (creation units), helping align market price with NAV",
      "Vote proxies on behalf of retail ETF shareholders",
      "Supervise the ETF's compliance program and 12b-1 plan"
    ],
    "answerIndex": 1,
    "rationale": "APs are large institutional firms that exchange a basket of underlying securities for ETF creation units (and vice versa); the resulting arbitrage between primary market creation/redemption and secondary market trading keeps an ETF's market price closely aligned with its NAV. The top distractor (custody and individual redemption) describes the transfer agent / custodian functions and the open-end-fund redemption model, neither of which is the AP's role.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "medium",
    "id": "1fcc329260ea",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Compared with an open-end mutual fund, a unit investment trust (UIT) is best characterized as...",
    "choices": [
      "An actively managed pool that issues shares continuously",
      "An unmanaged pool that holds a fixed portfolio, issues redeemable units, and terminates on a specified date",
      "A closed-end fund whose shares trade on an exchange at premiums or discounts",
      "A private fund relying on Section 3(c)(7) of the 1940 Act"
    ],
    "answerIndex": 1,
    "rationale": "A UIT buys a fixed portfolio of securities, issues redeemable units representing fractional undivided interests in that portfolio, and dissolves on a stated termination date — there is no investment adviser actively trading the portfolio. The top distractor (actively managed, continuous issuance) describes an open-end mutual fund, which is the principal contrast point students must keep straight.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 4"
    },
    "difficulty": "medium",
    "id": "4586e7ee3501",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "The key practical difference between an exchange-listed REIT and a non-traded (non-listed) REIT is that...",
    "choices": [
      "Only listed REITs are required to distribute 90% of taxable income",
      "Only non-traded REITs are permitted to invest directly in real estate",
      "Listed REITs offer daily exchange-based liquidity, while non-traded REITs are far less liquid and may impose redemption limits",
      "Non-traded REITs are exempt from SEC registration"
    ],
    "answerIndex": 2,
    "rationale": "Both listed and non-traded REITs must distribute 90% of taxable income for tax purposes, but only listed REITs trade on national securities exchanges with continuous market liquidity; non-traded REITs typically impose share-repurchase limits, queues, and gates, making them illiquid for many years. The top distractor (only listed REITs distribute 90%) is wrong because the 90% distribution requirement is a tax-status condition that applies to all REITs.",
    "citation": {
      "source": "NASAA",
      "ref": "Section II.H"
    },
    "difficulty": "medium",
    "id": "51a04ea03632",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "ETFs are often more tax-efficient than comparable open-end mutual funds primarily because...",
    "choices": [
      "ETFs can satisfy redemptions in-kind through the creation/redemption process, generally avoiding sales of appreciated holdings to meet shareholder cash redemptions",
      "ETF income is exempt from federal income tax",
      "ETFs are not required to distribute dividends or interest income",
      "All ETF capital gains are taxed at long-term rates regardless of holding period"
    ],
    "answerIndex": 0,
    "rationale": "Because ETF redemptions usually settle in-kind with the authorized participant, the ETF rarely needs to sell appreciated portfolio securities to meet shareholder redemptions, which significantly reduces capital gain distributions to remaining shareholders compared with an open-end mutual fund. The top distractor (ETF income tax-exempt) is simply false — dividends, interest, and net realized gains are taxable to ETF shareholders just as for any other registered fund.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "medium",
    "id": "0b1b81069305",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "The hedge fund fee structure commonly described as '2 and 20' refers to...",
    "choices": [
      "A 2% sales load and a 20% deferred sales charge",
      "A 2% annual management fee plus a 20% performance fee on profits, often subject to a high-water mark",
      "A 2% redemption fee and a 20% lockup penalty",
      "A 2% 12b-1 fee and a 20% custody fee"
    ],
    "answerIndex": 1,
    "rationale": "Hedge funds traditionally charge an annual management fee (often around 2%) on assets under management plus a performance/incentive fee (often around 20%) on profits, frequently subject to a high-water mark so the manager isn't paid twice on the same gains. The top distractor (sales load + deferred load) describes mutual fund A/B share charge structures, which are unrelated to a hedge fund's manager compensation.",
    "citation": {
      "source": "NASAA",
      "ref": "Section II.H"
    },
    "difficulty": "medium",
    "id": "a1c8dff52ed8",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Private equity and venture capital funds commonly impose multi-year capital lockups because...",
    "choices": [
      "SEC rules prohibit liquid investments inside any private fund",
      "The illiquid nature of their underlying investments — privately held businesses — makes regular liquidity infeasible",
      "They are required to distribute capital only at fixed five-year intervals under the Investment Company Act",
      "NASAA model rules require a minimum 10-year lockup for any private fund"
    ],
    "answerIndex": 1,
    "rationale": "PE and VC funds invest in private operating businesses that take years to mature and exit; there is no liquid market in which the fund could sell holdings on demand, so investor capital is contractually locked up to match the underlying investment horizon. The top distractor (SEC bans liquid holdings) is invented — there is no such SEC rule; the lockups are a structural necessity, not a regulatory mandate.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 3(c)"
    },
    "difficulty": "medium",
    "id": "da5ad59dd7aa",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "A venture capital fund is most likely to provide...",
    "choices": [
      "Equity capital and managerial guidance to early-stage companies in exchange for an ownership stake",
      "Senior secured debt to investment-grade public companies",
      "Daily-priced exposure to large-cap U.S. equities",
      "Fixed-income exposure through registered ETFs"
    ],
    "answerIndex": 0,
    "rationale": "Venture capital funds typically buy preferred or common equity in startups and growth-stage companies and frequently take board seats or play an active operational role to help build value before an exit. The top distractor (senior secured debt to public companies) describes direct lending or corporate credit strategies, not VC, which is by definition equity-oriented and focused on private, early-stage businesses.",
    "citation": {
      "source": "NASAA",
      "ref": "Section II.H"
    },
    "difficulty": "medium",
    "id": "c74c83fdbf5a",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Initial purchases of a closed-end fund are made through...",
    "choices": [
      "A one-time IPO at a fixed offering price; thereafter shares trade in the secondary market",
      "A continuous offering at NAV plus any sales charge",
      "Direct redemption with the issuer at NAV",
      "Privately negotiated transactions limited to qualified purchasers"
    ],
    "answerIndex": 0,
    "rationale": "A closed-end fund raises capital in an IPO, after which the fixed share count trades on an exchange or OTC; new investors must buy in the secondary market rather than from the issuer. The top distractor (continuous offering at NAV) describes the perpetual primary offering of an open-end mutual fund, not a closed-end fund.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 5"
    },
    "difficulty": "medium",
    "id": "52ea51809e1a",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Under Section 22(d) of the Investment Company Act of 1940, dealers selling redeemable mutual fund shares to the public generally must do so at...",
    "choices": [
      "A price negotiated between the dealer and the customer",
      "The current public offering price described in the prospectus",
      "A discount to NAV reflecting bulk purchases",
      "The most recent secondary-market closing price"
    ],
    "answerIndex": 1,
    "rationale": "Section 22(d) prohibits a dealer from selling redeemable securities to the public except at a current public offering price described in the prospectus, preserving uniform pricing and preventing inter-dealer price competition on fund sales. The top distractor (negotiated price) is precisely the practice 22(d) was designed to prevent in mutual fund distribution.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 22(d)"
    },
    "difficulty": "medium",
    "id": "d730aa51befe",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Net asset value (NAV) per share of a mutual fund is calculated as...",
    "choices": [
      "(Total assets - total liabilities) / shares outstanding",
      "Total assets / shares outstanding",
      "(Total assets + accrued income) / shares authorized",
      "Market price / earnings per share"
    ],
    "answerIndex": 0,
    "rationale": "NAV per share equals the fund's total assets minus total liabilities, divided by the number of shares outstanding; this is the price at which open-end shares are issued and redeemed. The top distractor (total assets / shares outstanding) ignores liabilities and would overstate NAV, which is a common student error.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 2"
    },
    "difficulty": "medium",
    "id": "715ec6827936",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Compared with an exchange-listed REIT, a non-traded REIT typically...",
    "choices": [
      "Offers greater intraday liquidity to investors",
      "Charges lower upfront fees and imposes no redemption restrictions",
      "Has a limited or restricted share-repurchase program and is generally far less liquid",
      "Is exempt from filing a registration statement with the SEC"
    ],
    "answerIndex": 2,
    "rationale": "Non-traded REITs typically offer only periodic share repurchases subject to quarterly or annual caps and management discretion, frequently carry significantly higher upfront sales charges, and lack daily exchange liquidity. The top distractor (greater intraday liquidity) is the opposite of reality — daily exchange trading is the hallmark of a listed REIT, not a non-traded one.",
    "citation": {
      "source": "NASAA",
      "ref": "Section II.H"
    },
    "difficulty": "medium",
    "id": "e9e5463fce5d",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "A private fund's exemption under Section 3(c)(1) of the Investment Company Act of 1940 is generally lost if the fund...",
    "choices": [
      "Charges a performance-based fee to its investors",
      "Has more than 100 beneficial owners or makes a public offering of its securities",
      "Has more than 35 non-accredited investors among its limited partners",
      "Holds illiquid securities exceeding 15% of net assets"
    ],
    "answerIndex": 1,
    "rationale": "Section 3(c)(1) is forfeited the moment the fund exceeds 100 beneficial owners (subject to limited look-through rules) or starts a public offering, at which point it would have to register as an investment company. The top distractor (performance fees) is unrelated to 3(c)(1); performance fees are governed by other rules (Section 205 of the Advisers Act and Rule 205-3) and do not by themselves break the 3(c)(1) exclusion.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 3(c)(1)"
    },
    "difficulty": "hard",
    "id": "6aa7c86ba1b9",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Under Section 3(c)(7) of the Investment Company Act of 1940, the qualified purchaser standard for a natural person generally requires ownership of...",
    "choices": [
      "$1 million in net worth excluding primary residence",
      "$200,000 of annual income",
      "$5 million in investments",
      "$25 million in net assets across all accounts"
    ],
    "answerIndex": 2,
    "rationale": "A qualified purchaser who is a natural person must generally own not less than $5 million in investments; this threshold is materially higher than the accredited investor standard. The top distractor ($1 million net worth ex-primary residence) is the accredited investor net-worth test under Regulation D, which applies to securities offerings — not the qualified purchaser test under the 1940 Act.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 3(c)(7)"
    },
    "difficulty": "hard",
    "id": "47d7be50696f",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Under Title IV of the Dodd-Frank Act, an adviser that advises solely private funds and has U.S. assets under management of less than $150 million is generally...",
    "choices": [
      "Prohibited from advising private funds",
      "An 'exempt reporting adviser' — exempt from full SEC registration but still required to file portions of Form ADV",
      "Required to register at the state level under the Uniform Securities Act regardless of AUM",
      "Permitted to operate without any filings of any kind"
    ],
    "answerIndex": 1,
    "rationale": "The Dodd-Frank private fund adviser exemption (Section 203(m) of the Advisers Act, implemented by Title IV) treats such advisers as 'exempt reporting advisers,' free from full registration but still required to file specified items of Form ADV with the SEC. The top distractor (state registration under the USA) is wrong because federal preemption and the carve-outs created by Dodd-Frank route private fund advisers through the SEC's exempt reporting framework, not through full state registration.",
    "citation": {
      "source": "SEC",
      "ref": "Dodd-Frank Title IV"
    },
    "difficulty": "hard",
    "id": "8563d787c45d",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Under Section 22(e) of the Investment Company Act of 1940, a registered open-end fund is generally required to pay redemption proceeds...",
    "choices": [
      "Within one business day",
      "Within three business days (T+3 settlement)",
      "Within seven days of tender of the security for redemption",
      "Within thirty days, in the discretion of the fund's adviser"
    ],
    "answerIndex": 2,
    "rationale": "Section 22(e) generally requires payment of redemption proceeds within seven days of tender, with limited exceptions for emergencies, NYSE closings, or SEC-issued orders. The top distractor (T+3 settlement) confuses general broker-dealer settlement conventions for equities with the specific seven-day redemption obligation imposed on registered open-end funds.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 22(e)"
    },
    "difficulty": "hard",
    "id": "9fce4a45c506",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "When a private fund relies on Rule 506(c) of Regulation D to permit general solicitation, the issuer must...",
    "choices": [
      "File a Form S-1 registration statement with the SEC",
      "Take reasonable steps to verify that all purchasers are accredited investors",
      "Limit the offering to no more than 35 non-accredited investors",
      "Cap the offering at $5 million in any 12-month period"
    ],
    "answerIndex": 1,
    "rationale": "Rule 506(c) trades the right to use general solicitation for the heightened obligation that the issuer take reasonable steps to verify purchasers' accredited investor status, going beyond mere self-certification. The top distractor (35 non-accredited investors) is a feature of Rule 506(b), where general solicitation is prohibited and a limited number of sophisticated, non-accredited investors may participate; 506(c) does not allow any non-accredited investors.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 506(c)"
    },
    "difficulty": "hard",
    "id": "550b8a90a0c6",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "When a unit investment trust reaches its stated termination date, its portfolio is generally...",
    "choices": [
      "Reorganized automatically into an open-end mutual fund",
      "Liquidated and the proceeds distributed to unit holders",
      "Continuously rolled into a successor UIT without unit holder action",
      "Transferred to a closed-end fund at NAV"
    ],
    "answerIndex": 1,
    "rationale": "Because a UIT has a fixed portfolio and a defined life, at termination the portfolio is liquidated and proceeds are distributed pro rata to unit holders, who may then elect to invest elsewhere. The top distractor (auto-conversion to an open-end fund) is incorrect because UITs are not actively managed and have no inherent mechanism to morph into a continuously offered, managed open-end fund.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 4"
    },
    "difficulty": "hard",
    "id": "b9997f428e7f",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "ETF shares enter the market through a creation process in which an authorized participant...",
    "choices": [
      "Wires cash equal to NAV in exchange for newly issued ETF shares",
      "Delivers a 'creation basket' of underlying securities to the ETF in exchange for a large block of ETF shares",
      "Establishes a short position in the ETF that is then borrowed by retail investors",
      "Provides a statement of accreditation enabling individual share creation"
    ],
    "answerIndex": 1,
    "rationale": "In the standard ETF creation mechanism, an AP delivers a specified basket of portfolio securities (sometimes plus cash) to the ETF and receives newly issued ETF shares in 'creation unit' blocks; the AP then sells those shares in the secondary market or holds them. The top distractor (cash payment at NAV) describes the open-end mutual fund subscription process and misses the in-kind, basket-based mechanism that drives ETF tax efficiency and price alignment.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "difficulty": "medium",
    "id": "361927bfffc7",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "Hedge funds frequently impose initial lockups, advance redemption notice periods, and 'gates' on withdrawals because...",
    "choices": [
      "SEC rules prohibit any redemption from a private fund",
      "Such restrictions help manage illiquid or complex strategies and prevent forced fire-sales during stressed redemption periods",
      "NASAA model rules cap investor redemptions at no more than 10% per year",
      "Hedge fund advisers are required by the Investment Advisers Act to impose lockups"
    ],
    "answerIndex": 1,
    "rationale": "Liquidity restrictions match a hedge fund's redemption profile to the liquidity of its portfolio (e.g., distressed debt, derivatives, less-liquid equities), and gates protect remaining investors from being harmed by mass redemptions during volatile periods. The top distractor (SEC bans redemptions) is invented; redemption terms are contractual, not prohibited by SEC rule, and most hedge funds do permit periodic redemptions subject to the contract.",
    "citation": {
      "source": "NASAA",
      "ref": "Section II.H"
    },
    "difficulty": "medium",
    "id": "a4266997f8ad",
    "subtopicId": "2.8",
    "reviewed": false
  },
  {
    "stem": "In a 'master-feeder' private fund structure...",
    "choices": [
      "Separate feeder funds (commonly U.S. taxable, U.S. tax-exempt, and offshore) invest substantially all of their assets into a single master fund that holds the actual portfolio",
      "A single feeder fund channels capital into multiple unrelated master funds",
      "The master fund must register under the Investment Company Act of 1940",
      "All investors must be qualified clients under Rule 205-3"
    ],
    "answerIndex": 0,
    "rationale": "Master-feeder structures pool capital from differently situated investor groups (each in its own feeder vehicle for tax/regulatory reasons) into one master fund that does the trading, simplifying portfolio management while preserving tax and regulatory differentiation at the feeder level. The top distractor (one feeder, many masters) inverts the structure; the defining feature is many feeders into one master, not the reverse.",
    "citation": {
      "source": "NASAA",
      "ref": "Section II.H"
    },
    "difficulty": "hard",
    "id": "df0ebf2901e7",
    "subtopicId": "2.8",
    "reviewed": false
  }
];

import type { Card } from "../../../types/content";

export const cards: Card[] = [
  {
    "front": "How is a mutual fund's net asset value (NAV) per share computed?",
    "back": "NAV per share equals the fund's total assets minus total liabilities, divided by the number of shares outstanding. Open-end funds must compute NAV at least once each business day, ordinarily at the 4:00 p.m. ET close of the major U.S. exchanges.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 22"
    },
    "id": "43aa4e297c64",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "How is the price determined for a mutual fund purchase or redemption order placed during market hours?",
    "back": "The order executes at the next NAV calculated after the fund receives the order, not the prior day's close. This forward-pricing requirement prevents arbitrage against stale, already-known share prices.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 22c-1"
    },
    "id": "7d9b6a6559f9",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "Why can a closed-end fund's market price diverge from its NAV?",
    "back": "Closed-end fund shares trade on an exchange at prices set by supply and demand and the fund does not redeem shares, so the market price can sit at a premium above NAV or a discount below NAV indefinitely. There is no continuous creation/redemption mechanism to force convergence.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 5"
    },
    "id": "31b19606acfb",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "How is an ETF's market price kept aligned with its NAV throughout the trading day?",
    "back": "Authorized participants create or redeem shares in large in-kind blocks (creation units), buying when the ETF trades below NAV and selling when it trades above, which arbitrages away meaningful premiums and discounts. As a result ETF prices typically track NAV intraday within a narrow band.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "id": "1bcd2c9b7f47",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "What distinguishes Class A mutual fund shares from Class B and Class C?",
    "back": "Class A shares carry a front-end sales charge deducted at purchase, with breakpoint discounts available for larger investments and lower ongoing 12b-1 fees. They are usually the lowest total-cost choice for long-term, large-dollar investors.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 12b-1"
    },
    "id": "e2037278c96d",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "What are the defining cost features of Class B mutual fund shares?",
    "back": "Class B shares have no front-end load but impose a contingent deferred sales charge (CDSC) that declines each year and carry higher 12b-1 fees than Class A. After a set holding period (often six to eight years) they typically convert to Class A shares with lower ongoing expenses.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 12b-1"
    },
    "id": "25367d341e50",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "What is the principal cost characteristic of Class C mutual fund shares?",
    "back": "Class C shares charge a level annual 12b-1 fee (commonly about 1.00%) with no front-end load and only a small short-term CDSC, and they generally do not convert to Class A. They are most economical for investors with relatively short holding periods.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 12b-1"
    },
    "id": "ca627f6a88f3",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "What is the maximum 12b-1 fee a fund may charge and still be marketed as 'no-load'?",
    "back": "FINRA permits a fund to call itself 'no-load' only if its annual 12b-1 distribution and service fees do not exceed 0.25% of average net assets. Funds with 12b-1 fees up to 0.75% plus a 0.25% service fee are allowed but cannot use the 'no-load' label.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 12b-1"
    },
    "id": "90dc37fd76f1",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "What is a mutual fund breakpoint?",
    "back": "A breakpoint is a dollar-investment threshold (for example $25,000, $50,000, or $100,000) at which the front-end sales charge on Class A shares is reduced. Inducing a customer to invest just below a breakpoint is a prohibited 'breakpoint sale.'",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA"
    },
    "id": "4248f9ad85ce",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "How does a Letter of Intent (LOI) help a mutual fund investor reduce sales charges?",
    "back": "An LOI allows the investor to commit in writing to reach a breakpoint over up to 13 months and to pay the lower breakpoint sales charge on each purchase in the interim. If the LOI is not completed, the fund recovers the additional sales charge, usually from escrowed shares.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA"
    },
    "id": "4731d5633eee",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "What is rights of accumulation (ROA) within a mutual fund family?",
    "back": "ROA lets an investor combine the current value of existing holdings (typically within the same fund family and across related accounts) with a new purchase to qualify for breakpoint discounts. Unlike an LOI, ROA has no time limit and no commitment to invest additional dollars.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA"
    },
    "id": "090ea2d7facc",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "Compare the liquidity profiles of open-end mutual fund, closed-end fund, and ETF shares.",
    "back": "Open-end mutual funds offer a redemption right at the next-computed NAV with proceeds normally paid within seven days. Closed-end fund and ETF shares are sold to other investors on an exchange at intraday market prices, providing continuous trading liquidity but no redemption obligation by the fund.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 22(e)"
    },
    "id": "ab1040a45039",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "Within what period must an open-end fund pay redemption proceeds to a shareholder?",
    "back": "The Investment Company Act requires payment within seven days of tender of the shares, except in extraordinary circumstances permitted by the SEC. This statutory redemption right is the defining liquidity feature of an open-end fund.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 22(e)"
    },
    "id": "cee9432f3224",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "What tax treatment does a regulated investment company (RIC) receive under Subchapter M?",
    "back": "If a fund distributes at least 90% of its net investment income to shareholders, it is taxed only on income it retains; the distributed income passes through to shareholders, who pay tax on it. This conduit treatment avoids double taxation at the fund and shareholder levels.",
    "citation": {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    "id": "43c4d52a710b",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "How are mutual fund capital-gain distributions taxed to a shareholder?",
    "back": "Capital-gain distributions are taxed as long-term capital gains regardless of how long the shareholder has held the fund shares. They are taxable in the year distributed even when the shareholder elects to reinvest them in additional shares.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "id": "e349e9f9665b",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "How do reinvested mutual fund distributions affect a shareholder's cost basis?",
    "back": "Distributions reinvested in additional shares are currently taxable and increase the investor's aggregate cost basis by the dollar amount reinvested. Failing to add reinvestments to basis results in double taxation when shares are eventually sold.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "id": "c1b1eccdc7cb",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "Why are ETFs generally more tax-efficient than comparable mutual funds?",
    "back": "ETFs use in-kind creation and redemption with authorized participants, allowing the fund to deliver appreciated securities rather than sell them, which minimizes realized capital gains. Open-end mutual funds, by contrast, often must sell holdings to meet cash redemptions, generating taxable distributions to remaining shareholders.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "id": "8b4acce16015",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "What does a fund's expense ratio represent?",
    "back": "The expense ratio is the percentage of average net assets paid each year for management fees, 12b-1 fees, and other operating expenses. It is deducted automatically from fund assets and directly reduces the return earned by shareholders.",
    "citation": {
      "source": "SEC",
      "ref": "Form N-1A"
    },
    "id": "fb2297c1f908",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "Differentiate a fund's management fee from its 12b-1 fee.",
    "back": "The management fee compensates the investment adviser for portfolio management and is normally the largest line in the expense ratio. The 12b-1 fee is a distribution and shareholder-servicing charge paid out of fund assets to brokers and other intermediaries.",
    "citation": {
      "source": "SEC",
      "ref": "Rule 12b-1"
    },
    "id": "c63de2aa60b5",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "What is the maximum aggregate sales charge FINRA permits a mutual fund to impose?",
    "back": "FINRA caps total sales charges on mutual fund purchases at 8.5% of the offering price. To charge the full 8.5%, the fund must offer breakpoints, rights of accumulation, and reinvestment of distributions at NAV; absence of these features lowers the permissible cap.",
    "citation": {
      "source": "OTHER",
      "ref": "FINRA"
    },
    "id": "6c144c7e4f93",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "What action requires a shareholder vote when a fund changes investment policy?",
    "back": "Any change to a fund's fundamental investment policy - such as its objective, concentration, borrowing limits, or diversification status - requires approval by a majority vote of outstanding voting securities. Non-fundamental policies can be changed by the board alone.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 13"
    },
    "id": "6c6d3bdab813",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "Why does portfolio manager tenure matter when evaluating an actively managed fund?",
    "back": "Historical performance was produced by the manager(s) in place at the time, so a longer continuous tenure makes the track record meaningful evidence of skill. A recent manager change can render the prior performance record largely irrelevant to expected future results.",
    "citation": {
      "source": "OTHER",
      "ref": "Morningstar"
    },
    "id": "5a5b7ece4c64",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "What is the role of a benchmark in fund performance evaluation?",
    "back": "A benchmark is an index whose asset class and risk profile match the fund's strategy, used to assess whether the manager added value relative to passive exposure. A large-cap U.S. equity fund, for example, is typically measured against the S&P 500.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "4c951dc50d91",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "Distinguish growth, value, and blend equity investment styles.",
    "back": "Growth funds buy companies with above-average earnings or revenue expansion, often at higher P/E ratios; value funds buy companies trading below intrinsic-value measures; and blend funds combine both. Style classification matters because each approach behaves differently across market cycles.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "05a36039e738",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "Identify two principal benefits a pooled investment offers a small retail investor.",
    "back": "Pooled investments provide professional portfolio management and broad diversification across many securities at a low per-investor cost, both of which would be impractical to replicate individually. They also simplify recordkeeping and provide access to institutional-quality execution.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "id": "265c0941e394",
    "subtopicId": "2.9",
    "reviewed": false
  },
  {
    "front": "Identify two principal risks unique to investing through a pooled vehicle rather than directly in securities.",
    "back": "The investor bears manager risk - the chance the portfolio manager underperforms a passive benchmark - and pays layered fees (advisory, 12b-1, and operating expenses) that erode net returns. The investor also lacks control over the timing of capital-gain distributions, which can create unexpected tax liabilities.",
    "citation": {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    "id": "4ee632aa29ea",
    "subtopicId": "2.9",
    "reviewed": false
  }
];

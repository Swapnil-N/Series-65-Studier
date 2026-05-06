import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Pooled Investments: Share Classes, Fees, Pricing, and Comparisons",
  "bodyMd": "A **pooled investment** is a vehicle that combines money from many investors and uses it to buy a diversified portfolio managed on their behalf. The Series 65 outline groups three closely related forms of these vehicles together — open-end mutual funds, closed-end funds (CEFs), and exchange-traded funds (ETFs) — and then asks you to compare their share classes, liquidity, taxes, fees, pricing, benefits, risks, and how to evaluate one fund against another. The legal scaffolding for all three is the **Investment Company Act of 1940**, which created the registered investment company in the first place and still dictates how their shares are priced, redeemed, and disclosed.\n\nThe recurring theme is that the same underlying portfolio can be wrapped in very different ways, and the wrapper changes the cost, liquidity, and tax outcome an investor actually experiences.\n\n### Share Classes and Fee Structures\n\nOpen-end mutual funds typically offer multiple **share classes** that hold the same portfolio but charge investors differently. The exam expects you to recognize three retail classes plus an institutional class:\n\n- **Class A** shares charge a **front-end load** — a sales charge taken off the top of the purchase. The trade-off is a lower ongoing 12b-1 fee. Larger investments cross **breakpoints**, reducing the load.\n- **Class B** shares charge a **contingent deferred sales charge** (CDSC) that declines each year and eventually disappears, often at which point the shares convert to Class A. Class B has a higher 12b-1 fee while outstanding. Most fund families have stopped issuing new Class B shares, but they still appear in legacy holdings.\n- **Class C** shares charge no front-end load but a higher ongoing 12b-1 fee (typically the maximum 1.00% of average net assets) and a small CDSC for the first year. They are cheaper for short holds and more expensive for long ones.\n- **Institutional ('I') shares** carry the lowest expenses and waive the 12b-1 fee entirely, but require a high minimum investment.\n\nA **12b-1 fee** is a distribution and shareholder-servicing fee charged out of fund assets and authorized by **Rule 12b-1** under the Investment Company Act of 1940. Total 12b-1 fees may not exceed 1.00% of average net assets per year, and a fund cannot be marketed as 'no-load' if it charges more than 0.25%. Beyond 12b-1, every fund has a **management fee** (paid to the adviser), **other operating expenses** (custody, transfer agent, audit), and the sum is reported as the **expense ratio** in the prospectus required by **Form N-1A**.\n\nBecause identical portfolios can sit inside very different cost wrappers, the holding period drives which class is cheapest. A rough comparison for a $10{,}000 investment over $T$ years, ignoring breakpoints and assuming a constant 12b-1 fee $b$ per year:\n\n$$\\text{Total cost}_A \\approx 10{,}000 \\cdot \\text{load}_A + 10{,}000 \\cdot b_A \\cdot T$$\n\n$$\\text{Total cost}_C \\approx 10{,}000 \\cdot b_C \\cdot T$$\n\nIf $b_C - b_A = 0.75\\%$ and Class A's load is 5.00%, the breakeven is roughly $0.05 / 0.0075 \\approx 6.7$ years. Shorter than that, Class C is cheaper; longer, Class A wins.\n\n### Pricing: NAV, Premiums, and Discounts\n\nEvery pooled fund computes a **net asset value (NAV)** at least once per business day:\n\n$$\\text{NAV per share} = \\frac{\\text{Total assets} - \\text{Total liabilities}}{\\text{Shares outstanding}}$$\n\nHow NAV interacts with the price an investor pays differs by structure:\n\n- **Open-end mutual funds** issue and redeem shares directly with the fund. Under **Rule 22c-1** (the forward-pricing rule), purchase and redemption orders are filled at the **next** NAV calculated after the order is received, not the prior day's NAV. **Investment Company Act of 1940 Section 22(d)** prevents broker-dealers from selling fund shares at anything other than the public offering price set in the prospectus. **Investment Company Act of 1940 Section 22(e)** requires redemption proceeds to be paid within seven days. There is no premium or discount because the share price is the NAV (plus any front-end load).\n- **Closed-end funds** issue a fixed number of shares in an IPO (registered on **Form N-2**) and then trade on an exchange. Their market price is set by supply and demand and frequently differs from NAV, producing a **premium** (price > NAV) or, more commonly, a **discount** (price < NAV):\n\n$$\\text{Premium/Discount \\%} = \\frac{\\text{Market Price} - \\text{NAV}}{\\text{NAV}} \\times 100$$\n\nA negative result is a discount.\n- **ETFs** also trade intraday on exchanges, but a creation-and-redemption mechanism with **authorized participants** keeps the market price tightly anchored to NAV. Small premiums and discounts can appear during the day, especially in less liquid asset classes, but arbitrage normally closes them.\n\n### Liquidity, Taxes, and Costs\n\n**Liquidity.** Open-end funds can always be redeemed at NAV — Section 22(e) gives the fund up to seven days to pay. Closed-end funds and ETFs offer intraday exchange liquidity, but actual execution depends on bid-ask spreads. Closed-end funds with thinly traded shares can be hard to exit at a fair price.\n\n**Tax implications.** Under Subchapter M of the **Internal Revenue Code**, a registered investment company that distributes substantially all of its income avoids fund-level tax — income and realized gains flow through to shareholders. Distributions of long-term capital gains keep their character regardless of how long the investor has held the fund shares. ETFs typically generate fewer taxable capital-gain distributions than mutual funds because the in-kind creation and redemption process lets them flush appreciated securities out of the portfolio without realizing gains. **IRS Publication 550** is the consumer-facing reference for fund taxation.\n\n**Other costs.** ETF and CEF investors also pay a brokerage commission (or a spread) to trade, which mutual fund investors generally do not. Mutual funds may charge a **redemption fee** for short holding periods, disclosed on Form N-1A.\n\n### Comparing Funds: Benchmarks, Tenure, Policy, and Style\n\nWhen comparing two funds, an adviser should hold four things constant:\n\n- **Benchmark.** Returns are only meaningful relative to an index that matches the strategy — a large-cap U.S. equity fund should be measured against the S&P 500, not a global index. **Morningstar** publishes peer-group categories and benchmark assignments that the industry treats as a standard reference.\n- **Manager tenure.** A 10-year track record produced by a manager who left two years ago tells you very little about the current portfolio. Form N-1A requires disclosure of the portfolio managers and how long they have run the fund.\n- **Change in investment policy.** A material change in a fund's fundamental investment policy requires a **shareholder vote** under **Investment Company Act of 1940 Section 13**, so a recent policy change is a flag that historical performance may not be representative going forward.\n- **Style.** Morningstar's style box (large/mid/small by value/blend/growth for equities; credit quality by duration for bonds) lets advisers verify that a fund's actual holdings match its label. Two 'large-cap blend' funds can have very different sector weightings, and 'growth' can mean different things across managers.\n\nMarketing materials touting any of these comparisons are governed by **FINRA Rule 2210**, which requires that performance numbers be fair and balanced and presented alongside standardized total return.\n\n### Worked Example\n\nAn investor is choosing between Class A and Class C shares of the same fund for a $25{,}000 purchase she intends to hold for 4 years. Class A has a 4.50% front-end load and a 0.25% 12b-1 fee; Class C has no load and a 1.00% 12b-1 fee. Assume the underlying portfolio returns 7% per year before fees, and ignore breakpoints.\n\nClass A initial investment after the load: $25{,}000 \\times (1 - 0.045) = \\$23{,}875$. After 4 years compounding at $7\\% - 0.25\\% = 6.75\\%$:\n\n$$23{,}875 \\times (1.0675)^{4} \\approx \\$30{,}944$$\n\nClass C: full $25{,}000 invested but compounding at $7\\% - 1.00\\% = 6.00\\%$:\n\n$$25{,}000 \\times (1.06)^{4} \\approx \\$31{,}561$$\n\nAt a 4-year horizon, Class C is ahead by about $617. The breakeven extends past roughly 7 years; for a long hold, Class A would dominate because the load is paid only once but the higher 12b-1 fee compounds against Class C every year.\n\n### Summary\n\nPooled investments register under the **Investment Company Act of 1940** and disclose their costs and policies on **Form N-1A** (open-end) or **Form N-2** (closed-end). Mutual funds price once daily at NAV under **Rule 22c-1**; closed-end funds and ETFs trade intraday and can sit at a premium or discount, though ETF arbitrage usually keeps the gap small. Share classes (A, B, C, institutional) repackage the same portfolio with different load and **Rule 12b-1** combinations, so the right class depends on the holding period. Funds pass income through to shareholders when they distribute it (the consumer-facing reference is **IRS Publication 550**), and ETFs are typically more tax-efficient than mutual funds. To compare funds, hold the benchmark, manager tenure, investment policy, and style constant — only then is a return difference meaningful.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "SEC",
      "ref": "Investment Company Act of 1940"
    },
    {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 13"
    },
    {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 22(d)"
    },
    {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 22(e)"
    },
    {
      "source": "SEC",
      "ref": "Rule 12b-1"
    },
    {
      "source": "SEC",
      "ref": "Rule 22c-1"
    },
    {
      "source": "SEC",
      "ref": "Form N-1A"
    },
    {
      "source": "SEC",
      "ref": "Form N-2"
    },
    {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    {
      "source": "OTHER",
      "ref": "FINRA Rule 2210"
    },
    {
      "source": "OTHER",
      "ref": "Morningstar"
    }
  ],
  "subtopicId": "2.9",
  "reviewed": false
};

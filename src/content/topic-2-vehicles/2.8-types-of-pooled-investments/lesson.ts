import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Types of Pooled Investments",
  "bodyMd": "A pooled investment is a single security backed by a portfolio that many investors share. Instead of buying twenty bonds and forty stocks separately, an investor buys one share of the pool and gets a proportional slice of everything inside. The Investment Company Act of 1940 supplies the rulebook for the regulated end of this market — mutual funds, closed-end funds, UITs, and ETFs — and Section 4 of that Act formally divides registered investment companies into three classes: face-amount certificate companies, unit investment trusts, and management companies (which are then split into open-end and closed-end under Section 5). Private pools sit outside that regime under narrow exemptions.\n\n### Mutual Funds: Open-End and Closed-End\n\nA **mutual fund** is a managed pool that issues shares to the public. The two flavors look similar on the surface but trade and price very differently.\n\nAn **open-end fund** continuously offers and redeems shares directly with the fund. The price an investor pays or receives is not set by supply and demand on an exchange; it is the fund's net asset value per share, calculated at least once per business day after the market close:\n\n$$\\text{NAV per Share} = \\frac{\\text{Total Assets} - \\text{Total Liabilities}}{\\text{Shares Outstanding}}$$\n\nInvestment Company Act Section 22(d) and Rule 22c-1 require that all orders received before the next pricing point execute at that next computed NAV — a practice known as **forward pricing**. This is why a buy ticket entered at 11 a.m. fills at the 4 p.m. NAV, not at some intraday quote. Open-end funds register on **Form N-1A**, must pay redemption proceeds within seven days of a valid request under Section 22(e), and may charge an annual distribution and shareholder-services fee under **Rule 12b-1** that FINRA caps at 0.75% (plus a separate 0.25% service fee) of average net assets per year.\n\nA **closed-end fund** raises a fixed pool of capital in an initial public offering, then lists those shares on an exchange. After the IPO, no new shares are issued and existing shares are not redeemable; an investor exits by selling the share to another investor at the *market* price, which can trade at a premium or discount to NAV. Closed-ends register on **Form N-2** and may use leverage, hold illiquid securities, and run concentrated positions in ways open-end funds cannot.\n\nThe exam-tested distinction:\n\n- Open-end: priced at NAV, sold by prospectus, redeemable, capitalization variable.\n- Closed-end: priced by the market, traded like any listed security after IPO, not redeemable, capitalization fixed.\n\n### Private Funds: Hedge, Private Equity, and Venture Capital\n\n**Hedge funds, private equity (PE), and venture capital (VC)** are pooled vehicles that avoid registration as investment companies by relying on the exclusions in Investment Company Act of 1940 Section 3(c)(1) (no more than 100 beneficial owners) or Section 3(c)(7) (sold only to 'qualified purchasers'). They simultaneously avoid public offering registration by selling under Securities Act of 1933 Section 4(a)(2) and Regulation D, almost always Rule 506(b) (no general solicitation) or Rule 506(c) (general solicitation permitted, but verified accredited investors only).\n\nThe trade-off is that these pools accept only sophisticated investors and impose restrictive terms in exchange for flexibility:\n\n- **Hedge funds** chase absolute return using leverage, short selling, derivatives, and concentrated bets. Investors are typically locked in for an initial period, then can redeem only on quarterly or semiannual gates with advance notice. Fees follow a '2 and 20' pattern — roughly 2% management plus 20% of gains above a hurdle.\n- **Private equity** funds buy whole companies or controlling stakes, hold them five to ten years, and exit through a sale or IPO. Capital is *committed* up front but *called* over time as deals close.\n- **Venture capital** is a subset of PE focused on early-stage companies; it accepts very high failure rates in exchange for a few outsized winners.\n\nAdviser-side regulation tightened materially after Dodd-Frank Title IV: most hedge-fund and PE managers above the federal threshold must register on Form ADV with the SEC, while many VC-only managers can claim an exempt reporting adviser status.\n\n### UITs, ETFs, and REITs\n\nA **unit investment trust (UIT)** is the third class of registered investment company defined by Section 4. A UIT buys a fixed portfolio of securities at inception, issues 'units' representing a proportional interest in that portfolio, and then runs on autopilot — there is no portfolio manager and no ongoing trading. The trust has a stated termination date, at which point holdings are sold and proceeds returned to unit holders. Units are *redeemable* at NAV, which makes a UIT functionally similar to a small, finite-life mutual fund without the management.\n\nAn **exchange-traded fund (ETF)** is a hybrid that solves the closed-end discount problem. Most ETFs register as open-end management companies under the 1940 Act but list and trade like stocks throughout the day. The mechanism that keeps the market price tethered to NAV is the **creation/redemption process**: large authorized participants (APs) deliver a basket of the underlying securities to the fund in exchange for newly created ETF 'creation units' (typically 50,000 shares), or hand creation units back to receive the underlying basket. When the ETF price drifts above NAV, APs create and sell; when it drifts below, APs buy and redeem. This in-kind arbitrage normally also makes ETFs more tax-efficient than mutual funds because realized capital gains inside the fund are minimized.\n\n**Real estate investment trusts (REITs)** are pass-through vehicles that invest in real property (equity REITs) or property loans (mortgage REITs). To qualify under the Internal Revenue Code, a REIT must distribute at least 90% of its taxable income to shareholders annually; in exchange, the trust itself pays no entity-level federal tax. Distributions reach the investor as a mix of ordinary income, qualified dividends, capital gains, and return of capital, generally without the corporate-level double taxation that hits ordinary stock dividends.\n\nREITs come in two liquidity profiles the exam wants you to separate:\n\n- **Listed (liquid) REITs** trade on a national exchange like any common stock. Price is set by the market, and investors can exit on any trading day.\n- **Non-listed and private (non-liquid) REITs** do not trade on an exchange. Non-listed public REITs are SEC-registered and sold through broker-dealers, but redemptions are limited (often quarterly, with caps) and require holding for several years until a 'liquidity event' such as a listing, merger, or wind-down. Private REITs rely on Regulation D and are restricted to accredited investors. Non-liquid REITs typically carry higher up-front sales loads, less price transparency, and meaningful redemption risk.\n\n### Worked Example: Pricing an Open-End Fund\n\nA balanced open-end fund holds securities worth $498.7 million, owes $3.7 million in accrued expenses and short-term borrowings, and has 25.0 million shares outstanding. The next-NAV calculation is:\n\n$$\\text{NAV} = \\frac{498{,}700{,}000 - 3{,}700{,}000}{25{,}000{,}000} = \\frac{495{,}000{,}000}{25{,}000{,}000} = \\$19.80$$\n\nA retail investor who places a buy order at 1:00 p.m. ET pays $19.80 plus any front-end sales charge — not yesterday's NAV and not some intraday tape print — because Rule 22c-1 forces the order to execute at the *next* computed NAV after the order is received. A redemption ticket sent at 10:30 a.m. would receive the same $19.80, settled within seven days as required by Section 22(e). Contrast this with a closed-end fund holding the same portfolio: if the market values its shares at $18.50, the fund trades at a 6.6% discount — and that discount can persist for years, because there is no AP-style arbitrage forcing the gap shut.\n\n### Summary\n\nPooled investments share a portfolio across many holders but differ sharply in how they are priced, redeemed, and regulated. Open-end mutual funds price at NAV with forward pricing and continuous redemption; closed-end funds and listed REITs price by the market and can deviate from NAV; UITs are unmanaged baskets with a finite life; ETFs use AP-driven in-kind arbitrage to keep market price near NAV; and private funds and non-listed REITs trade flexibility for illiquidity, accredited-only access, and exemption-based light regulation under Section 3(c)(1) or Section 3(c)(7) together with Regulation D.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "Section II"
    },
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
      "ref": "Investment Company Act of 1940 Section 3(c)(1)"
    },
    {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 3(c)(7)"
    },
    {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 4"
    },
    {
      "source": "SEC",
      "ref": "Investment Company Act of 1940 Section 5"
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
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 4(a)(2)"
    },
    {
      "source": "SEC",
      "ref": "Regulation D"
    },
    {
      "source": "SEC",
      "ref": "Rule 506(b)"
    },
    {
      "source": "SEC",
      "ref": "Rule 506(c)"
    },
    {
      "source": "SEC",
      "ref": "Form ADV"
    },
    {
      "source": "SEC",
      "ref": "Dodd-Frank Title IV"
    },
    {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    {
      "source": "OTHER",
      "ref": "FINRA"
    }
  ],
  "subtopicId": "2.8",
  "reviewed": false
};

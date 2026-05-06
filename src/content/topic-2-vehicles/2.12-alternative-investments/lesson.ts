import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Alternative Investments",
  "bodyMd": "Alternative investments sit outside the traditional stock-and-bond core. The Series 65 expects you to recognize five vehicles in this bucket: limited partnerships (LPs), exchange-traded notes (ETNs), leveraged funds, inverse funds, and structured products. They share a common theme — added complexity, layered fees, and risks that are often hidden inside derivative exposure or issuer credit. The exam is less about pricing them and more about *whom* they suit, *what* the investor actually owns, and *which* costs and risks are non-obvious.\n\n### Limited partnerships\n\nA limited partnership has one general partner (GP), who manages the venture and bears unlimited liability, and one or more limited partners, whose liability is capped at the amount invested. Real estate, oil and gas, and equipment-leasing programs are the classic Series 65 examples — collectively called direct participation programs (DPPs).\n\nLPs are *flow-through* tax entities: the partnership itself pays no federal income tax, and each partner reports their share of income, deductions, and credits on a Schedule K-1. This is the appeal — depreciation and depletion deductions can shelter passive income — but also the pain, since K-1s often arrive after April 15 and complicate a tax return. Passive losses generally only offset passive income, not wages or portfolio income.\n\nMost LPs are sold as **private placements** under Regulation D, typically Rule 506(b) (no general solicitation, up to 35 non-accredited investors) or Rule 506(c) (general solicitation allowed, but every investor must be verified accredited). They are also commonly structured to fit the Section 3(c)(1) or 3(c)(7) exemptions from the Investment Company Act, which keeps them out of the registered-fund regime.\n\nThe practical consequences are the testable points:\n\n- **Illiquidity.** No continuous secondary market; transfers usually require GP consent.\n- **Opaque pricing.** Without daily NAV, valuations rely on GP estimates.\n- **High costs.** Front-end loads, organizational fees, and management fees can reduce principal at risk by 10-15% before any return is earned.\n- **Suitability.** Long horizons (5-10 years), high minimums, and accredited-investor thresholds make LPs unsuitable for most retail investors.\n\n### Exchange-traded notes\n\nAn exchange-traded note is **senior unsecured debt** issued by a bank, with a return tied to the performance of a reference index — commodities, volatility, currencies, or thinly traded equity strategies. It is *not* a fund, *not* an ETF, and holds no underlying assets. The issuer simply promises at maturity to pay a return equal to the index, less fees.\n\nTwo risks are unique to ETNs:\n\n1. **Credit risk of the issuer.** If the bank fails, the ETN can become nearly worthless regardless of how the underlying index performed. The 2008 collapse of Lehman Brothers wiped out three Lehman-issued ETNs even though the referenced indexes still had value. ETNs carry no FDIC insurance and no SIPC coverage on the credit obligation.\n2. **Issuer call and acceleration.** The prospectus typically lets the issuer redeem the ETN early or accelerate it, often when the trade has moved against investors. ETNs can also trade at meaningful premiums or discounts to indicative value when the issuer suspends new creations.\n\nETNs are registered under the Securities Act of 1933 as debt securities, not under the Investment Company Act, and intraday trading on an exchange can mask the fact that holders are unsecured creditors. The distinction — *debt of an issuer* versus *a portfolio of assets* — is the most testable point on the exam.\n\n### Leveraged and inverse funds\n\nLeveraged funds (typically leveraged ETFs) seek to deliver some multiple — 2x or 3x — of an index's *daily* return. Inverse funds aim for -1x, -2x, or -3x. They achieve this exposure with derivatives: futures, swaps, and options. Both are registered investment companies under the Investment Company Act of 1940 and disclose their objective and risks in a Form N-1A prospectus.\n\nThe crucial — and most-tested — feature is the **daily reset**. Compounding daily returns over multiple days generates path-dependent results that diverge sharply from a simple multiple of the period return. In sideways or volatile markets, leveraged and inverse funds *decay* in value even when the underlying index ends roughly flat.\n\nA simple example: over two days an index goes from 100 to 110 (+10%) to 99 (-10%). The cumulative index return is -1%. A 2x daily-reset fund returns:\n\n$$(1 + 2 \\times 0.10)(1 + 2 \\times -0.10) - 1 = 1.20 \\times 0.80 - 1 = -4\\%$$\n\nThe fund is down 4%, not -2%, despite tracking an index down only 1%. That gap is *volatility decay*, and it grows quadratically with daily moves. FINRA and the SEC repeatedly warn that leveraged and inverse funds are designed for **one-day** holding periods, not buy-and-hold investors. They are appropriate only for sophisticated, active traders who monitor positions intraday.\n\n### Structured products\n\nA structured product is a hybrid security — usually unsecured debt of an issuing bank — whose payoff is engineered from a bond plus one or more embedded derivatives. Examples include equity-linked notes, principal-protected notes, and reverse-convertible securities.\n\nThe \"principal protection\" label is heavily testable: it covers principal **only at maturity** and **only if the issuer remains solvent**. There is no FDIC or SIPC backstop on the derivative leg, and selling before maturity exposes the investor to mark-to-market losses driven by interest rates, the underlying reference asset, and credit spreads.\n\nKey features to remember:\n\n- Complex, often opaque payoff formulas linked to an index, single stock, basket, or commodity.\n- Embedded fees baked into the issue price rather than disclosed as a separate expense ratio.\n- Limited secondary market — even when listed, the issuing dealer may make only a thin market.\n- Credit risk of the issuer, identical in form to an ETN.\n\n### Worked example\n\nAn investor compares two products tracking the S&P 500: a 2x daily leveraged ETF and a one-year structured note that pays 1.5x the index's total return at maturity, capped at 20%, with 90% principal protection.\n\nSuppose the index returns +5% over the year along a volatile path. The structured note pays:\n\n$$1.5 \\times 5\\% = 7.5\\%$$\n\nat maturity, subject to the issuer's solvency. If the index had instead fallen 30%, the note would still return 90% of principal — a -10% return — provided the issuer remains solvent.\n\nFor the leveraged ETF, the *daily-reset* mechanic means the period return is path-dependent. If daily returns averaged +5% but with high volatility, the fund's two-day arithmetic above generalizes; volatility drag could pull the realized return well below 2 × 5% = 10%. In a calm, trending market, returns compound *favorably* and the ETF can outperform 2x. The takeaway: a leveraged ETF's multi-day return depends on path, not just direction.\n\nIf the structured-note issuer defaults, the holder is an unsecured creditor and may recover little, regardless of where the index sits. The leveraged ETF holder still owns shares of a registered fund whose assets are held at a custodian — better insolvency protection but worse path-dependence.\n\n### Summary\n\n- Limited partnerships are flow-through, illiquid private placements; investors receive K-1s and accept long horizons.\n- ETNs are unsecured debt of an issuer, not funds; index exposure is a *promise*, not a pool of assets.\n- Leveraged and inverse funds reset daily; multi-day returns suffer volatility decay and are designed for one-day holding.\n- Structured products combine a bond with embedded derivatives; principal protection depends entirely on issuer solvency at maturity.\n- Across all four, the testable risks are illiquidity, complexity, hidden fees, and counterparty or issuer credit risk.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "SEC",
      "ref": "Securities Act of 1933"
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
      "ref": "Form N-1A"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    {
      "source": "OTHER",
      "ref": "FINRA"
    },
    {
      "source": "OTHER",
      "ref": "FDIC"
    },
    {
      "source": "OTHER",
      "ref": "SIPC"
    }
  ],
  "subtopicId": "2.12",
  "reviewed": false
};

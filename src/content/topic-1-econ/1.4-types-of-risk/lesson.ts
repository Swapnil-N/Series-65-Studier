import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Types of Risk: Systematic, Unsystematic, Opportunity Cost, and Capital Structure",
  "bodyMd": "Before recommending any security, an investment adviser must be able to identify the specific risks the investment carries. The Series 65 outline groups investment risks into two broad families — **systematic** (market-wide) and **unsystematic** (issuer- or sector-specific) — and then layers on two additional concepts every adviser must apply: **opportunity cost** and **liquidation priority** within an issuer's capital structure. The distinction matters because diversification reduces only one of the two risk families, and the suitability obligations carried over from the Investment Advisers Act of 1940 and the Uniform Securities Act both require that recommendations be analyzed in light of these risks.\n\n### Systematic Risk (Non-Diversifiable / Market Risk)\n\nSystematic risk is the risk that affects the entire market or a broad asset class at once. Because it cannot be eliminated by holding more securities, the Capital Asset Pricing Model treats it as the only risk for which investors should expect compensation. The CAPM formalizes that idea:\n\n$$E(R_i) = R_f + \\beta_i \\cdot \\big( E(R_m) - R_f \\big)$$\n\nwhere $\\beta_i$ measures the security's sensitivity to the broad market. Three flavors appear repeatedly on the exam:\n\n- **Interest-rate risk** — when prevailing rates rise, the present value of a fixed coupon falls, so bond prices drop. This hits long-duration bonds hardest. The relationship can be approximated by $\\Delta P / P \\approx -D \\cdot \\Delta y$, where $D$ is modified duration and $\\Delta y$ is the change in yield. The Federal Funds Rate set by the Federal Open Market Committee is the dominant short-rate driver in U.S. markets, and the broader rate environment is shaped by Federal Reserve policy.\n- **Sector / market risk** — equities as a whole can decline because of a recession, a liquidity shock, or a shift in investor sentiment, regardless of any one company's results. A 100% equity portfolio cannot diversify this away. Within equities, a single sector (energy, banks, semiconductors) can move on factors that affect every issuer in that sector simultaneously.\n- **Geopolitical risk** — wars, sanctions, trade restrictions, or sudden policy changes that shift global capital flows. Because these events can affect every issuer at once, they are systematic in nature.\n\nInflation (purchasing-power) risk is also systematic in the sense that it touches every nominal cash flow, though the outline addresses it separately.\n\n### Unsystematic Risk (Diversifiable / Specific Risk)\n\nUnsystematic risk is tied to a single issuer, industry, or contract. Markowitz (1952) showed that as the number of imperfectly-correlated holdings rises, the variance contributed by issuer-specific noise shrinks toward zero, while market variance remains. Practically, a well-diversified portfolio of roughly 20–30 unrelated equities eliminates most unsystematic risk. The Series 65 outline calls out four sub-types:\n\n- **Credit (default) risk** — the chance that a bond issuer fails to make a scheduled interest or principal payment. The major nationally recognized rating organizations — S&P Global Ratings, Moody's Investors Service, and Fitch Ratings — publish letter grades (AAA/Aaa down to D) that map to historical default frequencies. Anything BB+/Ba1 or below is \"non-investment-grade\" or \"high-yield.\"\n- **Legal / regulatory risk** — the risk that a change in law, a court ruling, or a regulator's action damages the value of an investment. A pharmaceutical issuer losing FDA approval, or a state securities Administrator suspending a registration under the Uniform Securities Act of 2002, are familiar examples.\n- **Financial (capital-structure) risk** — the risk that the issuer's leverage magnifies losses. A simple measure is the debt-to-equity ratio $D/E$; higher ratios mean a larger share of cash flow is committed to fixed interest, leaving less cushion for equity holders.\n- **Issuer-specific (business) risk** — operational missteps, management fraud, product failures, or labor disputes confined to one company.\n\nA useful identity from CAPM-style decompositions splits total variance into the two families:\n\n$$\\sigma_i^2 = \\beta_i^2 \\cdot \\sigma_m^2 + \\sigma_{\\varepsilon,i}^2$$\n\nThe first term is systematic; the second is the unsystematic residual that diversification shrinks. Sharpe (1964) is the foundational reference for this single-factor view.\n\n### Opportunity Cost\n\nOpportunity cost is the return foregone on the next-best alternative when an investor commits capital to a particular asset. In practice, advisers benchmark against the **risk-free rate**, typically a U.S. Treasury bill yield issued through the U.S. Department of the Treasury, because every dollar invested elsewhere \"costs\" the investor that guaranteed return. This is why CAPM's expected return begins with $R_f$: anything below the risk-free rate fails the most basic suitability test, since the client could earn more with no credit or interest-rate risk by holding a short Treasury obligation. Opportunity cost is also why advisers warn against holding excessive cash during inflationary periods — the lost purchasing power is a real, if invisible, drag on the portfolio.\n\n### Capital Structure and Liquidation Priority\n\nIf an issuer becomes insolvent, the Securities Investor Protection Act of 1970 protects custodial cash and securities at a failed broker-dealer, but it does **not** protect investors against an issuer's own bankruptcy. In that case, the bankruptcy court applies the **absolute priority rule**, paying claims in this order:\n\n1. **Secured creditors** — bondholders backed by specific collateral (mortgage bonds, equipment trust certificates).\n2. **Unsecured general creditors** — debenture holders, trade creditors, taxes owed to the IRS, and most general obligations.\n3. **Subordinated debt** — bondholders who contractually agreed to stand behind senior debt.\n4. **Preferred stockholders** — paid only after all debt claims are satisfied; typically receive par value if any assets remain.\n5. **Common stockholders** — last in line; in a Chapter 7 liquidation they often receive nothing.\n\nThis ordering is why preferred stock pays a fixed dividend that resembles a bond coupon but trades more like equity, and why common stock — though it carries the highest expected return — also carries the largest residual risk.\n\n### Worked Example\n\nSuppose an adviser is comparing two single-issuer holdings for a moderately conservative client:\n\n- **Bond A**: 10-year corporate bond, 5% coupon, BBB rated, modified duration 7.5.\n- **Stock B**: common stock of the same issuer, $\\beta = 1.4$, no dividend.\n\nIf the Federal Reserve raises rates by 50 basis points (0.50%), Bond A's price changes by approximately\n\n$$\\Delta P / P \\approx -7.5 \\times 0.005 = -0.0375 \\text{ or } -3.75\\%.$$\n\nThat is interest-rate (systematic) risk in action. If the same issuer then announces an SEC enforcement action, Bond A may slide further on credit (unsystematic) risk, and Stock B will fall harder still — the equity sits behind the bond in the capital structure, so it absorbs losses first. Finally, if the client had instead held a 1-year Treasury bill yielding 4%, the realized opportunity cost equals the difference between 4% and the actual return on either security over the holding period.\n\n### Summary\n\n- **Systematic** risks (interest-rate, sector, geopolitical) hit the whole market and cannot be diversified away; CAPM compensates investors only for this.\n- **Unsystematic** risks (credit, legal/regulatory, financial, issuer-specific) are tied to a single issuer or industry and shrink as the portfolio is diversified.\n- **Opportunity cost** is the return given up on the next-best alternative; the risk-free rate is the natural benchmark.\n- **Liquidation priority** flows debt → preferred → common; common stockholders bear the most residual risk and therefore demand the highest expected return.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "IA_ACT",
      "ref": "Investment Advisers Act of 1940"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Securities Act of 2002"
    },
    {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    {
      "source": "OTHER",
      "ref": "Markowitz (1952)"
    },
    {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    {
      "source": "OTHER",
      "ref": "S&P Global Ratings"
    },
    {
      "source": "OTHER",
      "ref": "Moody's Investors Service"
    },
    {
      "source": "OTHER",
      "ref": "Fitch Ratings"
    },
    {
      "source": "OTHER",
      "ref": "Federal Funds Rate"
    },
    {
      "source": "OTHER",
      "ref": "Federal Open Market Committee"
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
      "source": "SEC",
      "ref": "Securities Investor Protection Act of 1970"
    },
    {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    }
  ],
  "subtopicId": "1.4",
  "reviewed": false
};

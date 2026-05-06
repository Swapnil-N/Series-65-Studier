import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Portfolio Management: Strategies, Styles, and Techniques",
  "bodyMd": "Portfolio management is the disciplined process of selecting and adjusting investments so that the mix of assets matches a client's objectives, time horizon, and tolerance for risk. The Series 65 outline groups this process into three layers — the overarching **strategy** (the long-run game plan), the **style** (the philosophy a manager uses to pick securities), and the **techniques** (the specific tools applied to implement and adjust the portfolio). An investment adviser's fiduciary duty under the Investment Advisers Act of 1940 requires that whichever combination is chosen, it be suitable, adequately disclosed, and monitored over time.\n\n### Asset Allocation Strategies\n\n**Strategic asset allocation** sets a long-term target weight for each asset class — for example, 60% equities, 35% bonds, 5% cash — based on the investor's goals, risk tolerance, and capital-market expectations. The portfolio is rebalanced back to those targets on a calendar (e.g., quarterly) or threshold basis (whenever a class drifts more than a set percentage). Strategic allocation rests on **Modern Portfolio Theory**, which argues that diversifying across imperfectly correlated assets reduces total portfolio risk for a given level of expected return. The expected return of a two-asset portfolio is:\n\n$$E(R_p) = w_A E(R_A) + w_B E(R_B)$$\n\nand the variance is\n\n$$\\sigma_p^2 = w_A^2\\sigma_A^2 + w_B^2\\sigma_B^2 + 2 w_A w_B \\rho_{AB} \\sigma_A \\sigma_B$$\n\nwhere $\\rho_{AB}$ is the correlation between the two assets. When $\\rho_{AB} < 1$, total portfolio risk is less than the weighted average of the individual standard deviations — the mathematical reason diversification works.\n\n**Tactical asset allocation** lets the manager temporarily over- or under-weight asset classes relative to the strategic targets to exploit perceived short-term mispricings (for example, shifting from 60% equities to 70% when stocks look cheap). Tactical shifts are usually bounded — the prospectus or investment policy statement may permit a +/- 10% deviation from the strategic anchor — and the portfolio is expected to drift back to its long-run mix once the opportunity is harvested. Tactical allocation produces higher turnover and tax friction than a purely strategic approach.\n\n### Investment Styles\n\nA manager's **style** describes how individual securities are selected within each asset class.\n\n- **Active management** seeks to outperform a benchmark through security selection or market timing. It typically generates higher fees and higher turnover.\n- **Passive management** aims to match, not beat, an index by holding the index's constituents in their benchmark weights. The intellectual basis is the **Efficient Market Hypothesis**, which holds that publicly available information is already reflected in prices, so active outperformance after fees is hard to repeat.\n- **Growth investing** targets companies with above-average earnings growth, often paying high price-to-earnings (P/E) multiples for that growth. Growth stocks usually pay little or no dividend.\n- **Value investing** targets companies trading below their intrinsic worth — typically lower P/E, lower price-to-book, and higher dividend yields. Value investors expect the market to eventually re-rate the security upward.\n- **Income investing** prioritizes a steady stream of cash flow from dividends, bond coupons, or REIT distributions. It suits retirees and other clients whose objective is current income rather than capital growth.\n- **Capital appreciation** is the mirror image: the goal is long-term price growth, with current income a secondary or zero concern. A young investor saving for retirement is the classic candidate.\n\nMany managers blend styles (for example, a \"core\" portfolio of index funds with a satellite \"growth\" sleeve), and styles can rotate in and out of favor — value outperformed growth from 2000-2007, while growth dominated 2010-2020. A NASAA-registered investment adviser must disclose its style in Form ADV Part 2A so clients understand what they are buying.\n\n### Portfolio Management Techniques\n\nTechniques are the practical tools used to implement a strategy and style.\n\n- **Diversification** spreads capital across many securities, sectors, and asset classes to reduce **unsystematic** (firm-specific) risk. Systematic risk — the risk of the market as a whole — cannot be diversified away. The Uniform Prudent Investor Act explicitly requires fiduciaries to diversify investments unless circumstances make it imprudent.\n- **Sector rotation** shifts weight among economic sectors (technology, financials, consumer staples, etc.) based on the business cycle. Cyclical sectors are favored in expansions, defensive sectors in contractions.\n- **Dollar-cost averaging (DCA)** invests a fixed dollar amount on a regular schedule, regardless of price. Because the same dollars buy more shares when prices are low and fewer when prices are high, the investor's average cost per share is mathematically lower than the average price per share.\n- **Purchasing or selling options** can hedge or augment a portfolio. Buying a protective put on a stock you own caps downside; writing covered calls generates premium income but caps upside. The risks of these positions are catalogued in the Options Clearing Corporation's *Characteristics and Risks of Standardized Options* (the ODD), which must be delivered before an options account is approved.\n- **Leveraging** borrows funds (e.g., on margin under Regulation T) to amplify position size. Gains and losses are both magnified, and a margin call forces the investor to deposit additional cash or sell at unfavorable prices.\n- **Volatility management** sizes positions inversely to recent volatility — cutting equity exposure when realized volatility spikes and adding back when markets calm. Many target-date and risk-parity funds use this technique.\n- **Inverse strategies** use inverse ETFs, short sales, or put options to profit when prices fall. Daily-reset inverse ETFs suffer compounding decay over multi-day periods and are generally unsuitable as buy-and-hold positions.\n- **High-frequency trading (HFT)** uses algorithms and co-located servers to execute thousands of trades per second, capturing tiny per-trade spreads. HFT is a feature of execution venues retail investors trade against, not a strategy a Series 65 adviser would recommend, but candidates should recognize the term.\n\n### Worked Example: Dollar-Cost Averaging\n\nAn investor commits $300 per month to a mutual fund for four months. Share prices and shares purchased are:\n\n| Month | Price | Shares Purchased |\n|------:|------:|-----------------:|\n| 1 | $10 | 30.00 |\n| 2 | $15 | 20.00 |\n| 3 | $12 | 25.00 |\n| 4 | $20 | 15.00 |\n\nTotal invested: $1,200. Total shares: 90.00.\n\n- **Average price per share** (simple average of prices): $(10 + 15 + 12 + 20)/4 = \\$14.25$.\n- **Average cost per share** (dollars in / shares acquired): $\\$1{,}200 / 90 = \\$13.33$.\n\nThe investor's cost basis ($13.33) is lower than the four-month average price ($14.25) because the fixed $300 contribution bought more shares at the lower prices. This is the arithmetic identity that makes DCA attractive — but DCA does **not** guarantee a profit and does not protect against a sustained decline in a single security.\n\n### Summary\n\nStrategic allocation sets the long-run mix; tactical allocation deviates from it temporarily. Styles — active versus passive, growth versus value, income versus appreciation — describe how a manager chooses securities within that mix. Techniques such as diversification, DCA, options, leverage, sector rotation, and inverse strategies are tools used to build and adjust the portfolio. Each must be matched to the client's objectives and risk tolerance, disclosed in Form ADV Part 2A, and applied consistently with the adviser's fiduciary duty.",
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
      "source": "IA_ACT",
      "ref": "Section 206"
    },
    {
      "source": "SEC",
      "ref": "Form ADV Part 2A"
    },
    {
      "source": "SEC",
      "ref": "Regulation T"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Prudent Investor Act"
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
      "ref": "Efficient Market Hypothesis"
    },
    {
      "source": "OTHER",
      "ref": "Fama (1970)"
    },
    {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    {
      "source": "OTHER",
      "ref": "OCC Characteristics and Risks of Standardized Options"
    },
    {
      "source": "OTHER",
      "ref": "Options Disclosure Document"
    }
  ],
  "subtopicId": "3.4",
  "reviewed": false
};

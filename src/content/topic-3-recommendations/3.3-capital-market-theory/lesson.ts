import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Capital Market Theory: Modern Portfolio Theory, CAPM, and the Efficient Market Hypothesis",
  "bodyMd": "Capital market theory is the body of academic work that explains how rational investors should price risk and assemble portfolios in a competitive market. The NASAA Series 65 Content Outline asks you to know three pillars: **Modern Portfolio Theory (MPT)** developed by Harry Markowitz, the **Capital Asset Pricing Model (CAPM)** extended by William Sharpe, and the **Efficient Market Hypothesis (EMH)** articulated by Eugene Fama. Each pillar builds on the one before it, and together they shape how advisers justify diversification, benchmark performance, and decide between active and passive strategies. The Investment Advisers Act of 1940's general fiduciary obligation is the regulatory backdrop — these theories tell an adviser *how* to think about risk and return when meeting that duty.\n\n### Modern Portfolio Theory\n\nModern Portfolio Theory, introduced by Markowitz (1952), is the insight that a security cannot be evaluated in isolation — only its contribution to the overall portfolio matters. MPT measures risk as the standard deviation of returns ($\\sigma$) and reward as the expected return ($E(R)$). For a portfolio of two assets with weights $w_1$ and $w_2 = 1 - w_1$, the portfolio variance is:\n\n$$\\sigma_p^2 = w_1^2 \\sigma_1^2 + w_2^2 \\sigma_2^2 + 2\\, w_1 w_2\\, \\rho_{1,2}\\, \\sigma_1 \\sigma_2$$\n\nwhere $\\rho_{1,2}$ is the correlation between the two assets' returns. The key implication: as long as $\\rho_{1,2} < 1$, the portfolio's standard deviation is **less than** the weighted average of the individual standard deviations. Combining imperfectly correlated assets produces diversification — risk reduction without giving up expected return.\n\nThe set of portfolios that offer the highest expected return for each level of risk is the **efficient frontier**. Any portfolio below the frontier is dominated, since another portfolio offers more return for the same risk (or less risk for the same return). Rational investors choose only frontier portfolios; their personal risk tolerance picks the spot on the curve. A consequence MPT shares with CAPM is that only **systematic** (market-wide) risk is worth pricing, because **unsystematic** (issuer-specific) risk vanishes once a portfolio is diversified. This is why suitability analysis under the Investment Advisers Act of 1940 looks at the full portfolio rather than each holding in isolation.\n\n### Capital Asset Pricing Model\n\nSharpe (1964) extended MPT by adding a risk-free asset — typically modeled as a short-term U.S. Treasury bill issued by the U.S. Department of the Treasury — that investors can lend or borrow at without default risk. With a risk-free asset, the efficient frontier collapses to a single straight line called the **Capital Market Line**, and every rational investor holds the same risky portfolio (the **market portfolio**) combined with cash; this is the \"two-fund separation\" result.\n\nFor an individual security or portfolio, the relevant measure of risk is **beta** ($\\beta$), which captures the sensitivity of the security's returns to the market's returns:\n\n$$\\beta_i = \\frac{\\operatorname{Cov}(R_i, R_m)}{\\sigma_m^2}$$\n\nThe Capital Asset Pricing Model then gives the equilibrium expected return as:\n\n$$E(R_i) = R_f + \\beta_i \\big( E(R_m) - R_f \\big)$$\n\nThe line $E(R) = R_f + \\beta (E(R_m) - R_f)$ plotted in beta-return space is the **Security Market Line (SML)**. Three intuitions every Series 65 candidate should master:\n\n- $\\beta = 1$ means the security moves with the market on average; $\\beta > 1$ is more volatile, $\\beta < 1$ less.\n- A negative-beta security is rare but valuable: it tends to move opposite the market and so can hedge a portfolio.\n- A security plotting **above** the SML offers more expected return than its beta justifies (undervalued); **below** the SML it is overvalued. The CAPM-implied expected return is the hurdle the security must clear to be a fair investment.\n\nThe realized excess return of a security over the CAPM benchmark is **Jensen's alpha**:\n\n$$\\alpha_i = R_i - \\big[R_f + \\beta_i (R_m - R_f)\\big]$$\n\nActive managers are paid to deliver positive alpha. The related **Sharpe ratio** measures total risk-adjusted return, $(R_p - R_f)/\\sigma_p$, and is used to rank entire portfolios on a stand-alone basis rather than individual securities embedded in a diversified portfolio.\n\n### Efficient Market Hypothesis\n\nFama (1970) synthesized the empirical literature into the Efficient Market Hypothesis: in a competitive market, prices already reflect available information, so consistently earning excess returns from that information is impossible. Fama distinguished three forms based on what counts as \"available\":\n\n- **Weak form** — prices reflect all past trading data (prices, volume, returns). If true, **technical analysis** of charts and patterns cannot reliably produce excess returns; future prices are essentially a random walk relative to past prices.\n- **Semi-strong form** — prices reflect all publicly available information, including financial statements, news, and economic data. **Fundamental analysis** of public filings cannot reliably beat the market, because by the time the information is published, it is already in the price.\n- **Strong form** — prices reflect *all* information, public and private. Even insiders with material non-public information cannot reliably profit. Empirical evidence is weakest for this form; the very existence of insider-trading enforcement under the Securities Exchange Act of 1934 is evidence that markets are not strong-form efficient in practice.\n\nThe practical implication for an adviser is humbling: if even the semi-strong form holds, low-cost passive index funds should outperform most active managers after fees, and recommending high-cost active products requires a clear, client-specific rationale.\n\n### Worked Example\n\nA client is choosing between two equity funds. Fund A has $\\beta = 0.8$ and returned 7% last year. Fund B has $\\beta = 1.4$ and returned 12%. The risk-free rate is 3% and the broad market returned 9%.\n\nThe CAPM expected returns are:\n\n$$E(R_A) = 3\\% + 0.8 \\times (9\\% - 3\\%) = 3\\% + 4.8\\% = 7.8\\%$$\n\n$$E(R_B) = 3\\% + 1.4 \\times (9\\% - 3\\%) = 3\\% + 8.4\\% = 11.4\\%$$\n\nJensen's alpha for each fund is therefore:\n\n$$\\alpha_A = 7\\% - 7.8\\% = -0.8\\%$$\n\n$$\\alpha_B = 12\\% - 11.4\\% = +0.6\\%$$\n\nFund A *underperformed* its CAPM benchmark by 0.8%; Fund B *outperformed* by 0.6%. Note that Fund B looked better on raw return alone (12% vs. 7%), but most of that came from taking on more market risk. Only after adjusting for beta does the comparison become fair — and that is the central contribution of CAPM. Strict EMH would caution the client further: one year of positive alpha from Fund B is statistically thin, and over long horizons net of fees, alpha across the active-management industry tends to revert toward zero.\n\n### Summary\n\n- **Modern Portfolio Theory** (Markowitz, 1952): combine imperfectly correlated assets to reduce risk; only efficient-frontier portfolios are worth holding.\n- **CAPM** (Sharpe, 1964): in equilibrium, expected return is a linear function of beta; only systematic risk is priced, and the SML is the benchmark for fair return.\n- **EMH** (Fama, 1970): prices reflect available information in three increasingly demanding forms — weak (past prices), semi-strong (public info), strong (all info).\n- **Practical takeaway**: diversification is mandatory, beta is the right risk measure for systematic risk, and consistent alpha is hard to deliver after costs — pushing many advisers toward low-cost, broadly diversified portfolios.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    {
      "source": "OTHER",
      "ref": "Efficient Market Hypothesis"
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
      "ref": "Fama (1970)"
    },
    {
      "source": "OTHER",
      "ref": "U.S. Department of the Treasury"
    },
    {
      "source": "IA_ACT",
      "ref": "Investment Advisers Act of 1940"
    },
    {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934"
    }
  ],
  "subtopicId": "3.3",
  "reviewed": false
};

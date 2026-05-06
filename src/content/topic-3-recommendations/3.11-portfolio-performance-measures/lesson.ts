import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Portfolio Performance Measures: Returns, Yield, and Benchmarks",
  "bodyMd": "Performance measurement answers two related questions: how much did the portfolio earn, and was that return adequate given the risk taken and the cash flows the investor contributed? The Series 65 expects you to recognize each measure on sight, know which one fits which scenario, and perform the basic calculations. This lesson surveys the families of return measures, current yield, and the role of benchmarks.\n\n### Total, Holding-Period, and Annualized Returns\n\n**Total return** captures every dollar an investment paid you: price appreciation plus income (dividends, interest, distributions). Income alone is not the whole story; ignoring price change overstates the return on a falling bond and understates the return on an appreciating stock.\n\n**Holding-period return (HPR)** is total return measured over the actual time the investment was held, with no annualization:\n\n$$HPR = \\frac{P_1 - P_0 + Income}{P_0}$$\n\nA position bought for $\\$50$, sold for $\\$54$, that paid $\\$1$ of dividends along the way produced an HPR of $(54 - 50 + 1)/50 = 10\\%$. The figure is accurate, but you cannot compare it directly to an HPR earned over a different number of months.\n\n**Annualized return** rescales an HPR to a one-year-equivalent rate so figures are comparable:\n\n$$R_{ann} = (1 + HPR)^{1/n} - 1$$\n\nwhere $n$ is the number of years held. A 10% return earned over six months annualizes to $(1.10)^{2} - 1 = 21\\%$; the same 10% earned over two years annualizes to only about 4.88%.\n\n### Time-Weighted vs. Dollar-Weighted Returns\n\nWhen cash is added to or withdrawn from a portfolio, simple HPR no longer measures pure investment performance. Two solutions split the question.\n\n**Time-weighted return (TWR)** strips out the effect of contributions and withdrawals by chain-linking the returns from each subperiod between cash flows:\n\n$$TWR = \\prod_{i=1}^{k}(1 + r_i) - 1$$\n\nTWR reflects what the manager did with the money she had. It is the standard for evaluating mutual funds and investment advisers because it isolates manager skill from client behavior.\n\n**Dollar-weighted return (DWR)** is the **internal rate of return (IRR)** of the portfolio's cash flows -- the discount rate that makes the present value of all contributions equal the present value of all withdrawals plus ending value:\n\n$$0 = \\sum_{t=0}^{n} \\frac{CF_t}{(1 + IRR)^t}$$\n\nBecause DWR weights each subperiod by the dollars at work, it answers, \"What did the *investor* actually earn?\" If a client pours money in just before a downturn, her DWR will trail the TWR. The exam pairs the two: TWR for manager evaluation, DWR/IRR for the client's personal experience.\n\n### Risk-Adjusted, Inflation-Adjusted, and After-Tax Returns\n\nRaw return numbers ignore three things that matter to a real investor: how much risk produced the return, how much purchasing power was actually gained, and how much the IRS will keep.\n\n**Risk-adjusted return** compares return to the volatility taken. The **Sharpe ratio** measures excess return per unit of total risk:\n\n$$\\text{Sharpe} = \\frac{R_p - R_f}{\\sigma_p}$$\n\nThe **Treynor ratio** uses systematic risk (beta) in the denominator and is appropriate for a sub-portfolio held inside a larger diversified one. **Jensen's alpha** is the realized return minus the return predicted by the Capital Asset Pricing Model. Higher Sharpe, higher Treynor, and positive alpha all suggest skilled, risk-aware management.\n\n**Inflation-adjusted (real) return** strips out the loss of purchasing power. The exact Fisher relationship is:\n\n$$R_{real} = \\frac{1 + R_{nominal}}{1 + i} - 1$$\n\nwhere $i$ is the inflation rate, typically the Consumer Price Index reported by the Bureau of Labor Statistics. A quick approximation, accurate at low rates, is $R_{real} \\approx R_{nominal} - i$.\n\n**After-tax return** adjusts for taxes on dividends, interest, and capital gains. For income taxed at ordinary rates the formula is:\n\n$$R_{after\\text{-}tax} = R_{nominal} \\times (1 - t)$$\n\nwhere $t$ is the investor's marginal tax rate. Different sources of return are taxed at different rates -- long-term capital gains and qualified dividends usually receive preferential treatment, while bond interest and short-term gains are taxed as ordinary income. Tax-exempt municipal bond interest is often compared to a taxable yield using the **tax-equivalent yield**, $\\text{TEY} = R_{muni} / (1 - t)$.\n\n### Current Yield, Expected Return, and Benchmarks\n\n**Current yield** is the income an investment is currently throwing off, expressed as a percentage of its current market price:\n\n$$\\text{Current Yield} = \\frac{\\text{Annual Income}}{\\text{Current Price}}$$\n\nFor a bond paying $\\$60$ in annual coupons trading at $\\$1{,}050$, the current yield is $60/1{,}050 = 5.71\\%$. Current yield ignores capital gains or losses to maturity, so it is not a complete return measure -- yield to maturity is. For common stock the analog is the dividend yield.\n\n**Expected return** is a probability-weighted average of possible outcomes:\n\n$$E(R) = \\sum_{i=1}^{n} p_i R_i$$\n\nIf a stock has a 30% chance of returning 20%, a 50% chance of returning 8%, and a 20% chance of losing 10%, $E(R) = 0.30(20) + 0.50(8) + 0.20(-10) = 8\\%$.\n\n**Benchmarks** put any return number in context. A portfolio that earned 9% looks great until you learn the appropriate benchmark earned 14%. Common benchmarks include the S&P 500 for U.S. large-cap stocks, the Russell 2000 for small caps, the Dow Jones Industrial Average for blue chips, the MSCI EAFE for developed-market international stocks, and the Bloomberg U.S. Aggregate Bond Index for investment-grade fixed income. A useful benchmark must match the portfolio's mandate -- comparing a small-cap fund to the S&P 500 is meaningless. Morningstar style boxes and category averages are widely used for mutual fund peer comparisons.\n\n### Worked Example\n\nA client invests $\\$100{,}000$ on January 1. By June 30 the account has grown to $\\$110{,}000$. On July 1 she contributes another $\\$50{,}000$, taking the balance to $\\$160{,}000$. By December 31 the account is worth $\\$155{,}000$.\n\nCompute the **time-weighted return** by chain-linking the two subperiod returns:\n\n- First half: $r_1 = 110/100 - 1 = 10\\%$.\n- Second half: $r_2 = 155/160 - 1 = -3.125\\%$.\n- $TWR = (1.10)(0.96875) - 1 \\approx 6.56\\%$.\n\nThe **dollar-weighted return** solves the IRR equation $-100{,}000 - 50{,}000/(1+IRR)^{0.5} + 155{,}000/(1+IRR) = 0$. Iteration gives an IRR of roughly $3.6\\%$. The TWR (6.56%) better describes the manager; the DWR (3.6%) better describes the client, who put extra money to work just before the second-half loss.\n\nNow suppose inflation that year was 3% and the client's marginal tax rate on the gain is 25%. Using the TWR as the nominal return: the real return is $1.0656 / 1.03 - 1 \\approx 3.46\\%$, and the after-tax nominal return is $6.56\\% \\times 0.75 \\approx 4.92\\%$.\n\n### Summary\n\nHolding-period return measures actual return; annualized return rescales it. Time-weighted return evaluates the manager; dollar-weighted return (IRR) evaluates the investor's experience. Sharpe, Treynor, and Jensen's alpha translate raw return into risk-adjusted return. The Fisher relation converts nominal to real returns; the after-tax formula adjusts for taxes. Current yield is income-only. Expected return is probability-weighted. Every return number needs a benchmark that matches the portfolio's mandate, or it tells you nothing.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "NASAA",
      "ref": "Section III"
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
      "ref": "Sharpe (1964)"
    },
    {
      "source": "OTHER",
      "ref": "Bureau of Labor Statistics"
    },
    {
      "source": "OTHER",
      "ref": "Internal Revenue Service"
    },
    {
      "source": "OTHER",
      "ref": "Morningstar"
    },
    {
      "source": "OTHER",
      "ref": "Series 65 Study Guide"
    },
    {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    }
  ],
  "subtopicId": "3.11",
  "reviewed": false
};

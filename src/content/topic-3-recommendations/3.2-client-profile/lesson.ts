import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Client Profile",
  "bodyMd": "Every recommendation an investment adviser makes — from a single municipal bond to a multi-account allocation — has to fit a particular human being. The **client profile** is the structured snapshot of that person: their goals, their numbers, their feelings about loss, their values, and the runway they have before each goal becomes due. The Series 65 outline groups this work into financial information, risk tolerance, nonfinancial considerations, time horizon, and the data-gathering process itself. Federal and state law, in turn, treats the profile as the gating condition for *suitability* and *best interest*: an adviser cannot reasonably believe a recommendation fits a client whose situation has not first been understood.\n\n### Financial goals and the current and future financial situation\n\nA useful profile starts with **goals stated as dollars and dates**: $40{,}000$ for a down payment in five years, $1{,}500{,}000$ for retirement at age 67, $200{,}000$ for college in twelve years. Without dollars and dates, 'growth' or 'income' cannot be translated into an allocation.\n\nThe next layer is the client's **balance sheet** — the same statement-of-financial-position concept GAAP applies to companies, scaled to one household:\n\n$$\\text{Net worth} = \\text{Assets} - \\text{Liabilities}$$\n\nAssets include cash, brokerage and retirement accounts, real estate, and the cash value of life insurance; liabilities include mortgages, student loans, auto loans, and credit-card balances. Net worth tells the adviser the client's *capacity* to take risk and to absorb a drawdown.\n\nThe client's **cash flow statement** is the income-and-expense companion to the balance sheet:\n\n$$\\text{Discretionary cash flow} = \\text{After-tax income} - \\text{Fixed and variable expenses}$$\n\nOnly the surplus is genuinely investable. A client with a six-figure income but no surplus has little room for new contributions — a fact the profile must surface before the adviser proposes a savings rate.\n\n**Existing investments** must be inventoried so that the adviser can spot concentrations (a single employer's stock often dominates a 401(k) or ESPP), overlap across funds, and unrealized gains that constrain rebalancing. **Tax situation** matters because every recommendation has an after-tax outcome: the adviser needs the client's filing status, marginal federal bracket, state of residence, and use of tax-advantaged accounts (IRA, Roth IRA, 401(k), 529, HSA). The standard mental conversion between a municipal yield and a corporate yield is the *taxable-equivalent yield*:\n\n$$\\text{TEY} = \\frac{\\text{Muni yield}}{1 - t}$$\n\nwhere $t$ is the client's marginal tax rate. A 4% muni at a 32% bracket is equivalent to a $4\\% / (1-0.32) \\approx 5.88\\%$ taxable bond.\n\n**Social Security and pensions** are the household's fixed-income backbone. Social Security retirement benefits begin as early as 62 with a permanent reduction, are unreduced at the client's full retirement age (currently 66 to 67), and grow with delayed retirement credits up to age 70. A defined-benefit pension may offer a single-life annuity or a joint-and-survivor option; the latter pays less monthly but continues for a surviving spouse. Both streams reduce the portfolio's required income, which lets the equity allocation rise.\n\n### Risk tolerance and time horizon\n\nRisk has two distinct meanings on the exam. **Risk tolerance** (or *willingness*) is psychological — how the client responds to a 30% drawdown. **Risk capacity** (or *ability*) is mathematical — the magnitude of loss the household can sustain without missing a goal. A young physician with a stable income has high capacity even if her tolerance is low; a retiree drawing down principal has high tolerance only at the cost of capacity. Suitability requires reconciling the two.\n\n**Time horizon** is the period until the goal must be funded. The shorter the horizon, the smaller the share of risky assets, because the portfolio cannot recover from a sustained drawdown before the cash is needed. The Rule of 72 gives a quick sense of the compounding runway:\n\n$$\\text{Years to double} \\approx \\frac{72}{r}$$\n\nAt a $7\\%$ real return, money doubles in roughly $72/7 \\approx 10.3$ years. Volatility itself is most often measured by the *standard deviation* of returns; a higher standard deviation means a wider range of outcomes around the expected return.\n\n### Nonfinancial investment considerations\n\nTwo clients with identical numbers can still need different portfolios. **Values-based screens** include ESG (environmental, social, governance), socially responsible investing (SRI), and religious mandates such as Catholic values funds or Sharia-compliant products that screen out interest-bearing securities and certain industries. The adviser must record these constraints because a fund that violates them is unsuitable regardless of risk-and-return fit.\n\n**Investment experience** influences both product selection and disclosure depth. A first-time investor needs simpler vehicles and clearer explanations of risk; a sophisticated investor may consent to options, private placements, or margin. **Life stage and life events** — marriage, divorce, the birth of a child, an inheritance, a disability, the death of a spouse, a job loss — re-set the profile materially and trigger an update.\n\n**Behavioral finance** acknowledges that real clients deviate from the rational actor of classical finance. Common biases the exam tests include *anchoring* (over-weighting a reference price such as the original purchase price), *loss aversion* (treating losses as roughly twice as painful as equivalent gains), *overconfidence*, *confirmation bias*, *herding*, and *recency bias* (extrapolating the recent past). A good profile flags these tendencies so the adviser can design guardrails — automatic rebalancing, written investment policy statements, pre-committed contribution schedules.\n\n### Client data gathering and identification\n\nProfile data is collected through three overlapping means: the *new-account questionnaire*, a *face-to-face or telephone interview*, and *ongoing observation* across the relationship. The IAR documents the answers, the assumptions, and any client refusals. Federal anti-money-laundering law layered on a **Customer Identification Program (CIP)** that requires the firm to obtain and verify the client's name, date of birth, address, and taxpayer identification number before opening an account, and to screen against government lists. SROs codify the parallel **Know-Your-Customer** and **Suitability** duties: the firm must use reasonable diligence to learn the essential facts about every client and must have a reasonable basis to believe a recommendation fits that client's investment profile. Profiles must be reviewed and updated when material facts change — a job loss, a marriage, a large inheritance — and at periodic intervals.\n\n### Worked example\n\nA 45-year-old client with a $\\$130{,}000$ salary asks how aggressive she can afford to be. She has $\\$360{,}000$ in a 401(k), $\\$40{,}000$ in cash, $\\$310{,}000$ owed on a mortgage on a home worth $\\$520{,}000$, and $\\$15{,}000$ on an auto loan. Annual expenses are $\\$84{,}000$ after taxes; her marginal federal rate is $24\\%$. She wants to retire at 67.\n\n**Net worth.**\n\n$$\\text{Net worth} = (360{,}000 + 40{,}000 + 520{,}000) - (310{,}000 + 15{,}000) = \\$595{,}000$$\n\n**Discretionary cash flow.** With after-tax income of roughly $130{,}000 \\times (1 - 0.24) \\approx \\$98{,}800$ and expenses of $\\$84{,}000$, surplus is about $\\$14{,}800$ per year — a real, not theoretical, contribution capacity.\n\n**Time horizon.** $67 - 45 = 22$ years to retirement, with another 25-plus years in distribution. The Rule of 72 implies roughly two doublings of the 401(k) at a $7\\%$ real return ($72/7 \\approx 10.3$ years per doubling), so $\\$360{,}000$ alone could grow to about $\\$1.4M$ before any new contributions.\n\n**Profile conclusion.** Long horizon, positive cash flow, and a stable career together support a relatively high equity allocation — provided the questionnaire confirms her psychological tolerance for interim drawdowns. A 60–80% equity weight is defensible; pushing higher would test capacity against tolerance and should be documented along with a values screen, an experience self-assessment, and any pending life events.\n\n### Summary\n\n- The client profile binds goals, finances, risk, values, and time horizon into a single record that justifies every recommendation.\n- Cash flow, balance sheet, taxes, existing holdings, and Social Security/pensions describe *capacity*; the questionnaire and interview describe *tolerance*; together they determine *suitability*.\n- Time horizon scales the equity weight; behavioral biases distort how clients experience volatility and must be planned around.\n- Customer identification, KYC, and suitability rules are the legal scaffolding for collecting and updating the profile, not optional paperwork.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "SEC",
      "ref": "Regulation Best Interest"
    },
    {
      "source": "SEC",
      "ref": "USA PATRIOT Act"
    },
    {
      "source": "SEC",
      "ref": "Bank Secrecy Act"
    },
    {
      "source": "OTHER",
      "ref": "FINRA Rule 2090"
    },
    {
      "source": "OTHER",
      "ref": "FINRA Rule 2111"
    },
    {
      "source": "OTHER",
      "ref": "FINRA Rule 4512"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 17"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 575"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 590-A"
    },
    {
      "source": "OTHER",
      "ref": "Markowitz (1952)"
    },
    {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    }
  ],
  "subtopicId": "3.2",
  "reviewed": false
};

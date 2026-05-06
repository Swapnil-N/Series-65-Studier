import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Tax Considerations: Individual, Entity, and Wealth Transfer",
  "bodyMd": "Tax treatment changes the real return an investor earns on a portfolio, so the Series 65 expects an investment adviser representative to recognize the major federal income, retirement, entity, and transfer tax rules well enough to flag tax consequences and refer the client to a qualified tax professional when needed. This lesson surveys the three buckets the outline calls out: **individual income tax**, **entity-level tax** (C-corp, S-corp, trusts, and pass-throughs), and the **gift-and-estate transfer tax** system.\n\nThe mechanics below come from the Internal Revenue Code as administered by the Internal Revenue Service. Most dollar thresholds are indexed for inflation each year; the exam tests the underlying concept, not a specific year's figure.\n\n### Individual Income Tax Fundamentals\n\nThe U.S. individual income tax is **progressive** and **marginal**. Taxable income is sliced into tiers (the 10%, 12%, 22%, 24%, 32%, 35%, and 37% federal brackets), and each additional dollar is taxed at the rate of the bracket it falls into — not the rate that applies to the first dollar. The **marginal rate** is the rate on the next dollar; the **effective rate** is total tax divided by taxable income:\n\n$$t_{\\text{eff}} = \\frac{\\text{Total Tax}}{\\text{Taxable Income}}$$\n\nThe effective rate is always lower than the marginal rate for any taxpayer who fills more than one bracket.\n\n**Tax basis** is the dollar figure used to measure gain or loss when a security is sold. For a normal cash purchase, basis is the purchase price plus commissions. For **inherited** property, basis is **stepped up** to fair market value at date of death, which can erase decades of accumulated gain. For **gifted** property, the recipient generally takes a **carryover basis** equal to the donor's basis.\n\n**Capital gain** equals proceeds minus basis:\n\n$$\\text{Capital Gain} = P_{\\text{sale}} - B$$\n\nA gain on a security held **one year or less** is short-term and taxed at ordinary income rates. A gain held **more than one year** is long-term and taxed at a preferential 0%, 15%, or 20% rate, with the bracket determined by the taxpayer's taxable income. Capital losses offset capital gains; up to $3{,}000 of net capital loss may offset ordinary income each year, with the excess carried forward indefinitely. The **wash-sale rule** under IRC Section 1091 disallows a loss when the taxpayer buys a substantially identical security within 30 days before or after the sale; the disallowed loss is added to the basis of the replacement shares.\n\n**Qualified dividends** receive the same preferential 0/15/20% rates as long-term capital gains, provided the underlying common stock is held more than 60 days during the 121-day window beginning 60 days before the ex-dividend date. Non-qualified dividends — including most ordinary REIT distributions and foreign dividends that fail the holding-period test — are taxed as ordinary income.\n\nThe **alternative minimum tax (AMT)** is a parallel calculation. The taxpayer recomputes income after adding back certain preference items (such as interest from private-activity municipal bonds), subtracts an AMT exemption, and applies a 26% or 28% rate. AMT is owed only when it exceeds the regular tax — a safety net against high earners zeroing out their bill through deductions and preference items.\n\n### Retirement Distributions, RMDs, and IRMAA\n\nDistributions from traditional pension and qualified retirement plans (401(k), 403(b), traditional IRA) are generally taxed as ordinary income because contributions and earnings were sheltered from tax during accumulation. Distributions before age 59½ typically trigger an additional 10% early-withdrawal penalty, subject to enumerated exceptions. **Roth** distributions are tax-free when the account has been open at least five years and the owner is at least 59½, since Roth contributions were made with after-tax dollars.\n\n**Required minimum distributions (RMDs)** force the taxpayer to start drawing from traditional retirement accounts after a statutory age (currently 73, scheduled to rise to 75 later this decade under SECURE 2.0). The RMD is the prior-year-end account balance divided by the applicable life-expectancy factor from the IRS Uniform Lifetime Table:\n\n$$\\text{RMD} = \\frac{\\text{Prior-year-end balance}}{\\text{Life-expectancy factor}}$$\n\nFailing to take a full RMD triggers an excise tax on the shortfall (recently reduced from 50% to 25%, or 10% if corrected promptly). Roth IRAs have **no RMDs** during the owner's lifetime.\n\n**IRMAA** — the Income-Related Monthly Adjustment Amount — increases Medicare Part B and Part D premiums for higher-income beneficiaries. It is computed from **modified adjusted gross income (MAGI) from two years prior**, so a one-year spike in income (a Roth conversion, a large capital gain, a bunched RMD) can push a client into a higher IRMAA tier two years later. The brackets are not phased in: crossing a threshold by one dollar can lift premiums for a full year, so distribution planning matters for clients age 63 and older.\n\n### Entity Taxation: C-Corps, S-Corps, Trusts, and Pass-Throughs\n\nA **C-corporation** is a separately taxable entity. Corporate profit is taxed at the entity level (currently a flat 21% federal rate), and any profit paid out as dividends is taxed a second time at the shareholder level — the classic **double taxation** that distinguishes C-corp equity from other ownership structures.\n\nAn **S-corporation** elects pass-through treatment under Subchapter S. The entity files an information return but pays no federal income tax; profits and losses flow through pro rata to shareholders, who report them on personal returns whether or not cash is distributed. S-corps are limited to at most 100 U.S.-resident individual shareholders and one class of stock.\n\n**Trusts** that retain income face highly compressed brackets that hit the top federal rate at a very low income level — a planning consideration when an irrevocable trust accumulates rather than distributes investment income. Income that is distributed to beneficiaries generates a **distribution deduction** for the trust and is taxed instead to the beneficiary on Schedule K-1.\n\nThe other pass-through entities the outline names:\n\n- **REITs (real estate investment trusts):** must distribute at least 90% of taxable income to retain REIT status. Ordinary REIT dividends are taxed at ordinary income rates (not qualified), though a portion may qualify for the 20% qualified-business-income deduction.\n- **MLPs (master limited partnerships):** publicly traded partnerships whose distributions are largely return of capital that reduces the investor's basis. Investors receive Schedule K-1, not Form 1099.\n- **LLCs:** default to partnership taxation (single-member LLCs are disregarded), but may elect C- or S-corp treatment.\n\n### Wealth Transfer: Gift and Estate Tax\n\nThe federal **estate tax** is imposed on assets transferred at death; the **gift tax** is the lifetime counterpart that prevents giving the estate away while alive. The two are merged into a **unified transfer tax** with a single lifetime exemption — the \"**unified credit**\" — expressed as a credit against tax. Above the exemption, transfers are taxed at a top federal rate of 40%.\n\nTwo reliefs reduce reportable transfers:\n\n- The **annual gift exclusion** (indexed each year, recently in the $18{,}000–$19{,}000 range per donee) lets a donor give that amount per recipient per year with **no** gift tax return required and **no** use of the lifetime exemption. A married couple can effectively double the figure through **gift splitting**.\n- The **lifetime exemption** (in the millions of dollars, indexed annually) shelters cumulative excess transfers. Any portion used during life reduces what remains at death.\n\n**Portability** allows a surviving spouse to inherit the deceased spouse's unused exemption (the **DSUE** amount) by timely filing Form 706, effectively giving the survivor up to twice the individual exemption. The unlimited **marital deduction** and **charitable deduction** allow transfers to a U.S.-citizen spouse or qualified charity free of estate or gift tax regardless of size.\n\n### Worked Example\n\nA client in the 35% federal marginal bracket sells stock she has held for three years. Basis is $40{,}000; sale proceeds are $90{,}000.\n\nCapital gain:\n\n$$90{,}000 - 40{,}000 = 50{,}000$$\n\nBecause the holding period exceeds one year, the gain is long-term. At the 20% top long-term rate:\n\n$$\\text{Tax} = 50{,}000 \\times 0.20 = 10{,}000$$\n\nAfter-tax proceeds: $90{,}000 - 10{,}000 = 80{,}000$.\n\nIf the same gain were short-term (held one year or less), the tax would be $50{,}000 \\times 0.35 = 17{,}500$ — a $7{,}500 tax cost for selling a few days too early. The same client should also confirm that selling in this calendar year does not push MAGI across an IRMAA threshold that will raise her Medicare premium two years from now.\n\n### Summary\n\nFederal income tax is marginal; capital gains and qualified dividends receive preferential 0/15/20% rates when holding periods are met. Tax basis (purchase price, stepped up at death, carried over for gifts) determines gain size; the wash-sale rule disallows losses around repurchases. Distributions from traditional retirement accounts are ordinary income, RMDs begin at age 73, and large distributions can drive Medicare IRMAA premiums two years later. C-corps face double taxation; S-corps, REITs, MLPs, and LLCs generally pass income through to owners. The federal estate and gift tax are unified, with an annual per-donee exclusion, a large lifetime exemption indexed for inflation, portability of any unused exemption between spouses, and unlimited marital and charitable deductions.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "OTHER",
      "ref": "Internal Revenue Service"
    },
    {
      "source": "OTHER",
      "ref": "IRS"
    },
    {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 17"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 525"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 550"
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
      "ref": "IRS Publication 590-B"
    },
    {
      "source": "OTHER",
      "ref": "IRC Section 1091"
    },
    {
      "source": "OTHER",
      "ref": "IRC Section 401(a)"
    },
    {
      "source": "OTHER",
      "ref": "IRC Section 401(k)"
    },
    {
      "source": "OTHER",
      "ref": "IRC Section 403(b)"
    },
    {
      "source": "OTHER",
      "ref": "IRC Section 408"
    },
    {
      "source": "OTHER",
      "ref": "IRC Section 408A"
    },
    {
      "source": "OTHER",
      "ref": "U.S. Department of the Treasury"
    },
    {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    }
  ],
  "subtopicId": "3.5",
  "reviewed": false
};

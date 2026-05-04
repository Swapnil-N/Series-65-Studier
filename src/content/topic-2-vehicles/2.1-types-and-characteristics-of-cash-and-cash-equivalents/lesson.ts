import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Cash and Cash Equivalents: Insured Deposits and Money Market Instruments",
  "bodyMd": "Cash and cash equivalents are the safest, most liquid holdings in a portfolio. On the Series 65, you are expected to know what counts as a cash equivalent, who guarantees it, how its yield is quoted, and where it sits on the risk-return spectrum. The category covers two broad families: **insured deposits** held at banks (demand deposits and certificates of deposit) and **money market instruments** issued in the open market (commercial paper and Treasury bills). All four are short-term, highly liquid, and carry minimal price volatility, but the source of their safety differs in ways the exam likes to test.\n\nThese instruments are explicitly enumerated in the Series 65 outline under investment vehicles, which is why understanding them is foundational for both product knowledge and suitability analysis later in the course.\n\n### Insured Bank Deposits\n\nBank deposits are the simplest cash holdings an investor can own. Their distinguishing feature is federal insurance: deposit accounts at FDIC-member banks are insured up to $250{,}000 per depositor, per insured bank, per ownership category. That insurance is what allows the exam to treat insured deposits as essentially **default-risk free** at the retail scale, and it is administered by the Federal Deposit Insurance Corporation. Credit unions receive equivalent coverage through the NCUA, but the Series 65 typically frames the topic around the FDIC.\n\n**Demand deposits** are accounts from which the depositor can withdraw funds on demand without prior notice — checking accounts, NOW accounts, and most savings accounts. They are perfectly liquid and historically paid little or no interest, although that has shifted as the Federal Reserve has changed its target for the federal funds rate. From a portfolio-construction standpoint, a demand deposit is the closest practical equivalent to physical cash: principal is stable at par, and the depositor faces no market-price risk. The trade-off is that the real return is often negative once inflation is netted out, a point the Bureau of Labor Statistics tracks through the Consumer Price Index.\n\n**Certificates of deposit (CDs)** are time deposits. The depositor agrees to leave funds with the bank for a fixed term — anywhere from 30 days to 10 years — in exchange for a stated interest rate. Early withdrawal usually triggers a penalty (commonly several months of interest), so CDs are less liquid than demand deposits. Two distinctions the exam emphasizes:\n\n- A **negotiable (\"jumbo\") CD** is issued in denominations of $100{,}000 or more and trades in a secondary market. Negotiable CDs are money market instruments in their own right.\n- A **brokered CD** is issued by a bank but sold through a broker-dealer; it is still FDIC-insured up to the per-bank limit, but its market value can fluctuate before maturity if the holder needs to sell early.\n\nFor a CD held to maturity at a stated annual percentage rate $r$ compounded $n$ times per year for $t$ years, the future value of principal $P$ is:\n\n$$FV = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$\n\nThe **effective annual yield** (EAY), which is what an investor actually earns after compounding, is:\n\n$$EAY = \\left(1 + \\frac{r}{n}\\right)^{n} - 1$$\n\n### Money Market Instruments\n\nMoney market instruments are short-term debt securities — generally maturing in 270 days or less — that trade in a wholesale market dominated by institutions. They are not deposits and they are not FDIC-insured. Their safety comes from the credit quality of the issuer and the brevity of the term. Two are explicitly named in the outline.\n\n**Commercial paper** is unsecured, short-term promissory notes issued by large, creditworthy corporations to fund working capital — payroll, inventory, receivables financing. Maturities are almost always 270 days or less, and there is a regulatory reason for that ceiling: under the Securities Act of 1933, short-term commercial paper that meets the statutory tests is exempt from registration, which makes issuance cheap and fast. Commercial paper is sold at a discount to face value rather than paying periodic coupons; the investor's return is the difference between the purchase price and the par value received at maturity. Because there is no collateral, credit ratings from S&P Global Ratings, Moody's Investors Service, and Fitch Ratings are central to pricing — paper rated below the top tier may still trade, but at meaningfully wider spreads.\n\n**Treasury bills (T-bills)** are short-term obligations of the U.S. federal government, issued by the U.S. Department of the Treasury in maturities of 4, 8, 13, 17, 26, and 52 weeks. They are sold at auction at a discount to face value and pay no coupon — the holder simply receives the face amount at maturity. Because they are backed by the full faith and credit of the United States, T-bills are treated as the practical proxy for the risk-free rate in finance theory and on the exam. They carry no credit risk, no call risk, and almost no interest-rate risk because of their short maturity. Federal interest is also exempt from state and local income tax, which the IRS describes in Publication 550.\n\nT-bill yields are quoted on a **bank discount basis**, which understates the true return because it uses face value (not the price paid) in the denominator and a 360-day year. For a bill with face value $F$, purchase price $P$, and $t$ days to maturity:\n\n$$\\text{Discount Yield} = \\frac{F - P}{F} \\times \\frac{360}{t}$$\n\nTo compare a T-bill yield to a CD or bond yield, convert to the **bond equivalent yield** (BEY), which uses the price actually paid and a 365-day year:\n\n$$BEY = \\frac{F - P}{P} \\times \\frac{365}{t}$$\n\n### Yield, Liquidity, and Risk Differences\n\nThe four instruments differ along three axes the exam loves to compare:\n\n- **Source of safety.** Demand deposits and CDs are protected by FDIC insurance; T-bills are protected by the U.S. Treasury's taxing power; commercial paper is protected only by the issuer's credit.\n- **Liquidity.** Demand deposits and T-bills (deep secondary market) are most liquid; commercial paper and negotiable CDs trade institutionally; non-negotiable CDs are least liquid and carry early-withdrawal penalties.\n- **Tax treatment.** Interest on bank deposits is fully taxable at the federal, state, and local level. Interest on T-bills is taxable federally but exempt from state and local tax. Discount on commercial paper is fully taxable.\n\nNone of these instruments materially compensates investors for taking risk; their role in a portfolio is to preserve principal, supply liquidity, and serve as a parking place during reallocation.\n\n### Worked Example\n\nAn investor buys a 91-day T-bill with a face value of $10{,}000 for $9{,}920. Compute the discount yield and the bond equivalent yield.\n\nDiscount yield:\n\n$$\\frac{10{,}000 - 9{,}920}{10{,}000} \\times \\frac{360}{91} = \\frac{80}{10{,}000} \\times 3.956 \\approx 3.16\\%$$\n\nBond equivalent yield:\n\n$$\\frac{10{,}000 - 9{,}920}{9{,}920} \\times \\frac{365}{91} = \\frac{80}{9{,}920} \\times 4.011 \\approx 3.23\\%$$\n\nThe BEY is higher than the discount yield for two reasons: it divides by the smaller price actually paid, and it uses 365 days instead of 360. If the same investor were comparing the bill against a 91-day CD quoted at 3.20% APY, the CD would actually be the lower-yielding option once the T-bill is restated on a comparable basis.\n\n### Summary\n\nCash equivalents are short-term, highly liquid holdings used to preserve principal. Demand deposits and CDs are bank products insured by the FDIC up to $250{,}000 per depositor, per bank, per ownership category. Commercial paper is unsecured short-term corporate debt, exempt from registration when maturity is 270 days or less, and priced at a discount. Treasury bills are short-term obligations of the U.S. Treasury, sold at auction at a discount, free of credit risk, and exempt from state and local tax. T-bill yields are quoted on a 360-day discount basis and must be converted to a bond equivalent yield for apples-to-apples comparison.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "OTHER",
      "ref": "FDIC"
    },
    {
      "source": "OTHER",
      "ref": "Federal Deposit Insurance Corporation"
    },
    {
      "source": "OTHER",
      "ref": "Federal Reserve"
    },
    {
      "source": "OTHER",
      "ref": "Federal Funds Rate"
    },
    {
      "source": "OTHER",
      "ref": "Bureau of Labor Statistics"
    },
    {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 3(a)"
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
      "ref": "U.S. Department of the Treasury"
    },
    {
      "source": "OTHER",
      "ref": "U.S. Treasury"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    }
  ],
  "subtopicId": "2.1",
  "reviewed": false
};

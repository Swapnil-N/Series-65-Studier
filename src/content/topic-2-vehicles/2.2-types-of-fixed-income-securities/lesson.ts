import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Types of Fixed Income Securities",
  "bodyMd": "Fixed income securities are debt instruments in which an issuer borrows money from investors and promises to pay periodic interest (the coupon) and return the principal at maturity. The Series 65 expects you to recognize the major issuer categories — the federal government, asset-backed pools, corporations, state and local governments, and foreign entities — and to know how each is taxed, how it is rated, and what risks each carries.\n\n### U.S. Government Securities\n\nSecurities issued directly by the U.S. Treasury are treated as the benchmark 'risk-free' instruments because they are backed by the full faith and credit of the federal government. The Treasury issues three families of marketable instruments distinguished primarily by maturity:\n\n- **Treasury Bills (T-bills)** — maturities of 4, 8, 13, 17, 26, and 52 weeks. T-bills are sold at a *discount* to face value and pay no periodic coupon; the investor's return is the difference between purchase price and the face amount paid at maturity.\n- **Treasury Notes (T-notes)** — maturities of 2, 3, 5, 7, and 10 years. They pay a fixed semiannual coupon.\n- **Treasury Bonds (T-bonds)** — maturities of 20 and 30 years. They also pay a fixed semiannual coupon.\n\nInterest income on all three is fully taxable at the federal level but exempt from state and local income tax. Because Treasuries are direct obligations of the federal government, they are *exempt securities* and need not be SEC-registered under the Securities Act of 1933.\n\nThe quoted discount yield on a T-bill uses a 360-day money-market convention:\n\n$$\\text{Discount Yield} = \\frac{\\text{Face} - \\text{Price}}{\\text{Face}} \\times \\frac{360}{\\text{Days to Maturity}}$$\n\n**Treasury Inflation-Protected Securities (TIPS)** address the single biggest weakness of conventional Treasuries — purchasing-power risk. TIPS pay a fixed *real* coupon rate, but the *principal* is adjusted twice a year for changes in the Consumer Price Index for All Urban Consumers (CPI-U), which is published monthly by the Bureau of Labor Statistics. When inflation rises, the principal is written up and the next coupon is then paid on the larger principal balance. At maturity, the holder receives the greater of the inflation-adjusted principal or original par. The annual inflation adjustment is taxable as ordinary federal income in the year it accrues — the well-known 'phantom income' problem — even though the cash is not actually received until maturity.\n\n### Asset-Backed and Corporate Bonds\n\n**Asset-backed securities (ABS)** are bonds whose cash flows come from a pool of underlying receivables: auto loans, credit-card balances, student loans, or equipment leases. A subset, **mortgage-backed securities (MBS)**, is collateralized by residential or commercial mortgages. MBS investors face *prepayment risk*: when mortgage rates fall, homeowners refinance, returning principal to the bondholder at the exact moment that reinvestment yields are lowest. Ginnie Mae pass-throughs carry the full faith and credit of the U.S. government; Fannie Mae and Freddie Mac MBS carry only an implied federal guarantee.\n\n**Corporate bonds** are obligations of a corporation, either unsecured (debentures) or secured (mortgage bonds, equipment trust certificates, collateral trust bonds). In a liquidation, bondholders rank ahead of preferred and common shareholders. Corporate interest is fully taxable at federal, state, and local levels. Credit quality is graded by the major nationally recognized statistical rating organizations — primarily S&P Global Ratings, Moody's Investors Service, and Fitch Ratings. Investment-grade issues are rated BBB-/Baa3 or higher; anything below is 'high-yield' or 'junk' and carries materially higher default risk in exchange for materially higher yield.\n\n### Municipal Bonds\n\nMunicipal bonds ('munis') are issued by states, cities, counties, school districts, and other political subdivisions to fund public projects. The Municipal Securities Rulemaking Board (MSRB) writes the rules that govern dealers in this market, and MSRB Rule G-17 imposes a duty of fair dealing on every transaction. Munis come in two principal flavors:\n\n- **General Obligation (GO) bonds** — backed by the full taxing power of the issuer. State GOs are repaid from income, sales, and other state-level taxes; local GOs typically rely on ad valorem (property) taxes and often require voter approval because they pledge unlimited tax authority.\n- **Revenue bonds** — repaid solely from the revenue produced by a specific facility such as a toll road, water utility, airport, or hospital. Because there is no taxing-power backstop, they generally carry higher yields than GOs of equivalent credit quality. The debt-service coverage ratio (net facility revenue divided by annual debt service) is a standard credit metric.\n\n**Insured municipals** are 'wrapped' by a monoline bond insurer that pledges to cover principal and interest if the underlying issuer defaults. The insurance generally lifts the issue's rating to that of the insurer, lowers the coupon the issuer must pay, and is paid for by the issuer at the time of issuance.\n\nThe headline appeal of munis is **federal tax exemption** of interest income. Most are also exempt from the *issuing state's* income tax for residents — the so-called 'double' (federal + state) or 'triple' (federal + state + local) tax exemption. Capital gains on munis remain taxable, and certain private-activity bonds can trigger the alternative minimum tax. To compare a tax-free muni yield against a taxable bond, compute the **taxable equivalent yield (TEY)**:\n\n$$\\text{TEY} = \\frac{\\text{Tax-Free Yield}}{1 - \\text{Marginal Tax Rate}}$$\n\n### Foreign-Issued Bonds\n\nForeign bonds let investors reach beyond the domestic credit and rate cycle, but they add currency risk and, in many cases, political risk. There are two broad categories:\n\n- **Sovereign debt** — bonds issued by a national government in either its own currency or a foreign currency. Developed-market sovereigns (UK gilts, German Bunds, Japanese JGBs) are typically high-grade; emerging-market sovereigns can range from investment-grade to deeply speculative. A government's sovereign rating from Moody's, S&P, or Fitch usually acts as a hard ceiling on the ratings of corporate issuers domiciled in that country.\n- **Foreign corporate debt** — bonds issued by non-U.S. companies. 'Eurobonds' are denominated in a currency other than that of the country in which they are sold (for example, a U.S.-dollar bond sold in London). 'Yankee bonds' are dollar-denominated bonds issued in the U.S. by foreign borrowers and registered with the SEC.\n\nFor a U.S. investor, total return on a foreign bond is the local-currency yield plus or minus the change in the exchange rate, so a 5% nominal yield can easily become a negative dollar return if the issuer's currency depreciates against the dollar.\n\n### Worked Example: Comparing a Muni to a Treasury\n\nAn investor in the 32% federal bracket is choosing between:\n\n- a 30-year Treasury yielding 4.50% (federally taxable, state-tax-exempt), and\n- an in-state general obligation muni yielding 3.40% (federally and state-tax-exempt).\n\nIgnoring the small state-tax benefit of the Treasury, the taxable equivalent yield of the muni is:\n\n$$\\text{TEY} = \\frac{0.0340}{1 - 0.32} = \\frac{0.0340}{0.68} = 0.0500 = 5.00\\%$$\n\nOn a like-for-like, after-tax basis the muni delivers an equivalent 5.00% versus the Treasury's 4.50%, so the muni wins for this investor — provided the credit and liquidity differences are acceptable. A lower-bracket investor would flip the answer; that is why TEY is the right comparison, not headline yield.\n\n### Summary\n\nFixed income spans Treasuries (including TIPS), asset-backed and mortgage-backed pools, corporate debentures and secured corporates, municipal bonds (GO, revenue, and insured), and foreign sovereign and corporate debt. Tax treatment is the most testable distinction: Treasury interest is state-tax-exempt, muni interest is generally federally exempt, and corporate and foreign bond interest is fully taxable. Always convert tax-free yields to a taxable equivalent before comparing across categories, and remember that ratings agencies, not the issuer, set the market's view of credit risk.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "Section II.B"
    },
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 3(a)"
    },
    {
      "source": "OTHER",
      "ref": "U.S. Department of the Treasury"
    },
    {
      "source": "OTHER",
      "ref": "Bureau of Labor Statistics"
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
      "ref": "MSRB"
    },
    {
      "source": "OTHER",
      "ref": "MSRB Rule G-17"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    }
  ],
  "subtopicId": "2.2",
  "reviewed": false
};

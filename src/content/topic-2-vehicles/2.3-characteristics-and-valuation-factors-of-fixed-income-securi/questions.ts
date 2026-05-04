import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "When prevailing market interest rates rise, the price of an existing fixed-rate bond will most likely do which of the following?",
    "choices": [
      "Increase",
      "Decrease",
      "Remain unchanged because the coupon is fixed",
      "Adjust upward to keep yield equal to the coupon"
    ],
    "answerIndex": 1,
    "rationale": "Bond prices and market yields move inversely: as required market yields rise, the present value of a bond's fixed future cash flows falls, so its price drops. The 'remain unchanged' distractor confuses the fixed coupon (which does not change) with the bond's price (which does), so it is incorrect.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "e79948b5fc64",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "A corporate bond is currently quoted at 105. The bond is trading at:",
    "choices": [
      "Par",
      "A discount",
      "A premium",
      "Its call price"
    ],
    "answerIndex": 2,
    "rationale": "Bond quotes are expressed as a percentage of par; a quote of 105 equals $1,050 on a $1,000 par bond, which is above par and therefore a premium. A 'discount' would require a quote below 100, so that distractor is wrong.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "65124a43206a",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "A corporate bond quoted at 95 is trading at:",
    "choices": [
      "A premium",
      "Par",
      "A discount",
      "Its conversion value"
    ],
    "answerIndex": 2,
    "rationale": "A quote of 95 means 95% of par, or $950 on a $1,000 par bond, which is less than par and therefore a discount. The 'conversion value' distractor is unrelated; conversion value applies only to convertible securities and is computed from the underlying stock price, not the bond quote.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "dc3ae9c3912d",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "The par value of a typical U.S. corporate bond is generally:",
    "choices": [
      "$100",
      "$500",
      "$1,000",
      "$10,000"
    ],
    "answerIndex": 2,
    "rationale": "U.S. corporate bonds are conventionally issued with a $1,000 par (face) value, which is the amount returned at maturity and the basis for coupon and quote calculations. $100 is a common quote convention (percentage of par), not the par value itself, which is the leading distractor.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "e4893aefb9d8",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "Under Standard & Poor's rating scale, the lowest rating that is still considered investment grade is:",
    "choices": [
      "AA-",
      "A-",
      "BBB-",
      "BB+"
    ],
    "answerIndex": 2,
    "rationale": "S&P treats BBB- as the lowest investment-grade tier; ratings of BB+ and below are speculative grade ('junk'). BB+ is the leading distractor because it sits one notch below the cutoff and is sometimes confused with investment grade, but it is the highest non-investment-grade rating.",
    "citation": {
      "source": "OTHER",
      "ref": "S&P Global Ratings"
    },
    "difficulty": "easy",
    "id": "9dc4bd41a63e",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "In a corporate liquidation, which of the following claimants is generally paid first?",
    "choices": [
      "Common stockholders",
      "Preferred stockholders",
      "Secured bondholders",
      "Unsecured (debenture) bondholders"
    ],
    "answerIndex": 2,
    "rationale": "Liquidation preference favors secured creditors first because they have a specific lien on collateral; unsecured bondholders, then preferred, then common follow. Unsecured bondholders are the leading distractor, but they are paid only after secured claims are satisfied.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "778eba1d7b33",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "A zero-coupon bond is most commonly issued at:",
    "choices": [
      "A deep discount to par",
      "A premium to par",
      "Par with semiannual coupons",
      "Par with annual coupons"
    ],
    "answerIndex": 0,
    "rationale": "Zero-coupon bonds pay no periodic interest, so they are sold at a deep discount and accrete to par at maturity, which is how the investor earns a return. The 'par with semiannual coupons' distractor describes a conventional coupon bond, not a zero.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "100b451839a1",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "Interest paid on a general obligation municipal bond is generally:",
    "choices": [
      "Subject to federal, state, and local tax",
      "Exempt from federal income tax (and often state tax for residents of the issuing state)",
      "Subject only to state income tax",
      "Exempt only from FICA"
    ],
    "answerIndex": 1,
    "rationale": "Interest on most municipal bonds is exempt from federal income tax and is also state-tax-exempt for residents of the issuing state under the doctrine of reciprocal immunity. The 'subject only to state income tax' distractor reverses the usual rule -- federal exemption is the defining feature.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "easy",
    "id": "fb11bd7a8411",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "Interest paid on U.S. Treasury notes and bonds is exempt from:",
    "choices": [
      "Federal income tax",
      "State and local income tax",
      "Both federal and state tax",
      "FICA only"
    ],
    "answerIndex": 1,
    "rationale": "Treasury interest is fully taxable at the federal level but is statutorily exempt from state and local income tax. The 'federal income tax' distractor confuses Treasuries with municipal bonds; only municipals are typically federally exempt.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "easy",
    "id": "70959583bb99",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "A bond's coupon rate is best described as:",
    "choices": [
      "The yield based on current market price",
      "The stated annual interest as a percentage of par value",
      "The internal rate of return if held to maturity",
      "The discount rate that equates the bond's price to its present value"
    ],
    "answerIndex": 1,
    "rationale": "The coupon (nominal) rate is fixed at issuance and equals annual coupon dollars divided by par value. The 'yield based on current market price' distractor describes current yield, which uses market price -- not par -- in the denominator.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "198cc8767429",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "Which yield measure uses only the annual coupon income and the bond's current market price?",
    "choices": [
      "Yield to maturity",
      "Yield to call",
      "Current yield",
      "Nominal yield"
    ],
    "answerIndex": 2,
    "rationale": "Current yield equals annual coupon dollars divided by current market price, ignoring time to maturity, reinvestment, and capital gain/loss. Yield to maturity is the leading distractor because it also reflects price, but YTM additionally factors in time to maturity and the pull-to-par effect.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "cb1135bbd04e",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "Macaulay duration is best described as:",
    "choices": [
      "The bond's stated maturity in years",
      "The weighted-average time, in years, until a bond's cash flows are received",
      "The percentage change in price for a 1% change in yield",
      "The convexity of the price/yield curve"
    ],
    "answerIndex": 1,
    "rationale": "Macaulay duration is a time-weighted average of when the bond's coupons and principal are received, with weights equal to the present value of each cash flow as a share of price. The 'percentage change in price' distractor describes modified duration, which is Macaulay duration divided by (1+y/n).",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "06d061e2f860",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "All else equal, which bond has the highest duration and therefore the greatest interest-rate sensitivity?",
    "choices": [
      "A 5-year, 8% coupon bond",
      "A 10-year, 6% coupon bond",
      "A 30-year, 4% coupon bond",
      "A 30-year zero-coupon bond"
    ],
    "answerIndex": 3,
    "rationale": "Duration rises with maturity and falls with coupon; a 30-year zero has both the longest maturity and no coupons, so its Macaulay duration equals 30 years -- the highest of the choices. The 30-year 4% coupon bond is the leading distractor, but its periodic coupons shorten its duration below maturity.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "188e0482109e",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "A callable bond is purchased at a premium. The lowest yield the investor is likely to realize is the:",
    "choices": [
      "Coupon rate",
      "Current yield",
      "Yield to maturity",
      "Yield to call"
    ],
    "answerIndex": 3,
    "rationale": "For a premium callable bond, the issuer is most likely to call when rates fall, accelerating the recovery of the premium and lowering realized yield -- so YTC is typically below YTM (the 'yield to worst' is YTC here). YTM is the leading distractor, but the early call shortens the holding period and absorbs more of the premium loss in fewer periods.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "581b9f37f145",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "Holders of zero-coupon bonds (other than tax-exempt municipal zeros) are subject to U.S. federal income tax on:",
    "choices": [
      "Only the gain at maturity",
      "The accreted (imputed) interest each year, even though no cash is received",
      "Coupon income on the date paid",
      "Nothing until the bond is sold"
    ],
    "answerIndex": 1,
    "rationale": "Original-issue-discount (OID) rules require holders to report annual accretion as taxable interest income, producing 'phantom income' on taxable zeros. The 'only the gain at maturity' distractor ignores the OID rules; it would be true only for tax-exempt municipal zeros, where the accretion is excluded from federal tax.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "fdbbd13c9464",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "An investor in the 32% federal marginal tax bracket is comparing a 4% tax-exempt municipal bond with a taxable corporate bond. The taxable-equivalent yield of the muni is closest to:",
    "choices": [
      "2.72%",
      "4.32%",
      "5.20%",
      "5.88%"
    ],
    "answerIndex": 3,
    "rationale": "Taxable-equivalent yield = tax-exempt yield / (1 - marginal tax rate) = 4% / (1 - 0.32) = 4% / 0.68 = 5.88%. The 5.20% distractor approximates 4% x (1+0.30), a common error of multiplying instead of dividing by (1 - rate).",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "medium",
    "id": "f90c5576bfc5",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "A widening credit spread between corporate bonds and Treasuries of similar maturity generally indicates that:",
    "choices": [
      "Treasury yields are rising faster than corporate yields",
      "Investors are demanding more compensation for credit risk",
      "The yield curve is flattening",
      "Inflation expectations are falling"
    ],
    "answerIndex": 1,
    "rationale": "Credit spread is the additional yield over a Treasury that compensates investors for credit (default) risk; a widening spread means investors require more compensation for taking corporate credit risk, often a sign of stress. 'Treasury yields rising faster' would actually narrow the spread, not widen it, so that distractor is wrong.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "a3bc91b6b28e",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "A bond has a modified duration of about 7. A 100 basis-point rise in interest rates will cause its price to change by approximately:",
    "choices": [
      "+7%",
      "-0.7%",
      "-7%",
      "-14%"
    ],
    "answerIndex": 2,
    "rationale": "Modified duration approximates the percentage price change for a 1% (100 bp) change in yield: a +1% yield change implies roughly -7% price change for duration of 7. The -0.7% distractor confuses 1 basis point with 1 percent (100 bp) and understates the move by a factor of 10.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "c766034c5a3e",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "Yield to maturity (YTM) is best described as:",
    "choices": [
      "Annual coupon divided by current market price",
      "Annual coupon divided by par value",
      "The internal rate of return earned if the bond is held to maturity and all coupons are reinvested at the YTM",
      "The annualized return assuming the bond is called at the first call date"
    ],
    "answerIndex": 2,
    "rationale": "YTM is the single discount rate that equates the present value of all future coupons and principal to the current price, assuming reinvestment of coupons at that same rate -- effectively the bond's IRR. The 'coupon divided by current market price' distractor is current yield, which omits time-to-maturity and reinvestment effects.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "1465bf6b3a7a",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "For a bond trading at a discount to par, the relationship among coupon rate, current yield, and yield to maturity is:",
    "choices": [
      "Coupon = current yield = YTM",
      "Coupon > current yield > YTM",
      "Coupon < current yield < YTM",
      "YTM < coupon < current yield"
    ],
    "answerIndex": 2,
    "rationale": "When a bond is at a discount, its price is below par, so dividing the fixed coupon by a smaller price raises the current yield above the coupon, and YTM is higher still because it adds the pull-to-par capital gain. The 'coupon > current yield > YTM' distractor describes a premium bond, not a discount.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "3bcc101be19a",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "A convertible corporate bond with $1,000 par has a conversion ratio of 25 shares. If the underlying common stock trades at $42, the bond's parity (conversion) value is:",
    "choices": [
      "$1,000",
      "$1,025",
      "$1,050",
      "$1,250"
    ],
    "answerIndex": 2,
    "rationale": "Conversion (parity) value = conversion ratio x stock price = 25 x $42 = $1,050. The $1,000 distractor reflects par value rather than the conversion calculation and ignores the relationship between the stock price and the conversion ratio.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "b170531a36e3",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "Reinvestment risk on a coupon bond is most pronounced when:",
    "choices": [
      "Coupons are low and rates are rising",
      "Coupons are high and rates are falling",
      "The bond is a zero-coupon",
      "The bond is held to maturity"
    ],
    "answerIndex": 1,
    "rationale": "Reinvestment risk is the risk that periodic cash flows must be reinvested at lower rates; it is greatest when coupons are large (more reinvested cash) and rates are declining (lower reinvestment rate). Zero-coupon bonds have no intermediate cash flows to reinvest, so 'the bond is a zero-coupon' is the wrong choice.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "940c0e591885",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "Discounted cash flow (DCF) valuation of a bond determines value as:",
    "choices": [
      "The sum of nominal future coupons and principal undiscounted",
      "The present value of expected future coupon and principal payments using a market discount rate",
      "The bond's par value adjusted for its credit rating",
      "The yield to maturity multiplied by the bond's duration"
    ],
    "answerIndex": 1,
    "rationale": "DCF discounts each future cash flow back to today using an appropriate market yield (or term-structure of yields) and sums them; this is the foundation for bond pricing. The 'sum of nominal future cash flows undiscounted' distractor ignores the time value of money, which is the entire point of DCF.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "183ab44600d7",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "Among Moody's long-term ratings, the lowest rating still classified as investment grade is:",
    "choices": [
      "A3",
      "Baa1",
      "Baa3",
      "Ba1"
    ],
    "answerIndex": 2,
    "rationale": "Moody's investment-grade scale ends at Baa3; ratings of Ba1 and below are speculative-grade ('junk'). Ba1 is the leading distractor because it is one notch below Baa3 and is often confused with the cutoff -- but it is the top non-investment-grade tier.",
    "citation": {
      "source": "OTHER",
      "ref": "Moody's Investors Service"
    },
    "difficulty": "medium",
    "id": "95179682fcb4",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "An investor holds a 6% callable corporate bond. Call risk is greatest when:",
    "choices": [
      "Market rates have risen well above 6%",
      "Market rates have fallen well below 6%",
      "The yield curve is inverted",
      "The bond is rated below investment grade"
    ],
    "answerIndex": 1,
    "rationale": "Issuers call bonds to refinance at lower coupons, so call risk peaks when market rates fall below the bond's coupon. 'Market rates have risen' is the leading distractor; in that scenario the issuer would not call, because new debt would cost more than the existing 6% coupon.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "dae3b9ef31d2",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "In a corporate liquidation, preferred stockholders rank:",
    "choices": [
      "Ahead of all bondholders",
      "Ahead of secured creditors but behind unsecured creditors",
      "Behind all general creditors but ahead of common stockholders",
      "Equally with common stockholders"
    ],
    "answerIndex": 2,
    "rationale": "Preferred stock is junior to all debt (secured and unsecured) but senior to common equity in liquidation. The 'ahead of all bondholders' distractor inverts the priority; preferred stock is equity, and equity is paid only after creditors are made whole.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "0dba05fb388f",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "Compared with a 10-year coupon bond, a 10-year zero-coupon bond will have:",
    "choices": [
      "Lower duration and lower interest-rate sensitivity",
      "Higher duration and higher interest-rate sensitivity",
      "Identical duration because they share the same maturity",
      "Higher duration only if coupon rates rise"
    ],
    "answerIndex": 1,
    "rationale": "A zero-coupon bond's only cash flow is at maturity, so its Macaulay duration equals its maturity (10 years), whereas a coupon bond's duration is shorter than 10 years. Higher duration means higher price sensitivity to yield changes, making 'identical duration' incorrect.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "2c29ce71a779",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "Liquidity risk in fixed income is best described as the risk that:",
    "choices": [
      "The issuer will default on principal",
      "Reinvestment rates fall after a coupon is received",
      "The bondholder cannot sell quickly at or near fair value without a meaningful price concession",
      "Inflation will erode the real value of coupon payments"
    ],
    "answerIndex": 2,
    "rationale": "Liquidity (marketability) risk is about the cost and ease of converting a position to cash; thinly traded bonds may force sellers to accept wider bid-ask spreads or below-fair-value prices. 'Inflation will erode the real value of coupons' describes purchasing-power (inflation) risk, a separate fixed-income risk category.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "59bfc0f382bb",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "A credit rating downgrade from BBB- to BB+ would generally cause the affected bond's price to:",
    "choices": [
      "Rise, because investors view it as a fallen angel opportunity",
      "Stay flat, because rating changes are already priced in by issuance",
      "Fall, because the bond is now speculative grade and many institutional buyers must sell",
      "Rise, because high-yield bonds always pay more"
    ],
    "answerIndex": 2,
    "rationale": "Crossing from BBB- (lowest investment grade) to BB+ (top junk) is a 'fallen-angel' downgrade: many institutional mandates restrict holdings to investment grade, so forced selling and a higher required yield push the price down. The 'stay flat' distractor ignores the structural buyer base shift that occurs at the IG/HY boundary.",
    "citation": {
      "source": "OTHER",
      "ref": "S&P Global Ratings"
    },
    "difficulty": "medium",
    "id": "01a0ea07bec5",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "An investor buys a 5% coupon, $1,000 par bond at a price of 90. The current yield is closest to:",
    "choices": [
      "4.50%",
      "5.00%",
      "5.56%",
      "6.25%"
    ],
    "answerIndex": 2,
    "rationale": "Current yield = annual coupon / current price = $50 / $900 = 5.56%. The 5.00% distractor is the coupon (nominal) yield based on par; the question asks for current yield, which uses the discounted market price of $900.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "052774525596",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "If a bond's yield to call is meaningfully below its yield to maturity, the bond is most likely:",
    "choices": [
      "Trading at a discount and unlikely to be called",
      "Trading at a premium and likely to be called if rates fall",
      "A non-callable bond trading at par",
      "A zero-coupon bond approaching maturity"
    ],
    "answerIndex": 1,
    "rationale": "When a callable bond trades at a premium, an early call returns par sooner, accelerating the loss of the premium and producing a YTC below the YTM; the issuer is likely to call to refinance at lower coupons. The 'discount and unlikely to be called' distractor is wrong because for a discount bond YTC is typically higher than YTM, and issuers have little incentive to call below par.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "e0579d4f66dd",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "An investor in the 24% federal marginal tax bracket holds a 5% taxable corporate bond. The investor's after-tax yield is approximately:",
    "choices": [
      "3.20%",
      "3.80%",
      "4.24%",
      "5.00%"
    ],
    "answerIndex": 1,
    "rationale": "After-tax yield = pretax yield x (1 - marginal rate) = 5% x (1 - 0.24) = 5% x 0.76 = 3.80%. The 4.24% distractor approximates 5% - 0.76 (subtracting the rate as percentage points) rather than multiplying by (1 - rate).",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "hard",
    "id": "df351d0b5e96",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "An investor compares an in-state municipal bond paying 3.5% (federal- and state-tax-exempt) with a taxable corporate bond. If the investor's combined federal-and-state marginal rate is 35%, the muni's taxable-equivalent yield is closest to:",
    "choices": [
      "2.28%",
      "4.45%",
      "5.38%",
      "10.0%"
    ],
    "answerIndex": 2,
    "rationale": "Taxable-equivalent yield = exempt yield / (1 - combined marginal rate) = 3.5% / (1 - 0.35) = 3.5% / 0.65 = 5.38%. The 4.45% distractor results from incorrectly using only the federal rate of about 22%, omitting the state portion that the in-state muni also escapes.",
    "citation": {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    },
    "difficulty": "hard",
    "id": "4353b33505c8",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "An investor holding a callable bond is most directly exposed to which risk when interest rates fall sharply?",
    "choices": [
      "Inflation risk on the coupon payments",
      "Reinvestment risk, because the issuer is more likely to call and the investor must reinvest principal at lower rates",
      "Default risk, because issuers cannot afford their coupon",
      "Purchasing-power risk on the principal at maturity"
    ],
    "answerIndex": 1,
    "rationale": "Falling rates make calls economical for issuers; the investor receives par and must redeploy proceeds at lower prevailing rates, the textbook reinvestment-risk scenario. The 'default risk' distractor is wrong because falling rates lower issuers' refinancing costs, generally improving (not worsening) credit conditions.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "92a933d05b30",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "Why does duration generally understate the true price impact of a large change in interest rates?",
    "choices": [
      "Duration ignores accrued interest",
      "The price/yield relationship is convex, so duration's linear estimate misses curvature -- convexity must be added",
      "Duration assumes zero default risk",
      "Duration is calculated only for callable bonds"
    ],
    "answerIndex": 1,
    "rationale": "Duration approximates a curved price/yield relationship with a tangent line; for large yield moves the actual price change exceeds the linear estimate (positive convexity), so duration alone understates price gains and overstates price losses. The 'ignores accrued interest' distractor is unrelated -- accrued interest affects invoice price, not the curvature of the price/yield function.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "320049310e60",
    "subtopicId": "2.3",
    "reviewed": false
  },
  {
    "stem": "A convertible bond has a conversion ratio of 40 shares per bond and the underlying stock trades at $30. The bond is currently quoted at 130. The conversion premium (in dollars) is:",
    "choices": [
      "$0",
      "$100",
      "$200",
      "$300"
    ],
    "answerIndex": 1,
    "rationale": "Parity value = 40 x $30 = $1,200; the bond's market price = 130% of $1,000 = $1,300; conversion premium = market price - parity = $1,300 - $1,200 = $100. The $300 distractor incorrectly subtracts par from market price ($1,300 - $1,000) instead of parity, ignoring the conversion calculation entirely.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "4c1473fb3df8",
    "subtopicId": "2.3",
    "reviewed": false
  }
];

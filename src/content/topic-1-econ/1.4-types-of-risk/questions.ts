import type { Question } from "../../../types/content";

export const questions: Question[] = [
  {
    "stem": "Which of the following best describes systematic risk?",
    "choices": [
      "Risk that affects the entire market and cannot be eliminated through diversification",
      "Risk that affects only a single company and can be diversified away",
      "Risk arising from a company's choice of capital structure",
      "Risk that is fully compensated by the risk-free rate of return"
    ],
    "answerIndex": 0,
    "rationale": "Systematic (market) risk affects the broad market and cannot be diversified away because it stems from macro forces such as interest-rate moves, inflation, and geopolitical events. The top distractor describes unsystematic (firm-specific) risk, which CAN be diversified away by holding many uncorrelated securities; that is the defining contrast between the two categories.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "difficulty": "easy",
    "id": "ec65290bd226",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following risks is considered UNSYSTEMATIC?",
    "choices": [
      "Interest rate risk",
      "Geopolitical risk",
      "Credit (default) risk of a single corporate bond issuer",
      "A broad recession affecting all sectors"
    ],
    "answerIndex": 2,
    "rationale": "Credit risk tied to one specific issuer is unsystematic because it can be reduced by holding bonds of many different issuers. The top distractor, interest rate risk, is systematic — it affects bond prices market-wide regardless of how many issuers an investor holds, so diversification across issuers does not remove it.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "difficulty": "easy",
    "id": "29d02bcfabfd",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "In the event of a corporate liquidation, which class of claimants is paid FIRST?",
    "choices": [
      "Common stockholders",
      "Preferred stockholders",
      "Holders of secured debt",
      "Holders of subordinated debentures"
    ],
    "answerIndex": 2,
    "rationale": "Secured creditors stand first in the liquidation waterfall because their claim is collateralized by specific assets. The top distractor, subordinated debentures, are unsecured AND ranked below other (senior) unsecured debt; they are paid only after secured and senior unsecured creditors are satisfied.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "40a7f9c88c0b",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following correctly orders claimants in a corporate liquidation from FIRST to LAST?",
    "choices": [
      "Common stock, preferred stock, debentures, secured debt",
      "Secured debt, debentures, preferred stock, common stock",
      "Preferred stock, common stock, secured debt, debentures",
      "Debentures, secured debt, common stock, preferred stock"
    ],
    "answerIndex": 1,
    "rationale": "The standard liquidation priority is: secured creditors, then unsecured creditors (including debentures), then preferred stockholders, then common stockholders last. The top distractor inverts the entire waterfall by putting equity holders ahead of creditors, which is wrong because debt is contractual and senior to all equity claims.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "e36818dc782f",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Opportunity cost is best defined as:",
    "choices": [
      "The transaction commission paid to execute a trade",
      "The return forgone by choosing one investment over the next-best alternative",
      "The interest expense incurred on margin borrowing",
      "The tax liability triggered by realizing a capital gain"
    ],
    "answerIndex": 1,
    "rationale": "Opportunity cost measures the value of the next-best alternative that an investor gives up by selecting a particular choice — for example, selecting a 3% Treasury when a comparable-risk bond yields 4%. The top distractor (commissions) is an actual out-of-pocket cost, not a forgone return; opportunity cost is conceptual rather than a cash outlay.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "d2cfc4e8b51a",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Which type of risk can typically be REDUCED by holding a diversified portfolio?",
    "choices": [
      "Interest rate risk",
      "Geopolitical risk",
      "Inflation risk",
      "Issuer-specific business risk"
    ],
    "answerIndex": 3,
    "rationale": "Issuer-specific (business) risk is unsystematic and can be substantially reduced by holding many securities whose firm-specific shocks are not correlated. The top distractor, interest rate risk, is systematic — it moves bond prices broadly across the market, so adding more bonds does not eliminate it.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "difficulty": "easy",
    "id": "ff3ff012e860",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following is an example of geopolitical risk?",
    "choices": [
      "A pharmaceutical company losing patent protection on a drug",
      "A foreign government nationalizing the assets of a U.S. multinational",
      "A corporation reporting weaker-than-expected quarterly earnings",
      "Rising interest rates causing bond prices to fall"
    ],
    "answerIndex": 1,
    "rationale": "Geopolitical risk arises from political events such as wars, sanctions, regime change, or expropriation by a sovereign — nationalization is a textbook example. The top distractor (loss of patent) is issuer-specific (unsystematic) risk because it affects a single firm rather than markets broadly.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "05cbaf3aa43d",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "In a typical capital structure, which of the following has the LOWEST priority claim on assets?",
    "choices": [
      "Senior secured bondholders",
      "Subordinated debenture holders",
      "Preferred stockholders",
      "Common stockholders"
    ],
    "answerIndex": 3,
    "rationale": "Common stockholders are residual claimants, paid only after all creditors and preferred stockholders have been satisfied; in many liquidations, common holders receive nothing. The top distractor, preferred stockholders, rank ahead of common because preferred shares carry a stated liquidation preference paid before any distribution to common.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "a8770ccca96f",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Sector risk is best classified as a form of:",
    "choices": [
      "Unsystematic risk that can be diversified away by holding stocks across multiple industries",
      "Credit risk specific to a single issuer",
      "A risk that is fully eliminated through international diversification",
      "Opportunity cost"
    ],
    "answerIndex": 0,
    "rationale": "Sector risk affects all firms in a particular industry (e.g., a regulatory crackdown on tobacco) and can be reduced by spreading holdings across different sectors. While sometimes labeled systematic when discussing market segments, the Series 65 outline lists sector risk as a systematic example because it cannot be removed by diversification WITHIN the sector — but across sectors it can. The top distractor (credit risk) is firm-specific, not industry-wide.",
    "citation": {
      "source": "NASAA",
      "ref": "Section I"
    },
    "difficulty": "easy",
    "id": "d331ae0a2087",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Preferred stock generally has a liquidation preference that is:",
    "choices": [
      "Junior to common stock but senior to debt",
      "Senior to common stock but junior to all debt",
      "Equal in priority to senior secured debt",
      "Senior to all debt and equity claims"
    ],
    "answerIndex": 1,
    "rationale": "Preferred stock holders are paid after all debt holders (secured and unsecured) but before common stockholders, reflecting the hybrid nature of preferred as senior equity. The top distractor reverses the order — common is the most junior claim and is always paid after preferred, never before it.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "ee81991d6399",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Which statement about diversification is MOST accurate?",
    "choices": [
      "Diversification eliminates both systematic and unsystematic risk",
      "Diversification reduces unsystematic risk but does not eliminate systematic risk",
      "Diversification eliminates only systematic risk",
      "Diversification has no measurable effect on portfolio risk"
    ],
    "answerIndex": 1,
    "rationale": "Markowitz showed that combining imperfectly correlated assets cancels firm-specific shocks (unsystematic risk), but the residual market-wide risk (systematic) remains. The top distractor is wrong because no level of diversification can remove macro factors like interest rates or geopolitical shocks that move the entire market together.",
    "citation": {
      "source": "OTHER",
      "ref": "Markowitz (1952)"
    },
    "difficulty": "easy",
    "id": "ae6ec0703776",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "An investor places funds in a 1% savings account when a comparably safe Treasury bill is yielding 4%. The 3% gap represents:",
    "choices": [
      "Inflation risk",
      "Opportunity cost",
      "Credit risk",
      "Liquidity risk"
    ],
    "answerIndex": 1,
    "rationale": "Opportunity cost is the value of the forgone next-best alternative; here, choosing the 1% account instead of the 4% T-bill costs 3% of return. The top distractor (inflation risk) refers to loss of purchasing power, not the gap between two available investment yields.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "easy",
    "id": "9660707218e4",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Interest rate risk most directly affects which of the following securities?",
    "choices": [
      "A long-duration Treasury bond",
      "An overnight money-market deposit",
      "A common stock that pays no dividend",
      "A short-term certificate of deposit"
    ],
    "answerIndex": 0,
    "rationale": "Long-duration bonds have the highest price sensitivity to interest rate changes because their cash flows extend further into the future and are discounted at the prevailing rate. The top distractor (overnight deposit) has effectively zero duration, so its principal is not meaningfully exposed to rate moves.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "414a207a2c48",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "All else equal, which bond will experience the LARGEST percentage price decline if market interest rates rise by 1%?",
    "choices": [
      "A 2-year Treasury note with a 5% coupon",
      "A 30-year Treasury bond with a 2% coupon",
      "A 5-year corporate bond with a 6% coupon",
      "A 1-year Treasury bill"
    ],
    "answerIndex": 1,
    "rationale": "Longer maturities and lower coupons both increase duration; the 30-year, low-coupon Treasury has the highest duration and therefore the largest price drop when rates rise. The top distractor (2-year, 5% coupon) has a far shorter maturity and a higher coupon, both of which make its price much less sensitive to rate changes.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "b8e1601a1364",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "A regional bank announces it has discovered material accounting fraud, and its stock plummets while the broader S&P 500 closes higher. This loss is BEST characterized as:",
    "choices": [
      "Systematic risk",
      "Issuer-specific (unsystematic) risk",
      "Interest rate risk",
      "Geopolitical risk"
    ],
    "answerIndex": 1,
    "rationale": "A loss tied to fraud at one specific firm is firm-specific (unsystematic) and would be largely diversified away in a broad portfolio. The top distractor (systematic risk) is incorrect because the broader market rose that day, indicating the loss did not stem from a market-wide factor.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "difficulty": "medium",
    "id": "2b1bc3e5a8eb",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Financial risk in the context of a corporation generally refers to:",
    "choices": [
      "The risk that the company will fail to attract talented management",
      "The risk arising from the company's use of debt (leverage) in its capital structure",
      "The risk that broad financial markets will decline",
      "The risk that the firm's auditors will issue a qualified opinion"
    ],
    "answerIndex": 1,
    "rationale": "Financial risk specifically refers to the additional volatility of equity returns and increased default probability that come from financing operations with debt; the more leverage, the higher the financial risk. The top distractor (management risk) is a separate type of issuer-specific risk and is not what 'financial risk' technically denotes in capital-structure analysis.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "e21b165a4c15",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following BEST describes legal/regulatory risk?",
    "choices": [
      "The chance that the Federal Reserve will raise the federal funds rate",
      "The chance that a new law or regulation will impair an issuer's profitability or operations",
      "The chance that an issuer will fail to make a scheduled interest payment",
      "The chance that a security cannot be sold quickly without a price concession"
    ],
    "answerIndex": 1,
    "rationale": "Legal/regulatory risk is the risk that changes in laws or regulations (e.g., a new EPA rule, a tax-code change, an FDA action) will adversely affect a security's value. The top distractor (Fed raising rates) is interest rate risk, which is systematic and unrelated to a specific change in legal rules governing an issuer.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "ed5cc62530e0",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Beta is most commonly used as a measure of:",
    "choices": [
      "Total risk of a security",
      "Systematic (non-diversifiable) risk relative to the market",
      "Unsystematic risk specific to one issuer",
      "Liquidation priority"
    ],
    "answerIndex": 1,
    "rationale": "In CAPM, beta quantifies a security's sensitivity to broad market movements — i.e., its systematic risk relative to a market benchmark. The top distractor (total risk) is captured by standard deviation, which combines both systematic and unsystematic components, whereas beta isolates only the market-driven portion.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "difficulty": "medium",
    "id": "d9a6c9a8a0b4",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following measures TOTAL risk (both systematic and unsystematic)?",
    "choices": [
      "Beta",
      "Standard deviation of returns",
      "Sharpe ratio",
      "Alpha"
    ],
    "answerIndex": 1,
    "rationale": "Standard deviation captures the total dispersion of returns, encompassing both market-related and firm-specific volatility. The top distractor, beta, measures only systematic risk (sensitivity to the market) and ignores diversifiable, firm-specific risk; therefore it understates total risk for an undiversified portfolio.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "3ebb6c0d3929",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following actions would MOST effectively reduce unsystematic risk in an equity portfolio?",
    "choices": [
      "Buying additional shares of the same company",
      "Holding stocks across many different industries and issuers",
      "Switching from short-term to long-term Treasury bonds",
      "Borrowing on margin to increase leverage"
    ],
    "answerIndex": 1,
    "rationale": "Unsystematic risk is reduced by spreading capital across many issuers and industries so that firm- and sector-specific shocks tend to offset. The top distractor (more shares of the same company) actually concentrates issuer-specific risk rather than diversifying it.",
    "citation": {
      "source": "OTHER",
      "ref": "Markowitz (1952)"
    },
    "difficulty": "medium",
    "id": "ece5d7fcfd0f",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following is an example of credit risk?",
    "choices": [
      "A corporation defaults on the principal repayment of its bonds",
      "Rising interest rates cause the price of a Treasury bond to fall",
      "A trade war causes export-oriented stocks to drop",
      "A merger announcement causes two airlines' stock prices to fall"
    ],
    "answerIndex": 0,
    "rationale": "Credit (default) risk is the risk that an issuer fails to make timely interest or principal payments. The top distractor (rising rates) is interest rate risk — Treasury prices can fall even though the U.S. Treasury has essentially no default risk, so the loss is not a credit event.",
    "citation": {
      "source": "OTHER",
      "ref": "S&P Global Ratings"
    },
    "difficulty": "medium",
    "id": "a45710f27871",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "An investor holding a single highly volatile small-cap stock has approximately how much of total risk attributable to UNSYSTEMATIC factors?",
    "choices": [
      "Roughly 0%",
      "A relatively small share",
      "A substantial portion of total risk",
      "Exactly 50%"
    ],
    "answerIndex": 2,
    "rationale": "For a single stock, firm-specific (unsystematic) risk typically accounts for a large portion of return variance; only when the portfolio is broadly diversified does systematic risk dominate. The top distractor (0%) is wrong because an undiversified single-stock holding is heavily exposed to issuer-specific events that drive a substantial share of its volatility.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "difficulty": "medium",
    "id": "8b374c06735d",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "A debenture is BEST described as:",
    "choices": [
      "A secured corporate bond backed by specific equipment",
      "An unsecured corporate bond backed only by the issuer's general credit",
      "A short-term money-market instrument issued by a bank",
      "A class of preferred stock with cumulative dividends"
    ],
    "answerIndex": 1,
    "rationale": "Debentures are unsecured debt obligations; in liquidation they rank as general unsecured creditors, ahead of subordinated debt and equity but behind secured debt. The top distractor (secured bond) describes mortgage or equipment-trust certificates — debentures specifically lack collateral, which is why they typically carry higher yields than secured debt of the same issuer.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "dcf062213c8b",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following BEST illustrates legal/regulatory risk for a publicly traded utility?",
    "choices": [
      "A spike in oil prices following a Middle East conflict",
      "A state public-service commission denies the utility's request for a rate increase",
      "A nationwide recession reduces consumer electricity usage",
      "Long-term Treasury yields rise by 100 basis points"
    ],
    "answerIndex": 1,
    "rationale": "A regulator's adverse rate decision is a textbook example of regulatory risk — a government body's action directly impairs the issuer's earnings. The top distractor (oil price spike) is geopolitical/market risk affecting commodity inputs broadly, not a change in the legal or regulatory framework governing the utility itself.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "19bfa4e09046",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "An investor argues that holding 30 carefully selected stocks across different industries virtually eliminates portfolio risk. The MOST accurate response is:",
    "choices": [
      "Correct — 30 stocks eliminates both systematic and unsystematic risk",
      "Incorrect — diversification reduces unsystematic risk but systematic (market) risk remains",
      "Correct — only credit risk would remain in such a portfolio",
      "Incorrect — diversification has no meaningful effect on portfolio variance"
    ],
    "answerIndex": 1,
    "rationale": "Empirical research shows that holding ~20 to 30 well-selected stocks captures most diversification benefits for unsystematic risk, but systematic (market) risk persists no matter how many stocks are added. The top distractor is wrong because no equity portfolio, however broad, removes market-wide factors like interest rates and macro shocks.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "difficulty": "medium",
    "id": "b4bafcbd4885",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Cumulative preferred stockholders, in a liquidation, are entitled to:",
    "choices": [
      "The par value of their shares plus any unpaid accumulated dividends, before common stockholders receive anything",
      "Repayment ahead of all bondholders",
      "Voting control over the board of directors during bankruptcy proceedings",
      "A pro-rata share of remaining assets equal to common stockholders"
    ],
    "answerIndex": 0,
    "rationale": "Cumulative preferred shares accrue any skipped dividends, and in liquidation those arrearages plus the stated par value must be paid before common stockholders receive anything. The top distractor (ahead of bondholders) reverses the senior-junior order — debt always ranks ahead of all equity, including preferred, in liquidation.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "a2410b62c0ad",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "A U.S. company with substantial revenue from Europe sees its earnings drop sharply when the euro weakens against the dollar. This is BEST described as:",
    "choices": [
      "Credit risk",
      "Currency (exchange-rate) risk, a type of systematic risk for multinational issuers",
      "Liquidity risk",
      "Opportunity cost"
    ],
    "answerIndex": 1,
    "rationale": "Currency risk is the risk that foreign-exchange movements will reduce the dollar value of foreign cash flows; it is generally treated as systematic because it cannot be diversified away by holding more multinationals. The top distractor (credit risk) is the risk of default by an issuer, which is unrelated to FX movements.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "f7d5cf2cda7a",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Which scenario BEST illustrates financial risk?",
    "choices": [
      "A retailer's quarterly sales decline due to a competitor's pricing",
      "A heavily leveraged firm cannot meet its interest payments after a modest drop in operating income",
      "A pharmaceutical firm fails to win FDA approval for a new drug",
      "A foreign government raises tariffs on imported goods"
    ],
    "answerIndex": 1,
    "rationale": "Financial risk is the additional risk borne by equity holders because the firm uses debt; high leverage magnifies the impact of operating shortfalls into solvency problems. The top distractor (retailer sales decline) is an example of business/operating risk rather than financial risk — it stems from competition, not the capital structure.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "52aee66a1d8c",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following statements about preferred stock is MOST accurate?",
    "choices": [
      "Preferred stockholders rank ahead of secured creditors in a liquidation",
      "Preferred stock is technically equity but receives liquidation preference over common stock",
      "Preferred stockholders are guaranteed dividends by federal law",
      "Preferred stock carries the same voting rights as common stock"
    ],
    "answerIndex": 1,
    "rationale": "Preferred stock is equity that has a stated par/liquidation value paid before common stockholders, but only after all creditors. The top distractor inverts this — preferred is junior to all debt, including unsecured creditors, because debt is contractual and equity is residual.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "07fdbb4bb269",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Inflation (purchasing power) risk is BEST classified as:",
    "choices": [
      "Unsystematic, because it varies by issuer",
      "Systematic, because it affects the real return of nearly all financial assets",
      "A form of credit risk",
      "A form of opportunity cost"
    ],
    "answerIndex": 1,
    "rationale": "Inflation erodes the real (purchasing-power) return on most financial assets simultaneously, so it is a market-wide systematic risk that cannot be diversified away with more securities. The top distractor (unsystematic) is wrong because inflation is a macroeconomic force that is not specific to any single issuer.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "04303c5456e9",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "A municipal water-utility revenue bond's coverage ratio falls dramatically after a drought reduces water sales. The increased risk to bondholders is BEST described as:",
    "choices": [
      "Issuer-specific (unsystematic) credit risk tied to the project's revenues",
      "Systematic interest rate risk",
      "Geopolitical risk",
      "Opportunity cost"
    ],
    "answerIndex": 0,
    "rationale": "Revenue bonds rely on a specific project's cash flows for debt service, so a drop in those revenues raises the credit risk of that particular issuer/project — a textbook unsystematic exposure. The top distractor (interest rate risk) is wrong because the threat is to the issuer's ability to pay, not to the bond's price from market-wide rate moves.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "medium",
    "id": "8308544d2e25",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "In the Capital Asset Pricing Model (CAPM), investors are compensated for bearing:",
    "choices": [
      "Only unsystematic risk, because systematic risk is not measurable",
      "Only systematic risk, because unsystematic risk can be diversified away at no cost",
      "Both systematic and unsystematic risk equally",
      "Liquidation priority risk"
    ],
    "answerIndex": 1,
    "rationale": "CAPM holds that rational investors will diversify away firm-specific risk for free, so the market only pays a premium for the systematic (beta) risk that remains. The top distractor reverses the logic — unsystematic risk earns no premium precisely because it is not borne by a diversified investor.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "difficulty": "hard",
    "id": "c0c42d238e7f",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "A startup biotech firm with no debt is highly volatile because its value depends on the binary outcome of an FDA decision. This volatility is BEST described as:",
    "choices": [
      "Financial risk arising from leverage",
      "Business/issuer-specific (unsystematic) risk",
      "Interest rate risk",
      "Systematic regulatory risk affecting all issuers"
    ],
    "answerIndex": 1,
    "rationale": "With zero debt there is no financial (leverage) risk; the volatility comes from a single project-specific binary event affecting one issuer, which is unsystematic business risk. The top distractor (financial risk) requires leverage and refers to the risk that fixed debt obligations cannot be met — irrelevant to a debt-free firm.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "466dea8044b7",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "An investor compares two firms with identical operations: Firm A is 100% equity-financed; Firm B is 70% debt and 30% equity. Compared with Firm A's equity, Firm B's equity is exposed to:",
    "choices": [
      "Less business risk and less financial risk",
      "The same business risk but greater financial risk",
      "Greater business risk and greater financial risk",
      "Less business risk and greater financial risk"
    ],
    "answerIndex": 1,
    "rationale": "Business risk depends on the operations themselves, which are identical in both firms; the leverage adds incremental financial risk to Firm B's equity holders by increasing the variability of earnings after fixed interest charges. The top distractor (less of both) is wrong because adding debt cannot reduce risk to equity — it amplifies it.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "bfd0187d0de9",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "In a Chapter 7 liquidation of a corporation with sufficient assets to pay senior creditors but insufficient to fully pay all claims, which of the following is paid LAST among those listed?",
    "choices": [
      "First-mortgage bondholders",
      "Holders of subordinated debentures",
      "Preferred stockholders",
      "Trade creditors (general unsecured)"
    ],
    "answerIndex": 2,
    "rationale": "Among the listed parties, equity (preferred stock) ranks below all debt — secured, senior unsecured, and subordinated unsecured — so preferred stockholders are paid last from the choices given. The top distractor (subordinated debentures) is junior to general unsecured trade creditors but still senior to ALL equity, including preferred, because debt always outranks equity in liquidation.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "701ec43ade67",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following risks is LEAST likely to be reduced by international diversification across developed-market equities?",
    "choices": [
      "Single-issuer fraud at one U.S. company",
      "A simultaneous global liquidity shock that drives correlations across markets toward 1",
      "An adverse FDA decision affecting a U.S. drug maker",
      "A localized regulatory change in a single foreign country"
    ],
    "answerIndex": 1,
    "rationale": "During severe global shocks, equity correlations across countries tend to rise sharply (toward 1), so international diversification offers little protection — this is essentially undiversifiable systematic risk. The top distractor (single-issuer fraud) is highly diversifiable because spreading capital across many issuers, domestically or globally, reduces firm-specific exposures.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "difficulty": "hard",
    "id": "dc2bc7ed5dfb",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "An investor chooses to keep $100,000 in a 0% checking account rather than invest in an index fund expected to earn 7% annually. The opportunity cost over one year is approximately:",
    "choices": [
      "$0, because the cash is fully preserved",
      "$7,000, the forgone expected return on the next-best alternative",
      "$100,000, the entire principal",
      "Equal to the inflation rate times the principal"
    ],
    "answerIndex": 1,
    "rationale": "Opportunity cost equals the value of the next-best alternative forgone; here roughly 7% on $100,000, or $7,000 expected. The top distractor ($0) ignores opportunity cost entirely — preserving principal in nominal terms still has a real cost equal to the return that could have been earned elsewhere.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "4dbe7f42d7b8",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "A corporate-bond investor buying a high-yield (junk) bond instead of a Treasury of the same maturity is primarily being compensated for bearing:",
    "choices": [
      "Interest rate risk only",
      "Additional credit (default) risk plus reduced liquidity",
      "Reduced opportunity cost",
      "Lower systematic risk"
    ],
    "answerIndex": 1,
    "rationale": "The yield spread between high-yield bonds and Treasuries primarily reflects the higher probability of default and weaker liquidity of the corporate issue. The top distractor (interest rate risk only) is wrong because both bonds share interest rate risk; the spread compensates specifically for credit and liquidity differences.",
    "citation": {
      "source": "OTHER",
      "ref": "Moody's Investors Service"
    },
    "difficulty": "hard",
    "id": "1b71fdd4379b",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "Which of the following statements about the relationship between capital structure and risk is MOST accurate?",
    "choices": [
      "Increasing debt always lowers a firm's overall cost of capital with no increase in risk",
      "Debt holders accept a lower yield than common stockholders' required return because debt has senior claims and contractual cash flows",
      "Common stockholders accept lower returns than bondholders because of dividend priority",
      "Preferred stock is always cheaper than debt because dividends are tax-deductible"
    ],
    "answerIndex": 1,
    "rationale": "Debt is contractually senior to equity in both cash flows and liquidation, so creditors accept a lower required return than common stockholders, who bear residual risk. The top distractor (debt always lowers cost of capital with no added risk) ignores financial risk — beyond a point, more leverage raises bankruptcy risk and pushes up required returns on both debt and equity.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "e446ded3c007",
    "subtopicId": "1.4",
    "reviewed": false
  },
  {
    "stem": "An investment adviser is explaining why government Treasury securities still carry meaningful risk despite essentially zero default risk. The MOST accurate explanation is that Treasuries remain exposed to:",
    "choices": [
      "Issuer-specific business risk",
      "Systematic risks such as interest rate risk and inflation (purchasing-power) risk",
      "Unsystematic credit risk",
      "Liquidation-priority risk"
    ],
    "answerIndex": 1,
    "rationale": "U.S. Treasuries are considered free of default (credit) risk, but their prices fall when rates rise (interest rate risk) and their real value erodes with inflation (purchasing-power risk) — both systematic. The top distractor (issuer-specific business risk) is meaningless for a sovereign issuer with taxing authority and is not what creates Treasury price volatility.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "difficulty": "hard",
    "id": "2c32ddeb7f11",
    "subtopicId": "1.4",
    "reviewed": false
  }
];

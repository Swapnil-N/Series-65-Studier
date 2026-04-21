// Hand-curated Series 65 glossary. Definitions are intentionally short
// (1-3 sentences) so the offline search feels responsive and the cards fit
// on a phone viewport without clipping.
//
// Citations are populated only where they're unambiguous (e.g., statute
// section explicitly defines the term); speculative mappings are omitted.
import type { Citation } from "../../types/content";

export interface GlossaryEntry {
  id: string;
  term: string;
  definition: string;
  related?: string[];
  citation?: Citation;
}

export const glossary: GlossaryEntry[] = [
  {
    id: "investment-adviser",
    term: "Investment Adviser",
    definition:
      "Any person who, for compensation, engages in the business of advising others about securities or who issues reports or analyses concerning securities.",
    related: ["IAR", "Broker-Dealer", "Form ADV"],
    citation: { source: "IA_ACT", ref: "202(a)(11)" },
  },
  {
    id: "iar",
    term: "Investment Adviser Representative (IAR)",
    definition:
      "An individual employed by or associated with an investment adviser who makes recommendations, manages accounts, solicits advisory services, or supervises such personnel.",
    related: ["Investment Adviser", "Form U-4"],
  },
  {
    id: "agent",
    term: "Agent",
    definition:
      "An individual (other than a broker-dealer) who represents a broker-dealer or issuer in effecting or attempting to effect securities transactions. Officers of the issuer selling exempt securities are excluded.",
    related: ["Broker-Dealer", "Issuer"],
  },
  {
    id: "broker-dealer",
    term: "Broker-Dealer",
    definition:
      "A person (firm) engaged in the business of effecting transactions in securities for the account of others (broker) or for its own account (dealer).",
    related: ["Agent", "FINRA"],
  },
  {
    id: "issuer",
    term: "Issuer",
    definition:
      "Any person who issues or proposes to issue a security. Includes corporations, governments, and other entities raising capital.",
    related: ["Registration", "Exempt Security"],
  },
  {
    id: "accredited-investor",
    term: "Accredited Investor",
    definition:
      "An investor who meets income, net worth, or professional criteria under Regulation D (e.g., $1M net worth excluding primary residence, or $200K individual / $300K joint income). Private placements under Rule 506 rely on this status.",
    related: ["Qualified Purchaser", "Private Placement", "Regulation D"],
    citation: { source: "SEC", ref: "501" },
  },
  {
    id: "qualified-purchaser",
    term: "Qualified Purchaser",
    definition:
      "A higher threshold than accredited investor, typically requiring $5M in investments (individuals) or $25M (institutions); relevant for 3(c)(7) private funds.",
    related: ["Accredited Investor", "Private Placement"],
  },
  {
    id: "private-placement",
    term: "Private Placement",
    definition:
      "An offering of securities to a limited number of sophisticated investors without full SEC registration, relying on an exemption such as Regulation D Rule 506.",
    related: ["Regulation D", "Accredited Investor", "Exempt Transaction"],
  },
  {
    id: "registration",
    term: "Registration",
    definition:
      "The process of filing with federal (SEC) and/or state regulators before offering or selling securities. Methods include coordination, qualification, and notice filing.",
    related: ["Issuer", "Exempt Security", "Exempt Transaction"],
  },
  {
    id: "exempt-security",
    term: "Exempt Security",
    definition:
      "A security exempt from state registration and most anti-fraud registration requirements because of its nature — e.g., U.S. government, municipal, and certain bank securities.",
    related: ["Registration", "Exempt Transaction"],
  },
  {
    id: "exempt-transaction",
    term: "Exempt Transaction",
    definition:
      "A transaction exempt from state registration because of how or to whom a security is sold — e.g., isolated nonissuer transactions, transactions with institutional investors, or private placements.",
    related: ["Registration", "Exempt Security", "Private Placement"],
  },
  {
    id: "suitability",
    term: "Suitability",
    definition:
      "The duty to recommend only investments appropriate for a client given their financial situation, objectives, risk tolerance, and other relevant factors.",
    related: ["Fiduciary Duty", "Know Your Customer"],
  },
  {
    id: "fiduciary-duty",
    term: "Fiduciary Duty",
    definition:
      "The legal obligation of an investment adviser to act in the client's best interest at all times, including duties of loyalty and care. Higher standard than suitability.",
    related: ["Investment Adviser", "Suitability", "Disclosure"],
  },
  {
    id: "fraud",
    term: "Fraud",
    definition:
      "Any intentional deception, material misstatement, or omission made to induce a transaction. Prohibited in the offer, sale, or purchase of securities.",
    related: ["Churning", "Disclosure"],
    citation: { source: "SEC", ref: "10b-5" },
  },
  {
    id: "churning",
    term: "Churning",
    definition:
      "Excessive trading in a customer's account primarily to generate commissions rather than to meet the customer's investment objectives. A prohibited practice.",
    related: ["Fraud", "Suitability"],
  },
  {
    id: "wrap-fee",
    term: "Wrap Fee",
    definition:
      "A single bundled fee covering advisory services, execution, and other costs. Advisers sponsoring wrap programs must deliver the Wrap Fee Program Brochure (Part 2A Appendix 1).",
    related: ["Disclosure Brochure (Form ADV)", "Soft Dollar"],
  },
  {
    id: "soft-dollar",
    term: "Soft Dollar",
    definition:
      "Brokerage commissions used to pay for research or other services that benefit the adviser. Safe harbor under Section 28(e) requires the services to aid the investment decision-making process.",
    related: ["Wrap Fee", "Fiduciary Duty"],
    citation: { source: "SEC", ref: "28(e)" },
  },
  {
    id: "form-adv",
    term: "Disclosure Brochure (Form ADV)",
    definition:
      "The primary registration and disclosure document filed by investment advisers. Part 2A (brochure) and Part 2B (brochure supplement) must be delivered to clients.",
    related: ["Investment Adviser", "Form U-4", "IARD"],
  },
  {
    id: "custody",
    term: "Custody",
    definition:
      "Holding, directly or indirectly, client funds or securities, or having the authority to obtain possession of them. Triggers surprise audit and qualified custodian requirements.",
    related: ["Fiduciary Duty", "Investment Adviser"],
    citation: { source: "SEC", ref: "206(4)-2" },
  },
  {
    id: "surrender-charge",
    term: "Surrender Charge",
    definition:
      "A fee imposed by an insurance company when an annuity holder withdraws funds before the end of the surrender period. Typically declines each year until it reaches zero.",
    related: ["Annuity"],
  },
  {
    id: "annuity",
    term: "Annuity",
    definition:
      "An insurance contract that provides periodic payments, often for retirement. Variants include fixed (guaranteed rate), variable (subaccount-based, treated as securities), and indexed.",
    related: ["Surrender Charge"],
  },
  {
    id: "etf",
    term: "Exchange-Traded Fund (ETF)",
    definition:
      "A pooled investment vehicle (typically a registered investment company) whose shares trade intraday on an exchange like a stock. Usually tracks an index.",
    related: ["REIT", "Issuer"],
  },
  {
    id: "reit",
    term: "Real Estate Investment Trust (REIT)",
    definition:
      "A company that owns, operates, or finances income-producing real estate. Must distribute at least 90% of taxable income to shareholders to avoid corporate tax.",
    related: ["ETF"],
  },
  {
    id: "options",
    term: "Options (Call / Put)",
    definition:
      "Contracts giving the holder the right (not obligation) to buy (call) or sell (put) an underlying asset at a set strike price before expiration. Writers (sellers) incur the matching obligation.",
    related: ["Margin"],
  },
  {
    id: "margin",
    term: "Margin",
    definition:
      "Borrowing from a broker-dealer to buy securities, using securities in the account as collateral. Regulation T sets the federal initial margin requirement (currently 50%).",
    related: ["Options (Call / Put)", "Broker-Dealer"],
    citation: { source: "SEC", ref: "Regulation T" },
  },
  {
    id: "regulation-d",
    term: "Regulation D",
    definition:
      "SEC rules (501–508) providing registration exemptions for private offerings. Rule 506(b) allows unlimited accredited investors plus up to 35 sophisticated purchasers; 506(c) permits general solicitation to verified accredited investors only.",
    related: ["Private Placement", "Accredited Investor"],
    citation: { source: "SEC", ref: "Regulation D" },
  },
  {
    id: "form-u4",
    term: "Form U-4",
    definition:
      "Uniform Application for Securities Industry Registration or Transfer — the form by which an individual (agent or IAR) is registered with states and SROs.",
    related: ["IAR", "Agent", "FINRA"],
  },
  {
    id: "form-adv-filing",
    term: "Form ADV",
    definition:
      "The SEC/state filing by which an investment adviser firm registers. Part 1 is regulatory data; Part 2 is the client disclosure brochure; Part 3 is Form CRS (relationship summary).",
    related: ["Investment Adviser", "Disclosure Brochure (Form ADV)", "IARD"],
  },
  {
    id: "series-65",
    term: "Series 65",
    definition:
      "NASAA's Uniform Investment Adviser Law Exam — the qualification most states require to register as an investment adviser representative.",
    related: ["NASAA", "IAR"],
  },
  {
    id: "nasaa",
    term: "NASAA",
    definition:
      "North American Securities Administrators Association — the voluntary association of state securities regulators that develops model rules and uniform exams (Series 63, 65, 66).",
    related: ["Series 65", "Form U-4"],
  },
  {
    id: "iard",
    term: "IARD",
    definition:
      "Investment Adviser Registration Depository — the online filing system operated by FINRA (on behalf of the SEC and states) for investment adviser registrations (Form ADV) and IAR registrations (Form U-4).",
    related: ["Form ADV", "Form U-4", "FINRA"],
  },
  {
    id: "finra",
    term: "FINRA",
    definition:
      "Financial Industry Regulatory Authority — the self-regulatory organization (SRO) that oversees broker-dealers and operates the CRD and IARD systems.",
    related: ["Broker-Dealer", "IARD"],
  },
  {
    id: "blue-sky-laws",
    term: "Blue Sky Laws",
    definition:
      "State securities laws designed to protect investors from fraud. The Uniform Securities Act (USA) is the NASAA model that most states have adopted in some form.",
    related: ["Registration", "NASAA"],
  },
  {
    id: "know-your-customer",
    term: "Know Your Customer (KYC)",
    definition:
      "The duty to gather and keep current essential facts about a client (financial status, objectives, risk tolerance, tax situation) before making recommendations.",
    related: ["Suitability", "Fiduciary Duty"],
  },
  {
    id: "efficient-market-hypothesis",
    term: "Efficient Market Hypothesis (EMH)",
    definition:
      "The theory that asset prices fully reflect available information. Weak form (past prices), semi-strong (all public info), and strong form (all info including private) are the three tiers.",
    related: ["Modern Portfolio Theory"],
  },
  {
    id: "modern-portfolio-theory",
    term: "Modern Portfolio Theory (MPT)",
    definition:
      "A framework (Markowitz) for constructing portfolios to maximize expected return for a given level of risk by combining assets whose returns are not perfectly correlated.",
    related: ["Efficient Market Hypothesis (EMH)", "CAPM"],
  },
  {
    id: "dollar-cost-averaging",
    term: "Dollar-Cost Averaging",
    definition:
      "Investing a fixed dollar amount at regular intervals regardless of price. Results in buying more shares when prices are low and fewer when high, lowering the average cost per share over time.",
  },
  {
    id: "529-plan",
    term: "529 Plan",
    definition:
      "A tax-advantaged savings plan for qualified education expenses, sponsored by a state or educational institution. Earnings grow tax-deferred and qualified withdrawals are federal tax-free.",
  },
  {
    id: "uniform-prudent-investor-act",
    term: "Uniform Prudent Investor Act (UPIA)",
    definition:
      "The modern fiduciary standard for trustees, requiring diversification, attention to total portfolio return, and evaluation of investments in the context of the overall portfolio rather than in isolation.",
    related: ["Fiduciary Duty"],
  },
  {
    id: "yield-curve",
    term: "Yield Curve",
    definition:
      "A graph plotting yields of bonds of equal credit quality across maturities. Normal (upward-sloping), inverted, and flat curves signal different economic expectations.",
    related: ["Bond"],
  },
  {
    id: "bond",
    term: "Bond",
    definition:
      "A debt security in which the issuer owes holders principal at maturity plus periodic interest (coupon). Credit, interest-rate, and inflation risks are the primary exposures.",
    related: ["Yield Curve", "Current Yield"],
  },
  {
    id: "mutual-fund",
    term: "Mutual Fund",
    definition:
      "An open-end registered investment company that pools investor money to buy a diversified portfolio. Shares are issued and redeemed at NAV (end-of-day pricing).",
    related: ["ETF", "NAV"],
  },
  {
    id: "nav",
    term: "Net Asset Value (NAV)",
    definition:
      "The per-share value of a fund, calculated as (assets − liabilities) / shares outstanding. Mutual funds price once per day at NAV; ETFs trade intraday near NAV.",
    related: ["Mutual Fund", "ETF"],
  },
  {
    id: "dividend",
    term: "Dividend",
    definition:
      "A distribution of a corporation's earnings to shareholders, usually paid in cash or additional shares. Qualified dividends receive preferential tax treatment.",
    related: ["Capital Gain"],
  },
  {
    id: "capital-gain",
    term: "Capital Gain",
    definition:
      "Profit realized when a capital asset is sold for more than its cost basis. Long-term (held > 1 year) gains are taxed at preferential rates; short-term at ordinary rates.",
    related: ["Dividend"],
  },
  {
    id: "disclosure",
    term: "Disclosure",
    definition:
      "The affirmative obligation to communicate material facts — conflicts of interest, fees, risks — to clients so they can make an informed decision. A cornerstone of fiduciary practice.",
    related: ["Fiduciary Duty", "Disclosure Brochure (Form ADV)"],
  },
];

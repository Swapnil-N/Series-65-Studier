import type { Card } from "../../../types/content";

export const cards: Card[] = [
  {
    "front": "Define future value (FV) in time value of money.",
    "back": "Future value is the worth of a present sum at a specified later date after earning interest at an assumed rate. It answers what today's dollar will grow to under stated compounding.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "0e282ba2eaf1",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Write the future value formula for a single cash flow compounded annually.",
    "back": "FV = PV x (1 + r)^n, where PV is the present amount, r is the periodic interest rate, and n is the number of compounding periods.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "58db6544dcb3",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "How does more frequent compounding affect FV when the nominal rate is held constant?",
    "back": "FV rises as compounding frequency increases because interest is credited and itself begins earning interest sooner. Continuous compounding produces the highest FV for a given nominal rate.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "06f8983d9197",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Define net present value (NPV).",
    "back": "NPV is the sum of an investment's future cash flows discounted at a required rate of return, less the initial cost. It expresses, in today's dollars, the value the project is expected to create.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "bfb430865fa6",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "State the NPV accept/reject decision rule.",
    "back": "Accept the project if NPV > 0, reject if NPV < 0, and be indifferent at NPV = 0. A positive NPV means the project's discounted inflows exceed its cost at the required return.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "819be56270ed",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Define internal rate of return (IRR).",
    "back": "IRR is the discount rate at which a project's NPV equals zero. It represents the project's implied annualized rate of return.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "6c55b0b1a813",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "State the IRR accept/reject decision rule.",
    "back": "Accept the project if IRR exceeds the hurdle rate (typically the cost of capital) and reject it otherwise. The hurdle reflects the minimum acceptable return given the project's risk.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "45c5f0be1327",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "When NPV and IRR rank mutually exclusive projects differently, which method should govern?",
    "back": "Follow NPV. NPV directly measures dollar value added at the required return, while IRR can mislead with non-normal cash flows or large differences in project scale and timing.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "26e53a7d59ab",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "What does an arithmetic mean measure for a series of returns?",
    "back": "It is the simple average, computed by summing the values and dividing by the count. The arithmetic mean overstates compound growth when returns vary across periods.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "1b62de0532ce",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "How is the median of a data set determined?",
    "back": "Sort the observations and take the middle value; with an even count, average the two middle values. The median is unaffected by extreme outliers, unlike the mean.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "5942e895d06e",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "What is the mode of a distribution?",
    "back": "The mode is the value that occurs most frequently in the data set. A distribution can be unimodal, multimodal, or have no mode at all.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "23e08eaa9853",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Define the range of a data set.",
    "back": "Range equals the largest observation minus the smallest. It captures total spread but says nothing about how values are distributed between the extremes.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "e86ec686463d",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "What does standard deviation measure for an investment's returns?",
    "back": "Standard deviation measures the dispersion of returns around their mean and serves as a proxy for total risk (volatility). Higher standard deviation indicates more variable returns.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "id": "835df65256f5",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Define alpha in the context of portfolio performance.",
    "back": "Alpha is the portion of a portfolio's return that is not explained by its beta exposure to the market — the excess (or shortfall) versus the return CAPM would predict. Positive alpha indicates risk-adjusted outperformance.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "id": "c41fe2035637",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Define beta as a measure of risk.",
    "back": "Beta is the sensitivity of a security's or portfolio's returns to movements in a broad market index. It quantifies systematic, non-diversifiable risk.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "id": "084e2d204465",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Interpret a beta of 1.0, 1.5, and 0.5.",
    "back": "Beta 1.0 moves in line with the market; 1.5 is roughly 50% more volatile than the market; 0.5 is about half as volatile. Higher betas imply greater systematic risk exposure.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "id": "4fc7caa244c8",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Distinguish what alpha measures from what beta measures.",
    "back": "Beta describes a portfolio's exposure to overall market movements, while alpha describes return above (or below) what that beta exposure would justify. Beta is a risk metric; alpha is a risk-adjusted performance metric.",
    "citation": {
      "source": "OTHER",
      "ref": "Capital Asset Pricing Model"
    },
    "id": "e2b3ff77dfeb",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "What does the Sharpe ratio measure?",
    "back": "It measures risk-adjusted excess return — how much return a portfolio earns above the risk-free rate per unit of total risk (standard deviation). Higher Sharpe ratios indicate better risk-adjusted performance.",
    "citation": {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    "id": "8eaf9b60b07c",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Write the formula for the Sharpe ratio.",
    "back": "Sharpe = (Rp - Rf) / sigma_p, where Rp is portfolio return, Rf is the risk-free rate, and sigma_p is the portfolio's standard deviation of returns.",
    "citation": {
      "source": "OTHER",
      "ref": "Sharpe (1964)"
    },
    "id": "47f654b51a27",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "What is the range of the correlation coefficient, and what do its endpoints mean?",
    "back": "It ranges from -1.0 to +1.0. +1.0 means the two series move perfectly in the same direction, -1.0 means they move in perfectly opposite directions, and 0 means no linear relationship.",
    "citation": {
      "source": "OTHER",
      "ref": "Modern Portfolio Theory"
    },
    "id": "e6b0281021ac",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Why does combining assets with low or negative correlation reduce portfolio risk?",
    "back": "When assets do not move in lockstep, their idiosyncratic fluctuations partially offset, lowering portfolio standard deviation without necessarily lowering expected return. This is the core diversification benefit.",
    "citation": {
      "source": "OTHER",
      "ref": "Markowitz (1952)"
    },
    "id": "7a6d318cacbd",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Write the current ratio formula and what it measures.",
    "back": "Current ratio = Current Assets / Current Liabilities. It gauges short-term liquidity — a firm's capacity to satisfy obligations due within a year using assets convertible to cash in the same window.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "id": "b424c3441db7",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Write the quick (acid-test) ratio formula.",
    "back": "Quick ratio = (Current Assets - Inventory) / Current Liabilities, equivalently (Cash + Marketable Securities + Receivables) / Current Liabilities. It isolates the most liquid current assets.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "id": "458c63747604",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Why does the quick ratio exclude inventory while the current ratio includes it?",
    "back": "Inventory can be slow to convert into cash and may lose value in a forced sale. Excluding it produces a stricter test of a firm's immediate ability to pay short-term liabilities.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "id": "19b0556e5286",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Write the debt-to-equity ratio formula and what it indicates.",
    "back": "Debt-to-equity = Total Liabilities / Shareholders' Equity (some texts use only interest-bearing debt in the numerator). It measures financial leverage — reliance on borrowed funds relative to owners' capital.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "id": "ace7f7494e12",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Define the price-to-earnings (P/E) ratio.",
    "back": "P/E = Market Price per Share / Earnings per Share. It expresses the price investors are willing to pay per dollar of current or projected earnings.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "195d715eacc2",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "How is a relatively high P/E typically interpreted?",
    "back": "A high P/E generally signals expectations of stronger future earnings growth, or that the stock may be richly valued versus peers. Growth stocks typically trade at higher P/Es than value stocks.",
    "citation": {
      "source": "OTHER",
      "ref": "Standard finance textbook"
    },
    "id": "845f1e1f4294",
    "subtopicId": "1.3",
    "reviewed": false
  },
  {
    "front": "Define the price-to-book (P/B) ratio.",
    "back": "P/B = Market Price per Share / Book Value per Share, where book value equals shareholders' equity per share. A P/B below 1.0 means the market values the firm below its accounting net assets.",
    "citation": {
      "source": "OTHER",
      "ref": "GAAP"
    },
    "id": "4c0d32d4a04a",
    "subtopicId": "1.3",
    "reviewed": false
  }
];

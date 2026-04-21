# NASAA Series 65 Content Outline

PASTE THE OFFICIAL NASAA SERIES 65 CONTENT OUTLINE HERE.

Use `##` for topics (exactly 4, numbered):

## 1. Economic Factors and Business Information

## 2. Investment Vehicle Characteristics

## 3. Client Investment Recommendations and Strategies

## 4. Laws, Regulations, Guidelines, and Prohibited Practices

And `###` for subtopics with leading IDs, e.g.:

### 1.1 Economic Indicators

- Leading, coincident, lagging indicators
- GDP / CPI / unemployment / money supply

### 1.2 Business Cycles

- Expansion, peak, contraction, trough
- Fiscal vs monetary policy

### 2.1 Equity Securities

- Common vs preferred
- Voting rights, dividends

### 2.2 Fixed Income Securities

- Bond pricing, yield measures
- Duration, convexity

### 3.1 Client Profile & Investment Objectives

- Risk tolerance, time horizon
- Tax status, liquidity needs

### 3.2 Portfolio Management Styles

- Active vs passive
- Strategic vs tactical asset allocation

### 4.1 Securities Act of 1933

- Registration, exemptions
- Regulation D, Rule 506

### 4.2 Investment Advisers Act of 1940

- Definition of IA, exclusions
- Brochure rule, fiduciary duty

The generator will derive subtopicId directly from the leading `1.1`, `2.3`, etc.
Keep the IDs strictly `<topic>.<subtopic>` — the parser enforces the pattern
`^\\d+\\.\\d+$` on the leading token of each `###` line.

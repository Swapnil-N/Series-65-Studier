import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Definitions of Broker-Dealers",
  "bodyMd": "A \"broker-dealer\" is one of the four cornerstone definitions tested on the Series 65, alongside investment adviser, investment adviser representative, and agent. To answer exam questions correctly, you need to know the federal definitions that come from the Securities Exchange Act of 1934, the parallel state definition in the Uniform Securities Act (USA), and the specific exclusions that allow some firms to escape registration. The terms \"broker\" and \"dealer\" are technically two separate roles, but virtually every firm performs both, so regulators describe them with the combined label \"broker-dealer.\"\n\n### Federal Definition: Broker vs. Dealer\n\nThe Securities Exchange Act of 1934 supplies the federal vocabulary. Section 3(a)(4) of the Exchange Act defines a **broker** as \"any person engaged in the business of effecting transactions in securities for the account of others.\" Three pieces of that sentence carry weight on the exam:\n\n1. **\"Person\"** is broad. It includes a natural person, partnership, corporation, association, or other legal entity, so at the federal level a broker is most often a firm rather than an individual.\n2. **\"Engaged in the business\"** means the activity must be more than a single isolated trade. Regularity, holding oneself out to the public, and receiving transaction-based compensation are the classic indicators the SEC uses to decide whether someone is \"engaged in the business.\"\n3. **\"For the account of others\"** means a broker acts as an *agent*, executing trades for customers and earning a commission.\n\nSection 3(a)(5) defines a **dealer** as \"any person engaged in the business of buying and selling securities... for such person's own account, through a broker or otherwise.\" The dealer takes the *opposite* posture: it acts as a *principal*, taking the security into inventory and earning a markup, markdown, or spread when it later trades out of that position. The same \"engaged in the business\" test applies, so buying a few shares for the firm's treasury portfolio is not enough to make the firm a dealer; the trading must be regular. Section 3(a)(5) also explicitly excludes a person who buys or sells securities for its own account \"but not as a part of a regular business\" — the so-called \"trader exclusion.\"\n\nBecause most firms do both, Section 15(a) of the Exchange Act simply requires any person using the mails or interstate commerce to effect securities transactions to register with the SEC as a broker-dealer, unless an exemption applies. Section 15 also originally excluded \"banks\" outright from the broker and dealer definitions; the Gramm-Leach-Bliley Act later narrowed that bank exception so that only specified bank activities (such as trust, custody, and certain sweep services) remain outside SEC broker-dealer registration.\n\n### State-Level Definition: The Uniform Securities Act\n\nThe state-law definition appears in Section 401 of the Uniform Securities Act of 1956, the version most heavily tested on the Series 65. USA Section 401(b) defines a broker-dealer as \"any person engaged in the business of effecting transactions in securities for the account of others or for his own account.\" Three points of contrast with the federal scheme matter:\n\n* The USA collapses \"broker\" and \"dealer\" into a single term. There is no separate state definition of \"dealer.\"\n* The state definition uses the same \"engaged in the business\" hook as the Exchange Act, so the qualitative test is the same.\n* \"Person\" again means an entity in the typical case. A natural person who works for the firm and solicits transactions is treated as an **agent** under USA Section 401, never as a broker-dealer.\n\nSection 401(b) then carves out who is *not* a broker-dealer for state purposes. The exclusions are:\n\n* An **agent** (a natural person representing the firm).\n* An **issuer** selling its own securities directly to investors.\n* A **bank, savings institution, or trust company**.\n* A person with **no place of business in the state** whose only customers in the state are other broker-dealers, issuers, certain institutional investors, or existing customers temporarily in the state (the *de minimis* or \"snowbird\" exclusion).\n\nThe \"no place of business\" snowbird rule is the most exam-frequent exclusion. If the firm has no office in the state and the only retail customer it deals with there is a vacationing existing client, the state cannot require registration.\n\n### \"Engaged in the Business\" — A Quantitative Lens\n\nAlthough the test is qualitative, the SEC and state administrators look at indicators that lend themselves to simple arithmetic. A useful rule of thumb is to compute the share of a firm's revenue that is **transaction-based**:\n\n$$\n\\text{Transaction-based ratio} = \\frac{\\text{Commissions} + \\text{Markups} + \\text{Spreads}}{\\text{Total revenue}}\n$$\n\nA firm whose ratio approaches $1.0$ — i.e., almost everything it earns is per-trade — is almost certainly \"engaged in the business\" of effecting securities transactions and must register. A firm whose ratio is near $0$ (for example, a CPA who charges hourly fees and only occasionally helps a client place a trade) is unlikely to be a broker-dealer. Regulators also consider how often a firm advertises securities services, whether it holds customer funds or securities, and whether it participates in selling syndicates.\n\n### Worked Example\n\nConsider **Acme Capital LLC**, a small firm headquartered in Illinois. Its 2025 income statement shows:\n\n* Commissions on customer trades: $480{,}000$\n* Markups on principal trades from inventory: $120{,}000$\n* Investment-banking advisory fees: $50{,}000$\n* Interest on the firm's own bond portfolio: $50{,}000$\n\nTotal revenue is $700{,}000$. Apply the transaction-based ratio:\n\n$$\n\\frac{480{,}000 + 120{,}000}{700{,}000} = \\frac{600{,}000}{700{,}000} \\approx 0.857\n$$\n\nAbout 86% of revenue is transaction-based. Acme is clearly \"engaged in the business of effecting transactions in securities for the account of others\" *and* \"buying and selling securities for its own account.\" It must register with the SEC under Section 15(a) of the Exchange Act and as a broker-dealer in Illinois under USA Section 401(b).\n\nNow suppose Acme has a single retail client, Mrs. Diaz, who maintains residency in Illinois but spends every winter in Florida. Acme has no Florida office and no other Florida customers. Under the USA Section 401(b) snowbird exclusion, Acme is **not** a broker-dealer in Florida and need not register there. If Acme later opens a Miami branch — even just a small satellite office — the place-of-business test fails and Florida registration becomes mandatory.\n\n### Summary\n\n* **Broker** (Exchange Act Section 3(a)(4)) = agent; effects transactions for others; earns commissions.\n* **Dealer** (Exchange Act Section 3(a)(5)) = principal; trades for its own account; earns markups, markdowns, or spreads.\n* The Uniform Securities Act Section 401(b) merges the two terms and excludes agents, issuers, banks and trust companies, and out-of-state firms with no place of business that deal only with institutional or temporary clients.\n* \"Engaged in the business\" is the hinge that separates a regulated broker-dealer from an occasional trader, and a high transaction-based revenue ratio is a strong indicator that registration is required.",
  "citations": [
    {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934"
    },
    {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 3(a)(4)"
    },
    {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 3(a)(5)"
    },
    {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 15"
    },
    {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 15(a)"
    },
    {
      "source": "SEC",
      "ref": "Gramm-Leach-Bliley Act"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Securities Act of 1956"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 401(b)"
    },
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    }
  ],
  "subtopicId": "4.3",
  "reviewed": false
};

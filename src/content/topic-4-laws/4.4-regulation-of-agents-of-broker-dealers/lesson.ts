import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Definition of an Agent of a Broker-Dealer",
  "bodyMd": "Under both federal and state securities law, the people who actually call investors, fill orders, and recommend securities on behalf of a broker-dealer are not the firm itself but individual representatives who must be separately registered. The Series 65 calls this individual an **agent** of a broker-dealer. Most of the testable detail comes from the Uniform Securities Act of 1956, which is the model statute that nearly every state has adopted in some form. The federal counterpart is the Securities Exchange Act of 1934, although the federal scheme uses the term \"associated person\" rather than \"agent.\" For Series 65 purposes, \"agent\" is fundamentally a *state-law* concept anchored in USA Section 401.\n\n### The Statutory Definition\n\nUnder USA Section 401(b), an **agent** is \"any individual, other than a broker-dealer, who represents a broker-dealer or issuer in effecting or attempting to effect purchases or sales of securities.\" Three pieces of that sentence carry test weight:\n\n1. **\"Any individual\"** — an agent is always a natural person, never a firm. The broker-dealer itself is the entity that hires the agent, files the U4, and supervises the work; the agent is the human being who actually interacts with the customer.\n2. **\"Other than a broker-dealer\"** — this is the line that separates principal from representative. A firm can be a broker-dealer; a person cannot.\n3. **\"Effecting or attempting to effect purchases or sales\"** — note the word *attempting*. Solicitation alone is enough. An individual who cold-calls prospects, hands out new-account paperwork, or recommends a security but never personally enters a ticket is still an agent because the activity is \"attempting to effect\" a transaction.\n\nFederal law approaches the same idea differently. The Securities Exchange Act of 1934 Section 3(a)(4) defines a broker as \"any person engaged in the business of effecting transactions in securities for the account of others,\" and Section 15(a) requires that person to register with the SEC. Individuals who work for a registered broker-dealer are called \"associated persons\" and must register through the Financial Industry Regulatory Authority on Form U4 under the supervisory rules of FINRA Rule 3110 and the Exchange Act Section 15(b). The state-law term \"agent\" maps onto the federal \"associated person who solicits or accepts orders,\" but the labels differ.\n\nA useful conjunctive test for state purposes is:\n\n$$\\text{Agent} \\iff \\text{Individual} \\;\\wedge\\; \\text{Represents BD or Issuer} \\;\\wedge\\; \\text{Effects or Attempts a Securities Transaction}$$\n\nIf any of the three conditions fails, the person is not an agent.\n\n### Who Is Excluded From \"Agent\"\n\nUSA Section 401(b) carves out several classes of people who, despite working in or near the securities industry, are *not* agents under state law:\n\n- **Clerical and ministerial personnel.** Receptionists, IT staff, compliance assistants, and other employees who do not solicit, recommend, or accept securities orders are excluded. The exam frequently tests this with a fact pattern in which an unregistered assistant takes a phone message — that is fine — versus quoting prices or accepting an order — that crosses the line.\n- **Individuals representing certain exempt issuers or exempt transactions.** When an individual represents an issuer in transactions involving exempt securities (federal-government, municipal, certain bank or insurance-company issues, or commercial paper) or in exempt transactions (such as a private placement to institutional buyers under the Securities Act of 1933), the individual is not an \"agent\" under USA Section 401(b). The rationale is that the underlying offer is already outside the state registration scheme, so no additional individual licensing is required.\n- **Individuals who only contact existing customers temporarily in the state.** Mirroring the broker-dealer \"snowbird\" rule, an out-of-state agent does not have to register in a state where she has no place of business and her only contact is with an existing client who happens to be visiting.\n\nNote what is **not** excluded. The USA does *not* exempt an individual representing the issuer in the ordinary public sale of common stock to retail investors. So-called \"issuer agents\" — for example, an in-house employee who solicits the public to buy the employer's stock — must register as agents in most states because the transactions are not exempt and the individuals are not within a listed exclusion. This is a common Series 65 trap.\n\n### Registration, Transfer, and Termination\n\nOnce an individual qualifies as an agent under USA Section 401(b), registration is governed by USA Section 201 and USA Section 202. The mechanics:\n\n1. **Filing.** The sponsoring broker-dealer files Form U4 on the agent's behalf with the Central Registration Depository (CRD). The form discloses employment history, criminal and regulatory disclosures, and personal information.\n2. **Examination.** The agent must pass the appropriate qualification examination — typically Series 6 or Series 7 plus the Series 63 or Series 66 — before the registration becomes effective.\n3. **Effectiveness.** Registration is granted at the state level, and the agent may not effect transactions in a state until the state has approved the U4. An agent who is registered in State A but solicits a customer in State B without first registering in State B has violated USA Section 201, even if the transaction is otherwise permissible.\n4. **Tying registration to a firm.** An agent's registration is bound to the sponsoring broker-dealer. If the agent leaves the firm, the broker-dealer must file Form U5 promptly (within 30 days under FINRA's filing rules) and the agent is deregistered automatically. The agent cannot service customers during the gap unless and until a new firm files a new U4.\n5. **Dual registration.** Most states permit an individual to be registered with more than one broker-dealer, but each firm must file its own U4 and assume supervisory responsibility under FINRA Rule 3110 and the equivalent state requirements.\n\n### Worked Example\n\nSarah is hired by **Acme Securities**, a broker-dealer registered in Illinois and Indiana. Her job is to take inbound phone calls, answer customer questions about quotes, and accept buy and sell orders. She has not yet passed her Series 7 or Series 63 exam.\n\nApply the conjunctive test:\n\n- Individual? Yes.\n- Represents a broker-dealer? Yes — Acme.\n- Effects or attempts to effect purchases or sales? Yes — accepting orders is the textbook example.\n\nSarah is therefore an **agent** under USA Section 401(b) and must register in Illinois and Indiana before she takes her first order. Acme must file Form U4, Sarah must pass the Series 7 and Series 63, and the registration must be approved in each state. If Acme allows Sarah to accept even one order before her registrations are effective, both Acme and Sarah have violated USA Section 201; the firm faces a supervisory failure under FINRA Rule 3110, and Sarah faces individual sanctions under Exchange Act Section 15(b).\n\nSuppose instead that Sarah's only job is to greet visitors at the front desk and forward calls to licensed reps. She never quotes prices, recommends securities, or accepts orders. She is *not* an agent because the third prong of the test — effecting or attempting to effect a transaction — is not satisfied. No registration is required.\n\nFinally, suppose Sarah, now fully licensed, leaves Acme to join Bravo Brokerage. Acme files Form U5 within 30 days. Sarah cannot solicit any customer for Bravo until Bravo files a fresh Form U4 and the states approve it. There is no automatic transfer of state registration from one firm to another.\n\n### Summary\n\n- An **agent** under USA Section 401(b) is an individual (never a firm) who represents a broker-dealer or issuer in effecting or attempting to effect securities transactions.\n- The federal Exchange Act calls the same person an \"associated person\" and requires registration through FINRA on Form U4 under Section 15(b).\n- Clerical staff, individuals working only with exempt securities or exempt transactions, and out-of-state personnel servicing only visiting existing customers are *excluded*.\n- Registration is per-firm and per-state. A move between firms or into a new state requires a new Form U4; departure requires Form U5.\n- The defining test is the third prong: solicitation, recommendation, or order-acceptance. A person who does any of those things for a broker-dealer is an agent and must be registered before contacting customers.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
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
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 201"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 202"
    },
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
      "ref": "Securities Exchange Act of 1934 Section 15"
    },
    {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 15(a)"
    },
    {
      "source": "SEC",
      "ref": "Securities Exchange Act of 1934 Section 15(b)"
    },
    {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    {
      "source": "SEC",
      "ref": "Form U4"
    },
    {
      "source": "SEC",
      "ref": "Form U5"
    },
    {
      "source": "OTHER",
      "ref": "FINRA"
    },
    {
      "source": "OTHER",
      "ref": "Financial Industry Regulatory Authority"
    },
    {
      "source": "OTHER",
      "ref": "FINRA Rule 3110"
    }
  ],
  "subtopicId": "4.4",
  "reviewed": false
};

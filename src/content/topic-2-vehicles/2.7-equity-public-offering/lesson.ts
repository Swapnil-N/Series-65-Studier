import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Equity Public Offerings: IPOs, Secondary Offerings, and SPACs",
  "bodyMd": "Public equity offerings are how operating companies — and increasingly shell companies — raise capital from a wide pool of investors. The Series 65 expects you to recognize the three main flavors covered in the outline: the initial public offering (IPO), the secondary or follow-on offering, and the special purpose acquisition company (SPAC). All three operate inside the same registration framework laid down by the Securities Act of 1933.\n\n### The federal frame: Section 5 and the registration process\n\nEvery public sale of securities in the United States must either be registered with the SEC or fit within an exemption. The core rule is Section 5 of the Securities Act of 1933, which makes it unlawful to offer or sell a security in interstate commerce unless a registration statement is on file and effective. Registration forces full disclosure; it is not a merit review.\n\nThe registration lifecycle has three phases:\n\n1. **Pre-filing period.** The issuer cannot offer or sell. Underwriters negotiate the deal.\n2. **Waiting (cooling-off) period.** Begins when the registration statement is filed. Sales are still prohibited, but a *preliminary prospectus* — the 'red herring,' so named for the red disclaimer printed on the cover — may circulate. Underwriters may take indications of interest, but no binding orders.\n3. **Post-effective period.** After the SEC declares the registration effective, sales may begin and a *final prospectus* must be delivered to every purchaser.\n\nIf the registration statement contains a material misstatement or omission, Section 11 of the Securities Act of 1933 gives investors a private right of action against the issuer, its directors, signing officers, the underwriters, and the auditors who certified the financials. That liability is one reason audited statements must be prepared under Generally Accepted Accounting Principles (GAAP) and overseen by the Public Company Accounting Oversight Board (PCAOB).\n\n### Initial public offering (IPO)\n\nAn IPO is the *first* registered sale of equity to the public by a previously private company. The exam stresses three mechanics:\n\n- **Form S-1.** First-time issuers register on Form S-1, which discloses business description, risk factors, audited financial statements, use of proceeds, executive compensation, and related-party transactions.\n- **Underwriting syndicate.** A lead bookrunner assembles a syndicate to distribute the shares. Two main commitment types: a *firm commitment*, where underwriters buy the shares from the issuer and bear inventory risk, and a *best efforts*, where underwriters act only as agents.\n- **Pricing.** The deal is priced after the road show. The offering price is negotiated between issuer and lead underwriter using demand indications gathered during the waiting period.\n\nFINRA reviews underwriting arrangements for fairness of compensation and oversees the syndicate's distribution conduct.\n\n**Worked example — gross proceeds, spread, and dilution.** Acme Robotics is private, with 10 million founder shares outstanding and a pre-IPO valuation of $200 million ($20/share). It runs a firm-commitment IPO of 5 million new shares at $24 with a 7% underwriting spread.\n\n- Gross proceeds: $5{,}000{,}000 \\times \\$24 = \\$120{,}000{,}000$\n- Underwriting spread (gross): $\\$120{,}000{,}000 \\times 0.07 = \\$8{,}400{,}000$\n- Net proceeds to issuer: $\\$120{,}000{,}000 - \\$8{,}400{,}000 = \\$111{,}600{,}000$\n- Shares outstanding post-IPO: $10{,}000{,}000 + 5{,}000{,}000 = 15{,}000{,}000$\n- Founder ownership: $10/15 \\approx 66.7\\%$ — diluted from 100%, but at a higher per-share price than the prior round.\n\n### Secondary (follow-on) offerings\n\n'Secondary offering' is used two different ways on the exam, and you must distinguish them:\n\n1. **Follow-on (or 'primary follow-on') offering.** An already-public issuer sells *new* shares to raise additional capital. Existing shareholders are diluted; the company receives the cash. Seasoned issuers may register on Form S-3, a short-form registration that incorporates by reference the issuer's existing periodic reports.\n2. **True secondary.** Existing shareholders — founders, early investors, executives — sell shares they already own. The issuer receives no proceeds; the cash flows to the selling shareholders.\n\nAn offering that combines new and existing shares is sometimes called a 'split offering.'\n\n**Shelf registration — Rule 415.** Rule 415 lets a seasoned issuer file a single registration covering securities the issuer *may* sell over the next three years, then 'take down' tranches as market windows open without filing a fresh registration each time.\n\n**Resale by insiders — Rule 144.** Affiliates (officers, directors, 10% holders) and holders of restricted stock cannot freely sell into the market. Rule 144 imposes a holding period (six months for reporting issuers), volume limits over a 90-day window equal to the *greater* of 1% of shares outstanding or the average weekly trading volume over the prior four weeks, a Form 144 notice when the sale exceeds the de minimis threshold, and a current-public-information requirement.\n\n**Anti-manipulation — Regulation M.** While a distribution is in progress, Regulation M restricts the issuer, selling shareholders, and underwriters from bidding for or buying the security in the open market, to prevent artificial price support during the offering.\n\n### SPACs, blind pools, and blank-check companies\n\nA *special purpose acquisition company* is a shell with no commercial operations and no identified target — its only asset at IPO is cash. Investors are buying a promise: the sponsor will use the proceeds to acquire a private operating business within a set window, typically 18–24 months. Because investors cannot evaluate any real business at the time of the IPO, SPACs are also called 'blank-check' or 'blind-pool' companies.\n\nMechanics the exam can test:\n\n- **Trust account.** IPO proceeds are placed in trust, usually invested in U.S. Treasuries, while the sponsor searches for a target.\n- **Units.** SPACs typically IPO in units of one share plus a warrant fraction, which separate into share and warrant a short time after the IPO.\n- **Sponsor promote.** Sponsors usually receive 'founder shares' equal to roughly 20% of the post-IPO equity for nominal consideration — a structural feature that dilutes public shareholders if a merger closes.\n- **Redemption right.** Public shareholders can redeem their shares for the trust value (typically $10) regardless of how they vote on the proposed merger.\n- **De-SPAC.** When a target is identified and shareholders approve the merger, the operating company effectively becomes public without running a traditional S-1 IPO.\n\nThe JOBS Act of 2012 expanded 'emerging growth company' accommodations — confidential draft registration submissions, scaled disclosure, and reduced auditor-attestation requirements — that SPAC merger targets often use when filing the post-merger registration statement.\n\n**Promote dilution example.** A SPAC IPOs at $\\$10$ per share for 20 million public shares, raising $\\$200$ million into trust. Sponsors hold 5 million founder shares (20% of the 25 million post-IPO total). If the SPAC merges with a target valued at $\\$800$ million and issues 80 million new shares to the target's owners, the public investors' $\\$200$ million is effectively spread across an enterprise where their 20 million shares represent only $20/105 \\approx 19\\%$ of the equity — even though they put up *all* the cash. The sponsor's nearly free 5 million shares are now worth roughly $5/105 \\approx 4.8\\%$ of the combined company. This is the structural cost of the promote.\n\n### Summary\n\n- Every public equity offering must be registered under Section 5 of the Securities Act of 1933 unless exempt; registration triggers Section 11 antifraud liability against the issuer, directors, underwriters, and auditors.\n- An **IPO** is the issuer's first registered offering, typically on Form S-1, distributed through an underwriting syndicate using a firm-commitment or best-efforts agreement.\n- A **secondary/follow-on** offering by a seasoned issuer uses Form S-3, can come off a shelf under Rule 415, and splits into 'primary' (new shares, cash to the company) and 'true secondary' (existing shares, cash to selling shareholders).\n- Insider resales follow Rule 144's holding-period, volume, and notice limits; Regulation M prevents bidding into the security during the distribution.\n- A **SPAC** is a blank-check company whose IPO raises cash to acquire a target later. Public investors get redemption rights, sponsors take a roughly 20% promote, and the de-SPAC merger functions as the target's path to public-company status.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "SEC",
      "ref": "Securities Act of 1933"
    },
    {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 5"
    },
    {
      "source": "SEC",
      "ref": "Securities Act of 1933 Section 11"
    },
    {
      "source": "SEC",
      "ref": "Form S-1"
    },
    {
      "source": "SEC",
      "ref": "Form S-3"
    },
    {
      "source": "SEC",
      "ref": "Rule 144"
    },
    {
      "source": "SEC",
      "ref": "Rule 415"
    },
    {
      "source": "SEC",
      "ref": "Regulation M"
    },
    {
      "source": "SEC",
      "ref": "JOBS Act of 2012"
    },
    {
      "source": "OTHER",
      "ref": "FINRA"
    },
    {
      "source": "OTHER",
      "ref": "PCAOB"
    },
    {
      "source": "OTHER",
      "ref": "GAAP"
    }
  ],
  "subtopicId": "2.7",
  "reviewed": false
};

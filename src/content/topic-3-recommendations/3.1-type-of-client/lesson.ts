import type { Lesson } from "../../../types/content";

export const lesson: Lesson = {
  "title": "Type of Client: Individuals, Business Entities, Trusts, Estates, and Charities",
  "bodyMd": "When an investment adviser opens an account, the very first decision is *who the legal client is*. The answer determines who can give instructions, who owns the assets, who pays the taxes, and what authority documents the adviser must collect before trading. The Series 65 outline groups clients into three families: individuals (and sole proprietors), business entities, and fiduciary structures such as trusts, estates, and charitable organizations. Each family is a distinct \"person\" under state and federal securities law and comes with its own paperwork, suitability profile, and tax treatment.\n\nThe Uniform Securities Act defines \"person\" broadly to include natural persons, corporations, partnerships, LLCs, associations, joint-stock companies, trusts, estates, and government entities, meaning every client type below is independently recognized under USA Section 102(11).\n\n### Individuals and Sole Proprietorships\n\nA natural person is the simplest client. The account is opened in one human's name (or jointly with another person), and that person retains all authority to direct trades, sign the advisory contract, and receive disclosures. Standard suitability information collected on the new-account form -- age, income, net worth, investment experience, time horizon, risk tolerance, marital status, dependents, and tax bracket -- is required under NASAA recordkeeping standards and is reinforced by FINRA Rule 2090, the \"Know Your Customer\" rule.\n\nA **sole proprietorship** is treated for legal and tax purposes as the same person as its owner. There is no separate entity. Income, gains, and losses flow through directly to the owner's Form 1040 (Schedule C), and the owner is personally liable for all business debts. Because there is no separation between owner and business, an adviser opens the account in the individual's name (often styled \"Jane Smith d/b/a Smith Consulting\") rather than in the business's name. This is why the outline groups sole proprietors with individuals: legally, they *are* individuals.\n\nFor tax purposes, the owner reports net business income $\\pi$ on Schedule C and pays self-employment tax in addition to ordinary income tax. Up to the Social Security wage base, the self-employment tax is approximately:\n\n$$\\text{SE tax} \\approx \\pi \\times 0.9235 \\times 0.153$$\n\nThe IRS walks through the mechanics for individual filers in Publication 17.\n\n### Business Entities: Partnerships, LLCs, and Corporations\n\nOnce two or more people pool capital, the choice of entity drives liability, governance, and taxation.\n\n**General partnership (GP).** Two or more people carry on a business for profit. There is no filing requirement to form one, although a written partnership agreement is strongly preferred. Every general partner has *unlimited personal liability* for partnership debts and full authority to bind the partnership. For tax purposes the partnership is a pass-through: it files an information return but the income is taxed on each partner's individual return via Schedule K-1, an arrangement IRS Publication 550 explains for investment-income flow-through.\n\n**Limited partnership (LP).** Has at least one **general partner** with unlimited liability and management control, and at least one **limited partner** whose liability is capped at the amount invested but who cannot actively manage the business without losing that protection. LPs are common in private real estate, oil-and-gas, and private-equity vehicles. Like GPs, they are pass-through entities; investors receive K-1s rather than 1099s.\n\n**Limited liability company (LLC).** Combines the limited liability of a corporation with the flexibility of a partnership. Owners are called **members**. By default a multi-member LLC is taxed as a partnership (pass-through), but it can elect to be taxed as a corporation. A single-member LLC is, by default, a \"disregarded entity\" -- taxed exactly like a sole proprietorship. The LLC has become the most common operating structure in the United States precisely because of this tax flexibility.\n\n**C-corporation.** A separate legal person with perpetual life and limited liability for shareholders. C-corps pay income tax at the entity level under the Internal Revenue Code, and shareholders pay tax again on dividends -- the familiar **double taxation**. If a C-corp earns pre-tax income $E$, faces a corporate tax rate $t_c$, and distributes the after-tax amount as a qualified dividend taxed to the shareholder at $t_d$, the shareholder ultimately keeps:\n\n$$\\text{Net to shareholder} = E \\times (1 - t_c) \\times (1 - t_d)$$\n\n**S-corporation.** A corporation that has elected pass-through taxation under Subchapter S of the Internal Revenue Code. The entity itself pays no federal income tax; income flows to shareholders via Schedule K-1. The S election comes with eligibility limits: no more than 100 shareholders, only one class of stock, and shareholders must generally be U.S. individuals (no corporate or foreign owners). For an investment adviser, the practical consequence is that an S-corp account produces K-1 reporting and that distributions are not \"qualified dividends.\"\n\nFor *every* entity account, the adviser must collect a corporate resolution or operating-agreement excerpt naming the authorized signers, plus an EIN, before discretionary trading is permitted. This is part of the books-and-records requirement under the NASAA Model Rule on Recordkeeping and, for federally registered advisers, Rule 204-2 under the Investment Advisers Act of 1940.\n\n### Trusts, Estates, Foundations, and Charities\n\nThese are **fiduciary** accounts. The person directing the account is not the owner of the assets; they hold legal title for the benefit of someone else and are held to the **prudent investor** standard codified in the Uniform Prudent Investor Act.\n\n**Trusts.** A grantor (settlor) transfers assets to a trustee, who manages them for one or more beneficiaries under the terms of the trust document. A **revocable trust** can be amended or unwound by the grantor and is treated as the grantor's own property for tax purposes (a \"grantor trust\"). An **irrevocable trust** is a separate taxpayer that may distribute taxable income to beneficiaries on Schedule K-1. The adviser must read the trust agreement to identify the current trustee, any co-trustee or successor, and any explicit restrictions on permitted investments.\n\n**Estates.** When a person dies, their assets become an estate administered by an **executor** (named in the will) or an **administrator** (appointed by the probate court if there is no will). The estate is a separate taxpayer until it is closed. Estate accounts are typically transitional -- the adviser's job is to preserve value, generate liquidity for taxes and bequests, and distribute according to the will or state intestacy law.\n\n**Foundations and charities.** A private foundation or charitable organization is a tax-exempt entity governed by a board of trustees or directors. The Uniform Prudent Investor Act standard applies to investment decisions, and an adviser should confirm the organization's tax-exempt status, collect the IRS determination letter, and follow any investment policy statement adopted by the board.\n\n### Worked Example\n\nA married couple owns a small consulting business generating $200{,}000 of pre-tax income and is choosing between operating as an S-corp pass-through or as a C-corp that distributes all profit as a qualified dividend. Assume their marginal individual rate is 32%, the corporate rate is 21%, and qualified dividends are taxed at 15%.\n\nS-corp pass-through (taxed once on the 1040):\n\n$$200{,}000 \\times (1 - 0.32) = 136{,}000$$\n\nC-corp with full dividend distribution (taxed twice):\n\n$$200{,}000 \\times (1 - 0.21) \\times (1 - 0.15) = 134{,}300$$\n\nPass-through nets the owners about $1{,}700 more, and the gap widens further when ordinary individual rates are lower than 32%. This is the textbook reason most closely-held operating businesses choose an S-corp or an LLC over a C-corp.\n\n### Summary\n\nAdvisory clients fall into three groups recognized under USA Section 102(11): natural persons (including sole proprietors), business entities, and fiduciary structures. Individuals and sole proprietors are the same legal person, so the account is opened in the human's name. General partners and LP general partners face unlimited liability; limited partners and LLC members do not. Multi-member LLCs default to partnership taxation; single-member LLCs are disregarded entities. C-corps face double taxation, while S-corps elect Subchapter S pass-through within strict eligibility limits. Trusts, estates, foundations, and charities are fiduciary accounts in which the trustee or executor must invest under the Uniform Prudent Investor Act standard, and the adviser must collect the governing document before trading.",
  "citations": [
    {
      "source": "NASAA",
      "ref": "NASAA Series 65 Content Outline"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "USA Section 102(11)"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Securities Act of 2002"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "NASAA Model Rule on Recordkeeping"
    },
    {
      "source": "NASAA_MODEL_RULE",
      "ref": "Uniform Prudent Investor Act"
    },
    {
      "source": "IA_ACT",
      "ref": "Investment Advisers Act of 1940"
    },
    {
      "source": "IA_ACT",
      "ref": "Rule 204-2"
    },
    {
      "source": "OTHER",
      "ref": "FINRA Rule 2090"
    },
    {
      "source": "OTHER",
      "ref": "Internal Revenue Code"
    },
    {
      "source": "OTHER",
      "ref": "IRS"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 17"
    },
    {
      "source": "OTHER",
      "ref": "IRS Publication 550"
    }
  ],
  "subtopicId": "3.1",
  "reviewed": false
};

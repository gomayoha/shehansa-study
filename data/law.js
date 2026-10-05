/* Cambridge International AS & A Level Law 9084 (exams 2026–2028)
   Notes format per section: d = definition, k = key points, x = case(s), e = exam move, r = remember.
   w = relative study weight used by the planner. rev = topic she has already covered once. */
(function () {
  const S = (id, code, title, w, n, o) => Object.assign({ id, code, title, w, n }, o || {});
  window.SUBJECTS = window.SUBJECTS || {};
  window.SUBJECTS.law = {
    key: "law",
    name: "Law",
    code: "9084",
    crew: "Kiyotaka Ayanokoji",
    crewRole: "The quiet strategist",
    exampleLabel: "Case",
    papers: [
      { p: "Paper 1", t: "English Legal System", m: "75 marks · 1h30 · AS" },
      { p: "Paper 2", t: "Criminal Law", m: "60 marks · 1h30 · AS" },
      { p: "Paper 3", t: "Law of Contract", m: "75 marks · 1h30 · A Level" },
      { p: "Paper 4", t: "Law of Tort", m: "75 marks · 1h30 · A Level" }
    ],
    method: "IRAC: Issue → Rule → Apply (case) → Conclude",
    books: [
      {
        id: "L11", code: "1.1", title: "Principles & Sources of English Law", spine: "penguin", icon: "scroll", paper: "Paper 1",
        sections: [
          S("L111", "1.1.1", "The English legal system & its context", 2, {
            d: "England and Wales has a common law system: law comes from Acts of Parliament and from judges' decisions (precedent), and trials are adversarial.",
            k: [
              "Legal systems: civil (codified, e.g. France) · common law (England, USA) · customary (local tradition) · religious (e.g. Sharia) · mixed (e.g. Sri Lanka, South Africa).",
              "Adversarial: two sides argue, the judge is a referee. Inquisitorial: the judge investigates (France).",
              "Rule of law (Dicey): no punishment except for breach of law · everyone equal before the law · rights protected by ordinary courts.",
              "Civil vs criminal: compensate vs punish · claimant v defendant vs R v defendant · balance of probabilities vs beyond reasonable doubt.",
              "Law & morality overlap but differ (Hart–Devlin debate). Fault: mens rea in crime, carelessness in negligence; strict liability is the exception."
            ],
            x: "R v R (1991): the House of Lords held a husband can rape his wife, so the law moved to match modern morality. Burmah Oil (1965) + War Damage Act 1965 shows Parliament breaking the rule of law with retrospective law.",
            e: "‘Assess’ questions: give the principle, show where English law follows it, then show a breach (retrospective law, unequal access to justice) and conclude.",
            r: "Dicey's 3 rules + the civil/criminal comparison table."
          }),
          S("L112", "1.1.2", "Parliamentary law making", 2, {
            d: "Acts of Parliament are passed through a fixed legislative process and are the highest source of English law because of parliamentary supremacy.",
            k: [
              "Green Paper (consultation) → White Paper (firm plan) → Bill: First Reading → Second Reading (main debate) → Committee Stage → Report → Third Reading → House of Lords → Royal Assent.",
              "Lords can only delay: 1 month for money bills, 1 year for others (Parliament Acts 1911 & 1949).",
              "Types of bill: Public (government) · Private Members' (e.g. Abortion Act 1967) · Private (local/companies) · Hybrid.",
              "Supremacy: Parliament can make or unmake any law, cannot bind its successors, and courts cannot question an Act. Limits: Human Rights Act 1998, devolution; EU law limited it until Brexit.",
              "Influences: political parties, public opinion, pressure groups (sectional vs cause), the media."
            ],
            x: "British Railways Board v Pickin (1974): the courts would not look into how a private Act was passed. Dunblane → Snowdrop campaign → Firearms (Amendment) Act 1997. Dangerous Dogs Act 1991 shows rushed, media-led law.",
            e: "For ‘influences’ essays: name the influence → real example → evaluate (is it democratic? do the loudest groups win?).",
            r: "GP → WP → 1R → 2R → C → R → 3R → Lords → RA.",
          }, { rev: true }),
          S("L112b", "1.1.2", "The Law Commission", 1, {
            d: "An independent, full-time law reform body set up by the Law Commissions Act 1965 to keep the law under review and recommend reform.",
            k: [
              "Composition: a chair (a High Court or Court of Appeal judge) and four other commissioners (experienced lawyers and academics), plus legal staff.",
              "Process: research → consultation paper → final report with a draft Bill → it is up to Parliament to enact it.",
              "Roles: reform · codification · consolidation · repeal of obsolete law (Statute Law Repeals Acts).",
              "Successes: Unfair Contract Terms Act 1977, Family Law Act 1996, Fraud Act 2006 and many repeal Acts.",
              "Weaknesses: no power to make law; Parliament ignores or delays reports; a criminal code was never enacted."
            ],
            x: "Its work on fraud led to the Fraud Act 2006, while its 1998 report on psychiatric injury (nervous shock) has still not been enacted.",
            e: "Evaluate by contrasting experts and research (strength) with dependence on government time and political will (weakness).",
            r: "Est. 1965 · 5 commissioners · reform, codify, consolidate, repeal."
          }, { rev: true }),
          S("L113", "1.1.3", "Delegated legislation", 2, {
            d: "Law made by someone other than Parliament, using power given by a parent (enabling) Act.",
            k: [
              "Orders in Council: made by the King and Privy Council, e.g. in emergencies (Civil Contingencies Act 2004).",
              "Statutory instruments: made by government ministers (about 3,000 a year).",
              "Bylaws: made by local authorities and public corporations for local matters.",
              "Legislative and Regulatory Reform Act 2006: ministers can amend Acts by SI to cut red tape, which is controversial.",
              "Parliamentary controls: consultation before drafting · affirmative resolution (must be approved) · negative resolution (annulled within 40 days if objected to) · scrutiny committees.",
              "Court controls: judicial review (claimant needs locus standi) for procedural ultra vires, substantive ultra vires, or unreasonableness (Wednesbury)."
            ],
            x: "Aylesbury Mushrooms (1972): the order was invalid because the Mushroom Growers' Association wasn't consulted (procedural UV). Strickland v Hayes BC (1896): a bylaw banning obscene songs anywhere was unreasonable.",
            e: "Evaluate: saves Parliament time, uses expertise, quick, local knowledge vs undemocratic, sub-delegation, too much to scrutinise, negative resolution rarely used.",
            r: "Types O-S-B; controls are Parliament (consult, affirm, negate, committee) and Courts (procedural UV, substantive UV, unreasonable)."
          }),
          S("L114", "1.1.4", "Statutory interpretation", 3, {
            d: "The methods judges use to decide what words in an Act mean when applying them to the facts of a case.",
            k: [
              "Literal rule: plain ordinary meaning even if absurd. Whiteley v Chappell (1868): a dead person was not ‘entitled to vote’.",
              "Golden rule: modify the literal meaning to avoid absurdity. Narrow: R v Allen (1872), ‘marry’ = go through a ceremony. Wide: Re Sigsworth (1935), a son couldn't inherit from the mother he murdered.",
              "Mischief rule (Heydon's Case 1584): what was the gap or mischief, and what remedy did Parliament intend?",
              "Purposive approach: what was Parliament's purpose? R (Quintavalle) v Secretary of State for Health (2003).",
              "Rules of language: ejusdem generis (Powell v Kempton Park 1899) · expressio unius (Tempest v Kilner 1846) · noscitur a sociis (Inland Revenue v Frere 1965).",
              "Aids: intrinsic (long and short title, preamble, headings, schedules, interpretation sections) and extrinsic (dictionaries, Hansard via Pepper v Hart 1993, Law Commission reports, earlier cases, treaties).",
              "HRA 1998 s3: read Acts compatibly with Convention rights where possible (Ghaidan v Godin-Mendoza 2004). EU law encouraged the purposive approach."
            ],
            x: "Smith v Hughes (1960): women tapping on windows were ‘soliciting in a street’ because the mischief was being solicited by prostitutes in public.",
            e: "Problem questions: apply EACH rule to the facts, state the outcome under each, then say which approach a modern court would likely use and why.",
            r: "L-G-M-P, and ‘Whiteley literally died’."
          }, { rev: true }),
          S("L115", "1.1.5", "Judicial precedent", 3, {
            d: "Stare decisis: courts must follow earlier decisions of higher courts (and sometimes their own) when the material facts are similar.",
            k: [
              "Ratio decidendi = the binding legal reason. Obiter dicta = other comments, which are persuasive only. Accurate law reports make the system work.",
              "Original precedent: a new point of law (Donoghue v Stevenson 1932). Persuasive: obiter, Privy Council, lower courts, other countries, dissents.",
              "Hierarchy: Supreme Court → Court of Appeal → High Court → Crown/County Court → Magistrates' Court.",
              "Practice Statement 1966: the House of Lords (now the Supreme Court) can depart from its own decisions ‘when it appears right to do so’, e.g. Herrington v BRB (1972), R v Shivpuri (1986), R v G (2003).",
              "Court of Appeal: Young v Bristol Aeroplane (1944) exceptions: 1) choose between two conflicting decisions of its own, 2) don't follow one that conflicts with a later Supreme Court/HL decision, 3) a decision made per incuriam.",
              "Avoidance: overruling (a later case), reversing (the same case on appeal), distinguishing (material facts differ)."
            ],
            x: "Balfour v Balfour (1919) was distinguished in Merritt v Merritt (1970) because the couple had separated. R v Howe (1987) obiter on attempted murder was followed in R v Gotts (1992).",
            e: "Evaluate: certainty, consistency and fairness vs rigidity, slow change, lots of case law, and judges ‘making law’ without being elected.",
            r: "Ratio binds, obiter persuades. Young's three exceptions."
          })
        ]
      },
      {
        id: "L12", code: "1.2", title: "Machinery of Justice", spine: "crimson", icon: "court", paper: "Paper 1",
        sections: [
          S("L121", "1.2.1", "Civil courts & civil process", 2, {
            d: "Civil disputes are dealt with by courts according to their value and complexity, under the Civil Procedure Rules 1998 introduced by the Woolf reforms.",
            k: [
              "Magistrates' Court (civil): family matters, licensing, council tax. County Court: most claims. High Court: King's Bench, Chancery and Family Divisions.",
              "Court of Appeal (Civil Division) → Supreme Court (points of law of general public importance, with permission).",
              "Woolf (1996) → CPR 1998: judges manage cases, pre-action protocols, the track system, encouragement of ADR, and the overriding objective of dealing with cases justly and at proportionate cost.",
              "Tracks: small claims (up to £10,000) · fast track (£10,000–£25,000) · intermediate (£25,000–£100,000, since 2023) · multi-track (over £100,000 or complex).",
              "Pre-trial: letter before claim → claim form → defence → allocation to a track → directions → trial. Appeals normally need permission."
            ],
            x: "Example: a £3,000 claim for a faulty laptop goes to the small claims track in the County Court. It is quick, informal and lawyers aren't needed.",
            e: "Evaluate Woolf: more settlements and faster cases vs front-loaded costs, continuing delays and underfunded courts (the Jackson review, 2010).",
            r: "Small claims to £10k · fast to £25k · intermediate to £100k · multi-track above."
          }),
          S("L122", "1.2.2", "Alternative dispute resolution (ADR)", 2, {
            d: "Ways of settling disputes without a full court hearing.",
            k: [
              "Negotiation: the parties (or their lawyers) talk directly. Private, cheap, and they can stop at any time.",
              "Mediation: a neutral mediator helps the parties reach their own agreement but doesn't impose a solution.",
              "Conciliation: the conciliator is more active and may suggest solutions (e.g. ACAS in employment disputes).",
              "Arbitration: the parties agree an arbitrator will decide. Under the Arbitration Act 1996 the award is binding and enforced by the courts, with limited appeals (serious irregularity, point of law).",
              "Scott v Avery clause: a contract term requiring arbitration before any court action."
            ],
            x: "Halsey v Milton Keynes NHS Trust (2004): unreasonably refusing to mediate can lead to a costs penalty. Churchill v Merthyr Tydfil (2023): courts can order parties to try ADR.",
            e: "Compare ADR with the courts: cost, speed, privacy, keeping relationships vs power imbalance, no precedent, and outcomes that may not be binding.",
            r: "N-M-C-A, from least to most formal."
          }),
          S("L123", "1.2.3", "Criminal courts & criminal process", 2, {
            d: "Every criminal case starts in the Magistrates' Court; more serious cases go to the Crown Court for trial by jury.",
            k: [
              "Summary offences (minor, e.g. common assault, most driving offences) are tried by magistrates only.",
              "Triable either way (e.g. theft, ABH, burglary): plea before venue, then allocation. The defendant can elect jury trial.",
              "Indictable only (murder, robbery, rape): sent straight to the Crown Court (s51 Crime and Disorder Act 1998).",
              "Crown Court: Plea and Trial Preparation Hearing → trial by judge and jury.",
              "Appeals from the Magistrates' Court: to the Crown Court, or to the Divisional Court by case stated (point of law). From the Crown Court: to the Court of Appeal (Criminal Division) with leave, then the Supreme Court.",
              "Prosecution appeals: by case stated, Attorney General's References, unduly lenient sentences, and retrials for new evidence (CJA 2003 double jeopardy exception)."
            ],
            x: "R v Dunlop (2006): the first retrial under the double jeopardy exception, after a confession.",
            e: "Problem questions: classify the offence, then follow it through each court and the possible appeal route.",
            r: "S / TEW / I: know one example offence for each."
          }),
          S("L123b", "1.2.3", "Bail: police & court", 1, {
            d: "Bail is releasing a suspect or defendant from custody while the case continues, usually with a duty to surrender and sometimes with conditions.",
            k: [
              "Police bail: PACE 1984 (s37, s47). CJPOA 1994 allowed police to attach conditions. Includes street bail.",
              "Court bail: Bail Act 1976 s4 gives a presumption in favour of bail.",
              "Refuse if there are substantial grounds to believe the defendant would fail to surrender, offend on bail, or interfere with witnesses (Sch 1).",
              "Factors: seriousness of the offence, character and record, community ties, previous bail record, strength of evidence.",
              "Conditions: surety, security, reporting to a police station, curfew, electronic tag, residence, surrendering a passport.",
              "s25 CJPOA 1994: for murder, manslaughter or rape with a previous similar conviction, bail only in exceptional circumstances."
            ],
            x: "Example: a defendant with no fixed address and a record of skipping court is likely to be refused bail, or given residence and reporting conditions.",
            e: "Evaluate: protecting the public vs the presumption of innocence (remanded defendants who are later acquitted).",
            r: "Bail Act 1976 s4 = right to bail. Sch 1 = grounds to refuse."
          }),
          S("L124", "1.2.4", "Police powers: stop, search & arrest", 2, {
            d: "Police powers under PACE 1984 let officers stop, search and arrest, but only within limits that protect suspects' rights.",
            k: [
              "s1 PACE: stop and search in a public place with reasonable grounds to suspect stolen or prohibited articles.",
              "s2–3 PACE: the officer must give name, station, grounds and object of the search, and make a record (GOWISELY).",
              "Code A: reasonable suspicion can't be based on personal factors alone (race, age, appearance, previous convictions). In public, only outer coat, jacket and gloves can be removed.",
              "Other powers: s23 Misuse of Drugs Act 1971 (drugs) · Terrorism Act 2000 s43 (suspicion) and s47A (authorised area, no suspicion needed).",
              "Arrest, s24 PACE (as amended by SOCPA 2005): any offence, with reasonable grounds to suspect plus a necessity reason (name/address, prevent harm, protect a child, prompt investigation, prevent disappearance). Code G.",
              "Give the reason for arrest (s28) and the caution. Reasonable force (s117). Citizen's arrest (s24A) only for indictable offences."
            ],
            x: "Osman v DPP (1999): the search was unlawful because officers didn't give their names and station. Richardson v CC West Midlands (2011): the arrest was unlawful because it wasn't necessary.",
            e: "Scenario questions: check each step (power, grounds, information given, record, necessity), then state whether it was lawful.",
            r: "Search needs reasonable suspicion. Arrest needs reasonable suspicion plus necessity."
          }),
          S("L124b", "1.2.4", "Police powers: detention, treatment & breaches", 2, {
            d: "PACE controls how long suspects can be held and how they must be treated. Breaking the rules can make evidence inadmissible.",
            k: [
              "Time limits: 24 hours (s41) → a superintendent can extend to 36 hours for indictable offences (s42) → magistrates can extend to 96 hours maximum (s43–44). Reviews after 6 hours, then every 9 hours.",
              "Rights: s56 to have someone informed · s58 to free legal advice (can be delayed up to 36 hours for indictable offences only) · an appropriate adult for under-18s and vulnerable adults (Code C).",
              "Interviews: recorded under s60/s60A (Codes E, F). Code C requires breaks, 8 hours' rest and a heated, lit, ventilated room.",
              "Searches and samples: s54 (search at the station), s55 (intimate search, superintendent authorisation), s61 (fingerprints), s62 (intimate samples need consent), s63 (non-intimate samples, no consent needed).",
              "Custody officer: an independent sergeant who keeps the custody record and protects the suspect's rights.",
              "s76: a confession obtained by oppression, or likely to be unreliable, must be excluded. s78: any evidence can be excluded if admitting it would be unfair."
            ],
            x: "R v Samuel (1988): legal advice was wrongly refused, so the confession was excluded. R v Paris, Abdullahi & Miller (1993), the ‘Cardiff Three’: a bullying interview was oppression under s76.",
            e: "Spot each breach in the scenario, then link it to its consequence (s76 or s78 exclusion).",
            r: "24 → 36 → 96 hours. s76 = confessions, s78 = any unfair evidence."
          })
        ]
      },
      {
        id: "L13", code: "1.3", title: "Legal Personnel", spine: "tan", icon: "person", paper: "Paper 1",
        sections: [
          S("L131", "1.3.1", "The judiciary", 2, {
            d: "Judges decide cases and develop the law. They are superior (High Court and above) or inferior (circuit judges, recorders, district judges).",
            k: [
              "Qualifications (Tribunals, Courts and Enforcement Act 2007): judicial-appointment eligibility of 5 or 7 years. Supreme Court: 2 years in high judicial office or 15 years' qualifying practice.",
              "Selection: the Judicial Appointments Commission (Constitutional Reform Act 2005) appoints on merit only, through applications, tests and interviews. The Lord Chancellor can accept, reject or ask once for reconsideration.",
              "Training: the Judicial College (induction, sitting in, Equal Treatment Bench Book).",
              "Retirement at 75 (since 2022). Superior judges can only be removed by the monarch on an address from both Houses. Inferior judges can be removed by the Lord Chancellor with the Lady Chief Justice's agreement.",
              "Independence: security of tenure, immunity from suit (Sirros v Moore 1975), salaries fixed, and separation of powers under the CRA 2005 (Supreme Court set up in 2009)."
            ],
            x: "Re Pinochet (1999): the decision was set aside because Lord Hoffmann had links to Amnesty International, showing that impartiality must be visible.",
            e: "Evaluate the JAC: more transparent and merit-based vs lack of diversity at senior level.",
            r: "JAC, merit, 75, and the CRA 2005 separating the judiciary from Parliament."
          }),
          S("L132", "1.3.2", "Legal professionals", 2, {
            d: "The legal profession is made up of solicitors, barristers and legal executives (CILEx), each with different routes, roles and regulators.",
            k: [
              "Solicitors: any degree → SQE1 and SQE2 → 2 years' qualifying work experience. Advise clients, draft documents, conveyancing, wills, advocacy in lower courts (higher rights with a certificate).",
              "Barristers: degree (plus conversion if not law) → Bar course → join an Inn of Court → called to the Bar → 12-month pupillage. Specialist advocates in all courts. Usually self-employed in chambers. Senior ones become KCs.",
              "Legal executives: the CILEx route, with work experience. Can qualify as Chartered Legal Executive lawyers.",
              "Regulation: the Law Society represents solicitors and the SRA regulates them. The Bar Council represents barristers and the Bar Standards Board regulates them. The Legal Ombudsman handles complaints about service (Legal Services Act 2007).",
              "Barristers can be sued for negligence: Arthur JS Hall v Simons (2000)."
            ],
            x: "Arthur JS Hall v Simons (2000) removed advocates' immunity from negligence claims.",
            e: "Comparison questions: use a table (training, role, rights of audience, regulation), then discuss access and cost (expensive training, lack of diversity).",
            r: "Rep vs Reg: Law Society/SRA · Bar Council/BSB · Legal Ombudsman."
          }),
          S("L133", "1.3.3", "Lay magistrates", 1, {
            d: "Lay magistrates (JPs) are unpaid volunteers with no legal qualifications who sit as a bench of three, advised by a legally qualified legal adviser.",
            k: [
              "Qualifications: aged 18–74 on appointment, with the six key qualities (good character, understanding and communication, social awareness, maturity, sound judgement, commitment). Must sit at least 13 days a year.",
              "Disqualified: police officers, people with serious convictions, undischarged bankrupts.",
              "Selection: local advisory committees recruit and interview. The Lady Chief Justice appoints.",
              "Training: Judicial College framework, mentors, observations and appraisals.",
              "Criminal role: about 95% of criminal cases, summary trials, sentencing (limited powers), bail, warrants, Youth Court. Civil role: licensing, family cases, council tax."
            ],
            x: "Example: a bench of three hears a summary assault trial, takes legal guidance from the legal adviser, then decides verdict and sentence.",
            e: "Evaluate: local knowledge, cheap, involves the community vs case-hardened, not representative (older, middle-class), inconsistent sentencing.",
            r: "Bench of 3 + legal adviser · six key qualities · 13 days a year."
          }),
          S("L133b", "1.3.3", "Juries", 2, {
            d: "Twelve randomly selected members of the public who decide the verdict (guilty or not guilty) in Crown Court trials. The judge decides points of law.",
            k: [
              "Qualifications (Juries Act 1974, as amended): aged 18–75, on the electoral register, lived in the UK for 5 years since age 13. Disqualified if on bail, have certain criminal convictions, or are mentally disordered.",
              "Majority verdicts of 10–2 are allowed after at least 2 hours (s17).",
              "Vetting: routine police record checks; authorised checks in national security cases.",
              "Challenges: to the array (the whole panel), for cause (e.g. knows the defendant), prosecution ‘stand by’. Peremptory challenges were abolished in 1988.",
              "Alternatives: a single judge, a panel of judges, a judge with lay assessors, a mixed tribunal. Judge-only trials are allowed for jury tampering (CJA 2003 s44, R v Twomey 2009)."
            ],
            x: "R v Ponting (1985) shows ‘jury equity’ (acquitted despite clear law). AG v Fraill (2011): a juror contacted the defendant on Facebook and was jailed for contempt.",
            e: "Evaluate: public confidence, random and independent, jury equity vs perverse verdicts, secrecy (R v Mirza 2004), internet research, cost and time.",
            r: "18–75 · 10–2 majority · peremptory challenges gone since 1988."
          })
        ]
      },
      {
        id: "L21", code: "2.1", title: "Elements of a Crime", spine: "paper", icon: "gavel", paper: "Paper 2",
        sections: [
          S("L211", "2.1.1", "Actus reus: conduct, omission & causation", 3, {
            d: "The actus reus is the physical element of a crime: a voluntary act, an omission where there is a duty to act, or a state of affairs, which causes the prohibited result.",
            k: [
              "Duty to act arises from: statute · contract (R v Pittwood 1902, level-crossing keeper) · special relationship (R v Gibbins & Proctor 1918) · voluntarily taking on care (R v Stone & Dobinson 1977) · creating a danger (R v Miller 1983) · public office (R v Dytham 1979).",
              "Factual causation: the ‘but for’ test. R v White (1910): no. R v Pagett (1983): yes.",
              "Legal causation: an operating and substantial cause (R v Smith 1959). Thin skull rule: take your victim as you find them (R v Blaue 1975).",
              "Medical treatment rarely breaks the chain (R v Cheshire 1991) unless it is palpably wrong (R v Jordan 1956).",
              "A victim's own act breaks the chain only if it is ‘daft’ or unforeseeable (R v Roberts 1971, R v Williams 1992). A free, deliberate act also breaks it (R v Kennedy No 2, 2007)."
            ],
            x: "R v Miller (1983): he fell asleep with a cigarette, woke to find the mattress smouldering and did nothing. Creating the danger gave him a duty to act.",
            e: "IRAC: identify the act or omission → duty? → factual causation → legal causation → any break in the chain?",
            r: "But-for → operating & substantial → thin skull → novus actus."
          }),
          S("L212", "2.1.2", "Mens rea: intention & recklessness", 2, {
            d: "Mens rea is the mental element (the ‘guilty mind’) required for the offence. The main forms are intention and recklessness.",
            k: [
              "Direct intention: the result is D's aim or purpose (R v Mohan 1975).",
              "Indirect (oblique) intention: the jury may find intention if the result was a virtual certainty and D appreciated that (R v Woollin 1998, building on R v Nedrick 1986).",
              "Recklessness is subjective: D foresaw the risk and unreasonably took it (R v Cunningham 1957; R v G 2003 overruled objective Caldwell recklessness).",
              "Coincidence: the actus reus and mens rea must coincide, or form a continuing act (Fagan v MPC 1969; Thabo Meli 1954).",
              "Transferred malice: mens rea transfers to an unintended victim (R v Latimer 1886)."
            ],
            x: "R v Woollin (1998): he threw his baby onto a hard surface. Murder needs intention, and the virtual certainty test applies.",
            e: "Separate the forms of mens rea clearly, then apply the test word by word to D's state of mind.",
            r: "Mohan = aim · Woollin = virtual certainty · Cunningham/G = foresaw the risk."
          })
        ]
      },
      {
        id: "L22", code: "2.2", title: "Offences Against Property", spine: "maroon", icon: "key", paper: "Paper 2",
        sections: [
          S("L221", "2.2.1", "Theft: appropriation, property, belonging to another", 2, {
            d: "Theft (s1 Theft Act 1968): dishonestly appropriating property belonging to another with the intention of permanently depriving the other of it.",
            k: [
              "s3 Appropriation: any assumption of the rights of an owner. One right is enough (R v Morris 1983, swapping price labels). The owner's consent doesn't matter (R v Gomez 1993). Even a valid gift can count (R v Hinks 2000).",
              "s4 Property: money, real and personal property, things in action, intangible property. Excludes most land and wild plants or mushrooms picked not for reward. Confidential information isn't property (Oxford v Moss 1979). Body parts with skill applied are (R v Kelly & Lindsay 1998).",
              "s5 Belonging to another: whoever has possession or control (R v Turner No 2, 1971, his own car taken from the garage).",
              "s5(3): property received with an obligation to deal with it in a particular way (Davidge v Bunnett 1984).",
              "s5(4): property received by mistake, with an obligation to return it (AG's Ref No 1 of 1983, overpaid wages)."
            ],
            x: "R v Gomez (1993): goods were handed over with the manager's consent, obtained by deception. That was still appropriation.",
            e: "Work through the actus reus in order: s3 → s4 → s5, with one case for each.",
            r: "s3 any right · s4 property list · s5 possession/control, obligation, mistake."
          }, { rev: true }),
          S("L221b", "2.2.1", "Theft: dishonesty, intention to permanently deprive & sentencing", 2, {
            d: "The mens rea of theft is dishonesty (s2) and the intention to permanently deprive (s6).",
            k: [
              "s2(1) not dishonest if D believes: (a) they have a legal right to it (R v Robinson 1977) · (b) the owner would consent · (c) the owner can't be found by taking reasonable steps (R v Small 1987).",
              "s2(2): willingness to pay doesn't stop it being dishonest.",
              "Test: Ivey v Genting Casinos (2017), confirmed for crime in R v Barton & Booth (2020): 1) what did D actually know or believe about the facts? 2) was that dishonest by the standards of ordinary decent people? This replaced Ghosh.",
              "s6: treating the property as your own to dispose of regardless of the owner's rights. Borrowing is only theft if the ‘goodness’ is gone (R v Lloyd 1985). Replacing with equivalent cash is still theft (R v Velumyl 1989). DPP v Lavender (1994): swapping doors.",
              "s7: maximum sentence 7 years."
            ],
            x: "R v Lloyd (1985): cinema films were borrowed and copied, then returned with their value intact, so there was no intention to permanently deprive.",
            e: "Always check s2(1) first. If it doesn't apply, use the Ivey/Barton test.",
            r: "s2 belief · Ivey/Barton · s6 own to dispose · max 7 years."
          }, { rev: true }),
          S("L222", "2.2.2", "Robbery", 2, {
            d: "Robbery (s8): stealing, and immediately before or at the time of doing so, and in order to do so, using force on any person or putting them in fear of force.",
            k: [
              "There must be a completed theft. No theft means no robbery (R v Robinson 1977, claim of right).",
              "Force is an ordinary word for the jury; slight force is enough (R v Dawson & James 1976). Force on property attached to the person counts (R v Clouden 1987).",
              "Timing: appropriation is a continuing act (R v Hale 1979; R v Lockley 1995).",
              "The force must be used in order to steal, not for another reason.",
              "Mens rea: the mens rea of theft plus intention to use force to steal.",
              "Sentence: maximum life. Indictable only."
            ],
            x: "R v Clouden (1987): wrenching a shopping bag from the victim's grip was enough force.",
            e: "Prove theft first (all five elements), then force, then timing and purpose.",
            r: "Robbery = theft + force + at or before the time + to steal."
          }, { rev: true }),
          S("L223", "2.2.3", "Burglary & aggravated burglary", 2, {
            d: "Burglary (s9): entering a building or part of a building as a trespasser with an ulterior intent (s9(1)(a)), or having entered as a trespasser, stealing or inflicting GBH (s9(1)(b)).",
            k: [
              "Entry must be ‘effective’ (R v Brown 1985). Being stuck halfway through a window still counts (R v Ryan 1996).",
              "Trespasser: D knew or was reckless about being a trespasser (R v Collins 1973). Going beyond permission counts (R v Smith & Jones 1976).",
              "Building (s9(4)) includes inhabited vehicles and vessels. B and S v Leathley (1979): a freezer container was a building. Norfolk Constabulary v Seekings (1986): lorry trailers were not. Part of a building: R v Walkington (1979), the shop counter.",
              "s9(1)(a) ulterior intent: to steal, inflict GBH or do unlawful damage. Conditional intent is enough.",
              "Sentence (s9(3)): 14 years for a dwelling, 10 years otherwise.",
              "Aggravated burglary (s10): having a firearm, imitation firearm, weapon of offence or explosive at the time of the burglary (R v O'Leary 1986). Maximum life."
            ],
            x: "R v Walkington (1979): he went behind a shop counter to take money from a till. That area was ‘part of a building’ he entered as a trespasser.",
            e: "Work through entry → building/part → trespasser → mens rea, and pick (a) or (b) by timing.",
            r: "(a) intent on entry · (b) act after entry · s10 = weapon (WIFE: Weapon, Imitation firearm, Firearm, Explosive)."
          }),
          S("L224", "2.2.4", "Blackmail", 2, {
            d: "Blackmail (s21): with a view to gain or intent to cause loss, making an unwarranted demand with menaces.",
            k: [
              "Demand: can be express or implied (R v Collister & Warhurst 1955). It is made when the letter is posted (Treacy v DPP 1971).",
              "Menaces: threats of anything detrimental or unpleasant (Thorne v Motor Trade Association 1937). Judged by the effect on an ordinary person of normal stability (R v Clear 1968), or on a timid victim if D knows it (R v Garwood 1987).",
              "Unwarranted unless D believes both that there are reasonable grounds for the demand AND that menaces are a proper way to enforce it (R v Harvey 1981).",
              "Gain or loss means money or other property (s34) (R v Bevans 1987, demanding a morphine injection).",
              "Sentence: maximum 14 years."
            ],
            x: "R v Harvey (1981): they had genuinely been cheated, but threatening to kill and maim could never be ‘proper’.",
            e: "Apply each element in order, and spend most time on ‘unwarranted’ because examiners love it.",
            r: "Demand + menaces + unwarranted + view to gain or loss."
          }, { rev: true }),
          S("L225", "2.2.5", "Handling stolen goods", 1, {
            d: "Handling (s22): otherwise than in the course of stealing, knowing or believing goods to be stolen, dishonestly receiving them, or helping or arranging their retention, removal, disposal or realisation.",
            k: [
              "The goods must actually be stolen (s24 includes their proceeds). They stop being stolen once restored to lawful custody (AG's Ref No 1 of 1974).",
              "Forms: receiving, arranging to receive, undertaking, or assisting (lying to police to protect the goods: R v Kanwar 1982).",
              "Knowledge or belief: belief means ‘no other reasonable conclusion’ (R v Hall 1985). Mere suspicion is not enough (R v Moys 1984).",
              "Dishonesty: the Ivey/Barton test.",
              "Sentence: maximum 14 years."
            ],
            x: "R v Kanwar (1982): she lied to police about stolen goods her husband had brought home, which was assisting in their retention.",
            e: "Separate the thief from the handler. ‘Otherwise than in the course of stealing’ is the key phrase.",
            r: "Stolen goods + handling act + know/believe + dishonest."
          }),
          S("L226", "2.2.6", "Making off without payment", 1, {
            d: "s3 Theft Act 1978: knowing that payment on the spot is required, dishonestly making off without paying, intending to avoid payment.",
            k: [
              "Making off means leaving the place where payment is due. Stopped before leaving = attempt only (R v McDavitt 1981).",
              "Payment must be legally due. If the service wasn't completed, there's no offence (Troughton v MPC 1987, the taxi didn't finish the journey).",
              "‘On the spot’ can include a taxi stopping at the destination (R v Aziz 1993).",
              "Mens rea: knowing payment is expected, dishonesty, and intending to avoid payment permanently (R v Allen 1985).",
              "Sentence (s4): maximum 2 years."
            ],
            x: "R v Allen (1985): a hotel guest left intending to pay later. Without intent to avoid payment permanently, he wasn't guilty.",
            e: "Check payment was legally due first, then the making off, then the full mens rea.",
            r: "Allen = must intend never to pay."
          }, { rev: true }),
          S("L227", "2.2.7", "Criminal damage & arson", 2, {
            d: "Criminal Damage Act 1971: destroying or damaging property belonging to another without lawful excuse, intending to or being reckless about it (s1(1)).",
            k: [
              "Damage includes temporary harm that costs time or money to fix (Hardman v CC Avon 1986, water-soluble paint; Roe v Kingerlee 1986, graffiti). Spit that can be wiped off is not damage (A v R 1978).",
              "Recklessness is subjective (R v G 2003).",
              "s1(2) aggravated: intending or reckless as to endangering life. The danger must come from the damage itself (R v Steer 1987). Applies even to your own property.",
              "s1(3) arson: damage by fire (R v Miller 1983).",
              "s2 threats to destroy or damage · s3 possessing anything with intent to damage.",
              "s4 sentencing: max 10 years (s1(1)); life for aggravated damage or arson.",
              "s5 lawful excuse: belief the owner would consent (Jaggard v Dickinson 1980, an honest drunken belief) or protecting property in immediate need (R v Hill & Hall 1989 failed)."
            ],
            x: "R v Steer (1987): firing at windows endangered life because of the bullets, not the broken glass, so there was no s1(2) offence.",
            e: "Work basic → aggravated → arson in order, then always consider s5 lawful excuse.",
            r: "s1(1) basic · s1(2) endanger life · s1(3) fire · s5 excuse."
          }, { rev: true }),
          S("L228", "2.2.8", "Fraud by false representation (s2)", 2, {
            d: "Fraud Act 2006 s2: dishonestly making a false representation, knowing it is or might be untrue or misleading, intending to make a gain or cause a loss.",
            k: [
              "A representation can be express or implied, about fact, law or a state of mind, and can be made to a machine (s2(5)).",
              "Implied by conduct: staying in a restaurant implies intending to pay (DPP v Ray 1974). Using a card implies authority to use it (R v Lambie 1982).",
              "False means untrue or misleading, and D knows it is or might be.",
              "Gain or loss (s5): money or property, temporary or permanent. No actual gain is needed; the offence is complete when the representation is made.",
              "Dishonesty: the Ivey/Barton test. Maximum 10 years."
            ],
            x: "Idrees v DPP (2011): arranging for someone else to sit his driving theory test was a false representation.",
            e: "It's a conduct crime, so emphasise that nobody needs to be deceived and no loss needs to happen.",
            r: "False rep + knows (might be) false + dishonest + intent to gain or cause loss."
          }),
          S("L228b", "2.2.8", "Fraud: failing to disclose, abuse of position, obtaining services", 2, {
            d: "The other ways of committing fraud: s3 failing to disclose, s4 abuse of position, plus the separate offence of obtaining services dishonestly (s11).",
            k: [
              "s3: dishonestly failing to disclose information you are under a legal duty to disclose (e.g. insurance forms) (R v Firth 1990).",
              "s4: a person expected to safeguard another's financial interests dishonestly abuses that position (R v Marshall 2009, a carer taking money; R v Valujevs 2014).",
              "s11: obtaining services dishonestly, knowing payment is required and intending not to pay (e.g. sneaking into a stadium or cinema). It is a result crime: the service must actually be obtained.",
              "Mens rea: dishonesty plus intention to gain or cause loss (s3, s4), or intention not to pay (s11).",
              "Max sentence: 10 years (s1 fraud), 5 years (s11)."
            ],
            x: "R v Marshall (2009): a carer used her elderly employer's bank card. Her trusted position made it fraud by abuse of position.",
            e: "Choose the correct section for the facts: was there a lie (s2), silence despite a duty (s3), or a trusted role (s4)?",
            r: "s2 lie · s3 silent with a duty · s4 abuse of trust · s11 service without paying."
          })
        ]
      },
      {
        id: "L23", code: "2.3", title: "Sentencing in England & Wales", spine: "sky", icon: "scales", paper: "Paper 2",
        sections: [
          S("L231", "2.3.1", "Sentencing adult offenders", 2, {
            d: "Adults (18+) can receive custodial sentences, community orders, fines or discharges, chosen using Sentencing Council guidelines under the Sentencing Act 2020.",
            k: [
              "Custodial: immediate custody (usually half served in prison, half on licence) · suspended sentence (2 weeks to 2 years, suspended for up to 2 years) · life (mandatory for murder) · extended sentences.",
              "Community order requirements: unpaid work (40–300 hours), curfew, exclusion, drug or alcohol treatment, mental health treatment, programmes, rehabilitation activity, electronic monitoring.",
              "Fines: based on income bands. Discharges: absolute (no penalty) or conditional (no penalty unless D reoffends within up to 3 years).",
              "Guidelines: assess culpability and harm → category → starting point → adjust for aggravating and mitigating factors.",
              "Aggravating: previous convictions, offending on bail, racial or religious hostility, vulnerable victim, weapon. Mitigating: remorse, good character, age, mental health.",
              "Guilty plea reduction: up to one-third for an early plea."
            ],
            x: "Example: a first-time shoplifter with remorse and an early guilty plea is more likely to get a conditional discharge or fine than custody.",
            e: "Scenario: say what type of sentence fits, list the aggravating and mitigating factors present, apply the plea discount, then link to the aims of sentencing.",
            r: "C-C-F-D: Custody, Community, Fine, Discharge."
          }, { rev: true }),
          S("L232", "2.3.2", "Sentencing young offenders", 2, {
            d: "Offenders aged 10–17 are sentenced (usually in the Youth Court) with the aim of preventing offending and with regard to their welfare.",
            k: [
              "Custodial: Detention and Training Order (4 months to 2 years, half detention, half supervision) · long-term detention for grave crimes · detention at His Majesty's pleasure for murder.",
              "Referral order: compulsory for most first-time offenders who plead guilty. A youth offender panel agrees a 3–12 month contract.",
              "Youth Rehabilitation Order: flexible requirements (activity, curfew, supervision, intensive supervision and surveillance).",
              "Parental responsibility: parenting orders, parents paying fines or compensation for under-16s, bind-overs.",
              "Factors: principal aim to prevent offending (Crime and Disorder Act 1998 s37), welfare of the child (CYPA 1933 s44), age and maturity, custody as a last resort."
            ],
            x: "Example: a 14-year-old pleading guilty to a first offence gets a referral order, meeting victims and repairing harm.",
            e: "Contrast with adults: a stronger welfare focus, and custody as a genuine last resort.",
            r: "DTO · Referral · YRO, plus parenting orders."
          }),
          S("L233", "2.3.3", "Aims of sentencing & reoffending", 2, {
            d: "s57 Sentencing Act 2020: for adults, courts must consider punishment, crime reduction, reform and rehabilitation, public protection, and reparation.",
            k: [
              "Retribution/punishment: proportionate ‘just deserts’.",
              "Deterrence: individual (put off this offender) and general (put off society), e.g. tough sentences after the 2011 riots.",
              "Rehabilitation: change behaviour (drug treatment, programmes). Reoffending is highest after short prison sentences.",
              "Protection of the public: incapacitation through long or extended sentences, curfews and tags.",
              "Reparation: compensation orders, unpaid work, restorative justice.",
              "Young offenders: preventing offending plus welfare."
            ],
            x: "R v Blackshaw (2011): 4 years for inciting riots on Facebook, as general deterrence even though no riot happened.",
            e: "Evaluate each aim: does it actually reduce reoffending? Deterrence assumes offenders think rationally.",
            r: "Punish · Reduce · Reform · Protect · Repair."
          }, { rev: true })
        ]
      },
      {
        id: "L31", code: "3.1", title: "Formation of a Valid Contract", spine: "ink", icon: "handshake", paper: "Paper 3",
        sections: [
          S("L311", "3.1.1", "Nature of a contract", 1, {
            d: "A contract is a legally binding agreement: offer + acceptance + consideration + intention to create legal relations + capacity.",
            k: [
              "Bilateral: a promise for a promise (e.g. a sale).",
              "Unilateral: a promise in exchange for an act (a reward) (Carlill v Carbolic Smoke Ball Co 1893).",
              "Collateral: a separate contract alongside the main one (Shanklin Pier v Detel Products 1951; City & Westminster Properties v Mudd 1959)."
            ],
            x: "Carlill (1893): an advert promising £100 to anyone who caught flu after using the smoke ball was a unilateral offer to the world.",
            e: "Start contract answers by identifying what type of contract it is.",
            r: "Offer, Acceptance, Consideration, Intention, Capacity."
          }),
          S("L312", "3.1.2", "Offer & acceptance", 3, {
            d: "An offer is a definite promise to be bound on specific terms. Acceptance is unconditional agreement to all of those terms, communicated to the offeror.",
            k: [
              "Invitations to treat: goods on display (Fisher v Bell 1961; Pharmaceutical Society v Boots 1953), adverts (Partridge v Crittenden 1968), auctions (British Car Auctions v Wright 1972).",
              "Auction without reserve: the auctioneer must sell to the highest bidder (Barry v Davies 2000). Tenders: Harvela v Royal Trust (1985); Blackpool Aero Club v Blackpool BC (1990).",
              "A counter-offer destroys the original (Hyde v Wrench 1840). A request for information doesn't (Stevenson v McLean 1880).",
              "Termination: revocation (Byrne v Van Tienhoven 1880; via a reliable third party, Dickinson v Dodds 1876), rejection, lapse (Ramsgate Hotel v Montefiore 1866), death.",
              "Acceptance must be communicated; silence isn't acceptance (Felthouse v Bindley 1862). Postal rule: accepted when posted (Adams v Lindsell 1818). Instant communications: on receipt (Entores 1955).",
              "Battle of the forms: last shot wins (Butler Machine Tool v Ex-Cell-O 1979)."
            ],
            x: "Pharmaceutical Society v Boots (1953): goods on the shelf are an invitation to treat. The offer is made by the customer at the till.",
            e: "Problem questions: build a timeline (offer → any counter-offer → revocation → acceptance) and test each step against a case.",
            r: "Hyde = counter-offer kills · Adams = posting accepts · Felthouse = silence isn't acceptance."
          }),
          S("L313", "3.1.3", "Intention to create legal relations", 1, {
            d: "The parties must intend their agreement to be legally binding. Courts use presumptions to decide.",
            k: [
              "Commercial agreements: presumed intention (Edwards v Skyways 1964), rebutted by an ‘honour clause’ (Rose & Frank v Crompton 1925; Jones v Vernons Pools 1938).",
              "Social and domestic agreements: presumed no intention (Balfour v Balfour 1919).",
              "Rebutted where the couple has separated (Merritt v Merritt 1970), or money was shared (Simpkins v Pays 1955).",
              "Why: to keep trivial family disputes out of court."
            ],
            x: "Simpkins v Pays (1955): a lodger, a grandmother and a granddaughter shared a competition entry. The joint payment showed intention, so the prize had to be shared.",
            e: "Identify the type of agreement → state the presumption → is there evidence to rebut it?",
            r: "Business = yes, family = no, unless rebutted."
          }),
          S("L314", "3.1.4", "Consideration & promissory estoppel", 3, {
            d: "Consideration is something of value given in exchange for a promise: the ‘price’ of the promise (Dunlop v Selfridge 1915).",
            k: [
              "It must be sufficient but needn't be adequate (Chappell v Nestlé 1960, chocolate wrappers; Thomas v Thomas 1842, £1).",
              "Past consideration isn't good (Re McArdle 1951) unless the act was requested and payment was expected (Lampleigh v Brathwait 1615; Pao On 1980).",
              "Existing duty: performing a public duty isn't consideration (Collins v Godefroy 1831) unless D does more (Glasbrook 1925). Same for a contractual duty (Stilk v Myrick 1809) unless D exceeds it (Hartley v Ponsonby 1857) or the other side gets a practical benefit (Williams v Roffey 1990).",
              "Part payment of a debt doesn't discharge it (Pinnel's Case 1602; Foakes v Beer 1884), unless paid earlier, in a different place, or with something extra.",
              "Promissory estoppel: a promise to waive rights that is relied on can't be gone back on if that would be inequitable (High Trees 1947). It is a shield, not a sword (Combe v Combe 1951), and is lost if the promise was obtained by pressure (D & C Builders v Rees 1966)."
            ],
            x: "Williams v Roffey (1990): paying extra to a subcontractor to finish on time was supported by the practical benefit of avoiding a penalty clause.",
            e: "Name the type of consideration problem, then the rule, then the exception.",
            r: "Sufficient not adequate · past no good · existing duty → Roffey · part payment → High Trees."
          }),
          S("L315", "3.1.5", "Capacity: minors", 2, {
            d: "Minors (under 18) have limited capacity to contract. This protects them from exploitation while letting them buy what they need.",
            k: [
              "Necessaries: goods suitable to their condition in life and actual needs; they pay a reasonable price (s3 Sale of Goods Act 1979). Nash v Inman (1908): 11 fancy waistcoats weren't necessaries.",
              "Beneficial contracts of service (education, training, employment) bind them: Doyle v White City Stadium (1935); Roberts v Gray (1913). Unfair terms don't: De Francesco v Barnum (1890).",
              "Voidable contracts with continuing obligations (leases, shares, partnerships) bind them unless they repudiate before 18 or soon after (Steinberg v Scala 1923).",
              "Minors' Contracts Act 1987: s2 an adult's guarantee is enforceable · s3 the court can order return of property acquired.",
              "Limits: equity won't order specific performance against a minor, and you can't use tort to get round the rules (Leslie v Sheill 1914). Possible reform: lower the age to 16, as in Scotland."
            ],
            x: "Nash v Inman (1908): a Cambridge student already had plenty of clothes, so the waistcoats weren't necessaries and he didn't have to pay.",
            e: "Classify the minor's contract into one of the 3 categories, then consider remedies under the 1987 Act.",
            r: "Necessaries · Beneficial service · Voidable continuing."
          })
        ]
      },
      {
        id: "L32", code: "3.2", title: "Contents of a Contract", spine: "orange", icon: "doc", paper: "Paper 3",
        sections: [
          S("L321", "3.2.1", "Express terms & representations", 2, {
            d: "Express terms are the obligations the parties actually state. A representation is a pre-contract statement that is not a term.",
            k: [
              "Term or representation? Importance attached to it (Bannerman v White 1861) · special knowledge (Oscar Chess v Williams 1957 vs Dick Bentley v Harold Smith 1965) · timing (Routledge v McKay 1954) · put in writing?",
              "Why it matters: breaching a term is breach of contract; a false representation is misrepresentation.",
              "Signature: you are bound by a signed document even if unread (L'Estrange v Graucob 1934), unless the term was misrepresented (Curtis v Chemical Cleaning 1951).",
              "Parol evidence rule: oral evidence can't add to or vary a written contract. Exceptions: the writing isn't the whole agreement (J Evans v Merzario 1976), a collateral contract, rectification."
            ],
            x: "Dick Bentley (1965): a car dealer's statement about mileage was a term because he had expert knowledge.",
            e: "Use the 4 tests, then state the consequence (term → breach remedies).",
            r: "Importance · Knowledge · Timing · Writing."
          }),
          S("L322", "3.2.2", "Terms implied by the Consumer Rights Act 2015", 3, {
            d: "The CRA 2015 implies key terms into trader-to-consumer contracts for goods and services and gives fixed remedies when they're broken.",
            k: [
              "Goods: s9 satisfactory quality (appearance, finish, free from minor defects, safety, durability) · s10 fit for a particular purpose made known · s11 as described.",
              "Remedies: s20 short-term right to reject · s22 within 30 days · s23 repair or replacement · s24 price reduction or final right to reject.",
              "Services: s49 reasonable care and skill · s52 within a reasonable time.",
              "Service remedies: s55 repeat performance · s56 price reduction.",
              "A consumer is an individual acting wholly or mainly outside their trade (s2). Faults within 6 months are presumed to have existed at delivery."
            ],
            x: "Example: a phone dies after 3 weeks. That breaches s9, so within 30 days the consumer can reject it for a full refund (s20, s22).",
            e: "Identify the breached section → list the remedies in order (reject → repair/replace → price reduction/final reject).",
            r: "9 quality · 10 purpose · 11 description · 49 care · 52 time."
          }),
          S("L323", "3.2.3", "Status of terms", 2, {
            d: "Terms are conditions, warranties or innominate terms. The type decides the remedy for breach.",
            k: [
              "Condition: a fundamental term. Breach allows termination plus damages (Poussard v Spiers 1876).",
              "Warranty: a minor term, damages only (Bettini v Gye 1876).",
              "Innominate: depends on how serious the effects of the breach are (Hongkong Fir 1962; The Hansa Nord 1976).",
              "The parties' labels aren't conclusive (Schuler v Wickman 1974). Time clauses in commercial contracts are usually conditions (Bunge v Tradax 1981)."
            ],
            x: "Poussard (1876): a singer missed the opening nights, breaching a condition. Bettini (1876): a singer missed rehearsals, breaching only a warranty.",
            e: "Classify the term → identify the remedy → evaluate innominate terms (fairer but less certain).",
            r: "Condition = terminate, Warranty = damages, Innominate = wait and see."
          }),
          S("L324", "3.2.4", "Exemption clauses", 3, {
            d: "Exemption clauses try to exclude or limit liability. They must be incorporated, cover the loss, and pass statutory control.",
            k: [
              "Incorporation: signature (L'Estrange) · notice given before the contract (Olley v Marlborough Court 1949; Thornton v Shoe Lane Parking 1971) · a contractual document (Chapelton v Barry UDC 1940) · course of dealing (McCutcheon 1964) · onerous terms need special notice (Interfoto 1989).",
              "Contra proferentem: ambiguity is read against the party relying on the clause (Houghton v Trafalgar Insurance 1954).",
              "UCTA 1977 (business to business): s2(1) can't exclude liability for death or injury from negligence · s2(2) other loss must be reasonable · s3 standard terms must be reasonable · s11 the reasonableness test (George Mitchell v Finney Lock 1983).",
              "CRA 2015 (trader to consumer, s61): s31 can't exclude goods rights · s57 can't exclude s49 care and skill · s62 unfair terms aren't binding · s65 no exclusion for death or injury · s68 terms must be transparent."
            ],
            x: "Thornton v Shoe Lane Parking (1971): the exclusion came on a ticket after the contract was made (at the machine), so it wasn't incorporated.",
            e: "Three steps: incorporated? → covers this loss? → valid under UCTA or CRA?",
            r: "Incorporation, Interpretation, Invalidity (statute)."
          })
        ]
      },
      {
        id: "L33", code: "3.3", title: "Discharge of a Contract", spine: "teal", icon: "check", paper: "Paper 3",
        sections: [
          S("L331", "3.3.1", "Discharge by performance", 2, {
            d: "A contract is discharged when both parties perform their obligations exactly and completely (the strict performance rule).",
            k: [
              "Strict rule: Cutter v Powell (1795), a sailor died before the voyage ended and nothing was paid; Re Moore & Landauer (1921).",
              "Exceptions: substantial performance (Hoenig v Isaacs 1952, but not in Bolton v Mahadeva 1972) · voluntary acceptance of partial performance (Sumpter v Hedges 1898) · divisible contracts · prevention by the other party (Planché v Colburn 1831, quantum meruit) · tender of performance (Startup v Macdonald 1843).",
              "Time of performance: not ‘of the essence’ unless stated or made so by notice.",
              "Vicarious performance: allowed unless the contract is personal."
            ],
            x: "Hoenig v Isaacs (1952): minor defects in furniture work, so the full price was due minus the cost of repairs.",
            e: "State the strict rule, then test each exception against the facts.",
            r: "Cutter = strict; then Substantial, Accepted, Divisible, Prevented, Tendered."
          }),
          S("L332", "3.3.2", "Discharge by breach", 1, {
            d: "Breach is failing to perform, or performing defectively. A serious (repudiatory) breach lets the innocent party end the contract.",
            k: [
              "Actual breach: failing to perform when due, or doing it badly.",
              "Anticipatory breach: indicating before performance is due that you won't perform. The innocent party can sue at once (Hochster v De la Tour 1853) or wait (White & Carter v McGregor 1962).",
              "Risk of waiting: a frustrating event may happen in the meantime (Avery v Bowden 1855)."
            ],
            x: "Hochster v De la Tour (1853): a courier was told in May he wouldn't be needed in June, and could sue immediately.",
            e: "Choice for the innocent party: accept the breach and sue now, or affirm and wait. Explain the risks of each.",
            r: "Actual vs anticipatory breach. Hochster = sue now."
          }),
          S("L333", "3.3.3", "Discharge by frustration", 3, {
            d: "A contract is frustrated when, through no fault of either party, a later event makes it impossible, illegal or radically different to perform (Davis Contractors v Fareham UDC 1956).",
            k: [
              "Impossibility: destruction of the subject matter (Taylor v Caldwell 1863) · personal incapacity (Condor v Baron Knights 1966).",
              "Supervening illegality (Fibrosa 1943, war).",
              "Purpose defeated (Krell v Henry 1903, coronation cancelled) vs still partly possible (Herne Bay Steamboat v Hutton 1903).",
              "Limits: the contract provides for it (force majeure) · only more expensive or inconvenient (Tsakiroglou 1962) · foreseeable · self-induced (Maritime National Fish 1935; Super Servant Two 1990).",
              "Common law: the contract ends automatically and losses lie where they fall, eased by Fibrosa.",
              "Law Reform (Frustrated Contracts) Act 1943: s1(2) money paid is recoverable and the court may allow expenses (Gamerco v ICM 1995) · s1(3) a just sum for a valuable benefit received (BP v Hunt 1979)."
            ],
            x: "Krell v Henry (1903): a room was rented to watch the coronation procession. When it was cancelled, the contract's whole purpose disappeared.",
            e: "Is it a frustrating event? → do any limits apply? → work out the money under the 1943 Act.",
            r: "Impossible · Illegal · Pointless, but not if just harder, foreseen or self-induced."
          })
        ]
      },
      {
        id: "L34", code: "3.4", title: "Remedies for Breach of Contract", spine: "olive", icon: "coin", paper: "Paper 3",
        sections: [
          S("L341", "3.4.1", "Damages (common law)", 3, {
            d: "Damages compensate the innocent party by putting them in the position they'd have been in had the contract been performed (Robinson v Harman 1848).",
            k: [
              "Expectation loss: loss of bargain (Ruxley Electronics v Forsyth 1995: the pool was too shallow, rebuilding was unreasonable, so £2,500 was awarded for loss of amenity).",
              "Reliance loss: wasted expenditure (Anglia TV v Reed 1972).",
              "Non-pecuniary loss: usually none for disappointment (Addis 1909), except holidays and peace-of-mind contracts (Jarvis v Swans Tours 1973; Farley v Skinner 2001).",
              "Causation: the breach must cause the loss.",
              "Remoteness (Hadley v Baxendale 1854): losses arising naturally, or within both parties' reasonable contemplation (Victoria Laundry 1949; Parsons v Uttley Ingham 1978).",
              "Mitigation: the claimant must take reasonable steps to reduce the loss (British Westinghouse 1912; Payzu v Saunders 1919)."
            ],
            x: "Victoria Laundry (1949): normal lost profits were recoverable, but especially lucrative dyeing contracts the defendant knew nothing about were too remote.",
            e: "Calculate the type of loss → then apply the limits (causation, remoteness, mitigation) → evaluate whether damages are enough.",
            r: "Expect, Rely, Feelings; limited by Cause, Remote, Mitigate."
          }),
          S("L342", "3.4.2", "Equitable remedies", 2, {
            d: "Discretionary remedies used where damages would be inadequate, subject to equitable maxims (clean hands, delay defeats equity).",
            k: [
              "Specific performance: an order to carry out the contract (unique goods, land) (Beswick v Beswick 1968). Not for personal services or where constant supervision is needed (Co-op Insurance v Argyll 1998).",
              "Specific restitution: return of the specific property itself.",
              "Rescission: set the contract aside and restore the parties to their original positions. Barred by affirmation, delay (Leaf v International Galleries 1950), third-party rights, or impossibility of restoring.",
              "Injunction: prohibitory (Warner Bros v Nelson 1937) or mandatory. Refused if it would effectively force personal service (Page One Records v Britton 1968).",
              "Evaluation: flexible and just vs uncertain, discretionary and rarely granted."
            ],
            x: "Warner Bros v Nelson (1937): Bette Davis was stopped from acting for rivals, but not forced to act for Warner.",
            e: "Explain why damages are inadequate here, then which equitable remedy fits, and the limits.",
            r: "SP · Restitution · Rescission · Injunction, all discretionary."
          })
        ]
      },
      {
        id: "L41", code: "4.1", title: "The Tort of Negligence", spine: "penguin", icon: "shield", paper: "Paper 4",
        sections: [
          S("L411", "4.1.1", "Nature of liability in negligence", 1, {
            d: "Negligence is a civil wrong where the claimant must prove duty of care, breach and damage caused by the breach.",
            k: [
              "Personal liability: the person who caused the harm.",
              "Vicarious liability (outline only): an employer is liable for torts its employee commits in the course of employment, using the close connection test (Lister v Hesley Hall 2001; Mohamud v Morrisons 2016).",
              "Joint liability: several tortfeasors cause the same damage. The claimant can sue any of them for the whole amount, and they claim contribution from each other (1978 Act)."
            ],
            x: "Mohamud v Morrisons (2016): a petrol kiosk attendant attacked a customer, and the employer was vicariously liable.",
            e: "Open negligence answers by naming the three elements and the burden of proof (balance of probabilities).",
            r: "Duty → Breach → Damage (caused & not too remote)."
          }),
          S("L412", "4.1.2", "Duty of care", 2, {
            d: "A legal obligation to take reasonable care not to cause foreseeable harm to others.",
            k: [
              "Neighbour principle: Donoghue v Stevenson (1932), the snail in the ginger beer bottle.",
              "Caparo v Dickman (1990), three parts: 1) harm reasonably foreseeable, 2) proximity, 3) fair, just and reasonable to impose a duty.",
              "Robinson v CC West Yorkshire (2018): use Caparo only for new situations; follow precedent where the category is already established.",
              "Policy: floodgates, defensive practices, insurance, and public bodies such as the police (Hill v CC West Yorkshire 1988)."
            ],
            x: "Kent v Griffiths (2000): an ambulance service that accepted a call owed a duty to arrive in reasonable time.",
            e: "Apply each Caparo stage separately to the facts. Always mention policy at the fair, just and reasonable stage.",
            r: "Foresee · Proximity · Fair."
          }),
          S("L413", "4.1.3", "Breach of duty", 2, {
            d: "Breach is falling below the standard of the reasonable person, which is an objective test (Blyth v Birmingham Waterworks 1856).",
            k: [
              "Learner drivers are judged as competent drivers (Nettleship v Weston 1971).",
              "Risk factors: probability (Bolton v Stone 1951) · seriousness (Paris v Stepney 1951) · cost of precautions (Latimer v AEC 1953) · social value (Watt v Herts CC 1954) · state of knowledge at the time (Roe v Minister of Health 1954).",
              "Children are judged against a reasonable child of the same age (Mullin v Richards 1998).",
              "Professionals: the Bolam test (1957), meaning a responsible body of opinion supports the practice, which must also be logical (Bolitho 1997). Risk disclosure: Montgomery (2015)."
            ],
            x: "Bolton v Stone (1951): a cricket ball cleared the ground only about 6 times in 30 years, so the risk was too small to amount to breach.",
            e: "Set the standard → apply each risk factor to the facts → conclude.",
            r: "Probability, Seriousness, Cost, Benefit."
          }),
          S("L414", "4.1.4", "Causation & remoteness of damage", 2, {
            d: "The breach must factually and legally cause the damage, and the type of damage must be reasonably foreseeable.",
            k: [
              "Factual causation, but for: Barnett v Chelsea & Kensington HMC (1969), he would have died anyway.",
              "Multiple causes: Wilsher v Essex AHA (1988), not proven · Fairchild (2002), material increase in risk for mesothelioma.",
              "Intervening acts: the claimant's unreasonable act (McKew v Holland 1969), a third party (Knightley v Johns 1982).",
              "Remoteness: The Wagon Mound No 1 (1961), the type of damage must be foreseeable. Hughes v Lord Advocate (1963): the manner needn't be. Doughty v Turner (1964).",
              "Thin skull rule: Smith v Leech Brain (1962)."
            ],
            x: "The Wagon Mound (1961): oil spilt into the harbour caught fire. Fire damage wasn't foreseeable, so it was too remote.",
            e: "But-for → any break in the chain? → right type of damage? → thin skull?",
            r: "Barnett · Wagon Mound · Hughes · Leech Brain."
          }),
          S("L415", "4.1.5", "Pure economic loss & negligent misstatement", 2, {
            d: "Pure economic loss (financial loss not caused by physical damage) is generally not recoverable in negligence, except for negligent misstatements where there is a special relationship.",
            k: [
              "Spartan Steel v Martin (1973): consequential loss was recoverable, pure economic loss was not.",
              "Hedley Byrne v Heller (1964) special relationship: special skill · reasonable reliance · D knew C would rely on the statement for that purpose. A disclaimer may protect D (subject to UCTA).",
              "Caparo v Dickman (1990): auditors owe no duty to investors in general.",
              "Applied to friends with expertise (Chaudhry v Prabhakar 1988), surveyors (Smith v Eric S Bush 1990) and references (Spring v Guardian Assurance 1994)."
            ],
            x: "Smith v Eric S Bush (1990): a mortgage valuation was relied on by the buyer. The duty was owed and the disclaimer was unreasonable.",
            e: "Is it pure economic loss? → was it a statement? → apply the Hedley Byrne factors.",
            r: "Skill · Reliance · Knowledge of purpose."
          }),
          S("L415b", "4.1.5", "Nervous shock (psychiatric injury)", 2, {
            d: "Liability for a recognised psychiatric illness caused by negligence, restricted by strict control mechanisms for policy reasons.",
            k: [
              "Primary victims are in physical danger themselves (Dulieu v White 1901; Page v Smith 1996).",
              "Secondary victims (Alcock v CC South Yorkshire 1991, Hillsborough) must show: a close tie of love and affection · proximity in time and space to the event or its immediate aftermath (McLoughlin v O'Brian 1982) · perception with their own unaided senses (not TV) · a sudden shock.",
              "Rescuers have no special status (White v CC South Yorkshire 1998).",
              "Paul v Royal Wolverhampton NHS Trust (2024): no secondary-victim claim for witnessing a relative's death from an undiagnosed condition.",
              "Policy: floodgates and fake claims. The Law Commission (1998) recommended reform, but it hasn't been enacted."
            ],
            x: "McLoughlin v O'Brian (1982): a mother saw her injured family at hospital within about 2 hours. That was the ‘immediate aftermath’.",
            e: "Primary or secondary? → apply each Alcock control → evaluate fairness (it's arbitrary and harsh).",
            r: "Alcock: Love, Close, Senses, Sudden."
          })
        ]
      },
      {
        id: "L42", code: "4.2", title: "Torts Affecting Land", spine: "crimson", icon: "house", paper: "Paper 4",
        sections: [
          S("L421", "4.2.1", "Occupiers' liability: lawful visitors (OLA 1957)", 2, {
            d: "An occupier owes all lawful visitors the common duty of care: to take reasonable care that they are reasonably safe for the purposes they were invited for (s2(2)).",
            k: [
              "Occupier: whoever has sufficient control. There can be more than one (Wheat v E Lacon 1966). Premises include fixed or movable structures.",
              "Children (s2(3)(a)): the occupier must expect them to be less careful, and allurements matter (Glasgow Corporation v Taylor 1922). Parents are expected to supervise very young children (Phipps v Rochester 1955).",
              "Trades (s2(3)(b)): experts are expected to guard against the risks of their trade (Roles v Nathan 1963).",
              "Independent contractors (s2(4)(b)): not liable if it was reasonable to use a contractor, they were checked as competent, and the work was inspected (Haseldine v Daw 1941; Woodward v Hastings 1945).",
              "Warnings (s2(4)(a)) must make the visitor reasonably safe. Obvious risks need no warning (Darby v National Trust 2001).",
              "Defences: consent and contributory negligence. Exclusion is limited by UCTA/CRA."
            ],
            x: "Glasgow Corporation v Taylor (1922): a child ate poisonous berries that looked like cherries in a park. They were an allurement, so the occupier was liable.",
            e: "Occupier? → visitor? → the duty, with any special rule (child or trade) → breach → defences.",
            r: "s2(2) common duty · children · trades · contractors · warnings."
          }),
          S("L421b", "4.2.1", "Occupiers' liability: trespassers (OLA 1984)", 2, {
            d: "Under the OLA 1984, an occupier owes trespassers a limited duty, for personal injury only, where s1(3) is satisfied.",
            k: [
              "s1(3): the duty arises if the occupier (a) knows of the danger, (b) knows or believes a trespasser is or may come into the vicinity, and (c) could reasonably be expected to offer protection.",
              "s1(4): take reasonable care that the trespasser isn't injured by the danger. Property damage isn't covered (s1(8)).",
              "Obvious risks: Ratcliff v McConnell (1999); Tomlinson v Congleton BC (2003).",
              "Timing matters: Donoghue v Folkestone Properties (2003), no duty in the middle of a winter night.",
              "Warnings or discouragement (s1(5)) and consent (s1(6)) can be defences. Origin: BRB v Herrington (1972), ‘common humanity’."
            ],
            x: "Tomlinson (2003): a man dived into a shallow lake despite signs. The risk was obvious and came from his own choice, so no liability.",
            e: "Test all three parts of s1(3), then reasonable care, then warnings and volenti.",
            r: "1984 = trespassers · injury only · s1(3) three-part test."
          }),
          S("L422", "4.2.2", "Private nuisance", 2, {
            d: "Unlawful (unreasonable), indirect interference with a person's use or enjoyment of land, usually continuing.",
            k: [
              "The claimant needs a proprietary interest in the land (Hunter v Canary Wharf 1997).",
              "Defendant: the creator, the occupier (Sedleigh-Denfield 1940), or a landlord who authorised it (Tetley v Chitty 1986).",
              "Unreasonableness factors: locality (Sturges v Bridgman 1879) · duration and time (De Keyser's Royal Hotel 1914; Crown River Cruises 1996) · sensitivity (Robinson v Kilvert 1889) · malice (Christie v Davey 1893; Hollywood Silver Fox Farm 1936).",
              "Defences: prescription (20 years) and statutory authority (Allen v Gulf Oil 1981). ‘Coming to the nuisance’ is no defence (Miller v Jackson 1977; Coventry v Lawrence 2014)."
            ],
            x: "Christie v Davey (1893): a neighbour banged trays to annoy a music teacher. That malice made the noise unreasonable.",
            e: "Parties → each unreasonableness factor → defences → remedies (injunction or damages).",
            r: "Locality, Duration, Sensitivity, Malice."
          }),
          S("L423", "4.2.3", "Rylands v Fletcher", 2, {
            d: "Strict liability (no fault needed) for damage caused when something dangerous, brought onto land and accumulated for D's own purposes, escapes.",
            k: [
              "Conditions: D brought and accumulated it · it is likely to cause mischief if it escapes · non-natural use (Rickards v Lothian 1913; Transco v Stockport 2003, ‘exceptionally high risk’) · it escapes from D's land (Read v J Lyons 1947) · the damage is of a foreseeable type (Cambridge Water 1994).",
              "Only someone with an interest in land can sue, and not for personal injury (Transco).",
              "It is a sub-species of private nuisance for one-off escapes.",
              "Defences: Act of God (Nichols v Marsland 1876), act of a stranger, statutory authority, consent, contributory negligence."
            ],
            x: "Rylands v Fletcher (1868): water from a newly built reservoir flooded a neighbour's mine through old shafts.",
            e: "Work through each condition, then each defence. Evaluate: is strict liability still meaningful after Transco?",
            r: "Bring, Mischief, Non-natural, Escape, Foreseeable."
          }),
          S("L424", "4.2.4", "Trespass to land", 1, {
            d: "Direct and intentional interference with land in another's possession without lawful justification. It is actionable per se (no damage needed).",
            k: [
              "Forms: entering, staying after permission ends, putting objects on the land, exceeding permission (The Carlgarth 1927).",
              "Airspace is protected only to a reasonable height (Bernstein v Skyviews 1978). A sign over a neighbour's land was trespass (Kelsen v Imperial Tobacco 1957).",
              "Only the entry needs to be intentional. Being mistaken about whose land it is gives no defence (Conway v George Wimpey 1951).",
              "Continuing trespass: leaving something on the land.",
              "Defences: licence, lawful authority (e.g. PACE), necessity."
            ],
            x: "The Carlgarth (1927): ‘When you invite a person into your house to use the staircase, you do not invite him to slide down the banisters.’",
            e: "Direct? Intentional? Without justification? Then remedies (damages, injunction).",
            r: "Per se: no damage needed."
          })
        ]
      },
      {
        id: "L43", code: "4.3", title: "Torts Affecting the Person", spine: "paper", icon: "hand", paper: "Paper 4",
        sections: [
          S("L431", "4.3.1", "Assault", 1, {
            d: "Intentionally or recklessly causing the claimant to reasonably fear the immediate application of unlawful force. Actionable per se.",
            k: [
              "There must be fear of immediate force (Stephens v Myers 1830, a raised fist). Not immediate if the defendant couldn't reach the claimant (Thomas v NUM 1985).",
              "Words can be an assault (Read v Coker 1853), and so can silence (R v Ireland 1997, silent phone calls).",
              "Words can also cancel a threat (Tuberville v Savage 1669: ‘If it were not assize-time…’)."
            ],
            x: "Tuberville v Savage (1669): he put his hand on his sword but his words showed he wouldn't use it, so no assault.",
            e: "Apprehension? Immediate? Reasonable? Intention or recklessness?",
            r: "Assault = fear. Battery = touch."
          }),
          S("L432", "4.3.2", "Battery", 1, {
            d: "Intentional and direct application of unlawful force to another person. Actionable per se.",
            k: [
              "Any touching can count (Cole v Turner 1704). Touching beyond the ordinary contact of daily life (Collins v Wilcock 1984).",
              "Hostility: required in Wilson v Pringle (1986), but not needed according to Re F (1990).",
              "Defences: consent (sport within the rules, medical treatment) · self-defence using reasonable force (Lane v Holloway 1968: excessive) · necessity (Re F 1990; Leigh v Gladstone 1909)."
            ],
            x: "Collins v Wilcock (1984): a police officer held a woman's arm without arresting her. That was a battery.",
            e: "Define it → apply → then work through the defences.",
            r: "Force + direct + intentional, with defences of consent, self-defence and necessity."
          }),
          S("L433", "4.3.3", "False imprisonment", 1, {
            d: "Unlawful total restraint of a person's freedom of movement. Actionable per se.",
            k: [
              "Restraint must be total (Bird v Jones 1845: a partly blocked footpath wasn't enough).",
              "The claimant needn't know at the time (Meering v Grahame-White 1919; Murray v MoD 1988, nominal damages).",
              "A reasonable condition for leaving isn't false imprisonment (Robinson v Balmain Ferry 1910). Lawful arrest isn't either.",
              "Herd v Weardale Steel (1915): miners stopping work mid-shift couldn't insist on being brought up early."
            ],
            x: "Bird v Jones (1845): he could still go back the other way, so there was no total restraint.",
            e: "Total? Unlawful? Knowledge (affects damages)? Any lawful justification?",
            r: "Total + unlawful. Knowledge isn't required."
          })
        ]
      },
      {
        id: "L44", code: "4.4", title: "General Defences & Remedies", spine: "sky", icon: "shield", paper: "Paper 4",
        sections: [
          S("L441", "4.4.1", "Defences in tort", 2, {
            d: "General defences can defeat (volenti) or reduce (contributory negligence) a claimant's damages.",
            k: [
              "Volenti non fit injuria: voluntary agreement with full knowledge of the risk. Employees rarely consent (Smith v Baker 1891), but see ICI v Shatwell (1965). Applies to sport (Condon v Basi 1985) and to a drunk pilot (Morris v Murray 1990). Rescuers aren't volenti (Haynes v Harwood 1935).",
              "Contributory negligence (1945 Act): damages are reduced in proportion to the claimant's share of blame (Froom v Butcher 1976, no seatbelt: 25% or 15%).",
              "Also: inevitable accident, Act of God, statutory authority, illegality (Patel v Mirza 2016), necessity (Rigby v CC Northamptonshire 1985)."
            ],
            x: "Froom v Butcher (1976): not wearing a seatbelt reduced damages by up to 25%.",
            e: "Volenti is a complete defence (rare). Contributory negligence is partial (common). Explain why courts prefer the partial one.",
            r: "Volenti = full defence. CN = percentage cut."
          }),
          S("L442", "4.4.2", "Remedies in tort", 2, {
            d: "The main remedy is compensatory damages. Injunctions are an equitable remedy, granted at the court's discretion.",
            k: [
              "Special damages: losses that can be calculated before trial (medical costs, lost earnings). General damages: pain, suffering, loss of amenity, future losses.",
              "Non-compensatory damages: nominal, contemptuous, aggravated, exemplary (Rookes v Barnard 1964).",
              "Personal injury: lump sum vs periodical payments. Future loss uses multipliers (Ogden tables).",
              "Death: estate claims (1934 Act) and dependants' claims under the Fatal Accidents Act 1976, plus a fixed bereavement award.",
              "Injunctions: prohibitory, mandatory, interlocutory (American Cyanamid 1975). Damages instead of an injunction (Shelfer 1895; Coventry v Lawrence 2014; Miller v Jackson 1977).",
              "Policy and reform: ‘compensation culture’, NHS costs, no-fault schemes (New Zealand)."
            ],
            x: "Kennaway v Thompson (1981): an injunction limited (rather than banned) noisy power-boat racing, balancing both sides.",
            e: "Explain the purpose of damages, then the specific type that fits, then evaluate (lump sums run out, delays).",
            r: "Special vs General · Prohibitory vs Mandatory."
          })
        ]
      }
    ]
  };
})();

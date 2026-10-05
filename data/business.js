/* Cambridge International AS & A Level Business 9609 (exams 2026–2028)
   Books = syllabus topics; sections = x.y.z sub-topics. g = x.y group heading. */
(function () {
  const S = (id, code, title, w, g, n) => ({ id, code, title, w, g, n });
  window.SUBJECTS = window.SUBJECTS || {};
  window.SUBJECTS.business = {
    key: "business",
    name: "Business",
    code: "9609",
    crew: "Nami",
    crewRole: "Navigator of berries",
    exampleLabel: "Real business",
    papers: [
      { p: "Paper 1", t: "Business Concepts 1", m: "40 marks · 1h15 · AS" },
      { p: "Paper 2", t: "Business Concepts 2 (data response)", m: "60 marks · 1h30 · AS" },
      { p: "Paper 3", t: "Business Decision-Making (case study)", m: "60 marks · 1h45 · A Level" },
      { p: "Paper 4", t: "Business Strategy (essays on a case)", m: "40 marks · 1h15 · A Level" }
    ],
    method: "KAAE: Knowledge → Application (to the case) → Analysis (chains of reasoning) → Evaluation (it depends on… + judgement)",
    books: [
      {
        id: "B1", code: "1", title: "Business & Its Environment", spine: "penguin", icon: "compass", paper: "AS · P1 & P2",
        sections: [
          S("B111", "1.1.1", "The nature of business activity", 1, "1.1 Enterprise", {
            d: "Business activity uses resources (factors of production) to make goods and services that satisfy needs and wants.",
            k: ["Factors of production: land, labour, capital, enterprise.", "Adding value = selling price − cost of bought-in materials.", "Scarcity means choice, and choice means opportunity cost (the next best alternative given up).", "The business environment is dynamic (technology, tastes, competition). Firms succeed by adapting and fail through poor cash flow, poor management or not adapting.", "Scale: local → national → international → multinational (operates in more than one country)."],
            x: "Dilmah turns Sri Lankan tea leaves (land + labour) into a branded, packaged product, so the brand adds a lot of value.",
            e: "Define the term, then APPLY it to the case business. The marks for application come from using the case's own details.",
            r: "Value added ≠ profit (wages and overheads still have to be paid)."
          }),
          S("B112", "1.1.2", "Entrepreneurs & intrapreneurs", 1, "1.1 Enterprise", {
            d: "An entrepreneur starts and risks their own business. An intrapreneur acts like an entrepreneur inside an existing organisation.",
            k: ["Qualities: risk-taking, creativity, resilience, self-confidence, initiative, hard work.", "Barriers: lack of finance, a weak idea or poor research, competition, regulation, lack of skills.", "Risk can be measured. Uncertainty can't.", "Enterprise creates jobs, increases output and taxes, encourages innovation and builds skills, which matters for a country's development."],
            x: "Google's former ‘20% time’ let staff work on side projects. Gmail grew out of that kind of intrapreneurship.",
            e: "Evaluate how important enterprise is to an economy: it depends on government support, access to finance, and the culture.",
            r: "Entrepreneur = own risk. Intrapreneur = inside someone else's firm."
          }),
          S("B113", "1.1.3", "Business plans", 1, "1.1 Enterprise", {
            d: "A written document describing the business's objectives, strategy and finances, used to plan and raise finance.",
            k: ["Elements: executive summary, business description, market research, marketing plan, operations, people, financial forecasts (cash flow, break-even).", "Benefits: forces planning, helps get loans and investors, sets targets.", "Limitations: forecasts can be wrong, it takes time to write, and it can become out of date and inflexible."],
            x: "Banks normally ask a start-up café for a business plan with a cash flow forecast before lending.",
            e: "A plan doesn't guarantee success. Its value depends on the quality of the research and on reviewing it regularly.",
            r: "Plan = map, not a guarantee."
          }),
          S("B121", "1.2.1", "Economic sectors", 1, "1.2 Business structure", {
            d: "Business activity is classified into primary (extracting), secondary (manufacturing), tertiary (services) and quaternary (knowledge/IT) sectors, and into private vs public sector ownership.",
            k: ["Primary: farming, fishing, mining. Secondary: factories, construction. Tertiary: banks, retail, tourism. Quaternary: research, IT, consultancy.", "Public sector = government-owned. Private sector = individuals and shareholders.", "Industrialisation: primary → secondary. De-industrialisation: secondary → tertiary as economies grow richer.", "Causes: rising incomes, technology, global competition. Consequences: job losses in old industries, a need to retrain."],
            x: "Sri Lanka's economy has shifted from mainly primary (tea, rubber) towards services such as tourism, IT and finance.",
            e: "Link the changes in sectors to impacts on a particular business (e.g. a shortage of skilled workers).",
            r: "P-S-T-Q, and public vs private."
          }),
          S("B122", "1.2.2", "Business ownership", 2, "1.2 Business structure", {
            d: "The legal form a business takes, which affects liability, control, finance and profits.",
            k: ["Sole trader: full control and keeps all profit, but unlimited liability and limited finance.", "Partnership: 2–20 partners share skills and capital, unlimited liability, possible disagreements.", "Private limited company (Ltd): limited liability, shares sold privately, must publish some accounts.", "Public limited company (plc): sells shares on a stock exchange, raises lots of capital, risk of takeover and divorce of ownership and control.", "Franchise: buy the right to use a brand. Co-operative: owned by members. Joint venture: two firms share a project. Social enterprise: trades for a social purpose.", "Limited liability: owners only lose what they invested, which encourages investment. Unlimited liability risks personal assets."],
            x: "McDonald's is a franchise: franchisees pay fees and royalties to use the brand and systems.",
            e: "Changing form (e.g. Ltd → plc): weigh more capital against loss of control and more disclosure. ‘Most appropriate’ depends on size, risk and the owner's goals.",
            r: "Limited liability is the dividing line."
          }),
          S("B131", "1.3.1", "Measuring business size", 1, "1.3 Size of business", {
            d: "Size can be measured by number of employees, revenue, capital employed, market share or market capitalisation.",
            k: ["Each measure suits some industries better (a capital-intensive firm has few staff but huge assets).", "Market capitalisation = share price × number of shares (plcs only).", "Use more than one measure for a fair comparison."],
            x: "WhatsApp had about 55 employees when Facebook bought it for around $19bn, so staff numbers were misleading.",
            e: "Always ask ‘which measure is most appropriate and why’ for the case business.",
            r: "Staff · Revenue · Capital · Share · Market cap."
          }),
          S("B132", "1.3.2", "Significance of small businesses", 1, "1.3 Size of business", {
            d: "Small businesses (few employees, low revenue) play a large role in employment, competition and innovation.",
            k: ["Advantages: flexible, personal service, quick decisions, can serve niche markets.", "Disadvantages: limited finance, no economies of scale, vulnerable to shocks.", "Family businesses: commitment, trust and long-term thinking, but conflict, succession problems and nepotism.", "Role in the economy: jobs, competition, innovation, supplying larger firms. Some industries (hairdressing, cafés) are mostly small firms."],
            x: "Most firms in most countries are SMEs (small and medium enterprises), which together employ a large share of private-sector workers.",
            e: "Evaluate whether a small firm should stay small: flexibility vs economies of scale.",
            r: "Small = flexible but fragile."
          }),
          S("B133", "1.3.3", "Business growth", 2, "1.3 Size of business", {
            d: "Firms grow internally (organically) or externally through mergers, takeovers, joint ventures and strategic alliances.",
            k: ["Organic growth: slow, lower risk, keeps the culture.", "Horizontal integration: same stage, same industry (Facebook + Instagram).", "Vertical backward: buying a supplier. Vertical forward: buying a customer or retailer.", "Conglomerate: unrelated industries, which spreads risk.", "Friendly merger vs hostile takeover.", "Stakeholder impacts: job cuts, higher prices or more choice, shareholder value. Many mergers fail because of culture clashes, overpaying and diseconomies of scale."],
            x: "The Disney + Pixar (2006) merger worked because Disney kept Pixar's creative culture.",
            e: "‘Will this merger meet its objectives?’ It depends on culture fit, the price paid, synergies and management.",
            r: "H-V-C, and culture clash is the top reason mergers fail."
          }),
          S("B141", "1.4.1", "Objectives: private & public sector, CSR", 1, "1.4 Business objectives", {
            d: "Objectives are targets a business aims to achieve. They differ across the private sector, the public sector and social enterprises.",
            k: ["Private sector: survival, profit, growth, market share. Public sector: service quality, efficiency, social welfare. Social enterprises: social or environmental goals plus profit.", "CSR: acting responsibly towards society beyond the law.", "Triple bottom line: profit, people, planet.", "Hierarchy: mission statement → aims → objectives → strategy → tactics."],
            x: "Patagonia's mission and CSR focus on the planet. In 2022 the founder transferred ownership to a trust and a non-profit to fund environmental causes.",
            e: "Evaluate CSR: better brand and staff motivation vs higher costs and accusations of greenwashing.",
            r: "Mission → Aims → Objectives → Strategy → Tactics."
          }),
          S("B142", "1.4.2", "Objectives & business decisions", 1, "1.4 Business objectives", {
            d: "Objectives guide each stage of decision-making and should be SMART and communicated to staff.",
            k: ["Decision stages: set objectives → gather data → consider options → choose → implement → review.", "Objectives change with the economy, competition and the firm's life cycle (survival → growth).", "Objectives are turned into departmental targets and budgets.", "SMART: Specific, Measurable, Achievable, Realistic, Time-bound.", "Ethics affects objectives (e.g. refusing child labour in the supply chain)."],
            x: "Volkswagen's ‘dieselgate’ emissions scandal (2015) shows the cost of ignoring ethics in pursuit of targets.",
            e: "Communicating objectives improves motivation (link to Drucker's management by objectives) but takes time and needs trust.",
            r: "SMART, and objectives cascade down into targets."
          }),
          S("B151", "1.5.1", "Business stakeholders", 1, "1.5 Stakeholders", {
            d: "Stakeholders are individuals or groups with an interest in a business's activities.",
            k: ["Internal: owners or shareholders, managers, employees.", "External: customers, suppliers, government, local community, lenders, pressure groups.", "Each has rights (e.g. staff: safe work) and responsibilities (e.g. staff: productivity)."],
            x: "When a factory opens, local residents care about jobs AND noise, which can be conflicting interests.",
            e: "Name the stakeholder and their specific interest in THIS case. Generic lists score low.",
            r: "Stakeholder ≠ shareholder."
          }),
          S("B152", "1.5.2", "Stakeholder influence & conflict", 1, "1.5 Stakeholders", {
            d: "Stakeholders differ in power and interest, and their aims often conflict, so businesses must balance and stay accountable to them.",
            k: ["Decisions affect stakeholders (relocation means job losses but lower prices).", "Stakeholder aims shape decisions (e.g. pressure-group campaigns).", "Accountability: annual reports, social audits.", "Conflicts: profit vs wages, growth vs environment, short-term vs long-term.", "Changing objectives changes which stakeholders win or lose."],
            x: "Shareholders wanting dividends vs staff wanting pay rises is a classic conflict.",
            e: "Use power–interest thinking to judge whose view will win, then conclude.",
            r: "Most powerful + most interested = manage closely."
          })
        ]
      },
      {
        id: "B2", code: "2", title: "Human Resource Management", spine: "crimson", icon: "people", paper: "AS · P1 & P2",
        sections: [
          S("B211", "2.1.1", "Purpose & roles of HRM", 1, "2.1 HRM", {
            d: "HRM plans, recruits, trains, motivates and manages people so the workforce helps the business meet its objectives.",
            k: ["Roles: workforce planning, recruitment and selection, training, appraisal, pay, welfare, employee relations, dismissal.", "Links to objectives: the right number of people with the right skills in the right place at the right time."],
            x: "When a retailer expands into a new city, HR has to plan, hire and train staff before opening day.",
            e: "Always link HR actions back to a business objective (cost, quality, growth).",
            r: "Right people · right skills · right time · right cost."
          }),
          S("B212", "2.1.2", "Workforce planning & labour turnover", 2, "2.1 HRM", {
            d: "Workforce planning forecasts future staffing needs and compares them with current staff. Labour turnover measures the rate at which staff leave.",
            k: ["Labour turnover = (number leaving ÷ average number employed) × 100.", "High turnover: recruitment and training costs, lost skills, low morale. But it can bring new ideas.", "Very low turnover: stability, but few fresh ideas and possibly an ageing workforce.", "Causes: low pay, poor management, better jobs elsewhere."],
            x: "Fast-food chains often have high turnover because of young, part-time staff, so they design jobs that are quick to train for.",
            e: "Compare the turnover figure with the industry average and earlier years before judging it.",
            r: "Leavers ÷ average staff × 100."
          }),
          S("B213", "2.1.3", "Recruitment & selection", 1, "2.1 HRM", {
            d: "Recruitment attracts suitable applicants. Selection chooses the best one.",
            k: ["Job description = the tasks. Person specification = the qualities needed.", "Methods: job adverts, employment agencies, online recruitment.", "Internal recruitment: cheaper, known staff, motivating, but no new ideas and leaves a gap. External: new skills, but costly and riskier.", "Selection: CVs/résumés, application forms, interviews, references, tests, assessment centres.", "Employment contract: job title, pay, hours, holidays, notice period."],
            x: "Many graduate schemes use online tests and assessment centres to filter thousands of applicants.",
            e: "Choose methods to suit the job (senior or skilled roles justify assessment centres).",
            r: "JD = job. PS = person."
          }),
          S("B214", "2.1.4", "Redundancy & dismissal", 1, "2.1 HRM", {
            d: "Redundancy is when the JOB is no longer needed. Dismissal is ending employment because of the PERSON (conduct or capability).",
            k: ["Redundancy can be voluntary (staff volunteer, often with a payment) or involuntary.", "Fair dismissal: misconduct, capability, legal reasons, following a fair procedure.", "Unfair dismissal: discrimination, pregnancy, joining a union, no fair process."],
            x: "When a bank closes branches, roles are made redundant. The staff haven't done anything wrong.",
            e: "Don't mix up the two terms. That's a common way to lose marks.",
            r: "Redundancy = job goes. Dismissal = person goes."
          }),
          S("B215", "2.1.5", "Morale, welfare & diversity", 1, "2.1 HRM", {
            d: "HRM affects employee morale and welfare, including work-life balance and the benefits of a diverse, equal workforce.",
            k: ["Welfare: health, wellbeing, flexible hours, counselling.", "Work-life balance reduces stress and absenteeism.", "Diversity and equality bring wider ideas, better decisions and a better reputation, but need training and careful management.", "Low morale leads to absence, turnover and poor quality."],
            x: "Firms with good parental leave policies tend to keep skilled staff longer.",
            e: "Evaluate cost now vs long-term benefits (retention, productivity).",
            r: "Happy staff stay and perform."
          }),
          S("B216", "2.1.6", "Training & development", 1, "2.1 HRM", {
            d: "Training improves employees' skills for their current job. Development grows their abilities for the future.",
            k: ["Induction: introduces new staff to the firm.", "On-the-job: learning while working (cheap, realistic, but may pass on bad habits).", "Off-the-job: courses away from work (expert, focused, but costly and time away).", "Impact: productivity, quality, motivation. Risk: trained staff get poached.", "Development encourages intrapreneurship, multi-skilling and flexibility."],
            x: "Toyota trains workers in several tasks (multi-skilling) so lines can switch between models flexibly.",
            e: "Is training worth it? Compare costs and poaching risk against productivity and retention.",
            r: "Induction · On · Off."
          }),
          S("B217", "2.1.7", "Management–workforce relations & trade unions", 1, "2.1 HRM", {
            d: "Cooperation between management and workers benefits both. Trade unions represent workers in collective bargaining.",
            k: ["Benefits of cooperation: fewer disputes, easier change, better ideas.", "Trade unions: collective bargaining over pay and conditions, representation in disputes.", "For employers: one voice to negotiate with, but stronger demands and strike risk.", "For employees: more power and protection, but membership fees and possible conflict."],
            x: "Strikes by transport unions can force pay negotiations, and the disruption puts pressure on both sides.",
            e: "Union involvement isn't automatically bad. A cooperative union can help introduce change.",
            r: "Collective bargaining = union negotiating for everyone."
          }),
          S("B221", "2.2.1–2.2.2", "Motivation & human needs", 1, "2.2 Motivation", {
            d: "Motivation is the drive to work towards goals. Managers motivate staff to raise productivity and meet objectives by meeting human needs.",
            k: ["Human needs: physical (pay, safety) and psychological (belonging, recognition, growth).", "Work can satisfy needs through pay, teamwork, achievement and development.", "Demotivated staff mean low productivity, absence and turnover."],
            x: "A barista paid fairly but never praised may still feel demotivated, because esteem needs aren't being met.",
            e: "Link motivation to a measurable outcome (productivity, quality, turnover).",
            r: "Needs met → motivated → productive."
          }),
          S("B223", "2.2.3", "Motivation theories", 2, "2.2 Motivation", {
            d: "Content theories explain WHAT motivates people. Process theory explains HOW motivation happens.",
            k: ["Taylor: workers are motivated by money; scientific management with piece rates.", "Mayo (Hawthorne): social needs and attention from managers matter.", "Maslow: hierarchy of physiological → safety → social → esteem → self-actualisation.", "Herzberg: hygiene factors (pay, conditions) stop dissatisfaction; motivators (achievement, recognition, responsibility) motivate.", "McClelland: needs for achievement, affiliation and power.", "Vroom: motivation = expectancy × instrumentality × valence."],
            x: "Herzberg in action: pay rises stop complaints for a while, but job enrichment gives lasting motivation.",
            e: "Apply ONE theory well to the case rather than listing all six. Criticise it (cultural bias, too simple).",
            r: "Taylor $ · Mayo social · Maslow pyramid · Herzberg two factors · McClelland three needs · Vroom E×I×V."
          }),
          S("B224", "2.2.4", "Financial & non-financial motivators", 1, "2.2 Motivation", {
            d: "Motivators can be financial (pay methods) or non-financial (job design, empowerment, recognition).",
            k: ["Financial: time-based wages, salary, piece rates, commission, bonuses, profit sharing, performance-related pay, fringe benefits.", "Non-financial: training, promotion, development, status, job redesign, team working, empowerment, participation, job enrichment.", "Participation: works councils, quality circles, employee shareholders."],
            x: "John Lewis Partnership staff share in profits as ‘partners’. That's profit sharing plus participation.",
            e: "Choose motivators that fit the type of job (piece rates suit measurable output, not nursing).",
            r: "Money works short-term. Meaningful work works long-term."
          }),
          S("B231", "2.3.1", "Management, managers & leadership styles", 2, "2.3 Management", {
            d: "Managers plan, organise, direct and control resources. Their style affects motivation and decisions.",
            k: ["Fayol: plan, organise, command, coordinate, control.", "Mintzberg: interpersonal, informational and decisional roles.", "Styles: autocratic (fast, but demotivating) · democratic (involves staff, slower) · laissez-faire (freedom, suits experts) · paternalistic (caring but still controlling).", "McGregor: Theory X assumes staff are lazy and need control. Theory Y assumes staff are self-motivated and like responsibility."],
            x: "In a crisis such as a factory fire, autocratic decisions are faster and safer. In R&D, democratic or laissez-faire styles release creativity.",
            e: "There's no single best style. It depends on the situation, the workforce's skills and time pressure.",
            r: "A-D-L-P styles · X = control · Y = trust."
          })
        ]
      },
      {
        id: "B3", code: "3", title: "Marketing", spine: "orange", icon: "megaphone", paper: "AS · P1 & P2",
        sections: [
          S("B311", "3.1.1", "Marketing objectives", 1, "3.1 Nature of marketing", {
            d: "Marketing identifies, anticipates and satisfies customer needs profitably. Marketing objectives must support corporate objectives.",
            k: ["Examples: increase market share, launch products, build the brand, enter new markets.", "Link: corporate objective (e.g. growth) → marketing objective (+5% market share) → marketing mix."],
            x: "Nike's objective to grow direct-to-consumer sales shaped its app and online store strategy.",
            e: "Show the link chain from corporate to marketing to mix.",
            r: "Marketing serves the corporate objective."
          }),
          S("B312", "3.1.2", "Demand & supply", 1, "3.1 Nature of marketing", {
            d: "Demand is the quantity customers are willing and able to buy at each price. Supply is the quantity firms are willing to sell. Together they set the equilibrium price.",
            k: ["Demand factors: price, income, substitute and complementary goods, tastes, advertising, population.", "Supply factors: costs, technology, taxes and subsidies, weather, number of firms.", "Excess demand pushes price up. Excess supply pushes price down."],
            x: "Bad weather in tea-growing regions cuts supply, so tea prices rise.",
            e: "Explain the shift and what it means for the firm's revenue and pricing.",
            r: "Movement along the curve (price) vs shift of the curve (other factors)."
          }),
          S("B313", "3.1.3", "Markets, orientation, market share & growth", 2, "3.1 Nature of marketing", {
            d: "Markets differ by type and size. Firms may be product-oriented or market-oriented, and track market share and market growth.",
            k: ["Consumer vs industrial markets. Local, national, international.", "Product orientation: make it, then sell it. Market orientation: research needs first.", "Market share = (firm's sales ÷ total market sales) × 100.", "Market growth = (change in market size ÷ original size) × 100.", "Falling share in a growing market can still mean rising sales."],
            x: "Apple's market share in smartphones is lower than Android's, but it takes most of the profit, so share isn't everything.",
            e: "Interpret share AND growth together before judging performance.",
            r: "Share = firm ÷ market × 100."
          }),
          S("B314", "3.1.4–3.1.5", "Consumer vs industrial marketing; mass vs niche", 1, "3.1 Nature of marketing", {
            d: "B2C and B2B marketing differ. Mass marketing targets the whole market, while niche marketing targets a small segment.",
            k: ["Product classification: convenience, shopping and speciality goods; capital goods.", "B2B: fewer, larger buyers, rational buying, personal selling, relationships.", "Mass: economies of scale and big reach, but intense competition and price wars.", "Niche: less competition, premium prices, loyal customers, but a small market that could disappear."],
            x: "Coca-Cola uses mass marketing. Rolex targets a luxury niche.",
            e: "Recommend mass or niche depending on resources, competitors and brand strength.",
            r: "Mass = volume. Niche = margin."
          }),
          S("B316", "3.1.6–3.1.7", "Segmentation & customer relationship marketing", 1, "3.1 Nature of marketing", {
            d: "Segmentation splits a market into groups with similar needs. CRM builds long-term relationships with customers.",
            k: ["Segmentation methods: geographic, demographic (age, income, gender), psychographic (lifestyle, values).", "Benefits: better targeting, less wasted advertising. Drawbacks: research costs, may miss other buyers.", "CRM aims: loyalty, repeat purchase, word of mouth, using customer data (loyalty apps, emails).", "CRM costs: IT systems, staff, data privacy rules."],
            x: "The Starbucks Rewards app gives personalised offers based on purchase data. That's CRM.",
            e: "Keeping customers is usually cheaper than finding new ones. Use that in your evaluation.",
            r: "Geo · Demo · Psycho."
          }),
          S("B321", "3.2.1–3.2.2", "Market research: purposes, primary & secondary", 2, "3.2 Market research", {
            d: "Market research gathers information about markets and customers. Primary research is collected first-hand; secondary uses existing data.",
            k: ["Purposes: market size, growth, competitors, customer profile, wants and needs.", "Primary: surveys, interviews, focus groups, observation, test marketing. Specific and up to date, but costly and slow.", "Secondary: government statistics, reports, internet, company data. Cheap and fast, but may be outdated or not specific."],
            x: "A new bubble-tea shop might count passers-by (primary) and check population data online (secondary).",
            e: "Judge how USEFUL the data is: reliability, cost, time, relevance to the decision.",
            r: "Primary = new & specific. Secondary = existing & cheap."
          }),
          S("B323", "3.2.3–3.2.4", "Sampling & market research data", 2, "3.2 Market research", {
            d: "A sample is a group chosen to represent the whole population. Data must be reliable and correctly interpreted.",
            k: ["Sampling saves time and money, but sampling error means results may not represent the population.", "Larger, well-chosen samples are more reliable.", "Quantitative = numbers. Qualitative = opinions and reasons.", "Interpret tables, bar charts, pie charts and line graphs (trends, comparisons)."],
            x: "Asking only friends on social media about a new product gives a biased sample.",
            e: "Comment on sample size and bias whenever a case gives research data.",
            r: "Small or biased sample = unreliable."
          }),
          S("B331", "3.3.1–3.3.2", "The marketing mix & product", 1, "3.3 Marketing mix", {
            d: "The 4Ps (Product, Price, Promotion, Place) are the decisions a firm combines to meet customer needs.",
            k: ["Goods are tangible. Services are intangible.", "Product attributes: tangible (design, features) and intangible (brand image, status).", "Product development keeps the range fresh.", "Differentiation and a USP (unique selling point) let a firm charge more and compete."],
            x: "Dyson's USP is innovative bagless technology, which supports premium prices.",
            e: "The 4Ps must be CONSISTENT (a luxury product needs premium price and exclusive places).",
            r: "4Ps must fit together."
          }),
          S("B333", "3.3.3", "Product portfolio: life cycle & Boston Matrix", 2, "3.3 Marketing mix", {
            d: "Product portfolio analysis looks at a firm's range of products to plan marketing and investment.",
            k: ["Product life cycle: development → introduction → growth → maturity → decline.", "Extension strategies: new markets, new uses, redesign or relaunch, new promotion.", "Boston Matrix: Stars (high share, high growth) · Cash cows (high share, low growth) · Question marks (low share, high growth) · Dogs (low share, low growth).", "Use cash from cash cows to fund question marks and stars."],
            x: "Coca-Cola's classic cola is a cash cow, funding newer drinks such as zero-sugar ranges.",
            e: "Limitations: it's hard to identify which stage a product is at, market share isn't the same as profit, and it ignores product links.",
            r: "Milk the cows to fund the stars."
          }),
          S("B334", "3.3.4", "Pricing methods", 2, "3.3 Marketing mix", {
            d: "How a business sets prices, depending on costs, competitors, objectives and customers.",
            k: ["Cost-based: cost + mark-up.", "Competitive: price close to rivals.", "Penetration: start low to win market share.", "Skimming: start high for new innovative products.", "Price discrimination: different prices for different groups (students, peak times).", "Dynamic: prices change in real time with demand.", "Psychological: £9.99 instead of £10."],
            x: "Uber's surge pricing is dynamic pricing. New iPhones are priced using skimming.",
            e: "Choose a method using the objective (share or profit), the USP and price elasticity.",
            r: "Penetrate to enter. Skim the cream."
          }),
          S("B335", "3.3.5", "Promotion methods", 1, "3.3 Marketing mix", {
            d: "Promotion communicates with customers to inform, persuade and remind them.",
            k: ["Advertising: TV, print, online. Sales promotion: discounts, BOGOF, samples. Direct promotion: mail, email, personal selling.", "Digital: social media, influencers, search ads, targeted using data.", "Packaging protects the product and promotes the brand. Branding creates identity and loyalty."],
            x: "Fenty Beauty grew fast using social media and influencer promotion.",
            e: "Judge promotion by cost per customer reached and how well it fits the target segment.",
            r: "Inform · Persuade · Remind."
          }),
          S("B336", "3.3.6", "Place: channels of distribution", 1, "3.3 Marketing mix", {
            d: "Place is how products reach customers: the channels and intermediaries used.",
            k: ["Channels: producer → consumer (direct) · producer → retailer → consumer · producer → wholesaler → retailer → consumer.", "Digital distribution (apps, e-commerce, downloads) vs physical (stores, trucks).", "Choice depends on the product, cost, control, and target market reach."],
            x: "Tesla sells cars direct to consumers online, skipping dealers to keep control and margins.",
            e: "More intermediaries means more reach but less control and lower margins.",
            r: "Shorter channel = more control."
          })
        ]
      },
      {
        id: "B4", code: "4", title: "Operations Management", spine: "tan", icon: "factory", paper: "AS · P1 & P2",
        sections: [
          S("B411", "4.1.1", "The transformational process", 1, "4.1 Nature of operations", {
            d: "Operations transform inputs (land, labour, capital, enterprise) into outputs (goods and services) that add value.",
            k: ["Inputs → process → outputs.", "Operations add value through efficiency, quality, design and speed."],
            x: "A bakery turns flour, labour and ovens into bread. Freshness and quality add value.",
            e: "Link operations decisions to added value and competitiveness.",
            r: "Input → Process → Output = value."
          }),
          S("B412", "4.1.2", "Efficiency, effectiveness, productivity & sustainability", 2, "4.1 Nature of operations", {
            d: "Efficiency is producing at low cost per unit. Effectiveness is meeting objectives. Productivity is output per input. Sustainability is operating without harming future generations.",
            k: ["Labour productivity = total output ÷ number of workers (in a period).", "Raise productivity through training, technology, motivation and better methods.", "Sustainable operations (renewable energy, less waste): higher costs at first, but a better brand and lower long-term costs."],
            x: "Example: 12,000 units ÷ 40 workers = 300 units per worker per month.",
            e: "Productivity gains only help if quality is maintained and costs (e.g. wages) don't rise faster.",
            r: "Efficient = doing things right. Effective = doing the right things."
          }),
          S("B413", "4.1.3–4.1.4", "Capital vs labour intensive; job, batch, flow, mass customisation", 2, "4.1 Nature of operations", {
            d: "Firms choose how capital- or labour-intensive to be, and which production method to use.",
            k: ["Capital intensive: consistent, low unit costs at scale, but high upfront cost and inflexible.", "Labour intensive: flexible and personal, but higher unit costs and less consistent.", "Job: one-off, unique (wedding cake). Batch: groups of identical items (bread). Flow: continuous mass production (soft drinks). Mass customisation: mass scale with personal options (Nike By You).", "Changing method costs money, needs retraining and causes disruption."],
            x: "Dell built PCs to order (mass customisation) while keeping flow-line efficiency.",
            e: "The best method depends on demand volume, product variety and the price customers will pay.",
            r: "Job → Batch → Flow, with mass customisation as the hybrid."
          }),
          S("B421", "4.2.1", "Managing inventory", 2, "4.2 Inventory management", {
            d: "Inventory is raw materials, work in progress and finished goods. It must be balanced between running out and holding too much.",
            k: ["Costs of holding: storage, insurance, waste, cash tied up. Benefits: meet demand, bulk discounts.", "Buffer inventory: safety stock. Re-order level: the point at which to order. Lead time: delay before delivery.", "Inventory control charts: read the maximum, re-order level, buffer and lead time.", "Supply chain management: coordinating suppliers through to the customer."],
            x: "Supermarkets use real-time sales data to re-order automatically.",
            e: "Interpret the chart, then link to cash flow (stock = cash tied up).",
            r: "Too much stock = cash trapped. Too little = lost sales."
          }),
          S("B422", "4.2.2", "Just in Time (JIT) vs Just in Case (JIC)", 1, "4.2 Inventory management", {
            d: "JIT keeps minimal stock, with deliveries arriving exactly when needed. JIC holds buffer stocks to protect against disruption.",
            k: ["JIT benefits: less storage, less waste, better cash flow.", "JIT needs reliable suppliers, good IT and a flexible workforce.", "JIT risks: supply disruptions (COVID, Suez blockage 2021) stop production.", "JIC: safer, but more costly."],
            x: "Toyota pioneered JIT. After supply shocks, many firms increased buffer stocks for key parts such as chips.",
            e: "Evaluate JIT for THIS firm: how reliable are its suppliers, and how risky would a stoppage be?",
            r: "JIT = lean but fragile."
          }),
          S("B431", "4.3.1", "Capacity utilisation", 2, "4.3 Capacity & outsourcing", {
            d: "Capacity utilisation is the percentage of maximum possible output actually being produced.",
            k: ["Capacity utilisation = (actual output ÷ maximum possible output) × 100.", "Under capacity: high fixed cost per unit, idle resources.", "Over or near full capacity: lower unit costs, but stress, no slack for maintenance or extra orders, and quality risk.", "Improve by raising sales (marketing) or cutting capacity (rationalisation, renting out space)."],
            x: "Airlines aim for high load factors because empty seats still cost money to fly.",
            e: "Around 90% is often seen as ideal, but it depends on the industry.",
            r: "Actual ÷ max × 100."
          }),
          S("B432", "4.3.2", "Outsourcing", 1, "4.3 Capacity & outsourcing", {
            d: "Outsourcing is using an external business to carry out activities previously done in-house.",
            k: ["Benefits: lower costs, specialist expertise, flexible capacity, focus on core competences.", "Drawbacks: loss of control, quality and ethical risks, communication problems, redundancies."],
            x: "Apple outsources iPhone assembly to Foxconn, which raised questions about working conditions.",
            e: "Outsource non-core activities and keep core competences in-house.",
            r: "Outsource the non-core."
          })
        ]
      },
      {
        id: "B5", code: "5", title: "Finance & Accounting", spine: "olive", icon: "coin", paper: "AS · P1 & P2",
        sections: [
          S("B511", "5.1.1", "The need for business finance", 1, "5.1 Business finance", {
            d: "Businesses need finance to start up, grow and survive, over both the short and long term.",
            k: ["Start-up capital, working capital, and finance for expansion.", "Short-term needs: inventory, wages. Long-term needs: buildings, machinery.", "Cash ≠ profit: a profitable firm can still run out of cash.", "Failure: bankruptcy (individuals), liquidation (assets sold), administration (an attempt to rescue)."],
            x: "A fast-growing firm can ‘overtrade’: big orders with too little cash to pay suppliers.",
            e: "Distinguish cash from profit clearly. Examiners test this a lot.",
            r: "Profit is an opinion. Cash is a fact."
          }),
          S("B512", "5.1.2", "Working capital", 1, "5.1 Business finance", {
            d: "Working capital = current assets − current liabilities. It's the cash available for day-to-day operations.",
            k: ["Too little: can't pay bills. Too much: idle resources.", "Manage trade receivables (chase payment, offer discounts) and trade payables (delay paying, within reason).", "Capital expenditure buys long-term assets. Revenue expenditure covers day-to-day costs."],
            x: "Supermarkets have negative working capital: customers pay immediately but suppliers are paid later.",
            e: "Link working capital to the cash cycle (inventory → sales → receivables → cash).",
            r: "CA − CL = working capital."
          }),
          S("B521", "5.2.1–5.2.2", "Sources of finance", 2, "5.2 Sources of finance", {
            d: "Finance comes from inside the business (internal) or from outside (external). Availability depends on the form of ownership.",
            k: ["Internal: owner's investment, retained earnings, selling unwanted assets, sale and leaseback, better working capital management.", "External: share capital, debentures, new partners, venture capital, overdrafts, leasing, hire purchase, bank loans, mortgages, debt factoring, trade credit, micro-finance, crowdfunding, government grants.", "Sole traders and partnerships can't sell shares. Plcs can raise money from the public."],
            x: "Grameen Bank's micro-finance lends small sums to entrepreneurs in Bangladesh who can't access banks.",
            e: "Match the source to its PURPOSE: short-term needs get short-term finance.",
            r: "Internal = no interest, but limited."
          }),
          S("B523", "5.2.3–5.2.4", "Choosing the source of finance", 1, "5.2 Sources of finance", {
            d: "The right source depends on cost, flexibility, control, the use of the money, and existing debt.",
            k: ["Cost: interest or dividends.", "Flexibility: an overdraft is flexible, a loan is fixed.", "Control: selling shares dilutes ownership.", "Use: long-term assets need long-term finance.", "Existing debt: high gearing makes lenders cautious."],
            x: "A family firm that wants to keep control may choose a bank loan over selling shares to outsiders.",
            e: "Recommend ONE source and justify it against at least two of these factors.",
            r: "Cost · Flexibility · Control · Use · Debt."
          }),
          S("B531", "5.3.1", "Cash flow forecasts", 2, "5.3 Cash flow", {
            d: "A cash flow forecast predicts cash inflows and outflows over future months.",
            k: ["Net cash flow = inflows − outflows.", "Closing balance = opening balance + net cash flow. The closing balance becomes next month's opening balance.", "Uses: spot shortages, plan finance, support loan applications.", "Improve cash flow: chase receivables, delay payables, cut stock, use overdrafts, sale and leaseback, factoring."],
            x: "Example: opening $5,000 + inflows $12,000 − outflows $15,000 = closing $2,000.",
            e: "Forecasts are only as good as their assumptions, and seasonal businesses swing a lot.",
            r: "Opening + Net = Closing."
          }),
          S("B541", "5.4.1–5.4.2", "Costs: types & full vs contribution costing", 2, "5.4 Costs", {
            d: "Costs can be fixed, variable, direct or indirect. Full costing shares all overheads across products. Contribution costing looks at what each product contributes to overheads.",
            k: ["Fixed costs don't change with output (rent). Variable costs do (materials).", "Direct costs can be traced to a product. Indirect costs (overheads) are shared.", "Full costing: simple, covers all costs, but overhead allocation can be arbitrary.", "Contribution = price − variable cost. Profit = total contribution − fixed costs.", "Contribution costing avoids arbitrary allocation but can ignore fixed costs if used carelessly."],
            x: "A product making a loss under full costing may still contribute to overheads, so dropping it could cut total profit.",
            e: "Check whether dropping a product would raise or lower total contribution.",
            r: "Contribution = P − VC."
          }),
          S("B543", "5.4.3", "Uses of cost information", 1, "5.4 Costs", {
            d: "Cost data supports pricing, monitoring performance, calculating profit and special-order decisions.",
            k: ["Average cost = total cost ÷ output. Marginal cost = the cost of one extra unit.", "Pricing: cost-plus pricing needs accurate costs.", "Special orders: accept if the price exceeds variable cost and there's spare capacity (watch out for upsetting existing customers)."],
            x: "A hotel in the off-season accepts a cheap group booking because it covers the variable costs of the rooms.",
            e: "Special orders: consider qualitative factors too (brand image, precedent).",
            r: "Price > VC = positive contribution."
          }),
          S("B544", "5.4.4", "Break-even analysis", 3, "5.4 Costs", {
            d: "Break-even is the output where total revenue = total cost (no profit, no loss).",
            k: ["Break-even output = fixed costs ÷ contribution per unit.", "Contribution per unit = selling price − variable cost per unit.", "Margin of safety = actual output − break-even output.", "Profit = (contribution per unit × output) − fixed costs.", "Graph: TR and TC lines cross at break-even. FC is horizontal.", "Limitations: assumes all output is sold, straight-line costs, one product, and static figures."],
            x: "Example: FC $20,000, price $15, VC $5 → contribution $10 → break-even = 2,000 units.",
            e: "Show working step by step (the method earns marks), then interpret: what does it mean for the decision?",
            r: "BE = FC ÷ (P − VC)."
          }),
          S("B551", "5.5.1", "Budgets", 1, "5.5 Budgets", {
            d: "A budget is a financial plan for the future, used for setting targets, allocating resources and controlling spending.",
            k: ["Benefits: control, coordination, motivation, accountability.", "Drawbacks: inflexible, time-consuming, can lead to ‘spend it or lose it’ behaviour.", "Incremental budget: last year's figure ± a small change. Flexible budget: adjusts with output. Zero-based budget: every item justified from zero."],
            x: "A school department's budget has to justify every item under zero-based budgeting.",
            e: "Budgets motivate more when staff help to set them.",
            r: "Incremental · Flexible · Zero-based."
          }),
          S("B552", "5.5.2", "Variances", 2, "5.5 Budgets", {
            d: "A variance is the difference between the budgeted and actual figure.",
            k: ["Favourable (F): better for profit (costs lower or revenue higher than budget).", "Adverse (A): worse for profit.", "Calculate: actual − budget, then label F or A by its effect on profit.", "Interpret causes: prices, efficiency, demand, poor budgeting."],
            x: "A revenue budget of $50,000 against actual revenue of $46,000 gives a $4,000 adverse variance.",
            e: "A favourable cost variance may hide a problem (e.g. cheap, poor-quality materials).",
            r: "Label by the effect on profit, not by the sign."
          })
        ]
      },
      {
        id: "B6", code: "6", title: "Business & Its Environment (A Level)", spine: "ink", icon: "globe", paper: "A Level · P3 & P4",
        sections: [
          S("B611", "6.1.1", "Political & legal influences", 2, "6.1 External influences", {
            d: "Governments affect business through ownership changes (privatisation and nationalisation) and laws.",
            k: ["Privatisation: efficiency, competition and revenue for the government, but profit before service and job losses.", "Nationalisation: control of strategic industries and protected services, but inefficiency and costs to taxpayers.", "The law controls: employment practices, health and safety, minimum wages, marketing, competition, location, specific products.", "Changes in law mean compliance costs, but also opportunities."],
            x: "UK rail franchises have been moving back into public ownership (Great British Railways plans).",
            e: "Evaluate the impact on the case firm: costs now vs a level playing field and reputation.",
            r: "Privatise = private efficiency. Nationalise = public control."
          }),
          S("B612", "6.1.2", "Economic influences & government policy", 3, "6.1 External influences", {
            d: "The economy (growth, inflation, unemployment, exchange rates) and government policies affect demand, costs and decisions.",
            k: ["Government objectives: low unemployment, low inflation, economic growth.", "Government help: grants, training, infrastructure. Constraints: taxes, regulation. Market failure: externalities, public goods, monopoly.", "Monetary policy: interest rates. Fiscal policy: taxes and spending. Supply-side: training, deregulation. Exchange rate policy.", "Higher interest rates mean dearer loans and less consumer spending. A strong currency makes exports dearer and imports cheaper (SPICED: Strong Pound, Imports Cheap, Exports Dear)."],
            x: "When central banks raised interest rates in 2022–23, mortgage costs rose and spending on luxury goods fell.",
            e: "Impact depends on the firm: debt levels, whether its products are luxuries or necessities, and how much it exports or imports.",
            r: "Monetary = rates. Fiscal = tax & spend."
          }),
          S("B613", "6.1.3", "Social, demographic & CSR issues", 2, "6.1 External influences", {
            d: "Social trends, demographic change and expectations of corporate social responsibility (CSR) affect business decisions.",
            k: ["CSR issues: honest accounting practices, avoiding bribes for contracts, social auditing.", "Community needs and pressure groups (campaigns, boycotts).", "Demographic change: ageing populations, migration, urbanisation, at local, national and global level.", "Impacts: new markets (e.g. products for older people), labour shortages, changing tastes."],
            x: "Ageing populations in Japan have created big markets for healthcare and robotics.",
            e: "Weigh the costs of CSR against the brand and long-term benefits.",
            r: "Demographics = who buys and who works."
          }),
          S("B614", "6.1.4–6.1.5", "Technological change; competitors & suppliers", 1, "6.1 External influences", {
            d: "Technology changes products, processes and markets. Competitors and suppliers affect prices, costs and strategy.",
            k: ["Technology: automation, AI, e-commerce. Lower costs and new products, but high investment, retraining and quick obsolescence.", "Competitors: price wars, innovation pressure.", "Supplier power: prices, reliability and quality affect costs."],
            x: "Kodak failed to adapt to digital photography despite inventing the digital camera.",
            e: "Firms that adapt fastest win, and adapting needs finance and a suitable culture.",
            r: "Adapt or die (Kodak)."
          }),
          S("B616", "6.1.6", "International influences & multinationals", 2, "6.1 External influences", {
            d: "International trade links, trade agreements, technology and multinational companies (MNCs) shape business opportunities and threats.",
            k: ["Trade agreements cut tariffs and widen markets, but bring stronger foreign competition.", "Technology (e-commerce, logistics) makes international trade easier.", "MNCs bring jobs, investment, skills and taxes, but can repatriate profits, avoid tax, harm local firms and damage the environment.", "MNCs and governments negotiate tax incentives, regulation and influence."],
            x: "Global apparel makers source from Sri Lankan firms like MAS Holdings, bringing jobs and skills along with dependence on foreign buyers.",
            e: "Judge an MNC's net impact on a country: it depends on regulation and how much value stays local.",
            r: "MNC = investment vs influence."
          }),
          S("B617", "6.1.7", "Environmental influences & sustainability", 1, "6.1 External influences", {
            d: "Environmental issues (climate change, pollution, resource use) increasingly shape business behaviour and decisions.",
            k: ["Pressure from law, consumers, investors and pressure groups.", "Environmental audit: an independent check of a firm's environmental impact, used by the firm and its stakeholders.", "Sustainability: renewable energy, recycling, less packaging. Higher costs at first, but a better brand and efficiency over time."],
            x: "Unilever has set targets to cut plastic packaging across its brands.",
            e: "Is sustainability genuine, or just greenwashing? Check for independent audits.",
            r: "Green is a cost today and an advantage tomorrow."
          }),
          S("B621", "6.2.1", "Developing business strategy", 3, "6.2 Business strategy", {
            d: "Strategy is a long-term plan to achieve objectives. Strategic management involves analysis → choice → implementation.",
            k: ["SWOT: internal strengths and weaknesses, external opportunities and threats.", "PEST: Political, Economic, Social, Technological factors.", "Porter's five forces: rivalry, threat of new entrants, substitutes, buyer power, supplier power.", "Ansoff matrix: market penetration, product development, market development, diversification (riskiest).", "Blue ocean strategy: create new uncontested market space (Cirque du Soleil).", "Core competences, scenario planning, force field analysis (driving vs restraining forces), decision trees (expected value = probability × outcome)."],
            x: "Netflix moved from posting DVDs to streaming to making its own content, a run of Ansoff-style moves.",
            e: "Use one tool deeply, apply it to the case, and say what the analysis means for a decision.",
            r: "Analyse → Choose → Implement."
          }),
          S("B622", "6.2.2", "Corporate planning, culture & change", 2, "6.2 Business strategy", {
            d: "Corporate planning sets long-term direction. Culture, leadership and change management decide whether a strategy succeeds.",
            k: ["Corporate plan: objectives and strategies for the whole business over several years.", "Corporate culture: ‘the way we do things around here’, e.g. power, role, task or person cultures (Handy). It shapes decision-making.", "Transformational leadership inspires change through vision.", "Managing strategic change: communicate, involve staff, train, take small steps (Kotter's steps).", "Contingency planning: prepare for possible crises. Crisis management: respond quickly when one happens."],
            x: "Microsoft under Satya Nadella shifted to a ‘learn-it-all’ culture, which supported its move to cloud services.",
            e: "Strategy fails without matching culture: ‘culture eats strategy for breakfast’.",
            r: "Plan + Culture + Leadership + Change."
          })
        ]
      },
      {
        id: "B7", code: "7", title: "Human Resource Management (A Level)", spine: "maroon", icon: "people", paper: "A Level · P3 & P4",
        sections: [
          S("B711", "7.1.1–7.1.2", "Organisational structure: purpose & types", 2, "7.1 Organisational structure", {
            d: "Organisational structure is the formal arrangement of roles, responsibilities and communication. It should fit the business's objectives.",
            k: ["Attributes: flexible, meets the firm's needs, allows growth, encourages intrapreneurship.", "Functional (by department) · hierarchical, tall or flat · matrix (project teams across functions).", "Structured by product, function or geographical area.", "Structures change with growth, delayering and restructuring.", "Key terms: levels of hierarchy, chain of command, span of control, responsibility, authority, delegation, accountability, centralised, decentralised."],
            x: "Many tech start-ups use flat structures for speed, then add layers as they grow.",
            e: "Recommend a structure that suits the firm's size, product range and strategy.",
            r: "Tall = control. Flat = speed."
          }),
          S("B713", "7.1.3–7.1.4", "Delegation, accountability, control & trust", 1, "7.1 Organisational structure", {
            d: "Delegation passes authority down the hierarchy. Accountability stays with the manager. There's tension between control and trust.",
            k: ["Delegate authority, but the manager stays accountable.", "Wider spans of control mean fewer levels of hierarchy.", "Authority is the right to decide. Responsibility is the duty to complete the task.", "Too much control demotivates. Too much trust risks errors."],
            x: "A store manager lets team leaders set rotas (delegation) but answers to head office for results.",
            e: "Delegation works when staff are trained and trusted (Theory Y).",
            r: "You can delegate authority, but not accountability."
          }),
          S("B715", "7.1.5–7.1.6", "Centralisation, decentralisation; line & staff", 1, "7.1 Organisational structure", {
            d: "Centralised means decisions are made at the top. Decentralised means decisions are pushed down to branches or managers. Line managers have direct authority; staff functions advise.",
            k: ["Centralisation: consistency and control, but slow and remote from local needs.", "Decentralisation: local responsiveness and motivation, but inconsistency.", "Line = chain of command (production manager). Staff = specialist advice (HR, legal, IT).", "Conflict: specialists advising line managers who resist outside advice."],
            x: "McDonald's centralises its brand standards but decentralises some menu choices to local markets.",
            e: "Choose based on how much markets differ and the skill of local managers.",
            r: "Central = control. Decentral = local speed."
          }),
          S("B721", "7.2.1–7.2.3", "Business communication: purposes, methods, channels", 2, "7.2 Business communication", {
            d: "Communication is passing information between people. The method and channel chosen affect how effective it is.",
            k: ["It's essential in change, crises, instructions and motivation.", "Methods: spoken, written, electronic, visual, each with strengths and weaknesses.", "One-way (instructions) vs two-way (feedback). Vertical (up and down the hierarchy) vs horizontal (between peers).", "Channel problems: long chains distort messages, and there's information overload."],
            x: "Video calls in remote teams allow two-way communication but can cause meeting fatigue.",
            e: "Pick the method that suits the message (sensitive news should be face-to-face).",
            r: "Right message, right method, right people."
          }),
          S("B724", "7.2.4–7.2.5", "Barriers to communication & management's role", 1, "7.2 Business communication", {
            d: "Barriers stop messages being received or understood. Managers must remove them and use informal communication well.",
            k: ["Barriers: jargon, language, noise, long chains, attitudes and trust, information overload, the wrong medium.", "Overcome them with clear language, feedback, fewer layers and training.", "Informal communication (the grapevine) can spread rumours but also build team spirit.", "Good communication raises efficiency and cuts errors."],
            x: "A rumour about redundancies spreading before an official announcement shows the grapevine at work.",
            e: "Suggest specific improvements for the case, not generic ‘communicate better’.",
            r: "Barriers: People, Process, Physical."
          }),
          S("B731", "7.3.1–7.3.2", "Leadership & leadership theories", 2, "7.3 Leadership", {
            d: "Leadership is influencing and inspiring others towards goals. Different theories explain what makes leaders effective.",
            k: ["Roles: directors, managers, supervisors, worker representatives.", "Qualities: vision, communication, integrity, decisiveness, empathy.", "Trait theory: leaders are born with certain traits. Behavioural: leaders are defined by what they do. Contingency: the best style depends on the situation (Fiedler).", "Power and influence: legitimate, reward, coercive, expert and referent power. Transformational: inspires change through vision."],
            x: "Indra Nooyi at PepsiCo pushed towards healthier products, a transformational vision.",
            e: "Contingency theory is the most useful for evaluation: ‘it depends on…’.",
            r: "Trait · Behaviour · Contingency · Power · Transform."
          }),
          S("B733", "7.3.3", "Emotional intelligence (Goleman)", 1, "7.3 Leadership", {
            d: "Emotional intelligence (EQ) is the ability to understand and manage your own emotions and those of others.",
            k: ["Goleman's four competencies: self-awareness, self-management, social awareness, social skills (relationship management).", "High-EQ leaders motivate, handle conflict and lead change better."],
            x: "A manager who notices team stress and adjusts deadlines shows social awareness.",
            e: "EQ is hard to measure, but it predicts leadership success better than IQ alone.",
            r: "Self-aware · Self-manage · Social-aware · Social skills."
          }),
          S("B741", "7.4.1", "HRM strategy: hard vs soft, flexibility, performance, MBO, IT & AI", 3, "7.4 HRM strategy", {
            d: "HRM strategy is the long-term approach to managing people, from ‘hard’ (staff as a cost) to ‘soft’ (staff as an asset).",
            k: ["Hard HRM: short-term, cost-focused, top-down. Soft HRM: long-term, develops people, involves them.", "Flexible contracts: temporary, zero-hours, part-time, annualised hours, flexi-time, home working, shifts, job sharing, compressed hours, the gig economy. Flexible for the firm, but insecure for workers.", "Poor performance: measured through output, quality, absence and appraisal. Causes include poor motivation, training or management.", "Improving performance: training, appraisal, incentives, better job design.", "Management by Objectives (Drucker): agree objectives → review → reward. Clarity and motivation, but rigid and time-consuming.", "IT and AI in HRM: recruitment screening, data analytics, monitoring. Efficient, but raises bias and privacy concerns."],
            x: "Uber and Deliveroo riders in the gig economy have flexibility but few employment rights.",
            e: "Choose hard or soft HRM depending on the workforce and strategy (low-skill, high-turnover vs knowledge workers).",
            r: "Hard = cost. Soft = asset."
          })
        ]
      },
      {
        id: "B8", code: "8", title: "Marketing (A Level)", spine: "sky", icon: "chart", paper: "A Level · P3 & P4",
        sections: [
          S("B811", "8.1.1", "Elasticity of demand", 3, "8.1 Marketing analysis", {
            d: "Elasticity measures how responsive demand is to a change in price, income or promotion.",
            k: ["PED = % change in quantity demanded ÷ % change in price. Above 1 is elastic; below 1 is inelastic.", "YED = % change in Qd ÷ % change in income. Normal goods are positive, inferior goods negative, luxuries above 1.", "Promotional elasticity = % change in Qd ÷ % change in promotional spending.", "Inelastic demand: raise the price and revenue rises. Elastic demand: cut the price and revenue rises.", "Limitations: estimates go out of date, other factors change too, and data is hard to get."],
            x: "Petrol has inelastic demand, so governments can raise fuel taxes and still collect revenue.",
            e: "Calculate → interpret (elastic or inelastic) → recommend a pricing decision.",
            r: "PED below 1 means raise the price."
          }),
          S("B812", "8.1.2", "Product development & R&D", 1, "8.1 Marketing analysis", {
            d: "Product development is the process of creating new products. Research and development (R&D) drives innovation.",
            k: ["Process: idea → screening → concept testing → development → test marketing → launch.", "Sources of ideas: R&D, customers, staff, competitors, market research.", "R&D: competitive advantage and patents, but expensive and uncertain (most ideas fail)."],
            x: "Pharmaceutical firms spend years and billions on R&D for each successful drug.",
            e: "The value of R&D depends on the industry's speed of change and patent protection.",
            r: "Most new ideas fail, and that's the cost of innovation."
          }),
          S("B813", "8.1.3", "Sales forecasting & moving averages", 3, "8.1 Marketing analysis", {
            d: "Sales forecasting predicts future sales using quantitative methods (time series) and qualitative methods (judgement).",
            k: ["Why forecast: plan production, staffing, cash and inventory.", "Time series: work out the trend using a four-period centred moving average. Add 4 quarters → average; take the next 4 → average; centre the two averages.", "Seasonal variation = actual − trend. Use the average seasonal variation to forecast.", "Qualitative methods: expert opinion, Delphi, sales force views. Useful for new products.", "Limitations: past trends may not continue (shocks, new competitors)."],
            x: "Ice-cream sellers use seasonal variations to stock up for summer.",
            e: "Show the centring step clearly. A forecast is only a guide, so evaluate the assumptions.",
            r: "4-period total ÷ 4 → centre the pair."
          }),
          S("B821", "8.2.1–8.2.2", "Marketing planning & approaches to strategy", 2, "8.2 Marketing strategy", {
            d: "A marketing plan sets marketing objectives, resources, research and the mix. The strategy must be coordinated and consistent with the business.",
            k: ["Contents: objectives, budget and resources, market research, the marketing mix, timescales.", "Benefits: focus and coordination. Limitations: cost, can become rigid, depends on forecasts.", "Consistency: the strategy must fit the brand, product and market.", "Coordinated: all 4Ps aligned to a specific objective.", "IT and AI: data analytics, personalisation, chatbots, targeted ads. Privacy concerns."],
            x: "Spotify Wrapped uses data and AI to create shareable marketing every December.",
            e: "Link every element back to a specific objective in the case.",
            r: "Objective → Research → Mix → Budget → Review."
          }),
          S("B823", "8.2.3", "International marketing strategies", 2, "8.2 Marketing strategy", {
            d: "Firms expand into international markets, choosing between global standardisation and local adaptation, and choosing a method of entry.",
            k: ["Globalisation and trade blocs make it easier to reach new markets.", "Why go international: growth, spreading risk, saturated home market.", "Choose markets using research: size, growth, culture, political risk.", "Pan-global marketing (one global brand) vs local adaptation (‘glocalisation’).", "Entry methods: exporting, licensing, franchising, joint ventures, direct investment (more control but more risk)."],
            x: "McDonald's adapts menus locally (McAloo Tikki in India) while keeping global brand standards.",
            e: "Choose an entry method by balancing control, risk, cost and local knowledge.",
            r: "Think global, act local."
          })
        ]
      },
      {
        id: "B9", code: "9", title: "Operations Management (A Level)", spine: "teal", icon: "gear", paper: "A Level · P3 & P4",
        sections: [
          S("B911", "9.1.1", "Location decisions, offshoring & reshoring", 2, "9.1 Location & scale", {
            d: "Location affects costs, access to markets and quality. Firms choose and change locations at local, national or international level.",
            k: ["Quantitative factors: land, labour and transport costs, grants. Qualitative factors: quality of life, infrastructure, political stability.", "International factors: tariffs, exchange rates, culture, legal systems.", "Offshoring: moving operations abroad (lower costs). Reshoring: bringing them back (quality, control, supply risk).", "Globalisation widens the choice of locations."],
            x: "Dyson moved its headquarters to Singapore, closer to Asian manufacturing and markets.",
            e: "Weigh the cost savings against risks and reputation (ethics, quality).",
            r: "Cost vs Market vs Risk."
          }),
          S("B912", "9.1.2", "Scale: economies & diseconomies", 2, "9.1 Location & scale", {
            d: "Economies of scale lower unit costs as a firm grows. Diseconomies raise unit costs when a firm becomes too large.",
            k: ["Internal economies: purchasing (bulk buying), technical, financial, marketing, managerial.", "External economies: industry clusters, skilled labour, suppliers nearby.", "Diseconomies: communication, coordination and motivation problems.", "Unit costs fall, then rise beyond the optimum scale."],
            x: "Walmart's bulk purchasing gets it lower prices from suppliers.",
            e: "Growth doesn't automatically cut costs. Management has to control diseconomies.",
            r: "Bigger is cheaper, until it isn't."
          }),
          S("B921", "9.2.1–9.2.2", "Quality management & benchmarking", 2, "9.2 Quality management", {
            d: "Quality means meeting customer expectations (fit for purpose). Firms manage it through control, assurance, TQM and benchmarking.",
            k: ["Quality control: inspection at the end. Catches defects, but wasteful and blames workers.", "Quality assurance: quality built in at every stage, with standards such as ISO 9001.", "TQM: quality is everyone's job, aiming for zero defects. Needs culture change.", "Benchmarking: compare with the best firms and copy best practice."],
            x: "Toyota's ‘andon cord’ lets any worker stop the line to fix a fault: quality built in.",
            e: "TQM gives long-term gains but needs commitment and training.",
            r: "QC = inspect · QA = prevent · TQM = everyone."
          }),
          S("B931", "9.3.1–9.3.2", "Operational decisions, flexibility & innovation", 1, "9.3 Operations strategy", {
            d: "Operations decisions depend on human, marketing and finance resources. Flexibility and process innovation help a firm compete.",
            k: ["Resource availability limits which operations are possible.", "IT and AI in operations: automation, predictive maintenance, robotics.", "Flexibility in volume, delivery time and specification.", "Process innovation: new ways of producing or delivering (e.g. 3D printing, self-checkouts)."],
            x: "Zara's flexible supply chain gets new designs into stores in weeks.",
            e: "Flexibility costs money (spare capacity, skilled staff), so justify it with market needs.",
            r: "Volume · Delivery · Specification."
          }),
          S("B933", "9.3.3", "Enterprise resource planning (ERP)", 1, "9.3 Operations strategy", {
            d: "ERP is a single integrated software system linking all departments' data (inventory, finance, HR, sales).",
            k: ["Improves inventory control, costing and pricing, capacity utilisation, responses to change, workforce flexibility and management information.", "Drawbacks: expensive, complex to install, staff training, disruption during the switch."],
            x: "Companies such as Nestlé use SAP ERP systems to link global supply and finance data.",
            e: "ERP's value grows with the firm's size and complexity.",
            r: "One system, one source of truth."
          }),
          S("B934", "9.3.4", "Lean production", 2, "9.3 Operations strategy", {
            d: "Lean production minimises waste of time, materials and resources while keeping quality high.",
            k: ["Tools: Kaizen (continuous small improvements), quality circles, simultaneous engineering, cell production, JIT, waste management.", "Benefits: lower costs, better quality, faster product development.", "Limitations: needs a committed, trained workforce and reliable suppliers. Disruption risk.", "Links to inventory, quality, staff roles, capacity and efficiency."],
            x: "The Toyota Production System is the classic example of lean.",
            e: "Lean is a culture, not just a set of tools, so evaluate staff buy-in.",
            r: "Kaizen = small steps, every day."
          }),
          S("B935", "9.3.5", "Operations planning: network diagrams & CPA", 3, "9.3 Operations strategy", {
            d: "Critical path analysis (CPA) uses network diagrams to find the minimum project duration and the critical activities.",
            k: ["Elements: activities (arrows), nodes (circles: number, EST, LFT), dummy activities (show dependency only).", "EST (earliest start time): forward pass, take the LARGEST. LFT (latest finish time): backward pass, take the SMALLEST.", "Critical path: activities with zero float (where EST = LFT on both nodes).", "Total float = LFT − duration − EST. Free float = EST of the next activity − duration − EST of this one.", "Benefits: planning, resource scheduling, spotting delays. Limitations: depends on time estimates, complex for big projects, doesn't guarantee quality."],
            x: "Building a new store: the delay on the critical path (fitting out) delays the whole opening.",
            e: "Show the diagram and floats clearly, then interpret what delaying a critical activity would mean.",
            r: "Forward = max. Backward = min. Zero float = critical."
          })
        ]
      },
      {
        id: "B10", code: "10", title: "Finance & Accounting (A Level)", spine: "cream", icon: "calc", paper: "A Level · P3 & P4",
        sections: [
          S("B1011", "10.1.1", "Statement of profit or loss", 2, "10.1 Financial statements", {
            d: "Shows a business's revenue, costs and profit over a period (usually a year).",
            k: ["Revenue − cost of sales = gross profit.", "Gross profit − expenses = profit from operations (operating profit).", "− interest and tax = profit for the year.", "Profit for the year is split between dividends and retained earnings.", "Be ready to amend the statement for a given change (e.g. a 10% rise in costs)."],
            x: "If a café's flour costs rise, cost of sales rises, so gross profit falls even if revenue doesn't change.",
            e: "Show each line of working when amending. Interpret what caused the change.",
            r: "Revenue → GP → Operating profit → Profit for the year."
          }),
          S("B1012", "10.1.2", "Statement of financial position", 2, "10.1 Financial statements", {
            d: "A snapshot of what the business owns (assets) and owes (liabilities), and the owners' equity, at a point in time.",
            k: ["Non-current assets (property, machinery) + current assets (inventory, receivables, cash).", "Current liabilities (payables, overdraft, due within a year). Non-current liabilities (long-term loans).", "Net current assets = current assets − current liabilities (working capital).", "Net assets = total assets − total liabilities = equity (share capital + reserves).", "Link: retained profit from the profit or loss statement adds to reserves."],
            x: "Buying a machine with a bank loan raises non-current assets and non-current liabilities by the same amount.",
            e: "Always check it balances after you amend it.",
            r: "Assets − Liabilities = Equity."
          }),
          S("B1013", "10.1.3–10.1.4", "Inventory valuation & depreciation", 2, "10.1 Financial statements", {
            d: "Inventory is valued at the lower of cost and net realisable value. Depreciation spreads an asset's cost over its useful life.",
            k: ["It's hard to value inventory that is old, damaged or out of fashion.", "Net realisable value = expected selling price − costs of selling it.", "Straight-line depreciation = (cost − residual value) ÷ useful life (years).", "Depreciation is an expense in the profit or loss statement and reduces the asset's value in the statement of financial position."],
            x: "Example: a $50,000 van with $10,000 residual value over 4 years → $10,000 depreciation a year.",
            e: "Depreciation is NOT cash. It doesn't affect cash flow, only profit.",
            r: "(Cost − Residual) ÷ Life."
          }),
          S("B1021", "10.2.1", "Liquidity ratios", 2, "10.2 Ratio analysis", {
            d: "Liquidity is a firm's ability to pay its short-term debts.",
            k: ["Current ratio = current assets : current liabilities (around 1.5–2 is often seen as healthy).", "Acid test ratio = (current assets − inventory) : current liabilities (around 1 is often seen as healthy).", "Improve liquidity: sale and leaseback, cut inventory, chase receivables, long-term borrowing."],
            x: "Supermarkets often run low acid test ratios safely because they sell inventory for cash quickly.",
            e: "Compare with the industry and with earlier years. One number alone means little.",
            r: "Acid test = take inventory out."
          }),
          S("B1022", "10.2.2", "Profitability ratios", 2, "10.2 Ratio analysis", {
            d: "Profitability ratios show how well the business turns revenue and capital into profit.",
            k: ["Gross profit margin = (gross profit ÷ revenue) × 100.", "Operating profit margin = (profit from operations ÷ revenue) × 100.", "ROCE = (profit from operations ÷ capital employed) × 100, where capital employed = issued shares + reserves + non-current liabilities.", "Improve: raise prices, cut costs, sell more, sell unused assets."],
            x: "A luxury brand can have a high gross margin with low volume. A discounter has a low margin with high volume.",
            e: "Compare ROCE with the interest rate (is the business better than leaving money in a bank?).",
            r: "ROCE = operating profit ÷ capital employed."
          }),
          S("B1023", "10.2.3", "Financial efficiency ratios", 2, "10.2 Ratio analysis", {
            d: "These ratios show how efficiently the firm manages inventory, receivables and payables.",
            k: ["Rate of inventory turnover = cost of sales ÷ average inventory (times per year).", "Trade receivables turnover (days) = (trade receivables ÷ credit sales) × 365.", "Trade payables turnover (days) = (trade payables ÷ credit purchases) × 365.", "Aim: receivable days lower than payable days for healthy cash flow."],
            x: "A fashion retailer wants high inventory turnover so styles don't go out of date on the shelves.",
            e: "Explain the effect on cash flow and supplier relationships.",
            r: "Collect fast, pay (fairly) slow."
          }),
          S("B1024", "10.2.4–10.2.5", "Gearing & investment ratios", 2, "10.2 Ratio analysis", {
            d: "Gearing shows reliance on long-term debt. Investment ratios show the returns to shareholders.",
            k: ["Gearing = (non-current liabilities ÷ capital employed) × 100. Above 50% is high.", "High gearing: interest risk, but owners keep control. Reduce it by issuing shares or repaying loans.", "Dividend yield = (dividend per share ÷ market price per share) × 100.", "Dividend cover = profit for the year ÷ annual dividend.", "P/E ratio = market price per share ÷ earnings per share."],
            x: "When interest rates rise, highly geared firms see interest costs eat into their profits.",
            e: "Judge gearing against interest rates and how stable the firm's profits are.",
            r: "Gearing = NCL ÷ CE × 100."
          }),
          S("B1031", "10.3.1–10.3.2", "Investment appraisal: payback & ARR", 3, "10.3 Investment appraisal", {
            d: "Investment appraisal uses quantitative methods to judge whether an investment is worthwhile.",
            k: ["Payback period: the time to recover the initial cost from net cash flows. Months = (amount still needed ÷ next year's cash flow) × 12.", "ARR = (average annual profit ÷ average investment) × 100, where average profit = (total net cash flows − cost) ÷ years.", "Payback is simple and focuses on risk and cash, but ignores later cash flows and profitability.", "ARR shows profitability and is easy to compare, but ignores the timing of cash flows."],
            x: "A solar panel investment costing $40,000 with $10,000 a year of savings pays back in 4 years.",
            e: "Show the method. A quicker payback suits firms short of cash or facing uncertainty.",
            r: "Payback = how fast. ARR = how much."
          }),
          S("B1033", "10.3.3–10.3.4", "Net present value & investment decisions", 3, "10.3 Investment appraisal", {
            d: "NPV discounts future cash flows to present-day values to allow for the time value of money.",
            k: ["NPV = total of discounted cash flows − initial investment. Positive NPV means invest.", "Discounted value = cash flow × discount factor (given in the question).", "Strength: allows for the time value of money. Weakness: the discount rate is chosen by the firm, and it's complex.", "Qualitative factors: objectives, staff morale, environment, reputation, the economy, reliability of forecasts."],
            x: "A new factory with NPV of +$120,000 at 8% may still be rejected if it damages community relations.",
            e: "Always finish with qualitative factors and how reliable the forecasts are.",
            r: "NPV above 0 = go (usually)."
          }),
          S("B1041", "10.4.1–10.4.2", "Finance & accounting strategy", 2, "10.4 Finance strategy", {
            d: "Using financial statements and ratio analysis to make and judge strategic decisions.",
            k: ["Financial statements inform strategies such as growth, cost-cutting or raising finance.", "Annual report contents: chair's statement, accounts, notes, CSR report. Useful to shareholders, lenders, staff and government.", "Compare performance over time and against competitors.", "Debt vs equity changes gearing and ROCE. Higher dividends lower retained earnings. Growth affects liquidity.", "Limitations of published accounts: historical, window dressing, ignore qualitative factors, inflation."],
            x: "Raising finance through a share issue lowers gearing but may dilute earnings per share.",
            e: "Ratios raise questions, they don't answer them. Always ask WHY a ratio changed.",
            r: "Ratios are clues, not verdicts."
          })
        ]
      }
    ]
  };
})();

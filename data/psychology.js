/* Cambridge International AS & A Level Psychology 9990
   NOTE: the supplied PDF is the 2024–2026 syllabus. Check the 2027 version for changes.
   Specialist options chosen: Clinical + Health. */
(function () {
  const S = (id, code, title, w, n) => ({ id, code, title, w, n });
  window.SUBJECTS = window.SUBJECTS || {};
  window.SUBJECTS.psych = {
    key: "psych",
    name: "Psychology",
    code: "9990",
    crew: "Tony Tony Chopper",
    crewRole: "Doctor of the mind",
    exampleLabel: "Study",
    papers: [
      { p: "Paper 1", t: "Approaches, Issues & Debates", m: "60 marks · 1h30 · AS" },
      { p: "Paper 2", t: "Research Methods", m: "60 marks · 1h30 · AS" },
      { p: "Paper 3", t: "Specialist Options: Approaches, Issues & Debates", m: "60 marks · 1h30 · A Level" },
      { p: "Paper 4", t: "Specialist Options: Application & Research Methods", m: "60 marks · 1h30 · A Level" }
    ],
    method: "For every study: Aim → Method → Sample → Procedure → Results → Conclusion → Evaluation (GRAVE: Generalisability, Reliability, Application, Validity, Ethics)",
    books: [
      {
        id: "P1", code: "AS", title: "The Biological Approach", spine: "penguin", icon: "brain", paper: "Paper 1 & 2",
        sections: [
          S("P10", "Bio", "Assumptions of the biological approach", 1, {
            d: "Behaviour, thoughts and emotions can be explained by the brain, hormones, genetics and evolution.",
            k: ["People's similarities and differences come from biological factors interacting with other factors.", "Methods: brain scans (MRI), EEG, hormone manipulation, animal studies.", "Linked debates: nature vs nurture, use of animals."],
            x: "Dement & Kleitman (EEG), Hassett (hormones & evolution), Hölzel (MRI & brain change).",
            e: "Paper 1 often asks you to explain how a study fits the approach: quote the assumption, then link a specific detail from the study.",
            r: "Brain · Hormones · Genes · Evolution."
          }),
          S("P11", "Core study", "Dement & Kleitman (1957): sleep & dreams", 2, {
            d: "Investigated the relationship between rapid eye movement (REM) sleep and dreaming.",
            k: ["Sample: 9 adults (7 male, 2 female), 5 studied intensively. Lab study with EEG and EOG electrodes. No caffeine or alcohol on the day.", "Woken by a doorbell during REM or NREM and spoke into a recorder: dreaming? what about?", "H1: more dream recall in REM. H2: estimated dream length matches REM duration (woken after 5 or 15 min). H3: eye movement pattern matches dream content.", "Results: REM awakenings gave much higher dream recall (about 80%) than NREM (about 7%). Duration estimates were mostly correct. Vertical eye movements matched dreams of climbing ladders or looking up cliffs.", "REM came in cycles about every 90 minutes (an ultradian rhythm)."],
            x: "Conclusion: REM sleep is an objective indicator of dreaming.",
            e: "Evaluate: objective EEG data (reliable) and standardised procedure vs low ecological validity (wires, a lab, doorbell), small sample, and dream reports rely on memory.",
            r: "REM about 80% recall vs NREM about 7%."
          }),
          S("P12", "Core study", "Hassett et al. (2008): monkey toy preferences", 2, {
            d: "Tested whether sex differences in toy preference exist in rhesus monkeys (less socialised than children), suggesting a biological basis.",
            k: ["Rhesus monkeys living in a large social troop at a primate research centre.", "Given a wheeled ‘masculine’ toy (e.g. wagon, truck) and a plush ‘feminine’ toy (e.g. soft character) at the same time.", "Behaviour was observed and coded with a behavioural checklist (frequency and duration of interaction).", "Results: males strongly preferred wheeled toys. Females interacted with both types and showed no strong preference.", "This matched children's patterns from a previous study."],
            x: "Conclusion: sex-typed toy preferences can appear without human gender socialisation, which points to hormonal and biological influences.",
            e: "Evaluate: objective coding with inter-rater reliability, natural social group vs generalising from monkeys to humans, and the ethics of animal research (non-invasive here).",
            r: "Male monkeys picked wheels; females weren't fussy."
          }),
          S("P13", "Core study", "Hölzel et al. (2011): mindfulness & brain scans", 2, {
            d: "Investigated whether an 8-week mindfulness course (MBSR) changes grey matter density in the brain.",
            k: ["Longitudinal experiment: MRI scans before and after 8 weeks. MBSR group vs a waitlist control group.", "MBSR: weekly group sessions, a one-day retreat, and daily home practice (body scan, mindful yoga, sitting meditation).", "Self-report: Five Facet Mindfulness Questionnaire (FFMQ).", "Results: MBSR group showed increased grey matter density in the left hippocampus, posterior cingulate cortex, temporo-parietal junction and cerebellum. No change in controls.", "Mindfulness scores rose in the MBSR group."],
            x: "Conclusion: mindfulness practice is linked to brain changes in areas used for learning, memory, emotion regulation and perspective-taking.",
            e: "Evaluate: objective MRI data and a before-and-after design vs small volunteer sample, no random allocation, and self-report bias.",
            r: "8 weeks of mindfulness → more grey matter (hippocampus)."
          })
        ]
      },
      {
        id: "P2", code: "AS", title: "The Cognitive Approach", spine: "paper", icon: "eye", paper: "Paper 1 & 2",
        sections: [
          S("P20", "Cog", "Assumptions of the cognitive approach", 1, {
            d: "Information is processed in the same way in everyone (input → process → output), like a computer.",
            k: ["People differ in their cognitive processing (attention, memory, language, thinking).", "These processes help explain behaviour and emotion.", "Methods: lab experiments and standardised tasks."],
            x: "Andrade (attention), Baron-Cohen (theory of mind), Pozzulo (eyewitness memory).",
            e: "Link the study's task to a specific mental process (e.g. doodling → attention).",
            r: "Input → Process → Output."
          }),
          S("P21", "Core study", "Andrade (2010): doodling", 2, {
            d: "Tested whether doodling while listening to a dull message improves concentration and recall.",
            k: ["Lab experiment, independent measures. 40 participants from a research panel (20 per group).", "Participants heard a monotone 2.5-minute phone message about a party, with names and places.", "Doodling group shaded printed shapes. Control group just listened. Both wrote down party-goers' names.", "Surprise memory test afterwards for names AND places.", "Results: doodlers recalled about 29% more information than controls."],
            x: "Conclusion: doodling may reduce daydreaming and help attention on boring tasks.",
            e: "Evaluate: high control and standardisation vs shading shapes isn't natural doodling, mild deception (surprise test), and participant variables in independent measures.",
            r: "Doodle → 29% more recall."
          }),
          S("P22", "Core study", "Baron-Cohen et al. (2001): eyes test", 2, {
            d: "Revised the ‘Reading the Mind in the Eyes’ Test and tested theory of mind in adults with Asperger syndrome or high-functioning autism.",
            k: ["Groups: adults with AS/HFA, general population adults, students, and an IQ-matched control group.", "36 photos of the eye region, each with 4 mental-state words (1 correct, 3 distractors), plus a glossary.", "Also measured the Autism-Spectrum Quotient (AQ).", "Results: the AS/HFA group scored significantly lower (mean about 21.9/36) than the other groups (about 26–31). Higher AQ was linked to lower eyes test scores.", "Correlation and quasi-experiment."],
            x: "Conclusion: the revised test detects subtle theory of mind differences, which are lower in AS/HFA.",
            e: "Evaluate: standardised, quantitative and reliable vs low ecological validity (static black-and-white eyes) and a small, volunteer AS sample.",
            r: "36 eyes · 4 words · AS group lowest."
          }),
          S("P23", "Core study", "Pozzulo et al. (2011): line-ups", 2, {
            d: "Investigated why young children make more false positive identifications in target-absent line-ups than adults.",
            k: ["Lab experiment comparing young children (about 4–6 years) and adults.", "Participants saw target faces (cartoon characters and humans), then picked from line-ups where the target was present or absent.", "They were also interviewed and questioned about their choices.", "Results: children made more false positives (picking someone when the target wasn't there), even for familiar cartoon faces.", "Children often seemed to feel they had to choose someone."],
            x: "Conclusion: children's errors aren't just poor memory. Social demand (feeling they must pick) plays a part, which matters for eyewitness procedures.",
            e: "Evaluate: controlled comparison vs artificial task (no real crime or stress), and the ethics of using children.",
            r: "Target-absent line-ups: children pick anyway."
          })
        ]
      },
      {
        id: "P3", code: "AS", title: "The Learning Approach", spine: "orange", icon: "bell", paper: "Paper 1 & 2",
        sections: [
          S("P30", "Learn", "Assumptions of the learning approach", 1, {
            d: "We start life as a blank slate. Experience and environment shape observable behaviour.",
            k: ["Learning happens through classical conditioning (association), operant conditioning (reinforcement and punishment) and social learning (observation and imitation).", "Stimulus → response model.", "Focuses on measurable behaviour."],
            x: "Bandura (social learning), Fagen (operant), Saavedra & Silverman (classical conditioning and evaluative learning).",
            e: "Name the exact type of learning in each study.",
            r: "Classical = association. Operant = consequence. Social = observation."
          }),
          S("P31", "Core study", "Bandura et al. (1961): aggression", 2, {
            d: "Tested whether children imitate aggression they see an adult model perform, even when the model is no longer there.",
            k: ["72 children (36 boys, 36 girls), aged about 3–6, from Stanford University Nursery School. Matched on prior aggression ratings.", "Conditions: aggressive model, non-aggressive model, or control. Same-sex vs opposite-sex model.", "Stage 1: the aggressive model hit a Bobo doll with distinctive acts and words. Stage 2: mild frustration (toys taken away). Stage 3: 20 minutes of free play, observed through a one-way mirror.", "Results: children who saw the aggressive model copied more physical and verbal aggression. Boys showed more physical aggression. Same-sex models had more influence, and the male model had the most."],
            x: "Conclusion: aggression can be learned by observation (social learning theory).",
            e: "Evaluate: matched pairs and inter-rater reliability vs the Bobo doll invites hitting (low validity), and ethical concerns about teaching children aggression.",
            r: "See it → do it (especially same-sex models)."
          }),
          S("P32", "Core study", "Fagen et al. (2014): elephant learning", 2, {
            d: "Tested positive reinforcement training (PRT) to teach working elephants in Nepal the trunk wash (used for TB testing).",
            k: ["5 young working elephants and their handlers (mahouts).", "A whistle (secondary reinforcer) was paired with food treats (primary reinforcer), then shaping and behavioural chaining built the full trunk-wash sequence.", "Observation with a behavioural checklist measured success at each step.", "Results: most of the elephants (4 of 5) learned the full trunk wash within the study period."],
            x: "Conclusion: positive reinforcement is a humane, effective alternative to traditional dominance-based methods.",
            e: "Evaluate: real-world setting (ecological validity), improves animal welfare vs tiny sample and hard to generalise to other species or settings.",
            r: "Whistle + treat → shaping → chain."
          }),
          S("P33", "Core study", "Saavedra & Silverman (2002): button phobia", 2, {
            d: "A case study of a 9-year-old boy's button phobia, testing whether treating disgust as well as fear helps.",
            k: ["The phobia began at age 5 after he knocked over a bowl of buttons at school. He felt disgust as well as fear.", "Treatment 1: exposure with a fear hierarchy and rewards (operant). Fear dropped, but disgust remained.", "Treatment 2: disgust imagery exposure plus self-control statements (evaluative learning).", "Measures: distress ratings (a ‘feelings thermometer’), diagnostic interviews with the boy and his mother.", "Results: distress fell, and by the follow-ups he no longer met the criteria for phobia."],
            x: "Conclusion: phobias can be learned through classical conditioning and evaluative learning (disgust). Treatment works better when it targets disgust as well as fear.",
            e: "Evaluate: rich, detailed idiographic data vs one child (can't generalise), subjective self-report, and possible researcher bias.",
            r: "Buttons = fear + disgust, so treat both."
          })
        ]
      },
      {
        id: "P4", code: "AS", title: "The Social Approach", spine: "crimson", icon: "people", paper: "Paper 1 & 2",
        sections: [
          S("P40", "Social", "Assumptions of the social approach", 1, {
            d: "Behaviour, thoughts and emotions are influenced by social context, environment and groups.",
            k: ["The actual, implied or imagined presence of others changes how we behave.", "Situational explanations are often emphasised.", "Methods: field experiments, lab obedience studies, observations."],
            x: "Milgram (authority), Perry (personal space & oxytocin), Piliavin (bystanders).",
            e: "Link each study to a situational factor in the setting.",
            r: "Other people change us."
          }),
          S("P41", "Core study", "Milgram (1963): obedience", 2, {
            d: "Investigated how far people would obey an authority figure who told them to harm someone.",
            k: ["40 men aged 20–50 from New Haven, recruited through a newspaper advert (volunteer sample), paid $4.50.", "Yale lab. A rigged draw made the participant the ‘teacher’. The ‘learner’ (a confederate) got fake shocks from 15V to 450V for wrong answers.", "The learner pounded on the wall at 300V, then went silent. Four standard prods were used (‘The experiment requires that you continue…’).", "Results: 100% went to 300V. 65% (26 of 40) went to 450V. Many showed extreme tension (sweating, nervous laughter, seizures).", "Students had predicted only about 1–3% would go all the way."],
            x: "Conclusion: ordinary people will obey destructive orders in certain situations (a situational explanation).",
            e: "Evaluate: standardised and controlled vs deception, distress and pressure not to withdraw (ethics). Sample of American men only. Debriefed afterwards.",
            r: "65% to 450V."
          }),
          S("P42", "Core study", "Perry et al. (2015): personal space", 2, {
            d: "Investigated how oxytocin and empathy affect interpersonal distance (personal space).",
            k: ["Male participants. Double-blind, placebo-controlled, repeated measures (oxytocin vs placebo nasal spray on separate occasions).", "Empathy measured with the Interpersonal Reactivity Index (high vs low empathy groups).", "Experiment 1: the computerised Comfortable Interpersonal Distance scale (stop a figure approaching). Experiment 2: choosing between pictures of rooms with different seating distances.", "Results: under oxytocin, high-empathy people preferred to be CLOSER to others, while low-empathy people preferred MORE distance."],
            x: "Conclusion: oxytocin's social effects depend on individual differences in empathy.",
            e: "Evaluate: double-blind and placebo controls (high validity) vs artificial computer tasks and an all-male sample.",
            r: "Oxytocin + high empathy = closer."
          }),
          S("P43", "Core study", "Piliavin et al. (1969): subway Samaritans", 2, {
            d: "Field experiment testing helping behaviour (bystander apathy) on the New York subway.",
            k: ["About 4,450 passengers on a 7.5-minute non-stop stretch of the subway. Teams of 4 students: victim, model and 2 observers.", "The victim collapsed: either ‘drunk’ (smelled of alcohol, carried a bottle) or ‘ill’ (carried a cane). Victims were black or white.", "Results: the cane victim got help in about 95% of trials, the drunk victim in about 50%. Help was usually fast and from men.", "No diffusion of responsibility: larger groups didn't help less.", "Explained by the arousal: cost–reward model."],
            x: "Conclusion: helping depends on the costs and rewards of helping (helping a drunk person costs more).",
            e: "Evaluate: high ecological validity and a large sample vs no consent, deception, no debrief and possible distress.",
            r: "Cane about 95%, drunk about 50%."
          })
        ]
      },
      {
        id: "P5", code: "AS", title: "Research Methods", spine: "tan", icon: "flask", paper: "Paper 2",
        sections: [
          S("P51", "RM", "Experiments: lab & field, experimental designs", 2, {
            d: "An experiment manipulates an independent variable (IV) to measure its effect on a dependent variable (DV) while controlling other variables.",
            k: ["Laboratory: controlled, reliable, shows cause and effect, but artificial (low ecological validity) and demand characteristics.", "Field: natural setting (higher validity), but less control and ethical issues with consent.", "Independent measures: different people in each condition. No order effects, but participant variables.", "Repeated measures: same people in all conditions. No participant variables, but order effects (fatigue, practice), handled by counterbalancing.", "Matched pairs: matched on a key variable. Takes time.", "Random allocation, experimental vs control groups or conditions."],
            x: "Andrade = lab, independent measures. Piliavin = field.",
            e: "Paper 2 scenarios: identify the design, then give ONE strength and ONE weakness linked to that study.",
            r: "IM, RM, MP: know a weakness of each."
          }),
          S("P52", "RM", "Self-reports: questionnaires & interviews", 2, {
            d: "Self-reports ask participants about their own thoughts, feelings and behaviour.",
            k: ["Questionnaires: paper and pencil or online, with open or closed questions. Quick and large samples, but social desirability bias.", "Interviews: structured (fixed questions, reliable), unstructured (flexible, in-depth), semi-structured (mix). Face-to-face or telephone.", "Closed questions give quantitative data. Open questions give qualitative data."],
            x: "Baron-Cohen used an online questionnaire. Saavedra & Silverman used diagnostic interviews.",
            e: "Social desirability and leading questions are the go-to weaknesses. Anonymity is the fix.",
            r: "Structured = reliable. Unstructured = rich."
          }),
          S("P53", "RM", "Case studies, observations, correlations & longitudinal studies", 2, {
            d: "Other research methods: in-depth single cases, watching behaviour, measuring relationships, and studying people over time.",
            k: ["Case study: one person or unit studied in depth with several techniques. Rich, but can't generalise.", "Observations: overt or covert, participant or non-participant, structured (behavioural categories) or unstructured, naturalistic or controlled.", "Correlation: a positive or negative relationship between two co-variables, and its strength. NO causation.", "Longitudinal: the same participants over time. Shows change and development, but attrition, time and cost."],
            x: "Saavedra (case study), Hassett (structured observation), Hölzel (longitudinal), Baron-Cohen (correlation).",
            e: "Always say ‘correlation does not show cause and effect’ when evaluating correlations.",
            r: "Case = depth. Correlation ≠ cause."
          }),
          S("P54", "RM", "Aims, hypotheses, variables & controls", 2, {
            d: "The building blocks of research design.",
            k: ["Aim: what the study sets out to investigate.", "Null hypothesis: no difference or relationship. Alternative: there is one. Directional (one-tailed) predicts the direction; non-directional (two-tailed) doesn't.", "IV = manipulated. DV = measured. Operationalise both precisely (e.g. ‘number of names recalled out of 16’).", "Controls and standardisation remove uncontrolled, participant and situational variables."],
            x: "Andrade: IV = doodling or not. DV = number of names and places recalled.",
            e: "Write operationalised hypotheses in full: ‘Participants who doodle will recall more names…’",
            r: "Operationalise = make it measurable."
          }),
          S("P55", "RM", "Data types, sampling & data analysis", 2, {
            d: "How data is collected and described: data types, sampling techniques and descriptive statistics.",
            k: ["Quantitative (numbers) vs qualitative (words). Objective vs subjective.", "Sampling: opportunity (easy, biased), random (everyone has an equal chance, representative but hard to do), volunteer (self-selecting, keen people, biased).", "Central tendency: mode, median, mean. Spread: range, standard deviation (how spread out scores are around the mean).", "Graphs: bar chart (separate categories), histogram (continuous data), scatter graph (correlations).", "No calculations of statistical tests are needed."],
            x: "Milgram used a volunteer sample. Piliavin used an opportunity sample of passengers.",
            e: "Always link sampling to generalisability.",
            r: "Bar = categories. Histogram = continuous. Scatter = correlation."
          }),
          S("P56", "RM", "Ethics: humans & animals", 2, {
            d: "Ethical guidelines protect the wellbeing and rights of research participants.",
            k: ["Humans: minimise harm (and maximise benefit), valid and informed consent, right to withdraw, no deception, confidentiality, privacy, debriefing.", "Animals: minimise harm, replacement (use alternatives where possible), species choice, smallest numbers, procedures (pain, suffering and distress; housing; reward, deprivation and aversive stimuli).", "Evaluate studies against each guideline."],
            x: "Milgram broke the right to withdraw and the no-deception guideline. Fagen improved animal welfare.",
            e: "Name the guideline, give the evidence from the study, then say whether it was justified.",
            r: "Harm · Consent · Withdraw · Deception · Confidential · Privacy · Debrief."
          }),
          S("P57", "RM", "Validity, reliability & replicability", 2, {
            d: "Validity: does the study measure what it claims to? Reliability: is it consistent?",
            k: ["Validity issues: ecological validity, subjectivity vs objectivity, demand characteristics, generalisability.", "Reliability: inter-rater or inter-observer (observers agree), test–retest (same results when repeated).", "Replicability: a standardised procedure lets others repeat the study.", "Improve reliability with standardisation, training observers and behavioural categories."],
            x: "Bandura checked inter-rater reliability. Dement & Kleitman's lab setting reduces ecological validity.",
            e: "Don't confuse the two: reliable = consistent, valid = accurate.",
            r: "Reliable = same again. Valid = true."
          }),
          S("P58", "RM", "Planning a study (Paper 2, Section B)", 3, {
            d: "Paper 2 Section B asks you to plan an investigation using a given method and to evaluate your own plan.",
            k: ["General features: procedure, how the plan makes it valid and reliable, types of data.", "Experiment: IV, DV, controls, design, location (field experiments). Questionnaire: question format, example questions, scoring. Interview: format, technique.", "Observation: overt or covert, participant or not, naturalistic or controlled, behavioural categories. Correlation: two co-variables and how each is measured, scatter graph.", "Longitudinal: tests or tasks, frequency, re-contacting participants.", "You don't need aims, hypotheses, sample or ethics in a Paper 2 plan (Paper 4 does need them)."],
            x: "Example: plan a field experiment on whether music affects time spent shopping, including the IV, DV, controls and design.",
            e: "Write the plan in enough detail that someone else could replicate it exactly.",
            r: "Replicable detail = marks."
          })
        ]
      },
      {
        id: "P6", code: "AS+A", title: "Issues & Debates", spine: "sky", icon: "scales", paper: "Papers 1–4",
        sections: [
          S("P61", "I&D", "AS issues & debates", 2, {
            d: "Recurring issues and debates used to evaluate every core study.",
            k: ["Application to everyday life: how the findings can be used (e.g. Pozzulo → line-up procedures).", "Individual vs situational explanations: personality vs circumstances (Milgram = situational).", "Nature vs nurture: biology vs environment (Hassett = nature, Bandura = nurture).", "Use of children in research: consent from parents, protection from distress (Bandura, Pozzulo).", "Use of animals: ethics and generalisation (Hassett, Fagen)."],
            x: "Perry shows nature (oxytocin) interacting with individual differences (empathy).",
            e: "Paper 1 Section B: compare two studies on one debate, with evidence from both.",
            r: "Application · Ind/Sit · Nature/Nurture · Children · Animals."
          }),
          S("P62", "I&D", "A Level issues & debates", 2, {
            d: "At A Level you add four more debates to evaluate the specialist options.",
            k: ["Cultural differences: do findings generalise across cultures?", "Reductionism vs holism: breaking behaviour into simple parts (e.g. dopamine) vs the whole person.", "Determinism vs free will: is behaviour caused by forces we can't control?", "Idiographic vs nomothetic: studying unique individuals vs general laws for groups."],
            x: "The dopamine hypothesis of schizophrenia is reductionist and deterministic. Case studies are idiographic.",
            e: "Paper 3 part (b) evaluation often hangs on one debate. Plan 2–3 debates for each topic.",
            r: "Culture · Reduce/Holism · Determinism/Free will · Idio/Nomo."
          })
        ]
      },
      {
        id: "P7", code: "A", title: "A Level Methodology", spine: "ink", icon: "flask", paper: "Papers 3 & 4",
        sections: [
          S("P71", "A RM", "RCTs, postal questionnaires, rating scales", 1, {
            d: "Research methods used in the A Level studies.",
            k: ["Randomised controlled trial (RCT): random allocation to treatment vs control (or placebo). The gold standard for treatment studies.", "Postal questionnaires: reach large, spread-out samples, but low response rates.", "Rating scales (e.g. 1–10, Likert): quantitative, but people interpret them differently.", "Forced or fixed choice: the participant must choose an option, which is easy to analyse but may not reflect their true view."],
            x: "Lovell et al. (2006) is an RCT comparing telephone and face-to-face CBT.",
            e: "For treatment studies, always ask whether the allocation was random and whether there was a control.",
            r: "RCT = random + control."
          }),
          S("P72", "A RM", "Psychometrics, hypotheses & temporal validity", 1, {
            d: "Concepts relevant to all the A Level specialist options.",
            k: ["Psychometric tests: standardised measures of mental traits (e.g. BDI, Y-BOCS, McGill). Objective and quantitative, but culturally biased and open to social desirability.", "Write null and alternative (one- or two-tailed) hypotheses for Paper 4 plans.", "Temporal validity: do the findings still hold today? (e.g. 1950s studies of fear arousal)."],
            x: "Janis & Feshbach (1953) may lack temporal validity for today's health campaigns.",
            e: "Use temporal validity to evaluate older key studies.",
            r: "Psychometric = standardised mental measure."
          }),
          S("P73", "A RM", "Planning a study (Paper 4, Section B)", 2, {
            d: "Paper 4 Section B asks you to plan a study (10 marks) and then answer questions evaluating your plan (14 marks).",
            k: ["General features: aim and hypotheses, procedure, sample and sampling technique, ethics, validity, reliability, data type, analysis and descriptive statistics.", "Specific features of the chosen method, in enough detail to replicate.", "Then evaluate your own plan: strengths and weaknesses of your choices."],
            x: "Example: plan an RCT testing whether a mindfulness app reduces exam stress (salivary cortisol + self-report).",
            e: "Use a fixed checklist every time so nothing is forgotten.",
            r: "Aim · Hypothesis · Sample · Procedure · Ethics · Validity · Reliability · Data."
          })
        ]
      },
      {
        id: "P8", code: "Clinical", title: "Schizophrenia", spine: "maroon", icon: "mask", paper: "Papers 3 & 4 · Clinical",
        sections: [
          S("P811", "1.1.1", "Diagnosis of schizophrenia & Freeman et al. (2003)", 2, {
            d: "Schizophrenia (ICD-11) is a severe mental disorder involving disturbances of thought, perception, self-experience, cognition and behaviour.",
            k: ["ICD-11: at least two symptoms for at least 1 month, at least one being a core symptom (persistent delusions, persistent hallucinations, thought disorder, or experiences of influence, passivity or control).", "Positive symptoms (additions): hallucinations, delusions. Negative symptoms (losses): flat affect, avolition, alogia, social withdrawal.", "Types of delusion: persecutory, grandiose, of reference, of control.", "Key study, Freeman et al. (2003): non-clinical participants explored a virtual reality library with neutral avatars. Some interpreted the avatars' behaviour as hostile (persecutory thoughts), and this was linked to higher paranoia questionnaire scores."],
            x: "Freeman et al. (2003) shows VR can study persecutory ideation safely, and that paranoia exists on a continuum in the general population.",
            e: "Evaluate Freeman: controlled, neutral stimulus with standardised avatars vs a non-clinical sample and VR not being real life.",
            r: "Positive = extra. Negative = missing."
          }),
          S("P812", "1.1.2", "Explanations of schizophrenia", 2, {
            d: "Biological explanations (genes, dopamine) and psychological (cognitive) explanations of schizophrenia.",
            k: ["Genetic: family and twin studies. Concordance is much higher in MZ (identical) twins than DZ twins (Gottesman), and risk rises with genetic closeness.", "Dopamine hypothesis: excess dopamine activity (D2 receptors) in the mesolimbic pathway causes positive symptoms. Supported by amphetamines worsening symptoms and antipsychotics reducing them.", "Cognitive: faulty information processing, e.g. failure to monitor one's own inner speech so it is heard as external voices (Frith). Biased thinking maintains delusions."],
            x: "MZ concordance is never 100%, so environment must also play a part (diathesis–stress).",
            e: "Evaluate using debates: reductionist and deterministic (biological) vs the more holistic cognitive model. Nature vs nurture.",
            r: "Genes + Dopamine + Faulty thinking."
          }),
          S("P813", "1.1.3", "Treatment & management of schizophrenia", 2, {
            d: "Biological treatments (drugs, ECT) and psychological therapy (CBT).",
            k: ["Typical antipsychotics (e.g. chlorpromazine) block D2 dopamine receptors. They reduce positive symptoms but can cause side effects such as tardive dyskinesia.", "Atypical antipsychotics (e.g. clozapine, risperidone) act on dopamine and serotonin, with fewer motor side effects (but weight gain).", "ECT: electric current induces a seizure under anaesthetic. Used for catatonia or treatment-resistant cases.", "CBT: challenge delusional beliefs, normalise and cope with voices. Sensky et al. (2000): CBT vs befriending for drug-resistant patients. Both improved at first, but only CBT kept improving at follow-up."],
            x: "Sensky et al. (2000): CBT's benefits lasted longer than befriending.",
            e: "Compare drugs (fast, help many) with CBT (lasting, but needs insight and motivation). Ethics of ECT.",
            r: "Drugs manage. CBT helps them cope."
          })
        ]
      },
      {
        id: "P9", code: "Clinical", title: "Mood Disorders", spine: "teal", icon: "wave", paper: "Papers 3 & 4 · Clinical",
        sections: [
          S("P921", "1.2.1", "Diagnosis of depression & bipolar; Beck Depression Inventory", 2, {
            d: "Mood (affective) disorders: depressive disorder (unipolar) and bipolar disorder (episodes of mania and depression).",
            k: ["Depressive episode (ICD-11): depressed mood or loss of interest most of the day, nearly every day, for at least 2 weeks, plus symptoms such as poor concentration, worthlessness or guilt, hopelessness, thoughts of death, sleep and appetite changes, and fatigue.", "Bipolar type I: at least one manic or mixed episode (euphoria or irritability, more energy, racing thoughts, less need for sleep, impulsivity). Type II: hypomanic plus depressive episodes.", "Beck Depression Inventory (BDI-II): 21 items scored 0–3 (total 0–63). Higher scores mean more severe depression."],
            x: "The BDI is a quick psychometric self-report, useful for tracking change during therapy.",
            e: "Evaluate the BDI: standardised and reliable vs social desirability and cultural differences in how symptoms are expressed.",
            r: "2 weeks for depression · mania = up, up, up."
          }),
          S("P922", "1.2.2", "Explanations of depression (incl. Oruč et al. 1997)", 2, {
            d: "Biological (biochemical, genetic) and psychological (Beck, learned helplessness) explanations of mood disorders.",
            k: ["Biochemical: low monoamines (serotonin, noradrenaline). The monoamine hypothesis.", "Genetic, key study Oruč et al. (1997): DNA from bipolar patients and healthy controls in Croatia was compared for serotonin-related genes (5-HT2C receptor, 5-HT transporter). There was no strong overall link, but a possible link with the 5-HT2C variant in females.", "Beck's cognitive theory: the negative triad (self, world, future), negative schemas and cognitive errors (overgeneralising, magnifying).", "Learned helplessness and attributional style: internal, stable, global explanations of failure. Seligman et al. (1988): as depression lifted during therapy, pessimistic style improved; those who stayed pessimistic were more likely to relapse."],
            x: "Oruč et al. (1997) is an association study: blood samples → DNA → comparing gene variants in patients and controls.",
            e: "Combine explanations into a diathesis–stress view. Evaluate the biological side as reductionist and the cognitive side as blaming the person.",
            r: "Serotonin · Genes · Negative triad · Helplessness."
          }),
          S("P923", "1.2.3", "Treatment of mood disorders", 2, {
            d: "Biological drug treatments and psychological therapies for depression.",
            k: ["Tricyclics block reuptake of noradrenaline and serotonin, with more side effects (dry mouth, drowsiness).", "MAOIs inhibit the enzyme that breaks down monoamines. They need dietary restrictions (tyramine).", "SSRIs (e.g. fluoxetine) block serotonin reuptake, have fewer side effects, and take 2–4 weeks to work.", "Beck's cognitive restructuring: identify automatic negative thoughts, test them against evidence, replace them. Uses homework.", "Ellis's REBT, ABC model: Activating event → Belief → Consequence, then Dispute irrational ‘musts’ (logically, empirically, pragmatically) → Effective new belief."],
            x: "Combining SSRIs with CBT is often recommended for moderate to severe depression.",
            e: "Drugs treat symptoms quickly. Therapy targets causes and lowers relapse. Compare them using the debates.",
            r: "TCA · MAOI · SSRI | Beck · Ellis ABCDE."
          })
        ]
      },
      {
        id: "P10", code: "Clinical", title: "Impulse Control Disorders", spine: "olive", icon: "fire", paper: "Papers 3 & 4 · Clinical",
        sections: [
          S("P1031", "1.3.1", "Diagnosis: kleptomania, pyromania, gambling; K-SAS", 2, {
            d: "Impulse control disorders involve repeatedly failing to resist an urge to do something harmful.",
            k: ["Kleptomania: repeated failure to resist urges to steal objects not needed for personal use or money. Tension before, relief or pleasure after.", "Pyromania: repeated deliberate fire-setting with no obvious motive. Fascination with fire, tension then relief.", "Gambling disorder: impaired control over gambling, gambling taking priority, and continuing despite harm, usually for at least 12 months.", "K-SAS (Kleptomania Symptom Assessment Scale): an 11-item self-report of urges, thoughts, behaviour and distress over the past week."],
            x: "The K-SAS gives a severity score that can track change during treatment.",
            e: "Evaluate self-report scales: quick and quantitative vs shame or lying about stealing.",
            r: "Urge → act → relief."
          }),
          S("P1032", "1.3.2", "Explanations of impulse control disorders", 2, {
            d: "Biological (dopamine) and psychological (behavioural, cognitive) explanations.",
            k: ["Dopamine: the brain's reward system. The thrill or win releases dopamine, which reinforces the behaviour.", "Behavioural, positive reinforcement: rewards (a win, the thrill) strengthen the behaviour. Gambling uses a variable-ratio schedule, which is very resistant to extinction.", "Cognitive, Miller's feeling-state theory: an intense positive feeling becomes fixed to the behaviour (a ‘feeling-state’), and the person repeats the behaviour to feel it again."],
            x: "Slot machines reward unpredictably (variable ratio), the most addictive schedule.",
            e: "Biological = reductionist and deterministic. Behavioural ignores thoughts. Miller is hard to test scientifically.",
            r: "Dopamine · Reinforcement · Feeling-state."
          }),
          S("P1033", "1.3.3", "Treatment (incl. Grant et al. 2008)", 2, {
            d: "Biological (drug) and psychological (cognitive-behavioural) treatments for impulse control disorders.",
            k: ["Key study, Grant et al. (2008): pooled data from double-blind trials of opioid antagonists (naltrexone, nalmefene) vs placebo for pathological gambling. People with a family history of alcoholism responded better to the drugs. Placebo response was high, especially early on.", "Covert sensitisation: imagine the impulsive act paired with something unpleasant (e.g. being caught, nausea). Glover (1985): a woman with long-term kleptomania improved and didn't relapse.", "Imaginal desensitisation: relax, then imagine the trigger situation without acting on it, which reduces the urge (e.g. Blaszczynski & Nower)."],
            x: "Grant et al. (2008) suggests drugs suit some people with gambling disorder better than others.",
            e: "Evaluate: drug trials are double-blind and controlled, but the high placebo response is a problem. Imagery therapies are cheap, but rely on imagination and on case studies.",
            r: "Opioid blockers · Covert sensitisation · Imaginal desensitisation."
          })
        ]
      },
      {
        id: "P11", code: "Clinical", title: "Anxiety & Fear-Related Disorders", spine: "paper", icon: "bolt", paper: "Papers 3 & 4 · Clinical",
        sections: [
          S("P1141", "1.4.1", "Diagnosis: GAD, agoraphobia, blood-injection-injury phobia", 2, {
            d: "Anxiety disorders involve excessive worry or fear that causes distress and avoidance.",
            k: ["Generalised anxiety disorder (GAD): anxiety on most days for at least several months, general apprehension or excessive worry about many things, plus muscle tension, restlessness and poor sleep.", "Agoraphobia: fear of situations where escape is hard or help unavailable (crowds, public transport, being outside alone), leading to avoidance.", "Specific phobia, blood-injection-injury (BII): fear of blood, needles or injury, often causing fainting (a vasovagal drop in blood pressure).", "Measures: GAD-7 (7 items, 0–21) and the Blood-Injection Phobia Inventory (BIPI) (e.g. Mas et al. 2010)."],
            x: "BII is unusual because blood pressure drops, which is why its treatment (applied tension) raises it.",
            e: "Evaluate the questionnaires: quick and standardised vs subjective and culturally variable.",
            r: "GAD = worry. Agoraphobia = escape. BII = faint."
          }),
          S("P1142", "1.4.2", "Explanations of fear-related disorders", 2, {
            d: "Genetic, behavioural (classical conditioning) and psychodynamic explanations of phobias.",
            k: ["Genetic: phobias run in families. Öst (1992) found a high proportion of blood phobics had a first-degree relative with the same phobia.", "Behavioural: classical conditioning. Watson & Rayner (1920), ‘Little Albert’ (11 months): a white rat was paired with a loud noise, causing fear that generalised to similar furry objects. Avoidance keeps the phobia going (negative reinforcement).", "Psychodynamic: Freud (1909), ‘Little Hans’: a horse phobia explained as displaced fear of his father (Oedipus complex)."],
            x: "Little Albert was never deconditioned, a major ethical problem.",
            e: "Evaluate: Watson is evidence-based but unethical. Freud's ideas can't be falsified and rely on the father's reports (idiographic). Nature vs nurture.",
            r: "Genes · Little Albert · Little Hans."
          }),
          S("P1143", "1.4.3", "Treatment (incl. Chapman & DeLapp 2013)", 2, {
            d: "Behavioural and cognitive-behavioural treatments for anxiety and fear-related disorders.",
            k: ["Systematic desensitisation (Wolpe): learn relaxation → build a fear hierarchy → gradual exposure while relaxed (reciprocal inhibition: you can't be relaxed and afraid at the same time).", "CBT: challenge catastrophic thoughts, plus exposure.", "Applied tension (for BII): tense the big muscles to raise blood pressure and stop fainting.", "Key study, Chapman & DeLapp (2013): a 9-session manualised CBT case study of an adult woman with BII phobia, using psychoeducation, applied tension, cognitive restructuring and graded exposure. Her fear and avoidance fell, and she could tolerate medical procedures."],
            x: "Chapman & DeLapp (2013) shows a short, structured CBT programme can work for BII.",
            e: "Evaluate: an effective, short treatment vs a single case study (can't generalise) and relying on self-report.",
            r: "Relax + hierarchy + exposure; tension for blood."
          })
        ]
      },
      {
        id: "P12", code: "Clinical", title: "Obsessive-Compulsive Disorder", spine: "cream", icon: "loop", paper: "Papers 3 & 4 · Clinical",
        sections: [
          S("P1251", "1.5.1", "Diagnosis of OCD, Charles & measures", 2, {
            d: "OCD involves persistent obsessions (intrusive thoughts, images or urges) and/or compulsions (repetitive behaviours or mental acts), causing distress or taking up a lot of time.",
            k: ["Obsessions: contamination, harm, symmetry, intrusive taboo thoughts. Compulsions: washing, checking, ordering, counting.", "Rapoport (1989), ‘Charles’: a teenage boy who spent hours washing in strict rituals. Treatment helped only temporarily.", "MOCI (Maudsley Obsessive-Compulsive Inventory): 30 true/false items (checking, cleaning, slowness, doubting).", "Y-BOCS (Yale-Brown Obsessive-Compulsive Scale): a clinician-rated interview, 10 items, scored 0–40."],
            x: "‘Charles’ shows how OCD rituals can take over daily life.",
            e: "Compare self-report (MOCI) with clinician-rated (Y-BOCS) measures: quick vs more valid.",
            r: "Obsession = thought. Compulsion = act."
          }),
          S("P1252", "1.5.2", "Explanations of OCD", 2, {
            d: "Biological (biochemical, genetic) and psychological (cognitive, behavioural, psychodynamic) explanations of OCD.",
            k: ["Biochemical: low serotonin (SSRIs help).", "Genetic: OCD runs in families and twin studies show higher concordance in MZ twins.", "Cognitive: thinking errors such as inflated responsibility, thought–action fusion and overestimating threat.", "Behavioural: anxiety is conditioned, then compulsions reduce it and are negatively reinforced (two-process model).", "Psychodynamic: conflict between id and ego, anal-stage fixation, defence mechanisms (undoing, reaction formation)."],
            x: "Checking the door lock reduces anxiety, which reinforces checking again.",
            e: "Explanations work best combined. Evaluate them with reductionism and determinism.",
            r: "Serotonin · Genes · Thinking errors · Reinforcement · Defences."
          }),
          S("P1253", "1.5.3", "Treatment (incl. Lovell et al. 2006)", 2, {
            d: "Drug and psychological treatments for OCD.",
            k: ["SSRIs: raise serotonin. They help many patients, but take time and symptoms often return when stopped.", "Exposure and response prevention (ERP): face the trigger without doing the compulsion until anxiety falls (e.g. Lehmkuhl et al. 2008, a child with autism and OCD).", "Key study, Lovell et al. (2006): an RCT with 72 patients comparing CBT (ERP) by telephone vs face-to-face over 10 weeks, measured with the Y-BOCS. Telephone CBT was just as effective (non-inferior) and satisfaction was similar."],
            x: "Lovell et al. (2006) supports telephone therapy, which makes treatment more accessible.",
            e: "Evaluate: an RCT (high validity), but its participants were volunteers and the therapy varied by therapist.",
            r: "SSRIs · ERP · Phone CBT works."
          })
        ]
      },
      {
        id: "P13", code: "Health", title: "Patient–Practitioner Relationship", spine: "penguin", icon: "steth", paper: "Papers 3 & 4 · Health",
        sections: [
          S("P1311", "3.1.1", "Practitioner & patient interpersonal skills", 2, {
            d: "How non-verbal and verbal communication affect the patient–practitioner relationship.",
            k: ["Non-verbal, clothing: McKinstry & Wang (1991). Patients rated photos of doctors in different clothes. Many preferred formal dress (e.g. a white coat or suit), especially older patients.", "Verbal, medical jargon: McKinlay (1975). Women in a maternity ward were tested on medical terms their doctors used. Understanding was poor, yet doctors kept using jargon.", "Good communication improves satisfaction and adherence."],
            x: "Doctors underestimating patients' understanding but still using jargon is a communication gap.",
            e: "Evaluate: questionnaires and ratings are useful, but cultural differences and how dated the studies are matter.",
            r: "Dress matters · Jargon confuses."
          }),
          S("P1312", "3.1.2", "Diagnosis & practitioner style (Savage & Armstrong 1990)", 2, {
            d: "How practitioners make and present diagnoses, and whether a doctor-centred or patient-centred style is more satisfying.",
            k: ["Diagnosis: patients disclosing information. False positive (diagnosing an illness that isn't there) vs false negative (missing a real illness, which is dangerous).", "Doctor-centred (directing): closed questions, the doctor decides. Patient-centred (sharing): open questions, decisions shared.", "Key study, Savage & Armstrong (1990): GP patients in London were randomly given a directing or sharing consultation style and rated satisfaction afterwards. Patients given the directing style were more satisfied (felt better understood and better explained to)."],
            x: "Some patients may want an authoritative doctor, especially when they're physically ill.",
            e: "Evaluate Savage & Armstrong: random allocation in a real setting vs a single doctor (who was also the researcher) and self-report.",
            r: "Directing style → more satisfied (in this study)."
          }),
          S("P1313", "3.1.3", "Misusing health services", 2, {
            d: "Delay in seeking treatment and the deliberate faking of illness (Munchausen syndrome vs malingering).",
            k: ["Delay: Safer et al. (1979). Stages: appraisal delay (deciding you're ill), illness delay (deciding to seek care), utilisation delay (actually going). Pain, worry and cost affect each stage.", "Alternative explanation: the Health Belief Model (perceived susceptibility, severity, benefits, barriers, cues to action).", "Munchausen syndrome: faking illness to take on the sick role, with no external reward. Features include pathological lying and moving from hospital to hospital (e.g. Aleem & Ajarim 1995 case).", "Malingering: faking for external gain (money, avoiding work)."],
            x: "The Munchausen vs malingering difference is the MOTIVE: the sick role vs external gain.",
            e: "Evaluate case studies (rich but unique). Delay research often relies on recall.",
            r: "Appraisal → Illness → Utilisation delay."
          })
        ]
      },
      {
        id: "P14", code: "Health", title: "Adherence to Medical Advice", spine: "crimson", icon: "pill", paper: "Papers 3 & 4 · Health",
        sections: [
          S("P1421", "3.2.1", "Types of & reasons for non-adherence", 2, {
            d: "Non-adherence is not following medical advice: failing to take treatments or to attend appointments.",
            k: ["Problems: illness gets worse, wasted medicine and money, drug resistance.", "Rational non-adherence: the patient reasons it out (side effects, cost, believes the drug won't help). Laba et al. (2012) studied the trade-offs people make (cost, side effects, benefits).", "Health Belief Model: perceived threat, benefits vs barriers, cues to action, self-efficacy."],
            x: "Stopping antibiotics early when you feel better is a common rational non-adherence decision.",
            e: "Rational non-adherence shows patients are decision-makers, not just ‘bad’ patients.",
            r: "Non-adherence is often a rational choice."
          }),
          S("P1422", "3.2.2", "Measuring non-adherence", 2, {
            d: "Subjective, objective and biological ways of measuring whether patients adhere.",
            k: ["Subjective: clinical and semi-structured interviews (e.g. Riekert & Drotar 1999, adolescents with diabetes). Easy, but people over-report adherence.", "Objective: pill counting and electronic medication dispensers (e.g. Chung & Naya 2000, a dispenser recorded when doses were taken). More accurate, but doesn't prove the pill was swallowed.", "Biological: blood and urine samples show drug levels. Valid, but invasive and costly."],
            x: "Electronic dispensers often show lower adherence than patients claim.",
            e: "Compare measures on validity, cost and ethics.",
            r: "Subjective · Objective · Biological."
          }),
          S("P1423", "3.2.3", "Improving adherence (Yokley & Glenwick 1984)", 2, {
            d: "Ways to improve adherence: for children, individual behavioural techniques, and community interventions.",
            k: ["Children: Chaney et al. (2004). A ‘Funhaler’ (an inhaler with a spinner and whistle as rewards) improved how often young asthmatic children took their medicine.", "Individual techniques: contracts, prompts or reminders, customising treatment to fit routines.", "Key study, Yokley & Glenwick (1984): a field experiment on preschool immunisation in a US community. Groups got a general prompt, a specific prompt, a prompt plus easier clinic access, or a prompt plus a monetary incentive (vs controls). Monetary incentives and specific prompts produced the biggest rises in immunisation."],
            x: "Yokley & Glenwick show cheap prompts and incentives can change community health behaviour.",
            e: "Evaluate: real behaviour from clinic records (valid) vs one US city (generalisation) and ethical questions about paying incentives.",
            r: "Prompts + Incentives = shots."
          })
        ]
      },
      {
        id: "P15", code: "Health", title: "Pain", spine: "orange", icon: "bandage", paper: "Papers 3 & 4 · Health",
        sections: [
          S("P1531", "3.3.1", "Types & theories of pain", 2, {
            d: "Pain is an unpleasant sensory and emotional experience. Theories explain how it is produced.",
            k: ["Functions: warning, protection, recovery.", "Acute pain: short-term, clear cause. Chronic pain: long-lasting, beyond normal healing time.", "Phantom limb pain: pain felt in an amputated limb. Mirror treatment uses a reflection of the intact limb to ‘move’ the missing one (e.g. MacLachlan et al. 2004 case study).", "Specificity theory: a direct pain pathway, so pain matches injury. It can't explain phantom limbs.", "Gate control theory (Melzack & Wall 1965): a ‘gate’ in the spinal cord is opened by pain fibres and closed by touch fibres and signals from the brain (mood, attention)."],
            x: "Rubbing a bumped knee eases pain by closing the gate.",
            e: "Gate control is more holistic (mind and body). Specificity is reductionist.",
            r: "Gate opened by pain, closed by touch and mind."
          }),
          S("P1532", "3.3.2", "Measuring pain (Brudvik et al. 2016)", 2, {
            d: "Subjective, psychometric and behavioural measures of pain.",
            k: ["Clinical interview: a detailed description, but subjective.", "McGill Pain Questionnaire: word lists (sensory, affective, evaluative), giving a Pain Rating Index.", "Visual analogue scale (VAS): mark a line from ‘no pain’ to ‘worst pain’. Faces scales for children.", "Key study, Brudvik et al. (2016): in a Norwegian emergency outpatient clinic, children's pain self-ratings were compared with ratings by parents and doctors. Doctors and parents tended to underestimate children's pain.", "Behavioural: the UAB Pain Behaviour Scale. An observer rates behaviours such as grimacing and posture."],
            x: "Brudvik shows the child's self-report should be trusted over adults' judgement.",
            e: "Compare measures: subjective but personal vs observational and objective.",
            r: "McGill · VAS · UAB."
          }),
          S("P1533", "3.3.3", "Managing & controlling pain", 2, {
            d: "Biological, psychological and alternative treatments for pain.",
            k: ["Biochemical: analgesics such as opioids (morphine, which act on endorphin receptors and carry an addiction risk) and NSAIDs (ibuprofen).", "Cognitive strategies: attention diversion (focusing elsewhere), non-pain imagery (imagining a calm scene), cognitive redefinition (thinking about pain more positively or protectively).", "Alternative: acupuncture (needles, possibly releasing endorphins) and TENS (mild electrical pulses through the skin, closing the gate)."],
            x: "TENS machines are often used during labour, which links to gate control theory.",
            e: "Evaluate: drugs work fast but have side effects. Cognitive strategies are cheap but effort-dependent. Alternative treatments may be placebo effects.",
            r: "Drugs · Distract · Imagine · Redefine · Needles · TENS."
          })
        ]
      },
      {
        id: "P16", code: "Health", title: "Stress", spine: "sky", icon: "bolt", paper: "Papers 3 & 4 · Health",
        sections: [
          S("P1641", "3.4.1", "Sources of stress", 2, {
            d: "The physiology and causes of stress.",
            k: ["Selye's General Adaptation Syndrome (GAS): alarm (adrenaline, fight or flight) → resistance (cortisol, coping) → exhaustion (illness).", "Stress weakens the immune system and is linked to heart disease.", "Life events: Holmes & Rahe's SRRS, 43 events scored in life change units (e.g. death of a spouse = 100). Above 300 in a year means high illness risk.", "Work stress: Chandola et al. (2008), Whitehall II study of British civil servants. Work stress was linked to coronary heart disease through biological and behavioural pathways.", "Personality: Friedman & Rosenman's Type A (competitive, impatient, hostile) is linked to coronary heart disease."],
            x: "Exam stress has been shown to lower immune function in students.",
            e: "Evaluate: correlation, not causation, and individual differences in how people respond to stress.",
            r: "Alarm → Resistance → Exhaustion."
          }),
          S("P1642", "3.4.2", "Measures of stress", 2, {
            d: "Biological and psychological ways to measure stress.",
            k: ["Recording devices: heart rate, blood pressure. fMRI: Wang et al. (2005) found mental arithmetic stress increased activity in the right prefrontal cortex.", "Salivary cortisol: Evans & Wener (2007), crowded commuter trains. Seat-level crowding (close neighbours) was linked to higher cortisol and more stress.", "Psychological: self-report questionnaires, e.g. Type A tests and Holmes & Rahe's life events scale."],
            x: "Evans & Wener show being close to others matters more than overall crowd size.",
            e: "Biological measures are objective but expensive. Self-report is easy but subjective, so use both (triangulation).",
            r: "Heart · Brain · Cortisol · Questionnaire."
          }),
          S("P1643", "3.4.3", "Managing stress (Bridge et al. 1988)", 2, {
            d: "Psychological ways to manage and prevent stress.",
            k: ["Biofeedback: a person watches their own physiology (e.g. EMG of muscle tension) and learns to control it (e.g. Budzynski et al., tension headaches).", "Key study, Bridge et al. (1988): women having radiotherapy for breast cancer were randomly allocated to control, relaxation, or relaxation plus imagery. Mood was measured with the Profile of Mood States and anxiety/depression scales. Relaxation (especially with imagery) reduced mood disturbance compared with controls.", "Stress inoculation training (Meichenbaum): conceptualisation → skill acquisition and rehearsal → application and follow-through."],
            x: "Bridge et al. show cheap psychological methods support patients during medical treatment.",
            e: "Evaluate Bridge: random allocation and a real clinical setting vs all women, and self-report measures.",
            r: "Biofeedback · Imagery · SIT (3 phases)."
          })
        ]
      },
      {
        id: "P17", code: "Health", title: "Health Promotion", spine: "tan", icon: "sun", paper: "Papers 3 & 4 · Health",
        sections: [
          S("P1751", "3.5.1", "Strategies for promoting health", 2, {
            d: "Using fear and information to encourage healthier behaviour.",
            k: ["Fear arousal: Janis & Feshbach (1953). Students heard dental-hygiene lectures with strong, moderate or minimal fear content. Minimal fear produced the MOST behaviour change.", "Providing information: Lewin et al. (1992). Patients after a heart attack using the ‘Heart Manual’ (a self-help rehabilitation programme) had better psychological adjustment and fewer GP contacts than controls."],
            x: "Too much fear can make people deny the message.",
            e: "Evaluate: fear studies may lack temporal validity. Information works best when it's personal and practical.",
            r: "Mild fear works better than strong fear."
          }),
          S("P1752", "3.5.2", "Health promotion in schools & worksites", 2, {
            d: "Interventions in schools and workplaces that change health behaviour.",
            k: ["Schools: Tapper et al. (2003), the ‘Food Dudes’. Peer modelling videos plus rewards increased children's fruit and vegetable eating.", "Worksites: Fox et al. (1987), a token economy in open-pit mines. Workers earned tokens (stamps) for accident-free periods, and injuries and costs fell dramatically over years."],
            x: "Both use learning principles: modelling (Bandura) and reinforcement (operant).",
            e: "Evaluate: real-world settings and long-term effects vs reliance on rewards (will it continue once they're removed?).",
            r: "Food Dudes = model + reward. Mines = tokens."
          }),
          S("P1753", "3.5.3", "Unrealistic optimism & positive psychology (Shoshani & Steinmetz 2014)", 2, {
            d: "Individual factors that affect health beliefs, and how positive psychology can improve wellbeing.",
            k: ["Unrealistic optimism: Weinstein (1980). Students believed good events were more likely and bad events less likely to happen to them than to others, so they ignore health advice.", "Positive psychology (Seligman): the pleasant life (positive emotion), the good or engaged life (strengths and flow), the meaningful life (serving something bigger).", "Key study, Shoshani & Steinmetz (2014): a school-based positive psychology programme for Israeli middle-school students over a school year, compared with a control school. Self-esteem, self-efficacy and optimism rose, while anxiety and depression symptoms fell."],
            x: "Shoshani & Steinmetz show wellbeing can be taught in schools.",
            e: "Evaluate: a large real-world sample and a longitudinal design vs self-report and not being randomised at the individual level (cultural context: Israel).",
            r: "Pleasant · Good · Meaningful."
          })
        ]
      }
    ]
  };
})();

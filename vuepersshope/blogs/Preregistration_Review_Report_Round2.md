
# Editorial Decision Package — Preregistration Review (Round 2)

**Manuscript**: `Preregistration_Draft.md` — "EF vs. IF Attentional Encoding in IMU-Driven AR-Mediated
FPA Retraining: A Parallel Comparison of Behavioral and Candidate Mechanism-Adjacent Indicators" (OSF
Registered-Report Stage 1 preregistration draft, N=22 within-subjects crossover)
**Review date**: generated via 5-seat independent panel (Journal-Fit, Methodology, Domain, Perspective,
Devil's Advocate), run on the current (post-first-revision) draft
**Document type note**: this is a PREREGISTRATION — the decision below concerns readiness to lock/submit
to OSF, not publication of results.

---

## Decision: **Major Revision**

This is a step down in severity from a fatal problem, and a step up from the panel's individual
Minor-Revision leanings (4 of 5 seats independently landed on "Minor Revision" as their own
recommendation). The overall call is Major Revision because of one validated Devil's Advocate Critical
finding plus a cluster of independently-raised Major findings across three different seats — none require
new data collection or a redesigned study, but they do require text-level revisions and, in one case, a
considered decision about whether an added measure is feasible before Stage 1 lock.

### Panel recommendation summary
| Seat | Recommendation |
|---|---|
| Journal-Fit | Minor Revision (1 Major, 3 Minor) |
| Reviewer 1 — Methodology | Minor Revision (3 Major, 2 Minor) |
| Reviewer 2 — Domain | Minor Revision (0 Major, 3 Minor, one flagged `[FIELD-NORM UNVERIFIED]`) |
| Reviewer 3 — Perspective | Minor Revision (0 Major, 4 Minor) |
| Devil's Advocate | 1 Critical, 4 Major, 2 Minor (no venue recommendation issued) |

### Consensus Analysis

**Strong consensus (3-4 of 4 non-DA reviewers, as a strength, not a weakness)**:
- The document's methodological transparency / anti-p-hacking discipline was independently praised by
  all four non-DA seats: Journal-Fit S4 (quantified false-positive rate), Methodology S1-S3 (multiple
  comparisons policy, honest power reporting, missing-data policy), Domain S2 (explicit framework-limit
  acknowledgment), Perspective S1/S3 (non-overclaiming translational framing, proxy-measure honesty).
  This is a genuine 4/4 convergence and should be read as a real asset of the document, not just
  panel politeness.

**Corroborated (2 of 4 non-DA reviewers, or 1 non-DA + DA on the same underlying issue)**:
- **Translational "de-risking" framing overreaches the design's actual power/generalizability**: raised
  independently by Perspective (W1, rated Minor — "de-risk" language sits in tension with the study's own
  generalizability caveats) and by Devil's Advocate (Major — a single underpowered proof-of-mechanism
  pilot cannot license a "de-risking" claim for a downstream clinical trial's design decisions). Same
  underlying issue, different severity weighting; neither reviewer disputes the other's read, they simply
  weighted it differently. Retained here at **Major** (the DA's argument — that 5 of 6 confirmatory
  hypotheses lack independent a priori power, per the document's own Section 4 disclosure — is well
  grounded in the document's own text and not contested by any other seat).
- **Narrow/one-sided literature engagement**: raised from two different angles — Domain W1/W2 (no
  gait/locomotion-specific EF/IF literature engaged; no alternative mechanistic accounts of the EF
  advantage discussed) and Devil's Advocate Major (the skill-level/task-complexity moderator literature
  is cited only as a generalizability caveat, not engaged as grounds for a genuinely bidirectional
  hypothesis — i.e., the case for IF being non-inferior or superior in AR-naive novices on a complex task
  is never seriously weighed). Retained as a corroborated theme requiring a literature-engagement fix,
  not a design change.

**Single-reviewer findings (still retained, not downgraded for being raised by one seat)**:
- Order-covariate reporting ambiguity — which version (with/without order as covariate) is confirmatory
  if the two diverge (Methodology W1, Major).
- No step-level/trial-level outlier/cleaning rule for the primary FPA outcome, only a block-level 70%
  threshold (Methodology W2, Major).
- Venue-scope fit for *Sensors*: the sensing system itself is unchanged from the published IMX'26 system;
  the actual new contribution here is behavioral/motor-learning, not sensing (Journal-Fit W1, Major).
- H2c's outcome-classification rule ("significant interaction, any pattern, = support") is close to
  unfalsifiable and sits in tension with the document's own anti-p-hacking posture elsewhere (DA, Major).
- Temporal-order problem in the exploratory indirect-effect (a×b) probe: the candidate "mediator"
  (NASA-TLX/IMI-PC) is measured *after* the training blocks that generate the behavioral outcome
  (FPA target achievement) it is correlated against, reversing the precedence the exploratory label does
  not itself resolve (DA, Major).
- GDPR/biometric-data-governance detail under-specified relative to the data-sharing commitment for IMU
  time series and session video (Perspective W4, Minor but grounded in a checkable external standard,
  GDPR Art. 9).
- No implementability/adoption-barrier discussion despite the stated clinical-translation motivation
  (Perspective W2/W3, Minor).
- Registered-Report track availability at the named default venue (*Sensors*) is asserted as a
  precondition ("provided it accepts...") but not yet confirmed (Journal-Fit W2, Minor
  `[FIELD-NORM UNVERIFIED]`).
- Literature-gap search strategy (databases/terms/date range) is referenced via a companion file but not
  self-contained in the document under review (Domain W3, Minor).
- Bonferroni (vs. Holm-Bonferroni) for the 6 correlated NASA-TLX subscales is conservative (Methodology
  W4, Minor).

**No genuine Splits requiring arbitration** in the strict sense (a reviewer actively disputing another's
finding). The closest case — Domain's S3 praising the world-locked-vs-head-locked EF/IF display
distinction as theoretically faithful and honestly disclosed, versus the DA's Critical finding that this
same design choice is an unresolved rival-explanation confound — is **not** a true dispute: Domain
evaluated the choice against a different criterion (fidelity to Wulf's canonical EF/IF definitions) and
did not examine, endorse, or reject the specific internal-validity argument the DA raises (gaze/postural/
vestibular/depth-cue confounding). The two findings are compatible, not contradictory — see adjudication
below.

### Devil's Advocate CRITICAL Finding — Adjudication (required, per panel rules)

**DA-C1: The EF (world-locked, ground-anchored 3D) vs. IF (head-locked 2D HUD) display-anchoring
distinction is a plausible rival explanation for the entire EF/IF effect, and the design includes no
check capable of separating an attentional-focus effect from a display-anchoring/postural-demand effect.**

- **DA's argument**: world-locked vs. head-locked anchoring plausibly differs on depth-cue processing,
  gaze/head-coordination demands, vestibular-ocular engagement, and postural-stability requirements —
  none of which are attentional-focus per se. The Manipulation Check (adapted from Porter et al. 2010)
  probes *where* attention was directed, not whether the display-format difference itself, independent of
  attentional focus, could produce the observed FPA/NASA-TLX/IMI-PC differences.
- **Corroboration check**: no other seat disputes this specific claim. Domain's S3 addresses a different
  question (is this a theoretically faithful operationalization of EF/IF?) and answers yes; it does not
  address whether the operationalization is *also* confounded on non-attentional dimensions. These are
  compatible: a manipulation can be theoretically faithful to Wulf's definitions and still be confounded
  on other dimensions. No reviewer affirmatively defends the design against DA's specific rival-explanation
  argument.
- **Editorial assessment**: **Validated as a genuine, currently-unresolved internal-validity threat.**
  The document itself provides the evidence for this: Section 6 explicitly classifies the anchoring
  difference as a "retained necessary difference" that is "deliberately not equalised... because
  equalising it would remove the manipulation being tested" — but offers no argument for why this is the
  *only* way to instantiate the EF/IF contrast, and Section 7's Limitations list covers the related
  "3DoF/proximal-EF hardware constraint" without naming this specific anchoring-format confound. The
  claim is checkable directly against the document and is not contested by any panel member.
- **Disposition**: This does **not** require abandoning or redesigning the study (the Critical/Major
  distinction in this panel's framework is about severity of required response, not automatic rejection).
  Ethics approval (008-11-2025) is already finalized and the document states "no further protocol changes
  anticipated" (Section 7) — a full redesign (e.g., adding gaze-tracking or head-kinematics
  instrumentation) would require a protocol amendment and is not being demanded here. What **is** required
  before Stage 1 lock:
  1. Name this specific confound explicitly in Section 7's Limitations list (currently it names the
     related-but-distinct "3DoF/proximal-EF" issue, not this one).
  2. State explicitly, in Section 6's "Known confounds" discussion, that a positive finding on H2a-c/H3a-b
     cannot by itself distinguish an attentional-focus effect from a display-anchoring-format effect, and
     that this is an acknowledged, unresolved limitation of the chosen operationalization rather than an
     oversight.
  3. If feasible within the existing ethics approval and questionnaire booklet (i.e., without new
     hardware or a protocol amendment), consider adding one manipulation-check item probing perceived
     display stability/depth/anchoring (distinct from the existing external/internal-focus item) as a
     low-cost partial mitigation — optional, not mandatory, for Stage 1 lock, but strongly recommended for
     the eventual Discussion section's interpretive caveats.
  This finding **blocks lock/submission only if left silently unaddressed**; a text-level disclosure fix
  (items 1-2) is sufficient to unblock, given the practical constraints on redesign at this stage.

---

## Revision Roadmap

### Must Fix (before OSF/Stage 1 submission)

| # | Source | Issue | Suggested fix |
|---|---|---|---|
| 1 | DA-C1 (Critical) | World-locked-vs-head-locked EF/IF display anchoring is an unacknowledged rival explanation (gaze/postural/vestibular/depth-cue) for the primary EF/IF effect | Add explicit acknowledgment to Section 7 Limitations and Section 6 Known Confounds (see adjudication above, items 1-2); optionally add a lightweight manipulation-check item if feasible without a protocol amendment |
| 2 | Methodology-W1 (Major) | No pre-specified rule for which version (with/without order covariate) is confirmatory if the two diverge — reopens a researcher degree of freedom the rest of the plan closes | Pre-specify a default (e.g., no-covariate version confirmatory; covariate-adjusted version a sensitivity check, with an explicit stated exception rule) |
| 3 | Methodology-W2 (Major) | No step-level/trial-level outlier or cleaning rule for the FPA time series (only block-level 70% completeness threshold) | State an explicit per-step exclusion rule in `Protocol_Master_Draft.md` Section 3.2, or confirm in the preregistration body that none exists beyond the block threshold |
| 4 | Journal-Fit-W1 (Major) | Venue-scope fit for *Sensors* asserted as default but not argued — the sensing system is unchanged from IMX'26; the real contribution here is behavioral/motor-learning | Decide the venue (Sensors vs. a Sport Sciences/Rehabilitation Engineering RR-track journal) before Stage 1 submission, and align the Introduction's framing accordingly |
| 5 | DA-Major + Perspective-W1 (corroborated) | "De-risking" translational language overreaches what an N=22, mostly-unpowered proof-of-mechanism pilot in healthy AR-naive adults can support | Soften "de-risk" language per Perspective's suggested wording; explicitly name the population-specific factors (pain-avoidance gait, device tolerance, age-related differences) a KOA-population replication would still need before the claim is earned |
| 6 | DA-Major | H2c's "any significant interaction pattern = support" rule is close to unfalsifiable and could register an artifact (differential fatigue, floor/ceiling effects) as theoretical support | Add a qualification requiring the confirmed interaction pattern to be interpretable/consistent with a plausible adaptation-trend account, not merely statistically present, or explicitly acknowledge in Section 6 that H2c's confirmatory bar is intentionally low and interpret accordingly |
| 7 | DA-Major | Temporal-order problem in the exploratory a×b indirect-effect probe: candidate "mediator" measured after the behavioral outcome it's correlated against | Add one sentence in Section 6 acknowledging the reversed temporal precedence as a structural limitation of the exploratory probe, distinct from the already-stated "not a formal mediation" disclaimer |
| 8 | Domain-W1/W2 + DA-Major (corroborated) | Literature engagement is narrow: no gait/locomotion-specific EF/IF studies, no alternative mechanistic accounts, and the novice/task-complexity literature is used only as a generalizability caveat rather than grounds for seriously weighing an IF-favoring or null outcome | Add brief acknowledgment that the borrowed effect size isn't decomposed by task type; cite at least one gait-specific EF/IF source if available; add a sentence noting the directional (EF-favoring) hypotheses were chosen despite literature that could support a competing or null prediction in AR-naive novices |

### Should Fix (strengthens the document, not blocking)

| # | Source | Issue | Suggested fix |
|---|---|---|---|
| 9 | Methodology-W3 | Only H2b has independent a priori power; the RR-track norm of per-hypothesis power justification is disclosed-but-unmet for the other 5 | Either designate H2b as the sole confirmation-grade hypothesis with the rest reframed as effect-estimation targets, or add brief per-hypothesis power caveats directly into the Section 6 table |
| 10 | Perspective-W4 | GDPR Art. 9-relevant biometric/video data governance detail under-specified relative to the stated data-sharing commitment | Add one sentence on IMU/gait time-series de-identification method and confirm consent-form coverage of video QA use and eventual data release |
| 11 | Perspective-W2/W3 | No implementability/adoption-barrier discussion despite stated clinical-translation motivation | Add a short "out of scope" sentence naming session burden, hardware cost/availability, and clinician workflow integration as separate, unaddressed questions |
| 12 | Journal-Fit-W2 | Registered-Report track availability at the named default venue not yet confirmed | Confirm directly with the target journal before Stage 1 submission; record the confirmation or final venue decision in the document |
| 13 | Journal-Fit-W3 | H3c withdrawal is stated but the QoE→EF/IF reframing rationale isn't explained in-document | Add 1-2 sentences on the reframing history so a reader without CHANGELOG access understands the pivot |
| 14 | Domain-W3 | Literature-gap search strategy not self-contained in the document (only referenced via companion file) | Add a one-line summary of search terms/databases/date range directly into the preregistration body |
| 15 | Methodology-W4 | Bonferroni across 6 correlated NASA-TLX subscales is conservative | Consider Holm-Bonferroni instead |
| 16 | Methodology-W5 | No stated contingency for ending recruitment below N=22 | Add one sentence clarifying this is treated as a disclosed Section 7 deviation with recalculated post hoc power |
| 17 | DA-Minor | Family-wise false-positive-rate mitigation ("equal narrative prominence") is a stated intention, not a structural safeguard | No document change required; flagged so Stage 2 reviewers can hold authors to the commitment explicitly |
| 18 | DA + Ignored-alternatives list | No discussion of floor/ceiling effects from a single short training dose as an alternative explanation for a null result | Add a sentence distinguishing "true absence of EF/IF difference" from "insufficient training dose" as competing interpretations of a null H2a/H2b/H2c |

### Response Letter Template (for the author, optional)
For each Required/Suggested item above: "Reviewer [X] raised [issue]. We addressed this by [author fills in]."

---

## Part 3: Reviewer Report Summary (Appendix)

| Seat | Recommendation | Top points |
|---|---|---|
| Journal-Fit | Minor Revision | Coherent, non-overclaiming title→hypothesis→conclusion chain and a well-verified literature-gap claim; but venue fit for *Sensors* is asserted rather than argued given the sensing system itself is unchanged from IMX'26 |
| Reviewer 1 (Methodology) | Minor Revision | Exceptionally disclosed multiple-comparisons, power, and missing-data policies; undercut by an unresolved order-covariate reporting ambiguity, a missing step-level FPA outlier rule, and power justification limited to 1 of 6 confirmatory hypotheses |
| Reviewer 2 (Domain) | Minor Revision | Theoretically disciplined, primary-sourced use of constrained-action/OPTIMAL theory with honest boundary acknowledgment; literature base is narrow (general motor-learning canon, no gait-specific or alternative-mechanism engagement) |
| Reviewer 3 (Perspective) | Minor Revision | Strong self-limiting translational framing and rigorous stimulus-matching discipline; "de-risking" language slightly outruns what a healthy-adult pilot can support, and implementability/GDPR-biometric-data detail is thin |
| Devil's Advocate | (no venue recommendation) | 1 Critical (EF/IF display-anchoring format is an unaddressed rival explanation for the core effect), 4 Major (translational overreach, near-unfalsifiable H2c rule, temporal-order problem in the exploratory indirect-effect probe, one-sided literature framing) |

**Overall signal**: this is a materially stronger document than the prior review round — every one of the
20 previously-identified issues was substantively resolved, and 4 of 5 seats independently landed on Minor
Revision on their own. The step up to Major Revision at the editorial level reflects one validated,
previously-unflagged Critical finding (the display-anchoring confound) plus a small cluster of Major
findings that are genuinely new to this round rather than carryover — all resolvable via text-level
revision to the preregistration and companion protocol document, none requiring new data collection or a
fundamental redesign.

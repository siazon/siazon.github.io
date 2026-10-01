
# Editorial Decision Package — Preregistration Review (Round 3)

**Manuscript**: `Preregistration_Draft.md` — "EF vs. IF Attentional Encoding in IMU-Driven
AR-Mediated FPA Retraining: A Parallel Comparison of Behavioral and Candidate
Mechanism-Adjacent Indicators" (OSF Registered-Report Stage 1 preregistration draft, N=22
within-subjects crossover)
**Review trigger**: the researcher revised the Unity AR frontend implementation; the
preregistration was updated to sync with it (correcting stale numeric/icon claims, and
disclosing two newly identified confounds: target-icon dwell-time asymmetry and
feedback-valence-coding asymmetry between EF and IF). This round's panel was asked to focus
specifically on whether that update is itself sound and internally consistent.
**Document type note**: this is a PREREGISTRATION — the decision concerns readiness to
lock/submit to OSF, not publication of results.

---

## Part 1: Editorial Decision Letter

### Decision: **Major Revision**

### Panel recommendation summary
| Seat | Recommendation |
|---|---|
| Journal-Fit | Minor Revision (2 Major, 2 Minor) |
| Reviewer 1 — Methodology | **Major Revision** (1 Critical, 2 Major, 1 Minor) |
| Reviewer 2 — Domain | Minor Revision (0 Major, 4 Minor) |
| Reviewer 3 — Perspective | Minor Revision (2 Major, 1 Minor) |
| Devil's Advocate | 2 Critical, 3 Major, 2 Minor (no venue recommendation issued) |

Methodology's Major Revision is not an outlier: it is corroborated by two Devil's Advocate
Critical findings and echoed, at Major severity, by Journal-Fit and Perspective on closely
related points. Per the panel's own arbitration rule, a single Major/Critical recommendation
is only downgraded when it is an isolated outlier — here it is the opposite: the most-flagged
issue cluster in the whole round.

### Consensus Analysis

**Strong consensus (3 of 4 non-DA reviewers converge on the same underlying issue)**:
- **The two newly disclosed confounds (unequal target-icon dwell time; unequal
  feedback-valence coding) are named and disclosed, but never analyzed for the *direction*
  in which they would bias each of the six primary hypotheses.** Raised independently by
  Methodology (W2, Major — dwell time plausibly inflates EF's H2a; valence asymmetry
  plausibly biases *against* EF on H3a/H3b), Perspective (W1, Major — same asymmetries
  mapped onto the motor-learning "guidance hypothesis" and negativity-bias/loss-aversion
  literature, with the same H3a/H3b-adverse-to-EF prediction), and Domain (W3, Minor —
  same point, narrowed specifically to H3b via OPTIMAL theory's own enhanced-expectancies
  mechanism). All three reviewers, working from different disciplinary angles, independently
  converged on the same specific prediction: **the valence asymmetry plausibly biases against
  the EF-favoring hypotheses (H3a/H3b), not just "confounds" them generically** — while the
  dwell-time asymmetry plausibly inflates EF's apparent advantage on H2a. This is corroborated
  further by Devil's Advocate Critical #2. This is the single most corroborated finding of the
  round and is treated as Strong Consensus.

**Corroborated (2 of 4 non-DA reviewers, or 1 non-DA + DA on the same underlying issue)**:
- **The confound-resolution decision is explicitly left open in the submitted text, and the
  companion `Protocol_Master_Draft.md` Section 4.1 is explicitly not yet re-synced** — raised
  by Journal-Fit (W1 Major: "this raises the question of whether the design is actually final
  enough... a moving target that happens to have paused at this draft"; W2 Major: companion-doc
  dependency) and Methodology (W1, rated **Critical**: "a preregistration whose own companion
  specification document is out of sync... is not yet a submittable/lockable artifact by the
  standard this document itself sets"). Independently corroborated by Devil's Advocate Critical
  #1 and DA-Major ("disclosure is being used as if it were control") and DA-Major (companion-doc
  contradiction). Four of five seats touch this from different angles; retained at **Critical**
  per Methodology's and the Devil's Advocate's severity assessment, since it concerns whether the
  document is a lockable artifact at all, not just a completeness nicety.
- **Colour-salience matching left to an informal future pilot check rather than an objective
  measurement** — raised by Perspective (W3, Minor — CIE Lab ΔE/contrast-ratio calculation is a
  low-cost objective alternative) and Devil's Advocate (Minor — now more consequential because
  valence-coding asymmetry is a live confound). Retained as corroborated Minor.

**Single-reviewer findings (retained, not downgraded for being raised by one seat)**:
- No analytic safeguard (pre-specified covariate or sensitivity analysis) for either new
  confound, in contrast to the concrete with/without-covariate treatment given to order effects
  (Devil's Advocate, Major).
- No decision rule for what happens if the with-order-covariate and without-order-covariate
  versions of a primary comparison disagree (Methodology W3, Major) — **this is a carryover of
  an issue flagged in Round 2 (Methodology-W1) that was not actually resolved**: the current
  draft still only commits to reporting both versions, not to a tie-breaking rule.
- Anchor citation (Karatsidis et al., 2018) for the "prior systems default to IF" claim may
  mischaracterize a KAM-estimation validation paper as a feedback-design study (Domain W2,
  Minor).
- Citation base for the attentional-focus theoretical apparatus draws exclusively from one
  research lineage (Wulf/Lewthwaite/Chua), with no critical/alternative voice (Domain W1,
  Minor) — a milder restatement of Round 2's corroborated Major finding on the same theme;
  this round's panel did not re-escalate it, but it remains unaddressed in the document.
- No artifact-versioning mechanism (git tag, checksum, Zenodo software DOI) ties the "frozen"
  preregistration text to a specific, verifiable Unity build state (Perspective W2, Major).
- EF's `PulseStone()` on-contact colour-pulse duration is never stated numerically, leaving it
  unverified whether it actually matches IF's stated 0.35s flash window (Methodology, Minor
  issue).
- Exploratory-analyses scope (6 confirmatory + 4 exploratory + 1 indirect-effect probe) is not
  summarized in one place for at-a-glance venue-fit assessment (Journal-Fit W4, Minor).
- Venue still explicitly unlocked (Sensors vs. alternative) this late in the design (Journal-Fit
  W3, Minor) — carryover of Round 2's Journal-Fit-W1/W2, still not resolved.

**No genuine Splits requiring arbitration** — no reviewer disputes another's finding this
round; severity ratings differ (Minor vs. Major vs. Critical on the same underlying issues)
but no seat argues a finding is wrong or shouldn't exist.

### Devil's Advocate CRITICAL Findings — Adjudication (required, per panel rules)

**DA-C1: The confound-resolution decision (accept-and-disclose vs. request-a-further-frontend-
revision) is not actually made in this draft — a document with an open fork on its own
manipulated variable is not yet a locked Stage-1 artifact.**
- **Corroboration check**: independently and at comparable severity by Methodology (rated this
  **Critical** as well, on the grounds that the companion document is also out of sync with this
  one) and at Major severity by Journal-Fit (twice, W1 and W2). No reviewer disputes this.
- **Editorial assessment**: **Validated.** The document's own text states the fork in the
  present tense ("before Stage 1 lock, the authors will decide whether to (a)... or (b)...").
  This is directly checkable against Section 6 and is not contested by any seat.
- **Disposition**: This blocks lock/submission until resolved — not because the underlying
  confounds are necessarily disqualifying (they may well be judged acceptable, disclosed
  limitations), but because *the decision itself*, not just its disclosure, needs to be made and
  recorded before this document is submitted as a locked Stage 1 artifact. This does not require
  new data collection or a study redesign — it requires either (a) making the accept/fix decision
  explicitly and updating Sections 1/5/6/7 and `Protocol_Master_Draft.md` §4.1 to match, or (b)
  restructuring the document to state a concrete decision date/criterion as part of the locked
  plan itself (per Methodology's suggested fix), rather than leaving it as an open branch in the
  submitted text.

**DA-C2: No differential-direction analysis of how the two confounds could bias each of the
six primary hypotheses — dwell-time and valence-coding asymmetries may push different
hypotheses in opposite directions relative to the theorized EF advantage, and the document does
not work through this.**
- **Corroboration check**: this is the round's Strong Consensus finding (see above) —
  independently raised by Methodology, Perspective, and Domain, each from a different angle
  (statistical confound-attribution logic; guidance-hypothesis/negativity-bias literature;
  OPTIMAL-theory-specific mechanism), all converging on the same substantive prediction (valence
  asymmetry biases against H3a/H3b; dwell-time asymmetry may inflate H2a). No reviewer disputes
  it.
- **Editorial assessment**: **Validated**, and elevated in this synthesis to a Must-Fix item on
  the strength of the three-way non-DA corroboration, not just the DA's raising it.
- **Disposition**: Does not require new data collection or a design change — requires adding
  the directional reasoning to Section 6/7 so that whichever way each hypothesis's result comes
  out, its interpretation is pre-committed rather than decided post hoc (the exact discipline the
  rest of the document already applies to H1's three-way outcome rule).

### Decision Rationale
The decision is Major Revision because of two validated Devil's Advocate Critical findings
(DA-C1, DA-C2), the second of which is independently corroborated at Major/Minor severity by
three of the four non-DA seats (Methodology-W2, Perspective-W1, Domain-W3) and is the strongest
consensus signal in this round. Methodology's own Major Revision call (grounded in DA-C1's
underlying issue, which Methodology reached independently and rated Critical) is not an outlier
to be arbitrated away — it is corroborated, not contradicted, by the rest of the panel. Neither
Critical finding requires new data collection, a redesign, or an ethics amendment by default;
both are resolvable via a text-level decision-and-disclosure pass, which is why this is Major
Revision rather than Reject.

### Blocking Issues (most important first)
1. **The accept-vs-fix decision on the two newly disclosed confounds (dwell-time, valence
   coding) must actually be made and recorded**, not left as an open fork in the submitted text;
   `Protocol_Master_Draft.md` §4.1 must be re-synced to match whichever decision is made, before
   the Stage 1 freeze timestamp is set. (DA-C1, Methodology-W1-Critical, Journal-Fit-W1/W2)
2. **A directional-bias analysis must be added** stating, per hypothesis (H2a, H2b, H2c, H3a,
   H3b), the plausible direction each of the two confounds would push that specific comparison —
   in particular, that the valence asymmetry plausibly biases *against* the EF-favoring
   hypotheses (H3a/H3b), not merely confounds them generically. (DA-C2, Methodology-W2,
   Perspective-W1, Domain-W3)
3. **A tie-breaking rule for discordant with/without-order-covariate results** must be
   pre-specified (this is a carryover of Round 2's Methodology-W1 finding, still open).
   (Methodology-W3)

---

## Part 2: Revision Roadmap

### Required Revisions (must fix)
| # | Finding source | Issue | Why it matters | Suggested fix |
|---|---|---|---|---|
| 1 | DA-C1 (Critical) + Methodology-W1 (Critical) + Journal-Fit-W1/W2 (Major) | The accept-vs-fix decision on the two new confounds is left as an open (a)/(b) fork in the submitted text; companion `Protocol_Master_Draft.md` §4.1 not re-synced | A document whose own manipulated-variable definition is an unresolved fork across two contradictory companion documents is not a lockable Stage 1 artifact | Make the decision explicitly (accept-and-disclose, or specify the frontend fix) and update Sections 1/5/6/7 plus `Protocol_Master_Draft.md` §4.1 to match before the freeze timestamp; if the decision genuinely can't be made yet, restructure as a conditional preregistration with a stated decision date/criterion recorded as part of the locked plan |
| 2 | DA-C2 (Critical) + Methodology-W2 (Major) + Perspective-W1 (Major) + Domain-W3 (Minor) | No directional-bias analysis of how the two new confounds would plausibly push each of H2a–c/H3a–b | Three independent reviewers converged on the same prediction (valence asymmetry biases against H3a/H3b, dwell-time may inflate H2a) — without stating this pre-data-collection, a null or positive result on these hypotheses can't be correctly interpreted | Add a short per-hypothesis directional-bias paragraph to Section 6/7, citing the guidance-hypothesis/negativity-bias literature (Perspective's suggestion) and the OPTIMAL-theory-specific mechanism (Domain's suggestion) as grounding |
| 3 | Methodology-W3 (Major, Round-2 carryover) | No pre-specified tie-breaking rule if with-order-covariate and without-order-covariate versions of a primary comparison disagree | Reopens a researcher degree of freedom the rest of the plan (e.g. H1's three-way rule) works hard to close | State which version is the designated confirmatory test, or state both are co-primary and any discordance will itself be reported descriptively |
| 4 | Devil's Advocate (Major) | No pre-specified analytic safeguard (covariate/sensitivity analysis) for either new confound, unlike the dual-version treatment given to order effects | Asymmetric rigor: a well-precedented, smaller threat (order) gets a safeguard; two newly flagged, potentially larger threats get none | Consider logging per-trial dwell/valence exposure for an exploratory sensitivity check, or explicitly state why no safeguard is planned |

### Suggested Revisions (should fix, not blocking)
| # | Finding source | Issue | Suggested fix |
|---|---|---|---|
| 5 | Perspective-W2 (Major) | No artifact-versioning mechanism (git tag/DOI/checksum) ties the frozen preregistration text to a specific, verifiable Unity build | Tag/branch the exact commit used for data collection and cite that identifier (not just the file path) alongside the "Companion document freeze" clause |
| 6 | Perspective-W3 + DA (corroborated Minor) | Colour-salience matching left to an informal future pilot check | Replace with an objective CIE Lab ΔE / contrast-ratio calculation against the AR background |
| 7 | Domain-W2 (Minor) | Karatsidis et al. (2018) citation may mischaracterize a KAM-estimation paper as an IF feedback-design exemplar | Verify the paper's content; adjust or soften the claim if it lacks a feedback-delivery component |
| 8 | Domain-W1 (Minor, Round-2 carryover) | Theoretical citation base remains single-lineage (Wulf/Lewthwaite/Chua only) | Add a sentence acknowledging critical/alternative perspectives on EF-effect robustness, or state this is a deliberate scope choice |
| 9 | Methodology (Minor) | EF's `PulseStone()` pulse duration never stated numerically; unverified whether it matches IF's 0.35s flash | State the numeric value explicitly so the "matched transient event" claim is verifiable |
| 10 | Journal-Fit-W3 (Minor, Round-2 carryover) | Venue (Sensors vs. alternative) still unlocked this late in the design | Decide and lock the venue before Stage 1 submission |
| 11 | Journal-Fit-W4 (Minor) | Confirmatory (6) vs. exploratory (4+1) hypothesis count not summarized in one place | Add a one-line scope summary early in Section 1 or 2 |
| 12 | Methodology (Minor) | H2b specified as paired t-test only, no normality check/fallback unlike H1's Shapiro-Wilk/Wilcoxon logic | Add the same assumption-check/fallback language used for H1, or justify the asymmetry |

### Response Letter Template (for the author, optional)
For each Required/Suggested item above: "Reviewer [X] raised [issue]. We addressed this by
[author fills in]."

---

## Part 3: Reviewer Report Summary (Appendix)

| Seat | Recommendation | Top points |
|---|---|---|
| Journal-Fit | Minor Revision | Coherent, well-scoped originality/significance claim and honest translational framing; but the newest confound disclosure and the still-unsynced companion document mean the manuscript is, by its own account, not yet in a submittable state, and the venue remains unlocked |
| Reviewer 1 (Methodology) | **Major Revision** | Exceptionally self-critical about implementation drift and missing-data/power honesty; but the confound-resolution decision is left open (Critical), the two new confounds' directional impact on the hypotheses is unanalyzed, and the order-covariate tie-break rule (flagged in Round 2) is still missing |
| Reviewer 2 (Domain) | Minor Revision | Theoretically precise, primary-sourced use of OPTIMAL/constrained-action theory with correctly-applied proximal/distal EF distinction; citation base remains single-lineage and one anchor citation may be mischaracterized; independently identified the same H3b-specific directional-bias gap Methodology and Perspective raised |
| Reviewer 3 (Perspective) | Minor Revision | Reframed the two new confounds in terms of established guidance-hypothesis and negativity-bias literature, arriving independently at the same directional prediction as Methodology and Domain; also flagged the lack of a build-versioning mechanism as the root cause enabling repeated doc/code drift |
| Devil's Advocate | (no venue recommendation) | 2 Critical (the confound-resolution decision is left open; no directional-bias analysis exists), 3 Major (asymmetric analytic rigor vs. order effects; disclosure conflated with control; companion document currently contradicts this one) |

**Overall signal**: the AR-frontend-sync update itself is well-executed and internally
consistent — no reviewer found contradictions between where the new confounds are described
(Sections 5, 6, 7) or stale residual claims left behind from the sync. The Major Revision call
reflects that the sync *surfaced* two new, unresolved internal-validity threats to the primary
hypotheses, and three independent reviewers converged on the same specific, actionable
prediction about how those threats bias which hypotheses — a genuinely new and well-grounded
finding this round, not a carryover restatement of Round 2's issues (though two Round 2 items —
the order-covariate tie-break rule and the venue lock — remain open and are noted as such).

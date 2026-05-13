# MODERATION_MODEL

## Moderation State Machine
- pending
- auto_approved
- auto_rejected
- needs_human_review
- human_approved
- human_rejected
- appealed
- appeal_approved
- appeal_rejected

## Targets
- video
- thumbnail
- caption
- comment
- user_profile
- livestream (placeholder)

## Signals
- adult_content
- violence
- hate_speech
- spam
- scam
- copyright_risk
- fake_engagement
- bot_behavior
- repeated_reports
- creator_violation_history

## Decision Logic (MVP)
- Score each signal in `[0,1]`
- Weighted risk score produces auto decision:
  - `< 0.25` auto approve
  - `0.25-0.74` needs human review
  - `>= 0.75` auto reject
- High-severity overrides force human review for compliance

## Automation Features
- Auto-prioritize queues by risk × reach
- Auto-close duplicate reports
- Auto-escalate repeat offenders
- Auto-generate decision rationale and evidence pointers

## Appeals
- Appeals create immutable audit trail
- SLA targets by severity
- Appeal outcomes update creator trust score

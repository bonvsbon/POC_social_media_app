# AUTOMATION_SERVICES

## Services
1. Moderation Worker
2. Spam/Bot Scoring Worker
3. Report Prioritization Worker
4. Auto Payout Calculator
5. Analytics Aggregator

## Core Contracts
- Input: domain events (`video.uploaded`, `comment.created`, `report.created`, `payout.cycle.started`)
- Output: state transitions, risk scores, queue routing decisions, payout statements.

## Human-in-the-loop
Only high-risk/low-confidence cases enter manual queues.

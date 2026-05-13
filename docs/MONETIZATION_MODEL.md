# MONETIZATION_MODEL

## Fee Components
Each transaction uses configurable components:
1. Gross amount
2. Platform fee
3. Payment gateway fee
4. Tax/withholding
5. Net creator payout

`net = gross - platform_fee - gateway_fee - tax`

## Supported Revenue Models
- Creator subscriptions
- Tips/donations
- Paid exclusive videos
- Brand sponsorship marketplace (phase expansion)
- Ad revenue share
- Affiliate links

## Configuration Strategy
- Central `fee_rules` table with effective date range
- Rule dimensions: country, product_type, creator_tier, campaign_type
- Versioned rule evaluation with audit logs

## Adapter Architecture
- `PaymentProviderAdapter` interface (Stripe, PromptPay provider, others)
- `KycProviderAdapter` interface (automated checks)
- `TaxPolicyAdapter` interface (country-specific tax treatment)

## Transparency
Creator dashboard shows per-transaction breakdown:
- gross amount
- all fees and percentages
- net amount
- payout status

## Low-Fee Differentiator
- Dynamic platform fee by creator trust/performance tier
- Optional discount campaigns funded by platform growth budget
- Minimal manual payout operations using automated settlement batches

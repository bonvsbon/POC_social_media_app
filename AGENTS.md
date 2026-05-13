# AGENTS Rules for Aurora Stream

## Scope
These rules apply to the entire repository.

## Engineering Principles
1. Keep architecture modular and automation-first.
2. Do not add hardcoded secrets, API keys, or credentials.
3. Preserve clean boundaries (controllers/services/domain logic).
4. All new endpoints must be versioned under `/api/v1`.
5. Payment, moderation, and KYC providers must be implemented through adapters.
6. Prefer explicit DTO validation and typed interfaces.

## Quality Requirements
- Add tests for core business logic changes.
- Keep commits focused and reviewable.
- Update docs when behavior, schema, or API contracts change.

## Product Constraints
- Do not copy trademarked branding or proprietary visual assets from other platforms.
- Preserve low-fee and low-operation-cost design goals.

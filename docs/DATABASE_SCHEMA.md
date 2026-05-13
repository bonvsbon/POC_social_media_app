# DATABASE_SCHEMA

## Core Entity Groups

### Identity
- users
- user_profiles
- creators
- admin_users
- roles
- permissions

### Content & Engagement
- videos
- video_assets
- video_metrics
- video_events
- hashtags
- video_hashtags
- sounds
- comments
- comment_likes
- likes
- bookmarks
- follows

### Trust & Moderation
- reports
- moderation_cases
- moderation_actions
- appeals

### Monetization
- payment_accounts
- transactions
- payouts
- fee_rules
- creator_revenue

### Platform Ops
- notifications
- audit_logs

## Normalization Notes
- `users` owns identity; role-specific profile data separated.
- `videos` stores canonical video metadata; encoded outputs in `video_assets`.
- `video_metrics` is aggregate snapshot; raw events stored in `video_events`.
- many-to-many hashtag relation through `video_hashtags`.

## Key Constraints
- Unique follow pair `(follower_user_id, following_user_id)`
- Unique like pair `(user_id, video_id)`
- Soft deletion fields on user-generated content
- Enumerated states for moderation and payouts

## Indexing Strategy (MVP)
- Feed retrieval: `(visibility, moderation_state, published_at DESC)`
- Engagement queries: `video_id` indexes on likes/comments
- Search fallback: PostgreSQL GIN full-text index for captions/hashtags
- Moderation queue: `(state, priority_score DESC, created_at)`

## Migration Location
- SQL baseline migration: `apps/api/src/infrastructure/migrations/0001_initial.sql`

# ARCHITECTURE

## System Overview
Aurora Stream uses a modular service architecture, starting as a modular monolith (NestJS modules) and evolving to independently scalable services.

### Core runtime components
- API Gateway/App API (NestJS)
- Feed Ranking Service (initial in-process module, later isolated)
- Video Processing Workers (queue consumers)
- Moderation Workers (policy + AI adapter orchestration)
- Notification Workers
- Analytics Workers
- Admin Dashboard (Next.js planned)
- Creator Dashboard (Next.js planned)
- PostgreSQL, Redis, S3-compatible object storage, CDN

## Design Goals
1. Low operational overhead via automation-first workflows
2. Low transaction fees with configurable fee rules
3. Explainable recommendation engine
4. Replaceable adapters: payments, KYC, moderation AI
5. Clear bounded contexts for future microservice split

## Bounded Contexts
- Identity & Access (auth, sessions, RBAC)
- Social Graph (follow/block)
- Content (video, caption, hashtags, sounds, visibility)
- Engagement (likes, comments, saves, shares)
- Discovery (search, trend, hashtag/sound pages)
- Feed Ranking (candidate generation + scoring)
- Moderation & Trust (risk signals, case lifecycle, appeals)
- Monetization (transactions, fee rules, payout)
- Notifications
- Analytics & Experimentation

## Scalability Path
- **MVP**: modular monolith + background workers
- **Growth**: split feed, moderation, and video processing into dedicated services
- **Scale**: event-driven architecture + stream processing for near-real-time metrics

## Data & Event Flow (Upload)
1. Client requests signed upload URL
2. Upload to object storage
3. API creates `videos` row with `processing_status=pending`
4. Job enqueued to `video.processing`
5. Worker runs FFmpeg pipeline, writes `video_assets`
6. Moderation pipeline evaluates media + caption
7. If approved, publish and emit indexing/feed events

## Security & Compliance
- JWT access + refresh tokens
- RBAC permissions for admin and ops tooling
- Rate limiting per IP/user
- Signed URLs and MIME/size checks
- Audit logs for privileged actions
- Config-driven secrets via environment variables

## Automation-First Operations
- Auto moderation classification + confidence thresholds
- Auto case routing to human only for ambiguous/high-risk cases
- Auto report prioritization by trust and severity
- Creator trust and violation scores affecting distribution
- Automated payout calculations and statement generation

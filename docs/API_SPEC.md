# API_SPEC

Base path: `/api/v1`

## Auth
- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/logout`

## User/Creator
- `GET /users/me`
- `PATCH /users/me`
- `GET /creators/:creatorId`

## Video
- `POST /videos/upload-url`
- `POST /videos`
- `GET /videos/:videoId`
- `PATCH /videos/:videoId`
- `DELETE /videos/:videoId`

## Feed
- `GET /feed/for-you`
- `GET /feed/following`

## Social Actions
- `POST /videos/:videoId/likes`
- `DELETE /videos/:videoId/likes`
- `POST /videos/:videoId/bookmarks`
- `DELETE /videos/:videoId/bookmarks`
- `POST /users/:userId/follow`
- `DELETE /users/:userId/follow`

## Comments
- `POST /videos/:videoId/comments`
- `POST /comments/:commentId/replies`
- `POST /comments/:commentId/likes`
- `DELETE /comments/:commentId/likes`

## Moderation/Reports
- `POST /reports`
- `GET /admin/moderation/cases`
- `POST /admin/moderation/cases/:caseId/decision`
- `POST /appeals`

## Payments/Payouts
- `GET /creator/revenue/summary`
- `GET /creator/payouts`
- `POST /creator/payouts/request`
- `GET /admin/fee-rules`
- `POST /admin/fee-rules`

## Conventions
- JWT Bearer authentication
- DTO validation with class-validator
- Cursor pagination for feed and comments
- Idempotency key for payment actions

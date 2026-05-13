#!/usr/bin/env bash
set -euo pipefail

echo "[simulate] checking required docs..."
for f in README.md docs/ARCHITECTURE.md docs/API_SPEC.md docs/DATABASE_SCHEMA.md docs/MONETIZATION_MODEL.md docs/MODERATION_MODEL.md docs/ROADMAP.md AGENTS.md; do
  test -f "$f"
done

echo "[simulate] checking backend scaffold files..."
for f in \
  apps/api/package.json \
  apps/api/tsconfig.json \
  apps/api/src/main.ts \
  apps/api/src/modules/app.module.ts \
  apps/api/src/modules/feed/feed.ranking.service.ts \
  apps/api/src/infrastructure/migrations/0001_initial.sql \
  apps/api/test/feed-ranking.spec.ts \
  .github/workflows/ci.yml; do
  test -f "$f"
done

echo "[simulate] checking API version prefix..."
rg -n "setGlobalPrefix\('api/v1'\)" apps/api/src/main.ts >/dev/null

echo "[simulate] checking ranking logic has negative-signal penalty..."
rg -n "negativeSignalScore \* 0.25" apps/api/src/modules/feed/feed.ranking.service.ts >/dev/null

echo "[simulate] checking SQL has uniqueness constraints..."
rg -n "UNIQUE \(user_id, video_id\)" apps/api/src/infrastructure/migrations/0001_initial.sql >/dev/null
rg -n "UNIQUE \(follower_user_id, following_user_id\)" apps/api/src/infrastructure/migrations/0001_initial.sql >/dev/null

echo "[simulate] SUCCESS: structural checks passed"

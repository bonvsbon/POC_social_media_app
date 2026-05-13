# Aurora Stream — Short Video Platform Monorepo

Aurora Stream is an original short-video social platform architecture inspired by modern vertical video experiences (without copying any trademarked branding/UI). This repository is organized as a scalable monorepo and currently includes:

- Phase 1: Product, architecture, schema, API, monetization, moderation, roadmap docs
- Phase 2: Backend foundation (NestJS-based API skeleton + core modules + tests + migrations)

## Monorepo Structure

- `docs/` — product and architecture documentation
- `apps/api/` — backend API service (NestJS)
- `.github/workflows/` — CI pipeline

## Quick Start (Backend)

```bash
cd apps/api
npm install
npm run build
npm run test
npm run start:dev
```


## Offline Test Simulation

If dependency installation is blocked (e.g., private/offline environment), run:

```bash
./scripts/simulate-tests.sh
```

This validates project structure and critical baseline rules (API prefix, feed penalty logic, and migration constraints).

## Local Infrastructure (MVP)

A Docker Compose stack is planned for the next implementation phase (Phase 7 production readiness). Current docs already define container and deployment targets.

## Product Principles

- Automation-first moderation and operations
- Low-fee, configurable creator monetization
- Scalable modular architecture
- Explainable feed ranking
- Clean API versioning and RBAC patterns from day one


## Additional Apps (Scaffolded)

- `apps/mobile` — React Native (Expo) mobile shell
- `apps/admin` — Next.js admin dashboard shell
- `apps/creator` — Next.js creator dashboard shell

## Infrastructure Bootstrap

- `docker-compose.yml` for local API + Postgres + Redis + MinIO
- `.env.example` for environment variables
- `docs/PRODUCTION_READINESS.md` and `docs/AUTOMATION_SERVICES.md` for phases 6-7

## Current Implementation Status

- ✅ Planning/Architecture docs
- ✅ Backend project structure
- ✅ Auth/User/Video/Feed/Social modules skeleton
- ✅ SQL migration baseline for core tables
- ✅ Unit tests for core ranking and fee logic
- 🚧 Mobile app, admin dashboard, creator dashboard (future phases)

See `docs/ROADMAP.md` for phased delivery.

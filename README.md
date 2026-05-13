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



## Local URIs (No Docker)

- API: `http://localhost:3000/api/v1`
- Mobile (Expo dev tools): `http://localhost:8081`
- Mobile (browser mode): run `npm run start -- --web` in `apps/mobile`, then open `http://localhost:19006`
- Admin dashboard: run `npm run dev` in `apps/admin`, then open `http://localhost:3001` (or the port shown in terminal)
- Creator dashboard: run `npm run dev` in `apps/creator`, then open `http://localhost:3002` (or the port shown in terminal)

Tip: for admin/creator, use explicit ports to avoid conflict:

```bash
# terminal A
cd apps/admin && npm run dev -- -p 3001

# terminal B
cd apps/creator && npm run dev -- -p 3002
```

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


## Integration Run Order (No Docker)

1. Start API first:

```bash
cd apps/api
npm install
npm run start:dev
```

2. Start Admin (integrated to API):

```bash
cd apps/admin
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api/v1 npm run dev -- -p 3001
```

3. Start Creator (integrated to API):

```bash
cd apps/creator
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api/v1 npm run dev -- -p 3002
```

4. Start Mobile (integrated to API):

```bash
cd apps/mobile
EXPO_PUBLIC_API_BASE_URL=http://localhost:3000/api/v1 npm run start -- --web
```

Then open:
- Admin: `http://localhost:3001`
- Creator: `http://localhost:3002`
- Mobile Web: `http://localhost:19006`

> If testing on a physical phone, replace `localhost` with your computer LAN IP.

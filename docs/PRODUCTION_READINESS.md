# PRODUCTION_READINESS

## CI/CD
- GitHub Actions build/test pipelines for api/mobile/admin/creator (expand incrementally).
- Branch protection with required checks.

## Security Checklist
- [ ] Rotate JWT secrets and use secret manager.
- [ ] Enforce HTTPS + HSTS in production.
- [ ] WAF and bot mitigation at edge.
- [ ] RBAC review for admin actions.
- [ ] PII retention/deletion policy.

## Load Testing Notes
- API feed endpoint target p95 < 250ms for cached requests.
- Video upload initiation endpoint target p95 < 300ms.
- Queue pipeline should process > 50 videos/min per worker pod baseline.

## Deployment
- Local: `docker compose up --build`
- Production: Kubernetes with managed PostgreSQL/Redis/object storage/CDN.

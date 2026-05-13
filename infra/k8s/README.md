# Kubernetes Readiness Notes

- Deploy API, workers, admin, creator dashboards as separate deployments.
- Use HPA for API and workers based on CPU and queue depth.
- Run PostgreSQL as managed service in production.
- Use managed object storage + CDN for video delivery.

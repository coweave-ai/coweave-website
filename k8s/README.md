# Kubernetes Deployment for CoWeave Website

This directory contains Kubernetes manifests for deploying the CoWeave website to a K8s cluster (staging/internal testing).

## Prerequisites

- Docker installed
- Access to a container registry
- kubectl configured for your cluster
- nginx ingress controller installed
- cert-manager installed (for TLS)

## Files

| File | Description |
|------|-------------|
| `namespace.yaml` | Creates the `coweave-website` namespace |
| `deployment.yaml` | Deploys the website with 2 replicas |
| `service.yaml` | ClusterIP service on port 80 |
| `ingress.yaml` | Ingress with TLS (uses cert-manager) |
| `kustomization.yaml` | Kustomize config for easy deployment |

## Deployment Steps

### 1. Build and Push Docker Image

```bash
# From the project root directory
cd /home/coweave/coweave/coweave-website

# Build the image
docker build -t your-registry/coweave-website:latest .

# Push to your registry
docker push your-registry/coweave-website:latest
```

### 2. Update the Image Reference

Edit `k8s/deployment.yaml` and update the image:
```yaml
image: your-registry/coweave-website:latest
```

### 3. Update the Hostname

Edit `k8s/ingress.yaml` and update the hostname:
```yaml
- host: your-hostname.example.com
```

### 4. Deploy to Kubernetes

Using kustomize (recommended):
```bash
kubectl apply -k k8s/
```

Or apply individually:
```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

### 5. Verify Deployment

```bash
# Check pods
kubectl get pods -n coweave-website

# Check service
kubectl get svc -n coweave-website

# Check ingress
kubectl get ingress -n coweave-website

# Check TLS certificate
kubectl get certificate -n coweave-website
```

### 6. Update DNS

Point your hostname to the ingress controller's external IP.

## Quick Deploy Script

```bash
#!/bin/bash
REGISTRY="your-registry"
TAG="latest"

# Build
docker build -t $REGISTRY/coweave-website:$TAG .

# Push
docker push $REGISTRY/coweave-website:$TAG

# Deploy
kubectl apply -k k8s/

# Restart deployment to pull new image
kubectl rollout restart deployment/coweave-website -n coweave-website
```

## Cleanup

```bash
kubectl delete -k k8s/
```

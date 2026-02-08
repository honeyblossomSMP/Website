# Deployment Guide for Koyeb

This website is now ready for deployment on Koyeb!

## Prerequisites
- A GitHub account with this repository
- A Koyeb account (free tier available)

## Deployment Steps

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Koyeb deployment ready"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Connect to Koyeb
1. Go to [Koyeb control panel](https://app.koyeb.com)
2. Click "Create Service"
3. Select "GitHub" as deployment source
4. Authorize and select YOUR_USERNAME/YOUR_REPO
5. Choose "Docker" as builder
6. Keep defaults - Dockerfile will be auto-detected
7. In the "Ports & Variables" section, ensure port `8080` is exposed
8. Click "Create Service"

### 3. Monitor Deployment
- Koyeb will automatically build and deploy your website
- You'll get a unique URL like `https://your-service.koyeb.app`
- Any push to `main` branch will trigger automatic redeployment

## Custom Domain (Optional)
1. In Koyeb dashboard, go to your service settings
2. Add custom domain under "Custom domains"
3. Update DNS records at your registrar

## Configuration

### Modify koyeb.yaml
Edit `koyeb.yaml` to change:
- Service name
- Git branch
- Region (fra = Frankfurt, wsa = Washington, syd = Sydney, sfo = San Francisco)
- Scaling limits

### Environment Variables
Add environment variables in `koyeb.yaml` or via Koyeb dashboard without rebuilding.

## Monitoring
- View logs: Dashboard → Service → Logs
- CPU/Memory usage: Dashboard → Service → Metrics
- All requests are automatically logged

## Troubleshooting

### Build fails
- Check `Dockerfile` syntax
- Ensure `.dockerignore` excludes unnecessary files
- Review Koyeb build logs

### Website not loading correctly
- Clear browser cache
- Check nginx config in `nginx.conf`
- Verify all asset paths are relative (no absolute paths)

### Performance issues
- Increase `max_instances` in `koyeb.yaml`
- Enable gzip compression (already done in nginx.conf)
- Use CDN for static assets (optional)

## Files Included

- `Dockerfile` - Container image definition
- `nginx.conf` - Nginx web server configuration
- `koyeb.yaml` - Koyeb deployment configuration
- `.gitignore` - Git ignore rules
- `.dockerignore` - Docker build ignore rules
- `DEPLOY.md` - This deployment guide

## Support

For Koyeb support, visit: https://docs.koyeb.com

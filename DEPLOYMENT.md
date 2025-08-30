# Deployment Guide 🚀

This guide provides step-by-step instructions for deploying the Visual Product Matcher application to various platforms.

## Quick Start

1. **Clone and Setup**
   ```bash
   git clone <repository-url>
   cd visual-product-matcher
   npm install
   npm run build
   ```

2. **Test Locally**
   ```bash
   npm run preview
   # Application will be available at http://localhost:3000
   ```

## Deployment Options

### 1. Vercel (Recommended) ⚡

Vercel provides the easiest deployment for Next.js applications.

**Method 1: One-Click Deployment**
1. Fork this repository to your GitHub account
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" and import your forked repository
4. Vercel will automatically detect Next.js and configure settings
5. Click "Deploy" and your app will be live in minutes

**Method 2: CLI Deployment**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

**Environment Configuration:**
- No additional environment variables needed
- All configuration is handled in `next.config.ts`
- Images are optimized automatically

### 2. Netlify 🌐

**Step 1: Prepare for Netlify**
```bash
# Add netlify.toml (already included in repository)
# Build command: npm run build
# Publish directory: .next
```

**Step 2: Deploy**
1. Push code to GitHub
2. Connect GitHub repository to Netlify
3. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy

### 3. AWS Amplify ☁️

**Step 1: Create Amplify App**
1. Go to AWS Amplify Console
2. Choose "Host web app"
3. Connect your GitHub repository

**Step 2: Build Settings**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### 4. Digital Ocean App Platform 🌊

**Step 1: Create App**
1. Log into Digital Ocean
2. Go to Apps section
3. Create new app from GitHub repository

**Step 2: Configure**
```yaml
name: visual-product-matcher
services:
- name: web
  source_dir: /
  github:
    repo: your-username/visual-product-matcher
    branch: main
  run_command: npm start
  build_command: npm run build
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
```

### 5. Docker Deployment 🐳

**Build Docker Image**
```bash
# Build the image
docker build -t visual-product-matcher .

# Run locally
docker run -p 3000:3000 visual-product-matcher

# Push to Docker Hub
docker tag visual-product-matcher your-username/visual-product-matcher
docker push your-username/visual-product-matcher
```

**Docker Compose**
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

### 6. Traditional VPS/Server 🖥️

**Prerequisites:**
- Node.js 18+ installed
- PM2 for process management

**Deployment Steps:**
```bash
# Clone repository
git clone <repository-url>
cd visual-product-matcher

# Install dependencies
npm ci --only=production

# Build application
npm run build

# Install PM2
npm install -g pm2

# Start application with PM2
pm2 start npm --name "visual-product-matcher" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

## Environment Variables

For production deployments, consider these optional environment variables:

```bash
# Optional: Enable analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional: Custom API endpoints
NEXT_PUBLIC_API_URL=https://your-api-domain.com

# Optional: Enable error monitoring
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

## Performance Optimization

### 1. Image Optimization
- Uses Next.js built-in image optimization
- Configure `next.config.ts` for additional domains
- Consider using a CDN for static assets

### 2. Caching Strategy
```javascript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}
```

### 3. Bundle Analysis
```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer .next
```

## Monitoring & Analytics

### Error Monitoring with Sentry
```bash
npm install @sentry/nextjs
# Configure in next.config.js
```

### Performance Monitoring
- Use Vercel Analytics (free with Vercel deployment)
- Google PageSpeed Insights
- Web Vitals monitoring

### Uptime Monitoring
- UptimeRobot (free tier available)
- Pingdom
- StatusCake

## Security Considerations

### Production Checklist
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Rate limiting implemented (if needed)
- [ ] Error messages don't expose sensitive information
- [ ] Dependencies regularly updated

### Content Security Policy
```javascript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self' https://images.unsplash.com; script-src 'self' 'unsafe-eval' 'unsafe-inline'"
          }
        ]
      }
    ]
  }
}
```

## Scaling Considerations

### Load Balancing
- Use platform-specific load balancing (Vercel, Netlify Edge)
- Consider CDN for global distribution

### Database Integration
When scaling to production with real data:
- PostgreSQL/MySQL for product catalog
- Redis for caching search results
- Elasticsearch for advanced search capabilities

### API Integration
- Implement real ML/AI services:
  - Google Vision API
  - AWS Rekognition
  - Azure Computer Vision
  - Custom TensorFlow.js models

## Troubleshooting

### Common Issues

**Build Failures:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Image Loading Issues:**
- Check `next.config.ts` image domains configuration
- Verify external image URLs are accessible

**Performance Issues:**
- Enable compression in deployment platform
- Optimize images before upload
- Use WebP format when possible

### Debugging
```bash
# Enable debug mode
DEBUG=* npm run dev

# Check build output
npm run build 2>&1 | tee build.log
```

## Support

For deployment issues:
1. Check the [README.md](./README.md) for basic setup
2. Review platform-specific documentation
3. Check GitHub Issues for similar problems
4. Create a new issue with deployment details

---

**Production Checklist:**
- [ ] Application builds successfully
- [ ] All images load correctly
- [ ] Mobile responsiveness verified
- [ ] Performance metrics acceptable
- [ ] Error monitoring configured
- [ ] Analytics tracking enabled
- [ ] Security headers configured
- [ ] Backup strategy implemented

# Deployment Guide

## Environment Variables

Before deploying, set these environment variables in your hosting platform:

### Required
- `NODE_ENV=production`
- `ALLOWED_ORIGINS=https://yourdomain.com`

### Optional
- `VITE_PUBLIC_BUILDER_KEY` - Builder.io API key
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` - Email configuration
- `GA_TRACKING_ID` - Google Analytics tracking ID

## Netlify Deployment

1. **Connect Repository**
   ```bash
   # Push to GitHub
   git push origin main
   ```

2. **Configure Netlify**
   - Build command: `pnpm build`
   - Publish directory: `dist/spa`
   - Functions directory: `netlify/functions`

3. **Set Environment Variables**
   - Go to Site settings → Environment variables
   - Add all required variables

4. **Deploy**
   ```bash
   # Or use Netlify CLI
   pnpm add -g netlify-cli
   netlify deploy --prod
   ```

## Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   pnpm add -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Set Environment Variables**
   ```bash
   vercel env add ALLOWED_ORIGINS
   vercel env add NODE_ENV
   ```

## Manual Deployment

1. **Build**
   ```bash
   pnpm build
   ```

2. **Start Production Server**
   ```bash
   pnpm start
   ```

## Security Checklist

- ✅ Helmet.js configured for security headers
- ✅ CORS restricted to allowed origins
- ✅ Input validation with Zod
- ✅ Rate limiting on API endpoints (recommended)
- ✅ HTTPS enforced in production
- ✅ Environment variables secured

## Post-Deployment

1. Test all forms and API endpoints
2. Verify analytics tracking
3. Check security headers: https://securityheaders.com
4. Test cross-browser compatibility
5. Monitor error logs

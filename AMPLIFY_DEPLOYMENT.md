# AWS Amplify Deployment Guide

This portfolio is configured for deployment on AWS Amplify. Follow these steps to deploy your site.

## Prerequisites

1. AWS Account
2. GitHub repository with your code
3. AWS Amplify CLI (optional, for local testing)

## Deployment Steps

### 1. Prepare Your Repository

The following files have been configured for Amplify:
- `amplify.yml` - Build configuration
- `next.config.mjs` - Updated for static export
- `package.json` - Added export script

### 2. Environment Variables (Optional)

Create a `.env.local` file for local development with these variables:

```bash
# Next.js Configuration
NEXT_PUBLIC_SITE_URL=https://your-app-name.amplifyapp.com

# Social Media Links
NEXT_PUBLIC_GITHUB_URL=https://github.com/Cakyparu777
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/tuguldur-ganbaatar-05a5b1290
NEXT_PUBLIC_EMAIL=tuguldur.gee.2001@gmail.com

# Contact Form (if using external service)
# NEXT_PUBLIC_CONTACT_FORM_API_URL=your_api_endpoint
# NEXT_PUBLIC_CONTACT_FORM_API_KEY=your_api_key

# Analytics (optional)
# NEXT_PUBLIC_GA_TRACKING_ID=your_google_analytics_id
```

### 3. Deploy to AWS Amplify

1. **Connect Repository:**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your GitHub repository

2. **Configure Build Settings:**
   - Amplify will automatically detect the `amplify.yml` file
   - Verify these settings:
     - **Build command:** `npm run build`
     - **Base directory:** (leave empty)
     - **Artifacts directory:** `out`

3. **Environment Variables (if needed):**
   - Add any environment variables in the Amplify console
   - Use the same variable names as in your `.env.local`

4. **Deploy:**
   - Click "Save and deploy"
   - Wait for the build to complete

### 4. Custom Domain (Optional)

1. In Amplify Console, go to "Domain management"
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` environment variable

## Local Testing

To test the build process locally:

```bash
# Install dependencies
npm install

# Build (export happens automatically with output: 'export' in next.config.mjs)
npm run build

# The static files will be in the 'out' directory
# You can serve them with any static file server
npx serve out
```

## Build Configuration

The `amplify.yml` file contains the build configuration:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - echo Installing dependencies...
        - npm ci
    build:
      commands:
        - echo Building the Next.js app...
        - npm run build
  artifacts:
    baseDirectory: out
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify that `next.config.mjs` has `output: 'export'`
- Ensure all image files are in the `public` directory

### Deployment Cancelled
- **Timeout Issues:** The build may be taking too long. Check AWS Amplify console for timeout errors.
- **Memory Issues:** Large dependencies can cause memory issues. Consider optimizing your build.
- **Node.js Version:** The `amplify.yml` includes `nvm install 18` and `nvm use 18` to ensure Node.js 18 is available. The `.nvmrc` file specifies the version.
- **Dependency Issues:** Try clearing the cache in AWS Amplify console and redeploy.
- **Missing required files:** For Next.js static exports, `required-server-files.json` and `.next/trace` files are automatically created during build to satisfy Amplify's requirements.

### Images Not Loading
- Make sure images are in the `public` directory
- Use relative paths starting with `/`
- The `images.unoptimized: true` setting is required for static export

### Routing Issues
- All routes are pre-generated as static files
- Use `Link` components for internal navigation
- External links should use full URLs

### Common Amplify Issues
1. **Build Timeout:** Default is 30 minutes. If your build takes longer, contact AWS support.
2. **Memory Limits:** Default is 3GB RAM. If you need more, request a limit increase.
3. **Cache Issues:** Clear the build cache in Amplify console if you encounter stale builds.
4. **Server Trace Files:** AWS Amplify expects server trace files even for static exports. The build process creates these automatically.

## Support

For issues with:
- **AWS Amplify:** Check AWS documentation
- **Next.js Static Export:** See Next.js documentation
- **This Portfolio:** Check the repository issues

## Notes

- This configuration creates a fully static site
- No server-side functionality (API routes won't work)
- All features are client-side only
- Perfect for portfolios, blogs, and marketing sites

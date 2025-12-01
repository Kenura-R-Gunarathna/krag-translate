# Deployment Guide

This guide explains how to deploy the KRAG Translate documentation to GitHub Pages.

## Automatic Deployment (Recommended)

The documentation is automatically deployed to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy on the next push to `main`

### Workflow File

The deployment is handled by `.github/workflows/deploy-docs.yml`:

```yaml
name: Deploy Docusaurus to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:
```

This workflow:
- Builds the Docusaurus site
- Uploads the build artifacts
- Deploys to GitHub Pages

## Manual Deployment

If you prefer to deploy manually:

### Using npm deploy

```bash
cd docs
npm run deploy
```

This will:
1. Build the site
2. Push to the `gh-pages` branch
3. Deploy to GitHub Pages

### Prerequisites for Manual Deployment

Update `docusaurus.config.ts` with your GitHub information:

```typescript
organizationName: 'your-github-username',
projectName: 'your-repo-name',
```

## Local Testing

Before deploying, test the build locally:

```bash
cd docs
npm run build
npm run serve
```

This will:
1. Build the static site
2. Serve it locally at `http://localhost:3000`

## Deployment Checklist

Before deploying, ensure:

- [ ] All documentation pages are complete
- [ ] Images are properly linked and accessible
- [ ] Internal links work correctly
- [ ] The site builds without errors (`npm run build`)
- [ ] Configuration is correct in `docusaurus.config.ts`
- [ ] GitHub repository settings allow GitHub Pages

## Custom Domain

To use a custom domain:

1. Add a `CNAME` file to `docs/static/`:
   ```
   docs.yourdomain.com
   ```

2. Configure DNS with your domain provider:
   - Add a CNAME record pointing to `your-username.github.io`

3. Update `docusaurus.config.ts`:
   ```typescript
   url: 'https://docs.yourdomain.com',
   baseUrl: '/',
   ```

## Troubleshooting

### Build Fails

**Check the build logs**:
- Go to **Actions** tab in GitHub
- Click on the failed workflow
- Review the error messages

**Common issues**:
- Broken internal links
- Missing images
- Syntax errors in markdown

### 404 Errors After Deployment

**Check `baseUrl`**:
```typescript
// For GitHub Pages project site
baseUrl: '/your-repo-name/',

// For custom domain or user site
baseUrl: '/',
```

### Assets Not Loading

**Ensure paths are correct**:
- Use `/img/...` for images in `static/img/`
- Don't use relative paths like `../img/...`

## Monitoring

After deployment:

1. **Check the live site**: Visit your GitHub Pages URL
2. **Test all pages**: Navigate through the documentation
3. **Verify images**: Ensure all images load correctly
4. **Test search**: If enabled, verify search functionality
5. **Mobile testing**: Check responsive design on mobile devices

## Updating Documentation

To update the documentation:

1. Make changes to markdown files in `docs/docs/`
2. Test locally with `npm start`
3. Commit and push to `main` branch
4. GitHub Actions will automatically deploy

## Rollback

If you need to rollback to a previous version:

1. Go to **Actions** tab
2. Find the successful deployment you want to restore
3. Click **Re-run jobs**

Or manually:

```bash
git revert <commit-hash>
git push origin main
```

## Performance Optimization

For faster deployments:

1. **Enable caching** in GitHub Actions (already configured)
2. **Optimize images** before adding them
3. **Minimize custom CSS/JS**

## Security

- Never commit sensitive information
- Use GitHub Secrets for any API keys
- Keep dependencies updated: `npm audit fix`

## Support

If you encounter issues:

- Check [Docusaurus documentation](https://docusaurus.io/docs/deployment)
- Review [GitHub Pages documentation](https://docs.github.com/en/pages)
- Open an issue in the repository

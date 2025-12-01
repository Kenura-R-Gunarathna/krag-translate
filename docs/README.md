# KRAG Translate Documentation

This directory contains the Docusaurus documentation site for KRAG Translate.

## Development

### Prerequisites
- Node.js 20 or higher
- npm

### Installation

```bash
cd docs
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The documentation is automatically deployed to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

You can also manually deploy using:

```bash
npm run deploy
```

## Documentation Structure

- `docs/` - Documentation pages in Markdown
  - `intro.md` - Introduction and getting started
  - `implementation-styles/` - Different implementation approaches
    - `dropdown.md` - Dropdown style documentation
    - `flag-list.md` - Flag-list style documentation
    - `text.md` - Text style documentation
  - `advanced/` - Advanced topics
    - `event-listeners.md` - Event handling guide
- `static/` - Static assets (images, etc.)
- `src/` - Custom React components and pages
- `docusaurus.config.ts` - Docusaurus configuration

## Adding New Documentation

1. Create a new `.md` file in the appropriate directory under `docs/`
2. Add frontmatter with `sidebar_position` to control ordering
3. The sidebar will automatically update based on the file structure

## Live Site

The documentation is available at: https://kenura-r-gunarathna.github.io/krag-translate/

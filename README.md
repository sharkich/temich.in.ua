# temich.in.ua

Personal portfolio website for Artem Koziar - Principal Software Engineer, Front-end development consultant, and Coach.

Built with **Next.js 14** with **Static Site Generation (SSG)** and **Markdown-based content management** for AI-friendly maintenance.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or 20+
- Yarn 1.22.22 (configured in package.json)

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Open http://localhost:3000
```

### Build & Deploy

```bash
# Build static HTML
yarn build

# Deploy to GitHub Pages
yarn deploy
```

## 📁 Project Structure

```
├── content/                    # 📝 Markdown content (AI edits here!)
│   ├── pages/                  # Page content
│   │   ├── home.md
│   │   ├── about.md
│   │   └── contacts.md
│   ├── sections/               # Reusable content blocks
│   └── config/
│       └── site.json           # Site-wide configuration
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── about/page.tsx
│   │   └── contacts/page.tsx
│   │
│   ├── components/             # React components
│   │   ├── DynamicAge.tsx      # Client-side age display
│   │   ├── DynamicExperience.tsx
│   │   └── Layout/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   │
│   ├── lib/                    # Services (SOLID principles)
│   │   ├── DateCalculator.ts   # Age/date calculations
│   │   └── ContentLoader.ts    # Markdown file loading
│   │
│   └── styles/
│       └── globals.css         # Global styles
│
├── public/                     # Static assets
│   ├── i/                      # Images, fonts, icons
│   └── apps/                   # Legacy Angular apps (preserved)
│
├── out/                        # 🎯 Built static HTML (deploy this)
│
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

## ✍️ Content Management (AI-Friendly!)

All content is managed via **Markdown files** in the `/content` directory.

### Adding/Editing Pages

**1. Create a new markdown file:**
```bash
content/pages/my-new-page.md
```

**2. Add frontmatter and content:**
```markdown
---
title: "My New Page"
description: "Page description for SEO"
---

# Page Content

Your markdown content here...
```

**3. Create corresponding Next.js page:**
```typescript
// src/app/my-new-page/page.tsx
import { ContentLoader } from '@/lib/ContentLoader';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function MyNewPage() {
  const contentLoader = new ContentLoader();
  const { content } = contentLoader.loadPage('my-new-page');

  return (
    <main className="main">
      <div className="content">
        <article className="card card-text markdown-content">
          <MDXRemote source={content} />
        </article>
      </div>
    </main>
  );
}
```

### Site Configuration

Edit `content/config/site.json` to update:
- Contact information
- Social links
- Analytics IDs
- Personal details (birthday, experience start date)

## 🏗️ Architecture

### SOLID Principles Applied

**Single Responsibility Principle:**
- `DateCalculator.ts` - Only handles date calculations
- `ContentLoader.ts` - Only handles content loading
- Each React component has a single purpose

**Dependency Inversion Principle:**
- Components depend on services (abstractions)
- Example: `DynamicAge` depends on `DateCalculator`

**Open/Closed Principle:**
- Services can be extended without modification
- Components can be composed

### Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.4
- **Content:** Markdown + MDX
- **Styling:** CSS (existing styles preserved)
- **Deployment:** GitHub Pages (static HTML)
- **Legacy:** Angular apps preserved in `/public/apps`

## 🚢 Deployment

### GitHub Pages (Automatic)

Push to `main` branch and run:

```bash
yarn deploy
```

This will:
1. Build static HTML to `/out`
2. Create `.nojekyll` file (required for Next.js)
3. Push to `gh-pages` branch
4. GitHub Pages will serve the site

### Manual Deployment

```bash
# Build
yarn build

# Deploy the /out directory to any static hosting
# - Firebase Hosting
# - Netlify
# - Vercel
# - AWS S3 + CloudFront
# - etc.
```

## 📝 Development Workflow

### Local Development

```bash
# Start dev server with hot reload
yarn dev
```

Changes to markdown files will reload automatically!

### Content Updates (AI-Friendly)

1. **Edit markdown files** in `/content/pages/`
2. **Changes appear instantly** in dev server
3. **Build** when ready: `yarn build`
4. **Deploy** to GitHub Pages: `yarn deploy`

### Adding New Features

1. **Services** → Add to `/src/lib/`
2. **Components** → Add to `/src/components/`
3. **Pages** → Add to `/src/app/`
4. **Content** → Add to `/content/pages/`

## 🧪 Scripts

```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server (testing only)
yarn deploy       # Build and deploy to GitHub Pages

# Legacy scripts (for old Firebase deployment)
yarn legacy:start  # Python dev server for old site
yarn legacy:deploy # Firebase deployment
```

## 🔧 Configuration

### next.config.js

Key settings:
- `output: 'export'` - Enables static HTML export
- `images.unoptimized: true` - Required for static export
- `trailingSlash: true` - Matches existing URL structure

### tsconfig.json

TypeScript configured with:
- Path aliases: `@/*` → `./src/*`
- Strict mode enabled
- App Router support

## 🎨 Styling

Global styles are preserved from the original site:
- `/src/styles/globals.css` (copied from `/public/i/app.css`)
- Custom font: WeberHandITCStd
- Existing CSS class names maintained

## 🌐 PWA Support

Service worker is preserved:
- `/public/i/service-worker.js`
- `/public/i/service-worker-registration.js`
- `/public/manifest.json`

## 📱 Responsive Design

Original responsive design preserved:
- Mobile-first approach
- Flexbox and Grid layouts
- Media queries intact

## 🔗 Legacy Apps

Angular applications preserved in `/public/apps`:
- `/apps/devchallenge12/` - Three Angular competition apps
- `/apps/pace/` - Angular game app
- `/apps/memory/` - Memory game
- `/apps/one-shot-sea-battle/` - Web component demo

These are served as-is without modification.

## 📄 License

ISC

## 👤 Author

**Artem Koziar**
- Website: https://temich.in.ua
- LinkedIn: https://www.linkedin.com/in/temich/
- Telegram: @sharkich
- Email: koziar.artem@gmail.com

---

**Migration Status:** ✅ Completed
- **From:** Static HTML + Firebase
- **To:** Next.js SSG + GitHub Pages
- **Content:** Markdown-based
- **Maintainability:** AI-friendly

**Version:** 3.0.0

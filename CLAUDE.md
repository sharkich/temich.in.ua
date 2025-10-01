# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Artem Koziar, a Principal Software Engineer and Front-end development consultant. The site is built with **Next.js 14** using **Static Site Generation (SSG)** and **Markdown-based content management** for AI-friendly maintenance.

**Primary URL:** https://temich.in.ua/
**Version:** 3.0.0 (Migrated from static HTML to Next.js SSG)

## Architecture

### Next.js SSG Structure
- **Build process:** Next.js builds static HTML from React components and Markdown content
- **GitHub Pages** - Static HTML hosting with automated deployment via GitHub Actions
- **Progressive Web App** - Service worker preserved from legacy site
- **Markdown Content** - All page content managed via Markdown files (AI-friendly!)
- **SOLID Principles** - TypeScript services and React components follow SOLID patterns
- **Multi-lingual support** - Structure preserved for English (default), Ukrainian (`/ua`), and Russian (`/ru`) versions

### Directory Structure
```
├── content/                    # 📝 Markdown content (AI edits here!)
│   ├── pages/                  # Page content (home.md, about.md, contacts.md)
│   ├── sections/               # Reusable content blocks
│   └── config/
│       └── site.json           # Site-wide configuration
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout (header/footer)
│   │   ├── page.tsx            # Home page
│   │   ├── about/page.tsx      # About page
│   │   └── contacts/page.tsx   # Contacts page
│   │
│   ├── components/             # React components
│   │   ├── DynamicAge.tsx      # Client-side age calculation
│   │   ├── DynamicExperience.tsx
│   │   └── Layout/
│   │       ├── Header.tsx      # Site header with navigation
│   │       └── Footer.tsx      # Site footer
│   │
│   ├── lib/                    # Services (SOLID principles)
│   │   ├── DateCalculator.ts   # Age/date calculations service
│   │   └── ContentLoader.ts    # Markdown content loading service
│   │
│   └── styles/
│       └── globals.css         # Global styles (from old app.css)
│
├── public/                     # Static assets
│   ├── i/                      # Images, fonts, icons (preserved)
│   │   ├── avatars/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── technologies/
│   │   └── messengers/
│   ├── apps/                   # Legacy Angular apps (preserved as-is)
│   │   ├── devchallenge12/
│   │   ├── pace/
│   │   ├── memory/
│   │   └── one-shot-sea-battle/
│   └── manifest.json           # PWA manifest
│
├── out/                        # 🎯 Built static HTML (deploy this)
│
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

### Key Technical Components

#### Main JavaScript (`public/i/app.js`)
- **Age Calculation** - Dynamically calculates and displays age (born 1984-09-26)
- **Experience Duration** - Calculates months since March 2023
- **UI Interactions** - Hover effects for logo/home navigation link synchronization
- **Loader Management** - Shows/hides loading spinner

#### Portfolio Apps
- **DevChallenge12** - Three Angular applications (schedule, libraries, final-spaces-game)
- **Pace** - Angular app with service worker (ngsw)
- **Sea Battle Grid** - Custom Web Component (`SeaBattleGrid`) - 10x10 boolean grid with shadow DOM
- **Memory Game** - Browser-based memory game

#### PWA Features
- Service worker registration for offline functionality
- Web manifest with app icons (144x144, 152x152)
- Apple touch icons and tile icons for platform-specific installation

## Development Commands

### Local Development
```bash
# Start Next.js development server with hot reload
yarn dev
# Opens http://localhost:3000
```

### Building & Deployment
```bash
# Build static HTML for production
yarn build
# Output: ./out/ directory

# Deploy to GitHub Pages
yarn deploy
# Builds and pushes to gh-pages branch

# Legacy commands (for old Firebase deployment)
yarn legacy:start   # Python dev server for old site
yarn legacy:deploy  # Firebase deployment
```

### Content Editing (AI-Friendly!)
```bash
# All content is in Markdown files
# Edit: content/pages/*.md
# Changes appear instantly during yarn dev
```

## Firebase Configuration

The site is hosted on Firebase with the following configuration (`firebase.json`):
- **Public directory:** `public/`
- **Ignored files:** `firebase.json`, `**/~*/.*`, `**/node_modules/**`

## Technology Stack

### Core Technologies
- **HTML5** - Semantic markup with accessibility considerations
- **CSS3** - Custom stylesheets, web fonts (WeberHandITCStd)
- **Vanilla JavaScript** - No framework dependencies for the main site
- **Angular** - Used in portfolio apps (DevChallenge12, Pace)
- **Web Components** - Custom elements (SeaBattleGrid)

### External Services
- **Firebase Hosting** - Static file hosting and deployment
- **Google Analytics** - UA-59357319-1
- **Hit.ua** - Ukrainian traffic analytics
- **Font Loading** - Custom web fonts (WOFF2, WOFF, TTF)

## Content Management (AI-Friendly!)

### Markdown-Based Content System

All page content is now managed via **Markdown files** in `/content/pages/`. This makes it extremely easy for AI to edit and maintain content.

**Example: Editing the home page**
```markdown
<!-- content/pages/home.md -->
---
title: "Artem Koziar — Principal Software Engineer"
description: "Front-end consultant and coach"
---

## Professional Overview

I have over 15 years of professional experience...
```

### Updating Personal Information

**Site Configuration** (`content/config/site.json`):
```json
{
  "birthday": "1984-09-26",
  "experienceStartDate": "2023-03-01",
  "contacts": {
    "telegram": "sharkich",
    "email": "koziar.artem@gmail.com"
  }
}
```

**Dynamic Components:**
- Age is calculated client-side using `DateCalculator` service
- Experience duration calculated from start date
- Values pulled from `site.json` configuration

### Asset Management
- **Company logos** - `public/about/i/` (Grammarly, Ciklum, Luxoft, Innovecs)
- **Technology icons** - `public/i/technologies/` (JS, HTML, CSS, TS, React, Angular)
- **Profile photos** - `public/i/avatars/`
- **Messenger icons** - `public/i/messengers/`

### Contact Information
Multiple contact methods integrated:
- **Telegram:** @sharkich
- **Messenger:** temich.in.ua
- **Viber:** +380677317648
- **Email:** koziar.artem@gmail.com

### Navigation Structure
- **Home** - Main landing page with professional overview
- **Apps** - Portfolio applications showcase
- **Log** - Blog/activity log
- **Family** - Family information
- **About** - Professional background, CV, resume
- **Contacts** - Contact information and forms

## Web Components

### SeaBattleGrid Component
Custom web component for interactive 10x10 grid:
- **File:** `public/apps/one-shot-sea-battle/script.js`
- **Usage:** `<sea-battle-grid></sea-battle-grid>`
- **Features:** Shadow DOM, boolean field array, coordinate labels (A-J, 1-10), click interactions

## Service Worker Strategy

The main site includes a basic service worker for PWA functionality. Some apps (Pace, DevChallenge12) use Angular's ngsw (Angular Service Worker) for more sophisticated caching strategies.

## Notes for Development

- **No build step** - Direct file editing in `public/` directory
- **Firebase CLI required** - For deployment: `npm install -g firebase-tools`
- **Git operations** - Follow standard git workflow (branch, commit, push)
- **Python requirement** - Python 2.x SimpleHTTPServer for local dev (consider updating to Python 3: `python3 -m http.server 8000`)
- **Multi-lingual** - When updating content, consider updating UA and RU versions as well

## Testing Locally

After starting the development server:
1. Visit http://localhost:8000
2. Test PWA features (service worker, offline functionality)
3. Verify portfolio apps load correctly
4. Check responsive design on different viewports
5. Test contact form integrations

## Deployment Workflow

```bash
# 1. Make changes in public/ directory
# 2. Test locally
yarn start
# 3. Deploy to Firebase
yarn deploy
```

No pre-deployment build or compilation steps required.

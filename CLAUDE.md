# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Artem Koziar, a Principal Software Engineer and Front-end development consultant. The site is a static HTML/CSS/JS website hosted on Firebase Hosting, showcasing professional experience, portfolio apps, CV/resume, and contact information.

**Primary URL:** https://temich.in.ua/

## Architecture

### Static Site Structure
- **No build process required** - Pure HTML/CSS/JS files served directly from the `public/` directory
- **Firebase Hosting** - Simple static file hosting with `firebase.json` configuration
- **Progressive Web App** - Includes manifest.json and service worker for offline functionality
- **Multi-lingual support** - English (default), Ukrainian (`/ua`), and Russian (`/ru`) versions

### Directory Structure
```
public/
├── index.html           # Main landing page (EN)
├── 404.html            # Custom error page
├── manifest.json       # PWA manifest
├── i/                  # Assets (images, CSS, JS, icons, fonts)
│   ├── app.css         # Main stylesheet
│   ├── app.js          # Main JavaScript (age calculations, UI interactions)
│   ├── service-worker.js
│   ├── service-worker-registration.js
│   └── melolontha/     # Optional animation component (beetle animation)
├── about/              # About page and CV/resume
│   ├── cv/             # Detailed CV page
│   └── resume/         # Resume page
├── apps/               # Portfolio applications
│   ├── devchallenge12/ # Angular apps from Dev Challenge 12
│   ├── pace/           # Angular app with service worker
│   ├── memory/         # Memory game
│   └── one-shot-sea-battle/  # Sea battle grid web component
├── contacts/           # Contact information
├── family/             # Family page
├── log/                # Blog/log page
├── ua/                 # Ukrainian version
└── ru/                 # Russian version
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
# Start local development server (Python 2.x)
npm start
# or
yarn start
# Serves on http://localhost:8000
```

### Deployment
```bash
# Deploy to Firebase Hosting
npm run deploy
# or
yarn deploy
# or
yarn fire
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

## Content Management

### Updating Professional Information
- **Experience years** - JavaScript calculation in `public/i/app.js:22` (birthday: 1984-09-26)
- **Current job duration** - Calculation in `public/i/app.js:11` (start date: March 2023)
- **Companies logos** - Located in `public/about/i/` (Grammarly, Ciklum, Luxoft, Innovecs)
- **Technology icons** - Located in `public/i/technologies/` (JS, HTML, CSS, TS, React, Angular)

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

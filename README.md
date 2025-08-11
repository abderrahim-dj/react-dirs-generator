# react-dirs-generator

🚀 Scaffold a clean, scalable React/Vite project structure in seconds.

## What it does

This CLI creates essential folders for React projects with proper organization:
- Creates core `src/` folders with `.gitkeep` files (so empty directories are committed)
- Ensures `.env` and `eslint.config.js` exist
- Safe to run multiple times - won't overwrite existing files

## Install

**Installation:**
```bash
npm install react-dirs-generator
```

**One-time usage:**
```bash
npx react-dirs-generator
```

## Usage

Navigate to your React project root and run:

```bash
react-dirs-generator
```

This creates the following structure:

```
your-project/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # React Context providers  
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Route components
│   ├── services/       # API calls & external services
│   └── utils/          # Helper functions & utilities
├── .env               # Environment variables

```

## 📁 Folder Structure Guide

### `src/components/`
Reusable UI building blocks shared across multiple pages.
- Keep components generic and composable
- Consider a `layout/` subfolder for app shells, headers, sidebars

### `src/context/`  
React Context providers for global state management.
- Authentication state, theme settings, user preferences

### `src/hooks/`
Custom React hooks for reusable stateful logic.
- API data fetching, form handling, DOM interactions

### `src/pages/`
Top-level route/screen components.
**Recommended pattern:** One folder per page containing:
- `page.jsx` - Main page component  
- `components/` - Components used only by this page

This keeps page-specific components organized and prevents bloating the main components folder.

### `src/services/`
Business logic and external API integrations.
- Keep UI-independent for better testing and reusability
- Authentication, data fetching, third-party integrations

### `src/utils/`
Pure utility functions and helpers.
- Date formatting, calculations, validators, constants

## Requirements

- Node.js >= 18
- Works with any React project

## License

GNU GPL v3

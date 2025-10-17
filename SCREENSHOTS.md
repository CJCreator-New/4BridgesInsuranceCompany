# Page Screenshots

This guide explains how to capture and view screenshots of all pages in your application.

## Quick Start

### 1. Start Your Development Server
```bash
pnpm dev
```

### 2. Capture Screenshots
In a **new terminal**, run:
```bash
pnpm screenshots
```

This will:
- Launch a headless browser
- Visit each page in your application
- Capture full-page screenshots
- Save them to `public/screenshots/`

### 3. View Pages Gallery
Open your browser and navigate to:
```
http://localhost:8080/pages-gallery
```

You'll see a beautiful gallery of all your pages with thumbnails and descriptions.

## What Gets Captured

The script captures screenshots for these pages:
- ✅ Home (`/`)
- ✅ Life Insurance (`/life-insurance`)
- ✅ Retirement Planning (`/retirement-planning`)
- ✅ Health Insurance (`/health-insurance`)
- ✅ Medicare (`/medicare`)
- ✅ Final Expense (`/final-expense`)
- ✅ Estate Planning (`/estate-planning`)
- ✅ About Us (`/about`)
- ✅ Careers (`/careers`)
- ✅ Contact (`/contact`)
- ✅ Partners (`/partners`)

## Screenshot Details

- **Resolution**: 1920x1080
- **Format**: PNG
- **Type**: Full page screenshots
- **Location**: `public/screenshots/`

## Troubleshooting

### Server Not Running
Make sure your dev server is running on port 8080 before capturing screenshots:
```bash
pnpm dev
```

### Puppeteer Issues
If you get puppeteer errors, approve the build scripts:
```bash
pnpm approve-builds
```

### Missing Screenshots
If screenshots don't appear in the gallery, the `PagesGallery` component will show colored fallback icons.

## Adding New Pages

To add a new page to the screenshot system:

1. **Add to screenshot script** (`scripts/capture-screenshots.ts`):
```typescript
{ path: '/your-new-page', name: 'your-new-page' }
```

2. **Add to gallery** (`client/pages/PagesGallery.tsx`):
```typescript
{
  path: '/your-new-page',
  name: 'Your Page Name',
  icon: <YourIcon className="w-6 h-6" />,
  description: 'Page description',
  color: 'bg-color-500',
  screenshot: '/screenshots/your-new-page.png',
}
```

3. **Re-run the screenshot script**:
```bash
pnpm screenshots
```

## Manual Screenshot Capture

You can also take screenshots manually using browser DevTools:
1. Open your browser DevTools (F12)
2. Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
3. Type "Capture full size screenshot"
4. Save to `public/screenshots/`

## Pages Gallery Features

- 📸 Visual thumbnails of all pages
- 🔗 Click any card to navigate to that page
- 🎨 Color-coded categories
- 📱 Responsive grid layout
- ✨ Hover effects and animations
- 🎯 Fallback icons if screenshots are missing

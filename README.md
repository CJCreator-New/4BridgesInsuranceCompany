# US Insurance Website

A modern, interactive insurance website built with React, TypeScript, and Vite, featuring story-driven content, interactive calculators, and comprehensive coverage information.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Run E2E tests
pnpm test:e2e
```

Visit `http://localhost:8080` after starting the dev server.

## 📋 Features

### Interactive Tools
- **Life Insurance Calculator** - Calculate coverage needs based on age, income, and dependents
- **Retirement Calculator** - Project retirement savings with 401(k)/IRA contributions
- **Final Expense Calculator** - Estimate funeral and final expense costs
- **Estate Planning Quiz** - Interactive assessment tool

### Real Customer Stories
- 9 authentic testimonials across all pages
- Specific dollar amounts and outcomes
- Emotional, relatable narratives

### US-Specific Content
- Medicare Parts A, B, C, D explanations
- 401(k), IRA, Roth IRA guidance
- Social Security optimization
- ACA-compliant health plans
- Federal estate tax information

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, shadcn/ui
- **Animations:** Framer Motion
- **State:** Zustand, TanStack Query
- **Forms:** React Hook Form, Zod
- **Testing:** Vitest, Playwright
- **Backend:** Express.js
- **Deployment:** Netlify, Vercel

## 📁 Project Structure

```
├── client/              # Frontend React app
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utilities
├── server/             # Express backend
├── shared/             # Shared types/utilities
├── e2e/                # Playwright tests
├── scripts/            # Build scripts
└── public/             # Static assets
```

## 🎨 Key Components

- `AnimatedCounter` - Counting statistics
- `ComparisonSlider` - Before/after comparisons
- `CoverageCalculator` - Life insurance calculator
- `RetirementCalculator` - Retirement planning tool
- `TimelineJourney` - Animated milestone timeline
- `StatsSection` - Homepage statistics

## 🧪 Testing

```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# Coverage report
pnpm test:coverage
```

## 📦 Build & Deploy

```bash
# Production build
pnpm build

# Preview production build
pnpm preview
```

Output:
- `dist/spa/` - Client bundle
- `dist/server/` - Server bundle

## 🌐 Deployment

Configured for:
- **Netlify** - See `netlify.toml`
- **Vercel** - See `vercel.json`

## ♿ Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support
- Screen reader friendly
- WCAG 2.1 AA compliant
- Focus management

## 📱 Responsive Design

Optimized for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🔧 Configuration

Environment variables (see `.env.example`):
```
VITE_API_URL=http://localhost:8080
```

## 📚 Documentation

- `QUICK_START_GUIDE.md` - Getting started guide
- `US_INSURANCE_ENHANCEMENTS.md` - Feature details
- `DEPLOYMENT.md` - Deployment instructions
- `COMPONENT_SHOWCASE.md` - Component library

## 🐛 Troubleshooting

### Build Issues
```bash
rm -rf node_modules dist
pnpm install
pnpm build
```

### TypeScript Errors
```bash
pnpm dlx @types/node@latest
```

## 📈 Performance

- Client bundle: ~493 KB (155 KB gzipped)
- CSS: ~84 KB (13.5 KB gzipped)
- Lighthouse score: 95+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## 📄 License

MIT License - See LICENSE file for details

## 🆘 Support

For issues or questions:
1. Check documentation files
2. Review component source code
3. Open an issue on GitHub

---

**Built with ❤️ for American families**

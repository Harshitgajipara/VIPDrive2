# VIPDrive — Luxury Car Booking & Chauffeur Service

A premium React.js web application for VIP car booking and luxury chauffeur services. Built with Vite, React 19, and vanilla CSS.

---

## Tech Stack

| Layer        | Technology |
|--------------|-----------|
| Framework    | React 19 + Vite 6 |
| Routing      | React Router DOM v7 |
| Animations   | GSAP 3 + CSS animations |
| Slider       | Swiper 12 |
| Icons        | Heroicons v2 + Font Awesome 6 |
| Styling      | Vanilla CSS with design tokens |
| Linting      | ESLint 9 (react-hooks + react-refresh) |
| Formatting   | Prettier |

---

## Folder Structure

```
VIPDrive2/
├── public/
│   ├── images/            # All static images (see optimization notes below)
│   ├── robots.txt         # SEO robots configuration
│   └── sitemap.xml        # XML sitemap for all routes
│
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── CardSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── AboutUsSection.jsx
│   │   ├── ContactUsSection.jsx
│   │   ├── BlogSection.jsx
│   │   ├── TripBookingForm.jsx
│   │   ├── PageLoader.jsx      # Full-page loading spinner
│   │   ├── ScrollToTop.jsx     # Floating scroll-to-top button
│   │   └── ...
│   │
│   ├── layouts/
│   │   └── PageLayout.jsx      # Shared layout: Navbar + main + Footer + ScrollToTop
│   │
│   ├── pages/             # Route-level page components (lazy-loaded)
│   │   ├── Homepage.jsx
│   │   ├── CustomBooking.jsx
│   │   ├── CarList.jsx
│   │   ├── SpecialTrips.jsx
│   │   └── NotFound.jsx
│   │
│   ├── styles/            # Component CSS files + global utilities
│   │   ├── variables.css       # Design tokens (colors, spacing, typography)
│   │   ├── animations.css      # Shared keyframe animations
│   │   ├── Navbar.css
│   │   ├── Footer.css
│   │   └── ...
│   │
│   ├── constants/
│   │   └── index.js            # Brand info, nav links, routes (single source of truth)
│   │
│   ├── hooks/
│   │   └── useScrollLock.js    # Locks body scroll when mobile menu is open
│   │
│   ├── App.jsx            # Router + lazy-loaded routes + Suspense
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles (imports variables.css + animations.css)
│
├── index.html             # HTML entry with SEO meta tags, Open Graph, fonts
├── vite.config.js         # Vite config with path aliases + build optimization
├── eslint.config.js       # ESLint configuration
├── .prettierrc            # Prettier formatting configuration
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Opens at `http://localhost:5173`

### Lint
```bash
npm run lint
```

### Production Build
```bash
npm run build
npm run preview
```

---

## Available Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Homepage | Hero, Packages, Features, Testimonials, About, Contact, Blog |
| `/custom-booking` | CustomBooking | Trip booking form |
| `/car-list` | CarList | Available luxury cars |
| `/special-trips` | SpecialTrips | Interactive destination slider |

---

## Environment Variables

No environment variables are required for the current version. If you add an API backend:

Create a `.env` file in the project root:
```env
VITE_API_BASE_URL=https://api.vipdrive.com
```

Access in code via `import.meta.env.VITE_API_BASE_URL`.

---

## Path Aliases

Import using short aliases instead of relative paths:

```js
import Navbar from '@components/Navbar';
import PageLayout from '@layouts/PageLayout';
import { BRAND } from '@constants';
```

| Alias | Resolves To |
|-------|-------------|
| `@` | `src/` |
| `@components` | `src/components/` |
| `@pages` | `src/pages/` |
| `@styles` | `src/styles/` |
| `@layouts` | `src/layouts/` |
| `@hooks` | `src/hooks/` |
| `@constants` | `src/constants/` |

---

## Coding Conventions

- **Components**: PascalCase filenames (`Navbar.jsx`)
- **Styles**: Component CSS paired with component (`Navbar.jsx` → `styles/Navbar.css`)
- **Hooks**: camelCase with `use` prefix (`useScrollLock.js`)
- **Constants**: SCREAMING_SNAKE_CASE for exported constants
- **Formatting**: 2-space indentation, single quotes, no semicolons in CSS
- **Imports**: Use path aliases, not relative `../../../`

---

## Design System

All design tokens are defined in [`src/styles/variables.css`](./src/styles/variables.css):

- **Primary background**: `#0a0c14` (deep dark)
- **Accent gold**: `#c9a84c` (luxury gold for CTAs, headings)
- **Accent cyan**: `#06b6d4` (brand cyan for interactive states)
- **Text primary**: `#f0f0f0`
- **Text secondary**: `#a0a8b8`

---

## Image Optimization Notes

> ⚠️ **The following images in `public/images/` are very large and should be converted to `.webp` before production deployment:**

| File | Size | Priority |
|------|------|----------|
| `special-organized-trips.jpg` | ~11.7 MB | 🔴 Critical |
| `blog1.jpg` | ~2 MB | 🟠 High |
| `blog2.jpg` | ~2.1 MB | 🟠 High |
| `blog3.jpg` | ~1.5 MB | 🟠 High |
| `feature1.jpg` | ~2.2 MB | 🟠 High |
| `feature2.jpg` | ~2.3 MB | 🟠 High |
| `feature3.jpg` | ~1.8 MB | 🟠 High |
| `reviewer4.jpg` | ~1.3 MB | 🟡 Medium |
| `reviewer5.jpg` | ~1.2 MB | 🟡 Medium |

**Recommended**: Use [Squoosh](https://squoosh.app) or run `npx @squoosh/cli` to batch convert to WebP at 80% quality.

Note: `blog1/2/3.jpg` are already replaced in `BlogSection.jsx` with the smaller `blog11/22/33.jpg` versions. The original large files can be deleted.

---

## Adding New Pages

1. Create `src/pages/NewPage.jsx`
2. Wrap content in `<PageLayout title="Page Title">...</PageLayout>`
3. Add route in `src/App.jsx` using `React.lazy()`
4. Add route constant to `src/constants/index.js`
5. Add nav link if needed

---

## Deployment

The project builds to a `dist/` folder:
```bash
npm run build
```

Deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages).

For React Router to work on production with client-side routing, ensure your host redirects all 404s to `index.html`.

**Netlify**: Add `public/_redirects` file:
```
/* /index.html 200
```

**Vercel**: Add `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

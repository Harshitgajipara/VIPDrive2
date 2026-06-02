import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PageLoader from './components/general/PageLoader';
import RootLayout from './layouts/PageLayout';

// ── Lazy page chunks ───────────────────────────────────────────────────────
const Homepage = lazy(() => import('./pages/landing-page/Homepage'));
const CustomBooking = lazy(() => import('./pages/general/CustomBooking'));
const CarList = lazy(() => import('./pages/CarList'));
const SpecialTrips = lazy(() => import('./pages/SpecialTrips'));
const NotFound = lazy(() => import('./pages/general/NotFound'));

// Special Organized Trips flow
const TripPackagePage = lazy(() => import('./pages/special-organized-trips/TripPackagePage'));
const StateCategoryPage = lazy(() => import('./pages/special-organized-trips/StateCategoryPage'));
const TripDetailPage = lazy(() => import('./pages/special-organized-trips/TripDetailPage'));

// ── Suspense wrapper shared by all lazy children ──────────────────────────
const LazyPage = ({ children }) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
);

// ── Route tree ────────────────────────────────────────────────────────────
const router = createBrowserRouter([
  {
    // Root layout — renders Navbar + <Outlet> + Footer + ScrollRestoration
    element: <RootLayout />,
    // Error boundary: any unhandled error in any child surfaces here
    errorElement: (
      <LazyPage>
        <NotFound />
      </LazyPage>
    ),
    children: [
      {
        index: true,
        element: <LazyPage><Homepage /></LazyPage>,
      },
      {
        path: 'custom-booking',
        element: <LazyPage><CustomBooking /></LazyPage>,
      },
      {
        path: 'car-list',
        element: <LazyPage><CarList /></LazyPage>,
      },
      {
        path: 'special-trips',
        element: <LazyPage><SpecialTrips /></LazyPage>,
      },

      // ── Special Organized Trips ──────────────────────────────────────
      {
        path: 'packages/special-organized-trips/statecategory',
        element: <LazyPage><TripPackagePage /></LazyPage>,
      },
      {
        path: 'packages/special-organized-trips/statecategory/:dest',
        element: <LazyPage><StateCategoryPage /></LazyPage>,
      },
      {
        path: 'packages/special-organized-trips/statecategory/:dest/:tripId',
        element: <LazyPage><TripDetailPage /></LazyPage>,
      },

      // ── 404 catch-all ────────────────────────────────────────────────
      {
        path: '*',
        element: <LazyPage><NotFound /></LazyPage>,
      },
    ],
  },
]);

export default router;

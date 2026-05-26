import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLoader from './components/PageLoader';
import './index.css';

// Lazy-loaded page routes — each page loads as a separate chunk
const Homepage       = lazy(() => import('./pages/Homepage'));
const CustomBooking  = lazy(() => import('./pages/CustomBooking'));
const CarList        = lazy(() => import('./pages/CarList'));
const SpecialTrips   = lazy(() => import('./pages/SpecialTrips'));
const NotFound       = lazy(() => import('./pages/NotFound'));

// SOT — Special Organized Trips flow
const SOTLandingPage   = lazy(() => import('./pages/sot/SOTLandingPage'));
const DestinationPage  = lazy(() => import('./pages/sot/DestinationPage'));
const TripDetailPage   = lazy(() => import('./pages/sot/TripDetailPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"                         element={<Homepage />} />
          <Route path="/custom-booking"             element={<CustomBooking />} />
          <Route path="/car-list"                   element={<CarList />} />
          <Route path="/special-trips"              element={<SpecialTrips />} />

          {/* SOT — Special Organized Trips */}
          <Route path="/packages/sot"               element={<SOTLandingPage />} />
          <Route path="/packages/sot/:dest"         element={<DestinationPage />} />
          <Route path="/packages/sot/:dest/:tripId" element={<TripDetailPage />} />

          <Route path="*"                           element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

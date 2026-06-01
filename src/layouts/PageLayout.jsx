import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../components/general/Navbar';
import Footer from '../components/general/Footer';
import ScrollToTop from '../components/general/ScrollToTop';

/**
 * PageLayout — Root layout route.
 * Wraps every page automatically via the router's <Outlet>.
 * ScrollRestoration resets scroll position on each navigation,
 * replacing the manual window.scrollTo(0,0) calls in individual pages.
 */
function PageLayout() {
  return (
    <>
      {/* Scroll to top of page on every route change */}
      <ScrollRestoration />

      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />

      {/* Floating scroll-to-top button */}
      <ScrollToTop />
    </>
  );
}

export default PageLayout;


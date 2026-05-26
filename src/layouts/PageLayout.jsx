import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * PageLayout — Shared wrapper for all pages.
 * Provides: Navbar + main content area + Footer.
 */
function PageLayout({ children, title }) {
  React.useEffect(() => {
    if (title) {
      document.title = `${title} | VIPDrive`;
    }
  }, [title]);

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default PageLayout;

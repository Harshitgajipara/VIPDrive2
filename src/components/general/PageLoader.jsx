import React from 'react';
import '../../styles/general/PageLoader.css';

/**
 * PageLoader — Full-page loading indicator shown during route transitions.
 */
function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="Loading page">
      <div className="loader-content">
        <div className="loader-ring" aria-hidden="true">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="loader-brand">VIPDrive</p>
      </div>
    </div>
  );
}

export default PageLoader;

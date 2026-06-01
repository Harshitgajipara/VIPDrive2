import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/general/NotFound.css';

function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | VIPDrive';
  }, []);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <span className="not-found-code" aria-hidden="true">404</span>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-desc">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="not-found-btn button-85">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

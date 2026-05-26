import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import './NotFound.css';

function NotFound() {
  return (
    <PageLayout title="Page Not Found">
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
    </PageLayout>
  );
}

export default NotFound;

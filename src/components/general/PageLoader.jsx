import React from 'react';
import '../../styles/general/PageLoader.css';

/**
 * PageLoader — Speedometer-style full-page loader shown during route transitions.
 * Matches the reference gauge design: spinning rings, tick marks, animated needle.
 */
function PageLoader() {
  return (
    <div id="loader-wrapper" role="status" aria-label="Loading page">
      <div className="loader" aria-hidden="true">

        {/* Cardinal & diagonal tick marks */}
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />

        {/* 22.5° sub-tick marks */}
        <div className="subline" />
        <div className="subline" />
        <div className="subline" />
        <div className="subline" />
        <div className="subline" />

        {/* Spinning outer ring + inner red accent ring */}
        <div className="loader-circle-1">
          <div className="loader-circle-2" />
        </div>

        {/* Animated needle */}
        <div className="needle" />

        {/* Label */}
        <div className="loading">Loading</div>
      </div>
    </div>
  );
}

export default PageLoader;

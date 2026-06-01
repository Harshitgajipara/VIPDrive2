import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { getRandomQuote } from './TravelQuotes';
import '../../styles/special-organized-trips/ImageModal.css';

/**
 * ImageModal — Lightbox overlay component.
 * Opens with a cinematic animation and shows a random travel quote.
 *
 * Props:
 *  src      {string}   — Image URL to display
 *  tripTitle{string}   — Shown in modal header
 *  onClose  {Function} — Called when modal should close
 */
const ImageModal = ({ src, tripTitle, onClose }) => {
  const backdropRef = useRef(null);
  const [quote] = useState(() => getRandomQuote());

  // Close with animation
  const closeWithAnimation = useCallback(() => {
    const el = backdropRef.current;
    if (!el) return;
    el.classList.add('closing');
    // Wait for CSS animation to finish before unmounting
    el.addEventListener('animationend', onClose, { once: true });
  }, [onClose]);

  // ESC key handler
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeWithAnimation();
    };
    document.addEventListener('keydown', handleKey);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [closeWithAnimation]);

  // Click backdrop to close
  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) closeWithAnimation();
  };

  return createPortal(
    <div
      className="image-modal-backdrop"
      ref={backdropRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo from ${tripTitle}`}
    >
      <div className="image-modal-box">
        {/* Header */}
        <div className="image-modal-header">
          <span className="image-modal-title">{tripTitle}</span>
          <button
            className="image-modal-close"
            onClick={closeWithAnimation}
            aria-label="Close image viewer"
          >
            ✕
          </button>
        </div>

        {/* Image */}
        <div className="image-modal-img-wrap">
          <img src={src} alt="Trip highlight" />
        </div>

        {/* Quote */}
        <div className="image-modal-quote">
          <p>{quote}</p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;

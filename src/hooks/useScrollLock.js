import { useEffect } from 'react';

/**
 * useScrollLock — Locks body scroll when the `locked` argument is true.
 * Used by the mobile navigation to prevent background scrolling when menu is open.
 *
 * @param {boolean} locked - Whether to lock the scroll.
 */
function useScrollLock(locked) {
  useEffect(() => {
    if (locked) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [locked]);
}

export default useScrollLock;

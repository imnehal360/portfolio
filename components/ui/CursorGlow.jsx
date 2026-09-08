'use client';

import { useEffect } from 'react';

export default function CursorGlow() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    const onMouseMove = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      cursor.classList.remove('cursor-hidden');
    };

    const onMouseLeave = () => {
      cursor.classList.add('cursor-hidden');
    };

    const onMouseEnter = () => {
      cursor.classList.remove('cursor-hidden');
    };

    const handleHoverStart = () => {
      cursor.classList.add('cursor-hover');
    };

    const handleHoverEnd = () => {
      cursor.classList.remove('cursor-hover');
    };

    window.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    const interactiveSelector = 'a, button, input, textarea, select, [role="button"], .project-card, .stat-card, .skill-card, .skill-tab, .contact-link';

    const addHoverListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    addHoverListeners();

    const observer = new MutationObserver(() => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      observer.disconnect();
    };
  }, []);

  return <div id="cursor" className="cursor-hidden" />;
}


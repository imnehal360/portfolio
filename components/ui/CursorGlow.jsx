'use client';

import { useEffect } from 'react';

export default function CursorGlow() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    
    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    let animationFrameId;
    function animRing() {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      animationFrameId = requestAnimationFrame(animRing);
    }
    animRing();

    const handleMouseEnter = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
      ring.style.opacity = '0.5';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.opacity = '1';
    };

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, .skill-chip, .stat-card, .project-card, .achievement-card').forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    addHoverListeners();
    
    // Setup mutation observer to add listeners to dynamically added elements
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
    </>
  );
}

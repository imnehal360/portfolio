'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import './hero.css';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const phrases = ['AI/ML Engineer', 'MERN Stack Developer', 'Problem Solver', 'Open Source Contributor'];
    let pi = 0, ci = 0, deleting = false;
    let timeoutId;

    function type() {
      if (!typedRef.current) return;
      
      const phrase = phrases[pi];
      if (!deleting) {
        typedRef.current.textContent = phrase.slice(0, ci + 1);
        ci++;
        if (ci === phrase.length) {
          deleting = true;
          timeoutId = setTimeout(type, 1800);
          return;
        }
      } else {
        typedRef.current.textContent = phrase.slice(0, ci - 1);
        ci--;
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      timeoutId = setTimeout(type, deleting ? 50 : 90);
    }
    
    timeoutId = setTimeout(type, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
      </div>
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Available for opportunities</span>
          </div>
          <h1 className="hero-name">Muhammad<br/>Nehal</h1>
          <div className="hero-title">Full Stack Developer</div>
          <div className="hero-typed"><span id="typed-text" ref={typedRef}></span><span className="cursor-blink">_</span></div>
          <p className="hero-intro">
            Computer Science student passionate about building <em>scalable full stack applications</em>, <em>AI-powered systems</em>, and modern digital experiences.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              View Projects
            </a>
            <a href="#contact" className="btn-outline">Contact Me</a>
            <a href="/resume/nehal_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">Download Resume</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/imnehal360" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/imnehal" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:imnehal360@gmail.com" className="social-link" aria-label="Gmail">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="avatar-wrap">
            <div className="avatar-ring"></div>
            <div className="avatar-ring-2"></div>
            <div className="avatar-core">
              <div className="avatar-glow"></div>
              <Image src="/profile-v2.jpg" alt="Muhammad Nehal" fill className="avatar-image" priority />
            </div>
            <div className="floating-tag floating-tag-1">ICPC Bronze Medalist</div>
            <div className="floating-tag floating-tag-2">AI/ML Engineer</div>
            <div className="floating-tag floating-tag-3">600+ DSA Problems</div>
          </div>
        </div>
      </div>
    </section>
  );
}
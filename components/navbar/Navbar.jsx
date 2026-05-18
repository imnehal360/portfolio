'use client';

import { useState, useEffect } from 'react';
import './navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-logo">MN<span>.</span></div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Hire Me</a>
        <button 
          className="hamburger" 
          id="hamburger" 
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#about" onClick={closeMobileMenu}>About</a>
        <a href="#skills" onClick={closeMobileMenu}>Skills</a>
        <a href="#experience" onClick={closeMobileMenu}>Experience</a>
        <a href="#projects" onClick={closeMobileMenu}>Projects</a>
        <a href="#achievements" onClick={closeMobileMenu}>Achievements</a>
        <a href="#journey" onClick={closeMobileMenu}>Journey</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>
      </div>
    </>
  );
}
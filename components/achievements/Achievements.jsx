'use client';

import { useEffect, useRef } from 'react';
import './achievements.css';

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (reveals) {
      reveals.forEach(el => obs.observe(el));
    }

    return () => obs.disconnect();
  }, []);

  return (
    <section id="achievements" ref={sectionRef}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-label">Milestones</div>
          <h2 className="section-title">Recognition &<br/><span>Achievements</span></h2>
          <div className="glow-line"></div>
        </div>
        <div className="achievements-grid">
          <div className="achievement-card reveal">
            <div className="achievement-icon">🥉</div>
            <div className="achievement-title">ICPC Asia Taiwan Regional Bronze Medal</div>
            <div className="achievement-meta">Rank 99 — International Competitive Programming</div>
            <div className="achievement-desc">Competed at the Asia Regional level of the International Collegiate Programming Contest, securing a bronze medal with team rank 99.</div>
          </div>
          <div className="achievement-card reveal reveal-delay-1">
            <div className="achievement-icon">🏆</div>
            <div className="achievement-title">Amazon ML Challenge 2025</div>
            <div className="achievement-meta">Rank 732 among 80,000+ participating teams</div>
            <div className="achievement-desc">Achieved a top-1% ranking in one of India's most prestigious machine learning competitions, demonstrating real-world ML problem-solving ability.</div>
          </div>
          <div className="achievement-card reveal reveal-delay-2">
            <div className="achievement-icon">🌐</div>
            <div className="achievement-title">SSOC Open Source Contributor</div>
            <div className="achievement-meta">Social Summer of Code — Active Contributor</div>
            <div className="achievement-desc">Contributed to multiple open source projects, collaborating with developers worldwide and improving community-driven software.</div>
          </div>
          <div className="achievement-card reveal reveal-delay-3">
            <div className="achievement-icon">💻</div>
            <div className="achievement-title">600+ Coding Problems Solved</div>
            <div className="achievement-meta">LeetCode, CodeChef, Codeforces &amp; more</div>
            <div className="achievement-desc">Solved 600+ algorithmic challenges across major competitive programming platforms, with a 1250+ CodeChef rating.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

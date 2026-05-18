'use client';

import { useEffect, useRef, useState } from 'react';
import './about.css';

function AnimatedCounter({ target, isDecimal = false }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let interval;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const step = target / 60;
          interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            setCount(isDecimal ? current.toFixed(2) : Math.floor(current));
          }, 20);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      obs.observe(ref.current);
    }

    return () => {
      clearInterval(interval);
      obs.disconnect();
    };
  }, [target]);

  const suffix = target === 99 ? '' : target >= 600 ? '+' : '';
  
  return <span className="stat-num" ref={ref}>{count}{suffix}</span>;
}

export default function About() {
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
    <section id="about" ref={sectionRef}>
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-text reveal">
            <div className="section-label">Who I am</div>
            <h2 className="section-title">Crafting the future,<br/><span>one commit</span> at a time.</h2>
            <div className="glow-line"></div>
            <p>I'm Muhammad Nehal — a <em>Computer Science student at IIIT Manipur</em> with a deep passion for building systems that matter. From architecting MERN stack applications to engineering AI-powered solutions, I thrive at the intersection of software and intelligence.</p>
            <p>My journey into tech started with competitive programming, where I developed a <em>strong problem-solving mindset</em>. Today, I apply that rigor to everything I build — whether it's a production-ready API, a multimodal ML pipeline, or a polished user interface.</p>
            <p>I believe great software is built with <em>entrepreneurial ambition</em>, engineering discipline, and relentless curiosity. I'm always looking for challenges that push the boundary of what's possible.</p>
            <div className="about-tags">
              <span className="tag">Full Stack Dev</span>
              <span className="tag">AI/ML Engineering</span>
              <span className="tag">IIIT Manipur CSE</span>
              <span className="tag">Open Source</span>
              <span className="tag">Competitive Programming</span>
              <span className="tag">Data Structures and Algorithms</span>
              <span className="tag">System Design</span>
            </div>
          </div>
          <div className="stats-grid reveal reveal-delay-2">
            <div className="stat-card">
              <AnimatedCounter target={600} />
              <div className="stat-label">DSA Problems Solved across platforms</div>
            </div>
            <div className="stat-card">
              <AnimatedCounter target={99} />
              <div className="stat-label">ICPC Asia Taiwan Regional — Bronze Medal Rank</div>
            </div>
            <div className="stat-card">
              <AnimatedCounter target={732} />
              <div className="stat-label">Amazon ML Challenge 2025 Rank among 80K+ teams</div>
            </div>
            <div className="stat-card">
              <AnimatedCounter target={1250} />
              <div className="stat-label">CodeChef Rating — consistently improving</div>
            </div>
            <div className="stat-card">
              <AnimatedCounter target={8.65} isDecimal={true} />
              <div className="stat-label">Current CPI (IIIT Manipur)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
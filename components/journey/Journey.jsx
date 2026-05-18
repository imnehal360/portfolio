'use client';

import { useEffect, useRef } from 'react';
import './journey.css';

export default function Journey() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const timelineObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (reveals) {
      reveals.forEach(el => obs.observe(el));
    }

    const timelineItems = sectionRef.current?.querySelectorAll('.timeline-item');
    if (timelineItems) {
      timelineItems.forEach(el => timelineObs.observe(el));
    }

    return () => {
      obs.disconnect();
      timelineObs.disconnect();
    };
  }, []);

  return (
    <section id="journey" ref={sectionRef}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-label">My path</div>
          <h2 className="section-title">The Developer<br/><span>Journey</span></h2>
          <div className="glow-line"></div>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023 — Beginning</div>
            <div className="timeline-title">Started the Coding Journey</div>
            <div className="timeline-body">Wrote first lines of C++ and Python, fell in love with algorithms and problem-solving. Started grinding competitive programming platforms and building a strong DSA foundation.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023 — Web Development</div>
            <div className="timeline-title">Learned the MERN Stack</div>
            <div className="timeline-body">Mastered MongoDB, Express, React, and Node.js. Built first full-stack projects with real-world architecture, REST APIs, and deployment pipelines.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024 — Competitive Programming</div>
            <div className="timeline-title">ICPC Bronze Medal &amp; 600+ Problems</div>
            <div className="timeline-body">Competed at ICPC Asia Taiwan Regional, securing Rank 99 and winning a Bronze Medal. Crossed 600+ DSA problems solved and reached 1250+ CodeChef rating.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024 — AI/ML Deep Dive</div>
            <div className="timeline-title">Entered AI/ML Engineering</div>
            <div className="timeline-body">Began studying machine learning, deep learning, and NLP. Built first ML models and started exploring PyTorch and Transformer architectures including BERT, CNN, and LSTM.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2025 — Industry Impact</div>
            <div className="timeline-title">Amazon ML Challenge Top-1%</div>
            <div className="timeline-body">Ranked 732 among 80,000+ teams in the Amazon ML Challenge 2025. Built production-grade AI systems including MindLens, an AI Resume Builder, and a Disease Prediction platform.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2026 — Present</div>
            <div className="timeline-title">Backend Developer Intern at Kickbegin</div>
            <div className="timeline-body">Collaborating with a skilled team to build robust backend architecture using Nest.js and PostgreSQL, and seamlessly integrating services with Next.js frontend applications.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

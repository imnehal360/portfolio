'use client';

import { useEffect, useRef } from 'react';
import './experience.css';

export default function Experience() {
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
    <section id="experience" ref={sectionRef}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-label">Career</div>
          <h2 className="section-title">Professional<br/><span>Experience</span></h2>
          <div className="glow-line"></div>
        </div>
        <div className="experience-list">
          <div className="experience-card reveal">
            <div className="exp-header">
              <div>
                <h3 className="exp-role">Backend Developer Intern</h3>
                <div className="exp-company">Kickbegin</div>
              </div>
              <div className="exp-date">Present</div>
            </div>
            <div className="exp-body">
              <p>Currently working as a backend developer intern, collaborating with a team to build robust and scalable architecture for the Kickbegin platform. Actively involved in developing backend services and integrating them seamlessly with the frontend.</p>
              <ul className="exp-features">
                <li>Designing and developing backend APIs using Nest.js and PostgreSQL.</li>
                <li>Integrating frontend Next.js applications with the backend architecture.</li>
                <li>Working extensively with JavaScript and modern full-stack frameworks.</li>
                <li>Collaborating with cross-functional team members to deliver core platform features.</li>
              </ul>
            </div>
            <div className="exp-tech">
              <span className="tech-badge">Next.js</span>
              <span className="tech-badge">Nest.js</span>
              <span className="tech-badge">PostgreSQL</span>
              <span className="tech-badge">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

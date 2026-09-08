'use client';

import { useEffect, useRef } from 'react';
import './projects.css';

export default function Projects() {
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
    <section id="projects" ref={sectionRef}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-label">Featured work</div>
          <h2 className="section-title">Projects that<br /><span>push boundaries</span></h2>
          <div className="glow-line"></div>
        </div>
        <div className="projects-grid">

          <div className="project-card reveal">
            <div className="project-number">// 01</div>
            <div className="project-name">MediSlot</div>
            <div className="project-desc">Full-stack, multi-tenant doctor appointment scheduling platform streamlining consultation bookings and schedule management across healthcare workflows.</div>
            <ul className="project-features">
              <li>Three distinct user workflows: Patient, Doctor, and Admin</li>
              <li>Doctor availability algorithm with automated slot allocation &amp; double-booking prevention</li>
              <li>Webhook-verified Stripe &amp; Razorpay payment gateways for secure consultation fees</li>
              <li>Secure RESTful API built with Node.js, Express, MongoDB, JWT &amp; Bcrypt</li>
            </ul>
            <div className="project-tech">
              <span className="tech-badge">MongoDB</span>
              <span className="tech-badge">Express</span>
              <span className="tech-badge">React</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Tailwind CSS</span>
              <span className="tech-badge">JWT</span>
              <span className="tech-badge">Bcrypt</span>
              <span className="tech-badge">Stripe</span>
              <span className="tech-badge">Razorpay</span>
            </div>
            <div className="project-actions">
              <a href="https://github.com/imnehal360/MediSlot" target="_blank" rel="noopener noreferrer" className="project-btn project-btn-gh">GitHub</a>
              <a href="https://medislot-frontend-vjej.onrender.com" target="_blank" rel="noopener noreferrer" className="project-btn project-btn-live">Live Demo →</a>
            </div>
          </div>

          <div className="project-card reveal reveal-delay-1">
            <div className="project-number">// 02</div>
            <div className="project-name">MindLens</div>
            <div className="project-desc">Multimodal Mental Health Analysis System using AI to analyze text, audio, and facial expressions for comprehensive mental health assessment.</div>
            <ul className="project-features">
              <li>Text, audio &amp; facial emotion analysis pipeline</li>
              <li>Real-time inference with SHAP explainability</li>
              <li>LSTM-based emotion pattern detection</li>
              <li>BERT for NLP, Librosa for audio features</li>
            </ul>
            <div className="project-tech">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">PyTorch</span>
              <span className="tech-badge">BERT</span>
              <span className="tech-badge">Librosa</span>
              <span className="tech-badge">OpenCV</span>
              <span className="tech-badge">FastAPI</span>
              <span className="tech-badge">React</span>
            </div>
            <div className="project-actions">
              <a href="https://github.com/imnehal360/MindLens" target="_blank" rel="noopener noreferrer" className="project-btn project-btn-gh">GitHub</a>
              <span className="project-btn project-btn-disabled">Demo Soon</span>
            </div>
          </div>

          <div className="project-card reveal reveal-delay-2">
            <div className="project-number">// 03</div>
            <div className="project-name">ResJo AI – AI Resume Builder &amp; Job Pipeline</div>
            <div className="project-desc">Full-stack AI-powered platform that builds ATS-optimized resumes and automates personalized job recommendations.</div>
            <ul className="project-features">
              <li>ATS resume scoring &amp; skill-gap analysis</li>
              <li>AI chatbot powered by Groq API</li>
              <li>Automated job recommendation pipeline</li>
              <li>JWT auth + cron-based automation</li>
            </ul>
            <div className="project-tech">
              <span className="tech-badge">MERN</span>
              <span className="tech-badge">Groq API</span>
              <span className="tech-badge">TailwindCSS</span>
              <span className="tech-badge">JWT</span>
              <span className="tech-badge">Cron Jobs</span>
            </div>
            <div className="project-actions">
              <a href="https://github.com/imnehal360/AI_Resume_ChatBot" target="_blank" rel="noopener noreferrer" className="project-btn project-btn-gh">GitHub</a>
              <a href="https://resjo.vercel.app" target="_blank" rel="noopener noreferrer" className="project-btn project-btn-live">Live Demo →</a>
            </div>
          </div>

          <div className="project-card reveal reveal-delay-3">
            <div className="project-number">// 04</div>
            <div className="project-name">Multi Disease Prediction using ML &amp; AI</div>
            <div className="project-desc">ML-powered web application for predicting multiple diseases using trained classification models with an integrated AI chatbot.</div>
            <ul className="project-features">
              <li>Diabetes, heart disease, breast cancer prediction</li>
              <li>Multiple ML model comparison</li>
              <li>Integrated AI chatbot assistant</li>
              <li>Interactive Streamlit UI</li>
            </ul>
            <div className="project-tech">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Streamlit</span>
              <span className="tech-badge">Scikit-learn</span>
              <span className="tech-badge">ML Models</span>
            </div>
            <div className="project-actions">
              <a href="https://github.com/imnehal360/ML_web_app" target="_blank" rel="noopener noreferrer" className="project-btn project-btn-gh">GitHub</a>
              <span className="project-btn project-btn-disabled">Demo Soon</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
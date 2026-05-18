'use client';

import { useEffect, useRef, useState } from 'react';
import './contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [btnText, setBtnText] = useState('Send Message →');
  const [btnColor, setBtnColor] = useState('');

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setBtnText('Sending...');
    
    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setBtnText('Message Sent! ✓');
        setBtnColor('#22c55e');
        e.target.reset();
      } else {
        setBtnText('Error Sending');
        setBtnColor('#ef4444');
      }
    } catch (error) {
      setBtnText('Error Sending');
      setBtnColor('#ef4444');
    }

    setTimeout(() => {
      setBtnText('Send Message →');
      setBtnColor('');
    }, 3000);
  };

  return (
    <section id="contact" ref={sectionRef}>
      <div className="section-inner">
        <div className="reveal">
          <div className="section-label">Get in touch</div>
          <h2 className="section-title">Let's build something<br/><span>extraordinary</span></h2>
          <div className="glow-line"></div>
        </div>
        
        <div className="contact-container reveal reveal-delay-1">
          <div className="contact-grid">
            <div className="contact-info">
              <p>Whether you're looking for a full-stack developer, an AI/ML engineer, or a passionate problem-solver — I'd love to connect. Always open to new projects, collaborations, and opportunities.</p>
              <div className="contact-links">
                <a href="mailto:imnehal360@gmail.com" className="contact-link">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                  imnehal360@gmail.com
                </a>
                <a href="https://github.com/imnehal360" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  github.com/imnehal360
                </a>
                <a href="https://www.linkedin.com/in/imnehal" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  linkedin.com/in/imnehal
                </a>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input type="text" name="name" className="form-input" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" name="email" className="form-input" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" name="subject" className="form-input" placeholder="Project collaboration, job opportunity..." required />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-textarea" placeholder="Tell me about your project or idea..." required></textarea>
              </div>
              <button type="submit" className="form-submit" style={{ background: btnColor }}>
                {btnText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

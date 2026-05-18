import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-text">Built with <span>Next.js</span> &amp; <span>Passion</span> by Muhammad Nehal &nbsp;·&nbsp; © 2025</div>
    </footer>
  );
}
export default function MobileMenu({ open, setOpen }) {
  return (
    <div className={`mobile-menu ${open ? 'active' : ''}`}>
      <a href="#about" onClick={() => setOpen(false)}>About</a>
      <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
      <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
      <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
    </div>
  );
}
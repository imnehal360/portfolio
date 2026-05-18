export default function Button({ children, href, variant }) {
  return (
    <a
      href={href}
      className={`btn ${variant === 'outline' ? 'outline' : 'primary'}`}
    >
      {children}
    </a>
  );
}
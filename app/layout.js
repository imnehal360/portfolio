import './globals.css';

export const metadata = {
  title: 'Muhammad Nehal — Full Stack Developer & AI/ML Engineer',
  description: 'Muhammad Nehal — Computer Science student at IIIT Manipur. Full Stack Developer, AI/ML Engineer, MERN Stack specialist, ICPC Bronze Medalist.',
  openGraph: {
    title: 'Muhammad Nehal — Full Stack Developer',
    description: 'Building scalable full stack applications and AI-powered systems.',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
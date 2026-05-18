import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Experience from '@/components/experience/Experience';
import Projects from '@/components/projects/Projects';
import Achievements from '@/components/achievements/Achievements';
import Journey from '@/components/journey/Journey';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import CursorGlow from '@/components/ui/CursorGlow';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ParticleBackground from '@/components/ui/ParticleBackground';

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <ParticleBackground />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Journey />
      <Contact />
      <Footer />
    </>
  );
}
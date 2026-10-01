import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import FloatingNav from './components/FloatingNav';
import ScrollProgress from './components/ScrollProgress';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import StackSection from './sections/StackSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  // A fresh page load carrying a #hash (e.g. a resume link straight to
  // /#project-04) reaches the browser before React has mounted the target
  // element, so the native anchor-scroll silently no-ops. Retry once the
  // page has actually rendered.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    // setTimeout, not requestAnimationFrame: rAF is paused entirely in a
    // backgrounded/inactive tab, which would silently drop this scroll if
    // the link was opened without the tab ever becoming visible.
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView();
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    // reducedMotion="user": when the OS asks for reduced motion, Framer skips
    // transform animations (slides, scale) and keeps only opacity fades.
    <MotionConfig reducedMotion="user">
      {/* Fixed-position chrome lives outside <main> so nothing in the page
          (overflow clipping, stacking contexts) can affect it. */}
      <ScrollProgress />
      <FloatingNav />
      <main className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <StackSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </MotionConfig>
  );
}

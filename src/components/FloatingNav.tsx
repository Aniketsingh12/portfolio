import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ContactButton from './ContactButton';
import LiveProjectButton from './LiveProjectButton';
import { RESUME_HREF } from '../data/links';
import { SECTION_LINKS } from '../data/nav';

/** A section counts as "being read" once its top passes this share of the viewport. */
const ACTIVE_LINE = 0.4;
/** The nav appears once this share of the first screen has scrolled away. */
const SHOW_AFTER = 0.8;

const EASE = [0.25, 0.1, 0.25, 1] as const;

/**
 * Pill navigation that slides in after the hero, so every section stays one
 * click away on a long page. Full links from `lg` up; a menu button and
 * full-screen menu below that.
 */
export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // A plain scroll listener: React skips the re-render whenever the visible
  // flag and active section are unchanged, so this costs almost nothing.
  useEffect(() => {
    const update = () => {
      const vh = window.innerHeight;
      setVisible(window.scrollY > vh * SHOW_AFTER);

      // Short final sections never reach the active line on tall screens, so
      // the bottom of the page always counts as the last section.
      const atBottom =
        window.scrollY + vh >= document.documentElement.scrollHeight - 2;
      let current: string | null = null;
      for (const { href } of SECTION_LINKS) {
        const el = document.getElementById(href.slice(1));
        if (el && el.getBoundingClientRect().top <= vh * ACTIVE_LINE) current = href;
      }
      setActive(atBottom ? SECTION_LINKS[SECTION_LINKS.length - 1].href : current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // While the menu is open: lock page scroll, move focus into it, close on
  // Escape — then hand focus back to the button that opened it.
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    overlayRef.current?.querySelector<HTMLElement>('a, button')?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);

    const button = menuButtonRef.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      button?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  // Keep Tab cycling inside the open menu instead of escaping to the page behind it.
  const trapFocus = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab' || !overlayRef.current) return;
    const items = overlayRef.current.querySelectorAll<HTMLElement>('a, button');
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            key="floating-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4"
          >
            <nav
              aria-label="Sections"
              className="pointer-events-auto flex items-center gap-1 rounded-full border border-[#D7E2EA]/15 bg-[#0C0C0C]/80 py-1.5 pl-5 pr-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-md"
            >
              <a
                href="#top"
                className="mr-2 whitespace-nowrap text-sm font-medium uppercase tracking-wider text-[#D7E2EA] xl:mr-4"
              >
                Aniket Singh
              </a>

              <ul className="hidden items-center lg:flex">
                {SECTION_LINKS.map((link) => {
                  const isActive = active === link.href;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        aria-current={isActive ? 'true' : undefined}
                        className={`block whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-200 xl:text-sm ${
                          isActive
                            ? 'bg-[#D7E2EA]/10 text-[#D7E2EA]'
                            : 'text-[#D7E2EA]/60 hover:text-[#D7E2EA]'
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <a
                href={RESUME_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 hidden whitespace-nowrap rounded-full border border-[#D7E2EA]/40 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 lg:block xl:text-sm"
              >
                Resume
              </a>

              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-expanded={menuOpen}
                aria-controls="site-menu"
                className="flex items-center gap-2 rounded-full bg-[#D7E2EA]/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/15 lg:hidden"
              >
                <Menu className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                Menu
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="site-menu"
            id="site-menu"
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            onKeyDown={trapFocus}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-[#0C0C0C]/95 px-6 pb-10 pt-5 backdrop-blur-md"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA]">
                Aniket Singh
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10"
              >
                <X className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </button>
            </div>

            <ul className="my-auto flex flex-col gap-4 py-10">
              {SECTION_LINKS.map((link) => {
                const isActive = active === link.href;
                return (
                  <li key={link.href} className="flex items-center gap-4">
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? 'true' : undefined}
                      className="hero-heading inline-block font-black uppercase leading-none tracking-tight"
                      style={{ fontSize: 'clamp(2.25rem, 11vw, 4rem)' }}
                    >
                      {link.label}
                    </a>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{
                          background: 'linear-gradient(123deg, #B600A8 0%, #7621B0 60%, #BE4C00 100%)',
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              <ContactButton />
              <LiveProjectButton href={RESUME_HREF} label="Resume" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

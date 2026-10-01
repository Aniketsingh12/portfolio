import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { ArrowUpRight, Github, type LucideIcon } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { PROJECTS, type Project } from '../data/projects';

type CardProps = {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

/** Icon-only circle used on phones, where the labelled pills don't fit. */
function IconLink({ href, label, icon: Icon }: { href: string; label: string; icon: LucideIcon }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] transition-colors duration-300 hover:bg-[#D7E2EA]/10"
    >
      <Icon className="h-4 w-4" strokeWidth={2.2} />
    </a>
  );
}

function ProjectCard({ project, index, total, progress }: CardProps) {
  // Every card shrinks slightly as the next one slides over it, so the stack
  // reads as depth rather than as a flat pile — unless the visitor has asked
  // their OS to reduce motion, in which case the cards simply stack.
  const reduceMotion = useReducedMotion();
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scrollScale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const scale = reduceMotion ? 1 : scrollScale;

  return (
    // Anchor id so an external link (e.g. the resume) can deep-link to this
    // specific card, not just the section as a whole.
    <div
      id={`project-${project.number}`}
      className="sticky top-24 flex h-[min(56vh,440px)] min-h-[330px] scroll-mt-24 items-start justify-center md:top-32"
    >
      <motion.article
        style={{ scale, top: `${index * 28}px` }}
        className="relative flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:rounded-[50px] sm:p-8 md:rounded-[60px] md:p-10"
      >
        {/* The minimum font sizes and the 12px phone gaps are tuned so every
            project name fits untruncated down to a 320px-wide screen. */}
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex min-w-0 items-start gap-3 sm:gap-6 md:gap-8">
            <span
              className="shrink-0 font-black leading-[0.8] text-[#D7E2EA]"
              style={{ fontSize: 'clamp(2.25rem, 8vw, 120px)' }}
            >
              {project.number}
            </span>
            <div className="min-w-0 pt-1">
              <p className="text-[0.65rem] font-light uppercase tracking-[0.25em] text-[#D7E2EA]/60 sm:text-xs">
                {project.category}
              </p>
              <h3
                className="truncate font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.2rem, 3.6vw, 3rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <div className="hidden shrink-0 flex-col items-end gap-2 sm:flex lg:flex-row">
            {project.live && <LiveProjectButton href={project.live} />}
            <LiveProjectButton href={project.repo} label="View Code" icon={Github} />
          </div>

          <div className="flex shrink-0 gap-2 sm:hidden">
            {project.live && (
              <IconLink href={project.live} label={`${project.name} — live project`} icon={ArrowUpRight} />
            )}
            <IconLink href={project.repo} label={`${project.name} — source code on GitHub`} icon={Github} />
          </div>
        </div>

        <p
          className="mt-auto max-w-3xl font-light leading-relaxed text-[#D7E2EA]/70"
          style={{ fontSize: 'clamp(0.875rem, 1.6vw, 1.25rem)' }}
        >
          {project.blurb}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-[0.65rem] font-light uppercase tracking-wider text-[#D7E2EA]/70 sm:px-4 sm:py-1.5 sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading mb-10 text-center font-black uppercase leading-none tracking-tight sm:mb-14"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </FadeIn>

      <div ref={containerRef}>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

import { motion, useScroll } from 'framer-motion';

/**
 * Thin reading-progress bar pinned to the top edge, in the same gradient as
 * the Contact button so it reads as part of the design, not a browser widget.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #B600A8 0%, #7621B0 60%, #BE4C00 100%)',
      }}
    />
  );
}

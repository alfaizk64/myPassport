"use client";

import { useRef } from "react";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  useScroll,
  useSpring,
} from "motion/react";
import * as m from "motion/react-m";

export const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, margin: "0px 0px -10% 0px" };

export function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });
  return <m.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

export function Reveal({ children, delay = 0, y = 28, className }) {
  return (
    <m.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </m.div>
  );
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Stagger({ children, className, role }) {
  return (
    <m.div
      className={className}
      role={role}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className = "si", role }) {
  return (
    <m.div data-reveal className={className} role={role} variants={item}>
      {children}
    </m.div>
  );
}

/** Card with a soft light that follows the pointer (CSS vars, no re-render). */
export function Spot({ children, className = "", ...rest }) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className={`spot ${className}`}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Steps grid whose connecting line fills as you scroll. */
export function ScrollSteps({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 55%"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 26 });
  return (
    <m.div
      ref={ref}
      className="steps"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      <div className="steps__line" aria-hidden="true">
        <m.span style={{ scaleX, display: "block", height: "100%", transformOrigin: "left" }} />
      </div>
      {children}
    </m.div>
  );
}

/** Vertical timeline whose rail fills as you scroll. */
export function ScrollRail({ children, className = "vsteps" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 26 });
  return (
    <m.div
      ref={ref}
      className={className}
      role="list"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      <div className="vsteps__rail" aria-hidden="true">
        <m.span style={{ scaleY, display: "block", width: "100%", height: "100%", transformOrigin: "top" }} />
      </div>
      {children}
    </m.div>
  );
}

/** Section heading whose words rise out of a mask when scrolled into view. */
const titleWords = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const titleWord = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function SectionTitle({ id, text }) {
  return (
    <m.h2
      id={id}
      variants={titleWords}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`}>
          <span className="w">
            <m.span data-reveal className="w__in" variants={titleWord}>
              {w}
            </m.span>
          </span>{" "}
        </span>
      ))}
    </m.h2>
  );
}

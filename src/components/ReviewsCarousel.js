"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Star } from "lucide-react";
import * as m from "motion/react-m";
import { initials } from "@/components/Sections";

const AUTOPLAY_MS = 5500;
const RESUME_AFTER_MS = 9000;
const EASE = [0.22, 1, 0.36, 1];

const avatarVariants = {
  rest: { scale: 0.72, rotate: -12, opacity: 0.75 },
  active: { scale: 1, rotate: 0, opacity: 1, transition: { type: "spring", stiffness: 320, damping: 14 } },
};
const starsContainer = {
  rest: {},
  active: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const starVariant = {
  rest: { scale: 0, opacity: 0 },
  active: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 420, damping: 15 } },
};
const quoteVariants = {
  rest: { opacity: 0, y: 14 },
  active: { opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.25, ease: EASE } },
};

function AnimatedStars({ count, active, size = 18 }) {
  return (
    <m.div
      className="review__stars"
      role="img"
      aria-label={`${count} out of 5 stars`}
      variants={starsContainer}
      animate={active ? "active" : "rest"}
      initial="rest"
    >
      {Array.from({ length: count }).map((_, k) => (
        <m.span key={k} variants={starVariant} style={{ display: "inline-flex" }}>
          <Star size={size} fill="currentColor" aria-hidden="true" />
        </m.span>
      ))}
    </m.div>
  );
}

export default function ReviewsCarousel({ reviews }) {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const resumeTimer = useRef(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const i = cardRefs.current.indexOf(entry.target);
          if (i === -1) return;
          entry.target.classList.toggle("review--active", entry.intersectionRatio > 0.6);
          if (entry.intersectionRatio > 0.6) setActive(i);
        });
      },
      { root: track, threshold: [0, 0.6, 1] },
    );
    cardRefs.current.forEach((c) => c && io.observe(c));
    return () => io.disconnect();
  }, [reviews.length]);

  const scrollToIndex = useCallback((i) => {
    const track = trackRef.current;
    const card = cardRefs.current[i];
    if (!track || !card) return;
    // Scroll only the track's own horizontal axis — scrollIntoView() (even with
    // block: "nearest") can still drag the whole page's vertical scroll along
    // with it whenever the card isn't fully in the viewport.
    const left = card.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
    track.scrollTo({ left, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!playing || reducedMotion) return;
    const id = setInterval(() => {
      scrollToIndex((active + 1) % reviews.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [active, playing, reducedMotion, reviews.length, scrollToIndex]);

  useEffect(() => () => resumeTimer.current && clearTimeout(resumeTimer.current), []);

  const pauseThenResume = () => {
    setPlaying(false);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPlaying(true), RESUME_AFTER_MS);
  };

  const go = (dir) => {
    pauseThenResume();
    scrollToIndex((active + dir + reviews.length) % reviews.length);
  };

  return (
    <div className="rcar">
      <div
        ref={trackRef}
        className="rcar__track"
        role="region"
        aria-roledescription="carousel"
        aria-label="Google reviews"
        tabIndex={0}
        onMouseEnter={() => setPlaying(false)}
        onMouseLeave={() => setPlaying(true)}
        onFocus={() => setPlaying(false)}
        onBlur={() => setPlaying(true)}
        onTouchStart={pauseThenResume}
      >
        {reviews.map((r, i) => {
          const isActive = active === i;
          return (
            <figure
              key={r.name}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`review rcar__card${r.featured ? " review--feature" : ""}`}
              aria-roledescription="slide"
              aria-label={`Review ${i + 1} of ${reviews.length}, from ${r.name}`}
            >
              <div className="review__head">
                <m.span
                  className={`av av--${i % 4}`}
                  aria-hidden="true"
                  variants={avatarVariants}
                  animate={isActive ? "active" : "rest"}
                  initial="rest"
                >
                  {initials(r.name)}
                </m.span>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.badge ? `${r.badge} · Google review` : "Google review"}</span>
                </div>
              </div>
              <AnimatedStars count={r.rating} active={isActive} size={r.featured ? 22 : 18} />
              <m.blockquote variants={quoteVariants} animate={isActive ? "active" : "rest"} initial="rest">
                {r.text}
              </m.blockquote>
            </figure>
          );
        })}
      </div>

      <div className="rcar__controls">
        <button type="button" className="rcar__btn" onClick={() => go(-1)} aria-label="Previous review">
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="rcar__btn"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause autoplay" : "Resume autoplay"}
          aria-pressed={!playing}
        >
          {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
        </button>
        <span className="rcar__count" aria-hidden="true">{active + 1} / {reviews.length}</span>
        <button type="button" className="rcar__btn" onClick={() => go(1)} aria-label="Next review">
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

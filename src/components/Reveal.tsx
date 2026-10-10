"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

/**
 * Progressive enhancement: content is visible by default.
 * Motion only applies when JS confirms the element starts below the fold.
 * A failsafe timeout guarantees content never stays hidden.
 */
export function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      return;
    }

    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (alreadyInView) {
      return;
    }

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      node.classList.add("is-visible");
      node.classList.remove("reveal-pending");
      observer.disconnect();
      window.clearTimeout(failsafe);
    };

    node.classList.add("reveal-pending");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          reveal();
        }
      },
      { threshold: [0, 0.01, 0.1], rootMargin: "0px 0px 12% 0px" },
    );

    observer.observe(node);

    // Never leave content permanently invisible if the observer misses.
    const failsafe = window.setTimeout(reveal, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
      node.classList.remove("reveal-pending");
      node.classList.add("is-visible");
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}

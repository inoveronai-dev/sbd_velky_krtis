"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ALL_ANNOUNCEMENTS_URL, ANNOUNCEMENTS } from "@/lib/content";
import { IconArrow } from "./Icons";
import { Reveal } from "./Reveal";

function AnnouncementCard({
  item,
  inertClone = false,
}: {
  item: (typeof ANNOUNCEMENTS)[number];
  inertClone?: boolean;
}) {
  return (
    <a
      href={item.href}
      rel="noopener noreferrer"
      className="group card-surface flex w-[min(85vw,20.5rem)] shrink-0 flex-col p-6 transition hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-18px_rgba(24,63,45,0.34)]"
      title={item.title}
      tabIndex={inertClone ? -1 : undefined}
      aria-hidden={inertClone || undefined}
    >
      <span className="inline-flex w-fit rounded-lg bg-brand-soft px-3 py-1.5 text-sm font-semibold text-brand">
        {item.dateLabel}
      </span>
      <span className="mt-4 text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand">
        {item.shortTitle}
      </span>
      <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {item.excerpt}
      </span>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
        Čítať oznam
        <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}

export function News() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const labelId = useId();

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarseMq = window.matchMedia("(hover: none), (pointer: coarse)");
    const sync = () => setReducedMotion(motionMq.matches || coarseMq.matches);
    sync();
    motionMq.addEventListener("change", sync);
    coarseMq.addEventListener("change", sync);
    return () => {
      motionMq.removeEventListener("change", sync);
      coarseMq.removeEventListener("change", sync);
    };
  }, []);

  const scrollByCard = (dir: -1 | 1) => {
    const node = viewportRef.current;
    if (!node) return;
    node.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section
      id="oznamy"
      aria-labelledby="news-heading"
      className="overflow-hidden bg-gray-light py-16 md:py-24"
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">AKTUÁLNE</p>
              <h2
                id="news-heading"
                className="mt-3 text-[1.75rem] font-bold tracking-[-0.02em] text-ink md:text-[2.2rem]"
              >
                Aktuálne oznamy
              </h2>
            </div>
            <a
              href={ALL_ANNOUNCEMENTS_URL}
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand"
            >
              Všetky oznamy
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="mt-10">
        {reducedMotion ? (
          <div className="container-page">
            <div
              ref={viewportRef}
              className="flex gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="region"
              aria-labelledby={labelId}
              tabIndex={0}
            >
              <span id={labelId} className="sr-only">
                Zoznam aktuálnych oznamov
              </span>
              {ANNOUNCEMENTS.map((item) => (
                <AnnouncementCard key={item.href} item={item} />
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line text-brand hover:bg-brand-soft"
                onClick={() => scrollByCard(-1)}
                aria-label="Predchádzajúci oznam"
              >
                <IconArrow className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line text-brand hover:bg-brand-soft"
                onClick={() => scrollByCard(1)}
                aria-label="Ďalší oznam"
              >
                <IconArrow className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <div
            className="announcement-viewport overflow-hidden"
            role="region"
            aria-labelledby={labelId}
          >
            <span id={labelId} className="sr-only">
              Posúvajúci sa zoznam aktuálnych oznamov
            </span>
            <div className="announcement-track pl-5 md:pl-[max(1.25rem,calc((100vw-72rem)/2+2rem))]">
              {/* Primary set — real announcements */}
              {ANNOUNCEMENTS.map((item) => (
                <AnnouncementCard key={item.href} item={item} />
              ))}
              {/* Visual clone for seamless loop — hidden from AT and tab order */}
              {ANNOUNCEMENTS.map((item) => (
                <AnnouncementCard key={`clone-${item.href}`} item={item} inertClone />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

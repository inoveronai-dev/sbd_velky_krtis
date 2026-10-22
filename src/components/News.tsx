"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ALL_ANNOUNCEMENTS_URL, ANNOUNCEMENTS } from "@/lib/content";
import { DemoLink } from "./DemoLink";
import { IconArrow } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function AnnouncementCard({
  item,
  inertClone = false,
}: {
  item: (typeof ANNOUNCEMENTS)[number];
  inertClone?: boolean;
}) {
  return (
    <DemoLink
      href={item.href}
      external
      className="group flex w-[min(85vw,21rem)] shrink-0 flex-col border border-line/80 bg-white px-6 py-7 transition hover:border-brand/25"
      title={item.title}
      tabIndex={inertClone ? -1 : undefined}
      aria-hidden={inertClone || undefined}
    >
      <span className="text-sm font-semibold tracking-wide text-brand">{item.dateLabel}</span>
      <span className="mt-4 text-[1.15rem] font-semibold leading-snug text-ink transition-colors group-hover:text-brand md:text-[1.2rem]">
        {item.shortTitle}
      </span>
      <span className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted md:text-[0.95rem]">
        {item.excerpt}
      </span>
    </DemoLink>
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
      className="overflow-hidden bg-gray-soft py-20 md:py-28"
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="news-heading"
              align="left"
              parts={[
                { text: "Aktuálne " },
                { text: "oznamy", accent: true },
              ]}
            />
            <DemoLink
              href={ALL_ANNOUNCEMENTS_URL}
              external
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand"
            >
              Všetky oznamy
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </DemoLink>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 md:mt-12">
        {reducedMotion ? (
          <div className="container-page">
            <div
              ref={viewportRef}
              className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-5"
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
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line text-brand hover:bg-white"
                onClick={() => scrollByCard(-1)}
                aria-label="Predchádzajúci oznam"
              >
                <IconArrow className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line text-brand hover:bg-white"
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
              {ANNOUNCEMENTS.map((item) => (
                <AnnouncementCard key={item.href} item={item} />
              ))}
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

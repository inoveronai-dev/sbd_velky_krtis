import { ALL_ANNOUNCEMENTS_URL, ANNOUNCEMENTS } from "@/lib/content";
import { IconArrow } from "./Icons";
import { Reveal } from "./Reveal";

export function News() {
  return (
    <section
      id="oznamy"
      aria-labelledby="news-heading"
      className="relative px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.16em] text-brand">OZNÁMENIA</p>
              <h2
                id="news-heading"
                className="mt-4 text-[1.75rem] font-semibold tracking-[-0.02em] text-ink md:text-[2.25rem]"
              >
                Aktuálne oznamy
              </h2>
              <p className="mt-3 text-base text-ink-muted">
                Výber overených oznámení z oficiálnej stránky. Tento prototyp nezobrazuje
                automatický CMS feed.
              </p>
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

        <ul className="mt-10 divide-y divide-line border-y border-line">
          {ANNOUNCEMENTS.map((item, index) => (
            <li key={item.href}>
              <Reveal delayMs={index * 70}>
                <a
                  href={item.href}
                  rel="noopener noreferrer"
                  className="group grid gap-3 py-7 transition-colors hover:bg-white/70 md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-8 md:px-2"
                  title={item.title}
                >
                  <time className="text-sm font-medium text-brand-deep">{item.dateLabel}</time>
                  <span className="text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-brand md:text-[1.2rem]">
                    {item.shortTitle}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Čítať
                    <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { ALL_ANNOUNCEMENTS_URL, ANNOUNCEMENTS } from "@/lib/content";
import { IconArrow } from "./Icons";
import { Reveal } from "./Reveal";

export function News() {
  return (
    <section
      id="oznamy"
      aria-labelledby="news-heading"
      className="bg-white py-16 md:py-24"
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

        <ul className="mt-10 divide-y divide-line border-y border-line">
          {ANNOUNCEMENTS.map((item, index) => (
            <li key={item.href}>
              <Reveal delayMs={index * 60}>
                <a
                  href={item.href}
                  rel="noopener noreferrer"
                  className="group grid gap-4 py-6 transition-colors hover:bg-brand-soft2/60 md:grid-cols-[9.5rem_1fr_auto] md:items-center md:gap-8 md:px-2"
                  title={item.title}
                >
                  <span className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-soft px-3 py-2 text-center text-sm font-semibold text-brand-deep">
                    {item.dateLabel}
                  </span>
                  <span>
                    <span className="block text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand md:text-[1.15rem]">
                      {item.shortTitle}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-ink-muted">
                      {item.excerpt}
                    </span>
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                    <IconArrow className="h-4 w-4" />
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

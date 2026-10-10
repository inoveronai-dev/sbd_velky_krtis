import { QUICK_ACCESS } from "@/lib/content";
import {
  IconArrow,
  IconContact,
  IconDocuments,
  IconMegaphone,
  IconRepair,
} from "./Icons";
import { Reveal } from "./Reveal";

const ICONS = {
  megaphone: IconMegaphone,
  documents: IconDocuments,
  repair: IconRepair,
  contact: IconContact,
};

export function QuickAccess() {
  return (
    <section
      aria-labelledby="quick-access-heading"
      className="relative z-10 -mt-8 px-5 md:-mt-10 md:px-8"
    >
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="overflow-hidden rounded-xl border border-line/80 bg-white shadow-soft">
            <div className="border-b border-line/70 px-5 py-4 md:px-7">
              <h2 id="quick-access-heading" className="text-sm font-semibold tracking-wide text-brand-deep">
                Rýchly prístup
              </h2>
            </div>
            <ul className="grid divide-y divide-line/70 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
              {QUICK_ACCESS.map((item, index) => {
                const Icon = ICONS[item.icon];
                const shared =
                  "group flex h-full flex-col gap-3 px-5 py-6 transition-colors hover:bg-warm md:px-7";
                const borders = [
                  "sm:border-r sm:border-b sm:border-line/70 lg:border-b-0",
                  "sm:border-b sm:border-line/70 lg:border-r lg:border-b-0",
                  "sm:border-r sm:border-line/70 lg:border-r",
                  "",
                ][index];

                const content = (
                  <>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex flex-1 flex-col">
                      <span className="text-base font-semibold text-ink">{item.title}</span>
                      <span className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                        {"download" in item && item.download ? "Stiahnuť" : "Otvoriť"}
                        <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </>
                );

                return (
                  <li key={item.title} className={borders}>
                    {item.external ? (
                      <a
                        href={item.href}
                        className={shared}
                        rel="noopener noreferrer"
                        {...("download" in item && item.download
                          ? { download: true }
                          : {})}
                      >
                        {content}
                      </a>
                    ) : (
                      <a href={item.href} className={shared}>
                        {content}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

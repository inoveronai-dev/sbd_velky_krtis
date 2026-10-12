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
      className="relative overflow-hidden bg-warm py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 arch-lines" aria-hidden="true" />
      <div className="container-page relative">
        <Reveal>
          <p className="section-label">RÝCHLY PRÍSTUP</p>
          <h2
            id="quick-access-heading"
            className="mt-3 max-w-2xl text-balance text-[1.75rem] font-bold tracking-[-0.02em] text-ink md:text-[2.15rem]"
          >
            Najčastejšie hľadané informácie
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {QUICK_ACCESS.map((item, index) => {
            const Icon = ICONS[item.icon];
            const content = (
              <>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="mt-5 flex flex-1 flex-col">
                  <span className="text-lg font-bold text-ink">{item.title}</span>
                  <span className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </span>
                </div>
                <span className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white transition group-hover:translate-x-0.5 group-hover:bg-brand-deep">
                  <IconArrow className="h-3.5 w-3.5" />
                </span>
              </>
            );

            return (
              <li key={item.title}>
                <Reveal delayMs={index * 60}>
                  {item.external ? (
                    <a
                      href={item.href}
                      className="group card-surface flex h-full flex-col p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-18px_rgba(24,63,45,0.34)] md:p-7"
                      rel="noopener noreferrer"
                      {...("download" in item && item.download ? { download: true } : {})}
                    >
                      {content}
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      className="group card-surface flex h-full flex-col p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-18px_rgba(24,63,45,0.34)] md:p-7"
                    >
                      {content}
                    </a>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

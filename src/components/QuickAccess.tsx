import { QUICK_ACCESS, SITE } from "@/lib/content";
import { DemoLink } from "./DemoLink";
import { SectionHeading } from "./SectionHeading";
import {
  IconArrow,
  IconContact,
  IconDocuments,
  IconMail,
  IconMegaphone,
  IconPhone,
  IconPin,
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
      id="kontakt"
      aria-labelledby="quick-access-heading"
      className="relative bg-white py-16 md:py-24"
    >
      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            id="quick-access-heading"
            parts={[
              { text: "Čo potrebujete " },
              { text: "vybaviť?", accent: true },
            ]}
          />
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-8">
          <Reveal>
            <aside
              id="strankove-hodiny"
              className="flex h-full flex-col rounded-[1.35rem] border border-brand/10 bg-[#EEF2ED] p-6 md:p-8"
              aria-labelledby="hours-heading"
            >
              <h3
                id="hours-heading"
                className="text-[1.45rem] font-bold tracking-[-0.02em] text-ink md:text-[1.65rem]"
              >
                Stránkové hodiny
              </h3>

              <ul className="mt-7 space-y-0 divide-y divide-line/90 rounded-2xl bg-white px-5 shadow-soft">
                {SITE.hours.map((slot) => (
                  <li
                    key={slot.day}
                    className="flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                  >
                    <span className="text-base font-bold text-ink">{slot.day}</span>
                    <span className="space-y-1 text-left text-base tabular-nums text-ink-muted sm:text-right">
                      {slot.slots.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>

              <dl className="mt-7 space-y-4">
                <div className="flex gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-soft">
                    <IconPhone className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-sm text-ink-muted">{SITE.phones.secretariat.label}</dt>
                    <dd>
                      <a
                        href={SITE.phones.secretariat.href}
                        className="text-lg font-semibold tabular-nums text-ink underline-offset-4 hover:text-brand hover:underline"
                      >
                        {SITE.phones.secretariat.display}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-soft">
                    <IconMail className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-sm text-ink-muted">E-mail</dt>
                    <dd>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-lg font-semibold text-ink underline-offset-4 hover:text-brand hover:underline"
                      >
                        {SITE.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-soft">
                    <IconPin className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-sm text-ink-muted">Adresa</dt>
                    <dd>
                      <a
                        href={SITE.mapsUrl}
                        rel="noopener noreferrer"
                        className="text-base font-semibold leading-snug text-ink underline-offset-4 hover:text-brand hover:underline"
                      >
                        {SITE.addressLine1}
                        <br />
                        {SITE.addressLine2}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </aside>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {QUICK_ACCESS.map((item, index) => {
              const Icon = ICONS[item.icon];
              const content = (
                <>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="mt-4 flex flex-1 flex-col">
                    <span className="text-base font-bold text-ink md:text-lg">{item.title}</span>
                    <span className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </span>
                  </div>
                  <span className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white transition group-hover:translate-x-0.5 group-hover:bg-brand-deep">
                    <IconArrow className="h-3.5 w-3.5" />
                  </span>
                </>
              );

              return (
                <li key={item.title} className="min-h-0">
                  <Reveal delayMs={index * 50} className="h-full">
                    <DemoLink
                      href={item.href}
                      external={item.external}
                      download={"download" in item && item.download ? true : undefined}
                      className="group card-surface flex h-full flex-col border border-line/50 p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-18px_rgba(24,63,45,0.34)] md:p-6"
                    >
                      {content}
                    </DemoLink>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

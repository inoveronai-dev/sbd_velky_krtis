import { QUICK_ACCESS, SITE } from "@/lib/content";
import { DemoLink } from "./DemoLink";
import { SectionHeading } from "./SectionHeading";
import {
  IconArrow,
  IconClock,
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
      className="relative bg-white py-20 md:py-28"
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

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-8 md:mt-14">
          <Reveal>
            <aside
              id="strankove-hodiny"
              className="flex h-full flex-col bg-gray-soft px-6 py-7 md:px-8 md:py-8"
              aria-labelledby="hours-heading"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex text-brand" aria-hidden="true">
                  <IconClock className="h-6 w-6" />
                </span>
                <h3
                  id="hours-heading"
                  className="text-[1.35rem] font-semibold tracking-[-0.02em] text-ink md:text-[1.5rem]"
                >
                  Stránkové hodiny
                </h3>
              </div>

              <ul className="mt-6 space-y-0 divide-y divide-line/80 border-y border-line/80">
                {SITE.hours.map((slot) => (
                  <li
                    key={slot.day}
                    className="flex flex-col gap-1.5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="text-base font-semibold text-ink">{slot.day}</span>
                    <span className="space-y-0.5 text-left text-[0.95rem] tabular-nums text-ink-muted sm:text-right">
                      {slot.slots.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>

              <dl className="mt-7 space-y-5">
                <div className="flex gap-3.5">
                  <span className="mt-0.5 inline-flex shrink-0 text-brand">
                    <IconPhone className="h-6 w-6" />
                  </span>
                  <div>
                    <dt className="text-sm text-ink-muted">{SITE.phones.secretariat.label}</dt>
                    <dd>
                      <a
                        href={SITE.phones.secretariat.href}
                        className="text-base font-semibold tabular-nums text-ink underline-offset-4 hover:text-brand hover:underline"
                      >
                        {SITE.phones.secretariat.display}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <span className="mt-0.5 inline-flex shrink-0 text-brand">
                    <IconMail className="h-6 w-6" />
                  </span>
                  <div>
                    <dt className="text-sm text-ink-muted">E-mail</dt>
                    <dd>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-base font-semibold text-ink underline-offset-4 hover:text-brand hover:underline"
                      >
                        {SITE.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <span className="mt-0.5 inline-flex shrink-0 text-brand">
                    <IconPin className="h-6 w-6" />
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

          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {QUICK_ACCESS.map((item, index) => {
              const Icon = ICONS[item.icon];
              return (
                <li key={item.title} className="min-h-0">
                  <Reveal delayMs={80 + index * 70} className="h-full">
                    <DemoLink
                      href={item.href}
                      external={item.external}
                      download={"download" in item && item.download ? true : undefined}
                      className="group flex h-full flex-col border border-line/70 bg-white p-5 transition duration-300 hover:border-brand/25 hover:shadow-soft md:p-5"
                    >
                      <span className="inline-flex text-brand">
                        <Icon className="h-8 w-8" />
                      </span>
                      <span className="mt-3.5 text-base font-semibold text-ink md:text-[1.05rem]">
                        {item.title}
                      </span>
                      <span className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </span>
                      <span className="mt-4 inline-flex h-10 w-10 items-center justify-center self-end rounded-full border border-brand/30 text-brand transition group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        <IconArrow className="h-4 w-4" />
                      </span>
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

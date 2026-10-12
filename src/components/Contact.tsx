import { SITE } from "@/lib/content";
import { IconMail, IconPhone, IconPin } from "./Icons";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="kontakt"
      aria-labelledby="contact-heading"
      className="bg-warm py-16 md:py-24"
    >
      <div className="container-page">
        <Reveal>
          <div className="overflow-hidden rounded-[1.5rem] shadow-card lg:grid lg:grid-cols-2">
            <div className="relative bg-brand-deep px-7 py-10 text-white md:px-10 md:py-14">
              <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 12% 18%, rgba(255,255,255,0.1), transparent 42%), radial-gradient(circle at 88% 78%, rgba(38,112,45,0.45), transparent 48%)",
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <p className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.16em] text-white/70">
                  <span className="inline-block h-0.5 w-5 rounded-full bg-brand" aria-hidden="true" />
                  KONTAKT
                </p>
                <h2
                  id="contact-heading"
                  className="mt-4 max-w-[16ch] text-[1.8rem] font-bold leading-tight tracking-[-0.02em] md:text-[2.2rem]"
                >
                  Sme tu pre vlastníkov a nájomcov
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
                  {SITE.name}
                </p>

                <dl className="mt-9 space-y-5">
                  <div className="flex gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <IconPhone className="h-5 w-5 text-white" />
                    </span>
                    <div>
                      <dt className="text-sm text-white/65">Telefón</dt>
                      <dd className="mt-0.5 space-y-1">
                        <a
                          href={SITE.phones.secretariat.href}
                          className="block text-lg font-semibold tabular-nums text-white underline-offset-4 hover:underline"
                        >
                          {SITE.phones.secretariat.label}: {SITE.phones.secretariat.display}
                        </a>
                        <a
                          href={SITE.phones.technical.href}
                          className="block text-lg font-semibold tabular-nums text-white underline-offset-4 hover:underline"
                        >
                          {SITE.phones.technical.label}: {SITE.phones.technical.display}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <IconMail className="h-5 w-5 text-white" />
                    </span>
                    <div>
                      <dt className="text-sm text-white/65">E-mail</dt>
                      <dd>
                        <a
                          href={`mailto:${SITE.email}`}
                          className="text-lg font-semibold text-white underline-offset-4 hover:underline"
                        >
                          {SITE.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <IconPin className="h-5 w-5 text-white" />
                    </span>
                    <div>
                      <dt className="text-sm text-white/65">Adresa</dt>
                      <dd>
                        <a
                          href={SITE.mapsUrl}
                          rel="noopener noreferrer"
                          className="text-lg font-semibold leading-snug text-white underline-offset-4 hover:underline"
                        >
                          {SITE.addressLine1}
                          <br />
                          {SITE.addressLine2}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>

            <div className="bg-brand-soft px-7 py-10 md:px-10 md:py-14">
              <p className="section-label">ÚRADNÉ HODINY</p>
              <h3 className="mt-3 text-[1.45rem] font-bold tracking-[-0.02em] text-ink md:text-[1.7rem]">
                Osobné vybavovanie stránok
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                Stránkové dni sekretariátu počas uvedených hodín.
              </p>

              <div className="mt-8 rounded-2xl bg-white p-5 shadow-soft md:p-6">
                <ul className="space-y-4">
                  {SITE.hours.map((slot) => (
                    <li
                      key={slot.day}
                      className="flex flex-col gap-1 border-b border-line pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <span className="text-base font-bold text-ink">{slot.day}</span>
                      <span className="text-base tabular-nums text-ink-muted">{slot.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={SITE.phones.secretariat.href} className="btn-primary flex-1">
                  Kontaktujte nás
                </a>
                <a href={`mailto:${SITE.email}`} className="btn-secondary-dark flex-1">
                  Napíšte nám
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { SITE } from "@/lib/content";
import { IconMail, IconPhone, IconPin } from "./Icons";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="kontakt"
      aria-labelledby="contact-heading"
      className="px-5 pb-16 md:px-8 md:pb-24"
    >
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-brand-deep text-white">
            <div className="grid lg:grid-cols-12">
              <div className="relative px-6 py-10 md:px-10 md:py-14 lg:col-span-7">
                <div
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(circle at 85% 80%, rgba(38,112,45,0.45), transparent 45%)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <p className="text-xs font-semibold tracking-[0.16em] text-white/70">
                    KONTAKT
                  </p>
                  <h2
                    id="contact-heading"
                    className="mt-4 max-w-[18ch] text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] md:text-[2.2rem]"
                  >
                    Sme tu pre vlastníkov a nájomcov
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
                    {SITE.name}
                  </p>

                  <dl className="mt-8 space-y-5">
                    <div className="flex gap-3">
                      <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-white/75" />
                      <div>
                        <dt className="sr-only">Adresa</dt>
                        <dd>
                          <a
                            href={SITE.mapsUrl}
                            rel="noopener noreferrer"
                            className="text-base font-medium text-white underline-offset-4 hover:underline"
                          >
                            {SITE.addressLine1}
                            <br />
                            {SITE.addressLine2}
                          </a>
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-white/75" />
                      <div className="space-y-2">
                        <dt className="sr-only">Telefón</dt>
                        <dd>
                          <span className="block text-sm text-white/65">
                            {SITE.phones.secretariat.label}
                          </span>
                          <a
                            href={SITE.phones.secretariat.href}
                            className="text-lg font-semibold tabular-nums text-white underline-offset-4 hover:underline"
                          >
                            {SITE.phones.secretariat.display}
                          </a>
                        </dd>
                        <dd>
                          <span className="block text-sm text-white/65">
                            {SITE.phones.technical.label}
                          </span>
                          <a
                            href={SITE.phones.technical.href}
                            className="text-lg font-semibold tabular-nums text-white underline-offset-4 hover:underline"
                          >
                            {SITE.phones.technical.display}
                          </a>
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-white/75" />
                      <div>
                        <dt className="sr-only">E-mail</dt>
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
                  </dl>
                </div>
              </div>

              <div className="border-t border-white/15 bg-brand px-6 py-10 md:px-10 md:py-14 lg:col-span-5 lg:border-l lg:border-t-0">
                <h3 className="text-lg font-semibold">Stránkové dni</h3>
                <p className="mt-2 text-sm text-white/80">
                  Osobné vybavenie záležitostí počas uvedených hodín.
                </p>
                <ul className="mt-8 space-y-4">
                  {SITE.hours.map((slot) => (
                    <li
                      key={slot.day}
                      className="flex flex-col gap-1 border-b border-white/20 pb-4 last:border-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <span className="text-base font-semibold">{slot.day}</span>
                      <span className="text-base tabular-nums text-white/90">{slot.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={SITE.phones.secretariat.href}
                    className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-brand-deep transition hover:bg-warm"
                  >
                    Zavolať sekretariát
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-white/40 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Napísať e-mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

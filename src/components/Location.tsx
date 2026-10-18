import { SITE } from "@/lib/content";
import { IconArrow, IconPin } from "./Icons";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section
      id="kde-nas-najdete"
      aria-labelledby="location-heading"
      className="bg-white py-16 md:py-24"
    >
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label justify-center">LOKALITA</p>
            <h2
              id="location-heading"
              className="mt-3 text-[1.75rem] font-bold tracking-[-0.02em] text-gray-dark md:text-[2.25rem]"
            >
              Kde nás nájdete
            </h2>
            <p className="mt-4 inline-flex items-center justify-center gap-2 text-base text-ink-muted md:text-lg">
              <IconPin className="h-5 w-5 shrink-0 text-brand" />
              <span>{SITE.address}</span>
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mt-10 overflow-hidden rounded-[1.4rem] border border-line/70 bg-white shadow-card">
            <iframe
              title={`Mapa — ${SITE.name}, ${SITE.address}`}
              src={SITE.mapsEmbedUrl}
              className="h-[22rem] w-full border-0 md:h-[28rem] lg:h-[32rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-5 flex justify-center">
            <a
              href={SITE.mapsUrl}
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand"
            >
              Otvoriť v Google Maps
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

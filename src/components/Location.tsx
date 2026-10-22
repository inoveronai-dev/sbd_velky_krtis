import { SITE } from "@/lib/content";
import { IconArrow, IconPin } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Location() {
  return (
    <section
      id="kde-nas-najdete"
      aria-labelledby="location-heading"
      className="bg-white py-20 md:py-28"
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
            <div>
              <SectionHeading
                id="location-heading"
                align="left"
                parts={[
                  { text: "Kde nás " },
                  { text: "nájdete", accent: true },
                ]}
              />
              <p className="mt-4 inline-flex items-center gap-2 text-base text-ink-muted md:text-lg">
                <IconPin className="h-5 w-5 shrink-0 text-brand" />
                <span>{SITE.address}</span>
              </p>
            </div>
            <a
              href={SITE.mapsUrl}
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-semibold text-ink transition hover:border-brand/40 hover:text-brand"
            >
              Otvoriť v Google Maps
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={120} variant="media">
          <div className="mt-10 overflow-hidden border border-line/70 bg-gray-soft md:mt-12">
            <iframe
              title={`Mapa — ${SITE.name}, ${SITE.address}`}
              src={SITE.mapsEmbedUrl}
              className="h-[22rem] w-full border-0 md:h-[28rem] lg:h-[32rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

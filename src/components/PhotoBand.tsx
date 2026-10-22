import { PHOTO_BAND } from "@/lib/content";
import { IconArrow } from "./Icons";
import { ParallaxMedia } from "./ParallaxMedia";

export function PhotoBand() {
  return (
    <section
      className="parallax-section relative h-[21.25rem] md:h-[26.25rem] lg:h-[28.75rem]"
      aria-labelledby="photo-band-heading"
    >
      <ParallaxMedia
        src={PHOTO_BAND.image.src}
        alt={PHOTO_BAND.image.alt}
        objectPosition="50% 40%"
      />

      {/* Soft left readability gradient — matches hero balance; no local text box */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] photo-band-overlay"
        aria-hidden="true"
      />

      <div className="parallax-foreground container-page relative z-[2] flex h-full flex-col justify-center gap-8 py-10 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="photo-band-readable max-w-xl text-white">
          <h2
            id="photo-band-heading"
            className="font-display text-balance text-[1.75rem] font-medium leading-[1.22] tracking-[-0.01em] md:text-[2.25rem] lg:text-[2.45rem]"
          >
            {PHOTO_BAND.heading}
          </h2>
        </div>
        <a href={PHOTO_BAND.ctaHref} className="btn-primary shrink-0 self-start md:self-center">
          {PHOTO_BAND.ctaLabel}
          <IconArrow className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

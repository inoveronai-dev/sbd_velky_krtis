import { PHOTO_BAND } from "@/lib/content";
import { IconArrow } from "./Icons";
import { ParallaxMedia } from "./ParallaxMedia";

export function PhotoBand() {
  return (
    <section
      className="parallax-section relative h-[22rem] md:h-[27rem] lg:h-[30rem]"
      aria-labelledby="photo-band-heading"
    >
      <ParallaxMedia
        src={PHOTO_BAND.image.src}
        alt={PHOTO_BAND.image.alt}
        objectPosition="50% 40%"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1] photo-band-overlay"
        aria-hidden="true"
      />

      <div className="parallax-foreground container-page relative z-[2] flex h-full flex-col justify-center gap-8 py-10 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="photo-band-readable max-w-xl text-white md:max-w-[34rem]">
          <h2
            id="photo-band-heading"
            className="font-display text-balance text-[1.85rem] font-medium leading-[1.2] tracking-[-0.01em] md:text-[2.4rem] lg:text-[2.65rem]"
          >
            {PHOTO_BAND.heading}
          </h2>
        </div>
        <a
          href={PHOTO_BAND.ctaHref}
          className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-white/75 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-[2px] transition hover:bg-white/18 md:self-center"
        >
          {PHOTO_BAND.ctaLabel}
          <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}

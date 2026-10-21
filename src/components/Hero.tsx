import { HERO_IMAGE, SITE } from "@/lib/content";
import { ParallaxMedia } from "./ParallaxMedia";

export function Hero() {
  return (
    <section
      className="parallax-section relative isolate min-h-[min(88vw,36rem)] md:min-h-[42rem] lg:min-h-[46rem]"
      aria-labelledby="hero-heading"
    >
      <ParallaxMedia
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        /* Bias crop toward town on the right; leave darker left for headline */
        objectPosition="72% 42%"
        priority
        className="max-md:[&_img]:object-[62%_40%] md:[&_img]:object-[72%_42%]"
      />

      {/* Top scrim for overlay nav contrast; left gradient for headline readability */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-black/45 via-black/20 to-transparent md:h-32"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/74 via-black/36 to-transparent max-md:from-black/80 max-md:via-black/48 md:via-black/30 lg:from-black/70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-gradient-to-t from-black/30 to-transparent md:h-1/5 md:from-black/15"
        aria-hidden="true"
      />

      <div className="parallax-foreground container-page relative z-[2] flex min-h-[min(88vw,36rem)] flex-col justify-end pb-14 pt-28 md:min-h-[42rem] md:justify-center md:pb-20 md:pt-28 lg:min-h-[46rem]">
        <div className="hero-readable max-w-[38rem] text-white">
          <h1
            id="hero-heading"
            className="text-balance text-[2.2rem] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[2.85rem] md:text-[3.4rem] lg:text-[3.7rem]"
          >
            {SITE.name}
          </h1>
          <p className="mt-6 max-w-[32rem] text-[1.05rem] leading-[1.55] text-white/95 sm:text-[1.2rem]">
            {SITE.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}

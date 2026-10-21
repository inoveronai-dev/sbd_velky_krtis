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
        /* Bias left so calm fields/forest sit under the headline; town stays in view */
        objectPosition="40% 38%"
        priority
        className="max-md:[&_img]:object-[46%_42%] md:[&_img]:object-[40%_38%]"
      />

      {/* Soft left readability gradient — keeps center/right of the photo bright */}
      <div className="pointer-events-none absolute inset-0 z-[1] hero-side-overlay" aria-hidden="true" />

      {/* Top nav readability gradient — fades out within ~200px; does not affect headline area */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] hero-nav-overlay" aria-hidden="true" />

      <div className="parallax-foreground container-page relative z-[2] flex min-h-[min(88vw,36rem)] flex-col justify-end pb-12 pt-28 md:min-h-[42rem] md:justify-center md:pb-20 md:pt-28 lg:min-h-[46rem]">
        <div className="hero-copy relative max-w-[34rem] text-left text-white md:max-w-[38rem]">
          <h1
            id="hero-heading"
            className="text-balance text-[2.15rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem] md:text-[3.35rem] lg:text-[3.6rem]"
          >
            {SITE.name}
          </h1>
          <p className="mt-7 max-w-[30rem] text-[1.05rem] font-medium leading-[1.55] text-white/95 sm:mt-8 sm:text-[1.2rem]">
            {SITE.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";
import { HERO_IMAGE, SITE } from "@/lib/content";
import { ParallaxMedia } from "./ParallaxMedia";
import { signalHeroReady } from "./SplashScreen";

export function Hero() {
  useEffect(() => {
    // If splash skipped or already finished before mount, ensure hero text can reveal.
    const ready = document.documentElement.classList.contains("sbd-hero-ready");
    const pending = document.documentElement.classList.contains("sbd-splash-pending");
    const active = document.documentElement.classList.contains("sbd-splash-active");
    if (!ready && !pending && !active) {
      signalHeroReady();
    }
  }, []);

  return (
    <section
      className="parallax-section relative isolate min-h-[85svh] md:min-h-[100dvh]"
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

      <div className="parallax-foreground container-page relative z-[2] flex min-h-[85svh] flex-col justify-center pb-14 pt-28 md:min-h-[100dvh] md:pb-20 md:pt-28">
        <div className="hero-copy hero-intro relative max-w-[34rem] text-left text-white md:max-w-[38rem]">
          <h1
            id="hero-heading"
            className="hero-intro__title text-balance text-[2.15rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem] md:text-[3.35rem] lg:text-[3.6rem]"
          >
            {SITE.name}
          </h1>
          <p className="hero-intro__text mt-7 max-w-[30rem] text-[1.05rem] font-medium leading-[1.55] text-white/95 sm:mt-8 sm:text-[1.2rem]">
            {SITE.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}

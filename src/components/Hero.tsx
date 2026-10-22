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
        <div className="hero-copy hero-intro relative max-w-[36rem] text-left text-white md:max-w-[42rem]">
          <h1
            id="hero-heading"
            className="hero-intro__title font-display text-[2.35rem] font-medium leading-[1.14] tracking-[-0.016em] sm:text-[2.85rem] sm:leading-[1.12] md:text-[3.45rem] md:leading-[1.1] lg:text-[3.75rem]"
          >
            {/* Intentional breaks: one line from md up; stacked on small screens */}
            <span className="block md:whitespace-nowrap">
              <span className="block md:inline">Stavebné bytové </span>
              <span className="block md:inline">družstvo</span>
            </span>
            <span className="hero-intro__place mt-[0.14em] block md:mt-[0.1em]">
              Veľký Krtíš
            </span>
          </h1>
          <p className="hero-intro__text relative mt-6 max-w-[28rem] text-[1.1rem] font-medium leading-[1.62] tracking-[0.008em] text-white sm:mt-7 sm:max-w-[30rem] sm:text-[1.22rem] sm:leading-[1.64] md:mt-8">
            {SITE.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}

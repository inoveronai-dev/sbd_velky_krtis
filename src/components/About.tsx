import Image from "next/image";
import { ABOUT } from "@/lib/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="o-nas"
      aria-labelledby="about-heading"
      className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28"
    >
      <div
        className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full border border-brand/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-6 top-40 h-40 w-40 rounded-full border border-brand/10"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-6">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[1.25rem] bg-brand-soft/70 md:-inset-4" aria-hidden="true" />
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.1rem]">
              <Image
                src="/images/about.webp"
                alt="Obytná zástavba spojená so správou bytových domov SBD Veľký Krtíš"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
            <svg
              className="absolute -bottom-6 -right-4 hidden h-24 w-36 text-brand/25 md:block"
              viewBox="0 0 140 90"
              fill="none"
              aria-hidden="true"
            >
              <path d="M8 82V12" stroke="currentColor" strokeWidth="1.25" />
              <path d="M8 82H132" stroke="currentColor" strokeWidth="1.25" />
              <path d="M34 12V58" stroke="currentColor" strokeWidth="1.25" />
              <path d="M34 58H90" stroke="currentColor" strokeWidth="1.25" />
              <path d="M58 12V40" stroke="currentColor" strokeWidth="1.25" />
            </svg>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:pl-4" delayMs={80}>
          <p className="text-xs font-semibold tracking-[0.16em] text-brand">O DRUŽSTVE</p>
          <h2
            id="about-heading"
            className="mt-4 max-w-[22ch] text-balance text-[1.85rem] font-semibold leading-[1.18] tracking-[-0.02em] text-ink md:text-[2.35rem]"
          >
            {ABOUT.heading}
          </h2>
          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-ink-muted">
            {ABOUT.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a
            href="https://www.sbdvk.sk/dokumenty-a-tlaciva/"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 items-center border-b border-brand pb-0.5 text-sm font-semibold text-brand transition hover:border-brand-deep hover:text-brand-deep"
          >
            Prejsť na dokumenty a tlačivá
          </a>
        </Reveal>
      </div>
    </section>
  );
}

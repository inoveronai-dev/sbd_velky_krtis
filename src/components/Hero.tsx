import Image from "next/image";
import { SITE } from "@/lib/content";
import { IconArrow } from "./Icons";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-heading">
      <div className="relative min-h-[min(92vw,42rem)] md:min-h-[44rem] lg:min-h-[46rem]">
        <Image
          src="/images/hero.webp"
          alt="Bytový dom v správe Stavebného bytového družstva Veľký Krtíš"
          fill
          priority
          sizes="100vw"
          className="hero-scale object-cover object-[62%_45%] md:object-[70%_42%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/78 via-ink/48 to-ink/15 md:via-ink/40 md:to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-ink/20"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[min(92vw,42rem)] max-w-content flex-col justify-end px-5 pb-12 pt-24 md:min-h-[44rem] md:justify-center md:px-8 md:pb-20 md:pt-16 lg:min-h-[46rem]">
          <div className="max-w-[36rem] text-white">
            <p className="mb-4 text-[0.72rem] font-semibold tracking-[0.18em] text-white/80">
              SBD VEĽKÝ KRTÍŠ
            </p>
            <h1
              id="hero-heading"
              className="text-balance text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[2.55rem] md:text-[3.1rem] lg:text-[3.35rem]"
            >
              {SITE.name}
            </h1>
            <p className="mt-5 max-w-[30rem] text-base leading-relaxed text-white/92 sm:text-lg">
              {SITE.tagline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://www.sbdvk.sk/dokumenty-a-tlaciva/"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-[0.95rem] font-semibold text-brand-deep transition hover:bg-warm"
              >
                Dokumenty a tlačivá
                <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#kontakt"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/55 bg-white/10 px-5 text-[0.95rem] font-semibold text-white backdrop-blur-[2px] transition hover:bg-white/18"
              >
                Kontaktujte nás
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

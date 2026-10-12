import Image from "next/image";
import { SITE } from "@/lib/content";
import { IconArrow, IconPhone } from "./Icons";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-heading">
      <div className="relative min-h-[min(90vw,40rem)] md:min-h-[43rem] lg:min-h-[46rem]">
        <Image
          src="/images/hero.webp"
          alt="Bytový dom v správe Stavebného bytového družstva Veľký Krtíš"
          fill
          priority
          sizes="100vw"
          className="hero-scale object-cover object-[68%_42%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/82 to-brand-deep/10 md:via-brand-deep/70 md:to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-deep/35 via-transparent to-brand-deep/15"
          aria-hidden="true"
        />

        <div className="relative container-page flex min-h-[min(90vw,40rem)] flex-col justify-end pb-14 pt-24 md:min-h-[43rem] md:justify-center md:pb-20 md:pt-16 lg:min-h-[46rem]">
          <div className="max-w-[38rem] text-white">
            <p className="mb-5 inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.18em] text-white/88">
              <span className="inline-block h-0.5 w-5 rounded-full bg-brand" aria-hidden="true" />
              SPOĽAHLIVÁ SPRÁVA PRE LEPŠIE BÝVANIE
            </p>
            <h1
              id="hero-heading"
              className="text-balance text-[2.2rem] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[2.85rem] md:text-[3.4rem] lg:text-[3.7rem]"
            >
              {SITE.name}
            </h1>
            <p className="mt-6 max-w-[32rem] text-[1.05rem] leading-[1.55] text-white/93 sm:text-[1.2rem]">
              {SITE.tagline}
            </p>
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="https://www.sbdvk.sk/dokumenty-a-tlaciva/"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Dokumenty a tlačivá
                <IconArrow className="h-4 w-4" />
              </a>
              <a href="#kontakt" className="btn-secondary-light">
                <IconPhone className="h-4 w-4" />
                Kontaktujte nás
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

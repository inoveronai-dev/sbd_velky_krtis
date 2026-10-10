import Image from "next/image";
import { SITE } from "@/lib/content";
import { IconArrow } from "./Icons";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-heading">
      <div className="relative min-h-[min(88vw,38rem)] md:min-h-[42rem] lg:min-h-[44rem]">
        <Image
          src="/images/hero.webp"
          alt="Bytový dom v správe Stavebného bytového družstva Veľký Krtíš"
          fill
          priority
          sizes="100vw"
          className="hero-scale object-cover object-[62%_45%] md:object-[70%_42%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-ink/12 md:via-ink/42 md:to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-ink/15"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[min(88vw,38rem)] max-w-content flex-col justify-end px-5 pb-14 pt-24 md:min-h-[42rem] md:justify-center md:px-8 md:pb-20 md:pt-16 lg:min-h-[44rem]">
          <div className="max-w-[38rem] text-white">
            <p className="mb-4 text-[0.72rem] font-semibold tracking-[0.18em] text-white/85">
              SBD VEĽKÝ KRTÍŠ
            </p>
            <h1
              id="hero-heading"
              className="text-balance text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[2.75rem] md:text-[3.35rem] lg:text-[3.65rem]"
            >
              {SITE.name}
            </h1>
            <p className="mt-6 max-w-[32rem] text-[1.05rem] leading-[1.55] text-white sm:text-[1.2rem] sm:leading-[1.5]">
              {SITE.tagline}
            </p>
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="https://www.sbdvk.sk/dokumenty-a-tlaciva/"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-md bg-white px-6 text-base font-semibold text-brand-deep transition hover:bg-warm"
              >
                Dokumenty a tlačivá
                <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#kontakt"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-md border border-white/60 bg-white/12 px-6 text-base font-semibold text-white backdrop-blur-[2px] transition hover:bg-white/20"
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

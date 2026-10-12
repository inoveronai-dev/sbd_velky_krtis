import Image from "next/image";
import { ABOUT } from "@/lib/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="o-nas"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative lg:col-span-6">
            <div className="relative">
              <svg
                className="absolute -left-6 -top-6 h-28 w-40 text-brand/20 md:-left-8 md:-top-8"
                viewBox="0 0 160 110"
                fill="none"
                aria-hidden="true"
              >
                <path d="M10 100V18" stroke="currentColor" strokeWidth="1.3" />
                <path d="M10 100H150" stroke="currentColor" strokeWidth="1.3" />
                <path d="M38 18V72" stroke="currentColor" strokeWidth="1.3" />
                <path d="M38 72H98" stroke="currentColor" strokeWidth="1.3" />
                <path d="M64 18V50" stroke="currentColor" strokeWidth="1.3" />
                <path d="M90 18V40" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.4rem] shadow-card">
                <Image
                  src="/images/about.webp"
                  alt="Obytná zástavba spojená so správou bytových domov SBD Veľký Krtíš"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
              <svg
                className="absolute -bottom-5 -right-3 h-20 w-32 text-brand/18 md:-bottom-6 md:-right-5"
                viewBox="0 0 140 90"
                fill="none"
                aria-hidden="true"
              >
                <path d="M8 82V12" stroke="currentColor" strokeWidth="1.25" />
                <path d="M8 82H132" stroke="currentColor" strokeWidth="1.25" />
                <path d="M34 12V58" stroke="currentColor" strokeWidth="1.25" />
                <path d="M34 58H90" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:pl-2" delayMs={80}>
            <p className="section-label">O NÁS</p>
            <h2
              id="about-heading"
              className="mt-4 max-w-[20ch] text-balance text-[1.85rem] font-bold leading-[1.15] tracking-[-0.025em] text-ink md:text-[2.4rem]"
            >
              {ABOUT.heading}
            </h2>
            <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-ink-muted">
              {ABOUT.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { PHOTO_BAND } from "@/lib/content";
import { IconArrow } from "./Icons";
import { Reveal } from "./Reveal";

export function PhotoBand() {
  return (
    <section className="relative py-4 md:py-6" aria-labelledby="photo-band-heading">
      <Reveal>
        <div className="relative overflow-hidden">
          <div className="relative min-h-[16rem] md:min-h-[20rem] lg:min-h-[22rem]">
            <Image
              src="/images/building.png"
              alt="Bytové domy súvisiace so správou SBD Veľký Krtíš"
              fill
              sizes="100vw"
              className="object-cover object-[50%_40%]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/75 to-brand-deep/20"
              aria-hidden="true"
            />
            <div className="relative container-page flex min-h-[16rem] flex-col justify-center gap-8 py-12 md:min-h-[20rem] md:flex-row md:items-center md:justify-between md:gap-10 lg:min-h-[22rem]">
              <div className="max-w-xl text-white">
                <p className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.16em] text-white/80">
                  <span className="inline-block h-0.5 w-5 rounded-full bg-brand" aria-hidden="true" />
                  {PHOTO_BAND.label}
                </p>
                <h2
                  id="photo-band-heading"
                  className="mt-4 text-balance text-[1.65rem] font-bold leading-[1.18] tracking-[-0.02em] md:text-[2.1rem]"
                >
                  {PHOTO_BAND.heading}
                </h2>
              </div>
              <a href={PHOTO_BAND.ctaHref} className="btn-primary shrink-0 self-start md:self-center">
                {PHOTO_BAND.ctaLabel}
                <IconArrow className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "./Reveal";

export function PhotoBand() {
  return (
    <section className="relative px-5 md:px-8" aria-label="Fotografia bytovej zástavby">
      <Reveal>
        <div className="relative mx-auto max-w-content overflow-hidden rounded-2xl">
          <div className="relative aspect-[21/9] min-h-[12rem] md:min-h-[16rem]">
            <Image
              src="/images/building.png"
              alt="Bytové domy súvisiace so správou SBD Veľký Krtíš"
              fill
              sizes="(max-width: 1280px) 100vw, 72rem"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-brand-deep/55 via-transparent to-transparent"
              aria-hidden="true"
            />
            <p className="absolute bottom-5 left-5 max-w-xs text-sm font-medium text-white md:bottom-8 md:left-8 md:text-base">
              Starostlivosť o spoločné priestory a každodennú prevádzku domu.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

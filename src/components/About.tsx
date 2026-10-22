import Image from "next/image";
import { ABOUT } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="o-nas"
      aria-labelledby="about-heading"
      className="relative bg-white py-20 md:py-28"
    >
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <Reveal className="relative lg:col-span-7" variant="media">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[5/6] lg:aspect-[4/5] lg:min-h-[32rem]">
              <Image
                src={ABOUT.image.src}
                alt={ABOUT.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-[42%_40%] transition duration-700 ease-out hover:scale-[1.015] md:object-[38%_38%]"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:pl-2 xl:pl-4" delayMs={120}>
            <SectionHeading
              id="about-heading"
              align="left"
              className="max-w-[14ch]"
              parts={[
                { text: "Komplexná správa " },
                { text: "nehnuteľností.", accent: true },
              ]}
            />
            <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.7] text-ink-muted md:text-[1.1rem]">
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

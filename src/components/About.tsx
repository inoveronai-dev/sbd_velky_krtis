import Image from "next/image";
import { ABOUT } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="o-nas"
      aria-labelledby="about-heading"
      className="relative bg-white py-16 md:py-24"
    >
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative lg:col-span-6" variant="media">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] shadow-card">
              <Image
                src={ABOUT.image.src}
                alt={ABOUT.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[42%_40%] transition duration-700 ease-out hover:scale-[1.02] md:object-[38%_38%]"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:pl-2" delayMs={120}>
            <SectionHeading
              id="about-heading"
              align="left"
              className="max-w-[18ch]"
              parts={[
                { text: "Komplexná správa " },
                { text: "nehnuteľností.", accent: true },
              ]}
            />
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

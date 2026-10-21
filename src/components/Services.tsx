import { SERVICE_GROUPS } from "@/lib/content";
import {
  IconBuilding,
  IconCheck,
  IconCoins,
  IconGear,
  IconPeople,
} from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const GROUP_ICONS = {
  technicka: IconGear,
  prevadzka: IconBuilding,
  financie: IconCoins,
  admin: IconPeople,
} as const;

export function Services() {
  return (
    <section
      id="cinnosti"
      aria-labelledby="services-heading"
      className="bg-gray-soft py-16 md:py-24"
    >
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              id="services-heading"
              parts={[
                { text: "Hlavné činnosti " },
                { text: "SBD Veľký Krtíš", accent: true },
                { text: " pri zabezpečovaní správy" },
              ]}
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SERVICE_GROUPS.map((group, groupIndex) => {
            const Icon = GROUP_ICONS[group.id as keyof typeof GROUP_ICONS] ?? IconGear;
            return (
              <Reveal key={group.id} delayMs={groupIndex * 70}>
                <article className="card-surface flex h-full flex-col border border-line/40 p-6 md:p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold leading-snug text-ink">
                    {group.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink-muted">
                        <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useId, useState } from "react";
import { SERVICE_GROUPS } from "@/lib/content";
import {
  IconBuilding,
  IconChevron,
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
  const baseId = useId();
  const [openIds, setOpenIds] = useState<string[]>([SERVICE_GROUPS[0].id]);

  const toggle = (id: string) => {
    setOpenIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  return (
    <section
      id="cinnosti"
      aria-labelledby="services-heading"
      className="bg-white py-20 md:py-28"
    >
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              id="services-heading"
              parts={[
                { text: "Hlavné činnosti SBD Veľký Krtíš " },
                { text: "pri zabezpečovaní správy", accent: true },
              ]}
            />
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="mx-auto mt-12 max-w-4xl md:mt-16">
            <ul className="divide-y divide-line border-y border-line">
              {SERVICE_GROUPS.map((group, index) => {
                const Icon = GROUP_ICONS[group.id as keyof typeof GROUP_ICONS] ?? IconGear;
                const isOpen = openIds.includes(group.id);
                const panelId = `${baseId}-${group.id}-panel`;
                const buttonId = `${baseId}-${group.id}-button`;
                const number = String(index + 1).padStart(2, "0");

                return (
                  <li key={group.id}>
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        className="flex w-full items-center gap-4 py-5 text-left transition-colors hover:bg-gray-soft/70 md:gap-6 md:py-6"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggle(group.id)}
                      >
                        <span className="w-12 shrink-0 font-display text-[1.65rem] font-medium tabular-nums leading-none text-brand md:w-16 md:text-[2rem]">
                          {number}
                        </span>
                        <span className="min-w-0 flex-1 text-[1.05rem] font-semibold leading-snug text-ink md:text-[1.2rem]">
                          {group.title}
                        </span>
                        <span className="hidden text-brand sm:inline-flex" aria-hidden="true">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span
                          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-transform duration-300 ${
                            isOpen ? "rotate-180 bg-gray-soft" : ""
                          }`}
                          aria-hidden="true"
                        >
                          <IconChevron className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="space-y-3 pb-6 pl-[3.75rem] pr-2 md:pb-8 md:pl-[5.5rem] md:pr-12">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-[0.98rem] leading-relaxed text-ink-muted md:text-[1.02rem]"
                            >
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

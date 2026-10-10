"use client";

import { useState } from "react";
import { SERVICE_GROUPS } from "@/lib/content";
import { IconChevron } from "./Icons";
import { Reveal } from "./Reveal";

function startNumber(groupIndex: number) {
  return (
    SERVICE_GROUPS.slice(0, groupIndex).reduce((sum, group) => sum + group.items.length, 0) + 1
  );
}

export function Services() {
  const [openId, setOpenId] = useState<string | null>(SERVICE_GROUPS[0].id);

  return (
    <section
      id="cinnosti"
      aria-labelledby="services-heading"
      className="border-y border-line/80 bg-white px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand">ROZSAH SPRÁVY</p>
            <h2
              id="services-heading"
              className="mt-4 text-balance text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-ink md:text-[2.25rem]"
            >
              Hlavné činnosti SBD Veľký Krtíš pri zabezpečovaní správy
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              Kompletný prehľad povinností pri správe bytových domov — od technickej údržby
              cez financovanie až po zastupovanie vlastníkov a nájomcov.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 hidden gap-8 lg:grid lg:grid-cols-2">
          {SERVICE_GROUPS.map((group, groupIndex) => {
            const base = startNumber(groupIndex);
            return (
              <Reveal key={group.id} delayMs={groupIndex * 60}>
                <div className="h-full border-t border-brand/25 pt-6">
                  <h3 className="text-lg font-semibold text-brand-deep">{group.title}</h3>
                  <ol className="mt-5 space-y-3" start={base}>
                    {group.items.map((item, itemIndex) => (
                      <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink">
                        <span
                          className="mt-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded bg-brand-soft text-[0.7rem] font-bold tabular-nums text-brand"
                          aria-hidden="true"
                        >
                          {String(base + itemIndex).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 space-y-3 lg:hidden">
          {SERVICE_GROUPS.map((group, groupIndex) => {
            const isOpen = openId === group.id;
            const base = startNumber(groupIndex);

            return (
              <Reveal key={group.id}>
                <div className="rounded-lg border border-line bg-warm/50">
                  <button
                    type="button"
                    className="flex min-h-14 w-full items-center justify-between gap-3 px-4 py-3 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : group.id)}
                  >
                    <span className="text-base font-semibold text-ink">{group.title}</span>
                    <IconChevron
                      className={`h-3.5 w-3.5 shrink-0 text-brand transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <ol className="space-y-3 border-t border-line px-4 py-4" start={base}>
                      {group.items.map((item, itemIndex) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
                          <span
                            className="mt-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded bg-brand-soft text-[0.7rem] font-bold tabular-nums text-brand"
                            aria-hidden="true"
                          >
                            {String(base + itemIndex).padStart(2, "0")}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

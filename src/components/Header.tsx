"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { NAV, SITE } from "@/lib/content";
import { IconChevron, IconClock, IconClose, IconMail, IconMenu, IconPhone } from "./Icons";

function ExternalOrInternal({
  href,
  external,
  className,
  children,
  onClick,
  ariaCurrent,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  ariaCurrent?: "page";
}) {
  if (external) {
    return (
      <a href={href} className={className} onClick={onClick} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick} aria-current={ariaCurrent}>
      {children}
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const infoRef = useRef<HTMLLIElement>(null);
  const menuId = useId();
  const infoMenuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setInfoOpen(false);
        setMobileInfoOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!infoOpen) return;
    const onPointer = (e: MouseEvent) => {
      if (infoRef.current && !infoRef.current.contains(e.target as Node)) {
        setInfoOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [infoOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-line/70 bg-topbar text-sm text-ink-muted md:block">
        <div className="container-page flex h-10 items-center justify-between gap-4">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 transition hover:text-brand"
          >
            <IconMail className="h-4 w-4 text-brand" />
            <span>{SITE.email}</span>
          </a>
          <p className="inline-flex items-center gap-2">
            <IconClock className="h-4 w-4 text-brand" />
            <span>
              Pondelok {SITE.hours[0].time} · Streda {SITE.hours[1].time}
            </span>
          </p>
        </div>
      </div>

      <div
        className={`border-b bg-white transition-[box-shadow,border-color] duration-300 ${
          scrolled
            ? "border-line/80 shadow-[0_8px_24px_-16px_rgba(24,63,45,0.35)]"
            : "border-line/50"
        }`}
      >
        <div className="container-page flex h-[4.35rem] items-center justify-between gap-4 lg:h-[4.75rem]">
          <Link href="/" className="relative z-10 shrink-0 py-2" aria-label={`${SITE.shortName} — úvod`}>
            <Image
              src="/images/SBDlogo.svg"
              alt={SITE.shortName}
              width={118}
              height={74}
              priority
              className="h-11 w-auto md:h-12"
            />
          </Link>

          <nav className="hidden items-center xl:flex" aria-label="Hlavná navigácia">
            <ul className="flex items-center gap-0.5">
              {NAV.map((item) => {
                if (item.children) {
                  return (
                    <li key={item.label} className="relative" ref={infoRef}>
                      <button
                        type="button"
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-2.5 py-2 text-[0.9rem] font-medium text-ink transition-colors hover:text-brand"
                        aria-expanded={infoOpen}
                        aria-controls={infoMenuId}
                        onClick={() => setInfoOpen((v) => !v)}
                      >
                        {item.label}
                        <IconChevron
                          className={`h-3 w-3 transition-transform duration-200 ${infoOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <ul
                        id={infoMenuId}
                        className={`absolute left-0 top-full z-50 min-w-[17rem] origin-top rounded-xl border border-line bg-white py-2 shadow-soft transition duration-200 ${
                          infoOpen
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-1 opacity-0"
                        }`}
                        role="menu"
                      >
                        {item.children.map((child) => (
                          <li key={child.label} role="none">
                            <a
                              href={child.href}
                              role="menuitem"
                              className="block px-4 py-2.5 text-sm text-ink transition-colors hover:bg-brand-soft hover:text-brand-deep"
                              rel="noopener noreferrer"
                              onClick={() => setInfoOpen(false)}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                const isHome = item.href === "/";
                return (
                  <li key={item.label}>
                    <ExternalOrInternal
                      href={item.href}
                      external={item.external}
                      ariaCurrent={isHome ? "page" : undefined}
                      className={`relative inline-flex min-h-11 items-center rounded-md px-2.5 py-2 text-[0.9rem] font-medium transition-colors hover:text-brand ${
                        isHome ? "text-brand" : "text-ink"
                      }`}
                    >
                      {item.label}
                      {isHome && (
                        <span
                          className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-brand"
                          aria-hidden="true"
                        />
                      )}
                    </ExternalOrInternal>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#kontakt" className="btn-primary hidden !min-h-11 !px-4 !text-sm sm:inline-flex">
              <IconPhone className="h-4 w-4" />
              Kontaktujte nás
            </a>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line text-ink xl:hidden"
              aria-expanded={mobileOpen}
              aria-controls={menuId}
              aria-label={mobileOpen ? "Zavrieť menu" : "Otvoriť menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div id={menuId} className={`xl:hidden ${mobileOpen ? "block" : "hidden"}`}>
        <div
          className="fixed inset-0 top-[4.35rem] z-40 bg-ink/30 md:top-[calc(2.5rem+4.75rem)]"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className="absolute left-0 right-0 top-[4.35rem] z-50 max-h-[calc(100vh-4.35rem)] overflow-y-auto border-b border-line bg-white px-5 py-4 shadow-soft md:top-[calc(2.5rem+4.75rem)]"
          aria-label="Mobilná navigácia"
        >
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => {
              if (item.children) {
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      className="flex min-h-12 w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-medium text-ink"
                      aria-expanded={mobileInfoOpen}
                      onClick={() => setMobileInfoOpen((v) => !v)}
                    >
                      {item.label}
                      <IconChevron
                        className={`h-3.5 w-3.5 transition-transform ${mobileInfoOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileInfoOpen && (
                      <ul className="mb-2 ml-3 border-l border-line pl-3">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              className="flex min-h-11 items-center px-2 py-2 text-sm text-ink-muted hover:text-brand"
                              rel="noopener noreferrer"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <ExternalOrInternal
                    href={item.href}
                    external={item.external}
                    className="flex min-h-12 items-center rounded-lg px-3 py-2 text-base font-medium text-ink hover:bg-brand-soft hover:text-brand-deep"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </ExternalOrInternal>
                </li>
              );
            })}
          </ul>
          <a
            href="#kontakt"
            className="btn-primary mt-4 w-full"
            onClick={() => setMobileOpen(false)}
          >
            <IconPhone className="h-4 w-4" />
            Kontaktujte nás
          </a>
        </nav>
      </div>
    </header>
  );
}

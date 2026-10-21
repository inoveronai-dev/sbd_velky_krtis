"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { NAV, SITE } from "@/lib/content";
import { IconChevron, IconClose, IconMenu, IconPhone } from "./Icons";

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
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  const onHero = !scrolled && !mobileOpen;
  const navText = onHero ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]" : "text-ink";
  const navHover = onHero ? "hover:text-white/90" : "hover:text-brand";
  const homeActive = onHero
    ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]"
    : "text-brand";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out ${
          onHero
            ? "border-b border-transparent bg-transparent"
            : "border-b border-line/80 bg-white/95 shadow-nav backdrop-blur-md"
        }`}
      >
        <div className="container-page flex h-[4.25rem] items-center justify-between gap-4 md:h-[4.5rem]">
          <Link
            href="/"
            className={`relative z-10 shrink-0 rounded-xl py-1.5 transition ${
              onHero ? "bg-white/92 px-2.5 shadow-soft backdrop-blur-sm" : "px-0"
            }`}
            aria-label={`${SITE.shortName} — úvod`}
          >
            <Image
              src="/images/SBDlogo.svg"
              alt={SITE.shortName}
              width={118}
              height={74}
              priority
              className="h-9 w-auto md:h-10"
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
                        className={`inline-flex min-h-11 items-center gap-1.5 rounded-md px-2.5 py-2 text-[0.9rem] font-medium transition-colors ${navText} ${navHover}`}
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
                      className={`relative inline-flex min-h-11 items-center rounded-md px-2.5 py-2 text-[0.9rem] font-medium transition-colors ${
                        isHome ? homeActive : `${navText} ${navHover}`
                      }`}
                    >
                      {item.label}
                      {isHome && (
                        <span
                          className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full ${
                            onHero ? "bg-white" : "bg-brand"
                          }`}
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
            <a
              href="#kontakt"
              className={
                onHero
                  ? "hidden min-h-10 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/12 px-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/22 sm:inline-flex"
                  : "btn-primary hidden !min-h-10 !px-4 !text-sm sm:inline-flex"
              }
            >
              <IconPhone className="h-4 w-4" />
              Kontaktujte nás
            </a>
            <button
              type="button"
              className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border xl:hidden ${
                onHero
                  ? "border-white/40 bg-white/12 text-white backdrop-blur-sm"
                  : "border-line text-ink"
              }`}
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
          className="fixed inset-0 top-[4.25rem] z-40 bg-ink/35 md:top-[4.5rem]"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className="absolute left-0 right-0 top-[4.25rem] z-50 max-h-[calc(100vh-4.25rem)] overflow-y-auto border-b border-line bg-white px-5 py-4 shadow-soft md:top-[4.5rem]"
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

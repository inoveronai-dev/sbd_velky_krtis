import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/content";
import { DemoLink } from "./DemoLink";
import { IconMail, IconPhone, IconPin } from "./Icons";

const QUICK_LINKS = [
  { label: "Úvod", href: "/", external: false },
  { label: "Oznamy", href: "https://www.sbdvk.sk/oznamy/", external: true },
  { label: "Dokumenty a tlačivá", href: "https://www.sbdvk.sk/dokumenty-a-tlaciva/", external: true },
  { label: "Smernice", href: "https://www.sbdvk.sk/smernice/", external: true },
  { label: "Kontakt", href: "#kontakt", external: false },
  { label: "Kde nás nájdete", href: "#kde-nas-najdete", external: false },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-dark text-white" id="pata">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/" className="inline-block" aria-label={`${SITE.shortName} — úvod`}>
              <Image
                src="/images/SBDlogo-light.svg"
                alt=""
                width={130}
                height={81}
                className="h-14 w-auto"
              />
              <span className="sr-only">{SITE.shortName}</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {SITE.name}
              <br />
              {SITE.address}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white">Rýchle odkazy</h2>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <DemoLink
                    href={link.href}
                    external={link.external}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </DemoLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white">Kontakt</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-2.5">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-white/55" />
                <a href={SITE.phones.secretariat.href} className="transition hover:text-white">
                  {SITE.phones.secretariat.display}
                </a>
              </li>
              <li className="flex gap-2.5">
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-white/55" />
                <a href={`mailto:${SITE.email}`} className="transition hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-white/55" />
                <a href={SITE.mapsUrl} rel="noopener noreferrer" className="transition hover:text-white">
                  {SITE.address}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white">Úradné hodiny</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {SITE.hours.map((slot) => (
                <li key={slot.day}>
                  <span className="block font-medium text-white/85">{slot.day}</span>
                  <span className="tabular-nums">{slot.slots.join(", ")}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}
          </p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

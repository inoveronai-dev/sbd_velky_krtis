import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/content";

const NAV_LINKS = [
  { label: "Úvod", href: "/", external: false },
  { label: "Oznamy", href: "https://www.sbdvk.sk/oznamy/", external: true },
  { label: "Dokumenty a tlačivá", href: "https://www.sbdvk.sk/dokumenty-a-tlaciva/", external: true },
  { label: "Smernice", href: "https://www.sbdvk.sk/smernice/", external: true },
  { label: "Kontakt", href: "#kontakt", external: false },
];

const IMPORTANT_LINKS = [
  { label: "Reklamačný poriadok", href: "https://www.sbdvk.sk/reklamacny-poriadok/" },
  { label: "Volebný poriadok", href: "https://www.sbdvk.sk/volebny-poriadok/" },
  { label: "Domový poriadok", href: "https://www.sbdvk.sk/domovy-poriadok/" },
  { label: "Uznesenia zo Zhromaždení delegátov", href: "https://www.sbdvk.sk/uznesenia-zo-zhromazdeni-delegatov/" },
  { label: "Legislatíva", href: "https://www.sbdvk.sk/legislativa/" },
  { label: "Blog", href: "https://www.sbdvk.sk/blog/" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep text-white" id="pata">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_1fr_0.9fr]">
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
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
              {SITE.name}
            </p>
            <p className="mt-4 text-sm text-white/65">
              {SITE.addressLine1}
              <br />
              {SITE.addressLine2}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-wide text-white">Navigácia</h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a href={link.href} className="text-sm text-white/70 transition hover:text-white">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-wide text-white">Dôležité odkazy</h2>
            <ul className="mt-4 space-y-2.5">
              {IMPORTANT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <h2 className="text-sm font-bold tracking-wide text-white">Spojenie</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href={`mailto:${SITE.email}`} className="transition hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.phones.secretariat.href} className="transition hover:text-white">
                  Sekretariát: {SITE.phones.secretariat.display}
                </a>
              </li>
              <li>
                <a href={SITE.phones.technical.href} className="transition hover:text-white">
                  Technický úsek: {SITE.phones.technical.display}
                </a>
              </li>
            </ul>
            <svg
              className="pointer-events-none absolute -bottom-2 right-0 h-24 w-36 text-white/10"
              viewBox="0 0 160 100"
              fill="none"
              aria-hidden="true"
            >
              <path d="M12 88V28h28v60M40 88V40h24v48M64 88V22h34v66M98 88V36h26v52M124 88V30h24v58" stroke="currentColor" strokeWidth="1.2" />
              <path d="M12 88h136" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}
          </p>
          <p>Prototyp homepage — odkazy smerujú na oficiálny web sbdvk.sk</p>
        </div>
      </div>
    </footer>
  );
}

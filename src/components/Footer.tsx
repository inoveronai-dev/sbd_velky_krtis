import Image from "next/image";
import Link from "next/link";
import { NAV, SITE } from "@/lib/content";

const FOOTER_LINKS = NAV.filter((item) => item.label !== "Úvod").flatMap((item) =>
  item.children
    ? item.children.map((child) => ({
        label: child.label,
        href: child.href,
        external: true as const,
      }))
    : [
        {
          label: item.label,
          href: item.href,
          external: Boolean(item.external),
        },
      ],
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep text-white" id="pata">
      <div className="mx-auto max-w-content px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr_1fr]">
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
            <p className="mt-4 text-sm text-white/70">
              {SITE.addressLine1}
              <br />
              {SITE.addressLine2}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white/90">Navigácia</h2>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.slice(0, 8).map((link) => (
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
            <h2 className="text-sm font-semibold tracking-wide text-white/90">Spojenie</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="block text-white/55">Sekretariát</span>
                <a href={SITE.phones.secretariat.href} className="transition hover:text-white">
                  {SITE.phones.secretariat.display}
                </a>
              </li>
              <li>
                <span className="block text-white/55">Technický úsek</span>
                <a href={SITE.phones.technical.href} className="transition hover:text-white">
                  {SITE.phones.technical.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}
          </p>
          <p>Prototyp homepage — odkazy smerujú na oficiálny web sbdvk.sk</p>
        </div>
      </div>
    </footer>
  );
}

/**
 * Homepage-only visual demo mode.
 * Subpage destinations are temporarily non-interactive until pages are built.
 * Flip to false when subpages are ready.
 */
export const DEMO_HOMEPAGE_ONLY = true;

/** True when the href may navigate (homepage, in-page anchors, tel/mailto/maps). */
export function isDemoAllowedHref(href: string): boolean {
  if (!DEMO_HOMEPAGE_ONLY) return true;

  const value = href.trim();
  if (!value) return false;

  if (value.startsWith("#")) return true;
  if (value === "/" || value.startsWith("/#")) return true;
  if (value.startsWith("tel:") || value.startsWith("mailto:")) return true;

  try {
    const url = new URL(value, "https://example.local");
    const host = url.hostname.replace(/^www\./, "");
    const isMapsHost =
      host === "maps.app.goo.gl" ||
      host === "maps.google.com" ||
      (host === "google.com" && url.pathname.startsWith("/maps")) ||
      (host.endsWith(".google.com") && url.pathname.includes("/maps"));
    if (isMapsHost) return true;
  } catch {
    /* ignore parse errors */
  }

  return false;
}

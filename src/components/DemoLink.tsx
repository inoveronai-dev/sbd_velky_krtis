import Link from "next/link";
import type { ReactNode } from "react";
import { isDemoAllowedHref } from "@/lib/demo";

type DemoLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
  onClick?: () => void;
  ariaCurrent?: "page";
  title?: string;
  download?: boolean;
  tabIndex?: number;
  "aria-hidden"?: boolean | "true" | "false";
  role?: string;
};

/**
 * Renders a normal link when allowed in demo mode; otherwise a non-interactive
 * element with the same visual classes (no href="#", no scroll jump).
 */
export function DemoLink({
  href,
  className,
  children,
  external,
  onClick,
  ariaCurrent,
  title,
  download,
  tabIndex,
  "aria-hidden": ariaHidden,
  role,
}: DemoLinkProps) {
  if (!isDemoAllowedHref(href)) {
    return (
      <span
        className={className}
        title={title}
        role={role === "menuitem" ? "presentation" : undefined}
        aria-disabled="true"
        aria-hidden={ariaHidden}
        tabIndex={tabIndex ?? -1}
      >
        {children}
      </span>
    );
  }

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        title={title}
        download={download || undefined}
        tabIndex={tabIndex}
        aria-hidden={ariaHidden}
        role={role}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        title={title}
        tabIndex={tabIndex}
        aria-hidden={ariaHidden}
        role={role}
        aria-current={ariaCurrent}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={onClick}
      aria-current={ariaCurrent}
      title={title}
      tabIndex={tabIndex}
      aria-hidden={ariaHidden}
      role={role}
    >
      {children}
    </Link>
  );
}

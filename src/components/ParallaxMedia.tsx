import Image from "next/image";

type ParallaxMediaProps = {
  src: string;
  alt: string;
  /** Optional object-position for crop focus */
  objectPosition?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Fixed-background parallax layer clipped by the parent section
 * (parent must use `clip-path: inset(0)` + `parallax-section`).
 * Falls back to absolute cover on small screens / reduced motion via CSS.
 */
export function ParallaxMedia({
  src,
  alt,
  objectPosition = "50% 45%",
  priority = false,
  className = "",
}: ParallaxMediaProps) {
  return (
    <div className={`parallax-media ${className}`} aria-hidden={alt ? undefined : true}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-[var(--parallax-object-position,50%_45%)]"
        style={
          {
            ["--parallax-object-position" as string]: objectPosition,
            objectPosition,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

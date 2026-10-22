type HeadingPart = {
  text: string;
  accent?: boolean;
};

type SectionHeadingProps = {
  id?: string;
  parts: HeadingPart[];
  className?: string;
  align?: "left" | "center";
};

/** Two-tone editorial section title — Playfair Display + brand gray/green. */
export function SectionHeading({
  id,
  parts,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`font-display text-balance text-[1.85rem] font-medium leading-[1.2] tracking-[-0.01em] md:text-[2.45rem] md:leading-[1.18] lg:text-[2.65rem] ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {parts.map((part) => (
        <span key={`${part.text}-${part.accent ? "a" : "b"}`} className={part.accent ? "text-brand" : "text-ink"}>
          {part.text}
        </span>
      ))}
    </h2>
  );
}

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
      className={`font-display text-balance text-[2.05rem] font-medium leading-[1.18] tracking-[-0.012em] md:text-[2.75rem] md:leading-[1.14] lg:text-[3.15rem] ${
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

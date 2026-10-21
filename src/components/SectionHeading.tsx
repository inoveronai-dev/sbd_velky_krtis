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

/** Two-tone section title: ink gray + brand green accents via styled spans. */
export function SectionHeading({
  id,
  parts,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`text-balance text-[1.75rem] font-bold leading-[1.15] tracking-[-0.025em] md:text-[2.25rem] ${
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

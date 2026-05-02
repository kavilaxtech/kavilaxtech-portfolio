import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl mb-14">
      <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}

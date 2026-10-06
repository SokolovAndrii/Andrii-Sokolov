import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`h2 ${center ? "mx-auto" : ""} max-w-3xl`}>{title}</h2>
    </Reveal>
  );
}

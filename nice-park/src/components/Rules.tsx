import { ChevronDown, Gauge, ScrollText } from "lucide-react";
import { rules } from "@/config/site";
import { Reveal, RevealItem, Stagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Повні правила: ліміти пробігу + групи правил у розгортних блоках (нативний <details>, без JS). */
export function Rules() {
  return (
    <section id="rules" className="relative scroll-mt-20 py-14 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow={rules.eyebrow} title={rules.title} />
        <Reveal>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{rules.intro}</p>
        </Reveal>

        <Stagger className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {rules.mileage.map((m) => (
            <RevealItem key={m.value} className="glass flex items-center gap-4 p-4 sm:block sm:p-5">
              <div className="flex shrink-0 items-center gap-2 font-display text-2xl font-extrabold text-taxi sm:text-3xl">
                <Gauge className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                {m.value}
              </div>
              <div className="text-sm leading-snug text-white/65 sm:mt-2">{m.label}</div>
            </RevealItem>
          ))}
        </Stagger>
        <Reveal>
          <p className="mt-4 text-sm leading-relaxed text-white/55">{rules.mileageNote}</p>
        </Reveal>

        <Reveal className="mt-8 grid max-w-4xl gap-3">
          {rules.groups.map((g, i) => (
            <details key={g.title} className="glass group overflow-hidden open:border-taxi/30" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-base font-semibold text-white sm:px-6 sm:py-5 sm:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-3">
                  <ScrollText className="h-5 w-5 shrink-0 text-taxi" aria-hidden />
                  {g.title}
                </span>
                <ChevronDown className="h-5 w-5 shrink-0 text-white/60 transition group-open:rotate-180" aria-hidden />
              </summary>
              <ul className="space-y-2.5 px-5 pb-5 sm:px-6">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-[15px] leading-relaxed text-white/75">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-taxi" aria-hidden />
                    {it}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

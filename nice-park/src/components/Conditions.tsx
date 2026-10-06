import { Check } from "lucide-react";
import { conditions } from "@/config/site";
import { RevealItem, Stagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Conditions() {
  return (
    <section id="conditions" className="relative scroll-mt-20 py-14 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={conditions.eyebrow} title={conditions.title} />
        </div>
        <Stagger as="ol" className="relative space-y-3 before:absolute before:bottom-6 before:left-[1.125rem] sm:before:left-[1.4rem] before:top-6 before:w-px before:bg-gradient-to-b before:from-taxi/60 before:via-violet-glow/40 before:to-transparent">
          {conditions.items.map((it, i) => (
            <RevealItem as="li" key={it.title} className="relative flex gap-3 sm:gap-4">
              <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-taxi/40 bg-ink font-display text-xs sm:h-11 sm:w-11 sm:text-sm font-bold text-taxi">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="glass card-hover min-w-0 flex-1 p-4 sm:p-5">
                <h3 className="flex items-start gap-2 font-display text-base font-bold text-white sm:text-lg">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-taxi" aria-hidden />
                  {it.title}
                </h3>
                <p className="mt-2 leading-relaxed text-white/65">{it.text}</p>
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

import { BadgeCheck } from "lucide-react";
import { requirements } from "@/config/site";
import { RevealItem, Stagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Requirements() {
  return (
    <section id="requirements" className="relative scroll-mt-20 py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow={requirements.eyebrow} title={requirements.title} center />
        <Stagger as="ul" className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {requirements.items.map((r) => (
            <RevealItem
              as="li"
              key={r}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:border-taxi/40 hover:bg-taxi/10 sm:text-base"
            >
              <BadgeCheck className="h-4 w-4 text-taxi sm:h-5 sm:w-5" aria-hidden />
              {r}
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

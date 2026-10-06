import { CarFront, Clock, Fuel, Handshake, House, Receipt, type LucideIcon } from "lucide-react";
import { benefits } from "@/config/site";
import { RevealItem, Stagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  receipt: Receipt,
  home: House,
  car: CarFront,
  clock: Clock,
  fuel: Fuel,
  handshake: Handshake,
};

export function Benefits() {
  return (
    <section id="benefits" className="relative scroll-mt-20 py-14 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow={benefits.eyebrow} title={benefits.title} />
        <Stagger className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {benefits.items.map((b) => {
            const Icon = icons[b.icon];
            const badge = "highlight" in b ? b.highlight : undefined;
            return (
              <RevealItem
                key={b.title}
                className={`glass card-hover group relative flex gap-4 p-5 sm:block sm:p-6 ${badge ? "border-taxi/50 bg-taxi/[0.07] shadow-glow" : ""}`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 bg-gradient-to-br from-taxi to-taxi-deep text-ink shadow-glow transition group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  {badge && (
                    <span className="mb-1.5 inline-block rounded-full bg-taxi px-2.5 py-0.5 text-xs font-bold text-ink sm:absolute sm:right-5 sm:top-5 sm:mb-0 sm:py-1">
                      {badge}
                    </span>
                  )}
                  <h3 className="font-display text-base font-bold text-white sm:mt-5 sm:text-lg">{b.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/65 sm:mt-2 sm:text-base">{b.text}</p>
                </div>
              </RevealItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

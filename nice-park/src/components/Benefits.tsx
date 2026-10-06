import { Clock, Fuel, Handshake, House, Receipt, Users, type LucideIcon } from "lucide-react";
import { benefits } from "@/config/site";
import { RevealItem, Stagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  receipt: Receipt,
  home: House,
  users: Users,
  clock: Clock,
  fuel: Fuel,
  handshake: Handshake,
};

export function Benefits() {
  return (
    <section id="benefits" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow={benefits.eyebrow} title={benefits.title} />
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {benefits.items.map((b) => {
            const Icon = icons[b.icon];
            return (
              <RevealItem key={b.title} className="glass card-hover group p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-taxi to-taxi-deep text-ink shadow-glow transition group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-white/65">{b.text}</p>
              </RevealItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

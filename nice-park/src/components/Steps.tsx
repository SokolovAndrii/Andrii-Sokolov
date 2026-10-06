"use client";

import { m, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { steps } from "@/config/site";
import { RevealItem, Stagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Steps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="steps" className="relative scroll-mt-20 py-14 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow={steps.eyebrow} title={steps.title} />

        <div ref={ref} className="relative mt-12">
          {/* Лінія-прогрес: вертикальна на мобільному, горизонтальна на десктопі */}
          <div className="absolute bottom-0 left-6 top-0 w-1 -translate-x-1/2 rounded-full bg-white/10 lg:bottom-auto lg:left-0 lg:right-0 lg:top-6 lg:h-1 lg:w-auto lg:translate-x-0" aria-hidden>
            <m.div
              className="h-full w-full origin-top rounded-full bg-gradient-to-b from-taxi to-violet-glow lg:hidden"
              style={{ scaleY: progress }}
            />
            <m.div
              className="hidden h-full w-full origin-left rounded-full bg-gradient-to-r from-taxi to-violet-glow lg:block"
              style={{ scaleX: progress }}
            />
          </div>

          <Stagger as="ol" className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.items.map((s, i) => (
              <RevealItem as="li" key={s.title} className="relative flex gap-5 lg:block">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-taxi font-display text-lg font-extrabold text-ink shadow-glow">
                  {i + 1}
                </div>
                <div className="lg:mt-6">
                  <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-1 text-white/60">{s.text}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

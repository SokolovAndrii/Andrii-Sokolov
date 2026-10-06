"use client";

import { AnimatePresence, m } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { faq } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-20 py-14 sm:py-28">
      <div className="container-x max-w-3xl">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} center />
        <Reveal className="mt-10 space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            const id = `faq-${i}`;
            return (
              <div
                key={item.q}
                className={`glass overflow-hidden transition-colors ${isOpen ? "border-taxi/30 bg-white/[0.06]" : ""}`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-base font-semibold text-white sm:px-6 sm:text-lg"
                  >
                    {item.q}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                        isOpen ? "rotate-45 bg-taxi text-ink" : "bg-white/10 text-white"
                      }`}
                    >
                      <Plus className="h-4 w-4" aria-hidden />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={id}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-5 leading-relaxed text-white/70 sm:px-6">{item.a}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

const fmt = new Intl.NumberFormat("uk-UA", { maximumFractionDigits: 0 });

type Props = {
  value: number;
  /** Рахувати від 0, коли елемент з'явився на екрані (лічильники) */
  startOnView?: boolean;
  duration?: number;
  className?: string;
};

/**
 * Число, що плавно анімується до value. Оновлює DOM напряму (без ре-рендерів React),
 * тож анімація дешева навіть на слабких телефонах.
 */
export function AnimatedNumber({ value, startOnView = false, duration = 0.8, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const current = useRef(startOnView ? 0 : value);
  const started = useRef(!startOnView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!started.current) {
      if (!inView) return;
      started.current = true;
    }
    if (reduce) {
      current.current = value;
      el.textContent = fmt.format(Math.round(value));
      return;
    }
    const controls = animate(current.current, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        current.current = v;
        el.textContent = fmt.format(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [value, inView, reduce, duration]);

  // SSR/початковий рендер: для лічильників — 0, для калькулятора — реальне значення
  return (
    <span ref={ref} className={className} suppressHydrationWarning>
      {fmt.format(Math.round(startOnView ? 0 : value))}
    </span>
  );
}

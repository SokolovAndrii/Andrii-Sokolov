"use client";

import { m, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
};

/** Fade + slide up при появі у viewport. */
export function Reveal({ children, className }: Omit<Props, "as">) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={revealItem}
    >
      {children}
    </m.div>
  );
}

/** Контейнер, що по черзі (stagger) показує дочірні RevealItem. */
export function Stagger({ children, className, as = "div" }: Props) {
  const Comp = as === "ul" ? m.ul : as === "ol" ? m.ol : m.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
    >
      {children}
    </Comp>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Comp = as === "li" ? m.li : m.div;
  return (
    <Comp className={className} variants={revealItem}>
      {children}
    </Comp>
  );
}

"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { FormLink } from "./FormLink";

/** Плаваюча кнопка анкети на мобільних — з'являється після hero і ховається біля фінального CTA. */
export function MobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const final = document.getElementById("apply");
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.6;
      const finalTop = final?.getBoundingClientRect().top ?? Infinity;
      const finalVisible = finalTop < window.innerHeight;
      setShow(pastHero && !finalVisible);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <m.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 md:hidden"
        >
          <div className="pointer-events-none absolute inset-0 -top-6 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
          <FormLink className="relative w-full shadow-glow" pulse>
            Заповнити анкету
          </FormLink>
        </m.div>
      )}
    </AnimatePresence>
  );
}

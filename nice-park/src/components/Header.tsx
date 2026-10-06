"use client";

import { useEffect, useState } from "react";
import { ClipboardList } from "lucide-react";
import { FORM_URL } from "@/config/site";
import { Logo } from "./Logo";

const nav = [
  { href: "#benefits", label: "Переваги" },
  { href: "#calculator", label: "Калькулятор" },
  { href: "#conditions", label: "Умови" },
  { href: "#rules", label: "Правила" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-ink/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Основна навігація">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-white/70 transition hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-taxi px-4 py-2.5 font-display text-sm font-bold text-ink transition hover:bg-taxi-soft"
        >
          <ClipboardList className="h-4 w-4" aria-hidden />
          Анкета
        </a>
      </div>
    </header>
  );
}

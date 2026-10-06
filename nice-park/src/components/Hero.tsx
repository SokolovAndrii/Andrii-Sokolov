import { Calculator, MapPin } from "lucide-react";
import { hero } from "@/config/site";
import { AnimatedNumber } from "./AnimatedNumber";
import { FormLink } from "./FormLink";
import { RoadBackground } from "./RoadBackground";

/** Рядок шаблону з {0}, {1}… у вигляді анімованих лічильників. */
function FactValue({ template, values }: { template: string; values: number[] }) {
  const parts = template.split(/(\{\d+\})/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) => {
        const match = p.match(/^\{(\d+)\}$/);
        return match ? (
          <AnimatedNumber key={i} value={values[Number(match[1])]} startOnView duration={1.4} />
        ) : (
          <span key={i}>{p}</span>
        );
      })}
    </>
  );
}

export function Hero() {
  const words = hero.title.split(" ");

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-40 pt-28 sm:pb-48 sm:pt-32">
      <RoadBackground />

      <div className="container-x relative">
        <p className="hero-fade eyebrow" style={{ animationDelay: "0ms" }}>
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          {hero.badge}
        </p>

        {/* Поява по словах — на CSS, щоб заголовок рендерився без очікування JS (LCP) */}
        <h1 className="mt-6 max-w-4xl font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-tight text-white min-[400px]:text-[2.7rem] sm:text-6xl lg:text-7xl">
          {words.map((w, i) => (
            <span
              key={i}
              className={`hero-word inline-block ${w === "Nice" || w === "Park" ? "text-taxi" : ""}`}
              style={{ animationDelay: `${80 + i * 70}ms` }}
            >
              {w}
              {i < words.length - 1 && " "}
            </span>
          ))}
        </h1>

        {/* Підзаголовок без анімації — це LCP-елемент на мобільному, має з'явитися одразу */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
          {hero.subtitle}
        </p>

        <div
          className="hero-fade mt-9 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: `${200 + words.length * 70}ms` }}
        >
          <FormLink pulse>{hero.primaryCta}</FormLink>
          <a href="#calculator" className="btn-ghost">
            <Calculator className="h-5 w-5" aria-hidden />
            {hero.secondaryCta}
          </a>
        </div>

        <ul
          className="hero-fade mt-12 grid grid-cols-1 gap-3 sm:max-w-3xl sm:grid-cols-3 sm:gap-4"
          style={{ animationDelay: `${300 + words.length * 70}ms` }}
        >
          {hero.facts.map((f) => (
            <li key={f.label} className="glass flex items-center gap-4 px-4 py-3.5 sm:block sm:px-5 sm:py-5">
              <div className="whitespace-nowrap min-w-[8.75rem] shrink-0 font-display text-xl font-bold text-taxi sm:min-w-0 sm:text-xl lg:text-2xl">
                <FactValue template={f.template} values={f.values} />
              </div>
              <div className="text-sm leading-snug text-white/60 sm:mt-1">{f.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

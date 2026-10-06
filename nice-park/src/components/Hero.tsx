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
  // «Nice Park» — одне слово для анімації, щоб назва не розривалась між рядками
  const words = hero.title.replace("Nice Park", "Nice\u00A0Park").split(" ");

  return (
    <section id="top" className="relative isolate flex items-center overflow-hidden pb-14 pt-24 sm:min-h-[100svh] sm:pb-48 sm:pt-32">
      <RoadBackground />

      <div className="container-x relative">
        <p className="hero-fade eyebrow" style={{ animationDelay: "0ms" }}>
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          {hero.badge}
        </p>

        {/* Поява по словах — на CSS, щоб заголовок рендерився без очікування JS (LCP) */}
        <h1 className="mt-6 max-w-4xl font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-tight text-white min-[390px]:text-[2.6rem] sm:text-6xl lg:text-7xl">
          {words.map((w, i) => (
            <span
              key={i}
              className={`hero-word inline-block ${w.startsWith("Nice") ? "text-taxi" : ""}`}
              style={{ animationDelay: `${80 + i * 70}ms` }}
            >
              {w}
              {i < words.length - 1 && " "}
            </span>
          ))}
        </h1>

        {/* Підзаголовок без анімації — це LCP-елемент на мобільному, має з'явитися одразу */}
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 min-[390px]:text-lg sm:mt-6 sm:text-xl">
          {hero.subtitle}
        </p>

        <div
          className="hero-fade mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"
          style={{ animationDelay: `${200 + words.length * 70}ms` }}
        >
          <FormLink pulse>{hero.primaryCta}</FormLink>
          <a href="#calculator" className="btn-ghost">
            <Calculator className="h-5 w-5" aria-hidden />
            {hero.secondaryCta}
          </a>
        </div>

        <ul
          className="hero-fade mt-8 grid grid-cols-1 gap-2.5 sm:mt-12 sm:max-w-3xl sm:grid-cols-3 sm:gap-4"
          style={{ animationDelay: `${300 + words.length * 70}ms` }}
        >
          {hero.facts.map((f) => (
            <li key={f.label} className="glass flex items-center gap-3 px-4 py-3 sm:block sm:px-5 sm:py-5">
              <div className="whitespace-nowrap min-w-[8.25rem] shrink-0 font-display text-lg min-[390px]:text-xl font-bold text-taxi sm:min-w-0 sm:text-xl lg:text-2xl">
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

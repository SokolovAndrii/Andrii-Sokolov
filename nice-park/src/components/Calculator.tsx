"use client";

import { m } from "framer-motion";
import { Flame, Fuel, Sparkles, Wallet, CalendarDays } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { calcTexts as t, calculateIncome, calculator as c } from "@/config/site";
import { AnimatedNumber } from "./AnimatedNumber";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const fmt = new Intl.NumberFormat("uk-UA");
const spring = { type: "spring", stiffness: 120, damping: 20 } as const;

const R = 80;
const CIRC = 2 * Math.PI * R;

export function Calculator() {
  const [gross, setGross] = useState(c.defaultValue);
  const r = useMemo(() => calculateIncome(gross), [gross]);
  const sliderId = useId();

  const fill = ((gross - c.min) / (c.max - c.min)) * 100;
  const thresholdPos = ((c.threshold - c.min) / (c.max - c.min)) * 100;
  const bonusOn = r.rate === c.bonusShare;

  // Сегменти каси: на руки / пальне / власник
  const segments = [
    { key: "net", label: "Вам на руки", value: r.netWeek, color: "#FFC83D" },
    { key: "fuel", label: t.fuel, value: r.fuel, color: "#3B82F6" },
    { key: "owner", label: t.owner, value: r.ownerShare, color: "#7C5CFF" },
  ];
  let offset = 0;
  const arcs = segments.map((s) => {
    const len = (s.value / r.gross) * CIRC;
    const arc = { ...s, len, offset };
    offset += len;
    return arc;
  });

  return (
    <section id="calculator" className="relative scroll-mt-20 py-14 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-[500px] max-w-4xl rounded-full bg-[radial-gradient(ellipse,rgba(124,92,255,0.22),transparent_65%)] blur-2xl"
        aria-hidden
      />
      <div className="container-x">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <Reveal className="glass mt-8 overflow-hidden p-4 min-[390px]:p-5 sm:mt-10 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            {/* Ліва частина: слайдер і цифри */}
            <div>
              <label htmlFor={sliderId} className="block text-sm font-medium text-white/70">
                {t.sliderLabel}
              </label>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                  {fmt.format(gross)}
                  <span className="ml-2 text-2xl text-white/50 sm:text-3xl">грн</span>
                </span>
                <m.span
                  key={bonusOn ? "on" : "off"}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                    bonusOn ? "bg-taxi text-ink" : "bg-white/10 text-white/70"
                  }`}
                >
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  {bonusOn
                    ? "65% з усієї каси"
                    : `ще ${fmt.format(c.threshold - gross)} грн до 65%`}
                </m.span>
              </div>

              <div className="relative mt-4">
                <input
                  id={sliderId}
                  type="range"
                  min={c.min}
                  max={c.max}
                  step={c.step}
                  value={gross}
                  onChange={(e) => setGross(Number(e.target.value))}
                  className="range"
                  style={{ ["--fill" as string]: `${fill}%` }}
                  aria-valuetext={`${fmt.format(gross)} гривень на тиждень`}
                />
                <div
                  className="pointer-events-none absolute top-[calc(50%+14px)] -translate-x-1/2 text-center"
                  style={{ left: `calc(${thresholdPos}% + ${(0.5 - thresholdPos / 100) * 32}px)` }}
                >
                  <div className="mx-auto h-2 w-px bg-white/40" />
                  <div className="whitespace-nowrap text-[11px] text-white/50">65% від {fmt.format(c.threshold)}</div>
                </div>
              </div>
              <div className="mt-6 flex justify-between text-xs text-white/40">
                <span>{fmt.format(c.min)}</span>
                <span>{fmt.format(c.max)}</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
                <Stat icon={<Wallet className="h-4 w-4" />} label={t.driver} chip={`${Math.round(r.rate * 100)}%`} value={r.driverShare} />
                <Stat icon={<Fuel className="h-4 w-4" />} label={t.fuel} value={r.fuel} negative />
                <Stat icon={<Flame className="h-4 w-4" />} label={t.netWeek} value={r.netWeek} highlight />
                <Stat icon={<CalendarDays className="h-4 w-4" />} label={t.netMonth} value={r.netMonth} highlight big />
              </div>
            </div>

            {/* Права частина: donut + stacked bar */}
            <div className="flex flex-col items-center">
              <div className="relative h-52 w-52 sm:h-64 sm:w-64">
                <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90" role="img" aria-label="Розподіл каси">
                  <circle cx="100" cy="100" r={R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="22" />
                  {arcs.map((a) => (
                    <m.circle
                      key={a.key}
                      cx="100"
                      cy="100"
                      r={R}
                      fill="none"
                      stroke={a.color}
                      strokeWidth="22"
                      initial={false}
                      animate={{
                        strokeDasharray: `${Math.max(a.len - 2, 0)} ${CIRC}`,
                        strokeDashoffset: -a.offset,
                      }}
                      transition={spring}
                    />
                  ))}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-xs text-white/55">на руки / тиждень</span>
                  <span className="font-display text-3xl font-extrabold text-taxi sm:text-4xl">
                    <AnimatedNumber value={r.netWeek} duration={0.5} />
                  </span>
                  <span className="text-xs text-white/55">грн</span>
                </div>
              </div>

              <div className="mt-8 w-full">
                <div className="flex h-4 w-full overflow-hidden rounded-full bg-white/5">
                  {segments.map((s) => (
                    <m.div
                      key={s.key}
                      className="h-full"
                      style={{ backgroundColor: s.color }}
                      initial={false}
                      animate={{ width: `${(s.value / r.gross) * 100}%` }}
                      transition={spring}
                    />
                  ))}
                </div>
                <ul className="mt-4 grid gap-2 text-sm">
                  {segments.map((s) => (
                    <li key={s.key} className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2 text-white/70">
                        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: s.color }} />
                        {s.label}
                      </span>
                      <span className="font-semibold tabular-nums text-white">
                        {fmt.format(Math.round(s.value))} грн
                        <span className="ml-2 text-white/40">{Math.round((s.value / r.gross) * 100)}%</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-8 border-t border-white/10 pt-5 text-sm text-white/50">* {t.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({
  icon,
  label,
  value,
  highlight,
  negative,
  big,
  chip,
}: {
  icon: React.ReactNode;
  label: string;
  chip?: string;
  value: number;
  highlight?: boolean;
  negative?: boolean;
  big?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-3.5 sm:p-4 ${
        highlight ? "border-taxi/30 bg-taxi/[0.08]" : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="flex items-center gap-1.5 text-xs text-white/60 sm:text-sm">
        <span className={highlight ? "text-taxi" : "text-white/50"} aria-hidden>
          {icon}
        </span>
        <span className="leading-tight">{label}</span>
        {chip && (
          <span className="ml-auto rounded-full bg-taxi/15 px-1.5 py-0.5 text-[11px] font-bold text-taxi">{chip}</span>
        )}
      </div>
      <div
        className={`mt-1.5 font-display font-bold tabular-nums ${
          big ? "text-xl min-[400px]:text-2xl sm:text-3xl" : "text-lg min-[400px]:text-xl sm:text-2xl"
        } ${highlight ? "text-taxi" : "text-white"}`}
      >
        {negative && "−"}
        <AnimatedNumber value={value} duration={0.5} />
        <span className="ml-1 text-sm font-semibold text-white/50">грн</span>
      </div>
    </div>
  );
}

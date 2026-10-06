import { finalCta } from "@/config/site";
import { FormLink } from "./FormLink";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="apply" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-glow/40 via-azure-glow/20 to-taxi/30 px-6 py-14 text-center shadow-card sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-taxi/30 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-violet-glow/40 blur-3xl" aria-hidden />
          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80 sm:text-xl">{finalCta.text}</p>
            <FormLink pulse className="mt-8 w-full sm:w-auto sm:px-10 sm:text-lg">
              {finalCta.button}
            </FormLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

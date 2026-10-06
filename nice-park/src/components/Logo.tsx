import { site } from "@/config/site";

/** Жовта шашка таксі + текстовий логотип. */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="9" fill="#FFC83D" />
      <g fill="#0B0F19">
        <rect x="6" y="9" width="5" height="5" rx="1" />
        <rect x="16" y="9" width="5" height="5" rx="1" />
        <rect x="11" y="14" width="5" height="5" rx="1" />
        <rect x="21" y="14" width="5" height="5" rx="1" />
        <rect x="6" y="19" width="5" height="5" rx="1" />
        <rect x="16" y="19" width="5" height="5" rx="1" />
      </g>
    </svg>
  );
}

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} — на початок`}>
      <LogoMark />
      <span className="font-display text-lg font-bold tracking-tight text-white">
        Nice<span className="text-taxi"> Park</span>
      </span>
    </a>
  );
}

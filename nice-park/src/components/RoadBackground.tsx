/** Легкий SVG/CSS фон hero: світлові плями + дорога з рухомою розміткою. Без JS. */
export function RoadBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Градієнтні «світлові» плями */}
      {/* Позиції в одиницях вьюпорта, а не % секції — без зсувів макета (CLS) при підвантаженні шрифтів */}
      <div className="absolute left-[-25vmax] top-[-25vmax] h-[70vmax] w-[70vmax] animate-drift rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.35),transparent_60%)] will-change-transform" />
      <div
        className="absolute right-[-20vmax] top-[25svh] h-[60vmax] w-[60vmax] animate-drift rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.28),transparent_60%)] will-change-transform"
        style={{ animationDelay: "-7s" }}
      />
      <div className="absolute left-1/2 top-[80svh] h-[40vmax] w-[80vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,200,61,0.16),transparent_60%)]" />

      {/* Сітка-підкладка */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Дорога в перспективі */}
      <svg
        className="absolute left-1/2 top-[56svh] h-[44svh] w-[180%] max-w-none -translate-x-1/2 sm:w-[120%] lg:w-full"
        viewBox="0 0 1000 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1a2033" stopOpacity="0" />
            <stop offset="0.35" stopColor="#151a2b" stopOpacity="0.7" />
            <stop offset="1" stopColor="#0f1322" />
          </linearGradient>
          <linearGradient id="edge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFC83D" stopOpacity="0" />
            <stop offset="1" stopColor="#FFC83D" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="dash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#fff" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path d="M470 0 L530 0 L1000 400 L0 400 Z" fill="url(#road)" />
        <path d="M470 0 L0 400" stroke="url(#edge)" strokeWidth="3" fill="none" />
        <path d="M530 0 L1000 400" stroke="url(#edge)" strokeWidth="3" fill="none" />
        <path
          d="M500 0 L500 400"
          stroke="url(#dash)"
          strokeWidth="8"
          strokeDasharray="36 24"
          fill="none"
          className="animate-road-dash"
        />
        <path d="M486 0 L250 400" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="20 30" className="animate-road-dash" fill="none" />
        <path d="M514 0 L750 400" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="20 30" className="animate-road-dash" fill="none" />
      </svg>

      {/* Плавний перехід у фон сторінки */}
      <div className="absolute inset-x-0 top-[calc(100svh-6rem)] h-24 bg-gradient-to-t from-ink to-transparent" />
      <div className="absolute inset-x-0 top-[100svh] bottom-0 bg-ink" />
    </div>
  );
}

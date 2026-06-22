import { MapPin } from "lucide-react";

const towns = [
  "Swadlincote", "Burton-upon-Trent", "Ashby-de-la-Zouch", "Derby",
  "Castle Donington", "Coalville", "Melbourne", "Repton",
  "Woodville", "Church Gresley", "Measham", "Ticknall",
];

export function Coverage() {
  return (
    <section id="coverage" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            Coverage Area
          </div>
          <h2 className="font-display text-4xl font-bold uppercase text-navy sm:text-5xl">
            Proudly covering Derbyshire & Northwest Leicestershire
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Based in Swadlincote (DE11 9PQ), we work across South Derbyshire and the
            surrounding Leicestershire villages and towns. If you're nearby, get in touch —
            we travel further for bigger jobs.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {towns.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange/20 to-navy/10 blur-2xl" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border bg-navy text-white shadow-elevated">
            {/* Stylised map illustration */}
            <svg viewBox="0 0 500 400" className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="g" cx="50%" cy="45%" r="55%">
                  <stop offset="0%" stopColor="oklch(0.7 0.2 47 / 0.45)" />
                  <stop offset="100%" stopColor="oklch(0.22 0.09 265 / 0)" />
                </radialGradient>
                <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.1" fill="oklch(1 0 0 / 0.08)" />
                </pattern>
              </defs>
              <rect width="500" height="400" fill="url(#dots)" />
              <circle cx="250" cy="180" r="160" fill="url(#g)" />
              <path
                d="M70 240 C 130 160, 200 130, 260 150 S 410 220, 430 160"
                stroke="oklch(1 0 0 / 0.18)" strokeWidth="1.5" fill="none" strokeDasharray="4 6"
              />
              <path
                d="M90 290 C 180 270, 260 320, 340 280 S 460 250, 470 300"
                stroke="oklch(1 0 0 / 0.12)" strokeWidth="1.5" fill="none" strokeDasharray="4 6"
              />
              {/* Towns */}
              {[
                { x: 250, y: 200, big: true, label: "Swadlincote" },
                { x: 175, y: 165, label: "Burton" },
                { x: 230, y: 120, label: "Derby" },
                { x: 320, y: 220, label: "Ashby" },
                { x: 360, y: 290, label: "Coalville" },
                { x: 290, y: 150, label: "Melbourne" },
                { x: 380, y: 170, label: "Castle Donington" },
              ].map((p) => (
                <g key={p.label}>
                  {p.big && <circle cx={p.x} cy={p.y} r="22" fill="oklch(0.7 0.2 47 / 0.25)" />}
                  <circle cx={p.x} cy={p.y} r={p.big ? 7 : 4} fill={p.big ? "oklch(0.7 0.2 47)" : "white"} />
                  <text x={p.x + 10} y={p.y + 4} fill="white" fontFamily="Inter, sans-serif" fontSize={p.big ? 13 : 11} fontWeight={p.big ? 700 : 500}>
                    {p.label}
                  </text>
                </g>
              ))}
            </svg>
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-orange px-4 py-2 text-xs font-bold uppercase tracking-widest">
              <MapPin className="h-4 w-4" /> DE11 9PQ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

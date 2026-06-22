import { Phone } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#coverage", label: "Coverage" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="h-12 w-12" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold uppercase tracking-wide text-navy">
              T1 Plumbing <span className="text-orange">&</span> Heating
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Services Ltd · Derbyshire
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-orange"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:07886157572"
          className="inline-flex items-center gap-2 rounded-md bg-orange px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">07886 157572</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

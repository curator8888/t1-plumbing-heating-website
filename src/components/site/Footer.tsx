import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="h-1 split-divider" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-14 w-14" />
            <div>
              <div className="font-display text-lg font-bold uppercase">T1 Plumbing & Heating</div>
              <div className="text-xs uppercase tracking-widest text-white/60">Services Ltd</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70">
            Local, family-run plumbing and heating specialists serving Derbyshire and
            Northwest Leicestershire.
          </p>
        </div>

        <div className="text-sm">
          <div className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-orange">
            Contact
          </div>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-orange" /><a href="tel:07886157572">07886 157572</a></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-orange" /><a href="mailto:t1plumbinghs@gmail.com">t1plumbinghs@gmail.com</a></li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-orange" />Swadlincote, Derbyshire, DE11 9PQ</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs uppercase tracking-[0.2em] text-white/60 sm:flex-row sm:px-6">
          <div>© {new Date().getFullYear()} T1 Plumbing & Heating Services Ltd</div>
          <div className="text-orange">Plumbing · Heating · Reliable · Professional</div>
        </div>
      </div>
    </footer>
  );
}

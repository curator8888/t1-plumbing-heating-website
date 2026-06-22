import { ArrowRight, Phone, Clock, ShieldCheck } from "lucide-react";
import bathroomHero from "@/assets/bathroom-install.jpg.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.7 0.2 47 / 0.5), transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.4 0.13 270 / 0.6), transparent 40%)",
      }} />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-orange" />
            Available 24/7 · Derbyshire & NW Leicestershire
          </div>
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Your Local <span className="text-orange">Plumbing</span> &{" "}
            <span className="text-orange">Heating</span> Specialists
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Reliable, professional and always available. Serving homes and landlords
            across Derbyshire and Northwest Leicestershire — from emergency call-outs to
            full HMO conversions and bathroom installs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3.5 text-base font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:07886157572"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-base font-semibold backdrop-blur transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> 07886 157572
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-sm">
            <Stat icon={<ShieldCheck className="h-5 w-5" />} value="94%" label="Recommended" />
            <Stat icon={<Clock className="h-5 w-5" />} value="24/7" label="Always available" />
            <Stat icon={<Phone className="h-5 w-5" />} value="12+" label="5★ reviews" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-orange/40 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-elevated">
            <img
              src={bathroomHero.url}
              alt="Bathroom installation by T1 Plumbing & Heating Services"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/15 bg-navy-deep/80 px-4 py-3 backdrop-blur">
              <div>
                <div className="text-xs uppercase tracking-widest text-orange">Trusted in</div>
                <div className="font-display text-lg font-bold">Swadlincote · DE11</div>
              </div>
              <div className="rounded-md bg-orange px-3 py-1 text-xs font-bold uppercase tracking-wider">
                Local & Family Run
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 split-divider" />
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-orange">{icon}</div>
      <div className="mt-1 font-display text-2xl font-bold">{value}</div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  );
}

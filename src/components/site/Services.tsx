import { Building2, Bath, Wrench, Flame, Siren, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "HMO Conversions",
    desc: "Full plumbing & heating fit-outs for HMO landlords — compliant, on-time, on-budget.",
    featured: true,
  },
  {
    icon: Bath,
    title: "Bathroom Installations",
    desc: "Bespoke bathroom installs from first fix to final tile, finished to a high standard.",
    featured: true,
  },
  { icon: Wrench, title: "General Plumbing", desc: "Leaks, taps, toilets, kitchens — everyday plumbing done right, first time." },
  { icon: Flame, title: "Heating & Boilers", desc: "Boiler servicing, repairs, replacements and central heating upgrades." },
  { icon: Siren, title: "Emergency Call-Outs", desc: "Burst pipes? No heating? We respond fast across Derbyshire, 24/7." },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              What we do
            </div>
            <h2 className="max-w-2xl font-display text-4xl font-bold uppercase text-navy sm:text-5xl">
              From a dripping tap to a full HMO conversion
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            One trusted local team for every plumbing and heating job — domestic, landlord,
            and emergency.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className={`group relative overflow-hidden rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-elevated ${
                  s.featured
                    ? "border-orange/30 bg-navy text-white"
                    : "border-border bg-card"
                }`}
              >
                {s.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Speciality
                  </span>
                )}
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                    s.featured ? "bg-orange text-white" : "bg-orange/10 text-orange"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className={`font-display text-2xl uppercase ${s.featured ? "text-white" : "text-navy"}`}>
                  {s.title}
                </h3>
                <p className={`mt-2 text-sm ${s.featured ? "text-white/75" : "text-muted-foreground"}`}>
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                    s.featured ? "text-orange" : "text-navy"
                  }`}
                >
                  Enquire now <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

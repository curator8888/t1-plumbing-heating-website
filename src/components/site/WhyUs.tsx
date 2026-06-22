import { ShieldCheck, BadgeCheck, MapPin, Clock, ThumbsUp } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Reliable", desc: "Turn up when we say we will." },
  { icon: BadgeCheck, title: "Professional", desc: "Clean, courteous, fully insured." },
  { icon: MapPin, title: "Local", desc: "Based in Swadlincote, Derbyshire." },
  { icon: Clock, title: "Always Available", desc: "24/7 emergency response." },
  { icon: ThumbsUp, title: "94% Recommended", desc: "Rated on Facebook (12 reviews)." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative bg-navy py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 max-w-3xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            Why choose T1
          </div>
          <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">
            A team your neighbours already trust
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="bg-navy p-7 transition-colors hover:bg-navy-deep">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange/15 text-orange">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl uppercase text-white">{it.title}</h3>
                <p className="mt-1 text-sm text-white/70">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    role: "Homeowner, Swadlincote",
    text: "Brilliant service from start to finish. Quoted fairly, turned up on time and our new bathroom looks fantastic. Highly recommend.",
  },
  {
    name: "James P.",
    role: "HMO Landlord, Derby",
    text: "Used T1 across two HMO conversions now. Compliant work, clean finish and clear communication. Wouldn't use anyone else.",
  },
  {
    name: "Linda H.",
    role: "Customer, Ashby",
    text: "Boiler packed in on a Sunday — they were out within the hour and had heating back on the same day. Lifesavers.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              What customers say
            </div>
            <h2 className="max-w-2xl font-display text-4xl font-bold uppercase text-navy sm:text-5xl">
              94% recommended on Facebook
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange text-white">
              <ThumbsUp className="h-7 w-7" />
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-navy">94%</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Recommended · 12 reviews
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex gap-0.5 text-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground/85">"{r.text}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-navy">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

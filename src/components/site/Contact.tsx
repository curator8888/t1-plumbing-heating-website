import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-hero py-24 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            Get in touch
          </div>
          <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">
            Free quotes. Fast response.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/75">
            Call us directly for emergencies, or send an email and we'll come back to you.
          </p>
        </div>

        <a
          href="tel:07886157572"
          className="mx-auto mt-8 flex max-w-lg items-center justify-between gap-3 rounded-2xl bg-orange p-5 shadow-glow transition-transform hover:scale-[1.02]"
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/80">
              Call Now
            </div>
            <div className="font-display text-3xl font-bold">07886 157572</div>
          </div>
          <Phone className="h-10 w-10" />
        </a>

        <ul className="mx-auto mt-8 grid max-w-lg gap-4 sm:grid-cols-2">
          <ContactRow icon={<Mail className="h-5 w-5" />} label="Email" value="t1plumbinghs@gmail.com" href="mailto:t1plumbinghs@gmail.com" />
          <ContactRow icon={<MapPin className="h-5 w-5" />} label="Based in" value="Swadlincote, Derbyshire, DE11 9PQ" />
          <ContactRow icon={<Clock className="h-5 w-5" />} label="Hours" value="24/7 — always available" className="sm:col-span-2" />
        </ul>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href, className = "" }: { icon: React.ReactNode; label: string; value: string; href?: string; className?: string }) {
  const inner = (
    <div className={`flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10 ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange/15 text-orange">{icon}</div>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
  return <li>{href ? <a href={href}>{inner}</a> : inner}</li>;
}

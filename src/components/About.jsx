import { Reveal } from "./Reveal";

const pillars = [
  { t: "Fresh Ingredients", d: "Sourced daily from the finest Mediterranean suppliers." },
  { t: "Charcoal Grilled", d: "Authentic open-flame technique in every signature dish." },
  { t: "Crafted with Care", d: "Each plate hand-prepared by our master chefs." },
  { t: "Warm Hospitality", d: "Levantine warmth meets modern British dining." },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.5em] text-primary mb-4">Our Story</p>
          <h2 className="text-center text-5xl md:text-7xl font-display mb-8">
            A new chapter in <em className="text-gold-gradient">fine dining</em>
          </h2>
          <p className="text-center max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Nileva Grill & Kitchen is a premium Mediterranean grill & lounge — where Levantine tradition,
            modern healthy dining and luxurious hospitality meet under one roof. Designed for the moments
            that matter most.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 120}>
              <div className="group relative h-full p-8 bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)]">
                <div className="w-12 h-12 hex-frame bg-primary/10 border border-primary/40 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <span className="font-display text-primary">0{i + 1}</span>
                </div>
                <h3 className="text-xl mb-3">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

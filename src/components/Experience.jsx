import { Reveal } from "./Reveal";

const items = [
  { k: "01", t: "Dine In", d: "Immersive lounge atmosphere with intimate Mediterranean styling." },
  { k: "02", t: "Takeaway", d: "Premium quality, beautifully packaged for the journey home." },
  { k: "03", t: "Delivery", d: "The Nileva experience delivered with care across the region." },
  { k: "04", t: "Private Events", d: "Family gatherings, celebrations and corporate evenings." },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.5em] text-primary mb-4">The Experience</p>
          <h2 className="text-center text-5xl md:text-7xl font-display mb-20">
            Your evening, <em className="text-gold-gradient">your way</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {items.map((it, i) => (
            <Reveal key={it.k} delay={i * 120}>
              <div className="group relative bg-background p-10 h-full hover:bg-card transition-colors duration-500">
                <span className="font-display text-6xl text-primary/20 group-hover:text-primary/60 transition-colors">{it.k}</span>
                <h3 className="text-2xl mt-4 mb-3">{it.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

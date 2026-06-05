import heroImg from "@/assets/nileva-hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})`, maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" }}
      />
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/50 animate-float"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 10) * 0.4}s`,
              animationDuration: `${5 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-up">
        <p className="text-xs md:text-sm uppercase tracking-[0.6em] text-accent mb-6">
          Something is on its way…
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] mb-4">
          <span className="block italic">launching</span>
          <span className="block text-gold-gradient">soon</span>
        </h1>
        <div className="mx-auto mt-8 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A premium Mediterranean grill & lounge experience — born in the heart of Uxbridge.
          Charcoal-grilled flavours, Levantine soul, modern luxury.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#menu"
            className="group relative px-8 py-3.5 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] overflow-hidden"
          >
            <span className="relative z-10">Explore the Menu</span>
            <span className="absolute inset-0 animate-shimmer" />
          </a>
          <a
            href="#location"
            className="px-8 py-3.5 border border-foreground/30 text-foreground text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-colors"
          >
            Find Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <span className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent animate-pulse" />
      </div>
    </section>
  );
}

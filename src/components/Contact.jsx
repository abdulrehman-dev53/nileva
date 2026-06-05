import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-primary mb-4">Stay in Touch</p>
          <h2 className="text-5xl md:text-7xl font-display mb-6">
            Be first to <em className="text-gold-gradient">taste</em>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Leave your email and we'll send you our opening date, exclusive launch night invitation, and a tasting offer.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget;
              const input = f.elements.namedItem("email");
              alert(`Thank you! We'll be in touch at ${input.value}`);
              f.reset();
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              required
              name="email"
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 bg-background border border-border focus:border-primary outline-none text-sm transition-colors"
            />
            <button
              type="submit"
              className="px-7 py-3.5 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:opacity-90 transition"
            >
              Notify Me
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 hex-frame bg-primary/20 border border-primary flex items-center justify-center font-display text-primary">N</div>
          <div>
            <div className="font-display text-lg">NILEVA</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Grill & Kitchen</div>
          </div>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Taste · Passion · Excellence</p>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Nileva Grill & Kitchen</p>
      </div>
    </footer>
  );
}

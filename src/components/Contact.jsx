import { Reveal } from "./Reveal";
<<<<<<< HEAD
import nilevaLogo from "../assets/NILEVA LOGO.png";
=======
>>>>>>> bb612918cbe09f228df7758da85f87a6e59b6cbf

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
<<<<<<< HEAD
            Give us a call — we'd love to hear from you and help with reservations or enquiries.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:01895760234"
              className="flex flex-col items-center gap-1 px-8 py-5 bg-background border border-border hover:border-primary transition-colors min-w-[220px]"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Landline</span>
              <span className="font-display text-2xl text-accent">01895 760234</span>
            </a>

            <a
              href="tel:+447514000020"
              className="flex flex-col items-center gap-1 px-8 py-5 bg-background border border-border hover:border-primary transition-colors min-w-[220px]"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Mobile</span>
              <span className="font-display text-2xl text-accent">0751 400 0020</span>
            </a>
          </div>
=======
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
>>>>>>> bb612918cbe09f228df7758da85f87a6e59b6cbf
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
<<<<<<< HEAD
          <img src={nilevaLogo} alt="Nileva" className="h-9 w-auto" />
          <div className="font-display text-lg">NILEVA</div>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Taste · Passion · Excellence</p>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Nileva</p>
=======
          <div className="w-9 h-9 hex-frame bg-primary/20 border border-primary flex items-center justify-center font-display text-primary">N</div>
          <div>
            <div className="font-display text-lg">NILEVA</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Grill & Kitchen</div>
          </div>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Taste · Passion · Excellence</p>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Nileva Grill & Kitchen</p>
>>>>>>> bb612918cbe09f228df7758da85f87a6e59b6cbf
      </div>
    </footer>
  );
}

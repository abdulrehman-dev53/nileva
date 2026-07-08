import { Reveal } from "./Reveal";
import nilevaLogo from "../assets/NILEVA LOGO.png";

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
            Give us a call — we'd love to hear from you and help with reservations or enquiries.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            
              href="tel:01895760234"
              className="flex flex-col items-center gap-1 px-8 py-5 bg-background border border-border hover:border-primary transition-colors min-w-[220px]"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Landline</span>
              <span
                className="text-2xl font-semibold text-accent"
                style={{ fontFamily: "Arial, Helvetica, sans-serif", letterSpacing: "0.02em" }}
              >
                01895 760234
              </span>
            </a>

            
              href="tel:+447514000020"
              className="flex flex-col items-center gap-1 px-8 py-5 bg-background border border-border hover:border-primary transition-colors min-w-[220px]"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Mobile</span>
              <span
                className="text-2xl font-semibold text-accent"
                style={{ fontFamily: "Arial, Helvetica, sans-serif", letterSpacing: "0.02em" }}
              >
                0751 400 0020
              </span>
            </a>
          </div>
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
          <img src={nilevaLogo} alt="Nileva" className="h-9 w-auto" />
          <div className="font-display text-lg">NILEVA</div>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Taste · Passion · Excellence</p>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Nileva</p>
      </div>
    </footer>
  );
}

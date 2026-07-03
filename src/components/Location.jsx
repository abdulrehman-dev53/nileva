import { Reveal } from "./Reveal";

export function Location() {
  const query = encodeURIComponent("12 Oxford Road, Uxbridge, London, UB9 4DQ");
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const embed = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <section id="location" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.5em] text-primary mb-4">Find Us</p>
          <h2 className="text-center text-5xl md:text-7xl font-display mb-16">
            Visit <em className="text-gold-gradient">Nileva</em>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <Reveal className="lg:col-span-2">
            <div className="h-full p-10 bg-card border border-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 hex-frame bg-primary/15 border border-primary flex items-center justify-center mb-6 animate-glow">
                  <span className="font-display text-primary">N</span>
                </div>
                <h3 className="font-display text-3xl mb-4">Our Location</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Tucked into the heart of the Uxbridge area — a premium destination for Mediterranean fine dining.
                </p>

                <dl className="space-y-5 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Address</dt>
                    <dd className="font-display text-xl text-accent leading-snug">
                      12 Oxford Road, Uxbridge, London, UB9 4DQ
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Web</dt>
                    <dd><a className="hover:text-primary transition" href="https://www.nileva.co.uk/" target="_blank" rel="noreferrer">www.nileva.co.uk</a></dd>
                  </div>
                </dl>
              </div>

              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-2 px-7 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:opacity-90 transition"
              >
                Get Directions
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={150}>
            <div className="relative h-full min-h-[420px] border border-border overflow-hidden group">
              <iframe
                title="Nileva location map — 12 Oxford Road, Uxbridge, UB9 4DQ"
                src={embed}
                className="absolute inset-0 w-full h-full grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-background/80 backdrop-blur border border-primary/40 text-xs uppercase tracking-[0.3em] text-primary">
                UB9 4DQ
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";

const categories = [
  {
    name: "Breakfast",
    tagline: "Premium Mediterranean Wellness",
    items: [
      { n: "Mediterranean Avocado Toast", d: "Sourdough · smashed avocado · cherry tomatoes · feta · pomegranate", p: "£12" },
      { n: "Protein Power Bowl", d: "Scrambled eggs · grilled chicken · quinoa · kale · tahini", p: "£14" },
      { n: "Turkish Eggs (Çılbır)", d: "Poached eggs · garlic yogurt · chilli butter · artisan bread", p: "£11" },
      { n: "Smoked Salmon & Eggs", d: "Salmon · avocado · poached eggs · sourdough · rocket", p: "£16" },
    ],
  },
  {
    name: "Starters",
    tagline: "Sharing · Levantine · Modern",
    items: [
      { n: "Hummus Trio", d: "Classic · beetroot · spicy — with warm bread", p: "£9" },
      { n: "Mutabal & Smoked Aubergine", d: "Tahini · olive oil · pomegranate garnish", p: "£10" },
      { n: "Mediterranean Dips Board", d: "Tzatziki · labneh · olive tapenade · pita", p: "£13" },
    ],
  },
  {
    name: "Grill & Mains",
    tagline: "Charcoal · Mediterranean · Signature",
    items: [
      { n: "Charcoal Grilled Chicken", d: "Half baby chicken · house marinade · garlic sauce · charred veg", p: "£18" },
      { n: "Chicken Shish Taouk", d: "Marinated skewer · pita · toum · pickles · peppers", p: "£17" },
      { n: "Slow-Cooked Lamb Shank", d: "Tender lamb · herb jus · seasonal vegetables", p: "£26" },
      { n: "Truffle Parmesan Fries", d: "Premium upsell side — crisp, indulgent, signature", p: "£7" },
    ],
  },
  {
    name: "Sunday Roast",
    tagline: "British Tradition · Mediterranean Luxury",
    items: [
      { n: "Signature Roast Chicken", d: "Garlic & rosemary chicken · Yorkshire pudding · roast potatoes · gravy", p: "£19" },
      { n: "Slow-Roasted Lamb Shoulder", d: "Rosemary potatoes · honey carrots · buttered greens · mint jus", p: "£24" },
      { n: "Premium Roast Beef", d: "Slow-roasted beef · Yorkshire · root vegetables · rich gravy", p: "£22" },
    ],
  },
];

export function Menu() {
  return (
    <section id="menu" className="relative py-32 px-6 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.5em] text-primary mb-4">A Taste of Nileva</p>
          <h2 className="text-center text-5xl md:text-7xl font-display mb-6">
            The <em className="text-gold-gradient">Menu</em>
          </h2>
          <p className="text-center max-w-2xl mx-auto text-muted-foreground mb-6">
            A curated preview of our launching menu. Download the full concept book below.
          </p>
          <div className="flex justify-center mb-16">
            <a
              href="/nileva-menu.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3 border border-accent text-accent text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition-all"
            >
              Download Full Menu (PDF)
            </a>
          </div>
        </Reveal>

        <div className="space-y-20">
          {categories.map((cat, ci) => (
            <Reveal key={cat.name} delay={ci * 100}>
              <div>
                <div className="flex items-end justify-between mb-8 pb-4 border-b border-border">
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl">{cat.name}</h3>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-1">{cat.tagline}</p>
                  </div>
                  <span className="hidden md:block font-display text-5xl text-primary/30">0{ci + 1}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  {cat.items.map((it) => (
                    <div key={it.n} className="group flex items-baseline gap-4">
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between gap-3">
                          <h4 className="font-display text-xl group-hover:text-primary transition-colors">{it.n}</h4>
                          <span className="flex-1 border-b border-dotted border-border/60 translate-y-[-4px]" />
                          <span className="text-accent font-medium">{it.p}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{it.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 p-10 md:p-14 border border-border bg-card/50 backdrop-blur text-center">
            <h3 className="font-display text-3xl md:text-4xl mb-4">Read the full menu concept</h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              The complete Nileva partnership & menu book — breakfast, lunch, starters, mains, bar & Sunday roast.
            </p>
            <a
              href="/nileva-menu.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-8 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:opacity-90 transition"
            >
              Open Menu PDF
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

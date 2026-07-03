import { useEffect, useState } from "react";
<<<<<<< HEAD
import nilevaLogo from "../assets/NILEVA LOGO.png";
=======
>>>>>>> bb612918cbe09f228df7758da85f87a6e59b6cbf

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#experience", label: "Experience" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
<<<<<<< HEAD
          <img
            src={nilevaLogo}
            alt="Nileva"
            className="h-10 w-auto group-hover:animate-glow"
          />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide">NILEVA</div>
=======
          <div className="w-10 h-10 hex-frame bg-primary/20 border border-primary flex items-center justify-center font-display text-xl text-primary group-hover:animate-glow">
            N
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide">NILEVA</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Grill & Kitchen</div>
>>>>>>> bb612918cbe09f228df7758da85f87a6e59b6cbf
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/nileva-menu.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-primary text-primary text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          View Menu
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`w-6 h-px bg-foreground transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-px bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-foreground transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ${open ? "max-h-96" : "max-h-0"}`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4 bg-background/95 backdrop-blur-xl border-t border-border">
          {links.map((l) => (
            <li key={l.href}>
              <a
                onClick={() => setOpen(false)}
                href={l.href}
                className="block text-sm uppercase tracking-widest text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/nileva-menu.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-2 border border-primary text-primary text-xs uppercase tracking-widest"
            >
              View Menu
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

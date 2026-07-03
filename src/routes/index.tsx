import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar.jsx";
import { Hero } from "@/components/Hero.jsx";
import { About } from "@/components/About.jsx";
import { Menu } from "@/components/Menu.jsx";
import { Experience } from "@/components/Experience.jsx";
import { Location } from "@/components/Location.jsx";
import { Contact, Footer } from "@/components/Contact.jsx";
<<<<<<< HEAD
import nilevaLogo from "@/assets/NILEVA LOGO.png";
=======
>>>>>>> bb612918cbe09f228df7758da85f87a6e59b6cbf

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
<<<<<<< HEAD
      { title: "Nileva" },
      { name: "description", content: "Nileva — a premium Mediterranean grill & lounge in UB9 4DQ. Charcoal-grilled flavours, Levantine soul, modern luxury." },
      { property: "og:title", content: "Nileva" },
      { property: "og:description", content: "Premium Mediterranean grill & lounge in UB9 4DQ." },
      { property: "og:image", content: nilevaLogo },
    ],
    links: [
      { rel: "icon", href: nilevaLogo },
=======
      { title: "Nileva Grill & Kitchen — Launching Soon" },
      { name: "description", content: "Nileva Grill & Kitchen — a premium Mediterranean grill & lounge launching soon in UB9 4DQ. Charcoal-grilled flavours, Levantine soul, modern luxury." },
      { property: "og:title", content: "Nileva Grill & Kitchen — Launching Soon" },
      { property: "og:description", content: "Premium Mediterranean grill & lounge. Launching soon in UB9 4DQ." },
    ],
    links: [
>>>>>>> bb612918cbe09f228df7758da85f87a6e59b6cbf
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Experience />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}

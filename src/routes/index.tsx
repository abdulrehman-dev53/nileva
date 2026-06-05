import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar.jsx";
import { Hero } from "@/components/Hero.jsx";
import { About } from "@/components/About.jsx";
import { Menu } from "@/components/Menu.jsx";
import { Experience } from "@/components/Experience.jsx";
import { Location } from "@/components/Location.jsx";
import { Contact, Footer } from "@/components/Contact.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nileva Grill & Kitchen — Launching Soon" },
      { name: "description", content: "Nileva Grill & Kitchen — a premium Mediterranean grill & lounge launching soon in UB9 4DQ. Charcoal-grilled flavours, Levantine soul, modern luxury." },
      { property: "og:title", content: "Nileva Grill & Kitchen — Launching Soon" },
      { property: "og:description", content: "Premium Mediterranean grill & lounge. Launching soon in UB9 4DQ." },
    ],
    links: [
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

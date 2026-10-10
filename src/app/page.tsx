import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { News } from "@/components/News";
import { PhotoBand } from "@/components/PhotoBand";
import { QuickAccess } from "@/components/QuickAccess";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <a href="#obsah" className="skip-link">
        Preskočiť na hlavný obsah
      </a>
      <Header />
      <main id="obsah">
        <Hero />
        <QuickAccess />
        <About />
        <Services />
        <PhotoBand />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

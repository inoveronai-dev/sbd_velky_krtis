import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { News } from "@/components/News";
import { PhotoBand } from "@/components/PhotoBand";
import { QuickAccess } from "@/components/QuickAccess";
import { Services } from "@/components/Services";
import { SplashScreen } from "@/components/SplashScreen";

export default function HomePage() {
  return (
    <>
      <SplashScreen />
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
        <Location />
      </main>
      <Footer />
    </>
  );
}

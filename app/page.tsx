import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stats from "@/components/sections/Stats";
import Events from "@/components/sections/Events";
import TTSV from "@/components/sections/TTSV";
import Gallery from "@/components/sections/Gallery";
import HypeVideo from "@/components/sections/HypeVideo";
import Showreel from "@/components/sections/Showreel";
import Interviews from "@/components/sections/Interviews";
import About from "@/components/sections/About";
import Sponsors from "@/components/sections/Sponsors";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Events />
        <TTSV />
        <Gallery />
        <HypeVideo />
        <Showreel />
        <Interviews />
        <About />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

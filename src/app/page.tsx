import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Content from "@/components/Content";
import DietTips from "@/components/DietTips";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Content />
      <DietTips />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

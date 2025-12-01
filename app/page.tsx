import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";



export default function Home() {
  return (
<main className="min-h-screen relative">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <FAQ />
    </main>
  );
}

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <main className="min-h-screen relative">
      <Hero locale={lang} />
      <Services locale={lang} />
      <WhyChooseUs locale={lang} />
      <Pricing locale={lang} />
      <FAQ locale={lang} />
    </main>
  );
}

import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("@/components/Services"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const FAQ = dynamic(() => import("@/components/FAQ"));

export async function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isArabic = lang === "ar";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CodeAura",
    "url": "https://my-agency-site-red.vercel.app",
    "logo": "https://my-agency-site-red.vercel.app/og-image12.png",
    "description": isArabic
      ? "نقدم حلول برمجية متكاملة، تصميم مواقع، ومتاجر إلكترونية."
      : "Professional web development, SEO, and e-commerce solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressCountry": "SA",
    },
    // 👇 إضافة منصات التواصل الاجتماعي تعزز الموثوقية (E-E-A-T)
    "sameAs": [
        "https://twitter.com/your-account",
        "https://linkedin.com/company/your-company"
    ],
    "priceRange": "$$$",
    "openingHours": "Su-Th 09:00-18:00",
    "telephone": "+966535846431",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col gap-0">
        <Hero locale={lang} />
        <Services locale={lang} />
        <WhyChooseUs locale={lang} />
        <Pricing locale={lang} />
        <FAQ locale={lang} />
      </div>
    </>
  );
}
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

// ⭐ 1. تحسين الأداء: تفعيل الـ Static Site Generation (SSG)
// هذا يخبر Next.js ببناء نسختين جاهزتين (عربي وإنجليزي) عند الرفع، مما يجعل الموقع يفتح بسرعة البرق.
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

  // ⭐ 2. تحسين السيو: إضافة Schema Markup (بيانات هيكلية)
  // هذا الكود لا يراه المستخدم، لكنه "كنز" لجوجل ليفهم أنك شركة برمجية
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // أو WebSite أو Organization
    "name": "CodeAura",
    "url": "https://my-agency-site-red.vercel.app",
    "logo": "https://my-agency-site-red.vercel.app/og-image12.png",
    "description": isArabic
      ? "نقدم حلول برمجية متكاملة، تصميم مواقع، ومتاجر إلكترونية."
      : "Professional web development, SEO, and e-commerce solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh", // عدلها لمدينتك
      "addressCountry": "SA",
    },
    "priceRange": "$$$",
    "openingHours": "Su-Th 09:00-18:00",
    "telephone": "+966535846431",
  };

  return (
    <>
      {/* حقن كود السكيما في رأس الصفحة */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ⭐ 3. تصحيح الهيكلية:
         قمنا بإزالة <main> من هنا لأننا وضعناها بالفعل في layout.tsx
         استخدام Fragment (<> ... </>) يجعل الكود أنظف.
      */}
      
      <div className="flex flex-col gap-0"> 
        {/* gap-0 لضمان عدم وجود مسافات بيضاء غير مرغوبة بين الأقسام */}
        
        <Hero locale={lang} />
        <Services locale={lang} />
        <WhyChooseUs locale={lang} />
        <Pricing locale={lang} />
        <FAQ locale={lang} />
        
      </div>
    </>
  );
}
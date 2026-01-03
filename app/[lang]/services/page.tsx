import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

// دالة توليد الميتا داتا (لتحسين السيو)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isArabic = lang === "ar";

  return {
    title: isArabic
      ? "خدماتنا | CodeAura - حلول برمجية وتسويقية متكاملة"
      : "Our Services | CodeAura - Web Design, Development & Marketing",
    description: isArabic
      ? "نقدم خدمات احترافية تشمل تصميم المواقع، المتاجر الإلكترونية، التسويق الرقمي، وتحسين محركات البحث. ارفع مستوى مشروعك معنا."
      : "We provide professional services including web design, e-commerce development, digital marketing, and SEO. Elevate your business with us.",
    openGraph: {
      title: isArabic ? "خدمات CodeAura الرقمية" : "CodeAura Digital Services",
      description: isArabic
        ? "اكتشف كيف يمكننا مساعدتك في بناء وجودك الرقمي."
        : "Discover how we can help you build your digital presence.",
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // استدعاء مكون العرض وفصل منطق الخادم عن العميل
  return <ServicesContent lang={lang} />;
}
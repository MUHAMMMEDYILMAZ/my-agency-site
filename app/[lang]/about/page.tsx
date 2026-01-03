import type { Metadata } from "next";
import AboutContent from "./AboutContent"; // 👈 تأكد من المسار الصحيح

// ⭐ إعدادات السيو (SEO) الخاصة بصفحة "من نحن"
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isArabic = lang === "ar";

  return {
    title: isArabic
      ? "من نحن | CodeAura - فريقك التقني المتكامل"
      : "About Us | CodeAura - Your Digital Partner",
    description: isArabic
      ? "تعرف على CodeAura. نحن فريق من المطورين والمصممين الشغوفين ببناء حلول رقمية، مواقع ويب، ومتاجر إلكترونية تساعدك على النمو."
      : "Learn more about CodeAura. We are a team of passionate developers and designers building digital solutions, websites, and e-commerce stores.",
    openGraph: {
      title: isArabic ? "من نحن | CodeAura" : "About Us | CodeAura",
      description: isArabic ? "قصتنا، قيمنا، ولماذا يختارنا العملاء." : "Our story, values, and why clients choose us.",
    },
  };
}

// ⭐ المكون الرئيسي (Server Component)
export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // هنا فقط نستدعي مكون العرض (Client Component)
  return <AboutContent lang={lang} />;
}
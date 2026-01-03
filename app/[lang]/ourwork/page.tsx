import type { Metadata } from "next";
// 👇 تأكد أن المسار صحيح
import OurWorkContent from "./OurWorkContent"; 

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isArabic = lang === "ar";

  return {
    title: isArabic
      ? "أعمالنا | CodeAura - مشاريع نفخر بها"
      : "Our Work | CodeAura - Projects We Built",
    description: isArabic
      ? "تصفح معرض أعمالنا من المواقع الإلكترونية، المتاجر، والتطبيقات التي قمنا بتطويرها بأحدث التقنيات."
      : "Explore our portfolio of websites, e-commerce stores, and applications built with modern technologies.",
    openGraph: {
      title: isArabic ? "معرض أعمال CodeAura" : "CodeAura Portfolio",
      description: isArabic ? "شاهد كيف نحول الأفكار إلى واقع." : "See how we turn ideas into reality.",
    },
  };
}

export default async function OurWorkPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return <OurWorkContent lang={lang} />;
}
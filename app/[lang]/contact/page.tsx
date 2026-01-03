import type { Metadata } from "next";
import ContactContent from "./ContactContent"; 

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isArabic = lang === "ar";

  return {
    title: isArabic
      ? "تواصل معنا | CodeAura - لنبدأ مشروعك"
      : "Contact Us | CodeAura - Let's Start Your Project",
    description: isArabic
      ? "تواصل مع فريق CodeAura الآن. نحن جاهزون لتحويل أفكارك إلى واقع تقني ملموس. تطوير، تصميم، وخدمات Backend API."
      : "Get in touch with CodeAura team. We are ready to turn your ideas into digital reality. Web development, Design, and Backend API services.",
    openGraph: {
      title: isArabic ? "تواصل معنا | CodeAura" : "Contact Us | CodeAura",
      description: isArabic ? "تواصل معنا لبدء مشروعك القادم." : "Contact us to start your next project.",
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // استدعاء مكون العرض (Client Component)
  return <ContactContent lang={lang} />;
}
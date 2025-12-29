import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ⭐⭐⭐ SEO ONLY — WITHOUT CHANGING ANYTHING IN YOUR LAYOUT ⭐⭐⭐
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isArabic = lang === "ar";

  const title = isArabic
    ? "CodeAura — برمجة مواقع احترافية | مواقع، متاجر، أنظمة"
    : "CodeAura — Professional Web Development | Websites, Stores, Systems";

  const description = isArabic
    ? "نقوم ببناء مواقع سريعة، آمنة، ومتقدمة باستخدام Next.js و Node.js مع أداء عالي وتجربة استخدام ممتازة."
    : "We build fast, secure, modern websites using Next.js, Node.js, with strong SEO and high performance.";

  const baseUrl = "https://my-agency-site-red.vercel.app";

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),

    // 👇👇👇 1. أضف هذا الجزء الخاص بالأيقونة 👇👇👇
    icons: {
      icon: "/og-image12.png", // تأكد أن لديك ملف بهذا الاسم في مجلد public
      // أو يمكنك استخدام صورة png صغيرة
      // icon: "/logo.png", 
      apple: "/og-image12.png", // اختياري (للأيفون)
    },
    // 👆👆👆 نهاية الإضافة 👆👆👆

    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },

    openGraph: {
      title,
      description,
      url: `${baseUrl}/${lang}`,
      siteName: "CodeAura",
      locale: isArabic ? "ar_AR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image12.png",
          width: 1200,
          height: 630,
          alt: "CodeAura Web Solutions",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image12.png"],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body>
        <Header locale={lang} />
        {children}
        <Footer locale={lang} />
      </body>
    </html>
  );
}
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

  const baseUrl = "https://codeaura.dev"; // غيّرها لاحقاً عند رفع الموقع

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),

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
          url: "/og-image1.png",
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
      images: ["/og-image1.png"],
    },
  };
}

// NEXT 13+ dynamic params = PROMISE (لم ألمسه أبداً)
export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  // MUST AWAIT PARAMS (تركتها كما هي)
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

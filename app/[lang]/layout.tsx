import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// 1. استيراد الخطوط من جوجل لضمان جمالية الموقع وسرعته
import { Cairo, Inter } from "next/font/google";

// إعداد خط Inter للغة الإنجليزية
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// إعداد خط Cairo للغة العربية (احترافي جداً)
const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isArabic = lang === "ar";

  const title = isArabic
    ? "CodeAura — برمجة مواقع احترافية | مواقع، متاجر، أنظمة"
    : "CodeAura — Professional Web Development | Websites, Stores, Systems";

  const description = isArabic
    ? "نقوم ببناء مواقع سريعة، آمنة، ومتقدمة باستخدام Next.js و Node.js مع أداء عالي وتجربة استخدام ممتازة. اطلب موقعك الآن."
    : "We build fast, secure, modern websites using Next.js, Node.js, with strong SEO and high performance. Get your website today.";

  // يفضل وضع الرابط في متغير بيئة، لكن لا بأس به هكذا حالياً
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://my-agency-site-red.vercel.app";

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    
    // 2. الكلمات المفتاحية (مهمة جداً لجوجل)
    keywords: isArabic 
      ? ["تصميم مواقع", "برمجة متاجر", "تطوير ويب", "Next.js", "تسويق رقمي", "CodeAura", "سيو"]
      : ["Web Development", "E-commerce", "Next.js Agency", "SEO", "React", "CodeAura", "Web Design"],

    // 3. التحكم في الروبوتات (لضمان الأرشفة)
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // 4. المؤلف
    authors: [{ name: "CodeAura Team" }],

    // ملاحظة: إذا وضعت ملف icon.png داخل مجلد app مباشرة، Next.js سيكتشفه تلقائياً
    // ولن تحتاج لهذا الكود بالأسفل. لكن سأتركه لك كاحتياط.
    /*
    icons: {
      icon: "/icon.png",
      apple: "/icon.png",
    },
    */

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
          url: "/og-image12.png", // تأكد أن أبعاد هذه الصورة 1200x630
          width: 1200,
          height: 630,
          alt: isArabic ? "خدمات كود أورا البرمجية" : "CodeAura Web Services",
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
  const isArabic = lang === "ar";

  return (
    <html lang={lang} dir={isArabic ? "rtl" : "ltr"}>
      <body
        // 5. تطبيق الخطوط حسب اللغة بشكل ديناميكي
        className={`
          ${isArabic ? cairo.className : inter.className} 
          antialiased bg-[#050816] text-white selection:bg-purple-500 selection:text-white
        `}
      >
        <Header locale={lang} />
        
        {/* main wrapper لضمان أن الفوتر دائماً في الأسفل */}
        <main className="min-h-screen flex flex-col">
           {children}
        </main>
        
        <Footer locale={lang} />
      </body>
    </html>
  );
}
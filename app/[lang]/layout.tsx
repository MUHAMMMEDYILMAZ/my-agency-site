import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cairo, Inter } from "next/font/google";

// 1. إعداد الخطوط
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

// تعريف نوع الـ Props لضمان التايب سكريبت
type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

// 2. دالة الميتا داتا (SEO)
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isArabic = lang === "ar";

  const title = isArabic
    ? "CodeAura — برمجة مواقع احترافية | مواقع، متاجر، أنظمة"
    : "CodeAura — Professional Web Development | Websites, Stores, Systems";

  const description = isArabic
    ? "نقوم ببناء مواقع سريعة، آمنة، ومتقدمة باستخدام Next.js و Node.js مع أداء عالي وتجربة استخدام ممتازة. اطلب موقعك الآن."
    : "We build fast, secure, modern websites using Next.js, Node.js, with strong SEO and high performance. Get your website today.";

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://my-agency-site-red.vercel.app";

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    keywords: isArabic
      ? ["تصميم مواقع", "برمجة متاجر", "تطوير ويب", "Next.js", "تسويق رقمي", "CodeAura", "سيو"]
      : ["Web Development", "E-commerce", "Next.js Agency", "SEO", "React", "CodeAura", "Web Design"],
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
    authors: [{ name: "CodeAura Team" }],
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
    
    icons: {
      icon: "/icon.png",
      apple: "/icon.png",
    },
  };
}

// 3. مكون الـ Layout الرئيسي
export default async function LangLayout({ children, params }: LayoutProps) {
  // فك الوعد (Promise) للحصول على اللغة (متطلب Next.js 15)
  const { lang } = await params;
  const isArabic = lang === "ar";
  
  // تحويل نوع اللغة لضمان قبولها في مكونات الهيدر والفوتر
  const validLocale = lang as "ar" | "en";

  return (
    <html lang={lang} dir={isArabic ? "rtl" : "ltr"}>
      <body
        className={`
          ${isArabic ? cairo.className : inter.className} 
          ${isArabic ? cairo.variable : inter.variable} 
          antialiased bg-[#050816] text-white selection:bg-purple-500 selection:text-white
          flex flex-col min-h-screen
        `}
      >
        {/* تم إضافة flex flex-col min-h-screen للـ body لإصلاح مشكلة الفوتر */}
        
        <Header locale={validLocale} />
        
        {/* الـ main يأخذ المساحة المتبقية ليدفع الفوتر للأسفل */}
        <main className="flex-grow w-full">
            {children}
        </main>
        
        <Footer locale={validLocale} />
      </body>
    </html>
  );
}
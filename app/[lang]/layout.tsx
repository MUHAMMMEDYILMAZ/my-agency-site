import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cairo, Inter } from "next/font/google";
import { Metadata, Viewport } from "next";

// 1. إعداد الخطوط (تم إضافة الأوزان + اللاتينية للعربي)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"], // ✅ تحديد الأوزان يقلل الحجم
});

const cairo = Cairo({
  // 👇 ضروري جداً: إضافة latin لضمان ظهور الأرقام والمصطلحات الإنجليزية بنفس روح الخط
  subsets: ["arabic", "latin"], 
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "500", "600", "700"], // ✅ تحديد الأوزان
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050816", 
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
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

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const isArabic = lang === "ar";
  const validLocale = lang as "ar" | "en";

  return (
    // 👇 suppressHydrationWarning يمنع أخطاء مزعجة بسبب إضافات المتصفح
    <html lang={lang} dir={isArabic ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        className={`
          ${isArabic ? cairo.className : inter.className} 
          ${cairo.variable} ${inter.variable} 
          antialiased bg-[#050816] text-white selection:bg-purple-500 selection:text-white
          flex flex-col min-h-screen
        `}
      >
        <Header locale={validLocale} />
        
        <main className="flex-grow w-full">
            {children}
        </main>
        
        <Footer locale={validLocale} />
      </body>
    </html>
  );
}
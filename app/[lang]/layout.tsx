import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cairo, Inter } from "next/font/google";
import { Metadata, Viewport } from "next";
import AIChatBot from "@/components/AIChatBot";
import FloatingContacts from "@/components/FloatingContacts";
import { Analytics } from "@vercel/analytics/next";

// 1. إعداد الخطوط
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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

  // تحسين العنوان ليكون جذاباً ويحتوي الكلمات المهمة
  const title = isArabic
    ? "CodeAura | تصميم مواقع ومتاجر إلكترونية في السعودية | خدمات SEO وبرمجة خاصة"
    : "CodeAura | Professional Web Design & E-commerce Development Agency";

  // الوصف يحتوي على "خدمات"، "سعودية"، "متاجر"
  const description = isArabic
    ? "CodeAura لخدمات البرمجة المتكاملة. نقدم خدمات تصميم المواقع، إنشاء المتاجر الإلكترونية، وتحسين محركات البحث (SEO) بأحدث التقنيات في السعودية والخليج."
    : "CodeAura is a top-tier web development agency specializing in Next.js websites, custom e-commerce stores, and SEO services to grow your business.";

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.codeauraweb.com";

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    // 👇 هنا الكلمات المفتاحية الذهبية التي تم تضبطيها
    keywords: isArabic
      ? [
          "تصميم مواقع الكترونية في السعودية",
          "شركة برمجة متاجر الكترونية",
          "انشاء موقع تعريفي للشركات",
          "تحسين محركات البحث SEO",
          "تصميم واجهة مستخدم UX/UI",
          "برمجة خاصة Next.js",
          "CodeAura",
          "CodeAuraweb",
          "وكالة تسويق رقمي",
          "تطوير ويب",
          "متاجر سلة وزد",
          "ويب",
          "مواقع ويب "

        ]
      : [
          "Web Development Saudi Arabia",
          "E-commerce Solutions",
          "Next.js Agency",
          "SEO Services",
          "Custom Web Design",
          "CodeAura",
          "UI/UX Design",
          "CodeAura",
          "CodeAuraweb",
          "Digital Marketing Agency",
          "Web Development",
          "E-commerce Stores",
          "web development",
          "websites",
          "web design"

        ],
    
    // 👇 خانة التحقق من جوجل (ستحتاج لإضافة الكود هنا لاحقاً)
    verification: {
            google: "8VY5s9FRpOSra0UkUC2LsdPsqXaw76uqwYwfZouil2c",    
          },

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
        
        {/* المحتوى الأساسي */}
        <main className="flex-grow w-full">
            {children}
        </main>
        
        <Footer locale={validLocale} />

        {/* 👇 العناصر العائمة والأدوات توضع هنا في النهاية لأداء أفضل */}
        <AIChatBot />
        <FloatingContacts />
        <Analytics />
        
      </body>
    </html>
  );
}
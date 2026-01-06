"use client";

import React, { Suspense } from "react";
import {
  Code,
  Globe,
  ShoppingCart,
  Layout,
  Megaphone,
  CheckCircle2,
  Loader2,
  Server,
} from "lucide-react";
import useReveal from "@/hooks/useReveal";
import Link from "next/link";

/* ===============================
   INTERNAL COMPONENTS
================================ */

function PageHeader({
  title,
  badge,
  subtitle,
}: {
  title: string;
  badge: string;
  subtitle: string;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      // ✅ تعديل 1: تقليل المارجن في الجوال (mb-10) وزيادته في الشاشات الكبيرة (md:mb-20)
      className={`text-center mb-10 md:mb-20 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span className="px-4 py-1 text-xs rounded-full border border-purple-400/40 bg-white/10 text-purple-200">
        {badge}
      </span>

      <h1 className="mt-4 text-3xl sm:text-4xl font-semibold">{title}</h1>

      <p className="mt-2 text-white/60 max-w-2xl mx-auto text-sm">
        {subtitle}
      </p>
    </div>
  );
}

// ✅ مكون جديد للكارت لفصل الأنيميشن
function ServiceCard({ item, index }: { item: any; index: number }) {
  // threshold: 0.1 تعني: ابدأ الظهور فوراً بمجرد ظهور 10% من الكارت
  const { ref, visible } = useReveal();
  
  // تأخير بسيط جداً (Stagger) يعطي جمالية ولا يسبب بطء
  const delay = index * 100; 

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${visible ? delay : 0}ms` }}
      className={`
        text-center bg-white/10 border border-white/10 backdrop-blur-xl
        p-6 md:p-8 rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.35)]
        transition-all duration-500 ease-out group
        hover:bg-white/20 hover:border-purple-400/40
        hover:shadow-[0_0_35px_rgba(150,100,255,0.35)]
        hover:scale-[1.05]
        /* الأنيميشن هنا مستقل للكارت فقط */
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div className="flex justify-center mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">
        <div className="p-3 bg-white/5 rounded-full">{item.icon}</div>
      </div>

      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">
        {item.desc}
      </p>
    </div>
  );
}

function ServicesSection({
  title,
  items,
}: {
  title: string;
  items: { icon: React.ReactNode; title: string; desc: string }[];
}) {
  // أنيميشن خاص للعنوان فقط
  const { ref: titleRef, visible: titleVisible } = useReveal();

  return (
    // ✅ تعديل 2: تقليل المسافة السفلية للجوال (mb-16)
    <div className="max-w-6xl mx-auto px-6 mb-16 md:mb-24">
      
      {/* العنوان يظهر فور الوصول إليه */}
      <h2 
        ref={titleRef}
        className={`text-xl font-semibold mb-8 md:mb-10 text-center text-purple-200 transition-all duration-500 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {title}
      </h2>

      {/* الكروت مفصولة وتظهر فوراً عند السكرول */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((s, i) => (
          <ServiceCard key={i} item={s} index={i} />
        ))}
      </div>
    </div>
  );
}

function FeaturesSection({
  title,
  features,
}: {
  title: string;
  features: string[];
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      // ✅ تعديل 3: تقليل المارجن للجوال
      className={`max-w-4xl mx-auto text-center px-6 mb-16 md:mb-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-xl font-semibold mb-6 text-purple-200">{title}</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
          >
            <CheckCircle2 className="text-purple-300 min-w-[20px]" />
            <span className="text-white/80 text-sm text-start">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTA({
  title,
  subtitle,
  btn,
  locale,
}: {
  title: string;
  subtitle: string;
  btn: string;
  locale: string;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-2xl font-semibold">{title}</h2>

      <p className="text-white/60 mt-2 mb-6 max-w-xl mx-auto px-5">{subtitle}</p>

      <Link
        href={`/${locale}/contact`}
        className="
          inline-block px-16 py-3 rounded-full
          bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500
          shadow-[0_10px_40px_rgba(118,75,255,0.45)]
          hover:scale-[1.03] transition text-sm font-semibold text-white
        "
      >
        {btn}
      </Link>
    </div>
  );
}

// --- MAIN CONTENT COMPONENT ---

function ServicesContentArea({ lang }: { lang: string }) {
  const isArabic = lang === "ar";

  const t = isArabic
    ? {
        badge: "• خدماتنا •",
        title: "نقدم حلولاً مبتكرة ترتقي بمشروعك",
        subtitle:
          "خدمات احترافية في التصميم، البرمجة، والتسويق — نساعدك تبني علامة قوية وتكسب عملاء أكثر.",
        servicesTitle: "خدماتنا",
        featuresTitle: "لماذا تختارنا؟",
        ctaTitle: "جاهز نطلق مشروعك؟",
        ctaSubtitle: "فريقنا مستعد يشتغل معك خطوة بخطوة لتحقيق أفضل نتيجة.",
        ctaButton: "ابدأ الآن",
      }
    : {
        badge: "• Our Services •",
        title: "We Deliver Digital Solutions That Elevate Your Business",
        subtitle:
          "Professional services in design, development, and marketing — helping you grow and stand out.",
        servicesTitle: "Our Services",
        featuresTitle: "Why Choose Us?",
        ctaTitle: "Ready to Launch Your Project?",
        ctaSubtitle:
          "Our team is ready to work with you step-by-step to create something exceptional.",
        ctaButton: "Get Started",
      };

  const mainServices = [
    {
      icon: <Layout />,
      title: isArabic ? "تصميم وتطوير المواقع" : "Web Design & Development",
      desc: isArabic
        ? "تصميم مواقع عصرية متجاوبة مع جميع الشاشات تعكس هوية مشروعك."
        : "Modern, responsive website designs that reflect your brand identity.",
    },
    {
      icon: <ShoppingCart />,
      title: isArabic ? "متاجر إلكترونية متكاملة" : "E-Commerce Solutions",
      desc: isArabic
        ? "بناء متاجر سريعة وآمنة مع بوابات دفع ولوحة تحكم سهلة."
        : "Building fast, secure stores with payment gateways and easy dashboards.",
    },
    {
      icon: <Server />,
      title: isArabic ? "تطوير Backend & API" : "Backend & API Development",
      desc: isArabic
        ? "بناء خوادم قوية وقواعد بيانات آمنة وربط الأنظمة عبر API."
        : "Building robust servers, secure databases, and API integrations.",
    },
    {
      icon: <Megaphone />,
      title: isArabic ? "التسويق الرقمي" : "Digital Marketing",
      desc: isArabic
        ? "استراتيجيات تسويقية لزيادة الظهور وجذب العملاء المحتملين."
        : "Marketing strategies to increase visibility and attract leads.",
    },
    {
      icon: <Code />,
      title: isArabic ? "حلول برمجية مخصصة" : "Custom Software Solutions",
      desc: isArabic
        ? "برمجة أنظمة خاصة، لوحات تحكم، وخدمات سحابية حسب احتياجك."
        : "Custom system development, dashboards, and cloud services.",
    },
    {
      icon: <Globe />,
      title: isArabic ? "تحسين محركات البحث SEO" : "SEO Optimization",
      desc: isArabic
        ? "تصدر نتائج البحث الأولى في جوجل لزيادة الزيارات المجانية."
        : "Rank higher on Google search results to drive organic traffic.",
    },
  ];

  const features = [
    isArabic ? "أداء عالي وسرعة تحميل فائقة" : "High performance & blazing speed",
    isArabic ? "أمان وحماية بيانات متقدمة" : "Advanced security & data protection",
    isArabic ? "تصميم يركز على تجربة المستخدم (UX)" : "User Experience (UX) focused design",
    isArabic ? "كود نظيف وقابل للتطوير" : "Clean and scalable code structure",
    isArabic ? "تحليلات دقيقة لتحسين النتائج" : "Detailed analytics for optimization",
    isArabic ? "دعم فني مستمر بعد الإطلاق" : "Ongoing post-launch support",
  ];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      // ✅ تعديل 4: تقليل البادينغ العلوي للجوال (pt-24)
      className="
        relative w-full max-w-full overflow-x-hidden
        pt-32 md:pt-32 pb-12 min-h-screen text-white
        bg-[#02030d] bg-gradient-to-br from-[#050316] via-[#09041f] to-[#02030d]
        before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:-z-10
      "
    >
      <div 
        className="
          absolute -top-40 left-0 -z-10
          w-full max-w-[480px] h-[480px] 
          bg-purple-700/25 blur-[180px]
        " 
      />

      <PageHeader title={t.title} badge={t.badge} subtitle={t.subtitle} />

      <ServicesSection title={t.servicesTitle} items={mainServices} />

      <FeaturesSection title={t.featuresTitle} features={features} />

      <CTA
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        btn={t.ctaButton}
        locale={lang}
      />
    </section>
  );
}

// التصدير الرئيسي
export default function ServicesContent({ lang }: { lang: string }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#02030d] flex items-center justify-center">
          <Loader2 className="animate-spin text-purple-500 w-8 h-8" />
        </div>
      }
    >
      <ServicesContentArea lang={lang} />
    </Suspense>
  );
}
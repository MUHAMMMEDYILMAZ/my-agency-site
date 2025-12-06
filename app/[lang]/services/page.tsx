"use client";

import React from "react";
import {
  Code,
  Globe,
  Sparkles,
  ShoppingCart,
  ShieldCheck,
  Rocket,
  Megaphone,
  LineChart,
  Smartphone,
  Layout,
  Wand2,
  CheckCircle2,
} from "lucide-react";
import useReveal from "@/hooks/useReveal";

export default function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = React.use(params);
  const isArabic = lang === "ar";

  const t = isArabic
    ? {
        badge: "• خدماتنا •",
        title: "نقدم حلولاً مبتكرة ترتقي بمشروعك",
        subtitle:
          "خدمات احترافية في البرمجة، التصميم، التسويق، والتحسين — نساعدك تبني علامة قوية وتكسب عملاء أكثر.",
        servicesTitle: "خدماتنا",
        featuresTitle: "لماذا نحن؟",
        ctaTitle: "جاهز نطلق مشروعك؟",
        ctaSubtitle: "فريقنا مستعد يشتغل معك خطوة بخطوة لتحقيق أفضل نتيجة.",
        ctaButton: "ابدأ الآن",
      }
    : {
        badge: "• Our Services •",
        title: "We Deliver Digital Solutions That Elevate Your Business",
        subtitle:
          "Professional services in development, design, marketing, and optimization — helping you grow fast and stand out.",
        servicesTitle: "Our Services",
        featuresTitle: "Why Choose Us?",
        ctaTitle: "Ready to Launch Your Project?",
        ctaSubtitle:
          "Our team is ready to work with you step-by-step to create something exceptional.",
        ctaButton: "Get Started",
      };

  // ALL SERVICES (merged main + extra)
  const allServices = [
    {
      icon: <Code />,
      title: isArabic ? "مواقع مخصصة" : "Custom Websites",
      desc: isArabic
        ? "مواقع سريعة وآمنة باستخدام أحدث التقنيات."
        : "Fast, secure websites using modern technologies.",
    },
    {
      icon: <ShoppingCart />,
      title: isArabic ? "متاجر إلكترونية" : "E-commerce Stores",
      desc: isArabic
        ? "متاجر كاملة مع الدفع، لوحة تحكم، وتتبع الطلبات."
        : "Full e-commerce solutions with payments and dashboard.",
    },
    {
      icon: <Globe />,
      title: isArabic ? "تحسين SEO" : "SEO Optimization",
      desc: isArabic
        ? "رفع ظهورك في نتائج البحث وزيادة الزيارات."
        : "Boost search visibility and organic traffic.",
    },
    {
      icon: <Sparkles />,
      title: isArabic ? "تصميم UI/UX" : "UI/UX Design",
      desc: isArabic
        ? "تصميمات حديثة جذابة تعطي هوية قوية."
        : "Modern interfaces that enhance brand identity.",
    },
    {
      icon: <ShieldCheck />,
      title: isArabic ? "أمان وسرعة" : "Speed & Security",
      desc: isArabic
        ? "تحسين شامل للأداء والحماية."
        : "Complete optimization for speed and security.",
    },
    {
      icon: <Rocket />,
      title: isArabic ? "إطلاق المشاريع" : "Project Launch",
      desc: isArabic
        ? "إعداد وإطلاق مشروعك باحترافية."
        : "Launching your project with maximum impact.",
    },
    {
      icon: <Megaphone />,
      title: isArabic ? "التسويق الإلكتروني" : "Digital Marketing",
      desc: isArabic
        ? "حملات تسويقية تستهدف العملاء بدقة."
        : "Powerful targeted digital campaigns.",
    },
    {
      icon: <LineChart />,
      title: isArabic ? "تحليل البيانات" : "Analytics",
      desc: isArabic
        ? "تحليل سلوك المستخدم وتحسين المبيعات."
        : "User behavior analytics for better performance.",
    },
    {
      icon: <Smartphone />,
      title: isArabic ? "تطبيقات الهواتف" : "Mobile Apps",
      desc: isArabic
        ? "تطبيقات iOS و Android بجودة عالية."
        : "High-quality mobile applications.",
    },
    {
      icon: <Layout />,
      title: isArabic ? "تصميم مواقع" : "Web Design",
      desc: isArabic
        ? "تصاميم حديثة وهوية بصرية قوية."
        : "Modern web design with strong branding.",
    },
    {
      icon: <Wand2 />,
      title: isArabic ? "تحسين تجربة المستخدم" : "UX Enhancements",
      desc: isArabic
        ? "تحسين التفاعل وتقليل معدل الخروج."
        : "Smoother UX for better engagement.",
    },
  ];

  // FEATURES
  const features = [
    isArabic ? "تسليم سريع ومنظم" : "Fast & organized delivery",
    isArabic ? "أسعار مناسبة ومرنة" : "Flexible pricing",
    isArabic ? "تصميم عصري وقابل للتطوير" : "Modern & scalable design",
    isArabic ? "كود نظيف وسهل الصيانة" : "Clean, maintainable code",
    isArabic ? "دعم فني مستمر" : "Reliable ongoing support",
  ];

  return (
    <section
      className="
        relative py-32 text-white min-h-screen
        bg-[#02030d] bg-gradient-to-br from-[#050316] via-[#09041f] to-[#02030d]
        before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:-z-10
      "
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Glow effect */}
      <div className="absolute -top-40 left-0 w-[480px] h-[480px] bg-purple-700/25 blur-[180px] -z-10"></div>

      <PageHeader title={t.title} badge={t.badge} subtitle={t.subtitle} />

      <ServicesMerged title={t.servicesTitle} items={allServices} />

      <FeaturesSection title={t.featuresTitle} features={features} />

      <CTA title={t.ctaTitle} subtitle={t.ctaSubtitle} btn={t.ctaButton} />
    </section>
  );
}

/* -----------------------------------------
   COMPONENTS
------------------------------------------*/

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
      className={`text-center mb-20 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } px-6`}
    >
      <span className="px-4 py-1 text-xs rounded-full border border-purple-400/40 bg-white/10 text-purple-200">
        {badge}
      </span>

      <h1 className="mt-4 text-3xl sm:text-4xl font-semibold">{title}</h1>

      <p className="mt-2 text-white/60 max-w-2xl mx-auto text-sm">{subtitle}</p>
    </div>
  );
}

function ServicesMerged({
  title,
  items,
}: {
  title: string;
  items: { icon: any; title: string; desc: string }[];
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`max-w-6xl mx-auto px-6 mb-20 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-xl font-semibold mb-10 text-center text-purple-200">
        {title}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((s, i) => (
          <div
            key={i}
            className="
              text-center bg-white/10 border border-white/10 backdrop-blur-xl
    p-8 rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.35)]
    transition-all duration-300
    hover:bg-white/20
    hover:border-purple-400/40
    hover:shadow-[0_0_35px_rgba(150,100,255,0.35)]
    hover:scale-[1.05]
            "
          >
            <div className="flex justify-center mb-4 text-purple-300">
              <div className="p-3 bg-white/5 rounded-full">{s.icon}</div>
            </div>

            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-white/60 text-sm">{s.desc}</p>
          </div>
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
      className={`max-w-4xl mx-auto text-center px-6 mb-20 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-xl font-semibold mb-6 text-purple-200">{title}</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white/5 p-4 rounded-xl border border-white/10"
          >
            <CheckCircle2 className="text-purple-300" />
            <span className="text-white/80 text-sm">{f}</span>
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
}: {
  title: string;
  subtitle: string;
  btn: string;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`text-center mt-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-2xl font-semibold">{title}</h2>

      <p className="text-white/60 mt-2 mb-6 max-w-xl mx-auto">{subtitle}</p>

      <a
        href="/contact"
        className="
          inline-block px-16 py-3 rounded-full
          bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500
          shadow-[0_10px_40px_rgba(118,75,255,0.45)]
          hover:scale-[1.03] transition text-sm font-semibold
        "
      >
        {btn}
      </a>
    </div>
  );
}

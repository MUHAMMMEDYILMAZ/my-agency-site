"use client";

import React from "react";
import {
  Code,
  Globe,
  ShoppingCart,
  Layout,
  Megaphone,
  CheckCircle2,
} from "lucide-react";
import useReveal from "@/hooks/useReveal";
import Link from "next/link";

/* ===============================
   SERVICES PAGE
================================ */

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

  /* ===============================
     MAIN SERVICES ONLY
  ================================ */

  const mainServices = [
    {
      icon: <Layout />,
      title: isArabic ? "تصميم مواقع" : "Web Design",
      desc: isArabic
        ? "تصميم مواقع عصرية وهوية بصرية احترافية."
        : "Modern website design with strong visual identity.",
    },
    {
      icon: <ShoppingCart />,
      title: isArabic ? "متاجر إلكترونية" : "E-Commerce Stores",
      desc: isArabic
        ? "متاجر متكاملة مع بوابات دفع ولوحة تحكم."
        : "Complete online stores with payment systems.",
    },
    {
      icon: <Megaphone />,
      title: isArabic ? "التسويق الإلكتروني" : "Digital Marketing",
      desc: isArabic
        ? "حملات تسويقية ذكية لزيادة العملاء."
        : "Smart marketing campaigns to grow your audience.",
    },
    {
      icon: <Code />,
      title: isArabic ? "مواقع مخصصة" : "Custom Websites",
      desc: isArabic
        ? "برمجة مواقع خاصة حسب احتياجك."
        : "Custom-built websites tailored to your needs.",
    },
    {
      icon: <Globe />,
      title: isArabic ? "تحسين محركات البحث SEO" : "SEO Optimization",
      desc: isArabic
        ? "رفع ترتيب موقعك في نتائج البحث."
        : "Improve your website ranking on search engines.",
    },
  ];

  /* ===============================
     WHY CHOOSE US
  ================================ */

  const features = [
    isArabic ? "أداء عالي وسرعة تحميل ممتازة" : "High performance & fast loading",
    isArabic ? "أمان وحماية متقدمة" : "Advanced security protection",
    isArabic ? "تحسين تجربة المستخدم UX" : "Optimized user experience (UX)",
    isArabic ? "إطلاق احترافي للمشاريع" : "Professional project launch",
    isArabic ? "تحليل بيانات وتحسين مستمر" : "Analytics & continuous optimization",
    isArabic ? "دعم فني واستشارات مستمرة" : "Ongoing support & consulting",
  ];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="
        relative py-32 min-h-screen text-white
        bg-[#02030d] bg-gradient-to-br from-[#050316] via-[#09041f] to-[#02030d]
      "
    >
      <div className="absolute -top-40 left-0 w-[480px] h-[480px] bg-purple-700/25 blur-[180px] -z-10" />

      <PageHeader title={t.title} badge={t.badge} subtitle={t.subtitle} />

      <ServicesSection title={t.servicesTitle} items={mainServices} />

      <FeaturesSection title={t.featuresTitle} features={features} />

      <CTA title={t.ctaTitle} subtitle={t.ctaSubtitle} btn={t.ctaButton} locale={lang} />
    </section>
  );
}

/* ===============================
   COMPONENTS
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
      className={`text-center mb-20 px-6 transition-all duration-700 ${
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

function ServicesSection({
  title,
  items,
}: {
  title: string;
  items: { icon: React.ReactNode; title: string; desc: string }[];
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`max-w-6xl mx-auto px-6 mb-24 transition-all duration-700 ${
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
              hover:bg-white/20 hover:border-purple-400/40
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
      className={`max-w-4xl mx-auto text-center px-6 mb-24 transition-all duration-700 ${
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
  locale
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

      <p className="text-white/60 mt-2 mb-6 max-w-xl mx-auto">{subtitle}</p>

      <Link
         href={`/${locale}/contact`}
        className="
          inline-block px-16 py-3 rounded-full
          bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500
          shadow-[0_10px_40px_rgba(118,75,255,0.45)]
          hover:scale-[1.03] transition text-sm font-semibold
        "
      >
        {btn}
      </Link>
    </div>
  );
}

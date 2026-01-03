"use client";

import React from "react";
import {
  Users,
  Target,
  Award,
  CheckCircle2,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";
import useReveal from "@/hooks/useReveal";
import Image from "next/image";

interface AboutContentProps {
  lang: string;
}

export default function AboutContent({ lang }: AboutContentProps) {
  const isArabic = lang === "ar";

  const t = isArabic
    ? {
        badge: "• من نحن •",
        title: "نحن نصنع حلول رقمية تصنع الفرق",
        subtitle:
          "فريق متخصص في تصميم وتطوير المواقع والمتاجر الرقمية، نركز على الجودة، الأداء، وتحقيق نتائج حقيقية.",
        missionTitle: "مهمتنا",
        missionText:
          "مهمتنا هي مساعدة الشركات والأفراد على بناء حضور رقمي احترافي وقابل للنمو، من خلال حلول تقنية مدروسة تجمع بين التصميم، الأداء، وتجربة المستخدم.",
        missionPoints: [
          "تحليل احتياجات المشروع وبناء حلول مخصصة",
          "تصميم واجهات عصرية تعكس هوية العلامة",
          "تطوير سريع وآمن بمعايير حديثة",
          "التركيز على النتائج والنمو الحقيقي",
        ],
        valuesTitle: "قيمنا",
        whyTitle: "لماذا نحن؟",
        ctaTitle: "جاهز تبدأ معنا؟",
        ctaSubtitle: "خلينا نشتغل معك ونحوّل فكرتك لمشروع ناجح.",
        ctaButton: "تواصل معنا",
      }
    : {
        badge: "• About Us •",
        title: "We Build Digital Solutions That Truly Matter",
        subtitle:
          "A specialized team in web design and development, focused on quality, performance, and real results.",
        missionTitle: "Our Mission",
        missionText:
          "Our mission is to help businesses and individuals build a strong, scalable digital presence through well-crafted technical solutions that combine design, performance, and user experience.",
        missionPoints: [
          "Understanding project needs and crafting tailored solutions",
          "Designing modern interfaces that reflect brand identity",
          "Fast, secure development using modern standards",
          "Focusing on real results and sustainable growth",
        ],
        valuesTitle: "Our Values",
        whyTitle: "Why Choose Us?",
        ctaTitle: "Ready to Work With Us?",
        ctaSubtitle: "Let’s turn your idea into a successful digital project.",
        ctaButton: "Contact Us",
      };

  const values = [
    {
      icon: <Target />,
      text: isArabic ? "التركيز على النتائج" : "Result-oriented mindset",
    },
    {
      icon: <Award />,
      text: isArabic ? "جودة عالية في كل التفاصيل" : "High-quality standards",
    },
    {
      icon: <Users />,
      text: isArabic ? "شراكة حقيقية مع العملاء" : "True client partnership",
    },
  ];

  const whyUs = [
    isArabic ? "تصميم عصري وقابل للتطوير" : "Modern & scalable design",
    isArabic ? "كود نظيف وسريع" : "Clean & fast code",
    isArabic ? "التزام بالمواعيد" : "On-time delivery",
    isArabic ? "دعم فني مستمر" : "Ongoing technical support",
    isArabic ? "خبرة عملية حقيقية" : "Real-world experience",
  ];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      // 👇 تعديل البادينج: pt-32 (من فوق) و pb-12 (من تحت فقط) لتقليل المسافة مع الفوتر
      className="
        relative pt-32 pb-12 min-h-screen text-white overflow-hidden
        bg-[#02030d] bg-gradient-to-br from-[#050316] via-[#09041f] to-[#02030d]
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-[480px] h-[480px] bg-purple-700/25 blur-[180px] -z-10" />

      <PageHeader title={t.title} badge={t.badge} subtitle={t.subtitle} />

      <Mission
        title={t.missionTitle}
        text={t.missionText}
        points={t.missionPoints}
      />

      <Values title={t.valuesTitle} items={values} />

      <WhyUs title={t.whyTitle} items={whyUs} />

      <CTA
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        btn={t.ctaButton}
        locale={lang}
      />
    </section>
  );
}

/* ===============================
   SUB-COMPONENTS (Internal)
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
      className={`text-center mb-24 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span className="inline-block px-4 py-1 text-xs rounded-full border border-purple-400/40 bg-white/10 text-purple-200">
        {badge}
      </span>

      <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
        {title}
      </h1>

      <p className="mt-4 text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

function Mission({
  title,
  text,
  points,
}: {
  title: string;
  text: string;
  points: string[];
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`
        max-w-6xl mx-auto px-6 mb-32
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div className="grid md:grid-cols-2 gap-14 items-center">
        {/* TEXT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="text-purple-300 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-purple-200">{title}</h2>
          </div>

          <p className="text-white/70 text-sm leading-relaxed mb-6">{text}</p>

          <ul className="space-y-3">
            {points.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-white/80"
              >
                <CheckCircle2 className="mt-1 text-purple-400 shrink-0 w-5 h-5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGE */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-purple-600/20 blur-3xl rounded-full -z-10 group-hover:bg-purple-600/30 transition duration-500" />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <Image
              src="/about.png"
              alt="CodeAura Mission"
              width={600}
              height={400}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Values({
  title,
  items,
}: {
  title: string;
  items: { icon: React.ReactNode; text: string }[];
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`max-w-6xl mx-auto px-6 mb-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-10 text-center text-purple-200">
        {title}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((v, i) => (
          <div
            key={i}
            className="
              flex flex-col items-center text-center 
              bg-white/5 border border-white/10 backdrop-blur-sm
              p-8 rounded-3xl
              transition-all duration-300
              hover:bg-white/10 hover:border-purple-500/30
              hover:-translate-y-2
            "
          >
            <div className="mb-4 text-purple-300 bg-purple-500/10 p-4 rounded-full">
              {/* 👇 تم إصلاح خطأ TypeScript هنا */}
              {React.cloneElement(
                v.icon as React.ReactElement<{
                  size: number;
                  className?: string;
                }>,
                {
                  size: 32,
                }
              )}
            </div>
            <p className="text-white/90 font-medium">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyUs({ title, items }: { title: string; items: string[] }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`max-w-4xl mx-auto text-center px-6 mb-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-8 text-purple-200">{title}</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((i, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-purple-500/20 transition-colors"
          >
            <CheckCircle2 className="text-purple-400 w-5 h-5 shrink-0" />
            <span className="text-white/80 text-sm font-medium">{i}</span>
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
      // 👇 تم إزالة pb-20 لجعل الفوتر يقترب من المحتوى
      className={`text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="inline-block p-4 rounded-full bg-purple-500/10 mb-4">
        <HeartHandshake className="text-purple-400 w-8 h-8" />
      </div>
      <h2 className="text-3xl font-semibold mb-3">{title}</h2>

      <p className="text-white/60 mb-8 max-w-xl mx-auto text-base">
        {subtitle}
      </p>

      <Link
        href={`/${locale}/contact`}
        className="
          inline-block px-10 py-4 rounded-full
          bg-gradient-to-r from-purple-600 to-blue-600
          text-white font-bold tracking-wide
          shadow-lg shadow-purple-900/40
          hover:scale-105 hover:shadow-purple-700/50
          transition-all duration-300
        "
      >
        {btn}
      </Link>
    </div>
  );
}
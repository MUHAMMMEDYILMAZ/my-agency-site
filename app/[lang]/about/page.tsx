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

export default function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = React.use(params);
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
      className="
        relative py-32 min-h-screen text-white
        bg-[#02030d] bg-gradient-to-br from-[#050316] via-[#09041f] to-[#02030d]
      "
    >
      {/* glow */}
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
      className={`text-center mb-24 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span className="px-4 py-1 text-xs rounded-full border border-purple-400/40 bg-white/10 text-purple-200">
        {badge}
      </span>

      <h1 className="mt-4 text-3xl sm:text-4xl font-semibold">{title}</h1>

      <p className="mt-3 text-white/60 max-w-2xl mx-auto text-sm">{subtitle}</p>
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
          {/* العنوان مع الأيقونة جنب بعض */}
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
                <CheckCircle2 className="mt-1 text-purple-400 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="absolute -inset-6 bg-purple-600/20 blur-3xl rounded-full -z-10" />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <video
      src="/aboutv.mp4"   // ضع رابط الفيديو هنا
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover hover:scale-[1.05] transition duration-500"
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
      <h2 className="text-xl font-semibold mb-10 text-center text-purple-200">{title}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((v, i) => (
          <div
            key={i}
            className="
              text-center bg-white/10 border border-white/10 backdrop-blur-xl
              p-8 rounded-3xl
              transition-all duration-300
              hover:bg-white/20 hover:border-purple-400/40
              hover:scale-[1.05]
            "
          >
            <div className="flex justify-center mb-4 text-purple-300">
              <div className="p-3 bg-white/5 rounded-full">{v.icon}</div>
            </div>
            <p className="text-white/80 text-sm">{v.text}</p>
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
      <h2 className="text-xl font-semibold mb-6 text-purple-200">{title}</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((i, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 bg-white/5 p-4 rounded-xl border border-white/10"
          >
            <CheckCircle2 className="text-purple-300" />
            <span className="text-white/80 text-sm">{i}</span>
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
      <HeartHandshake className="mx-auto mb-4 text-purple-300" />
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

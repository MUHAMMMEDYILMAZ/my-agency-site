"use client";

import { CheckCircle, Zap, Search, Shield, Code2, Headphones } from "lucide-react";
import useReveal from "@/hooks/useReveal";
import { ReactNode } from "react";

// --- 1. تعريف نوع البيانات ---
interface FeatureItem {
  title: string;
  desc: string;
  icon: ReactNode; // لأنك تمرر الأيقونة كعنصر JSX
  glow: string;
}

// --- 2. مكون الكرت المنفصل (هنا نستخدم الهوك بأمان) ---
function FeatureCard({ item, index }: { item: FeatureItem; index: number }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`
        relative group p-6 rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-[0_0_30px_rgba(0,0,0,0.4)]
        transition-all duration-300
        hover:scale-[1.03]
        hover:border-purple-400/30

        ${visible ? "animate-why" : "opacity-0 translate-y-[30px]"}
      `}
      // إضافة تأخير بسيط بناءً على الفهرس
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow Effect */}
      <div
        className={`
          absolute -inset-0.5 rounded-2xl opacity-0 
          bg-gradient-to-br ${item.glow} to-transparent
          blur-xl transition duration-500 
          group-hover:opacity-40
        `}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 p-3 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
          {item.icon}
        </div>

        {/* SEO: H3 is perfect here */}
        <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>

        <p className="text-sm text-white/60 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

// --- 3. المكون الرئيسي ---
export default function WhyChooseUs({ locale }: { locale: string }) {
  const isArabic = locale === "ar";

  const t = isArabic
    ? {
        badge: "• لماذا نحن؟ •",
        title: "لماذا يثق العملاء في خدمات تطوير الويب لدينا",
        subtitle:
          "نركز على الأداء، جودة التصميم، قوة السيو، والدعم المستمر لضمان نمو موقعك مع عملك.",
        features: [
          { title: "مواقع عالية الأداء", desc: "نستخدم Next.js لضمان سرعة فائقة وتجربة ممتازة.", icon: <Zap className="w-6 h-6 text-yellow-300" />, glow: "from-yellow-400/20" },
          { title: "تحسين متقدم لمحركات البحث", desc: "تهيئة كاملة لرفع ترتيب موقعك في جوجل.", icon: <Search className="w-6 h-6 text-blue-300" />, glow: "from-blue-400/20" },
          { title: "تقنيات قوية", desc: "Next.js و Node.js و Tailwind — أداء واستقرار لسنوات.", icon: <Code2 className="w-6 h-6 text-purple-300" />, glow: "from-purple-400/20" },
          { title: "أمان عالي", desc: "نطبق أمانًا قويًا وضوابط حماية احترافية.", icon: <Shield className="w-6 h-6 text-red-300" />, glow: "from-red-400/20" },
          { title: "دعم مستمر", desc: "تحسينات وصيانة ما بعد التسليم.", icon: <Headphones className="w-6 h-6 text-green-300" />, glow: "from-green-400/20" },
          { title: "حلول مخصصة", desc: "نصمم حلولًا كاملة تناسب عملك تمامًا.", icon: <CheckCircle className="w-6 h-6 text-pink-300" />, glow: "from-pink-400/20" },
        ],
      }
    : {
        badge: "• Why Choose Us •",
        title: "Why Clients Trust Our Web Development",
        subtitle:
          "We focus on performance, design quality, SEO strength, and long-term support.",
        features: [
          { title: "High Performance Websites", desc: "Next.js for maximum speed and UX.", icon: <Zap className="w-6 h-6 text-yellow-300" />, glow: "from-yellow-400/20" },
          { title: "Advanced SEO Optimization", desc: "Optimized to rank higher on Google.", icon: <Search className="w-6 h-6 text-blue-300" />, glow: "from-blue-400/20" },
          { title: "Strong Technologies", desc: "Next.js, Node.js, Tailwind — scalable and secure.", icon: <Code2 className="w-6 h-6 text-purple-300" />, glow: "from-purple-400/20" },
          { title: "Security & Stability", desc: "Modern security practices.", icon: <Shield className="w-6 h-6 text-red-300" />, glow: "from-red-400/20" },
          { title: "Post-Launch Support", desc: "We stay with you after delivery.", icon: <Headphones className="w-6 h-6 text-green-300" />, glow: "from-green-400/20" },
          { title: "Custom Solutions", desc: "Fully tailored systems for your business.", icon: <CheckCircle className="w-6 h-6 text-pink-300" />, glow: "from-pink-400/20" },
        ],
      };

  return (
    <section
      className="relative py-24 text-white bg-[#050816] overflow-x-hidden px-4"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* TITLE */}
      <div className="text-center mb-14">
        <span className="px-4 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-purple-200">
          {t.badge}
        </span>

        {/* SEO: H2 tag is correct */}
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">{t.title}</h2>

        <p className="text-white/60 mt-2 text-sm max-w-xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {t.features.map((item, i) => (
          // استدعاء المكون الفرعي هنا
          <FeatureCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
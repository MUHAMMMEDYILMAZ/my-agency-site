"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useReveal from "@/hooks/useReveal";

export default function Hero({ locale }: { locale: string }) {
  const isArabic = locale === "ar";
  const whatsappNumber = "966535846431";

  const t = isArabic
    ? {
        badge: "شريكك التقني نحو النجاح",
        title1: "لا تكتفِ ببناء موقع إلكتروني،",
        title2: "بل ابنِ واجهة تضاعف مبيعاتك!",
        subtitle:
          "نحول أفكارك إلى منصات رقمية احترافية. نقدم برمجة متطورة للمتاجر والمواقع، مع تحسين كامل لمحركات البحث (SEO) لضمان وصول عملائك إليك قبل المنافسين.",
        chat: "احصل على استشارة مجانية",
        quote: "شاهد خدماتنا وحلولنا",
        tools: "أدوات عالمية لمشاريع لا تقبل الخطأ",
      }
    : {
        badge: "Your Partner for Digital Success",
        title1: "Don't Just Build a Website,",
        title2: "Build a Revenue Engine!",
        subtitle:
          "We turn ideas into powerful digital platforms. Offering advanced development for stores and websites, fully optimized for SEO to ensure customers find you before your competitors.",
        chat: "Free Consultation",
        quote: "View Our Solutions",
        tools: "World-class tools for error-free projects",
      };

  // 👇 تحسين SEO: مصفوفة تحتوي على الاسم للوصف البديل
  const techStack = [
    { src: "/html-5-icon.svg", name: "HTML5" },
    { src: "/javascript-logo.svg", name: "JavaScript" },
    { src: "/nextjs-icon.png", name: "Next.js Framework" },
    { src: "/nodejs-icon.svg", name: "Node.js Environment" },
    { src: "/react-icon.svg", name: "React Library" },
  ];

  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      // 👇 تم إضافة w-full و max-w-full لضمان عدم الخروج عن الإطار
      className={`
        relative w-full max-w-full overflow-hidden
        bg-[#050816] text-white 
        pt-32 sm:pt-28 md:pt-32 
        pb-10 sm:pb-24
        text-center
        bg-gradient-to-br from-[#0a0724] via-[#120a3a] to-[#050816]
        bg-[url('data:image/svg+xml,%3Csvg%20width%3D%221120%22%20height%3D%221120%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M50%200%20L100%2050%20L50%20100%20L0%2050%20Z%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff10%22%20stroke-width%3D%221%22/%3E%3C/svg%3E')]
        bg-[length:180px]

        ${visible ? "animate-hero" : "opacity-0 translate-y-[20px]"}
      `}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* LEFT PURPLE GLOW - جعلناه متجاوباً */}
      <div 
        className="
          absolute -top-40 -left-20 -z-10
          w-full max-w-[400px] h-[400px] sm:max-w-[480px] sm:h-[480px] 
          bg-purple-700/40 blur-[140px]
        " 
      />

      {/* RIGHT BLUE GLOW - جعلناه متجاوباً */}
      <div 
        className="
          absolute bottom-0 right-0 -z-10
          w-full max-w-[420px] h-[420px] sm:max-w-[550px] sm:h-[550px] 
          bg-fuchsia-500/30 blur-[150px]
        " 
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20 -z-10" />

      {/* BADGE */}
      <div
        className={`mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-white/5 px-4 py-1 text-xs font-medium text-purple-100/90 ${
          isArabic ? "flex-row-reverse" : ""
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-purple-400" />
        {t.badge}
      </div>

      {/* MAIN TITLE */}
      <h1
        className="
          text-2xl sm:text-3xl md:text-5xl font-semibold 
          max-w-4xl mx-auto leading-tight px-4
        "
      >
        {t.title1}{" "}
        <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent block md:inline mt-1 md:mt-0">
          {t.title2}
        </span>
      </h1>

      {/* SUBTITLE */}
      <p className="mt-6 max-w-2xl mx-auto text-white/70 text-sm sm:text-base px-5 leading-relaxed">
        {t.subtitle}
      </p>

      {/* BUTTONS */}
      <div
        className={`mt-10 flex justify-center gap-4 flex-wrap px-4 ${
          isArabic ? "flex-row-reverse" : ""
        }`}
      >
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-white/25 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-colors group"
        >
          <MessageCircle className="h-4 w-4 text-purple-200 group-hover:text-white transition-colors" />
          <span 
            className={`
              block leading-none
              ${isArabic ? "text-[15px] font-semibold pb-[3px]" : "text-sm font-medium pt-[1px]"}
            `}
          >
            {t.chat}
          </span>
        </a>

        <Link
          href={`/${locale}/services`}
          className="
            group flex items-center gap-2 
            bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 
            shadow-[0_15px_40px_rgba(118,75,255,0.45)] 
            px-7 py-3 rounded-full 
            text-white hover:opacity-90 transition-opacity
          "
        >
          <span 
            className={`
              block leading-none
              ${isArabic ? "text-[15px] font-semibold pb-[3px]" : "text-sm font-medium pt-[1px]"}
            `}
          >
            {t.quote}
          </span>
          
          <ArrowRight
            className={`
              h-4 w-4 transition-transform duration-300
              ${isArabic ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}
            `}
          />
        </Link>
      </div>

      {/* ICONS */}
      <div className="mt-16">
        <p className="text-white/70 text-sm mb-6">{t.tools}</p>

        <div className="flex justify-center flex-wrap gap-6 sm:gap-8 px-4">
          {techStack.map((item, i) => (
            <div
              key={i}
              className="
                w-14 h-14 sm:w-16 sm:h-16
                rounded-full flex items-center justify-center
                bg-black/25 border border-white/10
                shadow-[0_4px_20px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
                hover:scale-110 transition-transform duration-300
              "
            >
              <Image
                src={item.src}
                alt={item.name} // 👈 تم تصحيح الـ Alt Text هنا
                width={40}
                height={40}
                className="w-7 h-7 sm:w-8 sm:h-8 opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
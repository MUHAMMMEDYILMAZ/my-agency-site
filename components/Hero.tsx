"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ locale }: { locale: string }) {
  const isArabic = locale === "ar";

  const t = isArabic
    ? {
        badge: "حلول الويب في مكان واحد",
        title1: "إكسلانس ووردبريس لعملك –",
        title2: "حلول مخصصة، نتائج أسرع!",
        subtitle:
          "نحن نبني مواقع ومتاجر آمنة، سريعة، وصديقة لمحركات البحث ومصممة لتحقيق أهدافك.",
        chat: "الدردشة الآن",
        quote: "احصل على عرض سعر",
        tools: "نُحدث ثورة في حلول العملاء باستخدام أفضل الأدوات",
      }
    : {
        badge: "Web Solutions in One Place",
        title1: "WordPress Excellence for Your Business –",
        title2: "Custom Solutions, Faster Results!",
        subtitle:
          "We build secure, SEO-friendly, and high-performing websites and stores tailored to your goals.",
        chat: "Chat Now",
        quote: "Get A Quote",
        tools: "Revolutionizing Client Solutions with the Best Tools",
      };

  return (
    <motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.55, ease: "easeOut" }}

      className="
        fade-up
        bg-[#050816]
        relative text-white 
        pt-32 sm:pt-28 md:pt-32 
        pb-10 sm:pb-24
        text-center
        bg-gradient-to-br from-[#0a0724] via-[#120a3a] to-[#050816]
        overflow-hidden

        bg-[url('data:image/svg+xml,%3Csvg%20width%3D%221120%22%20height%3D%221120%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M50%200%20L100%2050%20L50%20100%20L0%2050%20Z%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff10%22%20stroke-width%3D%221%22/%3E%3C/svg%3E')]
        bg-[length:180px]
      "
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* LEFT PURPLE GLOW */}
      <div className="absolute -top-40 -left-20 w-[400px] h-[400px] sm:w-[480px] sm:h-[480px] bg-purple-700/40 blur-[140px] -z-10" />

      {/* RIGHT BLUE GLOW */}
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] sm:w-[550px] sm:h-[550px] bg-fuchsia-500/30 blur-[150px] -z-10" />

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
          max-w-3xl mx-auto leading-tight px-4
        "
      >
        {t.title1}{" "}
        <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
          {t.title2}
        </span>
      </h1>

      {/* SUBTITLE */}
      <p className="mt-4 max-w-xl mx-auto text-white/70 text-sm sm:text-base px-5">
        {t.subtitle}
      </p>

      {/* BUTTONS */}
      <div
        className={`mt-8 flex justify-center gap-4 flex-wrap px-4 ${
          isArabic ? "flex-row-reverse" : ""
        }`}
      >
        <button className="flex items-center gap-2 border border-white/25 bg-white/5 hover:bg-white/10 px-5 py-2 rounded-full text-sm font-medium">
          <MessageCircle className="h-4 w-4" />
          {t.chat}
        </button>

        <button className="group flex items-center gap-2 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 shadow-[0_15px_40px_rgba(118,75,255,0.45)] px-7 py-2.5 rounded-full text-sm font-semibold">
          {t.quote}
          <ArrowRight
            className={`h-4 w-4 group-hover:translate-x-1 transition ${
              isArabic ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* ICONS */}
      <div className="mt-16">
        <p className="text-white/70 text-sm mb-6">{t.tools}</p>

        <div className="flex justify-center flex-wrap gap-6 sm:gap-8 px-4">
          {[ 
            "/html-5-icon.svg",
            "/javascript-logo.svg",
            "/nextjs-icon.png",
            "/nodejs-icon.svg",
            "/react-icon.svg",
          ].map((src, i) => (
            <div
              key={i}
              className="
                w-14 h-14 sm:w-16 sm:h-16
                rounded-full flex items-center justify-center
                bg-black/25 border border-white/10
                shadow-[0_4px_20px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
              "
            >
              <Image
                src={src}
                alt="tech"
                width={40}
                height={40}
                className="w-7 h-7 sm:w-8 sm:h-8 opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

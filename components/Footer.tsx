"use client";

import { Mail, Phone, Facebook, Instagram, X, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ locale }: { locale: string }) {
  const isArabic = locale === "ar";

  const t = isArabic
    ? {
        brandDesc:
          "نحن نبني مواقع سريعة، آمنة، وقابلة للتطوير باستخدام أحدث التقنيات لضمان نجاح عملك.",
        contact: "تواصل معنا:",
        features: "الميزات",
        solutions: "الحلول",
        company: "الشركة",
        about: "من نحن",
        work: "أعمالنا",
        reviews: "التقييمات",
        contactUs: "اتصل بنا",
        terms: "الشروط والأحكام",
        emailPlaceholder: "أدخل بريدك الإلكتروني...",
        bookDemo: "احجز عرض تجريبي",
        copyright:
          "© جميع الحقوق محفوظة لـ Niche Geeky " + new Date().getFullYear(),
        featuresList: [
          "دعم 24/7",
          "تطوير مواقع مخصص",
          "تحسين محركات البحث (SEO)",
          "تصميم صفحات هبوط",
          "دمج التحليلات",
          "تحسين الأداء",
        ],
        solutionsList: [
          "متاجر إلكترونية",
          "مواقع شركات",
          "لوحات تحكم",
          "مواقع شخصية",
          "أنظمة مخصصة",
          "مواقع العلامات التجارية",
        ],
      }
    : {
        brandDesc:
          "We build fast, secure, and scalable websites using modern technologies for your business success.",
        contact: "Contact:",
        features: "Features",
        solutions: "Solutions",
        company: "Company",
        about: "About Us",
        work: "Our Work",
        reviews: "Reviews",
        contactUs: "Contact Us",
        terms: "Terms & Conditions",
        emailPlaceholder: "Enter your email address...",
        bookDemo: "Book a Demo",
        copyright:
          "Niche Geeky © " + new Date().getFullYear() + " All rights reserved.",
        featuresList: [
          "24/7 Support",
          "Custom Web Development",
          "SEO Optimization",
          "Landing Pages",
          "Analytics Integration",
          "Performance Boost",
        ],
        solutionsList: [
          "E-commerce Stores",
          "Business Websites",
          "Dashboards",
          "Portfolio Websites",
          "Custom Systems",
          "Brand Websites",
        ],
      };

  return (
    <footer
      className={`
        relative py-5 text-white 
        bg-[#050816] border-t border-white/10
        bg-gradient-to-b from-[#050816] via-[#040515] to-[#03030f]
        ${isArabic ? "text-right" : "text-left"}
      `}
    >
      {/* TOP GRID */}
      <div
        className={`
          max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12
          ${isArabic ? "direction-rtl" : ""}
        `}
      >
        {/* COLUMN 1 — Brand */}
       {/* COLUMN 1 — Brand */}
<div>
  {/* BRAND LOGO */}
  <Link href={`/${locale}`} className="inline-block">
    <Image
      src="/og-image12.png"   // ← ضع شعارك هنا
      alt="Niche Geeky Logo"
      width={140}
      height={50}
      className="object-contain mb-4"
    />
  </Link>

  <p className="text-white/60 text-sm leading-relaxed mb-6">
    {t.brandDesc}
  </p>

  <h4 className="font-medium mb-2">{t.contact}</h4>

  <div className="flex items-center gap-3 text-white/70 text-sm mb-2">
    <Mail className="w-4 h-4" />
    <span>hellonichegeeky@gmail.com</span>
  </div>

  <div className="flex items-center gap-3 text-white/70 text-sm mb-6">
    <Phone className="w-4 h-4" />
    <span>+8807683674747</span>
  </div>
</div>


        {/* COLUMN 2 — Features */}
        <div>
          <h3 className="font-semibold mb-4">{t.features}</h3>
          <ul className="space-y-2 text-sm text-white/60">
            {t.featuresList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3 — Solutions */}
        <div>
          <h3 className="font-semibold mb-4">{t.solutions}</h3>
          <ul className="space-y-2 text-sm text-white/60">
            {t.solutionsList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* COLUMN 4 — Company */}
        <div>
          <h3 className="font-semibold mb-4">{t.company}</h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <Link href={`/${locale}/about`} className="hover:text-white">
                {t.about}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/our-work`} className="hover:text-white">
                {t.work}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/reviews`} className="hover:text-white">
                {t.reviews}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="hover:text-white">
                {t.contactUs}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/terms`} className="hover:text-white">
                {t.terms}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* EMAIL INPUT */}
      <div className="max-w-6xl mx-auto px-6 mt-4 flex">
        <div
          className="
            inline-flex items-center bg-white/5 border border-white/10 
            rounded-full backdrop-blur-xl pl-5 pr-2 py-2 gap-2
          "
        >
          <input
            type="email"
            placeholder={t.emailPlaceholder}
            className="
              bg-transparent text-white/80 placeholder-white/40
              outline-none text-sm w-[180px]
            "
          />

          <button
            className="
              flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium
              bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 text-white
              shadow-[0_8px_25px_rgba(118,75,255,0.35)]
            "
          >
            {t.bookDemo}
          </button>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-16 border-t border-white/10 pt-6">
        <div
          className={`
            max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4
            ${isArabic ? "direction-rtl text-right" : ""}
          `}
        >
          <p className="text-xs text-white/50">{t.copyright}</p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="https://facebook.com/"
              target="_blank"
              className="
                w-10 h-10 flex items-center justify-center rounded-full
                text-[#0D47A1] border border-[#0D47A1]/40
                hover:bg-[#0D47A1]/20 hover:shadow-[0_0_15px_#0D47A1]
                transition-all duration-300 hover:scale-110
              "
            >
              <Facebook className="w-5 h-5" />
            </Link>

            <Link
              href="https://instagram.com/"
              target="_blank"
              className="
                w-10 h-10 flex items-center justify-center rounded-full
                text-[#FF3CAC] border border-[#FF3CAC]/40
                hover:bg-[#FF3CAC]/20 hover:shadow-[0_0_15px_#FF3CAC]
                transition-all duration-300 hover:scale-110
              "
            >
              <Instagram className="w-5 h-5" />
            </Link>

            <Link
              href="https://twitter.com/"
              target="_blank"
              className="
                w-10 h-10 flex items-center justify-center rounded-full
                text-white border border-white/40
                hover:bg-white/15 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]
                transition-all duration-300 hover:scale-110
              "
            >
              <X className="w-5 h-5" />
            </Link>

            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="
                w-10 h-10 flex items-center justify-center rounded-full
                text-[#0A66C2] border border-[#0A66C2]/40
                hover:bg-[#0A66C2]/20 hover:shadow-[0_0_15px_#0A66C2]
                transition-all duration-300 hover:scale-110
              "
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

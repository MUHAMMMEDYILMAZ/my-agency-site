"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ locale }: { locale: string }) {
  const isArabic = locale === "ar";

  const t = isArabic
    ? {
        brandDesc:
          "نحول أفكارك إلى واقع رقمي. متخصصون في تصميم المواقع، المتاجر الإلكترونية، وتحسين نتائج البحث لضمان نمو عملك.",
        contact: "تواصل معنا:",
        features: "مميزاتنا",
        solutions: "خدماتنا",
        company: "الشركة",
        about: "من نحن",
        contactUs: "اتصل بنا",
        services: "جميع الخدمات",
        copyright:
          "© جميع الحقوق محفوظة لـ Code Aura " + new Date().getFullYear(),
        featuresList: [
          "دعم فني 24/7",
          "استضافة ودومين مجاني",
          "تحسين محركات البحث (SEO)",
          "حماية وأمان عالي",
          "سرعة أداء فائقة",
          "تصميم متجاوب",
        ],
        solutionsList: [
          "موقع صفحة واحدة (Landing Pages)",
          "مواقع الشركات",
          "المتاجر الإلكترونية",
          "لوحات التحكم (Dashboards)",
          "تطوير الـ API والـ Backend",
          "الحلول البرمجية الخاصة",
        ],
      }
    : {
        brandDesc:
          "Turning your ideas into digital reality. We specialize in web design, e-commerce, and SEO to ensure your business growth.",
        contact: "Contact:",
        features: "Why Choose Us",
        solutions: "Our Services",
        company: "Company",
        about: "About Us",
        contactUs: "Contact Us",
        services: "All Services",
        copyright:
          "Code Aura © " + new Date().getFullYear() + " All rights reserved.",
        featuresList: [
          "24/7 Support",
          "Free Hosting & Domain",
          "SEO Optimization",
          "High Security",
          "High Performance",
          "Responsive Design",
        ],
        solutionsList: [
          "Landing Pages",
          "Corporate Websites",
          "E-Commerce Stores",
          "Custom Dashboards",
          "API & Backend Systems",
          "Tailored Solutions",
        ],
      };

  return (
    <footer
      className={`
        relative py-10 text-white 
        bg-[#050816] border-t border-white/10
        bg-gradient-to-b from-[#050816] via-[#040515] to-[#03030f]
        ${isArabic ? "text-right" : "text-left"}
      `}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* TOP GRID */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* COLUMN 1 — Brand */}
        <div>
          {/* BRAND LOGO */}
          <Link href={`/${locale}`} className="inline-block hover:opacity-80 transition-opacity">
            {/* 👇 تم تصحيح كود الصورة هنا */}
            <Image
              src="/og-image12.png"
              alt="CodeAura Logo"
              width={0}
              height={0}
              sizes="100vw"
              // استخدمنا h-[50px] ليكون بنفس حجم الهيدر، و w-auto للحفاظ على الأبعاد
              className="w-auto h-[50px] object-contain mb-4"
              priority
            />
          </Link>

          <p className="text-white/60 text-sm leading-relaxed mb-6">
            {t.brandDesc}
          </p>

          <h4 className="font-medium mb-3 text-purple-200">{t.contact}</h4>

          <div className="flex items-center gap-3 text-white/70 text-sm mb-2 hover:text-white transition group">
            <Mail className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition" />
            <a href="mailto:codeaura11@gmail.com">codeaura11@gmail.com</a>
          </div>

          <div className="flex items-center gap-3 text-white/70 text-sm mb-6 hover:text-white transition group">
            <Phone className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition" />
            <a href="tel:+966535846431" dir="ltr">+966 53 584 6431</a>
          </div>
        </div>

        {/* COLUMN 2 — Features */}
        <div>
          <h3 className="font-semibold mb-4 text-lg text-white">{t.features}</h3>
          <ul className="space-y-2 text-sm text-white/60">
            {t.featuresList.map((item, i) => (
              <li key={i} className="hover:text-purple-300 transition-colors cursor-default select-none">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3 — Services */}
        <div>
          <h3 className="font-semibold mb-4 text-lg text-white">{t.solutions}</h3>
          <ul className="space-y-2 text-sm text-white/60">
            {t.solutionsList.map((item, i) => (
              <li key={i}>
                <Link href={`/${locale}/services`} className="hover:text-purple-300 transition-colors block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 4 — Company */}
        <div>
          <h3 className="font-semibold mb-4 text-lg text-white">{t.company}</h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <Link href={`/${locale}/about`} className="hover:text-purple-300 transition-colors block">
                {t.about}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="hover:text-purple-300 transition-colors block">
                {t.contactUs}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/services`} className="hover:text-purple-300 transition-colors block">
                {t.services}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-10 border-t border-white/10 pt-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
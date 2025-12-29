"use client";

import { Mail, Phone, Facebook, Instagram, X, Linkedin } from "lucide-react";
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
        services: "خدماتنا",
        copyright:
          "© جميع الحقوق محفوظة لـ Code Aura " + new Date().getFullYear(),
        featuresList: [
          "تصميم وتطوير المواقع",
          "استضافة ودومين مجاني",
          "تحسين نتائج البحث (SEO)",
          "تطوير متاجر إلكترونية",
          "دعم فني وصيانة",
          "أمان وحماية عالية",
        ],
        solutionsList: [
          "موقع صفحة واحدة",
          "المواقع التجارية",
          "المتاجر الرقمية",
          "المدونات الشخصية",
          "أنظمة إدارة المحتوى",
          "ربط بوابات الدفع",
        ],
      }
    : {
        brandDesc:
          "Turning your ideas into digital reality. We specialize in web design, e-commerce, and SEO to ensure your business growth.",
        contact: "Contact:",
        features: "Our advantages",
        solutions: "Services",
        company: "Company",
        about: "About Us",
        contactUs: "Contact Us",
        services: "Our Services",
        copyright:
          "Code Aura © " + new Date().getFullYear() + " All rights reserved.",
        featuresList: [
          "Web Design & Dev",
          "Free Hosting & Domain",
          "Search Optimization (SEO)",
          "E-commerce Development",
          "Support & Maintenance",
          "High Security",
        ],
        solutionsList: [
          "Landing Pages",
          "Business Websites",
          "Digital Stores",
          "Personal Blogs",
          "CMS Systems",
          "Payment Integration",
        ],
      };

  return (
    <footer
      className={`
        relative py-6 text-white 
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
          <Link href={`/${locale}`} className="inline-block">
            <Image
              src="/og-image12.png"
              alt="CodeAura Logo"
              width={140}
              height={50}
              className="object-contain mb-4"
            />
          </Link>

          <p className="text-white/60 text-sm leading-relaxed mb-6">
            {t.brandDesc}
          </p>

          <h4 className="font-medium mb-3 text-purple-200">{t.contact}</h4>

          <div className="flex items-center gap-3 text-white/70 text-sm mb-2 hover:text-white transition">
            <Mail className="w-4 h-4 text-purple-400" />
            <a href="mailto:codeaura11@gmail.com">codeaura11@gmail.com</a>
          </div>

          <div className="flex items-center gap-3 text-white/70 text-sm mb-6 hover:text-white transition">
            <Phone className="w-4 h-4 text-blue-400" />
            <a href="tel:+966535846431" dir="ltr">+966 53 584 6431</a>
          </div>
        </div>

        {/* COLUMN 2 — Features */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">{t.features}</h3>
          <ul className="space-y-2 text-sm text-white/60">
            {t.featuresList.map((item, i) => (
              <li key={i} className="hover:text-purple-300 transition-colors cursor-default">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3 — Solutions */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">{t.solutions}</h3>
          <ul className="space-y-2 text-sm text-white/60">
            {t.solutionsList.map((item, i) => (
              <li key={i} className="hover:text-purple-300 transition-colors cursor-default">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 4 — Company */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">{t.company}</h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <Link href={`/${locale}/about`} className="hover:text-white transition">
                {t.about}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="hover:text-white transition">
                {t.contactUs}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/services`} className="hover:text-white transition">
                {t.services}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-6 border-t border-white/10 pt-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
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
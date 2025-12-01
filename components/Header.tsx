"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Header({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const isArabic = locale === "ar";

  const languages = [
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
  ];

  const t = isArabic
    ? {
        home: "الرئيسية",
        services: "الخدمات",
        work: "أعمالنا",
        reviews: "التقييمات",
        contact: "تواصل معنا",
        getStarted: "ابدأ الآن",
        free: "• مجاني →",
        whatsapp: "واتساب",
      }
    : {
        home: "Home",
        services: "Services",
        work: "Our Work",
        reviews: "Reviews",
        contact: "Contact Us",
        getStarted: "Get Started",
        free: "• it's free →",
        whatsapp: "WhatsApp",
      };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        px-4 pt-4 
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto max-w-6xl
          flex items-center justify-between
          px-6 py-3
          rounded-full

          bg-[rgba(70,70,80,0.35)]
          backdrop-blur-xl
          border border-white/10
          shadow-[0_4px_20px_rgba(0,0,0,0.25)]
        "
      >
        {/* LOGO */}
<Link href={`/${locale}`}>
  <Image
    src="/og-image1.png"   // أو logo.svg
    alt="CodeAura Logo"
    width={80}
    height={30}
    className="object-contain cursor-pointer"
  />
</Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/85">
          <Link href="#" className="hover:text-white relative">
            {t.home}
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white rounded-full" />
          </Link>
          <Link href="#">{t.services}</Link>
          <Link href="#">{t.work}</Link>
          <Link href="#">{t.reviews}</Link>
          <Link href="#">{t.contact}</Link>
        </nav>

        {/* RIGHT SIDE (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4">
          {/* LANGUAGES */}
          <div className="flex items-center gap-2">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={`/${lang.code}`}
                className={`
                  px-3 py-1 rounded-full text-xs font-semibold
                  border transition-all duration-200
                  ${
                    locale === lang.code
                      ? "bg-white text-[#050816] border-white"
                      : "text-white border-white/30 hover:border-white"
                  }
                `}
              >
                {lang.label}
              </Link>
            ))}
          </div>

          {/* CALL BUTTON */}
          <button className="h-9 w-9 flex items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-green-400 hover:border-green-400 transition">
            <Phone className="h-4 w-4" />
          </button>

          {/* CTA BUTTON */}
          <button
            className="
              px-5 py-1.5 
              rounded-full 
              text-sm font-medium 
              text-white

              bg-gradient-to-r from-[#764bff] via-[#9b6bff] to-[#5c4bff]
              shadow-[0_15px_40px_#764bff73]

              border border-white/20
            "
          >
            {t.getStarted} <span className="text-white/70 ml-1">{t.free}</span>
          </button>
        </div>

        {/* MOBILE LANGUAGE BUTTONS (NEXT TO MENU) */}
        <div className="md:hidden flex items-center gap-2">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}`}
              className={`
                px-2 py-1 rounded-full text-xs font-semibold
                border transition-all duration-200
                ${
                  locale === lang.code
                    ? "bg-white text-[#050816] border-white"
                    : "text-white border-white/30 hover:border-white"
                }
              `}
            >
              {lang.label}
            </Link>
          ))}

          {/* MOBILE MENU BUTTON */}
          <button
            className="text-white md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          ref={menuRef}
          className="
            mt-4 mx-auto max-w-6xl
            px-6 py-4 rounded-2xl

            bg-[rgba(70,70,80,0.35)]
            backdrop-blur-xl
            border border-white/10
            shadow-[0_4px_20px_rgba(0,0,0,0.25)]

            flex flex-col gap-4 text-white text-sm md:hidden
          "
        >
          <Link href="#" onClick={() => setOpen(false)}>{t.home}</Link>
          <Link href="#" onClick={() => setOpen(false)}>{t.services}</Link>
          <Link href="#" onClick={() => setOpen(false)}>{t.work}</Link>
          <Link href="#" onClick={() => setOpen(false)}>{t.reviews}</Link>
          <Link href="#" onClick={() => setOpen(false)}>{t.contact}</Link>

          <hr className="border-white/10" />

          <button className="w-full flex items-center justify-center gap-2 py-2 rounded-full bg-white/10 border border-white/20">
            <Phone className="h-4 w-4" /> {t.whatsapp}
          </button>
        </div>
      )}
    </header>
  );
}

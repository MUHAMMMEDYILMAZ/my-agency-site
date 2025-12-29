"use client";

import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();
  const isArabic = locale === "ar";

  const languages = [
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
  ];

  const switchLang = (newLang: string) => {
    const parts = pathname.split("/");
    parts[1] = newLang;
    return parts.join("/");
  };

  const t = isArabic
    ? {
        home: "الرئيسية",
        services: "الخدمات",
        reviews: "من نحن",
        contact: "تواصل معنا",
      }
    : {
        home: "Home",
        services: "Services",
        reviews: "About Us",
        contact: "Contact Us",
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
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-4 pt-4 backdrop-blur-xl"
    >
      <div
        className="
          relative mx-auto max-w-6xl
          flex items-center justify-between
          px-6 py-3
          rounded-full
          bg-[rgba(70,70,80,0.35)]
          backdrop-blur-xl
          border border-white/10
          shadow-[0_4px_20px_rgba(0,0,0,0.25)]
        "
      >
        {/* LOGO - Left Side */}
        <div className="flex-shrink-0 z-10">
          <Link href={`/${locale}`}>
            <Image
              src="/og-image12.png"
              alt="CodeAura Logo"
              width={80}
              height={30}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* DESKTOP NAV - ABSOLUTE CENTERED */}
      {/* DESKTOP NAV */}
{/* DESKTOP NAV */}
<nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-6">
  {[
    { href: `/${locale}`, label: t.home },
    { href: `/${locale}/services`, label: t.services },
    { href: `/${locale}/about`, label: t.reviews },
  ].map((item) => {
    const isActive = pathname === item.href;

    return (
     <Link
  key={item.href}
  href={item.href}
  className="relative group h-10 flex items-center justify-center px-2"
>
  <div
    className={`
      flex items-center justify-center h-full transition-colors leading-none
      text-white/85 hover:text-white
    `}
  >
    {item.label}
  </div>

  {/* الخط السفلي */}
  <span
    className={`
      absolute left-0 bottom-0 h-[2px] w-full rounded-full
      transition-all duration-300 ease-out
      ${isActive ? "bg-white opacity-100 scale-x-100" : "bg-white/0 opacity-0 scale-x-50"}
    `}
  />
</Link>
    );
  })}
</nav>

        {/* RIGHT SIDE (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4 z-10">
          {/* LANGUAGES */}
          <div className="flex items-center gap-2">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={switchLang(lang.code)}
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

          {/* CONTACT CTA (DESKTOP) */}
          <Link
            href={`/${locale}/contact`}
            className="
              group flex items-center gap-2
              px-5 py-1.5 rounded-full
              text-sm font-medium text-white
              bg-gradient-to-r from-[#764bff] via-[#9b6bff] to-[#5c4bff]
              shadow-[0_15px_40px_#764bff73]
              border border-white/20
              transition hover:opacity-90
            "
          >
            {t.contact}
            <ArrowRight
              className={`
                h-4 w-4 mt-0.5
                ${isArabic ? "rotate-180" : ""}
              `}
            />
          </Link>
        </div>

        {/* MOBILE RIGHT */}
        <div className="md:hidden flex items-center gap-2 z-10">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={switchLang(lang.code)}
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

          <button className="text-white" onClick={() => setOpen(!open)}>
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
          <Link href={`/${locale}`} onClick={() => setOpen(false)}>
            {t.home}
          </Link>
          <Link href={`/${locale}/services`} onClick={() => setOpen(false)}>
            {t.services}
          </Link>
          <Link href={`/${locale}/about`} onClick={() => setOpen(false)}>
            {t.reviews}
          </Link>

          <hr className="border-white/10" />

          {/* CONTACT BUTTON (MOBILE) - تم تعديل الألوان هنا */}
          <Link
            href={`/${locale}/contact`}
            onClick={() => setOpen(false)}
            className="
              w-full flex items-center justify-center gap-2 
              py-2 rounded-full 
              text-sm font-medium text-white
              bg-gradient-to-r from-[#764bff] via-[#9b6bff] to-[#5c4bff]
              shadow-[0_15px_40px_#764bff73]
              border border-white/20 
              transition hover:opacity-90
            "
          >
            {t.contact}
            <ArrowRight
              className={`h-4 w-4 mt-0.5 ${isArabic ? "rotate-180" : ""}`}
            />
          </Link>
        </div>
      )}
    </motion.header>
  );
}
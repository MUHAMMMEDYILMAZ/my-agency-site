"use client";

import Link from "next/link";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
// 👇 تم إزالة استيراد Cookies لأنه لم يعد مطلوباً هنا
import { type Locale } from "@/i18n-config";

export default function Header({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const isArabic = locale === "ar";

  const languages: { code: Locale; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
  ];

  // 👇 دالة جديدة تولد رابط الـ API الخاص بتغيير اللغة
  const getSwitchLink = (targetLang: string) => {
    // نرسل اللغة المطلوبة + المسار الحالي
    // نستخدم encodeURIComponent لضمان عدم كسر الرابط إذا كان يحتوي على رموز خاصة
    const currentPath = pathname || "/";
    return `/api/switch-lang?locale=${targetLang}&path=${encodeURIComponent(currentPath)}`;
  };

  const t = isArabic
    ? {
        home: "الرئيسية",
        services: "الخدمات",
        about: "من نحن",
        contact: "تواصل معنا",
      }
    : {
        home: "Home",
        services: "Services",
        about: "About Us",
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-4 pt-4"
    >
      <div
        className="
          relative mx-auto max-w-6xl
          flex items-center justify-between
          px-6 py-3
          rounded-full
          bg-[rgba(70,70,80,0.35)] backdrop-blur-xl
          border border-white/10
          shadow-[0_4px_20px_rgba(0,0,0,0.25)]
        "
      >
        {/* 1. LOGO */}
        <div className="flex-shrink-0 z-10">
          <Link href={`/${locale}`}>
            <Image
              src="/og-image12.png"
              alt="CodeAura Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-[50px] object-contain cursor-pointer hover:opacity-90 transition-opacity"
              priority
            />
          </Link>
        </div>

        {/* 2. DESKTOP NAV */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1">
          {[
            { href: `/${locale}`, label: t.home },
            { href: `/${locale}/services`, label: t.services },
            { href: `/${locale}/about`, label: t.about },
          ].map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== `/${locale}` && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative group h-9 px-4 flex items-center justify-center rounded-full transition-all"
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white/10 rounded-full" />
                )}

                <span
                  className={`
                    relative z-10 text-sm font-medium transition-colors
                    ${isActive ? "text-white" : "text-white/70 group-hover:text-white"}
                  `}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* 3. RIGHT SIDE (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4 z-10">
          <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 border border-white/10">
            {languages.map((lang) => (
              // 👇 نستخدم <a> بدلاً من Link لتغيير اللغة لضمان تحديث كامل للصفحة
              <a
                key={lang.code}
                href={getSwitchLink(lang.code)}
                className={`
                  px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer
                  ${
                    locale === lang.code
                      ? "bg-white text-black shadow-sm"
                      : "text-white/60 hover:text-white"
                  }
                `}
              >
                {lang.label}
              </a>
            ))}
          </div>

          <Link
            href={`/${locale}/contact`}
            className="
              group flex items-center gap-1.5
              px-5 py-2 rounded-full
              text-sm font-medium text-white
              bg-gradient-to-r from-[#764bff] via-[#9b6bff] to-[#5c4bff]
              shadow-[0_10px_20px_rgba(118,75,255,0.3)]
              border border-white/20
              transition hover:scale-105 hover:shadow-[0_10px_25px_rgba(118,75,255,0.5)]
            "
          >
            {t.contact}
            {isArabic ? (
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </Link>
        </div>

        {/* 4. MOBILE TOGGLE */}
        <div className="md:hidden flex items-center gap-3 z-10">
          {/* زر تغيير اللغة للموبايل */}
          <a
            href={getSwitchLink(isArabic ? "en" : "ar")}
            className="text-xs font-bold text-white border border-white/20 px-2 py-1 rounded-md hover:bg-white/10 transition"
          >
            {isArabic ? "EN" : "AR"}
          </a>

          <button
            className="text-white p-1 hover:bg-white/10 rounded-md transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* 5. MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              absolute left-0 right-0 mx-4 mt-2
              p-5 rounded-2xl
              bg-[rgba(70,70,80,0.35)] backdrop-blur-2xl
              border border-white/10
              shadow-2xl
              flex flex-col gap-2 text-white md:hidden
            "
          >
            {[
              { href: `/${locale}`, label: t.home },
              { href: `/${locale}/services`, label: t.services },
              { href: `/${locale}/about`, label: t.about },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  block px-4 py-3 rounded-xl text-sm font-medium transition-colors
                  ${pathname === item.href ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"}
                `}
              >
                {item.label}
              </Link>
            ))}

            <hr className="border-white/10 my-2" />

            <Link
              href={`/${locale}/contact`}
              onClick={() => setOpen(false)}
              className="
                w-full flex items-center justify-center gap-1.5
                py-3 rounded-xl
                text-sm font-bold text-white
                bg-gradient-to-r from-[#764bff] via-[#9b6bff] to-[#5c4bff]
                shadow-[0_10px_20px_rgba(118,75,255,0.3)]
                border border-white/20
                transition hover:opacity-90
              "
            >
              {t.contact}
              {isArabic ? (
                <ArrowLeft className="h-4 w-4" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
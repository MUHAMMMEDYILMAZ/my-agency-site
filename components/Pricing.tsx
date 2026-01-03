"use client";

import { Check } from "lucide-react";
import useReveal from "@/hooks/useReveal";
import Link from "next/link";

// --- 1. تعريف نوع البيانات ---
interface PlanItem {
  title: string;
  price: string;
  tag: string;
  buttonColor: string;
  features: string[];
}

// --- 2. مكون البطاقة المنفصل (يحتوي على الـ Hook والـ Logic) ---
function PricingCard({ 
  plan, 
  index, 
  locale, 
  t_demo, 
  t_whatYouGet 
}: { 
  plan: PlanItem; 
  index: number; 
  locale: string; 
  t_demo: string; 
  t_whatYouGet: string;
}) {
  // ✅ استدعاء الهوك هنا آمن وصحيح
  const { ref, visible } = useReveal();

  // تجهيز الرابط
  const planLink = `/${locale}/contact?plan=${encodeURIComponent(plan.title)}`;

  return (
    <div
      ref={ref}
      className={`
        relative group p-8 rounded-3xl
        bg-[#0b0b16]/70 backdrop-blur-xl
        border border-white/10
        shadow-[0_0_40px_rgba(0,0,0,0.35)]
        transition-all duration-300
        hover:scale-[1.03]
        hover:border-purple-400/20
        flex flex-col

        ${visible ? "animate-pricing" : "opacity-0 scale-[0.85]"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow */}
      <div
        className="
          absolute -inset-1 rounded-3xl opacity-0 
          bg-gradient-to-r from-purple-500/20 to-blue-500/20
          blur-xl transition duration-500 
          group-hover:opacity-40
        "
      />

      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-2 text-white">{plan.title}</h3>

        <div className="text-4xl font-bold text-white">
          {plan.price}
          <span className="text-sm text-white/40 ml-1">/{plan.tag}</span>
        </div>

        {/* زر الطلب */}
        <Link
          href={planLink}
          className={`
            block w-full text-center py-2 mt-6 rounded-full font-medium text-sm
            bg-gradient-to-r ${plan.buttonColor}
            shadow-[0_15px_40px_rgba(118,75,255,0.35)]
            text-white transition hover:opacity-90
          `}
        >
          {t_demo}
        </Link>

        <p className="text-xs text-white/50 mt-6 mb-3">{t_whatYouGet}</p>

        <div className="space-y-3 flex-grow">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-purple-300 mt-1 flex-shrink-0" />
              <span className="text-sm text-white/70">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- 3. المكون الرئيسي ---
export default function Pricing({ locale }: { locale: string }) {
  const isArabic = locale === "ar";

  const t = isArabic
    ? {
        badge: "• الأسعار •",
        title: "اختر الخطة المناسبة لعملك",
        demo: "اطلب الان",
        whatYouGet: "ماذا ستحصل",
        plans: [
          {
            title: "موقع صفحة واحدة",
            price: "$100",
            tag: "ابتداءً من",
            buttonColor: "from-purple-500 to-purple-600",
            features: [
              "تصميم احترافي لصفحة واحدة",
              "أداء سريع وواجهة مستخدم نظيفة",
              "هيكل محسّن لنتائج البحث",
              "دعم لمدة شهر",
              "استضافة + دومين مجاني لمدة سنة",
              "مراجعة مجانية بعد التسليم",
            ],
          },
          {
            title: "موقع تجاري",
            price: "$250",
            tag: "ابتداءً من",
            buttonColor: "from-purple-400 to-pink-500",
            features: [
              "3–7 صفحات مخصصة بالكامل",
              "واجهة مستخدم احترافية ومتجاوبة",
              "تحسين نتائج البحث مدمج",
              "نظام محتوى سهل الإدارة",
              "استضافة + دومين مجاني لمدة سنتين",
              "دعم لمدة 3 أشهر",
              "3 مراجعات مجانية",
            ],
          },
          {
            title: "متجر إلكتروني",
            price: "$800",
            tag: "ابتداءً من",
            buttonColor: "from-blue-500 to-purple-600",
            features: [
              "متجر إلكتروني كامل (Next.js + DB)",
              "سلة + تسجيل دخول العملاء",
              "ربط بوابات الدفع",
              "لوحة تحكم كاملة",
              "استضافة + دومين مجاني لمدة ثلاث سنوات",
              "تحسين نتائج البحث + أمان عالي",
              "دعم لمدة 6 أشهر",
              "مراجعة مجانية بعد الإطلاق",
            ],
          },
        ],
      }
    : {
        badge: "• Pricing •",
        title: "Choose the Right Plan for Your Business",
        demo: "Get in Touch",
        whatYouGet: "What you will get",
        plans: [
          {
            title: "Landing Page",
            price: "$100",
            tag: "Starting",
            buttonColor: "from-purple-500 to-purple-600",
            features: [
              "Single-page professional design",
              "Fast performance & clean UI",
              "Search Results optimized structure",
              "1 Month support included",
              "Free Hosting + Domain for 1 Year",
              "1 Free revision after delivery",
            ],
          },
          {
            title: "Business Website",
            price: "$250",
            tag: "Starting",
            buttonColor: "from-purple-400 to-pink-500",
            features: [
              "3–7 fully custom pages",
              "Premium responsive UI",
              "Search Results optimization included",
              "Admin-friendly content system",
              "Free Hosting + Domain for 2 Years",
              "3 Months support",
              "3 Free revisions",
            ],
          },
          {
            title: "E-Commerce Store",
            price: "$800",
            tag: "Starting",
            buttonColor: "from-blue-500 to-purple-600",
            features: [
              "Full e-commerce store (Next.js + DB)",
              "Cart, Checkout & User Accounts",
              "Payment gateways integration",
              "Admin dashboard included",
              "Free Hosting + Domain for 3 Years",
              "Advanced Search Optimization & Security",
              "6 Months support",
              "Free revision after launch",
            ],
          },
        ],
      };

  return (
    <section
      className="relative py-24 text-white overflow-x-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="text-center mb-16 px-4">
        <span className="px-4 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-purple-200">
          {t.badge}
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">{t.title}</h2>
      </div>

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {t.plans.map((plan, i) => (
          <PricingCard 
            key={i} 
            plan={plan} 
            index={i}
            locale={locale}
            t_demo={t.demo}
            t_whatYouGet={t.whatYouGet}
          />
        ))}
      </div>
    </section>
  );
}
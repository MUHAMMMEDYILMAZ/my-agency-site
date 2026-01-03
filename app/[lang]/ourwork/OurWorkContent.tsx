"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useReveal from "@/hooks/useReveal";
import { Code, Globe, Rocket, Smartphone, Loader2 } from "lucide-react";

// --- Sub-components (Internal) ---

function Header({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle: string;
  badge: string;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`text-center mb-20 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span className="px-4 py-1 text-xs rounded-full border border-purple-400/40 bg-white/10 text-purple-200">
        {badge}
      </span>
      <h1 className="mt-4 text-3xl sm:text-4xl font-semibold">{title}</h1>
      <p className="mt-2 text-white/60 max-w-2xl mx-auto text-sm">{subtitle}</p>
    </div>
  );
}

function ProjectsSlider({
  title,
  items,
}: {
  title: string;
  items: {
    title: string;
    img: string;
    link: string;
    tech: string[];
  }[];
}) {
  const { ref, visible } = useReveal();

  // Auto Slider Logic
  useEffect(() => {
    const container = document.getElementById("auto-slider");
    if (!container) return;

    let scrollAmount = 0;
    const autoScroll = setInterval(() => {
      // إذا وصلنا للنهاية نعود للبداية
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 1
      ) {
        scrollAmount = 0;
        container.scrollTo({ left: 0, behavior: "auto" });
      } else {
        scrollAmount += 1; // سرعة أبطأ وأنعم
        container.scrollLeft += 1;
      }
    }, 20);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 mb-24">
      <h2 className="text-xl font-semibold mb-8 text-purple-200 text-center">
        {title}
      </h2>

      <div
        id="auto-slider"
        ref={ref}
        className={`flex gap-6 overflow-x-auto pb-4 scrollbar-hide ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ scrollBehavior: "auto" }} // تغيير السلوك ليناسب الـ Interval
      >
        {items.map((p, i) => (
          <a
            key={i}
            href={p.link}
            className="
              min-w-[300px] md:min-w-[350px] bg-white/10 border border-white/10 backdrop-blur-xl 
              rounded-3xl overflow-hidden hover:scale-[1.02] transition duration-300
              flex-shrink-0
            "
          >
            {/* تأكد من وجود الصور في مجلد public أو استبدلها بصور حقيقية */}
            <div className="relative h-48 w-full bg-gray-800">
               {/* Placeholder للصورة في حال عدم وجودها */}
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")} 
              />
            </div>
            
            <div className="p-5">
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function TechSection({ title }: { title: string }) {
  const { ref, visible } = useReveal();

  const tech = [
    { name: "Next.js", icon: <Rocket className="w-8 h-8" /> },
    { name: "TypeScript", icon: <Code className="w-8 h-8" /> },
    { name: "SEO Optimization", icon: <Globe className="w-8 h-8" /> },
    { name: "Responsive UI", icon: <Smartphone className="w-8 h-8" /> },
  ];

  return (
    <div
      ref={ref}
      className={`max-w-5xl mx-auto px-6 mb-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-xl font-semibold text-center text-purple-200 mb-10">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {tech.map((t, i) => (
          <div
            key={i}
            className="
              bg-white/5 border border-white/10 p-6 rounded-2xl 
              text-center hover:bg-white/10 hover:-translate-y-1 transition duration-300
            "
          >
            <div className="flex justify-center mb-4 text-purple-400">
              {t.icon}
            </div>
            <p className="text-white/80 text-sm font-medium">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OtherProjects({
  title,
  items,
}: {
  title: string;
  items: { title: string; img: string }[];
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`max-w-6xl mx-auto px-6 mb-20 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-xl font-semibold mb-10 text-center text-purple-200">
        {title}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((p, i) => (
          <div
            key={i}
            className="
              bg-white/5 border border-white/10 backdrop-blur-xl 
              rounded-3xl overflow-hidden hover:scale-[1.03] transition duration-300
            "
          >
             <div className="relative h-48 w-full bg-gray-800">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-semibold text-white/90">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Main Component ---

export default function OurWorkContent({ lang }: { lang: string }) {
  const isArabic = lang === "ar";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
        <div className="min-h-screen bg-[#02030d] flex items-center justify-center">
            <Loader2 className="animate-spin text-purple-500 w-8 h-8"/>
        </div>
    );
  }

  const t = isArabic
    ? {
        badge: "• أعمالنا •",
        title: "مشاريع نفخر بصناعتها",
        subtitle:
          "نعمل على تطوير مواقع ومتاجر إلكترونية احترافية باستخدام أحدث التقنيات لضمان أفضل أداء وتجربة مستخدم.",
        recentProjects: "أحدث المشاريع",
        technologies: "التقنيات المستخدمة",
        moreWork: "مشاريع أخرى",
      }
    : {
        badge: "• Our Work •",
        title: "Projects We Are Proud Of",
        subtitle:
          "We build professional websites and ecommerce stores using modern technologies to ensure top performance and UX.",
        recentProjects: "Recent Projects",
        technologies: "Technologies We Use",
        moreWork: "More Projects",
      };

  // بيانات السلايدر (يمكنك تغيير الصور لاحقاً)
  const sliderProjects = [
    {
      title: isArabic ? "متجر ستائر إلكتروني" : "Curtains E-Commerce",
      img: "/work1.jpg", // تأكد من وضع صورة بهذا الاسم في مجلد public
      link: "#",
      tech: ["Next.js", "MongoDB", "Tailwind"],
    },
    {
      title: isArabic ? "موقع وكالة رقمية" : "Digital Agency Site",
      img: "/work2.jpg",
      link: "#",
      tech: ["React", "Framer Motion", "UI/UX"],
    },
    {
      title: isArabic ? "منصة خدمات عامة" : "Services Platform",
      img: "/work3.jpg",
      link: "#",
      tech: ["Next.js", "API", "Stripe"],
    },
    {
      title: isArabic ? "لوحة تحكم SaaS" : "SaaS Dashboard",
      img: "/work4.jpg",
      link: "#",
      tech: ["Vue.js", "Firebase", "Charts"],
    },
  ];

  // مشاريع أخرى
  const otherProjects = [
    { title: isArabic ? "تصميم صفحة هبوط" : "Landing Page Design", img: "/work4.jpg" },
    { title: isArabic ? "موقع مطعم" : "Restaurant Website", img: "/work5.jpg" },
    { title: isArabic ? "معرض أعمال شخصي" : "Portfolio Website", img: "/work6.jpg" },
  ];

  return (
    <section
      className="
        relative pt-32 pb-12 min-h-screen text-white
        bg-[#02030d] bg-gradient-to-br from-[#050316] via-[#09041f] to-[#02030d]
        before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:-z-10
      "
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Glow Background */}
      <div className="absolute -top-40 left-0 w-[480px] h-[480px] bg-purple-700/30 blur-[180px] -z-10"></div>

      <Header title={t.title} subtitle={t.subtitle} badge={t.badge} />
      <ProjectsSlider title={t.recentProjects} items={sliderProjects} />
      <TechSection title={t.technologies} />
      <OtherProjects title={t.moreWork} items={otherProjects} />
    </section>
  );
}
"use client";

import Image from "next/image";
import useReveal from "@/hooks/useReveal";

// --- 1. تعريف نوع البيانات (Typescript Interface) ---
interface ServiceItem {
  title: string;
  desc: string;
  img: string;
  glow: string;
}

// --- 2. مكون الكرت المنفصل (هنا نستخدم الهوك بأمان) ---
function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`
        relative group p-6 rounded-[32px]
        bg-[#0c0c17]/80 backdrop-blur-xl
        border border-white/5
        hover:border-purple-500/30
        shadow-[0_0_30px_rgba(0,0,0,0.2)]
        transition-all duration-500 ease-out
        hover:-translate-y-2
        flex flex-col h-full

        ${visible ? "animate-slide-in opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow Effect */}
      <div
        className={`
          absolute -inset-[1px] rounded-[32px] opacity-0 
          bg-gradient-to-b ${service.glow} to-transparent
          blur-lg transition duration-500 
          group-hover:opacity-100 pointer-events-none
        `}
      />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Image Container */}
        <div className="w-full h-48 mb-6 rounded-2xl bg-white/5 flex items-center justify-center overflow-hidden p-4 group-hover:bg-white/10 transition-colors">
          <Image
            src={service.img}
            alt={service.title} // ✅ SEO ممتاز: النص البديل هو عنوان الخدمة
            width={400}
            height={300}
            className="w-full h-full object-contain drop-shadow-2xl opacity-90 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="text-center flex-grow flex flex-col">
          {/* ✅ SEO: استخدام h3 للعناوين الفرعية ممتاز */}
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-white/60 leading-relaxed font-light">
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

// --- 3. المكون الرئيسي ---
export default function Services({ locale }: { locale: string }) {
  const isArabic = locale === "ar";

  const t = isArabic
    ? {
        badge: "• خدماتنا المتميزة •",
        title: "نبتكر حلولاً رقمية تقودك للقمة",
        subtitle:
          "لا نقدم مجرد كود، بل نبني أصولاً رقمية مصممة لزيادة المبيعات، تعزيز الثقة، وضمان تجربة مستخدم لا تُنسى.",
        list: [
          {
            title: "موقع صفحة واحدة (Landing Pages)",
            desc: "صفحات مصممة سيكولوجياً لتحويل الزوار إلى عملاء، مع سرعة تحميل فائقة تضمن عدم خسارة أي عميل محتمل.",
          },
          {
            title: "مواقع شركات تعزز الهوية",
            desc: "موقع رسمي متكامل يعكس احترافية علامتك التجارية، متجاوب مع جميع الشاشات وصديق لمحركات البحث (SEO).",
          },
          {
            title: "متاجر إلكترونية ذكية",
            desc: "ابنِ إمبراطوريتك التجارية بمتجر (Next.js) سريع، آمن، مع لوحة تحكم سلسة ونظام دفع متكامل لزيادة الأرباح.",
          },
          {
            title: "لوحات تحكم (Dashboards) مخصصة",
            desc: "راقب، حلل، وأدر عملك بذكاء. نصمم لك لوحات تحكم تعرض البيانات المعقدة ببساطة لتتخذ قراراتك بدقة.",
          },
          {
            title: "بنية تحتية و API قوية",
            desc: "نضمن استقرار تطبيقك تحت الضغط العالي ببناء خوادم (Backend) قوية ومحمية وقابلة للتوسع المستقبلي.",
          },
          {
            title: "حلول برمجية مخصصة",
            desc: "هل لديك فكرة فريدة؟ نحن هنا لتحويلها إلى واقع رقمي يلبي احتياجاتك الخاصة بدقة واحترافية.",
          },
        ],
      }
    : {
        badge: "Our Core Services",
        title: "Digital Solutions That Drive Growth",
        subtitle:
          "We don't just write code; we build digital assets designed to increase revenue, build trust, and deliver unforgettable user experiences.",
        list: [
          {
            title: "High-Converting Landing Pages",
            desc: "Psychologically designed pages built to turn visitors into leads, with lightning-fast speeds to ensure zero drop-offs.",
          },
          {
            title: "Corporate Identity Websites",
            desc: "A full-scale professional website that reflects your brand authority, fully responsive and SEO-optimized.",
          },
          {
            title: "Next-Gen E-Commerce Stores",
            desc: "Scale your business with a secure, high-speed Next.js store featuring seamless checkout and powerful inventory management.",
          },
          {
            title: "Custom Admin Dashboards",
            desc: "Track, analyze, and manage smartly. We build intuitive dashboards that simplify complex data for better decision-making.",
          },
          {
            title: "Robust API & Backend Architecture",
            desc: "Ensure stability under high traffic with secure, scalable Node.js backend systems built for future growth.",
          },
          {
            title: "Tailored Software Solutions",
            desc: "Got a unique idea? We're here to turn it into a precise, professional digital solution that meets your specific needs.",
          },
        ],
      };

  const services = t.list.map((item, index) => ({
    ...item,
    img: [
      "/services/Landing-Page.webp",
      "/services/Multi-Page-Business-Websites.jpg",
      "/services/E-Commerce-Store.jpg",
      "/services/Custom-Dashboards.png",
      "/services/API-Backend.webp",
      "/services/Custom-Solutions.jpg",
    ][index],
    glow: [
      "from-purple-500/20",
      "from-blue-500/20",
      "from-pink-500/20",
      "from-green-500/20",
      "from-yellow-500/20",
      "from-purple-400/20",
    ][index],
  }));

  return (
    <section
      className="
        relative w-full overflow-x-hidden
        py-24 text-white 
        bg-[#050816] 
        bg-[url('/services/stars.png')] bg-cover bg-center bg-no-repeat
        before:content-[''] before:absolute before:inset-0
        before:bg-[#050816cc] before:backdrop-blur-[1px] before:z-0
      "
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Title */}
      <div className="text-center mb-16 relative z-10 px-4">
        <span className="px-4 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-purple-500/30 text-purple-200 tracking-wide">
          {t.badge}
        </span>

        {/* ✅ SEO: عنوان القسم h2 ممتاز */}
        <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white/70 pb-2">
          {t.title}
        </h2>

        <p className="text-white/60 mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6 relative z-10">
        {services.map((service, i) => (
          // هنا نمرر البيانات للكرت الفرعي، وهو يتعامل مع الـ Hooks بداخله
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
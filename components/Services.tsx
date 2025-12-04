"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Services({ locale }: { locale: string }) {
  const isArabic = locale === "ar";

  const t = isArabic
    ? {
        badge: "• خدماتنا •",
        title: "حلول ويب احترافية",
        subtitle:
          "نطوّر مواقع حديثة، آمنة، وسريعة الأداء باستخدام أحدث التقنيات لضمان نجاح أعمالك.",
        list: [
          {
            title: "تطوير صفحات الهبوط",
            desc: "صفحات سريعة وعالية التحويل ببنية محسّنة وتجربة مستخدم سلسة.",
          },
          {
            title: "مواقع أعمال متعددة الصفحات",
            desc: "مواقع احترافية متجاوبة ومحسّنة للسيو لتقوية حضور علامتك.",
          },
          {
            title: "متجر إلكتروني (Next.js + MongoDB)",
            desc: "متاجر كاملة مع السلة والدفع ولوحة التحكم وتكاملات مرنة.",
          },
          {
            title: "لوحات تحكم مخصصة",
            desc: "لوحات إدارة مصممة خصيصًا مع صلاحيات وتحليلات وواجهة احترافية.",
          },
          {
            title: "API و Backend",
            desc: "بُنى خلفية قوية باستخدام Node.js مع أعلى مستويات الأمان.",
          },
          {
            title: "حلول برمجية مخصصة",
            desc: "أنظمة كاملة مصممة خصيصًا لتلبية احتياجات عملك بدقة.",
          },
        ],
      }
    : {
        badge: "• Services •",
        title: "Professional Web Solutions",
        subtitle:
          "We build modern, secure, high-performance web applications tailored for your business success.",
        list: [
          {
            title: "Landing Page Development",
            desc: "High-conversion landing pages built with fast, modern technologies.",
          },
          {
            title: "Multi-Page Business Websites",
            desc: "Responsive, SEO-optimized websites with premium UI and UX.",
          },
          {
            title: "E-Commerce Store (Next.js + MongoDB)",
            desc: "Full online stores with checkout, dashboard, and secure database.",
          },
          {
            title: "Custom Dashboards",
            desc: "Beautiful dashboards with charts, analytics, and user permissions.",
          },
          {
            title: "API & Backend Development",
            desc: "Scalable and secure backend systems built with Node.js.",
          },
          {
            title: "Custom Software Solutions",
            desc: "Complete systems designed and developed specifically for your needs.",
          },
        ],
      };

  // دمج الترجمة مع الصور و الـ glow
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

 const slideIn = {
  hidden: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.22,
    },
  },
};



  return (
    <section
      className="
        relative py-24 text-white
        bg-[#050816]
        bg-[url('/services/stars.png')]
        bg-cover bg-center bg-no-repeat
        before:content-['']
        before:absolute before:inset-0
        before:bg-[#050816cc]
        before:backdrop-blur-[1px]
        before:z-0
      "
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Section Title */}
      <div className="text-center mb-14 relative z-10">
        <span className="px-4 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-purple-200">
          {t.badge}
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">{t.title}</h2>

        <p className="text-white/60 mt-2 text-sm max-w-xl mx-auto px-3">
          {t.subtitle}
        </p>
      </div>

      {/* Cards Grid */}
      <motion.div
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={slideIn}
            className="
              relative group p-6 rounded-3xl
              bg-[#0c0c17]/60 backdrop-blur-xl
              border border-white/10
              shadow-[0_0_30px_rgba(0,0,0,0.35)]
              transition-all duration-300
              hover:scale-[1.02]
              hover:border-purple-400/20
            "
          >
            {/* Glow */}
            <div
              className={`
                absolute -inset-0.5 rounded-3xl opacity-0 
                bg-gradient-to-br ${service.glow} to-transparent
                blur-xl transition duration-500 
                group-hover:opacity-40
              `}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-full flex justify-center mb-6">
                <div className="w-[78%]">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="opacity-90 drop-shadow-[0_0_18px_rgba(0,0,0,0.4)]"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

              <p className="text-sm text-white/60 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

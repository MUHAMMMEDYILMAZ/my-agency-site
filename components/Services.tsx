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
          "مواقع حديثة، آمنة، وسريعة الأداء مصممة خصيصًا لنجاح أعمالك.",
        list: [
          {
            title: "تطوير صفحات الهبوط",
            desc: "صفحات هبوط عالية الأداء باستخدام Next.js و Tailwind مع تصميمات تفاعلية سلسة.",
          },
          {
            title: "مواقع أعمال متعددة الصفحات",
            desc: "مواقع احترافية متجاوبة ومحسّنة لمحركات البحث مع واجهة مستخدم مميزة.",
          },
          {
            title: "متجر إلكتروني (Next.js + MongoDB)",
            desc: "متاجر كاملة مع السلة والدفع ولوحة التحكم وقاعدة بيانات آمنة.",
          },
          {
            title: "لوحات تحكم مخصصة",
            desc: "لوحات إدارة متقدمة مع تحليلات ورسوم بيانية وصلاحيات مستخدمين.",
          },
          {
            title: "API و Backend (Node.js)",
            desc: "خدمات خلفية قوية وآمنة باستخدام Node.js وExpress وMongoDB.",
          },
          {
            title: "حلول مخصصة",
            desc: "أنظمة كاملة مبنية خصيصًا لتلبية احتياجات عملك.",
          },
        ],
      }
    : {
        badge: "• Services •",
        title: "Professional Web Solutions",
        subtitle:
          "Modern, secure, high-performing websites tailored for your business success.",
        list: [
          {
            title: "Landing Page Development",
            desc: "High-performance landing pages built using Next.js, Tailwind CSS, and smooth UI animations.",
          },
          {
            title: "Multi-Page Business Websites",
            desc: "Fully responsive and SEO-optimized business websites with premium UI.",
          },
          {
            title: "E-Commerce Store (Next.js + MongoDB)",
            desc: "Full online stores with cart, checkout, dashboard, and secure MongoDB database.",
          },
          {
            title: "Custom Dashboards",
            desc: "Admin dashboards with charts, analytics, authentication, and user roles.",
          },
          {
            title: "API & Backend (Node.js)",
            desc: "Powerful backend services using Node.js, Express, and MongoDB — secure and scalable.",
          },
          {
            title: "Custom Solutions",
            desc: "Systems fully designed and developed to match your business needs.",
          },
        ],
      };

  // دمج الترجمة مع الصور & الألوان
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
      "from-purple-500/20 to-transparent",
      "from-blue-500/20 to-transparent",
      "from-pink-500/20 to-transparent",
      "from-green-500/20 to-transparent",
      "from-yellow-500/20 to-transparent",
      "from-purple-400/20 to-transparent",
    ][index],
  }));

  // ⚡ حركة Swirl Animation
 const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
    rotate: -25,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1], // EaseOutExpo – متوافق 100%
    },
  },
} as const;


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
        className="relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6"
        initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.5 }}
transition={{ staggerChildren: 0.12 }}


      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
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
            {/* INNER BORDER */}
            <div
              className="
                absolute inset-1 rounded-2xl
                border border-blue-300/10
                transition-all duration-300
                pointer-events-none
                group-hover:border-blue-500/40
              "
            />

            {/* INNER SHADOW */}
            <div
              className="
                absolute inset-1 rounded-2xl
                shadow-[0_0_25px_rgba(60,120,255,0.08)]
                group-hover:shadow-[0_0_35px_rgba(60,120,255,0.2)]
                transition-all duration-300
              "
            />

            {/* NEON OUTER GLOW */}
            <div
              className={`
                absolute -inset-0.5 rounded-3xl opacity-0 
                bg-gradient-to-br ${service.glow}
                blur-xl transition duration-500 
                group-hover:opacity-40
              `}
            />

            {/* CONTENT */}
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

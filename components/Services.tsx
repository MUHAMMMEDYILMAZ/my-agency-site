"use client";

import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Landing Page Development",
      desc: "High-performance landing pages built using Next.js, Tailwind CSS, and smooth UI animations.",
      img: "/services/Landing-Page.webp",
      glow: "from-purple-500/20 to-transparent",
    },
    {
      title: "Multi-Page Business Websites",
      desc: "Fully responsive and SEO-optimized business websites with clean architecture and premium UI.",
      img: "/services/Multi-Page-Business-Websites.jpg",
      glow: "from-blue-500/20 to-transparent",
    },
    {
      title: "E-Commerce Store (Next.js + MongoDB)",
      desc: "Complete online stores with cart, checkout, dashboard, and secure MongoDB database.",
      img: "/services/E-Commerce-Store.jpg",
      glow: "from-pink-500/20 to-transparent",
    },
    {
      title: "Custom Dashboards",
      desc: "Admin dashboards with charts, analytics, authentication, user roles, and more.",
      img: "/services/Custom-Dashboards.png",
      glow: "from-green-500/20 to-transparent",
    },
    {
      title: "API & Backend (Node.js)",
      desc: "Powerful backend services using Node.js, Express, and MongoDB — secure and scalable.",
      img: "/services/API-Backend.webp",
      glow: "from-yellow-500/20 to-transparent",
    },
    {
      title: "Custom Solutions",
      desc: "Custom systems fully designed and developed to match your business needs.",
      img: "/services/Custom-Solutions.jpg",
      glow: "from-purple-400/20 to-transparent",
    },
  ];

  return (
    <section
      className="
    relative py-24 text-white
    
    bg-[#050816]          /* خلفية أساسية سوداء */
    bg-[url('/services/stars.png')] /* صورة النجوم */
    bg-cover bg-center bg-no-repeat

    /* طبقة تغميق فوق النجوم */
    before:content-['']
    before:absolute before:inset-0
    before:bg-[#050816cc]       /* أسود غامق شفاف */
    before:backdrop-blur-[1px]  /* دمج بسيط */
    before:z-0
  "
    >
      {/* Section Title */}
      <div className="text-center mb-14 relative z-10">
        <span className="px-4 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-purple-200">
          • Services •
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
          Professional Web Solutions
        </h2>

        <p className="text-white/60 mt-2 text-sm max-w-xl mx-auto">
          Modern, secure, and high-performing websites tailored for your business success.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {services.map((service, i) => (
          <div
            key={i}
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
          </div>
        ))}
      </div>
    </section>
  );
}

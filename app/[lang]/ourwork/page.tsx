"use client";

import React from "react";
import Image from "next/image";
import useReveal from "@/hooks/useReveal";
import { Code, Globe, Rocket, Smartphone } from "lucide-react";

export default function OurWorkPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = React.use(params);
  const isArabic = lang === "ar";

  const t = isArabic
    ? {
        badge: "• أعمالنا •",
        title: "مشاريع نفخر بصناعتها",
        subtitle:
          "نعمل على تطوير مواقع ومتاجر إلكترونية احترافية باستخدام أحدث التقنيات.",
        recentProjects: "أحدث أعمالنا",
        technologies: "التقنيات التي نستخدمها",
        moreWork: "مشاريع أخرى",
      }
    : {
        badge: "• Our Work •",
        title: "Projects We Are Proud Of",
        subtitle:
          "We build professional websites and ecommerce stores using modern technologies.",
        recentProjects: "Recent Projects",
        technologies: "Technologies We Use",
        moreWork: "More Projects",
      };

  // ********* PROJECTS SLIDER *********
  const sliderProjects: {
    title: string;
    img: string;
    link: string;
    tech: string[];
  }[] = [
    {
      title: isArabic ? "متجر ستائر إلكتروني" : "Curtains E-Commerce Store",
      img: "/work1.jpg",
      link: "#",
      tech: ["Next.js", "MongoDB", "Tailwind", "SEO"],
    },
    {
      title: isArabic ? "موقع وكالة رقمية" : "Digital Agency Website",
      img: "/work2.jpg",
      link: "#",
      tech: ["Next.js", "Typescript", "UI/UX"],
    },
    {
      title: isArabic ? "منصة خدمات" : "Services Platform",
      img: "/work3.jpg",
      link: "#",
      tech: ["Next.js", "API Integration", "CMS"],
    },
  ];

  // ********* OTHER PROJECTS *********
  const otherProjects: { title: string; img: string }[] = [
    { title: "Landing Page Design", img: "/work4.jpg" },
    { title: "Restaurant Website", img: "/work5.jpg" },
    { title: "Portfolio Website", img: "/work6.jpg" },
  ];

  return (
    <section
      className="
        relative py-32 min-h-screen text-white
        bg-[#02030d] bg-gradient-to-br from-[#050316] via-[#09041f] to-[#02030d]
        before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:-z-10
      "
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Glow */}
      <div className="absolute -top-40 left-0 w-[480px] h-[480px] bg-purple-700/30 blur-[180px] -z-10"></div>

      {/* HEADER */}
      <Header title={t.title} subtitle={t.subtitle} badge={t.badge} />

      {/* SLIDER */}
      <ProjectsSlider title={t.recentProjects} items={sliderProjects} />

      {/* TECH SECTION */}
      <TechSection title={t.technologies} />

      {/* OTHER PROJECTS */}
      <OtherProjects title={t.moreWork} items={otherProjects} />
    </section>
  );
}

/* -------------------- COMPONENTS ---------------------- */

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

  // AUTO SLIDER
  React.useEffect(() => {
    const container = document.getElementById("auto-slider");
    if (!container) return;

    let scrollAmount = 0;

    const autoScroll = setInterval(() => {
      if (container.scrollWidth - container.clientWidth === scrollAmount) {
        scrollAmount = 0;
      } else {
        scrollAmount += 2;
      }

      container.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 30);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 mb-24">
      <h2 className="text-xl font-semibold mb-8 text-purple-200 text-center">
        {title}
      </h2>

      <div
        id="auto-slider"
        ref={ref}
        className={`flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {items.map((p, i) => (
          <a
            key={i}
            href={p.link}
            className="
              min-w-[320px] bg-white/10 border border-white/10 backdrop-blur-xl 
              rounded-3xl overflow-hidden snap-center hover:scale-[1.02] transition
            "
          >
            <Image
              src={p.img}
              width={500}
              height={300}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold mb-2">{p.title}</h3>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-white/10 rounded-full text-purple-200"
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
    { name: "Next.js", icon: <Rocket /> },
    { name: "TypeScript", icon: <Code /> },
    { name: "SEO", icon: <Globe /> },
    { name: "Responsive UI", icon: <Smartphone /> },
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tech.map((t, i) => (
          <div
            key={i}
            className="
              bg-white/10 border border-white/10 p-6 rounded-2xl 
              text-center hover:scale-[1.05] transition
            "
          >
            <div className="flex justify-center mb-3 text-purple-300">
              {t.icon}
            </div>
            <p className="text-white/80 text-sm">{t.name}</p>
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
              bg-white/10 border border-white/10 backdrop-blur-xl 
              rounded-3xl overflow-hidden hover:scale-[1.03] transition
            "
          >
            <Image
              src={p.img}
              width={500}
              height={300}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="font-semibold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

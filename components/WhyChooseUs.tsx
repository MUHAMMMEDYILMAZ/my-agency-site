"use client";

import { CheckCircle, Zap, Search, Shield, Code2, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "High Performance Websites",
      desc: "We build ultra-fast websites using Next.js and modern rendering techniques to achieve top speed scores.",
      icon: <Zap className="w-6 h-6 text-yellow-300" />,
      glow: "from-yellow-400/20"
    },
    {
      title: "Advanced SEO Optimization",
      desc: "Your website is optimized for Google ranking, index speed, and Core Web Vitals to maximize traffic.",
      icon: <Search className="w-6 h-6 text-blue-300" />,
      glow: "from-blue-400/20"
    },
    {
      title: "Built With Strong Technologies",
      desc: "Next.js, Node.js, TailwindCSS, MongoDB — powerful, stable, and scalable technologies for long-term success.",
      icon: <Code2 className="w-6 h-6 text-purple-300" />,
      glow: "from-purple-400/20"
    },
    {
      title: "Security & Stability",
      desc: "We follow modern security practices and structure your backend to ensure maximum stability.",
      icon: <Shield className="w-6 h-6 text-red-300" />,
      glow: "from-red-400/20"
    },
    {
      title: "Post-Launch Support",
      desc: "We provide updates, fixes, improvements, and support even after delivering your project.",
      icon: <Headphones className="w-6 h-6 text-green-300" />,
      glow: "from-green-400/20"
    },
    {
      title: "Custom-Tailored Solutions",
      desc: "Every website is custom designed and built specifically for your business goals — not generic templates.",
      icon: <CheckCircle className="w-6 h-6 text-pink-300" />,
      glow: "from-pink-400/20"
    }
  ];

  return (
    <section className="relative py-24 text-white bg-[#050816]">

      {/* TITLE */}
      <div className="text-center mb-14">
        <span className="px-4 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-purple-200">
          • Why Choose Us •
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
          Why Clients Trust Our Web Development
        </h2>

        <p className="text-white/60 mt-2 text-sm max-w-xl mx-auto">
          We focus on performance, design quality, SEO strength, and long-term support — ensuring your website grows with your business.
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">

        {features.map((item, i) => (
          <div
            key={i}
            className="
              relative group p-6 rounded-2xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-[0_0_30px_rgba(0,0,0,0.4)]
              transition-all duration-300
              hover:scale-[1.03]
              hover:border-purple-400/30
            "
          >
            {/* Neon Glow */}
            <div
              className={`
                absolute -inset-0.5 rounded-2xl opacity-0 
                bg-gradient-to-br ${item.glow} to-transparent
                blur-xl transition duration-500 
                group-hover:opacity-40
              `}
            />

            <div className="relative z-10">
              <div className="mb-4 p-3 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

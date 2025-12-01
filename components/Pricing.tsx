"use client";

import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      title: "Landing Page",
      price: "$299",
      tag: "Starting",
      buttonColor: "from-purple-500 to-purple-600",
      features: [
        "Single-page professional design",
        "Fast performance & clean UI",
        "SEO optimized structure",
        "1 Month support included",
        "Free domain for 1 year",
        "1 Free revision after delivery",
      ],
    },
    {
      title: "Business Website",
      price: "$799",
      tag: "Starting",
      buttonColor: "from-purple-400 to-pink-500",
      features: [
        "3–7 fully custom pages",
        "Premium responsive UI",
        "SEO optimization included",
        "Admin-friendly content system",
        "Free Hosting + Domain",
        "3 Months support",
        "3 Free revisions",
      ],
    },
    {
      title: "E-Commerce Store",
      price: "$1299",
      tag: "Starting",
      buttonColor: "from-blue-500 to-purple-600",
      features: [
        "Full e-commerce store (Next.js + DB)",
        "Cart, Checkout & User Accounts",
        "Payment gateways integration",
        "Admin dashboard included",
        "Advanced SEO & Security",
        "6 Months support",
        "Free revision after launch",
      ],
    },
  ];

  return (
    <section className="relative py-24 text-white bg-gradient-to-b from-[#050816] via-[#050818] to-[#040411]">
      <div className="text-center mb-16">
        <span className="px-4 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-purple-200">
          • Pricing •
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
          Choose the Right Plan for Your Business
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="
              relative group p-8 rounded-3xl
              bg-[#0b0b16]/70 backdrop-blur-xl
              border border-white/10
              shadow-[0_0_40px_rgba(0,0,0,0.35)]
              transition-all duration-300
              hover:scale-[1.03]
              hover:border-purple-400/20
            "
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

            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>

              <div className="text-4xl font-bold">
                {plan.price}
                <span className="text-sm text-white/40 ml-1">/{plan.tag}</span>
              </div>

              <button
                className={`
                  w-full py-2 mt-6 rounded-full font-medium text-sm
                  bg-gradient-to-r ${plan.buttonColor}
                  shadow-[0_15px_40px_rgba(118,75,255,0.35)]
                `}
              >
                Book a Demo
              </button>

              <p className="text-xs text-white/50 mt-6 mb-3">What you will get</p>

              <div className="space-y-3">
                {plan.features.map((f, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-300 mt-1" />
                    <span className="text-sm text-white/70">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Mail, Phone, Loader2 } from "lucide-react";
import useReveal from "@/hooks/useReveal";
import { useSearchParams } from "next/navigation";

// --- المكون الداخلي للفورم ---
function ContactFormArea({ lang }: { lang: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error";
  } | null>(null);

  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan");
  const isArabic = lang === "ar";

  useEffect(() => {
    if (selectedPlan) {
      if (isArabic) {
        setMessage(`مرحباً، أود الاستفسار بخصوص خطة: ${selectedPlan}`);
      } else {
        setMessage(`Hello, I am interested in the plan: ${selectedPlan}`);
      }
    }
  }, [selectedPlan, isArabic]);

  const t = isArabic
    ? {
        badge: "• تواصل معنا •",
        title: "نحن هنا لمساعدتك",
        subtitle: "أرسل لنا رسالة وسنرد عليك خلال ساعات قليلة.",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        message: "اكتب رسالتك...",
        send: "إرسال الرسالة",
        contactInfo: "معلومات التواصل",
        success: "تم إرسال رسالتك بنجاح ✔",
        fail: "حدث خطأ، حاول مرة أخرى ❌",
        required: "يجب ملء جميع الحقول",
      }
    : {
        badge: "• Contact Us •",
        title: "We’re Here to Help",
        subtitle: "Send us a message and we will respond shortly.",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Write your message...",
        send: "Send Message",
        contactInfo: "Contact Information",
        success: "Your message has been sent ✔",
        fail: "Something went wrong ❌",
        required: "Please fill all fields",
      };

  async function sendForm() {
    if (!name || !email || !message) {
      setToast({ msg: t.required, type: "error" });
      return;
    }

    setToast(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, honey }),
      });

      setLoading(false);

      if (res.ok) {
        setToast({ msg: t.success, type: "success" });
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setHoney("");
      } else {
        setToast({ msg: t.fail, type: "error" });
      }
    } catch {
      setLoading(false);
      setToast({ msg: t.fail, type: "error" });
    }
  }

  const { ref: secRef, visible: secVisible } = useReveal();
  const { ref: formRef, visible: formVisible } = useReveal();
  const { ref: infoRef, visible: infoVisible } = useReveal();

  return (
    <section
      ref={secRef}
      dir={isArabic ? "rtl" : "ltr"}
      className={`
        relative w-full max-w-full overflow-x-hidden
        pt-32 pb-12 text-white min-h-screen
        bg-[#02030d] bg-gradient-to-br from-[#050316] via-[#09041f] to-[#02030d]
        before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:-z-10
        ${secVisible ? "animate-contact" : "opacity-0 translate-y-[20px]"}
      `}
    >
      <div 
        className="
          absolute -top-40 left-0 -z-10
          w-full max-w-[480px] h-[480px] 
          bg-purple-700/25 blur-[180px]
        " 
      />

      {/* Title */}
      <div className="text-center mb-16 px-4">
        <span className="px-4 py-1 text-xs rounded-full border border-purple-400/40 bg-white/10 text-purple-200">
          {t.badge}
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold">{t.title}</h1>
        <p className="mt-2 text-white/60 max-w-xl mx-auto text-sm">
          {t.subtitle}
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* === Form Section === */}
        <div
          ref={formRef}
          className={`bg-white/10 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)]
            ${
              formVisible
                ? "animate-contact-slide"
                : "opacity-0 translate-x-[40px]"
            }`}
        >
          {/* 1. Name Field */}
          {/* 👇 تم إضافة htmlFor */}
          <label htmlFor="name" className="text-sm text-white/70">{t.name}</label>
          <input
            /* 👇 تم إضافة id, name, autoComplete */
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 mb-4 p-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none transition"
          />

          {/* 2. Email Field */}
          <label htmlFor="email" className="text-sm text-white/70">{t.email}</label>
          <input
            /* 👇 تم إضافة id, name, autoComplete */
            id="email"
            name="email"
            autoComplete="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 mb-4 p-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none transition"
          />

          {/* 3. Phone Field */}
          <label htmlFor="phone" className="text-sm text-white/70">{t.phone}</label>
          <input
            /* 👇 تم إضافة id, name, autoComplete */
            id="phone"
            name="phone"
            autoComplete="tel"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full mt-1 mb-4 p-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none transition"
          />

          {/* 4. Message Field */}
          <label htmlFor="message" className="text-sm text-white/70">{t.message}</label>
          <textarea
            /* 👇 تم إضافة id, name */
            id="message"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none transition"
          />

          {/* Honeypot Field */}
          <input
            type="text"
            name="honey" // Added name
            value={honey}
            onChange={(e) => setHoney(e.target.value)}
            style={{ display: "none" }}
            autoComplete="off"
            tabIndex={-1} // Best practice to remove from tab order
          />

          <button
            onClick={sendForm}
            disabled={loading}
            className="
              cursor-pointer relative z-10  
              mt-4 group w-full overflow-hidden rounded-xl py-4 text-sm font-bold text-white shadow-2xl transition-all duration-300
              hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.6)]
              disabled:cursor-not-allowed disabled:opacity-70
            "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:scale-[1.05]" />
            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
            <div className="relative flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin text-white" />
                  <span>{isArabic ? "جاري الإرسال..." : "Sending..."}</span>
                </>
              ) : (
                <span>{t.send}</span>
              )}
            </div>
          </button>

          <div className="mt-4 h-6 flex items-center justify-center">
            {toast && (
              <p
                className={`text-sm font-medium animate-fade-in transition-colors duration-300 ${
                  toast.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {toast.msg}
              </p>
            )}
          </div>
        </div>

        {/* === Contact Info Section === */}
        <div
          ref={infoRef}
          className={`bg-white/5 border border-white/10 backdrop-blur-xl w-full py-8 px-6 rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.45)] text-center
            ${
              infoVisible
                ? "animate-contact-slide"
                : "opacity-0 translate-x-[40px]"
            }`}
        >
          <h2 className="text-xl font-semibold mb-6">{t.contactInfo}</h2>

          <a
            href="mailto:codeaura11@gmail.com"
            className="flex flex-col items-center gap-2 mb-6 group cursor-pointer"
          >
            <Mail className="w-7 h-7 text-purple-300 group-hover:text-purple-400 transition" />
            <span className="text-white/70 group-hover:text-white transition">
              codeaura11@gmail.com
            </span>
          </a>

          <a
            href="tel:+966535846431"
            className="flex flex-col items-center gap-2 mb-6 group cursor-pointer"
          >
            <Phone className="w-7 h-7 text-blue-300 group-hover:text-blue-400 transition" />
            <span className="text-white/70 group-hover:text-white transition">
              966535846431
            </span>
          </a>

          <a
            href="https://wa.me/966535846431"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-green-400 group-hover:text-green-300 transition"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471.148-.67.445-.197.297-.771.964-.941 1.162-.168.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="text-white/70 group-hover:text-white transition">
              WhatsApp Chat
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

// --- المكون الرئيسي الذي نقوم بتصديره ---
export default function ContactContent({ lang }: { lang: string }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#02030d] flex items-center justify-center text-white">
          <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
        </div>
      }
    >
      <ContactFormArea lang={lang} />
    </Suspense>
  );
}
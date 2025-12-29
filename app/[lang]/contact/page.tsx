"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import useReveal from "@/hooks/useReveal";
import { useSearchParams } from "next/navigation"; // 👈 1. استيراد هوك البحث

interface ContactPageProps {
  params: Promise<{ lang: string }>;
}

// مكون المحتوى الفعلي (لضمان عمل useSearchParams بشكل صحيح)
function ContactContent({ lang }: { lang: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  // 👈 2. جلب اسم الخطة من الرابط
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan");

  const isArabic = lang === "ar";

  // 👈 3. تعبئة الرسالة تلقائياً عند وجود خطة
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
      className={`relative py-32 text-white min-h-screen
        bg-[#02030d] bg-gradient-to-br from-[#050316] via-[#09041f] to-[#02030d]
        before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:-z-10
        ${secVisible ? "animate-contact" : "opacity-0 translate-y-[20px]"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Glow */}
      <div className="absolute -top-40 left-0 w-[480px] h-[480px] bg-purple-700/25 blur-[180px] -z-10"></div>

      {/* Title */}
      <div className="text-center mb-16 px-4">
        <span className="px-4 py-1 text-xs rounded-full border border-purple-400/40 bg-white/10 text-purple-200">
          {t.badge}
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold">{t.title}</h1>
        <p className="mt-2 text-white/60 max-w-xl mx-auto text-sm">{t.subtitle}</p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Form */}
        <div
          ref={formRef}
          className={`bg-white/10 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)]
            ${formVisible ? "animate-contact-slide" : "opacity-0 translate-x-[40px]"}`}
        >
          <label className="text-sm text-white/70">{t.name}</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 mb-4 p-3 rounded-xl bg-white/5 border border-white/10"
          />

          <label className="text-sm text-white/70">{t.email}</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 mb-4 p-3 rounded-xl bg-white/5 border border-white/10"
          />

          <label className="text-sm text-white/70">{t.phone}</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full mt-1 mb-4 p-3 rounded-xl bg-white/5 border border-white/10"
          />

          <label className="text-sm text-white/70">{t.message}</label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10"
          />

          {/* Honeypot */}
          <input
            type="text"
            value={honey}
            onChange={(e) => setHoney(e.target.value)}
            style={{ display: "none" }}
            autoComplete="off"
          />

          <button
            onClick={sendForm}
            disabled={loading}
            className="mt-6 w-full py-3 rounded-full text-sm font-semibold 
              bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 
              shadow-[0_10px_40px_rgba(118,75,255,0.45)]
              hover:scale-[1.02] transition"
          >
            {loading ? (isArabic ? "جارٍ الإرسال..." : "Sending...") : t.send}
          </button>

          {toast && (
            <p
              className={`mt-4 text-center text-sm animate-fade-in ${
                toast.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {toast.msg}
            </p>
          )}
        </div>

        {/* Contact Info */}
        <div
          ref={infoRef}
          className={`bg-white/5 border border-white/10 backdrop-blur-xl w-full py-8 px-6 rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.45)] text-center
            ${infoVisible ? "animate-contact-slide" : "opacity-0 translate-x-[40px]"}`}
        >
          <h2 className="text-xl font-semibold mb-6">{t.contactInfo}</h2>

          <a
            href="mailto:hello@nichegeeky.com"
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
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <MessageCircle className="w-7 h-7 text-green-300 group-hover:text-green-400 transition" />
            <span className="text-white/70 group-hover:text-white transition">
              WhatsApp Chat
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

// المكون الرئيسي (Wrapper)
export default function ContactPage({ params }: ContactPageProps) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    (async () => {
      const p = await params;
      setLang(p.lang);
    })();
  }, [params]);

  // استخدام Suspense ضروري مع useSearchParams لتجنب أخطاء البناء
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#02030d]" />}>
      <ContactContent lang={lang} />
    </Suspense>
  );
}
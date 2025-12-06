"use client";

import React, { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import useReveal from "@/hooks/useReveal";

export default function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = React.use(params);
  const isArabic = lang === "ar";

  const t = isArabic
    ? {
        badge: "• تواصل معنا •",
        title: "نحن هنا لمساعدتك",
        subtitle: "أرسل لنا رسالة وسنرد عليك خلال ساعات قليلة.",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
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
        message: "Write your message...",
        send: "Send Message",
        contactInfo: "Contact Information",
        success: "Your message has been sent ✔",
        fail: "Something went wrong ❌",
        required: "Please fill all fields",
      };

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const { ref: secRef, visible: secVisible } = useReveal();
  const { ref: formRef, visible: formVisible } = useReveal();
  const { ref: infoRef, visible: infoVisible } = useReveal();

  async function sendForm() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;
    const honey = (document.getElementById("website") as HTMLInputElement).value;

    if (!name || !email || !message) {
      setToast(t.required);
      return;
    }

    setToast("");
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, honey }),
    });

    setLoading(false);

    if (res.ok) {
      setToast(t.success);
    } else {
      setToast(t.fail);
    }
  }

  return (
    <section
      ref={secRef}
      className={`
        relative py-32 text-white min-h-screen
        bg-[#02030d] bg-gradient-to-br from-[#050316] via-[#09041f] to-[#02030d]
        before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:-z-10
        ${secVisible ? "animate-contact" : "opacity-0 translate-y-[20px]"}
      `}
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
     {/* Grid */}
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 
            items-center">   {/* ← يجعلهم بنفس الارتفاع ومحاذاة بالنص */}

  {/* FORM */}
  <div
    ref={formRef}
    className={`
      bg-white/10 border border-white/10 backdrop-blur-xl p-8 rounded-3xl 
      shadow-[0_0_30px_rgba(0,0,0,0.5)]
      ${formVisible ? "animate-contact-slide" : "opacity-0 translate-x-[40px]"}
    `}
  >
    <label className="text-sm text-white/70">{t.name}</label>
    <input id="name" className="w-full mt-1 mb-4 p-3 rounded-xl bg-white/5 border border-white/10" />

    <label className="text-sm text-white/70">{t.email}</label>
    <input id="email" className="w-full mt-1 mb-4 p-3 rounded-xl bg-white/5 border border-white/10" />

    <label className="text-sm text-white/70">{t.message}</label>
    <textarea id="message" rows={5} className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10"></textarea>

    {/* Honeypot */}
    <input id="website" type="text" className="hidden" autoComplete="off" />

    <button
      onClick={sendForm}
      disabled={loading}
      className="
        mt-6 w-full py-3 rounded-full text-sm font-semibold 
        bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 
        shadow-[0_10px_40px_rgba(118,75,255,0.45)]
        hover:scale-[1.02] transition
      "
    >
      {loading ? (isArabic ? "جارٍ الإرسال..." : "Sending...") : t.send}
    </button>

    {toast && (
      <p className="mt-4 text-center text-sm text-green-400 animate-fade-in">
        {toast}
      </p>
    )}
  </div>

  {/* CONTACT INFO — مربع صغير ويأخذ حجم المحتوى فقط */}
 {/* CONTACT INFO */}
<div
  ref={infoRef}
  className={`
    bg-white/5 border border-white/10 backdrop-blur-xl 
    w-full
    py-8 px-6
    rounded-3xl 
    shadow-[0_0_25px_rgba(0,0,0,0.45)]
    text-center
    ${infoVisible ? "animate-contact-slide" : "opacity-0 translate-x-[40px]"}
  `}
>
  <h2 className="text-xl font-semibold mb-6">{t.contactInfo}</h2>

  {/* Email */}
  <a
    href="mailto:hello@nichegeeky.com"
    className="flex flex-col items-center gap-2 mb-6 group cursor-pointer"
  >
    <Mail className="w-7 h-7 text-purple-300 group-hover:text-purple-400 transition" />
    <span className="text-white/70 group-hover:text-white transition">
      hello@nichegeeky.com
    </span>
  </a>

  {/* Phone */}
  <a
    href="tel:+966551234567"
    className="flex flex-col items-center gap-2 mb-6 group cursor-pointer"
  >
    <Phone className="w-7 h-7 text-blue-300 group-hover:text-blue-400 transition" />
    <span className="text-white/70 group-hover:text-white transition">
      +966 55 123 4567
    </span>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/966551234567"
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

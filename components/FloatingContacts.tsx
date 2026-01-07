"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"; // 👈 استيراد لمعرفة اللغة الحالية

export default function FloatingContacts() {
  // 👇 ضع أرقامك هنا
  const phoneNumber = "+966535846431"; 
  const whatsappNumber = "966535846431"; 

  // 1️⃣ معرفة اللغة الحالية من الرابط
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  // 2️⃣ تحديد الاتجاه بناءً على اللغة
  // في العربية (RTL) نفضل عادة أن تكون الأدوات على اليسار (عكس اتجاه القراءة) لعدم الإزعاج
  // في الإنجليزية (LTR) تكون على اليمين
  const positionClass = isArabic ? "left-6" : "right-6";

  // إعدادات الحركة (كما تم إصلاحها سابقاً)
  const springConfig = { type: "spring", stiffness: 260, damping: 20 } as const;

  return (
    <div className={`fixed bottom-6 ${positionClass} z-50 flex flex-col gap-5 transition-all duration-500`}>
      
      {/* --- زر الواتساب --- */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        // الحركة عند التحميل: يبدأ صغيراً ومخفياً ثم يظهر
        initial={{ scale: 0, opacity: 0, y: 50 }} 
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 1, ...springConfig }} // تأخير 1 ثانية ليعطي مجال للموقع يتحمل
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="
          relative group flex items-center justify-center w-16 h-16 rounded-full
          bg-gradient-to-tr from-cyan-600 to-blue-500
          shadow-[0_0_30px_rgba(6,182,212,0.5)]
          border border-cyan-400/30 backdrop-blur-xl
          hover:shadow-[0_0_45px_rgba(6,182,212,0.7)]
          hover:border-cyan-300/50
          transition-all duration-500
        "
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-cyan-400/30 opacity-0 animate-ping group-hover:opacity-30 duration-1000" />
        <MessageCircle className="w-7 h-7 text-white stroke-[1.5px]" />
      </motion.a>

      {/* --- زر الاتصال --- */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ scale: 0, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 1.1, ...springConfig }} // يظهر بعد الواتساب بجزء من الثانية
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        className="
          relative group flex items-center justify-center w-16 h-16 rounded-full
          bg-gradient-to-tr from-[#6a11cb] to-[#2575fc]
          shadow-[0_0_30px_rgba(118,75,255,0.6)]
          border border-[#9b6bff]/30 backdrop-blur-xl
          hover:shadow-[0_0_45px_rgba(118,75,255,0.8)]
          hover:border-[#9b6bff]/50
          transition-all duration-500
        "
        aria-label="Call Us"
      >
        <span className="absolute -inset-1 rounded-full bg-[#9b6bff]/30 opacity-0 animate-ping group-hover:opacity-30 duration-1000" />
        <Phone className="w-7 h-7 text-white stroke-[1.5px]" />
      </motion.a>
      
    </div>
  );
}
"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import useReveal from "@/hooks/useReveal";

// --- 1. مكون السؤال المنفصل (لإضافة تأثير الظهور useReveal) ---
function FAQItem({ 
  item, 
  index, 
  isOpen, 
  isClosing, 
  toggle 
}: { 
  item: { q: string; a: string }; 
  index: number; 
  isOpen: boolean; 
  isClosing: boolean; 
  toggle: () => void;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      onClick={toggle}
      className={`
        rounded-3xl p-6 cursor-pointer transition-all duration-300
        bg-[#0b0b16]/70 border border-white/10 
        hover:border-purple-400/20
        ${isOpen ? "shadow-[0_0_30px_rgba(120,75,255,0.25)] border-purple-500/30" : ""}
        
        ${visible ? "animate-slide-up opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Question Header */}
      <div className="flex justify-between items-center select-none">
        <h3 className={`text-lg font-medium transition-colors ${isOpen ? "text-purple-200" : "text-white"}`}>
          {item.q}
        </h3>

        <div
          className={`
            w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4
            transition-all duration-300 border border-white/10
            ${isOpen ? "bg-purple-600 rotate-180 border-purple-500" : "bg-white/5"}
          `}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-white" />
          )}
        </div>
      </div>

      {/* Answer Content */}
      {/* ملاحظة: نستخدم شرط العرض بناءً على حالة الفتح أو حالة الإغلاق الحالية */}
      {(isOpen || isClosing) && (
        <div className="overflow-hidden">
          <p
            className={`
              mt-4 text-white/70 leading-relaxed text-sm sm:text-base border-t border-white/5 pt-4
              ${isOpen ? "faq-animate-in" : ""}
              ${isClosing ? "faq-animate-out" : ""}
            `}
          >
            {item.a}
          </p>
        </div>
      )}
    </div>
  );
}

// --- 2. المكون الرئيسي ---
export default function FAQ({ locale }: { locale: string }) {
  const isArabic = locale === "ar";

  const t = isArabic
    ? {
        badge: "• الأسئلة الشائعة •",
        title: "الأسئلة الأكثر تكراراً",
        faqs: [
          { q: "لماذا يجب أن يكون لعملك موقع إلكتروني؟", a: "وجود موقع احترافي يعزز ثقة العملاء، يزيد قابلية الوصول لمنتجك 24/7، ويساعدك على جذب عملاء جدد باستمرار." },
          { q: "كيف يساعد الموقع في زيادة المبيعات؟", a: "من خلال صفحات محسّنة وتجربة مستخدم ممتازة، يمكن رفع معدل التحويل بشكل كبير وزيادة المبيعات." },
          { q: "ما التقنيات المستخدمة لتطوير المواقع؟", a: "نستخدم Next.js، React، TailwindCSS، Node.js و MongoDB لضمان الجودة والسرعة والأمان." },
          { q: "هل أستطيع تعديل الموقع لاحقاً؟", a: "نعم، تحصل على لوحة تحكم تسهّل عليك تعديل المحتوى والصور والنصوص." },
          { q: "هل يوجد دعم بعد التسليم؟", a: "نعم، حسب الباقة تحصل على دعم مجاني من 1 إلى 6 أشهر." },
          { q: "هل الموقع مجهّز للـ SEO؟", a: "كل موقع يتم بناؤه وفق قواعد SEO أساسية لضمان ظهور أفضل في نتائج البحث." },
        ],
      }
    : {
        badge: "• FAQ •",
        title: "Frequently Asked Questions",
        faqs: [
          { q: "Why does your business need a website?", a: "A professional website builds trust, increases visibility 24/7, and helps attract new customers consistently." },
          { q: "How can a website increase sales?", a: "With optimized pages and great UX, conversions and sales increase significantly." },
          { q: "What technologies are used?", a: "We use Next.js, React, TailwindCSS, Node.js and MongoDB for speed and security." },
          { q: "Can I edit the website later?", a: "Yes! You get a dashboard to update text, images, and content anytime." },
          { q: "Is there support after delivery?", a: "Yes, depending on your package, you get support from 1 to 6 months." },
          { q: "Is the website SEO-ready?", a: "All websites are built with core SEO structure to help ranking." },
        ],
      };

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [closingIndex, setClosingIndex] = useState<number | null>(null);

  const toggleFAQ = (i: number) => {
    if (openIndex === i) {
      // إغلاق العنصر المفتوح حالياً
      setClosingIndex(i);
      setOpenIndex(null);
      setTimeout(() => setClosingIndex(null), 300); // نفس مدة الـ Animation في CSS
    } else {
      // فتح عنصر جديد (وإغلاق القديم فوراً)
      setClosingIndex(null);
      setOpenIndex(i);
    }
  };

  return (
    <section
      className="py-24 text-white bg-gradient-to-b from-[#050816] via-[#050818] to-[#040411] overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="text-center mb-16 px-4">
        <span className="px-4 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-purple-200">
          {t.badge}
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">{t.title}</h2>
      </div>

      <div className="max-w-3xl mx-auto px-6 space-y-4">
        {t.faqs.map((item, i) => (
          <FAQItem 
            key={i} 
            item={item} 
            index={i} 
            isOpen={openIndex === i}
            isClosing={closingIndex === i}
            toggle={() => toggleFAQ(i)}
          />
        ))}
      </div>
    </section>
  );
}
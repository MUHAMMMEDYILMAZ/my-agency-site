"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "لماذا يجب أن يكون لعملك موقع إلكتروني؟",
      a: "وجود موقع احترافي يعزز ثقة العملاء، يزيد قابلية الوصول لمنتجك 24/7، ويساعدك على جذب عملاء جدد بطريقة مستمرة.",
    },
    {
      q: "كيف يساعد الموقع في زيادة المبيعات؟",
      a: "من خلال صفحات مُحسّنة ومحتوى مقنع وتجربة مستخدم ممتازة، يمكن رفع معدل التحويل بشكل كبير وزيادة المبيعات.",
    },
    {
      q: "ما التقنيات التي يتم استخدامها في تطوير المواقع؟",
      a: "أستخدم تقنيات Next.js، React، Node.js، Tailwind CSS و MongoDB لضمان سرعة وأمان وجودة عالية.",
    },
    {
      q: "هل أستطيع تعديل الموقع لاحقاً؟",
      a: "نعم، تحصل على لوحة إدارة بسيطة تساعدك على تعديل النصوص والصور والمحتوى بسهولة.",
    },
    {
      q: "هل يوجد دعم بعد تسليم الموقع؟",
      a: "نعم، حسب الباقة المقدمة، تحصل على دعم مجاني لمدة تتراوح بين 1 إلى 6 أشهر.",
    },
    {
      q: "هل الموقع مجهز للـ SEO؟",
      a: "كل موقع يتم بناؤه بخطة SEO أساسية لضمان ظهور أفضل في نتائج البحث وتحسين سرعة الموقع.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 text-white bg-gradient-to-b from-[#050816] via-[#050818] to-[#040411]">
      <div className="text-center mb-16">
        <span className="px-4 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-purple-200">
          • FAQ •
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-6">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className={`
                rounded-3xl p-6 cursor-pointer transition-all duration-300
                bg-[#0b0b16]/70 border border-white/10 
                hover:border-purple-400/20
                ${isOpen ? "shadow-[0_0_30px_rgba(120,75,255,0.25)]" : ""}
              `}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {/* Question Row */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{item.q}</h3>

                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${isOpen ? "bg-purple-600" : "bg-white/10"}
                  `}
                >
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>

              {/* Answer */}
              {isOpen && (
                <p className="mt-4 text-white/70 leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

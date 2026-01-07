"use client";

import React, { useState, useRef, useEffect } from "react";
// ✅ تأكدنا من وجود Sparkles في الاستيراد
import { X, Send, Bot, Loader2, User, Sparkles, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const myPhoneNumber = "966535846431"; 

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("bot-is-open");
    } else {
      document.body.classList.remove("bot-is-open");
    }
    return () => document.body.classList.remove("bot-is-open");
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        if (
          chatContainerRef.current && 
          !chatContainerRef.current.contains(event.target as Node) &&
          toggleButtonRef.current &&
          !toggleButtonRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");
  
  const contentDir = isArabic ? "rtl" : "ltr";

  const t = {
    welcome: isArabic 
      ? `أهلاً بك! يسعدنا تواصلك معنا. نحن CodeAura، وكالة تطوير ويب متخصصة في بناء محركات إيرادات ومواقع ويب عالية الأداء مُحسّنة لمحركات البحث.

هل لديك فكرة مشروع ويب في ذهنك؟ يمكننا مساعدتك في تحويلها إلى واقع ملموس. لدينا خطط متنوعة تناسب مختلف الاحتياجات والميزانيات، بدءًا من صفحات الهبوط البسيطة وصولًا إلى المتاجر الإلكترونية المتطورة.

إذا كنت بحاجة إلى مساعدة في تحديد الخطة الأنسب لك أو لديك أي أسئلة حول خدماتنا، فلا تتردد في التواصل معنا عبر الواتساب:||WA_LINK||https://wa.me/${myPhoneNumber}?text=مرحباً، أريد الاستفسار عن خدمات CodeAura`
      
      : `Welcome to CodeAura! We are a specialized web development agency building high-performance, revenue-generating websites optimized for SEO.

Do you have a project in mind? We can help turn it into reality. We offer various plans to suit different needs and budgets, from simple landing pages to advanced e-commerce stores.

If you need help choosing the right plan or have any questions, feel free to contact us via WhatsApp:||WA_LINK||https://wa.me/${myPhoneNumber}?text=Hi, I am interested in CodeAura services`,
    
    title: isArabic ? "المساعد الذكي" : "AI Assistant",
    placeholder: isArabic ? "اكتب رسالتك هنا..." : "Type your message...",
    error: isArabic ? "عذراً، حدث خطأ." : "Sorry, an error occurred.",
    whatsappBtn: isArabic ? "تواصل معنا عبر واتساب" : "Chat on WhatsApp",
  };

  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);

  useEffect(() => {
    setMessages([{ role: "bot", text: t.welcome }]);
  }, [isArabic]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => { scrollToBottom(); }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", text: t.error }]);
    } finally {
      setLoading(false);
    }
  };

  const renderMessageContent = (text: string) => {
    if (text.includes("||WA_LINK||")) {
      const parts = text.split("||WA_LINK||");
      const messageContent = parts[0];
      const whatsappLink = parts[1]?.trim();

      return (
        <div className="flex flex-col gap-3">
          <span className="whitespace-pre-wrap leading-relaxed">{messageContent}</span>
          {whatsappLink && (
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full mt-1 px-4 py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl shadow-md transition-transform transform hover:scale-[1.02] active:scale-95 no-underline"
            >
              <MessageCircle size={20} fill="white" className="text-white" />
              <span>{t.whatsappBtn}</span>
            </a>
          )}
        </div>
      );
    }
    return <span className="whitespace-pre-wrap">{text}</span>;
  };

  const alignmentClass = isArabic ? "right-6 items-end" : "left-6 items-start";

  return (
    <div 
      dir="ltr" 
      className={`fixed bottom-6 ${alignmentClass} z-50 flex flex-col gap-4 font-sans transition-all duration-500`}
    >
      {/* --- نافذة المحادثة --- */}
      {isOpen && (
        <div 
          ref={chatContainerRef}
          dir={contentDir}
          className={`
            w-[90vw] md:w-[380px] h-[500px] max-h-[80vh]
            bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10
            rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col
            animate-in fade-in slide-in-from-bottom-5 duration-300
            ${isArabic ? "origin-bottom-right" : "origin-bottom-left"}
          `}
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative p-2 bg-white/5 rounded-xl border border-white/10">
                {/* أبقيت أيقونة البوت هنا لأنها مناسبة كصورة شخصية */}
                <Bot size={20} className="text-purple-300" />
                {/* أيقونة بريق صغيرة للتزيين */}
                <Sparkles size={10} className="absolute -top-1 -right-1 text-yellow-300 animate-pulse" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm tracking-wide">{t.title}</span>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              aria-label={isArabic ? "إغلاق" : "Close"}
              className="text-white/40 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-gradient-to-b from-transparent to-purple-900/5">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${msg.role === "user" ? "bg-white/10 border-white/10" : "bg-purple-600/20 border-purple-500/30 text-purple-300"}`}>
                  {msg.role === "user" ? <User size={14} /> : <Bot size={16} />}
                </div>
                <div className={`p-3.5 rounded-2xl text-sm leading-relaxed max-w-[85%] shadow-sm ${msg.role === "user" ? "bg-white text-black rounded-tr-none" : "bg-[#1a1a1a] border border-white/5 text-gray-200 rounded-tl-none"}`}>
                  {renderMessageContent(msg.text)}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center border border-purple-500/30">
                  <Bot size={16} className="text-purple-300" />
                </div>
                <div className="bg-[#1a1a1a] px-4 py-3 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin text-purple-400" />
                  <span className="text-xs text-white/40">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-black/40 border-t border-white/10 backdrop-blur-sm">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                className={`flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/40 focus:bg-white/10 transition ${isArabic ? "text-right" : "text-left"}`}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label={isArabic ? "إرسال الرسالة" : "Send message"}
                className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white p-3 rounded-xl transition-all shadow-lg active:scale-95"
              >
                {isArabic ? <Send size={18} className="rotate-180" /> : <Send size={18} />}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        ref={toggleButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={
          isOpen 
            ? (isArabic ? "إغلاق المحادثة" : "Close chat") 
            : (isArabic ? "فتح المساعد الذكي" : "Open AI Assistant")
        }
        className={`
          group relative flex items-center justify-center w-14 h-14 rounded-full 
          backdrop-blur-md border shadow-2xl z-50
          transition-all duration-500 hover:scale-105 active:scale-95
          ${isOpen 
            ? "bg-[#121212] border-white/20 rotate-90" 
            : "bg-gradient-to-tr from-purple-700 to-blue-600 border-white/10 hover:shadow-[0_0_35px_rgba(120,50,255,0.6)]"}
        `}
      >
        {!isOpen && <span className="absolute inset-0 rounded-full bg-purple-500 opacity-20 animate-ping" />}
        {isOpen ? (
           <X className="text-white/80 w-6 h-6" />
        ) : (
           // ✅ تم التعديل هنا: استبدال BrainCircuit بـ Sparkles
           // أضفنا fill="currentColor" لتصبح الأيقونة ممتلئة وليست فقط خطوط
           <Sparkles className="text-white w-7 h-7 group-hover:animate-pulse" fill="currentColor" />
        )}
      </button>
    </div>
  );
}
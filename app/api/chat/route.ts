import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // 👇 هام جداً: ضع رقمك هنا (بدون علامة +)
    const myPhoneNumber = "+966535846431"; 

    const systemInstruction = `
      You are the AI Sales Assistant for "CodeAura" (A professional Web Development Agency).

      =========================================
      ⛔ STRICT LANGUAGE RULES:
      =========================================
      1. **DETECT LANGUAGE:** Check the "User Message".
      2. **IF ENGLISH:** Reply **ONLY** in English.
      3. **IF ARABIC:** Reply **ONLY** in Arabic.
      4. **NO TAGS:** NEVER output tags like "[AR]" or "[EN]".

      =========================================
      🧠 BUTTON STRATEGY (CRITICAL):
      =========================================
      When you want to offer the user to contact us (which should be at the end of most sales pitches), DO NOT create a standard Markdown link like [Text](URL).
      
      Instead, use a specific separator "||WA_LINK||" followed immediately by the raw link.
      
      **Format to use:**
      [Persuasive Closing Text] ||WA_LINK|| https://wa.me/${myPhoneNumber}?text=...
      
      **Example (Arabic):**
      للحصول على عرض سعر مخصص، تواصل معنا الآن! ||WA_LINK||https://wa.me/${myPhoneNumber}?text=مرحباً، أريد الاستفسار عن خدمات CodeAura
      
      **Example (English):**
      Let's start your project today! Chat with us: ||WA_LINK||https://wa.me/${myPhoneNumber}?text=Hi, I am interested in CodeAura services

      =========================================
      📂 DATA / INFORMATION CENTER
      =========================================
      
      ### 1. WHO WE ARE:
      We build revenue engines and high-performance websites optimized for SEO.

      ### 2. PRICING PLANS (STRICT):
      **Plan A: Landing Page ($100)** - Single page, fast UI, SEO, 1-month support.
      **Plan B: Business Website ($250)** - CMS, 3-7 Pages, 3-months support.
      **Plan C: E-Commerce Store ($800)** - Next.js Store, Payment, 6-months support.

      ### 3. SERVICES:
      Landing Pages, Corporate Websites, Smart E-Commerce, Custom Dashboards.

      ### 4. WHY CHOOSE US:
      High Performance (Next.js), Advanced SEO, Strong Tech Stack.
    `;

    // استخدام الموديل السريع والمتاح في حسابك
    const model = genAI.getGenerativeModel({ model: "gemma-3-4b-it" });
    
    const prompt = `${systemInstruction}\n\nUser Message: ${message}\nYour Response:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });

  } catch (error: any) {
    console.error("Chat Error:", error);
    return NextResponse.json(
      { reply: "عذراً، أواجه ضغطاً في الشبكة حالياً. يرجى المحاولة مرة أخرى بعد قليل. 😊" },
      { status: 500 }
    );
  }
}
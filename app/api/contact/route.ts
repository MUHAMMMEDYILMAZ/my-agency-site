import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, phone, honey } = await req.json();

    // 🧅 Honeypot (الحماية من السبان)
    if (honey && honey.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    // التحقق من الحقول الأساسية
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const now = new Date().toLocaleString();

    // 1️⃣ إيميل لك أنت (صاحب الموقع)
    await resend.emails.send({
      // 👇 التعديل الأول: استخدمنا info@codeauraweb.com
      from: "CodeAura Website <info@codeauraweb.com>", 
      to: "codeaura11@gmail.com", 
      replyTo: email, 
      subject: `📩 رسالة جديدة من: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6d28d9;">رسالة تواصل جديدة</h2>
          <p>لقد استلمت رسالة جديدة من نموذج التواصل في الموقع.</p>
          <hr />
          <p><strong>الاسم:</strong> ${name}</p>
          <p><strong>الإيميل:</strong> ${email}</p>
          <p><strong>رقم الهاتف:</strong> ${phone || "غير متوفر"}</p>
          <p><strong>تاريخ الإرسال:</strong> ${now}</p>
          <br />
          <p><strong>نص الرسالة:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #6d28d9;">
            ${message}
          </blockquote>
        </div>
      `,
    });

    // 2️⃣ إيميل تأكيد للعميل (المستخدم)
    await resend.emails.send({
      // 👇 التعديل الثاني: استخدمنا نفس الإيميل الرسمي
      from: "CodeAura Support <info@codeauraweb.com>",
      to: email, 
      subject: "تم استلام رسالتك بنجاح ✔",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6d28d9;">مرحباً ${name}!</h2>
          <p>شكراً لتواصلك معنا. لقد تلقينا رسالتك وسنقوم بالرد عليك في أقرب وقت ممكن.</p>
          
          <div style="background: #f4f4f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="margin-top: 0;">تفاصيل رسالتك:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>الاسم:</strong> ${name}</li>
              <li><strong>الإيميل:</strong> ${email}</li>
              <li><strong>رقم الهاتف:</strong> ${phone || "-"}</li>
            </ul>
            <p><strong>الرسالة:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <br/>
          <p style="font-size: 12px; color: #888;">— CodeAura Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
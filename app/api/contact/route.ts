import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, honey } = await req.json();

    // 🧅 HONEYPOT — منع البوتات
    if (honey && honey.trim() !== "") {
      return NextResponse.json({ success: true }); // نتجاهله بدون خطأ
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    // 🔵 1) إرسال الإيميل إليك أنت (صاحب الموقع)
    await resend.emails.send({
      from: "CodeAura Contact <hamodeejamos@gmail.com>",
      to: "hamodeejamos@gmail.com",
      subject: "📩 New Contact Form Message",
      html: `
        <h2>New message from your website:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 🟢 2) إرسال رسالة تأكيد للعميل
    await resend.emails.send({
      from: "CodeAura <hamodeejamos@gmail.com>",
      to: email,
      subject: "Your message was received ✔",
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>Your message has been received. Our team will reply shortly.</p>
        <br/>
        <p>— CodeAura Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

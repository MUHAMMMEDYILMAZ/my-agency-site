import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, phone, honey } = await req.json();

    // 🧅 Honeypot
    if (honey && honey.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    // تحقق من الحقول الأساسية
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const now = new Date().toLocaleString();

    // 1️⃣ إيميل لصاحب الموقع
    await resend.emails.send({
      from: "CodeAura Contact <onboarding@resend.dev>",
      to: "hamodeejamos@gmail.com",
      replyTo: email,
      subject: "📩 New Contact Form Message",
      html: `
        <h3>New message received</h3>
        <p><strong>Date:</strong> ${now}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <blockquote>${message}</blockquote>
      `,
    });

    // 2️⃣ إيميل تأكيد للمستخدم
    await resend.emails.send({
      from: "CodeAura <onboarding@resend.dev>",
      to: email,
      subject: "We received your message ✔",
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We have received your message on <strong>${now}</strong> with the following details:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ""}
        </ul>
        <p><strong>Your message:</strong></p>
        <blockquote>${message}</blockquote>
        <br/>
        <p>— CodeAura Team</p>
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

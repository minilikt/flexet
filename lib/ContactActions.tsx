"use server";

import { Resend } from "resend";
import { prisma } from "./prisma";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactClient({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    // 1️⃣ Save message to DB
    const savedMessage = await prisma.contactMessage.create({
      data: { name, email, subject, message },
    });
    console.log("💾 Message saved:", savedMessage);

    // 2️⃣ Prepare plain HTML email
    const html = `
      <div style="font-family: sans-serif; padding: 20px;">
        <h1>Hello ${name},</h1>
        <p>We received your message:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr />
        <p>Thank you for contacting FlexET!</p>
      </div>
    `;

    // 3️⃣ Send email
    const data = await resend.emails.send({
      from: "FlexET <noreply@flexet.me>", // must be verified domain
      to: email, // recipient
      subject: subject || "Thanks for contacting FlexET!",
      html,
    });

    console.log("📩 Email sent successfully:", data);

    return { success: true, savedMessage, emailData: data };
  } catch (err) {
    console.error("❌ Contact action error:", err);
    return {
      success: false,
      error: (err as Error).message,
      stack: (err as Error).stack,
    };
  }
}

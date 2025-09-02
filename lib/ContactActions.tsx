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

    // 2️⃣ Prepare plain HTML email for customer
    const customerHtml = `
      <div style="font-family: sans-serif; padding: 20px;">
        <h1>Hello ${name},</h1>
        <p>We received your message:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr />
        <p>Thank you for contacting FlexET!</p>
      </div>
    `;

    // 3️⃣ Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: "FlexET <noreply@flexet.me>", // must be verified domain in Resend
      to: email,
      subject: subject || "Thanks for contacting FlexET!",
      html: customerHtml,
    });

    console.log("📩 Email sent to customer:", customerEmail);

    // 4️⃣ Prepare notification email for you
    const adminHtml = `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>📬 New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p>Saved in DB with ID: ${savedMessage.id}</p>
      </div>
    `;

    // Replace with your real inbox (must be verified in Resend if not on a custom domain)
    const adminEmail = await resend.emails.send({
      from: "FlexET <noreply@flexet.me>",
      to: "abrahammulugetaadebash@gmail.com",
      subject: `New Contact Message from ${name}`,
      html: adminHtml,
    });

    console.log("📩 Notification email sent to admin:", adminEmail);

    return {
      success: true,
      savedMessage,
      customerEmail,
      adminEmail,
    };
  } catch (err) {
    console.error("❌ Contact action error:", err);
    return {
      success: false,
      error: (err as Error).message,
      stack: (err as Error).stack,
    };
  }
}

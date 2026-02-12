import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  project: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const project = (body.project || "").trim();

    if (!name || !email || !project) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const toAddress = process.env.CONTACT_TO || "techxsweb@gmail.com";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      } : undefined,
    });

    const subject = `New Contact – ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${project}`;
    const html = `
      <div>
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Details:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit">${project}</pre>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || toAddress,
      to: toAddress,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}



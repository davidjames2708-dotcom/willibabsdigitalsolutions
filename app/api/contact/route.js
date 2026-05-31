import { NextResponse } from "next/server";

const requiredFields = [
  "name",
  "email",
  "service",
  "budget",
  "timeline",
  "contact_method",
  "message",
];

function cleanValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildEmailHtml(data) {
  const rows = [
    ["Full name", data.name],
    ["Email", data.email],
    ["Service needed", data.service],
    ["Budget range", data.budget],
    ["Preferred timeline", data.timeline],
    ["Preferred contact method", data.contact_method],
    ["Project details", data.message],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #101828; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New project request</h2>
      ${rows
        .map(
          ([label, value]) => `
            <p style="margin: 0 0 12px;">
              <strong>${label}:</strong><br />
              ${String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\n", "<br />")}
            </p>
          `
        )
        .join("")}
    </div>
  `;
}

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@willibabsdigitalsolutions.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Willibabs Digital Solutions <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { message: "Email service is not configured." },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const data = Object.fromEntries(
    requiredFields.map((field) => [field, cleanValue(body[field])])
  );

  const missingField = requiredFields.find((field) => !data[field]);
  if (missingField) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(data.email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: data.email,
      subject: `New project request from ${data.name}`,
      html: buildEmailHtml(data),
      text: [
        `Full name: ${data.name}`,
        `Email: ${data.email}`,
        `Service needed: ${data.service}`,
        `Budget range: ${data.budget}`,
        `Preferred timeline: ${data.timeline}`,
        `Preferred contact method: ${data.contact_method}`,
        `Project details: ${data.message}`,
      ].join("\n\n"),
    }),
  });

  if (!resendResponse.ok) {
    return NextResponse.json(
      { message: "Email could not be sent. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Project request sent successfully." });
}

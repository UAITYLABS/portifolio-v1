import { NextResponse } from "next/server";
import { Resend } from "resend";
import { config } from "@/lib/config";

interface Payload {
  nome?: string;
  empresa?: string;
  email?: string;
  tipo?: string;
  mensagem?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;
    const { nome, empresa, email, tipo, mensagem } = body;

    if (!nome || !email || !tipo) {
      return NextResponse.json(
        { error: "Nome, email e tipo são obrigatórios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("[contact] RESEND_API_KEY ausente — payload:", body);
      return NextResponse.json({ ok: true, dev: true });
    }

    const resend = new Resend(apiKey);

    const from = process.env.RESEND_FROM || "UAITY | Software <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: [config.contact.email],
      replyTo: email,
      subject: `[Lead] ${nome}${empresa ? ` · ${empresa}` : ""} — ${tipo}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #111;">
          <h2 style="margin: 0 0 16px; font-size: 20px;">Novo lead — ${tipo}</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #666; width: 110px;">Nome</td><td><strong>${escapeHtml(nome)}</strong></td></tr>
            ${empresa ? `<tr><td style="padding: 8px 0; color: #666;">Empresa</td><td>${escapeHtml(empresa)}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Tipo</td><td>${escapeHtml(tipo)}</td></tr>
          </table>
          ${mensagem ? `<div style="margin-top: 20px; padding: 16px; background: #f5f5f5; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(mensagem)}</div>` : ""}
          <p style="margin-top: 24px; font-size: 12px; color: #999;">Enviado via formulário UAITY | Software · ${config.brand.url}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Falha ao enviar email. Tente pelo WhatsApp." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Erro inesperado." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

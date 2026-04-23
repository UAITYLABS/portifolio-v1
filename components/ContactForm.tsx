"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/config";
import { getDict, type Locale } from "@/lib/i18n";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = getDict(locale).cta.form;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      nome: String(data.get("nome") || ""),
      empresa: String(data.get("empresa") || ""),
      email: String(data.get("email") || ""),
      tipo: String(data.get("tipo") || ""),
      mensagem: String(data.get("mensagem") || ""),
    };

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          body.error ||
            (locale === "en" ? "Failed to send" : "Falha ao enviar")
        );
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : locale === "en"
          ? "Unexpected error"
          : "Erro inesperado"
      );
    }
  }

  function onWhatsApp() {
    const form = document.querySelector<HTMLFormElement>("#contact-form");
    if (!form) {
      window.open(waLink(), "_blank");
      return;
    }
    const data = new FormData(form);
    const nome = String(data.get("nome") || "");
    const empresa = String(data.get("empresa") || "");
    const tipo = String(data.get("tipo") || "");
    const msg = String(data.get("mensagem") || "");

    const intro = locale === "en" ? "Hi! I'm" : "Olá! Sou";
    const fromCompany = locale === "en" ? "from" : "da";
    const interestedIn = locale === "en" ? "— interested in:" : "— interesse em:";
    const source =
      locale === "en"
        ? "\n\nI came from UAITY | Software website."
        : "\n\nVim pelo site UAITY | Software.";

    const parts = [
      nome && `${intro} *${nome}*`,
      empresa && `${fromCompany} *${empresa}*`,
      tipo && `${interestedIn} ${tipo}.`,
      msg && `\n${msg}`,
      source,
    ].filter(Boolean);

    window.open(waLink(parts.join(" ")), "_blank");
  }

  return (
    <form id="contact-form" className="form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="nome">{t.name}</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder={t.namePlaceholder}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="empresa">{t.company}</label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            placeholder={t.companyPlaceholder}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">{t.email}</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={t.emailPlaceholder}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="tipo">{t.type}</label>
        <select id="tipo" name="tipo" required defaultValue="">
          <option value="" disabled>
            {t.typePlaceholder}
          </option>
          {t.typeOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="mensagem">{t.message}</label>
        <textarea
          id="mensagem"
          name="mensagem"
          placeholder={t.messagePlaceholder}
        />
      </div>

      {status === "success" && (
        <div className="form-status success">{t.successMsg}</div>
      )}
      {status === "error" && (
        <div className="form-status error">✕ {errorMsg}</div>
      )}

      <button
        type="submit"
        className="form-submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? t.submitLoading : t.submit}
        {status !== "loading" && <ArrowRight size={16} />}
      </button>

      <button
        type="button"
        onClick={onWhatsApp}
        className="form-submit"
        style={{
          background: "transparent",
          border: "1px solid var(--glass-border)",
          boxShadow: "none",
          marginTop: 0,
        }}
      >
        {t.whatsappAlt}
      </button>

      <p className="form-legal">{t.legal}</p>
    </form>
  );
}

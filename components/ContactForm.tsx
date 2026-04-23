"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/config";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
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
        throw new Error(body.error || "Falha ao enviar");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro inesperado");
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

    const parts = [
      nome && `Olá! Sou *${nome}*`,
      empresa && `da *${empresa}*`,
      tipo && `— interesse em: ${tipo}.`,
      msg && `\n${msg}`,
      "\n\nVim pelo site UAITY | Software.",
    ].filter(Boolean);

    window.open(waLink(parts.join(" ")), "_blank");
  }

  return (
    <form id="contact-form" className="form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" placeholder="Seu nome" required />
        </div>
        <div className="field">
          <label htmlFor="empresa">Empresa</label>
          <input id="empresa" name="empresa" type="text" placeholder="Nome da empresa" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">Email profissional</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="voce@empresa.com"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="tipo">Tipo de projeto</label>
        <select id="tipo" name="tipo" required defaultValue="">
          <option value="" disabled>Selecione...</option>
          <option>Site / Landing Page</option>
          <option>SaaS sob medida</option>
          <option>Automação com IA</option>
          <option>E-commerce</option>
          <option>App mobile</option>
          <option>Consultoria técnica</option>
          <option>Outro</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="mensagem">Conta um pouco</label>
        <textarea
          id="mensagem"
          name="mensagem"
          placeholder="O que você quer resolver? Qual o prazo ideal?"
        />
      </div>

      {status === "success" && (
        <div className="form-status success">
          ✓ Mensagem recebida. Retornamos em até 24h úteis.
        </div>
      )}
      {status === "error" && (
        <div className="form-status error">✕ {errorMsg}</div>
      )}

      <button
        type="submit"
        className="form-submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
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
        Preferir WhatsApp →
      </button>

      <p className="form-legal">Seus dados estão seguros. Não enviamos spam.</p>
    </form>
  );
}

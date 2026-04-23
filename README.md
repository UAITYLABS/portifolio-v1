# UAITY | Software

Portfólio web do braço de demanda/serviços da UAITY. Lead generation para projetos B2B de software sob medida.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind 4 · Resend · Lucide

---

## Rodar localmente

```bash
cd app
npm install
npm run dev
```

Abre em <http://localhost:3000>.

## Variáveis de ambiente

Copie `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

- `RESEND_API_KEY` — pega em <https://resend.com/api-keys>
- `RESEND_FROM` — remetente verificado no Resend (ex: `UAITY | Software <contato@software.uaity.com>`)

Sem `RESEND_API_KEY` o formulário fica em **modo dev** (retorna 200 sem enviar email — útil para testar UI).

## Deploy (Vercel)

1. `vercel --prod` ou conecta o repo pela UI
2. Adiciona as env vars no dashboard
3. Configura domínio `software.uaity.com` em DNS (CNAME → `cname.vercel-dns.com`)

## Adicionar um novo projeto ao portfólio

Abra `lib/projects.ts` e adicione um objeto ao array:

```ts
{
  slug: "meu-projeto",
  name: "Meu Projeto",
  category: "SaaS",        // qualquer string
  year: 2026,
  size: "med",             // "wide" | "med" | "sm" — controla grid
  description: "Descrição curta do projeto...",
  results: [
    { value: "95%", label: "uptime" },
    { value: "10k", label: "usuários" },
  ],
  accent: "blue",          // "blue" | "magenta" | "mint" | "coral" | "violet"
}
```

O grid dos cases se ajusta automaticamente.

## Estrutura

```
app/
├── app/
│   ├── layout.tsx         # metadata + fonts (Instrument / Jakarta / JetBrains)
│   ├── page.tsx           # home
│   ├── globals.css        # design system (glass + mesh + componentes)
│   └── api/contact/       # form submission → Resend
├── components/            # todas as seções e UI
├── lib/
│   ├── config.ts          # brand, contato, WhatsApp
│   ├── projects.ts        # ← cases dos projetos
│   ├── services.ts        # 6 serviços
│   ├── faqs.ts            # perguntas frequentes
│   └── problems.ts        # problemas + passos do processo
└── public/                # assets estáticos (screenshots dos cases vão aqui)
```

## Design system

- **Fontes:** Instrument Serif (display italic), Plus Jakarta Sans (body), JetBrains Mono (números)
- **Paleta:** azul UAITY `#2563EB` + magenta, ciano, violeta, coral, mint
- **Estilo:** Colorful Glass — mesh gradient animado + painéis translúcidos com blur
- **Tokens:** ver `app/globals.css` (`:root`)

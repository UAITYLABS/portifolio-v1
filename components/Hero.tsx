import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { config } from "@/lib/config";

export function Hero() {
  return (
    <section className="hero">
      <div className="container-uaity">
        <div className="hero-tag glass">
          <span className="dot" aria-hidden="true" />
          {config.status.acceptingProjects
            ? `Aceitando novos projetos — ${config.status.availableFrom}`
            : "Lista de espera aberta"}
        </div>

        <h1 className="hero-title display">
          Construímos
          <br />
          <em>software</em>
          <br />
          <span className="plain">que gera receita.</span>
        </h1>

        <p className="hero-sub">
          Somos uma software house brasileira que transforma processos manuais em produtos digitais lucrativos. Sites, SaaS, automações com IA — do briefing à operação.
        </p>

        <div className="hero-actions">
          <Link href="#contato" className="btn btn-primary">
            Iniciar um projeto
            <ArrowRight size={16} />
          </Link>
          <Link href="#cases" className="btn btn-ghost">
            Ver cases reais
          </Link>
        </div>

        <div className="hero-stats">
          <div className="stat glass">
            <div className="stat-num">
              40<span className="plus">+</span>
            </div>
            <div className="stat-label">
              endpoints em produção
              <br />— GeoExpansão
            </div>
          </div>
          <div className="stat glass">
            <div className="stat-num">
              30<span className="plus">+</span>
            </div>
            <div className="stat-label">
              módulos de análise
              <br />— Clyra Health OS
            </div>
          </div>
          <div className="stat glass">
            <div className="stat-num">
              15<span className="plus">+</span>
            </div>
            <div className="stat-label">
              projetos em produção
              <br />— portfólio UAITY
            </div>
          </div>
          <div className="stat glass">
            <div className="stat-num">
              96<span className="plus">/83</span>
            </div>
            <div className="stat-label">
              Lighthouse desktop/mobile
              <br />— média dos cases
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

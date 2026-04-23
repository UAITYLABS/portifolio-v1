import Link from "next/link";
import { config } from "@/lib/config";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-uaity">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-mark">
              uaity
              <span className="pipe">|</span>
              <span className="soft">software</span>
            </div>
            <p>
              Software house brasileira. Construímos sites, SaaS e automações que geram receita pra empresas que querem crescer.
            </p>
          </div>

          <div className="footer-col">
            <h5>Serviços</h5>
            <ul>
              <li><Link href="#servicos">Sites</Link></li>
              <li><Link href="#servicos">SaaS sob medida</Link></li>
              <li><Link href="#servicos">Automação IA</Link></li>
              <li><Link href="#servicos">Consultoria</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Plataformas</h5>
            <ul>
              <li><Link href="#produtos">GeoExpansão</Link></li>
              <li><Link href="#produtos">Clyra</Link></li>
              <li><Link href="#produtos">ClubMed</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Empresa</h5>
            <ul>
              <li><Link href="#cases">Cases</Link></li>
              <li><Link href="#processo">Processo</Link></li>
              <li><Link href="#contato">Contato</Link></li>
              <li>
                <a href={config.brand.mainSite} target="_blank" rel="noopener noreferrer">
                  uaity.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {config.brand.name}. Todos os direitos reservados.</span>
          <span>Feito em {config.brand.location}</span>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { config } from "@/lib/config";
import { getDict, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDict(locale).footer;
  const base = locale === "en" ? "/en" : "";

  const companyLinks = ["#cases", "#processo", "#contato", config.brand.mainSite];

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
            <p>{t.description}</p>
          </div>

          <div className="footer-col">
            <h5>{t.columns.services.title}</h5>
            <ul>
              {t.columns.services.items.map((item, i) => (
                <li key={i}>
                  <Link href={`${base}#servicos`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>{t.columns.company.title}</h5>
            <ul>
              {t.columns.company.items.map((item, i) => {
                const href = companyLinks[i] ?? "#";
                const isExternal = href.startsWith("http");
                return (
                  <li key={i}>
                    {isExternal ? (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {item}
                      </a>
                    ) : (
                      <Link href={`${base}${href}`}>{item}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {config.brand.name}. {t.rights}
          </span>
          <span>{t.madeIn}</span>
        </div>
      </div>
    </footer>
  );
}

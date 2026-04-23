import { projects, type ProjectSize } from "@/lib/projects";
import { waLink } from "@/lib/config";
import { getDict, type Locale } from "@/lib/i18n";

const sizeClass: Record<ProjectSize, string> = {
  wide: "case-wide",
  med: "case-med",
  sm: "case-sm",
};

export function Cases({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.cases;

  return (
    <section id="cases">
      <div className="container-uaity">
        <div className="section-head reveal">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>
            {t.titleBefore} <em>{t.titleEmphasis}</em>
            {t.titleAfter.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          <p>{t.intro}</p>
        </div>

        <div className="cases-grid">
          {projects.map((p, i) => {
            const CardTag = p.link ? "a" : "article";
            const linkProps = p.link
              ? {
                  href: p.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <CardTag
                key={p.slug}
                className={`case case-accent-${p.accent} glass ${sizeClass[p.size]} reveal`}
                {...linkProps}
              >
                <div className="case-meta">
                  <span>
                    {String(i + 1).padStart(2, "0")} · {p.category[locale]}
                  </span>
                  <span className="mono">{p.year}</span>
                </div>
                <div>
                  <h3>{p.name}</h3>
                  <p className="case-desc">{p.description[locale]}</p>
                  {p.results && p.results.length > 0 && (
                    <div className="case-results">
                      {p.results.map((r, idx) => (
                        <div key={idx} className="case-result">
                          <strong>{r.value}</strong>
                          <span>{r.label[locale]}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {p.link && <span className="case-visit">{t.visit}</span>}
                </div>
              </CardTag>
            );
          })}

          <a
            href={waLink(dict.whatsapp.newProjectMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="case case-accent-blue glass case-wide case-cta-card reveal"
          >
            <div>
              <div className="case-cta-glyph" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="4" x2="12" y2="20" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                </svg>
              </div>
              <h3>
                <em>{t.ctaEmphasis}</em>
                {locale === "en" ? " here." : " aqui."}
              </h3>
              <p className="case-desc">{t.ctaSub}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

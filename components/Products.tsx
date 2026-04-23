import { getDict, type Locale } from "@/lib/i18n";

export function Products({ locale }: { locale: Locale }) {
  const t = getDict(locale).products;

  return (
    <section id="produtos">
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

        {/* GeoExpansão */}
        <article className="product glass glass-heavy reveal">
          <div className="product-copy">
            <div className="product-badge">
              <span
                className="dot"
                style={{
                  background: "var(--uaity-blue-glow)",
                  boxShadow: "0 0 10px var(--uaity-blue-glow)",
                }}
              />
              {t.items.geo.badge}
            </div>
            <h3 className="grad-geo">GeoExpansão</h3>
            <p className="product-tagline">
              {t.items.geo.tagline} <em>{t.items.geo.taglineEmphasis}</em> {t.items.geo.taglineAfter}
            </p>
            <ul className="product-features">
              {t.items.geo.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <a href="#contato" className="product-cta">{locale === "en" ? "Learn more →" : "Conhecer →"}</a>
          </div>
          <div className="product-visual">
            <div className="geo-viz" />
            <div className="geo-pulse" style={{ top: "30%", left: "35%" }} />
            <div className="geo-pulse" style={{ top: "55%", left: "60%", animationDelay: "0.7s" }} />
            <div className="geo-pulse" style={{ top: "40%", left: "75%", animationDelay: "1.4s" }} />
          </div>
        </article>

        {/* Clyra */}
        <article className="product reverse glass glass-heavy reveal">
          <div className="product-copy">
            <div className="product-badge">
              <span
                className="dot"
                style={{
                  background: "var(--magenta)",
                  boxShadow: "0 0 10px var(--magenta)",
                }}
              />
              {t.items.clyra.badge}
            </div>
            <h3 className="grad-clyra">Clyra</h3>
            <p className="product-tagline">{t.items.clyra.tagline}</p>
            <ul className="product-features">
              {t.items.clyra.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <a href="#contato" className="product-cta">{locale === "en" ? "Learn more →" : "Conhecer →"}</a>
          </div>
          <div className="product-visual">
            <div className="clyra-viz">
              <div className="clyra-pulse">
                <svg viewBox="0 0 400 80" preserveAspectRatio="none">
                  <path d="M0,40 L60,40 L80,40 L90,20 L100,60 L110,10 L120,70 L130,40 L200,40 L210,30 L220,50 L230,40 L400,40" />
                </svg>
                <div className="clyra-dot" />
              </div>
            </div>
          </div>
        </article>

        {/* ClubMed */}
        <article className="product glass glass-heavy reveal">
          <div className="product-copy">
            <div className="product-badge">
              <span
                className="dot"
                style={{
                  background: "var(--mint)",
                  boxShadow: "0 0 10px var(--mint)",
                }}
              />
              {t.items.clubmed.badge}
            </div>
            <h3 className="grad-clubmed">ClubMed</h3>
            <p className="product-tagline">
              {t.items.clubmed.tagline} <em>{t.items.clubmed.taglineEmphasis}</em>{t.items.clubmed.taglineAfter}
            </p>
            <ul className="product-features">
              {t.items.clubmed.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <a
              href="https://www.clubmed.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="product-cta"
            >
              {t.visit}
            </a>
          </div>
          <div className="product-visual">
            <div className="clubmed-viz">
              <svg viewBox="0 0 300 200" className="clubmed-network" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <symbol id="cm-person" viewBox="0 0 20 20">
                    <circle cx="10" cy="6" r="3.6" />
                    <path d="M2.5 18 Q2.5 11.5 10 11.5 Q17.5 11.5 17.5 18 Z" />
                  </symbol>
                  <linearGradient id="cm-line" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#34D399" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#FB923C" stopOpacity="0.25" />
                  </linearGradient>
                </defs>

                <g stroke="url(#cm-line)" strokeWidth="1" fill="none" opacity="0.65">
                  <line x1="60" y1="55" x2="150" y2="100" />
                  <line x1="150" y1="100" x2="240" y2="60" />
                  <line x1="150" y1="100" x2="230" y2="155" />
                  <line x1="70" y1="150" x2="150" y2="100" />
                  <line x1="60" y1="55" x2="70" y2="150" />
                  <line x1="240" y1="60" x2="230" y2="155" />
                </g>

                <g fill="none" strokeWidth="1">
                  <circle cx="60" cy="55" stroke="#34D399">
                    <animate attributeName="r" values="12;40" dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="240" cy="60" stroke="#34D399">
                    <animate attributeName="r" values="12;40" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="70" cy="150" stroke="#34D399">
                    <animate attributeName="r" values="12;40" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="230" cy="155" stroke="#34D399">
                    <animate attributeName="r" values="12;40" dur="2.4s" begin="1.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0" dur="2.4s" begin="1.8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="150" cy="100" stroke="#FB923C" strokeWidth="1.2">
                    <animate attributeName="r" values="20;58" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.9;0" dur="2s" repeatCount="indefinite" />
                  </circle>
                </g>

                <g fill="#34D399">
                  <use href="#cm-person" x="46" y="41" width="28" height="28" className="cm-person cm-p1" />
                  <use href="#cm-person" x="226" y="46" width="28" height="28" className="cm-person cm-p2" />
                  <use href="#cm-person" x="56" y="136" width="28" height="28" className="cm-person cm-p3" />
                  <use href="#cm-person" x="216" y="141" width="28" height="28" className="cm-person cm-p4" />
                </g>

                <g fill="#FB923C">
                  <use href="#cm-person" x="128" y="78" width="44" height="44" className="cm-person cm-hub" />
                </g>
              </svg>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

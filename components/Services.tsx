"use client";

import { services, type ServiceSize } from "@/lib/services";
import { getDict, type Locale } from "@/lib/i18n";

const sizeClass: Record<ServiceSize, string> = {
  large: "service-large",
  medium: "service-medium",
  small: "service-small",
};

export function Services({ locale }: { locale: Locale }) {
  const t = getDict(locale).services;

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="servicos">
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

        <div className="services-grid">
          {services.map((s) => {
            const title = s.title[locale];
            const highlight = s.titleHighlight?.[locale];
            const titleParts = highlight ? title.split(highlight) : null;

            return (
              <article
                key={s.tag[locale]}
                className={`service glass svc-${s.accent} ${sizeClass[s.size]} reveal`}
                onPointerMove={onMove}
              >
                <span className="service-tag">{s.tag[locale]}</span>
                <div>
                  <div className="service-glyph">{s.glyph}</div>
                  <h3>
                    {titleParts ? (
                      <>
                        {titleParts[0]}
                        <em>{highlight}</em>
                        {titleParts[1]}
                      </>
                    ) : (
                      title
                    )}
                  </h3>
                  <p>{s.description[locale]}</p>
                  <div className="service-arrow">{t.learnMore}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

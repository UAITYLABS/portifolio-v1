"use client";

import { services, type ServiceSize } from "@/lib/services";

const sizeClass: Record<ServiceSize, string> = {
  large: "service-large",
  medium: "service-medium",
  small: "service-small",
};

export function Services() {
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
          <p className="eyebrow">— O que entregamos</p>
          <h2>
            Seis formas de <em>impulsionar</em>
            <br />a operação do seu negócio.
          </h2>
          <p>
            Cada projeto começa com um diagnóstico honesto. Se não precisa, a gente te fala — e indica o caminho certo.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => {
            const titleParts = s.titleHighlight
              ? s.title.split(s.titleHighlight)
              : null;

            return (
              <article
                key={s.tag}
                className={`service glass svc-${s.accent} ${sizeClass[s.size]} reveal`}
                onPointerMove={onMove}
              >
                <span className="service-tag">{s.tag}</span>
                <div>
                  <div className="service-glyph">{s.glyph}</div>
                  <h3>
                    {titleParts ? (
                      <>
                        {titleParts[0]}
                        <em>{s.titleHighlight}</em>
                        {titleParts[1]}
                      </>
                    ) : (
                      s.title
                    )}
                  </h3>
                  <p>{s.description}</p>
                  <div className="service-arrow">saber mais →</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

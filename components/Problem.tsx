import { problems } from "@/lib/problems";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

export function Problem({ locale }: { locale: Locale }) {
  const t = getDict(locale).problem;

  return (
    <section id="problema">
      <div className="container-uaity">
        <div className="section-head reveal">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>
            {t.titleBefore} <em>{t.titleEmphasis}</em>{" "}
            {t.titleAfter.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p>{t.intro}</p>
        </div>

        <div className="problem-grid">
          {problems.map((p) => (
            <div key={p.num} className="problem-card glass reveal">
              <div>
                <div className="problem-icon">{p.num}</div>
                <h3>{p.title[locale]}</h3>
                <p>{p.description[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

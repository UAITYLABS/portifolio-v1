import { processSteps } from "@/lib/problems";
import { getDict, type Locale } from "@/lib/i18n";

export function Process({ locale }: { locale: Locale }) {
  const t = getDict(locale).process;

  return (
    <section id="processo">
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

        <ol className="process-list">
          {processSteps.map((s) => (
            <li key={s.num} className="step glass reveal">
              <div className="step-num">
                {s.num} / {s.label[locale]}
              </div>
              <h4>{s.title[locale]}</h4>
              <p>{s.description[locale]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

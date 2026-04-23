import { faqs } from "@/lib/faqs";
import { getDict, type Locale } from "@/lib/i18n";

export function Faq({ locale }: { locale: Locale }) {
  const t = getDict(locale).faq;

  return (
    <section id="faq">
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
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={i} className="faq-item glass reveal">
              <summary className="faq-q">
                {f.question[locale]}
                <span className="faq-q-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq-a">{f.answer[locale]}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

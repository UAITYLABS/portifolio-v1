import { faqs } from "@/lib/faqs";

export function Faq() {
  return (
    <section id="faq">
      <div className="container-uaity">
        <div className="section-head reveal">
          <p className="eyebrow">— Dúvidas frequentes</p>
          <h2>
            O que a gente <em>responde</em>
            <br />
            antes mesmo da primeira call.
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={i} className="faq-item glass reveal">
              <summary className="faq-q">
                {f.question}
                <span className="faq-q-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq-a">{f.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

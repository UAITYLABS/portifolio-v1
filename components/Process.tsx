import { processSteps } from "@/lib/problems";

export function Process() {
  return (
    <section id="processo">
      <div className="container-uaity">
        <div className="section-head reveal">
          <p className="eyebrow">— Como funciona</p>
          <h2>
            Do briefing <em>ao deploy</em>
            <br />
            em quatro passos claros.
          </h2>
          <p>
            Processo enxuto, com entregas curtas e visibilidade total — você sabe o que está acontecendo o tempo todo.
          </p>
        </div>

        <ol className="process-list">
          {processSteps.map((s) => (
            <li key={s.num} className="step glass reveal">
              <div className="step-num">
                {s.num} / {s.label}
              </div>
              <h4>{s.title}</h4>
              <p>{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

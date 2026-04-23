import { problems } from "@/lib/problems";

export function Problem() {
  return (
    <section id="problema">
      <div className="container-uaity">
        <div className="section-head reveal">
          <p className="eyebrow">— O cenário</p>
          <h2>
            Seu negócio está <em>parando</em> por coisas
            <br />
            que deviam estar automatizadas.
          </h2>
          <p>
            A diferença entre empresas que crescem e empresas que estagnam raramente está no time — está na infraestrutura digital. Estes são os gargalos mais comuns que a gente resolve:
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((p) => (
            <div key={p.num} className="problem-card glass reveal">
              <div>
                <div className="problem-icon">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

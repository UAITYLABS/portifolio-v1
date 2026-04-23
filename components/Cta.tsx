import { Mail, MessageCircle, Clock } from "lucide-react";
import { config, waLink } from "@/lib/config";
import { ContactForm } from "./ContactForm";

export function Cta() {
  return (
    <section id="contato">
      <div className="container-uaity">
        <div className="cta-wrap glass glass-heavy reveal">
          <div className="cta-left">
            <p className="eyebrow">— Pronto pra começar?</p>
            <h2>
              Fale com a gente.
              <br />
              <em>Sem compromisso.</em>
            </h2>
            <p>
              Descreva em uma linha o que te trouxe aqui. A gente responde em até 1 dia útil com próximos passos concretos — ou te direciona pra alguém que resolva melhor, se for o caso.
            </p>

            <div className="cta-contacts">
              <a href={`mailto:${config.contact.email}`} className="cta-contact">
                <div className="cta-contact-glyph">
                  <Mail size={16} />
                </div>
                {config.contact.email}
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-contact"
              >
                <div className="cta-contact-glyph">
                  <MessageCircle size={16} />
                </div>
                WhatsApp — {config.contact.whatsapp.display}
              </a>
              <div className="cta-contact">
                <div className="cta-contact-glyph">
                  <Clock size={16} />
                </div>
                Retorno em até 24h úteis
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

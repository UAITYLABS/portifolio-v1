import { Mail, MessageCircle, Clock } from "lucide-react";
import { config, waLink } from "@/lib/config";
import { getDict, type Locale } from "@/lib/i18n";
import { ContactForm } from "./ContactForm";

export function Cta({ locale }: { locale: Locale }) {
  const t = getDict(locale).cta;

  return (
    <section id="contato">
      <div className="container-uaity">
        <div className="cta-wrap glass glass-heavy reveal">
          <div className="cta-left">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>
              {t.titleBefore}
              <br />
              <em>{t.titleEmphasis}</em>
            </h2>
            <p>{t.intro}</p>

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
                {t.contactWhatsapp} — {config.contact.whatsapp.display}
              </a>
              <div className="cta-contact">
                <div className="cta-contact-glyph">
                  <Clock size={16} />
                </div>
                {t.contactTime}
              </div>
            </div>
          </div>

          <ContactForm locale={locale} />
        </div>
      </div>
    </section>
  );
}

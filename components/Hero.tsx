import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const t = getDict(locale).hero;
  const base = locale === "en" ? "/en" : "";

  return (
    <section className="hero">
      <div className="container-uaity">
        <div className="hero-tag glass">
          <span className="dot" aria-hidden="true" />
          {t.statusAccepting}
        </div>

        <h1 className="hero-title display">
          {t.title[0]}
          <br />
          <em>{t.titleEmphasis}</em>
          <br />
          <span className="plain">{t.title[2]}</span>
        </h1>

        <p className="hero-sub">{t.sub}</p>

        <div className="hero-actions">
          <Link href={`${base}#contato`} className="btn btn-primary">
            {t.ctaPrimary}
            <ArrowRight size={16} />
          </Link>
          <Link href={`${base}#cases`} className="btn btn-ghost">
            {t.ctaSecondary}
          </Link>
        </div>

        <div className="hero-stats">
          {t.stats.map((s, i) => (
            <div key={i} className="stat glass">
              <div className="stat-num">
                {s.num}
                {s.plus && <span className="plus">{s.plus}</span>}
              </div>
              <div className="stat-label">
                {s.label1}
                <br />
                {s.label2}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

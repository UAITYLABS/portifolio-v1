import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

export function Nav({ locale }: { locale: Locale }) {
  const t = getDict(locale).nav;

  return (
    <div className="nav-wrap">
      <nav className="nav glass">
        <Link href="/" className="nav-logo">
          <span>uaity</span>
          <span className="nav-logo-pipe">|</span>
          <span className="nav-logo-soft">software</span>
        </Link>
        <div className="nav-links">
          <Link href="#servicos">{t.services}</Link>
          <Link href="#cases">{t.cases}</Link>
          <Link href="#processo">{t.process}</Link>
        </div>
        <Link href="#contato" className="nav-cta">
          {t.cta}
        </Link>
      </nav>
    </div>
  );
}

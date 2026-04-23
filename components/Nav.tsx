import Link from "next/link";

export function Nav() {
  return (
    <div className="nav-wrap">
      <nav className="nav glass">
        <Link href="/" className="nav-logo">
          <span>uaity</span>
          <span className="nav-logo-pipe">|</span>
          <span className="nav-logo-soft">software</span>
        </Link>
        <div className="nav-links">
          <Link href="#servicos">Serviços</Link>
          <Link href="#produtos">Produtos</Link>
          <Link href="#cases">Cases</Link>
          <Link href="#processo">Processo</Link>
        </div>
        <Link href="#contato" className="nav-cta">
          Conversar →
        </Link>
      </nav>
    </div>
  );
}

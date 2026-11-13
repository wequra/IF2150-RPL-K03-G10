import Link from "next/link";
import type { ReactNode } from "react";

// Bingkai halaman tamu (masuk/registrasi) dengan identitas visual yang sama seperti dasbor.
export default function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="auth-shell">
      <a className="skip-link" href="#konten">
        Lewati ke konten
      </a>
      <aside className="auth-aside">
        <Link className="brand" href="/" aria-label="fajar.tech">
          fajar<span>.tech</span>
        </Link>
        <div className="auth-copy">
          <p className="auth-tagline">Air dan energi komunitas, terpantau dalam satu tempat.</p>
        </div>
      </aside>
      <main id="konten" className="auth-main">
        <div className="auth-card">{children}</div>
      </main>
    </div>
  );
}

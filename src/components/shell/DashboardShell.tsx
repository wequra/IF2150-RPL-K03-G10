import type { ReactNode } from "react";

export type Peran = "WARGA" | "TEKNISI" | "PENGURUS";

export interface SeksiDasbor {
  id: string; // dipakai sebagai anchor: #id
  uc: string; // mis. "UC03"
  judul: string;
  isi: ReactNode;
}

const NAMA_PERAN: Record<Peran, string> = {
  WARGA: "Warga",
  TEKNISI: "Teknisi",
  PENGURUS: "Pengurus",
};

// Kerangka bersama tiga dasbor. Modul lain mengisi seksi, bukan mengubah berkas ini.
export default function DashboardShell({
  peran,
  seksi,
}: {
  peran: Peran;
  seksi: SeksiDasbor[];
}) {
  return (
    <main className="shell-main">
      <header className="shell-judul">
        <h1>Dasbor {NAMA_PERAN[peran]}</h1>
        <p>Fajar Tech</p>
      </header>
      {seksi.map((s) => (
        <section key={s.id} id={s.id} className="seksi" aria-labelledby={`${s.id}-judul`}>
          <h2 id={`${s.id}-judul`}>{s.judul}</h2>
          {s.isi}
        </section>
      ))}
    </main>
  );
}

import Link from "next/link";
import { Alert, Badge, Card, EmptyState, Table } from "@/components/ui";
import type { PeringatanTampil } from "../ModulMonitoring";
import { angkaId, waktuWib } from "./format";

function labelPengiriman(status: "TERKIRIM" | "PENDING"): string {
  return status === "TERKIRIM" ? "Terkirim" : "Menunggu terkirim";
}

function KartuTindakLanjut() {
  return (
    <Card>
      <h2>Tindak lanjut</h2>
      <p>Tindak lanjuti peringatan dengan memeriksa perangkat dan mencatat hasilnya.</p>
      <div className="actions" style={{ marginTop: 20 }}>
        <Link className="btn primary" href="/dashboard/teknisi/tugas">
          Lihat tugas saya
        </Link>
        <Link className="btn" href="/dashboard/teknisi/panel">
          Histori panel
        </Link>
      </div>
    </Card>
  );
}

export default function DaftarPeringatan({
  peringatan,
  namaTeknisi,
}: {
  peringatan: PeringatanTampil[];
  namaTeknisi: string;
}) {
  if (peringatan.length === 0) {
    return (
      <div className="dua-kolom">
        <Card>
          <EmptyState>
            Tidak ada peringatan daya kritis. Semua baterai perangkat Anda berada di atas ambang aman.
          </EmptyState>
        </Card>
        <KartuTindakLanjut />
      </div>
    );
  }

  const utama = peringatan[0];
  const kapasitas = Math.max(0, Math.min(100, utama.kapasitasSaatIni));

  return (
    <>
      <Alert nada="peringatan">
        <strong>
          {peringatan.length === 1
            ? "Baterai perlu diperiksa"
            : `${peringatan.length} peringatan baterai perlu diperiksa`}
        </strong>
        <br />
        {utama.pesan}
      </Alert>

      <div className="dua-kolom">
        <Card>
          <div className="pasokan-kepala">
            <h2>{utama.namaPerangkat}</h2>
            <Badge nada="bahaya">Kritis</Badge>
          </div>

          <p className="label-muted" style={{ marginTop: 22 }}>
            Kapasitas baterai
          </p>
          <p className="angka-sedang">
            {angkaId(utama.kapasitasSaatIni)}
            <small>%</small>
          </p>
          <div className="bar kritis" aria-hidden="true">
            <span style={{ width: `${kapasitas}%` }} />
          </div>

          <dl className="facts" style={{ marginTop: 24 }}>
            <div>
              <dt>Perangkat</dt>
              <dd>{utama.idPerangkat || utama.namaPerangkat}</dd>
            </div>
            <div>
              <dt>Tanggung jawab</dt>
              <dd>{namaTeknisi} · Anda</dd>
            </div>
            <div>
              <dt>Waktu pembacaan</dt>
              <dd>{waktuWib(utama.waktu)}</dd>
            </div>
            <div>
              <dt>Ambang aman</dt>
              <dd>
                {utama.ambangBatasAman !== null ? `${angkaId(utama.ambangBatasAman)}%` : "Tidak tercatat"}
              </dd>
            </div>
          </dl>

          <hr className="garis" />
          <Badge nada={utama.statusPengiriman === "TERKIRIM" ? "ok" : "peringatan"}>
            {labelPengiriman(utama.statusPengiriman)}
          </Badge>
          <p style={{ marginTop: 10 }}>
            <small>Status pengiriman bukan konfirmasi bahwa pesan telah dibaca.</small>
          </p>
        </Card>

        <KartuTindakLanjut />
      </div>

      {peringatan.length > 1 && (
        <Card>
          <h2 style={{ marginBottom: 20 }}>Riwayat peringatan · {peringatan.length}</h2>
          <Table>
            <thead>
              <tr>
                <th>Perangkat</th>
                <th>Kapasitas</th>
                <th>Waktu</th>
                <th>Pengiriman</th>
              </tr>
            </thead>
            <tbody>
              {peringatan.map((p) => (
                <tr key={p.idNotifikasi}>
                  <td data-label="Perangkat">
                    <strong>{p.namaPerangkat}</strong>
                    <br />
                    <small>{p.idPerangkat}</small>
                  </td>
                  <td data-label="Kapasitas">{angkaId(p.kapasitasSaatIni)}%</td>
                  <td data-label="Waktu">{waktuWib(p.waktu)}</td>
                  <td data-label="Pengiriman">
                    <Badge nada={p.statusPengiriman === "TERKIRIM" ? "ok" : "peringatan"}>
                      {labelPengiriman(p.statusPengiriman)}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      )}
    </>
  );
}

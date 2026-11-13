import Link from "next/link";
import type { ReactNode } from "react";
import { Alert, Badge, Card } from "@/components/ui";
import type { KondisiAir, StatusInfrastruktur } from "@/contracts/monitoring";
import { angkaId, waktuWib } from "./format";

const NADA_KONDISI: Record<KondisiAir, "ok" | "peringatan" | "bahaya"> = {
  Normal: "ok",
  Rendah: "peringatan",
  Kritis: "bahaya",
};

const BELUM_ADA = "Belum ada pembacaan";

function Ada({ ada, children }: { ada: boolean; children: ReactNode }) {
  return ada ? <>{children}</> : <span className="nilai-kosong">{BELUM_ADA}</span>;
}

export default function RingkasanPasokan({ status }: { status: StatusInfrastruktur }) {
  const { tangki, baterai, panel } = status;
  const isiTangki = tangki.persen === null ? 0 : Math.max(0, Math.min(100, tangki.persen));
  const isiBaterai = baterai.kapasitasPersen === null ? 0 : Math.max(0, Math.min(100, baterai.kapasitasPersen));

  return (
    <>
      {status.dataUsang && (
        <Alert>
          <strong>Data terbaru belum tersedia.</strong>
          <br />
          Perangkat belum mengirimkan pembacaan. Nilai yang kosong ditandai “{BELUM_ADA}”, bukan nol.
        </Alert>
      )}

      <section className="pasokan" aria-labelledby="judul-air">
        <div className="pasokan-kepala">
          <h2 id="judul-air">Ketersediaan air</h2>
          {tangki.kondisi ? (
            <Badge nada={NADA_KONDISI[tangki.kondisi]}>{tangki.kondisi}</Badge>
          ) : (
            <Badge nada="netral">Belum ada data</Badge>
          )}
        </div>

        <div className="pasokan-isi">
          <div>
            <p className="label-muted">Volume tangki komunal</p>
            <p className="angka-raksasa">
              <Ada ada={tangki.volumeLiter !== null}>
                {tangki.volumeLiter !== null && (
                  <>
                    {angkaId(tangki.volumeLiter)}
                    <small>L</small>
                  </>
                )}
              </Ada>
            </p>
            <p className="label-muted">
              {tangki.kapasitasLiter !== null
                ? `dari kapasitas ${angkaId(tangki.kapasitasLiter)} L`
                : "Kapasitas tangki belum dicatat"}
            </p>
          </div>

          <div className="pasokan-kanan">
            <p className="persen-terisi">
              {tangki.persen !== null ? (
                <>
                  <strong>{angkaId(Math.round(tangki.persen))}%</strong>
                  <span>kapasitas terisi</span>
                </>
              ) : (
                <span className="nilai-kosong">Tinggi air belum diketahui</span>
              )}
            </p>
            <div
              className="tangki"
              role="img"
              aria-label={
                tangki.persen !== null
                  ? `Tangki air terisi ${angkaId(Math.round(tangki.persen))} persen`
                  : "Tangki air tanpa pembacaan"
              }
            >
              <div className="tangki-isi" style={{ height: `${isiTangki}%` }} />
            </div>
            <small>
              Penampang · kapasitas{" "}
              {tangki.kapasitasLiter !== null ? `${angkaId(tangki.kapasitasLiter)} L` : "belum dicatat"}
            </small>
          </div>
        </div>

        <div className="pasokan-kaki">
          <small>Data simulasi · Tanpa sensor nyata</small>
          <small>
            {tangki.waktuPembacaan ? `Pembacaan ${waktuWib(tangki.waktuPembacaan)}` : BELUM_ADA}
          </small>
        </div>
      </section>

      <section aria-labelledby="judul-energi">
        <h2 id="judul-energi" className="judul-bagian">
          Energi pendukung
        </h2>
        <p className="label-muted">Pembacaan pada waktu yang sama</p>
        <div className="energi-grid">
          <Card>
            <div className="baris-antara">
              <p className="label-muted">Kapasitas baterai</p>
              {baterai.kritis === null ? (
                <Badge nada="netral">Belum ada data</Badge>
              ) : baterai.kritis ? (
                <Badge nada="bahaya">Kritis</Badge>
              ) : (
                <Badge>Normal</Badge>
              )}
            </div>
            <p className="angka-sedang">
              <Ada ada={baterai.kapasitasPersen !== null}>
                {baterai.kapasitasPersen !== null && (
                  <>
                    {angkaId(Math.round(baterai.kapasitasPersen))}
                    <small>%</small>
                  </>
                )}
              </Ada>
            </p>
            <div className={`bar${baterai.kritis ? " kritis" : ""}`} aria-hidden="true">
              <span style={{ width: `${isiBaterai}%` }} />
            </div>
            <small>
              {baterai.waktuPembacaan ? `Pembacaan ${waktuWib(baterai.waktuPembacaan)}` : BELUM_ADA}
            </small>
          </Card>

          <Card>
            <p className="label-muted">Daya panel surya</p>
            <p className="angka-sedang">
              <Ada ada={panel.dayaWatt !== null}>
                {panel.dayaWatt !== null && (
                  <>
                    {angkaId(panel.dayaWatt)}
                    <small>W</small>
                  </>
                )}
              </Ada>
            </p>
            <small>Daya sesaat, bukan energi kumulatif.</small>
            <br />
            <small>
              {panel.waktuPembacaan ? `Pembacaan ${waktuWib(panel.waktuPembacaan)}` : BELUM_ADA}
            </small>
          </Card>
        </div>
      </section>

      <div className="actions">
        <Link className="btn primary" href="/dashboard/warga/laporan/baru">
          Lapor gangguan
        </Link>
        <Link className="btn" href="/dashboard/warga/tagihan">
          Lihat tagihan
        </Link>
        <Link className="btn" href="/dashboard/warga/laporan">
          Laporan saya
        </Link>
      </div>

      <div className="note">
        <strong>Keterangan kondisi pasokan</strong>
        <br />
        Normal: volume di atas ambang rendah. Rendah: volume sama dengan atau di bawah ambang rendah.
        Kritis: volume sama dengan atau di bawah ambang kritis. “{BELUM_ADA}” berarti sensor belum
        mengirim data, bukan nilai nol.
      </div>
    </>
  );
}

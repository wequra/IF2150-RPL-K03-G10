"use client";

import { useState, type FormEvent } from "react";
import { Alert, Button, Card, EmptyState, Field, Input } from "@/components/ui";
import type { TitikKinerja } from "@/contracts/monitoring";
import { angkaId, jamWib, tanggalPanjangWib } from "./format";

// Batas atas "bulat" agar sumbu-Y mudah dibaca: 420 W menjadi 500 W.
function batasAtas(nilai: number): number {
  if (nilai <= 0) return 1;
  const pangkat = Math.pow(10, Math.floor(Math.log10(nilai)));
  const skala = nilai / pangkat;
  const langkah = skala <= 1 ? 1 : skala <= 2 ? 2 : skala <= 2.5 ? 2.5 : skala <= 5 ? 5 : 10;
  return langkah * pangkat;
}

export default function HistoriPanel({
  idPanel,
  namaPanel,
  mulaiAwal,
  selesaiAwal,
  dataAwal,
}: {
  idPanel: string | null;
  namaPanel: string | null;
  mulaiAwal: string;
  selesaiAwal: string;
  dataAwal: TitikKinerja[];
}) {
  const [mulai, setMulai] = useState(mulaiAwal);
  const [selesai, setSelesai] = useState(selesaiAwal);
  const [data, setData] = useState(dataAwal);
  const [memuat, setMemuat] = useState(false);
  const [galat, setGalat] = useState<string | null>(null);

  if (!idPanel) {
    return (
      <Alert>
        Belum ada panel surya yang ditugaskan kepada Anda. Riwayat kinerja muncul setelah pengurus
        menugaskan perangkat.
      </Alert>
    );
  }

  async function tampilkan(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!mulai || !selesai) {
      setGalat("Isi tanggal mulai dan tanggal akhir.");
      return;
    }
    if (mulai > selesai) {
      setGalat("Tanggal mulai tidak boleh melewati tanggal akhir.");
      return;
    }

    setMemuat(true);
    setGalat(null);
    try {
      const param = new URLSearchParams({
        mulai: `${mulai}T00:00:00+07:00`,
        selesai: `${selesai}T23:59:59.999+07:00`,
      });
      const res = await fetch(`/api/monitoring/panel?${param.toString()}`);
      const hasil = await res.json();
      if (hasil.ok) {
        setData(hasil.data as TitikKinerja[]);
      } else {
        setGalat(hasil.pesan ?? "Riwayat panel gagal dimuat.");
      }
    } catch {
      setGalat("Tidak dapat terhubung ke server. Coba lagi.");
    }
    setMemuat(false);
  }

  const maks = batasAtas(Math.max(...data.map((t) => t.dayaDihasilkan), 0));
  const ticks = [1, 0.75, 0.5, 0.25, 0].map((f) => maks * f);
  const tertinggi = data.reduce<TitikKinerja | null>(
    (puncak, t) => (!puncak || t.dayaDihasilkan > puncak.dayaDihasilkan ? t : puncak),
    null,
  );
  const terakhir = data.length > 0 ? data[data.length - 1] : null;

  return (
    <>
      <form className="filter-aksi" onSubmit={tampilkan} noValidate>
        <Field label="Tanggal mulai">
          {(p) => <Input {...p} type="date" value={mulai} onChange={(e) => setMulai(e.target.value)} />}
        </Field>
        <Field label="Tanggal akhir">
          {(p) => <Input {...p} type="date" value={selesai} onChange={(e) => setSelesai(e.target.value)} />}
        </Field>
        <Button type="submit" varian="primary" disabled={memuat}>
          {memuat ? "Memuat…" : "Tampilkan"}
        </Button>
      </form>

      {galat && <Alert nada="bahaya">{galat}</Alert>}

      <Card>
        <div className="baris-antara">
          <div>
            <h2>Daya panel · {idPanel}</h2>
            <p className="label-muted" style={{ marginTop: 6 }}>
              {data.length > 0 ? `${tanggalPanjangWib(data[0].waktu)} · WIB` : namaPanel ?? "Panel surya"}
            </p>
          </div>
          <span className="legenda">
            <i aria-hidden="true" />
            Daya · W
          </span>
        </div>

        {data.length === 0 ? (
          <EmptyState>
            Data historis tidak ditemukan pada rentang ini. Coba pilih rentang tanggal lain.
          </EmptyState>
        ) : (
          <div className="chart" role="img" aria-label={`Grafik daya panel ${idPanel} dalam watt`}>
            <div className="chart-baris">
              <div className="chart-sumbu-y" aria-hidden="true">
                {ticks.map((t) => (
                  <span key={t}>{angkaId(t)}</span>
                ))}
              </div>
              <div className="chart-bidang">
                <div className="chart-plot">
                  {data.map((t) => (
                    <div
                      className="chart-kolom"
                      key={t.waktu}
                      title={`${jamWib(t.waktu)} WIB · ${angkaId(t.dayaDihasilkan)} W`}
                    >
                      <span className="chart-angka">{angkaId(t.dayaDihasilkan)}</span>
                      <i style={{ height: `${(t.dayaDihasilkan / maks) * 100}%` }} />
                    </div>
                  ))}
                </div>
                <div className="chart-label-baris" aria-hidden="true">
                  {data.map((t) => (
                    <span key={t.waktu}>{jamWib(t.waktu)}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {tertinggi && terakhir && (
          <>
            <hr className="garis" />
            <dl className="facts">
              <div>
                <dt>Daya tertinggi</dt>
                <dd>
                  {angkaId(tertinggi.dayaDihasilkan)} W · {jamWib(tertinggi.waktu)} WIB
                </dd>
              </div>
              <div>
                <dt>Pembacaan terakhir</dt>
                <dd>
                  {angkaId(terakhir.dayaDihasilkan)} W · {jamWib(terakhir.waktu)} WIB
                </dd>
              </div>
            </dl>
          </>
        )}
      </Card>

      <div className="note">
        Daya sesaat dalam W, bukan energi kumulatif. Data historis hanya mencakup panel yang
        ditugaskan kepada Anda.
      </div>
    </>
  );
}

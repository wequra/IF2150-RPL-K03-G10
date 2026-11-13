/**
 * Tes modul pemantauan UC01, UC05, UC06 dengan boundary palsu (tanpa basis data).
 * Memeriksa Algo-009 (status air), Algo-010 (baterai kritis), dan Algo-011 (rentang waktu).
 */
import { describe, expect, it } from "@jest/globals";
import type { DataPerangkatBoundary } from "../../modules/monitoring/DataPerangkatBoundary";
import { ModulMonitoring } from "../../modules/monitoring/ModulMonitoring";
import { MonitoringController } from "../../modules/monitoring/MonitoringController";
import { GalatRentangWaktu } from "../../modules/monitoring/galat";

const WAKTU = new Date("2026-10-28T03:20:00Z");

function perangkat(ubah: Record<string, unknown> = {}) {
  return {
    idPerangkat: "TNK-01",
    jenisPerangkat: "TANGKI_AIR",
    nama: "Tangki Utama",
    lokasi: "Blok A",
    volumeLiter: 7500,
    kapasitasLiter: 10000,
    ambangRendah: 3000,
    ambangKritis: 1000,
    kapasitasPersen: null,
    ambangBatasAman: null,
    dayaWatt: null,
    kapasitas: null,
    pembacaan: [],
    ...ubah,
  };
}

function batere(nilai: number | null, ambang = 20) {
  return perangkat({
    idPerangkat: "BAT-01",
    jenisPerangkat: "BATERAI",
    nama: "Baterai Komunal",
    kapasitasPersen: 80,
    ambangBatasAman: ambang,
    pembacaan: nilai === null ? [] : [{ nilai, waktu: WAKTU }],
  });
}

function tangki(nilai: number | null, kapasitas = 10000, rendah = 3000, kritis = 1000) {
  return perangkat({
    kapasitasLiter: kapasitas,
    ambangRendah: rendah,
    ambangKritis: kritis,
    pembacaan: nilai === null ? [] : [{ nilai, waktu: WAKTU }],
  });
}

class BoundaryPalsu {
  tangki: unknown = null;
  baterai: unknown = null;
  panel: unknown = null;
  panelTeknisi: unknown = null;
  historis: { waktu: Date; dayaDihasilkan: number; energi: number }[] = [];
  notifikasi: Record<string, unknown>[] = [];
  panelDiminta: string | null = null;
  rentangDiminta: { mulai: Date; selesai: Date } | null = null;

  async ambilTangkiTerbaru() {
    return this.tangki;
  }
  async ambilBateraiTerbaru() {
    return this.baterai;
  }
  async ambilPanelTerbaru() {
    return this.panel;
  }
  async ambilPanelTeknisi() {
    return this.panelTeknisi;
  }
  async ambilHistorisTerbaru() {
    return this.historis.length > 0 ? this.historis[this.historis.length - 1] : null;
  }
  async ambilHistorisKinerja(idPanel: string, mulai: Date, selesai: Date) {
    this.panelDiminta = idPanel;
    this.rentangDiminta = { mulai, selesai };
    return this.historis;
  }
  async ambilNotifikasiTeknisi() {
    return this.notifikasi;
  }
  async simpanPembacaan() {
    return true;
  }
}

function buatModul(isi: Partial<BoundaryPalsu> = {}) {
  const boundary = Object.assign(new BoundaryPalsu(), isi);
  return { boundary, modul: new ModulMonitoring(boundary as unknown as DataPerangkatBoundary) };
}

describe("evaluasiKetersediaan (UC01, Algo-009, Algo-010)", () => {
  it("menghitung volume, persen, dan kondisi air Normal", async () => {
    const { modul } = buatModul({ tangki: tangki(8000), baterai: batere(78), panel: perangkat({ dayaWatt: 420, pembacaan: [{ nilai: 420, waktu: WAKTU }] }) });
    const status = await modul.evaluasiKetersediaan();

    expect(status.tangki.volumeLiter).toBe(8000);
    expect(status.tangki.persen).toBe(80);
    expect(status.tangki.kondisi).toBe("Normal");
    expect(status.baterai.kritis).toBe(false);
    expect(status.panel.dayaWatt).toBe(420);
    expect(status.dataUsang).toBe(false);
  });

  it("menandai Rendah dan Kritis pada batas ambang", async () => {
    const rendah = await buatModul({ tangki: tangki(3000), baterai: batere(50) }).modul.evaluasiKetersediaan();
    const kritis = await buatModul({ tangki: tangki(1000), baterai: batere(50) }).modul.evaluasiKetersediaan();

    expect(rendah.tangki.kondisi).toBe("Rendah");
    expect(kritis.tangki.kondisi).toBe("Kritis");
  });

  it("menandai baterai kritis saat kapasitas di bawah ambang aman", async () => {
    const kritis = await buatModul({ tangki: tangki(8000), baterai: batere(15) }).modul.evaluasiKetersediaan();
    const aman = await buatModul({ tangki: tangki(8000), baterai: batere(25) }).modul.evaluasiKetersediaan();

    expect(kritis.baterai.kritis).toBe(true);
    expect(aman.baterai.kritis).toBe(false);
  });

  it("nilai kosong berarti belum ada pembacaan, bukan nol (UC01 Alt 1)", async () => {
    const { modul } = buatModul({
      tangki: tangki(null),
      baterai: batere(null),
      panel: perangkat({ jenisPerangkat: "PANEL_SURYA", dayaWatt: 2400, pembacaan: [] }),
    });
    const status = await modul.evaluasiKetersediaan();

    expect(status.tangki.volumeLiter).toBeNull();
    expect(status.tangki.kondisi).toBeNull();
    expect(status.tangki.waktuPembacaan).toBeNull();
    expect(status.baterai.kapasitasPersen).toBeNull();
    expect(status.baterai.kritis).toBeNull();
    expect(status.panel.dayaWatt).toBeNull();
    expect(status.dataUsang).toBe(true);
  });

  it("dataUsang hanya benar bila semua perangkat tidak punya pembacaan", async () => {
    const { modul } = buatModul({ tangki: tangki(8000), baterai: batere(null), panel: null });
    const status = await modul.evaluasiKetersediaan();
    expect(status.dataUsang).toBe(false);
  });
});

describe("ambilRiwayatPanel (UC06, Algo-011)", () => {
  it("mengambil historis panel yang ditugaskan dan mengubahnya ke bentuk grafik", async () => {
    const { boundary, modul } = buatModul({
      panelTeknisi: perangkat({ idPerangkat: "PNL-01", jenisPerangkat: "PANEL_SURYA", nama: "Panel Atap Balai" }),
      historis: [
        { waktu: new Date("2026-10-28T01:00:00Z"), dayaDihasilkan: 120, energi: 0.12 },
        { waktu: new Date("2026-10-28T02:00:00Z"), dayaDihasilkan: 260, energi: 0.26 },
      ],
    });

    const titik = await modul.ambilRiwayatPanel(
      "TEK-01",
      "2026-10-28T00:00:00+07:00",
      "2026-10-28T23:59:59+07:00",
    );

    expect(titik).toEqual([
      { waktu: "2026-10-28T01:00:00.000Z", dayaDihasilkan: 120, energi: 0.12 },
      { waktu: "2026-10-28T02:00:00.000Z", dayaDihasilkan: 260, energi: 0.26 },
    ]);
    expect(boundary.panelDiminta).toBe("PNL-01");
    expect(boundary.rentangDiminta?.mulai.toISOString()).toBe("2026-10-27T17:00:00.000Z");
    expect(boundary.rentangDiminta?.selesai.toISOString()).toBe("2026-10-28T16:59:59.000Z");
  });

  it("menolak rentang terbalik dan tanggal tidak sah", async () => {
    const { modul } = buatModul();

    await expect(
      modul.ambilRiwayatPanel("TEK-01", "2026-10-29T00:00:00+07:00", "2026-10-28T00:00:00+07:00"),
    ).rejects.toBeInstanceOf(GalatRentangWaktu);
    await expect(modul.ambilRiwayatPanel("TEK-01", "bukan-tanggal", "2026-10-28T00:00:00+07:00")).rejects.toBeInstanceOf(
      GalatRentangWaktu,
    );
  });

  it("mengembalikan daftar kosong bila teknisi tidak punya panel (UC06 Alt 1)", async () => {
    const { modul } = buatModul({ panelTeknisi: null });
    const titik = await modul.ambilRiwayatPanel(
      "TEK-01",
      "2026-10-28T00:00:00+07:00",
      "2026-10-28T23:59:59+07:00",
    );
    expect(titik).toEqual([]);
  });
});

describe("daftarPeringatanTeknisi (UC05)", () => {
  it("hanya meneruskan peringatan KRITIS beserta nama perangkat dan ambang aman", async () => {
    const { modul } = buatModul({
      notifikasi: [
        {
          idNotifikasi: "NTF-01",
          idPerangkat: "BAT-01",
          pesan: "Kapasitas baterai 15%.",
          level: "KRITIS",
          kapasitasSaatIni: 15,
          waktu: WAKTU,
          statusPengiriman: "PENDING",
          statusBaca: false,
          perangkat: { nama: "Baterai Komunal", ambangBatasAman: 20 },
        },
        {
          idNotifikasi: "NTF-02",
          idPerangkat: "BAT-01",
          pesan: "Kapasitas baterai 12%.",
          level: "KRITIS",
          kapasitasSaatIni: null,
          waktu: WAKTU,
          statusPengiriman: "TERKIRIM",
          statusBaca: true,
          perangkat: { nama: "Baterai Komunal", ambangBatasAman: 20 },
        },
        {
          idNotifikasi: "NTF-03",
          idPerangkat: "BAT-01",
          pesan: "Pemeriksaan rutin.",
          level: "INFO",
          kapasitasSaatIni: 80,
          waktu: WAKTU,
          statusPengiriman: "TERKIRIM",
          statusBaca: true,
          perangkat: { nama: "Baterai Komunal", ambangBatasAman: 20 },
        },
      ],
    });

    const hasil = await modul.daftarPeringatanTeknisi("TEK-01");

    expect(hasil).toHaveLength(1);
    expect(hasil[0]).toMatchObject({
      idNotifikasi: "NTF-01",
      level: "KRITIS",
      kapasitasSaatIni: 15,
      statusPengiriman: "PENDING",
      namaPerangkat: "Baterai Komunal",
      ambangBatasAman: 20,
      waktu: "2026-10-28T03:20:00.000Z",
    });
  });

  it("mengembalikan daftar kosong bila tidak ada notifikasi", async () => {
    const { modul } = buatModul();
    expect(await modul.daftarPeringatanTeknisi("TEK-01")).toEqual([]);
  });
});

describe("MonitoringController", () => {
  it("rentang tidak valid dibalas VALIDASI_GAGAL tanpa menyentuh basis data", async () => {
    const hasil = await new MonitoringController().ambilRiwayatPanel(
      "TEK-01",
      "2026-10-29T00:00:00+07:00",
      "2026-10-28T00:00:00+07:00",
    );

    expect(hasil.ok).toBe(false);
    if (!hasil.ok) {
      expect(hasil.kode).toBe("VALIDASI_GAGAL");
      expect(hasil.pesan).toBe("Tanggal mulai tidak boleh melewati tanggal akhir.");
    }
  });
});

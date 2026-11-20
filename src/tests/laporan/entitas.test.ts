import { describe, expect, it, jest } from "@jest/globals";
import { LaporanGangguan, type DataLaporan } from "@/modules/laporan/internal/LaporanGangguan";
import { PenugasanLaporan } from "@/modules/laporan/internal/PenugasanLaporan";
import { RiwayatStatusLaporan } from "@/modules/laporan/internal/RiwayatStatusLaporan";
import { labelStatus } from "@/modules/laporan/internal/StatusLaporan";

const FORM = { jenisGangguan: "  Kebocoran pipa ", deskripsi: " Bocor di RT 02 ", fotoPendukung: ["a.jpg"] };
const WAKTU = new Date("2026-10-28T01:10:00Z");

describe("C20 LaporanGangguan (entitas)", () => {
  it("C20-UT02 baru memberi ID unik dan menyalin foto sehingga body asli tidak ikut berubah", () => {
    const a = LaporanGangguan.baru(FORM, 7, WAKTU);
    const b = LaporanGangguan.baru(FORM, 7, WAKTU);
    FORM.fotoPendukung.push("b.jpg");
    expect(a.idLaporan).toMatch(/^LAP-[0-9A-F]{8}$/);
    expect(a.idLaporan).not.toBe(b.idLaporan);
    expect(a.toData().fotoPendukung).toEqual(["a.jpg"]);
    FORM.fotoPendukung.pop();
  });

  it("C20-UT04 ubahStatus sah memajukan status satu langkah", () => {
    const l = LaporanGangguan.baru(FORM, 7, WAKTU);
    l.ubahStatus("SEDANG_DIPERBAIKI");
    expect(l.status).toBe("SEDANG_DIPERBAIKI");
    l.ubahStatus("SELESAI");
    expect(l.status).toBe("SELESAI");
    expect(l.statusBerikutnya()).toEqual([]);
  });

  it("C20-UT06 getRingkasan dan getDetailLaporan memuat kolom sesuai kontrak", () => {
    const l = LaporanGangguan.baru(FORM, 7, WAKTU);
    expect(l.getRingkasan()).toEqual({
      idLaporan: l.idLaporan,
      jenisGangguan: "Kebocoran pipa",
      status: "MENUNGGU",
      waktuDibuat: "2026-10-28T01:10:00.000Z",
    });
    expect(l.getDetailLaporan("Sari")).toMatchObject({ deskripsi: "Bocor di RT 02", namaPemilik: "Sari" });
  });

  it("C20-UT07 simpan meneruskan data ke penyimpan dan menyampaikan hasilnya", async () => {
    const data: DataLaporan = LaporanGangguan.baru(FORM, 7, WAKTU).toData();
    const l = LaporanGangguan.dariData(data);
    const berhasil = { simpanLaporan: jest.fn(async () => true) };
    const gagal = { simpanLaporan: jest.fn(async () => false) };
    expect(await l.simpan(berhasil)).toBe(true);
    expect(berhasil.simpanLaporan).toHaveBeenCalledWith(data);
    expect(await l.simpan(gagal)).toBe(false);
  });
});

describe("C21 StatusLaporan (label)", () => {
  it("C21-UT04 labelStatus mengubah kode status menjadi teks tampilan", () => {
    expect(labelStatus("MENUNGGU")).toBe("Menunggu");
    expect(labelStatus("SEDANG_DIPERBAIKI")).toBe("Sedang diperbaiki");
    expect(labelStatus("SELESAI")).toBe("Selesai");
  });
});

describe("C22 RiwayatStatusLaporan", () => {
  it("C22-UT01 mencatat laporan, status, dan waktu dengan ID riwayat baru", () => {
    const r = new RiwayatStatusLaporan("LAP-1", "SELESAI", WAKTU);
    expect(r.data).toMatchObject({ idLaporan: "LAP-1", status: "SELESAI", timestamp: WAKTU });
    expect(r.data.idRiwayat).toMatch(/^RWY-[0-9A-F]{8}$/);
  });

  it("C22-UT02 ringkas mengubah waktu menjadi teks ISO", () => {
    const r = new RiwayatStatusLaporan("LAP-1", "SEDANG_DIPERBAIKI", WAKTU);
    expect(RiwayatStatusLaporan.ringkas(r.data)).toEqual({ status: "SEDANG_DIPERBAIKI", timestamp: "2026-10-28T01:10:00.000Z" });
  });

  it("C22-UT03 dua catatan untuk laporan dan status yang sama tetap punya ID berbeda", () => {
    const a = new RiwayatStatusLaporan("LAP-1", "SELESAI", WAKTU);
    const b = new RiwayatStatusLaporan("LAP-1", "SELESAI", WAKTU);
    expect(a.data.idRiwayat).not.toBe(b.data.idRiwayat);
  });
});

describe("C24 PenugasanLaporan", () => {
  const p = new PenugasanLaporan({ idPenugasan: "PEN-1", idTeknisi: "TEK-01", idLaporan: "LAP-1", waktuPenugasan: WAKTU });

  it("C24-UT01 verifikasi benar untuk teknisi dan laporan yang ditugaskan", () => {
    expect(p.verifikasi("TEK-01", "LAP-1")).toBe(true);
  });

  it("C24-UT02 verifikasi salah untuk teknisi lain pada laporan yang sama", () => {
    expect(p.verifikasi("TEK-02", "LAP-1")).toBe(false);
  });

  it("C24-UT03 verifikasi salah untuk laporan lain dan untuk masukan kosong", () => {
    expect(p.verifikasi("TEK-01", "LAP-2")).toBe(false);
    expect(p.verifikasi("", "")).toBe(false);
  });
});

import { describe, expect, it, jest } from "@jest/globals";
import type { FormPemeliharaan } from "@/contracts";
import { CatatanPemeliharaan, type PenyimpanCatatan } from "@/modules/pemeliharaan/internal/CatatanPemeliharaan";

const FORM: FormPemeliharaan = {
  idPerangkat: "  BAT-01 ",
  waktuPelaksanaan: "2026-10-28T11:00:00+07:00",
  tindakan: "  Membersihkan terminal  ",
  catatanHasil: " Terminal bersih. ",
};

const buatPenyimpan = (hasil: boolean) => ({
  simpanCatatan: jest.fn<PenyimpanCatatan["simpanCatatan"]>(async () => hasil),
});

describe("C27 CatatanPemeliharaan", () => {
  it("C27-UT01 konstruktor membuat ID unik pada setiap instans", () => {
    const a = new CatatanPemeliharaan(FORM, "TEK-01");
    const b = new CatatanPemeliharaan(FORM, "TEK-01");
    expect(a.idCatatan).toMatch(/^[0-9a-f-]{36}$/);
    expect(a.idCatatan).not.toBe(b.idCatatan);
  });

  it("C27-UT02 konstruktor memangkas spasi dan memakai idTeknisi dari sesi, bukan dari body", () => {
    const c = new CatatanPemeliharaan({ ...FORM, idTeknisi: "TEK-LAIN" } as FormPemeliharaan, "TEK-01");
    expect(c).toMatchObject({
      idTeknisi: "TEK-01",
      idPerangkat: "BAT-01",
      tindakan: "Membersihkan terminal",
      catatanHasil: "Terminal bersih.",
      waktuPelaksanaan: "2026-10-28T11:00:00+07:00",
    });
  });

  it("C27-UT03 validasiFormulir menerima isian lengkap", () => {
    expect(new CatatanPemeliharaan(FORM, "TEK-01").validasiFormulir()).toBe(true);
  });

  it.each(["idPerangkat", "tindakan", "catatanHasil"] as const)(
    "C27-UT04 validasiFormulir menolak kolom %s yang hanya berisi spasi (batas)",
    (kolom) => {
      expect(new CatatanPemeliharaan({ ...FORM, [kolom]: "   " }, "TEK-01").validasiFormulir()).toBe(false);
    },
  );

  it.each(["2026-10-28T11:00:00", "2026-02-31T11:00:00+07:00", ""])(
    "C27-UT05 validasiFormulir menolak waktu tidak valid (%j)",
    (waktuPelaksanaan) => {
      expect(new CatatanPemeliharaan({ ...FORM, waktuPelaksanaan }, "TEK-01").validasiFormulir()).toBe(false);
    },
  );

  it("C27-UT06 simpan meneruskan baris dengan waktu bertipe Date ke penyimpan", async () => {
    const penyimpan = buatPenyimpan(true);
    const c = new CatatanPemeliharaan(FORM, "TEK-01");

    await expect(c.simpan(penyimpan)).resolves.toBe(true);
    const baris = penyimpan.simpanCatatan.mock.calls[0][0];
    expect(baris).toEqual({
      idCatatan: c.idCatatan,
      idTeknisi: "TEK-01",
      idPerangkat: "BAT-01",
      waktuPelaksanaan: new Date("2026-10-28T04:00:00.000Z"),
      tindakan: "Membersihkan terminal",
      catatanHasil: "Terminal bersih.",
    });
  });

  it("C27-UT07 simpan mengembalikan false bila penyimpan gagal", async () => {
    await expect(new CatatanPemeliharaan(FORM, "TEK-01").simpan(buatPenyimpan(false))).resolves.toBe(false);
  });
});

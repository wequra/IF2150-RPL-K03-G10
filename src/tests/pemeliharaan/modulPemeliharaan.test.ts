import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import type { FormPemeliharaan } from "@/contracts";
import { ModulPemeliharaan, type RepositoriPemeliharaan } from "@/modules/pemeliharaan/internal/ModulPemeliharaan";

const FORM: FormPemeliharaan = {
  idPerangkat: "PNL-01",
  waktuPelaksanaan: "2026-10-28T11:00:00+07:00",
  tindakan: "Membersihkan panel",
  catatanHasil: "Daya normal",
};

function buatRepo() {
  return {
    cariPerangkatTeknisi: jest.fn<RepositoriPemeliharaan["cariPerangkatTeknisi"]>(async (_, id) => ({ idPerangkat: id, nama: "Panel" })),
    daftarPerangkatTeknisi: jest.fn<RepositoriPemeliharaan["daftarPerangkatTeknisi"]>(async () => []),
    simpanCatatan: jest.fn<RepositoriPemeliharaan["simpanCatatan"]>(async () => true),
  };
}

describe("ModulPemeliharaan.simpanCatatan", () => {
  let repo: ReturnType<typeof buatRepo>;
  beforeEach(() => {
    repo = buatRepo();
  });

  it("MP-UT01 mengembalikan idCatatan yang sama dengan baris yang disimpan (normal)", async () => {
    const hasil = await new ModulPemeliharaan(repo).simpanCatatan("TEK-01", FORM);
    expect(hasil.ok).toBe(true);
    if (hasil.ok) expect(hasil.data.idCatatan).toBe(repo.simpanCatatan.mock.calls[0][0].idCatatan);
  });

  it("MP-UT02 formulir tidak lengkap menghasilkan VALIDASI_GAGAL tanpa menyentuh data", async () => {
    const hasil = await new ModulPemeliharaan(repo).simpanCatatan("TEK-01", { ...FORM, tindakan: "" });
    expect(hasil).toEqual({ ok: false, kode: "VALIDASI_GAGAL", pesan: "Formulir tidak lengkap" });
    expect(repo.cariPerangkatTeknisi).not.toHaveBeenCalled();
    expect(repo.simpanCatatan).not.toHaveBeenCalled();
  });

  it("MP-UT03 perangkat di luar lingkup teknisi menghasilkan TIDAK_DITEMUKAN", async () => {
    repo.cariPerangkatTeknisi.mockResolvedValue(null);
    const hasil = await new ModulPemeliharaan(repo).simpanCatatan("TEK-01", FORM);
    expect(hasil).toEqual({ ok: false, kode: "TIDAK_DITEMUKAN", pesan: "Perangkat tidak ditemukan" });
    expect(repo.simpanCatatan).not.toHaveBeenCalled();
  });

  it("MP-UT04 kegagalan penyimpanan menghasilkan GAGAL_SIMPAN", async () => {
    repo.simpanCatatan.mockResolvedValue(false);
    const hasil = await new ModulPemeliharaan(repo).simpanCatatan("TEK-01", FORM);
    expect(hasil).toEqual({ ok: false, kode: "GAGAL_SIMPAN", pesan: "Penyimpanan gagal" });
  });

  it("MP-UT05 idTeknisi parameter dipakai untuk cek lingkup dan untuk baris tersimpan (keamanan)", async () => {
    await new ModulPemeliharaan(repo).simpanCatatan("TEK-07", FORM);
    expect(repo.cariPerangkatTeknisi).toHaveBeenCalledWith("TEK-07", "PNL-01");
    expect(repo.simpanCatatan.mock.calls[0][0].idTeknisi).toBe("TEK-07");
  });

  it("MP-UT06 galat basis data dari pencarian perangkat diteruskan ke pemanggil", async () => {
    repo.cariPerangkatTeknisi.mockRejectedValue(new Error("db mati"));
    await expect(new ModulPemeliharaan(repo).simpanCatatan("TEK-01", FORM)).rejects.toThrow("db mati");
    expect(repo.simpanCatatan).not.toHaveBeenCalled();
  });
});

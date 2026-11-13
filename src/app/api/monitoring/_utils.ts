import { NextResponse } from "next/server";
import type { ApiGalat, ApiRespons, KodeGalat } from "@/contracts";
import { GalatAuth, type KonteksSesi, type Peran } from "@/lib/auth/konteks";
import { getSesi } from "@/lib/auth/server";

const STATUS_HTTP: Record<KodeGalat, number> = {
  VALIDASI_GAGAL: 400,
  TIDAK_TERAUTENTIKASI: 401,
  TIDAK_BERWENANG: 403,
  TIDAK_DITEMUKAN: 404,
  KONFLIK: 409,
  DATA_BELUM_LENGKAP: 422,
  GAGAL_SIMPAN: 500,
  GAGAL_INTERNAL: 500,
};

export function responGalat(kode: KodeGalat, pesan: string) {
  const isi: ApiGalat = { ok: false, kode, pesan };
  return NextResponse.json(isi, { status: STATUS_HTTP[kode] });
}

export function responHasil<T>(hasil: ApiRespons<T>, sukses = 200) {
  return NextResponse.json(hasil, { status: hasil.ok ? sukses : STATUS_HTTP[hasil.kode] });
}

// Sesi dibaca di server; peran diperiksa di sini sebelum controller dijalankan.
export async function ambilSesiPeran<P extends Peran>(
  peran: P,
): Promise<Extract<KonteksSesi, { peran: P }> | NextResponse> {
  try {
    const sesi = await getSesi();
    if (!sesi) return responGalat("TIDAK_TERAUTENTIKASI", "Silakan masuk terlebih dahulu.");
    if (sesi.peran !== peran) return responGalat("TIDAK_BERWENANG", "Anda tidak berwenang membuka data ini.");
    return sesi as Extract<KonteksSesi, { peran: P }>;
  } catch (e) {
    if (e instanceof GalatAuth) return responGalat("TIDAK_TERAUTENTIKASI", "Silakan masuk terlebih dahulu.");
    console.error("[monitoring] Gagal membaca sesi:", e);
    return responGalat("GAGAL_INTERNAL", "Terjadi kesalahan. Coba lagi.");
  }
}

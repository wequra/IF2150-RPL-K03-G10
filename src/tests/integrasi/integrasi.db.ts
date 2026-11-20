/**
 * Uji integrasi HIUPL 4.3 terhadap PostgreSQL sungguhan (tanpa mock).
 * Jest tidak bisa memuat Prisma Client (modul ESM), jadi dijalankan dengan tsx:
 *   DATABASE_URL=postgresql://... npx tsx tests/integrasi/integrasi.db.ts
 * Basis data harus sudah dimigrasi dan di-seed (npx prisma migrate deploy; npx tsx prisma/seed.ts).
 * Semua data uji berawalan ITG- dan dihapus di akhir. Seed tidak diubah.
 * Kata sandi seed: SEED_PASSWORD atau "uji-fajar-123".
 */
import assert from "node:assert/strict";

const AWAL = `ITG-${Date.now()}`;
const id = (n: string) => `${AWAL}-${n}`;
const SANDI_SEED = process.env.SEED_PASSWORD ?? "uji-fajar-123";

type Kasus = { id: string; antarmuka: string; judul: string; uji: () => Promise<void> };
const kasus: Kasus[] = [];
const tambah = (idUji: string, antarmuka: string, judul: string, uji: () => Promise<void>) =>
  kasus.push({ id: idUji, antarmuka, judul, uji });

// kirim() pada PeringatanDayaKritis memakai Math.random() > 0.2 sebagai gateway simulasi.
async function denganGateway<T>(berhasil: boolean, kerja: () => Promise<T>): Promise<T> {
  const asli = Math.random;
  Math.random = () => (berhasil ? 0.9 : 0.1);
  try {
    return await kerja();
  } finally {
    Math.random = asli;
  }
}

async function main() {
  const { prisma } = await import("../../lib/prisma");
  const { repositoriPemeliharaan } = await import("../../modules/pemeliharaan/repository");
  const { buatPemeliharaanService } = await import("../../modules/pemeliharaan/service");
  const { DataAkunBoundary } = await import("../../modules/akun/boundary");
  const { ModulAkun } = await import("../../modules/akun/modul");
  const { CalonPengguna } = await import("../../modules/akun/entity");
  const { EmailSudahTerdaftar } = await import("../../modules/akun/galat");
  const { DataPerangkatBoundary } = await import("../../modules/monitoring/DataPerangkatBoundary");
  const { ModulNotifikasi } = await import("../../modules/notifikasi/ModulNotifikasi");
  const { POST: telemetri } = await import("../../app/api/telemetri/route");
  const { buatLaporanController } = await import("../../modules/laporan/index");
  const { repositoriLaporan } = await import("../../modules/laporan/repository");
  const { ModulIuran } = await import("../../modules/iuran/internal/ModulIuran");
  const { repositoriIuran } = await import("../../modules/iuran/repository");

  const warga1 = await prisma.warga.findFirstOrThrow({ where: { idAkun: "AKN-WARGA-1" } });
  const warga2 = await prisma.warga.findFirstOrThrow({ where: { idAkun: "AKN-WARGA-2" } });
  const sesiWarga = (w: { idWarga: number }) =>
    ({ email: "w@fajar.test", nama: "W", statusAkun: "DISETUJUI", peran: "WARGA", idWarga: w.idWarga, idKomunitas: "KOM-01" }) as const;
  const sesiTeknisi = { email: "t@fajar.test", nama: "T", statusAkun: "DISETUJUI", peran: "TEKNISI", idTeknisi: "TEK-01" } as const;
  const sesiPengurus = { peran: "PENGURUS", idPengurus: "PGR-01" } as const;
  const akunBoundary = new DataAkunBoundary();
  const modulAkun = new ModulAkun(akunBoundary);
  const perangkatBoundary = new DataPerangkatBoundary();
  const FORM_PML = (idPerangkat: string) => ({
    idPerangkat,
    waktuPelaksanaan: "2026-10-28T11:00:00+07:00",
    tindakan: `${AWAL} membersihkan`,
    catatanHasil: "Normal",
  });

  // ---- IA-01: PemeliharaanController -> ModulPemeliharaan -> DataPerangkatBoundary ----
  tambah("INT-TC01", "IA-01", "Normal: catatan pemeliharaan tersimpan dan terbaca ulang dari basis data", async () => {
    const hasil = await buatPemeliharaanService("TEK-01", repositoriPemeliharaan).simpanCatatan(FORM_PML("PNL-01"));
    assert.equal(hasil.ok, true);
    if (!hasil.ok) return;
    const baris = await prisma.catatanPemeliharaan.findUniqueOrThrow({ where: { idCatatan: hasil.data.idCatatan } });
    assert.equal(baris.idTeknisi, "TEK-01");
    assert.equal(baris.idPerangkat, "PNL-01");
    assert.equal(baris.waktuPelaksanaan.toISOString(), "2026-10-28T04:00:00.000Z");
    assert.equal(baris.catatanHasil, "Normal");
  });
  tambah("INT-TC02", "IA-01", "Gagal: perangkat nyata tetapi tidak ditugaskan ke teknisi", async () => {
    const idP = id("perangkat-lain");
    await prisma.perangkat.create({ data: { idPerangkat: idP, jenisPerangkat: "TANGKI_AIR", nama: "Tangki ITG", lokasi: "uji" } });
    const hasil = await buatPemeliharaanService("TEK-01", repositoriPemeliharaan).simpanCatatan(FORM_PML(idP));
    assert.deepEqual([hasil.ok, !hasil.ok && hasil.kode], [false, "TIDAK_DITEMUKAN"]);
    assert.equal(await prisma.catatanPemeliharaan.count({ where: { idPerangkat: idP } }), 0);
  });

  // ---- IA-02: DataPerangkatBoundary (bagian UC08) <-> Database ----
  tambah("INT-TC03", "IA-02", "Normal: daftar perangkat teknisi diurutkan menurut ID", async () => {
    const daftar = await repositoriPemeliharaan.daftarPerangkatTeknisi("TEK-01");
    const ids = daftar.map((p) => p.idPerangkat);
    assert.deepEqual(ids, [...ids].sort());
    for (const wajib of ["BAT-01", "PNL-01", "TNK-01"]) assert.ok(ids.includes(wajib), `${wajib} ada`);
    assert.deepEqual(await repositoriPemeliharaan.daftarPerangkatTeknisi("TEK-TIDAK-ADA"), []);
  });
  tambah("INT-TC04", "IA-02", "Gagal: INSERT melanggar kunci asing mengembalikan false tanpa baris", async () => {
    const galatAsli = console.error;
    console.error = () => {}; // galat INSERT yang disengaja tidak perlu muncul di keluaran uji
    try {
      const ok = await repositoriPemeliharaan.simpanCatatan({
        idCatatan: id("ctt-fk"), idTeknisi: "TEK-TIDAK-ADA", idPerangkat: "PNL-01",
        waktuPelaksanaan: new Date(), tindakan: AWAL, catatanHasil: "x",
      });
      assert.equal(ok, false);
    } finally {
      console.error = galatAsli;
    }
    assert.equal(await prisma.catatanPemeliharaan.count({ where: { idCatatan: id("ctt-fk") } }), 0);
  });

  // ---- IA-03: DataAkunBoundary <-> Database ----
  tambah("INT-TC05", "IA-03", "Normal: akun disimpan lalu dibaca ulang dengan status MENUNGGU", async () => {
    const email = `${id("a")}@fajar.test`;
    assert.equal(await akunBoundary.simpanAkun({ email, nama: "Uji A", password: "scrypt$hash-uji", peran: "WARGA", statusAkun: "MENUNGGU" }), true);
    assert.deepEqual(await akunBoundary.cariEmail(email), { email, nama: "Uji A", peran: "WARGA", statusAkun: "MENUNGGU" });
    const lengkap = await akunBoundary.ambilAkun(email);
    assert.equal(lengkap?.email, email);
  });
  tambah("INT-TC06", "IA-03", "Gagal: email duplikat ditolak oleh batas unik basis data", async () => {
    const email = `${id("dup")}@fajar.test`;
    const data = { email, nama: "Uji", password: "scrypt$x", peran: "WARGA", statusAkun: "MENUNGGU" } as const;
    await akunBoundary.simpanAkun(data);
    await assert.rejects(() => akunBoundary.simpanAkun(data), EmailSudahTerdaftar);
    assert.equal(await prisma.akun.count({ where: { email } }), 1);
  });
  tambah("INT-TC07", "IA-03", "Konkurensi: dua Pengurus memutuskan akun yang sama, tepat satu berhasil", async () => {
    const email = `${id("kon")}@fajar.test`;
    await akunBoundary.simpanAkun({ email, nama: "Uji", password: "scrypt$x", peran: "WARGA", statusAkun: "MENUNGGU" });
    const hasil = await Promise.all([
      akunBoundary.perbaruiStatusAkun(email, "MENUNGGU", "DISETUJUI"),
      akunBoundary.perbaruiStatusAkun(email, "MENUNGGU", "DITOLAK"),
    ]);
    assert.equal(hasil.filter(Boolean).length, 1);
    assert.notEqual((await akunBoundary.cariEmail(email))?.statusAkun, "MENUNGGU");
  });

  // ---- IA-04: ModulAkun -> DataAkunBoundary -> Database ----
  tambah("INT-TC08", "IA-04", "Normal: registrasiCalon menyimpan hash scrypt, bukan kata sandi asli", async () => {
    const email = `${id("reg")}@fajar.test`;
    const ringkas = await modulAkun.registrasiCalon(new CalonPengguna("Uji Reg", email, "sandi-rahasia-1", "TEKNISI"));
    assert.equal(ringkas.statusAkun, "MENUNGGU");
    const baris = await prisma.akun.findUniqueOrThrow({ where: { email } });
    assert.ok(baris.password.startsWith("scrypt$"), "hash scrypt");
    assert.ok(!baris.password.includes("sandi-rahasia-1"));
  });
  tambah("INT-TC09", "IA-04", "Normal dan gagal: autentikasi akun seed, sandi salah, dan email tak terdaftar", async () => {
    const akun = await modulAkun.autentikasi("warga@fajar.test", SANDI_SEED);
    assert.equal(akun?.email, "warga@fajar.test");
    assert.equal(await modulAkun.autentikasi("warga@fajar.test", "sandi-salah"), null);
    assert.equal(await modulAkun.autentikasi("tidak-ada@fajar.test", SANDI_SEED), null);
  });

  // ---- IA-05: DataPerangkatBoundary <-> Database ----
  tambah("INT-TC10", "IA-05", "Normal: pembacaan sensor tersimpan dan terbaca ulang", async () => {
    const waktu = "2026-11-01T03:00:00.000Z";
    assert.equal(await perangkatBoundary.simpanPembacaan({ idPerangkat: "TNK-01", nilai: 4321, satuan: AWAL, waktu }), true);
    const baris = await prisma.pembacaanSensor.findFirstOrThrow({ where: { satuan: AWAL } });
    assert.deepEqual([baris.idPerangkat, baris.nilai, baris.waktu.toISOString()], ["TNK-01", 4321, waktu]);
  });
  tambah("INT-TC11", "IA-05", "Gagal: pembacaan untuk perangkat tak terdaftar ditolak tanpa baris", async () => {
    const galatAsli = console.error;
    console.error = () => {};
    try {
      assert.equal(await perangkatBoundary.simpanPembacaan({ idPerangkat: "TIDAK-ADA", nilai: 1, satuan: id("fk"), waktu: new Date().toISOString() }), false);
    } finally {
      console.error = galatAsli;
    }
    assert.equal(await prisma.pembacaanSensor.count({ where: { satuan: id("fk") } }), 0);
  });
  tambah("INT-TC12", "IA-05", "Batas: riwayat panel pada rentang, batas awal dan akhir ikut terhitung", async () => {
    const t = (jam: string) => new Date(`2026-10-28T${jam}:00+07:00`);
    const dalam = await perangkatBoundary.ambilHistorisKinerja("PNL-01", t("09:00"), t("13:00"));
    assert.deepEqual(dalam.map((d) => d.idData), ["KNR-2", "KNR-3"]);
    const batas = await perangkatBoundary.ambilHistorisKinerja("PNL-01", t("10:00"), t("14:00"));
    assert.deepEqual(batas.map((d) => d.idData), ["KNR-2", "KNR-3", "KNR-4"]);
    assert.deepEqual(await perangkatBoundary.ambilHistorisKinerja("PNL-01", t("17:00"), t("18:00")), []);
  });
  tambah("INT-TC13", "IA-05", "Normal: penanggung jawab perangkat dibaca dari tabel penugasan", async () => {
    assert.deepEqual(await perangkatBoundary.cariPenugasanPerangkat("BAT-01"), [{ idTeknisi: "TEK-01", idPerangkat: "BAT-01" }]);
    assert.deepEqual(await perangkatBoundary.cariPenugasanPerangkat("TIDAK-ADA"), []);
  });

  // ---- IA-06: TelemetriAPI -> MonitoringController -> ModulMonitoring/ModulNotifikasi -> Boundary -> Database ----
  const kirimTelemetri = (badan: unknown) =>
    telemetri(new Request("http://lokal.test/api/telemetri", { method: "POST", body: JSON.stringify(badan), headers: { "Content-Type": "application/json" } }));
  let idNotifikasiPending = "";
  tambah("INT-TC14", "IA-06", "Normal: baterai di bawah ambang menyimpan pembacaan dan peringatan PENDING saat gateway gagal", async () => {
    const respons = await denganGateway(false, () => kirimTelemetri({ idPerangkat: "BAT-01", nilai: 12, satuan: id("bat-krit"), waktu: new Date().toISOString() }));
    assert.equal(respons.status, 201);
    assert.equal(await prisma.pembacaanSensor.count({ where: { satuan: id("bat-krit") } }), 1);
    const notif = await prisma.notifikasi.findFirstOrThrow({ where: { idPerangkat: "BAT-01", kapasitasSaatIni: 12 } });
    assert.deepEqual([notif.idTeknisi, notif.level, notif.statusPengiriman], ["TEK-01", "KRITIS", "PENDING"]);
    idNotifikasiPending = notif.idNotifikasi;
  });
  tambah("INT-TC15", "IA-06", "Normal: baterai di atas ambang hanya menyimpan pembacaan tanpa peringatan", async () => {
    const sebelum = await prisma.notifikasi.count();
    const respons = await denganGateway(false, () => kirimTelemetri({ idPerangkat: "BAT-01", nilai: 55, satuan: id("bat-ok"), waktu: new Date().toISOString() }));
    assert.equal(respons.status, 201);
    assert.equal(await prisma.pembacaanSensor.count({ where: { satuan: id("bat-ok") } }), 1);
    assert.equal(await prisma.notifikasi.count(), sebelum);
  });
  tambah("INT-TC16", "IA-06", "Gagal: payload tidak lengkap ditolak 400 tanpa menyentuh basis data", async () => {
    const respons = await kirimTelemetri({ idPerangkat: "BAT-01", nilai: 50, waktu: new Date().toISOString() });
    assert.equal(respons.status, 400);
    assert.equal(((await respons.json()) as { kode: string }).kode, "VALIDASI_GAGAL");
  });
  tambah("INT-TC17", "IA-06", "Gagal: perangkat tak terdaftar menghasilkan GAGAL_SIMPAN 500 tanpa baris", async () => {
    const galatAsli = console.error;
    console.error = () => {};
    try {
      const respons = await kirimTelemetri({ idPerangkat: "TIDAK-ADA", nilai: 10, satuan: id("fk2"), waktu: new Date().toISOString() });
      assert.equal(respons.status, 500);
      assert.equal(((await respons.json()) as { kode: string }).kode, "GAGAL_SIMPAN");
    } finally {
      console.error = galatAsli;
    }
    assert.equal(await prisma.pembacaanSensor.count({ where: { satuan: id("fk2") } }), 0);
  });

  // ---- IA-07: ModulNotifikasi -> DataPerangkatBoundary -> Database ----
  tambah("INT-TC18", "IA-07", "Normal: kirim ulang peringatan PENDING setelah gateway pulih menandai TERKIRIM di basis data", async () => {
    assert.ok(idNotifikasiPending, "bergantung pada INT-TC14");
    const jumlah = await denganGateway(true, () => new ModulNotifikasi().kirimUlangPending("TEK-01"));
    assert.ok(jumlah >= 1, "modul melaporkan pengiriman ulang berhasil");
    const baris = await prisma.notifikasi.findUniqueOrThrow({ where: { idNotifikasi: idNotifikasiPending } });
    assert.equal(baris.statusPengiriman, "TERKIRIM", `status di basis data tetap ${baris.statusPengiriman} walau kirimUlangPending melaporkan ${jumlah} terkirim`);
  });

  // ---- IA-08: LaporanController -> ModulLaporan -> DataLaporanBoundary -> Database ----
  let idLaporanBaru = "";
  tambah("INT-TC19", "IA-08", "Normal: Warga terdaftar mengirim laporan, tersimpan MENUNGGU dan muncul di daftar miliknya", async () => {
    const c = buatLaporanController(sesiWarga(warga1));
    const hasil = await c.kirimLaporan({ jenisGangguan: "Kebocoran pipa", deskripsi: `${AWAL} uji integrasi` });
    assert.equal(hasil.ok, true);
    if (!hasil.ok) return;
    idLaporanBaru = hasil.data.idLaporan;
    const baris = await prisma.laporanGangguan.findUniqueOrThrow({ where: { idLaporan: idLaporanBaru } });
    assert.deepEqual([baris.idWarga, baris.status], [warga1.idWarga, "MENUNGGU"]);
    const daftar = await c.daftarMilikWarga();
    assert.ok(daftar.ok && daftar.data.some((l) => l.idLaporan === idLaporanBaru));
  });
  tambah("INT-TC20", "IA-08", "Keamanan: Warga lain tidak dapat membaca laporan milik warga pertama", async () => {
    assert.ok(idLaporanBaru, "bergantung pada INT-TC19");
    const hasil = await buatLaporanController(sesiWarga(warga2)).detailMilikWarga(idLaporanBaru);
    assert.deepEqual([hasil.ok, !hasil.ok && hasil.kode], [false, "TIDAK_DITEMUKAN"]);
  });
  tambah("INT-TC21", "IA-08", "Gagal: Warga belum terdaftar ditolak sebelum ada baris laporan", async () => {
    const akun = await prisma.akun.create({
      data: { idAkun: id("akn-tt"), email: `${id("tt")}@fajar.test`, nama: "Belum Terdaftar", peran: "WARGA", password: "scrypt$x", statusAkun: "DISETUJUI" },
    });
    const wargaTt = await prisma.warga.create({ data: { idAkun: akun.idAkun, idKomunitas: "KOM-01", statusTerdaftar: false } });
    const hasil = await buatLaporanController(sesiWarga(wargaTt)).kirimLaporan({ jenisGangguan: "Air tidak mengalir", deskripsi: id("tt") });
    assert.deepEqual([hasil.ok, !hasil.ok && hasil.kode], [false, "TIDAK_BERWENANG"]);
    assert.equal(await prisma.laporanGangguan.count({ where: { idWarga: wargaTt.idWarga } }), 0);
  });
  tambah("INT-TC22", "IA-08", "Normal dan gagal: Teknisi bertugas memajukan status, status dan riwayat tersimpan bersama, lompat ditolak", async () => {
    assert.ok(idLaporanBaru, "bergantung pada INT-TC19");
    await prisma.penugasanLaporan.create({ data: { idTeknisi: "TEK-01", idLaporan: idLaporanBaru } });
    const c = buatLaporanController(sesiTeknisi);
    const lompat = await c.perbaruiStatus(idLaporanBaru, "SELESAI");
    assert.equal(lompat.ok, false);
    assert.equal(await prisma.riwayatStatusLaporan.count({ where: { idLaporan: idLaporanBaru } }), 0);
    const maju = await c.perbaruiStatus(idLaporanBaru, "SEDANG_DIPERBAIKI");
    assert.equal(maju.ok, true);
    const baris = await prisma.laporanGangguan.findUniqueOrThrow({ where: { idLaporan: idLaporanBaru } });
    assert.equal(baris.status, "SEDANG_DIPERBAIKI");
    assert.equal(await prisma.riwayatStatusLaporan.count({ where: { idLaporan: idLaporanBaru, status: "SEDANG_DIPERBAIKI" } }), 1);
  });
  tambah("INT-TC23", "IA-08", "Atomisitas: kegagalan riwayat membatalkan perubahan status (rollback)", async () => {
    const idL = id("lap-rb");
    await prisma.laporanGangguan.create({ data: { idLaporan: idL, idWarga: warga1.idWarga, jenisGangguan: "Uji", deskripsi: AWAL, status: "MENUNGGU" } });
    await prisma.penugasanLaporan.create({ data: { idTeknisi: "TEK-01", idLaporan: idL } });
    const bentrok = id("rwy-bentrok");
    await prisma.riwayatStatusLaporan.create({ data: { idRiwayat: bentrok, idLaporan: idL, status: "MENUNGGU" } });
    const galatAsli = console.error;
    console.error = () => {};
    try {
      const ok = await repositoriLaporan.simpanStatusDanRiwayat(
        { idLaporan: idL, idWarga: warga1.idWarga, jenisGangguan: "Uji", deskripsi: AWAL, fotoPendukung: [], waktuDibuat: new Date(), status: "SEDANG_DIPERBAIKI" },
        { idRiwayat: bentrok, idLaporan: idL, status: "SEDANG_DIPERBAIKI", timestamp: new Date() },
        "TEK-01",
        "MENUNGGU",
      );
      assert.equal(ok, false);
    } finally {
      console.error = galatAsli;
    }
    assert.equal((await prisma.laporanGangguan.findUniqueOrThrow({ where: { idLaporan: idL } })).status, "MENUNGGU");
  });

  // ---- IA-09: ModulIuran -> DataIuranBoundary -> Database ----
  const modulIuran = new ModulIuran(repositoriIuran);
  tambah("INT-TC24", "IA-09", "Normal: tagihan FINAL periode seed dibaca sesuai nilai tersimpan", async () => {
    const hasil = await modulIuran.lihatTagihanFinal({ peran: "WARGA", idWarga: warga1.idWarga }, "PRD-2026-09");
    assert.equal(hasil.ok, true);
    if (hasil.ok) assert.deepEqual([hasil.data.jumlahIuran, hasil.data.status], [202500, "FINAL"]);
  });
  tambah("INT-TC25", "IA-09", "Gagal: pemakaian tidak lengkap menolak pratinjau tanpa menyimpan tagihan", async () => {
    const hasil = await modulIuran.hitungPratinjau(sesiPengurus, "PRD-2026-10");
    assert.deepEqual([hasil.ok, !hasil.ok && hasil.kode], [false, "DATA_BELUM_LENGKAP"]);
    assert.equal(await prisma.tagihan.count({ where: { idPeriode: "PRD-2026-10" } }), 0);
  });
  tambah("INT-TC26", "IA-09", "Normal: pratinjau DRAFT, finalisasi atomik, dan rekapitulasi tersimpan pada periode baru", async () => {
    const idPrd = id("prd");
    await prisma.periode.create({ data: { idPeriode: idPrd, bulan: 12, tahun: 2099, statusFinal: false } });
    await prisma.aturanTarif.create({ data: { idAturan: id("trf"), idPeriode: idPrd, tarifAirPerM3: 5000, tarifEnergiPerKwh: 1500, biayaTetap: 20000 } });
    const waktuCatat = new Date("2099-12-31T16:00:00Z");
    await prisma.dataPemakaian.createMany({
      data: [
        { idPemakaian: id("pm1"), idWarga: warga1.idWarga, idPeriode: idPrd, volumeAirM3: 10, energiKwh: 20, waktuCatat },
        { idPemakaian: id("pm2"), idWarga: warga2.idWarga, idPeriode: idPrd, volumeAirM3: 4, energiKwh: 10, waktuCatat },
      ],
    });
    // 20000 + 10*5000 + 20*1500 = 100000 dan 20000 + 4*5000 + 10*1500 = 55000
    const pratinjau = await modulIuran.hitungPratinjau(sesiPengurus, idPrd);
    assert.equal(pratinjau.ok, true);
    const draf = await prisma.tagihan.findMany({ where: { idPeriode: idPrd }, orderBy: { idWarga: "asc" } });
    assert.deepEqual(draf.map((t) => [Number(t.jumlahIuran), t.status]), [[100000, "DRAFT"], [55000, "DRAFT"]]);

    const final = await modulIuran.tetapkanFinal(sesiPengurus, idPrd);
    assert.equal(final.ok, true);
    assert.equal((await prisma.periode.findUniqueOrThrow({ where: { idPeriode: idPrd } })).statusFinal, true);
    assert.equal(await prisma.tagihan.count({ where: { idPeriode: idPrd, status: "FINAL" } }), 2);

    const rekap = await modulIuran.buatRekapitulasi(sesiPengurus, idPrd);
    assert.equal(rekap.ok, true);
    const baris = await prisma.rekapitulasi.findFirstOrThrow({ where: { idPeriode: idPrd } });
    assert.deepEqual([Number(baris.totalIuran), Number(baris.totalPemakaianAir), Number(baris.totalPemakaianEnergi)], [155000, 14, 30]);
  });

  // ---- Jalankan ----
  let gagal = 0;
  const galatAsli = console.error;
  console.error = () => {}; // galat yang dilog sengaja oleh kode produksi pada skenario gagal
  const hasil: string[] = [];
  try {
    for (const k of kasus) {
      try {
        await k.uji();
        hasil.push(`lulus  ${k.id}  [${k.antarmuka}] ${k.judul}`);
      } catch (e) {
        gagal++;
        hasil.push(`GAGAL  ${k.id}  [${k.antarmuka}] ${k.judul}\n         -> ${(e as Error).message.split("\n").filter((b) => b.trim()).slice(0, 2).join(" ")}`);
      }
    }
  } finally {
    console.error = galatAsli;
    const awal = { startsWith: AWAL };
    await prisma.rekapitulasi.deleteMany({ where: { idPeriode: awal } });
    await prisma.tagihan.deleteMany({ where: { idPeriode: awal } });
    await prisma.dataPemakaian.deleteMany({ where: { idPeriode: awal } });
    await prisma.aturanTarif.deleteMany({ where: { idPeriode: awal } });
    await prisma.periode.deleteMany({ where: { idPeriode: awal } });
    await prisma.riwayatStatusLaporan.deleteMany({ where: { OR: [{ idLaporan: awal }, { laporan: { deskripsi: { contains: AWAL } } }] } });
    await prisma.penugasanLaporan.deleteMany({ where: { OR: [{ idLaporan: awal }, { laporan: { deskripsi: { contains: AWAL } } }] } });
    await prisma.laporanGangguan.deleteMany({ where: { OR: [{ idLaporan: awal }, { deskripsi: { contains: AWAL } }] } });
    await prisma.catatanPemeliharaan.deleteMany({ where: { OR: [{ tindakan: { contains: AWAL } }, { idCatatan: awal }] } });
    await prisma.notifikasi.deleteMany({ where: { idNotifikasi: idNotifikasiPending || "-" } });
    await prisma.notifikasi.deleteMany({ where: { idPerangkat: "BAT-01", kapasitasSaatIni: 12 } });
    await prisma.pembacaanSensor.deleteMany({ where: { satuan: awal } });
    await prisma.pembacaanSensor.deleteMany({ where: { satuan: AWAL } });
    await prisma.pembacaanSensor.deleteMany({ where: { satuan: { contains: AWAL } } });
    await prisma.perangkat.deleteMany({ where: { idPerangkat: awal } });
    await prisma.warga.deleteMany({ where: { idAkun: awal } });
    await prisma.akun.deleteMany({ where: { OR: [{ idAkun: awal }, { email: awal }] } });
    await prisma.$disconnect();
  }
  console.log(hasil.join("\n"));
  console.log(`\nRingkasan: ${kasus.length - gagal} lulus, ${gagal} gagal dari ${kasus.length} kasus integrasi.`);
  if (gagal) process.exit(1);
}

void main();

import { describe, it, expect, jest, afterEach } from '@jest/globals';
import { Notifikasi } from '../../modules/notifikasi/entities/Notifikasi';
import { PeringatanDayaKritis } from '../../modules/notifikasi/entities/PeringatanDayaKritis';
import { ModulNotifikasi } from '../../modules/notifikasi/ModulNotifikasi';
import { DataPerangkatBoundary } from '../../modules/monitoring/DataPerangkatBoundary';
import { StatusPengiriman } from '../../lib/prisma';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('C25: Notifikasi', () => {
  it('Normal: inisialisasi awal belum dibaca dan tandaiDibaca() mengubah statusBaca menjadi true', () => {
    const notif = new Notifikasi('Informasi perangkat');
    expect(notif.statusBaca).toBe(false);
    expect(notif.idNotifikasi).toBeTruthy();

    notif.tandaiDibaca();
    expect(notif.statusBaca).toBe(true);
  });

  it('Negatif/Default: metode dasar kirim() mengembalikan false sebelum di-override', async () => {
    const notif = new Notifikasi('Pesan dasar');
    await expect(notif.kirim()).resolves.toBe(false);
  });
});

describe('C26 / Algo-020: PeringatanDayaKritis', () => {
  it('Normal: kirim() berhasil bila gateway merespons sukses dan status menjadi TERKIRIM', async () => {
    jest.spyOn(Math, 'random').mockReturnValueOnce(0.8);
    const notif = new PeringatanDayaKritis('Kapasitas baterai kritis: 15%', 15, 'TEK-01', 'BAT-01');

    const hasil = await notif.kirim();
    expect(hasil).toBe(true);
    expect(notif.statusPengiriman).toBe(StatusPengiriman.TERKIRIM);
  });

  it('Batas: kirim() gagal tepat pada ambang probabilitas gateway (0.2) dan status tetap PENDING', async () => {
    jest.spyOn(Math, 'random').mockReturnValueOnce(0.2);
    const notif = new PeringatanDayaKritis('Kapasitas baterai kritis: 15%', 15, 'TEK-01', 'BAT-01');

    const hasil = await notif.kirim();
    expect(hasil).toBe(false);
    expect(notif.statusPengiriman).toBe(StatusPengiriman.PENDING);
  });

  it('Negatif: kirim() menangkap galat jaringan dan menjalankan fallback simpanPending()', async () => {
    const notif = new PeringatanDayaKritis('Kapasitas baterai kritis: 10%', 10, 'TEK-01', 'BAT-01');
    jest.spyOn(notif as unknown as { pushToGateway: () => Promise<boolean> }, 'pushToGateway')
      .mockRejectedValueOnce(new Error('NetworkException'));
    const spyPending = jest.spyOn(notif, 'simpanPending');

    const hasil = await notif.kirim();
    expect(hasil).toBe(false);
    expect(spyPending).toHaveBeenCalledTimes(1);
    expect(notif.statusPengiriman).toBe(StatusPengiriman.PENDING);
  });

  it('simpanPending() mengembalikan status pengiriman ke PENDING', () => {
    const notif = new PeringatanDayaKritis('Kapasitas baterai kritis: 12%', 12, 'TEK-01', 'BAT-01');
    notif.statusPengiriman = StatusPengiriman.TERKIRIM;
    notif.simpanPending();
    expect(notif.statusPengiriman).toBe(StatusPengiriman.PENDING);
  });
});

describe('ModulNotifikasi (Algo-037 & Algo-051)', () => {
  it('Algo-037 Normal: mengirim peringatan ke teknisi yang ditugaskan tanpa menyimpan fallback PENDING', async () => {
    jest.spyOn(DataPerangkatBoundary.prototype, 'cariPenugasanPerangkat').mockResolvedValueOnce([
      { idPenugasan: 'PG-01', idTeknisi: 'TEK-01', idPerangkat: 'BAT-01' },
    ] as never);
    jest.spyOn(PeringatanDayaKritis.prototype, 'kirim').mockResolvedValueOnce(true);
    const spySimpan = jest.spyOn(DataPerangkatBoundary.prototype, 'simpanNotifikasi').mockResolvedValueOnce(true);

    const modul = new ModulNotifikasi();
    const hasil = await modul.kirimPeringatanDayaKritis('BAT-01', 15);

    expect(hasil).toBe(true);
    expect(spySimpan).not.toHaveBeenCalled();
  });

  it('Algo-037 Batas/Fallback: menyimpan notifikasi PENDING bila pengiriman gagal pada teknisi', async () => {
    jest.spyOn(DataPerangkatBoundary.prototype, 'cariPenugasanPerangkat').mockResolvedValueOnce([
      { idPenugasan: 'PG-01', idTeknisi: 'TEK-01', idPerangkat: 'BAT-01' },
    ] as never);
    jest.spyOn(PeringatanDayaKritis.prototype, 'kirim').mockResolvedValueOnce(false);
    const spySimpan = jest.spyOn(DataPerangkatBoundary.prototype, 'simpanNotifikasi').mockResolvedValueOnce(true);

    const modul = new ModulNotifikasi();
    const hasil = await modul.kirimPeringatanDayaKritis('BAT-01', 12);

    expect(hasil).toBe(false);
    expect(spySimpan).toHaveBeenCalledTimes(1);
  });

  it('Algo-037 Negatif: mengembalikan false bila tidak ada teknisi yang ditugaskan pada perangkat', async () => {
    jest.spyOn(DataPerangkatBoundary.prototype, 'cariPenugasanPerangkat').mockResolvedValueOnce([] as never);

    const modul = new ModulNotifikasi();
    const hasil = await modul.kirimPeringatanDayaKritis('BAT-99', 10);

    expect(hasil).toBe(false);
  });

  it('Algo-051 Normal: kirimUlangPending() mengirim ulang seluruh notifikasi PENDING yang berhasil', async () => {
    jest.spyOn(DataPerangkatBoundary.prototype, 'ambilNotifikasiPending').mockResolvedValueOnce([
      { idNotifikasi: 'NTF-01', pesan: 'Kritis 15%', kapasitasSaatIni: 15, idTeknisi: 'TEK-01', idPerangkat: 'BAT-01' },
      { idNotifikasi: 'NTF-02', pesan: 'Kritis 10%', kapasitasSaatIni: 10, idTeknisi: 'TEK-01', idPerangkat: 'BAT-01' },
    ] as never);
    jest.spyOn(PeringatanDayaKritis.prototype, 'kirim').mockResolvedValue(true);

    const modul = new ModulNotifikasi();
    const jumlah = await modul.kirimUlangPending('TEK-01');

    expect(jumlah).toBe(2);
  });

  it('Algo-051 Batas: hanya menghitung notifikasi yang berhasil saat sebagian gagal dan field opsional null', async () => {
    jest.spyOn(DataPerangkatBoundary.prototype, 'ambilNotifikasiPending').mockResolvedValueOnce([
      { idNotifikasi: 'NTF-01', pesan: 'Kritis', kapasitasSaatIni: null, idTeknisi: 'TEK-01', idPerangkat: null },
      { idNotifikasi: 'NTF-02', pesan: 'Kritis', kapasitasSaatIni: 12, idTeknisi: 'TEK-01', idPerangkat: 'BAT-01' },
    ] as never);
    jest.spyOn(PeringatanDayaKritis.prototype, 'kirim')
      .mockResolvedValueOnce(true)
      .mockResolvedValueOnce(false);

    const modul = new ModulNotifikasi();
    const jumlah = await modul.kirimUlangPending('TEK-01');

    expect(jumlah).toBe(1);
  });

  it('Algo-051 Negatif: mengembalikan 0 bila tidak ada notifikasi PENDING untuk teknisi tersebut', async () => {
    jest.spyOn(DataPerangkatBoundary.prototype, 'ambilNotifikasiPending').mockResolvedValueOnce([] as never);

    const modul = new ModulNotifikasi();
    const jumlah = await modul.kirimUlangPending('TEK-02');

    expect(jumlah).toBe(0);
  });
});
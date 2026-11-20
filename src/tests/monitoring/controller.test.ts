import { describe, it, expect, jest, afterEach } from '@jest/globals';
import { MonitoringController } from '../../modules/monitoring/MonitoringController';
import { ModulMonitoring } from '../../modules/monitoring/ModulMonitoring';
import { ModulNotifikasi } from '../../modules/notifikasi/ModulNotifikasi';
import { DataPerangkatBoundary } from '../../modules/monitoring/DataPerangkatBoundary';
import { GalatRentangWaktu } from '../../modules/monitoring/galat';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('MonitoringController', () => {
  it('ambilStatusInfrastruktur: Normal mengembalikan ok=true dengan data status', async () => {
    const mockStatus = { dataUsang: false } as never;
    jest.spyOn(ModulMonitoring.prototype, 'evaluasiKetersediaan').mockResolvedValueOnce(mockStatus);

    const res = await new MonitoringController().ambilStatusInfrastruktur();
    expect(res).toEqual({ ok: true, data: mockStatus });
  });

  it('ambilStatusInfrastruktur: Negatif mengembalikan GAGAL_INTERNAL saat modul gagal', async () => {
    jest.spyOn(ModulMonitoring.prototype, 'evaluasiKetersediaan').mockRejectedValueOnce(new Error('DB error'));

    const res = await new MonitoringController().ambilStatusInfrastruktur();
    expect(res.ok).toBe(false);
    if (!res.ok) expect(res.kode).toBe('GAGAL_INTERNAL');
  });

  it('terimaTelemetri: Normal menyimpan pembacaan dan memicu prosesTelemetriBaterai', async () => {
    const controller = new MonitoringController();
    jest.spyOn(ModulMonitoring.prototype, 'catatPembacaan').mockResolvedValueOnce(true);
    const spyBaterai = jest.spyOn(controller, 'prosesTelemetriBaterai').mockResolvedValueOnce();

    const res = await controller.terimaTelemetri({
      idPerangkat: 'BAT-01',
      nilai: 15,
      satuan: '%',
      waktu: '2026-10-28T03:20:00Z',
    });

    expect(res).toEqual({ ok: true, data: { diterima: true } });
    expect(spyBaterai).toHaveBeenCalledWith('BAT-01', 15);
  });

  it('terimaTelemetri: Negatif mengembalikan GAGAL_SIMPAN bila catatPembacaan false', async () => {
    jest.spyOn(ModulMonitoring.prototype, 'catatPembacaan').mockResolvedValueOnce(false);

    const res = await new MonitoringController().terimaTelemetri({
      idPerangkat: 'BAT-01',
      nilai: 15,
      satuan: '%',
      waktu: '2026-10-28T03:20:00Z',
    });

    expect(res.ok).toBe(false);
    if (!res.ok) expect(res.kode).toBe('GAGAL_SIMPAN');
  });

  it('terimaTelemetri: Negatif mengembalikan GAGAL_INTERNAL saat terjadi exception', async () => {
    jest.spyOn(ModulMonitoring.prototype, 'catatPembacaan').mockRejectedValueOnce(new Error('Timeout'));

    const res = await new MonitoringController().terimaTelemetri({
      idPerangkat: 'BAT-01',
      nilai: 15,
      satuan: '%',
      waktu: '2026-10-28T03:20:00Z',
    });

    expect(res.ok).toBe(false);
    if (!res.ok) expect(res.kode).toBe('GAGAL_INTERNAL');
  });

  it('Algo-024 prosesTelemetriBaterai: Normal memicu notifikasi bila baterai < ambang batas', async () => {
    jest.spyOn(DataPerangkatBoundary.prototype, 'cariBaterai').mockResolvedValueOnce({
      idPerangkat: 'BAT-01',
      jenisPerangkat: 'BATERAI',
      ambangBatasAman: 20,
    } as never);
    const spyNotif = jest.spyOn(ModulNotifikasi.prototype, 'kirimPeringatanDayaKritis').mockResolvedValueOnce(true);

    await new MonitoringController().prosesTelemetriBaterai('BAT-01', 15);
    expect(spyNotif).toHaveBeenCalledWith('BAT-01', 15);
  });

  it('Algo-024 prosesTelemetriBaterai: Batas tidak memicu notifikasi bila kapasitas tepat di ambang default (20)', async () => {
    jest.spyOn(DataPerangkatBoundary.prototype, 'cariBaterai').mockResolvedValueOnce({
      idPerangkat: 'BAT-01',
      jenisPerangkat: 'BATERAI',
      ambangBatasAman: null,
    } as never);
    const spyNotif = jest.spyOn(ModulNotifikasi.prototype, 'kirimPeringatanDayaKritis').mockResolvedValueOnce(true);

    await new MonitoringController().prosesTelemetriBaterai('BAT-01', 20);
    expect(spyNotif).not.toHaveBeenCalled();
  });

  it('Algo-024 prosesTelemetriBaterai: Negatif mengabaikan bila perangkat bukan BATERAI atau tidak ditemukan', async () => {
    jest.spyOn(DataPerangkatBoundary.prototype, 'cariBaterai').mockResolvedValueOnce(null);
    const spyNotif = jest.spyOn(ModulNotifikasi.prototype, 'kirimPeringatanDayaKritis').mockResolvedValueOnce(true);

    await new MonitoringController().prosesTelemetriBaterai('TNK-01', 10);
    expect(spyNotif).not.toHaveBeenCalled();
  });

  it('ambilRiwayatPanel: Normal mengembalikan daftar titik kinerja', async () => {
    const data = [{ waktu: '2026-10-28T01:00:00.000Z', dayaDihasilkan: 420, energi: 0.42 }];
    jest.spyOn(ModulMonitoring.prototype, 'ambilRiwayatPanel').mockResolvedValueOnce(data);

    const res = await new MonitoringController().ambilRiwayatPanel('TEK-01', '2026-10-28T00:00:00Z', '2026-10-28T23:59:59Z');
    expect(res).toEqual({ ok: true, data });
  });

  it('ambilRiwayatPanel: Negatif mengembalikan VALIDASI_GAGAL saat rentang tidak valid', async () => {
    jest.spyOn(ModulMonitoring.prototype, 'ambilRiwayatPanel').mockRejectedValueOnce(new GalatRentangWaktu());

    const res = await new MonitoringController().ambilRiwayatPanel('TEK-01', '2026-10-29T00:00:00Z', '2026-10-28T00:00:00Z');
    expect(res.ok).toBe(false);
    if (!res.ok) expect(res.kode).toBe('VALIDASI_GAGAL');
  });

  it('ambilRiwayatPanel: Negatif mengembalikan GAGAL_INTERNAL saat galat non-validasi', async () => {
    jest.spyOn(ModulMonitoring.prototype, 'ambilRiwayatPanel').mockRejectedValueOnce(new Error('DB fail'));

    const res = await new MonitoringController().ambilRiwayatPanel('TEK-01', '2026-10-28T00:00:00Z', '2026-10-28T23:59:59Z');
    expect(res.ok).toBe(false);
    if (!res.ok) expect(res.kode).toBe('GAGAL_INTERNAL');
  });

  it('daftarPeringatanTeknisi: Normal mengembalikan daftar peringatan', async () => {
    jest.spyOn(ModulMonitoring.prototype, 'daftarPeringatanTeknisi').mockResolvedValueOnce([]);

    const res = await new MonitoringController().daftarPeringatanTeknisi('TEK-01');
    expect(res).toEqual({ ok: true, data: [] });
  });

  it('daftarPeringatanTeknisi: Negatif mengembalikan GAGAL_INTERNAL saat modul gagal', async () => {
    jest.spyOn(ModulMonitoring.prototype, 'daftarPeringatanTeknisi').mockRejectedValueOnce(new Error('DB fail'));

    const res = await new MonitoringController().daftarPeringatanTeknisi('TEK-01');
    expect(res.ok).toBe(false);
    if (!res.ok) expect(res.kode).toBe('GAGAL_INTERNAL');
  });
});
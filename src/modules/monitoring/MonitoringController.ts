import { ModulMonitoring } from './ModulMonitoring';
import { ModulNotifikasi } from '../notifikasi/ModulNotifikasi';
import { DataPerangkatBoundary } from './DataPerangkatBoundary';
import type { 
  StatusInfrastruktur, 
  MasukanTelemetri, 
  ResponTelemetri 
} from '../../contracts/monitoring';
import type { ApiRespons } from '../../contracts/common';

export class MonitoringController {
  private modulMonitoring: ModulMonitoring;
  private modulNotifikasi: ModulNotifikasi;
  private dataBoundary: DataPerangkatBoundary;

  constructor() {
    this.modulMonitoring = new ModulMonitoring();
    this.modulNotifikasi = new ModulNotifikasi();
    this.dataBoundary = new DataPerangkatBoundary();
  }

  async ambilStatusInfrastruktur(): Promise<ApiRespons<StatusInfrastruktur>> {
    try {
      const status = await this.modulMonitoring.evaluasiKetersediaan();
      return { ok: true, data: status };
    } catch (error) {
      return { ok: false, kode: 'GAGAL_INTERNAL', pesan: 'Gagal mengambil status infrastruktur' };
    }
  }

  async terimaTelemetri(m: MasukanTelemetri): Promise<ApiRespons<ResponTelemetri>> {
    try {
      const sukses = await this.modulMonitoring.catatPembacaan(m);
      if (sukses) {
        // TUGAS 7 NOV: Proses evaluasi peringatan kritis
        await this.prosesTelemetriBaterai(m.idPerangkat, m.nilai);
        return { ok: true, data: { diterima: true } };
      }
      return { ok: false, kode: 'GAGAL_SIMPAN', pesan: 'Gagal menyimpan data telemetri' };
    } catch (error) {
      return { ok: false, kode: 'GAGAL_INTERNAL', pesan: 'Kesalahan internal server' };
    }
  }

  // Algo-024: Proses telemetri baterai dan peringatan kritis
  async prosesTelemetriBaterai(idPerangkat: string, kapasitas: number): Promise<void> {
    const perangkat = await this.dataBoundary.cariBaterai(idPerangkat);
    
    if (perangkat && perangkat.jenisPerangkat === 'BATERAI') {
      const ambangBatas = perangkat.ambangBatasAman || 20; // 20% fallback aman
      
      // Algo-010: Cek kapasitas (diimplementasikan langsung di Controller untuk kesederhanaan Prisma mapping)
      if (kapasitas < ambangBatas) {
        await this.modulNotifikasi.kirimPeringatanDayaKritis(idPerangkat, kapasitas);
      }
    }
  }
}
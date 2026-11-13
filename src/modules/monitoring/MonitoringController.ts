import { ModulMonitoring } from './ModulMonitoring';
import { ModulNotifikasi } from '../notifikasi/ModulNotifikasi';
import { DataPerangkatBoundary } from './DataPerangkatBoundary';
import type { 
  StatusInfrastruktur, 
  MasukanTelemetri, 
  ResponTelemetri 
} from '../../contracts/monitoring';
import type { ApiRespons } from '../../contracts/common';
import type { RentangWaktu, TitikKinerja } from '../../contracts/monitoring';

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
        await this.prosesTelemetriBaterai(m.idPerangkat, m.nilai);
        return { ok: true, data: { diterima: true } };
      }
      return { ok: false, kode: 'GAGAL_SIMPAN', pesan: 'Gagal menyimpan data telemetri' };
    } catch (error) {
      return { ok: false, kode: 'GAGAL_INTERNAL', pesan: 'Kesalahan internal server' };
    }
  }

  async prosesTelemetriBaterai(idPerangkat: string, kapasitas: number): Promise<void> {
    const perangkat = await this.dataBoundary.cariBaterai(idPerangkat);
    
    if (perangkat && perangkat.jenisPerangkat === 'BATERAI') {
      const ambangBatas = perangkat.ambangBatasAman || 20; 
      
      if (kapasitas < ambangBatas) {
        await this.modulNotifikasi.kirimPeringatanDayaKritis(idPerangkat, kapasitas);
      }
    }
  }

  async ambilRiwayatPanel(r: RentangWaktu): Promise<ApiRespons<TitikKinerja[]>> {
    try {
      const panel = await this.modulMonitoring.evaluasiKetersediaan();
      const idPanel = "PANEL-01"; 

      const hasil = await this.modulMonitoring.ambilHistorisPanel(idPanel, r);
      return { ok: true, data: hasil };
    } catch (error) {
      if (error instanceof Error && error.message === "Rentang waktu tidak valid") {
        return { ok: false, kode: 'VALIDASI_GAGAL', pesan: error.message };
      }
      return { ok: false, kode: 'GAGAL_INTERNAL', pesan: 'Gagal mengambil riwayat panel' };
    }
  }
}
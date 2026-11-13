import { ModulMonitoring, type PeringatanTampil } from './ModulMonitoring';
import type { 
  StatusInfrastruktur, 
  MasukanTelemetri, 
  ResponTelemetri,
  TitikKinerja,
} from '../../contracts/monitoring';
import type { ApiRespons } from '../../contracts/common';
import { GalatRentangWaktu } from './galat';

export class MonitoringController {
  private modulMonitoring: ModulMonitoring;

  constructor() {
    this.modulMonitoring = new ModulMonitoring();
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
        return { ok: true, data: { diterima: true } };
      }
      return { ok: false, kode: 'GAGAL_SIMPAN', pesan: 'Gagal menyimpan data telemetri' };
    } catch (error) {
      return { ok: false, kode: 'GAGAL_INTERNAL', pesan: 'Kesalahan internal server' };
    }
  }

  async ambilRiwayatPanel(
    idTeknisi: string,
    waktuMulai: string,
    waktuSelesai: string,
  ): Promise<ApiRespons<TitikKinerja[]>> {
    try {
      const data = await this.modulMonitoring.ambilRiwayatPanel(idTeknisi, waktuMulai, waktuSelesai);
      return { ok: true, data };
    } catch (error) {
      if (error instanceof GalatRentangWaktu) {
        return { ok: false, kode: 'VALIDASI_GAGAL', pesan: error.message };
      }
      return { ok: false, kode: 'GAGAL_INTERNAL', pesan: 'Gagal mengambil riwayat panel' };
    }
  }

  async daftarPeringatanTeknisi(idTeknisi: string): Promise<ApiRespons<PeringatanTampil[]>> {
    try {
      const data = await this.modulMonitoring.daftarPeringatanTeknisi(idTeknisi);
      return { ok: true, data };
    } catch (error) {
      return { ok: false, kode: 'GAGAL_INTERNAL', pesan: 'Gagal mengambil peringatan perangkat' };
    }
  }
}
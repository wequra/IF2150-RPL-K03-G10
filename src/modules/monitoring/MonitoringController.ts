import { ModulMonitoring } from './ModulMonitoring';
import type { 
  StatusInfrastruktur, 
  MasukanTelemetri, 
  ResponTelemetri 
} from '../../contracts/monitoring';
import type { ApiRespons } from '../../contracts/common';

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
}
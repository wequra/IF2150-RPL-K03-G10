import { DataPerangkatBoundary } from './DataPerangkatBoundary';
import type { 
  StatusInfrastruktur, 
  StatusTangki, 
  StatusBaterai, 
  StatusPanel,
  KondisiAir,
  MasukanTelemetri
} from '../../contracts/monitoring';

export class ModulMonitoring {
  private data: DataPerangkatBoundary;

  constructor() {
    this.data = new DataPerangkatBoundary();
  }

  async evaluasiKetersediaan(): Promise<StatusInfrastruktur> {
    const tangki = await this.data.ambilTangkiTerbaru();
    const baterai = await this.data.ambilBateraiTerbaru();
    const panel = await this.data.ambilPanelTerbaru();

    const getStatusTangki = (): StatusTangki => {
      if (!tangki) return { volumeLiter: null, kapasitasLiter: null, persen: null, kondisi: null, waktuPembacaan: null };
      
      const pembacaan = tangki.pembacaan[0];
      if (!pembacaan) return { volumeLiter: null, kapasitasLiter: tangki.kapasitasLiter, persen: null, kondisi: null, waktuPembacaan: null };

      let kondisi: KondisiAir = "Normal";
      if (tangki.ambangKritis && pembacaan.nilai <= tangki.ambangKritis) {
        kondisi = "Kritis";
      } else if (tangki.ambangRendah && pembacaan.nilai <= tangki.ambangRendah) {
        kondisi = "Rendah";
      }

      const persen = tangki.kapasitasLiter ? (pembacaan.nilai / tangki.kapasitasLiter) * 100 : null;

      return {
        volumeLiter: pembacaan.nilai,
        kapasitasLiter: tangki.kapasitasLiter,
        persen: persen,
        kondisi: kondisi,
        waktuPembacaan: pembacaan.waktu.toISOString(),
      };
    };

    const getStatusBaterai = (): StatusBaterai => {
      if (!baterai) return { kapasitasPersen: null, kritis: null, waktuPembacaan: null };
      
      const pembacaan = baterai.pembacaan[0];
      if (!pembacaan) return { kapasitasPersen: null, kritis: null, waktuPembacaan: null };

      const kritis = baterai.ambangBatasAman ? pembacaan.nilai < baterai.ambangBatasAman : false;

      return {
        kapasitasPersen: pembacaan.nilai,
        kritis: kritis,
        waktuPembacaan: pembacaan.waktu.toISOString(),
      };
    };

    const getStatusPanel = (): StatusPanel => {
      if (!panel) return { dayaWatt: null, waktuPembacaan: null };
      
      const pembacaan = panel.pembacaan[0];
      if (!pembacaan) return { dayaWatt: null, waktuPembacaan: null };

      return {
        dayaWatt: pembacaan.nilai,
        waktuPembacaan: pembacaan.waktu.toISOString(),
      };
    };

    const sTangki = getStatusTangki();
    const sBaterai = getStatusBaterai();
    const sPanel = getStatusPanel();

    const dataUsang = sTangki.volumeLiter === null && sBaterai.kapasitasPersen === null && sPanel.dayaWatt === null;

    return {
      tangki: sTangki,
      baterai: sBaterai,
      panel: sPanel,
      dataUsang: dataUsang,
    };
  }

  async catatPembacaan(bacaan: MasukanTelemetri): Promise<boolean> {
    return await this.data.simpanPembacaan(bacaan);
  }
}
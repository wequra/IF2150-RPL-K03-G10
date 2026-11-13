import { DataPerangkatBoundary } from './DataPerangkatBoundary';
import type { 
  StatusInfrastruktur, 
  StatusTangki, 
  StatusBaterai, 
  StatusPanel,
  KondisiAir,
  MasukanTelemetri,
  PeringatanDayaKritisDTO,
  TitikKinerja,
} from '../../contracts/monitoring';
import { GalatRentangWaktu } from './galat';

export interface PanelRingkas {
  idPerangkat: string;
  nama: string;
  kapasitas: number | null;
}

// Peringatan untuk layar teknisi: DTO kontrak ditambah nama perangkat dan ambang aman.
export type PeringatanTampil = PeringatanDayaKritisDTO & {
  namaPerangkat: string;
  ambangBatasAman: number | null;
};

export class ModulMonitoring {
  private data: DataPerangkatBoundary;

  constructor(data: DataPerangkatBoundary = new DataPerangkatBoundary()) {
    this.data = data;
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

  async ambilPanelTeknisi(idTeknisi: string): Promise<PanelRingkas | null> {
    const panel = await this.data.ambilPanelTeknisi(idTeknisi);
    if (!panel) return null;
    return { idPerangkat: panel.idPerangkat, nama: panel.nama, kapasitas: panel.kapasitas };
  }

  // Waktu pembacaan historis terakhir, dipakai layar untuk memilih rentang awal.
  async ambilWaktuHistorisTerbaru(idPanel: string): Promise<string | null> {
    const terbaru = await this.data.ambilHistorisTerbaru(idPanel);
    return terbaru ? terbaru.waktu.toISOString() : null;
  }

  // UC06, Algo-011: rentang harus valid dan panel dibatasi pada penugasan teknisi.
  async ambilRiwayatPanel(
    idTeknisi: string,
    waktuMulai: string,
    waktuSelesai: string,
  ): Promise<TitikKinerja[]> {
    const mulai = new Date(waktuMulai);
    const selesai = new Date(waktuSelesai);
    if (Number.isNaN(mulai.getTime()) || Number.isNaN(selesai.getTime()) || mulai > selesai) {
      throw new GalatRentangWaktu();
    }

    const panel = await this.data.ambilPanelTeknisi(idTeknisi);
    if (!panel) return [];

    const baris = await this.data.ambilHistorisKinerja(panel.idPerangkat, mulai, selesai);
    return baris.map((b) => ({
      waktu: b.waktu.toISOString(),
      dayaDihasilkan: b.dayaDihasilkan,
      energi: b.energi,
    }));
  }

  // UC05: hanya peringatan kritis yang punya nilai kapasitas yang bisa ditampilkan.
  async daftarPeringatanTeknisi(idTeknisi: string): Promise<PeringatanTampil[]> {
    const baris = await this.data.ambilNotifikasiTeknisi(idTeknisi);
    const hasil: PeringatanTampil[] = [];
    for (const n of baris) {
      if (n.level !== 'KRITIS' || n.kapasitasSaatIni === null) continue;
      hasil.push({
        idNotifikasi: n.idNotifikasi,
        idPerangkat: n.idPerangkat ?? '',
        pesan: n.pesan,
        level: 'KRITIS',
        kapasitasSaatIni: n.kapasitasSaatIni,
        waktu: n.waktu.toISOString(),
        statusPengiriman: n.statusPengiriman,
        statusBaca: n.statusBaca,
        namaPerangkat: n.perangkat?.nama ?? n.idPerangkat ?? 'Perangkat',
        ambangBatasAman: n.perangkat?.ambangBatasAman ?? null,
      });
    }
    return hasil;
  }
}
import { DataPerangkatBoundary } from '../monitoring/DataPerangkatBoundary';
import { PeringatanDayaKritis } from './entities/PeringatanDayaKritis';

export class ModulNotifikasi {
  private data: DataPerangkatBoundary;

  constructor() {
    this.data = new DataPerangkatBoundary();
  }

  async kirimPeringatanDayaKritis(idPerangkat: string, kapasitasPersen: number): Promise<boolean> {
    const penugasanList = await this.data.cariPenugasanPerangkat(idPerangkat);
    
    if (!penugasanList || penugasanList.length === 0) {
      return false; 
    }

    let terkirimMinimalSatu = false;

    for (const penugasan of penugasanList) {
      const pesan = `Kapasitas baterai kritis: ${kapasitasPersen}%`;
      const notif = new PeringatanDayaKritis(pesan, kapasitasPersen, penugasan.idTeknisi, idPerangkat);
      
      const terkirim = await notif.kirim();
      if (!terkirim) {
        await this.data.simpanNotifikasi(notif);
      } else {
        terkirimMinimalSatu = true;
      }
    }
    
    return terkirimMinimalSatu;
  }

  async kirimUlangPending(idTeknisi: string): Promise<number> {
    const daftar = await this.data.ambilNotifikasiPending(idTeknisi);
    let terkirim = 0;

    for (const row of daftar) {
      const notif = new PeringatanDayaKritis(row.pesan, row.kapasitasSaatIni || 0, row.idTeknisi, row.idPerangkat || '');
      notif.idNotifikasi = row.idNotifikasi; 
      
      const berhasil = await notif.kirim();
      if (berhasil) {
        terkirim += 1;
      }
    }
    
    return terkirim;
  }
}
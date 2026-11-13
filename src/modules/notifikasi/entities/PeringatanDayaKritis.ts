import { Notifikasi } from './Notifikasi';
import { prisma, StatusPengiriman } from '../../../lib/prisma';

export class PeringatanDayaKritis extends Notifikasi {
  level: string;
  kapasitasSaatIni: number;
  statusPengiriman: StatusPengiriman;
  penerima: string; 
  idPerangkat: string;

  constructor(pesan: string, kapasitas: number, penerima: string, idPerangkat: string) {
    super(pesan);
    this.level = "KRITIS";
    this.kapasitasSaatIni = kapasitas;
    this.penerima = penerima;
    this.idPerangkat = idPerangkat;
    this.statusPengiriman = StatusPengiriman.PENDING; 
  }

  async kirim(): Promise<boolean> {
    try {
      const isSuccess = await this.pushToGateway(this, this.penerima);
      
      if (isSuccess) {
        this.statusPengiriman = StatusPengiriman.TERKIRIM;
        return true;
      }
      return false;
    } catch (error) {
      this.simpanPending();
      return false;
    }
  }

  simpanPending(): void {
    this.statusPengiriman = StatusPengiriman.PENDING;
  }

  private async pushToGateway(notif: PeringatanDayaKritis, idTeknisi: string): Promise<boolean> {
    return Math.random() > 0.2; 
  }
}
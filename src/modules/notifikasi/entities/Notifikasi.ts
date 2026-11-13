import { randomUUID } from 'crypto';

export class Notifikasi {
  idNotifikasi: string;
  pesan: string;
  waktu: Date;
  statusBaca: boolean;

  constructor(pesan: string) {
    this.idNotifikasi = randomUUID(); 
    this.pesan = pesan;
    this.waktu = new Date();
    this.statusBaca = false;
  }

  async kirim(): Promise<boolean> {
    return false;
  }

  tandaiDibaca(): void {
    this.statusBaca = true;
  }
}
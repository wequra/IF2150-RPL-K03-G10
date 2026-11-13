import type { WaktuISO } from '../../../contracts/common';

export class RentangWaktuDomain {
  waktuMulai: Date;
  waktuSelesai: Date;

  constructor(mulai: WaktuISO, selesai: WaktuISO) {
    this.waktuMulai = new Date(mulai);
    this.waktuSelesai = new Date(selesai);
  }

  validasi(): boolean {
    return this.waktuMulai <= this.waktuSelesai;
  }
}
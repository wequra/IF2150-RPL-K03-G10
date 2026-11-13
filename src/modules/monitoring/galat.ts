// Galat domain pemantauan. Pesan aman ditampilkan ke pengguna.
export class GalatRentangWaktu extends Error {
  constructor() {
    super('Tanggal mulai tidak boleh melewati tanggal akhir.');
    this.name = 'GalatRentangWaktu';
  }
}

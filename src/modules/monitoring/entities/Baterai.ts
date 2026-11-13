export class BateraiDomain {
  kapasitasPersen: number;
  ambangBatasAman: number;

  constructor(kapasitas: number, ambang: number) {
    this.kapasitasPersen = kapasitas;
    this.ambangBatasAman = ambang;
  }

  cekKapasitas(): boolean {
    return this.kapasitasPersen < this.ambangBatasAman;
  }
}
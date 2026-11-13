export class TangkiAirDomain {
  volumeLiter: number;
  ambangRendah: number;
  ambangKritis: number;

  constructor(volume: number, rendah: number, kritis: number) {
    this.volumeLiter = volume;
    this.ambangRendah = rendah;
    this.ambangKritis = kritis;
  }

  statusAir(): "Kritis" | "Rendah" | "Normal" {
    if (this.volumeLiter <= this.ambangKritis) return "Kritis";
    if (this.volumeLiter <= this.ambangRendah) return "Rendah";
    return "Normal";
  }
}
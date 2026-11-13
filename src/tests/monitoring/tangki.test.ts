import { TangkiAirDomain } from '../../modules/monitoring/entities/TangkiAir';
import { describe, it, expect } from '@jest/globals';

describe('Algo-009: TangkiAir.statusAir', () => {
  it('harus mengembalikan "Kritis" jika volume <= ambang kritis', () => {
    const tangki = new TangkiAirDomain(400, 2000, 500);
    expect(tangki.statusAir()).toBe('Kritis');
  });

  it('harus mengembalikan "Rendah" jika volume <= ambang rendah tapi di atas kritis', () => {
    const tangki = new TangkiAirDomain(1500, 2000, 500);
    expect(tangki.statusAir()).toBe('Rendah');
  });

  it('harus mengembalikan "Normal" jika volume > ambang rendah', () => {
    const tangki = new TangkiAirDomain(3000, 2000, 500);
    expect(tangki.statusAir()).toBe('Normal');
  });
});
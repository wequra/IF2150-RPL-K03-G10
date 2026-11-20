import { TangkiAirDomain } from '../../modules/monitoring/entities/TangkiAir';
import { describe, it, expect } from '@jest/globals';

describe('Algo-009: TangkiAir.statusAir', () => {
  it('Normal: mengembalikan "Normal" jika volume > ambang rendah', () => {
    const tangki = new TangkiAirDomain(3000, 2000, 500);
    expect(tangki.statusAir()).toBe('Normal');
  });

  it('Normal: mengembalikan "Rendah" jika volume di antara ambang kritis dan rendah', () => {
    const tangki = new TangkiAirDomain(1500, 2000, 500);
    expect(tangki.statusAir()).toBe('Rendah');
  });

  it('Batas: mengembalikan "Rendah" jika volume tepat sama dengan ambang rendah', () => {
    const tangki = new TangkiAirDomain(2000, 2000, 500);
    expect(tangki.statusAir()).toBe('Rendah');
  });

  it('Batas: mengembalikan "Kritis" jika volume tepat sama dengan ambang kritis', () => {
    const tangki = new TangkiAirDomain(500, 2000, 500);
    expect(tangki.statusAir()).toBe('Kritis');
  });

  it('Negatif/Ekstrem: mengembalikan "Kritis" jika volume 0 atau negatif (anomali sensor)', () => {
    const tangki = new TangkiAirDomain(-10, 2000, 500);
    expect(tangki.statusAir()).toBe('Kritis');
  });
});
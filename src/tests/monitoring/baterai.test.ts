import { BateraiDomain } from '../../modules/monitoring/entities/Baterai';
import { describe, it, expect } from '@jest/globals';

describe('Algo-010: Baterai.cekKapasitas', () => {
  it('Normal: mengembalikan false (aman) jika kapasitas > batas aman', () => {
    const baterai = new BateraiDomain(25, 20);
    expect(baterai.cekKapasitas()).toBe(false);
  });

  it('Normal: mengembalikan true (kritis) jika kapasitas < batas aman', () => {
    const baterai = new BateraiDomain(15, 20);
    expect(baterai.cekKapasitas()).toBe(true);
  });

  it('Batas: mengembalikan false (aman) jika kapasitas tepat sama dengan batas aman', () => {
    const baterai = new BateraiDomain(20, 20);
    expect(baterai.cekKapasitas()).toBe(false);
  });

  it('Negatif/Ekstrem: mengembalikan true (kritis) jika kapasitas negatif atau 0%', () => {
    const baterai = new BateraiDomain(-5, 20);
    expect(baterai.cekKapasitas()).toBe(true);
  });
});
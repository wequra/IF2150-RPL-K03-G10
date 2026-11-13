import { BateraiDomain } from '../../modules/monitoring/entities/Baterai';
import { describe, it, expect } from '@jest/globals';

describe('Algo-010: Baterai.cekKapasitas', () => {
  it('harus mengembalikan true (kritis) jika kapasitas < batas aman', () => {
    const baterai = new BateraiDomain(15, 20);
    expect(baterai.cekKapasitas()).toBe(true);
  });

  it('harus mengembalikan false (aman) jika kapasitas >= batas aman', () => {
    const baterai = new BateraiDomain(25, 20);
    expect(baterai.cekKapasitas()).toBe(false);
  });
});
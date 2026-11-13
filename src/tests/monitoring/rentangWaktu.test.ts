import { RentangWaktuDomain } from '../../modules/monitoring/entities/RentangWaktu';
import { describe, it, expect } from '@jest/globals';

describe('Algo-011: RentangWaktu.validasi', () => {
  it('harus mengembalikan true jika waktu mulai SEBELUM waktu selesai', () => {
    const rentang = new RentangWaktuDomain('2026-11-01T00:00:00Z', '2026-11-02T00:00:00Z');
    expect(rentang.validasi()).toBe(true);
  });

  it('harus mengembalikan true jika waktu mulai SAMA DENGAN waktu selesai', () => {
    const rentang = new RentangWaktuDomain('2026-11-01T12:00:00Z', '2026-11-01T12:00:00Z');
    expect(rentang.validasi()).toBe(true);
  });

  it('harus mengembalikan false jika waktu mulai SESUDAH waktu selesai', () => {
    const rentang = new RentangWaktuDomain('2026-11-03T00:00:00Z', '2026-11-01T00:00:00Z');
    expect(rentang.validasi()).toBe(false);
  });
});
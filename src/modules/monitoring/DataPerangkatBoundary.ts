import { prisma } from '../../lib/prisma';
import type { WaktuISO } from '../../contracts/common';
import type { MasukanTelemetri } from '../../contracts/monitoring';

export class DataPerangkatBoundary {
  async ambilTangkiTerbaru() {
    return prisma.perangkat.findFirst({
      where: { jenisPerangkat: 'TANGKI_AIR' },
      include: {
        pembacaan: {
          orderBy: { waktu: 'desc' },
          take: 1,
        },
      },
    });
  }

  async ambilBateraiTerbaru() {
    return prisma.perangkat.findFirst({
      where: { jenisPerangkat: 'BATERAI' },
      include: {
        pembacaan: {
          orderBy: { waktu: 'desc' },
          take: 1,
        },
      },
    });
  }

  async ambilPanelTerbaru() {
    return prisma.perangkat.findFirst({
      where: { jenisPerangkat: 'PANEL_SURYA' },
      include: {
        pembacaan: {
          orderBy: { waktu: 'desc' },
          take: 1,
        },
      },
    });
  }

  async simpanPembacaan(bacaan: MasukanTelemetri): Promise<boolean> {
    try {
      await prisma.pembacaanSensor.create({
        data: {
          idPerangkat: bacaan.idPerangkat,
          nilai: bacaan.nilai,
          satuan: bacaan.satuan,
          waktu: new Date(bacaan.waktu),
        },
      });
      return true;
    } catch (error) {
      console.error('Gagal simpan pembacaan:', error);
      return false;
    }
  }
}
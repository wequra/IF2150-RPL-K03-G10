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

  // UC06: panel yang ditugaskan kepada teknisi sesi.
  async ambilPanelTeknisi(idTeknisi: string) {
    return prisma.perangkat.findFirst({
      where: { jenisPerangkat: 'PANEL_SURYA', penugasan: { some: { idTeknisi } } },
      orderBy: { idPerangkat: 'asc' },
    });
  }

  async ambilHistorisKinerja(idPanel: string, mulai: Date, selesai: Date) {
    return prisma.dataHistorisKinerja.findMany({
      where: { idPanel, waktu: { gte: mulai, lte: selesai } },
      orderBy: { waktu: 'asc' },
    });
  }

  async ambilHistorisTerbaru(idPanel: string) {
    return prisma.dataHistorisKinerja.findFirst({
      where: { idPanel },
      orderBy: { waktu: 'desc' },
    });
  }

  // UC05: notifikasi yang dialamatkan ke teknisi, lengkap dengan perangkatnya.
  async ambilNotifikasiTeknisi(idTeknisi: string) {
    return prisma.notifikasi.findMany({
      where: { idTeknisi },
      include: { perangkat: true },
      orderBy: { waktu: 'desc' },
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
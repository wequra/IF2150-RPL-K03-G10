import { NextResponse } from 'next/server';
import { MonitoringController } from '../../../modules/monitoring/MonitoringController';
import type { MasukanTelemetri } from '../../../contracts/monitoring';

const controller = new MonitoringController();

export async function POST(request: Request) {
  try {
    const data: MasukanTelemetri = await request.json();

    if (!data.idPerangkat || data.nilai === undefined || !data.satuan || !data.waktu) {
      return NextResponse.json(
        { ok: false, kode: 'VALIDASI_GAGAL', pesan: 'Payload telemetri tidak lengkap' },
        { status: 400 }
      );
    }

    const response = await controller.terimaTelemetri(data);

    if (response.ok) {
      return NextResponse.json(response, { status: 201 });
    } else {
      return NextResponse.json(response, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json(
      { ok: false, kode: 'GAGAL_INTERNAL', pesan: 'Gagal memproses telemetri' },
      { status: 500 }
    );
  }
}
// UC06: GET /api/monitoring/panel?mulai=<ISO>&selesai=<ISO> (riwayat panel milik teknisi sesi).
import { NextResponse } from "next/server";
import { MonitoringController } from "@/modules/monitoring/MonitoringController";
import { ambilSesiPeran, responGalat, responHasil } from "../_utils";

const controller = new MonitoringController();

export async function GET(request: Request) {
  const sesi = await ambilSesiPeran("TEKNISI");
  if (sesi instanceof NextResponse) return sesi;

  const url = new URL(request.url);
  const mulai = url.searchParams.get("mulai");
  const selesai = url.searchParams.get("selesai");
  if (!mulai || !selesai) {
    return responGalat("VALIDASI_GAGAL", "Parameter mulai dan selesai wajib diisi.");
  }

  return responHasil(await controller.ambilRiwayatPanel(sesi.idTeknisi, mulai, selesai));
}

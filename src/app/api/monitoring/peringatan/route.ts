// UC05: GET /api/monitoring/peringatan (peringatan daya kritis milik teknisi sesi).
import { NextResponse } from "next/server";
import { MonitoringController } from "@/modules/monitoring/MonitoringController";
import { ambilSesiPeran, responHasil } from "../_utils";

const controller = new MonitoringController();

export async function GET() {
  const sesi = await ambilSesiPeran("TEKNISI");
  if (sesi instanceof NextResponse) return sesi;
  return responHasil(await controller.daftarPeringatanTeknisi(sesi.idTeknisi));
}

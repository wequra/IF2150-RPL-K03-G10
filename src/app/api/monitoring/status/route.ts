// UC01: GET /api/monitoring/status (ringkasan pasokan untuk warga).
import { NextResponse } from "next/server";
import { MonitoringController } from "@/modules/monitoring/MonitoringController";
import { ambilSesiPeran, responHasil } from "../_utils";

const controller = new MonitoringController();

export async function GET() {
  const sesi = await ambilSesiPeran("WARGA");
  if (sesi instanceof NextResponse) return sesi;
  return responHasil(await controller.ambilStatusInfrastruktur());
}

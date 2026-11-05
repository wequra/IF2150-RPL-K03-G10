import DashboardShell, { type SeksiDasbor } from "@/components/shell/DashboardShell";
import SeksiUC09 from "@/components/seksi/UC09";
import SeksiUC10 from "@/components/seksi/UC10";
import SeksiUC11 from "@/components/seksi/UC11";
import SeksiUC14 from "@/components/seksi/UC14";

const seksi: SeksiDasbor[] = [
  { id: "analitik", uc: "UC09", judul: "Analitik pemakaian", isi: <SeksiUC09 /> },
  { id: "iuran", uc: "UC10", judul: "Kelola iuran", isi: <SeksiUC10 /> },
  { id: "rekapitulasi", uc: "UC11", judul: "Rekapitulasi", isi: <SeksiUC11 /> },
  { id: "akun", uc: "UC14", judul: "Persetujuan akun", isi: <SeksiUC14 /> },
];

export default function DasborPengurus() {
  return <DashboardShell peran="PENGURUS" seksi={seksi} />;
}

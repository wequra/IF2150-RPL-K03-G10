import DashboardShell, { type SeksiDasbor } from "@/components/shell/DashboardShell";
import SeksiUC05 from "@/components/seksi/UC05";
import SeksiUC06 from "@/components/seksi/UC06";
import SeksiUC07 from "@/components/seksi/UC07";
import SeksiUC08 from "@/components/seksi/UC08";

const seksi: SeksiDasbor[] = [
  { id: "peringatan", uc: "UC05", judul: "Peringatan daya kritis", isi: <SeksiUC05 /> },
  { id: "panel", uc: "UC06", judul: "Riwayat kinerja panel surya", isi: <SeksiUC06 /> },
  { id: "tugas", uc: "UC07", judul: "Tugas perbaikan", isi: <SeksiUC07 /> },
  { id: "pemeliharaan", uc: "UC08", judul: "Catatan pemeliharaan", isi: <SeksiUC08 /> },
];

export default function DasborTeknisi() {
  return <DashboardShell peran="TEKNISI" seksi={seksi} />;
}

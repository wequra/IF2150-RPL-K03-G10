import DashboardShell, { type SeksiDasbor } from "@/components/shell/DashboardShell";
import SeksiUC01 from "@/components/seksi/UC01";
import SeksiUC02 from "@/components/seksi/UC02";
import SeksiUC03 from "@/components/seksi/UC03";
import SeksiUC04 from "@/components/seksi/UC04";

const seksi: SeksiDasbor[] = [
  { id: "status", uc: "UC01", judul: "Status infrastruktur", isi: <SeksiUC01 /> },
  { id: "tagihan", uc: "UC02", judul: "Tagihan iuran", isi: <SeksiUC02 /> },
  { id: "lapor", uc: "UC03", judul: "Kirim laporan gangguan", isi: <SeksiUC03 /> },
  { id: "laporan-saya", uc: "UC04", judul: "Laporan saya", isi: <SeksiUC04 /> },
];

export default function DasborWarga() {
  return <DashboardShell peran="WARGA" seksi={seksi} />;
}

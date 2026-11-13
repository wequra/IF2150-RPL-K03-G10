import PageTitle from "@/components/shell/PageTitle";
import type { TitikKinerja } from "@/contracts/monitoring";
import { ModulMonitoring, type PanelRingkas } from "@/modules/monitoring/ModulMonitoring";
import HistoriPanel from "@/modules/monitoring/ui/HistoriPanel";
import { tanggalWib } from "@/modules/monitoring/ui/format";
import { sesiLayar } from "@/modules/monitoring/ui/sesi";

export default async function LayarI09() {
  const sesi = await sesiLayar("TEKNISI");
  const modul = new ModulMonitoring();

  let panel: PanelRingkas | null = null;
  let dataAwal: TitikKinerja[] = [];
  let tanggalAwal = tanggalWib(new Date().toISOString());

  try {
    panel = await modul.ambilPanelTeknisi(sesi.idTeknisi);
    if (panel) {
      const terbaru = await modul.ambilWaktuHistorisTerbaru(panel.idPerangkat);
      tanggalAwal = tanggalWib(terbaru ?? new Date().toISOString());
      dataAwal = await modul.ambilRiwayatPanel(
        sesi.idTeknisi,
        `${tanggalAwal}T00:00:00+07:00`,
        `${tanggalAwal}T23:59:59.999+07:00`,
      );
    }
  } catch (galat) {
    console.error("[monitoring] Gagal memuat histori panel:", galat);
    dataAwal = [];
  }

  return (
    <>
      <PageTitle judul="Histori performa panel" deskripsi="Daya panel menurut waktu pembacaan." />
      <HistoriPanel
        idPanel={panel?.idPerangkat ?? null}
        namaPanel={panel?.nama ?? null}
        mulaiAwal={tanggalAwal}
        selesaiAwal={tanggalAwal}
        dataAwal={dataAwal}
      />
    </>
  );
}

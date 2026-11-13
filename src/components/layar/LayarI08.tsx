import PageTitle from "@/components/shell/PageTitle";
import { Alert } from "@/components/ui";
import { MonitoringController } from "@/modules/monitoring/MonitoringController";
import DaftarPeringatan from "@/modules/monitoring/ui/DaftarPeringatan";
import { sesiLayar } from "@/modules/monitoring/ui/sesi";

export default async function LayarI08() {
  const sesi = await sesiLayar("TEKNISI");
  const hasil = await new MonitoringController().daftarPeringatanTeknisi(sesi.idTeknisi);

  return (
    <>
      <PageTitle
        judul="Peringatan perangkat"
        deskripsi="Perangkat tanggung jawab Anda yang perlu perhatian."
      />
      {hasil.ok ? (
        <DaftarPeringatan peringatan={hasil.data} namaTeknisi={sesi.nama} />
      ) : (
        <Alert nada="bahaya">Peringatan perangkat gagal dimuat. Muat ulang halaman ini.</Alert>
      )}
    </>
  );
}

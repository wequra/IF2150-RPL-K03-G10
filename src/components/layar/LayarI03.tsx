import PageTitle from "@/components/shell/PageTitle";
import { Alert } from "@/components/ui";
import { MonitoringController } from "@/modules/monitoring/MonitoringController";
import RingkasanPasokan from "@/modules/monitoring/ui/RingkasanPasokan";
import { sesiLayar } from "@/modules/monitoring/ui/sesi";

export default async function LayarI03() {
  await sesiLayar("WARGA");
  const hasil = await new MonitoringController().ambilStatusInfrastruktur();

  return (
    <>
      <PageTitle
        judul="Ringkasan air dan energi"
        deskripsi="Ketersediaan pasokan komunitas, dalam satu pandangan."
      />
      {hasil.ok ? (
        <RingkasanPasokan status={hasil.data} />
      ) : (
        <Alert nada="bahaya">Ringkasan pasokan gagal dimuat. Muat ulang halaman ini.</Alert>
      )}
    </>
  );
}

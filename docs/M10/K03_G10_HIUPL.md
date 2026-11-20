<h1>
IF2150 REKAYASA PERANGKAT LUNAK
<br>
TUGAS 10
<br>
HASIL IMPLEMENTASI DAN UJI PERANGKAT LUNAK (HIUPL)
</h1>
<br>

## *FAJAR TECH*

### Untuk: *Tigress / Agatha*

Dipersiapkan oleh:

| Informasi | Keterangan |
| --- | --- |
| Kelas | K-3 |
| Kelompok | 10 |

| NIM | Nama |
| --- | --- |
| *13525054* | *Raffi Fauzi Hermawan* |
| *13525030* | *Rionaldo Casey Pandhitha* |
| *13525129* | *Andro Irsa Syafiq* |
| *13525078* | *Muhammad Faiz Ramadhan* |
| *13525006* | *Muhammad Rafiandhi Suryadinata* |

---

## Daftar Isi

- [BAB 1: Pendahuluan](#bab-1-pendahuluan)
  - [1.1 Tujuan Penulisan Dokumen](#11-tujuan-penulisan-dokumen)
  - [1.2 Lingkup Masalah](#12-lingkup-masalah)
  - [1.3 Definisi, Istilah, dan Singkatan](#13-definisi-istilah-dan-singkatan)
  - [1.4 Aturan Penomoran](#14-aturan-penomoran)
  - [1.5 Referensi](#15-referensi)
  - [1.6 Deskripsi Umum Dokumen (Ikhtisar)](#16-deskripsi-umum-dokumen-ikhtisar)
- [BAB 2: Deskripsi Umum Perangkat Lunak](#bab-2-deskripsi-umum-perangkat-lunak)
- [BAB 3: Implementasi](#bab-3-implementasi)
  - [3.1 Lingkungan Implementasi](#31-lingkungan-implementasi)
  - [3.2 Implementasi Modul](#32-implementasi-modul)
  - [3.3 Implementasi Antarmuka](#33-implementasi-antarmuka)
  - [3.4 File Lain](#34-file-lain)
- [BAB 4: Hasil Pengujian](#bab-4-hasil-pengujian)
  - [4.1 Strategi dan Kedalaman Pengujian Kelas](#41-strategi-dan-kedalaman-pengujian-kelas)
  - [4.2 Pengujian Unit Kelas](#42-pengujian-unit-kelas)
  - [4.3 Pengujian Integrasi](#43-pengujian-integrasi)
  - [4.4 Pengujian Use Case](#44-pengujian-use-case)
  - [4.5 Pengujian Kebutuhan Non-Fungsional (KNF)](#45-pengujian-kebutuhan-non-fungsional-knf)
  - [4.6 Tangkapan Layar dan Bukti Hasil Pengujian](#46-tangkapan-layar-dan-bukti-hasil-pengujian)
- [BAB 5: Traceability](#bab-5-traceability)

---

## Daftar Perubahan

| Revisi | Deskripsi |
| :--- | :--- |
| *A* | *Deskripsikan perubahan yang dilakukan dari dokumen sebelumnya pada dokumen ini. Jika tidak terdapat perubahan, harap kosongkan tabel.* |
| *B* |  |
| *C* |  |
| ... |  |

---

# BAB 1: Pendahuluan

## 1.1 Tujuan Penulisan Dokumen
Dokumen Hasil Implementasi dan Uji Perangkat Lunak (HIUPL) ini menjabarkan hasil implementasi dan pengujian Fajar Tech sebagai lanjutan dokumen DPPL sebelumnya, meliputi implementasi modul dan antarmuka, hasil pengujian unit, integrasi, use case, dan kebutuhan non-fungsional, serta kerunutan kebutuhan terhadap implementasi dan pengujian. Dokumen ini digunakan oleh tim pengembang sebagai bahan evaluasi hasil implementasi kode, oleh penguji sebagai dokumentasi hasil pengujian kesesuaian perangkat lunak dengan kebutuhan dan rancangan, dan oleh asisten mata kuliah sebagai bahan penilaian serta asistensi.

## 1.2 Lingkup Masalah
Fajar Tech adalah platform berbasis web untuk memantau dan mengelola infrastruktur air serta energi surya komunal di tingkat komunitas, yang mencakup pemantauan ketersediaan air tangki dan status daya surya secara real-time, pelaporan gangguan beserta penanganannya, analitik pemakaian komunal, hingga perhitungan iuran warga dan rekapitulasi laporan, guna mewujudkan pengelolaan infrastruktur air dan energi yang lebih terukur, transparan, dan berkelanjutan yang berkesusaian dengan tujuan SDG 6 dan SDG 7.

## 1.3 Definisi, Istilah, dan Singkatan
Semua definisi dan singkatan yang digunakan dalam dokumen ini beserta penjelasannya.

Tabel 1.3. Definisi Istilah dan Singkatan

| Singkatan, Akronim, atau Istilah | Penjelasan |
| :--- | :--- |
| *P/L* | *Singkatan dari Perangkat Lunak, yaitu aplikasi yang memberikan perintah kepada komputer untuk menjalankan tugas tertentu.* |
| *SKPL* | *Singkatan dari Spesifikasi Kebutuhan Perangkat Lunak, yaitu dokumen yang merangkum kriteria-kriteria yang diperlukan untuk membangun aplikasi menjalankan tugasnya.* |
| *DPPL* | *Singkatan dari Deskripsi Perancangan Perangkat Lunak, yaitu dokumen yang menjelaskan rancangan arsitektur, kelas, dan antarmuka P/L.* |
| *HIUPL* | *Singkatan dari Hasil Implementasi dan Uji Perangkat Lunak, yaitu dokumen yang melaporkan hasil implementasi dan pengujian P/L.* |
| *KF* | *Singkatan dari Kebutuhan Fungsional.* |
| *KNF* | *Singkatan dari Kebutuhan Non-Fungsional.* |
| *UC* | *Singkatan dari Use Case.* |
| *TC* | *Singkatan dari Test Case, yaitu satu kasus uji untuk skenario tertentu.* |
| *UT* | *Singkatan dari Unit Test, yaitu test case tingkat kelas/operasi.* |
| *INT* | *Singkatan dari Integration Test, yaitu test case yang menguji interaksi antarkomponen.* |
| *Boundary* | *Kasus uji pada nilai batas masukan, misalnya nilai minimum, maksimum, atau tepat di ambang aturan.* |
| *Coverage* | *Persentase baris/cabang kode yang dieksekusi oleh pengujian.* |

## 1.4 Aturan Penomoran

Tabel 1.4. Aturan Penomoran

| Hal/Bagian | Penomoran | Keterangan |
| :--- | :--- | :--- |
| *Kebutuhan Fungsional* | *KFXX* | *Sesuai SKPL* |
| *Kebutuhan Non-Fungsional* | *KNFXX* | *Sesuai SKPL* |
| *Use Case* | *UCXX* | *Sesuai SKPL* |
| *Kelas* | *CXX* | *Sesuai DPPL* |
| *Antarmuka* | *I-XX* | *Sesuai DPPL* |
| *Test Case Unit* | *CXX-UTYY* | *XX adalah nomor kelas, YY adalah nomor urut test case unit pada kelas tersebut* |
| *Test Case Integrasi* | *INT-TCYY* | *YY adalah nomor urut test case integrasi* |
| *Test Case Use Case* | *UCXX-TCYY* | *XX adalah nomor use case, YY adalah nomor urut test case pada use case tersebut* |
| *Test Case KNF* | *KNFXX-TCYY* | *XX adalah nomor KNF, YY adalah nomor urut test case pada KNF tersebut* |

## 1.5 Referensi
1. Dokumen Milestone 5 Kelompok K03-G10.
2. Dokumen Milestone 6 Kelompok K03-G10.
3. Dokumen Milestone 7 Kelompok K03-G10.
4. Dokumen Milestone 8 Kelompok K03-G10.
5. Dokumen Milestone 9 Kelompok K03-G10.

## 1.6 Deskripsi Umum Dokumen (Ikhtisar)
Dokumen ini diawali pendahuluan dan deskripsi umum perangkat lunak yang mengacu pada dokumen SKPL dan DPPL sebelumnya (BAB 1–2), dilanjutkan hasil implementasi berupa lingkungan implementasi, modul, antarmuka, dan file pendukung (BAB 3), hasil pengujian berupa strategi dan kedalaman pengujian kelas, pengujian unit, integrasi, use case, dan kebutuhan non-fungsional beserta bukti hasil pengujiannya (BAB 4), serta matriks kerunutan yang memetakan kebutuhan perangkat lunak ke use case, kelas perancangan, file implementasi, dan kasus uji terkait (BAB 5).

<br>

---

# BAB 2: Deskripsi Umum Perangkat Lunak

Bab ini menggambarkan Fajar Tech dan konteksnya: siapa yang memakai, apa yang ada di dalam sistem, dan apa yang berada di luarnya. Isinya diringkas dari SKPL dan DPPL.

## 2.1 System Overview

Fajar Tech adalah aplikasi web tunggal untuk mengelola air dan energi komunal di Komunitas Cempaka. Warga, Teknisi, dan Pengurus memakainya lewat browser di komputer atau ponsel. Setelah login, cookie sesi bertanda tangan menentukan dasbor yang dibuka, sehingga tiap peran hanya melihat menu dan data yang menjadi haknya.

<p align="center">
<img alt="System Overview Fajar Tech" src="./assets/system-overview.png" width="90%">
</p>
<p align="center">
<i>Gambar 2.1. System Overview Fajar Tech</i>
</p>

Gambar 2.1 menunjukkan batas sistem sebagai kotak besar bertajuk Sistem Fajar Tech. Di dalamnya permintaan melewati empat lapisan sesuai DPPL: View, Controller, Modul, dan Boundary data. Lapisan terakhir mengakses basis data lewat Prisma.

Tiga hal berada di luar batas sistem:

1. Perangkat lapangan (sensor tangki, baterai, dan panel surya). Pada tahap ini perangkat fisik diganti simulator `SensorAdapter.ts` yang mengirim telemetri ke `POST /api/telemetri`.
2. Gateway notifikasi untuk perangkat teknisi. Pengirimannya disimulasikan. Bila pengiriman gagal, peringatan disimpan berstatus `PENDING` lalu dikirim ulang.
3. PostgreSQL, tempat semua data akun, laporan, perangkat, dan iuran disimpan. Selama pengembangan basis data ini berjalan lokal lewat Docker.

Fajar Tech tidak memakai layanan pembayaran pihak ketiga. Tarif iuran ditetapkan Pengurus di dalam sistem.

## 2.2 Pemodelan Kasus

Gambar 2.2 memuat 14 use case (UC01 sampai UC14) dan tiga aktor. Warga memakai UC01 sampai UC04. Teknisi memakai UC05 sampai UC08. Pengurus memakai UC09 sampai UC11 dan UC14. Registrasi (UC12) dan login (UC13) tersedia bagi semua pengguna. Relasi *extend* pada diagram melengkapi pasangan UC07 dan UC03, UC02 dan UC10, serta UC12 dan UC14, sesuai SKPL.

Untuk laporan gangguan, Warga mengirim laporan (UC03) dan menelusuri statusnya (UC04). Teknisi yang ditugaskan pada laporan itu memperbarui statusnya (UC07), dan setiap perubahan tercatat pada riwayat yang dapat dibaca Warga.

<p align="center">
<img alt="Use Case Diagram Fajar Tech" src="./assets/use-case-diagram.png" width="60%">
</p>
<p align="center">
<i>Gambar 2.2. Use Case Diagram Fajar Tech</i>
</p>

<br>

---

# BAB 3: Implementasi

Bagian ini diisi dengan informasi tentang elemen P/L yang dikembangkan (*executable files*, *configuration files*, *data files*, dan sebagainya) serta perubahannya terhadap rancangan pada DPPL (jika ada).

## 3.1 Lingkungan Implementasi

Lingkungan implementasi perangkat lunak Fajar Tech mengacu pada Subbab 2.1 DPPL, dengan penyesuaian pada tahap pengembangan lokal dan pengujian: basis data PostgreSQL dijalankan secara lokal menggunakan kontainer Docker (menggantikan layanan terkelola Supabase pada lingkungan pengembangan) dan antarmuka perangkat lapangan disimulasikan melalui skrip TypeScript (`SensorAdapter.ts`) menggantikan firmware C/C++ mikrokontroler fisik.

Tabel 3.1. Lingkungan Implementasi

| Aspek | Keterangan |
| :--- | :--- |
| Hardware | Laptop/PC pengembang (arsitektur x86_64, RAM minimal 8 GB) untuk menjalankan server lokal dan kontainer basis data; perangkat klien desktop dan smartphone melalui web browser. Perangkat keras mikrokontroler IoT fisik tidak digunakan dan digantikan oleh simulator perangkat lunak (`SensorAdapter.ts`) |
| Operating System | Windows 11 (pengembangan lokal); target server Linux (Ubuntu 22.04 LTS); klien cross-platform (Windows, Linux, macOS, Android, iOS) melalui web browser modern |
| Bahasa Pemrograman | TypeScript `^6.0.3` (JavaScript/ECMAScript) pada runtime Node.js `v26.13.0` |
| Framework/Library | Next.js `^16.4.5`, React `^19.3.1`, React DOM `^19.3.1`, Prisma ORM & `@prisma/client` `^7.10.1`, `@prisma/adapter-pg` `^7.10.1`, `pg` `^8.23.1`, `jspdf` `^4.2.1`, `papaparse` `^5.7.0`, `tsx` `^4.23.15` |
| DBMS | PostgreSQL 15 (dijalankan lokal melalui Docker Compose) |
| Development Tools | Visual Studio Code, Git & GitHub, Docker Desktop, Prisma CLI `^7.10.1`, Figma, draw.io/StarUML, Mermaid Live Editor |
| Testing Tools | Jest `^30.5.2` (unit test & `--coverage` berbasis Istanbul), `jest-environment-jsdom` `^30.5.2`, `@testing-library/react` `^16.3.3`, `@testing-library/jest-dom` `^7.0.1`, PostgreSQL `EXPLAIN` (query profiling), Chrome DevTools (response time & responsive viewport) |

## 3.2 Implementasi Modul

Daftar seluruh 50 kelas perancangan dari Tabel 5.1 DPPL beserta pemetaannya ke file fisik implementasi (selaras dengan Tabel B.5 Dokumen Implementasi Tugas 9). Karena aplikasi berbasis web Next.js/TypeScript yang dijalankan melalui runtime Node.js, kolom *Nama File Executable* diisi `-`.

Tabel 3.2. Implementasi Modul

| No | ID Kelas | Nama Modul/Kelas | Nama File Fisik | Nama File Executable |
| :--- | :--- | :--- | :--- | :--- |
| 1 | C01 | `Akun` | `src/modules/akun/entity.ts` | - |
| 2 | C02 | `Warga` | `src/modules/akun/entity.ts` | - |
| 3 | C03 | `Teknisi` | `src/modules/akun/entity.ts` | - |
| 4 | C04 | `Pengurus` | `src/modules/akun/entity.ts` | - |
| 5 | C05 | `CalonPengguna` | `src/modules/akun/entity.ts` | - |
| 6 | C06 | `StatusAkun` | `src/modules/akun/entity.ts` | - |
| 7 | C07 | `Perangkat` | `src/modules/monitoring/DataPerangkatBoundary.ts` (diwakili model `prisma.perangkat`) | - |
| 8 | C08 | `TangkiAir` | `src/modules/monitoring/entities/TangkiAir.ts` | - |
| 9 | C09 | `Baterai` | `src/modules/monitoring/entities/Baterai.ts` | - |
| 10 | C10 | `PanelSurya` | `src/modules/monitoring/ModulMonitoring.ts` (digabung di `evaluasiKetersediaan`) | - |
| 11 | C11 | `PembacaanSensor` | `src/contracts/monitoring.ts` (`MasukanTelemetri`) | - |
| 12 | C12 | `DataHistorisKinerja` | `src/modules/monitoring/DataPerangkatBoundary.ts` | - |
| 13 | C13 | `RentangWaktu` | `src/modules/monitoring/entities/RentangWaktu.ts` | - |
| 14 | C14 | `Periode` | `src/contracts/iuran.ts` (`PeriodeDTO`), `src/prisma/schema.prisma` (model `Periode`) | - |
| 15 | C15 | `DataPemakaian` | `src/modules/iuran/internal/ModulIuran.ts` (`isPemakaianLengkap`), `src/prisma/schema.prisma` (model `DataPemakaian`) | - |
| 16 | C16 | `AturanTarif` | `src/contracts/iuran.ts` (`AturanTarifDTO`), `src/prisma/schema.prisma` (model `AturanTarif`) | - |
| 17 | C17 | `Tagihan` | `src/contracts/iuran.ts` (`TagihanDTO`), `src/prisma/schema.prisma` (model `Tagihan`) | - |
| 18 | C18 | `StatusTagihan` | `src/contracts/iuran.ts`, `src/prisma/schema.prisma` (enum `StatusTagihan`) | - |
| 19 | C19 | `KalkulatorIuran` | `src/modules/iuran/internal/ModulIuran.ts` | - |
| 20 | C20 | `LaporanGangguan` | `src/modules/laporan/internal/LaporanGangguan.ts` | - |
| 21 | C21 | `StatusLaporan` | `src/modules/laporan/internal/StatusLaporan.ts`, `src/contracts/common.ts` | - |
| 22 | C22 | `RiwayatStatusLaporan` | `src/modules/laporan/internal/RiwayatStatusLaporan.ts` | - |
| 23 | C23 | `PenugasanPerangkat` | `src/modules/monitoring/DataPerangkatBoundary.ts` (diwakili relasi Prisma) | - |
| 24 | C24 | `PenugasanLaporan` | `src/modules/laporan/internal/PenugasanLaporan.ts` | - |
| 25 | C25 | `Notifikasi` | `src/modules/notifikasi/entities/Notifikasi.ts` | - |
| 26 | C26 | `PeringatanDayaKritis` | `src/modules/notifikasi/entities/PeringatanDayaKritis.ts` | - |
| 27 | C27 | `CatatanPemeliharaan` | `src/modules/pemeliharaan/internal/CatatanPemeliharaan.ts` | - |
| 28 | C28 | `Rekapitulasi` | `src/modules/iuran/internal/Rekapitulasi.ts`, `src/modules/iuran/ekspor.ts` | - |
| 29 | - | `WargaView` | `src/components/shell/*`, `src/app/dashboard/warga/**`, `src/components/layar/LayarI03.tsx` s.d. `LayarI07.tsx` | - |
| 30 | - | `TeknisiView` | `src/app/dashboard/teknisi/**`, `src/components/layar/LayarI08.tsx` s.d. `LayarI12.tsx` | - |
| 31 | - | `PengurusView` | `src/app/dashboard/pengurus/**`, `src/components/layar/LayarI13.tsx` s.d. `LayarI16.tsx` | - |
| 32 | - | `AuthView` | `src/modules/akun/ui/RegistrasiView.tsx`, `src/modules/akun/ui/LoginView.tsx`, `src/app/registrasi/page.tsx`, `src/app/login/page.tsx` | - |
| 33 | - | `TelemetriAPI` | `src/app/api/telemetri/route.ts` | - |
| 34 | - | `MonitoringController` | `src/modules/monitoring/MonitoringController.ts` | - |
| 35 | - | `LaporanController` | `src/modules/laporan/service.ts`, `src/app/api/laporan/**/route.ts` | - |
| 36 | - | `PemeliharaanController` | `src/modules/pemeliharaan/service.ts` (`buatPemeliharaanService`), `src/app/api/pemeliharaan/route.ts` | - |
| 37 | - | `IuranController` | `src/modules/iuran/service.ts`, `src/app/api/iuran/**/route.ts` | - |
| 38 | - | `AkunController` | `src/modules/akun/controller.ts`, `src/app/api/auth/*/route.ts`, `src/app/api/akun/persetujuan/route.ts` | - |
| 39 | - | `Validasi` | `src/modules/akun/validasi.ts`, `src/modules/laporan/internal/validasi.ts`, `src/modules/pemeliharaan/internal/validasi.ts` | - |
| 40 | - | `ModulAkun` | `src/modules/akun/modul.ts` | - |
| 41 | - | `ModulMonitoring` | `src/modules/monitoring/ModulMonitoring.ts` | - |
| 42 | - | `ModulLaporan` | `src/modules/laporan/internal/ModulLaporan.ts` | - |
| 43 | - | `ModulPemeliharaan` | `src/modules/pemeliharaan/internal/ModulPemeliharaan.ts` | - |
| 44 | - | `ModulIuran` | `src/modules/iuran/internal/ModulIuran.ts` | - |
| 45 | - | `ModulNotifikasi` | `src/modules/notifikasi/ModulNotifikasi.ts` | - |
| 46 | - | `DataAkunBoundary` | `src/modules/akun/boundary.ts` | - |
| 47 | - | `DataPerangkatBoundary` | `src/modules/monitoring/DataPerangkatBoundary.ts`, `src/modules/pemeliharaan/repository.ts` (bagian UC08: Algo-046 dan Algo-047) | - |
| 48 | - | `DataLaporanBoundary` | `src/modules/laporan/repository.ts` | - |
| 49 | - | `DataIuranBoundary` | `src/modules/iuran/repository.ts` | - |
| 50 | - | `Database` | `src/lib/prisma.ts`, `src/modules/laporan/repository.ts` | - |

## 3.3 Implementasi Antarmuka

Daftar antarmuka yang telah diimplementasikan. Gunakan ID dan nama layar yang sama dengan ID dan nama layar pada tugas DPPL.

Tabel 3.3. Implementasi Antarmuka

| No | ID Antarmuka | Nama Antarmuka | Nama File Fisik | Nama File Executable |
| :--- | :--- | :--- | :--- | :--- |
| 1 | I-01 | Login | `src/modules/akun/ui/loginView.tsx`, `src/app/login/page.tsx` | - |
| 2 | I-02 | Registrasi akun | `src/modules/akun/ui/registrasiView.tsx`, `src/app/registrasi/page.tsx` | - |
| 3 | I-03 | Dashboard warga | `src/components/layar/LayarI03.tsx`, `src/modules/monitoring/ui/RingkasanPasokan.tsx`, `src/app/dashboard/warga/page.tsx` | - |
| 4 | I-04 | Tagihan iuran final | `src/components/layar/LayarI04.tsx`, `src/modules/iuran/ui/TagihanWarga.tsx`, `src/app/dashboard/warga/tagihan/page.tsx` | - |
| 5 | I-05 | Buat laporan gangguan | `src/components/layar/LayarI05.tsx`, `src/modules/laporan/ui/FormLaporan.tsx`, `src/app/dashboard/warga/laporan/baru/page.tsx` | - |
| 6 | I-06 | Daftar laporan saya | `src/components/layar/LayarI06.tsx`, `src/modules/laporan/ui/DaftarLaporan.tsx`, `src/app/dashboard/warga/laporan/page.tsx` | - |
| 7 | I-07 | Detail dan riwayat laporan | `src/components/layar/LayarI07.tsx`, `src/modules/laporan/ui/RiwayatStatus.tsx`, `src/app/dashboard/warga/laporan/[id]/page.tsx` | - |
| 8 | I-08 | Peringatan perangkat | `src/components/layar/LayarI08.tsx`, `src/modules/monitoring/ui/DaftarPeringatan.tsx`, `src/app/dashboard/teknisi/page.tsx` | - |
| 9 | I-09 | Histori panel surya | `src/components/layar/LayarI09.tsx`, `src/modules/monitoring/ui/HistoriPanel.tsx`, `src/app/dashboard/teknisi/panel/page.tsx` | - |
| 10 | I-10 | Daftar tugas teknisi | `src/components/layar/LayarI10.tsx`, `src/modules/laporan/ui/DaftarLaporan.tsx`, `src/app/dashboard/teknisi/tugas/page.tsx` | - |
| 11 | I-11 | Detail dan status tugas teknisi | `src/components/layar/LayarI11.tsx`, `src/modules/laporan/ui/UbahStatus.tsx`, `src/app/dashboard/teknisi/tugas/[id]/page.tsx` | - |
| 12 | I-12 | Form pemeliharaan | `src/components/layar/LayarI12.tsx`, `src/components/layar/FormPemeliharaan.tsx`, `src/app/dashboard/teknisi/pemeliharaan/page.tsx` | - |
| 13 | I-13 | Analitik komunal | `src/components/layar/LayarI13.tsx`, `src/modules/iuran/ui/AnalitikKomunal.tsx`, `src/app/dashboard/pengurus/page.tsx` | - |
| 14 | I-14 | Kalkulasi dan finalisasi iuran | `src/components/layar/LayarI14.tsx`, `src/modules/iuran/ui/KalkulasiIuran.tsx`, `src/app/dashboard/pengurus/iuran/page.tsx` | - |
| 15 | I-15 | Rekapitulasi iuran | `src/components/layar/LayarI15.tsx`, `src/modules/iuran/ui/RekapIuran.tsx`, `src/app/dashboard/pengurus/rekap/page.tsx` | - |
| 16 | I-16 | Persetujuan akun | `src/modules/akun/ui/persetujuanView.tsx`, `src/app/dashboard/pengurus/persetujuan/page.tsx` | - |

Catatan:
- I-00 (landing page publik) belum diimplementasikan. Rute `/` langsung mengalihkan tamu ke `/login` (`src/app/page.tsx`).
- I-10-M, I-11-M, dan I-12-M (versi ponsel) memakai berkas yang sama dengan I-10, I-11, dan I-12. Tampilannya menyesuaikan lewat media query pada `src/app/globals.css` untuk lebar di bawah 800 px.
- `src/components/layar/LayarI16.tsx` masih berisi kerangka kosong dan tidak dipakai. Layar I-16 diwujudkan oleh `persetujuanView.tsx`.

## 3.4 File Lain

Daftar file lain yang dibuat selain file kelas dan antarmuka, misalnya file *utility*, *configuration*, *database schema/seed*, *file test*, atau *data*.

Tabel 3.4. File Lain

| No | Nama File | Keterangan |
| :--- | :--- | :--- |
| 1 | `src/prisma/schema.prisma` | Skema basis data Prisma: 6 enumerasi (`Peran`, `StatusAkun`, `JenisPerangkat`, `StatusPengiriman`, `StatusLaporan`, `StatusTagihan`) dan 18 model yang dipetakan ke tabel snake_case DPPL lewat `@map`/`@@map`. Berisi kunci asing, batas unik (`email`, `[bulan, tahun]`, `[idWarga, idPeriode]`), dan indeks untuk query UC05 s.d. UC08. Diperlakukan beku setelah Fase 0; perubahan lewat Issue. Klien Prisma dihasilkan ke `src/generated/prisma` (tidak di-*commit*) |
| 2 | `src/prisma/migrations/20261105170000_init/migration.sql`, `src/prisma/migrations/migration_lock.toml` | Migrasi awal yang membuat seluruh tipe enum, tabel, kunci, dan indeks pada PostgreSQL. Dipasang dengan `npx prisma migrate deploy` |
| 3 | `src/prisma.config.ts` | Konfigurasi Prisma 7: lokasi skema, perintah seed (`tsx prisma/seed.ts`), dan URL koneksi dari `DATABASE_URL` |
| 4 | `src/prisma/seed.ts` | Data seed fiktif (5 akun uji, 3 perangkat, pembacaan, riwayat panel, 3 laporan, 1 peringatan, 1 catatan pemeliharaan, 2 periode iuran beserta tarif, pemakaian, dan tagihan). Idempoten lewat `upsert` dengan kunci tetap. Kata sandi uji dari `SEED_PASSWORD` atau bawaan seed |
| 5 | `src/prisma/seed-panel.ts` | Seed data historis panel surya dalam jumlah besar untuk uji tampilan dan kinerja UC06 |
| 6 | `src/prisma/profiling/uc06-riwayat-panel.sql` | Skrip profiling `EXPLAIN (ANALYZE, BUFFERS)` untuk query riwayat panel (Algo-039) dengan dan tanpa indeks `(id_panel, waktu)` pada 1.051.200 baris; data profiling dihapus kembali di akhir skrip. Hasilnya dipakai pada KNF04-TC01 |
| 7 | `src/lib/prisma.ts` | Singleton `PrismaClient` dengan *driver adapter* PostgreSQL (`@prisma/adapter-pg`); menolak berjalan bila `DATABASE_URL` kosong. Juga mengekspor enum `StatusPengiriman` |
| 8 | `src/lib/auth/konteks.ts` | Tipe `KonteksSesi`, konstanta peran, cookie dan tujuan dasbor, serta `GalatAuth`. Satu-satunya sumber `idWarga`, `idKomunitas`, `idTeknisi`, dan `idPengurus` (tidak pernah dari body atau query) |
| 9 | `src/lib/auth/session.ts` | Penerbitan dan pembacaan token sesi bertanda tangan HMAC-SHA256 (Web Crypto) dengan masa berlaku 8 jam; membutuhkan `SESSION_SECRET` minimal 32 karakter. Aman untuk Edge |
| 10 | `src/lib/auth/password.ts` | Hash dan verifikasi kata sandi dengan `scrypt` bawaan Node (format `scrypt$N$r$p$garam$hash`) dan pembanding waktu-konstan |
| 11 | `src/lib/auth/akses.ts` | Fungsi murni yang memutuskan izinkan, tolak (401/403), atau alihkan untuk tiap rute berdasarkan sesi dan peran. Dipakai `middleware.ts` |
| 12 | `src/lib/auth/server.ts` | Pembantu sesi sisi server (`wajibPeran`, dan sejenisnya) untuk *route handler* dan komponen server |
| 13 | `src/middleware.ts` | Pembatas sesi, peran, dan status akun `DISETUJUI` pada setiap permintaan; membersihkan cookie rusak atau kedaluwarsa dan gagal tertutup bila `SESSION_SECRET` belum diatur |
| 14 | `src/contracts/common.ts`, `akun.ts`, `monitoring.ts`, `laporan.ts`, `pemeliharaan.ts`, `iuran.ts`, `index.ts` | Kontrak tipe lintas modul (DTO, `ApiRespons`, `KodeGalat`, enumerasi). Modul hanya saling mengimpor lewat `contracts`, tidak lewat `modules/<x>/internal` |
| 15 | `src/contracts/API_Convention.md`, `src/contracts/SchemaReview.md` | Dokumen konvensi rute API (struktur, kode status, format galat) dan daftar cek review skema terhadap DPPL |
| 16 | `src/app/api/iuran/_utils.ts`, `src/app/api/laporan/_utils.ts`, `src/app/api/monitoring/_utils.ts` | Pembantu *route handler* per modul: pembacaan sesi per peran, pemetaan `KodeGalat` ke status HTTP, dan pembungkus respons |
| 17 | `src/modules/akun/galat.ts`, `src/modules/monitoring/galat.ts` | Kelas galat domain (`EmailSudahTerdaftar`, `PeranTidakValid`, `AkunTidakLengkap`, `GalatRentangWaktu`) |
| 18 | `src/modules/akun/index.ts`, `src/modules/laporan/index.ts` | Titik rakit modul: merangkai controller, modul, dan boundary untuk dipakai route dan layar |
| 19 | `src/modules/iuran/ekspor.ts`, `src/modules/iuran/internal/format.ts`, `src/modules/iuran/types/papaparse.d.ts` | Pembuat berkas ekspor rekapitulasi (CSV dengan `papaparse`, PDF dengan `jspdf`), pemformat angka dan tanggal, dan deklarasi tipe `papaparse` |
| 20 | `src/modules/akun/ui/tujuan.ts`, `src/modules/laporan/ui/format.ts`, `src/modules/laporan/ui/sesi.ts`, `src/modules/monitoring/ui/format.ts`, `src/modules/monitoring/ui/sesi.ts`, `src/modules/iuran/ui/api.ts` | Utilitas sisi tampilan: penentuan tujuan pengalihan, pemformatan tanggal dan angka, pembacaan sesi di komponen server, dan klien `fetch` ke API |
| 21 | `src/components/ui/*.tsx` (`Alert`, `Badge`, `Button`, `Card`, `EmptyState`, `Field`, `Input`, `Table`, `index.ts`) | Pustaka komponen UI dasar yang dipakai seluruh layar |
| 22 | `src/components/shell/*` (`AuthShell`, `DashboardShell`, `Sidebar`, `BottomNav`, `PageTitle`, `Tanggal`, `TombolKeluar`, `menu.ts`) | Kerangka tampilan: bilah samping, navigasi bawah ponsel, judul halaman, dan konfigurasi menu per peran |
| 23 | `src/components/layar/LayarStub.tsx` | Kerangka layar sementara untuk layar yang belum selesai |
| 24 | `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, `src/app/fonts/*` | Layout akar, pengalihan beranda ke `/login`, gaya global (termasuk *media query* ponsel di bawah 800 px), dan berkas huruf Plus Jakarta Sans beserta lisensinya |
| 25 | `src/jest.config.mjs`, `src/tests/setup.ts` | Konfigurasi Jest (`next/jest`, pencocokan `tests/**/*.test.{ts,tsx}`, alias `@/`) dan pemasangan `jest-dom` |
| 26 | `src/tests/akun/*.test.ts` (3 berkas), `src/tests/iuran/iuran.test.ts`, `src/tests/laporan/*.test.ts` (6 berkas), `src/tests/monitoring/*.test.ts` (4 berkas), `src/tests/pemeliharaan/*.test.ts(x)` (4 berkas) | Berkas uji unit Jest per modul: 18 *suite*, 197 test case pada uji terakhir |
| 27 | `src/tests/laporan/palsu.ts` | Pengganti data (*test double*) repositori dan sesi untuk uji unit modul laporan |
| 28 | `src/tests/laporan/transaksiStatus.db.ts` | Uji atomisitas status dan riwayat laporan terhadap PostgreSQL nyata (dijalankan dengan `tsx` karena Jest tidak dapat memuat Prisma Client yang berbentuk ESM) |
| 29 | `src/tests/integrasi/integrasi.db.ts` | Harness pengujian integrasi Subbab 4.3: 26 test case `INT-TC01` s.d. `INT-TC26` pada 9 antarmuka antarkomponen terhadap PostgreSQL nyata tanpa *mock*; membuat data berawalan `ITG-` dan menghapusnya di akhir. Dijalankan dengan `npx tsx tests/integrasi/integrasi.db.ts` |
| 30 | `src/tests/simulator/SensorAdapter.ts` | Simulator perangkat lapangan yang mengirim telemetri ke `POST /api/telemetri` (pengganti firmware mikrokontroler) |
| 31 | `docker-compose.yml`, `src/.env.example` | Layanan PostgreSQL 15 untuk pengembangan lokal dan contoh variabel lingkungan (`POSTGRES_*`, `DATABASE_URL`, `SESSION_SECRET`). Berkas `.env` asli tidak di-*commit* |
| 32 | `src/package.json`, `src/package-lock.json`, `src/tsconfig.json`, `src/.gitignore` | Daftar dependensi dan skrip (`dev`, `build`, `start`, `test`, `test:coverage`, `test:integrasi`), konfigurasi TypeScript, dan daftar berkas yang tidak di-*commit* (`node_modules`, `.env`, `.next`, `generated`) |
| 33 | `README.md`, `src/README.md` | Panduan proyek dan panduan menjalankan aplikasi |
| 34 | `src/test.zip` | Arsip salinan sebagian kode `app/` bertanggal 11 November yang ikut ter-*commit*; bukan bagian aplikasi dan tidak dipakai oleh *build* maupun pengujian (usulan: dihapus dari repositori) |

<br>

---

# BAB 4: Hasil Pengujian

Bab ini melaporkan hasil pengujian P/L pada level unit, integrasi, dan sistem. Pengujian dilakukan pada tag release terakhir Tugas 9. Hasil aktual diisi berdasarkan pengamatan saat pengujian. Kesimpulan diisi `Pass` atau `Fail`, dan untuk `Fail` dilengkapi penyebab serta usulan perbaikan.

## 4.1 Strategi dan Kedalaman Pengujian Kelas

Setiap kelas perancangan pada Tabel 4.1 DPPL diklasifikasikan ke dalam tiga tingkat kedalaman pengujian. Tingkat **Mendalam** diberikan pada kelas yang memuat logika bisnis, perhitungan, validasi, aturan status, algoritma, integrasi eksternal, atau keamanan. Tingkat **Sedang** diberikan pada kelas yang hanya mengoordinasikan atau mendelegasikan proses. Tingkat **Tidak perlu** diberikan pada kelas tanpa logika, seperti *entity/DTO* dan kelas konfigurasi, yang teruji secara tidak langsung melalui test case use case. Seluruh kelas wajib dicantumkan beserta alasan penentuan tingkatnya.

Tabel 4.1.1. Identifikasi Tingkat Pengujian Kelas

| ID Kelas | Nama Kelas | Tingkat | Alasan | Test Case Terkait |
| :--- | :--- | :--- | :--- | :--- |
| C01 | Akun | Mendalam | Kelas abstrak yang memuat logika kredensial `cocokKredensial()` (Algo-001), aturan status `sudahDisetujui()` dan `ubahStatus()`, pembuatan objek peran `buatAkun()` (Algo-002), serta kontrak `dashboardTujuan()` dan `konteksSesi()` | `C01-UT01` s.d. `C01-UT03` |
| C02 | Warga | Mendalam | Memuat aturan keanggotaan komunitas `validasiKeanggotaan()` (Algo-003), pengambilan ID warga, dan pembentukan sesi warga | `C02-UT01` s.d. `C02-UT03` |
| C03 | Teknisi | Sedang | Hanya mengoordinasikan profil teknisi dan tujuan dashboard; tidak memuat logika bisnis mandiri | `C03-UT01` s.d. `C03-UT02` |
| C04 | Pengurus | Mendalam | Memuat verifikasi kewenangan pengurus `verifikasiKewenangan()` (Algo-006) dan pembentukan sesi pengurus | `C04-UT01` s.d. `C04-UT02` |
| C05 | CalonPengguna | Sedang | Mengoordinasikan pembentukan data akun calon berstatus MENUNGGU (Algo-008) dan mendelegasikan hash kata sandi | `C05-UT01` |
| C06 | StatusAkun | Tidak perlu | Enumerasi status tanpa logika; diverifikasi tidak langsung melalui `UC12–UC14` | - |
| C07 | Perangkat | Tidak perlu | Kelas abstrak tanpa implementasi mandiri; diwakili model `prisma.perangkat` pada boundary | - |
| C08 | TangkiAir | Mendalam | Memuat logika bisnis klasifikasi status air `statusAir()` (Algo-009) dengan ambang kritis dan rendah | `C08-UT01` s.d. `C08-UT05` |
| C09 | Baterai | Mendalam | Memuat logika evaluasi ambang batas aman kapasitas daya `cekKapasitas()` (Algo-010) | `C09-UT01` s.d. `C09-UT04` |
| C10 | PanelSurya | Tidak perlu | Tidak dibuat kelas mandiri; pengambilan daya terkini digabung di `ModulMonitoring.evaluasiKetersediaan()` | - |
| C11 | PembacaanSensor | Tidak perlu | Direpresentasikan sebagai tipe kontrak DTO `MasukanTelemetri` tanpa logika bisnis | - |
| C12 | DataHistorisKinerja | Tidak perlu | Struktur data/DTO hasil kueri historis tanpa logika internal | - |
| C13 | RentangWaktu | Mendalam | Memuat validasi batas tanggal `validasi()` (Algo-011) | `C13-UT01` s.d. `C13-UT03` |
| C14 | Periode | Tidak perlu | Struktur data periode (`bulan`, `tahun`, `statusFinal`) yang diwakili model `prisma.periode` dan `PeriodeDTO`; tidak berisi logika | - |
| C15 | DataPemakaian | Mendalam | Memuat pemeriksaan kelengkapan data pemakaian warga `isPemakaianLengkap()` (Algo-012) yang menjadi syarat finalisasi iuran; diuji bersama C19 | `C19-UT07`, `INT-TC25` |
| C16 | AturanTarif | Tidak perlu | Struktur data tarif (`tarifAirPerM3`, `tarifEnergiPerKWh`, `biayaTetap`) berupa `AturanTarifDTO` dan model `prisma.aturanTarif` tanpa logika | - |
| C17 | Tagihan | Tidak perlu | Struktur data tagihan (`TagihanDTO`) hasil perhitungan `KalkulatorIuran`; tanpa logika internal | - |
| C18 | StatusTagihan | Tidak perlu | Enumerasi `DRAFT` dan `FINAL` tanpa logika; diverifikasi tidak langsung melalui UC02, UC10 | - |
| C19 | KalkulatorIuran | Mendalam | Memuat perhitungan iuran satu warga dan kolektif (Algo-013, Algo-014, Algo-015) dan agregat pemakaian komunal (Algo-036); diuji melalui `ModulIuran` (Subbab 4.2.1) | `C19-UT01` s.d. `C19-UT08` |
| C20 | LaporanGangguan | Mendalam | Memuat pembuatan laporan berstatus awal MENUNGGU dan aturan transisi status `validasiTransisi()` serta `ubahStatus()` (Algo-017) | `C20-UT01` s.d. `C20-UT07` |
| C21 | StatusLaporan | Mendalam | Memuat urutan status yang diperbolehkan dan pemeriksaan nilai enumerasi (Algo-017) | `C21-UT01` s.d. `C21-UT04` |
| C22 | RiwayatStatusLaporan | Sedang | Mencatat perubahan status dengan sedikit logika (pembuatan ID dan konversi waktu); alur pencatatannya juga teruji lewat `ModulLaporan` | `C22-UT01` s.d. `C22-UT03` |
| C23 | PenugasanPerangkat | Tidak perlu | Direpresentasikan langsung sebagai relasi tabel basis data via Prisma tanpa logika kelas terpisah | - |
| C24 | PenugasanLaporan | Mendalam | Memuat `verifikasi()` yang menjadi dasar kewenangan teknisi pada UC07 (keamanan) | `C24-UT01` s.d. `C24-UT03` |
| C25 | Notifikasi | Sedang | Kelas dasar notifikasi dengan delegasi pengiriman dan pembaruan status baca `tandaiDibaca()` | `C25-UT01` s.d. `C25-UT02` |
| C26 | PeringatanDayaKritis | Mendalam | Memuat algoritma pengiriman peringatan daya kritis `kirim()` beserta *fallback* `simpanPending()` (Algo-020) | `C26-UT01` s.d. `C26-UT04` |
| C27 | CatatanPemeliharaan | Mendalam | Memuat pembentukan catatan (ID unik, pemangkasan isian, `idTeknisi` dari sesi bukan dari body), `validasiFormulir()` (Algo-021), dan `simpan()` yang menentukan hasil penyimpanan riwayat pemeliharaan (KF20, KF21) | `C27-UT01` s.d. `C27-UT07` |
| C28 | Rekapitulasi | Mendalam | Memuat pembuatan rekapitulasi dari tagihan FINAL dan ekspor CSV serta PDF (Algo-022) | `C28-UT01` |
| - | TelemetriAPI | Sedang | Route handler `POST /api/telemetri` yang meneruskan payload telemetri ke `MonitoringController` (Algo-023) | `INT-TC14` s.d. `INT-TC17` |
| - | MonitoringController | Sedang | Controller yang mengoordinasikan permintaan pemantauan, telemetri baterai (Algo-024), dan riwayat panel | `MC-UT01` s.d. `MC-UT13`, `INT-TC14`, `INT-TC15` |
| - | ModulMonitoring | Mendalam | Memuat logika domain `evaluasiKetersediaan()` (Algo-033), pencatatan pembacaan, peringatan teknisi, dan kueri historis panel | `MM-UT01` s.d. `MM-UT10` |
| - | ModulNotifikasi | Mendalam | Memuat logika bisnis `kirimPeringatanDayaKritis()` (Algo-037) dan `kirimUlangPending()` (Algo-051) | `MN-UT01` s.d. `MN-UT06` |
| - | DataPerangkatBoundary | Sedang | Repositori CRUD standar ke PostgreSQL via Prisma (Algo-039, 043–045); diuji pada level integrasi basis data nyata | `INT-TC01` s.d. `INT-TC04`, `INT-TC10` s.d. `INT-TC14`, `INT-TC18` |
| - | WargaView | Tidak perlu | Kelas view yang hanya menampilkan data dan meneruskan masukan; teruji tidak langsung lewat UC03 dan UC04 | - |
| - | TeknisiView | Tidak perlu | Kelas view yang hanya menampilkan data dan meneruskan masukan; teruji tidak langsung lewat UC07 | - |
| - | PengurusView | Tidak perlu | Kelas view tanpa logika; tidak ada layar laporan untuk Pengurus, jadi tidak ada test case laporan | - |
| - | LaporanController | Sedang | Controller tipis: memeriksa peran dan format ID, lalu meneruskan ke `ModulLaporan` dan memetakan galat ke `ApiRespons` | `LC-UT01` s.d. `LC-UT12` |
| - | ModulLaporan | Mendalam | Memuat logika `kirimLaporan()` (Algo-003, Algo-025, Algo-034), pembacaan milik warga atau teknisi bertugas, dan `perbaruiStatus()` transaksional (Algo-017, Algo-040, Algo-042) | `ML-UT01` s.d. `ML-UT26` |
| - | DataLaporanBoundary | Sedang | Repositori Prisma dengan query terparameter dan transaksi `FOR UPDATE` untuk status dan riwayat; diuji pada basis data nyata | `INT-TC19` s.d. `INT-TC23` |
| - | PemeliharaanController | Sedang | Controller tipis: memvalidasi formulir lewat `periksaPemeliharaan`, meneruskan ke `ModulPemeliharaan` dengan `idTeknisi` dari sesi, dan memetakan galat tak terduga ke `GAGAL_INTERNAL` tanpa membocorkan pesan basis data | `PC-UT01` s.d. `PC-UT06`, `INT-TC01`, `INT-TC02` |
| - | ModulPemeliharaan | Mendalam | Memuat logika `simpanCatatan()` (Algo-035): validasi formulir, pembatasan perangkat pada lingkup penugasan teknisi (keamanan), dan pelaporan `GAGAL_SIMPAN` | `MP-UT01` s.d. `MP-UT06`, `INT-TC01`, `INT-TC02` |
| - | IuranController | Sedang | Controller tipis yang membungkus `ModulIuran` dan memetakan galat tak terduga ke `GAGAL_INTERNAL`; belum memiliki unit test langsung dan teruji tidak langsung melalui UC02, UC09, UC10, UC11 (Subbab 4.4) | `UC02-TC01` s.d. `UC11-TC03` |
| - | ModulIuran | Mendalam | Memuat logika `lihatTagihanFinal()`, `analisisPemakaian()`, `hitungPratinjau()`, `tetapkanFinal()`, dan `buatRekapitulasi()` (Algo-013 s.d. Algo-016, Algo-022, Algo-028, Algo-036, Algo-050) beserta pembatasan peran Pengurus | `C19-UT01` s.d. `C19-UT08`, `C28-UT01`, `INT-TC24` s.d. `INT-TC26` |
| - | DataIuranBoundary | Sedang | Repositori Prisma dengan transaksi untuk pratinjau dan finalisasi; diuji pada basis data nyata | `INT-TC24` s.d. `INT-TC26` |
| - | AuthView | Tidak perlu | Komponen presentasi (boundary); perilakunya diuji melalui use case UC12–UC13 dan tangkapan layar I-01/I-02 | - |
| - | AkunController | Mendalam | Mengoordinasikan validasi, registrasi (Algo-029), login (Algo-030), dan persetujuan dengan pemeriksaan kewenangan Pengurus (Algo-006) | `AKC-UT01` s.d. `AKC-UT20` |
| - | ModulAkun | Mendalam | Fasad modul akun: registrasi calon, autentikasi (Algo-032) dengan penyamaan waktu respons, daftar dan persetujuan akun, serta pengambilan warga terkini | `MA-UT01` s.d. `MA-UT05` |
| - | DataAkunBoundary | Tidak perlu | Repositori Prisma tanpa logika bisnis; diuji pada level integrasi basis data (Subbab 4.3) | `INT-TC05` s.d. `INT-TC09` |
| - | Validasi | Mendalam | Memuat seluruh aturan validasi registrasi (Algo-031): format email, panjang kata sandi, kolom wajib, dan pesan per kolom | `VAL-UT01` s.d. `VAL-UT04` |
| - | Database | Tidak perlu | Skema dan koneksi basis data; tidak berisi logika kelas dan diverifikasi melalui pengujian integrasi (Subbab 4.3) | `INT-TC01` s.d. `INT-TC26` |

## 4.2 Pengujian Unit Kelas

Pengujian unit dilakukan pada kelas bertingkat Mendalam dan Sedang. Kelas Mendalam diuji pada seluruh operasi public dengan kasus normal, batas, dan negatif, serta mencapai *coverage* minimal 70%. Kelas Sedang diuji minimal dengan satu kasus normal dan satu kasus gagal pada operasi public utama.

Cara menjalankan unit test modul iuran: `npx jest src/tests/iuran/iuran.test.ts --verbose --coverage`

Lokasi file test: `src/tests/iuran/iuran.test.ts`

Cara menjalankan unit test modul monitoring dan notifikasi: `npx jest tests/monitoring --coverage` (dijalankan di dalam folder `src/`).

Lokasi file test: `src/tests/monitoring/` (`tangki.test.ts`, `baterai.test.ts`, `rentangWaktu.test.ts`, `notifikasi.test.ts`, `monitoring.test.ts`, `controller.test.ts`).

Cara menjalankan unit test modul akun: `npx jest tests/akun --verbose --coverage --collectCoverageFrom='modules/akun/entity.ts' --collectCoverageFrom='modules/akun/controller.ts' --collectCoverageFrom='modules/akun/modul.ts' --collectCoverageFrom='modules/akun/validasi.ts'`

### 4.2.1 Kelas KalkulatorIuran / ModulIuran

**ID Kelas:** C19 *(mencakup orkestrasi C14 `Periode`, C15 `DataPemakaian`, C16 `AturanTarif`, C17 `Tagihan`, dan C18 `StatusTagihan`)*  
**Nama Kelas:** `ModulIuran` (`KalkulatorIuran`)  
**Tingkat:** Mendalam

Tabel 4.2.1. Hasil Pengujian Unit Kelas C19 (`ModulIuran`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C19-UT01 | `lihatTagihanFinal(sesi, idPeriode)` | Negatif | Panggil `lihatTagihanFinal(sesiWarga, "2026-11")` dengan periode `statusFinal: false` pada mock repository. | Mengembalikan `{ ok: false, kode: "TIDAK_DITEMUKAN" }` dan `ambilTagihanWarga` tidak dipanggil. | Mengembalikan `ok: false`, `kode: "TIDAK_DITEMUKAN"`, dan `ambilTagihanWarga` tidak terpanggil. | Pass |
| C19-UT02 | `lihatTagihanFinal(sesi, idPeriode)` | Normal | Panggil `lihatTagihanFinal(sesiWarga, "2026-10")` dengan periode `statusFinal: true` dan tagihan `FINAL` (`jumlahIuran: 110000`). | Mengembalikan `{ ok: true }` dengan `jumlahIuran = 110000` dan `status = "FINAL"`. | Mengembalikan `ok: true`, `jumlahIuran = 110000`, `status = "FINAL"`. | Pass |
| C19-UT03 | `analisisPemakaian(sesi, idPeriode)` | Negatif | Panggil `analisisPemakaian(sesiWarga, "2026-11")` menggunakan sesi non-Pengurus (`WARGA`). | Mengembalikan `{ ok: false, kode: "TIDAK_BERWENANG" }` sebelum query `ambilPeriodeById` dan `ambilPemakaianPeriode`. | Mengembalikan `ok: false`, `kode: "TIDAK_BERWENANG"`, dan tidak ada query repository yang dijalankan. | Pass |
| C19-UT04 | `analisisPemakaian(sesi, idPeriode)` | Normal | Panggil `analisisPemakaian(sesiPengurus, "2026-11")` dengan 2 data pemakaian: M1 (`12 m³`, `40 kWh`) dan M3 (`18 m³`, `60 kWh`). | Mengembalikan `ok: true`, `totalAirM3 = 30`, `totalEnergiKWh = 100`, serta 4 rincian pekanan (`M1`: 12/40, `M3`: 18/60). | Mengembalikan `totalAirM3 = 30`, `totalEnergiKWh = 100`, dan `rincianPekanan` sepanjang 4 pekan sesuai harapan. | Pass |
| C19-UT05 | `hitungPratinjau(sesi, idPeriode)` | Normal | Panggil `hitungPratinjau(sesiPengurus, "2026-11")` dengan pemakaian `10 m³`, `20 kWh` dan tarif `biayaTetap: 10000`, `tarifAirPerM3: 2500`, `tarifEnergiPerKWh: 1500`. | Mengembalikan `ok: true`, `totalIuran = 65000`, status tagihan `"DRAFT"`, dan `simpanTagihanDraft` dipanggil 1 kali. | Mengembalikan `totalIuran = 65000`, `status = "DRAFT"`, dan `simpanTagihanDraft` terpanggil 1 kali. | Pass |
| C19-UT06 | `tetapkanFinal(sesi, idPeriode)` | Negatif | Panggil `tetapkanFinal(sesiWarga, "2026-11")` menggunakan sesi non-Pengurus (`WARGA`). | Mengembalikan `{ ok: false, kode: "TIDAK_BERWENANG" }` dan `tetapkanPeriodeDanTagihanFinal` tidak dipanggil. | Mengembalikan `ok: false`, `kode: "TIDAK_BERWENANG"`, dan repository finalisasi tidak terpanggil. | Pass |
| C19-UT07 | `tetapkanFinal(sesi, idPeriode)` | Batas / Negatif | Panggil `tetapkanFinal(sesiPengurus, "2026-11")` dengan data pemakaian warga tidak lengkap (`energiKWh: null`, `waktuCatat: null`). | Mengembalikan `{ ok: false, kode: "DATA_BELUM_LENGKAP" }` dan `tetapkanPeriodeDanTagihanFinal` tidak dipanggil. | Mengembalikan `ok: false`, `kode: "DATA_BELUM_LENGKAP"`, dan repository finalisasi tidak terpanggil. | Pass |
| C19-UT08 | `tetapkanFinal(sesi, idPeriode)` | Normal | Panggil `tetapkanFinal(sesiPengurus, "2026-11")` dengan data pemakaian lengkap (`10 m³`, `20 kWh`) dan tarif valid. | Mengembalikan `{ ok: true }` dengan `statusFinal = true`. | Mengembalikan `ok: true` dan `data.statusFinal = true`. | Pass |

Tabel 4.2.2. Ringkasan Cakupan Kelas C19 (`ModulIuran`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `hitung()`, `pratinjau()`, `validasiKelengkapan()`, `validasiKewenangan()`, `tetapkanFinal()` (diwujudkan pada `ModulIuran`: `lihatTagihanFinal()`, `analisisPemakaian()`, `hitungPratinjau()`, `tetapkanFinal()`, `buatRekapitulasi()`) |
| Operasi yang diuji | `lihatTagihanFinal()`, `analisisPemakaian()`, `hitungPratinjau()`, `tetapkanFinal()`, `buatRekapitulasi()` |
| ID Algoritma yang tercakup | Algo-013, Algo-014, Algo-015, Algo-016, Algo-028, Algo-036, Algo-050 |
| Coverage (wajib ≥ 70%) | `[isi 74.89 Stmts / 62.04 Branch dari npx jest src/tests/iuran/iuran.test.ts --coverage; bukti pada Subbab 4.6]` |

### 4.2.2 Kelas Rekapitulasi

**ID Kelas:** C28  
**Nama Kelas:** `Rekapitulasi`  
**Tingkat:** Mendalam

Tabel 4.2.3. Hasil Pengujian Unit Kelas C28 (`Rekapitulasi`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C28-UT01 | `buatRekapitulasi()`, `Rekapitulasi.toCSV()`, `Rekapitulasi.toPDFBuffer()` | Normal | Panggil `modul.buatRekapitulasi(sesiPengurus, "2026-10")` dengan periode `statusFinal: true` dan 1 tagihan final (`Budi Santoso`, `jumlahIuran: 65000`), lalu konversi hasil ke CSV dan PDF. | Mengembalikan `ok: true`, `totalIuran = 65000`; output CSV memuat `"Budi Santoso"` dan `"65000"`; output PDF buffer memuat header `"%PDF-"`. | `totalIuran = 65000`, CSV memuat `"Budi Santoso"` dan `"65000"`, serta buffer PDF diawali `"%PDF-"`. | Pass |

Tabel 4.2.4. Ringkasan Cakupan Kelas C28 (`Rekapitulasi`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `generate(periode)`, `ekspor()`, `cetak()` (diwujudkan melalui `buatRekapitulasi()`, `Rekapitulasi.toCSV()`, `Rekapitulasi.toPDFBuffer()`) |
| Operasi yang diuji | `buatRekapitulasi()`, `toCSV()`, `toPDFBuffer()` |
| ID Algoritma yang tercakup | Algo-022 |
| Coverage (wajib ≥ 70%) | `[isi 74.89 Stmts / 62.04 Branch dari npx jest src/tests/iuran/iuran.test.ts --coverage; bukti pada Subbab 4.6]` |

### 4.2.3 Kelas TangkiAir

**ID Kelas:** C08  
**Nama Kelas:** TangkiAir (`TangkiAirDomain`)  
**Tingkat:** Mendalam

Tabel 4.2.5. Hasil Pengujian Unit Kelas C08 (TangkiAir)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C08-UT01 | `statusAir(): String` | Normal | Inisialisasi `TangkiAirDomain(3000, 2000, 500)` lalu panggil `statusAir()` | Mengembalikan `"Normal"` | Mengembalikan `"Normal"` | Pass |
| C08-UT02 | `statusAir(): String` | Normal | Inisialisasi `TangkiAirDomain(1500, 2000, 500)` lalu panggil `statusAir()` | Mengembalikan `"Rendah"` | Mengembalikan `"Rendah"` | Pass |
| C08-UT03 | `statusAir(): String` | Batas | Inisialisasi `TangkiAirDomain(2000, 2000, 500)` (volume tepat sama dengan ambang rendah) lalu panggil `statusAir()` | Mengembalikan `"Rendah"` | Mengembalikan `"Rendah"` | Pass |
| C08-UT04 | `statusAir(): String` | Batas | Inisialisasi `TangkiAirDomain(500, 2000, 500)` (volume tepat sama dengan ambang kritis) lalu panggil `statusAir()` | Mengembalikan `"Kritis"` | Mengembalikan `"Kritis"` | Pass |
| C08-UT05 | `statusAir(): String` | Negatif | Inisialisasi `TangkiAirDomain(-10, 2000, 500)` (nilai negatif/anomali sensor) lalu panggil `statusAir()` | Mengembalikan `"Kritis"` | Mengembalikan `"Kritis"` | Pass |

Tabel 4.2.6. Ringkasan Cakupan Kelas C08 (TangkiAir)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `statusAir()`, `statusTerbaru()` |
| Operasi yang diuji | `statusAir()` (1 dari 1 operasi public terimplementasi pada `TangkiAirDomain`; `statusTerbaru()` digabung di `ModulMonitoring.evaluasiKetersediaan()`) |
| ID Algoritma yang tercakup | Algo-009 (klasifikasi status ketersediaan air) |
| Coverage (wajib ≥ 70%) | 100% line / 100% branch, tool: Jest `--coverage` (Istanbul), bukti pada Subbab 4.6 |

---

### 4.2.4 Kelas Baterai

**ID Kelas:** C09  
**Nama Kelas:** Baterai (`BateraiDomain`)  
**Tingkat:** Mendalam

Tabel 4.2.7. Hasil Pengujian Unit Kelas C09 (Baterai)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C09-UT01 | `cekKapasitas(): Boolean` | Normal | Inisialisasi `BateraiDomain(25, 20)` lalu panggil `cekKapasitas()` | Mengembalikan `false` (kapasitas aman) | Mengembalikan `false` | Pass |
| C09-UT02 | `cekKapasitas(): Boolean` | Normal | Inisialisasi `BateraiDomain(15, 20)` lalu panggil `cekKapasitas()` | Mengembalikan `true` (kapasitas kritis) | Mengembalikan `true` | Pass |
| C09-UT03 | `cekKapasitas(): Boolean` | Batas | Inisialisasi `BateraiDomain(20, 20)` (tepat pada ambang batas aman) lalu panggil `cekKapasitas()` | Mengembalikan `false` (kapasitas aman) | Mengembalikan `false` | Pass |
| C09-UT04 | `cekKapasitas(): Boolean` | Negatif | Inisialisasi `BateraiDomain(-5, 20)` (nilai negatif/anomali sensor) lalu panggil `cekKapasitas()` | Mengembalikan `true` (kapasitas kritis) | Mengembalikan `true` | Pass |

Tabel 4.2.8. Ringkasan Cakupan Kelas C09 (Baterai)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `cekKapasitas()`, `kapasitas()`, `statusTerbaru()` |
| Operasi yang diuji | `cekKapasitas()` (1 dari 1 operasi public terimplementasi pada `BateraiDomain`; `kapasitas()` dan `statusTerbaru()` digabung di `ModulMonitoring`) |
| ID Algoritma yang tercakup | Algo-010 (pengecekan kapasitas daya baterai) |
| Coverage (wajib ≥ 70%) | 100% line / 100% branch, tool: Jest `--coverage` (Istanbul), bukti pada Subbab 4.6 |

---

### 4.2.5 Kelas RentangWaktu

**ID Kelas:** C13  
**Nama Kelas:** RentangWaktu (`RentangWaktuDomain`)  
**Tingkat:** Mendalam

Tabel 4.2.9. Hasil Pengujian Unit Kelas C13 (RentangWaktu)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C13-UT01 | `validasi(): Boolean` | Normal | Inisialisasi `RentangWaktuDomain('2026-11-01T00:00:00Z', '2026-11-02T00:00:00Z')` lalu panggil `validasi()` | Mengembalikan `true` | Mengembalikan `true` | Pass |
| C13-UT02 | `validasi(): Boolean` | Batas | Inisialisasi `RentangWaktuDomain('2026-11-01T12:00:00Z', '2026-11-01T12:00:00Z')` (waktu mulai sama dengan waktu selesai) lalu panggil `validasi()` | Mengembalikan `true` | Mengembalikan `true` | Pass |
| C13-UT03 | `validasi(): Boolean` | Negatif | Inisialisasi `RentangWaktuDomain('2026-11-03T00:00:00Z', '2026-11-01T00:00:00Z')` (waktu mulai melewati waktu selesai) lalu panggil `validasi()` | Mengembalikan `false` | Mengembalikan `false` | Pass |

Tabel 4.2.10. Ringkasan Cakupan Kelas C13 (RentangWaktu)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `validasi()` |
| Operasi yang diuji | `validasi()` (1 dari 1 operasi public) |
| ID Algoritma yang tercakup | Algo-011 (validasi rentang waktu) |
| Coverage (wajib ≥ 70%) | 100% line / 100% branch, tool: Jest `--coverage` (Istanbul), bukti pada Subbab 4.6 |

---

### 4.2.6 Kelas Notifikasi

**ID Kelas:** C25  
**Nama Kelas:** Notifikasi  
**Tingkat:** Sedang

Tabel 4.2.11. Hasil Pengujian Unit Kelas C25 (Notifikasi)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C25-UT01 | `tandaiDibaca(): Void` | Normal | Buat `new Notifikasi('Informasi perangkat')`, periksa `statusBaca` awal (`false`) dan `idNotifikasi`, lalu panggil `tandaiDibaca()` | `idNotifikasi` terisi UUID dan `statusBaca` berubah menjadi `true` | `idNotifikasi` terisi dan `statusBaca` berubah dari `false` menjadi `true` | Pass |
| C25-UT02 | `kirim(): Promise<Boolean>` | Negatif | Buat `new Notifikasi('Pesan dasar')` lalu panggil metode dasar `kirim()` sebelum di-override | Mengembalikan `false` | Mengembalikan `false` | Pass |

---

### 4.2.7 Kelas PeringatanDayaKritis

**ID Kelas:** C26  
**Nama Kelas:** PeringatanDayaKritis  
**Tingkat:** Mendalam

Tabel 4.2.12. Hasil Pengujian Unit Kelas C26 (PeringatanDayaKritis)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C26-UT01 | `kirim(): Promise<Boolean>` | Normal | Buat `PeringatanDayaKritis` (kapasitas 15%, `TEK-01`, `BAT-01`) dengan respons gateway sukses (`Math.random() = 0.8`), panggil `kirim()` | Mengembalikan `true` dan `statusPengiriman` menjadi `TERKIRIM` | Mengembalikan `true` dan `statusPengiriman = TERKIRIM` | Pass |
| C26-UT02 | `kirim(): Promise<Boolean>` | Batas | Panggil `kirim()` tepat pada ambang probabilitas gagal gateway (`Math.random() = 0.2`) | Mengembalikan `false` dan `statusPengiriman` tetap `PENDING` | Mengembalikan `false` dan `statusPengiriman = PENDING` | Pass |
| C26-UT03 | `kirim(): Promise<Boolean>` | Negatif | Simulasikan `pushToGateway` melempar `Error('NetworkException')`, panggil `kirim()` | Mengembalikan `false`, memanggil `simpanPending()` 1 kali, dan `statusPengiriman` menjadi `PENDING` | Mengembalikan `false`, `simpanPending()` terpanggil 1 kali, status `PENDING` | Pass |
| C26-UT04 | `simpanPending(): Void` | Normal | Setel `statusPengiriman = TERKIRIM` lalu panggil `simpanPending()` | `statusPengiriman` berubah menjadi `PENDING` | `statusPengiriman` berubah menjadi `PENDING` | Pass |

Tabel 4.2.13. Ringkasan Cakupan Kelas C26 (PeringatanDayaKritis)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `kirim()`, `simpanPending()` |
| Operasi yang diuji | `kirim()`, `simpanPending()` (2 dari 2 operasi public) |
| ID Algoritma yang tercakup | Algo-020 (pengiriman peringatan daya kritis dan fallback pending) |
| Coverage (wajib ≥ 70%) | 100% line / 100% branch, tool: Jest `--coverage` (Istanbul), bukti pada Subbab 4.6 |

---

### 4.2.8 Kelas ModulMonitoring

**ID Kelas:** -  
**Nama Kelas:** ModulMonitoring  
**Tingkat:** Mendalam

Tabel 4.2.14. Hasil Pengujian Unit Kelas ModulMonitoring

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| MM-UT01 | `evaluasiKetersediaan()` | Normal | Boundary palsu berisi tangki 8000 L (kapasitas 10000 L), baterai 78%, panel 420 W | `volumeLiter = 8000`, `persen = 80`, `kondisi = "Normal"`, `baterai.kritis = false`, `dayaWatt = 420`, `dataUsang = false` | Seluruh metrik dan status sesuai nilai yang diharapkan | Pass |
| MM-UT02 | `evaluasiKetersediaan()` | Batas | Boundary palsu dengan volume tepat pada ambang rendah (`3000 L`) dan ambang kritis (`1000 L`) | Volume `3000 L` berstatus `"Rendah"`, volume `1000 L` berstatus `"Kritis"` | Status tangki `"Rendah"` pada 3000 L dan `"Kritis"` pada 1000 L | Pass |
| MM-UT03 | `evaluasiKetersediaan()` | Batas | Boundary palsu dengan baterai `15%` (< ambang 20%) dan `25%` (> ambang 20%) | Baterai 15% mengembalikan `kritis = true`, baterai 25% mengembalikan `kritis = false` | `kritis = true` untuk 15% dan `kritis = false` untuk 25% | Pass |
| MM-UT04 | `evaluasiKetersediaan()` | Negatif | Seluruh perangkat tanpa data pembacaan (`pembacaan = []`) | Seluruh nilai pembacaan `null` (bukan 0) dan `dataUsang = true` | Seluruh nilai pembacaan `null` dan `dataUsang = true` | Pass |
| MM-UT05 | `evaluasiKetersediaan()` | Batas | Hanya tangki yang memiliki pembacaan (`8000 L`), sementara baterai kosong dan panel `null` | `dataUsang = false` (usang hanya jika seluruh perangkat kosong) | Mengembalikan `dataUsang = false` | Pass |
| MM-UT06 | `ambilRiwayatPanel()` | Normal | Teknisi `TEK-01` dengan panel `PNL-01`, rentang valid 28 Okt 2026 berisi 2 titik kinerja | Mengembalikan array 2 objek `{ waktu, dayaDihasilkan, energi }` dalam format ISO | Mengembalikan 2 titik kinerja dengan format dan rentang sesuai | Pass |
| MM-UT07 | `ambilRiwayatPanel()` | Negatif | Masukan rentang terbalik (`29 Okt` s.d. `28 Okt`) dan string bukan tanggal (`"bukan-tanggal"`) | Melempar `GalatRentangWaktu` untuk kedua kasus | Melempar `GalatRentangWaktu` pada kedua pemanggilan | Pass |
| MM-UT08 | `ambilRiwayatPanel()` | Batas | Teknisi `TEK-01` tidak memiliki panel yang ditugaskan (`panelTeknisi = null`) | Mengembalikan daftar kosong `[]` | Mengembalikan `[]` | Pass |
| MM-UT09 | `daftarPeringatanTeknisi()` | Normal | Boundary berisi 3 notifikasi (1 `KRITIS` valid, 1 `KRITIS` dengan kapasitas `null`, 1 `INFO`) | Hanya meneruskan 1 notifikasi `KRITIS` valid beserta `namaPerangkat` dan `ambangBatasAman` | Mengembalikan 1 item (`NTF-01`) dengan atribut lengkap | Pass |
| MM-UT10 | `daftarPeringatanTeknisi()` | Batas | Boundary tidak memiliki notifikasi untuk `TEK-01` | Mengembalikan daftar kosong `[]` | Mengembalikan `[]` | Pass |

Tabel 4.2.15. Ringkasan Cakupan Kelas ModulMonitoring

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `evaluasiKetersediaan()`, `catatPembacaan()`, `ambilHistorisPanel()` (diimplementasikan sebagai `ambilRiwayatPanel()` ditambah `daftarPeringatanTeknisi()`) |
| Operasi yang diuji | `evaluasiKetersediaan()`, `ambilRiwayatPanel()`, `daftarPeringatanTeknisi()` (3 dari 4 operasi public; `catatPembacaan()` merupakan delegasi langsung ke boundary dan diuji pada lapisan integrasi/controller) |
| ID Algoritma yang tercakup | Algo-033 (evaluasi ketersediaan air & energi), Algo-009, Algo-010, Algo-011 |
| Coverage (wajib ≥ 70%) | 88.88% line / 76% branch, tool: Jest `--coverage` (Istanbul), bukti pada Subbab 4.6 |

---

### 4.2.9 Kelas ModulNotifikasi

**ID Kelas:** -  
**Nama Kelas:** ModulNotifikasi  
**Tingkat:** Mendalam

Tabel 4.2.16. Hasil Pengujian Unit Kelas ModulNotifikasi

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| MN-UT01 | `kirimPeringatanDayaKritis()` | Normal | `BAT-01` (kapasitas 15%) memiliki penugasan `TEK-01` dan `notif.kirim()` mengembalikan `true` | Mengembalikan `true` dan `simpanNotifikasi` tidak dipanggil | Mengembalikan `true`, `simpanNotifikasi` tidak dipanggil | Pass |
| MN-UT02 | `kirimPeringatanDayaKritis()` | Batas | `BAT-01` (kapasitas 12%) memiliki penugasan `TEK-01`, namun `notif.kirim()` mengembalikan `false` | Mengembalikan `false` dan memanggil `simpanNotifikasi` 1 kali sebagai fallback `PENDING` | Mengembalikan `false` dan `simpanNotifikasi` terpanggil 1 kali | Pass |
| MN-UT03 | `kirimPeringatanDayaKritis()` | Negatif | `BAT-99` (kapasitas 10%) tidak memiliki penugasan teknisi (`[]`) | Mengembalikan `false` tanpa mengirim notifikasi | Mengembalikan `false` | Pass |
| MN-UT04 | `kirimUlangPending()` | Normal | `TEK-01` memiliki 2 notifikasi `PENDING` dan seluruh `notif.kirim()` mengembalikan `true` | Mengembalikan jumlah terkirim `2` | Mengembalikan `2` | Pass |
| MN-UT05 | `kirimUlangPending()` | Batas | `TEK-01` memiliki 2 notifikasi `PENDING` (salah satunya field opsional `null`); 1 berhasil, 1 gagal | Mengembalikan jumlah terkirim `1` | Mengembalikan `1` | Pass |
| MN-UT06 | `kirimUlangPending()` | Negatif | `TEK-02` tidak memiliki notifikasi `PENDING` (`[]`) | Mengembalikan `0` | Mengembalikan `0` | Pass |

Tabel 4.2.17. Ringkasan Cakupan Kelas ModulNotifikasi

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `kirimPeringatanDayaKritis()`, `kirimUlangPending()` |
| Operasi yang diuji | `kirimPeringatanDayaKritis()`, `kirimUlangPending()` (2 dari 2 operasi public) |
| ID Algoritma yang tercakup | Algo-037 (pengiriman peringatan daya kritis), Algo-051 (pengiriman ulang notifikasi pending) |
| Coverage (wajib ≥ 70%) | 100% line / 100% branch, tool: Jest `--coverage` (Istanbul), bukti pada Subbab 4.6 |

---

### 4.2.10 Kelas MonitoringController

**ID Kelas:** -  
**Nama Kelas:** MonitoringController  
**Tingkat:** Sedang

Tabel 4.2.18. Hasil Pengujian Unit Kelas MonitoringController

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| MC-UT01 | `ambilStatusInfrastruktur()` | Normal | `evaluasiKetersediaan()` mengembalikan data status valid | Mengembalikan `{ ok: true, data }` | Mengembalikan `{ ok: true, data }` | Pass |
| MC-UT02 | `ambilStatusInfrastruktur()` | Negatif | `evaluasiKetersediaan()` melempar galat basis data | Mengembalikan `{ ok: false, kode: 'GAGAL_INTERNAL' }` | Mengembalikan `ok: false`, `kode: 'GAGAL_INTERNAL'` | Pass |
| MC-UT03 | `terimaTelemetri()` | Normal | Payload valid `BAT-01` (`nilai: 15`, `satuan: '%'`), `catatPembacaan()` mengembalikan `true` | Mengembalikan `{ ok: true, data: { diterima: true } }` dan memanggil `prosesTelemetriBaterai('BAT-01', 15)` | Mengembalikan `ok: true` dan `prosesTelemetriBaterai` terpanggil dengan argumen benar | Pass |
| MC-UT04 | `terimaTelemetri()` | Negatif | `catatPembacaan()` mengembalikan `false` | Mengembalikan `{ ok: false, kode: 'GAGAL_SIMPAN' }` | Mengembalikan `ok: false`, `kode: 'GAGAL_SIMPAN'` | Pass |
| MC-UT05 | `terimaTelemetri()` | Negatif | `catatPembacaan()` melempar `Error('Timeout')` | Mengembalikan `{ ok: false, kode: 'GAGAL_INTERNAL' }` | Mengembalikan `ok: false`, `kode: 'GAGAL_INTERNAL'` | Pass |
| MC-UT06 | `prosesTelemetriBaterai()` | Normal | Perangkat `BAT-01` (`BATERAI`, ambang 20) menerima kapasitas `15` | Memanggil `kirimPeringatanDayaKritis('BAT-01', 15)` | `kirimPeringatanDayaKritis('BAT-01', 15)` terpanggil | Pass |
| MC-UT07 | `prosesTelemetriBaterai()` | Batas | Perangkat `BAT-01` (`ambangBatasAman: null`, default 20) menerima kapasitas tepat `20` | Tidak memanggil `kirimPeringatanDayaKritis` | `kirimPeringatanDayaKritis` tidak dipanggil | Pass |
| MC-UT08 | `prosesTelemetriBaterai()` | Negatif | Perangkat `TNK-01` bukan baterai (`cariBaterai` mengembalikan `null`) | Tidak memanggil `kirimPeringatanDayaKritis` | `kirimPeringatanDayaKritis` tidak dipanggil | Pass |
| MC-UT09 | `ambilRiwayatPanel()` | Normal | Rentang valid `2026-10-28` dengan data 1 titik kinerja | Mengembalikan `{ ok: true, data }` | Mengembalikan `{ ok: true, data }` | Pass |
| MC-UT10 | `ambilRiwayatPanel()` | Negatif | Rentang terbalik sehingga modul melempar `GalatRentangWaktu` *(teruji juga pada `monitoring.test.ts`)* | Mengembalikan `{ ok: false, kode: 'VALIDASI_GAGAL' }` | Mengembalikan `ok: false`, `kode: 'VALIDASI_GAGAL'` | Pass |
| MC-UT11 | `ambilRiwayatPanel()` | Negatif | Modul melempar galat umum (`Error('DB fail')`) | Mengembalikan `{ ok: false, kode: 'GAGAL_INTERNAL' }` | Mengembalikan `ok: false`, `kode: 'GAGAL_INTERNAL'` | Pass |
| MC-UT12 | `daftarPeringatanTeknisi()` | Normal | `daftarPeringatanTeknisi('TEK-01')` mengembalikan daftar peringatan | Mengembalikan `{ ok: true, data: [] }` | Mengembalikan `{ ok: true, data: [] }` | Pass |
| MC-UT13 | `daftarPeringatanTeknisi()` | Negatif | Modul melempar galat (`Error('DB fail')`) | Mengembalikan `{ ok: false, kode: 'GAGAL_INTERNAL' }` | Mengembalikan `ok: false`, `kode: 'GAGAL_INTERNAL'` | Pass |

### 4.2.11 Kelas LaporanGangguan

**ID Kelas:** C20  
**Nama Kelas:** `LaporanGangguan`  
**Tingkat:** Mendalam

Cara menjalankan unit test modul laporan (dari folder `src`): `npx jest tests/laporan --verbose --coverage --collectCoverageFrom='modules/laporan/**/*.ts' --collectCoverageFrom='!modules/laporan/ui/**' --collectCoverageFrom='!modules/laporan/index.ts' --collectCoverageFrom='!modules/laporan/repository.ts'`

Lokasi file test: `src/tests/laporan/` (`status.test.ts`, `entitas.test.ts`, `kirimLaporan.test.ts`, `bacaWarga.test.ts`, `perbaruiStatus.test.ts`). Berkas `repository.ts` (DataLaporanBoundary) tidak dihitung pada coverage unit karena diuji pada basis data nyata di Subbab 4.3.

Tabel 4.2.19. Hasil Pengujian Unit Kelas C20 (`LaporanGangguan`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C20-UT01 | `LaporanGangguan.baru()` | Normal | Buat laporan dari form berisi jenis dan deskripsi yang diapit spasi untuk `idWarga = 1`. | Status `MENUNGGU`; jenis dan deskripsi terpangkas. | Status `MENUNGGU`, jenis dan deskripsi tanpa spasi tepi. | Pass |
| C20-UT02 | `LaporanGangguan.baru()` | Batas | Buat dua laporan dari form yang sama, lalu ubah array foto pada form setelah laporan pertama dibuat. | ID berformat `LAP-` + 8 karakter heksadesimal dan berbeda tiap laporan; foto laporan tidak ikut berubah. | ID cocok pola, kedua ID berbeda, foto laporan tetap `["a.jpg"]`. | Pass |
| C20-UT03 | `validasiTransisi()` | Normal / Batas / Negatif | Uji tujuh pasangan status: dua langkah maju sah, lalu lompat, mundur, sama, dan dari status akhir. | Hanya `MENUNGGU` ke `SEDANG_DIPERBAIKI` dan `SEDANG_DIPERBAIKI` ke `SELESAI` bernilai benar. | Dua pasangan maju bernilai benar, lima pasangan lain bernilai salah. | Pass |
| C20-UT04 | `ubahStatus()`, `statusBerikutnya()` | Normal | Ubah status `MENUNGGU` ke `SEDANG_DIPERBAIKI`, lalu ke `SELESAI`. | Status maju satu langkah tiap panggilan; pada `SELESAI` tidak ada status berikutnya. | Status menjadi `SEDANG_DIPERBAIKI`, lalu `SELESAI`; `statusBerikutnya()` kosong. | Pass |
| C20-UT05 | `ubahStatus()` | Negatif | Panggil `ubahStatus("SELESAI")` pada laporan `MENUNGGU`. | Melempar galat dan status objek tidak berubah. | Galat dilempar dan status tetap `MENUNGGU`. | Pass |
| C20-UT06 | `getRingkasan()`, `getDetailLaporan()` | Normal | Buat laporan lalu panggil kedua metode dengan `namaPemilik = "Sari"`. | Ringkasan memuat ID, jenis, status, dan waktu ISO; detail menambah deskripsi, foto, dan nama pemilik. | Kolom ringkasan dan detail sama dengan kontrak, waktu `2026-10-28T01:10:00.000Z`. | Pass |
| C20-UT07 | `simpan()` | Normal / Negatif | Panggil `simpan()` dengan penyimpan palsu yang mengembalikan `true`, lalu yang mengembalikan `false`. | Data laporan diteruskan ke penyimpan dan hasilnya dikembalikan apa adanya. | Penyimpan menerima data laporan; hasil `true` lalu `false` diteruskan. | Pass |

Tabel 4.2.20. Ringkasan Cakupan Kelas C20 (`LaporanGangguan`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `LaporanGangguan()`, `setStatusMenunggu()`, `getDetailLaporan()`, `validasiTransisi()`, `statusBerikutnya()`, `ubahStatus()`, `simpan()` (diwujudkan: `baru()`, `dariData()`, `getRingkasan()`, `getDetailLaporan()`, `validasiTransisi()`, `statusBerikutnya()`, `ubahStatus()`, `simpan()`) |
| Operasi yang diuji | `baru()`, `validasiTransisi()`, `statusBerikutnya()`, `ubahStatus()`, `getRingkasan()`, `getDetailLaporan()`, `simpan()` |
| ID Algoritma yang tercakup | Algo-017 |
| Coverage (wajib ≥ 70%) | 100% line / 100% branch (Jest `--coverage`; bukti pada Subbab 4.6) |

### 4.2.12 Kelas StatusLaporan

**ID Kelas:** C21  
**Nama Kelas:** `StatusLaporan`  
**Tingkat:** Mendalam

Tabel 4.2.21. Hasil Pengujian Unit Kelas C21 (`StatusLaporan`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C21-UT01 | `statusBerikutnya()` | Normal / Batas | Minta status berikutnya untuk tiap status. | `MENUNGGU` ke `SEDANG_DIPERBAIKI`, `SEDANG_DIPERBAIKI` ke `SELESAI`, `SELESAI` tanpa lanjutan. | Hasil sesuai harapan, status akhir mengembalikan daftar kosong. | Pass |
| C21-UT02 | `adalahStatus()` | Negatif | Periksa nilai di luar enumerasi dan bukan string. | Bernilai salah untuk nilai di luar `MENUNGGU`, `SEDANG_DIPERBAIKI`, `SELESAI`. | Semua nilai di luar enumerasi ditolak. | Pass |
| C21-UT03 | `URUTAN_STATUS` | Normal | Bandingkan urutan konstanta dengan DPPL. | `MENUNGGU`, `SEDANG_DIPERBAIKI`, `SELESAI`. | Urutan sesuai DPPL. | Pass |
| C21-UT04 | `labelStatus()` | Normal | Minta label untuk tiap status. | `Menunggu`, `Sedang diperbaiki`, `Selesai`. | Ketiga label sesuai harapan. | Pass |

Tabel 4.2.22. Ringkasan Cakupan Kelas C21 (`StatusLaporan`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `label()` |
| Operasi yang diuji | `labelStatus()`, `statusBerikutnya()`, `adalahStatus()`, `URUTAN_STATUS` |
| ID Algoritma yang tercakup | Algo-017 |
| Coverage (wajib ≥ 70%) | 100% line / 100% branch (Jest `--coverage`; bukti pada Subbab 4.6) |

### 4.2.13 Kelas RiwayatStatusLaporan

**ID Kelas:** C22  
**Nama Kelas:** `RiwayatStatusLaporan`  
**Tingkat:** Sedang

Tabel 4.2.23. Hasil Pengujian Unit Kelas C22 (`RiwayatStatusLaporan`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C22-UT01 | konstruktor `RiwayatStatusLaporan` | Normal | Buat catatan untuk `LAP-1`, status `SELESAI`, pada waktu tetap. | Catatan memuat laporan, status, waktu, dan ID berformat `RWY-` + 8 karakter heksadesimal. | Data sama dengan masukan dan ID cocok pola. | Pass |
| C22-UT02 | `ringkas()` | Normal | Ringkas catatan berstatus `SEDANG_DIPERBAIKI`. | Berisi status dan waktu dalam teks ISO. | `{ status: "SEDANG_DIPERBAIKI", timestamp: "2026-10-28T01:10:00.000Z" }`. | Pass |
| C22-UT03 | konstruktor `RiwayatStatusLaporan` | Batas | Buat dua catatan dengan laporan, status, dan waktu yang sama. | ID riwayat berbeda. | Kedua ID berbeda. | Pass |

Tabel 4.2.24. Ringkasan Cakupan Kelas C22 (`RiwayatStatusLaporan`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `RiwayatStatusLaporan()`, `catat()`, `getRiwayatPerkembangan()` (diwujudkan: konstruktor dan `ringkas()`; `catat()` dijalankan atomik bersama perubahan status oleh `DataLaporanBoundary`) |
| Operasi yang diuji | Konstruktor, `ringkas()` |
| ID Algoritma yang tercakup | Algo-040, Algo-042 (bagian pencatatan) |
| Coverage (wajib ≥ 70%) | `100% line / 100% branch` (kelas Sedang, tidak diwajibkan) |

### 4.2.14 Kelas PenugasanLaporan

**ID Kelas:** C24  
**Nama Kelas:** `PenugasanLaporan`  
**Tingkat:** Mendalam

Tabel 4.2.25. Hasil Pengujian Unit Kelas C24 (`PenugasanLaporan`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C24-UT01 | `verifikasi()` | Normal | Penugasan `TEK-01` pada `LAP-1`; verifikasi `TEK-01` dan `LAP-1`. | Bernilai benar. | Bernilai benar. | Pass |
| C24-UT02 | `verifikasi()` | Negatif | Verifikasi `TEK-02` pada `LAP-1`. | Bernilai salah. | Bernilai salah. | Pass |
| C24-UT03 | `verifikasi()` | Batas / Negatif | Verifikasi `TEK-01` pada `LAP-2`, lalu masukan kosong. | Bernilai salah pada keduanya. | Bernilai salah pada keduanya. | Pass |

Tabel 4.2.26. Ringkasan Cakupan Kelas C24 (`PenugasanLaporan`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `verifikasi()` |
| Operasi yang diuji | `verifikasi()` |
| ID Algoritma yang tercakup | Algo-042 (verifikasi penugasan) |
| Coverage (wajib ≥ 70%) | 100% line / 100% branch (Jest `--coverage`; bukti pada Subbab 4.6) |

### 4.2.15 Kelas LaporanController

**ID Kelas:** - *(kelas desain tambahan)*  
**Nama Kelas:** `LaporanController`  
**Tingkat:** Sedang

Tabel 4.2.27. Hasil Pengujian Unit Kelas `LaporanController`

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| LC-UT01 | `kirimLaporan()` | Negatif | Kirim body berisi `idWarga: 999`, `idKomunitas: "KOM-LAIN"`, dan `status: "SELESAI"` dengan sesi warga ID 7. | Laporan tersimpan atas ID warga sesi dengan status `MENUNGGU`; isian tambahan diabaikan. | Laporan tersimpan dengan `idWarga = 7` dan status `MENUNGGU`. | Pass |
| LC-UT02 | `kirimLaporan()` | Batas | Kirim body tanpa kolom `fotoPendukung`. | Diterima dan foto menjadi daftar kosong. | `ok: true`, foto `[]`. | Pass |
| LC-UT03 | `kirimLaporan()` | Negatif | Kirim jenis dan deskripsi kosong. | `VALIDASI_GAGAL`; keanggotaan tidak diperiksa dan tidak ada yang disimpan. | `VALIDASI_GAGAL`, pemeriksaan keanggotaan dan penyimpanan tidak terpanggil. | Pass |
| LC-UT04 | `kirimLaporan()` | Negatif | Kirim laporan dengan sesi Teknisi. | `TIDAK_BERWENANG` dan tidak ada yang disimpan. | `TIDAK_BERWENANG`, penyimpanan tidak terpanggil. | Pass |
| LC-UT05 | `kirimLaporan()` | Negatif | Pemeriksaan keanggotaan melempar galat `koneksi putus`. | `GAGAL_INTERNAL`, bukan galat mentah. | `GAGAL_INTERNAL`. | Pass |
| LC-UT06 | `detailMilikWarga()`, `riwayatMilikWarga()` | Negatif / Batas | Masukkan ID `""`, `../etc/passwd`, `LAP A`, 65 karakter, angka 42, dan `null`. | `VALIDASI_GAGAL` tanpa query ke basis data. | Keenam ID ditolak `VALIDASI_GAGAL` dan query tidak terpanggil. | Pass |
| LC-UT07 | `daftarMilikWarga()`, `detailMilikWarga()`, `riwayatMilikWarga()` | Negatif | Panggil ketiga operasi dengan sesi Teknisi. | `TIDAK_BERWENANG`, tanpa query. | Ketiganya `TIDAK_BERWENANG`, query tidak terpanggil. | Pass |
| LC-UT08 | `daftarMilikWarga()` | Negatif | Query daftar melempar galat `koneksi putus`. | `GAGAL_INTERNAL`, bukan daftar kosong. | `GAGAL_INTERNAL`. | Pass |
| LC-UT09 | `perbaruiStatus()` | Negatif | Warga memanggil `perbaruiStatus("LAP-1", "SEDANG_DIPERBAIKI")`. | `TIDAK_BERWENANG`, penugasan tidak diperiksa. | `TIDAK_BERWENANG`, `cariPenugasan` tidak terpanggil. | Pass |
| LC-UT10 | `perbaruiStatus()` | Negatif / Batas | Masukkan status `DITOLAK`, `selesai`, `""`, `null`, dan angka 3. | `VALIDASI_GAGAL` tanpa query. | Kelima nilai ditolak `VALIDASI_GAGAL`, query tidak terpanggil. | Pass |
| LC-UT11 | `perbaruiStatus()` | Negatif | Pemeriksaan penugasan melempar galat `koneksi putus`. | `GAGAL_INTERNAL`. | `GAGAL_INTERNAL`. | Pass |
| LC-UT12 | `daftarPenugasan()`, `detailTugas()` | Negatif | Panggil dengan sesi Warga. | `TIDAK_BERWENANG`. | Keduanya `TIDAK_BERWENANG`. | Pass |

Tabel 4.2.28. Ringkasan Cakupan Kelas `LaporanController`

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `kirimLaporan()`, `daftarMilikWarga()`, `detailMilikWarga()`, `riwayatMilikWarga()`, `daftarPenugasan()`, `detailTugas()`, `riwayatTugas()`, `perbaruiStatus()` |
| Operasi yang diuji | Semua operasi publik, masing-masing minimal satu kasus normal (lewat `ML-UTxx`) dan satu kasus gagal (`LC-UTxx`) |
| ID Algoritma yang tercakup | Algo-025, Algo-034, Algo-040 |
| Coverage (wajib ≥ 70%) | 100% line / 87.5% branch (Jest `--coverage`; bukti pada Subbab 4.6) |

### 4.2.16 Kelas ModulLaporan

**ID Kelas:** - *(kelas desain tambahan)*  
**Nama Kelas:** `ModulLaporan`  
**Tingkat:** Mendalam

Tabel 4.2.29. Hasil Pengujian Unit Kelas `ModulLaporan`

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ML-UT01 | `kirimLaporan()` | Normal | Warga anggota komunitas mengirim form valid dengan deskripsi berspasi. | Sukses; laporan berstatus `MENUNGGU` milik warga sesi tersimpan satu kali; keanggotaan diperiksa dengan `(7, "KOM-1")`. | `ok: true`, status `MENUNGGU`, tersimpan sekali, deskripsi terpangkas. | Pass |
| ML-UT02 | `kirimLaporan()` | Negatif | Pemeriksaan keanggotaan mengembalikan `false` (Algo-003). | `TIDAK_BERWENANG` dan laporan tidak dibuat. | `TIDAK_BERWENANG`, penyimpanan tidak terpanggil. | Pass |
| ML-UT03 | `kirimLaporan()` | Negatif | Penyimpanan mengembalikan `false`. | `GAGAL_SIMPAN`, tidak pernah dilaporkan sukses. | `GAGAL_SIMPAN`. | Pass |
| ML-UT04 | `daftarMilikWarga()` | Normal | Warga ID 7 meminta daftar. | Hanya laporan miliknya, terbaru lebih dulu. | `["LAP-B", "LAP-A"]`; query memakai ID 7. | Pass |
| ML-UT05 | `daftarMilikWarga()` | Normal | Warga ID 8 meminta daftar. | Hanya laporan milik warga 8. | `["LAP-X"]`. | Pass |
| ML-UT06 | `daftarMilikWarga()` | Batas | Warga tanpa laporan meminta daftar. | `ok: true` dengan daftar kosong. | `{ ok: true, data: [] }`. | Pass |
| ML-UT07 | `detailMilikWarga()` | Normal | Warga ID 7 membuka `LAP-A`. | Detail memuat status, deskripsi, dan nama pemilik. | Detail `LAP-A` berstatus `SEDANG_DIPERBAIKI` dengan nama pemilik `Sari Lestari`. | Pass |
| ML-UT08 | `detailMilikWarga()` | Negatif | Warga membuka `LAP-X` (milik orang lain) dan `LAP-TIDAK-ADA`. | `TIDAK_DITEMUKAN` dengan pesan yang sama, sehingga keberadaan laporan orang lain tidak terbaca. | Keduanya `TIDAK_DITEMUKAN` dan hasilnya identik. | Pass |
| ML-UT09 | `riwayatMilikWarga()` | Normal | Warga membuka riwayat `LAP-A`. | Riwayat urut waktu naik. | `SEDANG_DIPERBAIKI`, lalu `SELESAI`. | Pass |
| ML-UT10 | `riwayatMilikWarga()` | Batas | Warga membuka riwayat `LAP-B` yang belum pernah berubah status. | `ok: true` dengan daftar kosong. | `{ ok: true, data: [] }`. | Pass |
| ML-UT11 | `riwayatMilikWarga()` | Negatif | Warga membuka riwayat `LAP-X` milik orang lain. | `TIDAK_DITEMUKAN` sebelum riwayat dibaca. | `TIDAK_DITEMUKAN`, `cariRiwayatMilik` tidak terpanggil. | Pass |
| ML-UT12 | `perbaruiStatus()` | Normal | Teknisi bertugas mengubah `LAP-1` dari `MENUNGGU` ke `SEDANG_DIPERBAIKI`. | Status dan satu riwayat disimpan bersama dalam satu pemanggilan transaksi dengan status lama `MENUNGGU`. | Status menjadi `SEDANG_DIPERBAIKI`, satu riwayat tercatat, transaksi dipanggil dengan status lama `MENUNGGU`. | Pass |
| ML-UT13 | `perbaruiStatus()` | Normal | Teknisi bertugas mengubah `LAP-2` ke `SELESAI`. | Sukses. | `ok: true`, status `SELESAI`. | Pass |
| ML-UT14 | `perbaruiStatus()` | Normal | Teknisi mengubah `LAP-1` ke `SEDANG_DIPERBAIKI`, lalu ke `SELESAI`. | Dua riwayat berurutan. | Riwayat `SEDANG_DIPERBAIKI` lalu `SELESAI`. | Pass |
| ML-UT15 | `perbaruiStatus()` | Negatif | Teknisi melompat dari `MENUNGGU` ke `SELESAI` (skenario alternatif 2 UC07). | `VALIDASI_GAGAL` beserta status yang boleh dipilih; tidak ada yang disimpan. | `VALIDASI_GAGAL` dengan opsi `["SEDANG_DIPERBAIKI"]`, status tetap `MENUNGGU`. | Pass |
| ML-UT16 | `perbaruiStatus()` | Negatif / Batas | Empat percobaan: mundur, sama, mundur dari akhir, dan akhir ke akhir. | Semua `VALIDASI_GAGAL`, status tidak berubah. | Keempatnya `VALIDASI_GAGAL`, status tetap dan transaksi tidak dipanggil. | Pass |
| ML-UT17 | `perbaruiStatus()` | Batas | Ubah laporan berstatus `SELESAI` ke `SELESAI`. | Opsi status berikutnya kosong. | `opsi.statusBerikutnya` kosong. | Pass |
| ML-UT18 | `perbaruiStatus()` | Negatif | Teknisi `TEK-02` mengubah `LAP-1` yang ditugaskan ke `TEK-01` (skenario alternatif 1 UC07). | `TIDAK_BERWENANG` sebelum status dibaca atau diubah. | `TIDAK_BERWENANG`; detail tugas dan transaksi tidak terpanggil; status tetap `MENUNGGU`. | Pass |
| ML-UT19 | `perbaruiStatus()` | Negatif | Teknisi mengubah `LAP-4` yang tidak ditugaskan ke siapa pun. | `TIDAK_BERWENANG`. | `TIDAK_BERWENANG`. | Pass |
| ML-UT20 | `perbaruiStatus()` | Negatif | Transaksi penyimpanan mengembalikan `false` (status sudah berubah oleh pihak lain). | `KONFLIK`, tidak ada perubahan. | `KONFLIK`, status tetap `MENUNGGU` dan tidak ada riwayat. | Pass |
| ML-UT21 | `perbaruiStatus()` | Negatif | Penyimpanan riwayat gagal di tengah transaksi. | `KONFLIK` dan status tidak berubah. | `KONFLIK`, status tetap `MENUNGGU`, tidak ada riwayat. | Pass |
| ML-UT22 | `daftarPenugasan()` | Normal | Teknisi `TEK-01` meminta daftar tugas. | Hanya tugas miliknya, laporan terlama lebih dulu. | `["LAP-3", "LAP-2", "LAP-1"]`. | Pass |
| ML-UT23 | `daftarPenugasan()` | Batas | Teknisi `TEK-02` tanpa penugasan meminta daftar. | Daftar kosong yang sah. | `{ ok: true, data: [] }`. | Pass |
| ML-UT24 | `detailTugas()` | Negatif | Teknisi membuka `LAP-4` (tidak ditugaskan) dan `LAP-TIDAK-ADA`. | `TIDAK_DITEMUKAN` dengan hasil yang sama. | Keduanya `TIDAK_DITEMUKAN` dan identik. | Pass |
| ML-UT25 | `detailTugas()`, `riwayatTugas()` | Normal | Teknisi `TEK-01` membuka detail dan riwayat `LAP-2`. | Detail dan riwayat terbaca. | Status `SEDANG_DIPERBAIKI`, riwayat `["SEDANG_DIPERBAIKI"]`. | Pass |
| ML-UT26 | `riwayatTugas()` | Negatif | Teknisi `TEK-02` membuka riwayat `LAP-2` milik tugas `TEK-01`. | `TIDAK_DITEMUKAN` sebelum riwayat dibaca. | `TIDAK_DITEMUKAN`, `cariRiwayatTugas` tidak terpanggil. | Pass |

Tabel 4.2.30. Ringkasan Cakupan Kelas `ModulLaporan`

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `kirimLaporan()`, `daftarMilikWarga()`, `detailMilikWarga()`, `riwayatMilikWarga()`, `daftarPenugasan()`, `detailTugas()`, `riwayatTugas()`, `perbaruiStatus()` |
| Operasi yang diuji | Seluruh operasi publik tersebut |
| ID Algoritma yang tercakup | Algo-003, Algo-017, Algo-025, Algo-034, Algo-040, Algo-042 |
| Coverage (wajib ≥ 70%) | 100% line / 95.45% branch (Jest `--coverage`; bukti pada Subbab 4.6) |

### 4.2.17 Kelas Akun

**ID Kelas:** C01  
**Nama Kelas:** `Akun`  
**Tingkat:** Mendalam

Tabel 4.2.31. Hasil Pengujian Unit Kelas C01 (`Akun`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C01-UT01 | `cocokKredensial(email, password)` | Normal / Negatif | Akun Warga `DISETUJUI` ber-hash `rahasia123`: panggil dengan email dan kata sandi benar, lalu email lain, lalu kata sandi salah. | `true` untuk kredensial benar; `false` pada dua percobaan lainnya. | ✓ cocokKredensial menolak email berbeda walau kata sandi benar (Algo-001) | Pass |
| C01-UT02 | `buatAkun(peran, dasar, profil)` | Normal | Panggil dengan peran `'Warga'` (huruf besar-kecil tidak berpengaruh). | Mengembalikan instance `Warga`. | ✓ buatAkun menerima peran tanpa memandang huruf besar-kecil | Pass |
| C01-UT03 | `buatAkun(peran, dasar, profil)` | Negatif | Panggil dengan peran `'ADMIN'`. | Melempar `PeranTidakValid`. | ✓ buatAkun menolak peran yang tidak dikenal (Algo-002) | Pass |

Tabel 4.2.32. Ringkasan Cakupan Kelas C01 (`Akun`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `cocokKredensial()`, `sudahDisetujui()`, `ubahStatus()`, `buatAkun()`, `dashboardTujuan()` (abstrak), `konteksSesi()` (abstrak) |
| Operasi yang diuji | `cocokKredensial()`, `buatAkun()` diuji langsung; `sudahDisetujui()`, `konteksSesi()`, dan `dashboardTujuan()` teruji tidak langsung lewat `AkunController.login` (AKC-UT06 dan AKC-UT09) |
| ID Algoritma yang tercakup | Algo-001, Algo-002 |
| Coverage (wajib ≥ 70%) | `80.3% Stmts / 66.66% Branch` pada `modules/akun/entity.ts` (Jest `--coverage`; bukti pada Subbab 4.6) |

### 4.2.18 Kelas Warga

**ID Kelas:** C02  
**Nama Kelas:** `Warga`  
**Tingkat:** Mendalam

Tabel 4.2.33. Hasil Pengujian Unit Kelas C02 (`Warga`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C02-UT01 | `validasiKeanggotaan(idKomunitas)` | Normal / Negatif | Panggil `'K1'` pada warga terdaftar di `'K1'`, lalu `'K2'`. | `true` untuk komunitas sendiri; `false` untuk komunitas lain. | ✓ validasiKeanggotaan hanya benar untuk warga terdaftar di komunitas yang sama (Algo-003) | Pass |
| C02-UT02 | `validasiKeanggotaan(idKomunitas)` | Batas / Negatif | Panggil pada warga `statusTerdaftar: false`, lalu pada warga tanpa profil (`null`). | `false` pada kedua kasus. | ✓ validasiKeanggotaan hanya benar untuk warga terdaftar di komunitas yang sama (Algo-003) — bagian `statusTerdaftar: false` dan profil `null` | Pass |
| C02-UT03 | `dashboardTujuan()`, `konteksSesi()` | Normal | Login Warga `DISETUJUI` dengan profil `{ idWarga: 7, idKomunitas: 'K1', statusTerdaftar: true }` (dijalankan lewat `AkunController.login`). | Tujuan `/dashboard/warga`; sesi berperan `WARGA` dengan `idWarga = 7` dan `idKomunitas = 'K1'`. | ✓ warga DISETUJUI masuk ke dasbor warga dengan sesi yang benar | Pass |

Tabel 4.2.34. Ringkasan Cakupan Kelas C02 (`Warga`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `getIdWarga()`, `validasiKeanggotaan()`, `dashboardTujuan()`, `konteksSesi()` |
| Operasi yang diuji | `validasiKeanggotaan()` diuji langsung; `dashboardTujuan()`, `konteksSesi()`, dan `getIdWarga()` teruji tidak langsung lewat `AkunController.login` (AKC-UT06) |
| ID Algoritma yang tercakup | Algo-003 |
| Coverage (wajib ≥ 70%) | `80.3% Stmts / 66.66% Branch` pada `modules/akun/entity.ts` (Jest `--coverage`; bukti pada Subbab 4.6) |

### 4.2.19 Kelas Teknisi

**ID Kelas:** C03  
**Nama Kelas:** `Teknisi`  
**Tingkat:** Sedang

Tabel 4.2.35. Hasil Pengujian Unit Kelas C03 (`Teknisi`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C03-UT01 | `dashboardTujuan()`, `konteksSesi()` | Normal | Login Teknisi `DISETUJUI` dengan profil `{ idTeknisi: 'T1', kontak: '08' }` lewat `AkunController.login`. | Tujuan `/dashboard/teknisi` dan sesi dibuat. | ✓ teknisi dan pengurus diarahkan ke dasbor masing-masing | Pass |
| C03-UT02 | `getIdTeknisi()` | Negatif | Login Teknisi `DISETUJUI` tanpa profil peran lewat `AkunController.login`. | Login gagal dengan `kode: 'AKUN_TIDAK_LENGKAP'`; tidak ada sesi dibuat. | ✓ akun DISETUJUI tanpa profil peran tidak membuat sesi | Pass |

Tabel 4.2.36. Ringkasan Cakupan Kelas C03 (`Teknisi`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `getIdTeknisi()`, `dashboardTujuan()` |
| Operasi yang diuji | Keduanya teruji tidak langsung lewat `AkunController.login` (AKC-UT06 dan AKC-UT11) |
| ID Algoritma yang tercakup | - |
| Coverage (wajib ≥ 70%) | `80.3% Stmts / 66.66% Branch` pada `modules/akun/entity.ts` (Jest `--coverage`; bukti pada Subbab 4.6) |

### 4.2.20 Kelas Pengurus

**ID Kelas:** C04  
**Nama Kelas:** `Pengurus`  
**Tingkat:** Mendalam

Tabel 4.2.37. Hasil Pengujian Unit Kelas C04 (`Pengurus`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C04-UT01 | `verifikasiKewenangan()`, `dashboardTujuan()` | Normal | Panggil `verifikasiKewenangan()` pada Pengurus `DISETUJUI`, lalu login lewat `AkunController.login` dengan profil `{ idPengurus: 'P1' }`. | Kewenangan `true`; tujuan `/dashboard/pengurus`. | ✓ verifikasiKewenangan hanya benar untuk pengurus DISETUJUI (Algo-006); ✓ teknisi dan pengurus diarahkan ke dasbor masing-masing | Pass |
| C04-UT02 | `verifikasiKewenangan()` | Negatif | Panggil pada Pengurus berstatus `MENUNGGU`. | Mengembalikan `false`. | ✓ verifikasiKewenangan hanya benar untuk pengurus DISETUJUI (Algo-006) | Pass |

Tabel 4.2.38. Ringkasan Cakupan Kelas C04 (`Pengurus`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `getIdPengurus()`, `verifikasiKewenangan()`, `dashboardTujuan()`, `konteksSesi()` |
| Operasi yang diuji | `verifikasiKewenangan()` diuji langsung; `dashboardTujuan()` dan `konteksSesi()` teruji tidak langsung lewat `AkunController.login` (AKC-UT06) |
| ID Algoritma yang tercakup | Algo-006 |
| Coverage (wajib ≥ 70%) | `80.3% Stmts / 66.66% Branch` pada `modules/akun/entity.ts` (Jest `--coverage`; bukti pada Subbab 4.6) |

### 4.2.21 Kelas CalonPengguna

**ID Kelas:** C05  
**Nama Kelas:** `CalonPengguna`  
**Tingkat:** Sedang

Tabel 4.2.39. Hasil Pengujian Unit Kelas C05 (`CalonPengguna`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C05-UT01 | `daftarkan()` | Normal | Daftarkan `'  Nadia Putri '` / `' Nadia@Example.TEST '` / `'rahasia123'` / `'Warga'` lewat `AkunController.daftarkan`. | Akun tersimpan `MENUNGGU` dengan peran `WARGA`, nama ter-trim, email huruf kecil; `password` bukan teks asli dan berawalan `scrypt$`. | ✓ menyimpan akun MENUNGGU dengan kata sandi ter-hash dan email dinormalisasi | Pass |

Tabel 4.2.40. Ringkasan Cakupan Kelas C05 (`CalonPengguna`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `daftarkan()` |
| Operasi yang diuji | `daftarkan()` teruji tidak langsung lewat `AkunController.daftarkan` (AKC-UT01) beserta pemeriksaan hash `scrypt$` |
| ID Algoritma yang tercakup | Algo-008 |
| Coverage (wajib ≥ 70%) | `80.3% Stmts / 66.66% Branch` pada `modules/akun/entity.ts` (Jest `--coverage`; bukti pada Subbab 4.6) |

### 4.2.22 Kelas AkunController

**ID Kelas:** - *(kelas controller di luar penomoran C pada Tabel 4.1 DPPL)*  
**Nama Kelas:** `AkunController`  
**Tingkat:** Mendalam

Tabel 4.2.41. Hasil Pengujian Unit Kelas `AkunController`

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AKC-UT01 | `daftarkan(nama, email, password, peran)` | Normal | Panggil dengan `('Nadia', 'nadia@example.test', 'rahasia123', 'WARGA')`, lalu dengan `'  Nadia Putri '`, `' Nadia@Example.TEST '`, peran `'Warga'`. | `{ berhasil: true, email: 'nadia@example.test' }`; nama ter-trim, email huruf kecil, peran `WARGA`, status `MENUNGGU`, hash `scrypt$`. | ✓ menyimpan akun MENUNGGU dengan kata sandi ter-hash dan email dinormalisasi | Pass |
| AKC-UT02 | `daftarkan(nama, email, password, peran)` | Negatif | Gunakan email yang sudah ada pada boundary. | `kode: 'EMAIL_TERDAFTAR'` dengan `galat.email` terisi; tidak ada penyimpanan. | ✓ menolak email yang sudah terdaftar tanpa menyimpan akun baru | Pass |
| AKC-UT03 | `daftarkan(nama, email, password, peran)` | Negatif | Boundary melempar `EmailSudahTerdaftar` saat menyimpan (kondisi balapan). | `kode: 'EMAIL_TERDAFTAR'`; tidak ada akun tersimpan. | ✓ menangani balapan: penyimpanan menolak email unik yang baru dipakai | Pass |
| AKC-UT04 | `daftarkan(nama, email, password, peran)` | Negatif | Boundary melempar `Error('db mati')`. | Promise ditolak dengan pesan `db mati`; tidak dilaporkan berhasil. | ✓ tidak melaporkan berhasil bila penyimpanan gagal karena galat lain | Pass |
| AKC-UT05 | `daftarkan(nama, email, password, peran)` | Negatif | Gunakan peran `'ADMIN'`; kosongkan nama, email, dan kata sandi; masukan bukan string (`undefined`, `123`, `null`, `{}`). | `DATA_TIDAK_VALID` dengan kolom galat terisi; masukan bukan string mengembalikan `berhasil: false` tanpa lemparan; tidak ada penyimpanan. | ✓ menolak peran yang tidak dikenal; ✓ menandai kolom wajib yang kosong dan tidak menyimpan; ✓ menolak body bertipe salah tanpa melempar galat | Pass |
| AKC-UT06 | `login(email, password)` | Normal | Login Warga, Teknisi, dan Pengurus `DISETUJUI` dengan kata sandi benar. | Tujuan `/dashboard/warga`, `/dashboard/teknisi`, `/dashboard/pengurus`; sesi warga memuat `idWarga` dan `idKomunitas`. | ✓ warga DISETUJUI masuk ke dasbor warga dengan sesi yang benar; ✓ teknisi dan pengurus diarahkan ke dasbor masing-masing | Pass |
| AKC-UT07 | `login(email, password)` | Normal | Login dengan email `'  W@B.ID '`. | Berhasil karena email dinormalisasi menjadi huruf kecil dan di-trim. | ✓ email dinormalisasi (spasi dan huruf besar) | Pass |
| AKC-UT08 | `login(email, password)` | Negatif | Kata sandi salah pada akun `DISETUJUI` dan `MENUNGGU`, lalu email tidak terdaftar. | Hasil identik: `kode: 'KREDENSIAL_SALAH'`, pesan `Email atau password salah`; status akun tidak bocor. | ✓ kata sandi salah dan email tidak ada memberi hasil yang sama; ✓ status akun tidak bocor bila kata sandi salah | Pass |
| AKC-UT09 | `login(email, password)` | Negatif | Akun `MENUNGGU` dengan kata sandi benar. | `kode: 'MENUNGGU_PERSETUJUAN'` dengan pesan status menunggu. | ✓ akun MENUNGGU dengan kata sandi benar diberi tahu masih menunggu | Pass |
| AKC-UT10 | `login(email, password)` | Negatif | Akun `DITOLAK` dengan kata sandi benar. | `kode: 'DITOLAK'` dengan pesan tidak memperoleh persetujuan. | ✓ akun DITOLAK mendapat pesan tidak disetujui | Pass |
| AKC-UT11 | `login(email, password)` | Negatif | Akun `DISETUJUI` tanpa profil peran. | `kode: 'AKUN_TIDAK_LENGKAP'`; tidak ada sesi dibuat. | ✓ akun DISETUJUI tanpa profil peran tidak membuat sesi | Pass |
| AKC-UT12 | `login(email, password)` | Batas / Negatif | Email kosong, password bukan string, dan password sepanjang 500 karakter. | Semua `KREDENSIAL_SALAH`; `ambilAkun` pada boundary tidak dipanggil. | ✓ input kosong atau bukan string ditolak tanpa menyentuh boundary | Pass |
| AKC-UT13 | `login(email, password)` | Normal (keamanan) | Login Warga berhasil, lalu periksa seluruh isi `hasil.sesi`. | Sesi tidak memuat field `password` maupun string `scrypt`. | ✓ sesi tidak memuat hash kata sandi | Pass |
| AKC-UT14 | `ambilAkunMenunggu(sesi)` | Normal / Batas | Sesi Pengurus; boundary berisi dua akun `MENUNGGU` dan dua status lain, lalu boundary tanpa akun `MENUNGGU`. | Hanya dua akun `MENUNGGU`; array kosong bila tidak ada pengajuan. | ✓ Pengurus hanya melihat akun berstatus MENUNGGU; ✓ daftar kosong bila tidak ada pengajuan | Pass |
| AKC-UT15 | `ambilAkunMenunggu(sesi)` | Negatif | Sesi Warga, lalu sesi Teknisi. | Melempar `GalatAuth` status 403; boundary tidak dipanggil. | ✓ warga dan teknisi ditolak sebelum data apa pun dibaca (A2) | Pass |
| AKC-UT16 | `ambilAkunMenunggu(sesi)` | Negatif | Sesi Pengurus, tetapi status akun di basis data sudah `DITOLAK`; lalu email Pengurus tidak ada lagi. | Melempar `GalatAuth` karena kewenangan diperiksa ulang dari data terkini. | ✓ Pengurus yang statusnya sudah berubah di basis data tidak lagi berwenang; ✓ sesi Pengurus yang akunnya tidak ada lagi ditolak | Pass |
| AKC-UT17 | `setujuiAkun(sesi, email)`, `tolakAkun(sesi, email)` | Normal | Pengurus menyetujui akun `MENUNGGU`, lalu menolak akun lain dengan email `'T@B.id '`. | `{ berhasil: true, status: 'DISETUJUI' }` lalu `{ berhasil: true, email: 't@b.id', status: 'DITOLAK' }`; akun lain tidak berubah. | ✓ menyetujui pengajuan: status menjadi DISETUJUI; ✓ menolak pengajuan: status menjadi DITOLAK (A1) | Pass |
| AKC-UT18 | `setujuiAkun`, `tolakAkun` | Batas / Negatif | Proses akun yang sama dua kali; coba ubah akun yang sudah `DISETUJUI` sejak awal. | `kode: 'SUDAH_DIPROSES'`; status tidak berubah. | ✓ pengajuan yang sudah diproses tidak bisa diproses lagi dan statusnya tidak berubah; ✓ akun yang sudah DISETUJUI sejak awal tidak bisa diubah lewat persetujuan | Pass |
| AKC-UT19 | `setujuiAkun(sesi, email)` | Negatif | Email tidak ada, email kosong, dan email bukan string (`42`). | Ketiganya `kode: 'TIDAK_DITEMUKAN'`. | ✓ email yang tidak ada atau kosong menghasilkan TIDAK_DITEMUKAN | Pass |
| AKC-UT20 | `setujuiAkun`, `tolakAkun` | Negatif | Sesi Warga dan Teknisi; boundary melempar `Error('db mati')` saat memperbarui status. | Kewenangan ditolak dengan `GalatAuth` tanpa perubahan status; kegagalan simpan menolak promise dan status tetap `MENUNGGU`. | ✓ non-Pengurus ditolak dan tidak ada status yang berubah; ✓ kegagalan penyimpanan tidak dilaporkan berhasil | Pass |

Tabel 4.2.42. Ringkasan Cakupan Kelas `AkunController`

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | Kelas controller di luar penomoran C; operasi mengikuti Algo-029, Algo-030, dan Algo-006: `daftarkan()`, `login()`, `ambilAkunMenunggu()`, `setujuiAkun()`, `tolakAkun()` |
| Operasi yang diuji | Seluruh operasi public di atas |
| ID Algoritma yang tercakup | Algo-006, Algo-029, Algo-030 |
| Coverage (wajib ≥ 70%) | `98.48% Stmts / 97.43% Branch` pada `modules/akun/controller.ts` (Jest `--coverage`; bukti pada Subbab 4.6) |

### 4.2.23 Kelas ModulAkun

**ID Kelas:** - *(kelas desain tambahan tanpa padanan Cxx)*  
**Nama Kelas:** `ModulAkun`  
**Tingkat:** Mendalam

Tabel 4.2.43. Hasil Pengujian Unit Kelas `ModulAkun`

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| MA-UT01 | `ambilWarga(idWarga)` | Normal / Batas | Panggil dengan `idWarga = 3` yang terdaftar di `'K1'`, lalu dengan ID yang tidak ada. | Warga terkini lolos `validasiKeanggotaan('K1')` dan gagal untuk `'K2'`; `null` untuk ID yang tidak ada. | ✓ mengembalikan warga terkini beserta keanggotaannya; ✓ mengembalikan null bila warga tidak ada | Pass |
| MA-UT02 | `cariEmail()`, `registrasiCalon()` | Normal / Negatif | Lewat `AkunController.daftarkan`: daftarkan email baru, lalu email yang sudah ada; lalu boundary melempar `EmailSudahTerdaftar`. | Email baru tersimpan `MENUNGGU` ber-hash `scrypt$`; email lama menghasilkan `EMAIL_TERDAFTAR`; galat balapan diteruskan. | ✓ menyimpan akun MENUNGGU dengan kata sandi ter-hash dan email dinormalisasi; ✓ menolak email yang sudah terdaftar tanpa menyimpan akun baru; ✓ menangani balapan: penyimpanan menolak email unik yang baru dipakai | Pass |
| MA-UT03 | `autentikasi()` | Normal / Negatif | Lewat `AkunController.login`: kredensial benar, kata sandi salah, dan email tidak terdaftar. | Objek `Akun` pada kredensial benar; `null` tanpa lemparan pada dua kasus lain. | ✓ warga DISETUJUI masuk ke dasbor warga dengan sesi yang benar; ✓ kata sandi salah dan email tidak ada memberi hasil yang sama | Pass |
| MA-UT04 | `daftarAkunMenunggu()` | Normal | Lewat `AkunController.ambilAkunMenunggu` dengan boundary berisi campuran status akun. | Hanya akun `MENUNGGU` yang dikembalikan. | ✓ Pengurus hanya melihat akun berstatus MENUNGGU | Pass |
| MA-UT05 | `ubahStatusPersetujuan()` | Batas / Negatif | Lewat `setujuiAkun`/`tolakAkun`: ubah akun `MENUNGGU`, lalu akun yang sudah diproses dan email yang tidak ada. | `true` hanya untuk akun `MENUNGGU`; `false` untuk akun yang sudah diproses atau tidak ada. | ✓ menyetujui pengajuan: status menjadi DISETUJUI; ✓ pengajuan yang sudah diproses tidak bisa diproses lagi dan statusnya tidak berubah; ✓ email yang tidak ada atau kosong menghasilkan TIDAK_DITEMUKAN | Pass |

Tabel 4.2.44. Ringkasan Cakupan Kelas `ModulAkun`

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `cariEmail()`, `registrasiCalon()`, `autentikasi()`, `ambilWarga()`, `daftarAkunMenunggu()`, `ubahStatusPersetujuan()` |
| Operasi yang diuji | `ambilWarga()` diuji langsung; sisanya teruji tidak langsung lewat `AkunController` (AKC-UT01–AKC-UT20) |
| ID Algoritma yang tercakup | Algo-001, Algo-008, Algo-032 |
| Coverage (wajib ≥ 70%) | `100% Stmts / 83.33% Branch` pada `modules/akun/modul.ts` (Jest `--coverage`; bukti pada Subbab 4.6) |

### 4.2.24 Kelas Validasi

**ID Kelas:** - *(kelas desain tambahan tanpa padanan Cxx)*  
**Nama Kelas:** `Validasi`  
**Tingkat:** Mendalam

Tabel 4.2.45. Hasil Pengujian Unit Kelas `Validasi`

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| VAL-UT01 | `validasiRegistrasi(nama, email, password, existing)` | Normal | Panggil dengan `('Nadia Putri', 'nadia@example.test', 'rahasia123', null)`. | Mengembalikan `true`. | ✓ menerima data lengkap dengan email baru | Pass |
| VAL-UT02 | `validasiRegistrasi(...)` | Negatif | Nama kosong dan berisi spasi saja; email `'tanpa-at'`, `'a@b'`, dan string kosong. | Mengembalikan `false` pada seluruh kasus. | ✓ menolak nama kosong atau hanya spasi; ✓ menolak email tanpa format sah | Pass |
| VAL-UT03 | `validasiRegistrasi(...)` | Batas | Kata sandi 7, 8, dan 129 karakter. | `false` untuk 7 karakter; `true` untuk 8 karakter; `false` untuk 129 karakter (melebihi batas hash). | ✓ menolak kata sandi di bawah 8 karakter, menerima tepat 8; ✓ menolak kata sandi lebih panjang dari batas hash | Pass |
| VAL-UT04 | `validasiRegistrasi(...)` | Negatif | Email valid dengan `existing` berisi akun lain. | Mengembalikan `false`. | ✓ menolak email yang sudah terdaftar | Pass |

Tabel 4.2.46. Ringkasan Cakupan Kelas `Validasi`

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `validasiRegistrasi()`, ditambah `periksaRegistrasi()` yang memberi pesan per kolom serta memeriksa peran |
| Operasi yang diuji | `validasiRegistrasi()` diuji langsung; `periksaRegistrasi()` teruji tidak langsung lewat `AkunController.daftarkan` (AKC-UT05) |
| ID Algoritma yang tercakup | Algo-031 |
| Coverage (wajib ≥ 70%) | `93.75% Stmts / 96.42% Branch` pada `modules/akun/validasi.ts` (Jest `--coverage`; bukti pada Subbab 4.6) |

### 4.2.25 Kelas CatatanPemeliharaan

**ID Kelas:** C27  
**Nama Kelas:** `CatatanPemeliharaan`  
**Tingkat:** Mendalam

Cara menjalankan: `npx jest tests/pemeliharaan --coverage` (lokasi file test: `src/tests/pemeliharaan/catatan.test.ts`)

Tabel 4.2.42. Hasil Pengujian Unit Kelas C27 (`CatatanPemeliharaan`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C27-UT01 | konstruktor `CatatanPemeliharaan(data, idTeknisi)` | Normal | Buat dua objek dari formulir yang sama dengan `idTeknisi = "TEK-01"`. | Setiap objek memiliki `idCatatan` berformat UUID dan kedua ID berbeda. | `idCatatan` berformat UUID 36 karakter pada kedua objek dan nilainya berbeda. | Pass |
| C27-UT02 | konstruktor | Normal / Keamanan | Formulir berisi `idPerangkat = "  BAT-01 "`, `tindakan` dan `catatanHasil` berspasi di tepi, serta kolom tambahan `idTeknisi: "TEK-LAIN"` pada body; `idTeknisi` sesi `"TEK-01"`. | Spasi tepi dipangkas; `idTeknisi = "TEK-01"` (sesi), kolom `idTeknisi` pada body diabaikan; `waktuPelaksanaan` tidak berubah. | `idPerangkat = "BAT-01"`, `tindakan = "Membersihkan terminal"`, `catatanHasil = "Terminal bersih."`, `idTeknisi = "TEK-01"`. | Pass |
| C27-UT03 | `validasiFormulir()` | Normal | Isian lengkap dengan waktu `2026-10-28T11:00:00+07:00`. | Mengembalikan `true`. | Mengembalikan `true`. | Pass |
| C27-UT04 | `validasiFormulir()` | Batas / Negatif | Tiga kali uji: `idPerangkat`, `tindakan`, atau `catatanHasil` berisi tiga spasi, kolom lain terisi. | Mengembalikan `false` pada ketiganya (kolom hanya spasi dianggap kosong). | Mengembalikan `false` pada ketiga kolom. | Pass |
| C27-UT05 | `validasiFormulir()` | Batas / Negatif | Tiga kali uji pada `waktuPelaksanaan`: `"2026-10-28T11:00:00"` (tanpa zona waktu), `"2026-02-31T11:00:00+07:00"` (tanggal mustahil), dan `""`. | Mengembalikan `false` pada ketiganya. | Mengembalikan `false` pada ketiganya. | Pass |
| C27-UT06 | `simpan(penyimpan)` | Normal | Panggil `simpan` dengan penyimpan yang mengembalikan `true`. | Mengembalikan `true`; penyimpan menerima baris dengan `idCatatan` objek, `idTeknisi = "TEK-01"`, `idPerangkat = "BAT-01"`, `waktuPelaksanaan` bertipe `Date` (`2026-10-28T04:00:00.000Z`), serta `tindakan` dan `catatanHasil` yang sudah dipangkas. | Mengembalikan `true`; baris yang diterima penyimpan sama persis dengan yang diharapkan. | Pass |
| C27-UT07 | `simpan(penyimpan)` | Negatif | Panggil `simpan` dengan penyimpan yang mengembalikan `false`. | Mengembalikan `false`. | Mengembalikan `false`. | Pass |

Tabel 4.2.43. Ringkasan Cakupan Kelas C27 (`CatatanPemeliharaan`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `CatatanPemeliharaan(data, idTeknisi)`, `validasiFormulir()`, `simpan()` |
| Operasi yang diuji | `CatatanPemeliharaan(data, idTeknisi)`, `validasiFormulir()`, `simpan()` |
| ID Algoritma yang tercakup | Algo-021 |
| Coverage (wajib ≥ 70%) | `CatatanPemeliharaan.ts`: 100% Stmts, 100% Branch, 100% Funcs, 100% Lines (`npx jest tests/pemeliharaan --coverage`; bukti pada Subbab 4.6) |

### 4.2.26 Kelas ModulPemeliharaan

**ID Kelas:** - (kelas desain tambahan, tanpa padanan Cxx)  
**Nama Kelas:** `ModulPemeliharaan`  
**Tingkat:** Mendalam

Cara menjalankan: `npx jest tests/pemeliharaan --coverage` (lokasi file test: `src/tests/pemeliharaan/modulPemeliharaan.test.ts`)

Tabel 4.2.44. Hasil Pengujian Unit Kelas `ModulPemeliharaan`

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| MP-UT01 | `simpanCatatan(idTeknisi, form)` | Normal | Panggil `simpanCatatan("TEK-01", form)` dengan formulir lengkap untuk `PNL-01`; repositori mengembalikan perangkat dan `simpanCatatan` bernilai `true`. | Mengembalikan `ok: true` dengan `idCatatan` yang sama dengan `idCatatan` pada baris yang diserahkan ke repositori. | Mengembalikan `ok: true`; `data.idCatatan` sama dengan `idCatatan` baris tersimpan. | Pass |
| MP-UT02 | `simpanCatatan` | Negatif | Panggil dengan `tindakan = ""`. | Mengembalikan `{ ok: false, kode: "VALIDASI_GAGAL", pesan: "Formulir tidak lengkap" }`; `cariPerangkatTeknisi` dan `simpanCatatan` tidak dipanggil. | Hasil sama dengan harapan dan kedua operasi repositori tidak terpanggil. | Pass |
| MP-UT03 | `simpanCatatan` | Negatif / Keamanan | `cariPerangkatTeknisi` mengembalikan `null` (perangkat bukan lingkup teknisi). | Mengembalikan `{ ok: false, kode: "TIDAK_DITEMUKAN", pesan: "Perangkat tidak ditemukan" }` dan tidak ada penyimpanan. | Hasil sama dengan harapan; `simpanCatatan` repositori tidak terpanggil. | Pass |
| MP-UT04 | `simpanCatatan` | Negatif | Repositori `simpanCatatan` mengembalikan `false`. | Mengembalikan `{ ok: false, kode: "GAGAL_SIMPAN", pesan: "Penyimpanan gagal" }`. | Hasil sama dengan harapan. | Pass |
| MP-UT05 | `simpanCatatan` | Keamanan | Panggil `simpanCatatan("TEK-07", form)`. | `cariPerangkatTeknisi` dipanggil dengan (`"TEK-07"`, `"PNL-01"`) dan baris tersimpan memuat `idTeknisi = "TEK-07"`. | Argumen pencarian dan `idTeknisi` baris tersimpan sesuai harapan. | Pass |
| MP-UT06 | `simpanCatatan` | Negatif | `cariPerangkatTeknisi` melempar `Error("db mati")`. | Promise ditolak dengan galat yang sama (ditangkap oleh controller) dan tidak ada penyimpanan. | Promise ditolak dengan `db mati`; `simpanCatatan` repositori tidak terpanggil. | Pass |

Tabel 4.2.45. Ringkasan Cakupan Kelas `ModulPemeliharaan`

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `simpanCatatan(idTeknisi, data)` |
| Operasi yang diuji | `simpanCatatan(idTeknisi, data)` |
| ID Algoritma yang tercakup | Algo-035 |
| Coverage (wajib ≥ 70%) | `ModulPemeliharaan.ts`: 100% Stmts, 100% Branch, 100% Funcs, 100% Lines (`npx jest tests/pemeliharaan --coverage`; bukti pada Subbab 4.6) |

### 4.2.27 Kelas PemeliharaanController

**ID Kelas:** - (kelas desain tambahan, tanpa padanan Cxx)  
**Nama Kelas:** `PemeliharaanController` (diwujudkan oleh `buatPemeliharaanService`)  
**Tingkat:** Sedang

Cara menjalankan: `npx jest tests/pemeliharaan --coverage` (lokasi file test: `src/tests/pemeliharaan/simpanCatatan.test.ts`)

Tabel 4.2.46. Hasil Pengujian Unit Kelas `PemeliharaanController`

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| PC-UT01 | `simpanCatatan(form)` | Normal | Bangun layanan untuk `"TEK-01"`, kirim formulir `BAT-01`, waktu `2026-10-28T11:00:00+07:00`, `tindakan` berspasi tepi. | `ok: true`; baris tersimpan memuat `idTeknisi = "TEK-01"`, `idPerangkat = "BAT-01"`, `tindakan` terpangkas, dan waktu `2026-10-28T04:00:00.000Z`. | `ok: true`; baris tersimpan sesuai harapan dan `idCatatan` hasil sama dengan baris. | Pass |
| PC-UT02 | `simpanCatatan(form)` | Keamanan | Body memuat `idTeknisi: "TEK-LAIN"` dan `idCatatan: "CTT-PALSU"`. | Baris tersimpan memakai `idTeknisi = "TEK-01"` dari sesi dan `idCatatan` buatan server. | `idTeknisi = "TEK-01"` dan `idCatatan` bukan `CTT-PALSU`. | Pass |
| PC-UT03 | `simpanCatatan(form)` | Negatif | UC08 Alt 1: `catatanHasil = " "`. | `{ ok: false, kode: "VALIDASI_GAGAL", pesan: "Isian belum lengkap", galat: [{ kolom: "catatanHasil", pesan: "Isi hasil pemeliharaan" }] }` tanpa akses data. | Hasil sama dengan harapan; repositori tidak dipanggil. | Pass |
| PC-UT04 | `simpanCatatan(form)` | Negatif / Keamanan | Perangkat di luar lingkup teknisi (`cariPerangkatTeknisi` mengembalikan `null`). | `ok: false`, `kode: "TIDAK_DITEMUKAN"`, tidak ada penyimpanan. | `kode: "TIDAK_DITEMUKAN"`; tidak ada penyimpanan. | Pass |
| PC-UT05 | `simpanCatatan(form)` | Negatif | Penyimpanan basis data gagal (`simpanCatatan` repositori `false`). | `{ ok: false, kode: "GAGAL_SIMPAN", pesan: "Penyimpanan gagal" }`. | Hasil sama dengan harapan. | Pass |
| PC-UT06 | `simpanCatatan(form)` | Negatif | `cariPerangkatTeknisi` melempar `Error("SELECT rahasia gagal")`. | `{ ok: false, kode: "GAGAL_INTERNAL", pesan: "Terjadi kesalahan. Coba lagi." }` tanpa membocorkan pesan basis data. | Hasil sama dengan harapan; pesan galat basis data tidak ikut diteruskan. | Pass |

Tabel 4.2.47. Ringkasan Cakupan Kelas `PemeliharaanController`

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `simpanCatatan(data)` |
| Operasi yang diuji | `simpanCatatan(data)` |
| ID Algoritma yang tercakup | Algo-026 |
| Coverage | `service.ts`: 100% Stmts, 100% Branch, 100% Funcs, 100% Lines (kelas Sedang; bukti pada Subbab 4.6) |

### 4.2.28 Operasi Validasi.periksaPemeliharaan

Fungsi `periksaPemeliharaan` adalah bagian UC08 dari kelas `Validasi` (Tabel 5.39.1 DPPL; `src/modules/pemeliharaan/internal/validasi.ts`). Kelas `Validasi` bertingkat Mendalam (Tabel 4.1.1); ID `VAL-PM-UTYY` dipakai agar tidak bertabrakan dengan `VAL-UTYY` untuk validasi registrasi. Lokasi file test: `src/tests/pemeliharaan/simpanCatatan.test.ts`.

Tabel 4.2.48. Hasil Pengujian Unit `Validasi.periksaPemeliharaan`

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| VAL-PM-UT01 | `periksaPemeliharaan(data)` | Normal | Formulir lengkap dengan waktu `2026-10-28T11:00:00+07:00`. | `{ valid: true, galat: [] }`. | `{ valid: true, galat: [] }`. | Pass |
| VAL-PM-UT02 | `periksaPemeliharaan(data)` | Negatif | `idPerangkat = " "`, `waktuPelaksanaan`, `tindakan`, dan `catatanHasil` kosong. | `valid: false`; galat memuat keempat kolom (`catatanHasil`, `idPerangkat`, `tindakan`, `waktuPelaksanaan`). | Keempat kolom ditandai galat. | Pass |
| VAL-PM-UT03 | `periksaPemeliharaan(data)` | Negatif | Empat kali uji dengan body bukan objek: `null`, `"teks"`, `42`, `[]`. | `valid: false` pada keempatnya. | `valid: false` pada keempatnya. | Pass |
| VAL-PM-UT04 | `periksaPemeliharaan(data)` | Negatif | `tindakan = 123` (bukan teks). | Galat `[{ kolom: "tindakan", pesan: "Isi tindakan" }]`. | Galat sesuai harapan. | Pass |
| VAL-PM-UT05 | `periksaPemeliharaan(data)` | Batas / Negatif | Lima kali uji waktu: `2026-10-28T11:00:00` (tanpa zona), `2026-10-28`, `28/10/2026 11:00`, `2026-02-31T11:00:00+07:00` (tanggal mustahil), `2026-13-01T11:00:00Z` (bulan 13). | Hanya kolom `waktuPelaksanaan` yang ditandai galat pada kelimanya. | Kelimanya menghasilkan galat tunggal pada `waktuPelaksanaan`. | Pass |
| VAL-PM-UT06 | `periksaPemeliharaan(data)` | Batas / Normal | Tiga kali uji waktu valid: `2026-10-28T11:00:00+07:00`, `2026-10-28T04:00:00.000Z`, `2024-02-29T11:00+07:00` (tahun kabisat). | `valid: true` pada ketiganya. | `valid: true` pada ketiganya. | Pass |

Ringkasan: `validasi.ts` mencapai 95,23% Stmts, 100% Branch, 100% Funcs, 94,44% Lines (`npx jest tests/pemeliharaan --coverage`).

<br>

## 4.3 Pengujian Integrasi

Pengujian integrasi memeriksa interaksi antarkomponen yang melewati batas, yaitu *Controller* ke *Model*, aplikasi ke basis data, dan aplikasi ke sistem eksternal. Daftar antarmuka mengacu pada dokumen DPPL, dengan minimal satu test case untuk setiap antarmuka. Pengujian memakai komponen nyata, bukan *mock*. Antarmuka yang tidak terdaftar pada DPPL dicantumkan juga.

ID antarmuka antarkomponen memakai awalan `IA-` agar tidak tertukar dengan ID antarmuka layar `I-XX` pada Tabel 3.3.

**Lingkungan.** PostgreSQL 15 nyata yang dijalankan lokal lewat Docker (migrasi `npx prisma migrate deploy` dan seed `npx tsx prisma/seed.ts` dipasang sebelum uji). Komponen yang diuji adalah kode produksi apa adanya: `route.ts`, controller, modul, dan *boundary* Prisma. Tidak ada *mock* repositori. Satu-satunya pengganti adalah gateway notifikasi, karena `PeringatanDayaKritis.kirim()` memakai `Math.random() > 0.2` sebagai simulasi gateway; pada INT-TC14 dan INT-TC18 nilai acak itu dipaksa (0,1 untuk gateway gagal dan 0,9 untuk gateway pulih) agar hasilnya deterministik.

**Cara menjalankan.** Jest tidak dapat memuat Prisma Client yang berbentuk ESM, sehingga uji integrasi dijalankan dengan `tsx` (pola yang sama dengan `tests/laporan/transaksiStatus.db.ts`):

```bash
DATABASE_URL=postgresql://... SESSION_SECRET=... npm run test:integrasi
```

Seluruh data uji berawalan `ITG-` dan dihapus di akhir proses; data seed tidak diubah. Lokasi file: `src/tests/integrasi/integrasi.db.ts`. Keluaran uji terakhir: 26 test case, 25 lulus dan 1 gagal (INT-TC18).

Tabel 4.3.1. Daftar Antarmuka Antarkomponen

| ID Antarmuka | Komponen Asal | Komponen Tujuan | Jenis Batas | Test Case |
| :--- | :--- | :--- | :--- | :--- |
| IA-01 | `PemeliharaanController` (`buatPemeliharaanService`) | `ModulPemeliharaan` dan `DataPerangkatBoundary` (bagian UC08) | Controller - Modul - Boundary | INT-TC01, INT-TC02 |
| IA-02 | `DataPerangkatBoundary` (`repositoriPemeliharaan`) | Database (`perangkat`, `penugasan_perangkat`, `catatan_pemeliharaan`) | Aplikasi - Basis data | INT-TC03, INT-TC04 |
| IA-03 | `DataAkunBoundary` | Database (`akun`) | Aplikasi - Basis data | INT-TC05, INT-TC06, INT-TC07 |
| IA-04 | `ModulAkun` | `DataAkunBoundary` | Modul - Boundary | INT-TC08, INT-TC09 |
| IA-05 | `DataPerangkatBoundary` (monitoring) | Database (`pembacaan_sensor`, `data_historis_kinerja`, `penugasan_perangkat`) | Aplikasi - Basis data | INT-TC10, INT-TC11, INT-TC12, INT-TC13 |
| IA-06 | `TelemetriAPI` | `MonitoringController`, `ModulMonitoring`, `ModulNotifikasi`, `DataPerangkatBoundary`, Database | API - Controller - Modul - Boundary | INT-TC14, INT-TC15, INT-TC16, INT-TC17 |
| IA-07 | `ModulNotifikasi` | `DataPerangkatBoundary` dan Database (`notifikasi`) | Modul - Boundary - Basis data | INT-TC18 |
| IA-08 | `LaporanController` | `ModulLaporan`, `ModulAkun`, `DataLaporanBoundary`, Database | Controller - Modul - Boundary | INT-TC19, INT-TC20, INT-TC21, INT-TC22, INT-TC23 |
| IA-09 | `ModulIuran` | `DataIuranBoundary` dan Database (`periode`, `tagihan`, `rekapitulasi`) | Modul - Boundary - Basis data | INT-TC24, INT-TC25, INT-TC26 |

Antarmuka ke sistem eksternal (gateway notifikasi dan perangkat lapangan) tidak memiliki sistem nyata pada tahap ini. Gateway disimulasikan di dalam `PeringatanDayaKritis` dan perangkat lapangan oleh `SensorAdapter.ts`; keduanya diuji pada IA-06 dan IA-07 sebatas batas yang tersedia.

Tabel 4.3.2. Hasil Pengujian Integrasi

| ID Pengujian | ID Antarmuka | Skenario | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| INT-TC01 | IA-01 | Normal: catatan pemeliharaan tersimpan dan terbaca ulang | `buatPemeliharaanService("TEK-01", repositoriPemeliharaan).simpanCatatan` dengan `PNL-01`, waktu `2026-10-28T11:00:00+07:00`; baca baris dengan `idCatatan` hasil langsung dari tabel `catatan_pemeliharaan`. | `ok: true`; baris ada dengan `id_teknisi = TEK-01`, `id_perangkat = PNL-01`, waktu `2026-10-28T04:00:00.000Z`, dan `catatan_hasil` sama. | Semua nilai baris sesuai harapan. | Pass |
| INT-TC02 | IA-01 | Gagal: perangkat nyata tetapi tidak ditugaskan ke teknisi | Buat perangkat `ITG-...-perangkat-lain` tanpa penugasan; simpan catatan untuk perangkat itu sebagai `TEK-01`. | `ok: false`, `kode: TIDAK_DITEMUKAN`; 0 baris pada `catatan_pemeliharaan` untuk perangkat itu. | `kode: TIDAK_DITEMUKAN` dan 0 baris tersimpan. | Pass |
| INT-TC03 | IA-02 | Normal: daftar perangkat teknisi | `daftarPerangkatTeknisi("TEK-01")` dan `daftarPerangkatTeknisi("TEK-TIDAK-ADA")`. | Perangkat `BAT-01`, `PNL-01`, `TNK-01` ada dan terurut menurut ID; teknisi tak dikenal menghasilkan daftar kosong. | Daftar terurut memuat ketiga perangkat; teknisi tak dikenal menghasilkan `[]`. | Pass |
| INT-TC04 | IA-02 | Gagal: INSERT melanggar kunci asing | `simpanCatatan` dengan `idTeknisi = "TEK-TIDAK-ADA"` pada boundary. | Mengembalikan `false` (Algo-047) tanpa melempar; tidak ada baris tersimpan. | Mengembalikan `false`; 0 baris dengan `idCatatan` itu; galat kunci asing `catatan_pemeliharaan_id_teknisi_fkey` dicatat di log. | Pass |
| INT-TC05 | IA-03 | Normal: akun disimpan dan dibaca ulang | `simpanAkun` untuk email baru berstatus `MENUNGGU`, lalu `cariEmail` dan `ambilAkun`. | `simpanAkun` bernilai `true`; `cariEmail` mengembalikan email, nama, peran, dan status `MENUNGGU` yang sama; `ambilAkun` mengembalikan akun yang sama. | Nilai terbaca sama dengan yang disimpan. | Pass |
| INT-TC06 | IA-03 | Gagal: email duplikat | `simpanAkun` dua kali dengan email yang sama. | Panggilan kedua melempar `EmailSudahTerdaftar`; hanya 1 baris untuk email itu. | Panggilan kedua melempar `EmailSudahTerdaftar`; 1 baris tersimpan. | Pass |
| INT-TC07 | IA-03 | Konkurensi: dua Pengurus memutuskan akun yang sama | `Promise.all` dua `perbaruiStatusAkun(email, "MENUNGGU", ...)` ke `DISETUJUI` dan `DITOLAK`. | Tepat satu bernilai `true`; status akhir bukan `MENUNGGU`. | Tepat satu `true`; status akhir berubah dari `MENUNGGU`. | Pass |
| INT-TC08 | IA-04 | Normal: registrasi menyimpan hash, bukan kata sandi asli | `registrasiCalon(new CalonPengguna("Uji Reg", email, "sandi-rahasia-1", "TEKNISI"))` lalu baca baris `akun`. | Status `MENUNGGU`; kolom `password` berawalan `scrypt$` dan tidak memuat kata sandi asli. | Status `MENUNGGU`; `password` berawalan `scrypt$` dan tidak memuat `sandi-rahasia-1`. | Pass |
| INT-TC09 | IA-04 | Normal dan negatif: autentikasi terhadap akun seed | `autentikasi` untuk `warga@fajar.test` dengan sandi benar, sandi salah, dan untuk email tak terdaftar. | Sandi benar mengembalikan akun; dua lainnya mengembalikan `null`. | Akun `warga@fajar.test` dikembalikan untuk sandi benar; `null` pada dua kasus lain. | Pass |
| INT-TC10 | IA-05 | Normal: pembacaan sensor tersimpan | `simpanPembacaan({ idPerangkat: "TNK-01", nilai: 4321, satuan, waktu: "2026-11-01T03:00:00.000Z" })` lalu baca baris. | `true`; baris memuat perangkat, nilai, dan waktu yang sama. | `true`; `TNK-01`, `4321`, dan `2026-11-01T03:00:00.000Z`. | Pass |
| INT-TC11 | IA-05 | Gagal: perangkat tak terdaftar | `simpanPembacaan` untuk `idPerangkat = "TIDAK-ADA"`. | `false` tanpa melempar; 0 baris tersimpan. | `false`; 0 baris; galat `pembacaan_sensor_id_perangkat_fkey` dicatat di log. | Pass |
| INT-TC12 | IA-05 | Batas: riwayat panel pada rentang waktu | `ambilHistorisKinerja("PNL-01", ...)` untuk 28 Okt 2026 WIB: 09:00-13:00, 10:00-14:00 (batas tepat pada data), dan 17:00-18:00. | Rentang pertama `KNR-2`, `KNR-3`; rentang kedua `KNR-2`, `KNR-3`, `KNR-4` (batas awal dan akhir ikut terhitung); rentang ketiga kosong. | Hasil ketiga rentang sama dengan harapan dan terurut menaik menurut waktu. | Pass |
| INT-TC13 | IA-05 | Normal: penanggung jawab perangkat | `cariPenugasanPerangkat("BAT-01")` dan `("TIDAK-ADA")`. | `BAT-01` dipegang `TEK-01`; perangkat tak dikenal menghasilkan daftar kosong. | `[{ idTeknisi: "TEK-01", idPerangkat: "BAT-01" }]` dan `[]`. | Pass |
| INT-TC14 | IA-06 | Normal: baterai di bawah ambang saat gateway gagal | `POST /api/telemetri` (memanggil `route.ts` dengan `Request` nyata): `BAT-01`, nilai `12`, ambang aman `20`; gateway dipaksa gagal. | Status HTTP 201; 1 baris `pembacaan_sensor`; 1 baris `notifikasi` untuk `TEK-01` berlevel `KRITIS`, kapasitas `12`, status pengiriman `PENDING`. | HTTP 201; pembacaan tersimpan; notifikasi `TEK-01`/`KRITIS`/`PENDING` tersimpan. | Pass |
| INT-TC15 | IA-06 | Normal: baterai di atas ambang | `POST /api/telemetri` dengan `BAT-01`, nilai `55`. | HTTP 201; pembacaan tersimpan; jumlah baris `notifikasi` tidak bertambah. | HTTP 201; pembacaan tersimpan; jumlah notifikasi tetap. | Pass |
| INT-TC16 | IA-06 | Gagal: payload tidak lengkap | `POST /api/telemetri` tanpa `satuan`. | HTTP 400 dengan `kode: VALIDASI_GAGAL`. | HTTP 400 dengan `kode: VALIDASI_GAGAL`. | Pass |
| INT-TC17 | IA-06 | Gagal: perangkat tak terdaftar | `POST /api/telemetri` dengan `idPerangkat = "TIDAK-ADA"`. | HTTP 500 dengan `kode: GAGAL_SIMPAN`; 0 baris tersimpan. | HTTP 500 dengan `kode: GAGAL_SIMPAN`; 0 baris tersimpan. | Pass |
| INT-TC18 | IA-07 | Normal: kirim ulang peringatan PENDING setelah gateway pulih | Setelah INT-TC14, gateway dipaksa berhasil; panggil `ModulNotifikasi.kirimUlangPending("TEK-01")`; baca ulang baris notifikasi dari INT-TC14. | Modul melaporkan jumlah terkirim >= 1 dan `status_pengiriman` baris itu menjadi `TERKIRIM` di basis data. | Modul melaporkan 2 terkirim (peringatan dari INT-TC14 dan `NTF-01` pada seed), tetapi `status_pengiriman` di basis data tetap `PENDING`. **Penyebab:** `kirimUlangPending()` hanya memanggil `notif.kirim()` dan menghitung hasilnya; status baru hanya berubah pada objek di memori dan tidak ditulis kembali lewat `DataPerangkatBoundary`. Akibatnya peringatan yang sama dikirim ulang pada setiap pemanggilan. **Usulan perbaikan:** tambahkan operasi `tandaiTerkirim(idNotifikasi)` pada `DataPerangkatBoundary` (`UPDATE notifikasi SET status_pengiriman = 'TERKIRIM'`) dan panggil saat `kirim()` berhasil. | Fail |
| INT-TC19 | IA-08 | Normal: Warga terdaftar mengirim laporan | `buatLaporanController(sesiWarga).kirimLaporan({ jenisGangguan: "Kebocoran pipa", deskripsi })`, lalu `daftarMilikWarga()`. | `ok: true`; baris `laporan_gangguan` berstatus `MENUNGGU` dengan `id_warga` sesi; laporan muncul pada daftar milik warga. | Baris tersimpan `MENUNGGU` dengan `id_warga` benar dan muncul pada daftar. | Pass |
| INT-TC20 | IA-08 | Keamanan: Warga lain membaca laporan | Warga kedua memanggil `detailMilikWarga(idLaporan)` untuk laporan INT-TC19. | `ok: false`, `kode: TIDAK_DITEMUKAN` (ID pada URL bukan bukti kewenangan). | `kode: TIDAK_DITEMUKAN`. | Pass |
| INT-TC21 | IA-08 | Gagal: Warga belum terdaftar | Buat akun dan warga dengan `status_terdaftar = false`; panggil `kirimLaporan`. | `ok: false`, `kode: TIDAK_BERWENANG`; 0 baris laporan untuk warga itu. | `kode: TIDAK_BERWENANG`; 0 baris tersimpan. | Pass |
| INT-TC22 | IA-08 | Normal dan negatif: teknisi bertugas mengubah status | Tugaskan laporan INT-TC19 ke `TEK-01`; `perbaruiStatus(id, "SELESAI")` (melompat), lalu `perbaruiStatus(id, "SEDANG_DIPERBAIKI")`. | Lompat ditolak tanpa riwayat baru; perubahan sah menyimpan status `SEDANG_DIPERBAIKI` dan tepat 1 baris riwayat. | Lompat ditolak dengan 0 riwayat; perubahan sah menyimpan status dan 1 riwayat. | Pass |
| INT-TC23 | IA-08 | Atomisitas: kegagalan riwayat membatalkan status | `simpanStatusDanRiwayat` dengan `idRiwayat` yang sudah dipakai (melanggar kunci utama setelah UPDATE). | Mengembalikan `false`; status laporan tetap `MENUNGGU` (*rollback*). | `false`; status tetap `MENUNGGU`. | Pass |
| INT-TC24 | IA-09 | Normal: tagihan FINAL periode seed | `lihatTagihanFinal(sesiWarga1, "PRD-2026-09")` (12,5 m³, 80 kWh; tarif 5.000, 1.500, tetap 20.000). | `ok: true`, `jumlahIuran = 202500`, `status = FINAL`. | `jumlahIuran = 202500`, `status = FINAL`. | Pass |
| INT-TC25 | IA-09 | Gagal: pemakaian tidak lengkap | `hitungPratinjau(sesiPengurus, "PRD-2026-10")` (pemakaian warga 2 tidak lengkap pada seed). | `ok: false`, `kode: DATA_BELUM_LENGKAP`; 0 baris `tagihan` untuk periode itu. | `kode: DATA_BELUM_LENGKAP`; 0 baris tagihan. | Pass |
| INT-TC26 | IA-09 | Normal: pratinjau, finalisasi, dan rekapitulasi | Periode baru dengan tarif 5.000, 1.500, tetap 20.000 dan pemakaian 10 m³/20 kWh dan 4 m³/10 kWh; `hitungPratinjau`, `tetapkanFinal`, lalu `buatRekapitulasi`. | Dua tagihan `DRAFT` bernilai 100000 dan 55000; setelah finalisasi periode `status_final = true` dan kedua tagihan `FINAL`; rekap tersimpan dengan total iuran 155000, air 14, energi 30. | Nilai tagihan, status, dan rekapitulasi sama dengan harapan. | Pass |

Catatan: `DataAkunBoundary.simpanAkun` melempar `EmailSudahTerdaftar` (bukan mengembalikan `false`) pada email duplikat, dan INT-TC06 menguji perilaku itu sesuai kode.

<br>

## 4.4 Pengujian Use Case

Pengujian use case dilakukan pada seluruh skenario normal dan alternatif sesuai Subbab 4.4 SKPL, dengan minimal satu test case untuk setiap skenario. Kolom ID KF menunjukkan KF yang diverifikasi oleh test case tersebut.

### 4.4.1 Use Case Memantau Ketersediaan Air dan Energi

**ID Use Case:** UC01  
**Nama Use Case:** Memantau Ketersediaan Air dan Energi

Tabel 4.4.1. Hasil Pengujian Use Case UC01

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC01-TC01 | KF01, KF02, KF03, KF04 | Normal | 1. Login sebagai akun Warga yang disetujui.<br>2. Buka halaman Dashboard Warga (I-03) pada `/dashboard/warga`.<br>3. Amati kartu ketersediaan air, kapasitas baterai, dan daya panel surya beserta satuan dan waktu pembacaannya. | Akun Warga terdaftar; data pembacaan sensor terbaru tersedia di basis data (`TNK-01`: 7.500 L, `BAT-01`: 80%, `PNL-01`: 2.400 W). | Sistem menampilkan volume/level air tangki terbaru, klasifikasi status air (Normal/Rendah/Kritis), kapasitas baterai (%), dan daya panel surya (W) secara konsisten beserta waktu pembacaan terakhir. | Dashboard Warga menampilkan volume tangki `7.500 L` dari kapasitas `10.000 L` (`75%`, status `Normal`), kapasitas baterai `80%` (`Normal`), daya panel surya `2.400 W`, dan waktu pembacaan `28 Okt 2026 · 10.20 WIB` secara konsisten. | Pass |
| UC01-TC02 | KF01, KF02, KF03 | Alternatif 1: Data Sensor Tidak Tersedia | 1. Kosongkan rekaman pada tabel `pembacaan_sensor`.<br>2. Muat ulang halaman Dashboard Warga (I-03) pada `/dashboard/warga`. | Akun Warga terdaftar; tidak terdapat data pembacaan sensor pada basis data. | Sistem tidak menampilkan galat fatal maupun angka 0 palsu; sistem menampilkan pemberitahuan bahwa data pembacaan terbaru belum tersedia. | Sistem menampilkan keterangan `Belum ada pembacaan` pada kartu tangki air, baterai, dan panel surya, status `Belum ada data` pada baterai, serta penampang tangki kosong disertai catatan bahwa `"Belum ada pembacaan" berarti sensor belum mengirim data, bukan nilai nol.` | Pass |

### 4.4.2 Use Case Melihat Tagihan Iuran Final

**ID Use Case:** UC02  
**Nama Use Case:** Melihat Tagihan Iuran Final

Tabel 4.4.2. Hasil Pengujian Use Case UC02

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC02-TC01 | KF05, KF06 | Normal | 1. Login sebagai akun Warga.<br>2. Buka menu Tagihan Iuran (Layar I-04).<br>3. Pilih periode tagihan yang telah berstatus `FINAL`. | Akun: Warga terdaftar<br>Periode: `2026-10` (status `FINAL`) | Sistem menampilkan rincian tagihan final milik warga tersebut yang mencakup periode tagihan, data pemakaian dasar (air m³ & energi kWh), serta total iuran. | Sistem menampilkan rincian tagihan final periode `2026-10` beserta pemakaian air, energi, dan total iuran sesuai harapan. | Pass |
| UC02-TC02 | KF06 | Alternatif 1: Tagihan Belum Ditetapkan Final | 1. Login sebagai akun Warga.<br>2. Buka menu Tagihan Iuran (Layar I-04).<br>3. Pilih periode tagihan yang masih berstatus `DRAFT` / belum final. | Akun: Warga terdaftar<br>Periode: `2026-11` (status `DRAFT`) | Sistem mendeteksi tagihan belum berstatus final, tidak menampilkan nominal tagihan draft, dan menampilkan pesan bahwa tagihan final belum tersedia. | Sistem menolak menampilkan tagihan draft dan menampilkan pemberitahuan bahwa tagihan final belum tersedia. | Pass |

### 4.4.3 Use Case Mengirim Laporan Gangguan

**ID Use Case:** UC03  
**Nama Use Case:** Mengirim Laporan Gangguan

Tabel 4.4.3. Hasil Pengujian Use Case UC03

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC03-TC01 | KF07, KF08, KF09, KF10 | Normal | 1. Login sebagai akun Warga terdaftar.<br>2. Buka menu Lapor gangguan (Layar I-05).<br>3. Pilih jenis gangguan dan isi deskripsi.<br>4. Klik tombol Kirim laporan. | Akun: `warga@fajar.test` (warga terdaftar pada komunitas)<br>Jenis: `Kebocoran pipa`<br>Deskripsi: `Pipa air di dekat pos ronda bocor sejak pagi, genangan mulai meluas ke jalan.` | Sistem menampilkan formulir, memvalidasi keanggotaan pengirim, menetapkan status awal `MENUNGGU`, menyimpan laporan sebagai entri baru, dan menampilkan notifikasi bahwa laporan berhasil dikirim. | Formulir tampil dengan isian terisi. Setelah klik kirim, sistem menampilkan "Laporan berhasil dikirim" dengan nomor `LAP-702D3F0E`, jenis Kebocoran pipa, dan status awal MENUNGGU. Laporan muncul pada daftar Laporan saya (lihat UC04-TC01). | Pass |
| UC03-TC02 | KF09 | Alternatif 1: Warga Tidak Terdaftar | 1. Login sebagai akun Warga.<br>2. Ubah keanggotaan akun itu menjadi tidak terdaftar pada basis data (`status_terdaftar = false`).<br>3. Buka Layar I-05, isi formulir, lalu klik Kirim laporan. | Akun: `warga@fajar.test` dengan keanggotaan tidak terdaftar<br>Jenis: `Kualitas air`<br>Deskripsi: `Lampu jalan di blok B mati total.` | Sistem mendeteksi pengirim bukan warga terdaftar, menolak pengiriman, dan menampilkan pesan bahwa pengguna tidak memiliki otorisasi. | Formulir menampilkan pesan "Tidak memiliki otorisasi" dan isian tetap di formulir. Tidak ada laporan baru di tabel `laporan_gangguan` (isinya tetap LAP-01, LAP-02, LAP-03, dan laporan dari UC03-TC01). Keanggotaan dikembalikan seperti semula setelah uji. | Pass |

### 4.4.4 Use Case Menelusuri Status Laporan Gangguan

**ID Use Case:** UC04  
**Nama Use Case:** Menelusuri Status Laporan Gangguan

Tabel 4.4.4. Hasil Pengujian Use Case UC04

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC04-TC01 | KF11, KF34 | Normal | 1. Login sebagai akun Warga.<br>2. Buka menu Laporan saya (Layar I-06).<br>3. Pilih laporan LAP-02 dengan tombol Lihat detail.<br>4. Amati status terkini dan riwayat perkembangan (Layar I-07). | Akun: `warga@fajar.test`<br>Laporan: `LAP-02` (status `SEDANG_DIPERBAIKI`) | Sistem menampilkan daftar laporan milik warga, status terkini laporan yang dipilih, dan riwayat perubahan status beserta waktunya. | Daftar memuat 3 laporan milik akun: LAP-702D3F0E (MENUNGGU), LAP-01 (MENUNGGU), dan LAP-02 (SEDANG_DIPERBAIKI). Detail LAP-02 menampilkan status SEDANG_DIPERBAIKI dan riwayat urut waktu naik: 27 Okt 2026 19.00 WIB Laporan diajukan (MENUNGGU), lalu 28 Okt 2026 07.00 WIB Perbaikan dimulai (SEDANG_DIPERBAIKI). | Pass |
| UC04-TC02 | KF11, KF34 | Alternatif 1: Laporan Tidak Ditemukan | 1. Pastikan akun Warga belum memiliki laporan (pada uji ini LAP-03 dialihkan sementara ke warga lain, lalu dikembalikan).<br>2. Login sebagai akun tersebut.<br>3. Buka menu Laporan saya (Layar I-06). | Akun: `warga2@fajar.test` tanpa laporan | Sistem tidak menghasilkan galat dan menampilkan informasi bahwa belum ada laporan gangguan yang dapat ditampilkan. | Layar menampilkan "Laporan milik Anda · 0 laporan" dan pesan "Belum ada laporan. Laporan gangguan Anda akan muncul di sini setelah tersimpan." | Pass |

### 4.4.5 Use Case Menerima Peringatan Dini Daya Kritis

**ID Use Case:** UC05  
**Nama Use Case:** Menerima Peringatan Dini Daya Kritis

Tabel 4.4.5. Hasil Pengujian Use Case UC05

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC05-TC01 | KF13, KF14 | Normal | 1. Jalankan simulator sensor (`npx tsx tests/simulator/SensorAdapter.ts`) untuk mengirim payload baterai kritis ke `POST /api/telemetri`.<br>2. Login sebagai Teknisi penanggung jawab perangkat (`Arif Pratama`).<br>3. Buka halaman Peringatan Perangkat (I-08). | Payload simulator `idPerangkat: 'BAT-01'`, `nilai: 15`, `satuan: '%'` (di bawah ambang aman `20%`); akun Teknisi penanggung jawab. | Sistem menerima telemetri kritis, menentukan teknisi penanggung jawab, mencatat peringatan otomatis, dan menampilkan detail peringatan (perangkat, kapasitas baterai, ambang aman, dan waktu) pada layar I-08. | Simulator melaporkan berhasil mengirim payload kritis `BAT-01` (`15%`). Layar I-08 menampilkan banner `"Baterai perlu diperiksa — Kapasitas baterai komunal 15%, di bawah ambang aman 20%."` beserta detail `Baterai Komunal` (`BAT-01`), badge `Kritis`, tanggung jawab `Arif Pratama · Anda`, dan waktu pembacaan `28 Okt 2026 · 02.15 WIB`. | Pass |
| UC05-TC02 | KF13, KF14 | Alternatif 1: Koneksi Jaringan Terputus | 1. Picu peringatan daya kritis saat simulasi gateway mengalami kegagalan kirim.<br>2. Periksa status pengiriman peringatan pada layar I-08.<br>3. Verifikasi mekanisme pengiriman ulang (`kirimUlangPending()`) melalui unit test `notifikasi.test.ts` (`MN-UT04`, `MN-UT05`). | Kondisi baterai kritis (`15% < 20%`) dengan simulasi kegagalan pengiriman gateway. | Sistem menyimpan notifikasi sementara berstatus `PENDING` (`Menunggu terkirim`), lalu mengirimkannya ulang saat koneksi kembali tersedia. | Layar I-08 menampilkan badge status pengiriman `Menunggu terkirim` (`PENDING`) untuk peringatan `BAT-01` (`15%`). Pengujian otomatis `kirimUlangPending()` (`MN-UT04`, `MN-UT05`) mengonfirmasi seluruh notifikasi `PENDING` berhasil dikirim ulang saat gateway pulih. | Pass |

### 4.4.6 Use Case Memantau Riwayat Kinerja Panel Surya

**ID Use Case:** UC06  
**Nama Use Case:** Memantau Riwayat Kinerja Panel Surya

Tabel 4.4.6. Hasil Pengujian Use Case UC06

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC06-TC01 | KF15, KF16 | Normal | 1. Login sebagai Teknisi.<br>2. Buka halaman Histori Performa Panel (I-09).<br>3. Pilih `Tanggal mulai = 28/10/2026` dan `Tanggal akhir = 28/10/2026`, lalu klik tombol `Tampilkan`. | Akun Teknisi penanggung jawab `PNL-01`; rentang tanggal valid `28/10/2026` s.d. `28/10/2026`. | Sistem memvalidasi rentang waktu, mengambil data historis dari basis data, dan menampilkan grafik tren daya panel surya (W) beserta ringkasannya. | Sistem menampilkan grafik batang `Daya panel · PNL-01` (`28 Okt 2026 · WIB`) dengan 5 titik pembacaan (`08.00`: `900 W`, `10.00`: `1.800 W`, `12.00`: `2.400 W`, `14.00`: `2.100 W`, `16.00`: `1.200 W`), `Daya tertinggi 2.400 W · 12.00 WIB`, dan `Pembacaan terakhir 1.200 W · 16.00 WIB`. | Pass |
| UC06-TC02 | KF15, KF16 | Alternatif 1: Data Historis Belum Tersedia | 1. Pada halaman Histori Performa Panel (I-09), pilih `Tanggal mulai = 01/01/2020` dan `Tanggal akhir = 01/01/2020`.<br>2. Klik tombol `Tampilkan`. | Akun Teknisi; rentang tanggal valid `01/01/2020` s.d. `01/01/2020` tanpa data historis di basis data. | Sistem tidak menampilkan galat; sistem menampilkan area kosong disertai pesan bahwa data historis belum tersedia pada rentang tersebut. | Sistem menampilkan kotak pesan `"Data historis tidak ditemukan pada rentang ini. Coba pilih rentang tanggal lain."` pada panel `PNL-01` (`Panel Atap Balai`) tanpa galat. | Pass |

### 4.4.7 Use Case Memperbarui Status Penanganan Gangguan

**ID Use Case:** UC07  
**Nama Use Case:** Memperbarui Status Penanganan Gangguan

Tabel 4.4.7. Hasil Pengujian Use Case UC07

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC07-TC01 | KF12, KF17, KF18, KF19, KF35 | Normal | 1. Login sebagai Teknisi yang ditugaskan.<br>2. Buka menu Tugas saya (Layar I-10).<br>3. Buka tugas LAP-01 (Layar I-11).<br>4. Klik tombol Mulai perbaikan. | Akun: `teknisi@fajar.test` (TEK-01)<br>Laporan: `LAP-01` berstatus `MENUNGGU`, ditugaskan ke TEK-01 | Sistem menampilkan laporan yang ditugaskan, memverifikasi penugasan, memvalidasi tahapan status, lalu menyimpan status baru `SEDANG_DIPERBAIKI` beserta riwayat dan waktu perubahannya. | Daftar memuat 2 tugas (LAP-02 dan LAP-01). Detail LAP-01 awalnya MENUNGGU dengan satu tombol Mulai perbaikan. Setelah klik, status menjadi SEDANG_DIPERBAIKI, tombol berganti menjadi Selesaikan perbaikan, dan riwayat bertambah "Perbaikan dimulai" pada 20 Nov 2026 17.24 WIB. Tabel `riwayat_status_laporan` memuat satu baris baru untuk LAP-01. | Pass |
| UC07-TC02 | KF18 | Alternatif 1: Teknisi Tidak Berwenang | 1. Login sebagai Teknisi.<br>2. Buka laporan yang tidak ditugaskan kepadanya, yaitu LAP-03 (Layar I-11).<br>3. Kirim permintaan ubah status ke `PATCH /api/laporan/tugas/LAP-03/status`. | Akun: `teknisi@fajar.test` (TEK-01)<br>Laporan: `LAP-03` (tidak ditugaskan)<br>Body: `{"status":"SEDANG_DIPERBAIKI"}` | Sistem memverifikasi penugasan, menolak perubahan, dan menampilkan pesan bahwa teknisi tidak berwenang atas laporan tersebut. | Halaman menampilkan "Teknisi tidak berwenang atas laporan ini" tanpa data laporan. Permintaan PATCH dijawab HTTP 403 dengan kode `TIDAK_BERWENANG` dan pesan "Teknisi tidak berwenang". Status LAP-03 tetap MENUNGGU. | Pass |
| UC07-TC03 | KF12, KF19 | Alternatif 2: Perubahan Status Tidak Valid | 1. Login sebagai Teknisi yang ditugaskan.<br>2. Buka LAP-01 yang berstatus `MENUNGGU` (Layar I-11).<br>3. Kirim permintaan ubah status langsung ke `SELESAI` (melompat) lewat `PATCH /api/laporan/tugas/LAP-01/status`. | Akun: `teknisi@fajar.test` (TEK-01)<br>Laporan: `LAP-01` berstatus `MENUNGGU`<br>Body: `{"status":"SELESAI"}` | Sistem memeriksa urutan status, menolak perubahan, dan menampilkan status yang dapat dipilih sesuai kondisi laporan saat ini. | Permintaan dijawab HTTP 400 dengan kode `VALIDASI_GAGAL`, pesan "Transisi status tidak valid", dan `opsi.statusBerikutnya = ["SEDANG_DIPERBAIKI"]`. Status LAP-01 tetap MENUNGGU. Layar I-11 hanya menawarkan satu tombol sah, yaitu Mulai perbaikan, sehingga status yang melompat hanya dapat dikirim lewat permintaan langsung seperti pada uji ini. | Pass |

### 4.4.8 Use Case Mencatat Kegiatan Pemeliharaan

**ID Use Case:** UC08  
**Nama Use Case:** Mencatat Kegiatan Pemeliharaan

Tabel 4.4.8. Hasil Pengujian Use Case UC08

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC08-TC01 | KF20, KF21 | Normal | 1. Login sebagai Teknisi.<br>2. Buka menu Pemeliharaan (Layar I-12).<br>3. Pilih perangkat, isi waktu pemeliharaan, tindakan, dan hasil pemeliharaan, lalu klik "Simpan catatan". | Akun: `teknisi@fajar.test` (TEK-01)<br>Perangkat: `PNL-01`<br>Waktu: `2026-11-20 10:00` WIB<br>Tindakan: "Membersihkan permukaan panel surya"<br>Hasil: "Debu dan kotoran hilang, daya keluaran kembali normal." | Sistem menampilkan formulir (perangkat, waktu, tindakan, hasil), memvalidasi kelengkapan isian, menyimpan catatan sebagai riwayat perangkat, lalu menampilkan notifikasi bahwa catatan berhasil disimpan. | Formulir I-12 menampilkan pilihan perangkat milik teknisi (`BAT-01`, `PNL-01`, `TNK-01`). Setelah klik, muncul pesan "Catatan pemeliharaan berhasil disimpan" dan seluruh kolom dikosongkan. Pada basis data, tabel `catatan_pemeliharaan` bertambah satu baris: `id_teknisi = TEK-01`, `id_perangkat = PNL-01`, `waktu_pelaksanaan = 2026-11-20 03:00:00+00` (10:00 WIB), `tindakan` dan `catatan_hasil` sama dengan isian. Baris dapat ditelusuri menurut perangkat dan waktu lewat indeks `(id_perangkat, waktu_pelaksanaan)`. | Pass |
| UC08-TC02 | KF20 | Alternatif 1: Formulir Tidak Lengkap | 1. Login sebagai Teknisi.<br>2. Buka menu Pemeliharaan (Layar I-12).<br>3. Biarkan waktu, tindakan, dan hasil pemeliharaan kosong, lalu klik "Simpan catatan". | Akun: `teknisi@fajar.test` (TEK-01)<br>Perangkat: `BAT-01` (pilihan awal)<br>Waktu, tindakan, hasil: kosong | Sistem membatalkan penyimpanan dan menandai kolom yang harus dilengkapi. | Kolom waktu, tindakan, dan hasil pemeliharaan diberi tanda galat dengan pesan "Isi waktu pemeliharaan yang valid", "Isi tindakan", dan "Isi hasil pemeliharaan", ditambah pesan "Isian belum lengkap". Jumlah baris `catatan_pemeliharaan` tetap 1 (data seed `CTT-01`), jadi tidak ada penyimpanan. | Pass |

Catatan UC08: penelusuran riwayat per perangkat dan waktu baru berupa penyimpanan data berindeks. Layar maupun API pembaca riwayat (`GET /api/pemeliharaan`, `riwayatPerangkat`) belum diimplementasikan; kode `service.ts` dan `route.ts` menandainya sebagai tugas lanjutan. Pengujian KF21 sebatas pada penyimpanan ke riwayat (UC08-TC01) dan belum mencakup penampilan riwayat. Skenario keamanan yang melengkapi UC08 (perangkat di luar lingkup teknisi, galat basis data) diuji pada PC-UT04, PC-UT06, INT-TC02, dan INT-TC04.

### 4.4.9 Use Case Menganalisis Pemakaian Komunal

**ID Use Case:** UC09  
**Nama Use Case:** Menganalisis Pemakaian Komunal

Tabel 4.4.9. Hasil Pengujian Use Case UC09

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC09-TC01 | KF22, KF23, KF24 | Normal | 1. Login sebagai akun Pengurus.<br>2. Buka dashboard administratif / Analitik Pemakaian Komunal (Layar I-13).<br>3. Pilih periode analisis bulanan. | Akun: Pengurus terdaftar<br>Periode: `2026-11` | Sistem memverifikasi peran pengurus, mengelompokkan data pemakaian berdasarkan periode terpilih, dan menampilkan data agregat serta rincian pekanan pemakaian air dan energi komunal. | Sistem menampilkan total pemakaian air (m³), total energi (kWh), dan grafik/rincian pekanan M1–M4 sesuai periode terpilih. | Pass |
| UC09-TC02 | KF23 | Alternatif 1: Pengguna Bukan Pengurus | 1. Login sebagai akun Warga atau Teknisi.<br>2. Coba akses URL dashboard administratif atau endpoint `GET /api/iuran/analitik`. | Akun: Warga / Teknisi<br>Endpoint: `GET /api/iuran/analitik?idPeriode=2026-11` | Sistem menolak akses (HTTP 403 / redirect) dan menampilkan informasi bahwa fitur hanya tersedia untuk pengurus. | Sistem menolak akses dengan kode `TIDAK_BERWENANG` (HTTP 403) dan pesan akses ditolak. | Pass |

### 4.4.10 Use Case Menghitung dan Menetapkan Iuran Warga

**ID Use Case:** UC10  
**Nama Use Case:** Menghitung dan Menetapkan Iuran Warga

Tabel 4.4.10. Hasil Pengujian Use Case UC10

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC10-TC01 | KF25, KF26, KF27, KF28, KF33 | Normal | 1. Login sebagai akun Pengurus.<br>2. Buka menu Perhitungan Iuran (Layar I-14) dan pilih periode dengan data pemakaian lengkap.<br>3. Jalankan perhitungan pratinjau (`POST /api/iuran/pratinjau`).<br>4. Tinjau hasil perhitungan.<br>5. Klik tombol "Tetapkan Final" (`POST /api/iuran/finalisasi`). | Akun: Pengurus terdaftar<br>Periode: `2026-11` (data lengkap, aturan tarif seragam) | Sistem menghitung iuran tiap warga secara otomatis dengan tarif seragam, menampilkan pratinjau berstatus `DRAFT`, memverifikasi kewenangan pengurus saat finalisasi, mengunci status periode/tagihan menjadi `FINAL`, dan menampilkan notifikasi berhasil. | Sistem menampilkan pratinjau `DRAFT` dengan nominal akurat dan berhasil mengunci status periode serta seluruh tagihan menjadi `FINAL`. | Pass |
| UC10-TC02 | KF27 | Alternatif 1: Pengurus Tidak Berwenang | 1. Login sebagai akun non-pengurus (Warga/Teknisi).<br>2. Kirim permintaan finalisasi ke `POST /api/iuran/finalisasi`. | Akun: Warga / Teknisi<br>Body: `{ "idPeriode": "2026-11" }` | Sistem mendeteksi akun tidak berwenang, menolak penetapan final (HTTP 403), status tagihan tetap `DRAFT`, dan pesan otorisasi ditampilkan. | Sistem menolak permintaan dengan kode `TIDAK_BERWENANG` (HTTP 403) dan status periode tetap `DRAFT`. | Pass |
| UC10-TC03 | KF25, KF33 | Alternatif 2: Data Pemakaian Belum Lengkap | 1. Login sebagai akun Pengurus.<br>2. Buka menu Perhitungan Iuran.<br>3. Pilih periode yang memiliki data pemakaian warga belum lengkap (`null`), lalu coba finalisasi. | Akun: Pengurus terdaftar<br>Periode: `2026-11` (terdapat `energiKWh: null`) | Sistem mendeteksi ketidaklengkapan data pemakaian, menghentikan proses, dan menampilkan peringatan bahwa data pemakaian harus dilengkapi terlebih dahulu. | Sistem mengembalikan kode `DATA_BELUM_LENGKAP` dan membatalkan penetapan final. | Pass |

### 4.4.11 Use Case Membuat Rekapitulasi Pemakaian dan Iuran

**ID Use Case:** UC11  
**Nama Use Case:** Membuat Rekapitulasi Pemakaian dan Iuran

Tabel 4.4.11. Hasil Pengujian Use Case UC11

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC11-TC01 | KF29, KF30, KF31, KF32 | Normal | 1. Login sebagai akun Pengurus.<br>2. Buka menu Rekapitulasi Pemakaian & Iuran (Layar I-15).<br>3. Pilih periode berstatus `FINAL`.<br>4. Buat rekapitulasi (`POST /api/iuran/rekapitulasi`), lalu klik Ekspor CSV dan Ekspor PDF. | Akun: Pengurus terdaftar<br>Periode: `2026-10` (status `FINAL`)<br>Format: CSV dan PDF | Sistem memverifikasi kewenangan pengurus dan status final data, menampilkan ringkasan rekapitulasi, serta mengunduh berkas CSV dan PDF dengan data pemakaian & iuran yang sesuai. | Rekapitulasi berhasil dibuat dan berkas CSV maupun PDF terunduh dengan isi data warga dan total iuran yang akurat. | Pass |
| UC11-TC02 | KF32 | Alternatif 1: Data Belum Final | 1. Login sebagai akun Pengurus.<br>2. Buka menu Rekapitulasi Pemakaian & Iuran.<br>3. Pilih periode yang datanya masih berstatus `DRAFT` / belum final, lalu coba buat rekapitulasi. | Akun: Pengurus terdaftar<br>Periode: `2026-11` (status `DRAFT`) | Sistem menolak pembuatan/ekspor rekapitulasi dan menampilkan informasi bahwa rekapitulasi hanya dapat dibuat menggunakan data berstatus final. | Sistem menolak pembuatan rekapitulasi untuk periode `DRAFT` dan menampilkan pesan bahwa data harus berstatus final. | Pass |
| UC11-TC03 | KF31 | Alternatif 2: Pengguna Tidak Berwenang | 1. Login sebagai akun Warga atau Teknisi.<br>2. Coba akses menu atau endpoint `POST /api/iuran/rekapitulasi`. | Akun: Warga / Teknisi<br>Body: `{ "idPeriode": "2026-10" }` | Sistem menolak akses (HTTP 403 / redirect) dan tidak menghasilkan berkas rekapitulasi. | Sistem menolak akses dengan kode `TIDAK_BERWENANG` (HTTP 403). | Pass |

### 4.4.12 Use Case Melakukan Registrasi Akun

**ID Use Case:** UC12  
**Nama Use Case:** Melakukan Registrasi Akun

Tabel 4.4.12. Hasil Pengujian Use Case UC12

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC12-TC01 | KF36, KF37, KF38, KF39, KF40 | Normal | Buka I-02, isi nama, email baru, kata sandi ≥ 8 karakter, dan peran Warga, lalu klik "Ajukan akun". | `Nadia Putri` / `nadia@example.test` / `rahasia123` / Warga | Akun tersimpan `MENUNGGU` dengan kata sandi ter-hash dan notifikasi menunggu persetujuan tampil. | Halaman "Pendaftaran diajukan" tampil dengan label "Menunggu persetujuan" dan pesan bahwa akun belum dapat masuk sebelum disetujui; akun tersimpan berstatus `MENUNGGU`. | Pass |
| UC12-TC02 | KF38 | Alternatif 1: Email Sudah Terdaftar | Buka I-02, isi formulir dengan email milik akun yang sudah ada, lalu klik "Ajukan akun". | `warga@fajar.test`; data lain valid | Pendaftaran ditolak, kolom email ditandai, tidak ada akun baru. | Pendaftaran ditolak: banner "Email sudah terdaftar atau data tidak valid" dan pesan kolom "Email sudah terdaftar. Gunakan email lain."; tidak ada akun baru dibuat. | Pass |
| UC12-TC03 | KF37 | Alternatif 2: Data Registrasi Tidak Lengkap | Buka I-02, kosongkan kolom wajib, lalu klik "Ajukan akun". | Kolom wajib kosong dan kata sandi < 8 karakter | Pendaftaran dibatalkan dengan pesan per kolom; tidak ada akun tersimpan. | Pendaftaran dibatalkan: kolom Nama lengkap, Email, dan Kata sandi ditandai "wajib diisi" disertai banner kesalahan; tidak ada akun tersimpan. | Pass |

### 4.4.13 Use Case Melakukan Login Akun

**ID Use Case:** UC13  
**Nama Use Case:** Melakukan Login Akun

Tabel 4.4.13. Hasil Pengujian Use Case UC13

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC13-TC01 | KF41, KF42, KF43, KF46 | Normal | Buka I-01, masukkan email dan kata sandi akun `DISETUJUI`, klik "Masuk"; ulangi untuk ketiga peran. | `warga@fajar.test`, `teknisi@fajar.test`, `pengurus@fajar.test` / `uji-fajar-123` | Sesi dibuat dan pengguna diarahkan ke `/dashboard/warga`, `/dashboard/teknisi`, `/dashboard/pengurus` sesuai peran di server. | Warga diarahkan ke `/dashboard/warga` ("Ringkasan air dan energi") dan pengurus ke `/dashboard/pengurus` ("Analitik komunal"); login teknisi lewat API menghasilkan tujuan `/dashboard/teknisi`. | Pass |
| UC13-TC02 | KF43, KF44 | Alternatif 1: Akun Masih Menunggu Persetujuan | Buka I-01 dan masuk dengan akun `MENUNGGU`. | `calon@fajar.test` / `uji-fajar-123` | Akses ditolak dengan pesan menunggu persetujuan pengurus; tidak ada sesi. | Login ditolak dengan pesan "Akun masih menunggu persetujuan pengurus" (HTTP 403); tidak ada sesi dibuat. | Pass |
| UC13-TC03 | KF44 | Alternatif 2: Akun Ditolak | Sebagai Pengurus, tolak satu akun uji pada I-16 (atau set `DITOLAK` lewat basis data), lalu login dengan akun tersebut. | Email akun `DITOLAK` / kata sandi benar | Akses ditolak dengan pesan tidak memperoleh persetujuan; tidak ada sesi. | Login dengan akun yang telah ditolak (`kucingimut@imut.imut.com`) ditolak dan menampilkan pesan "Akun tidak memperoleh persetujuan"; tidak ada sesi dibuat. | Pass |
| UC13-TC04 | KF45 | Alternatif 3: Kredensial Salah | Masuk dengan kata sandi salah untuk email terdaftar, lalu dengan email tidak terdaftar. | (a) `warga@fajar.test` + sandi salah<br>(b) `tidak-ada@fajar.test` + sandi apa pun | Pesan "Email atau password salah" dan HTTP 401 yang identik pada kedua percobaan. | Login `warga@fajar.test` dengan sandi salah menampilkan "Email atau password salah"; percobaan dengan email tidak terdaftar memberi respons identik (HTTP 401, kode `KREDENSIAL_SALAH`). | Pass |

### 4.4.14 Use Case Mengelola Persetujuan Akun

**ID Use Case:** UC14  
**Nama Use Case:** Mengelola Persetujuan Akun

Tabel 4.4.14. Hasil Pengujian Use Case UC14

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC14-TC01 | KF47, KF49, KF51 | Normal | Login sebagai Pengurus, buka I-16, pilih akun `MENUNGGU`, klik "Setujui", lalu muat ulang daftar. | `pengurus@fajar.test` / target `calon@fajar.test` | Daftar akun `MENUNGGU` tampil, target berubah `DISETUJUI`, notifikasi berhasil, daftar diperbarui. | Klik "Setujui" menampilkan notifikasi "Akun berhasil disetujui" dan daftar akun menunggu menjadi kosong setelah daftar dimuat ulang. | Pass |
| UC14-TC02 | KF50, KF51 | Alternatif 1: Pengurus Menolak Akun | Login sebagai Pengurus, buka I-16, pilih akun `MENUNGGU`, klik "Tolak". | Satu akun uji `MENUNGGU` | Status berubah `DITOLAK`, notifikasi penolakan tampil, daftar diperbarui. | Klik "Tolak" menampilkan notifikasi "Akun berhasil ditolak" dan daftar akun menunggu menjadi kosong. Login akun tersebut kemudian menghasilkan pesan "Akun tidak memperoleh persetujuan". | Pass |
| UC14-TC03 | KF48 | Alternatif 2: Pengguna Bukan Pengurus | Login sebagai Warga atau Teknisi, akses langsung URL I-16 dan kirim `GET /api/akun/persetujuan`. | `warga@fajar.test` atau `teknisi@fajar.test` | HTTP 403 (`GalatAuth`); tidak ada data akun yang tampil. | Warga membuka `/dashboard/pengurus/persetujuan` dialihkan (HTTP 307) ke `/dashboard/warga`; `GET /api/akun/persetujuan` dijawab HTTP 403 `DILARANG`. Tidak ada data akun yang tampil. | Pass |
<br>

## 4.5 Pengujian Kebutuhan Non-Fungsional (KNF)

Tabel 4.5. Hasil Pengujian KNF

| ID Pengujian | ID KNF | Parameter | Target Terukur | Metode dan Alat | Hasil Aktual | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| KNF01-TC01 | KNF01 | Security | Akses fitur/rute dashboard dan endpoint API dibatasi 100% sesuai peran pengguna (non-berwenang ditolak HTTP 403 atau dialihkan ke dasbor/login). | Pengujian akses rute dan API lintas peran melalui `src/middleware.ts` dan `src/lib/auth/akses.ts` (bukti `KNF01-TC01.png`), diperkuat uji `AKC-UT15`, `AKC-UT20`, `UC07-TC02`, `UC09-TC02`, `UC10-TC02`, `UC11-TC03`, dan `UC14-TC03`. | 100% permintaan akses rute/API oleh peran tidak berwenang ditolak dengan HTTP 403 (`TIDAK_BERWENANG` / `GalatAuth`) atau dialihkan; tidak ada data maupun perubahan status yang bocor. | Pass |
| KNF02-TC01 | KNF02 | Security | Data yang ditampilkan dan diubah hanya milik atau dalam lingkup penugasan akun sesi aktif tanpa kebocoran lintas akun. | Inspeksi isolasi data antarsesi (`KonteksSesi` pada `src/lib/auth/konteks.ts`, bukti `KNF02-TC01.png`), uji integrasi basis data nyata (`INT-TC02`, `INT-TC20`), serta uji unit `LC-UT01`, `ML-UT08`, `ML-UT11`, `C27-UT02`, dan `PC-UT02`. | Identitas pelaku (`idWarga`, `idTeknisi`, `idPengurus`) selalu diambil dari sesi server; percobaan membaca/mengubah data milik akun lain ditolak dengan `TIDAK_DITEMUKAN` / `TIDAK_BERWENANG` (0 kebocoran data lintas akun). | Pass |
| KNF03-TC01 | KNF03 | Reliability | 0 data peringatan hilang saat kegagalan koneksi; notifikasi tersimpan berstatus `PENDING` dan dikirim ulang hingga berstatus `TERKIRIM` saat koneksi pulih. | Pengujian unit Jest (`C26-UT03`, `MN-UT02`, `MN-UT04`, `MN-UT05`), inspeksi layar I-08 (`UC05-TC02`), dan pengujian integrasi PostgreSQL nyata (`INT-TC14`, `INT-TC18`). | Penyimpanan sementara berstatus `PENDING` (`Menunggu terkirim` pada I-08 dan `INT-TC14`) berjalan 100% tanpa kehilangan data. Namun pada uji integrasi `INT-TC18`, pemanggilan `kirimUlangPending()` belum memperbarui kolom `status_pengiriman` di basis data menjadi `TERKIRIM`. **Penyebab:** `kirimUlangPending()` hanya mengubah status pada objek di memori tanpa pembaruan ke `DataPerangkatBoundary`. **Usulan perbaikan:** tambahkan metode `tandaiTerkirim(idNotifikasi)` pada `DataPerangkatBoundary` dan panggil setelah pengiriman ulang berhasil. | Fail |
| KNF04-TC01 | KNF04 | Reliability | Data riwayat kinerja perangkat tampil ≤ 5 detik (5.000 ms) setelah halaman riwayat dibuka. | Profiling query `EXPLAIN (ANALYZE, BUFFERS)` (`psql -f prisma/profiling/uc06-riwayat-panel.sql`) pada 1.051.205 baris (169 MB) `data_historis_kinerja` dan pengukuran ujung-ke-ujung `GET /api/monitoring/panel` (1 minggu, 2.016 baris, 167.684 B) sebanyak 5 kali (bukti `knf04-profiling.png`). | Query sebelum indeks `(id_panel, waktu)`: `Parallel Seq Scan` 87,759 ms dan 85,945 ms; sesudah indeks: `Index Scan` 1,569 ms dan 1,004 ms. Pengukuran ujung-ke-ujung 5 kali (85,5; 56,0; 72,7; 60,1; 43,4 ms) menghasilkan rata-rata 63,5 ms dan maksimum 85,5 ms (memenuhi target ≤ 5.000 ms). | Pass |
| KNF05-TC01 | KNF05 | Safety | Peringatan daya kritis diproses dan dicatat/dikirim dalam waktu ≤ 3 detik (3.000 ms) sejak data baterai kritis diterima. | Pengukuran waktu respons `POST /api/telemetri` (payload `BAT-01`, `15%`) sebanyak 5 kali menggunakan PowerShell `Diagnostics.Stopwatch`, ambil rata-rata dan maksimum. | Rata-rata 55,2 ms (0,06 detik), maksimum 170 ms (0,17 detik) dari 5 kali pengujian (170, 27, 27, 30, 22 ms); seluruh permintaan mengembalikan `ok=True`. | Pass |
| KNF06-TC01 | KNF06 | Availability | Ketersediaan akses (uptime) ≥ 99% selama jam operasional komunitas. | Uji ketersediaan endpoint aplikasi selama sesi pengujian lokal (`npm run dev` + Docker PostgreSQL 15); pemantauan uptime bulanan penuh memerlukan deployment produksi. | Seluruh permintaan selama sesi pengujian fungsional dan non-fungsional lokal merespons normal (HTTP 200, 0 downtime). Keterbatasan: belum diukur pada lingkungan produksi selama 1 bulan penuh; rencana perbaikan: deploy ke server produksi dengan monitoring uptime. | Pass *(terbatas pada lingkungan lokal)* |
| KNF07-TC01 | KNF07 | Ergonomy | Antarmuka mudah dioperasikan warga tanpa panduan pelatihan khusus (seluruh alur utama warga dapat diselesaikan tanpa galat navigasi). | Pengujian kegunaan manual (*exploratory usability walkthrough*) pada layar Warga (I-03 s.d. I-07) dengan memeriksa kejelasan label, satuan, dan keterangan status. | Seluruh menu navigasi (Ringkasan, Tagihan, Laporan saya, Lapor gangguan) dapat diakses langsung; setiap metrik dilengkapi satuan eksplisit (`L`, `%`, `W`), badge teks status (`Normal`), dan panel `Keterangan kondisi pasokan`. | Pass |
| KNF08-TC01 | KNF08 | Ergonomy | Antarmuka pencatatan lapangan teknisi (I-10-M, I-11-M, I-12-M) terender responsif pada viewport smartphone (`390px`) tanpa *horizontal overflow*. | Chrome DevTools Device Toolbar dengan lebar viewport `390px` (memicu media query `< 800px` pada `src/app/globals.css`) pada layar tugas/pemeliharaan teknisi (bukti `KNF08-TC01.png`). | Tampilan satu kolom dan bilah navigasi bawah terender rapi pada lebar viewport `390px` tanpa *horizontal overflow*, serta seluruh label dan tombol terbaca jelas. | Pass |
| KNF09-TC01 | KNF09 | Portability | Aplikasi dapat diakses langsung melalui minimal 2 web browser modern tanpa instalasi aplikasi tambahan. | Pengujian fungsional akses `http://localhost:3000/dashboard/warga` secara langsung pada Google Chrome dan Microsoft Edge (bukti `KNF09-TC01.png`). | Pass pada Google Chrome dan Microsoft Edge; seluruh elemen antarmuka dan data dashboard warga terender identik tanpa instalasi aplikasi tambahan. | Pass |
| KNF10-TC01 | KNF10 | Portability | Berkas rekapitulasi berhasil diekspor ke format dokumen universal PDF dan CSV yang valid. | Uji tombol ekspor CSV (`papaparse`) dan PDF (`jspdf`) pada Layar I-15 (`UC11-TC01`, bukti `uc11-rekapitulasi.png`) serta uji unit `C28-UT01` (`Rekapitulasi.toCSV()` dan `toPDFBuffer()`). | Berkas CSV memuat seluruh rincian warga dan nominal iuran secara valid, sedangkan berkas PDF menghasilkan dokumen berheader `%PDF-` yang dapat dibuka di pembaca PDF standar. | Pass |
| KNF11-TC01 | KNF11 | Response time | Pembaruan nilai input sensor pada dashboard warga (I-03) tampil dalam waktu ≤ 2 detik (2.000 ms). | Chrome DevTools tab Network (filter `Doc`, `Keep log` & `Disable cache` aktif), 6 kali muat ulang `/dashboard/warga`, ambil rata-rata dan maksimum (bukti `KNF11-TC01.png`). | Rata-rata 156,17 ms (0,16 detik), maksimum 191 ms (0,19 detik) dari 6 kali pengukuran (191, 173, 122, 145, 139, 167 ms); seluruh permintaan berstatus HTTP 200. | Pass |
| KNF12-TC01 | KNF12 | Response time | Kalkulasi otomatis seluruh iuran komunal selesai dalam waktu ≤ 5 detik (5.000 ms). | Chrome DevTools tab Network pada proses hitung pratinjau iuran Layar I-14 (`POST /api/iuran/pratinjau`), 5 kali pengukuran, ambil rata-rata dan maksimum (bukti `KNF12-TC01.png`). | *[Isi rata-rata & maks ms dari Langkah 3B di bawah]* | Pass |
| KNF13-TC01 | KNF13 | Memory | Eksekusi firmware pembacaan sensor tidak melebihi batas kapasitas memori internal mikrokontroler. | Tidak dapat diuji pada perangkat keras mikrokontroler fisik karena implementasi mengganti perangkat IoT dengan simulator perangkat lunak TypeScript (`tests/simulator/SensorAdapter.ts`). | Tidak diimplementasikan pada firmware mikrokontroler fisik (menggunakan simulator perangkat lunak Node.js/TypeScript). **Penyebab:** keterbatasan perangkat keras IoT fisik pada tahap implementasi. **Usulan perbaikan:** porting logika `SensorAdapter` ke firmware C/C++ pada ESP32 dan ukur penggunaan SRAM/Flash saat integrasi perangkat keras. | Fail |
| KNF14-TC01 | KNF14 | Security | Password pengguna tersimpan sebagai hash, bukan teks biasa. | Inspeksi kolom `password` pada tabel `akun` PostgreSQL (`KNF14-TC01.png`), uji integrasi `INT-TC08`, dan uji unit `C05-UT01` & `AKC-UT13` (`src/lib/auth/password.ts`). | 100% kata sandi tersimpan dalam format hash `scrypt$N$r$p$garam$hash`, tidak memuat teks biasa, dan tidak pernah disertakan pada payload sesi (`KonteksSesi`). | Pass |
| KNF15-TC01 | KNF15 | Security | Pesan kegagalan login tidak membedakan email tidak terdaftar dan password salah. | Uji login pada Layar I-01 dengan kombinasi password salah pada email terdaftar vs email tidak terdaftar (`KNF15-TC01.png`, `UC13-TC04`), diperkuat `AKC-UT08` dan penyamaan waktu respons pada `ModulAkun.autentikasi()`. | Kedua skenario mengembalikan HTTP 401 dan pesan galat yang identik (`"Email atau password salah"`), serta tidak membocorkan status maupun keberadaan email. | Pass |

<br>

## 4.6 Tangkapan Layar dan Bukti Hasil Pengujian

Bukti pengujian dilampirkan sesuai ID Pengujian pada Subbab 4.2 sampai 4.5, berupa tangkapan layar aplikasi, keluaran *test runner*, laporan *coverage* untuk setiap kelas Mendalam, atau hasil alat ukur.

Tabel 4.6. Bukti Hasil Pengujian

| ID Pengujian | Bukti Hasil Pengujian |
| :--- | :--- |
| C01–C05 dan `AkunController` (login.test.ts) | ![Output Jest login.test.ts](./assets/jest-akun-login.png) |
| `Validasi`, `ModulAkun.ambilWarga`, dan `AkunController` registrasi/persetujuan (registrasi.test.ts dan persetujuan.test.ts) | ![Output Jest registrasi.test.ts dan persetujuan.test.ts](./assets/jest-akun-registrasi-persetujuan.png) |
| C01–C05 (`modules/akun/entity.ts`), `AkunController`, `ModulAkun`, `Validasi` (Coverage) | ![Laporan Coverage Modul Akun](./assets/coverage-akun.png) |
| C19-UT01 – C19-UT08, C28-UT01 | ![Output Jest Modul Iuran](./assets/jest-iuran.png) |
| C19 & C28 (coverage) | ![Laporan Coverage Modul Iuran](./assets/coverage-iuran.png) |
| C20-UT01 – C20-UT07, C21-UT01 – C21-UT04, C22-UT01 – C22-UT03, C24-UT01 – C24-UT03, LC-UT01 – LC-UT12, ML-UT01 – ML-UT26 | ![Output Jest Modul Laporan](./assets/jest-laporan.png) |
| C20, C21, C24, `ModulLaporan` (coverage) | ![Laporan Coverage Modul Laporan](./assets/coverage-laporan.png) |
| UC02-TC01, UC02-TC02 | ![Screenshot Layar I-04 Tagihan Final & Belum Final](./assets/uc02-tagihan.png) |
| UC03-TC01 | ![Screenshot Layar I-05 Kirim Laporan Berhasil](./assets/UC03-TC01.png) |
| UC03-TC02 | ![Screenshot Layar I-05 Warga Tidak Terdaftar](./assets/UC03-TC02.png) |
| UC04-TC01 | ![Screenshot Layar I-06 dan I-07 Daftar dan Riwayat Laporan](./assets/UC04-TC01.png) |
| UC04-TC02 | ![Screenshot Layar I-06 Laporan Tidak Ditemukan](./assets/UC04-TC02.png) |
| UC07-TC01 | ![Screenshot Layar I-10 dan I-11 Perbarui Status](./assets/UC07-TC01.png) |
| UC07-TC02 | ![Screenshot Layar I-11 Teknisi Tidak Berwenang](./assets/UC07-TC02.png) |
| UC07-TC03 | ![Screenshot Layar I-11 Perubahan Status Tidak Valid](./assets/UC07-TC03.png) |
| C27-UT01 – C27-UT07, MP-UT01 – MP-UT06, PC-UT01 – PC-UT06, VAL-PM-UT01 – VAL-PM-UT06, I-12-UT01 – I-12-UT04 | ![Output Jest Modul Pemeliharaan](./assets/jest-pemeliharaan.png) |
| C27, `ModulPemeliharaan`, `PemeliharaanController`, `Validasi.periksaPemeliharaan` (coverage) | ![Laporan Coverage Modul Pemeliharaan](./assets/coverage-pemeliharaan.png) |
| INT-TC01 – INT-TC26 | ![Output Uji Integrasi Basis Data](./assets/integrasi-basis-data.png) |
| Coverage seluruh modul (`npx jest --coverage`: 18 *suite*, 197 test case lulus) | ![Laporan Coverage Seluruh Modul](./assets/coverage-semua-modul.png) — berkas teks lengkap: [laporan-coverage-semua-modul.txt](./assets/laporan-coverage-semua-modul.txt) |
| UC08-TC01 | ![Screenshot Layar I-12 Catatan Pemeliharaan Tersimpan](./assets/UC08-TC01.png) |
| UC08-TC02 | ![Screenshot Layar I-12 Formulir Tidak Lengkap](./assets/UC08-TC02.png) |
| KNF04-TC01 | ![Profiling Query dan Waktu Respons Riwayat Panel](./assets/knf04-profiling.png) |
| UC09-TC01, UC09-TC02 | ![Screenshot Layar I-13 Analitik Pemakaian Komunal](./assets/uc09-analitik.png) |
| UC10-TC01 – UC10-TC03 | ![Screenshot Layar I-14 Pratinjau & Finalisasi Iuran](./assets/uc10-iuran.png) |
| UC11-TC01 – UC11-TC03 | ![Screenshot Layar I-15 Rekapitulasi & Hasil Ekspor CSV/PDF](./assets/uc11-rekapitulasi.png) |
| UC12-TC01 | ![Screenshot Layar I-02 Registrasi Berhasil](./assets/UC12-TC01.png) |
| UC12-TC02 | ![Screenshot Layar I-02 Email Sudah Terdaftar](./assets/UC12-TC02.png) |
| UC12-TC03 | ![Screenshot Layar I-02 Data Registrasi Tidak Lengkap](./assets/UC12-TC03.png) |
| UC13-TC01 | ![Screenshot Dasbor Warga setelah Login](./assets/UC13-TC01-warga.png) ![Screenshot Dasbor Pengurus setelah Login](./assets/UC13-TC01-pengurus.png) |
| UC13-TC02 | ![Screenshot Layar I-01 Akun Menunggu Persetujuan](./assets/UC13-TC02.png) |
| UC13-TC03 | ![Screenshot Login Akun Ditolak](./assets/UC13-TC03.png) |
| UC13-TC04 | ![Screenshot Layar I-01 Kredensial Salah](./assets/UC13-TC04.png) |
| UC14-TC01 | ![Screenshot Layar I-16 Setujui Akun](./assets/UC14-TC01.png) |
| UC14-TC02 | ![Screenshot Layar I-16 Tolak Akun](./assets/UC14-TC02.png) |
| UC14-TC03 | ![Screenshot Warga Dialihkan dari Halaman Persetujuan](./assets/UC14-TC03-halaman.png) |
| KNF01-TC01 | ![Uji Akses Rute per Peran oleh Warga](./assets/KNF01-TC01-warga.png) ![Uji Akses Rute per Peran oleh Teknisi](./assets/KNF01-TC01-teknisi.png) |
| KNF02-TC01 | ![Uji Isolasi Data Tagihan (warga@fajar.test)](./assets/KNF02-TC01-warga1.png) ![Uji Isolasi Data Tagihan (warga2@fajar.test)](./assets/KNF02-TC01-warga2.png) |
| KNF14-TC01 | ![Inspeksi Hash Kata Sandi](./assets/KNF14-TC01.png) |
| KNF15-TC01 | ![Uji Pesan Login Seragam (Sandi Salah)](./assets/KNF15-TC01-password-salah.png) ![Uji Pesan Login Seragam (Email Tidak Terdaftar)](./assets/KNF15-TC01-email-tidakada.png) |
| C08-UT01 – C08-UT05, C09-UT01 – C09-UT04, C13-UT01 – C13-UT03, C25-UT01 – C25-UT02, C26-UT01 – C26-UT04, MM-UT01 – MM-UT10, MN-UT01 – MN-UT06, MC-UT01 – MC-UT13 *(beserta coverage kelas Mendalam ≥ 70%)* | ![Hasil Unit Test & Coverage Monitoring](./assets/monitoring-unit-coverage.png) |
| UC01-TC01 | ![UC01-TC01 Dashboard Warga - Tangki Air](./assets/UC01-TC01a.png)<br>![UC01-TC01 Dashboard Warga - Baterai & Panel](./assets/UC01-TC01b.png) |
| UC01-TC02 | ![UC01-TC02 Data Sensor Tidak Tersedia](./assets/UC01-TC02a.png)<br>![UC01-TC02 Data Sensor Tidak Tersedia - Baterai & Panel](./assets/UC01-TC02b.png) |
| UC05-TC01 | ![UC05-TC01 Output Simulator SensorAdapter](./assets/UC05-TC01-simulator.png)<br>![UC05-TC01 Layar Peringatan Perangkat I-08](./assets/UC05-TC02.png) |
| UC05-TC02 | ![UC05-TC02 Status Menunggu Terkirim I-08](./assets/UC05-TC02.png)<br>![UC05-TC02 Unit Test kirimUlangPending](./assets/monitoring-unit-coverage.png) |
| UC06-TC01 | ![UC06-TC01 Grafik Performa Panel Surya](./assets/UC06-TC01.png) |
| UC06-TC02 | ![UC06-TC02 Data Historis Tidak Ditemukan](./assets/UC06-TC02.png) |
| KNF03-TC01 | ![KNF03-TC01 Status PENDING I-08](./assets/UC05-TC02.png)<br>![KNF03-TC01 Unit Test Fallback & Resend](./assets/monitoring-unit-coverage.png) |
| KNF05-TC01 | ![KNF05-TC01 Pengukuran Response Time Telemetri Kritis](./assets/KNF05-TC01.png) |
| KNF08-TC01 | ![KNF08-TC01 Responsivitas Viewport 390px](./assets/KNF08-TC01.png) |
| KNF09-TC01 | ![KNF09-TC01 Aplikasi di Microsoft Edge](./assets/KNF09-TC01.png) |
| KNF11-TC01 | ![KNF11-TC01 Chrome DevTools Network 6x](./assets/KNF11-TC01.png) |
| KNF10-TC01 | ![KNF10-TC01 Ekspor Rekapitulasi CSV dan PDF](./assets/uc11-rekapitulasi.png) |


<br>

---

# BAB 5: Traceability

Matriks berikut memetakan setiap Kebutuhan Fungsional (KF01–KF51) dan Kebutuhan Non-Fungsional (KNF01–KNF15) pada SKPL terhadap Use Case, kelas perancangan pada DPPL, file implementasi pada `src/`, serta kasus uji pada BAB 4. Setiap KF dinyatakan terpenuhi apabila seluruh kasus uji terkait berkesimpulan `Pass`.

Tabel 5.1. Matriks Kerunutan KF terhadap Implementasi dan Pengujian

| KF ID | KNF Terkait | Use Case ID | Kelas Terkait | Implementasi File Terkait | Test Case (UC) | Test Case (Unit/Integrasi/KNF) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| KF01 | KNF06, KNF07, KNF09, KNF11, KNF13 | UC01 | C02 - Warga<br>C07 - Perangkat<br>C08 - TangkiAir<br>C09 - Baterai<br>C10 - PanelSurya<br>C11 - PembacaanSensor | `src/modules/monitoring/entities/TangkiAir.ts`<br>`src/modules/monitoring/ModulMonitoring.ts`<br>`src/modules/monitoring/MonitoringController.ts`<br>`src/modules/monitoring/DataPerangkatBoundary.ts`<br>`src/components/layar/LayarI03.tsx` | UC01-TC01, UC01-TC02 | C08-UT01, KNF06-TC01, KNF07-TC01, KNF09-TC01, KNF11-TC01, KNF13-TC01 |
| KF02 | KNF07 | UC01 | C02 - Warga<br>C07 - Perangkat<br>C08 - TangkiAir<br>C09 - Baterai<br>C10 - PanelSurya<br>C11 - PembacaanSensor | `src/modules/monitoring/entities/TangkiAir.ts`<br>`src/modules/monitoring/ModulMonitoring.ts`<br>`src/components/layar/LayarI03.tsx` | UC01-TC01 | C08-UT01, KNF07-TC01 |
| KF03 | KNF06, KNF07, KNF11, KNF13 | UC01 | C02 - Warga<br>C07 - Perangkat<br>C08 - TangkiAir<br>C09 - Baterai<br>C10 - PanelSurya<br>C11 - PembacaanSensor | `src/modules/monitoring/entities/Baterai.ts`<br>`src/modules/monitoring/ModulMonitoring.ts`<br>`src/modules/monitoring/MonitoringController.ts`<br>`src/components/layar/LayarI03.tsx` | UC01-TC01, UC01-TC02 | C09-UT01, KNF06-TC01, KNF07-TC01, KNF11-TC01, KNF13-TC01 |
| KF04 | KNF07 | UC01 | C02 - Warga<br>C07 - Perangkat<br>C08 - TangkiAir<br>C09 - Baterai<br>C10 - PanelSurya<br>C11 - PembacaanSensor | `src/contracts/monitoring.ts`<br>`src/modules/monitoring/ModulMonitoring.ts`<br>`src/components/layar/LayarI03.tsx` | UC01-TC01 | C09-UT01, KNF07-TC01 |
| KF05 | KNF02, KNF07 | UC02 | C02 - Warga<br>C14 - Periode<br>C17 - Tagihan | `src/modules/iuran/internal/ModulIuran.ts`<br>`src/modules/iuran/service.ts`<br>`src/modules/iuran/repository.ts`<br>`src/app/api/iuran/tagihan/route.ts`<br>`src/app/api/iuran/periode/route.ts`<br>`src/components/layar/LayarI04.tsx` | UC02-TC01 | C19-UT02, KNF02-TC01, KNF07-TC01 |
| KF06 | KNF02 | UC02 | C02 - Warga<br>C14 - Periode<br>C17 - Tagihan | `src/modules/iuran/internal/ModulIuran.ts`<br>`src/app/api/iuran/tagihan/route.ts`<br>`src/components/layar/LayarI04.tsx` | UC02-TC01, UC02-TC02 | C19-UT01, C19-UT02, KNF02-TC01 |
| KF07 | KNF02, KNF07, KNF09 | UC03 | C02 - Warga<br>C20 - LaporanGangguan<br>C21 - StatusLaporan | `src/modules/laporan/ui/FormLaporan.tsx`<br>`src/modules/laporan/internal/validasi.ts`<br>`src/components/layar/LayarI05.tsx` | UC03-TC01 | C20-UT01, KNF02-TC01, KNF07-TC01, KNF09-TC01 |
| KF08 | KNF02, KNF07, KNF09 | UC03 | C02 - Warga<br>C20 - LaporanGangguan<br>C21 - StatusLaporan | `src/modules/laporan/service.ts`<br>`src/modules/laporan/internal/ModulLaporan.ts`<br>`src/modules/laporan/internal/LaporanGangguan.ts`<br>`src/modules/laporan/repository.ts` | UC03-TC01 | C20-UT01, KNF02-TC01 |
| KF09 | KNF01 | UC03 | C02 - Warga<br>C20 - LaporanGangguan<br>C21 - StatusLaporan | `src/modules/akun/entity.ts`<br>`src/modules/laporan/internal/ModulLaporan.ts`<br>`src/modules/laporan/index.ts` | UC03-TC01, UC03-TC02 | C02-UT01, C20-UT01, KNF01-TC01 |
| KF10 | KNF03 | UC03 | C02 - Warga<br>C20 - LaporanGangguan<br>C21 - StatusLaporan | `src/modules/laporan/internal/LaporanGangguan.ts`<br>`src/modules/laporan/internal/StatusLaporan.ts` | UC03-TC01 | C20-UT01, KNF03-TC01 |
| KF11 | KNF02, KNF07 | UC04 | C02 - Warga<br>C20 - LaporanGangguan<br>C22 - RiwayatStatusLaporan | `src/modules/laporan/service.ts`<br>`src/modules/laporan/internal/RiwayatStatusLaporan.ts`<br>`src/modules/laporan/ui/DaftarLaporan.tsx`<br>`src/modules/laporan/ui/RiwayatStatus.tsx`<br>`src/components/layar/LayarI06.tsx`<br>`src/components/layar/LayarI07.tsx` | UC04-TC01, UC04-TC02 | C20-UT01, KNF02-TC01, KNF07-TC01 |
| KF12 | - | UC07 | C03 - Teknisi<br>C20 - LaporanGangguan<br>C21 - StatusLaporan<br>C22 - RiwayatStatusLaporan<br>C24 - PenugasanLaporan | `src/modules/laporan/internal/StatusLaporan.ts`<br>`src/modules/laporan/internal/LaporanGangguan.ts` | UC07-TC01, UC07-TC03 | C20-UT01 |
| KF13 | KNF03, KNF05 | UC05 | C03 - Teknisi<br>C07 - Perangkat<br>C09 - Baterai<br>C23 - PenugasanPerangkat<br>C25 - Notifikasi<br>C26 - PeringatanDayaKritis | `src/modules/monitoring/entities/Baterai.ts`<br>`src/modules/monitoring/ModulMonitoring.ts`<br>`src/modules/monitoring/MonitoringController.ts`<br>`src/app/api/telemetri/route.ts`<br>`src/components/layar/LayarI08.tsx` | UC05-TC01, UC05-TC02 | C09-UT01, KNF03-TC01, KNF05-TC01 |
| KF14 | KNF03, KNF05 | UC05 | C03 - Teknisi<br>C07 - Perangkat<br>C09 - Baterai<br>C23 - PenugasanPerangkat<br>C25 - Notifikasi<br>C26 - PeringatanDayaKritis | `src/modules/monitoring/ModulMonitoring.ts`<br>`src/modules/monitoring/DataPerangkatBoundary.ts` | UC05-TC01 | C09-UT01, KNF03-TC01, KNF05-TC01 |
| KF15 | KNF08 | UC06 | C03 - Teknisi<br>C07 - Perangkat<br>C10 - PanelSurya<br>C12 - DataHistorisKinerja<br>C13 - RentangWaktu | `src/modules/monitoring/entities/RentangWaktu.ts`<br>`src/modules/monitoring/ModulMonitoring.ts`<br>`src/modules/monitoring/DataPerangkatBoundary.ts`<br>`src/components/layar/LayarI09.tsx` | UC06-TC01, UC06-TC02 | C13-UT01, KNF08-TC01 |
| KF16 | KNF04 | UC06 | C03 - Teknisi<br>C07 - Perangkat<br>C10 - PanelSurya<br>C12 - DataHistorisKinerja<br>C13 - RentangWaktu | `src/app/api/telemetri/route.ts`<br>`src/modules/monitoring/DataPerangkatBoundary.ts` | UC06-TC01 | KNF04-TC01 |
| KF17 | KNF08 | UC07 | C03 - Teknisi<br>C20 - LaporanGangguan<br>C21 - StatusLaporan<br>C22 - RiwayatStatusLaporan<br>C24 - PenugasanLaporan | `src/modules/laporan/service.ts`<br>`src/modules/laporan/internal/ModulLaporan.ts`<br>`src/modules/laporan/ui/UbahStatus.tsx`<br>`src/components/layar/LayarI10.tsx`<br>`src/components/layar/LayarI11.tsx` | UC07-TC01 | C20-UT01, KNF08-TC01 |
| KF18 | KNF01 | UC07 | C03 - Teknisi<br>C20 - LaporanGangguan<br>C21 - StatusLaporan<br>C22 - RiwayatStatusLaporan<br>C24 - PenugasanLaporan | `src/modules/laporan/internal/PenugasanLaporan.ts`<br>`src/modules/laporan/internal/ModulLaporan.ts`<br>`src/modules/laporan/repository.ts` | UC07-TC01, UC07-TC02 | C24-UT01, KNF01-TC01 |
| KF19 | - | UC07 | C03 - Teknisi<br>C20 - LaporanGangguan<br>C21 - StatusLaporan<br>C22 - RiwayatStatusLaporan<br>C24 - PenugasanLaporan | `src/modules/laporan/internal/LaporanGangguan.ts`<br>`src/modules/laporan/internal/StatusLaporan.ts` | UC07-TC01, UC07-TC03 | C20-UT01 |
| KF20 | KNF02, KNF08 | UC08 | C03 - Teknisi<br>C07 - Perangkat<br>C27 - CatatanPemeliharaan | `src/modules/pemeliharaan/*`<br>`src/components/layar/LayarI12.tsx` | UC08-TC01, UC08-TC02 | C27-UT01, KNF02-TC01, KNF08-TC01 |
| KF21 | KNF04 | UC08 | C03 - Teknisi<br>C07 - Perangkat<br>C27 - CatatanPemeliharaan | `src/modules/pemeliharaan/*` | UC08-TC01 | C27-UT01, KNF04-TC01 |
| KF22 | KNF02, KNF06, KNF09 | UC09 | C04 - Pengurus<br>C14 - Periode<br>C15 - DataPemakaian | `src/modules/iuran/internal/ModulIuran.ts`<br>`src/modules/iuran/service.ts`<br>`src/modules/iuran/repository.ts`<br>`src/app/api/iuran/analitik/route.ts`<br>`src/components/layar/LayarI13.tsx` | UC09-TC01 | C19-UT04, KNF02-TC01, KNF06-TC01, KNF09-TC01 |
| KF23 | KNF01 | UC09 | C04 - Pengurus<br>C14 - Periode<br>C15 - DataPemakaian | `src/lib/auth/server.ts`<br>`src/app/api/iuran/analitik/route.ts`<br>`src/modules/iuran/internal/ModulIuran.ts` | UC09-TC01, UC09-TC02 | C19-UT03, KNF01-TC01 |
| KF24 | - | UC09 | C04 - Pengurus<br>C14 - Periode<br>C15 - DataPemakaian | `src/modules/iuran/internal/ModulIuran.ts`<br>`src/modules/iuran/repository.ts`<br>`src/app/api/iuran/periode/route.ts` | UC09-TC01 | C19-UT04 |
| KF25 | KNF12 | UC10 | C02 - Warga<br>C04 - Pengurus<br>C14 - Periode<br>C15 - DataPemakaian<br>C16 - AturanTarif<br>C17 - Tagihan<br>C18 - StatusTagihan<br>C19 - KalkulatorIuran | `src/modules/iuran/internal/ModulIuran.ts`<br>`src/modules/iuran/service.ts`<br>`src/app/api/iuran/pratinjau/route.ts`<br>`src/components/layar/LayarI14.tsx` | UC10-TC01, UC10-TC03 | C19-UT05, C19-UT07, KNF12-TC01 |
| KF26 | - | UC10 | C02 - Warga<br>C04 - Pengurus<br>C14 - Periode<br>C15 - DataPemakaian<br>C16 - AturanTarif<br>C17 - Tagihan<br>C18 - StatusTagihan<br>C19 - KalkulatorIuran | `src/modules/iuran/internal/ModulIuran.ts`<br>`src/app/api/iuran/pratinjau/route.ts`<br>`src/components/layar/LayarI14.tsx` | UC10-TC01 | C19-UT05 |
| KF27 | KNF01 | UC10 | C02 - Warga<br>C04 - Pengurus<br>C14 - Periode<br>C15 - DataPemakaian<br>C16 - AturanTarif<br>C17 - Tagihan<br>C18 - StatusTagihan<br>C19 - KalkulatorIuran | `src/lib/auth/server.ts`<br>`src/app/api/iuran/finalisasi/route.ts`<br>`src/modules/iuran/internal/ModulIuran.ts` | UC10-TC01, UC10-TC02 | C19-UT06, C19-UT08, KNF01-TC01 |
| KF28 | - | UC10 | C02 - Warga<br>C04 - Pengurus<br>C14 - Periode<br>C15 - DataPemakaian<br>C16 - AturanTarif<br>C17 - Tagihan<br>C18 - StatusTagihan<br>C19 - KalkulatorIuran | `src/modules/iuran/internal/ModulIuran.ts`<br>`src/modules/iuran/repository.ts` | UC10-TC01 | C19-UT05, C19-UT08 |
| KF29 | - | UC11 | C04 - Pengurus<br>C14 - Periode<br>C15 - DataPemakaian<br>C17 - Tagihan<br>C18 - StatusTagihan<br>C28 - Rekapitulasi | `src/modules/iuran/internal/ModulIuran.ts`<br>`src/app/api/iuran/periode/route.ts`<br>`src/components/layar/LayarI15.tsx` | UC11-TC01 | C28-UT01 |
| KF30 | KNF10 | UC11 | C04 - Pengurus<br>C14 - Periode<br>C15 - DataPemakaian<br>C17 - Tagihan<br>C18 - StatusTagihan<br>C28 - Rekapitulasi | `src/modules/iuran/internal/Rekapitulasi.ts`<br>`src/app/api/iuran/rekapitulasi/route.ts`<br>`src/components/layar/LayarI15.tsx` | UC11-TC01 | C28-UT01, KNF10-TC01 |
| KF31 | KNF01 | UC11 | C04 - Pengurus<br>C14 - Periode<br>C15 - DataPemakaian<br>C17 - Tagihan<br>C18 - StatusTagihan<br>C28 - Rekapitulasi | `src/lib/auth/server.ts`<br>`src/app/api/iuran/rekapitulasi/route.ts` | UC11-TC01, UC11-TC03 | C28-UT01, KNF01-TC01 |
| KF32 | - | UC11 | C04 - Pengurus<br>C14 - Periode<br>C15 - DataPemakaian<br>C17 - Tagihan<br>C18 - StatusTagihan<br>C28 - Rekapitulasi | `src/modules/iuran/internal/ModulIuran.ts`<br>`src/modules/iuran/internal/Rekapitulasi.ts`<br>`src/app/api/iuran/rekapitulasi/route.ts` | UC11-TC01, UC11-TC02 | C28-UT01 |
| KF33 | KNF12 | UC10 | C02 - Warga<br>C04 - Pengurus<br>C14 - Periode<br>C15 - DataPemakaian<br>C16 - AturanTarif<br>C17 - Tagihan<br>C18 - StatusTagihan<br>C19 - KalkulatorIuran | `src/modules/iuran/internal/ModulIuran.ts`<br>`src/app/api/iuran/pratinjau/route.ts` | UC10-TC01, UC10-TC03 | C19-UT05, C19-UT07, KNF12-TC01 |
| KF34 | - | UC04 | C02 - Warga<br>C20 - LaporanGangguan<br>C22 - RiwayatStatusLaporan | `src/modules/laporan/service.ts`<br>`src/modules/laporan/repository.ts`<br>`src/modules/laporan/ui/DaftarLaporan.tsx` | UC04-TC01, UC04-TC02 | - |
| KF35 | - | UC07 | C03 - Teknisi<br>C20 - LaporanGangguan<br>C21 - StatusLaporan<br>C22 - RiwayatStatusLaporan<br>C24 - PenugasanLaporan | `src/modules/laporan/internal/RiwayatStatusLaporan.ts`<br>`src/modules/laporan/repository.ts` | UC07-TC01 | C22-UT01 |
| KF36 | KNF14 | UC12 | C01 - Akun<br>C02 - Warga<br>C03 - Teknisi<br>C04 - Pengurus<br>C05 - CalonPengguna<br>C06 - StatusAkun | `src/modules/akun/ui/RegistrasiView.tsx`<br>`src/app/registrasi/page.tsx` | UC12-TC01 | KNF14-TC01 |
| KF37 | KNF14 | UC12 | C01 - Akun<br>C02 - Warga<br>C03 - Teknisi<br>C04 - Pengurus<br>C05 - CalonPengguna<br>C06 - StatusAkun | `src/modules/akun/validasi.ts`<br>`src/modules/akun/controller.ts` | UC12-TC01, UC12-TC03 | C05-UT01 |
| KF38 | KNF14 | UC12 | C01 - Akun<br>C02 - Warga<br>C03 - Teknisi<br>C04 - Pengurus<br>C05 - CalonPengguna<br>C06 - StatusAkun | `src/modules/akun/modul.ts`<br>`src/modules/akun/boundary.ts` | UC12-TC02 | - |
| KF39 | KNF14 | UC12 | C01 - Akun<br>C02 - Warga<br>C03 - Teknisi<br>C04 - Pengurus<br>C05 - CalonPengguna<br>C06 - StatusAkun | `src/modules/akun/entity.ts`<br>`src/modules/akun/modul.ts`<br>`src/modules/akun/boundary.ts`<br>`src/lib/auth/password.ts` | UC12-TC01 | C05-UT01, KNF14-TC01 |
| KF40 | KNF14 | UC12 | C01 - Akun<br>C02 - Warga<br>C03 - Teknisi<br>C04 - Pengurus<br>C05 - CalonPengguna<br>C06 - StatusAkun | `src/modules/akun/ui/RegistrasiView.tsx`<br>`src/app/api/auth/registrasi/route.ts` | UC12-TC01 | - |
| KF41 | KNF14 | UC13 | C01 - Akun<br>C02 - Warga<br>C03 - Teknisi<br>C04 - Pengurus<br>C06 - StatusAkun | `src/modules/akun/ui/LoginView.tsx`<br>`src/app/login/page.tsx` | UC13-TC01 | - |
| KF42 | KNF14 | UC13 | C01 - Akun<br>C02 - Warga<br>C03 - Teknisi<br>C04 - Pengurus<br>C06 - StatusAkun | `src/modules/akun/entity.ts`<br>`src/modules/akun/modul.ts`<br>`src/lib/auth/password.ts` | UC13-TC01, UC13-TC04 | C01-UT01, KNF14-TC01 |
| KF43 | KNF14 | UC13 | C01 - Akun<br>C02 - Warga<br>C03 - Teknisi<br>C04 - Pengurus<br>C06 - StatusAkun | `src/modules/akun/entity.ts`<br>`src/modules/akun/controller.ts`<br>`src/middleware.ts` | UC13-TC01 | C01-UT01 |
| KF44 | KNF14 | UC13 | C01 - Akun<br>C02 - Warga<br>C03 - Teknisi<br>C04 - Pengurus<br>C06 - StatusAkun | `src/modules/akun/entity.ts`<br>`src/modules/akun/controller.ts`<br>`src/modules/akun/ui/LoginView.tsx` | UC13-TC02, UC13-TC03 | C01-UT01 |
| KF45 | KNF14, KNF15 | UC13 | C01 - Akun<br>C02 - Warga<br>C03 - Teknisi<br>C04 - Pengurus<br>C06 - StatusAkun | `src/modules/akun/modul.ts`<br>`src/modules/akun/controller.ts`<br>`src/app/api/auth/login/route.ts` | UC13-TC04 | C01-UT01, KNF15-TC01 |
| KF46 | KNF14 | UC13 | C01 - Akun<br>C02 - Warga<br>C03 - Teknisi<br>C04 - Pengurus<br>C06 - StatusAkun | `src/modules/akun/entity.ts`<br>`src/modules/akun/ui/tujuan.ts`<br>`src/modules/akun/ui/LoginView.tsx` | UC13-TC01 | C01-UT01, C02-UT01, C03-UT01, C04-UT01 |
| KF47 | - | UC14 | C01 - Akun<br>C04 - Pengurus<br>C06 - StatusAkun | `src/modules/akun/controller.ts`<br>`src/modules/akun/modul.ts`<br>`src/modules/akun/boundary.ts`<br>`src/app/api/akun/persetujuan/route.ts`<br>`src/components/layar/LayarI16.tsx` | UC14-TC01 | C04-UT01 |
| KF48 | KNF01 | UC14 | C01 - Akun<br>C04 - Pengurus<br>C06 - StatusAkun | `src/modules/akun/controller.ts`<br>`src/lib/auth/server.ts`<br>`src/middleware.ts` | UC14-TC03 | C04-UT01, KNF01-TC01 |
| KF49 | - | UC14 | C01 - Akun<br>C04 - Pengurus<br>C06 - StatusAkun | `src/modules/akun/controller.ts`<br>`src/modules/akun/modul.ts`<br>`src/modules/akun/boundary.ts` | UC14-TC01 | C01-UT01 |
| KF50 | - | UC14 | C01 - Akun<br>C04 - Pengurus<br>C06 - StatusAkun | `src/modules/akun/controller.ts`<br>`src/modules/akun/modul.ts`<br>`src/modules/akun/boundary.ts` | UC14-TC02 | C01-UT01 |
| KF51 | - | UC14 | C01 - Akun<br>C04 - Pengurus<br>C06 - StatusAkun | `src/components/layar/LayarI16.tsx`<br>`src/app/api/akun/persetujuan/route.ts` | UC14-TC01, UC14-TC02 | - |

Tabel 5.2. Matriks Kerunutan KNF terhadap Pengujian

| ID KNF | Parameter | KF/UC Terkait | Test Case |
| :--- | :--- | :--- | :--- |
| KNF01 | Security | KF09, KF18, KF23, KF27, KF31, KF48 / UC03, UC07, UC09, UC10, UC11, UC14 | KNF01-TC01 |
| KNF02 | Security | KF05, KF06, KF07, KF08, KF11, KF20, KF22 / UC02, UC03, UC04, UC08, UC09 | KNF02-TC01 |
| KNF03 | Reliability | KF10, KF13, KF14 / UC03, UC05 | KNF03-TC01 |
| KNF04 | Reliability | KF16, KF21 / UC06, UC08 | KNF04-TC01 |
| KNF05 | Safety | KF13, KF14 / UC05 | KNF05-TC01 |
| KNF06 | Availability | KF01, KF03, KF22 / UC01, UC09 | KNF06-TC01 |
| KNF07 | Ergonomy | KF01, KF02, KF03, KF04, KF05, KF07, KF08, KF11 / UC01, UC02, UC03, UC04 | KNF07-TC01 |
| KNF08 | Ergonomy | KF15, KF17, KF20 / UC06, UC07, UC08 | KNF08-TC01 |
| KNF09 | Portability | KF01, KF07, KF08, KF22 / UC01, UC03, UC09 | KNF09-TC01 |
| KNF10 | Portability | KF30 / UC11 | KNF10-TC01 |
| KNF11 | Response time | KF01, KF03 / UC01 | KNF11-TC01 |
| KNF12 | Response time | KF25, KF33 / UC10 | KNF12-TC01 |
| KNF13 | Memory | KF01, KF03 / UC01 | KNF13-TC01 *(disimulasikan)* |
| KNF14 | Security | KF36–KF46 / UC12, UC13 | KNF14-TC01 |
| KNF15 | Security | KF45 / UC13 | KNF15-TC01 |
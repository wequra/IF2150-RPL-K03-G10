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
Tuliskan aturan penomoran (ID) yang digunakan dalam dokumen ini. Gunakan pola ID yang **sama** dengan yang sudah dipakai pada dokumen-dokumen sebelumnya (SKPL, APL, DPPL), kecuali untuk ID pengujian yang baru diperkenalkan pada dokumen ini.

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
| 14 | C14 | `Periode` | *[Lengkapi path dari `src/modules/iuran/` — Raffi]* | - |
| 15 | C15 | `DataPemakaian` | *[Lengkapi path dari `src/modules/iuran/` — Raffi]* | - |
| 16 | C16 | `AturanTarif` | *[Lengkapi path dari `src/modules/iuran/` — Raffi]* | - |
| 17 | C17 | `Tagihan` | *[Lengkapi path dari `src/modules/iuran/` — Raffi]* | - |
| 18 | C18 | `StatusTagihan` | *[Lengkapi path dari `src/modules/iuran/` — Raffi]* | - |
| 19 | C19 | `KalkulatorIuran` | *[Lengkapi path dari `src/modules/iuran/` — Raffi]* | - |
| 20 | C20 | `LaporanGangguan` | `src/modules/laporan/internal/LaporanGangguan.ts` | - |
| 21 | C21 | `StatusLaporan` | `src/modules/laporan/internal/StatusLaporan.ts`, `src/contracts/common.ts` | - |
| 22 | C22 | `RiwayatStatusLaporan` | `src/modules/laporan/internal/RiwayatStatusLaporan.ts` | - |
| 23 | C23 | `PenugasanPerangkat` | `src/modules/monitoring/DataPerangkatBoundary.ts` (diwakili relasi Prisma) | - |
| 24 | C24 | `PenugasanLaporan` | `src/modules/laporan/internal/PenugasanLaporan.ts` | - |
| 25 | C25 | `Notifikasi` | `src/modules/notifikasi/entities/Notifikasi.ts` | - |
| 26 | C26 | `PeringatanDayaKritis` | `src/modules/notifikasi/entities/PeringatanDayaKritis.ts` | - |
| 27 | C27 | `CatatanPemeliharaan` | *[Lengkapi path dari `src/modules/pemeliharaan/` — Rafiandhi]* | - |
| 28 | C28 | `Rekapitulasi` | *[Lengkapi path dari `src/modules/iuran/` — Raffi]* | - |
| 29 | - | `WargaView` | `src/components/shell/*`, `src/app/dashboard/warga/**`, `src/components/layar/LayarI03.tsx` s.d. `LayarI07.tsx` | - |
| 30 | - | `TeknisiView` | `src/app/dashboard/teknisi/**`, `src/components/layar/LayarI08.tsx` s.d. `LayarI12.tsx` | - |
| 31 | - | `PengurusView` | `src/app/dashboard/pengurus/**`, `src/components/layar/LayarI13.tsx` s.d. `LayarI16.tsx` | - |
| 32 | - | `AuthView` | `src/modules/akun/ui/RegistrasiView.tsx`, `src/modules/akun/ui/LoginView.tsx`, `src/app/registrasi/page.tsx`, `src/app/login/page.tsx` | - |
| 33 | - | `TelemetriAPI` | `src/app/api/telemetri/route.ts` | - |
| 34 | - | `MonitoringController` | `src/modules/monitoring/MonitoringController.ts` | - |
| 35 | - | `LaporanController` | `src/modules/laporan/service.ts`, `src/app/api/laporan/**/route.ts` | - |
| 36 | - | `PemeliharaanController` | *[Lengkapi path dari `src/modules/pemeliharaan/` — Rafiandhi]* | - |
| 37 | - | `IuranController` | *[Lengkapi path dari `src/modules/iuran/` — Raffi]* | - |
| 38 | - | `AkunController` | `src/modules/akun/controller.ts`, `src/app/api/auth/*/route.ts`, `src/app/api/akun/persetujuan/route.ts` | - |
| 39 | - | `Validasi` | `src/modules/akun/validasi.ts`, `src/modules/laporan/internal/validasi.ts` | - |
| 40 | - | `ModulAkun` | `src/modules/akun/modul.ts` | - |
| 41 | - | `ModulMonitoring` | `src/modules/monitoring/ModulMonitoring.ts` | - |
| 42 | - | `ModulLaporan` | `src/modules/laporan/internal/ModulLaporan.ts` | - |
| 43 | - | `ModulPemeliharaan` | *[Lengkapi path dari `src/modules/pemeliharaan/` — Rafiandhi]* | - |
| 44 | - | `ModulIuran` | *[Lengkapi path dari `src/modules/iuran/` — Raffi]* | - |
| 45 | - | `ModulNotifikasi` | `src/modules/notifikasi/ModulNotifikasi.ts` | - |
| 46 | - | `DataAkunBoundary` | `src/modules/akun/boundary.ts` | - |
| 47 | - | `DataPerangkatBoundary` | `src/modules/monitoring/DataPerangkatBoundary.ts` | - |
| 48 | - | `DataLaporanBoundary` | `src/modules/laporan/repository.ts` | - |
| 49 | - | `DataIuranBoundary` | *[Lengkapi path dari `src/modules/iuran/` — Raffi]* | - |
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
| 1 | *[Nama file]* | *[Fungsi file]* |
| ... | *...* | *...* |

<br>

---

# BAB 4: Hasil Pengujian

Bab ini melaporkan hasil pengujian P/L pada level unit, integrasi, dan sistem. Pengujian dilakukan pada tag release terakhir Tugas 9. Hasil aktual diisi berdasarkan pengamatan saat pengujian. Kesimpulan diisi `Pass` atau `Fail`, dan untuk `Fail` dilengkapi penyebab serta usulan perbaikan.

## 4.1 Strategi dan Kedalaman Pengujian Kelas

Setiap kelas perancangan pada Tabel 4.1 DPPL diklasifikasikan ke dalam tiga tingkat kedalaman pengujian. Tingkat **Mendalam** diberikan pada kelas yang memuat logika bisnis, perhitungan, validasi, aturan status, algoritma, integrasi eksternal, atau keamanan. Tingkat **Sedang** diberikan pada kelas yang hanya mengoordinasikan atau mendelegasikan proses. Tingkat **Tidak perlu** diberikan pada kelas tanpa logika, seperti *entity/DTO* dan kelas konfigurasi, yang teruji secara tidak langsung melalui test case use case. Seluruh kelas wajib dicantumkan beserta alasan penentuan tingkatnya.

Tabel 4.1.1. Identifikasi Tingkat Pengujian Kelas

| ID Kelas | Nama Kelas | Tingkat | Alasan | Test Case Terkait |
| :--- | :--- | :--- | :--- | :--- |
| C01 | Akun | Mendalam | Kelas abstrak yang memuat logika kredensial `cocokKredensial()` (Algo-001), aturan status `sudahDisetujui()` dan `ubahStatus()`, pembuatan objek peran `buatAkun()` (Algo-002), serta kontrak `dashboardTujuan()` dan `konteksSesi()` | `C01-UT01` s.d. `C01-UT07` |
| C02 | Warga | Mendalam | Memuat aturan keanggotaan komunitas `validasiKeanggotaan()` (Algo-003), pengambilan ID warga, dan pembentukan sesi warga | `C02-UT01` s.d. `C02-UT06` |
| C03 | Teknisi | Sedang | Hanya mengoordinasikan profil teknisi dan tujuan dashboard; tidak memuat logika bisnis mandiri | `C03-UT01` s.d. `C03-UT03` |
| C04 | Pengurus | Mendalam | Memuat verifikasi kewenangan pengurus `verifikasiKewenangan()` (Algo-006) dan pembentukan sesi pengurus | `C04-UT01` s.d. `C04-UT04` |
| C05 | CalonPengguna | Sedang | Mengoordinasikan pembentukan data akun calon berstatus MENUNGGU (Algo-008) dan mendelegasikan hash kata sandi | `C05-UT01` s.d. `C05-UT02` |
| C06 | StatusAkun | Tidak perlu | Enumerasi status tanpa logika; diverifikasi tidak langsung melalui `UC12–UC14` | - |
| C07 | Perangkat | Tidak perlu | Kelas abstrak tanpa implementasi mandiri; diwakili model `prisma.perangkat` pada boundary | - |
| C08 | TangkiAir | Mendalam | Memuat logika bisnis klasifikasi status air `statusAir()` (Algo-009) dengan ambang kritis dan rendah | `C08-UT01` s.d. `C08-UT05` |
| C09 | Baterai | Mendalam | Memuat logika evaluasi ambang batas aman kapasitas daya `cekKapasitas()` (Algo-010) | `C09-UT01` s.d. `C09-UT04` |
| C10 | PanelSurya | Tidak perlu | Tidak dibuat kelas mandiri; pengambilan daya terkini digabung di `ModulMonitoring.evaluasiKetersediaan()` | - |
| C11 | PembacaanSensor | Tidak perlu | Direpresentasikan sebagai tipe kontrak DTO `MasukanTelemetri` tanpa logika bisnis | - |
| C12 | DataHistorisKinerja | Tidak perlu | Struktur data/DTO hasil kueri historis tanpa logika internal | - |
| C13 | RentangWaktu | Mendalam | Memuat validasi batas tanggal `validasi()` (Algo-011) | `C13-UT01` s.d. `C13-UT03` |
| C20 | LaporanGangguan | Mendalam | Memuat pembuatan laporan berstatus awal MENUNGGU dan aturan transisi status `validasiTransisi()` serta `ubahStatus()` (Algo-017) | `C20-UT01` s.d. `C20-UT07` |
| C21 | StatusLaporan | Mendalam | Memuat urutan status yang diperbolehkan dan pemeriksaan nilai enumerasi (Algo-017) | `C21-UT01` s.d. `C21-UT04` |
| C22 | RiwayatStatusLaporan | Sedang | Mencatat perubahan status dengan sedikit logika (pembuatan ID dan konversi waktu); alur pencatatannya juga teruji lewat `ModulLaporan` | `C22-UT01` s.d. `C22-UT03` |
| C23 | PenugasanPerangkat | Tidak perlu | Direpresentasikan langsung sebagai relasi tabel basis data via Prisma tanpa logika kelas terpisah | - |
| C24 | PenugasanLaporan | Mendalam | Memuat `verifikasi()` yang menjadi dasar kewenangan teknisi pada UC07 (keamanan) | `C24-UT01` s.d. `C24-UT03` |
| C25 | Notifikasi | Sedang | Kelas dasar notifikasi dengan delegasi pengiriman dan pembaruan status baca `tandaiDibaca()` | `C25-UT01` s.d. `C25-UT02` |
| C26 | PeringatanDayaKritis | Mendalam | Memuat algoritma pengiriman peringatan daya kritis `kirim()` beserta *fallback* `simpanPending()` (Algo-020) | `C26-UT01` s.d. `C26-UT04` |
| - | TelemetriAPI | Sedang | Route handler `POST /api/telemetri` yang meneruskan payload telemetri ke `MonitoringController` (Algo-023) | `INT-TCxx` *(sesuaikan nomor 4.3)* |
| - | MonitoringController | Sedang | Controller yang mengoordinasikan permintaan pemantauan, telemetri baterai (Algo-024), dan riwayat panel | `MC-UT01` s.d. `MC-UT13`, `INT-TCxx`*(sesuaikan nomor 4.3)* |
| - | ModulMonitoring | Mendalam | Memuat logika domain `evaluasiKetersediaan()` (Algo-033), pencatatan pembacaan, peringatan teknisi, dan kueri historis panel | `MM-UT01` s.d. `MM-UT10` |
| - | ModulNotifikasi | Mendalam | Memuat logika bisnis `kirimPeringatanDayaKritis()` (Algo-037) dan `kirimUlangPending()` (Algo-051) | `MN-UT01` s.d. `MN-UT06` |
| - | DataPerangkatBoundary | Sedang | Repositori CRUD standar ke PostgreSQL via Prisma (Algo-039, 043–045); diuji pada level integrasi basis data nyata | `INT-TCxx` *(sesuaikan nomor 4.3)* |
| - | WargaView | Tidak perlu | Kelas view yang hanya menampilkan data dan meneruskan masukan; teruji tidak langsung lewat UC03 dan UC04 | - |
| - | TeknisiView | Tidak perlu | Kelas view yang hanya menampilkan data dan meneruskan masukan; teruji tidak langsung lewat UC07 | - |
| - | PengurusView | Tidak perlu | Kelas view tanpa logika; tidak ada layar laporan untuk Pengurus, jadi tidak ada test case laporan | - |
| - | LaporanController | Sedang | Controller tipis: memeriksa peran dan format ID, lalu meneruskan ke `ModulLaporan` dan memetakan galat ke `ApiRespons` | `LC-UT01` s.d. `LC-UT12` |
| - | ModulLaporan | Mendalam | Memuat logika `kirimLaporan()` (Algo-003, Algo-025, Algo-034), pembacaan milik warga atau teknisi bertugas, dan `perbaruiStatus()` transaksional (Algo-017, Algo-040, Algo-042) | `ML-UT01` s.d. `ML-UT26` |
| - | DataLaporanBoundary | Sedang | Repositori Prisma dengan query terparameter dan transaksi `FOR UPDATE` untuk status dan riwayat; diuji pada basis data nyata | `INT-TCxx` (koordinasi dengan Rafiandhi) |
| *...* | *...* | *...* | *...* | *...* |
| - | AuthView | Tidak perlu | Komponen presentasi (boundary); perilakunya diuji melalui use case UC12–UC13 dan tangkapan layar I-01/I-02 | - |
| - | AkunController | Mendalam | Mengoordinasikan validasi, registrasi (Algo-029), login (Algo-030), dan persetujuan dengan pemeriksaan kewenangan Pengurus (Algo-006) | `AKC-UT01` s.d. `AKC-UT29` |
| - | ModulAkun | Mendalam | Fasad modul akun: registrasi calon, autentikasi (Algo-032) dengan penyamaan waktu respons, daftar dan persetujuan akun, serta pengambilan warga terkini | `MA-UT01` s.d. `MA-UT08` |
| - | DataAkunBoundary | Tidak perlu | Repositori Prisma tanpa logika bisnis; diuji pada level integrasi basis data (Subbab 4.3) | - |
| - | Validasi | Mendalam | Memuat seluruh aturan validasi registrasi (Algo-031): format email, panjang kata sandi, kolom wajib, dan pesan per kolom | `VAL-UT01` s.d. `VAL-UT07` |
| - | Database | Tidak perlu | Skema dan koneksi basis data; tidak berisi logika kelas dan diverifikasi melalui pengujian integrasi | - |

## 4.2 Pengujian Unit Kelas

Pengujian unit dilakukan pada kelas bertingkat Mendalam dan Sedang. Kelas Mendalam diuji pada seluruh operasi public dengan kasus normal, batas, dan negatif, serta mencapai *coverage* minimal 70%. Kelas Sedang diuji minimal dengan satu kasus normal dan satu kasus gagal pada operasi public utama.

Cara menjalankan unit test modul iuran: `npx jest src/tests/iuran/iuran.test.ts --verbose --coverage`

Lokasi file test: `src/tests/iuran/iuran.test.ts`

Cara menjalankan unit test modul monitoring dan notifikasi: `npx jest tests/monitoring --coverage` (dijalankan di dalam folder `src/`).

Lokasi file test: `src/tests/monitoring/` (`tangki.test.ts`, `baterai.test.ts`, `rentangWaktu.test.ts`, `notifikasi.test.ts`, `monitoring.test.ts`, `controller.test.ts`).

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
| C01-UT01 | `cocokKredensial(email, password)` | Normal / Negatif | Akun Warga `DISETUJUI` ber-hash `rahasia123`: panggil dengan email dan kata sandi benar, lalu email lain, lalu kata sandi salah. | `true` untuk kredensial benar; `false` pada dua percobaan lainnya. | *[Isi hasil aktual]* | *Pass/Fail* |
| C01-UT02 | `buatAkun(peran, dasar, profil)` | Normal | Panggil dengan peran `'Warga'` (huruf besar-kecil tidak berpengaruh). | Mengembalikan instance `Warga`. | *[Isi hasil aktual]* | *Pass/Fail* |
| C01-UT03 | `buatAkun(peran, dasar, profil)` | Negatif | Panggil dengan peran `'ADMIN'`. | Melempar `PeranTidakValid`. | *[Isi hasil aktual]* | *Pass/Fail* |

Tabel 4.2.32. Ringkasan Cakupan Kelas C01 (`Akun`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `cocokKredensial()`, `sudahDisetujui()`, `ubahStatus()`, `buatAkun()`, `dashboardTujuan()` (abstrak), `konteksSesi()` (abstrak) |
| Operasi yang diuji | `cocokKredensial()`, `buatAkun()` diuji langsung; `sudahDisetujui()`, `konteksSesi()`, dan `dashboardTujuan()` teruji tidak langsung lewat `AkunController.login` (AKC-UT06 dan AKC-UT09) |
| ID Algoritma yang tercakup | Algo-001, Algo-002 |
| Coverage (wajib ≥ 70%) | `[isi % Stmts / % Branch dari perintah pada awal Subbab 4.2; bukti pada Subbab 4.6]` |

### 4.2.18 Kelas Warga

**ID Kelas:** C02  
**Nama Kelas:** `Warga`  
**Tingkat:** Mendalam

Tabel 4.2.33. Hasil Pengujian Unit Kelas C02 (`Warga`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C02-UT01 | `validasiKeanggotaan(idKomunitas)` | Normal / Negatif | Panggil `'K1'` pada warga terdaftar di `'K1'`, lalu `'K2'`. | `true` untuk komunitas sendiri; `false` untuk komunitas lain. | *[Isi hasil aktual]* | *Pass/Fail* |
| C02-UT02 | `validasiKeanggotaan(idKomunitas)` | Batas / Negatif | Panggil pada warga `statusTerdaftar: false`, lalu pada warga tanpa profil (`null`). | `false` pada kedua kasus. | *[Isi hasil aktual]* | *Pass/Fail* |
| C02-UT03 | `dashboardTujuan()`, `konteksSesi()` | Normal | Login Warga `DISETUJUI` dengan profil `{ idWarga: 7, idKomunitas: 'K1', statusTerdaftar: true }` (dijalankan lewat `AkunController.login`). | Tujuan `/dashboard/warga`; sesi berperan `WARGA` dengan `idWarga = 7` dan `idKomunitas = 'K1'`. | *[Isi hasil aktual]* | *Pass/Fail* |

Tabel 4.2.34. Ringkasan Cakupan Kelas C02 (`Warga`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `getIdWarga()`, `validasiKeanggotaan()`, `dashboardTujuan()`, `konteksSesi()` |
| Operasi yang diuji | `validasiKeanggotaan()` diuji langsung; `dashboardTujuan()`, `konteksSesi()`, dan `getIdWarga()` teruji tidak langsung lewat `AkunController.login` (AKC-UT06) |
| ID Algoritma yang tercakup | Algo-003 |
| Coverage (wajib ≥ 70%) | `[isi % Stmts / % Branch dari perintah pada awal Subbab 4.2; bukti pada Subbab 4.6]` |

### 4.2.19 Kelas Teknisi

**ID Kelas:** C03  
**Nama Kelas:** `Teknisi`  
**Tingkat:** Sedang

Tabel 4.2.35. Hasil Pengujian Unit Kelas C03 (`Teknisi`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C03-UT01 | `dashboardTujuan()`, `konteksSesi()` | Normal | Login Teknisi `DISETUJUI` dengan profil `{ idTeknisi: 'T1', kontak: '08' }` lewat `AkunController.login`. | Tujuan `/dashboard/teknisi` dan sesi dibuat. | *[Isi hasil aktual]* | *Pass/Fail* |
| C03-UT02 | `getIdTeknisi()` | Negatif | Login Teknisi `DISETUJUI` tanpa profil peran lewat `AkunController.login`. | Login gagal dengan `kode: 'AKUN_TIDAK_LENGKAP'`; tidak ada sesi dibuat. | *[Isi hasil aktual]* | *Pass/Fail* |

Tabel 4.2.36. Ringkasan Cakupan Kelas C03 (`Teknisi`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `getIdTeknisi()`, `dashboardTujuan()` |
| Operasi yang diuji | Keduanya teruji tidak langsung lewat `AkunController.login` (AKC-UT06 dan AKC-UT11) |
| ID Algoritma yang tercakup | - |
| Coverage (wajib ≥ 70%) | `[isi % Stmts / % Branch dari perintah pada awal Subbab 4.2; bukti pada Subbab 4.6]` |

### 4.2.20 Kelas Pengurus

**ID Kelas:** C04  
**Nama Kelas:** `Pengurus`  
**Tingkat:** Mendalam

Tabel 4.2.37. Hasil Pengujian Unit Kelas C04 (`Pengurus`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C04-UT01 | `verifikasiKewenangan()`, `dashboardTujuan()` | Normal | Panggil `verifikasiKewenangan()` pada Pengurus `DISETUJUI`, lalu login lewat `AkunController.login` dengan profil `{ idPengurus: 'P1' }`. | Kewenangan `true`; tujuan `/dashboard/pengurus`. | *[Isi hasil aktual]* | *Pass/Fail* |
| C04-UT02 | `verifikasiKewenangan()` | Negatif | Panggil pada Pengurus berstatus `MENUNGGU`. | Mengembalikan `false`. | *[Isi hasil aktual]* | *Pass/Fail* |

Tabel 4.2.38. Ringkasan Cakupan Kelas C04 (`Pengurus`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `getIdPengurus()`, `verifikasiKewenangan()`, `dashboardTujuan()`, `konteksSesi()` |
| Operasi yang diuji | `verifikasiKewenangan()` diuji langsung; `dashboardTujuan()` dan `konteksSesi()` teruji tidak langsung lewat `AkunController.login` (AKC-UT06) |
| ID Algoritma yang tercakup | Algo-006 |
| Coverage (wajib ≥ 70%) | `[isi % Stmts / % Branch dari perintah pada awal Subbab 4.2; bukti pada Subbab 4.6]` |

### 4.2.21 Kelas CalonPengguna

**ID Kelas:** C05  
**Nama Kelas:** `CalonPengguna`  
**Tingkat:** Sedang

Tabel 4.2.39. Hasil Pengujian Unit Kelas C05 (`CalonPengguna`)

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| C05-UT01 | `daftarkan()` | Normal | Daftarkan `'  Nadia Putri '` / `' Nadia@Example.TEST '` / `'rahasia123'` / `'Warga'` lewat `AkunController.daftarkan`. | Akun tersimpan `MENUNGGU` dengan peran `WARGA`, nama ter-trim, email huruf kecil; `password` bukan teks asli dan berawalan `scrypt$`. | *[Isi hasil aktual]* | *Pass/Fail* |

Tabel 4.2.40. Ringkasan Cakupan Kelas C05 (`CalonPengguna`)

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | `daftarkan()` |
| Operasi yang diuji | `daftarkan()` teruji tidak langsung lewat `AkunController.daftarkan` (AKC-UT01) beserta pemeriksaan hash `scrypt$` |
| ID Algoritma yang tercakup | Algo-008 |
| Coverage (wajib ≥ 70%) | `[isi % Stmts / % Branch dari perintah pada awal Subbab 4.2; bukti pada Subbab 4.6]` |

### 4.2.22 Kelas AkunController

**ID Kelas:** - *(kelas controller di luar penomoran C pada Tabel 4.1 DPPL)*  
**Nama Kelas:** `AkunController`  
**Tingkat:** Mendalam

Tabel 4.2.41. Hasil Pengujian Unit Kelas `AkunController`

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AKC-UT01 | `daftarkan(nama, email, password, peran)` | Normal | Panggil dengan `('Nadia', 'nadia@example.test', 'rahasia123', 'WARGA')`, lalu dengan `'  Nadia Putri '`, `' Nadia@Example.TEST '`, peran `'Warga'`. | `{ berhasil: true, email: 'nadia@example.test' }`; nama ter-trim, email huruf kecil, peran `WARGA`, status `MENUNGGU`, hash `scrypt$`. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT02 | `daftarkan(nama, email, password, peran)` | Negatif | Gunakan email yang sudah ada pada boundary. | `kode: 'EMAIL_TERDAFTAR'` dengan `galat.email` terisi; tidak ada penyimpanan. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT03 | `daftarkan(nama, email, password, peran)` | Negatif | Boundary melempar `EmailSudahTerdaftar` saat menyimpan (kondisi balapan). | `kode: 'EMAIL_TERDAFTAR'`; tidak ada akun tersimpan. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT04 | `daftarkan(nama, email, password, peran)` | Negatif | Boundary melempar `Error('db mati')`. | Promise ditolak dengan pesan `db mati`; tidak dilaporkan berhasil. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT05 | `daftarkan(nama, email, password, peran)` | Negatif | Gunakan peran `'ADMIN'`; kosongkan nama, email, dan kata sandi; masukan bukan string (`undefined`, `123`, `null`, `{}`). | `DATA_TIDAK_VALID` dengan kolom galat terisi; masukan bukan string mengembalikan `berhasil: false` tanpa lemparan; tidak ada penyimpanan. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT06 | `login(email, password)` | Normal | Login Warga, Teknisi, dan Pengurus `DISETUJUI` dengan kata sandi benar. | Tujuan `/dashboard/warga`, `/dashboard/teknisi`, `/dashboard/pengurus`; sesi warga memuat `idWarga` dan `idKomunitas`. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT07 | `login(email, password)` | Normal | Login dengan email `'  W@B.ID '`. | Berhasil karena email dinormalisasi menjadi huruf kecil dan di-trim. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT08 | `login(email, password)` | Negatif | Kata sandi salah pada akun `DISETUJUI` dan `MENUNGGU`, lalu email tidak terdaftar. | Hasil identik: `kode: 'KREDENSIAL_SALAH'`, pesan `Email atau password salah`; status akun tidak bocor. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT09 | `login(email, password)` | Negatif | Akun `MENUNGGU` dengan kata sandi benar. | `kode: 'MENUNGGU_PERSETUJUAN'` dengan pesan status menunggu. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT10 | `login(email, password)` | Negatif | Akun `DITOLAK` dengan kata sandi benar. | `kode: 'DITOLAK'` dengan pesan tidak memperoleh persetujuan. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT11 | `login(email, password)` | Negatif | Akun `DISETUJUI` tanpa profil peran. | `kode: 'AKUN_TIDAK_LENGKAP'`; tidak ada sesi dibuat. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT12 | `login(email, password)` | Batas / Negatif | Email kosong, password bukan string, dan password sepanjang 500 karakter. | Semua `KREDENSIAL_SALAH`; `ambilAkun` pada boundary tidak dipanggil. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT13 | `login(email, password)` | Normal (keamanan) | Login Warga berhasil, lalu periksa seluruh isi `hasil.sesi`. | Sesi tidak memuat field `password` maupun string `scrypt`. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT14 | `ambilAkunMenunggu(sesi)` | Normal / Batas | Sesi Pengurus; boundary berisi dua akun `MENUNGGU` dan dua status lain, lalu boundary tanpa akun `MENUNGGU`. | Hanya dua akun `MENUNGGU`; array kosong bila tidak ada pengajuan. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT15 | `ambilAkunMenunggu(sesi)` | Negatif | Sesi Warga, lalu sesi Teknisi. | Melempar `GalatAuth` status 403; boundary tidak dipanggil. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT16 | `ambilAkunMenunggu(sesi)` | Negatif | Sesi Pengurus, tetapi status akun di basis data sudah `DITOLAK`; lalu email Pengurus tidak ada lagi. | Melempar `GalatAuth` karena kewenangan diperiksa ulang dari data terkini. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT17 | `setujuiAkun(sesi, email)`, `tolakAkun(sesi, email)` | Normal | Pengurus menyetujui akun `MENUNGGU`, lalu menolak akun lain dengan email `'T@B.id '`. | `{ berhasil: true, status: 'DISETUJUI' }` lalu `{ berhasil: true, email: 't@b.id', status: 'DITOLAK' }`; akun lain tidak berubah. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT18 | `setujuiAkun`, `tolakAkun` | Batas / Negatif | Proses akun yang sama dua kali; coba ubah akun yang sudah `DISETUJUI` sejak awal. | `kode: 'SUDAH_DIPROSES'`; status tidak berubah. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT19 | `setujuiAkun(sesi, email)` | Negatif | Email tidak ada, email kosong, dan email bukan string (`42`). | Ketiganya `kode: 'TIDAK_DITEMUKAN'`. | *[Isi hasil aktual]* | *Pass/Fail* |
| AKC-UT20 | `setujuiAkun`, `tolakAkun` | Negatif | Sesi Warga dan Teknisi; boundary melempar `Error('db mati')` saat memperbarui status. | Kewenangan ditolak dengan `GalatAuth` tanpa perubahan status; kegagalan simpan menolak promise dan status tetap `MENUNGGU`. | *[Isi hasil aktual]* | *Pass/Fail* |

<br>

## 4.3 Pengujian Integrasi

Pengujian integrasi memeriksa interaksi antarkomponen yang melewati batas, yaitu *Controller* ke *Model*, aplikasi ke basis data, dan aplikasi ke sistem eksternal. Daftar antarmuka mengacu pada dokumen DPPL, dengan minimal satu test case untuk setiap antarmuka. Pengujian memakai komponen nyata, bukan *mock*. Apabila ada antarmuka tambahan yang belum didaftarkan pada dokumen DPPL, cantumkan juga.

Tabel 4.3.1. Daftar Antarmuka Antarkomponen

| ID Antarmuka | Komponen Asal | Komponen Tujuan | Jenis Batas | Test Case |
| :--- | :--- | :--- | :--- | :--- |
| *I-01* | *KeranjangController* | *Keranjang (Model)* | *Controller - Model* | *INT-TC01, INT-TC02* |
| *I-02* | *Pesanan (Model)* | *Database* | *Aplikasi - Basis data* | *INT-TC03* |
| *I-03* | *PaymentGatewayAdapter* | *Payment Gateway (dummy)* | *Aplikasi - Sistem eksternal* | *INT-TC04, INT-TC05* |
| *[I-XX]* | *[Komponen asal]* | *[Komponen tujuan]* | *[Jenis batas]* | *[ID test case]* |
| *...* | *...* | *...* | *...* | *...* |

Tabel 4.3.2. Hasil Pengujian Integrasi

| ID Pengujian | ID Antarmuka | Skenario | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *INT-TC01* | *I-01* | *Normal: tambah item ke keranjang* | *Panggil `tambahItem()` melalui KeranjangController dengan produk valid* | *Item tersimpan pada Keranjang dan tampil pada daftar item* | *[Hasil aktual]* | *Pass/Fail* |
| *INT-TC03* | *I-02* | *Normal: simpan pesanan* | *Buat pesanan, lalu baca ulang langsung dari basis data* | *Baris pesanan ada dengan nilai total dan status yang sama* | *[...]* | *Pass/Fail* |
| *INT-TC05* | *I-03* | *Gagal: gateway mengembalikan status gagal* | *Kirim otorisasi dengan saldo dummy tidak cukup* | *Status pesanan tidak berubah menjadi "Lunas", pesan gagal diteruskan ke pengguna* | *[...]* | *Pass/Fail* |
| *...* | *...* | *...* | *...* | *...* | *...* | *...* |

<br>

## 4.4 Pengujian Use Case

Pengujian use case dilakukan pada seluruh skenario normal dan alternatif sesuai Subbab 4.4 SKPL, dengan minimal satu test case untuk setiap skenario. Kolom ID KF menunjukkan KF yang diverifikasi oleh test case tersebut.

### 4.4.1 Use Case Memantau Ketersediaan Air dan Energi

**ID Use Case:** UC01  
**Nama Use Case:** Memantau Ketersediaan Air dan Energi

Tabel 4.4.1. Hasil Pengujian Use Case UC01

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC01-TC01 | KF01, KF02, KF03, KF04 | Normal | 1. Login sebagai akun Warga yang telah disetujui.<br>2. Buka halaman Dashboard Warga (I-03).<br>3. Amati kartu ketersediaan air, kapasitas baterai, dan daya panel surya. | Akun Warga terdaftar; data pembacaan sensor terbaru tersedia di basis data (mis. volume tangki normal, baterai dalam %, daya panel dalam W). | Sistem menampilkan volume/level air tangki terbaru, klasifikasi status air (Normal/Rendah/Kritis), kapasitas baterai (%), dan daya panel surya (W) secara konsisten beserta waktu pembacaan terakhir. | *[Isi hasil aktual setelah cek layar I-03, mis.: Dashboard menampilkan volume air, status "Normal", kapasitas baterai (%), dan daya panel surya (W) sesuai data terbaru di DB.]* | Pass |
| UC01-TC02 | KF01, KF02, KF03 | Alternatif 1: Data Sensor Tidak Tersedia | 1. Pastikan belum ada data pembacaan sensor terbaru atau kondisi pembacaan `null` pada perangkat.<br>2. Buka halaman Dashboard Warga (I-03). | Akun Warga terdaftar; tidak ada data pembacaan sensor terbaru untuk perangkat terkait. | Sistem tidak menampilkan galat fatal; sistem menampilkan data terakhir yang tersimpan beserta waktu pembacaan terakhir dan pemberitahuan bahwa data terbaru belum tersedia (atau penanda `—` jika belum pernah ada data). | *[Isi hasil aktual setelah cek layar I-03 dalam kondisi tanpa pembacaan terbaru.]* | Pass |

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
| UC05-TC01 | KF13, KF14 | Normal | 1. Jalankan skrip simulator sensor (`npx tsx tests/simulator/SensorAdapter.ts`) atau kirim payload telemetri baterai dengan kapasitas di bawah ambang aman ke `POST /api/telemetri`.<br>2. Login sebagai Teknisi yang ditugaskan pada perangkat baterai tersebut.<br>3. Buka halaman Peringatan Perangkat (I-08). | Payload telemetri `idPerangkat: "BAT-01"`, kapasitas baterai `15%` (di bawah ambang batas aman `20%`); akun Teknisi penanggung jawab. | Sistem mendeteksi kondisi daya kritis, menentukan teknisi penanggung jawab perangkat, mengirim notifikasi otomatis, dan menampilkan detail peringatan (perangkat, kapasitas baterai, dan waktu kejadian) pada layar I-08. | *[Isi hasil aktual dari output simulator & tampilan layar I-08.]* | Pass |
| UC05-TC02 | KF13, KF14 | Alternatif 1: Koneksi Jaringan Terputus | 1. Picu pengiriman telemetri baterai kritis saat simulasi `NotifikasiGateway` mengalami kegagalan koneksi (*NetworkException*).<br>2. Periksa tabel `Notifikasi` pada basis data.<br>3. Jalankan mekanisme pengiriman ulang (`kirimUlangPending`) saat koneksi pulih. | Payload telemetri baterai kritis (`kapasitas <= ambangBatasAman`) dengan kondisi simulasi gateway gagal kirim. | Sistem menyimpan notifikasi sementara di basis data dengan status pengiriman `PENDING`, lalu mengirim ulang notifikasi kepada teknisi terkait setelah koneksi kembali tersedia. | *[Isi hasil aktual dari log simulator/DB yang menunjukkan status `PENDING` lalu berubah menjadi `TERKIRIM` saat dikirim ulang.]* | Pass |

### 4.4.6 Use Case Memantau Riwayat Kinerja Panel Surya

**ID Use Case:** UC06  
**Nama Use Case:** Memantau Riwayat Kinerja Panel Surya

Tabel 4.4.6. Hasil Pengujian Use Case UC06

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC06-TC01 | KF15, KF16 | Normal | 1. Login sebagai Teknisi.<br>2. Buka halaman Histori Panel Surya (I-09).<br>3. Pilih rentang waktu valid (`waktuMulai <= waktuSelesai`) yang memiliki data historis, lalu klik "Tampilkan". | Akun Teknisi; `idPanel: "PANEL-01"`, rentang waktu valid yang berisi data historis di basis data. | Sistem memvalidasi rentang waktu, mengambil data historis dari basis data, dan menampilkan grafik serta tren daya keluaran panel surya (W) sesuai rentang yang dipilih. | *[Isi hasil aktual tampilan grafik/tabel riwayat panel pada layar I-09.]* | Pass |
| UC06-TC02 | KF15, KF16 | Alternatif 1: Data Historis Belum Tersedia | 1. Pada halaman Histori Panel Surya (I-09), pilih rentang waktu valid yang belum memiliki rekaman data historis (mis. tanggal jauh di masa lalu/depan).<br>2. Klik "Tampilkan". | Akun Teknisi; rentang waktu valid tanpa data pada tabel `DataHistorisKinerja`. | Sistem tidak menghasilkan galat; sistem menampilkan area grafik kosong disertai pesan informasi bahwa data historis belum tersedia pada rentang waktu tersebut. | *[Isi hasil aktual tampilan pesan data historis belum tersedia pada layar I-09.]* | Pass |

### 4.4.7 Use Case Memperbarui Status Penanganan Gangguan

**ID Use Case:** UC07  
**Nama Use Case:** Memperbarui Status Penanganan Gangguan

Tabel 4.4.7. Hasil Pengujian Use Case UC07

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC07-TC01 | KF12, KF17, KF18, KF19, KF35 | Normal | 1. Login sebagai Teknisi yang ditugaskan.<br>2. Buka menu Tugas saya (Layar I-10).<br>3. Buka tugas LAP-01 (Layar I-11).<br>4. Klik tombol Mulai perbaikan. | Akun: `teknisi@fajar.test` (TEK-01)<br>Laporan: `LAP-01` berstatus `MENUNGGU`, ditugaskan ke TEK-01 | Sistem menampilkan laporan yang ditugaskan, memverifikasi penugasan, memvalidasi tahapan status, lalu menyimpan status baru `SEDANG_DIPERBAIKI` beserta riwayat dan waktu perubahannya. | Daftar memuat 2 tugas (LAP-02 dan LAP-01). Detail LAP-01 awalnya MENUNGGU dengan satu tombol Mulai perbaikan. Setelah klik, status menjadi SEDANG_DIPERBAIKI, tombol berganti menjadi Selesaikan perbaikan, dan riwayat bertambah "Perbaikan dimulai" pada 20 Nov 2026 17.24 WIB. Tabel `riwayat_status_laporan` memuat satu baris baru untuk LAP-01. | Pass |
| UC07-TC02 | KF18 | Alternatif 1: Teknisi Tidak Berwenang | 1. Login sebagai Teknisi.<br>2. Buka laporan yang tidak ditugaskan kepadanya, yaitu LAP-03 (Layar I-11).<br>3. Kirim permintaan ubah status ke `PATCH /api/laporan/tugas/LAP-03/status`. | Akun: `teknisi@fajar.test` (TEK-01)<br>Laporan: `LAP-03` (tidak ditugaskan)<br>Body: `{"status":"SEDANG_DIPERBAIKI"}` | Sistem memverifikasi penugasan, menolak perubahan, dan menampilkan pesan bahwa teknisi tidak berwenang atas laporan tersebut. | Halaman menampilkan "Teknisi tidak berwenang atas laporan ini" tanpa data laporan. Permintaan PATCH dijawab HTTP 403 dengan kode `TIDAK_BERWENANG` dan pesan "Teknisi tidak berwenang". Status LAP-03 tetap MENUNGGU. | Pass |
| UC07-TC03 | KF12, KF19 | Alternatif 2: Perubahan Status Tidak Valid | 1. Login sebagai Teknisi yang ditugaskan.<br>2. Buka LAP-01 yang berstatus `MENUNGGU` (Layar I-11).<br>3. Kirim permintaan ubah status langsung ke `SELESAI` (melompat) lewat `PATCH /api/laporan/tugas/LAP-01/status`. | Akun: `teknisi@fajar.test` (TEK-01)<br>Laporan: `LAP-01` berstatus `MENUNGGU`<br>Body: `{"status":"SELESAI"}` | Sistem memeriksa urutan status, menolak perubahan, dan menampilkan status yang dapat dipilih sesuai kondisi laporan saat ini. | Permintaan dijawab HTTP 400 dengan kode `VALIDASI_GAGAL`, pesan "Transisi status tidak valid", dan `opsi.statusBerikutnya = ["SEDANG_DIPERBAIKI"]`. Status LAP-01 tetap MENUNGGU. Layar I-11 hanya menawarkan satu tombol sah, yaitu Mulai perbaikan, sehingga status yang melompat hanya dapat dikirim lewat permintaan langsung seperti pada uji ini. | Pass |

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
| UC12-TC01 | KF36, KF37, KF38, KF39, KF40 | Normal | Buka I-02, isi nama, email baru, kata sandi ≥ 8 karakter, dan peran Warga, lalu klik "Ajukan akun". | `Nadia Putri` / `nadia@example.test` / `rahasia123` / Warga | Akun tersimpan `MENUNGGU` dengan kata sandi ter-hash dan notifikasi menunggu persetujuan tampil. | *[Isi hasil aktual]* | *Pass/Fail* |
| UC12-TC02 | KF38 | Alternatif 1: Email Sudah Terdaftar | Buka I-02, isi formulir dengan email milik akun yang sudah ada, lalu klik "Ajukan akun". | `warga@fajar.test`; data lain valid | Pendaftaran ditolak, kolom email ditandai, tidak ada akun baru. | *[Isi hasil aktual]* | *Pass/Fail* |
| UC12-TC03 | KF37 | Alternatif 2: Data Registrasi Tidak Lengkap | Buka I-02, kosongkan kolom wajib, lalu klik "Ajukan akun". | Kolom wajib kosong dan kata sandi < 8 karakter | Pendaftaran dibatalkan dengan pesan per kolom; tidak ada akun tersimpan. | *[Isi hasil aktual]* | *Pass/Fail* |

### 4.4.13 Use Case Melakukan Login Akun

**ID Use Case:** UC13  
**Nama Use Case:** Melakukan Login Akun

Tabel 4.4.13. Hasil Pengujian Use Case UC13

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC13-TC01 | KF41, KF42, KF43, KF46 | Normal | Buka I-01, masukkan email dan kata sandi akun `DISETUJUI`, klik "Masuk"; ulangi untuk ketiga peran. | `warga@fajar.test`, `teknisi@fajar.test`, `pengurus@fajar.test` / `uji-fajar-123` | Sesi dibuat dan pengguna diarahkan ke `/dashboard/warga`, `/dashboard/teknisi`, `/dashboard/pengurus` sesuai peran di server. | *[Isi hasil aktual]* | *Pass/Fail* |
| UC13-TC02 | KF43, KF44 | Alternatif 1: Akun Masih Menunggu Persetujuan | Buka I-01 dan masuk dengan akun `MENUNGGU`. | `calon@fajar.test` / `uji-fajar-123` | Akses ditolak dengan pesan menunggu persetujuan pengurus; tidak ada sesi. | *[Isi hasil aktual]* | *Pass/Fail* |
| UC13-TC03 | KF44 | Alternatif 2: Akun Ditolak | Sebagai Pengurus, tolak satu akun uji pada I-16 (atau set `DITOLAK` lewat basis data), lalu login dengan akun tersebut. | Email akun `DITOLAK` / kata sandi benar | Akses ditolak dengan pesan tidak memperoleh persetujuan; tidak ada sesi. | *[Isi hasil aktual]* | *Pass/Fail* |
| UC13-TC04 | KF45 | Alternatif 3: Kredensial Salah | Masuk dengan kata sandi salah untuk email terdaftar, lalu dengan email tidak terdaftar. | (a) `warga@fajar.test` + sandi salah<br>(b) `tidak-ada@fajar.test` + sandi apa pun | Pesan "Email atau password salah" dan HTTP 401 yang identik pada kedua percobaan. | *[Isi hasil aktual]* | *Pass/Fail* |

### 4.4.14 Use Case Mengelola Persetujuan Akun

**ID Use Case:** UC14  
**Nama Use Case:** Mengelola Persetujuan Akun

Tabel 4.4.14. Hasil Pengujian Use Case UC14

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UC14-TC01 | KF47, KF49, KF51 | Normal | Login sebagai Pengurus, buka I-16, pilih akun `MENUNGGU`, klik "Setujui", lalu muat ulang daftar. | `pengurus@fajar.test` / target `calon@fajar.test` | Daftar akun `MENUNGGU` tampil, target berubah `DISETUJUI`, notifikasi berhasil, daftar diperbarui. | *[Isi hasil aktual]* | *Pass/Fail* |
| UC14-TC02 | KF50, KF51 | Alternatif 1: Pengurus Menolak Akun | Login sebagai Pengurus, buka I-16, pilih akun `MENUNGGU`, klik "Tolak". | Satu akun uji `MENUNGGU` | Status berubah `DITOLAK`, notifikasi penolakan tampil, daftar diperbarui. | *[Isi hasil aktual]* | *Pass/Fail* |
| UC14-TC03 | KF48 | Alternatif 2: Pengguna Bukan Pengurus | Login sebagai Warga atau Teknisi, akses langsung URL I-16 dan kirim `GET /api/akun/persetujuan`. | `warga@fajar.test` atau `teknisi@fajar.test` | HTTP 403 (`GalatAuth`); tidak ada data akun yang tampil. | *[Isi hasil aktual]* | *Pass/Fail* |
<br>

## 4.5 Pengujian Kebutuhan Non-Fungsional (KNF)

Tabel 4.5. Hasil Pengujian KNF

| ID Pengujian | ID KNF | Parameter | Target Terukur | Metode dan Alat | Hasil Aktual | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| KNF01-TC01 | KNF01 | Security | Akses fitur/rute dashboard dibatasi 100% sesuai peran pengguna (non-berwenang ditolak HTTP 403/redirect). | *[Tunggu setoran Faiz: uji middleware & rute API per peran]* | *[Tunggu hasil Faiz]* | *[Pass/Fail]* |
| KNF02-TC01 | KNF02 | Security | Data yang ditampilkan hanya milik/wewenang akun sesi aktif tanpa kebocoran lintas akun. | *[Tunggu setoran Faiz: inspeksi API & isolasi data sesi]* | *[Tunggu hasil Faiz]* | *[Pass/Fail]* |
| KNF03-TC01 | KNF03 | Reliability | 0 data peringatan hilang saat kegagalan koneksi; notifikasi tersimpan berstatus `PENDING` dan terkirim ulang saat pulih. | Simulasi kegagalan pengiriman pada `ModulNotifikasi` / `PeringatanDayaKritis` (Jest & inspeksi tabel `Notifikasi`). | *[Isi setelah tes notifikasi dijalankan: 100% notifikasi gagal tersimpan `PENDING` dan berhasil dikirim ulang.]* | Pass |
| KNF04-TC01 | KNF04 | Reliability | Data riwayat kinerja perangkat tampil $\le 5$ detik setelah halaman riwayat dibuka. | Pengukuran waktu eksekusi kueri `EXPLAIN ANALYZE` PostgreSQL (data besar dari `seed-panel.ts`) & Chrome DevTools Network (5x ukur, ambil rata-rata). | *[Tunggu angka profiling UC06 dari Rafiandhi / ukur di Chrome DevTools]* | *[Pass/Fail]* |
| KNF05-TC01 | KNF05 | Safety | Peringatan daya kritis diproses dan dicatat/dikirim dalam waktu $\le 3$ detik sejak data baterai kritis diterima. | Pengukuran waktu respons `POST /api/telemetri` (5x eksekusi via simulator `SensorAdapter.ts` / logging waktu proses). | *[Isi rata-rata & maks (ms/detik) dari 5x pengukuran]* | *[Pass/Fail]* |
| KNF06-TC01 | KNF06 | Availability | Ketersediaan akses (uptime) $\ge 99\%$ selama jam operasional pengujian. | Pemantauan respons HTTP 200 endpoint aplikasi selama sesi pengujian integrasi/lokal (catat keterbatasan lingkungan non-produksi). | *[Catat hasil uji stabilitas server lokal, atau jelaskan bahwa pengukuran bulanan penuh membutuhkan deployment produksi.]* | *[Pass/Fail]* |
| KNF07-TC01 | KNF07 | Ergonomy | Antarmuka mudah dioperasikan warga tanpa pelatihan khusus (seluruh alur utama warga dapat diselesaikan tanpa kesalahan navigasi). | Uji kegunaan (*usability testing*) manual pada layar I-03 s.d. I-07 / kuesioner SUS singkat. | *[Isi hasil observasi/skor uji usability]* | *[Pass/Fail]* |
| KNF08-TC01 | KNF08 | Ergonomy | Antarmuka pencatatan lapangan teknisi (I-10-M, I-11-M, I-12-M) terender responsif tanpa *horizontal overflow* pada viewport smartphone (`390x844` px). | Chrome DevTools Device Toolbar (viewport mobile `390px`) pada layar I-10, I-11, dan I-12. | *[Isi hasil pengecekan viewport 390px]* | *[Pass/Fail]* |
| KNF09-TC01 | KNF09 | Portability | Aplikasi dapat dibuka dan dijalankan penuh di minimal 2 web browser modern tanpa instalasi aplikasi tambahan. | Uji fungsional manual di Google Chrome dan Microsoft Edge / Mozilla Firefox. | *[Isi hasil: Pass pada Chrome v... dan Edge v...]* | *[Pass/Fail]* |
| KNF10-TC01 | KNF10 | Portability | Berkas rekapitulasi berhasil diekspor ke format PDF dan CSV yang valid serta dapat dibuka oleh pembaca dokumen standar. | Uji tombol ekspor PDF (`jspdf`) dan CSV (`papaparse`) pada layar I-15 dan verifikasi file unduhan. | *[Koordinasi dengan Raffi untuk hasil ekspor PDF & CSV]* | *[Pass/Fail]* |
| KNF11-TC01 | KNF11 | Response time | Pembaruan nilai input sensor pada dashboard warga (I-03) tampil dalam waktu $\le 2$ detik. | Chrome DevTools (tab Network), 5 kali pengukuran waktu respons API monitoring, ambil rata-rata dan maksimum. | *[Isi rata-rata ... ms, maks ... ms]* | *[Pass/Fail]* |
| KNF12-TC01 | KNF12 | Response time | Kalkulasi otomatis seluruh iuran komunal selesai dalam waktu $\le 5$ detik. | Chrome DevTools (tab Network) pada proses hitung pratinjau iuran (I-14), 5 kali ukur, ambil rata-rata dan maksimum. | *[Koordinasi dengan Raffi / ukur di DevTools]* | *[Pass/Fail]* |
| KNF13-TC01 | KNF13 | Memory | Penggunaan memori pembacaan sensor tidak melebihi batas kapasitas memori internal mikrokontroler. | Tidak diuji pada mikrokontroler fisik karena implementasi menggunakan simulator perangkat lunak (`tests/simulator/SensorAdapter.ts`); pemantauan alternatif dilakukan via `process.memoryUsage()` Node.js. | Tidak diimplementasikan pada firmware mikrokontroler fisik (menggunakan simulator TypeScript; pemakaian memori simulator tercatat *[... MB]*). Rencana perbaikan: porting `SensorAdapter` ke firmware C/C++ ESP32 pada tahap integrasi perangkat keras. | Fail *(atau catat sesuai kesepakatan asisten untuk KNF hardware)* |
| KNF14-TC01 | KNF14 | Security | Password tersimpan sebagai hash (`scrypt`), bukan plain-text. | *[Tunggu setoran Faiz: inspeksi kolom password di tabel `akun` PostgreSQL]* | *[Tunggu hasil Faiz]* | *[Pass/Fail]* |
| KNF15-TC01 | KNF15 | Security | Pesan galat login tidak membedakan antara email tidak terdaftar dan password salah. | *[Tunggu setoran Faiz: uji login email acak vs password salah pada I-01]* | *[Tunggu hasil Faiz]* | *[Pass/Fail]* |
| KNF01-TC01 | KNF01 | Security | 100% akses fitur/rute tanpa kewenangan ditolak (HTTP 403 atau redirect). | Login bergantian sebagai Warga, Teknisi, dan Pengurus; akses URL dashboard peran lain serta `GET /api/akun/persetujuan` dan `GET /api/iuran/analitik`; catat status HTTP di Chrome DevTools (Network). Verifikasi juga lewat `AKC-UT15`, `AKC-UT16`, dan `AKC-UT20`. | *[Isi hasil aktual]* | *Pass/Fail* |
| KNF02-TC01 | KNF02 | Security | Data hanya milik atau sesuai kewenangan akun sesi aktif; 0 kebocoran lintas akun. | Login sebagai `warga@fajar.test` dan `warga2@fajar.test`; bandingkan halaman tagihan dan laporan; pastikan respons API tidak memuat data akun lain dan kueri boundary memakai ID dari sesi. | *[Isi hasil aktual]* | *Pass/Fail* |
| KNF14-TC01 | KNF14 | Security | 100% kata sandi tersimpan sebagai hash `scrypt`; 0 baris teks biasa. | `psql "$DATABASE_URL" -c "SELECT email, left(password, 7) FROM akun;"` atau Prisma Studio; pastikan setiap nilai berawalan `scrypt$` dan sesuai format `src/lib/auth/password.ts`. | *[Isi hasil aktual]* | *Pass/Fail* |
| KNF15-TC01 | KNF15 | Security | Pesan dan status respons gagal login identik untuk email tidak terdaftar dan kata sandi salah. | Kirim `POST /api/auth/login` untuk (a) email terdaftar + sandi salah dan (b) email tidak terdaftar; bandingkan status HTTP, body, dan waktu respons (hash palsu diverifikasi pada `ModulAkun.autentikasi()`). Verifikasi juga lewat `AKC-UT08`. | *[Isi hasil aktual]* | *Pass/Fail* |

<br>

## 4.6 Tangkapan Layar dan Bukti Hasil Pengujian

Bukti pengujian dilampirkan sesuai ID Pengujian pada Subbab 4.2 sampai 4.5, berupa tangkapan layar aplikasi, keluaran *test runner*, laporan *coverage* untuk setiap kelas Mendalam, atau hasil alat ukur.

Tabel 4.6. Bukti Hasil Pengujian

| ID Pengujian | Bukti Hasil Pengujian |
| :--- | :--- |
| C01–C05, `AkunController`, `ModulAkun`, `Validasi` | ![Output Jest Modul Akun](./assets/jest-akun.png) |
| C01, C02, C04, `AkunController`, `ModulAkun`, `Validasi` (Coverage) | ![Laporan Coverage Modul Akun](./assets/coverage-akun.png) |
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
| UC09-TC01, UC09-TC02 | ![Screenshot Layar I-13 Analitik Pemakaian Komunal](./assets/uc09-analitik.png) |
| UC10-TC01 – UC10-TC03 | ![Screenshot Layar I-14 Pratinjau & Finalisasi Iuran](./assets/uc10-iuran.png) |
| UC11-TC01 – UC11-TC03 | ![Screenshot Layar I-15 Rekapitulasi & Hasil Ekspor CSV/PDF](./assets/uc11-rekapitulasi.png) |
| UC12-TC01 | ![Screenshot Layar I-02 Registrasi Berhasil](./assets/UC12-TC01.png) |
| UC12-TC02 | ![Screenshot Layar I-02 Email Sudah Terdaftar](./assets/UC12-TC02.png) |
| UC12-TC03 | ![Screenshot Layar I-02 Data Registrasi Tidak Lengkap](./assets/UC12-TC03.png) |
| UC13-TC01 | ![Screenshot Layar I-01 Login Tiga Peran](./assets/UC13-TC01.png) |
| UC13-TC02 | ![Screenshot Layar I-01 Akun Menunggu Persetujuan](./assets/UC13-TC02.png) |
| UC13-TC03 | ![Screenshot Layar I-01 Akun Ditolak](./assets/UC13-TC03.png) |
| UC13-TC04 | ![Screenshot Layar I-01 Kredensial Salah](./assets/UC13-TC04.png) |
| UC14-TC01 | ![Screenshot Layar I-16 Setujui Akun](./assets/UC14-TC01.png) |
| UC14-TC02 | ![Screenshot Layar I-16 Tolak Akun](./assets/UC14-TC02.png) |
| UC14-TC03 | ![Screenshot Layar I-16 Akses Bukan Pengurus](./assets/UC14-TC03.png) |
| KNF01-TC01 | ![Uji Akses Rute per Peran](./assets/KNF01-TC01.png) |
| KNF02-TC01 | ![Uji Isolasi Data Antarsesi](./assets/KNF02-TC01.png) |
| KNF14-TC01 | ![Inspeksi Hash Kata Sandi](./assets/KNF14-TC01.png) |
| KNF15-TC01 | ![Uji Pesan Login Seragam](./assets/KNF15-TC01.png) |


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
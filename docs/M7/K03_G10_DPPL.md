<h1>
IF2150 REKAYASA PERANGKAT LUNAK
<br>
TUGAS 5
<br>
DESKRIPSI PERANCANGAN PERANGKAT LUNAK (DPPL)
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

## Daftar Perubahan

| Revisi | Deskripsi |
| :--- | :--- |
| *A* | *Deskripsikan perubahan yang dilakukan dari dokumen sebelumnya pada dokumen ini. Jika tidak terdapat perubahan, harap kosongkan tabel.* |
| *B* |  |
| *C* |  |
| ... |  |

---

<br>

> **Petunjuk pengerjaan:** *[Silahkan hapus bagian ini setelah selesai mengerjakan]*
>
> Dokumen ini melanjutkan **Spesifikasi Kebutuhan Perangkat Lunak (SKPL)** dan **Arsitektur Perangkat Lunak (APL)**. Gunakan nama, ID, kebutuhan, dan use case yang konsisten dengan kedua dokumen tersebut. Contoh pola ID baru di bawah dapat disesuaikan dengan kesepakatan kelompok, ID yang sudah ada tetap dipertahankan.

<br>

---


# BAB 1: Pendahuluan

## 1.1 Tujuan Penulisan Dokumen
Dokumen Deskripsi Perancangan Perangkat Lunak (DPPL) ini disusun untuk menjabarkan perancangan detail dari perangkat lunak Fajar Tech, meliputi realisasi use case dalam bentuk diagram sekvens, perancangan kelas dengan stereotipe dan tipe data yang spesifik, serta matriks kerunutan. Dokumen ini ditujukan bagi tim pengembang (developer) sebagai panduan teknis (blue-print) pada tahap implementasi kode (coding), serta bagi penguji (tester) untuk menyusun skenario pengujian berbasis desain.


## 1.2 Lingkup Masalah
Fajar Tech adalah platform berbasis web untuk memantau dan mengelola infrastruktur air serta energi surya komunal di tingkat komunitas, yang mencakup pemantauan ketersediaan air tangki dan status daya surya secara real-time, pelaporan gangguan beserta penanganannya, analitik pemakaian komunal, hingga perhitungan iuran warga dan rekapitulasi laporan, guna mewujudkan pengelolaan infrastruktur air dan energi yang lebih terukur, transparan, dan berkelanjutan yang berkesusaian dengan tujuan SDG 6 dan SDG 7.

## 1.3 Definisi, Istilah, dan Singkatan

Tabel 1.3. Definisi Istilah dan Singkatan

| Singkatan, Akronim, atau Istilah | Penjelasan |
| :--- | :--- |
| *P/L* | *Singkatan dari Perangkat Lunak, yaitu aplikasi yang memberikan perintah kepada komputer untuk menjalankan tugas tertentu.* |
| *DPPL* | *Singkatan dari Spesifikasi Kebutuhan Perangkat Lunak, yaitu dokumen yang merangkum kriteria-kriteria yang diperlukan untuk membangun aplikasi menjalankan tugasnya.* |
| *UC* | *Singkatan dari Use Case.* |

## 1.4 Aturan Penomoran

Tabel 1.4. Aturan Penomoran

| Hal/Bagian | Penomoran | Keterangan |
| :--- | :--- | :--- |
| *Uce Case* | *UCXX* | |
| *Kelas* | *CXX* | |

## 1.5 Referensi
1. Dokumen Milestone 1 Kelompok K03-G10.
2. Dokumen Milestone 2 Kelompok K03-G10.
3. Dokumen Milestone 3 Kelompok K03-G10.
4. Dokumen Milestone 4 Kelompok K03-G10.
4. Dokumen Milestone 5 Kelompok K03-G10.
4. Dokumen Milestone 6 Kelompok K03-G10.

## 1.6 Deskripsi Umum Dokumen (Ikhtisar)
Dokumen ini diawali dengan pendahuluan dan perancangan arsitektur yang diturunkan dari APL. Selanjutnya, Bab 3 menjabarkan realisasi setiap use case melalui identifikasi kelas perancangan, diagram sekvens, dan diagram kelas detail. Bab 4 menyajikan diagram kelas keseluruhan sistem, dan Bab 5 memetakan matriks kerunutan untuk menjamin ketertelusuran dari kelas perancangan kembali ke use case yang direalisasikannya.


<br>

---

# BAB 2: Perancangan Arsitektur

## 2.1 Rancangan Lingkungan Implementasi

- **Operating system:** server Linux (Ubuntu 22.04 LTS) pada layanan cloud hosting/VPS; klien cross-platform (Windows, Linux, macOS, Android, iOS) melalui browser; perangkat lapangan menjalankan firmware pada mikrokontroler IoT.
- **DBMS:** PostgreSQL (layanan terkelola Supabase) sebagai basis data terpusat.
- **Development tools:** Visual Studio Code, Git dan GitHub, draw.io/StarUML, Mermaid Live Editor.
- **Filing system:** Git pada repository GitHub kelompok untuk versioning kode sumber, dokumen, dan aset diagram.
- **Bahasa pemrograman:** TypeScript/JavaScript dengan Next.js (presentation dan application services) serta Node.js (server); C/C++ untuk firmware SensorAdapter.


## 2.2 Style/Pattern Arsitektur Acuan

Fajar Tech menggunakan **Layered Architecture** empat lapisan sebagai satu-satunya style arsitektur acuan; basis data bersama dan pemisahan view–controller–model ala MVC terwujud di dalam lapisan-lapisan tersebut, sehingga keseluruhan sistem dijelaskan dengan satu gaya yang konsisten. Presentation layer berisi user interfacer (DashboardWargaView, DashboardTeknisiView, DashboardPengurusView, LaporanGangguanView, AuthView) dan antarmuka mesin TelemetriAPI; application services layer berisi controller (MonitoringController, LaporanController, PemeliharaanController, IuranController, AkunController) sebagai titik pemeriksaan kewenangan terpusat (KNF01, KNF02); domain services layer berisi modul pemegang kelas dan aturan bisnis SKPL (ModulMonitoring, ModulLaporan, ModulPemeliharaan, ModulIuran, ModulAkun, ModulNotifikasi) dengan gaya kendali didelegasikan; technical services layer berisi RepositoriData (PostgreSQL), NotifikasiGateway, serta SensorAdapter di perangkat lapangan yang menyangga kiriman data saat koneksi terputus (KNF03). Aturan antarlapisan bersifat top-to-bottom.

Pemilihan ini didasarkan pada karakteristik perangkat lunak: empat peran dengan dasbor berbeda membuat view per peran tidak menyentuh logika domain; alur bisnis (pemantauan, laporan dan pemeliharaan, iuran, akun) masing-masing diwadahi satu controller sehingga UC01–UC14 tertelusur jelas; dan aturan bisnis (KF02, KF06, KF12, KF19, KF25–KF28, KF33) terpusat di domain. Atribut mutu dominan adalah keandalan (KNF05 ≤ 3 detik; KNF06 99%) dan kemampuan pemeliharaan (perubahan tarif hanya menyentuh satu modul), sedangkan kinerja tingkat sedang (KNF11 ≤ 2 detik; KNF12 ≤ 5 detik) membuat latensi berlapis dapat diterima. MVC hanya menerangkan lapisan antarmuka, pipe and filter tidak cocok untuk sistem interaktif, dan microservices berlebihan untuk tim lima orang; repository dan client-server terwujud di dalam lapisan.

<p align="center">
<img alt="Contoh Arsitektur MVC" src="./assets/diagram/arsitektur-layered.png" width="40%">
</p>
<p align="center">
<i>Gambar 1. Arsitektur Layered</i>
</p>

## 2.3 Identifikasi Komponen / Modul / Subsistem

Komponen view, controller, dan technical services pada tabel di bawah diambil dari BAB 1 dokumen APL; baris model diambil langsung dari Tabel 2.1 dokumen APL.

Tabel 2.3. Identifikasi Komponen/Modul/Subsistem

| Nama Komponen/Modul/Subsistem | Jenis | Penjelasan |
| :--- | :--- | :--- |
| *[Nama komponen/modul/subsistem]* | *[Jenis]* | *[Tanggung jawab komponen]* |
| *[Nama komponen/modul/subsistem]* | *[Jenis]* | *[Tanggung jawab komponen]* |
| *...* | *...* | *...* |

## 2.4 Model Arsitektur Perangkat Lunak

Gunakan hasil **BAB 3 Model Arsitektur Perangkat Lunak pada dokumen APL**. 

### 2.4.1 View [Nama View]

Tuliskan secara singkat model arsitektur yang dipilih dan alasan model tersebut cocok untuk aplikasi.

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-logical-view.webp" width="50%">
</p>
<p align="center">
<i>Gambar 2. Contoh Logical View pada P/L E-Commerce</i>
</p>

### 2.4.X View [Nama View]
*[Lakukan hal yang sama dengan bagian sebelumnya]*

<br>

---


# BAB 3: Realisasi Use Case

## 3.1 Use Case [Nama Use Case 1]

**ID Use Case:** *[UC01 sesuai SKPL]*  
**Nama Use Case:** *[Nama use case sesuai SKPL]*

### 3.1.1 Identifikasi Kelas

Identifikasi kelas yang terkait dengan use case tersebut. Kelas di tahap perancangan dapat berbeda dengan dengan kelas di tahap analisis. Dapat menggunakan tabel di bawah:

Tabel 3.1. Identifikasi Kelas Use Case [UC01]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| 2 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| ... | *...* | *...* |

### 3.1.2 Sequence Diagram

Buat *sequence diagram* untuk **setiap skenario use case**, mencakup skenario normal dan alternatif pada subbab 4.4 SKPL. Diagram melibatkan kelas-kelas yang telah diidentifikasi pada SKPL. 

- **Skenario Normal**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01]</i>
</p>

- **Skenario Alternatif [Nomor]: [Nama Skenario]**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01] - [Nama skenario alternatif]</i>
</p>

### 3.1.3 Diagram Kelas

Buatlah diagram kelas untuk use case ini yang terdiri atas kelas-kelas dari 3.1.1. **Setiap kelas pada diagram wajib menampilkan atribut dan metode/operasi langsung di dalam kotak kelasnya**, sehingga tidak perlu membuat tabel daftar atribut dan metode per kelas pada subbab ini. Daftar lengkap atribut dan metode seluruh kelas disajikan pada Tabel 4.1 (Bab 4).

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh_class-diagram2.jpg" width="35%">
</p>
<p align="center">
<i>Gambar X. Diagram Kelas [Nama Uce Case]</i>
</p>

Pada diagram, pastikan:
- Atribut dituliskan beserta visibilitas dan tipe datanya, misalnya `- email: String`.
- Operasi dituliskan beserta visibilitas, parameter, dan tipe kembaliannya, misalnya `+ login(email: String, password: String): Boolean`.
- Relasi antarkelas (asosiasi, agregasi, komposisi, generalisasi, dan dependensi) digambarkan lengkap dengan multiplisitas.
- Semua operasi yang dipanggil pada sequence diagram 3.1.2 (skenario normal dan alternatif) ada pada kelas yang bersangkutan.
- Kelas yang sama dengan kelas di use case lain memakai nama, atribut, dan metode yang konsisten.

## 3.2 Use Case 2

Silahkan lanjutkan untuk  *use case* berikutnya dengan content yang sama dengan 3.1

<br>

## 3.3 Use Case Mengirim Laporan Gangguan

**ID Use Case:** *UC03*\
**Nama Use Case:** *Mengirim Laporan Gangguan*\
**Aktor:** Warga\
**Kebutuhan fungsional:** KF07, KF08, KF09, KF10.

### 3.3.1 Identifikasi Kelas

Tabel 3.3. Identifikasi Kelas Use Case UC03

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
| --- | --- | --- |
| 1 | Warga | C02 Warga |
| 2 | LaporanGangguan | C20 LaporanGangguan |
| 3 | StatusLaporan | C21 StatusLaporan |
| 4 | WargaView | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 5 | LaporanController | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 6 | Validasi | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 7 | ModulLaporan | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 8 | ModulAkun | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 9 | DataAkunBoundary | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 10 | Database | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 11 | DataLaporanBoundary | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |

Kelas View, controller, `Validasi`, fasad modul, dan data boundary diturunkan dari komponen APL M6 Tabel 2.1 dan Tabel 3.1. View menangani interaksi, controller mengoordinasikan permintaan dari sesi, fasad menjalankan layanan domain, dan data boundary membatasi akses ke `Database`. Fasad modul dan `Database` merupakan kelas perancangan tambahan; tidak diberi ID analisis Cxx baru. `ModulAkun` dan `DataAkunBoundary` digunakan sebagai dependensi akun untuk memverifikasi keanggotaan; tambahan dependensi lintas modul ini dijelaskan dalam kontrak handoff.

### 3.3.2 Sequence Diagram

- **Skenario Normal**

Data formulir mencakup jenis gangguan, deskripsi, dan foto pendukung. Identitas warga serta komunitas berasal dari sesi terautentikasi. `ModulAkun` mengambil keadaan akun terbaru; pemeriksaan keanggotaan dilakukan pada domain sebelum objek laporan dibuat. Laporan baru ditetapkan berstatus `MENUNGGU`, disimpan, lalu diikuti notifikasi keberhasilan.

<p align="center">
<img alt="Gambar 3.3.N. Sequence Diagram UC03 — Skenario Normal" src="./assets/diagram/rionaldo/uc03-seq-normal.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.3.N. Sequence Diagram UC03 — Skenario Normal</i>
</p>

[Sumber draw.io editable](./assets/diagram/rionaldo/uc03-seq-normal.drawio) · [Ekspor SVG](./assets/diagram/rionaldo/uc03-seq-normal.svg)

- **Skenario Alternatif 1: Warga Tidak Terdaftar**

Keanggotaan warga tidak memenuhi komunitas terkait. Sistem menolak pengiriman dengan pesan tidak memiliki otorisasi; objek laporan tidak dibuat dan penyimpanan tidak dipanggil.

<p align="center">
<img alt="Gambar 3.3.A1. Sequence Diagram UC03 — Warga Tidak Terdaftar" src="./assets/diagram/rionaldo/uc03-seq-alt1.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.3.A1. Sequence Diagram UC03 — Warga Tidak Terdaftar</i>
</p>

[Sumber draw.io editable](./assets/diagram/rionaldo/uc03-seq-alt1.drawio) · [Ekspor SVG](./assets/diagram/rionaldo/uc03-seq-alt1.svg)

### 3.3.3 Diagram Kelas

<p align="center">
<img alt="Gambar 3.3.K. Diagram Kelas UC03" src="./assets/diagram/rionaldo/uc03-class.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.3.K. Diagram Kelas UC03</i>
</p>

[Sumber draw.io editable](./assets/diagram/rionaldo/uc03-class.drawio) · [Ekspor SVG](./assets/diagram/rionaldo/uc03-class.svg)

Tipe `FormLaporan`, `FormPemeliharaan`, `HasilValidasi`, `HasilLaporan`, `HasilStatus`, `HasilPemeliharaan`, `DetailLaporan`, `RingkasanStatus`, dan `Tampilan` adalah record/nilai perancangan sesuai konteks operasi, bukan kelas analisis baru. Identitas pelaku berasal dari `KonteksSesi`. Definisi lengkap disertakan pada kontrak kelas pendamping.

Atribut dan operasi ditampilkan langsung pada kompartemen kelas dengan visibilitas, parameter, dan tipe data. Kelas yang digunakan lintas UC mengambil signature dari satu registri desain. Garis asosiasi memakai multiplisitas; dependensi layanan dan penggunaan enumerasi menggunakan panah putus-putus. Identitas Cxx mengikuti SKPL.

**Rujukan:** SKPL M5 §§4.4.3 / 5.2.3, §4.2, §6.1–6.2; APL M6 Tabel 2.1 dan Tabel 3.1; PDF Asistensi Akbar M7 hlm. 4–12. Nomor caption memakai identitas subbab dan skenario agar tidak berbenturan dengan gambar UC anggota lain.


<br>

## 3.4 Use Case Menelusuri Status Laporan Gangguan

**ID Use Case:** *UC04*\
**Nama Use Case:** *Menelusuri Status Laporan Gangguan*\
**Aktor:** Warga\
**Kebutuhan fungsional:** KF11, KF34.

### 3.4.1 Identifikasi Kelas

Tabel 3.4. Identifikasi Kelas Use Case UC04

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
| --- | --- | --- |
| 1 | Warga | C02 Warga |
| 2 | LaporanGangguan | C20 LaporanGangguan |
| 3 | RiwayatStatusLaporan | C22 RiwayatStatusLaporan |
| 4 | WargaView | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 5 | LaporanController | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 6 | ModulLaporan | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 7 | DataLaporanBoundary | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 8 | Database | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 9 | StatusLaporan | C21 StatusLaporan |

Kelas View, controller, `Validasi`, fasad modul, dan data boundary diturunkan dari komponen APL M6 Tabel 2.1 dan Tabel 3.1. View menangani interaksi, controller mengoordinasikan permintaan dari sesi, fasad menjalankan layanan domain, dan data boundary membatasi akses ke `Database`. Fasad modul dan `Database` merupakan kelas perancangan tambahan; tidak diberi ID analisis Cxx baru.

`StatusLaporan` (C21) ditambahkan sebagai dependensi tipe untuk atribut status C20/C22; C21 bukan kelas analisis tambahan pada daftar UC04 SKPL §5.2.4.

### 3.4.2 Sequence Diagram

- **Skenario Normal**

Pencarian daftar, detail, dan riwayat selalu menyertakan `idWarga` dari sesi pada predikat akses data. Riwayat ditampilkan bersama timestamp yang diurutkan menaik. Pemilihan ID laporan dari antarmuka tidak boleh menghilangkan pembatasan pemilik pada server.

<p align="center">
<img alt="Gambar 3.4.N. Sequence Diagram UC04 — Skenario Normal" src="./assets/diagram/rionaldo/uc04-seq-normal.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.4.N. Sequence Diagram UC04 — Skenario Normal</i>
</p>

[Sumber draw.io editable](./assets/diagram/rionaldo/uc04-seq-normal.drawio) · [Ekspor SVG](./assets/diagram/rionaldo/uc04-seq-normal.svg)

- **Skenario Alternatif 1: Laporan Tidak Ditemukan**

Pencarian berdasarkan identitas warga menghasilkan daftar kosong. Sistem menampilkan informasi bahwa belum ada laporan gangguan yang dapat ditampilkan.

<p align="center">
<img alt="Gambar 3.4.A1. Sequence Diagram UC04 — Laporan Tidak Ditemukan" src="./assets/diagram/rionaldo/uc04-seq-alt1.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.4.A1. Sequence Diagram UC04 — Laporan Tidak Ditemukan</i>
</p>

[Sumber draw.io editable](./assets/diagram/rionaldo/uc04-seq-alt1.drawio) · [Ekspor SVG](./assets/diagram/rionaldo/uc04-seq-alt1.svg)

### 3.4.3 Diagram Kelas

<p align="center">
<img alt="Gambar 3.4.K. Diagram Kelas UC04" src="./assets/diagram/rionaldo/uc04-class.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.4.K. Diagram Kelas UC04</i>
</p>

[Sumber draw.io editable](./assets/diagram/rionaldo/uc04-class.drawio) · [Ekspor SVG](./assets/diagram/rionaldo/uc04-class.svg)

Tipe `FormLaporan`, `FormPemeliharaan`, `HasilValidasi`, `HasilLaporan`, `HasilStatus`, `HasilPemeliharaan`, `DetailLaporan`, `RingkasanStatus`, dan `Tampilan` adalah record/nilai perancangan sesuai konteks operasi, bukan kelas analisis baru. Identitas pelaku berasal dari `KonteksSesi`. Definisi lengkap disertakan pada kontrak kelas pendamping.

Atribut dan operasi ditampilkan langsung pada kompartemen kelas dengan visibilitas, parameter, dan tipe data. Kelas yang digunakan lintas UC mengambil signature dari satu registri desain. Garis asosiasi memakai multiplisitas; dependensi layanan dan penggunaan enumerasi menggunakan panah putus-putus. Identitas Cxx mengikuti SKPL.

**Rujukan:** SKPL M5 §§4.4.4 / 5.2.4, §4.2, §6.1–6.2; APL M6 Tabel 2.1 dan Tabel 3.1; PDF Asistensi Akbar M7 hlm. 4–12. Diagram normal memuat seluruh langkah dalam satu urutan; gunakan SVG pada zoom 100% untuk membaca diagram panjang. Nomor caption memakai identitas subbab dan skenario agar tidak berbenturan dengan gambar UC anggota lain.


<br>

## 3.5 Use Case 5

Silahkan lanjutkan untuk  *use case* berikutnya dengan content yang sama dengan 3.1

<br>

## 3.6 Use Case 6

Silahkan lanjutkan untuk  *use case* berikutnya dengan content yang sama dengan 3.1

<br>

## 3.7 Use Case Memperbarui Status Penanganan Gangguan

**ID Use Case:** *UC07*\
**Nama Use Case:** *Memperbarui Status Penanganan Gangguan*\
**Aktor:** Teknisi\
**Kebutuhan fungsional:** KF12, KF17, KF18, KF19, KF35.

### 3.7.1 Identifikasi Kelas

Tabel 3.7. Identifikasi Kelas Use Case UC07

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
| --- | --- | --- |
| 1 | Teknisi | C03 Teknisi |
| 2 | LaporanGangguan | C20 LaporanGangguan |
| 3 | PenugasanLaporan | C24 PenugasanLaporan |
| 4 | RiwayatStatusLaporan | C22 RiwayatStatusLaporan |
| 5 | StatusLaporan | C21 StatusLaporan |
| 6 | TeknisiView | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 7 | LaporanController | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 8 | ModulLaporan | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 9 | DataLaporanBoundary | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 10 | Database | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |

Kelas View, controller, `Validasi`, fasad modul, dan data boundary diturunkan dari komponen APL M6 Tabel 2.1 dan Tabel 3.1. View menangani interaksi, controller mengoordinasikan permintaan dari sesi, fasad menjalankan layanan domain, dan data boundary membatasi akses ke `Database`. Fasad modul dan `Database` merupakan kelas perancangan tambahan; tidak diberi ID analisis Cxx baru.

### 3.7.2 Sequence Diagram

- **Skenario Normal**

Daftar dan detail tugas dibatasi menurut identitas teknisi pada sesi. Domain memverifikasi penugasan sebelum memeriksa transisi status. Transisi sah hanya `MENUNGGU → SEDANG_DIPERBAIKI → SELESAI`; status tetap, lompatan, dan perpindahan mundur ditolak. Status dan riwayat bertimestamp disimpan dalam satu transaksi.

<p align="center">
<img alt="Gambar 3.7.N. Sequence Diagram UC07 — Skenario Normal" src="./assets/diagram/rionaldo/uc07-seq-normal.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.7.N. Sequence Diagram UC07 — Skenario Normal</i>
</p>

[Sumber draw.io editable](./assets/diagram/rionaldo/uc07-seq-normal.drawio) · [Ekspor SVG](./assets/diagram/rionaldo/uc07-seq-normal.svg)

- **Skenario Alternatif 1: Teknisi Tidak Berwenang**

Penugasan yang sesuai tidak ditemukan. Sistem menolak perubahan dan menampilkan pesan tidak berwenang; status dan riwayat tidak berubah.

<p align="center">
<img alt="Gambar 3.7.A1. Sequence Diagram UC07 — Teknisi Tidak Berwenang" src="./assets/diagram/rionaldo/uc07-seq-alt1.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.7.A1. Sequence Diagram UC07 — Teknisi Tidak Berwenang</i>
</p>

[Sumber draw.io editable](./assets/diagram/rionaldo/uc07-seq-alt1.drawio) · [Ekspor SVG](./assets/diagram/rionaldo/uc07-seq-alt1.svg)

- **Skenario Alternatif 2: Perubahan Status Tidak Valid**

Setelah penugasan dipastikan sesuai, domain mendeteksi transisi yang tidak sah. Sistem menolak perubahan dan menampilkan pilihan status berikutnya yang legal; status dan riwayat tidak berubah.

<p align="center">
<img alt="Gambar 3.7.A2. Sequence Diagram UC07 — Perubahan Status Tidak Valid" src="./assets/diagram/rionaldo/uc07-seq-alt2.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.7.A2. Sequence Diagram UC07 — Perubahan Status Tidak Valid</i>
</p>

[Sumber draw.io editable](./assets/diagram/rionaldo/uc07-seq-alt2.drawio) · [Ekspor SVG](./assets/diagram/rionaldo/uc07-seq-alt2.svg)

### 3.7.3 Diagram Kelas

<p align="center">
<img alt="Gambar 3.7.K. Diagram Kelas UC07" src="./assets/diagram/rionaldo/uc07-class.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.7.K. Diagram Kelas UC07</i>
</p>

[Sumber draw.io editable](./assets/diagram/rionaldo/uc07-class.drawio) · [Ekspor SVG](./assets/diagram/rionaldo/uc07-class.svg)

Tipe `FormLaporan`, `FormPemeliharaan`, `HasilValidasi`, `HasilLaporan`, `HasilStatus`, `HasilPemeliharaan`, `DetailLaporan`, `RingkasanStatus`, dan `Tampilan` adalah record/nilai perancangan sesuai konteks operasi, bukan kelas analisis baru. Identitas pelaku berasal dari `KonteksSesi`. Definisi lengkap disertakan pada kontrak kelas pendamping.

Atribut dan operasi ditampilkan langsung pada kompartemen kelas dengan visibilitas, parameter, dan tipe data. Kelas yang digunakan lintas UC mengambil signature dari satu registri desain. Garis asosiasi memakai multiplisitas; dependensi layanan dan penggunaan enumerasi menggunakan panah putus-putus. Identitas Cxx mengikuti SKPL.

**Rujukan:** SKPL M5 §§4.4.7 / 5.2.7, §4.2, §6.1–6.2; APL M6 Tabel 2.1 dan Tabel 3.1; PDF Asistensi Akbar M7 hlm. 4–12. Diagram normal memuat seluruh langkah dalam satu urutan; gunakan SVG pada zoom 100% untuk membaca diagram panjang. Nomor caption memakai identitas subbab dan skenario agar tidak berbenturan dengan gambar UC anggota lain.


<br>

## 3.8 Use Case Mencatat Kegiatan Pemeliharaan

**ID Use Case:** *UC08*\
**Nama Use Case:** *Mencatat Kegiatan Pemeliharaan*\
**Aktor:** Teknisi\
**Kebutuhan fungsional:** KF20, KF21.

### 3.8.1 Identifikasi Kelas

Tabel 3.8. Identifikasi Kelas Use Case UC08

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
| --- | --- | --- |
| 1 | Teknisi | C03 Teknisi |
| 2 | Perangkat | C07 Perangkat |
| 3 | CatatanPemeliharaan | C27 CatatanPemeliharaan |
| 4 | TeknisiView | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 5 | PemeliharaanController | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 6 | Validasi | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 7 | ModulPemeliharaan | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 8 | DataPerangkatBoundary | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |
| 9 | Database | — (kelas desain tambahan, tidak ada padanan kelas analisis Cxx) |

Kelas View, controller, `Validasi`, fasad modul, dan data boundary diturunkan dari komponen APL M6 Tabel 2.1 dan Tabel 3.1. View menangani interaksi, controller mengoordinasikan permintaan dari sesi, fasad menjalankan layanan domain, dan data boundary membatasi akses ke `Database`. Fasad modul dan `Database` merupakan kelas perancangan tambahan; tidak diberi ID analisis Cxx baru.

### 3.8.2 Sequence Diagram

- **Skenario Normal**

Formulir memuat ID perangkat, waktu pelaksanaan, tindakan, dan catatan hasil. Kelengkapan diperiksa sebelum domain membuat catatan. Catatan yang berhasil disimpan mengikat identitas teknisi, identitas perangkat, dan waktu pelaksanaan sehingga dapat ditelusuri kembali.

<p align="center">
<img alt="Gambar 3.8.N. Sequence Diagram UC08 — Skenario Normal" src="./assets/diagram/rionaldo/uc08-seq-normal.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.8.N. Sequence Diagram UC08 — Skenario Normal</i>
</p>

[Sumber draw.io editable](./assets/diagram/rionaldo/uc08-seq-normal.drawio) · [Ekspor SVG](./assets/diagram/rionaldo/uc08-seq-normal.svg)

- **Skenario Alternatif 1: Formulir Tidak Lengkap**

Validasi menemukan kolom wajib yang kosong. Sistem membatalkan penyimpanan, mempertahankan isian, dan menandai kolom yang harus dilengkapi.

<p align="center">
<img alt="Gambar 3.8.A1. Sequence Diagram UC08 — Formulir Tidak Lengkap" src="./assets/diagram/rionaldo/uc08-seq-alt1.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.8.A1. Sequence Diagram UC08 — Formulir Tidak Lengkap</i>
</p>

[Sumber draw.io editable](./assets/diagram/rionaldo/uc08-seq-alt1.drawio) · [Ekspor SVG](./assets/diagram/rionaldo/uc08-seq-alt1.svg)

### 3.8.3 Diagram Kelas

<p align="center">
<img alt="Gambar 3.8.K. Diagram Kelas UC08" src="./assets/diagram/rionaldo/uc08-class.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.8.K. Diagram Kelas UC08</i>
</p>

[Sumber draw.io editable](./assets/diagram/rionaldo/uc08-class.drawio) · [Ekspor SVG](./assets/diagram/rionaldo/uc08-class.svg)

Tipe `FormLaporan`, `FormPemeliharaan`, `HasilValidasi`, `HasilLaporan`, `HasilStatus`, `HasilPemeliharaan`, `DetailLaporan`, `RingkasanStatus`, dan `Tampilan` adalah record/nilai perancangan sesuai konteks operasi, bukan kelas analisis baru. Identitas pelaku berasal dari `KonteksSesi`. Definisi lengkap disertakan pada kontrak kelas pendamping.

Atribut dan operasi ditampilkan langsung pada kompartemen kelas dengan visibilitas, parameter, dan tipe data. Kelas yang digunakan lintas UC mengambil signature dari satu registri desain. Garis asosiasi memakai multiplisitas; dependensi layanan dan penggunaan enumerasi menggunakan panah putus-putus. Identitas Cxx mengikuti SKPL.

**Rujukan:** SKPL M5 §§4.4.8 / 5.2.8, §4.2, §6.1–6.2; APL M6 Tabel 2.1 dan Tabel 3.1; PDF Asistensi Akbar M7 hlm. 4–12. Nomor caption memakai identitas subbab dan skenario agar tidak berbenturan dengan gambar UC anggota lain.

## 3.9 Use Case Menganalisis Pemakaian Komunal
 
**ID Use Case:** *UC09*  
**Nama Use Case:** *Menganalisis Pemakaian Komunal*
 
### 3.9.1 Identifikasi Kelas
 
Realisasi UC09 melewati jalur `PengurusView` → `IuranController` → `ModulIuran` → `DataIuranBoundary` sesuai Tabel 3.1 dokumen APL. Kelas *boundary*, *control*, dan *repository* adalah kelas perancangan baru yang berasal dari komponen APL, sehingga tidak memiliki kelas analisis.
 
Tabel 3.9. Identifikasi Kelas Use Case UC09
 
| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | `PengurusView` «boundary» | — (komponen *PengurusView*, APL Tabel 2.1) |
| 2 | `IuranController` «control» | — (komponen *IuranController*, APL Tabel 2.1) |
| 3 | `Validasi` «utility» | — (komponen *Validasi*, APL Tabel 2.1) |
| 4 | `DataIuranBoundary` «repository» | — (komponen *DataIuranBoundary*, APL Tabel 2.1) |
| 5 | `Akun` «entity» | C01 – Akun |
| 6 | `Pengurus` «entity» | C04 – Pengurus |
| 7 | `Periode` «entity» | C14 – Periode |
| 8 | `DataPemakaian` «entity» | C15 – DataPemakaian |
 
### 3.9.2 Sequence Diagram
 
- **Skenario Normal**
Pengurus membuka dashboard administratif, lalu `IuranController` memeriksa kewenangan melalui `Pengurus.verifikasiKewenangan()`. Setelah pengurus memilih periode, `Validasi` memeriksa periode. `DataIuranBoundary` mengambil `Periode` dan `DataPemakaian` pada periode itu (KF24), dan `IuranController` menghitung agregat air dan energi. View menampilkan agregat dan riwayat pemakaian (KF22).
 
<p align="center">
<img alt="Sequence Diagram UC09 - Skenario Normal" src="./assets/diagram/UC09-seq-normal.png" width="70%">
</p>
<p align="center">
<i>Gambar 3.9.1. Sequence Diagram UC09 - Skenario Normal</i>
</p>

- **Skenario Alternatif 1: Pengguna Bukan Pengurus**
Warga atau Teknisi membuka dashboard administratif. `IuranController.periksaKewenangan()` mendeteksi bahwa akun bukan `Pengurus` dan mengembalikan `false`. Akses ditolak dan tidak ada data yang diambil dari `DataIuranBoundary` (KF23, KNF01, KNF02).
 
<p align="center">
<img alt="Sequence Diagram UC09 - Alternatif 1" src="./assets/diagram/UC09-seq-alt1.png" width="55%">
</p>
<p align="center">
<i>Gambar 3.9.2. Sequence Diagram UC09 - Pengguna Bukan Pengurus</i>
</p>

### 3.9.3 Diagram Kelas
 
<p align="center">
<img alt="Diagram Kelas UC09" src="./assets/diagram/UC09-class.png" width="90%">
</p>
<p align="center">
<i>Gambar 3.9.3. Diagram Kelas UC09 - Menganalisis Pemakaian Komunal</i>
</p>
---
 
## 3.10 Use Case Menghitung dan Menetapkan Iuran Warga
 
**ID Use Case:** *UC10*  
**Nama Use Case:** *Menghitung dan Menetapkan Iuran Warga*
 
### 3.10.1 Identifikasi Kelas
 
UC10 memiliki relasi `<<include>> UC09` dan `<<extend>> UC02` (SKPL). `DataPemakaian` dan `Periode` dipakai ulang dengan definisi yang sama seperti di UC09. `KalkulatorIuran` (C19) adalah *domain service* di `ModulIuran`; `IuranController` hanya mendelegasikan ke service ini.
 
Tabel 3.10. Identifikasi Kelas Use Case UC10
 
| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | `PengurusView` «boundary» | — (komponen *PengurusView*, APL Tabel 2.1) |
| 2 | `IuranController` «control» | — (komponen *IuranController*, APL Tabel 2.1) |
| 3 | `Validasi` «utility» | — (komponen *Validasi*, APL Tabel 2.1) |
| 4 | `DataIuranBoundary` «repository» | — (komponen *DataIuranBoundary*, APL Tabel 2.1) |
| 5 | `KalkulatorIuran` «service» | C19 – KalkulatorIuran |
| 6 | `Pengurus` «entity» | C04 – Pengurus |
| 7 | `Periode` «entity» | C14 – Periode |
| 8 | `DataPemakaian` «entity» | C15 – DataPemakaian |
| 9 | `AturanTarif` «entity» | C16 – AturanTarif |
| 10 | `Tagihan` «entity» | C17 – Tagihan |
| 11 | `StatusTagihan` «enumeration» | C18 – StatusTagihan |
| 12 | `Warga` «entity» | C02 – Warga |
 
### 3.10.2 Sequence Diagram
 
- **Skenario Normal**
Pengurus memilih periode. Setelah `Validasi` dan `KalkulatorIuran.validasiKelengkapan()` lolos, `KalkulatorIuran.pratinjau()` mengambil satu `AturanTarif` untuk periode itu dan memakainya untuk seluruh warga (KF28). Tiap `Tagihan` dibuat berstatus `DRAFT` dan dihitung lewat `hitungTotal()` (KF25, KF33). Hasilnya ditampilkan sebagai pratinjau (KF26). Saat pengurus menekan "Tetapkan Final", `KalkulatorIuran.validasiKewenangan()` memeriksa kewenangan (KF27). Setelah itu semua `Tagihan` dan `Periode` ditandai `FINAL` dan disimpan, lalu notifikasi berhasil ditampilkan.
 
<p align="center">
<img alt="Sequence Diagram UC10 - Skenario Normal" src="./assets/diagram/UC10-seq-normal.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.10.1. Sequence Diagram UC10 - Skenario Normal</i>
</p>

- **Skenario Alternatif 1: Pengurus Tidak Berwenang**
`Pengurus.verifikasiKewenangan()` mengembalikan `false`, sehingga penetapan final ditolak dan pesan otorisasi ditampilkan. Tidak ada `Tagihan` atau `Periode` yang berubah.
 
<p align="center">
<img alt="Sequence Diagram UC10 - Alternatif 1" src="./assets/diagram/UC10-seq-alt1.png" width="60%">
</p>
<p align="center">
<i>Gambar 3.10.2. Sequence Diagram UC10 - Pengurus Tidak Berwenang</i>
</p>

- **Skenario Alternatif 2: Data Pemakaian Belum Lengkap**
`DataPemakaian.isLengkap()` mengembalikan `false` untuk sebagian warga. `KalkulatorIuran.validasiKelengkapan()` mengembalikan `false`, perhitungan dihentikan sebelum `Tagihan` dibuat, dan pengurus diminta melengkapi data terlebih dahulu.
 
<p align="center">
<img alt="Sequence Diagram UC10 - Alternatif 2" src="./assets/diagram/UC10-seq-alt2.png" width="70%">
</p>
<p align="center">
<i>Gambar 3.10.3. Sequence Diagram UC10 - Data Pemakaian Belum Lengkap</i>
</p>

### 3.10.3 Diagram Kelas
 
<p align="center">
<img alt="Diagram Kelas UC10" src="./assets/diagram/UC10-class.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.10.4. Diagram Kelas UC10 - Menghitung dan Menetapkan Iuran Warga</i>
</p>
---
 
## 3.11 Use Case Membuat Rekapitulasi Pemakaian dan Iuran
 
**ID Use Case:** *UC11*  
**Nama Use Case:** *Membuat Rekapitulasi Pemakaian dan Iuran*
 
### 3.11.1 Identifikasi Kelas
 
Tabel 3.11. Identifikasi Kelas Use Case UC11
 
| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | `PengurusView` «boundary» | — (komponen *PengurusView*, APL Tabel 2.1) |
| 2 | `IuranController` «control» | — (komponen *IuranController*, APL Tabel 2.1) |
| 3 | `Validasi` «utility» | — (komponen *Validasi*, APL Tabel 2.1) |
| 4 | `DataIuranBoundary` «repository» | — (komponen *DataIuranBoundary*, APL Tabel 2.1) |
| 5 | `Pengurus` «entity» | C04 – Pengurus |
| 6 | `Periode` «entity» | C14 – Periode |
| 7 | `DataPemakaian` «entity» | C15 – DataPemakaian |
| 8 | `Tagihan` «entity» | C17 – Tagihan |
| 9 | `StatusTagihan` «enumeration» | C18 – StatusTagihan |
| 10 | `Rekapitulasi` «entity» | C28 – Rekapitulasi |
 
### 3.11.2 Sequence Diagram
 
- **Skenario Normal**
Pengurus membuka menu rekapitulasi. Kewenangan diperiksa lewat `Pengurus.verifikasiKewenangan()` dan daftar periode ditampilkan (KF29, KF31). Setelah periode dipilih, `IuranController` memastikan data final dengan `Periode.isFinal()` dan `Tagihan.sudahFinal()` untuk setiap tagihan (KF32). Saat pengurus memilih "buat rekapitulasi", `Pengurus.buatRekapitulasi()` memanggil `Rekapitulasi.generate(periode)`, yang menjumlahkan `DataPemakaian` dan `Tagihan` periode itu (KF30). Terakhir, pengurus memilih ekspor (PDF atau CSV, KNF10) atau cetak.
 
<p align="center">
<img alt="Sequence Diagram UC11 - Skenario Normal" src="./assets/diagram/UC11-seq-normal.png" width="85%">
</p>
<p align="center">
<i>Gambar 3.11.1. Sequence Diagram UC11 - Skenario Normal</i>
</p>

- **Skenario Alternatif 1: Data Belum Final**
`Periode.isFinal()` bernilai `false`, atau periode sudah final tetapi masih ada `Tagihan` yang `sudahFinal()` bernilai `false`. `Rekapitulasi.generate()` tidak dipanggil, dan pengurus diberi informasi bahwa rekapitulasi hanya dapat dibuat dari data final.
 
<p align="center">
<img alt="Sequence Diagram UC11 - Alternatif 1" src="./assets/diagram/UC11-seq-alt1.png" width="70%">
</p>
<p align="center">
<i>Gambar 3.11.2. Sequence Diagram UC11 - Data Belum Final</i>
</p>

- **Skenario Alternatif 2: Pengguna Tidak Berwenang**
Pengguna bukan pengurus (Warga atau Teknisi) mencoba membuka menu rekapitulasi. `IuranController.periksaKewenangan()` mengembalikan `false` dan akses ditolak (KF31, KNF01).
 
<p align="center">
<img alt="Sequence Diagram UC11 - Alternatif 2" src="./assets/diagram/UC11-seq-alt2.png" width="55%">
</p>
<p align="center">
<i>Gambar 3.11.3. Sequence Diagram UC11 - Pengguna Tidak Berwenang</i>
</p>

### 3.11.3 Diagram Kelas
 
<p align="center">
<img alt="Diagram Kelas UC11" src="./assets/diagram/UC11-class.png" width="100%">
</p>
<p align="center">
<i>Gambar 3.11.4. Diagram Kelas UC11 - Membuat Rekapitulasi Pemakaian dan Iuran</i>
</p>

</br>

## 3.12 Use Case 12

Silahkan lanjutkan untuk  *use case* berikutnya dengan content yang sama dengan 3.1

<br>

## 3.13 Use Case 13

Silahkan lanjutkan untuk  *use case* berikutnya dengan content yang sama dengan 3.1

<br>

## 3.14 Use Case 14

Silahkan lanjutkan untuk  *use case* berikutnya dengan content yang sama dengan 3.1

<br>

## 3.2 Use Case XX

Silahkan lanjutkan untuk  *use case* berikutnya dengan content yang sama dengan 3.1

<br>



---

# BAB 4: Diagram Kelas Keseluruhan

## 4.1 Diagram Kelas

<p align="center">
<img alt="Diagram Kelas Perancangan Keseluruhan Fajar Tech" src="./assets/diagram/overall-class.png" width="100%">
</p>
<p align="center">
<i>Gambar 4.1. Diagram Kelas Perancangan Keseluruhan Fajar Tech</i>
</p>

Tabel 4.1. Daftar Kelas Perancangan Keseluruhan

| ID Kelas | Nama Kelas | Atribut | Metode/Operasi |
| :--- | :--- | :--- | :--- |
| C01 | Akun | email, password, nama, statusAkun | cocokKredensial(email, password), sudahDisetujui(), dashboardTujuan() {abstract} |
| C02 | Warga | idWarga, nama | pantauPemantauan(), lihatTagihan(), lihatRiwayatLaporan() |
| C03 | Teknisi | idTeknisi, nama, kontak | terimaNotifikasi(), ubahStatusLaporan(), pilihRentangWaktu() |
| C04 | Pengurus | idPengurus, nama | verifikasiKewenangan(), hitungIuran(periode), tetapkanFinal(periode), buatRekapitulasi() |
| C05 | CalonPengguna | nama, email, password, peranPilihan | daftarkan(): Akun |
| C06 | StatusAkun | MENUNGGU, DISETUJUI, DITOLAK | — |
| C07 | Perangkat | idPerangkat, nama, lokasi | statusTerbaru() {abstract}, pembacaanTerakhir() |
| C08 | TangkiAir | idTangki, volumeLiter, ambangRendah, ambangKritis | statusAir(), statusTerbaru() |
| C09 | Baterai | idBaterai, kapasitasPersen, ambangBatasAman | cekKapasitas(), kapasitas() |
| C10 | PanelSurya | idPanel, dayaWatt, kapasitas, lokasi | dayaSaatIni(), getDataKinerja() |
| C11 | PembacaanSensor | idPembacaan, nilai, satuan, waktu | catat() |
| C12 | DataHistorisKinerja | idData, waktu, dayaDihasilkan, energi | ambilBerdasarkanRentang(r: RentangWaktu) |
| C13 | RentangWaktu | waktuMulai, waktuSelesai | validasi() |
| C14 | Periode | idPeriode, bulan, tahun, statusFinal | isFinal(), tandaiFinal() |
| C15 | DataPemakaian | idPemakaian, idWarga, volumeAirM3, energiKWh, waktuCatat | isLengkap() |
| C16 | AturanTarif | idAturan, tarifAirPerM3, tarifEnergiPerKWh, biayaTetap, periodeId | terapkan(volume, energi), isValidUntukPeriode() |
| C17 | Tagihan | idTagihan, idWarga, idPeriode, jumlahIuran, dataPemakaianDasar, status | hitungTotal(), sudahFinal(), rincian(), tetapkanFinal() |
| C18 | StatusTagihan | DRAFT, FINAL | — |
| C19 | KalkulatorIuran | — (service) | hitung(periode), pratinjau(periode), validasiKelengkapan(), validasiKewenangan(), tetapkanFinal() |
| C20 | LaporanGangguan | idLaporan, jenisGangguan, deskripsi, status, waktuDibuat | ubahStatus(s), simpan() |
| C21 | StatusLaporan | MENUNGGU, SEDANG_DIPERBAIKI, SELESAI | — |
| C22 | RiwayatStatusLaporan | idRiwayat, status, timestamp | catat() |
| C23 | PenugasanPerangkat | idPenugasan, idTeknisi, idPerangkat | verifikasiTanggungJawab() |
| C24 | PenugasanLaporan | idPenugasan, idTeknisi, idLaporan, waktuPenugasan | verifikasi() |
| C25 | Notifikasi | idNotifikasi, pesan, waktu, statusBaca | kirim(), tandaiDibaca() |
| C26 | PeringatanDayaKritis | level, kapasitasSaatIni | — (inherit kirim()) |
| C27 | CatatanPemeliharaan | idCatatan, waktuPelaksanaan, tindakan, catatanHasil | simpan(), validasi() |
| C28 | Rekapitulasi | idRekap, idPeriode, totalPemakaianAir, totalPemakaianEnergi, totalIuran | generate(periode), ekspor(), cetak() |

<br>

---

# BAB 5: Matriks Kerunutan

Matriks kerunutan ini memetakan kelas perancangan ke use case yang direalisasikannya, dan sebaliknya. Acuan utama adalah Tabel 6.1 SKPL M5 (kelas analisis → use case), disesuaikan dengan Tabel 3.x pada BAB 3 dan Tabel 4.1 pada BAB 4 DPPL ini. Komponen perancangan tanpa ID Cxx diturunkan dari Tabel 2.1 dan Tabel 3.1 dokumen APL M6. Penomoran ID mengikuti §1.4.

## 5.1 Kelas Analisis terhadap Use Case

Tabel 5.1. Matriks Kerunutan Kelas Analisis (C01–C28) terhadap Use Case

| Kelas | Use Case Terkait |
| :--- | :--- |
| C01 – Akun | UC09 – Menganalisis Pemakaian Komunal; UC12 – Melakukan Registrasi Akun; UC13 – Melakukan Login Akun; UC14 – Mengelola Persetujuan Akun |
| C02 – Warga | UC01 – Memantau Ketersediaan Air dan Energi; UC02 – Melihat Tagihan Iuran Final; UC03 – Mengirim Laporan Gangguan; UC04 – Menelusuri Status Laporan Gangguan; UC10 – Menghitung dan Menetapkan Iuran Warga; UC12 – Melakukan Registrasi Akun; UC13 – Melakukan Login Akun |
| C03 – Teknisi | UC05 – Menerima Peringatan Dini Daya Kritis; UC06 – Memantau Riwayat Kinerja Panel Surya; UC07 – Memperbarui Status Penanganan Gangguan; UC08 – Mencatat Kegiatan Pemeliharaan; UC12 – Melakukan Registrasi Akun; UC13 – Melakukan Login Akun |
| C04 – Pengurus | UC09 – Menganalisis Pemakaian Komunal; UC10 – Menghitung dan Menetapkan Iuran Warga; UC11 – Membuat Rekapitulasi Pemakaian dan Iuran; UC12 – Melakukan Registrasi Akun; UC13 – Melakukan Login Akun; UC14 – Mengelola Persetujuan Akun |
| C05 – CalonPengguna | UC12 – Melakukan Registrasi Akun |
| C06 – StatusAkun | UC12 – Melakukan Registrasi Akun; UC13 – Melakukan Login Akun; UC14 – Mengelola Persetujuan Akun |
| C07 – Perangkat | UC01 – Memantau Ketersediaan Air dan Energi; UC05 – Menerima Peringatan Dini Daya Kritis; UC06 – Memantau Riwayat Kinerja Panel Surya; UC08 – Mencatat Kegiatan Pemeliharaan |
| C08 – TangkiAir | UC01 – Memantau Ketersediaan Air dan Energi |
| C09 – Baterai | UC01 – Memantau Ketersediaan Air dan Energi; UC05 – Menerima Peringatan Dini Daya Kritis |
| C10 – PanelSurya | UC01 – Memantau Ketersediaan Air dan Energi; UC06 – Memantau Riwayat Kinerja Panel Surya |
| C11 – PembacaanSensor | UC01 – Memantau Ketersediaan Air dan Energi |
| C12 – DataHistorisKinerja | UC06 – Memantau Riwayat Kinerja Panel Surya |
| C13 – RentangWaktu | UC06 – Memantau Riwayat Kinerja Panel Surya |
| C14 – Periode | UC02 – Melihat Tagihan Iuran Final; UC09 – Menganalisis Pemakaian Komunal; UC10 – Menghitung dan Menetapkan Iuran Warga; UC11 – Membuat Rekapitulasi Pemakaian dan Iuran |
| C15 – DataPemakaian | UC09 – Menganalisis Pemakaian Komunal; UC10 – Menghitung dan Menetapkan Iuran Warga; UC11 – Membuat Rekapitulasi Pemakaian dan Iuran |
| C16 – AturanTarif | UC10 – Menghitung dan Menetapkan Iuran Warga |
| C17 – Tagihan | UC02 – Melihat Tagihan Iuran Final; UC10 – Menghitung dan Menetapkan Iuran Warga; UC11 – Membuat Rekapitulasi Pemakaian dan Iuran |
| C18 – StatusTagihan | UC10 – Menghitung dan Menetapkan Iuran Warga; UC11 – Membuat Rekapitulasi Pemakaian dan Iuran |
| C19 – KalkulatorIuran | UC10 – Menghitung dan Menetapkan Iuran Warga |
| C20 – LaporanGangguan | UC03 – Mengirim Laporan Gangguan; UC04 – Menelusuri Status Laporan Gangguan; UC07 – Memperbarui Status Penanganan Gangguan |
| C21 – StatusLaporan | UC03 – Mengirim Laporan Gangguan; UC04 – Menelusuri Status Laporan Gangguan; UC07 – Memperbarui Status Penanganan Gangguan |
| C22 – RiwayatStatusLaporan | UC04 – Menelusuri Status Laporan Gangguan; UC07 – Memperbarui Status Penanganan Gangguan |
| C23 – PenugasanPerangkat | UC05 – Menerima Peringatan Dini Daya Kritis |
| C24 – PenugasanLaporan | UC07 – Memperbarui Status Penanganan Gangguan |
| C25 – Notifikasi | UC05 – Menerima Peringatan Dini Daya Kritis |
| C26 – PeringatanDayaKritis | UC05 – Menerima Peringatan Dini Daya Kritis |
| C27 – CatatanPemeliharaan | UC08 – Mencatat Kegiatan Pemeliharaan |
| C28 – Rekapitulasi | UC11 – Membuat Rekapitulasi Pemakaian dan Iuran |

Perbedaan terhadap Tabel 6.1 SKPL: `StatusLaporan` (C21) juga dipakai UC04 karena status terkini laporan ditampilkan pada penelusuran, dan `Akun` (C01) juga dipakai UC09 karena akun dipakai untuk memeriksa kewenangan Pengurus. Keduanya mengikuti Tabel 3.4 dan Tabel 3.9.

## 5.2 Kelas Perancangan Tambahan terhadap Use Case

Kelas berikut adalah kelas perancangan dari komponen APL (view, controller, modul domain, data boundary, `Validasi`, `Database`) yang tidak memiliki padanan kelas analisis Cxx.

Tabel 5.2. Matriks Kerunutan Kelas Perancangan Tambahan terhadap Use Case

| Kelas Perancangan | Jenis | Use Case Terkait |
| :--- | :--- | :--- |
| AuthView | View (Presentation) | UC12 – Melakukan Registrasi Akun; UC13 – Melakukan Login Akun |
| PengurusView | View (Presentation) | UC09 – Menganalisis Pemakaian Komunal; UC10 – Menghitung dan Menetapkan Iuran Warga; UC11 – Membuat Rekapitulasi Pemakaian dan Iuran; UC14 – Mengelola Persetujuan Akun |
| TeknisiView | View (Presentation) | UC05 – Menerima Peringatan Dini Daya Kritis; UC06 – Memantau Riwayat Kinerja Panel Surya; UC07 – Memperbarui Status Penanganan Gangguan; UC08 – Mencatat Kegiatan Pemeliharaan |
| WargaView | View (Presentation) | UC01 – Memantau Ketersediaan Air dan Energi; UC02 – Melihat Tagihan Iuran Final; UC03 – Mengirim Laporan Gangguan; UC04 – Menelusuri Status Laporan Gangguan |
| TelemetriAPI | API (Presentation) | UC01 – Memantau Ketersediaan Air dan Energi; UC05 – Menerima Peringatan Dini Daya Kritis; UC06 – Memantau Riwayat Kinerja Panel Surya |
| AkunController | Controller (Business) | UC12 – Melakukan Registrasi Akun; UC13 – Melakukan Login Akun; UC14 – Mengelola Persetujuan Akun |
| IuranController | Controller (Business) | UC02 – Melihat Tagihan Iuran Final; UC09 – Menganalisis Pemakaian Komunal; UC10 – Menghitung dan Menetapkan Iuran Warga; UC11 – Membuat Rekapitulasi Pemakaian dan Iuran |
| LaporanController | Controller (Business) | UC03 – Mengirim Laporan Gangguan; UC04 – Menelusuri Status Laporan Gangguan; UC07 – Memperbarui Status Penanganan Gangguan |
| MonitoringController | Controller (Business) | UC01 – Memantau Ketersediaan Air dan Energi; UC05 – Menerima Peringatan Dini Daya Kritis; UC06 – Memantau Riwayat Kinerja Panel Surya |
| PemeliharaanController | Controller (Business) | UC08 – Mencatat Kegiatan Pemeliharaan |
| Validasi | Utilitas (Business) | Seluruh use case (UC01–UC14) |
| ModulAkun | Modul domain (Business) | UC03 – Mengirim Laporan Gangguan; UC12 – Melakukan Registrasi Akun; UC13 – Melakukan Login Akun; UC14 – Mengelola Persetujuan Akun |
| ModulIuran | Modul domain (Business) | UC02 – Melihat Tagihan Iuran Final; UC09 – Menganalisis Pemakaian Komunal; UC10 – Menghitung dan Menetapkan Iuran Warga; UC11 – Membuat Rekapitulasi Pemakaian dan Iuran |
| ModulLaporan | Modul domain (Business) | UC03 – Mengirim Laporan Gangguan; UC04 – Menelusuri Status Laporan Gangguan; UC07 – Memperbarui Status Penanganan Gangguan |
| ModulMonitoring | Modul domain (Business) | UC01 – Memantau Ketersediaan Air dan Energi; UC05 – Menerima Peringatan Dini Daya Kritis; UC06 – Memantau Riwayat Kinerja Panel Surya |
| ModulNotifikasi | Modul domain (Business) | UC05 – Menerima Peringatan Dini Daya Kritis |
| ModulPemeliharaan | Modul domain (Business) | UC08 – Mencatat Kegiatan Pemeliharaan |
| DataAkunBoundary | Data boundary (Data Access) | UC03 – Mengirim Laporan Gangguan; UC12 – Melakukan Registrasi Akun; UC13 – Melakukan Login Akun; UC14 – Mengelola Persetujuan Akun |
| DataIuranBoundary | Data boundary (Data Access) | UC02 – Melihat Tagihan Iuran Final; UC09 – Menganalisis Pemakaian Komunal; UC10 – Menghitung dan Menetapkan Iuran Warga; UC11 – Membuat Rekapitulasi Pemakaian dan Iuran |
| DataLaporanBoundary | Data boundary (Data Access) | UC03 – Mengirim Laporan Gangguan; UC04 – Menelusuri Status Laporan Gangguan; UC07 – Memperbarui Status Penanganan Gangguan |
| DataPerangkatBoundary | Data boundary (Data Access) | UC01 – Memantau Ketersediaan Air dan Energi; UC05 – Menerima Peringatan Dini Daya Kritis; UC06 – Memantau Riwayat Kinerja Panel Surya; UC08 – Mencatat Kegiatan Pemeliharaan |
| Database | Database | Seluruh use case (UC01–UC14) |

`ModulAkun` dan `DataAkunBoundary` juga dipakai UC03 untuk memverifikasi keanggotaan warga (lihat Tabel 3.3), selain pada UC12–UC14. Semua controller memanggil `Validasi`, dan semua use case mengakses `Database` melalui data boundary terkait.

## 5.3 Use Case terhadap Kelas (Arah Sebaliknya)

Tabel 5.3. Matriks Kerunutan Use Case terhadap Kelas Analisis dan Komponen Perancangan

| Use Case | Kelas Analisis | Kelas Perancangan Tambahan |
| :--- | :--- | :--- |
| UC01 – Memantau Ketersediaan Air dan Energi | C02, C07, C08, C09, C10, C11 | WargaView, TelemetriAPI, MonitoringController, Validasi, ModulMonitoring, DataPerangkatBoundary, Database |
| UC02 – Melihat Tagihan Iuran Final | C02, C14, C17 | WargaView, IuranController, Validasi, ModulIuran, DataIuranBoundary, Database |
| UC03 – Mengirim Laporan Gangguan | C02, C20, C21 | WargaView, LaporanController, Validasi, ModulAkun, ModulLaporan, DataAkunBoundary, DataLaporanBoundary, Database |
| UC04 – Menelusuri Status Laporan Gangguan | C02, C20, C21, C22 | WargaView, LaporanController, Validasi, ModulLaporan, DataLaporanBoundary, Database |
| UC05 – Menerima Peringatan Dini Daya Kritis | C03, C07, C09, C23, C25, C26 | TeknisiView, TelemetriAPI, MonitoringController, Validasi, ModulMonitoring, ModulNotifikasi, DataPerangkatBoundary, Database |
| UC06 – Memantau Riwayat Kinerja Panel Surya | C03, C07, C10, C12, C13 | TeknisiView, TelemetriAPI, MonitoringController, Validasi, ModulMonitoring, DataPerangkatBoundary, Database |
| UC07 – Memperbarui Status Penanganan Gangguan | C03, C20, C21, C22, C24 | TeknisiView, LaporanController, Validasi, ModulLaporan, DataLaporanBoundary, Database |
| UC08 – Mencatat Kegiatan Pemeliharaan | C03, C07, C27 | TeknisiView, PemeliharaanController, Validasi, ModulPemeliharaan, DataPerangkatBoundary, Database |
| UC09 – Menganalisis Pemakaian Komunal | C01, C04, C14, C15 | PengurusView, IuranController, Validasi, ModulIuran, DataIuranBoundary, Database |
| UC10 – Menghitung dan Menetapkan Iuran Warga | C02, C04, C14, C15, C16, C17, C18, C19 | PengurusView, IuranController, Validasi, ModulIuran, DataIuranBoundary, Database |
| UC11 – Membuat Rekapitulasi Pemakaian dan Iuran | C04, C14, C15, C17, C18, C28 | PengurusView, IuranController, Validasi, ModulIuran, DataIuranBoundary, Database |
| UC12 – Melakukan Registrasi Akun | C01, C02, C03, C04, C05, C06 | AuthView, AkunController, Validasi, ModulAkun, DataAkunBoundary, Database |
| UC13 – Melakukan Login Akun | C01, C02, C03, C04, C06 | AuthView, AkunController, Validasi, ModulAkun, DataAkunBoundary, Database |
| UC14 – Mengelola Persetujuan Akun | C01, C04, C06 | PengurusView, AkunController, Validasi, ModulAkun, DataAkunBoundary, Database |

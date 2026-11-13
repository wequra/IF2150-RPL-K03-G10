<h1>
IF2150 REKAYASA PERANGKAT LUNAK
<br>
TUGAS 9
<br>
IMPLEMENTASI PERANGKAT LUNAK
</h1>
<br>

## *Nama Perangkat Lunak*
### *[Logo Perangkat Lunak]*

### Untuk: *[Nama Asisten]*

Dipersiapkan oleh:
| Informasi | Keterangan |
| --- | --- |
| Kelas | *\[Kelas\]* |
| Kelompok | *\[Nomor Kelompok\]*  |

| NIM | Nama |
|---|---|
| *[NIM 1]* | *[Nama Anggota 1]* |
| *[NIM 2]* | *[Nama Anggota 2]* |
| *[NIM 3]* | *[Nama Anggota 3]* |
| *[NIM 4]* | *[Nama Anggota 4]* |
| *[NIM 5]* | *[Nama Anggota 5]* |
---

> **Petunjuk pengerjaan:** *[Silahkan hapus bagian ini setelah selesai mengerjakan]*
>
> Dokumen ini adalah **spesifikasi sekaligus template laporan singkat** Tugas 9. Bagian **Ketentuan Implementasi** (Bagian A) adalah aturan yang harus kalian ikuti, boleh dihapus dari laporan akhir. Bagian **Laporan Implementasi** (Bagian B) adalah yang **wajib kalian isi**. Gunakan nama, ID, kebutuhan, use case, dan kelas yang konsisten dengan SKPL, APL, dan DPPL.

---

**Deadline:** Rabu, 11 November 2026, 21.50 WIB
**Asistensi akbar:** *[Hari, DD Bulan YYYY, HH.MM WIB, lokasi/link]*

---

# BAGIAN A: Ketentuan Implementasi

## A.1 Deskripsi Tugas

Pada tugas ini, kalian mengimplementasikan perangkat lunak yang telah dirancang pada tugas-tugas sebelumnya (SKPL, APL, DPPL) menjadi aplikasi yang **dapat dijalankan**. Platform bebas (web, desktop, atau mobile) selama aplikasi dapat dijalankan ulang oleh asisten mengikuti petunjuk kalian.

Ketentuan umum:
- Setiap anggota bertanggung jawab atas **minimal satu fitur atau modul** dan harus terlihat jelas di riwayat commit/PR.
- Implementasi harus **mengacu pada DPPL**. Jika ada yang berubah (kelas, layar, basis data, dsb.), catat di Bagian B.1. Perubahan itu wajar, tetapi harus tercatat dan beralasan.
- Implementasi **tidak harus berupa kelas** (misalnya fungsi, komponen, *route/handler*, *stored procedure*, atau skrip). Namun, setiap kelas perancangan pada DPPL **wajib dapat ditelusuri** ke implementasinya, dan penelusuran ini dicatat di Bagian B.5.
- Seluruh use case pada SKPL **diprioritaskan** untuk diimplementasikan. Status tiap use case akan dilaporkan pada HIUPL (Tugas 10).
- Seluruh mahasiswa **wajib** mengikuti asistensi akbar.

## A.2 Platform, Bahasa, dan Teknologi

Kalian **bebas** memilih bahasa, framework, library, dan basis data, dengan syarat:

1. **Dapat dijalankan ulang** oleh asisten pada mesin biasa dengan mengikuti README. Versi bahasa/runtime dan seluruh dependensi harus tertulis jelas.
2. **Dependensi dikelola lewat file standar**, misalnya `package.json` + lockfile, `requirements.txt`/`pyproject.toml`, `pom.xml`/`build.gradle`, `composer.json`, `pubspec.yaml`, dan sejenisnya. Jangan meng-commit folder hasil instalasi (`node_modules/`, `venv/`, `build/`, dll.).
3. **Jika memakai layanan eksternal** (basis data cloud, API pihak ketiga, auth, dll.), sediakan cara menjalankan tanpa akun pribadi kalian, atau sediakan data/akun uji pada README. Basis data **sangat disarankan** dapat dijalankan lokal (SQLite, atau Docker Compose untuk PostgreSQL/MySQL/MongoDB).
4. **Arsitektur sesuai DPPL.** Pola arsitektur yang kalian pilih di APL/DPPL (MVC, layered, client-server, dll.) harus terlihat pada struktur kode.

Ketentuan tambahan per platform:

| Platform | Ketentuan |
| :--- | :--- |
| **Web** | Berjalan lokal lewat satu-dua perintah yang terdokumentasi. Boleh juga di-*deploy*; jika ya, cantumkan URL, tetapi **tetap wajib bisa dijalankan lokal** (URL deploy bisa mati). |
| **Desktop** | Berjalan dari source lewat perintah yang terdokumentasi. Build/installer opsional. |
| **Mobile** | Berjalan di emulator/simulator atau perangkat. Sertakan langkah menjalankan, dan **sangat disarankan** melampirkan APK/build di Release. |

## A.3 Keamanan Repository

Repo fork kelompok bersifat **public**, sehingga:

- **Dilarang** meng-commit password, API key, token, `.env` asli, sertifikat/private key, atau data pribadi. Hal ini dapat mengurangi nilai.
- Sediakan `.env.example` berisi nama variabel tanpa nilai rahasia, dan masukkan `.env` ke `.gitignore`.
- Jika sudah terlanjur ter-commit, **cabut/ganti** kredensial tersebut. Menghapus commit saja tidak cukup.
- Data uji/seed harus berupa data fiktif.

## A.4 Struktur Folder

Seluruh kode ditempatkan di `src/` pada repo fork. Jangan mengubah folder milestone lama.

```
src/                              # SELURUH kode implementasi
	README.md                     # dokumentasi utama aplikasi (lihat A.5)
	.env.example                  # jika memakai environment variable
	<struktur kode kalian>        # bebas, mengikuti pola arsitektur DPPL
	tests/                        # test case (jika ada)
docs/
	M9/
		KXX_GYY_Implementasi.md   # laporan ini (Bagian B)
		KXX_GYY_Form-Asistensi.md
```

Catatan:
- `README.md` aplikasi diletakkan di **`src/README.md`**, bukan di root repo.
- Jika kerangka kerja kalian mewajibkan struktur tertentu (misalnya Maven `src/main/java`, Flutter `lib/`, monorepo `frontend/` dan `backend/`), letakkan semuanya **di dalam `src/`**.
- Nama file dan folder pada `docs/M9/` mengikuti aturan penamaan milestone sebelumnya (`KXX_GYY_...`).

## A.5 Isi Minimal `src/README.md`

README harus cukup bagi orang yang belum pernah melihat proyek kalian untuk menjalankan aplikasi dari nol. Minimal berisi:

1. **Deskripsi singkat** aplikasi.
2. **Teknologi yang digunakan** beserta versi (bahasa, framework, basis data).
3. **Prasyarat dan instalasi** (software yang harus ada, perintah instalasi dependensi).
4. **Konfigurasi** (environment variable, setup basis data, migrasi/seed) dan langkah demi langkah menjalankannya.
5. **Cara menjalankan aplikasi** (dan cara menjalankan test, jika ada).
6. **Akun/data uji** untuk mencoba tiap peran pengguna (jika ada login).
7. **Daftar modul/fitur yang diimplementasi** beserta pembagian anggota.
8. **Daftar tabel/koleksi basis data** beserta atributnya (atau tautan ke skema/ERD).

## A.6 Best Practices

Kalian dianjurkan menerapkan praktik berikut. Bukti penerapannya dirangkum pada Bagian B.2.

### 1. Branching
Sesuai aturan umum di README repository, `main` fork kelompok dijaga agar tetap bisa menerima sync dari asisten. Pada tugas ini **sangat disarankan** memakai branch per fitur dengan format `<tipe>/<nama-fitur>` (contoh: `feat/login-page`, `fix/null-cart`), lalu digabungkan ke `main` melalui Pull Request. Skema Gitflow penuh (dengan `develop`) boleh dipakai, tetapi tidak diwajibkan.

### 2. Semantic Commit
Gunakan format `<tipe>(<scope>): <deskripsi>`, misalnya `feat(auth): tambah validasi email`.

| Tipe | Kegunaan |
| :--- | :--- |
| `feat` | Menambahkan fitur baru |
| `fix` | Memperbaiki bug |
| `docs` | Mengubah dokumentasi |
| `style` | Perubahan format/spasi, tanpa mengubah logika |
| `refactor` | Perubahan kode yang tidak menambah fitur atau memperbaiki bug |
| `test` | Menambah/memperbaiki pengujian |
| `chore` | Tugas rutin (build, dependensi, konfigurasi) |

### 3. Track Tasks
Gunakan **GitHub Issues** (dan opsional GitHub Projects) untuk membagi tugas dan melacak progres.
- Pecah fitur besar menjadi issue yang lebih kecil dan tetapkan penanggung jawabnya.
- Hubungkan PR dengan issue (`Closes #12`) dan tutup issue ketika selesai.

### 4. Pull Request dan Code Review
- Setiap PR berisi penjelasan deskriptif tentang apa yang dikerjakan, beserta bukti (tangkapan layar/rekaman/hasil test).
- Setiap PR di-*review* minimal **1 anggota lain**, dengan komentar konstruktif atau approval.

### 5. Pengujian dan Optimasi Performa
- Tulis pengujian untuk logika inti (unit test dan/atau pengujian alur utama). Cakupan penuh tidak diwajibkan, tetapi pengujian pada logika utama dinilai.
- Lakukan **profiling** pada setidaknya satu fitur yang berat (query besar, proses pengolahan data, render list panjang, dsb.), lalu catat temuan dan perbaikannya. Contoh alat:

| Platform | Contoh alat |
| :--- | :--- |
| Web (frontend) | Chrome DevTools (Performance/Network), Lighthouse |
| Web (backend) | Profiler bawaan bahasa, `EXPLAIN` pada query basis data, logging waktu respons |
| Python | `cProfile`, `PyInstrument` |
| Java | VisualVM, JProfiler |
| Mobile | Android Studio Profiler, Flutter DevTools, Xcode Instruments |

### 6. Penggunaan AI
Penggunaan AI **tetap harus dicatat** pada `docs/KXX_GYY_AI-Usage.md` sesuai ketentuan yang sudah berlaku.

## A.7 Pengumpulan

Pengumpulan dinilai dari **tag release**, bukan commit terakhir.

1. Pastikan seluruh pekerjaan sudah di-*commit* dan di-*push* ke `main` fork kelompok.
2. Buat release dengan tag **`v9.0`** (revisi berikutnya `v9.1`, `v9.2`, dst.) dengan target branch `main`.
3. Yang dinilai adalah **tag terakhir yang dibuat sebelum deadline**.

## A.8 Aturan Tanya Jawab

Agar semua kelompok mendapat jawaban yang sama, pertanyaan dibagi menjadi dua jalur:

| Jenis Pertanyaan | Jalur |
| :--- | :--- |
| **Ketentuan tugas**, misalnya teknologi yang diperbolehkan, struktur folder, format pengumpulan, dan penilaian | **Sheets QnA:** *[tautan sheets QnA]* |
| **Kendala teknis kelompok sendiri**, misalnya error, setup, dan penggunaan git | Grup kelompok bersama asisten masing-masing |

Ketentuan:
1. Pertanyaan tentang ketentuan tugas **wajib** diajukan melalui Sheets QnA. Periksa terlebih dahulu apakah pertanyaan serupa sudah dijawab.
2. Jika pertanyaan tentang ketentuan tugas tetap diajukan langsung kepada asisten kelompok, asisten **berhak menolak menjawab** dan meminta kelompok memasukkan pertanyaannya ke Sheets QnA.
3. Jika pertanyaan di Sheets QnA **belum dijawab dalam 24 jam**, kelompok boleh menghubungi asisten kelompok masing-masing. Cantumkan pertanyaan yang sudah diajukan di sheets tersebut.
4. Jawaban pada Sheets QnA berlaku untuk **seluruh kelompok** dan menjadi acuan jika terjadi perbedaan pemahaman.

---

# BAGIAN B: Laporan Implementasi

## B.1 Perubahan dari DPPL

Catat semua perbedaan antara perancangan (DPPL) dan implementasi akhir. Jika tidak ada perubahan, tuliskan "Tidak ada perubahan".

Tabel B.1. Perubahan dari DPPL

| No | Bagian DPPL | Rancangan Awal | Implementasi Akhir | Alasan |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Kelas LaporanController dan ModulLaporan (UC07) | Tidak ada operasi riwayat untuk teknisi. Riwayat hanya `riwayatMilikWarga`. | Ditambah `riwayatTugas(idLaporan)` di controller dan modul, dengan pemeriksaan penugasan lebih dulu. | Layar I-11 menampilkan riwayat tugas, dan kontrak serta rute tidak menyediakannya untuk teknisi. |
| 2 | Hasil `HasilStatus.gagal(..., statusBerikutnya)` (Algo-034) | Penolakan transisi membawa daftar status sah berikutnya. | Respons galat membawa `opsi.statusBerikutnya` lewat tipe `GalatTransisi` di `modules/laporan`. Folder `contracts/` tidak diubah. | `ApiGalat` di kontrak yang sudah beku tidak punya kolom untuk itu. |
| 3 | `Validasi.periksaLaporan` (Algo-025) dan foto pendukung | Foto berupa URI dari unggahan terotorisasi dengan pemeriksaan tipe dan ukuran. | Foto pendukung ditolak sampai alur unggah ada. Server hanya menyimpan daftar kosong. Mockup I-05 punya tombol Pilih foto, yang diganti keterangan bahwa foto belum bisa dilampirkan. | Tidak ada layanan unggah di rancangan maupun kontrak, dan menerima URI dari klien membuka lokasi sembarang. |
| 4 | Daftar jenis gangguan komunitas (`periksaLaporan`) | Jenis harus dari daftar komunitas, tanpa tabel pendukung. | Daftar tetap `JENIS_GANGGUAN` di `modules/laporan/internal/validasi.ts`, dipakai server dan pilihan di formulir I-05. | Skema basis data tidak punya tabel jenis gangguan. |
| 5 | Atribut `akun: ModulAkun` pada ModulLaporan (Algo-034) | ModulLaporan memegang ModulAkun dan memanggil `ambilWarga` lalu `validasiKeanggotaan`. | ModulLaporan menerima antarmuka `AnggotaKomunitas`. Titik rakit `modules/laporan/index.ts` mengisinya dengan `ModulAkun.ambilWarga` dan `Warga.validasiKeanggotaan`. | Memudahkan tes dengan akun palsu. Keanggotaan tetap dibaca dari basis data setiap kali. |
| 6 | Atribut `validasi: Validasi` pada LaporanController | Controller memegang objek `Validasi`. | Controller memanggil fungsi `periksaLaporan` langsung. | Validasi laporan hanya satu fungsi, jadi objek terpisah tidak diperlukan. |
| 7 | `RiwayatStatusLaporan.catat()` (C22) | Operasi `catat()` menyimpan riwayat. | Tidak ada `catat()` terpisah. Riwayat disimpan oleh `DataLaporanBoundary.simpanStatusDanRiwayat` dalam transaksi yang sama dengan pembaruan status. | Sesuai catatan Algo-042 bahwa riwayat tidak boleh di-COMMIT sendiri. |
| 8 | Notifikasi saat status laporan berubah (UC07) | Tidak ada di DPPL. Rencana tim sempat menyebut pengiriman notifikasi. | Tidak diimplementasikan. Perubahan status tercatat di riwayat dan terlihat di I-07 dan I-11. | DPPL hanya mendefinisikan notifikasi untuk peringatan daya kritis (UC05). |
| 9 | Kelas WargaView, TeknisiView, PengurusView | Tiga kelas view dengan operasi terhubung ke controller. | Komponen React: `components/shell` (sidebar, bottom-nav, judul layar) dan 14 layar `components/layar/LayarI03` sampai `LayarI16`, dipasang di rute `app/dashboard/{warga,teknisi,pengurus}`. | Next.js App Router. Operasi view menjadi handler event yang memanggil route API. |
| 10 | Layar I-06 dan I-10 (pencarian dan filter) | Mockup menampilkan kolom pencarian dan filter status. | Pencarian dan filter berjalan di klien atas data yang sudah dibatasi server. | Daftar per akun kecil, jadi tidak perlu query tambahan. |
| 11 | Realisasi UC12-UC14 (BAB 3) | `AkunController` memanggil `DataAkunBoundary` langsung, tanpa `ModulAkun` pada tabel identifikasi kelas. | Semua alur memakai jalur `View -> Controller -> ModulAkun -> DataAkunBoundary`. | Mengikuti pola berlapis pada BAB 2 dan Tabel 2.3 agar konsisten di seluruh use case. |
| 12 | C01 `Akun.cocokKredensial` | Operasi sinkron yang mengembalikan `Boolean`. | Operasi asinkron (`Promise<boolean>`) yang memakai `verifyPassword` (scrypt). | Fungsi hash scrypt pada Node bersifat asinkron dan tidak boleh memblokir proses server. |
| 13 | C01 `Akun` (operasi baru) | Tidak ada. | Ditambah `konteksSesi()` yang membentuk `KonteksSesi` untuk akun berstatus `DISETUJUI`. | Pengenal `idWarga`, `idKomunitas`, `idTeknisi`, dan `idPengurus` harus berasal dari server, bukan dari form; DPPL hanya mengembalikan `dashboardTujuan`. |
| 14 | C02, C03, C04 (operasi lintas modul) | Entity memuat operasi modul lain, misalnya `kirimLaporan`, `lihatTagihan`, `ubahStatusLaporan`, `hitungIuran`, `buatRekapitulasi`. | Entity hanya memuat atribut, pengenal, `validasiKeanggotaan`, `verifikasiKewenangan`, dan `dashboardTujuan`. Operasi lintas modul diwujudkan di controller dan modul masing-masing, misalnya `kirimLaporan` dan `perbaruiStatus` di `LaporanController` dan `ModulLaporan`. | Menghindari kelas entity yang bergantung pada empat modul (God Class dan Mixing Concerns) serta konflik berkas antaranggota. |
| 15 | C02, C03, C04 (atribut peran) | Atribut `idWarga`, `idKomunitas`, `statusTerdaftar`, `idTeknisi`, `kontak`, `idPengurus` selalu ada. | Atribut dikelompokkan pada objek profil yang boleh kosong; `konteksSesi()` melempar `AkunTidakLengkap` bila profil belum ada. | Akun berstatus `MENUNGGU` belum tentu memiliki profil peran, tetapi tetap harus dapat diautentikasi agar menerima pesan status yang benar. |
| 16 | C04 `Pengurus.lihatAkunMenunggu`, `setujuiAkun`, `tolakAkun` | Operasi pada entity `Pengurus`. | Diwujudkan sebagai `AkunController.ambilAkunMenunggu`, `setujuiAkun`, `tolakAkun` dan `ModulAkun.daftarAkunMenunggu`, `ubahStatusPersetujuan`. | Konsisten dengan keputusan pada nomor 14. |
| 17 | C05 `CalonPengguna.daftarkan` | Mengembalikan objek `Akun`. | Mengembalikan data akun (email, nama, hash kata sandi, peran, status `MENUNGGU`) yang disimpan oleh `ModulAkun.registrasiCalon`. | Proses hash asinkron dan penyimpanan membutuhkan data biasa; objek `Akun` dibentuk saat pembacaan lewat `Akun.buatAkun`. |
| 18 | C06 `StatusAkun.label` | Enumerasi dengan operasi `label()`. | Konstanta `STATUS_AKUN` dan tipe gabungan `StatusAkun`; tidak ada operasi `label()`. | Nilai berupa string dipakai langsung; teks tampilan dikelola di komponen antarmuka. |
| 19 | `AkunController` (parameter dan hasil) | `ambilAkunMenunggu`, `setujuiAkun`, `tolakAkun` menerima `pengurus: Pengurus`, dan `setujuiAkun`/`tolakAkun` mengembalikan `Boolean`. | Menerima `sesi: KonteksSesi`; kewenangan diperiksa ulang terhadap data terkini sebelum membaca atau mengubah apa pun; hasil berupa `HasilPersetujuan` (`TIDAK_DITEMUKAN`, `SUDAH_DIPROSES`). | Identitas dan peran berasal dari sesi server, dan pengajuan yang sudah diproses pihak lain harus dibedakan dari pengajuan yang tidak ada. |
| 20 | `ModulAkun.cariEmail` (operasi baru) | Tidak ada; `AkunController.daftarkan` memanggil `DataAkunBoundary.cariEmail` langsung (Algo-029). | Ditambah `ModulAkun.cariEmail` yang diteruskan ke boundary. | Alasan sama dengan nomor 11. |
| 21 | `ModulAkun.registrasiCalon`, `daftarAkunMenunggu`; `DataAkunBoundary.cariEmail`, `ambilBerdasarkanStatus` | Mengembalikan objek `Akun`. | Mengembalikan `AkunRingkas` (tanpa kata sandi). `ambilAkun` tetap mengembalikan `Akun` lengkap untuk autentikasi. | Hash kata sandi tidak boleh keluar dari lapisan data kecuali untuk autentikasi. |
| 22 | `DataAkunBoundary.cariWarga` | Mengembalikan `Warga` dari tabel `warga`. | Mengembalikan `Warga` dengan kata sandi kosong yang tidak dapat dipakai untuk autentikasi. Dipakai `ModulLaporan` lewat `ModulAkun.ambilWarga` (lihat nomor 5). | Layanan laporan hanya membutuhkan keanggotaan, bukan kredensial. |
| 23 | `DataAkunBoundary.perbaruiAkun(akun)` | Menyimpan perubahan akun. | Diganti `perbaruiStatusAkun(email, dari, ke)` berupa pembaruan bersyarat dalam satu perintah. | Dua Pengurus yang memproses pengajuan yang sama tidak boleh saling menimpa; hanya pengajuan yang masih `MENUNGGU` dapat diubah. |
| 24 | `DataAkunBoundary.simpanAkun` | Mengembalikan `Boolean`. | Melempar `EmailSudahTerdaftar` bila email sudah dipakai (kode unik basis data). | Menangani kondisi balapan antara pengecekan email dan penyimpanan. |
| 25 | `Validasi` (satu kelas) | Satu kelas memuat validasi laporan, pemeliharaan, periode, rentang waktu, dan registrasi. | Dipecah per modul. Bagian akun berada pada `modules/akun/validasi.ts` (kelas `Validasi`, ditambah `periksaRegistrasi` yang memberi pesan per kolom dan memeriksa peran); validasi laporan berupa fungsi `periksaLaporan` pada `modules/laporan/internal/validasi.ts` (lihat nomor 3 dan 6). | Mencegah satu berkas diedit banyak orang; antarmuka I-02 meminta penandaan per kolom. |
| 26 | `Validasi.validasiRegistrasi` (Algo-031) | Email valid bila mengandung "@"; kata sandi minimal 8 karakter. | Email harus berformat sah (bagian lokal, "@", domain dengan titik) dan paling banyak 254 karakter; kata sandi 8 sampai 128 karakter. | Antarmuka I-02 meminta "format sah"; batas atas mencegah beban hash berlebihan. |
| 27 | `Database` (kelas) | Kelas dengan `query`, `execute`, dan `transaksiStatus` atas SQL mentah. | Singleton Prisma Client (`src/lib/prisma.ts`) dengan adapter PostgreSQL; kueri memakai API Prisma. `transaksiStatus` diwujudkan oleh `simpanStatusDanRiwayat` pada `modules/laporan/repository.ts` dengan `$transaction` (lihat nomor 7). | Memakai ORM Prisma yang dipilih kelompok; koneksi diatur lewat `DATABASE_URL`. |
| 28 | `AuthView` | Satu kelas View yang memegang `AkunController`. | Komponen React `RegistrasiView` dan `LoginView` yang memanggil route handler (`/api/auth/registrasi`, `/api/auth/login`); route handler memanggil `AkunController`. | Pada Next.js komponen klien tidak dapat memanggil controller sisi server secara langsung (lihat juga nomor 9). |
| 29 | Layar I-16 (Persetujuan akun) | Tabel menampilkan nama, email, waktu pengajuan, dan peran yang diajukan. | Waktu pengajuan belum ditampilkan; tabel menampilkan nama dan peran, dan email pada panel tinjau. Isi layar dibuat sebagai komponen `PersetujuanView` pada kerangka `PengurusView`. | Kueri DPPL (Q-001) tidak memuat kolom waktu pengajuan. |
| 30 | Lapisan sesi dan pembatasan akses (tambahan) | DPPL hanya menyebut `KonteksSesi` sebagai tipe rekaman. | Ditambah `src/lib/auth/` (token sesi bertanda tangan HMAC-SHA256, hash scrypt, helper `getSesi`, `wajibSesi`, dan `wajibPeran`) dan `src/middleware.ts`. | Membatasi akses rute berdasarkan sesi, peran, dan status akun `DISETUJUI` pada semua modul. |
| *...* | *...* | *...* | *...* | *...* |

## B.2 Bukti Penerapan Best Practices

Tabel B.2. Bukti Best Practices

| Praktik | Bukti | Keterangan |
| :--- | :--- | :--- |
| Branching | *[Tautan ke daftar branch / graph commit]* | *[Skema yang dipakai]* |
| Semantic commit | *[Tautan ke riwayat commit]* | *[Ringkasan]* |
| Track tasks | *[Tautan ke Issues/Projects]* | *[Jumlah issue, pembagian]* |
| Pull request dan review | *[Tautan ke 2-3 PR representatif]* | *[Siapa me-review siapa]* |
| Pengujian | *[Tautan ke `src/tests/` dan hasil test]* | *[Apa yang diuji, cara menjalankan]* |

### B.2.1 Profiling dan Optimasi

Pilih minimal satu fitur yang diprofil.

| Informasi | Keterangan |
| :--- | :--- |
| Fitur / proses yang diprofil | *[Nama fitur]* |
| Alat | *[mis. Chrome DevTools, cProfile, EXPLAIN]* |
| Temuan (sebelum) | *[Bottleneck yang ditemukan, sertakan angka/tangkapan layar]* |
| Perbaikan | *[Yang diubah]* |
| Hasil (sesudah) | *[Perbandingan dengan sebelumnya]* |

Jika tidak ada perbaikan yang perlu dilakukan, jelaskan hasil profiling dan alasan kenapa fitur tersebut sudah memadai.

## B.3 Kendala dan Catatan Penting

Tuliskan kendala yang ditemui, fitur yang belum sempurna (*known issues*), serta hal yang perlu diketahui asisten saat menjalankan atau menilai aplikasi (misalnya akun uji khusus, urutan menjalankan, atau batasan).

## B.4 Kontribusi Anggota

Tabel B.4. Kontribusi Anggota

| NIM | Nama | Modul / Fitur yang Dikerjakan | Persentase Kontribusi |
| :--- | :--- | :--- | :--- |
| 13525129 | Andro Irsa Syafiq | Fondasi proyek (dependensi, Docker Compose, `.env.example`); modul monitoring, telemetri, simulator sensor, dan peringatan daya kritis (UC01, UC05, UC06) | *[20%]* |
| 13525006 | Muhammad Rafiandhi Suryadinata | Skema basis data dan seed; modul pemeliharaan (UC08); profiling; README dan pengujian lintas modul | *[20%]* |
| 13525078 | Muhammad Faiz Ramadhan | Autentikasi dan akun (UC12, UC13, UC14); lapisan sesi dan middleware; dokumen kelompok | *[20%]* |
| 13525030 | Rionaldo Casey Pandhitha | Kerangka antarmuka (layout, shell tiga dasbor, komponen UI); modul laporan gangguan (UC03, UC04, UC07) | *[20%]* |
| 13525054 | Raffi Fauzi Hermawan | Kontrak antarmodul; modul iuran (UC02, UC09, UC10, UC11) dan ekspor rekapitulasi | *[20%]* |
| | **Total** | | **100%** |

## B.5 Traceability Kelas Perancangan ke Implementasi

Pemetaan dari **setiap kelas perancangan** pada DPPL (Tabel 4.1) ke wujud implementasinya. Bentuk implementasi bebas (kelas, fungsi, komponen, *route/handler*, *stored procedure*, skrip, dsb.), tetapi tiap kelas perancangan harus muncul pada tabel ini. Jika implementasi berupa kelas dengan nama yang sama, tetap dicantumkan.

Tabel B.5. Traceability Kelas Perancangan ke Implementasi

| ID Kelas | Nama Kelas Perancangan | Bentuk Implementasi | Lokasi (File dan Nama) | Keterangan |
| :--- | :--- | :--- | :--- | :--- |
| C01 | `Akun` | Kelas abstrak | `src/modules/akun/entity.ts` - `Akun` | Atribut `email` dan `nama` menjadi properti baca-saja; `password` (hash scrypt) bersifat terproteksi; `statusAkun` disimpan pada properti privat dengan pengambil nilai. `cocokKredensial` (Algo-001) asinkron lewat `src/lib/auth/password.ts` - `verifyPassword`; `sudahDisetujui`, `ubahStatus`, `buatAkun` (Algo-002, statik, melempar `PeranTidakValid` untuk peran tak dikenal), dan `dashboardTujuan` (abstrak) diwujudkan sebagai metode. Ditambah `konteksSesi()` (lihat B.1 nomor 13). |
| C02 | `Warga` | Kelas turunan `Akun` | `src/modules/akun/entity.ts` - `Warga` | Atribut peran berada pada objek profil (`idWarga`, `idKomunitas`, `statusTerdaftar`). `getIdWarga`, `validasiKeanggotaan` (Algo-003), dan `dashboardTujuan` diwujudkan di entity; `validasiKeanggotaan` dipakai `ModulLaporan` lewat `ModulAkun.ambilWarga`. `pantauPemantauan`, `lihatTagihan`, `kirimLaporan`, `lihatDaftarLaporan`, `pilihLaporan` diwujudkan di controller dan modul monitoring, iuran, dan laporan (B.1 nomor 14, 15). |
| C03 | `Teknisi` | Kelas turunan `Akun` | `src/modules/akun/entity.ts` - `Teknisi` | Atribut `idTeknisi` dan `kontak` berada pada objek profil. `getIdTeknisi` dan `dashboardTujuan` diwujudkan di entity. `terimaNotifikasi`, `pilihRentangWaktu`, `lihatRiwayatKinerja`, `ubahStatusLaporan`, `buatCatatanPemeliharaan` diwujudkan di modul monitoring, laporan, dan pemeliharaan (B.1 nomor 14, 15). |
| C04 | `Pengurus` | Kelas turunan `Akun` | `src/modules/akun/entity.ts` - `Pengurus` | Atribut `idPengurus` berada pada objek profil. `getIdPengurus`, `verifikasiKewenangan` (Algo-006: akun berstatus `DISETUJUI`), dan `dashboardTujuan` diwujudkan di entity. `lihatAkunMenunggu`, `setujuiAkun`, `tolakAkun` menjadi `AkunController.ambilAkunMenunggu`, `setujuiAkun`, `tolakAkun`; operasi iuran diwujudkan di modul iuran (B.1 nomor 14, 15, 16). |
| C05 | `CalonPengguna` | Kelas | `src/modules/akun/entity.ts` - `CalonPengguna` | Atribut menjadi properti privat baca-saja. `daftarkan` (Algo-008) asinkron: menghasilkan data akun berstatus `MENUNGGU` dengan kata sandi ter-hash (B.1 nomor 17). |
| C06 | `StatusAkun` | Konstanta dan tipe gabungan | `src/modules/akun/entity.ts` - `STATUS_AKUN`, `StatusAkun` | Nilai `MENUNGGU`, `DISETUJUI`, `DITOLAK` menjadi anggota tipe gabungan string. Operasi `label()` tidak diwujudkan (B.1 nomor 18). |
| C20 | LaporanGangguan | Kelas | `src/modules/laporan/internal/LaporanGangguan.ts` - `LaporanGangguan` | Atribut menjadi `DataLaporan`. Konstruktor dan `setStatusMenunggu()` menjadi `LaporanGangguan.baru()`. `validasiTransisi` (Algo-017), `statusBerikutnya`, `ubahStatus`, `getDetailLaporan`, dan `simpan(penyimpan)` ada sebagai metode. |
| C21 | StatusLaporan | Konstanta dan fungsi | `src/modules/laporan/internal/StatusLaporan.ts` - `URUTAN_STATUS`, `labelStatus`, `statusBerikutnya`, `adalahStatus` | Tipe `StatusLaporan` di `src/contracts/common.ts` dan enum `status_laporan` di `prisma/schema.prisma`. `label()` menjadi `labelStatus`. |
| C22 | RiwayatStatusLaporan | Kelas dan tabel | `src/modules/laporan/internal/RiwayatStatusLaporan.ts` - `RiwayatStatusLaporan`, tabel `riwayat_status_laporan` | Konstruktor membuat id dan timestamp server. `getRiwayatPerkembangan` menjadi `RiwayatStatusLaporan.ringkas`. `catat()` tidak berdiri sendiri (lihat B.1 nomor 7). |
| C24 | PenugasanLaporan | Kelas dan tabel | `src/modules/laporan/internal/PenugasanLaporan.ts` - `PenugasanLaporan`, tabel `penugasan_laporan` | `verifikasi` (Algo-019) membandingkan teknisi dan laporan. Penugasan juga menjadi syarat di setiap query tugas pada boundary. |
| - | WargaView | Komponen dan layar | `src/components/shell/*`, `src/app/dashboard/warga/**`, `src/components/layar/LayarI03.tsx` sampai `LayarI07.tsx`, `src/modules/laporan/ui/FormLaporan.tsx`, `DaftarLaporan.tsx`, `RiwayatStatus.tsx` | Operasi view menjadi handler event dan `fetch` ke route API. Layar I-03 dan I-04 diisi modul monitoring dan iuran. |
| - | TeknisiView | Komponen dan layar | `src/app/dashboard/teknisi/**`, `src/components/layar/LayarI08.tsx` sampai `LayarI12.tsx`, `src/modules/laporan/ui/UbahStatus.tsx`, `LangkahStatus.tsx` | `ubahStatus` menjadi tombol di `UbahStatus` yang memanggil `PATCH /api/laporan/tugas/{id}/status`. Layar I-08, I-09, I-12 diisi modul lain. |
| - | PengurusView | Komponen dan layar | `src/app/dashboard/pengurus/**`, `src/components/layar/LayarI13.tsx` sampai `LayarI16.tsx`, shell di `src/components/shell` | Kerangka dan navigasi dibuat di modul ini. Isi layar dibuat modul iuran dan akun. |
| - | LaporanController | Kelas dan route | `src/modules/laporan/service.ts` - `LaporanController`, `src/app/api/laporan/**/route.ts` | Atribut `sesi` dari cookie lewat `getSesi`. Algo-025 di `kirimLaporan`. Semua operasi memeriksa peran, bentuk ID, lalu mendelegasikan ke modul. |
| - | ModulLaporan | Kelas | `src/modules/laporan/internal/ModulLaporan.ts` - `ModulLaporan` | Algo-034 di `kirimLaporan` dan `perbaruiStatus`. Antarmuka `RepositoriLaporan` dan `AnggotaKomunitas` menjadi atribut `data` dan `akun`. |
| - | DataLaporanBoundary | Objek repositori | `src/modules/laporan/repository.ts` - `repositoriLaporan` | Prisma dengan parameter terikat. `simpanStatusDanRiwayat` (Algo-040, 042) memakai `$transaction`, `SELECT ... FOR UPDATE`, `updateMany` dengan syarat status lama dan penugasan, lalu `create` riwayat. |
| - | `AuthView` | Komponen dan halaman | `src/modules/akun/ui/RegistrasiView.tsx` - `RegistrasiView`, `src/modules/akun/ui/LoginView.tsx` - `LoginView`, `src/app/registrasi/page.tsx`, `src/app/login/page.tsx` | `bukaRegistrasi` dan `bukaLogin` menjadi halaman `/registrasi` dan `/login`. `tekanDaftar` dan `tekanLogin` menjadi penangan kirim formulir (`tekanDaftar`, `tekanMasuk`) yang memanggil `POST /api/auth/registrasi` dan `POST /api/auth/login`. Atribut `akunController` tidak dipegang langsung (B.1 nomor 28). Penyaring tujuan pengalihan: `src/modules/akun/ui/tujuan.ts` - `urlTujuanAman`. |
| - | `AkunController` | Kelas dan route | `src/modules/akun/controller.ts` - `AkunController`, `src/app/api/auth/registrasi/route.ts`, `src/app/api/auth/login/route.ts`, `src/app/api/auth/logout/route.ts`, `src/app/api/akun/persetujuan/route.ts`, `src/modules/akun/index.ts` | Atribut `modulAkun` dan `validasi` diberikan lewat konstruktor dan dirakit di `index.ts`. `daftarkan` (Algo-029), `login` (Algo-030), `ambilAkunMenunggu`, `setujuiAkun`, `tolakAkun` diwujudkan sebagai metode; route handler menerjemahkan hasilnya menjadi respons HTTP. `PersetujuanView` (isi layar I-16 pada `PengurusView`) memanggil `GET` dan `POST /api/akun/persetujuan`. Parameter dan hasil berubah (B.1 nomor 19). |
| - | `Validasi` | Kelas dan fungsi | `src/modules/akun/validasi.ts` - `Validasi`, `src/modules/laporan/internal/validasi.ts` - `periksaLaporan` | Bagian akun: `validasiRegistrasi` (Algo-031) dan `periksaRegistrasi`. `periksaLaporan` berupa fungsi pada modul laporan. `periksaPemeliharaan`, `validasiPeriode`, `validasiRentangWaktu` diwujudkan pada berkas validasi di folder modul masing-masing (B.1 nomor 25, 26). |
| - | `ModulAkun` | Kelas | `src/modules/akun/modul.ts` - `ModulAkun` | Atribut `data` diberikan lewat konstruktor. `ambilWarga`, `registrasiCalon`, `autentikasi` (Algo-032, dengan hash pembanding untuk menyamakan waktu respons saat email tidak ditemukan), `daftarAkunMenunggu`, `ubahStatusPersetujuan` diwujudkan sebagai metode; ditambah `cariEmail` (B.1 nomor 20, 21). |
| - | `DataAkunBoundary` | Kelas repositori | `src/modules/akun/boundary.ts` - `DataAkunBoundary` | Atribut `database` diwujudkan dengan mengimpor `prisma` dari `src/lib/prisma.ts`. `cariWarga`, `cariEmail`, `ambilAkun`, `simpanAkun`, `ambilBerdasarkanStatus` (Algo-038) diwujudkan sebagai metode; `perbaruiAkun` menjadi `perbaruiStatusAkun` (B.1 nomor 21, 22, 23, 24). |
| - | `Database` | Modul singleton | `src/lib/prisma.ts` - `prisma`, `src/modules/laporan/repository.ts` - `repositoriLaporan.simpanStatusDanRiwayat` | Atribut `koneksi` diwujudkan lewat adapter PostgreSQL dan `DATABASE_URL`. `query` dan `execute` diwujudkan oleh API Prisma Client (`findUnique`, `findMany`, `create`, `updateMany`). `transaksiStatus` (UC07) diwujudkan oleh `simpanStatusDanRiwayat` dengan `$transaction` pada boundary modul laporan (B.1 nomor 27). |
| *...* | *...* | *...* | *...* | *...* |

Catatan:
- Satu kelas perancangan boleh diwujudkan oleh beberapa file/unit, dan satu file/unit boleh mewujudkan beberapa kelas perancangan. Tuliskan semuanya.
- Kelas perancangan yang **tidak diimplementasikan** atau **digabung/dipecah** tetap dicantumkan, dan alasannya dicatat di Bagian B.1.

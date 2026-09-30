<h1>
IF2150 REKAYASA PERANGKAT LUNAK
<br>
TUGAS 5
<br>
SPESIFIKASI KEBUTUHAN PERANGKAT LUNAK (SKPL)
</h1>
<br>

## *Nama Perangkat Lunak*

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

## Daftar Perubahan

| Revisi | Deskripsi |
| :--- | :--- |
| *A* | *Deskripsikan perubahan yang dilakukan dari dokumen sebelumnya pada dokumen ini. Jika tidak terdapat perubahan, harap kosongkan tabel.* |
| *B* |  |
| *C* |  |
| ... |  |

<br>

# BAB 1: Pendahuluan

## 1.1 Tujuan Penulisan Dokumen
Tuliskan dengan ringkas tujuan dokumen SKPL ini dibuat dan siapa saja yang akan menggunakan dokumen ini.

## 1.2 Lingkup Masalah
Tuliskan dengan ringkas nama aplikasi dan deskripsi singkatnya. Bagian ini maksimal berisi satu paragraf, dapat diringkas dari BAB 1 *Analisis Permasalahan* pada dokumen *Topic Brainstorming*.

## 1.3 Definisi, Istilah, dan Singkatan
Semua definisi dan singkatan yang digunakan dalam dokumen ini beserta penjelasannya.

Tabel 1.3. Definisi Istilah dan Singkatan

| Singkatan, Akronim, atau Istilah | Penjelasan |
| :--- | :--- |
| *P/L* | *Singkatan dari Perangkat Lunak, yaitu aplikasi yang memberikan perintah kepada komputer untuk menjalankan tugas tertentu.* |
| *SKPL* | *Singkatan dari Spesifikasi Kebutuhan Perangkat Lunak, yaitu dokumen yang merangkum kriteria-kriteria yang diperlukan untuk membangun aplikasi menjalankan tugasnya.* |
| *KF* | *Singkatan dari Kebutuhan Fungsional.* |
| *KNF* | *Singkatan dari Kebutuhan Non-Fungsional.* |
| *UC* | *Singkatan dari Use Case.* |
| *EARS* | *Easy Approach to Requirements Syntax, yaitu pola penulisan kebutuhan agar konsisten dan mudah diuji.* |
| *...* | *...* |

## 1.4 Aturan Penomoran
Tuliskan aturan penomoran (ID) yang digunakan dalam dokumen ini. Gunakan pola ID yang **sama** dengan yang sudah dipakai pada dokumen-dokumen sebelumnya, jangan membuat pola baru di dokumen ini.

Tabel 1.4. Aturan Penomoran

| Hal/Bagian | Penomoran | Keterangan |
| :--- | :--- | :--- |
| *Kebutuhan Fungsional* | *KFXX* | |
| *Kebutuhan Non-Fungsional* | *KNFXX* | |
| *Aktor* | *AXX* | |
| *Use Case* | *UCXX* | |
| *Kelas* | *CXX* | |
| *...* | *...* |

## 1.5 Referensi
Dokumentasi P/L yang dirujuk oleh dokumen ini. Referensi dapat berupa buku, panduan, ataupun dokumentasi lain yang dipakai dalam pengembangan P/L ini.

## 1.6 Deskripsi Umum Dokumen (Ikhtisar)
Tuliskan sistematika pembahasan dokumen SKPL ini secara runut (misalnya: BAB 2 membahas deskripsi umum P/L, BAB 3 membahas kebutuhan fungsional dan non-fungsional, dst).

---

# BAB 2: Deskripsi Perangkat Lunak

## 2.1 Deskripsi Umum Sistem
Bagian ini dapat disalin dari BAB 1.1 *Deskripsi Umum Sistem* pada dokumen *Requirement Gathering*, disesuaikan bila ada perubahan alur bisnis. Lengkapi dengan gambaran proses bisnis dalam bentuk *Activity Diagram* (boleh disalin dan diperbarui dari 3.3 *Model Proses Bisnis* pada dokumen *Topic Brainstorming*).

<p align="center">
<img alt="Contoh Activity Diagram" src="./assets/diagram/diagram-act-1.avif" width="70%">
</p>
<p align="center">
<i>Gambar 1. Contoh Activity Diagram Proses Bisnis</i>
</p>

## 2.2 Deskripsi Umum Perangkat Lunak
Diisi dengan deskripsi umum perangkat lunak untuk mendukung proses bisnis yang telah diuraikan pada sub-bab sebelumnya. Uraian harus menunjukkan lingkup perangkat lunak, mencakup keterkaitan perangkat lunak dengan sistem lain di luar (misalnya *Payment Gateway* atau layanan pihak ketiga lain yang dipakai).

*Contoh narasi:* "*[Nama P/L]* merupakan aplikasi *[deskripsi singkat]* yang berinteraksi dengan *Payment Gateway (dummy)* untuk memproses otorisasi pembayaran. Sistem menerima input dari *Pelanggan* melalui antarmuka aplikasi dan mengirimkan permintaan transaksi ke *Payment Gateway* setiap kali pelanggan melakukan checkout."

## 2.3 Pengguna dan Kebutuhan Pengguna Perangkat Lunak
Tuliskan seluruh jenis pengguna (*role*/aktor) yang terlibat dalam perangkat lunak (P/L), beserta kebutuhannya secara umum. Bagian ini dapat disalin dari 1.2 *Deskripsi Pengguna Perangkat Lunak* (dokumen Requirement Gathering) atau 3.1 *Identifikasi Aktor* (dokumen Use Case), pastikan sudah konsisten dengan aktor final yang dipakai di BAB 4.

| Pengguna | Kebutuhan |
| :--- | :--- |
| *Pelanggan* | *Pelanggan harus dapat memesan produk, mengelola keranjang, dan menyelesaikan pembayaran melalui sistem.* |
| *...* | *...* |

## 2.4 Batasan Perangkat Lunak
Batasan yang harus dituliskan, di antaranya:
1. *P/L hanya berfokus pada platform utama berbasis website dan diakses melalui web browser, tidak memiliki aplikasi terinstall (seperti .apk atau .exe).*
2. *P/L bergantung pada ketersediaan data pemantauan fisik yang dikirimkan secara berkala oleh perangkat keras (sensor, mikrokontroler pada tangki dan panel surya) di lapangan.*
3. *P/L beroperasi di lokasi yang memiliki cakupan sinyal komunikasi yang memadai atau akses Wi-Fi terpusat untuk kelancaran pembaruan data sensor.*
4. *P/L hanya menangani pencatatan dan kalkulasi iuran warga, dan tidak terintegrasi dengan Payment Gateway untuk memproses transaksi pembayaran secara digital.*
5. *P/L mengekspor berkas rekapitulasi ke dalam format dokumen universal seperti PDF atau CSV.*

## 2.5 Lingkungan Operasi Perangkat Lunak

| Komponen | Spesifikasi |
| :--- | :--- |
| *Server* | *[Node.js atau PHP, dijalankan pada layanan cloud hosting / VPS]* |
| *Client* | *[Web Browser modern (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).]* |
| *DBMS* | *[PostgreSQL atau MySQL]* |
| *OS* | *[Cross-platform (Windows, Linux, macOS, Android, iOS) melalui browser.]* |
| *Perangkat Keras* | *Mikrokontroler IoT pada fasilitas komunitas (untuk mengirim data metrik operasional).* |

---

# BAB 3: Deskripsi Kebutuhan Perangkat Lunak

## 3.1 Kebutuhan Fungsional (KF)

Tabel 3.1. Kebutuhan Fungsional

| ID KF | ID Kebutuhan | Penjelasan |
| :--- | :--- | :--- |
| *KF01* | *R01* | *Ketika warga membuka dashboard utama, sistem harus menampilkan volume/level air pada tangki penampungan secara real-time.* |
| *KF02* | *R02* | *Sistem harus mengklasifikasikan dan menampilkan status ketersediaan air (Normal, Rendah, Kritis) berdasarkan ambang batas yang telah dikonfigurasi.* |
| *KF03* | *R04* | *Ketika warga membuka dashboard utama, sistem harus menampilkan kapasitas baterai (%) dan daya keluaran panel surya (Watt) secara real-time.* |
| *KF04* | *R05* | *Sistem harus menyimpan dan menampilkan parameter daya menggunakan satuan pengukuran yang konsisten (seperti Watt dan persen) di seluruh antarmuka.* |
| *KF05* | *R07* | *Ketika warga mengakses menu tagihan, sistem harus menampilkan rincian iuran periode berjalan yang mencakup periode tagihan, data pemakaian, dan total iuran.* |
| *KF06* | *R09* | *Sistem harus membatasi visibilitas tagihan kepada warga hanya jika status perhitungan iuran periode tersebut telah ditetapkan sebagai final oleh pengurus.* |
| *KF07* | *R11* | *Ketika warga membuka fitur pelaporan, sistem harus menyediakan formulir gangguan yang mencakup input jenis kendala, deskripsi, dan foto pendukung.* |
| *KF08* | *R11* | *Ketika pengguna menekan tombol kirim formulir, sistem harus menyimpan laporan gangguan tersebut sebagai entri data baru* |
| *KF09* | *R12* | *Ketika laporan gangguan dikirim, sistem harus memvalidasi bahwa pengirim merupakan warga terdaftar sebelum memproses penyimpanan.* |
| *KF10* | *R13* | *Ketika laporan gangguan baru berhasil disimpan, sistem harus menetapkan status awal laporan tersebut menjadi "Menunggu" secara otomatis.* |
| *KF11* | *R15* | *Ketika pelapor membuka halaman riwayat, sistem harus menampilkan status terkini dan rekam jejak perkembangan laporan gangguan miliknya.* |
| *KF12* | *R16* | *Sistem harus membatasi nilai status laporan gangguan secara mutlak pada tiga pilihan: Menunggu, Sedang Diperbaiki, atau Selesai.* |
| *KF13* | *R18* | *Ketika kapasitas daya baterai menyentuh atau turun di bawah ambang batas aman, sistem harus mengirimkan notifikasi otomatis kepada teknisi.* |
| *KF14* | *R20* | *Sistem harus mengirimkan notifikasi peringatan daya kritis hanya kepada akun teknisi terdaftar yang ditugaskan pada perangkat terkait.* |
| *KF15* | *R22* | *Ketika teknisi memilih suatu rentang waktu, sistem harus menampilkan grafik tren kinerja panel surya sesuai durasi tersebut.* |
| *KF16* | *R23* | *Sistem harus menyimpan log data kinerja perangkat keras secara berkala sebagai basis historis.* |
| *KF17* | *R25* | *Ketika teknisi membuka detail laporan, sistem harus menyediakan fungsi pembaruan status untuk mencatat progres penanganan lapangan.* |
| *KF18* | *R26* | *Ketika pengguna mencoba mengubah status laporan, sistem harus memverifikasi bahwa pengguna tersebut adalah teknisi dengan hak penugasan yang sesuai.* |
| *KF19* | *R27* | *Sistem harus memastikan perubahan status laporan gangguan hanya dapat dilakukan secara berurutan sesuai tahapan, yaitu dari Menunggu, kemudian Sedang Diperbaiki, dan terakhir Selesai.* |
| *KF20* | *R29* | *Ketika teknisi membuka menu pemeliharaan, sistem harus menyediakan formulir pencatatan yang memuat ID perangkat, waktu, tindakan, dan hasil akhir.* |
| *KF21* | *R30* | *Ketika formulir pemeliharaan disimpan, sistem harus mengarsipkan data tersebut ke dalam riwayat perangkat yang dapat ditelusuri.* |
| *KF22* | *R33* | *Ketika pengurus mengakses dashboard administratif, sistem harus menampilkan data agregat dan riwayat pemakaian air serta energi komunal.* |
| *KF23* | *R34* | *Ketika pengguna mencoba membuka modul administratif, sistem harus memblokir akses jika pengguna tidak memiliki kredensial pengurus.* |
| *KF24* | *R35* | *Sistem harus mengelompokkan dan mengindeks seluruh data pemakaian warga berdasarkan periode waktu (contoh: bulanan) secara konsisten.* |
| *KF25* | *R37* | *Ketika pengurus menginisiasi perhitungan, sistem harus mengkalkulasi iuran warga berdasarkan data pemakaian pada periode yang dipilih.* |
| *KF26* | *R37* | *Ketika proses kalkulasi iuran selesai, sistem harus menampilkan pratinjau hasil perhitungan kepada pengurus untuk proses peninjauan.* |
| *KF27* | *R39* | *Ketika tombol penetapan hasil perhitungan iuran ditekan, sistem harus memverifikasi hak akses administratif pengguna sebelum mengunci data tagihan.* |
| *KF28* | *R40* | *Sistem harus memberlakukan tarif atau aturan perhitungan yang seragam kepada seluruh warga dalam satu periode tagihan yang sama.* |
| *KF29* | *R42* | *Ketika pengurus menginisiasi modul rekapitulasi, sistem harus menampilkan opsi pemilihan periode pemakaian dan iuran.* |
| *KF30* | *R42* | *Ketika pengurus mengonfirmasi pembuatan rekapitulasi, sistem harus membuat (ekspor/cetak) dokumen rekap data pemakaian dan iuran berdasarkan periode terpilih.* |
| *KF31* | *R43* | *Ketika pengguna membuat rekapitulasi administratif, sistem harus memvalidasi kewenangan tingkat pengurus.* |
| *KF32* | *R44* | *Ketika pengurus membuat dokumen rekapitulasi, sistem harus menggunakan data pemakaian dan iuran yang telah berstatus final untuk periode terkait.* |
| *KF33* | *R10* | *Sistem harus menghitung kewajiban iuran setiap warga secara otomatis menggunakan parameter data pemakaian aktual dan tarif periode terkait.* |
| *KF34* | *R17* | *Ketika pengguna menggunakan fitur pencarian laporan, sistem harus memfilter daftar tiket gangguan secara spesifik berdasarkan ID pelapor.* |
| *KF35* | *R28* | *Ketika sistem mendeteksi perubahan status laporan, sistem harus mencatat dan menyimpan timestamp perubahan tersebut.* |

## 3.2 Kebutuhan Non-Fungsional (KNF)

Tabel 3.2. Kebutuhan Non-Fungsional

| ID KNF | ID Kebutuhan | Parameter | Deskripsi Kebutuhan |
| :--- | :--- | :--- | :--- |
| *KNF01* | *R12, R26, R34, R39, R43* | *Security* | *Selama pengguna menggunakan sistem, sistem harus membatasi akses fitur yang muncul pada dashboard pengguna sesuai dengan kewenangannya.* |
| *KNF02* | *R07, R11, R15, R29, R33* | *Security* | *Ketika pengguna membuka data pada sebuah fitur, sistem harus menampilkan data sesuai kewenangan pengguna tersebut.* |
| *KNF03* | *R13, R18, R20* | *Reliability* | *Ketika koneksi jaringan terputus saat pengiriman data, sistem harus menyimpan data tersebut secara sementara untuk dikirim ulang secara otomatis setelah koneksi pulih.* |
| *KNF04* | *R23, R30* | *Reliability* | *Ketika sistem menerima data riwayat kinerja perangkat, sistem harus mampu menampilkannya kembali paling lama 5 detik setelah pengguna membuka halaman riwayat.* |
| *KNF05* | *R18, R20* | *Safety* | *Ketika menerima data kondisi baterai melewati batas aman, sistem harus mengirimkan peringatan kepada teknisi dalam waktu maksimal 3 detik.* |
| *KNF06* | *R01, R04, R33* | *Availability* | *Sistem harus mempertahankan ketersediaan akses (uptime) setidaknya 99% setiap bulan selama jam operasional komunitas.* |
| *KNF07* | *R01, R04, R07, R11, R15* | *Ergonomy* | *Sistem harus menyediakan antarmuka pengguna (UI) yang mudah dioperasikan oleh warga tanpa mewajibkan panduan pelatihan khusus.* |
| *KNF08* | *R22, R25, R29* | *Ergonomy* | *Sistem harus merender antarmuka pencatatan lapangan secara responsif ketika diakses melalui perangkat smartphone teknisi.* |
| *KNF09* | *R01, R11, R33* | *Portability* | *Sistem harus dapat diakses secara langsung melalui berbagai web browser modern tanpa mengharuskan pengguna menginstal aplikasi tambahan.* |
| *KNF10* | *R45* | *Portability* | *Sistem harus mengekspor berkas rekapitulasi ke dalam format dokumen yang universal, yaitu PDF atau CSV.* |
| *KNF11* | *R03, R06* | *Response time* | *Sistem harus memperbarui nilai input sensor pada dashboard pengguna dalam waktu maksimal 2 detik.* |
| *KNF12* | *R41* | *Response time* | *Sistem harus menyelesaikan kalkulasi otomatis seluruh iuran komunal dalam waktu maksimal 5 detik.* |
| *KNF13* | *R03, R06* | *Memory* | *Sistem harus mengeksekusi firmware pembacaan sensor dengan penggunaan memori yang tidak melewati batas kapasitas memori internal mikrokontroler.* |

---

# BAB 4: Pemodelan Use Case

## 4.1 Identifikasi Aktor
Salin ulang daftar aktor final dari BAB 3.1 dokumen *Use Case & Scenario Use Case* atau *Class Diagram*. Tambahkan ID Aktor mengikuti Aturan Penomoran pada 1.4.

| ID Aktor | Aktor | Deskripsi |
| :--- | :--- | :--- |
| *A01* | *Pelanggan* | *Pengguna yang memesan produk, mengelola keranjang, dan menyelesaikan pembayaran melalui sistem.* |
| *...* | *...* | *...* |

## 4.2 Identifikasi Use Case
Salin ulang daftar Use Case versi terbaru dari BAB 3.2 dokumen *Class Diagram*, pastikan seluruh ID KF yang dirujuk sudah sesuai dengan tabel pada 3.1.

| ID UC | Nama Use Case | Deskripsi Singkat | Aktor | ID KF |
| :--- | :--- | :--- | :--- | :--- |
| *UC01* | *Memesan Produk* | *Pelanggan memilih produk hingga pesanan tersimpan di sistem.* | *Pelanggan* | *KF01, KF02* |
| *UC02* | *Melihat Keranjang* | *Pelanggan melihat daftar item yang telah dipilih sebelum checkout.* | *Pelanggan* | *KF02* |
| *UC03* | *Melakukan Pembayaran* | *Pelanggan menyelesaikan pembayaran atas pesanan yang dibuat.* | *Pelanggan* | *KF03, KF04, KF05* |
| *UC04* | *Memilih Metode Pembayaran* | *Pelanggan memilih metode pembayaran alternatif (kartu atau e-wallet).* | *Pelanggan* | *KF03* |
| *UC05* | *Melihat Riwayat Pesanan* | *Pelanggan melihat daftar pesanan yang pernah dibuat beserta statusnya.* | *Pelanggan* | *KF06* |
| *...* | *...* | *...* | *...* | *...* |

## 4.3 Use Case Diagram
Salin ulang Use Case Diagram dari BAB 3.3 dokumen *Use Case & Scenario Use Case* atau *Class Diagram* (gunakan versi paling akhir/terbaru apabila terdapat perubahan).

<p align="center">
<img alt="Contoh Use Case Diagram" src="./assets/diagram/contoh-uc-diagram.webp" width="70%">
</p>
<p align="center">
<i>Gambar 2. Contoh Use Case Diagram</i>
</p>

## 4.4 Skenario Use Case
Salin ulang skenario **setiap** use case (skenario normal dan alternatif) dari BAB 3.4 dokumen *Use Case & Scenario Use Case*, sesuaikan dengan daftar UC final pada 4.2. Jika use case melibatkan lebih dari satu aktor manusia yang benar-benar berinteraksi langsung (misalnya *Kasir* yang memverifikasi transaksi setelah *Pelanggan* membayar), tambahkan kolom aksi tersendiri untuk aktor tersebut di samping kolom "Reaksi Perangkat Lunak". Sistem eksternal otomatis seperti *payment gateway* **bukan aktor**, sehingga interaksinya cukup dituliskan sebagai bagian dari "Reaksi Perangkat Lunak", bukan kolom aktor terpisah.

### 4.4.1 Skenario UC01

**Nama Use Case:** *Memesan Produk*

**Skenario Normal**

| No | Aksi Aktor | Reaksi Perangkat Lunak |
| :--- | :--- | :--- |
| 1 | *Pelanggan memilih produk dari katalog* | *Sistem menampilkan detail produk dan menambahkannya ke keranjang* |
| 2 | *Pelanggan menekan tombol checkout* | *Sistem membuat pesanan baru dari isi keranjang dan menampilkan ringkasan pesanan* |
| ... | *...* | *...* |

**Skenario Alternatif 1: Produk Tidak Tersedia**

| No | Aksi Aktor | Reaksi Perangkat Lunak |
| :--- | :--- | :--- |
| 1 | *Pelanggan memilih produk dari katalog* | *Sistem menampilkan pesan "Produk tidak tersedia" karena stok habis* |
| 2 | *Pelanggan memilih produk lain* | *Sistem kembali ke langkah 1 skenario normal* |
| ... | *...* | *...* |

<sub>*Lanjutkan pola 4.4.x ini untuk setiap ID UC pada 4.2, sampai seluruh use case memiliki skenarionya masing-masing.*<sub>

---

# BAB 5: Pemodelan Kelas

## 5.1 Identifikasi Kelas
Salin ulang seluruh kelas yang telah diidentifikasi dari BAB 4.1 dokumen *Class Diagram*.

| ID Kelas | Nama Kelas | Deskripsi Kelas | ID Use Case |
| :--- | :--- | :--- | :--- |
| *C01* | *Pelanggan* | *Menyimpan data akun pelanggan yang membuat pesanan.* | *UC01, UC05* |
| *C02* | *Pesanan* | *Menyimpan data pesanan beserta status pembayarannya.* | *UC01, UC03, UC05* |
| *C03* | *Keranjang* | *Menyimpan sementara item yang dipilih sebelum checkout.* | *UC01, UC02* |
| *...* | *...* | *...* | *...* |

## 5.2 Diagram Kelas per Use Case
Salin ulang diagram kelas untuk setiap use case dari BAB 4.2 dokumen *Class Diagram*, lengkap dengan tabel atribut dan metode/operasinya.

### 5.2.1 Use Case UC01

**Nama Use Case:** *Memesan Produk*

<p align="center">
<img alt="Contoh Class Diagram" src="./assets/diagram/contoh-class-diagram.webp" width="70%">
</p>
<p align="center">
<i>Gambar 3. Contoh Diagram Kelas Use Case UC01</i>
</p>

| ID Kelas | Nama Kelas | Atribut | Metode/Operasi |
| :--- | :--- | :--- | :--- |
| *C02* | *Pesanan* | *idPesanan, total, status* | *buatPesanan(), hitungTotal()* |
| *C03* | *Keranjang* | *daftarItem* | *tambahItem(), checkout()* |
| *...* | *...* | *...* | *...* |

> Lanjutkan pola **5.2.x** untuk setiap use case pada 4.2.

## 5.3 Diagram Kelas Keseluruhan
Gabungkan seluruh kelas dan hubungan antarkelas dari BAB 4.3 dokumen *Class Diagram* menjadi satu diagram kelas keseluruhan. Pastikan tidak ada kelas yang terduplikasi atau tertinggal.

<p align="center">
<img alt="Contoh Class Diagram Keseluruhan" src="./assets/diagram/contoh-class-diagram.webp" width="70%">
</p>
<p align="center">
<i>Gambar 4. Contoh Diagram Kelas Keseluruhan</i>
</p>

| ID Kelas | Nama Kelas | Atribut | Metode/Operasi |
| :--- | :--- | :--- | :--- |
| *C01* | *Pelanggan* | *idPelanggan, nama, email* | *lihatRiwayatPesanan()* |
| *C02* | *Pesanan* | *idPesanan, total, status* | *hitungTotal(), perbaruiStatus()* |
| *...* | *...* | *...* | *...* |

---

# BAB 6: Traceability
Salin ulang tabel Traceability dari BAB 5 dokumen *Class Diagram*, cocokkan setiap Kebutuhan Fungsional, Use Case, dan Kelas yang saling terkait.

| ID Kelas | ID Use Case | ID KF |
| :--- | :--- | :--- |
| *C01* | *UC01, UC05* | *KF01, KF06* |
| *C02* | *UC01, UC03, UC05* | *KF01, KF02, KF05, KF06* |
| *C03* | *UC01, UC02* | *KF01, KF02* |
| *...* | *...* | *...* |

---

# Referensi
- Diagram UML: [https://www.drawio.com/](https://www.drawio.com/), [https://staruml.io/](https://staruml.io/)

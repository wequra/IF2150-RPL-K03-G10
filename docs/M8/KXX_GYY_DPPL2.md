<h1>
IF2150 REKAYASA PERANGKAT LUNAK
<br>
TUGAS 5
<br>
DESKRIPSI PERANCANGAN PERANGKAT LUNAK (DPPL)
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
> Dokumen ini melanjutkan **Deskripsi Perancangan Perangkat Lunak**. Gunakan nama, ID, kebutuhan, dan use case yang konsisten dengan kedua dokumen tersebut. Contoh pola ID baru di bawah dapat disesuaikan dengan kesepakatan kelompok, ID yang sudah ada tetap dipertahankan.

<br>

---


# BAB 1: Pendahuluan

## 1.1 Tujuan Penulisan Dokumen
Tuliskan dengan ringkas tujuan dokumen DPPL ini dibuat dan siapa saja yang akan menggunakan dokumen ini.

## 1.2 Lingkup Masalah
Tuliskan dengan ringkas nama aplikasi dan deskripsi singkatnya. Bagian ini maksimal berisi satu paragraf, dapat diambil dari SKPL.

## 1.3 Definisi, Istilah, dan Singkatan
Semua definisi dan singkatan yang digunakan dalam dokumen ini beserta penjelasannya.

Tabel 1.3. Definisi Istilah dan Singkatan

| Singkatan, Akronim, atau Istilah | Penjelasan |
| :--- | :--- |
| *P/L* | *Singkatan dari Perangkat Lunak, yaitu aplikasi yang memberikan perintah kepada komputer untuk menjalankan tugas tertentu.* |
| *DPPL* | *Singkatan dari Spesifikasi Kebutuhan Perangkat Lunak, yaitu dokumen yang merangkum kriteria-kriteria yang diperlukan untuk membangun aplikasi menjalankan tugasnya.* |
| *UC* | *Singkatan dari Use Case.* |
| *...* | *...* |

## 1.4 Aturan Penomoran
Tuliskan aturan penomoran (ID) yang digunakan dalam dokumen ini. Gunakan pola ID yang **sama** dengan yang sudah dipakai pada dokumen-dokumen sebelumnya, jangan membuat pola baru di dokumen ini.

Tabel 1.4. Aturan Penomoran

| Hal/Bagian | Penomoran | Keterangan |
| :--- | :--- | :--- |
| *Uce Case* | *UCXX* | |
| *Kelas* | *CXX* | |
| *...* | *...* |

## 1.5 Referensi
Cantumkan dokumentasi P/L yang dirujuk oleh dokumen ini, **minimal dokumen SKPL dan APL**. Tambahkan buku, panduan, atau dokumentasi lain apabila digunakan.

## 1.6 Deskripsi Umum Dokumen (Ikhtisar)
Tuliskan sistematika pembahasan dokumen ini secara ringkas dan runut, dengan maksimal 1 paragraf.

<br>

---

# BAB 2: Perancangan Arsitektur

## 2.1 Rancangan Lingkungan Implementasi

Sebutkan *operating system*, DBMS, *development tools*, *filing system*, dan bahasa pemrograman yang digunakan.

## 2.2 Style/Pattern Arsitektur Acuan

Tentukan *architectural style* atau *pattern* yang menjadi acuan aplikasi, misalnya *layered architecture*, *client-server*, *repository*, *pipe and filter*, atau MVC (*Model-View-Controller*).


Gunakan hasil **BAB 1 Style/Pattern Arsitektur Acuan pada dokumen APL**, termasuk alasan pemilihan dan gambar penerapannya pada P/L kelompok. Gunakan komponen aplikasi sendiri pada gambar, bukan hanya contoh pola umum.

<p align="center">
<img alt="Contoh Arsitektur MVC" src="./assets/diagram/contoh-arsitektur-mvc.webp" width="40%">
</p>
<p align="center">
<i>Gambar 1. Contoh Arsitektur MVC</i>
</p>

## 2.3 Identifikasi Komponen / Modul / Subsistem

Identifikasi komponen, modul, atau subsistem penyusun aplikasi berdasarkan *pattern* yang telah ditetapkan. Jelaskan tanggung jawab masing-masing komponen. Pengelompokan dapat mengikuti lapisan arsitektur atau fungsi/peran komponen dalam sistem.

Dapat menyalin dari dokumen DPPL sebelumnya

Tabel 2.3. Identifikasi Komponen/Modul/Subsistem

| Nama Komponen/Modul/Subsistem | Jenis | Penjelasan |
| :--- | :--- | :--- |
| *[Nama komponen/modul/subsistem]* | *[Jenis]* | *[Tanggung jawab komponen]* |
| *[Nama komponen/modul/subsistem]* | *[Jenis]* | *[Tanggung jawab komponen]* |
| *...* | *...* | *...* |

## 2.4 Model Arsitektur Perangkat Lunak

Buat model arsitektur dalam bentuk satu atau lebih *view* yang memperlihatkan interaksi dan kolaborasi komponen, modul, serta subsistem dalam menjalankan fungsi sistem. Pilih notasi yang sesuai. Contoh *view*: *Logical View*, *Process View*, *Development View*, dan *Physical View*.

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

## 3.2 Use Case XX

Silahkan lanjutkan untuk  *use case* berikutnya dengan content yang sama dengan 3.1

<br>

---

# BAB 4: Diagram Kelas Keseluruhan

## 4.1 Diagram Kelas

**Bagian ini diisi dengan diagram kelas keseluruhan.**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-class_diargam.png" width="35%">
</p>
<p align="center">
<i>Gambar 4.1. Diagram Kelas Perancangan Keseluruhan [Nama P/L]</i>
</p>

Tabel 4.1. Daftar Kelas Perancangan Keseluruhan

| ID Kelas | Nama Kelas | Atribut | Metode/Operasi |
| :--- | :--- | :--- | :--- |
| *[C01]* | *[Nama kelas]* | *[Daftar atribut]* | *[Daftar metode/operasi]* |
| *[C02]* | *[Nama kelas]* | *[Daftar atribut]* | *[Daftar metode/operasi]* |
| *[C03]* | *[Nama kelas]* | *[Daftar atribut]* | *[Daftar metode/operasi]* |
| *...* | *...* | *...* | *...* |

---

# BAB 5: Perancangan Rinci Kelas

Bab ini menjabarkan perancangan rinci seluruh kelas perancangan Fajar Tech: daftar kelas beserta kelas analisis terkait, operasi dan atribut dengan visibilitas serta tipe data, dan algoritma/*query* untuk operasi yang dianggap penting. Penomoran mengikuti §1.4; tipe data mengikuti Tabel 4.1–4.2 BAB 4. Kelas perancangan terdiri atas **28 kelas analisis** (C01–C28) yang dipertajam dan **22 kelas perancangan tambahan** turunan komponen arsitektur APL (view, controller, modul domain, data boundary, dan `Database`), sehingga total **50 kelas**.

Tabel 5.1. Daftar Kelas Perancangan dan Kelas Analisis Terkait

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
| :--- | :--- | :--- |
| 1 | `Akun` «entity, abstract» | C01 – Akun |
| 2 | `Warga` «entity» | C02 – Warga |
| 3 | `Teknisi` «entity» | C03 – Teknisi |
| 4 | `Pengurus` «entity» | C04 – Pengurus |
| 5 | `CalonPengguna` «entity» | C05 – CalonPengguna |
| 6 | `StatusAkun` «enumeration» | C06 – StatusAkun |
| 7 | `Perangkat` «entity, abstract» | C07 – Perangkat |
| 8 | `TangkiAir` «entity» | C08 – TangkiAir |
| 9 | `Baterai` «entity» | C09 – Baterai |
| 10 | `PanelSurya` «entity» | C10 – PanelSurya |
| 11 | `PembacaanSensor` «entity» | C11 – PembacaanSensor |
| 12 | `DataHistorisKinerja` «entity» | C12 – DataHistorisKinerja |
| 13 | `RentangWaktu` «entity» | C13 – RentangWaktu |
| 14 | `Periode` «entity» | C14 – Periode |
| 15 | `DataPemakaian` «entity» | C15 – DataPemakaian |
| 16 | `AturanTarif` «entity» | C16 – AturanTarif |
| 17 | `Tagihan` «entity» | C17 – Tagihan |
| 18 | `StatusTagihan` «enumeration» | C18 – StatusTagihan |
| 19 | `KalkulatorIuran` «control, service» | C19 – KalkulatorIuran |
| 20 | `LaporanGangguan` «entity» | C20 – LaporanGangguan |
| 21 | `StatusLaporan` «enumeration» | C21 – StatusLaporan |
| 22 | `RiwayatStatusLaporan` «entity» | C22 – RiwayatStatusLaporan |
| 23 | `PenugasanPerangkat` «entity» | C23 – PenugasanPerangkat |
| 24 | `PenugasanLaporan` «entity» | C24 – PenugasanLaporan |
| 25 | `Notifikasi` «entity» | C25 – Notifikasi |
| 26 | `PeringatanDayaKritis` «entity» | C26 – PeringatanDayaKritis |
| 27 | `CatatanPemeliharaan` «entity» | C27 – CatatanPemeliharaan |
| 28 | `Rekapitulasi` «entity» | C28 – Rekapitulasi |
| 29 | `WargaView` «boundary» | — |
| 30 | `TeknisiView` «boundary» | — |
| 31 | `PengurusView` «boundary» | — |
| 32 | `AuthView` «boundary» | — |
| 33 | `TelemetriAPI` «boundary» | — |
| 34 | `MonitoringController` «control» | — |
| 35 | `LaporanController` «control» | — |
| 36 | `PemeliharaanController` «control» | — |
| 37 | `IuranController` «control» | — |
| 38 | `AkunController` «control» | — |
| 39 | `Validasi` «control, utility» | — |
| 40 | `ModulAkun` «control, service» | — |
| 41 | `ModulMonitoring` «control, service» | — |
| 42 | `ModulLaporan` «control, service» | — |
| 43 | `ModulPemeliharaan` «control, service» | — |
| 44 | `ModulIuran` «control, service» | — |
| 45 | `ModulNotifikasi` «control, service» | — |
| 46 | `DataAkunBoundary` «boundary, repository» | — |
| 47 | `DataPerangkatBoundary` «boundary, repository» | — |
| 48 | `DataLaporanBoundary` «boundary, repository» | — |
| 49 | `DataIuranBoundary` «boundary, repository» | — |
| 50 | `Database` «boundary, persistence» | — |

---

## 5.1 Kelas Akun

**Nama Kelas:** *Akun*  
**ID Kelas:** *C01*

Tabel 5.1.1. Operasi Kelas Akun

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ cocokKredensial(email: String, password: String): Boolean` | public | Memverifikasi kecocokan email dan password dengan kredensial tersimpan. |
| `+ sudahDisetujui(): Boolean` | public | Memeriksa apakah status akun sudah `DISETUJUI`. |
| `+ ubahStatus(statusBaru: StatusAkun): Void` | public | Mengubah status akun. |
| `+ buatAkun(peran: String): Akun` {static} | public | *Factory method* pembuat subclass peran. |
| `+ dashboardTujuan(): String` {abstract} | public | Metode polimorfik penentu rute dasbor. |

Tabel 5.1.2. Atribut Kelas Akun

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `email` | protected | `String` |
| `password` | protected | `String` |
| `nama` | protected | `String` |
| `statusAkun` | protected | `StatusAkun` |

### 5.1.1 Algoritma/Query

**Nama Kelas:** *Akun*  
**Nama Operasi:** `+ cocokKredensial(email: String, password: String): Boolean`  
**ID Algoritma:** *Algo-001*

```text
FUNCTION cocokKredensial(email, password) -> Boolean
    IF this.email ≠ email THEN RETURN FALSE
    RETURN hash(password) = this.password
END FUNCTION
```

**Nama Kelas:** *Akun*  
**Nama Operasi:** `+ buatAkun(peran: String): Akun` {static}  
**ID Algoritma:** *Algo-002*

```text
FUNCTION buatAkun(peran) -> Akun
    SWITCH peran
        CASE "Warga"    : RETURN NEW Warga()
        CASE "Teknisi"  : RETURN NEW Teknisi()
        CASE "Pengurus" : RETURN NEW Pengurus()
        DEFAULT         : THROW InvalidRoleException
    END SWITCH
END FUNCTION
```

---

## 5.2 Kelas Warga

**Nama Kelas:** *Warga*  
**ID Kelas:** *C02* (extends C01)

Tabel 5.2.1. Operasi Kelas Warga

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ getIdWarga(): Integer` | public | Mengembalikan ID warga. |
| `+ validasiKeanggotaan(idKomunitas: String): Boolean` | public | Memverifikasi keanggotaan warga. |
| `+ pantauPemantauan(): Tampilan` | public | Data pemantauan dashboard (UC01). |
| `+ lihatTagihan(): List<Tagihan>` | public | Daftar tagihan final (UC02). |
| `+ kirimLaporan(data: FormLaporan): HasilLaporan` | public | Membuat laporan baru (UC03). |
| `+ lihatDaftarLaporan(): List<LaporanGangguan>` | public | Daftar laporan warga (UC04). |
| `+ pilihLaporan(idLaporan: String): DetailLaporan` | public | Detail laporan (UC04). |
| `+ dashboardTujuan(): String` | public | Mengembalikan `"/dashboard/warga"`. |

Tabel 5.2.2. Atribut Kelas Warga

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idWarga` | private | `Integer` |
| `idKomunitas` | private | `String` |
| `statusTerdaftar` | private | `Boolean` |

### 5.2.1 Algoritma/Query

**Nama Kelas:** *Warga*  
**Nama Operasi:** `+ validasiKeanggotaan(idKomunitas: String): Boolean`  
**ID Algoritma:** *Algo-003*

```text
FUNCTION validasiKeanggotaan(idKomunitas) -> Boolean
    IF this.statusTerdaftar = FALSE THEN RETURN FALSE
    RETURN this.idKomunitas = idKomunitas
END FUNCTION
```

**Nama Kelas:** *Warga*  
**Nama Operasi:** `+ kirimLaporan(data: FormLaporan): HasilLaporan`  
**ID Algoritma:** *Algo-004*

```text
FUNCTION kirimLaporan(data) -> HasilLaporan
    IF NOT validasiKeanggotaan(sesi.idKomunitas) THEN
        RETURN HasilLaporan.gagal("Tidak memiliki otorisasi")
    END IF
    laporan ← NEW LaporanGangguan(data, this.idWarga, now())
    laporan.setStatusMenunggu()
    IF laporan.simpan() THEN RETURN HasilLaporan.sukses(laporan.idLaporan)
    RETURN HasilLaporan.gagal("Penyimpanan gagal")
END FUNCTION
```

Tabel 5.2.3. Query Operasi kirimLaporan

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| Q-001 | `SELECT id_warga, id_komunitas, status_terdaftar FROM warga WHERE id_warga = ?` | Verifikasi keanggotaan. |
| Q-002 | `INSERT INTO laporan_gangguan (id_laporan, id_warga, jenis_gangguan, deskripsi, status, waktu_dibuat) VALUES (?, ?, ?, ?, 'MENUNGGU', ?)` | Simpan laporan. |

---

## 5.3 Kelas Teknisi

**Nama Kelas:** *Teknisi*  
**ID Kelas:** *C03* (extends C01)

Tabel 5.3.1. Operasi Kelas Teknisi

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ getIdTeknisi(): String` | public | ID teknisi. |
| `+ terimaNotifikasi(notif: PeringatanDayaKritis): Void` | public | Terima notifikasi kritis (UC05). |
| `+ pilihRentangWaktu(mulai: DateTime, selesai: DateTime): RentangWaktu` | public | Bentuk rentang tervalidasi (UC06). |
| `+ lihatRiwayatKinerja(rentang: RentangWaktu): List<DataHistorisKinerja>` | public | Data historis panel (UC06). |
| `+ ubahStatusLaporan(idLaporan: String, statusBaru: StatusLaporan): HasilStatus` | public | Perbarui status laporan (UC07). |
| `+ buatCatatanPemeliharaan(data: FormPemeliharaan): HasilPemeliharaan` | public | Catat pemeliharaan (UC08). |
| `+ dashboardTujuan(): String` | public | Mengembalikan `"/dashboard/teknisi"`. |

Tabel 5.3.2. Atribut Kelas Teknisi

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idTeknisi` | private | `String` |
| `kontak` | private | `String` |

### 5.3.1 Algoritma/Query

**Nama Kelas:** *Teknisi*  
**Nama Operasi:** `+ ubahStatusLaporan(idLaporan: String, statusBaru: StatusLaporan): HasilStatus`  
**ID Algoritma:** *Algo-005*

```text
FUNCTION ubahStatusLaporan(idLaporan, statusBaru) -> HasilStatus
    tugas ← DataLaporanBoundary.cariPenugasan(this.idTeknisi, idLaporan)
    IF tugas = NULL THEN RETURN HasilStatus.gagal("Teknisi tidak berwenang")
    laporan ← DataLaporanBoundary.cariDetailTugas(this.idTeknisi, idLaporan)
    IF NOT laporan.validasiTransisi(statusBaru) THEN
        RETURN HasilStatus.gagal("Transisi tidak valid", laporan.statusBerikutnya())
    END IF
    statusLama ← laporan.status
    laporan.ubahStatus(statusBaru)
    riwayat ← NEW RiwayatStatusLaporan(idLaporan, statusBaru, now())
    IF DataLaporanBoundary.simpanStatusDanRiwayat(laporan, riwayat, this.idTeknisi, statusLama) THEN
        RETURN HasilStatus.sukses()
    END IF
    RETURN HasilStatus.gagal("Penyimpanan gagal")
END FUNCTION
```

---

## 5.4 Kelas Pengurus

**Nama Kelas:** *Pengurus*  
**ID Kelas:** *C04* (extends C01)

Tabel 5.4.1. Operasi Kelas Pengurus

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ getIdPengurus(): String` | public | ID pengurus. |
| `+ verifikasiKewenangan(): Boolean` | public | Periksa kewenangan (KF23). |
| `+ pilihPeriode(bulan: Integer, tahun: Integer): Periode` | public | Bentuk objek periode. |
| `+ hitungIuran(periode: Periode): List<Tagihan>` | public | Delegasi ke `KalkulatorIuran.hitung()`. |
| `+ tinjauHasil(daftar: List<Tagihan>): Void` | public | Tampilkan pratinjau. |
| `+ tetapkanFinal(periode: Periode): Void` | public | Finalisasi tagihan periode. |
| `+ buatRekapitulasi(periode: Periode): Rekapitulasi` | public | Buat rekapitulasi. |
| `+ lihatAkunMenunggu(): List<Akun>` | public | Akun menunggu persetujuan (UC14). |
| `+ setujuiAkun(akun: Akun): Void` | public | Setujui akun. |
| `+ tolakAkun(akun: Akun): Void` | public | Tolak akun. |
| `+ dashboardTujuan(): String` | public | Mengembalikan `"/dashboard/pengurus"`. |

Tabel 5.4.2. Atribut Kelas Pengurus

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idPengurus` | private | `String` |

### 5.4.1 Algoritma/Query

**Nama Kelas:** *Pengurus*  
**Nama Operasi:** `+ verifikasiKewenangan(): Boolean`  
**ID Algoritma:** *Algo-006*

```text
FUNCTION verifikasiKewenangan() -> Boolean
    RETURN this INSTANCEOF Pengurus AND this.statusAkun = StatusAkun.DISETUJUI
END FUNCTION
```

**Nama Kelas:** *Pengurus*  
**Nama Operasi:** `+ tetapkanFinal(periode: Periode): Void`  
**ID Algoritma:** *Algo-007*

```text
PROCEDURE tetapkanFinal(periode)
    IF NOT verifikasiKewenangan() THEN THROW UnauthorizedException
    tagihanList ← DataIuranBoundary.ambilTagihanPeriode(periode.idPeriode)
    FOR EACH tagihan IN tagihanList DO tagihan.tetapkanFinal() END FOR
    DataIuranBoundary.simpanDaftarTagihan(tagihanList)
    periode.tandaiFinal()
    DataIuranBoundary.perbaruiPeriode(periode)
END PROCEDURE
```

---

## 5.5 Kelas CalonPengguna

**Nama Kelas:** *CalonPengguna*  
**ID Kelas:** *C05*

Tabel 5.5.1. Operasi Kelas CalonPengguna

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ daftarkan(): Akun` | public | Membuat akun berstatus Menunggu Persetujuan. |

Tabel 5.5.2. Atribut Kelas CalonPengguna

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `nama` | private | `String` |
| `email` | private | `String` |
| `password` | private | `String` |
| `peranPilihan` | private | `String` |

### 5.5.1 Algoritma/Query

**Nama Kelas:** *CalonPengguna*  
**Nama Operasi:** `+ daftarkan(): Akun`  
**ID Algoritma:** *Algo-008*

```text
FUNCTION daftarkan() -> Akun
    akun ← Akun.buatAkun(this.peranPilihan)
    akun.email ← this.email
    akun.password ← hash(this.password)
    akun.nama ← this.nama
    akun.ubahStatus(StatusAkun.MENUNGGU)
    RETURN akun
END FUNCTION
```

---

## 5.6 Kelas StatusAkun

**Nama Kelas:** *StatusAkun*  
**ID Kelas:** *C06* «enumeration»

Tabel 5.6.1. Operasi Kelas StatusAkun

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ label(): String` | public | Label tampilan status. |

Tabel 5.6.2. Atribut Kelas StatusAkun

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `MENUNGGU` | public (readOnly) | `StatusAkun` |
| `DISETUJUI` | public (readOnly) | `StatusAkun` |
| `DITOLAK` | public (readOnly) | `StatusAkun` |

### 5.6.1 Algoritma/Query

`label()` adalah pemetaan langsung (switch-case); algoritma rinci tidak diperlukan.

---

## 5.7 Kelas Perangkat

**Nama Kelas:** *Perangkat*  
**ID Kelas:** *C07* (abstract)

Tabel 5.7.1. Operasi Kelas Perangkat

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ getIdPerangkat(): String` | public | ID perangkat. |
| `+ statusTerbaru(): String` {abstract} | public | Status perangkat; di-override subclass. |
| `+ pembacaanTerakhir(): PembacaanSensor` | public | Pembacaan sensor terakhir. |
| `+ getRiwayatPemeliharaan(): List<CatatanPemeliharaan>` | public | Riwayat pemeliharaan. |

Tabel 5.7.2. Atribut Kelas Perangkat

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idPerangkat` | protected | `String` |
| `nama` | protected | `String` |
| `lokasi` | protected | `String` |

### 5.7.1 Algoritma/Query

`statusTerbaru()` abstract; operasi lain berupa getter/akses `DataPerangkatBoundary`.

---

## 5.8 Kelas TangkiAir

**Nama Kelas:** *TangkiAir*  
**ID Kelas:** *C08* (extends C07)

Tabel 5.8.1. Operasi Kelas TangkiAir

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ statusAir(): String` | public | Status air (Normal/Rendah/Kritis). |
| `+ statusTerbaru(): String` | public | Override status perangkat. |

Tabel 5.8.2. Atribut Kelas TangkiAir

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idTangki` | private | `String` |
| `volumeLiter` | private | `Double` |
| `ambangRendah` | private | `Double` |
| `ambangKritis` | private | `Double` |

### 5.8.1 Algoritma/Query

**Nama Kelas:** *TangkiAir*  
**Nama Operasi:** `+ statusAir(): String`  
**ID Algoritma:** *Algo-009*

```text
FUNCTION statusAir() -> String
    IF this.volumeLiter ≤ this.ambangKritis THEN RETURN "Kritis"
    ELSE IF this.volumeLiter ≤ this.ambangRendah THEN RETURN "Rendah"
    ELSE RETURN "Normal"
    END IF
END FUNCTION
```

---

## 5.9 Kelas Baterai

**Nama Kelas:** *Baterai*  
**ID Kelas:** *C09* (extends C07)

Tabel 5.9.1. Operasi Kelas Baterai

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ cekKapasitas(): Boolean` | public | Cek kapasitas di bawah ambang aman. |
| `+ kapasitas(): Double` | public | Kapasitas persen. |
| `+ statusTerbaru(): String` | public | Override status perangkat. |

Tabel 5.9.2. Atribut Kelas Baterai

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idBaterai` | private | `String` |
| `kapasitasPersen` | private | `Double` |
| `ambangBatasAman` | private | `Double` |

### 5.9.1 Algoritma/Query

**Nama Kelas:** *Baterai*  
**Nama Operasi:** `+ cekKapasitas(): Boolean`  
**ID Algoritma:** *Algo-010*

```text
FUNCTION cekKapasitas() -> Boolean
    RETURN this.kapasitasPersen < this.ambangBatasAman
END FUNCTION
```

---

## 5.10 Kelas PanelSurya

**Nama Kelas:** *PanelSurya*  
**ID Kelas:** *C10* (extends C07)

Tabel 5.10.1. Operasi Kelas PanelSurya

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ dayaSaatIni(): Double` | public | Daya keluaran terkini. |
| `+ getDataKinerja(rentang: RentangWaktu): List<DataHistorisKinerja>` | public | Data historis dalam rentang. |
| `+ statusTerbaru(): String` | public | Override status perangkat. |

Tabel 5.10.2. Atribut Kelas PanelSurya

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idPanel` | private | `String` |
| `dayaWatt` | private | `Double` |
| `kapasitas` | private | `Double` |

### 5.10.1 Algoritma/Query

`getDataKinerja` mendelegasikan ke `DataPerangkatBoundary.ambilHistorisKinerja(idPanel, rentang)`.

---

## 5.11 Kelas PembacaanSensor

**Nama Kelas:** *PembacaanSensor*  
**ID Kelas:** *C11*

Tabel 5.11.1. Operasi Kelas PembacaanSensor

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ catat(): Boolean` | public | Menyimpan pembacaan. |

Tabel 5.11.2. Atribut Kelas PembacaanSensor

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idPembacaan` | private | `String` |
| `nilai` | private | `Double` |
| `satuan` | private | `String` |
| `waktu` | private | `DateTime` |

### 5.11.1 Algoritma/Query

`catat()` meneruskan ke `DataPerangkatBoundary.simpanPembacaan(this)`.

---

## 5.12 Kelas DataHistorisKinerja

**Nama Kelas:** *DataHistorisKinerja*  
**ID Kelas:** *C12*

Tabel 5.12.1. Operasi Kelas DataHistorisKinerja

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ ambilBerdasarkanRentang(rentang: RentangWaktu): List<DataHistorisKinerja>` | public | Ambil data historis dalam rentang. |

Tabel 5.12.2. Atribut Kelas DataHistorisKinerja

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idData` | private | `String` |
| `waktu` | private | `DateTime` |
| `dayaDihasilkan` | private | `Double` |
| `energi` | private | `Double` |

### 5.12.1 Algoritma/Query

Delegasi ke `DataPerangkatBoundary.ambilHistorisKinerja`.

---

## 5.13 Kelas RentangWaktu

**Nama Kelas:** *RentangWaktu*  
**ID Kelas:** *C13*

Tabel 5.13.1. Operasi Kelas RentangWaktu

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ validasi(): Boolean` | public | `waktuMulai ≤ waktuSelesai`. |

Tabel 5.13.2. Atribut Kelas RentangWaktu

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `waktuMulai` | private | `DateTime` |
| `waktuSelesai` | private | `DateTime` |

### 5.13.1 Algoritma/Query

**Nama Kelas:** *RentangWaktu*  
**Nama Operasi:** `+ validasi(): Boolean`  
**ID Algoritma:** *Algo-011*

```text
FUNCTION validasi() -> Boolean
    RETURN this.waktuMulai ≤ this.waktuSelesai
END FUNCTION
```

---

## 5.14 Kelas Periode

**Nama Kelas:** *Periode*  
**ID Kelas:** *C14*

Tabel 5.14.1. Operasi Kelas Periode

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ isFinal(): Boolean` | public | Cek status final. |
| `+ tandaiFinal(): Void` | public | Tandai periode final. |

Tabel 5.14.2. Atribut Kelas Periode

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idPeriode` | private | `String` |
| `bulan` | private | `Integer` |
| `tahun` | private | `Integer` |
| `statusFinal` | private | `Boolean` |

### 5.14.1 Algoritma/Query

`isFinal()` mengembalikan `statusFinal`; `tandaiFinal()` menetapkan `statusFinal ← true`.

---

## 5.15 Kelas DataPemakaian

**Nama Kelas:** *DataPemakaian*  
**ID Kelas:** *C15*

Tabel 5.15.1. Operasi Kelas DataPemakaian

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ isLengkap(): Boolean` | public | Cek kelengkapan data. |

Tabel 5.15.2. Atribut Kelas DataPemakaian

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idPemakaian` | private | `String` |
| `idWarga` | private | `Integer` |
| `idPeriode` | private | `String` |
| `volumeAirM3` | private | `Double` |
| `energiKWh` | private | `Double` |
| `waktuCatat` | private | `DateTime` |

### 5.15.1 Algoritma/Query

**Nama Kelas:** *DataPemakaian*  
**Nama Operasi:** `+ isLengkap(): Boolean`  
**ID Algoritma:** *Algo-012*

```text
FUNCTION isLengkap() -> Boolean
    RETURN this.volumeAirM3 ≠ NULL AND this.energiKWh ≠ NULL AND this.waktuCatat ≠ NULL
END FUNCTION
```

---

## 5.16 Kelas AturanTarif

**Nama Kelas:** *AturanTarif*  
**ID Kelas:** *C16*

Tabel 5.16.1. Operasi Kelas AturanTarif

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ terapkan(volume: Double, energi: Double): Double` | public | Hitung total tarif. |
| `+ isValidUntukPeriode(p: Periode): Boolean` | public | Cek kesesuaian periode. |

Tabel 5.16.2. Atribut Kelas AturanTarif

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idAturan` | private | `String` |
| `tarifAirPerM3` | private | `Double` |
| `tarifEnergiPerKWh` | private | `Double` |
| `biayaTetap` | private | `Double` |
| `periodeId` | private | `String` |

### 5.16.1 Algoritma/Query

**Nama Kelas:** *AturanTarif*  
**Nama Operasi:** `+ terapkan(volume: Double, energi: Double): Double`  
**ID Algoritma:** *Algo-013*

```text
FUNCTION terapkan(volume, energi) -> Double
    RETURN this.biayaTetap + (volume × this.tarifAirPerM3) + (energi × this.tarifEnergiPerKWh)
END FUNCTION
```

---

## 5.17 Kelas Tagihan

**Nama Kelas:** *Tagihan*  
**ID Kelas:** *C17*

Tabel 5.17.1. Operasi Kelas Tagihan

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ hitungTotal(tarif: AturanTarif, pemakaian: DataPemakaian): Double` | public | Hitung total iuran. |
| `+ sudahFinal(): Boolean` | public | Cek status final tagihan. |
| `+ rincian(): String` | public | Rincian tagihan. |
| `+ tetapkanFinal(): Void` | public | Tandai tagihan final. |

Tabel 5.17.2. Atribut Kelas Tagihan

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idTagihan` | private | `String` |
| `idWarga` | private | `Integer` |
| `idPeriode` | private | `String` |
| `jumlahIuran` | private | `Double` |
| `dataPemakaianDasar` | private | `String` |
| `status` | private | `StatusTagihan` |

### 5.17.1 Algoritma/Query

**Nama Kelas:** *Tagihan*  
**Nama Operasi:** `+ hitungTotal(tarif: AturanTarif, pemakaian: DataPemakaian): Double`  
**ID Algoritma:** *Algo-014*

```text
FUNCTION hitungTotal(tarif, pemakaian) -> Double
    this.jumlahIuran ← tarif.terapkan(pemakaian.volumeAirM3, pemakaian.energiKWh)
    RETURN this.jumlahIuran
END FUNCTION
```

---

## 5.18 Kelas StatusTagihan

**Nama Kelas:** *StatusTagihan*  
**ID Kelas:** *C18* «enumeration»

Tabel 5.18.1. Operasi Kelas StatusTagihan

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ label(): String` | public | Label tampilan status tagihan. |

Tabel 5.18.2. Atribut Kelas StatusTagihan

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `DRAFT` | public (readOnly) | `StatusTagihan` |
| `FINAL` | public (readOnly) | `StatusTagihan` |

### 5.18.1 Algoritma/Query

Pemetaan langsung; tidak memerlukan algoritma rinci.

---

## 5.19 Kelas KalkulatorIuran

**Nama Kelas:** *KalkulatorIuran*  
**ID Kelas:** *C19*

Tabel 5.19.1. Operasi Kelas KalkulatorIuran

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ hitung(periode: Periode): List<Tagihan>` | public | Hitung seluruh tagihan periode. |
| `+ pratinjau(periode: Periode): List<Tagihan>` | public | Pratinjau sebelum finalisasi. |
| `+ validasiKelengkapan(periode: Periode): Boolean` | public | Cek kelengkapan data pemakaian. |
| `+ validasiKewenangan(pengurus: Pengurus): Boolean` | public | Cek kewenangan pengurus. |
| `+ tetapkanFinal(periode: Periode, pengurus: Pengurus): Void` | public | Tetapkan seluruh tagihan final. |

Tabel 5.19.2. Atribut Kelas KalkulatorIuran

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| *(stateless domain service)* | — | — |

### 5.19.1 Algoritma/Query

**Nama Kelas:** *KalkulatorIuran*  
**Nama Operasi:** `+ hitung(periode: Periode): List<Tagihan>`  
**ID Algoritma:** *Algo-015*

```text
FUNCTION hitung(periode) -> List<Tagihan>
    tarif ← DataIuranBoundary.ambilAturanTarif(periode.idPeriode)
    IF tarif = NULL THEN THROW TarifNotFoundException
    pemakaianList ← DataIuranBoundary.ambilPemakaianPeriode(periode.idPeriode)
    hasil ← []
    FOR EACH p IN pemakaianList DO
        IF NOT p.isLengkap() THEN CONTINUE
        t ← NEW Tagihan()
        t.idWarga ← p.idWarga
        t.idPeriode ← periode.idPeriode
        t.status ← StatusTagihan.DRAFT
        t.hitungTotal(tarif, p)
        hasil.append(t)
    END FOR
    RETURN hasil
END FUNCTION
```

**Nama Kelas:** *KalkulatorIuran*  
**Nama Operasi:** `+ tetapkanFinal(periode: Periode, pengurus: Pengurus): Void`  
**ID Algoritma:** *Algo-016*

```text
PROCEDURE tetapkanFinal(periode, pengurus)
    IF NOT validasiKewenangan(pengurus) THEN THROW UnauthorizedException
    IF NOT validasiKelengkapan(periode) THEN THROW DataIncompleteException
    tagihanList ← hitung(periode)
    FOR EACH t IN tagihanList DO t.tetapkanFinal() END FOR
    DataIuranBoundary.simpanDaftarTagihan(tagihanList)
    periode.tandaiFinal()
    DataIuranBoundary.perbaruiPeriode(periode)
END PROCEDURE
```

---

## 5.20 Kelas LaporanGangguan

**Nama Kelas:** *LaporanGangguan*  
**ID Kelas:** *C20*

Tabel 5.20.1. Operasi Kelas LaporanGangguan

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ LaporanGangguan(data: FormLaporan, idWarga: Integer, waktu: DateTime): LaporanGangguan` | public | Konstruktor. |
| `+ setStatusMenunggu(): Void` | public | Status awal `MENUNGGU`. |
| `+ getDetailLaporan(): DetailLaporan` | public | Detail laporan. |
| `+ validasiTransisi(statusBaru: StatusLaporan): Boolean` | public | Validasi transisi status. |
| `+ statusBerikutnya(): List<StatusLaporan>` | public | Status legal berikutnya. |
| `+ ubahStatus(statusBaru: StatusLaporan): Void` | public | Ubah status. |
| `+ simpan(): Boolean` | public | Simpan laporan. |

Tabel 5.20.2. Atribut Kelas LaporanGangguan

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idLaporan` | private | `String` |
| `idWarga` | private | `Integer` |
| `jenisGangguan` | private | `String` |
| `deskripsi` | private | `String` |
| `fotoPendukung` | private | `List<URI>` |
| `waktuDibuat` | private | `DateTime` |
| `status` | private | `StatusLaporan` |

### 5.20.1 Algoritma/Query

**Nama Kelas:** *LaporanGangguan*  
**Nama Operasi:** `+ validasiTransisi(statusBaru: StatusLaporan): Boolean`  
**ID Algoritma:** *Algo-017*

```text
FUNCTION validasiTransisi(statusBaru) -> Boolean
    IF this.status = StatusLaporan.MENUNGGU THEN
        RETURN statusBaru = StatusLaporan.SEDANG_DIPERBAIKI
    ELSE IF this.status = StatusLaporan.SEDANG_DIPERBAIKI THEN
        RETURN statusBaru = StatusLaporan.SELESAI
    ELSE RETURN FALSE
    END IF
END FUNCTION
```

---

## 5.21 Kelas StatusLaporan

**Nama Kelas:** *StatusLaporan*  
**ID Kelas:** *C21* «enumeration»

Tabel 5.21.1. Operasi Kelas StatusLaporan

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ label(): String` | public | Label tampilan status laporan. |

Tabel 5.21.2. Atribut Kelas StatusLaporan

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `MENUNGGU` | public (readOnly) | `StatusLaporan` |
| `SEDANG_DIPERBAIKI` | public (readOnly) | `StatusLaporan` |
| `SELESAI` | public (readOnly) | `StatusLaporan` |

### 5.21.1 Algoritma/Query

Pemetaan langsung; tidak memerlukan algoritma rinci.

---

## 5.22 Kelas RiwayatStatusLaporan

**Nama Kelas:** *RiwayatStatusLaporan*  
**ID Kelas:** *C22*

Tabel 5.22.1. Operasi Kelas RiwayatStatusLaporan

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ RiwayatStatusLaporan(idLaporan: String, status: StatusLaporan, waktu: DateTime): RiwayatStatusLaporan` | public | Konstruktor. |
| `+ catat(): Void` | public | Simpan riwayat. |
| `+ getRiwayatPerkembangan(): RingkasanStatus` | public | Ringkasan perkembangan status. |

Tabel 5.22.2. Atribut Kelas RiwayatStatusLaporan

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idRiwayat` | private | `String` |
| `idLaporan` | private | `String` |
| `status` | private | `StatusLaporan` |
| `timestamp` | private | `DateTime` |

### 5.22.1 Algoritma/Query

`catat()` meneruskan ke `DataLaporanBoundary`; tidak ada algoritma kompleks.

---

## 5.23 Kelas PenugasanPerangkat

**Nama Kelas:** *PenugasanPerangkat*  
**ID Kelas:** *C23*

Tabel 5.23.1. Operasi Kelas PenugasanPerangkat

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ verifikasiTanggungJawab(idTeknisi: String, idPerangkat: String): Boolean` | public | Verifikasi tanggung jawab teknisi atas perangkat. |

Tabel 5.23.2. Atribut Kelas PenugasanPerangkat

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idPenugasan` | private | `String` |
| `idTeknisi` | private | `String` |
| `idPerangkat` | private | `String` |

### 5.23.1 Algoritma/Query

**Nama Kelas:** *PenugasanPerangkat*  
**Nama Operasi:** `+ verifikasiTanggungJawab(idTeknisi: String, idPerangkat: String): Boolean`  
**ID Algoritma:** *Algo-018*

```text
FUNCTION verifikasiTanggungJawab(idTeknisi, idPerangkat) -> Boolean
    RETURN this.idTeknisi = idTeknisi AND this.idPerangkat = idPerangkat
END FUNCTION
```

---

## 5.24 Kelas PenugasanLaporan

**Nama Kelas:** *PenugasanLaporan*  
**ID Kelas:** *C24*

Tabel 5.24.1. Operasi Kelas PenugasanLaporan

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ verifikasi(idTeknisi: String, idLaporan: String): Boolean` | public | Verifikasi penugasan teknisi. |

Tabel 5.24.2. Atribut Kelas PenugasanLaporan

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idPenugasan` | private | `String` |
| `idTeknisi` | private | `String` |
| `idLaporan` | private | `String` |
| `waktuPenugasan` | private | `DateTime` |

### 5.24.1 Algoritma/Query

**Nama Kelas:** *PenugasanLaporan*  
**Nama Operasi:** `+ verifikasi(idTeknisi: String, idLaporan: String): Boolean`  
**ID Algoritma:** *Algo-019*

```text
FUNCTION verifikasi(idTeknisi, idLaporan) -> Boolean
    RETURN this.idTeknisi = idTeknisi AND this.idLaporan = idLaporan
END FUNCTION
```

---

## 5.25 Kelas Notifikasi

**Nama Kelas:** *Notifikasi*  
**ID Kelas:** *C25*

Tabel 5.25.1. Operasi Kelas Notifikasi

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ kirim(): Boolean` | public | Kirim notifikasi. |
| `+ tandaiDibaca(): Void` | public | Tandai telah dibaca. |

Tabel 5.25.2. Atribut Kelas Notifikasi

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idNotifikasi` | protected | `String` |
| `pesan` | protected | `String` |
| `waktu` | protected | `DateTime` |
| `statusBaca` | protected | `Boolean` |

### 5.25.1 Algoritma/Query

`kirim()` meneruskan ke `NotifikasiGateway`; `tandaiDibaca()` menetapkan `statusBaca ← true`.

---

## 5.26 Kelas PeringatanDayaKritis

**Nama Kelas:** *PeringatanDayaKritis*  
**ID Kelas:** *C26* (extends C25)

Tabel 5.26.1. Operasi Kelas PeringatanDayaKritis

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ kirim(): Boolean` | public | Kirim; simpan pending bila gagal. |
| `+ simpanPending(): Void` | public | Simpan notifikasi pending. |

Tabel 5.26.2. Atribut Kelas PeringatanDayaKritis

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `level` | private | `String` |
| `kapasitasSaatIni` | private | `Double` |
| `statusPengiriman` | private | `String` |

### 5.26.1 Algoritma/Query

**Nama Kelas:** *PeringatanDayaKritis*  
**Nama Operasi:** `+ kirim(): Boolean`  
**ID Algoritma:** *Algo-020*

```text
FUNCTION kirim() -> Boolean
    TRY
        IF NotifikasiGateway.push(this, this.penerima) THEN
            this.statusPengiriman ← "TERKIRIM"
            RETURN TRUE
        END IF
    CATCH NetworkException
        simpanPending()
        RETURN FALSE
    END TRY
END FUNCTION
```

---

## 5.27 Kelas CatatanPemeliharaan

**Nama Kelas:** *CatatanPemeliharaan*  
**ID Kelas:** *C27*

Tabel 5.27.1. Operasi Kelas CatatanPemeliharaan

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ CatatanPemeliharaan(data: FormPemeliharaan, idTeknisi: String): CatatanPemeliharaan` | public | Konstruktor. |
| `+ validasiFormulir(): Boolean` | public | Cek kelengkapan formulir. |
| `+ simpan(): Boolean` | public | Simpan catatan. |

Tabel 5.27.2. Atribut Kelas CatatanPemeliharaan

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idCatatan` | private | `String` |
| `idTeknisi` | private | `String` |
| `idPerangkat` | private | `String` |
| `waktuPelaksanaan` | private | `DateTime` |
| `tindakan` | private | `String` |
| `catatanHasil` | private | `String` |

### 5.27.1 Algoritma/Query

**Nama Kelas:** *CatatanPemeliharaan*  
**Nama Operasi:** `+ validasiFormulir(): Boolean`  
**ID Algoritma:** *Algo-021*

```text
FUNCTION validasiFormulir() -> Boolean
    RETURN this.idPerangkat ≠ NULL AND this.idPerangkat ≠ ""
       AND this.waktuPelaksanaan ≠ NULL
       AND this.tindakan ≠ NULL AND this.tindakan ≠ ""
END FUNCTION
```

---

## 5.28 Kelas Rekapitulasi

**Nama Kelas:** *Rekapitulasi*  
**ID Kelas:** *C28*

Tabel 5.28.1. Operasi Kelas Rekapitulasi

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ generate(periode: Periode): Rekapitulasi` | public | Hasilkan rekapitulasi. |
| `+ ekspor(format: String): File` | public | Ekspor PDF/CSV. |
| `+ cetak(): Void` | public | Cetak rekapitulasi. |

Tabel 5.28.2. Atribut Kelas Rekapitulasi

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `idRekap` | private | `String` |
| `idPeriode` | private | `String` |
| `totalPemakaianAir` | private | `Double` |
| `totalPemakaianEnergi` | private | `Double` |
| `totalIuran` | private | `Double` |

### 5.28.1 Algoritma/Query

**Nama Kelas:** *Rekapitulasi*  
**Nama Operasi:** `+ generate(periode: Periode): Rekapitulasi`  
**ID Algoritma:** *Algo-022*

```text
FUNCTION generate(periode) -> Rekapitulasi
    pemakaianList ← DataIuranBoundary.ambilPemakaianPeriode(periode.idPeriode)
    tagihanList   ← DataIuranBoundary.ambilTagihanPeriode(periode.idPeriode)
    rekap ← NEW Rekapitulasi(); rekap.idPeriode ← periode.idPeriode
    FOR EACH p IN pemakaianList DO
        rekap.totalPemakaianAir    ← rekap.totalPemakaianAir + p.volumeAirM3
        rekap.totalPemakaianEnergi ← rekap.totalPemakaianEnergi + p.energiKWh
    END FOR
    FOR EACH t IN tagihanList DO rekap.totalIuran ← rekap.totalIuran + t.jumlahIuran END FOR
    DataIuranBoundary.simpanRekapitulasi(rekap)
    RETURN rekap
END FUNCTION
```

---

## 5.29 Kelas WargaView

**Nama Kelas:** *WargaView*  
**ID Kelas:** *—* (Presentation Layer)

Tabel 5.29.1. Operasi Kelas WargaView

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ tampilkanDashboard(): Tampilan` | public | Dashboard pemantauan (UC01). |
| `+ pilihPeriodeTagihan(idPeriode: String): Tampilan` | public | Tagihan final periode (UC02). |
| `+ bukaFormLaporan(): Tampilan` | public | Form laporan (UC03). |
| `+ kirimLaporan(data: FormLaporan): Tampilan` | public | Kirim ke `LaporanController` (UC03). |
| `+ bukaRiwayat(): Tampilan` | public | Daftar laporan (UC04). |
| `+ pilihLaporan(idLaporan: String): Tampilan` | public | Detail laporan (UC04). |
| `+ bukaPerkembangan(idLaporan: String): Tampilan` | public | Riwayat status (UC04). |

Tabel 5.29.2. Atribut Kelas WargaView

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `monitoringController` | private | `MonitoringController` |
| `iuranController` | private | `IuranController` |
| `laporanController` | private | `LaporanController` |

### 5.29.1 Algoritma/Query

View bersifat pasif: meneruskan aksi ke controller dan merender `Tampilan`; tidak ada algoritma bisnis.

---

## 5.30 Kelas TeknisiView

**Nama Kelas:** *TeknisiView*  
**ID Kelas:** *—* (Presentation Layer)

Tabel 5.30.1. Operasi Kelas TeknisiView

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ tampilkanNotifikasiKritis(notif: PeringatanDayaKritis): Tampilan` | public | Peringatan kritis (UC05). |
| `+ pilihRentangKinerja(mulai: DateTime, selesai: DateTime): Tampilan` | public | Rentang kinerja (UC06). |
| `+ bukaPenugasan(): Tampilan` | public | Daftar penugasan (UC07). |
| `+ pilihTugas(idLaporan: String): Tampilan` | public | Detail tugas (UC07). |
| `+ ubahStatus(idLaporan: String, statusBaru: StatusLaporan): Tampilan` | public | Ubah status (UC07). |
| `+ bukaFormPemeliharaan(): Tampilan` | public | Form pemeliharaan (UC08). |
| `+ simpanPemeliharaan(data: FormPemeliharaan): Tampilan` | public | Simpan catatan (UC08). |

Tabel 5.30.2. Atribut Kelas TeknisiView

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `monitoringController` | private | `MonitoringController` |
| `laporanController` | private | `LaporanController` |
| `pemeliharaanController` | private | `PemeliharaanController` |

### 5.30.1 Algoritma/Query

View pasif; meneruskan aksi ke controller terkait.

---

## 5.31 Kelas PengurusView

**Nama Kelas:** *PengurusView*  
**ID Kelas:** *—* (Presentation Layer)

Tabel 5.31.1. Operasi Kelas PengurusView

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ bukaDashboardAnalitik(idPeriode: String): Tampilan` | public | Analitik pemakaian (UC09). |
| `+ bukaPerhitunganIuran(idPeriode: String): Tampilan` | public | Pratinjau iuran (UC10). |
| `+ tekanTetapkanFinal(idPeriode: String): Tampilan` | public | Finalisasi iuran (UC10). |
| `+ bukaMenuRekapitulasi(idPeriode: String): Tampilan` | public | Rekapitulasi (UC11). |
| `+ eksporRekapitulasi(idPeriode: String, format: String): Tampilan` | public | Ekspor rekap (UC11). |
| `+ bukaPersetujuanAkun(): Tampilan` | public | Daftar akun menunggu (UC14). |
| `+ prosesPersetujuan(email: String, disetujui: Boolean): Tampilan` | public | Setujui/tolak (UC14). |

Tabel 5.31.2. Atribut Kelas PengurusView

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `iuranController` | private | `IuranController` |
| `akunController` | private | `AkunController` |

### 5.31.1 Algoritma/Query

View pasif; meneruskan aksi ke controller terkait.

---

## 5.32 Kelas AuthView

**Nama Kelas:** *AuthView*  
**ID Kelas:** *—* (Presentation Layer)

Tabel 5.32.1. Operasi Kelas AuthView

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ bukaRegistrasi(): Tampilan` | public | Halaman registrasi (UC12). |
| `+ tekanDaftar(nama: String, email: String, password: String, peran: String): Tampilan` | public | Kirim ke `AkunController` (UC12). |
| `+ bukaLogin(): Tampilan` | public | Halaman login (UC13). |
| `+ tekanLogin(email: String, password: String): Tampilan` | public | Kirim ke `AkunController` (UC13). |

Tabel 5.32.2. Atribut Kelas AuthView

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `akunController` | private | `AkunController` |

### 5.32.1 Algoritma/Query

View pasif; meneruskan kredensial ke `AkunController`.

---

## 5.33 Kelas TelemetriAPI

**Nama Kelas:** *TelemetriAPI*  
**ID Kelas:** *—* (Presentation Layer)

Tabel 5.33.1. Operasi Kelas TelemetriAPI

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ kirimTelemetri(idPerangkat: String, nilai: Double, satuan: String, waktu: DateTime): ResponseTelemetri` | public | Terima data telemetri perangkat IoT. |

Tabel 5.33.2. Atribut Kelas TelemetriAPI

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `monitoringController` | private | `MonitoringController` |

### 5.33.1 Algoritma/Query

**Nama Kelas:** *TelemetriAPI*  
**Nama Operasi:** `+ kirimTelemetri(...): ResponseTelemetri`  
**ID Algoritma:** *Algo-023*

```text
FUNCTION kirimTelemetri(idPerangkat, nilai, satuan, waktu) -> ResponseTelemetri
    bacaan ← NEW PembacaanSensor(idPerangkat, nilai, satuan, waktu)
    monitoringController.prosesTelemetriBaterai(idPerangkat, nilai)
    IF bacaan.catat() THEN RETURN ResponseTelemetri.ok()
    RETURN ResponseTelemetri.error("Gagal menyimpan telemetri")
END FUNCTION
```

---

## 5.34 Kelas MonitoringController

**Nama Kelas:** *MonitoringController*  
**ID Kelas:** *—* (Business Layer)

Tabel 5.34.1. Operasi Kelas MonitoringController

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ ambilStatusInfrastruktur(): StatusInfrastruktur` | public | Status air dan energi (UC01). |
| `+ prosesTelemetriBaterai(idBaterai: String, kapasitas: Double): Void` | public | Proses telemetri + peringatan (UC05). |
| `+ ambilRiwayatPanel(mulai: DateTime, selesai: DateTime): List<DataHistorisKinerja>` | public | Data historis panel (UC06). |

Tabel 5.34.2. Atribut Kelas MonitoringController

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `modulMonitoring` | private | `ModulMonitoring` |
| `modulNotifikasi` | private | `ModulNotifikasi` |
| `validasi` | private | `Validasi` |

### 5.34.1 Algoritma/Query

**Nama Kelas:** *MonitoringController*  
**Nama Operasi:** `+ prosesTelemetriBaterai(idBaterai: String, kapasitas: Double): Void`  
**ID Algoritma:** *Algo-024*

```text
PROCEDURE prosesTelemetriBaterai(idBaterai, kapasitas)
    baterai ← DataPerangkatBoundary.ambilBateraiTerbaru()
    baterai.kapasitasPersen ← kapasitas
    IF baterai.cekKapasitas() THEN
        modulNotifikasi.kirimPeringatanDayaKritis(baterai)
    END IF
END PROCEDURE
```

---

## 5.35 Kelas LaporanController

**Nama Kelas:** *LaporanController*  
**ID Kelas:** *—* (Business Layer)

Tabel 5.35.1. Operasi Kelas LaporanController

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ kirimLaporan(data: FormLaporan): HasilLaporan` | public | Buat laporan (UC03). |
| `+ daftarMilikWarga(): List<LaporanGangguan>` | public | Daftar laporan warga (UC04). |
| `+ detailMilikWarga(idLaporan: String): DetailLaporan?` | public | Detail laporan (UC04). |
| `+ riwayatMilikWarga(idLaporan: String): List<RingkasanStatus>` | public | Riwayat status (UC04). |
| `+ daftarPenugasan(): List<LaporanGangguan>` | public | Daftar tugas (UC07). |
| `+ detailTugas(idLaporan: String): DetailLaporan?` | public | Detail tugas (UC07). |
| `+ perbaruiStatus(idLaporan: String, statusBaru: StatusLaporan): HasilStatus` | public | Ubah status (UC07). |

Tabel 5.35.2. Atribut Kelas LaporanController

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `sesi` | private | `KonteksSesi` |
| `modul` | private | `ModulLaporan` |
| `validasi` | private | `Validasi` |

### 5.35.1 Algoritma/Query

**Nama Kelas:** *LaporanController*  
**Nama Operasi:** `+ kirimLaporan(data: FormLaporan): HasilLaporan`  
**ID Algoritma:** *Algo-025*

```text
FUNCTION kirimLaporan(data) -> HasilLaporan
    hasilValidasi ← validasi.periksaLaporan(data)
    IF NOT hasilValidasi.valid THEN RETURN HasilLaporan.gagal(hasilValidasi.errors)
    RETURN modul.kirimLaporan(sesi.idWarga, sesi.idKomunitas, data)
END FUNCTION
```

---

## 5.36 Kelas PemeliharaanController

**Nama Kelas:** *PemeliharaanController*  
**ID Kelas:** *—* (Business Layer)

Tabel 5.36.1. Operasi Kelas PemeliharaanController

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ simpanCatatan(data: FormPemeliharaan): HasilPemeliharaan` | public | Simpan pemeliharaan (UC08). |

Tabel 5.36.2. Atribut Kelas PemeliharaanController

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `sesi` | private | `KonteksSesi` |
| `modul` | private | `ModulPemeliharaan` |
| `validasi` | private | `Validasi` |

### 5.36.1 Algoritma/Query

**Nama Kelas:** *PemeliharaanController*  
**Nama Operasi:** `+ simpanCatatan(data: FormPemeliharaan): HasilPemeliharaan`  
**ID Algoritma:** *Algo-026*

```text
FUNCTION simpanCatatan(data) -> HasilPemeliharaan
    hasilValidasi ← validasi.periksaPemeliharaan(data)
    IF NOT hasilValidasi.valid THEN RETURN HasilPemeliharaan.gagal(hasilValidasi.errors)
    RETURN modul.simpanCatatan(sesi.idTeknisi, data)
END FUNCTION
```

---

## 5.37 Kelas IuranController

**Nama Kelas:** *IuranController*  
**ID Kelas:** *—* (Business Layer)

Tabel 5.37.1. Operasi Kelas IuranController

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ periksaKewenangan(akun: Akun): Boolean` | public | Cek kewenangan (KF23). |
| `+ lihatTagihanFinal(idWarga: Integer, idPeriode: String): Tagihan?` | public | Tagihan final (UC02). |
| `+ analisisPemakaian(idPeriode: String): RingkasanPemakaian` | public | Analitik pemakaian (UC09). |
| `+ hitungPratinjauIuran(idPeriode: String): List<Tagihan>` | public | Pratinjau iuran (UC10). |
| `+ tetapkanIuranFinal(idPeriode: String, pengurus: Pengurus): Boolean` | public | Finalisasi iuran (UC10). |
| `+ buatRekapitulasi(idPeriode: String, pengurus: Pengurus): Rekapitulasi?` | public | Rekapitulasi (UC11). |

Tabel 5.37.2. Atribut Kelas IuranController

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `sesi` | private | `KonteksSesi` |
| `modulIuran` | private | `ModulIuran` |
| `validasi` | private | `Validasi` |

### 5.37.1 Algoritma/Query

**Nama Kelas:** *IuranController*  
**Nama Operasi:** `+ periksaKewenangan(akun: Akun): Boolean`  
**ID Algoritma:** *Algo-027*

```text
FUNCTION periksaKewenangan(akun) -> Boolean
    IF akun = NULL OR NOT (akun INSTANCEOF Pengurus) THEN RETURN FALSE
    RETURN akun.verifikasiKewenangan()
END FUNCTION
```

**Nama Kelas:** *IuranController*  
**Nama Operasi:** `+ tetapkanIuranFinal(idPeriode: String, pengurus: Pengurus): Boolean`  
**ID Algoritma:** *Algo-028*

```text
FUNCTION tetapkanIuranFinal(idPeriode, pengurus) -> Boolean
    IF NOT periksaKewenangan(pengurus) THEN RETURN FALSE
    RETURN modulIuran.finalisasiIuran(idPeriode, pengurus)
END FUNCTION
```

---

## 5.38 Kelas AkunController

**Nama Kelas:** *AkunController*  
**ID Kelas:** *—* (Business Layer)

Tabel 5.38.1. Operasi Kelas AkunController

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ daftarkan(nama: String, email: String, password: String, peran: String): HasilRegistrasi` | public | Registrasi (UC12). |
| `+ login(email: String, password: String): HasilLogin` | public | Login (UC13). |
| `+ ambilAkunMenunggu(pengurus: Pengurus): List<Akun>` | public | Akun menunggu (UC14). |
| `+ setujuiAkun(pengurus: Pengurus, email: String): Boolean` | public | Setujui akun (UC14). |
| `+ tolakAkun(pengurus: Pengurus, email: String): Boolean` | public | Tolak akun (UC14). |

Tabel 5.38.2. Atribut Kelas AkunController

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `modulAkun` | private | `ModulAkun` |
| `validasi` | private | `Validasi` |

### 5.38.1 Algoritma/Query

**Nama Kelas:** *AkunController*  
**Nama Operasi:** `+ daftarkan(...): HasilRegistrasi`  
**ID Algoritma:** *Algo-029*

```text
FUNCTION daftarkan(nama, email, password, peran) -> HasilRegistrasi
    existing ← DataAkunBoundary.cariEmail(email)
    IF NOT validasi.validasiRegistrasi(nama, email, password, existing) THEN
        RETURN HasilRegistrasi.gagal("Email sudah terdaftar atau data tidak valid")
    END IF
    calon ← NEW CalonPengguna(nama, email, password, peran)
    akun ← modulAkun.registrasiCalon(calon)
    RETURN HasilRegistrasi.sukses(akun.email)
END FUNCTION
```

**Nama Kelas:** *AkunController*  
**Nama Operasi:** `+ login(email: String, password: String): HasilLogin`  
**ID Algoritma:** *Algo-030*

```text
FUNCTION login(email, password) -> HasilLogin
    akun ← modulAkun.autentikasi(email, password)
    IF akun = NULL THEN RETURN HasilLogin.gagal("Email atau password salah")
    IF NOT akun.sudahDisetujui() THEN RETURN HasilLogin.gagal("Akun menunggu persetujuan")
    RETURN HasilLogin.sukses(akun.dashboardTujuan())
END FUNCTION
```

---

## 5.39 Kelas Validasi

**Nama Kelas:** *Validasi*  
**ID Kelas:** *—* (Business Layer)

Tabel 5.39.1. Operasi Kelas Validasi

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ periksaLaporan(data: FormLaporan): HasilValidasi` | public | Validasi formulir laporan. |
| `+ periksaPemeliharaan(data: FormPemeliharaan): HasilValidasi` | public | Validasi formulir pemeliharaan. |
| `+ validasiPeriode(idPeriode: String): Boolean` | public | Validasi ID periode. |
| `+ validasiRentangWaktu(rentang: RentangWaktu): Boolean` | public | Validasi rentang waktu. |
| `+ validasiRegistrasi(nama: String, email: String, password: String, existing: Akun?): Boolean` | public | Validasi registrasi. |

Tabel 5.39.2. Atribut Kelas Validasi

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `kolomLaporan` | private | `List<String>` |
| `kolomPemeliharaan` | private | `List<String>` |

### 5.39.1 Algoritma/Query

**Nama Kelas:** *Validasi*  
**Nama Operasi:** `+ validasiRegistrasi(...): Boolean`  
**ID Algoritma:** *Algo-031*

```text
FUNCTION validasiRegistrasi(nama, email, password, existing) -> Boolean
    IF nama = NULL OR nama = "" THEN RETURN FALSE
    IF email = NULL OR NOT contains(email, "@") THEN RETURN FALSE
    IF password = NULL OR length(password) < 8 THEN RETURN FALSE
    IF existing ≠ NULL THEN RETURN FALSE
    RETURN TRUE
END FUNCTION
```

---

## 5.40 Kelas ModulAkun

**Nama Kelas:** *ModulAkun*  
**ID Kelas:** *—* (Business Layer)

Tabel 5.40.1. Operasi Kelas ModulAkun

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ ambilWarga(idWarga: Integer): Warga?` | public | Ambil data warga. |
| `+ registrasiCalon(calon: CalonPengguna): Akun` | public | Buat akun dari calon. |
| `+ autentikasi(email: String, password: String): Akun?` | public | Verifikasi kredensial. |
| `+ daftarAkunMenunggu(): List<Akun>` | public | Akun menunggu persetujuan. |
| `+ ubahStatusPersetujuan(email: String, status: StatusAkun): Boolean` | public | Ubah status persetujuan. |

Tabel 5.40.2. Atribut Kelas ModulAkun

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `data` | private | `DataAkunBoundary` |

### 5.40.1 Algoritma/Query

**Nama Kelas:** *ModulAkun*  
**Nama Operasi:** `+ autentikasi(email: String, password: String): Akun?`  
**ID Algoritma:** *Algo-032*

```text
FUNCTION autentikasi(email, password) -> Akun?
    akun ← data.ambilAkun(email)
    IF akun = NULL THEN RETURN NULL
    IF NOT akun.cocokKredensial(email, password) THEN RETURN NULL
    RETURN akun
END FUNCTION
```

---

## 5.41 Kelas ModulMonitoring

**Nama Kelas:** *ModulMonitoring*  
**ID Kelas:** *—* (Business Layer)

Tabel 5.41.1. Operasi Kelas ModulMonitoring

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ evaluasiKetersediaan(): StatusInfrastruktur` | public | Evaluasi status air & energi. |
| `+ catatPembacaan(idPerangkat: String, bacaan: PembacaanSensor): Boolean` | public | Catat pembacaan sensor. |
| `+ ambilHistorisPanel(idPanel: String, rentang: RentangWaktu): List<DataHistorisKinerja>` | public | Data historis panel. |

Tabel 5.41.2. Atribut Kelas ModulMonitoring

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `data` | private | `DataPerangkatBoundary` |

### 5.41.1 Algoritma/Query

**Nama Kelas:** *ModulMonitoring*  
**Nama Operasi:** `+ evaluasiKetersediaan(): StatusInfrastruktur`  
**ID Algoritma:** *Algo-033*

```text
FUNCTION evaluasiKetersediaan() -> StatusInfrastruktur
    tangki  ← data.ambilTangkiTerbaru()
    baterai ← data.ambilBateraiTerbaru()
    panel   ← data.ambilPanelTerbaru()
    RETURN NEW StatusInfrastruktur(tangki.statusAir(), baterai.statusTerbaru(), panel.statusTerbaru())
END FUNCTION
```

---

## 5.42 Kelas ModulLaporan

**Nama Kelas:** *ModulLaporan*  
**ID Kelas:** *—* (Business Layer)

Tabel 5.42.1. Operasi Kelas ModulLaporan

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ kirimLaporan(idWarga: Integer, idKomunitas: String, data: FormLaporan): HasilLaporan` | public | Buat laporan baru. |
| `+ daftarMilikWarga(idWarga: Integer): List<LaporanGangguan>` | public | Daftar laporan warga. |
| `+ detailMilikWarga(idWarga: Integer, idLaporan: String): DetailLaporan?` | public | Detail laporan. |
| `+ riwayatMilikWarga(idWarga: Integer, idLaporan: String): List<RingkasanStatus>` | public | Riwayat status. |
| `+ daftarPenugasan(idTeknisi: String): List<LaporanGangguan>` | public | Daftar tugas teknisi. |
| `+ detailTugas(idTeknisi: String, idLaporan: String): DetailLaporan?` | public | Detail tugas. |
| `+ perbaruiStatus(idTeknisi: String, idLaporan: String, statusBaru: StatusLaporan): HasilStatus` | public | Ubah status. |

Tabel 5.42.2. Atribut Kelas ModulLaporan

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `data` | private | `DataLaporanBoundary` |
| `akun` | private | `ModulAkun` |

### 5.42.1 Algoritma/Query

**Nama Kelas:** *ModulLaporan*  
**Nama Operasi:** `+ kirimLaporan(...): HasilLaporan`  
**ID Algoritma:** *Algo-034*

```text
FUNCTION kirimLaporan(idWarga, idKomunitas, data) -> HasilLaporan
    warga ← akun.ambilWarga(idWarga)
    IF warga = NULL OR NOT warga.validasiKeanggotaan(idKomunitas) THEN
        RETURN HasilLaporan.gagal("Tidak memiliki otorisasi")
    END IF
    laporan ← NEW LaporanGangguan(data, idWarga, now())
    laporan.setStatusMenunggu()
    IF laporan.simpan() THEN RETURN HasilLaporan.sukses(laporan.idLaporan)
    RETURN HasilLaporan.gagal("Penyimpanan gagal")
END FUNCTION
```

---

## 5.43 Kelas ModulPemeliharaan

**Nama Kelas:** *ModulPemeliharaan*  
**ID Kelas:** *—* (Business Layer)

Tabel 5.43.1. Operasi Kelas ModulPemeliharaan

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ simpanCatatan(idTeknisi: String, data: FormPemeliharaan): HasilPemeliharaan` | public | Simpan catatan pemeliharaan. |

Tabel 5.43.2. Atribut Kelas ModulPemeliharaan

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `data` | private | `DataPerangkatBoundary` |

### 5.43.1 Algoritma/Query

**Nama Kelas:** *ModulPemeliharaan*  
**Nama Operasi:** `+ simpanCatatan(...): HasilPemeliharaan`  
**ID Algoritma:** *Algo-035*

```text
FUNCTION simpanCatatan(idTeknisi, data) -> HasilPemeliharaan
    catatan ← NEW CatatanPemeliharaan(data, idTeknisi)
    IF NOT catatan.validasiFormulir() THEN RETURN HasilPemeliharaan.gagal("Formulir tidak lengkap")
    IF catatan.simpan() THEN RETURN HasilPemeliharaan.sukses(catatan.idCatatan)
    RETURN HasilPemeliharaan.gagal("Penyimpanan gagal")
END FUNCTION
```

---

## 5.44 Kelas ModulIuran

**Nama Kelas:** *ModulIuran*  
**ID Kelas:** *—* (Business Layer)

Tabel 5.44.1. Operasi Kelas ModulIuran

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ ambilTagihanWarga(idWarga: Integer, idPeriode: String): Tagihan?` | public | Tagihan warga. |
| `+ hitungAgregatKomunal(idPeriode: String): RingkasanPemakaian` | public | Agregat pemakaian. |
| `+ hitungPratinjau(idPeriode: String): List<Tagihan>` | public | Pratinjau tagihan. |
| `+ finalisasiIuran(idPeriode: String, pengurus: Pengurus): Boolean` | public | Finalisasi iuran. |
| `+ generateRekapitulasi(idPeriode: String): Rekapitulasi?` | public | Rekapitulasi. |

Tabel 5.44.2. Atribut Kelas ModulIuran

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `data` | private | `DataIuranBoundary` |
| `kalkulator` | private | `KalkulatorIuran` |

### 5.44.1 Algoritma/Query

**Nama Kelas:** *ModulIuran*  
**Nama Operasi:** `+ hitungAgregatKomunal(idPeriode: String): RingkasanPemakaian`  
**ID Algoritma:** *Algo-036*

```text
FUNCTION hitungAgregatKomunal(idPeriode) -> RingkasanPemakaian
    periode ← data.ambilPeriode(idPeriode)
    IF periode = NULL THEN THROW PeriodeNotFoundException
    pemakaianList ← data.ambilPemakaianPeriode(idPeriode)
    totalAir ← 0; totalEnergi ← 0
    FOR EACH p IN pemakaianList DO
        totalAir ← totalAir + p.volumeAirM3
        totalEnergi ← totalEnergi + p.energiKWh
    END FOR
    RETURN NEW RingkasanPemakaian(periode, totalAir, totalEnergi, pemakaianList)
END FUNCTION
```

---

## 5.45 Kelas ModulNotifikasi

**Nama Kelas:** *ModulNotifikasi*  
**ID Kelas:** *—* (Business Layer)

Tabel 5.45.1. Operasi Kelas ModulNotifikasi

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ kirimPeringatanDayaKritis(baterai: Baterai): Boolean` | public | Kirim peringatan kritis. |
| `+ kirimUlangPending(idTeknisi: String): Integer` | public | Kirim ulang notifikasi pending. |

Tabel 5.45.2. Atribut Kelas ModulNotifikasi

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `data` | private | `DataPerangkatBoundary` |

### 5.45.1 Algoritma/Query

**Nama Kelas:** *ModulNotifikasi*  
**Nama Operasi:** `+ kirimPeringatanDayaKritis(baterai: Baterai): Boolean`  
**ID Algoritma:** *Algo-037*

```text
FUNCTION kirimPeringatanDayaKritis(baterai) -> Boolean
    penugasanList ← data.cariPenugasanPerangkat(baterai.idPerangkat)
    IF penugasanList.isEmpty() THEN RETURN FALSE
    FOR EACH p IN penugasanList DO
        notif ← NEW PeringatanDayaKritis()
        notif.pesan ← "Kapasitas baterai kritis: " + baterai.kapasitasPersen + "%"
        notif.level ← "KRITIS"
        notif.kapasitasSaatIni ← baterai.kapasitasPersen
        notif.penerima ← p.idTeknisi
        IF NOT notif.kirim() THEN data.simpanNotifikasi(notif) END IF
    END FOR
    RETURN TRUE
END FUNCTION
```

---

## 5.46 Kelas DataAkunBoundary

**Nama Kelas:** *DataAkunBoundary*  
**ID Kelas:** *—* (Data Access Layer)

Tabel 5.46.1. Operasi Kelas DataAkunBoundary

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ cariWarga(idWarga: Integer): Warga?` | public | Cari data warga. |
| `+ cariEmail(email: String): Akun?` | public | Cari akun berdasarkan email. |
| `+ ambilAkun(email: String): Akun?` | public | Ambil akun. |
| `+ simpanAkun(akun: Akun): Boolean` | public | Simpan akun baru. |
| `+ ambilBerdasarkanStatus(status: StatusAkun): List<Akun>` | public | Ambil akun per status. |
| `+ perbaruiAkun(akun: Akun): Boolean` | public | Perbarui akun. |

Tabel 5.46.2. Atribut Kelas DataAkunBoundary

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `database` | private | `Database` |

### 5.46.1 Algoritma/Query

**Nama Kelas:** *DataAkunBoundary*  
**Nama Operasi:** `+ ambilBerdasarkanStatus(status: StatusAkun): List<Akun>`  
**ID Algoritma:** *Algo-038*

```text
FUNCTION ambilBerdasarkanStatus(status) -> List<Akun>
    rows ← database.query("SELECT * FROM akun WHERE status_akun = ?", {status})
    hasil ← []
    FOR EACH row IN rows DO hasil.append(mapRowToAkun(row)) END FOR
    RETURN hasil
END FUNCTION
```

Tabel 5.46.3. Query Operasi ambilBerdasarkanStatus

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| Q-001 | `SELECT id_akun, email, nama, peran, status_akun FROM akun WHERE status_akun = ?` | Ambil akun per status. |

---

## 5.47 Kelas DataPerangkatBoundary

**Nama Kelas:** *DataPerangkatBoundary*  
**ID Kelas:** *—* (Data Access Layer)

Tabel 5.47.1. Operasi Kelas DataPerangkatBoundary

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ ambilTangkiTerbaru(): TangkiAir?` | public | Tangki terbaru. |
| `+ ambilBateraiTerbaru(): Baterai?` | public | Baterai terbaru. |
| `+ ambilPanelTerbaru(): PanelSurya?` | public | Panel terbaru. |
| `+ simpanPembacaan(bacaan: PembacaanSensor): Boolean` | public | Simpan pembacaan. |
| `+ ambilHistorisKinerja(idPanel: String, rentang: RentangWaktu): List<DataHistorisKinerja>` | public | Data historis panel. |
| `+ cariPenugasanPerangkat(idPerangkat: String): List<PenugasanPerangkat>` | public | Penugasan perangkat. |
| `+ simpanNotifikasi(notif: Notifikasi): Boolean` | public | Simpan notifikasi. |
| `+ ambilNotifikasiPending(idTeknisi: String): List<PeringatanDayaKritis>` | public | Notifikasi pending. |
| `+ cariPerangkat(idPerangkat: String): Perangkat?` | public | Cari perangkat. |
| `+ simpanCatatan(catatan: CatatanPemeliharaan): Boolean` | public | Simpan catatan pemeliharaan. |

Tabel 5.47.2. Atribut Kelas DataPerangkatBoundary

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `database` | private | `Database` |

### 5.47.1 Algoritma/Query

**Nama Kelas:** *DataPerangkatBoundary*  
**Nama Operasi:** `+ ambilHistorisKinerja(idPanel: String, rentang: RentangWaktu): List<DataHistorisKinerja>`  
**ID Algoritma:** *Algo-039*

```text
FUNCTION ambilHistorisKinerja(idPanel, rentang) -> List<DataHistorisKinerja>
    rows ← database.query(
        "SELECT * FROM data_historis_kinerja WHERE id_panel = ? AND waktu BETWEEN ? AND ?",
        {idPanel, rentang.waktuMulai, rentang.waktuSelesai})
    RETURN mapRowsToHistoris(rows)
END FUNCTION
```

Tabel 5.47.3. Query Operasi ambilHistorisKinerja

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| Q-001 | `SELECT * FROM data_historis_kinerja WHERE id_panel = ? AND waktu BETWEEN ? AND ?` | Ambil historis dalam rentang. |

---

## 5.48 Kelas DataLaporanBoundary

**Nama Kelas:** *DataLaporanBoundary*  
**ID Kelas:** *—* (Data Access Layer)

Tabel 5.48.1. Operasi Kelas DataLaporanBoundary

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ simpanLaporan(laporan: LaporanGangguan): Boolean` | public | Simpan laporan. |
| `+ cariMilikWarga(idWarga: Integer): List<LaporanGangguan>` | public | Laporan warga. |
| `+ cariDetailMilik(idWarga: Integer, idLaporan: String): LaporanGangguan?` | public | Detail laporan warga. |
| `+ cariRiwayatMilik(idWarga: Integer, idLaporan: String): List<RiwayatStatusLaporan>` | public | Riwayat laporan warga. |
| `+ cariPenugasan(idTeknisi: String, idLaporan: String): PenugasanLaporan?` | public | Penugasan laporan. |
| `+ cariDaftarTugas(idTeknisi: String): List<LaporanGangguan>` | public | Daftar tugas teknisi. |
| `+ cariDetailTugas(idTeknisi: String, idLaporan: String): LaporanGangguan?` | public | Detail tugas teknisi. |
| `+ simpanStatusDanRiwayat(...): Boolean` | public | Simpan status + riwayat (transaksi). |

Tabel 5.48.2. Atribut Kelas DataLaporanBoundary

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `database` | private | `Database` |

### 5.48.1 Algoritma/Query

**Nama Kelas:** *DataLaporanBoundary*  
**Nama Operasi:** `+ simpanStatusDanRiwayat(...): Boolean`  
**ID Algoritma:** *Algo-040*

```text
FUNCTION simpanStatusDanRiwayat(laporan, riwayat, idTeknisi, statusLama) -> Boolean
    TRY
        database.BEGIN_TRANSACTION()
        database.execute("UPDATE laporan_gangguan SET status = ? WHERE id_laporan = ?",
                         {laporan.status, laporan.idLaporan})
        database.execute("INSERT INTO riwayat_status_laporan (id_laporan, status, timestamp) VALUES (?, ?, ?)",
                         {riwayat.idLaporan, riwayat.status, riwayat.timestamp})
        database.COMMIT()
        RETURN TRUE
    CATCH Exception
        database.ROLLBACK()
        RETURN FALSE
    END TRY
END FUNCTION
```

Tabel 5.48.3. Query Operasi simpanStatusDanRiwayat

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| Q-001 | `UPDATE laporan_gangguan SET status = ? WHERE id_laporan = ?` | Perbarui status. |
| Q-002 | `INSERT INTO riwayat_status_laporan (id_laporan, status, timestamp) VALUES (?, ?, ?)` | Catat riwayat. |

---

## 5.49 Kelas DataIuranBoundary

**Nama Kelas:** *DataIuranBoundary*  
**ID Kelas:** *—* (Data Access Layer)

Tabel 5.49.1. Operasi Kelas DataIuranBoundary

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ ambilPeriode(idPeriode: String): Periode?` | public | Ambil periode. |
| `+ daftarPeriode(): List<Periode>` | public | Daftar periode. |
| `+ ambilPemakaianPeriode(idPeriode: String): List<DataPemakaian>` | public | Pemakaian periode. |
| `+ ambilAturanTarif(idPeriode: String): AturanTarif?` | public | Aturan tarif. |
| `+ ambilTagihan(idWarga: Integer, idPeriode: String): Tagihan?` | public | Tagihan warga. |
| `+ ambilTagihanPeriode(idPeriode: String): List<Tagihan>` | public | Tagihan periode. |
| `+ simpanDaftarTagihan(daftar: List<Tagihan>): Boolean` | public | Simpan daftar tagihan. |
| `+ perbaruiPeriode(periode: Periode): Boolean` | public | Perbarui periode. |
| `+ simpanRekapitulasi(rekap: Rekapitulasi): Boolean` | public | Simpan rekapitulasi. |

Tabel 5.49.2. Atribut Kelas DataIuranBoundary

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `database` | private | `Database` |

### 5.49.1 Algoritma/Query

**Nama Kelas:** *DataIuranBoundary*  
**Nama Operasi:** `+ ambilPemakaianPeriode(idPeriode: String): List<DataPemakaian>`  
**ID Algoritma:** *Algo-041*

```text
FUNCTION ambilPemakaianPeriode(idPeriode) -> List<DataPemakaian>
    rows ← database.query(
        "SELECT * FROM data_pemakaian WHERE id_periode = ?", {idPeriode})
    RETURN mapRowsToPemakaian(rows)
END FUNCTION
```

Tabel 5.49.3. Query Operasi ambilPemakaianPeriode

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| Q-001 | `SELECT id_warga, volume_air_m3, energi_kwh, waktu_catat FROM data_pemakaian WHERE id_periode = ?` | Ambil pemakaian periode. |

---

## 5.50 Kelas Database

**Nama Kelas:** *Database*  
**ID Kelas:** *—* (Database Layer)

Tabel 5.50.1. Operasi Kelas Database

| Nama Operasi | Visibility | Keterangan |
| :--- | :--- | :--- |
| `+ query(sql: String, parameter: Map<String, Object>): List<Baris>` | public | Jalankan SELECT. |
| `+ execute(sql: String, parameter: Map<String, Object>): Integer` | public | Jalankan INSERT/UPDATE/DELETE. |
| `+ transaksiStatus(...): Boolean` | public | Transaksi status + riwayat. |

Tabel 5.50.2. Atribut Kelas Database

| Nama Atribut | Visibility | Tipe |
| :--- | :--- | :--- |
| `koneksi` | private | `KoneksiDB` |

### 5.50.1 Algoritma/Query

**Nama Kelas:** *Database*  
**Nama Operasi:** `+ transaksiStatus(...): Boolean`  
**ID Algoritma:** *Algo-042*

```text
FUNCTION transaksiStatus(laporan, riwayat, idTeknisi, statusLama) -> Boolean
    TRY
        this.koneksi.BEGIN()
        this.koneksi.execute(
            "UPDATE laporan_gangguan SET status = ?, diperbarui_oleh = ? WHERE id_laporan = ? AND status = ?",
            {laporan.status, idTeknisi, laporan.idLaporan, statusLama})
        this.koneksi.execute(
            "INSERT INTO riwayat_status_laporan (id_laporan, status, timestamp) VALUES (?, ?, ?)",
            {riwayat.idLaporan, riwayat.status, riwayat.timestamp})
        this.koneksi.COMMIT()
        RETURN TRUE
    CATCH SQLException
        this.koneksi.ROLLBACK()
        RETURN FALSE
    END TRY
END FUNCTION
```

Tabel 5.50.3. Query Operasi transaksiStatus

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| Q-001 | `UPDATE laporan_gangguan SET status = ?, diperbarui_oleh = ? WHERE id_laporan = ? AND status = ?` | Update status dengan guard. |
| Q-002 | `INSERT INTO riwayat_status_laporan (id_laporan, status, timestamp) VALUES (?, ?, ?)` | Catat riwayat transisi. |
<br>

---

# BAB 6: Perancangan Antarmuka

## 6.1 Rancangan Antarmuka [ID Layar 1]

Masukkan versi awal prototipe antarmuka, dimana untuk setiap antarmuka/layar, tuliskan spesifikasi rinci objek yang ditampilkan dan reaksi sistem terhadap interaksi pengguna.

**Antarmuka:** *[ID layar]*  
**Nama Layar:** *[Nama layar]*

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-design.png" width="50%">
</p>
<p align="center">
<i>Gambar 6.1. Rancangan Antarmuka [ID Layar] - [Nama Layar]</i>
</p>

Tabel 6.1. Spesifikasi Objek Antarmuka [ID Layar]

| Id_Objek | Jenis | Konten | Keterangan |
| :--- | :--- | :--- | :--- |
| *[ID objek]* | *[Jenis objek, misalnya Button, RTF Box, dll]* | *[String yang tampil pada layar]* | *[Reaksi sistem, layar tujuan, tautan, atau ID algoritma yang dijalankan]* |
| *[ID objek]* | *[Jenis objek]* | *[Konten yang ditampilkan]* | *[Reaksi sistem atau nama file terkait beserta deskripsi ringkasnya]* |
| *...* | *...* | *...* | *...* |


## 6.X Rancangan Antarmuka [ID Layar X]

*[Ulangi pola 6.1 untuk layar berikutnya sampai semua layar teridentifikasi]*

## 6.Y Rancangan Antarmuka Keseluruhan

Tuliskan daftar gambar seluruh antarmuka. Berikan ID unik untuk setiap tampilan dan gunakan ID yang sama pada subbab perancangan antarmuka masing-masing.

Tabel 6.Y. Rancangan Antarmuka Keseluruhan

| No | Tampilan Antarmuka |
| :--- | :--- |
| *[I-01]* | <img src="./assets/diagram/contoh-design.png" alt="Contoh Desain" width="400"> |
| *[I-02]* | *[Sisipkan gambar antarmuka I-02]* |
| *[I-XX]* | *[Sisipkan gambar antarmuka berikutnya]* |

<br>

---

# BAB 7: Matriks Kerunutan

Petakan kelas perancangan dengan use case yang terkait. Gunakan **BAB 6 Traceability pada dokumen SKPL** sebagai acuan keterkaitan kelas analisis dan use case, lalu sesuaikan dengan realisasi use case dan kelas perancangan pada BAB 3–BAB 5 DPPL.

Tabel 7.1. Matriks Kerunutan Kelas terhadap Use Case

| Kelas | Use Case Terkait |
| :--- | :--- |
| *[ID kelas - Nama kelas]* | *[ID UC - Nama use case; tuliskan seluruh use case terkait]* |
| *[ID kelas - Nama kelas]* | *[ID UC - Nama use case]* |
| *...* | *...* |

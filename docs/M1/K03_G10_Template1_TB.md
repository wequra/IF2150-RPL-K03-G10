<h1>
IF2150 REKAYASA PERANGKAT LUNAK
<br>
TUGAS 1
<br>
TOPIC BRAINSTORMING
</h1>
<br>

## *Nama Perangkat Lunak*

### Untuk: *Tigress / Agatha*

Dipersiapkan oleh:
| Informasi | Keterangan |
| --- | --- |
| Kelas | *\[K03\]* |
| Kelompok | *\[10\]*  |

| NIM | Nama |
|---|---|
| *[13525054]* | *[Raffi Fauzi Hermawan]* |
| *[13525030]* | *[Rionaldo Casey Pandhitha]* |
| *[13525129]* | *[Andro Irsa Syafiq]* |
| *[13525078]* | *[Muhammad Faiz Ramadhan]* |
| *[13525006]* | *[Muhammad Rafiandhi Suryadinata]*
---

<br>
<br>

# BAB 1: Analisis Permasalahan

## 1.1 Latar Belakang Masalah
Akses terhadap air bersih dan energi masih menjadi permasalahan di banyak wilayah di Indonesia, apalagi di kawasan pedesaan. Berdasarkan data publikasi dari BPS *Indikator Perumahan dan Lingkungan 2024*, sebesar 7,36 persen masyarakat Indonesia masih belum memiliki akses terhadap air minum bersih (layak minum), dengan kesenjangan yang cukup signifikan antar wilayah, DKI Jakarta mencapai 99,96 persen sementara Papua Pegunungan baru 30,64 persen. Dari kesenjangan ini terlihat jelas antara kota dan desa. Akses air minum layak di perkotaan mencapai 96,56 persen, sedangkan di pedesaan hanya 87,06 persen. Artinya, rumah tangga di pedesaan memiliki resiko lebih tinggi mengalami keterbatasan akses air bersih dibanding rumah tangga di kota.

Dari sudut pandang energi, meskipun pemerintah melaporkan rasio elektrifikasi nasional telah mencapai 99,1 persen, interval yang tersisa justru berfokus pada wilayah wilayah yang paling sulit dijangkau. Data Kementerian ESDM per kuartal I 2025 mencatat masih ada 10.068 lokasi atau desa yang belum tersentuh listrik dari PLN, mencakup lebih dari 1,28 juta rumah tangga. Bahkan di wilayah yang sudah masuk kategori "berlistrik", pasokan seringkali berasal dari sumber non PLN atau bantuan solar cell sederhana yang sumber dayanya terbatas, sehingga gangguan listrik pada infrastruktur yang dipakai banyak orang seperti pompa air tetap menjadi resiko yang sangat mungkin kejadian bagi orang orang yang menggunakannya.

Ironisnya, keterbatasan energi ini terjadi di tengah potensi energi surya Indonesia yang sangat besar namun jauh dari termanfaatkan secara optimal. Data Kementerian ESDM menunjukkan Indonesia memiliki potensi energi terbarukan lebih dari 400.000 MW, dengan sekitar 200.000 MW berasal dari energi surya, namun pemanfaatannya saat ini baru sekitar 150 MW atau setara 0,08 persen dari potensi yang ada. Padahal secara teknis, energi surya fotovoltaik sudah bisa dimanfaatkan untuk kebutuhan listrik, termasuk untuk menggerakkan pompa air, ini adalah sebuah solusi yang relevan langsung dengan permasalahan pengelolaan air bersih di komunitas yang bergantung pada pompa listrik.

Kombinasi antara keterbatasan pasokan listrik yang stabil dan minimnya pemanfaatan energi terbarukan pada infrastruktur air ini berdampak langsung pada keberlanjutan akses air bersih masyarakat. Permasalahan ini secara langsung berkaitan dengan dua tujuan dari *Sustainability Development Goals* (SDGs) yang menjadi fokus kelompok kami yaitu **SDG 6 (Air Bersih dan Sanitasi)**, khususnya target 6.1 mengenai akses universal dan merata terhadap air minum yang aman dan terjangkau, serta **SDG 7 (Energi Bersih dan Terjangkau)**, khususnya target 7.1 (akses energi terjangkau) dan 7.2 (peningkatan energi terbarukan). Urgensi penyelesaian masalah ini terletak pada fakta bahwa gangguan pasokan air akibat ketergantungan pada listrik konvensional berdampak langsung terhadap kesehatan dan kesejahteraan masyarakat, sementara solusi berbasis energi terbarukan yang sebenarnya tersedia secara teknis belum banyak diadopsi di tingkat komunitas kecil karena ketiadaan alat bantu pengelolaan yang sesuai dengan yang mereka mau.

## 1.2 Analisis Kondisi Saat Ini
Pengelolaan infrastruktur air dan energi di tingkat komunitas skala kecil (RT/RW, desa, atau komunitas swadaya) saat ini umumnya masih dilakukan secara konvensional dan belum terintegrasi:

**Ketergantungan penuh pada jaringan listrik konvensional.** Sebagian besar pompa air komunal masih mengandalkan pasokan listrik dari PLN atau non-PLN tanpa cadangan energi alternatif. Padahal, di wilayah dengan Rasio Desa Berlistrik khusus PLN yang baru mencapai 92,75 persen pada triwulan III 2024, keandalan pasokan listrik masih menjadi persoalan, terutama di wilayah Indonesia Timur yang menyumbang mayoritas desa belum teraliri listrik, dengan rincian 269 desa di Sulawesi, 229 desa di Maluku, 141 desa di Nusa Tenggara, dan 4.398 desa di Papua. Ketika listrik padam, distribusi air ke rumah tangga ikut terhenti tanpa ada mekanisme cadangan.

**Minimnya adopsi energi terbarukan pada infrastruktur komunal**, meski secara teknis dan geografis Indonesia sangat mendukung. Kendala yang teridentifikasi mencakup pemasangan sistem energi surya fotovoltaik di daerah pedesaan yang umumnya tidak memenuhi standar teknis sehingga kinerja sistem tidak optimal dan cepat rusak, serta ketergantungan pada program pemerintah karena daya beli masyarakat pedesaan yang masih rendah. Akibatnya, potensi energi surya sebagai sumber daya cadangan untuk pompa air komunal jarang benar-benar diimplementasikan secara mandiri oleh komunitas.

**Pencatatan dan pelaporan yang masih manual.** Pemakaian air dan listrik pada infrastruktur komunal umumnya dicatat manual oleh pengurus (RT/RW atau petugas yang ditunjuk) menggunakan buku catatan, lalu dikonversi menjadi tagihan iuran warga secara manual pula. Pelaporan gangguan (pompa rusak, aliran air terhenti, listrik padam) umumnya disampaikan lewat komunikasi informal seperti grup pesan instan, tanpa pencatatan terstruktur yang bisa dilacak riwayatnya.

**Solusi yang sudah ada di pasaran** cenderung berupa aplikasi pencatatan meteran individual milik penyedia layanan skala besar (PDAM, PLN), bukan alat yang dirancang untuk konteks pengelolaan sumber daya bersama oleh komunitas kecil yang bersifat swadaya.

Dari kondisi ini, teridentifikasi tiga **kesenjangan utama** yang akan menjadi fokus penyelesaian melalui perangkat lunak yang kami kembangkan:

1. Belum adanya sistem pemantauan pemakaian air dan energi yang terpusat, transparan, dan dapat diakses bersama oleh anggota komunitas.
2. Belum adanya mekanisme untuk mendorong dan mengelola adopsi sumber energi cadangan terbarukan (seperti tenaga surya) pada infrastruktur air komunal, sehingga distribusi air tidak sepenuhnya bergantung pada listrik konvensional.
3. Belum adanya sistem pelaporan gangguan yang terdokumentasi dan dapat ditindaklanjuti secara sistematis oleh pengurus komunitas.

---

# BAB 2: Analisis Solusi

## 2.1 Deskripsi Perangkat Lunak
Dari latar belakang dan juga analisis kondisi saat ini yang sudah dijelaskan, kami mengusulkan perangkat lunak yang dapat memantau dan mengelola air dan juga surya. Dari kacamata pengguna, perangkat layar yang diusulkan ini berfungsi sebagai pusat kendali dan informasi yang memungkinkan operator fasilitas desa dan stakeholder untuk memantau status pompa air, tingkat keterisian tangki, serta juga daya panel surya dan baterai secara real-time.

Sistem ini dirancang dengan memfokuskan pada platform utama dan satu-satunya melalui website. Website dipilih dikarenakan dapat diakses oleh warga melalui device manapun. Beberapa fitur yang terdapat pada website antara lain adalah melihat ketersediaan air, status daya surya, tagihan iuran, analitik penggunaan komunal, pengelolaan iuran warga, dan platform laporan gangguan serta status perbaikan dari laporan yang masuk.

Nilai unik dan Inovasi inti:
1. Pengawasan terpusan & Transparan : Menggantikan pencatatan yang dilakukan sebelumnya dengan dashboard digital. Seluruh warga dapat melihat data volume air dan juga status daya secara real-time sehingga mengurangi kecurigaan dan meningkatkan transparansi 
2. Manajemen Pemeliharaan Alat : Sistem dilengkapi fitur peringatan dini seperti daya di bawah batas aman atau efisiensi panel menurun yang membantu petugas melakukan perawatan sebelum terjadi kesalahan fatal
3. Sistem Pelaporan : Pelapor dapat melihat status laporan yang dikirimkan menjadi menunggu, sedang diperbaiki, dan selesai yang mengurangi ketidakpastian yang dialami oleh pelapor

## 2.2 Asumsi dan Batasan
Beberapa hal perlu dilakukan untuk memastikan ruang lingkup pengerjaan spesifik, terarah, dan juga dapat diselesaikan dalam waktu yang tepat. Pengembangan sistem didasari beberapa hal berikut:
Asumsi:
1. Infrastruktur fisik dan sensor terpasang : Komunitas diasumsikan punya sumur komunal, poompa air, tangki penampungan, dan instalasi panel surya yang dilengkapi mikrokontroller yang berfungsi dengan baik.
2. Jaringan komunikasi tersedia secara menyeluruh : Lokasi diasumsikan memiliki sinyal komunikasi yang baik atau akses Wi-fi terpusat
3. Diterima oleh komunitas setempat : Warga bersedia beralih dari metode pencatatan manual ke digital

Batasan:
1. Bukan sistem skala besar : Perangkat lunak hanya berfokus pada pemantauan, pelaporan, dan juga manajemen. 
2. Ruang lingkup pembayaran iuran : Fitur hanya berfokus pada pencatatan dan kalkulasi, tidak dapat melakukan pembayaran digital/transaksi
3. Skalabilitas konteks pengguna : Sistem dioptimalkan untuk pengelola yang menangani komunitas berskala kecil-menengah

---

# BAB 3: Spesifikasi Kebutuhan dan Proses Bisnis

## 3.1 Identifikasi Aktor

| Aktor | Deskripsi |
| :--- | :--- |
| Warga | Pengguna ini bertindak sebagai pihak yang menggunakan air dan listrik dari infrastruktur komunal. Karakteristik dari pengguna ini adalah bersifat non-teknis dan mengutamakan kemudahan mengakses informasi ketersediaan air, status daya, tagihan iuran, serta perkembangan laporan gangguan yang mereka ajukan. |
| Teknisi | Pengguna ini bertindak sebagai pihak yang bertanggung jawab memantau kondisi fisik pompa air, tangki, panel surya, dan baterai secara langsung di lapangan. Karakteristik dari pengguna ini adalah mengutamakan informasi teknis dan real-time untuk melakukan tindakan preventif atau perbaikan sebelum terjadi kegagalan sistem. |
| Pengurus | Pengguna ini bertindak sebagai pihak yang bertanggung jawab atas pengelolaan administratif komunitas seperti pencatatan iuran, pemantauan pemakaian komunal, dan pengawasan tindak lanjut laporan gangguan. Karakteristik dari pengguna ini adalah mengutamakan gambaran menyeluruh untuk pengambilan keputusan dan menjaga transparansi terhadap warga. |


#### 3.2 Kebutuhan Pengguna Awal


| ID | Aktor | Kebutuhan / Aktivitas | Tujuan / Nilai |
| :--- | :--- | :--- | :--- |
| US-01 | Warga | Melihat ketersediaan air tangki secara real-time | Dapat merencanakan penggunaan air rumah tangga sehari-hari |
| US-02 | Warga | Melihat status daya panel surya dan baterai | Mengetahui keandalan pasokan listrik untuk pompa air |
| US-03 | Warga | Melihat rincian tagihan iuran bulanan | Dapat mempersiapkan pembayaran tepat waktu |
| US-04 | Warga | Mengirim laporan gangguan (pompa rusak, air tidak mengalir, dsb.) | Masalah dapat segera diketahui dan ditindaklanjuti oleh pengurus |
| US-05 | Warga | Memantau status laporan gangguan yang telah dikirim | Mengetahui perkembangan penanganan tanpa harus bertanya langsung ke pengurus |
| US-06 | Teknisi | Menerima notifikasi peringatan dini saat daya baterai di bawah batas aman | Dapat melakukan tindakan preventif sebelum pasokan air terhenti |
| US-07 | Teknisi | Memantau efisiensi kinerja panel surya dari waktu ke waktu | Dapat mendeteksi penurunan performa sebelum terjadi kerusakan fatal |
| US-08 | Teknisi | Mengubah status laporan gangguan (menunggu, sedang diperbaiki, selesai) | Warga mendapat informasi progres penanganan secara transparan |
| US-09 | Teknisi | Mencatat riwayat pemeliharaan/perbaikan alat | Pengelolaan aset lebih terdokumentasi dan mudah dilacak riwayatnya |
| US-10 | Pengurus | Melihat dashboard pemakaian air dan energi komunal | Dapat mengambil keputusan pengelolaan sumber daya berbasis data |
| US-11 | Pengurus | Mengelola dan mengkalkulasi iuran warga berdasarkan data pemakaian | Mengurangi kesalahan pencatatan yang biasa terjadi pada metode manual |
| US-12 | Pengurus | Mengekspor atau mencetak rekap laporan iuran dan pemakaian bulanan | Pengelolaan keuangan komunitas lebih transparan dan dapat dipertanggungjawabkan ke warga |

## 3.3 Model Proses Bisnis
Buatlah *Activity Diagram* atau *Swimlane Diagram* yang menunjukkan alur kerja proses bisnis dari sistem solusi. Diagram ini harus memvisualisasikan bagaimana alur operasional di dunia nyata berjalan lebih efisien dengan adanya interaksi antara aktor (yang didefinisikan pada poin 3.1) dan sistem perangkat lunak. Perhatikan notasi yang digunakan dalam pembuatannya.
<br>

<p align="center">
<img alt="Contoh Activity Diagram" src="./assets/diagram/diagram-act-1.avif" width="70%">
</p>
<p align="center">
<i>Gambar 1. Contoh Activity Diagram</i>
</p>

<br>

# Referensi
- Diagram UML: https://www.drawio.com/, https://staruml.io/

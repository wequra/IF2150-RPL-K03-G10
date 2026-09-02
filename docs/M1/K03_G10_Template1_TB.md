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
Lakukan analisis terhadap proses yang berjalan saat ini di dunia nyata, baik itu sistem lama ataupun solusi yang sudah ada. Soroti kesenjangan atau celah dari kondisi tersebut yang nantinya akan diselesaikan oleh perangkat lunak kalian.

---

# BAB 2: Analisis Solusi

## 2.1 Deskripsi Perangkat Lunak
Abstraksikan solusi perangkat lunak yang diusulkan dari sudut pandang pengguna. Jelaskan target platform yang akan digunakan (misalnya: desktop application) beserta alasan pemilihannya. Deskripsikan juga nilai unik (inovasi inti) dari perangkat lunak kalian dan apa yang membedakannya dari solusi yang sudah ada.

## 2.2 Asumsi dan Batasan
Definisikan secara tegas asumsi (baik teknis maupun dari sisi pengguna) yang menjadi dasar pengembangan. Tuliskan batasan seperti regulasi/hukum, keterbatasan sumber daya, dan ruang lingkup solusi.

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
| US-10 | Pengurus | Melihat dashboard analitik pemakaian air dan energi komunal | Dapat mengambil keputusan pengelolaan sumber daya berbasis data |
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
# QA Editorial Akademis M8 — BAB 5 dan BAB 6

Tanggal pemeriksaan: 28 Oktober 2026. Acuan awal: `4003cb53345ec525755969d61181433765c7cb24` (HEAD saat pekerjaan dimulai). Laporan ini menggantikan status QA integrasi sebelumnya. **Revisi editorial dan pemeriksaan struktur lulus; konsistensi teknis keseluruhan belum dinyatakan lulus tanpa catatan**, karena terdapat perbedaan kebutuhan dengan algoritma di luar scope serta kekurangan visual yang dicatat di bawah. Pemeriksaan ini dilakukan terhadap dokumen dan aset, bukan pengujian aplikasi.

## Acuan dan cakupan

- Instruksi: `.m8-handoff/ACADEMIC_CLEANUP.md`.
- Seluruh baris penambahan/perubahan commit `4003cb5` terhadap `origin/main` diperiksa, termasuk entri A/B/C, pengantar tipe data, 13 kelas kontribusi UC03/04/07, dan seluruh BAB 6. Seluruh BAB 5–6 serta diff hasil revisi dibaca ulang.
- Kebutuhan: [SKPL M5 §4.4.1–§4.4.14](../M5/K03_G10_SKPL.md); arsitektur: [APL M6 Tabel 2.1/3.1](../M6/K03_G10_APL.md); operasi/signature: [DPPL M7 §4.1](../M7/K03_G10_DPPL.md).
- Tiga belas kelas yang ditinjau: Warga, Teknisi, LaporanGangguan, RiwayatStatusLaporan, WargaView, TeknisiView, LaporanController, Validasi, ModulAkun, ModulLaporan, DataAkunBoundary, DataLaporanBoundary, dan Database. Perbaikan hanya diperlukan pada 10 uraian kelas dan pengantar tambahan; tiga kelas lainnya tidak memerlukan perubahan editorial.
- BAB 1–4, isi pembuka di luar entri A/B/C, dan BAB 7 identik dengan HEAD awal. Seluruh 112 aset tetap identik byte demi byte, termasuk 20 PNG antarmuka dan seluruh diagram.
- Hanya `K03_G10_DPPL2.md` dan laporan QA ini yang berubah. Tidak ada staging, commit, push, merge, atau PR baru; HEAD tetap pada acuan awal.

## Revisi editorial yang dilaksanakan

1. Entri A/B/C menggambarkan isi perancangan kelas, antarmuka, dan penyelarasan dokumen; narasi audit integrasi, branch, override, perlindungan BAB 7, serta tautan laporan internal dihapus dari DPPL2.
2. Empat paragraf pembuka BAB 6 diganti dengan pengantar tujuan, kerunutan UC01–UC14, pembagian aktor, dan bentuk penyajian layar. Ketentuan otorisasi, aksesibilitas, perlindungan data, serta sifat data ilustrasi tetap dipertahankan sebagai spesifikasi.
3. Seluruh §6.1–§6.20 ditinjau. Catatan PNG, ekspor, crop, audit native, dan keterbatasan pengujian diganti dengan fungsi objek serta respons sistem yang dirancang. Kolom Jenis diseragamkan dalam bahasa Indonesia; label yang tampak pada gambar dan nama operasi tetap dipertahankan.
4. Seluruh paragraf skenario disusun dalam bahasa formal, mencakup alur normal, alternatif M5, kegagalan, pemuatan, dan navigasi yang relevan. Deskripsi berulang tentang bidang cari/status dihapus dari I-11-M dan I-12-M; susunan berdampingan hanya dijelaskan pada I-10-M.
5. §6.21 diubah dari inventaris nama berkas/dimensi menjadi rekap ID, nama, use case/aktor, dan 20 gambar aktual dengan path relatif. Lebar tampilan rekap 360 untuk desktop dan 180 untuk mobile; gambar utama tetap 900/390. Ini atribut penyajian Markdown, bukan perubahan raster.
6. Pengantar tambahan BAB 5 dan uraian kelas dibersihkan dari asal draf, ketiadaan kontrak terpisah, review kelompok, dan status eksekusi SQL. Pembedaan rancangan logis dengan skema fisik, kebijakan unggahan, kebutuhan penguncian, dan batas jaminan deduplikasi tetap dinyatakan secara teknis.
7. Seluruh signature, atribut, blok algoritma, dan baris query bernomor BAB 5 identik dengan HEAD awal; 37 kelas di luar scope identik seluruh isinya. Lima puluh lima operasi pada 15 kelas draf kontribusi juga tetap tersedia dalam 50 kelas aktual.

## Pemeriksaan 20 antarmuka

Setiap baris berikut telah diperiksa terhadap gambar, tabel objek empat kolom, metadata layar, caption, navigasi, dan skenario. Status “sesuai” berarti uraian dokumentasi tersedia dan sesuai cakupan kebutuhan; status tersebut tidak menyatakan kontrol pernah dijalankan. Seluruh alternatif UC01–UC14 tercakup. Perbedaan antara kebutuhan dan algoritma yang dipertahankan dicatat tersendiri.

| Subbab | ID / Nama Layar | Jumlah objek | Hasil pemeriksaan isi |
| --- | --- | --- | --- |
| 6.1 | I-00 — Landing page publik | 10 | Sesuai: Navigasi publik, tab peran, FAQ buka/tutup; tidak memberikan akses akun. |
| 6.2 | I-01 — Login | 5 | Sesuai: UC13 normal dan A1/A2/A3; verifikasi kredensial sebelum status; sesi tidak terbentuk saat gagal. |
| 6.3 | I-02 — Registrasi akun | 7 | Sesuai: UC12 normal dan A1/A2; duplikat, isian wajib, status menunggu, tanpa login otomatis. |
| 6.4 | I-03 — Dashboard warga | 10 | Sesuai: UC01 normal dan A1; waktu data terakhir, tanpa pembacaan bukan nol; batas KNF11. |
| 6.5 | I-04 — Tagihan iuran final | 6 | Sesuai: UC02 normal dan A1; pemeriksaan FINAL, isolasi pemilik, nominal DRAFT disembunyikan. |
| 6.6 | I-05 — Buat laporan gangguan | 8 | Sesuai: UC03 normal dan A1; validasi keanggotaan sebelum objek/INSERT, unggahan, draf offline KNF03. |
| 6.7 | I-06 — Daftar laporan saya | 8 | Sesuai: UC04 normal dan A1; daftar pemilik, filter, detail; kosong dibedakan dari gagal query. |
| 6.8 | I-07 — Detail dan riwayat laporan | 7 | Sesuai: UC04 detail/riwayat; pemilik diperiksa ulang; ID asing/tidak ada generik; urutan waktu. |
| 6.9 | I-08 — Peringatan perangkat | 8 | Sesuai: UC05 normal dan A1; penerima berdasar perangkat, pending/kirim ulang; batas KNF05. |
| 6.10 | I-09 — Histori panel surya | 8 | Sesuai: UC06 normal dan A1; rentang valid, grafik daya W, tabel alternatif, tanpa data bukan nol. |
| 6.11 | I-10 — Daftar tugas teknisi | 7 | Sesuai: UC07 daftar penugasan, pencarian/filter, tanpa tugas, penugasan dicabut, muat ulang. |
| 6.12 | I-11 — Detail dan status tugas teknisi | 10 | Sesuai: UC07 normal dan A1/A2; transisi berurutan, terminal, otorisasi, atomisitas dan rollback. |
| 6.13 | I-12 — Form pemeliharaan | 9 | Sesuai: UC08 normal dan A1; empat isian, simpan, riwayat perangkat/waktu, gagal mempertahankan isian. |
| 6.14 | I-13 — Analitik komunal | 8 | Sesuai: UC09 normal dan A1; periode, agregat air/energi, tabel/grafik, penolakan non-Pengurus. |
| 6.15 | I-14 — Kalkulasi dan finalisasi iuran | 10 | Sesuai: UC10 normal dan A1/A2; kelengkapan, DRAFT, tinjau/konfirmasi, otorisasi ulang, FINAL. |
| 6.16 | I-15 — Rekapitulasi iuran | 10 | Sesuai: UC11 normal dan A1/A2; generate sebelum pratinjau, hanya data final, PDF/CSV/cetak. |
| 6.17 | I-16 — Persetujuan akun | 7 | Sesuai: UC14 normal dan A1/A2; tinjau/setujui/tolak, notifikasi setelah simpan, daftar kosong/konflik. |
| 6.18 | I-10-M — Daftar tugas teknisi (mobile) | 7 | Sesuai: Setara I-10; navigasi mobile, pencarian/status berdampingan, isi kartu satu kolom. |
| 6.19 | I-11-M — Detail dan status tugas teknisi (mobile) | 10 | Sesuai: Setara I-11; kembali ke tugas, gulir riwayat; navigasi berdasarkan komponen Teknisi. |
| 6.20 | I-12-M — Form pemeliharaan (mobile) | 8 | Sesuai: Setara I-12; formulir satu kolom dan navigasi mobile; tidak menyelesaikan laporan otomatis. |

**163 ID objek tetap unik dan urut; tidak ada ID yang ditambah, dihapus, atau diganti.** Pengelompokan ditinjau berdasarkan unit visual/fungsional: tabel dengan label status, kartu dengan indikator nilai, bilah navigasi berisi tautan, dan header/footer informasi. Kontrol berbeda yang memicu operasi penting tetap memiliki ID tersendiri, misalnya kirim/batal, pilihan tanggal, Setujui/Tolak, serta PDF/CSV/Cetak. Kelompok tautan informasi pada landing tidak disatukan dengan aksi autentikasi. I-11-M-OBJ-10 menjelaskan komponen menu Teknisi yang didukung sumber lokal `Nav - Menu Teknisi.png`, tanpa menyatakan komponen tersebut terlihat pada gambar detail tugas.

## Pemeriksaan rekayasa perangkat lunak yang dipertahankan

| Aspek | Hasil pemeriksaan dokumen |
| --- | --- |
| UC03 otorisasi | Sesi/peran diperiksa; keanggotaan terkini diverifikasi sebelum konstruksi laporan dan INSERT. Penolakan tidak menyimpan laporan. |
| UC03 validasi dan kegagalan | Jenis/deskripsi wajib; foto opsional tetap diperiksa otorisasi, tipe MIME, dan ukuran. Notifikasi sukses setelah simpan; draf offline belum dinyatakan terkirim. |
| UC04 pemilik | Daftar, detail, dan riwayat menggunakan ID Warga dari sesi. ID asing/tidak ada menghasilkan pesan generik; kegagalan query berbeda dari kosong. |
| UC04 urutan riwayat | `timestamp ASC, id_riwayat ASC`; peristiwa awal berasal dari `waktuDibuat`, perubahan berikutnya dari C22. |
| UC07 kewenangan dan transisi | Penugasan diperiksa sebelum perubahan dan di transaksi; MENUNGGU → SEDANG_DIPERBAIKI → SELESAI; status sama/lompat/mundur ditolak. |
| UC07 atomisitas | Algo-040 mendelegasikan Algo-042; penguncian laporan/penugasan, pemeriksaan status lama, UPDATE dan INSERT masing-masing satu baris, lalu satu COMMIT atau ROLLBACK. Ini rancangan transaksi, bukan hasil eksekusi SQL. |
| Parameter implementasi | Struktur data dan nama tabel adalah rancangan logis; pemetaan fisik/DBMS, serialisasi foto, kebijakan unggahan, dan protokol deduplikasi tetap perlu dirinci saat implementasi. Tidak ada jaminan pengiriman ulang bebas duplikasi yang dibuat tanpa dasar. |

## Temuan terbuka yang tidak ditutupi dengan PASS

| Temuan | Dampak dan batas tindakan |
| --- | --- |
| **UC05: M5 §4.4.5 dan I-08 menggunakan ≤ ambang; Algo-010 §5.9 menggunakan `<`.** | Pada nilai tepat di ambang, kebutuhan menyatakan peringatan harus dipicu, sedangkan algoritma Baterai tidak memicunya. Kelas Baterai termasuk 37 kelas di luar izin revisi BAB 5. Tidak diubah; pemilik kelas perlu menyelaraskan algoritma dengan M5. |
| **UC13 A2: Algo-030 §5.38 mengembalikan pesan menunggu untuk semua akun yang belum disetujui.** | M5 membedakan status DITOLAK dari MENUNGGU; I-01 menjelaskan keduanya. AkunController berada di luar 13 kelas yang boleh direvisi. Tidak diubah; cabang penolakan memerlukan penyelarasan oleh pemilik. |
| **UC10 A2: Algo-015 §5.19 melewati pemakaian tidak lengkap dengan CONTINUE.** | M5 mensyaratkan penghentian perhitungan ketika sebagian data belum lengkap. I-14 mempertahankan pemeriksaan kelengkapan sebelum perhitungan; Algo-016 memiliki guard kelengkapan untuk finalisasi, tetapi guard alur pratinjau belum dirinci dalam algoritma tersebut. KalkulatorIuran di luar scope; tidak diubah. |
| Varian alternatif, pemuatan, kosong, sukses, dan kesalahan belum memiliki gambar masing-masing | Perilaku dipertahankan sebagai rancangan interaksi; 20 gambar utama tersedia, tetapi cakupan visual tiap cabang belum lengkap. |
| I-01/I-02 menampilkan contoh kata sandi sebagai teks | Spesifikasi mensyaratkan penyamaran isian dan hash; kekurangan visual gambar asli tetap ada karena perubahan PNG dilarang. |
| I-07/I-11 hanya memperlihatkan awal MENUNGGU | Perubahan riwayat berikutnya dan kondisi terminal SELESAI dijelaskan sebagai perilaku; tidak ditambah gambar baru. |
| I-11-M tidak memperlihatkan navigasi bawah | Sumber komponen menu terpisah mendukung fungsi navigasi; tata letak gabungan pada detail tugas belum tersedia. Tabel tidak menyatakan menu terlihat pada gambar tersebut. |
| I-14 belum memperlihatkan dialog Tetapkan Final; I-15 belum memperlihatkan tombol Buat rekapitulasi | Objek dan perilaku bersumber dari UC10/UC11 serta operasi M7; tercantum sebagai rancangan, tanpa menyatakan telah tampak pada gambar. |
| FAQ/tab lain I-00, riwayat I-12, dan tabel alternatif grafik I-09 | Perilaku ada dalam spesifikasi; gambar varian belum tersedia. |
| I-04/I-14/I-15 menggunakan ilustrasi iuran air | Model AturanTarif mencakup energi dan biaya tetap; uraian mempertahankan komponennya jika berlaku. Nilai contoh tidak menetapkan tarif produksi. |
| Label PDF/CSV pada ilustrasi kartu landing terpotong | Kekurangan aset sumber tetap ada; bukan kontrol ekspor operasional dan PNG tidak diubah. |
| Teks pratinjau/simulasi atau kebijakan ditinjau masih tertanam pada sejumlah PNG | Prosa dan tabel DPPL2 dibersihkan; teks raster dipertahankan sesuai larangan perubahan aset. |
| Tautan Figma | URL HTTPS dan node-id tetap dipertahankan sebagai referensi. Percobaan pembukaan melalui alat web gagal karena URL tidak dapat diakses; status akses jarak jauh belum terverifikasi. |
| Render browser | Struktur tabel Markdown/HTML diverifikasi dengan parser. Chrome headless dicoba, tetapi tidak dapat berjalan akibat pembatasan socket sandbox (`Operation not permitted`). Tampilan akhir pada renderer target belum diperiksa melalui browser. |

## Inspeksi visual dan integritas aset

Seluruh 20 gambar diperiksa melalui lima contact sheet lokal dan empat potongan landing; komponen navigasi Teknisi juga dibaca langsung. Kesesuaian gambar target terhadap sumber yang dipakai pada contact sheet diverifikasi ulang berdasarkan SHA256. Data, label, satuan, jenis kontrol, dan susunan mobile dibandingkan dengan tabel objek. Aritmetika ilustrasi tetap konsisten: 12×4.000=48.000; 12+10+14=36 m³; 48.000+40.000+56.000=144.000; air 18+24+20+22=84 m³; energi 36+42+38+44=160 kWh. Nilai panel sesaat menggunakan W.

Inventaris di bawah sengaja berada pada laporan QA, bukan rekap akademis §6.21. Dimensi adalah ukuran berkas raster; tidak digunakan untuk menyatakan hasil pengukuran node Figma maupun skala ekspor native.

| ID | Nama ekspor sumber | Target | Raster px | SHA256 target (= sumber) |
| --- | --- | --- | --- | --- |
| I-00 | Landing page.png | [PNG](./assets/diagram/figma-final/I-00.png) | 2880 × 12465 | `b035cc8aa9a3c2f4b596914a638c773a3b8ebb40c12eac96864b3ba58262491a` |
| I-01 | Login.png | [PNG](./assets/diagram/figma-final/I-01.png) | 2880 × 1800 | `d489297153b242441d31fd943583f297afa0363e5a16fc468833e017a945f5f5` |
| I-02 | Registrasi Akun.png | [PNG](./assets/diagram/figma-final/I-02.png) | 2880 × 1800 | `c8446dda4fcfef8cb479a656884983162cf26153e3f7a6d806616a94095e860a` |
| I-03 | Dashboard Warga.png | [PNG](./assets/diagram/figma-final/I-03.png) | 2880 × 1800 | `da4b3f439ee717058087f8d0f7e67d780b179132363bb8c3173c3447b693fb36` |
| I-04 | Tagihan Iuran.png | [PNG](./assets/diagram/figma-final/I-04.png) | 2880 × 1800 | `8f13a793126574b68754959d23037b8879a0de3278642a05d1301ed81274f349` |
| I-05 | Buat Laporan Gangguan.png | [PNG](./assets/diagram/figma-final/I-05.png) | 2880 × 1800 | `f108782025c79cf4d5738d76267637cd7268a96991f2644c32ee5d56a939f707` |
| I-06 | Daftar Laporan Saya.png | [PNG](./assets/diagram/figma-final/I-06.png) | 2880 × 1800 | `f4c5addbf7bb39ec2ff7654e22d72793df65c14dddd1423efc8b1017c7d79d77` |
| I-07 | Detail dan Riwayat Laporan.png | [PNG](./assets/diagram/figma-final/I-07.png) | 2880 × 1800 | `742af6bff23efa49194162c7d6956bef9c09fba6dbe0edc57044580897cd31eb` |
| I-08 | Peringatan Perangkat.png | [PNG](./assets/diagram/figma-final/I-08.png) | 2880 × 1800 | `28afb8a6dfe44b511560179a10fbb8bbeffcd186c7ace48c753835db38729004` |
| I-09 | Histori Performa Panel.png | [PNG](./assets/diagram/figma-final/I-09.png) | 2880 × 1800 | `3782ac0b8bbe8d078009f985b39c6ba98b5da674aca150a15560c32c49b9a1c1` |
| I-10 | Daftar Tugas Teknisi.png | [PNG](./assets/diagram/figma-final/I-10.png) | 2880 × 1800 | `2de353619e98d4b4254b20540298d3a397a7d0b4a24c62fd80f73d505b4f8958` |
| I-11 | Detail dan Status Tugas.png | [PNG](./assets/diagram/figma-final/I-11.png) | 2880 × 1800 | `6f104258f7eefcdba607fe364a3c4431e65d3349a516b16b3fe49dd007060a4a` |
| I-12 | Pencatatan Pemeliharaan.png | [PNG](./assets/diagram/figma-final/I-12.png) | 2880 × 1800 | `b5308954f8cef10adf34ac9f6960b2c2984ebefbf37e7174f61b2bcbe9b88450` |
| I-13 | Analitik Komunal.png | [PNG](./assets/diagram/figma-final/I-13.png) | 2880 × 1800 | `cd1cd152b809e87f054a73a786829efa60eb7bc1b082fb15836447d23d33a9f0` |
| I-14 | Kalkulasi dan Finalisasi Iuran.png | [PNG](./assets/diagram/figma-final/I-14.png) | 2880 × 1800 | `76615aae52958d1d838c82a27059338265c7ab79f946f465725e7b276a9440f4` |
| I-15 | Rekapitulasi Iuran.png | [PNG](./assets/diagram/figma-final/I-15.png) | 2880 × 1800 | `2bfe3ddc8e87c44c8eaea6740efe77a2195ccef0783594bba09e6813256fab34` |
| I-16 | Persetujuan Akun.png | [PNG](./assets/diagram/figma-final/I-16.png) | 2880 × 1800 | `f0d5834c2787b739a5d6b7fb2ebb90ca330c49a96472599c7b68e26502351076` |
| I-10-M | Daftar Tugas Teknisi.png | [PNG](./assets/diagram/figma-final/I-10-M.png) | 780 × 1688 | `49decefbd3d4560a7f9f343629aa12854ecc5ad389351a23b7a268c3a2dd8aee` |
| I-11-M | Html → Body → Main.png | [PNG](./assets/diagram/figma-final/I-11-M.png) | 780 × 2730 | `86136809863e168386897363f59fcccb8adaa10cb5e2683c7ca3ddfde2368f40` |
| I-12-M | Html → Body → Main-1.png | [PNG](./assets/diagram/figma-final/I-12-M.png) | 780 × 1688 | `3be725bd4e2289960b7e64a44b9a5d769e35ab46a69d45260f4b0a5e36632ac2` |

## Hasil validasi akhir

- Lulus: 20 subbab layar, 20 gambar utama, caption Gambar 6.1–6.20, dan 20 gambar pada rekap §6.21; seluruh metadata layar dan tabel empat kolom tersedia.
- Lulus: 163 ID objek unik dan identik daftar awal; seluruh UC01–UC14 tercakup; rujukan operasi dan algoritma BAB 6 tersedia pada BAB 5.
- Lulus: 115 referensi berkas lokal serta seluruh jangkar eksplisit DPPL2 valid. Satu referensi eksternal Figma belum terverifikasi aksesnya.
- Lulus: 50 kelas, seluruh signature/atribut, blok algoritma, dan query bernomor dipertahankan; 55 operasi pada 15 kelas draf juga tersedia. Seluruh 37 kelas di luar scope identik.
- Lulus: seluruh 112 aset identik; 20 PNG asli dapat di-decode, terdiri atas 17 desktop dan 3 mobile.
- Lulus: BAB 1–4 identik; BAB 7 identik byte demi byte dengan HEAD awal, termasuk heading dan akhir berkas. SHA256 BAB 7 termasuk heading: `a34ac816351577636b271e50b64b81fe846e007d21d561610898eac72bc14361`.
- Lulus: pemindaian narasi AI/QA/handoff pada BAB 5–6 dan pembacaan ulang diff; tidak ada lagi tautan laporan QA di DPPL2.
- Lulus: hasil render Markdown/HTML memiliki 40 elemen gambar dengan teks alternatif, termasuk 20 gambar di dalam sel tabel rekap. Tampilan browser belum dapat diverifikasi karena pembatasan lingkungan.
- Lulus: `git diff --check`; hanya dua dokumen berubah, staging kosong, dan HEAD tetap `4003cb53345ec525755969d61181433765c7cb24`. Tidak ada commit atau push baru.

Tidak dilakukan pengujian aplikasi, eksekusi SQL, build/E2E, pengiriman notifikasi, sensor nyata, ekspor PDF/CSV, pencetakan, uji aksesibilitas interaktif, atau audit node/prototype Figma. Temuan terbuka di atas tetap memerlukan tindak lanjut; laporan ini tidak menyatakan aplikasi telah diuji atau seluruh kebutuhan telah diimplementasikan.

## Pemeriksaan yang dapat diulang

Jalankan dari root repo dengan Python 3, Pillow, dan markdown-it-py yang tersedia pada lingkungan pemeriksaan. Skrip berikut memakai SHA awal tetap, tanpa fetch, staging, commit, atau push. Perbandingan kebutuhan dan visual di atas merupakan pemeriksaan manual yang tidak dibuktikan hanya oleh penghitung struktur.

```python
from pathlib import Path
from urllib.parse import unquote
from html.parser import HTMLParser
from markdown_it import MarkdownIt
from PIL import Image
import hashlib, re, subprocess
BASE='4003cb53345ec525755969d61181433765c7cb24'
p=Path('docs/M8/K03_G10_DPPL2.md'); raw=p.read_bytes(); s=raw.decode()
original=subprocess.check_output(['git','show',BASE+':'+str(p)])
base=original.decode()
def chapter(text,n):
    return text.split(f'# BAB {n}:',1)[1].split(f'# BAB {n+1}:',1)[0]
def classes(text):
    return dict(re.findall(r'^## 5\.\d+ Kelas (\w+)\n(.*?)(?=^## 5\.|^# BAB 6:)',text,re.M|re.S))
assert subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()==BASE
assert raw.split(b'# BAB 7:',1)[1]==original.split(b'# BAB 7:',1)[1]
for n in range(1,5): assert chapter(s,n)==chapter(base,n),n
assert s[:s.index('## Daftar Perubahan')]==base[:base.index('## Daftar Perubahan')]
assert s.split('| C |',1)[1].split('\n',1)[1].split('# BAB 1:',1)[0]==base.split('| C |',1)[1].split('\n',1)[1].split('# BAB 1:',1)[0]
print('PASS BAB1–4 dan pembuka di luar entri A/B/C identik dengan HEAD awal')
print('PASS BAB7 byte-for-byte; SHA256 (termasuk heading):',hashlib.sha256(b'# BAB 7:'+raw.split(b'# BAB 7:',1)[1]).hexdigest())
old,new=classes(base),classes(s)
allowed={'Warga','Teknisi','LaporanGangguan','RiwayatStatusLaporan','WargaView','TeknisiView','LaporanController','Validasi','ModulAkun','ModulLaporan','DataAkunBoundary','DataLaporanBoundary','Database'}
assert len(old)==len(new)==50 and old.keys()==new.keys()
for name,body in old.items():
    if name not in allowed: assert body==new[name],name
    assert re.findall(r'^\| `([+-].*?)` \|',body,re.M)==re.findall(r'^\| `([+-].*?)` \|',new[name],re.M),name
assert re.findall(r'Tabel 5\.\d+\.2\. Atribut[^\n]*\n\n(.*?)(?=\n###)',chapter(s,5),re.S)==re.findall(r'Tabel 5\.\d+\.2\. Atribut[^\n]*\n\n(.*?)(?=\n###)',chapter(base,5),re.S)
assert re.findall(r'```.*?```',chapter(s,5),re.S)==re.findall(r'```.*?```',chapter(base,5),re.S)
assert re.findall(r'^\| Q-.*$',chapter(s,5),re.M)==re.findall(r'^\| Q-.*$',chapter(base,5),re.M)
print('PASS 50 kelas; seluruh signature/atribut, blok algoritma, dan query bernomor dipertahankan; 37 kelas di luar scope identik')
# Operasi draf kontribusi tetap ada, terlepas dari nomor kelas lama.
legacy=classes(Path('.m8-handoff/legacy/docs/M8/K03_G10_DPPL2.md').read_text())
legacy_ops=0
for name,body in legacy.items():
    for op in re.findall(r'^\| `([^`]+)` \| public \|',body,re.M):
        if '(' in op:
            assert '`+ '+op+'`' in new[name],(name,op)
            legacy_ops+=1
assert legacy_ops==55
print(f'PASS {legacy_ops} operasi pada {len(legacy)} kelas draf tetap tersedia')
b6=chapter(s,6); ids=[f'I-{i:02}' for i in range(17)]+['I-10-M','I-11-M','I-12-M']
parts=re.findall(r'^## 6\.(\d+) Rancangan Antarmuka (I-\d{2}(?:-M)?) — ([^\n]+)\n(.*?)(?=^## 6\.|\Z)',b6,re.M|re.S)
assert [x[1] for x in parts]==ids and [int(x[0]) for x in parts]==list(range(1,21))
assert re.findall(r'Gambar 6\.(\d+)\.',b6)==[str(i) for i in range(1,21)]
objs=[]
for num,id,name,body in parts:
    for field in [f'**ID Antarmuka:** {id}',f'**Nama Layar:** {name}','**Peran/Aktor:**','**UC terkait:**','**Jenis viewport:**','**Konteks/tujuan:**','**Alur navigasi dan otorisasi:**','**Kondisi normal dan skenario alternatif:**','| Id_Objek | Jenis | Konten | Keterangan |']:
        assert field in body,(id,field)
    assert all(len(line.split('|'))==6 for line in body.splitlines() if line.startswith('|')),id
    screen_objs=re.findall(r'^\| (I-\d{2}(?:-M)?-OBJ-\d+) \|',body,re.M)
    assert screen_objs==[f'{id}-OBJ-{i:02}' for i in range(1,len(screen_objs)+1)] and screen_objs
    objs+=screen_objs
    assert re.findall(r'<img src="([^"]+)"',body)==[f'./assets/diagram/figma-final/{id}.png']
assert len(objs)==len(set(objs))==163
assert objs==re.findall(r'^\| (I-\d{2}(?:-M)?-OBJ-\d+) \|',chapter(base,6),re.M)
assert set(re.findall(r'UC\d{2}',b6))=={f'UC{i:02}' for i in range(1,15)}
assert set(re.findall(r'\bI-\d{2}(?:-M)?\b',b6))==set(ids)
assert re.findall(r'<a id="([^"]+)"></a>',b6)==ids
recap=b6.split('## 6.21 ',1)[1]
assert re.findall(r'\| \[(I-\d{2}(?:-M)?)\]\(#I-',recap)==ids
assert re.findall(r'<img src="([^"]+)"',recap)==[f'./assets/diagram/figma-final/{id}.png' for id in ids]
assert not re.search(r'dimensi|pixel|raster|screenshot|\.png\]\(',recap,re.I)
assert set(re.findall(r'Algo-\d+',b6))<=set(re.findall(r'\*\*ID Algoritma:\*\* \*(Algo-\d+)',chapter(s,5)))
for cls,op in set(re.findall(r'\b([A-Z]\w*)\.(\w+)',b6)):
    if cls in new: assert re.search(r'`\+ '+re.escape(op)+r'\(',new[cls]),(cls,op)
print('PASS 20 subbab/gambar/caption; 163 ID objek unik dan tetap; UC01–UC14; rujukan operasi/algoritma valid')
print('PASS rekap 6.21: 20 ID/nama/gambar; tabel empat kolom; tanpa metadata ekspor')
# Semua path lokal dan jangkar eksplisit pada dokumen.
refs=re.findall(r'(?:src|href)="([^"]+)"',s)+re.findall(r'\]\(([^)]+)\)',s)
local=0
for ref in refs:
    if ref.startswith(('https://','http://')):continue
    target,_,fragment=ref.partition('#')
    if target:
        assert (p.parent/unquote(target)).is_file(),ref
        local+=1
    if fragment and not target: assert f'id="{fragment}"' in s,ref
print(f'PASS {local} referensi berkas lokal dan seluruh jangkar eksplisit pada DPPL2')
# Semua aset, tidak hanya 20 PNG antarmuka, tetap identik.
assets=subprocess.check_output(['git','ls-tree','-r','--name-only',BASE,'--','docs/M8/assets'],text=True).splitlines()
for file in assets:
    assert Path(file).read_bytes()==subprocess.check_output(['git','show',BASE+':'+file]),file
pngs=list((p.parent/'assets/diagram/figma-final').glob('*.png'))
assert {f.stem for f in pngs}==set(ids)
for f in pngs:
    with Image.open(f) as im:
        im.load(); assert im.format=='PNG' and im.height>0 and im.width==(780 if f.stem.endswith('-M') else 2880)
print(f'PASS seluruh {len(assets)} aset identik; 20 PNG asli berhasil di-decode (17 desktop, 3 mobile)')
qa=Path('docs/M8/M8_HANDOFF_QA.md').read_text()
inventory=re.findall(r'^\| (I-\d{2}(?:-M)?) \| ([^|]+) \| \[PNG\]\([^)]+\) \| ([^|]+) \| `([a-f0-9]+)` \|$',qa,re.M)
assert len(inventory)==20
for id,name,dims,digest in inventory:
    source=Path('.m8-handoff')/('mobile' if id.endswith('-M') else 'desktop')/name.strip()
    target=p.parent/'assets/diagram/figma-final'/(id+'.png')
    assert hashlib.sha256(source.read_bytes()).hexdigest()==digest==hashlib.sha256(target.read_bytes()).hexdigest(),id
    with Image.open(target) as im: assert dims.strip()==f'{im.width} × {im.height}',id
print('PASS inventaris QA: 20 hash/dimensi sesuai PNG target dan sumber lokal')
forbidden=r'Codex|\bQA\b|handoff|origin/main|override scope|crop|raster|node native|belum diekspor|spesifikasi (?:state )?tekstual|review kelompok|draf lama|belum diuji|tidak diklaim|audit Figma|ekspor pengguna|M8_HANDOFF'
assert not re.search(forbidden,chapter(s,5)+b6,re.I)
print('PASS pemindaian narasi proses AI/QA/handoff pada BAB5–6')
# Markdown dirender dengan dukungan tabel dan HTML; setiap gambar rekap berada di sel tabel.
html=MarkdownIt('commonmark',{'html':True}).enable('table').render(b6)
class Inspect(HTMLParser):
    def __init__(self):super().__init__();self.in_td=False;self.images=[];self.cell_images=[]
    def handle_starttag(self,tag,attrs):
        data=dict(attrs)
        if tag=='td':self.in_td=True
        if tag=='img':
            assert data.get('src') and data.get('alt') and int(data.get('width',0))>0
            self.images.append(data)
            if self.in_td:self.cell_images.append(data)
    def handle_endtag(self,tag):
        if tag=='td':self.in_td=False
parser=Inspect(); parser.feed(html)
assert len(parser.images)==40 and len(parser.cell_images)==20
Path('/tmp/m8-bab6-preview.html').write_text('<!doctype html><meta charset="utf-8"><base href="file://'+str(p.parent.resolve())+'/"><style>body{font:16px sans-serif;max-width:1150px;margin:32px auto}table{border-collapse:collapse;width:100%}td,th{border:1px solid #bbb;padding:8px;vertical-align:top}img{max-width:100%;height:auto}</style>'+html)
print('PASS render Markdown: 40 elemen gambar dengan alt; 20 gambar rekap berada di dalam sel tabel')
changed=subprocess.check_output(['git','diff','--name-only'],text=True).splitlines()
assert set(changed)<={'docs/M8/K03_G10_DPPL2.md','docs/M8/M8_HANDOFF_QA.md'},changed
assert not subprocess.check_output(['git','diff','--cached','--name-only'],text=True).strip()
subprocess.run(['git','diff','--check'],check=True)
print('PASS git diff --check; hanya dua dokumen dalam scope; staging kosong; HEAD tidak berubah')
```

# QA dan Handoff M8 — BAB5/BAB6

Tanggal pemeriksaan: 28 Oktober 2026. **PASS untuk scope BAB5 UC03/04/07 dan seluruh BAB6**, dengan gap visual dan keputusan desain yang dinyatakan di bawah. Ini QA dokumentasi, bukan persetujuan implementasi atau hasil pengujian aplikasi.

## Acuan dan batas perubahan

- HEAD awal dan `origin/main` setelah `git fetch origin main`: `90718d402d1f30f1a974379e196180ee4dc97206`.
- Branch kerja: `docs/m8-final-rionaldo-20261028`; remote `https://github.com/wequra/IF2150-RPL-K03-G10.git`.
- Acuan kebutuhan: [M5 §4.4.1–§4.4.14](../M5/K03_G10_SKPL.md); arsitektur: [M6 Tabel 2.1/3.1](../M6/K03_G10_APL.md); signature: [M7 §4.1.1–§4.1.2](../M7/K03_G10_DPPL.md). Draf lama dibaca dari `.m8-handoff/legacy/`, tidak menggantikan dokumen aktual.
- Override `.m8-handoff/BAB7_SCOPE_OVERRIDE.md` mengalahkan master prompt lama: BAB7 sepenuhnya milik anggota lain. Perubahan BAB7 lokal dipulihkan **hanya pada section tersebut** dari `origin/main`; BAB5/BAB6 yang sudah dikerjakan dilanjutkan.
- BAB1–4 identik dengan acuan. Daftar Perubahan diperbarui agar tidak mengklaim pengerjaan BAB7. Tidak ada perubahan M1–M7, aplikasi, asistensi, atau logbook.
- **BAB7 identik dengan origin/main**, termasuk template yang ada di remote. Template BAB7 tidak dinilai sebagai error QA. SHA256 isi setelah heading BAB7: `9189d1a77657a44bba5cf30e62c695c78d016c90a99d64099eb6698627ab59cd`.

## Audit dan integrasi BAB5

**PASS:** seluruh 50 kelas, atribut dan operasi kelas rekan tetap tersedia; 37 section kelas di luar penguatan UC03/04/07 identik dengan acuan. Dua signature transaksi yang dahulu disingkat `...` diperluas sesuai registri M7, bukan operasi baru. Pemetaan draf lama memakai nama kelas dan signature lengkap (parameter, tipe hasil, visibility public), bukan nomor subbab. Semua **55 operasi dari 15 kelas draf lama** ditemukan dalam kelas aktual:

| Subbab lama | Nama kelas | Subbab aktual | Operasi draf dipertahankan |
| --- | --- | --- | --- |
| 5.1 | Warga | 5.2 | 5 / PASS |
| 5.2 | Teknisi | 5.3 | 2 / PASS |
| 5.3 | LaporanGangguan | 5.20 | 7 / PASS |
| 5.4 | StatusLaporan | 5.21 | 1 / PASS |
| 5.5 | RiwayatStatusLaporan | 5.22 | 3 / PASS |
| 5.6 | PenugasanLaporan | 5.24 | 1 / PASS |
| 5.7 | WargaView | 5.29 | 5 / PASS |
| 5.8 | TeknisiView | 5.30 | 3 / PASS |
| 5.9 | LaporanController | 5.35 | 7 / PASS |
| 5.10 | Validasi | 5.39 | 1 / PASS |
| 5.11 | ModulAkun | 5.40 | 1 / PASS |
| 5.12 | ModulLaporan | 5.42 | 7 / PASS |
| 5.13 | DataAkunBoundary | 5.46 | 1 / PASS |
| 5.14 | DataLaporanBoundary | 5.48 | 8 / PASS |
| 5.15 | Database | 5.50 | 3 / PASS |

| Jalur audit | Bukti pada BAB5 aktual | Hasil |
| --- | --- | --- |
| UC03 membership | §5.35 sesi/peran; §5.40/5.46 ambil warga terkini; Algo-034 memeriksa keanggotaan sebelum NEW/INSERT, Algo-003 memeriksa status komunitas | PASS: penolakan tidak memutasi laporan |
| UC03 validasi/simpan/retry | §5.39 jenis/deskripsi/unggahan; §5.29/5.42 sukses hanya setelah simpan; status MENUNGGU; offline belum terkirim | PASS: deduplikasi retry dinyatakan asumsi, tidak diklaim sudah tersedia |
| UC04 daftar/detail/riwayat | §5.35 idWarga dari sesi; §5.42 cek pemilik juga pada permintaan riwayat langsung; Tabel 5.48.4 predikat idWarga+idLaporan dan `timestamp ASC, id_riwayat ASC` | PASS: ID asing/tidak ada mendapat pesan generik; detail sah tanpa perubahan boleh kosong; error query bukan empty |
| UC07 otorisasi/transisi | §5.42 verifikasi penugasan sebelum perubahan; Algo-017 hanya MENUNGGU → SEDANG_DIPERBAIKI → SELESAI; terminal tanpa opsi | PASS: sama/lompat/mundur/nilai di luar enum ditolak |
| UC07 atomisitas | Algo-040 → Algo-042; lock laporan/penugasan, validasi transisi dan statusLama, UPDATE dan INSERT masing-masing harus satu baris; satu COMMIT atau ROLLBACK | PASS desain: tidak ada status tersimpan tanpa riwayat; binding parameter bernama diperjelas; SQL belum dieksekusi |
| Tipe pendukung | Pengantar BAB5 memulihkan elaborasi record FormLaporan/KonteksSesi/hasil/detail/riwayat dari draf; kontrak pendamping terpisah memang tidak tersedia | PASS: asumsi ditandai; tidak menambah ID kelas/algoritma fiktif |

Audit lanjutan memperjelas cabang permintaan riwayat langsung agar ID asing/tidak ada tidak ditampilkan sebagai riwayat kosong. Identitas pelaku selalu dari sesi server. Urutan daftar, tie-breaker ID dan strategi lock merupakan elaborasi integritas yang perlu review kelompok; signature tetap mengikuti M7. Kelas bersama seperti TeknisiView/Validasi tetap mempertahankan operasi UC milik rekan.

## Inventaris 20 PNG final

Sumber: ekspor pengguna dari [Figma final Fajar Tech](https://www.figma.com/design/m8esKpQeFqfidizfymXTJF/Fajar-Tech-Mockup?node-id=1-2), tersedia di `.m8-handoff/desktop/` (17) dan `.m8-handoff/mobile/` (3 layar + 1 potongan navbar). **20/20 berkas target identik byte demi byte dengan sumber lokal**, nonzero dan berhasil di-decode Pillow. Gambar asli dipertahankan; tidak dibuat ulang.

Dimensi berikut adalah ukuran raster ekspor. Desktop 2880 px konsisten dengan viewport sekitar 1440 px pada ekspor 2×; mobile 780 px sekitar 390 px. Skala asli tidak diverifikasi melalui node Figma.

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

`Html → Body → Main.png` adalah detail tugas; `Html → Body → Main-1.png` adalah pemeliharaan. `Nav - Menu Teknisi.png` hanya komponen navigasi, bukan layar ke-21 dan tidak disalin sebagai aset layar. Jalur 20 aset yang di-commit seluruhnya ASCII.

## Kerunutan BAB6 terhadap skenario M5

Setiap layar mempunyai aktor, UC, konteks, viewport, gambar, caption Gambar 6.1–6.20, tabel empat kolom `Id_Objek | Jenis | Konten | Keterangan`, serta alur navigasi/otorisasi dan state. Rekap §6.21 memuat 20 ID/path. Angka, nama, waktu, nominal dan sensor seluruh PNG merupakan ilustrasi.

**V** = ada PNG yang menunjukkan tahap tersebut. **T** = spesifikasi state tekstual di bagian layar yang sama; belum ada PNG varian. PASS pada tabel berarti kebutuhan terdokumentasi, bukan interaksi prototype teruji.

| Sumber M5 | Layar / aktor | Normal (V/T) | Alternatif wajib (T) | Hasil |
| --- | --- | --- | --- | --- |
| §4.4.1 UC01 | I-03 / Warga | V volume air, status Normal, baterai %, panel W | A1 data terakhir + timestamp + notice; tanpa pembacaan bukan nol; Rendah/Kritis tekstual | PASS |
| §4.4.2 UC02 | I-04 / Warga | V periode dan tagihan FINAL milik sesi | A1 belum final: nominal DRAFT disembunyikan | PASS |
| §4.4.3 UC03 | I-05 / Warga | V formulir; T validasi → MENUNGGU → simpan → sukses/ID | A1 bukan warga: tolak tanpa INSERT; invalid/offline/error simpan tekstual | PASS |
| §4.4.4 UC04 | I-06/I-07 / Warga | V daftar milik sendiri, detail, status dan waktu awal; T riwayat sesudah perubahan | A1 belum ada laporan; ID asing ditolak; empty/filter/error berbeda | PASS |
| §4.4.5 UC05 | I-08 / Teknisi | V detail kritis dan status terkirim; T deteksi ≤ ambang dan penentuan penerima | A1 jaringan putus: pending, simpan sementara, kirim ulang setelah pulih | PASS |
| §4.4.6 UC06 | I-09 / Teknisi | V pilihan rentang, grafik dan waktu/daya | A1 historis belum tersedia; rentang invalid, loading/error bukan nol | PASS |
| §4.4.7 UC07 | I-10/I-11/I-10-M/I-11-M / Teknisi | V daftar/detail/MENUNGGU dan tombol langkah berikutnya; T dua transisi legal dan hasil simpan | A1 tanpa penugasan; A2 transisi tidak valid dengan opsiLegal; konflik/gagal riwayat rollback | PASS |
| §4.4.8 UC08 | I-12/I-12-M / Teknisi | V formulir perangkat/waktu/tindakan/hasil; T sukses dan riwayat per perangkat/waktu | A1 kolom wajib kosong: batal, tandai kolom, pertahankan lainnya | PASS |
| §4.4.9 UC09 | I-13 / Pengurus | V periode, agregat air/energi, grafik dan tabel nilai | A1 bukan pengurus: tolak sebelum query komunal | PASS |
| §4.4.10 UC10 | I-14 / Pengurus | V periode, tarif, DRAFT/pratinjau; T tinjau → konfirmasi → otorisasi ulang → FINAL | A1 tidak berwenang tanpa mutasi; A2 data tidak lengkap menghentikan hitung | PASS |
| §4.4.11 UC11 | I-15 / Pengurus | V pilihan periode final, pratinjau, PDF/CSV/cetak; T buat rekap dan hasil ekspor | A1 data belum final blokir generate; A2 bukan pengurus ditolak | PASS |
| §4.4.12 UC12 | I-02 / Calon Pengguna | V nama/email/password/peran; T simpan MENUNGGU PERSETUJUAN dan notifikasi | A1 email duplikat; A2 kolom kosong; tidak login otomatis | PASS |
| §4.4.13 UC13 | I-01 / Warga, Teknisi, Pengurus | V email/password; T verifikasi kredensial/status → dashboard peran | A1 menunggu; A2 ditolak; A3 kredensial salah; status akun tidak dibocorkan sebelum autentikasi | PASS |
| §4.4.14 UC14 | I-16 / Pengurus | V daftar/detail pengajuan dan aksi; T setujui, persistensi, notifikasi, refresh | A1 tolak akun; A2 bukan pengurus; daftar kosong dan konflik dipisahkan | PASS |

I-00 adalah navigasi publik ke UC12/UC13, bukan UC baru. I-10-M/I-11-M/I-12-M mempertahankan otorisasi desktop, memakai navigasi mobile dan susunan satu kolom; bidang cari/status pada I-10-M berdampingan. Tujuan I-08/I-09 dari navbar mobile adalah tujuan logis, tanpa klaim ada ekspor mobile tambahan. Perubahan viewport tidak mengubah peran/status.

## Inspeksi visual dan gap yang terbuka

Inspeksi dilakukan atas PNG nyata: lima contact sheet untuk seluruh 20 layar, serta empat potongan landing untuk membaca halaman panjang. Nama layar, jenis kontrol, isi tabel, satuan dan angka utama dibandingkan dengan tabel objek. PNG mobile detail/pemeliharaan tidak tertukar. Aritmetika ilustrasi konsisten: 12×4.000=48.000; 12+10+14=36 m³; 48.000+40.000+56.000=144.000; grafik air 18+24+20+22=84 m³; energi 36+42+38+44=160 kWh. Panel menampilkan W, bukan kWh.

| Gap | Dampak dan tindak lanjut |
| --- | --- |
| Varian alternatif, loading, empty, sukses dan error belum diekspor | Seluruhnya ditulis sebagai T; perlu review visual berikutnya. Tidak mengklaim setiap cabang mempunyai gambar/prototype. |
| I-01/I-02 memperlihatkan teks contoh password | Saat implementasi wajib masking dan hashing; PNG asli tidak diubah. |
| I-07/I-11 hanya memperlihatkan pengajuan awal MENUNGGU | Riwayat sesudah perubahan dan terminal SELESAI masih T. Tidak mengklaim pengajuan awal sudah INSERT C22. |
| I-11-M tidak memuat bottom navbar pada crop | Rujukan komponen navbar terpisah hanya bahan lokal; penempatan akhir perlu review bersama komponen. Tidak ada klaim navbar terlihat pada crop. |
| I-14 belum menampilkan dialog Tetapkan Final; I-15 belum menampilkan tombol Buat rekapitulasi | Kontrol/state tersebut ditandai T pada tabel objek; review/otorisasi tidak dilewati. |
| I-04/I-14/I-15 memakai contoh iuran air | Komponen energi/biaya tetap dari model M7 perlu rincian bila berlaku; contoh bukan keputusan tarif produksi. |
| I-00 ilustrasi kartu rekap memotong label PDF/CSV | Kekurangan kecil pada ilustrasi sumber, bukan tombol ekspor operasional; PNG tetap asli, perlu perapian oleh pemilik desain bila diekspor ulang. |
| FAQ/tab peran lain I-00, riwayat pemeliharaan I-12, tabel alternatif grafik I-09 | Perilaku dan state ditulis T; tidak ada PNG varian tambahan. |
| Ukuran target sentuh, kontras numerik, keyboard/screen reader, editability dan prototype Figma | Belum diuji/diukur native; hanya spesifikasi aksesibilitas tekstual. Tidak mengklaim lulus audit Figma atau aplikasi. |

## Keputusan manusia dan batas pemeriksaan

Perlu review kelompok untuk kebijakan pilihan/persetujuan peran, jenis gangguan dan foto opsional beserta MIME/ukuran, batas password (angka 8 merupakan desain BAB5 yang sudah ada), ambang sensor, tarif energi/biaya tetap, identitas/retensi draf offline dan protokol deduplikasi, serta strategi lock/revalidasi penugasan/membership saat transaksi. Record tambahan adalah elaborasi desain. Keputusan ini tidak menghalangi handoff dokumentasi yang menyatakan asumsi, tetapi belum menjadi persetujuan implementasi.

Di luar scope terdapat petunjuk template pada pembuka dokumen, rujukan kontrak pendamping pada BAB3, dan template BAB7 milik anggota lain. BAB1–4 dan BAB7 dipertahankan. Tidak dilakukan runtime app testing, eksekusi SQL, build/E2E, uji beban/latensi sensor, ekspor PDF/CSV nyata, pencetakan, usability testing atau audit Figma native.

## Perintah QA yang dapat diulang

Jalankan dari root repo dengan Python 3 dan Pillow. Setelah `git fetch origin main`, kode berikut memeriksa acuan remote yang tersedia saat dijalankan. Jika BAB7 remote berubah setelah handoff, perbedaan harus direkonsiliasi oleh pemilik scope sebelum commit berikutnya. Pemeriksaan semantik skenario/visual mengacu pada tabel audit di atas; checker struktural tidak membuktikan perilaku runtime.

```python
from pathlib import Path
from collections import Counter
from urllib.parse import unquote
import hashlib, re, subprocess
from PIL import Image

p = Path('docs/M8/K03_G10_DPPL2.md')
s = p.read_text()
base = subprocess.check_output(['git', 'show', 'origin/main:' + str(p)], text=True)
def chapter(text, number):
    return text.split(f'# BAB {number}:', 1)[1].split(f'# BAB {number+1}:', 1)[0]
def classes(text):
    return {name: body for name, body in re.findall(
        r'^## 5\.\d+ Kelas (\w+)\n(.*?)(?=^## 5\.|^# BAB 6:)', text, re.M | re.S)}
assert chapter(s, 7) == chapter(base, 7), 'BAB7 berbeda dari origin/main'
for n in range(1, 5):
    assert chapter(s, n) == chapter(base, n), f'BAB{n} berubah'
current, original = classes(s), classes(base)
assert len(current) == len(original) == 50 and current.keys() == original.keys()
allowed = {'Warga', 'Teknisi', 'LaporanGangguan', 'RiwayatStatusLaporan',
    'WargaView', 'TeknisiView', 'LaporanController', 'Validasi', 'ModulAkun',
    'ModulLaporan', 'DataAkunBoundary', 'DataLaporanBoundary', 'Database'}
m7 = Path('docs/M7/K03_G10_DPPL.md').read_text()
for name, body in original.items():
    if name not in allowed:
        assert body == current[name], f'Kelas rekan berubah: {name}'
    for op in re.findall(r'^\| `([+-].*?)` \|', body, re.M):
        if op in {'+ simpanStatusDanRiwayat(...): Boolean', '+ transaksiStatus(...): Boolean'}:
            method = op.split('(')[0]
            full = re.findall(r'^\| `(' + re.escape(method) + r'\([^`]+)` \|', current[name], re.M)
            assert len(full) == 1 and full[0] in m7
        else:
            assert '`' + op + '`' in current[name], (name, op)
print('PASS BAB1-4 identik; 50 kelas dan operasi remote dipertahankan; 37 kelas lain identik')
print('PASS BAB7 identik; SHA256', hashlib.sha256(chapter(s, 7).encode()).hexdigest())

b6 = chapter(s, 6)
ids = [f'I-{n:02}' for n in range(17)] + ['I-10-M', 'I-11-M', 'I-12-M']
parts = re.findall(r'^## 6\.(\d+) Rancangan Antarmuka (I-\d{2}(?:-M)?) — ([^\n]+)\n(.*?)(?=^## 6\.|\Z)', b6, re.M | re.S)
assert [x[1] for x in parts] == ids and [int(x[0]) for x in parts] == list(range(1, 21))
assert not re.search(r'\[ID layar\]|I-XX|6\.X|contoh-design\.png', b6)
assert re.findall(r'Gambar 6\.(\d+)\.', b6) == [str(n) for n in range(1, 21)]
objects = []
for number, screen, name, body in parts:
    assert '| Id_Objek | Jenis | Konten | Keterangan |' in body
    assert f'**ID Antarmuka:** {screen}' in body and f'**Nama Layar:** {name}' in body
    assert '**Peran/Aktor:**' in body and '**UC terkait:**' in body and '**Jenis viewport:**' in body
    assert '**Konteks/tujuan:**' in body and '**Alur navigasi dan otorisasi:**' in body
    assert '**State normal/alternatif kritis:**' in body
    rows = [line for line in body.splitlines() if line.startswith('|')]
    assert all(len(line.split('|')) == 6 for line in rows), screen
    obj = re.findall(r'^\| (I-\d{2}(?:-M)?-OBJ-\d+) \|', body, re.M)
    assert obj and obj == [f'{screen}-OBJ-{n:02}' for n in range(1, len(obj)+1)]
    objects += obj
    src = re.findall(r'<img src="([^"]+)"', body)
    assert src == [f'./assets/diagram/figma-final/{screen}.png']
assert len(objects) == len(set(objects))
assert set(re.findall(r'\bI-\d{2}(?:-M)?\b', b6)) == set(ids)
assert re.findall(r'<a id="([^"]+)"></a>', b6) == ids
assert re.findall(r'\| \[(I-\d{2}(?:-M)?)\]\(#I-', b6) == ids
assert set(re.findall(r'UC\d{2}', b6)) == {f'UC{n:02}' for n in range(1, 15)}
assert set(re.findall(r'Algo-\d+', b6)) <= set(re.findall(r'\*\*ID Algoritma:\*\* \*(Algo-\d+)', chapter(s, 5)))
for cls, op in set(re.findall(r'\b([A-Z]\w*)\.(\w+)', b6)):
    if cls in current and op != 'png':
        assert re.search(r'`\+ ' + re.escape(op) + r'\(', current[cls]), (cls, op)
for target in re.findall(r'\]\(([^)]+)\)', b6):
    if target.startswith(('https://', '#')):
        continue
    assert (p.parent / unquote(target.split('#')[0])).is_file(), target
files = sorted((p.parent / 'assets/diagram/figma-final').glob('*.png'))
assert {f.stem for f in files} == set(ids)
for f in files:
    with Image.open(f) as im:
        im.load()
        assert im.format == 'PNG' and im.width == (780 if f.stem.endswith('-M') else 2880)
        assert im.height > 0
        row = next(x for x in b6.splitlines() if x.startswith(f'| [{f.stem}]'))
        assert f'{im.width} × {im.height} px' in row
print(f'PASS BAB6: {len(parts)} layar; {len(objects)} ID objek unik; 20 caption; 14 UC; tabel 4 kolom; navigasi/path/operasi/algoritma valid')
print('PASS PNG: 17 desktop + 3 mobile ter-decode; ukuran sesuai rekap; navbar bukan layar ke-21')
subprocess.run(['git', 'diff', '--check'], check=True)
print('PASS git diff --check')
```

Kode di atas dieksekusi langsung melalui `python3 .m8-handoff/qa/check_m8.py` (salinan lokal identik, tidak di-commit). Perbandingan sumber PNG dan 55 operasi draf juga dijalankan melalui Python/Pillow. Pemeriksaan Git: `git diff --check`, `git diff --stat`, `git status --short --untracked-files=all`, dan daftar staging eksplisit sebelum commit; tidak memakai `git add .`.

Hasil checker terakhir:

```text
PASS BAB1-4 identik; 50 kelas dan operasi remote dipertahankan; 37 kelas lain identik
PASS BAB7 identik; SHA256 9189d1a77657a44bba5cf30e62c695c78d016c90a99d64099eb6698627ab59cd
PASS BAB6: 20 layar; 163 ID objek unik; 20 caption; 14 UC; tabel 4 kolom; navigasi/path/operasi/algoritma valid
PASS PNG: 17 desktop + 3 mobile ter-decode; ukuran sesuai rekap; navbar bukan layar ke-21
PASS git diff --check
```

Gate commit: hanya DPPL2, 20 PNG final, dan laporan QA ini. BAB7 diverifikasi terhadap fetch terbaru tepat sebelum commit. Commit/push hanya ke branch kerja; tidak ada force push atau push ke main. SHA commit akhir dilaporkan pada handoff Git agar tidak membuat referensi SHA diri sendiri di dalam commit.

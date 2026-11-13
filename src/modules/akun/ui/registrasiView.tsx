'use client';

/**
 * AuthView, bagian registrasi (I-02, UC12). View pasif: hanya menampilkan
 * formulir dan meneruskan isiannya ke API; validasi sebenarnya di server.
 */
import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import AuthShell from '@/components/shell/AuthShell';
import PageTitle from '@/components/shell/PageTitle';
import { Alert, Badge, Button, Card, Field, Input, Select } from '@/components/ui';

type Kolom = 'nama' | 'email' | 'password' | 'peran';
type Galat = Partial<Record<Kolom, string>>;

export default function RegistrasiView() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [peran, setPeran] = useState('WARGA');
  const [galat, setGalat] = useState<Galat>({});
  const [pesan, setPesan] = useState<string | null>(null);
  const [sedangKirim, setSedangKirim] = useState(false);
  const [berhasil, setBerhasil] = useState(false);

  async function tekanDaftar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sedangKirim) return;
    setSedangKirim(true);
    setPesan(null);
    setGalat({});

    try {
      const res = await fetch('/api/auth/registrasi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nama, email, password, peran }),
      });
      const hasil = await res.json();

      if (res.ok && hasil.berhasil) {
        setBerhasil(true);
      } else {
        setPesan(hasil.pesan ?? 'Pendaftaran gagal.');
        setGalat(hasil.galat ?? {});
      }
    } catch {
      // Kegagalan jaringan tidak boleh tampil sebagai pendaftaran berhasil.
      setPesan('Tidak dapat terhubung ke server. Pendaftaran belum tersimpan.');
    } finally {
      // Kata sandi tidak dipertahankan; isian lain tetap.
      setPassword('');
      setSedangKirim(false);
    }
  }

  if (berhasil) {
    return (
      <AuthShell>
        <Card>
          <p style={{ fontSize: 32, color: 'var(--teal)', lineHeight: 1 }} aria-hidden="true">
            ✓
          </p>
          <p style={{ margin: '12px 0' }}>
            <Badge nada="peringatan">Menunggu persetujuan</Badge>
          </p>
          <h1 role="status">Pendaftaran diajukan</h1>
          <p style={{ margin: '12px 0 22px', color: 'var(--muted)' }}>
            Akun Anda menunggu persetujuan Pengurus. Anda belum bisa masuk sebelum akun
            disetujui.
          </p>
          <Link className="btn primary btn-block" href="/login">
            Ke halaman masuk
          </Link>
        </Card>
      </AuthShell>
    );
  }

  return (
    <AuthShell>
      <Card>
        <PageTitle
          judul="Registrasi akun"
          deskripsi="Ajukan akun komunitas. Akses aktif setelah disetujui Pengurus."
        />

        <form onSubmit={tekanDaftar} noValidate>
          {pesan && <Alert nada="bahaya">{pesan}</Alert>}

          <Field label="Nama lengkap *" galat={galat.nama}>
            {(p) => (
              <Input
                {...p}
                name="nama"
                type="text"
                autoComplete="name"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            )}
          </Field>

          <Field label="Email *" galat={galat.email}>
            {(p) => (
              <Input
                {...p}
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
          </Field>

          <Field label="Kata sandi *" galat={galat.password}>
            {(p) => (
              <>
                <Input
                  {...p}
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  aria-describedby={[`${p.id}-bantuan`, p['aria-describedby']]
                    .filter(Boolean)
                    .join(' ')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <small className="field-help" id={`${p.id}-bantuan`}>
                  Minimal 8 karakter.
                </small>
              </>
            )}
          </Field>

          <Field label="Peran yang diajukan *" galat={galat.peran}>
            {(p) => (
              <Select {...p} name="peran" value={peran} onChange={(e) => setPeran(e.target.value)}>
                <option value="WARGA">Warga</option>
                <option value="TEKNISI">Teknisi</option>
                <option value="PENGURUS">Pengurus</option>
              </Select>
            )}
          </Field>

          <Button type="submit" varian="primary" className="btn-block" disabled={sedangKirim}>
            {sedangKirim ? 'Memproses…' : 'Ajukan akun'}
          </Button>
        </form>
      </Card>

      <p className="auth-foot">
        Sudah memiliki akun? <Link href="/login">Masuk</Link>
      </p>
    </AuthShell>
  );
}
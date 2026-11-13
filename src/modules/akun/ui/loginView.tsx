'use client';

/**
 * AuthView, bagian login (I-01, UC13). View pasif: hanya menampilkan formulir
 * dan meneruskan isiannya ke API. Dasbor tujuan ditentukan server dari akun;
 * parameter `next` hanya dipakai bila lolos penyaringan dan tetap dibatasi
 * peran oleh middleware.
 */
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import AuthShell from '@/components/shell/AuthShell';
import PageTitle from '@/components/shell/PageTitle';
import { Alert, Button, Card, Field, Input } from '@/components/ui';
import { urlTujuanAman } from './tujuan';

export default function LoginView() {
  const params = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pesan, setPesan] = useState<string | null>(null);
  const [sedangKirim, setSedangKirim] = useState(false);
  const [berhasil, setBerhasil] = useState(false);

  async function tekanMasuk(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sedangKirim) return;
    setSedangKirim(true);
    setPesan(null);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const hasil = await res.json();

      if (res.ok && hasil.berhasil) {
        setBerhasil(true);
        const tujuan = urlTujuanAman(params.get('next')) ?? hasil.tujuan;
        // Muat ulang penuh agar cookie sesi langsung dipakai middleware.
        window.location.assign(tujuan);
        return;
      }
      setPesan(hasil.pesan ?? 'Masuk gagal.');
    } catch {
      setPesan('Tidak dapat terhubung ke server. Silakan coba lagi.');
    }

    // Hanya sampai sini bila gagal: kata sandi tidak dipertahankan, email tetap.
    setPassword('');
    setSedangKirim(false);
  }

  return (
    <AuthShell>
      <Card>
        <PageTitle judul="Masuk" deskripsi="Gunakan akun komunitas yang sudah disetujui Pengurus." />

        <form onSubmit={tekanMasuk} noValidate>
          {pesan && <Alert nada="bahaya">{pesan}</Alert>}
          {berhasil && <Alert>Berhasil masuk. Mengalihkan ke dasbor…</Alert>}

          <Field label="Email *">
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

          <Field label="Kata sandi *">
            {(p) => (
              <Input
                {...p}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
          </Field>

          <Button type="submit" varian="primary" className="btn-block" disabled={sedangKirim}>
            {sedangKirim ? 'Memproses…' : 'Masuk'}
          </Button>
        </form>
      </Card>

      <p className="auth-foot">
        Belum punya akun? <Link href="/registrasi">Daftar akun</Link>
      </p>
    </AuthShell>
  );
}

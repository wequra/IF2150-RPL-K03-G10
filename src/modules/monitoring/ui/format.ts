// Format angka dan waktu WIB untuk layar pemantauan.

export function angkaId(nilai: number, desimal = 0): string {
  return new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: desimal,
    maximumFractionDigits: desimal,
  }).format(nilai);
}

function bagianWib(iso: string): Record<string, string> {
  return Object.fromEntries(
    new Intl.DateTimeFormat("id-ID", {
      timeZone: "Asia/Jakarta",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(new Date(iso))
      .map((p) => [p.type, p.value]),
  );
}

// "28 Okt 2026 · 10.20 WIB"
export function waktuWib(iso: string): string {
  const b = bagianWib(iso);
  return `${b.day} ${b.month} ${b.year} · ${b.hour}.${b.minute} WIB`;
}

// "28 Okt 2026"
export function tanggalPanjangWib(iso: string): string {
  const b = bagianWib(iso);
  return `${b.day} ${b.month} ${b.year}`;
}

// "10.20"
export function jamWib(iso: string): string {
  const b = bagianWib(iso);
  return `${b.hour}.${b.minute}`;
}

// "2026-10-28", untuk nilai input tanggal.
export function tanggalWib(iso: string): string {
  const b = Object.fromEntries(
    new Intl.DateTimeFormat("id-ID", {
      timeZone: "Asia/Jakarta",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
      .formatToParts(new Date(iso))
      .map((p) => [p.type, p.value]),
  );
  return `${b.year}-${b.month}-${b.day}`;
}

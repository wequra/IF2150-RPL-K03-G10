import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fajar Tech",
  description: "Pemantauan infrastruktur air dan energi komunitas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

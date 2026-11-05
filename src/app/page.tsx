import { redirect } from "next/navigation";

// Middleware (akun) mengalihkan pengguna login ke dasbornya; tamu ke /login.
export default function Beranda() {
  redirect("/login");
}

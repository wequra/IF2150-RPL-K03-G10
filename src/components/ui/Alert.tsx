import type { ReactNode } from "react";

export default function Alert({
  nada = "info",
  children,
}: {
  nada?: "info" | "peringatan" | "bahaya";
  children: ReactNode;
}) {
  const kelas = nada === "bahaya" ? "note bad" : nada === "peringatan" ? "note warn" : "note";
  return (
    <div className={kelas} role={nada === "bahaya" ? "alert" : "status"}>
      {children}
    </div>
  );
}

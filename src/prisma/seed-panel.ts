import {prisma} from '../lib/prisma';

async function main() {
  console.log("Memulai proses seeding data panel surya besar-besaran...");
  const data = [];

  const sekarang = new Date();
  for (let i = 0; i < 30 * 24 * 12; i++) {
    const waktu = new Date(sekarang.getTime() - i * 5 * 60000);
    data.push({
      idPanel: "PANEL-01",
      waktu: waktu,
      dayaDihasilkan: Math.floor(Math.random() * 50) + 150, 
      energi: Math.floor(Math.random() * 10) + 50,
    });
  }

  await prisma.dataHistorisKinerja.createMany({
    data: data,
  });

  console.log(`Seeding selesai! Berhasil memasukkan ${data.length} baris riwayat panel.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
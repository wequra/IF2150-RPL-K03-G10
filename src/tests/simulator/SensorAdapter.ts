async function kirimDataTelemetri() {
  const API_URL = 'http://localhost:3000/api/telemetri'; 

const payload = {
    idPerangkat: 'BAT-01', 
    nilai: 15, 
    satuan: '%',
    waktu: new Date().toISOString(),
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (response.ok && result.ok) {
      console.log('Berhasil mengirim data simulasi:', payload);
    } else {
      console.error('Gagal mengirim data:', result.pesan);
    }
  } catch (error) {
    console.error('Error koneksi ke server API:', error);
  }
}

kirimDataTelemetri();
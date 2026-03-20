# Script kecil untuk menjalankan web portfolio di server lokal.
# Port bisa diubah jika 4173 sedang dipakai aplikasi lain.

$port = 4173

Write-Host "Menjalankan portfolio di http://127.0.0.1:$port"
python -m http.server $port

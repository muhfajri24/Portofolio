# Script kecil untuk menjalankan web portfolio Laravel di server lokal.
# Port bisa diubah jika 8000 sedang dipakai aplikasi lain.

$port = 8000

Write-Host "Menjalankan portfolio Laravel di http://127.0.0.1:$port"
php artisan serve --host=127.0.0.1 --port=$port

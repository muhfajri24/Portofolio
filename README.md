# Portfolio Muhammad Fajri

Portfolio pribadi berbasis HTML, CSS, dan JavaScript.

## Struktur file

- `index.html`: struktur halaman utama
- `style.css`: tampilan dan layout
- `script.js`: data portfolio dan render konten
- `Profile.jpeg`: foto profil
- `run-portfolio.ps1`: script untuk menjalankan server lokal sederhana

## Menjalankan project

Buka langsung `index.html` di browser, atau jalankan:

```powershell
powershell -ExecutionPolicy Bypass -File .\run-portfolio.ps1
```

Lalu buka `http://127.0.0.1:4173`.

## Git dasar

Inisialisasi repo lokal:

```bash
git init
git branch -M main
git add .
git commit -m "Initial portfolio site"
```

Hubungkan ke GitHub:

```bash
git remote add origin <URL-REPOSITORY-ANDA>
git push -u origin main
```

Update berikutnya:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Ambil update dari remote:

```bash
git pull
```

## Hosting yang cocok

Project ini cocok untuk:

- GitHub Pages
- Netlify
- Vercel

Karena project ini statis, proses hosting-nya akan sangat sederhana.

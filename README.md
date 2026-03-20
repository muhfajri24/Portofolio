# Muhammad Fajri - Portfolio Website

Website portfolio pribadi yang dibangun dengan HTML, CSS, dan JavaScript untuk menampilkan profil, project, skill, dan kontak.

## Tujuan Project

Project ini dibuat sebagai representasi digital dari kemampuan saya di bidang web development, khususnya dalam membangun tampilan yang clean, responsive, dan mudah dikembangkan.

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

## Fitur

- Tampilan responsive untuk desktop dan mobile
- Struktur file sederhana dan mudah dipelajari
- Dynamic rendering menggunakan JavaScript
- Siap di-deploy ke GitHub Pages

## Menjalankan Secara Lokal

Buka langsung `index.html` di browser, atau jalankan:

```powershell
powershell -ExecutionPolicy Bypass -File .\run-portfolio.ps1
```

Lalu buka:

```text
http://127.0.0.1:4173
```

## Deploy ke GitHub Pages

Repository ini sudah disiapkan dengan workflow GitHub Actions di:

```text
.github/workflows/deploy-pages.yml
```

Setelah workflow dipush ke GitHub, aktifkan GitHub Pages di repository:

1. Buka repository GitHub Anda.
2. Masuk ke `Settings` > `Pages`.
3. Pada bagian `Build and deployment`, pilih `Source: GitHub Actions`.
4. Push perubahan ke branch `main`.
5. Tunggu workflow selesai, lalu website akan ter-publish.

## Update Project

Jika ada perubahan:

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Catatan

Project ini akan terus dikembangkan seiring peningkatan skill saya di bidang frontend dan backend development.

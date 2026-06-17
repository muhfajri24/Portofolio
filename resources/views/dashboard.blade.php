<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard User</title>
    <style>
        body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #eff6ff, #dcfce7);
            color: #0f172a;
        }

        .card {
            width: min(620px, calc(100% - 32px));
            background: #ffffff;
            border-radius: 18px;
            padding: 32px;
            box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
        }

        h1 {
            margin: 0 0 8px;
        }

        p {
            color: #475569;
            line-height: 1.6;
        }

        .notice {
            margin: 18px 0;
            padding: 14px 16px;
            border-radius: 12px;
            background: #fff7ed;
            color: #9a3412;
        }

        .info {
            margin: 18px 0;
            padding: 14px 16px;
            border-radius: 12px;
            background: #ecfeff;
            color: #155e75;
        }

        .toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-top: 24px;
        }

        .link, .button {
            display: inline-block;
            text-decoration: none;
            border-radius: 10px;
            padding: 12px 16px;
            font-weight: 700;
        }

        .link {
            background: #0f766e;
            color: #ffffff;
        }

        .button {
            border: 0;
            background: #e2e8f0;
            color: #0f172a;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>Dashboard User</h1>
        <p>Halo, {{ auth()->user()->name }}. Anda sudah berhasil login, tetapi role akun Anda saat ini adalah <strong>{{ auth()->user()->role }}</strong>.</p>

        @if (session('error'))
            <div class="notice">{{ session('error') }}</div>
        @endif

        <div class="info">
            Halaman data mahasiswa hanya bisa diakses oleh user dengan role <strong>admin</strong>. Jika akun ini seharusnya admin, ubah kolom `role` user menjadi `admin` di database atau lewat Tinker.
        </div>

        <div class="toolbar">
            <a class="link" href="{{ route('home') }}">Refresh Halaman</a>

            <form method="POST" action="{{ route('logout') }}">
                @csrf
                <button class="button" type="submit">Logout</button>
            </form>
        </div>
    </div>
</body>
</html>

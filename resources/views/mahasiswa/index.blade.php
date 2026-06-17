<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Mahasiswa</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f4f6f9;
            color: #1f2937;
        }

        .container {
            max-width: 900px;
            margin: 40px auto;
            padding: 24px;
        }

        .card {
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
            overflow: hidden;
        }

        .header {
            padding: 24px;
            background: #0f766e;
            color: #ffffff;
        }

        .header h1 {
            margin: 0 0 8px;
            font-size: 28px;
        }

        .header p {
            margin: 0;
            opacity: 0.9;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th, td {
            padding: 16px 24px;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }

        th {
            background: #f8fafc;
        }

        .badge {
            display: inline-block;
            margin: 16px 24px 0;
            padding: 8px 12px;
            border-radius: 999px;
            background: #ccfbf1;
            color: #115e59;
            font-size: 14px;
            font-weight: 700;
        }

        .toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin: 16px 24px 0;
        }

        .logout-btn {
            border: 0;
            border-radius: 999px;
            background: #0f172a;
            color: #ffffff;
            padding: 10px 14px;
            font-weight: 700;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="header">
                <h1>Data Mahasiswa</h1>
                <p>Halaman ini hanya dapat diakses oleh admin akademik yang sudah login.</p>
            </div>

            <div class="toolbar">
                <div class="badge">
                    Login sebagai: {{ auth()->user()->name }} ({{ auth()->user()->role }})
                </div>

                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button class="logout-btn" type="submit">Logout</button>
                </form>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Program Studi</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($mahasiswa as $item)
                        <tr>
                            <td>{{ $item['nim'] }}</td>
                            <td>{{ $item['nama'] }}</td>
                            <td>{{ $item['prodi'] }}</td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="3">Belum ada data mahasiswa.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>

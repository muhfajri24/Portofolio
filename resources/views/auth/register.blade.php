<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register User</title>
    <style>
        body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #1e293b, #0f766e);
            color: #0f172a;
        }

        .card {
            width: min(460px, calc(100% - 32px));
            background: #fff;
            border-radius: 18px;
            padding: 32px;
            box-shadow: 0 20px 50px rgba(15, 23, 42, 0.25);
        }

        h1 {
            margin: 0 0 8px;
            font-size: 28px;
        }

        p {
            margin: 0 0 24px;
            color: #475569;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 700;
        }

        input {
            width: 100%;
            padding: 12px 14px;
            margin-bottom: 16px;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            box-sizing: border-box;
        }

        button {
            background: #0f766e;
            color: #fff;
            border: 0;
            padding: 12px 18px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 700;
        }

        .link {
            display: inline-block;
            margin-top: 18px;
            color: #0f766e;
            text-decoration: none;
            font-weight: 700;
        }

        .error {
            margin-bottom: 16px;
            padding: 12px 14px;
            border-radius: 10px;
            background: #fee2e2;
            color: #991b1b;
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>Register</h1>
        <p>Akun baru akan dibuat sebagai `user` biasa. Admin bisa diatur setelahnya.</p>

        @if ($errors->any())
            <div class="error">
                {{ $errors->first() }}
            </div>
        @endif

        <form method="POST" action="{{ route('register') }}">
            @csrf

            <label for="name">Nama</label>
            <input id="name" type="text" name="name" value="{{ old('name') }}" required autofocus>

            <label for="email">Email</label>
            <input id="email" type="email" name="email" value="{{ old('email') }}" required>

            <label for="password">Password</label>
            <input id="password" type="password" name="password" required>

            <label for="password_confirmation">Konfirmasi Password</label>
            <input id="password_confirmation" type="password" name="password_confirmation" required>

            <button type="submit">Register</button>
        </form>

        <a class="link" href="{{ route('login') }}">Sudah punya akun? Login</a>
    </div>
</body>
</html>

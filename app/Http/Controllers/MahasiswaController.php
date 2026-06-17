<?php

namespace App\Http\Controllers;

class MahasiswaController extends Controller
{
    public function index()
    {
        $mahasiswa = [
            ['nim' => '2301001', 'nama' => 'Alya Putri', 'prodi' => 'Sistem Informasi'],
            ['nim' => '2301002', 'nama' => 'Bima Saputra', 'prodi' => 'Teknik Informatika'],
            ['nim' => '2301003', 'nama' => 'Citra Lestari', 'prodi' => 'Manajemen Informatika'],
        ];

        return view('mahasiswa.index', compact('mahasiswa'));
    }
}

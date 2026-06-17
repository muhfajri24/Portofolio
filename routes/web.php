<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('portfolio', [
        'portfolioData' => config('portfolio'),
    ]);
})->name('portfolio');

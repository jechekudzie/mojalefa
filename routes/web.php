<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome', [
    'whatsappNumber' => config('services.whatsapp.number'),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';

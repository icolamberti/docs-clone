<?php

use Illuminate\Support\Facades\Route;

require __DIR__ . '/auth.php';

Route::middleware(['auth', 'verified'])->group(function () {
  Route::get('', [DashboardController::class, 'dashboard'])->name('dashboard');
});

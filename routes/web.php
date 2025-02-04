<?php

use App\Http\Controllers\DocumentController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

require __DIR__ . '/auth.php';

Route::middleware(['auth', 'verified'])->group(function () {
  Route::get('', HomeController::class)->name('home');
  Route::get('?{search}', function () {
    return inertia('Index');
  });

  // Route::prefix('documents')
  //   ->name('documents.')
  //   ->group(function () {
  Route::resource('documents', DocumentController::class)->except(['edit']);
  // });
});

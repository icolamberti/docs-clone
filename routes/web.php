<?php

use App\Http\Controllers\DocumentController;
use Illuminate\Support\Facades\Route;

require __DIR__ . '/auth.php';

Route::middleware(['auth', 'verified'])->group(function () {
  // Route::prefix('documents')
  //   ->name('documents.')
  //   ->group(function () {
  Route::resource('documents', DocumentController::class)->except(['edit']);
  // });
});

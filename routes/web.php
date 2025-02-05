<?php

use App\Http\Controllers\DocumentController;
use Illuminate\Support\Facades\Route;

require __DIR__ . '/auth.php';

Route::middleware(['auth', 'verified'])->group(function () {
  // Route::prefix('documents')
  //   ->name('documents.')
  //   ->group(function () {
  Route::get('', [DocumentController::class, 'index'])->name('documents.index');
  Route::get('documents/get', [DocumentController::class, 'get'])->name(
    'documents.get'
  );
  Route::resource('documents', DocumentController::class)->except([
    'index',
    'edit',
  ]);
  // });
});

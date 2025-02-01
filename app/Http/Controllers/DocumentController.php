<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DocumentController extends Controller
{
  public function index()
  {
    return inertia('Documents/Index');
  }

  public function create()
  {
    //
  }

  public function store(Request $request)
  {
    //
  }

  public function show(string $id)
  {
    // $document = Document::findOrFail($id);

    return inertia('Documents/Edit', [
      // 'document' => $document,
    ]);
  }

  public function update(Request $request, string $id)
  {
    //
  }

  public function destroy(string $id)
  {
    //
  }
}

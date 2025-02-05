<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DocumentController extends Controller
{
  public function index()
  {
    $search = request('search');
    $documents = Auth::user()
      ->documents()
      ->when($search, function ($query, $search) {
        return $query->whereFullText('title', $search);
      })
      ->get();

    return inertia('Documents/Index', [
      'documents' => $documents,
    ]);
  }

  public function create()
  {
    //
  }

  public function store(Request $request)
  {
    $user = Auth::user();

    $user->documents()->create([
      'title' => $request->title ?? 'Untitled document',
      'initialContent' => $request->initialContent,
    ]);
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

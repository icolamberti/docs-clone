<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DocumentController extends Controller
{
  public function get(Request $request)
  {
    $search = $request->search;

    $documents = Auth::user()
      ->documents()
      ->when($search, function ($query, $search) {
        return $query->whereFullText('title', $search);
      })
      ->paginate(10);

    return $documents;
  }

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
    $user = Auth::user();

    $document = $user->documents()->create([
      'title' => $request->title ?? 'Untitled document',
      'initialContent' => $request->initialContent,
    ]);

    return to_route('documents.show', $document->id);
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
    $request->validate([
      'title' => 'required|string|max:255',
    ]);

    $user = Auth::user();

    $document = $user->documents()->findOrFail($id);

    $document->update([
      'title' => $request->title,
    ]);
  }

  public function destroy(string $id)
  {
    $user = Auth::user();

    $document = $user->documents()->findOrFail($id);

    $document->delete();
  }
}

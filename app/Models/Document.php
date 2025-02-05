<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
  use HasUuids;

  protected $fillable = [
    'title',
    'initialContent',
    'user_id',
    'room_id',
    'organization_id',
  ];
}

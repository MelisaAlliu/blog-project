<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Resources\PostResource;

class DashboardController extends Controller
{
    public function index()
    {
        return PostResource::collection(
            Post::where('user_id', auth()->user()->id)->latest()->get()
        );
    }

}

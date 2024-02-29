<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;
use Laravel\Fortify\Http\Controllers\RegisteredUserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RelatedPostController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ContactController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Private routes

Route::middleware('auth:sanctum')->group(function (){

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy']);
    Route::post('categories/create', [CategoryController::class, 'store']);
    Route::get('categories/{category}', [CategoryController::class, 'show']);
    Route::put('categories/{category}', [CategoryController::class, 'update']);
    Route::delete('categories/{category}', [CategoryController::class, 'destroy']);
    Route::post('posts', [PostController::class, 'store']);
    Route::put('posts/{post:slug}', [PostController::class, 'update']);
    Route::delete('posts/{post:slug}', [PostController::class, 'destroy']);
    Route::get('contact-info', [ContactController::class, 'index']);
});


//Public routes
Route::post('register', [RegisteredUserController::class, 'store']);
Route::post('login', [AuthenticatedSessionController::class, 'store']);
Route::get('categories', [CategoryController::class, 'index']);
Route::get('home-posts', [HomeController::class, 'index']);
Route::get('posts/{post:slug}', [PostController::class, 'show']);
Route::get('posts', [PostController::class, 'index']);
Route::get('related-posts/{post:slug}', [RelatedPostController::class, 'index']);
Route::get('dashboard-posts', [DashboardController::class, 'index']);
Route::post('contact', [ContactController::class, 'store']);


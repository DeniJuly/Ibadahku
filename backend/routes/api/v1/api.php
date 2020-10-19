<?php

use App\Http\Controllers\Api\v1\User\AuthController;
use App\Http\Controllers\Api\v1\User\UserController;
use App\Http\Controllers\Api\v1\DoaController;
use App\Http\Controllers\Api\v1\IbadahController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'user', 'middleware'=> 'auth:api'], function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('detail', [UserController::class, 'getDetailUser']);
    Route::get('ibadahku/{tanggal}', [IbadahController::class, 'getIbadahDikerjakan']);
    Route::post('ibadahku', [IbadahController::class, 'ibadahDikerjakan']);
    Route::post('quran', [UserController::class, 'quranLastRead']);
    Route::post('profile/edit', [UserController::class, 'editProfile']);
});
Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
});
Route::group(['prefix' => 'doa'], function () {
    Route::get('list', [DoaController::class, 'getAll']);
    Route::get('list/{limit}', [DoaController::class, 'getDoaLimit']);
    Route::get('detail/{id}', [DoaController::class, 'getDetailDoa']);
});
Route::group(['prefix' => 'ibadah'], function () {
    Route::get('list', [IbadahController::class, 'getAll']);
});
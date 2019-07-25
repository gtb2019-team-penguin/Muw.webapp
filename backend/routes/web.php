<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('test');
});

// Route::get('/', 'Controller@registerUserInfo');

// Route::get('/', 'Controller@updateUserInfo');

// Route::get('/', 'Controller@deleteUserInfo');

Route::get('/', 'Controller@readUserInfo');




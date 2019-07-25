<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Models\DBManager;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
    //ユーザー情報登録
    public function registerUserInfo()
    {
        dump(DBManager::insertUserInfo());
        return;
    }
    //ユーザー情報更新
    public function updateUserInfo()
    {
        dump(DBManager::updateUserInfo());
        return;
    }
    //ユーザー情報削除
    public function deleteUserInfo()
    {
        dump(DBManager::deleteUserInfo());
        return;
    }

    //ユーザー情報読込
    public function readUserInfo()
    {
        dump(DBManager::getUserInfo());
        return;
        
    }
}

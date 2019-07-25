<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB; 

class DBManager extends Model{
    //ユーザー情報登録
    public static function insertUserInfo()
    {   
        // テーブルを指定
        $users = DB::table('test');
        $data = $users->insert(
        [
            'id' => '3',
            'name' => 'osanai',
            'email' => 'test1aa1@tes',
        ]
         );
        return $data;
    }

    //ユーザー情報更新
    public static function updateUserInfo()
    {
        $users = DB::table('test');
        $data = $users
        ->where('id', 1)
        ->update([
        'name' => '更新です！！',
    ]);
    return $data;
    }

    //ユーザー情報削除
    public static function deleteUserInfo()
    {
        $users = DB::table('test');
        $users->where('id', 1)->delete();
    }

    //ユーザー情報読込
    public static function getUserInfo()
    {
        $users = DB::table('test');
        $data = $users->select('id','name','email')->get();
        return $data;
    }
}

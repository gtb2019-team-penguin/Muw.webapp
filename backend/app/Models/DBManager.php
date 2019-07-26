<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB; 

class DBManager extends Model{
    //ユーザー情報登録
    public static function insertUserInfo()
    {   
        // テーブルを指定
        $users = DB::table('groups');
        $data = $users->insert(
        [
            'group_name' => '水瀬',
        ]);
        $user = DB::table('members');
        $data = $user->insert(
        [
            'member_name' => 'いり',
            'member_age' => '20',
        ]);
        

        return $data;
    }

    //ユーザー情報更新
    public static function updateUserInfo()
    {
        $users = DB::table('group');
        $data = $users
        ->where('gruop_id', 1)
        ->update([
        'group_name' => '更新太郎',
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
        $users = DB::table('groups');
        $data = $users->select('group_id','member_id')->get();
        return $data;
    }
}

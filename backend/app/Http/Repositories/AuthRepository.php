<?php
namespace App\Http\Repositories;

use Illuminate\Support\Facades\DB;

class AuthRepository
{
    public function deleteAccessToken($users_id)
    {
        $del = DB::table('oauth_access_tokens')
                ->where('user_id', $users_id)
                ->delete();
        return $del;
    }    
}

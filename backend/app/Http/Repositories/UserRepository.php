<?php

namespace App\Http\Repositories;

use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\DB;

class UserRepository
{
    public function getUserDetail($id)
    {
        $select = [
            'user.nama',
            'user.username',
            'user.id_tinggal',
            'user.id_quran',
            'user.foto_profile'
        ];
        $res = DB::table('user')
                ->select($select)
                ->where('id', $id)
                ->first();
        $res = (collect($res)->count()) ? new UserResource($res) : false;
        return $res;
    }

    public function quranLastRead($id, $params)
    {
        $upd = DB::table('user')
                ->where('id', $id)
                ->update([
                    'id_quran'  => $params->id_quran
                ]);
        return $upd;
    }

    public function cekFotoProfile($id, $params)
    {
        $user = DB::table('user')
                ->where('id', $id)
                ->where('foto_profile', $params->foto_profile)
                ->first();
        return $user;
    }

    public function editProfile($id, $params)
    {
        $upd = DB::table('user')
                ->where('id', $id)
                ->update($params);
        return $upd;
    }
}

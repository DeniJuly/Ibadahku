<?php
namespace App\Http\Repositories;

use App\Http\Resources\DoaResource;
use Illuminate\Support\Facades\DB;

class IbadahRepository
{

    public function getAll()
    {
        $select = [
            'ibadah.id',
            'ibadah.nama',
        ];

        $get = DB::table('ibadah')
                ->select($select)
                ->get();

        return $get;
    }

    public function getIbadahDikerjakan($id, $tanggal)
    {
        $ibadah = DB::table('ibadahku')
                        ->where('id_user', '=', $id)
                        ->where('tanggal', '=', $tanggal)
                        ->orderBy('id_ibadah', 'ASC')
                        ->get();
        return $ibadah;
    }

    public function ibadahDikerjakan($id_user, $request)
    {
        $res = false;
        if(!$request['status']){
            $res = $this->_delIbadahku($id_user, $request);
        } else {
            $res = $this->_createIbadahku($id_user, $request);
        }

        return $res;
    }

    public function _delIbadahku($id_user, $request)
    {
        $delete = DB::table('ibadahku')
                    ->where('id_user', '=', $id_user)
                    ->where('id_ibadah', '=', $request['id_ibadah'])
                    ->where('tanggal', '=', $request['tanggal'])
                    ->delete();
        return $delete;
    }

    public function _createIbadahku($id_user, $request)
    {
        $cek = DB::table('ibadahku')
                ->where('id_user', '=', $id_user)
                ->where('id_ibadah', '=', $request['id_ibadah'])
                ->where('tanggal', '=', $request['tanggal'])
                ->exists();
        if($cek){
            return false;
        }
        $create = DB::table('ibadahku')
            ->insert([
                'id_ibadah' => $request['id_ibadah'],
                'id_user' => $id_user,
                'waktu' => $request['waktu'],
                'tanggal' => $request['tanggal'],
            ]);
        return $create;
    }
}
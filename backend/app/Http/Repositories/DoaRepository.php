<?php
namespace App\Http\Repositories;

use App\Http\Resources\DoaResource;
use Illuminate\Support\Facades\DB;

class DoaRepository
{
    public $select = [
        'doa.id',
        'doa.judul',
    ];

    public function getAll()
    {
        $get = DB::table('doa')
                ->select($this->select)
                ->get();

        return $get;
    }  
    
    public function getDoaLimit($limit)
    {
        $get = DB::table('doa')
                ->select($this->select)
                ->limit($limit)
                ->orderBy('created_at', 'DESC')
                ->get();

        return $get;
    }

    public function getDetailDoa($id)
    {
        $get = DB::table('doa')
                ->select([
                    'doa.id',
                    'doa.judul',
                    'doa.arab',
                    'doa.latin',
                    'doa.indonesia',
                    'doa.ilustrasi',
                ])
                ->first();
        $res = (collect($get)->count()) ? new DoaResource($get) : false;
        return $res;
    }
}

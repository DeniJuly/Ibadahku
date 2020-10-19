<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Api\ApiController;
use App\Http\Repositories\IbadahRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class IbadahController extends ApiController
{
    public $ibadahRepo;

    public function __construct(IbadahRepository $ibadahRepo) {
        $this->ibadahRepo = $ibadahRepo;
    }

    public function getAll()
    {
        $res = $this->ibadahRepo->getAll();
        if(count($res) > 0)    {
            return $this->sendResponse(0, 'success', $res);
        } else if(count($res) == 0){
            return $this->sendResponse(0, 'Data Kosong');
        } else {
            return $this->sendError(2, 'Error');
        }
    }

    public function getIbadahDikerjakan($tanggal)
    {
        $id = Auth::user()->id;
        $res = $this->ibadahRepo->getIbadahDikerjakan($id, $tanggal);
        if(count($res) > 0)    {
            return $this->sendResponse(0, 'success', $res);
        } else if(count($res) == 0){
            return $this->sendResponse(0, 'Data Kosong');
        } else {
            return $this->sendError(2, 'Error');
        }
    }

    public function ibadahDikerjakan(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'id_ibadah' => 'required|numeric',
            'status'    => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError(2, 'Error', $validator->errors());
        }

        $id = Auth::user()->id;
        $params =  [
            'id_ibadah' => $request->id_ibadah,
            'status'    => $request->status,
            'waktu' => Carbon::now()->format('H:i:s'),
            'tanggal'  => Carbon::now()->format('Y-m-d')
        ];
        $res = $this->ibadahRepo->ibadahDikerjakan($id, $params);
        if($res) {
            return $this->sendResponse(0, 'success', []);
        }else {
            return $this->sendError(2, 'Error');
        }
    }
}

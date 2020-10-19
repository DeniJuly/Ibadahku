<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Api\ApiController;
use App\Http\Repositories\DoaRepository;
use Illuminate\Http\Request;

class DoaController extends ApiController
{
    public $doaRepo;

    public function __construct(DoaRepository $doaRepo) {
        $this->doaRepo = $doaRepo;
    }

    public function getAll()
    {
        $doa = $this->doaRepo->getAll();
        if(count($doa) > 0)    {
            return $this->sendResponse(0, 'success', $doa);
        } else if(count($doa) == 0){
            return $this->sendResponse(0, 'Data Kosong');
        } else {
            return $this->sendError(2, 'Error');
        }
    }

    public function getDoaLimit($limit = 5)
    {
        $doa = $this->doaRepo->getDoaLimit($limit);
        if(count($doa) > 0)    {
            return $this->sendResponse(0, 'success', $doa);
        } else if(count($doa) == 0){
            return $this->sendResponse(0, 'Data Kosong');
        } else {
            return $this->sendError(2, 'Error');
        }
    }

    public function getDetailDoa($id)
    {
        $doa = $this->doaRepo->getDetailDoa($id);
        if(!empty($doa))    {
            return $this->sendResponse(0, 'success', $doa);
        } else if(empty($doa)){
            return $this->sendResponse(0, 'Data Kosong');
        } else {
            return $this->sendError(2, 'Error');
        }
    }
}

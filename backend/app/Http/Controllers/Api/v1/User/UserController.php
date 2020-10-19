<?php

namespace App\Http\Controllers\Api\v1\User;

use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Controller;
use App\Http\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use UserHelper;

class UserController extends ApiController
{
    protected $userRepo;
    function __construct(UserRepository $userRepo) {
        $this->userRepo = $userRepo;
    }

    public function getDetailUser()
    {
        $id = Auth::user()->id;
        $res = $this->userRepo->getUserDetail($id);
        if($res){
            return $this->sendResponse(0, 'Berhasil', $res);
        } else {
            return $this->sendError(2, 'Data Tidak Ditemukan');
        }
    }

    public function quranLastRead(Request $request)
    {
        $id = Auth::user()->id;
        $res = $this->userRepo->quranLastRead($id, $request);
        if($res){
            return $this->sendResponse(0, 'Berhasil', []);
        } else {
            return $this->sendError(2, 'Error');
        }
    }

    public function editProfile(Request $request)
    {
        $id = Auth::user()->id;
        $validator = Validator::make($request->all(),
        [
            'username'  => 'required|unique:user,username,'.$id.'|string',
            'nama'  => 'required|string',
            'id_tinggal'    => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError(2, 'Error', $validator->errors());
        }

        $cek = $this->userRepo->cekFotoProfile($id, $request);
        if(!$cek){
            $profile = $this->uploadFotoWithFileName($request->foto_profile, 'FOTPROF');
        } else {
            $profile = $cek->foto_profile;
        }

        $params = [
            'foto_profile'  => $profile,
            'nama'  => $request->nama,
            'id_tinggal'    => $request->id_tinggal,
            'username'  => $request->username
        ];
        
        $upd = $this->userRepo->editProfile($id, $params);
        if($upd){
            return $this->sendResponse(0, 'Success');
        } else {
            return $this->sendError(2, 'Error');
        }


    }

    function generateFiledCode($code)
    {
        $result = $code.'-'.date('s').date('y').date('i').date('m').date('h').date('d').mt_rand(1000000, 9999999);

        return $result;
    }

    function uploadFotoWithFileName($base64Data, $file_prefix_name)
    {
        $file_name = $this->generateFiledCode($file_prefix_name).'.png';

        $insert_image = Storage::disk('public')->put($file_name, $this->normalizeAndDecodeBase64Photo($base64Data));
        if ($insert_image) {
            return $file_name;
        }

        return false;
    }

    function normalizeAndDecodeBase64Photo($base64Data)
    {
        $replaceList = array(
            'data:image/jpeg;base64,',
            'data:image/jpg;base64,',
            'data:image/png;base64,',
            '[protected]',
            '[removed]',
        );
        $base64Data = str_replace($replaceList, '', $base64Data);

        return base64_decode($base64Data);
    }
}

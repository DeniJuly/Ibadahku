<?php

namespace App\Http\Controllers\Api\v1\User;

use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Controller;
use App\Http\Repositories\AuthRepository;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends ApiController
{
    protected $authRepo;

    function __construct(AuthRepository $authRepo) {
        $this->authRepo = $authRepo;
    }

    public function login( Request $request )
    {
        $validator = Validator::make($request->all(),
        [
            'username'  => 'required',
            'password'  => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError(1, false, $validator->errors());
        }

        $credential = [
            'username'  => $request->username,
            'password'  => $request->password
        ];

        if(!Auth::attempt($credential)){
            return $this->sendError(1, false, 'Username atau Password Salah');
        }

        $user = Auth::user();
        $accessToken = $user->createToken($user->username)->accessToken;

        $response = [
            'user'  => [
                'id'    => $user->id,
                'username'  => $user->username,
                'nama'  => $user->nama,
                'id_tinggal'    => $user->id_tinggal,
                'id_quran'  => $user->id_quran,
                'foto_profile'  => $user->foto_profile
            ],
            'token' => $accessToken
        ];
        return $this->sendResponse(0, true, $response);
    }

    public function register( Request $request )
    {
        $validator = Validator::make($request->all(),
        [
            'username'  => 'required|string|unique:user,username',
            'nama'  => 'required|string',
            'password'  => 'required|string',
            'id_tinggal'    => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError(1, false, $validator->errors());
        }

        $user = new User();
        $user->username  = $request->username;
        $user->nama  = $request->nama;
        $user->password  = bcrypt($request->password);
        $user->id_tinggal  = $request->id_tinggal;
        
        if(!$user->save()){
            return $this->sendError(1, 'Gagal mendaftarkan akun', []);
        }

        $credential = [
            'username'  => $request->username,
            'password'  => $request->password
        ];
        Auth::attempt($credential);

        $accessToken = Auth::user()->createToken(Auth::guard()->user()->username)->accessToken;

        $response = [
            'user'  => $user,
            'token' => $accessToken
        ];

        return $this->sendResponse(0, true, $response);
    }

    public function logout()
    {
        $id = Auth::user()->id;
        $del = $this->authRepo->deleteAccessToken($id);
        if($del){
            Auth::user()->token()->revoke();
            return $this->sendResponse(0, 'Logout Success');
        } else {
            return $this->sendError(2, 'Error');
        }
    }
}

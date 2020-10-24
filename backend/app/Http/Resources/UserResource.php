<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'nama' => $this->nama,
            'username' => $this->username,
            'id_tinggal' => $this->id_tinggal,
            'id_quran' => $this->id_quran,
            'foto_profile' => ($this->foto_profile == null ? asset('storage/default.png') : asset('storage/' . $this->foto_profile))
        ];
    }
}

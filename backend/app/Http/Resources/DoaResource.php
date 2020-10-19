<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class DoaResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'judul' => $this->judul,
            'arab' => $this->arab,
            'latin' => $this->latin,
            'indonesia' => $this->indonesia,
            'ilustrasi' => ($this->ilustrasi == null ? asset('storage/default.png') : asset('storage/' . $this->ilustrasi))
        ];
    }
}

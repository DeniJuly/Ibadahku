<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function sendResponse($code, $status, $data = array())
    {
        return response()->json([
            'code'  => $code,
            'success'    => $status,
            'message'   => $status,
            'data'  => $this->normalize_result($data)
        ], 200);
    }

    public function sendError($code, $status, $error = array())
    {
        return response()->json([
            'code'  => $code,
            'success'   => false,
            'message'   => $status,
            'data'  => $error
        ], 400);
    }

    public function normalize_result($result)
    {

        $result = json_decode(json_encode($result), true);

        array_walk_recursive($result, function (&$value) {
            $value = !is_null($value) ? $value : "";
        });

        return $result;
    }
}

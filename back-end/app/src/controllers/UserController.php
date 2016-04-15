<?php

namespace App\Controllers;

use App\Services\UserService;
use Slim\Http\Request;

class UserController {

    private $userService;

    /**
     * UserController constructor.
     */
    public function __construct() {
        $this->userService = new UserService();
    }

    /**
     * Intermediario entre el Front-End y el servicio.
     *
     * @param Request $request
     *
     * @return []
     */
    public function listado($request) {
        $result = [];

        $listResult = $this->userService->listado();

        if (array_key_exists("error", $listResult)) {
            $result["error"] = true;
            $result["message"] = $listResult["message"];
        } else {
            $result["data"] = $listResult["data"];
        }

        return $result;
    }

}

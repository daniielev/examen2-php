<?php

namespace App\Controllers;

use App\Services\GamesService;
use Slim\Http\Request;

class MainController {

    private $gamesService;

    /**
     * MainController constructor.
     */
    public function __construct() {
        $this->gamesService = new GamesService();
    }

    /**
     * Function descrption here
     *
     * @param Request $request
     *
     * @return []
     */
    public function list($request) {
        $result = [];

        $listResult = $this->gamesService->list();

        if (array_key_exists("error", $listResult)) {
            $result["error"] = true;
            $result["message"] = $listResult["message"];
        } else {
            $result["data"] = $listResult["data"];
        }

        return $result;
    }
}
<?php

namespace App\Controllers;

use App\Services\UserService;
use Slim\Http\Request;

class MainController {

    private $userService;

    /**
     * MainController constructor.
     */
    public function __construct() {
        $this->userService = new UserService();
    }

    /**
     * Function descrption here
     *
     * @param Request $request
     *
     * @return []
     */
    public function login($request) {
        $result = [];

        $formData = $request->getParsedBody();
        $email = null;
        $password = null;

        if (array_key_exists("email", $formData)) {
            $email = $formData["email"];
        }

        if (array_key_exists("password", $formData)) {
            $password = $formData["password"];
        }

        if (isset($email, $password)) {
            $loginResult = $this->userService->login($email, $password);

            if (array_key_exists("error", $loginResult)) {
                $result["error"] = true;
            } else {
                // setcookie($this->nombreCookie, true, time()+3600);
            }

            $result["message"] = $loginResult["message"];
        } else {
            $result["error"] = true;
            $result["message"] = "Email and password can not be empty.";
        }
        return $result;
    }
}
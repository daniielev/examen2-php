<?php

/**
 * UserService.php
 */

namespace App\Services;

class UserService {

    private $storage;
    private $isDBReady = true;

    /**
     * UserService constructor.
     */
    public function __construct() {
        // Verificación de la base de datos
        if ($this->isDBReady) {
            $this->storage = new StorageService();
        }
    }

    /**
     * Encargado de iniciar la sesión del usuario.
     *
     * @param string $email
     * @param string $password
     *
     * @return array
     */
    public function listado() {
        $result = [];

        $query = "SELECT id, title, console, launch_date FROM app_games";
        $query_result = $this->storage->query($query);

        if (count($query_result['data']) > 0) {
            $game = $query_result['data'][0];

            $result["data"] = [
                "id" => $game["id"],
                "title" => $game["title"],
                "console" => $game["console"],
                "launch_date" => $game["launch_date"]
            ];

        } else {
            $result["error"] = true;
            $result["message"] = "The list is empty.";
        }

        return $result;
    }



}

<?php

namespace App\Services;

class GamesService {

    private $storage;
    private $isDBReady = true;

    /**
     * UserService constructor.
     */
    public function __construct() {
        if ($this->isDBReady) {
            $this->storage = new StorageService();
        }
    }

    /**
     * Descr goes here.
     *
     * @param string $email
     * @param string $password
     *
     * @return array
     */
    public function list() {
        $result = [];

        $query = "SELECT id, title, console, launch_date FROM app_games";
        $query_result = $this->storage->query($query);

        if (count($query_result['data']) > 0) {
            $games = $query_result['data'][0];
            $result["data"] = $games;
        } else {
            $result["message"] = "The list is empty.";
            $result["error"] = true;
        }

        return $result;
    }
}
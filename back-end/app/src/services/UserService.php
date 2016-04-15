<?php

/**
 * UserService.php
 */

namespace App\Services;

class UserService {

    private $storage;
    private $isDBReady = true;
    private $validation;

    /**
     * UserService constructor.
     */
    public function __construct() {
        // Verificación de la base de datos
        if ($this->isDBReady) {
            $this->storage = new StorageService();
        }
        $this->validation = new ValidacionesService();
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

    public function create($game = []) {
        $result = [];

        $required_fields = ["title, developer, description, console, launch_date, rate, cover_url"];
        $errors = [];

        foreach ($game as $key => $value) {
            if (array_key_exists($key, $required_fields)) {
                if (empty($value)) {
                    array_push($errors, "The field ".$key." is required");
                }
            }
        }

        if (count($errors) > 0) {
            $result["error"] = true;
            $result["message"] = $errors;
        } else {

            $string_fields = ['title, developer, description, console, cover_url'];

            $string_errors = [];

            foreach ($game as $key => $value) {
                if (array_key_exists($key, $required_fields)) {
                    array_push($string_errors, "The ".$key." must be a string value");
                }
            }

            if (count($string_errors) > 0) {
                $result["error"] = true;
                $result["message"] = $string_errors;
            } else {
                if ($this->validation->isValidInt($game["rate"])) {
                    if (intval($game["rate"]) < 1 OR intval($game["rate"]) > 5) {
                        $result["error"] = true;
                        $result["message"] = "The rate number must be between 1 and 5.";
                    } else {
                        $date = explode("-", $game["launch_date"]); // "YYY-MM-DD"

                        if (!checkdate($date[1], $date[2], $date[0])) {
                            $result["error"] = true;
                            $result["message"] = "Please provide a valid lauch date. Eg.: YYY-MM-DD";
                        } else {
                            // if (filter_var(variable)) {
                            //     # code...
                            // }
                            $result["data"] = "Game saved.";
                        }
                    }
                } else {
                    $result["error"] = true;
                    $result["message"] = "The rate must be a valid number";
                }
            }

            // $query = "INSERT INTO app_games (title, developer, description, console, launch_date, rate, cover_url) VALUES(:title, :developer, :description, :console, :launch_date, :rate, :cover_url)";
            // $params = [
            //     ":title" => $game["title"],
            //     ":developer" => $game["developer"],
            //     ":description" => $game["description"],
            //     ":console" => $game["console"],
            //     ":launch_date" => $game["launch_date"],
            //     ":rate" => $game["rate"],
            //     ":cover_url" => $game["cover_url"],
            // ];

            // $query_result = $this->storage->query($query, $params);
        }

        return $result;
    }

    public function details($id) {
        $result = [];

        $query = "SELECT id, title, developer, description, console, launch_date, rate, cover_url FROM app_games WHERE id = :id LIMIT 1";
        $param = [":id" => intval($id)];

        $query_result = $this->storage->query($query, $param);

        if (count($query_result['data']) > 0) {
            $game = $query_result['data'][0];

            $result["data"] = [
                "id" => $game["id"],
                "title" => $game["title"],
                "developer" => $game["developer"],
                "description" => $game["description"],
                "console" => $game["console"],
                "launch_date" => $game["launch_date"],
                "rate" => $game["rate"],
                "cover_url" => $game["cover_url"]
            ];

        } else {
            $result["error"] = true;
            $result["message"] = "The game requested does not exist.";
        }

        return $result;
    }



}

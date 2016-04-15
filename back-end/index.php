<?php

/**
 * index.php
 * Inicia la aplicación y sirve como enrutador para el back-end.
 */

require "bootstrap.php";

use Slim\Http\Request;
use Slim\Http\Response;

// Muestra todos los errores
$configuration = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];

$contenedor = new \Slim\Container($configuration);

// Crea una nueva instancia de SLIM mostrando todos los errores
// http://www.slimframework.com/docs/handlers/error.html
$app = new \Slim\App($contenedor);


$app->get(
    '/games/listado',
    function ($request, $response) {
        /** @var Request $request */
        /** @var Response $response */
        $userController = new App\Controllers\UserController();
        $result = $userController->listado($request);
        return $response->withJson($result);
    }
);

$app->get(
    '/game/details/{id}',
    function ($request, $response) {
        /** @var Request $request */
        /** @var Response $response */
        $userController = new App\Controllers\UserController();
        $result = $userController->details($request);
        return $response->withJson($result);
    }
);

$app->post(
    '/game/create',
    function ($request, $response) {
        /** @var Request $request */
        /** @var Response $response */
        $userController = new App\Controllers\UserController();
        $result = $userController->create($request);
        return $response->withJson($result);
    }
);

// Corremos la aplicación.
$app->run();

<?php

require "bootstrap.php";

use Slim\Http\Request;
use Slim\Http\Response;

// Muestra todos los errores
$configuration = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];

$container = new \Slim\Container($configuration);
$app = new \Slim\App($container);

$app->get(
    '/games/listado',
    function ($request, $response) {
        /** @var Request $request */
        /** @var Response $response */
        $mainController = new App\Controllers\MainController();
        $result = $mainController->list($request);
        // return $response->withJson($result);
        return $response->write("asdf");
    }
);

$app->run();
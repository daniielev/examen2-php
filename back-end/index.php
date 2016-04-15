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

// Definimos nuestras rutas
$app->post(
    '/user/login',
    function ($request, $response) {
        // http://stackoverflow.com/questions/12158987/whats-the-meaning-of-var-in-php-comments
        /** @var Request $request */
        /** @var Response $response */

        // Pedimos una instancia del controlador del usuario
        $mainController = new App\Controllers\MainController();

        // Almacenamos el resultado de la operación en la siguiente variable
        $result = $mainController->login($request);

        // Retornamos un JSON con el resultado al Front-End
        return $response->withJson($result);
    }
);

$app->get(
    '/user/logout',
    function ($request, $response) {
        /** @var Request $request */
        /** @var Response $response */
        $mainController = new App\Controllers\MainController();
        $result = $mainController->logout($request);
        return $response->withJson($result);
    }
);

$app->post(
    '/user/register',
    function ($request, $response) {
        /** @var Request $request */
        /** @var Response $response */
        $mainController = new App\Controllers\MainController();
        $result = $mainController->register($request);
        return $response->withJson($result);
    }
);

$app->run();
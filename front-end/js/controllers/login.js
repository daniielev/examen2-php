angular.module('practicaPHP01.controllers')
    /**
     * Inicia la sesión del usuario en el sistema.
     */
    .controller('LoginController', ['$scope', 'UserService', '$location',
        function ($scope, UserService, $location) {
            $scope.init = function() {
                console.debug('Login');

                /**
                 * TODO: Implementar
                 * Pasos
                 * - Verifique si el usuario tiene una sesión activa. -- DONE
                 * - Maneje los siguientes escenarios:
                 *  - El usuario tiene una sesión activa, envie el usuario a la ruta de `home`. -- DONE
                 *  - No tiene una sesión activa, permita que la pagina de inicio de sesión funcione normalmente. -- DONE
                 * - En el segundo caso, permítale al usuario iniciar una sesión en el sistema.
                 * - Agregue las validaciones necesarias: contenido vacio, correo en formato de correo.
                 * - Provea mensajes de error descriptivos.
                 */

                // Checks if the user has an active session
                var isLoggedIn = UserService.isLoggedIn();

                // If there's a logged in user then redirect to home
                if (isLoggedIn.success) {
                    $location.path("/home");
                }

                $scope.loginUser = function () {
                    var user = {}
                    $scope.errors = [];

                    // Checks if the the values exists
                    if ($scope.email !== "") {
                        user.email = $scope.email;
                    } else {
                        $scope.errors.push("E-mail is required");
                    }

                    if ($scope.password !== "") {
                        user.password = $scope.email;
                    } else {
                        $scope.errors.push("Password is required");
                    }

                    if (user.email.indexOf("@") && user.email.indexOf(".")) {
                        $scope.errors.push("E-mail is not valid");
                    }

                    console.log(user);

                    // if ($scope.loginForm.$valid) {
                    //     UserService.register(user);
                    // }
                };
            };

            $scope.init();
        }]);

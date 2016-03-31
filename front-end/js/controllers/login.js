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
                    var user = {},
                        flag = false;
                    $scope.errors = [];

                    // Checks if the the values exists
                    if ($scope.email !== undefined && $scope.password !== undefined) {
                        user.email = $scope.email;
                        user.password = $scope.password;
                        flag = true;
                    } else {
                        $scope.errors.push("E-mail and password are required.");
                        flag = false;
                    }

                    // If values exists then
                    if (flag) {
                        var second_flag = false;

                        // Basic validation for email
                        if (user.email.indexOf("@") === -1 || user.email.indexOf(".") === -1) {
                            $scope.errors.push("E-mail is not valid.");
                            second_flag = false;
                        } else {
                            second_flag = true;
                        }

                        // Basic validation for password
                        if (user.password.length < 8) {
                            $scope.errors.push("Password must be at least 8 characters long.");
                            second_flag = false;
                        } else {
                            second_flag = true;
                        }
                    }

                    if ($scope.loginForm.$valid) {
                        UserService.register(user);
                    }
                };
            };

            $scope.init();
        }]);

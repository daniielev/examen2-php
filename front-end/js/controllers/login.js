angular.module('practicaPHP01.controllers')
    /**
     * Inicia la sesión del usuario en el sistema.
     */
    .controller('LoginController', ['$scope', 'UserService', '$location', '$q', '$timeout',
        function ($scope, UserService, $location, $q, $timeout) {
            $scope.init = function() {
                console.debug('Login');

                /**
                 * TODO: Implementar
                 * Pasos
                 * - Verifique si el usuario tiene una sesión activa. -- DONE
                 * - Maneje los siguientes escenarios:
                 *  - El usuario tiene una sesión activa, envie el usuario a la ruta de `home`. -- DONE
                 *  - No tiene una sesión activa, permita que la pagina de inicio de sesión funcione normalmente. -- DONE
                 * - En el segundo caso, permítale al usuario iniciar una sesión en el sistema. -- DONE
                 * - Agregue las validaciones necesarias: contenido vacio, correo en formato de correo. -- DONE
                 * - Provea mensajes de error descriptivos. -- DONE
                 */

                // Checks if the user has an active session
                checkLogin();

                $scope.loginUser = function () {
                    var user = {},
                        flag = false;
                    $scope.error = "";

                    // Checks if the the values exists
                    if ($scope.email !== undefined && $scope.password !== undefined) {
                        user.email = $scope.email;
                        user.password = $scope.password;
                        flag = true;
                    } else {
                        $scope.error = "E-mail and password are required.";
                        flag = false;
                    }

                    // If values exists then
                    if (flag) {
                        var second_flag = false;

                        // Basic validation for email
                        if (user.email.indexOf("@") === -1 || user.email.indexOf(".") === -1) {
                            $scope.error = "E-mail is not valid.";
                            second_flag = false;
                        } else {
                            second_flag = true;
                        }

                        // Basic validation for password
                        if (user.password.length < 8) {
                            $scope.error = "Password must be at least 8 characters long.";
                            second_flag = false;
                        } else {
                            second_flag = true;
                        }

                        if (second_flag) {
                            var callService = $q(function (resolve, reject) {
                                var res = UserService.login(user);

                                $timeout(
                                    function() {
                                        resolve(res)
                                    }, Math.random() * 2000 + 1000);
                            });

                            callService.then(function (response) {
                                console.log(response);
                                if (response.success) {
                                    checkLogin();
                                } else {
                                    $scope.error = response.message;
                                }
                            });
                        }
                    }
                };
            };

            function checkLogin () {
                var isLoggedIn = UserService.isLoggedIn();

                // If there's a logged in user then redirect to home
                if (isLoggedIn.success) {
                    $location.path("/home");
                };
            }

            $scope.init();
        }]);

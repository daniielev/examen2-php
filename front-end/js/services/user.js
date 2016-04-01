angular.module('practicaPHP01.services')
    /**
     * Encargado de todas las operaciones relacionadas con los usuarios.
     */
    .service('UserService', ['$http', 'ClientStorage', '$timeout', function ($http, ClientStorage, $timeout) {
        /**
         *
         * @param email
         * @param password
         */
        var login = function(user) {
            var result = {
                success: false,
                message: null
            };

            /**
             * TODO: Implementar
             * Pasos
             * - Asegúrese que tanto el email y el password estén definidos. -- DONE
             * - Llame al backend con los datos del formulario (URL: `/back-end/user/login`). -- DONE
             * - Basado en la respuesta, maneje los siguientes escenarios:
             *  - El email y password son correctos. -- DONE
             *  - El email no está registrado. -- DONE
             *  - El password es inválido. -- DONE
             * - Si el primer escenario ocurre almacene un objeto usando `ClientStorage` que contenga el email y el
             * nombre del usuario en sesión. -- DONE
             */

            if (user.email != undefined && user.password != undefined) {
                // Calls the back-end service
                $http({
                    method: 'POST',
                    data: user,
                    url: '/back-end/user/login'
                }).then(function successCallback(response) {
                    if (!response.data.error) {
                        if (user.email && user.password) {
                            result.success = true;
                            ClientStorage.put("_/App_User", {"email":user.email, "password": user.password});
                        } else {
                            if (user.password != response.data.password) {
                                result.message = "The password for the user is invalid.";
                            }
                        }
                    } else {
                        result.message = response.data.message;
                    }

                }, function errorCallback(response) {
                    result.message = response;
                });
            } else {
                result.message = "Email and user are required.";
            }

            return result;
        };

        /**
         * Cierra la sesión del usuario.
         *
         * @returns {boolean}
         */
        var logout = function logout() {
            var result = {
                success: false,
                message: null
            };

            /**
             * TODO: Implementar
             * Pasos
             * - Elimine la información del usuario de `ClientStorage`.
             * - Llame al back-end para que cerrar la sesión en el back-end (URL: `/back-end/user/logout`).
             * - Verifique que se eliminaron los datos correctamente.
             * - Maneje los siguientes escenarios:
             *  - No existían datos.
             *  - Los datos fueron correctamente eliminados.
             *  - Los datos no fueron eliminados correctamente.
             * - En los casos 1 y 2, retorne `true` como valor de esta función.
             * - Para el caso 3, retorne `false`.
             * - IMPORTANTE: recuerde que PHP crea un cookie y PHP debe eliminarlo, de eso depende el valor del retorno
             * de la función `logout`.
             */

            return result;
        };

        /**
         * Registra un usuario en el sistema.
         *
         * @param email
         * @param password
         *
         */
        var register = function register(user) {
            var result = {
                success: false,
                message: null
            };

            /**
             * TODO: Implementar
             * Pasos
             * - Asegúrese que tanto el email, el password y la confirmación de password estén definidos.
             * - Asegúrese que el password y la confirmación de password sean iguales.
             * - Llame al backend con los datos del formulario (URL: `/back-end/user/register`).
             * - Basado en la respuesta, maneje los siguientes escenarios:
             *  - El email no está registrado en el sistema y los contraseñas son válidas.
             *  - El email no está registrado en el sistema y las contraseñas son inválidas.
             *  - El email ya está registrado en el sistema.
             * - Retorne `true` en el primer caso, en caso contrario retorne `false` y un mensaje de error.
             */

            // Checks if the required fields are defined
            if (user.email !== undefined && user.password !== undefined && user.repeatPassword !== undefined) {

                // Checks if the passwords match
                if (user.repeatPassword === user.repeatPassword) {

                    // Calls the back-end service
                    $http({
                        method: 'POST',
                        data: user,
                        url: '/back-end/user/register'
                    }).then(function successCallback(response) {
                        console.debug("Success");
                        console.log(response)
                    }, function errorCallback(response) {
                        console.debug("Error");
                        console.log(response)
                    });
                } else {
                    result.message = "The passwords do not match."
                }
            } else {
                result.message = "There must be a field missing, please make sure you have enter: the email, the password and the password verification.";
            }

            return result;
        };

        /**
         * Revisa si el usuario tiene una sesión activa.
         *
         * @returns {boolean}
         */
        var isLoggedIn = function isLoggedIn() {
            var result = {
                success: false,
                message: null
            };

            /**
             * TODO: Implementar
             * Pasos
             * - Verifique si existe algún dato en `ClientStorage`. -- DONE
             * - Maneje los siguientes escenarios:
             *  - Si existe algún dato, el usuario tiene sesión activa. -- DONE
             *  - No existe ningún dato, el usuario no cuenta con sesión activa. -- DONE
             */
            var user = session();

            if (user !== null) {
                if (user.email) {
                    result.success = true;
                }
            } else {
                result.message = "Not logged in user found";
            }

            return result;
        };

        /**
         * Obtiene información sobre el usuario actual.
         *
         * @returns {{email: string, fullName: string}}|null
         */
        var getCurrentUser = function getCurrentUser() {
            var user = {
                email: null,
                fullName: null
            };

            /**
             * TODO: Implementar
             * Pasos
             * - Verifique que el usuario tenga sesión activa.
             * - Maneje los siguientes escenarios:
             *  - El usuario tiene sesión activa, retorne un objeto con el email del usuario.
             *  - El usuario no tiene sesión activa, retorne `null`.
             */
            var checkUser = session();

            if (checkUser.email) {
                user.email = checkUser.email;
                user.fullName = checkUser.fullName;
            } else {
                user = null;
            }

            return user;
        };

        function session () {
            var userKeyLS = "_/App_User",
                user = ClientStorage.get(userKeyLS);

            return user;
        }

        return {
            getCurrentUser: getCurrentUser,
            isLoggedIn: isLoggedIn,
            login: login,
            logout: logout,
            register: register
        };
    }]);

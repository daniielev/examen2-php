angular.module('practicaPHP01.controllers')
    /**
     * Le permite a un usuario crear una nueva contraseña en el sistema.
     */
    .controller('RegisterController', ['$scope', 'UserService',
        function ($scope, UserService) {
            $scope.init = function() {
                console.debug('Register');

                /**
                 * TODO: Implementar
                 * Pasos
                 * - Permita que el usuario cree una cuenta nueva en el sistema.
                 * - Agregue las validaciones necesarias: contenido vacio, correo en formato de correo.
                 * - Provea mensajes de error descriptivos.
                 * - Maneje los siguientes escenarios:
                 *  - El correo electrónico no ha sido usado en el sistema y las contraseñas coinciden.
                 *  - Alguno de los datos está incompleto o en un formato erróneo.
                 *  - El correo electrónico ya ha sido usado en el sistema.
                 * - En el primer caso, el caso de éxito, envie el usuario a la ruta de `home`.
                 */
            };

            $scope.init();
        }]);

angular.module('practicaPHP01.controllers')
    /**
     * Inicia la sesión del usuario en el sistema.
     */
    .controller('LogoutController', ['$scope', '$location', 'UserService',
        function ($scope, $location, UserService) {
            $scope.init = function() {
                console.debug('Logout');

                /**
                 * TODO: Implementar
                 * Pasos
                 * - Verifique que el usuario tenga una sesión activa antes de seguir.
                 * - Maneje los siguientes escenarios:
                 *  - El usuario tiene una sesión activa.
                 *  - No tiene una sesión activa, redirija al usuario a la página de inicio de sesión.
                 * - En el primer caso, utilice el método `logout` del `UserService`.
                 */
            };

            $scope.init();
        }]
    );

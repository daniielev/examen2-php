angular.module('practicaPHP01.services')
    /**
     * Almacena datos del lado del cliente.
     */
    .service('ClientStorage',
        function() {
            /**
             * Guarda el objeto `object` asociado a la llave `key`.
             * Convierte el objeto en string antes de guardarlo.
             *
             * @param key
             * @param object
             */
            var put = function(key, object) {
                localStorage.setItem(key, angular.toJson(object));
            };

            /**
             * Obtiene el objeto guardado en localStorage para la llave `key`.
             * Lo parsea hacia un objeto antes de hacerlo.
             *
             * @param key
             * @returns {{}}
             */
            var get = function(key) {
                return angular.fromJson(localStorage.getItem(key));
            };

            /**
             * Elimina la entrada asociada a una llave `key`.
             *
             * @param key
             */
            var erase = function(key) {
                localStorage.removeItem(key);
            };

            return {
                erase: erase,
                get: get,
                put: put
            }
        }
    );

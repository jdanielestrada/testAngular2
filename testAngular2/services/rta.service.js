/**
 * @author: Jose Daniel Estrada Pulgarin.
 * @email : jdanielestrada18@gmail.com
 * @github: github.com/jdanielestrada
 */
(function () {
    "use strict";

    angular
      .module('appRTA')
      .factory('RTAService', RTAService);

    RTAService.$inject = ['$http', 'configService', '$rootScope'];

    function RTAService($http, configService, $rootScope) {
        return {

            getParametrosMulti: getParametrosMulti,
            getOpsForGestionOperarioExtraLaboral: getOpsForGestionOperarioExtraLaboral,


            getProductosDesarrollados: getProductosDesarrollados,
            getMaterialesProductosDesarrollados: getMaterialesProductosDesarrollados,
        };

        function getMaterialesProductosDesarrollados(idItemReferencia) {
            //$rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionCotizaciones + "get_materiales_productos_desarrollados/" + idItemReferencia)
                .then(getMaterialesProductosDesarrolladosComplete)
                .catch(getMaterialesProductosDesarrolladosFailed);

            function getMaterialesProductosDesarrolladosComplete(response) {
                //$rootScope.progressbar.complete();
                return response.data;
            }

            function getMaterialesProductosDesarrolladosFailed(error) {
                //$rootScope.progressbar.reset();
                toastr.error('XHR falló en getMaterialesProductosDesarrollados', error);
                return error;
            }
        }

        function getProductosDesarrollados() {
            //$rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionCotizaciones + "get_productos_desarrollados")
                .then(getProductosDesarrolladosComplete)
                .catch(getProductosDesarrolladosFailed);

            function getProductosDesarrolladosComplete(response) {
                //$rootScope.progressbar.complete();
                return response.data;
            }

            function getProductosDesarrolladosFailed(error) {
                //$rootScope.progressbar.reset();
                toastr.error('XHR falló en getProductosDesarrollados', error);
                return error;
            }
        }

        function getOpsForGestionOperarioExtraLaboral(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion
                    + "get_ops_for_gestion_operario_extra_laboral", JSON.stringify(request))
                .then(getOpsForGestionOperarioExtraLaboralComplete)
                .catch(getOpsForGestionOperarioExtraLaboralError);

            function getOpsForGestionOperarioExtraLaboralComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOpsForGestionOperarioExtraLaboralError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOpsForGestionOperarioExtraLaboral', error);
                return error;
            }
        }

        function getParametrosMulti(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "getparametrosmulti", JSON.stringify({ 'parametros': request }))
                        .then(getParametrosMultiCompleto)
                        .catch(getParametrosMultiError);

            function getParametrosMultiCompleto(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getParametrosMultiError(error) {
                $rootScope.progressbar.reset();
                console.log('Error en getParametrosMulti', error);
                return error;
            }
        }

    }
})();

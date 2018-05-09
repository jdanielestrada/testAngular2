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

            getParametrosMulti                  : getParametrosMulti,
            getOpsForGestionOperarioExtraLaboral: getOpsForGestionOperarioExtraLaboral,

            getProductosDesarrollados           : getProductosDesarrollados,
            getMaterialesProductosDesarrollados : getMaterialesProductosDesarrollados,
            generarConsecutivoCotizacion        : generarConsecutivoCotizacion,
            insertEncabezadoCotizacion          : insertEncabezadoCotizacion,
            getCotizacionesByUsusario           : getCotizacionesByUsusario,
            getDetalleCotizacion                : getDetalleCotizacion
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


        function generarConsecutivoCotizacion(tipo_cotizacion, idUsuario)
        {
            return $http.post(configService.ApiUrls.UrlGestionCotizaciones + "generar_consecutivo_cotizacion/" + tipo_cotizacion + "/" + idUsuario)
                .then(generarConsecutivoCotizacionComplete)
                .catch(generarConsecutivoCotizacionFailed);

            function generarConsecutivoCotizacionComplete(response)
            {
                return response.data;
            }

            function generarConsecutivoCotizacionFailed(error)
            {
                logger.error('XHR falló en generarConsecutivoCotizacion', error);
                return error;
            }
        }

        function insertEncabezadoCotizacion(request)
        {
            return $http.post(configService.ApiUrls.UrlGestionCotizaciones + "insert_h_Cotizacion/", JSON.stringify(request))
                .then(insertEncabezadoCotizacioncomplete)
                .catch(insertEncabezadoCotizacionFailed);

            function insertEncabezadoCotizacioncomplete(response)
            {
                return response.data;
            }

            function insertEncabezadoCotizacionFailed(error)
            {
                console.log('Error en insertEncabezadoCotizacion', error);
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


        function getCotizacionesByUsusario(idUsuario) {
            //$rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionCotizaciones + "get_cotizaciones_by_usuario/" + idUsuario)
                .then(getCotizacionesByUsusarioComplete)
                .catch(getCotizacionesByUsusarioFailed);

            function getCotizacionesByUsusarioComplete(response) {
                //$rootScope.progressbar.complete();
                return response.data;
            }

            function getCotizacionesByUsusarioFailed(error) {
                //$rootScope.progressbar.reset();
                toastr.error('XHR falló en getCotizacionesByUsusario', error);
                return error;
            }
        }


        function getDetalleCotizacion(csIdCotizacion) {
            //$rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionCotizaciones + "get_detalle_cotizacion/" + csIdCotizacion)
                .then(getDetalleCotizacionComplete)
                .catch(getDetalleCotizacionFailed);

            function getDetalleCotizacionComplete(response) {
                //$rootScope.progressbar.complete();
                return response.data;
            }

            function getDetalleCotizacionFailed(error) {
                //$rootScope.progressbar.reset();
                toastr.error('XHR falló en getDetalleCotizacion', error);
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

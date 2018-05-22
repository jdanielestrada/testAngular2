/**
 * @author: Jose Daniel Estrada Pulgarin.
 * @email : jdanielestrada18@gmail.com
 * @github: github.com/jdanielestrada
 */
(function() {
    "use strict";

    angular
        .module('appRTA')
        .factory('modalService', modalService);

    modalService.$inject = ['RTAService', 'parametrosService', '$uibModal'];

    /* @ngInject */
    function modalService(RTAService, parametrosService, $uibModal) {
        return {
            modalFormConfirmacion: modalFormConfirmacion,
            modalFormAddNuevoProyecto: modalFormAddNuevoProyecto,
            modalFormBuscarCotizaciones: modalFormBuscarCotizaciones,
            modalFormDetalleItemCot: modalFormDetalleItemCot,
            modalFormEditarItemCot: modalFormEditarItemCot
        };
        
        function modalFormEditarItemCot(itemCot) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmEditarItemCot.html",
                backdrop: "static",
                keyboard: false,
                controller: "editarItemCot",
                size: "detalle-producto-cotizacion",
                resolve: {
                    itemCot: function () {
                        return itemCot;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormDetalleItemCot(itemCot) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmDetalleItemCot.html",
                backdrop: "static",
                keyboard: false,
                controller: "detalleItemCot",
                size: "detalle-producto-cotizacion",
                resolve: {
                    itemCot: function () {
                        return itemCot;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormBuscarCotizaciones() {
            var modalInstance = $uibModal.open({
                templateUrl: "frmBusquedaCotizaciones.html",
                backdrop: "static",
                keyboard: false,
                controller: "busquedaCotizaciones",
                size: "lg",
            });

            return modalInstance.result;
        }

        function modalFormConfirmacion(message) {
            var modalHtml = '<div class="modal-body" style="font-size: 17px;">' + message + '</div>';
            modalHtml += '<div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">SI</button><button class="btn btn-warning" ng-click="cancel()">No</button></div>';

            var modalInstance = $uibModal.open({
                template: modalHtml,
                controller: "modalFrmConfirmacion",
                //windowClass: 'center-modal', // http://stackoverflow.com/questions/23170392/center-angular-modal-ui
                backdrop: false
            });

            return modalInstance.result;
        }
        
        function modalFormAddNuevoProyecto(list_productos_seleccionados) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmAddNuevoProyecto.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmAddNuevoProyecto",
                size: "seleccion-producto",
                resolve: {
                    listProductosSeleccionados: function () {
                        return list_productos_seleccionados;
                    }
                }
            });

            return modalInstance.result;
        }
    }
})();

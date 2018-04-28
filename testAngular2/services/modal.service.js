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

    modalService.$inject = ['RTAService', 'parametrosService', '$uibModal', '$timeout'];

    /* @ngInject */
    function modalService(RTAService, parametrosService, $uibModal, $timeout) {
        return {
            modalFormConfirmacion: modalFormConfirmacion,
            modalFormAddNuevoProyecto: modalFormAddNuevoProyecto,
        };

        function modalFormConfirmacion(message) {
            var modalHtml = '<div class="modal-body">' + message + '</div>';
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

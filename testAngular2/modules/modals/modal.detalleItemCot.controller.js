(function () {
    'use strict';
    angular
        .module('appRTA')
        .controller('detalleItemCot', detalleItemCot);

    detalleItemCot.$inject = ['configService', 'RTAService', '$scope', '$uibModalInstance', 'itemCot'];

    function detalleItemCot(configService, RTAService, $scope, $uibModalInstance, itemCot) {
        var vm = $scope;

        vm.cancel = cancel;

        vm.dataInsumosProducto = [];
        vm.dataInsumosProductoSafe = [];
        vm.obj_producto_seleccionado = itemCot;

        vm.dominio = configService.variables.Dominio;

        get_insumos_by_producto_cotizacion();

        function get_insumos_by_producto_cotizacion() {

            vm.objectDialog.LoadingDialog("...");
            RTAService.getInsumosByProductoCotizacion(vm.obj_producto_seleccionado.CS_ID_DT_COTIZACION)
                .then(function (data) {
                    vm.objectDialog.HideDialog();
                    if (data.data.length > 0 && data.data[0].length > 0) {
                       
                        vm.dataInsumosProductoSafe = _.sortBy(data.data[0], 'DESCRIPCION_C');
                        vm.dataInsumosProducto = angular.copy(vm.dataInsumosProductoSafe);
                    } else {
                        toastr.warning("No se logró obtener los datos relacionados al producto seleccionado, intentelo de nuevo.");
                    }
                });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        };

        angular.activarBloqueoTAB(true);
    }
}());



(function () {
    'use strict';
    angular
        .module('appRTA')
        .controller('detalleProductoModificacionInsumos', detalleProductoModificacionInsumos);

    detalleProductoModificacionInsumos.$inject = ['modalService', '$timeout', 'configService', 'RTAService', '$scope', '$uibModalInstance', 'producto'];

    function detalleProductoModificacionInsumos(modalService, $timeout, configService, RTAService, $scope, $uibModalInstance, producto) {
        var vm = $scope;

        vm.cancel = cancel;
        vm.export_file_insumos = export_file_insumos;
        vm.remover_insumo_producto = remover_insumo_producto;
        vm.guardar_insumos = guardar_insumos;

        vm.dataInsumosProducto = [];
        vm.dataInsumosProductoSafe = [];
        vm.obj_producto_seleccionado = producto;

        vm.dominio = configService.variables.Dominio;

        vm.dataInsumosProductoSafe = _.sortBy(producto.data_insumo_producto, 'DESCRIPCION_C');
        vm.dataInsumosProducto = angular.copy(vm.dataInsumosProductoSafe);

        function guardar_insumos() {

            if (vm.dataInsumosProducto.length === 0) {
                toastr.error("No se permite almacenar el registro si no tiene insumos asignados.");
                return;
            }

            let text_confirm = "Está seguro de continuar con los cambios realizados?";
            modalService.modalFormConfirmacion(text_confirm)
                .then(() => {

                    toastr.success("OK");

                    //let request = {
                    //    CS_H_COTIZACION: vm.obj_encabezado_cotizacion.cs_h_cotizacion,
                    //    ESTADO_COTIZACION: 2, //cerrado
                    //    ID_USUARIO: loginService.UserData.ID_USUARIO
                    //};

                    //vm.objectDialog.LoadingDialog("...");
                    //RTAService.updateEstadoHCotizaciones(request)
                    //    .then(function (result) {

                    //        vm.objectDialog.HideDialog();

                    //        if (result.MSG === "OK") {
                    //            swal("COTIZACIÓN CERRADA CORRECTAMENTE.", "", "success");
                    //            limpiar_formulario();
                    //        } else {
                    //            console.error(result.MSG);
                    //            toastr.error(result.MSG);
                    //        }
                    //    });
                });
        }

        function remover_insumo_producto(insumo) {

            vm.dataInsumosProducto = [];

            let indexInsumo = null;
            vm.dataInsumosProductoSafe.filter((item, index) => {

                if (parseInt(item.ID_COD_ITEM_C) === parseInt(insumo.ID_COD_ITEM_C)) {
                    indexInsumo = index;
                }
            });

            if (indexInsumo !== null) {
                vm.dataInsumosProductoSafe.splice(indexInsumo, 1);
            }

            $timeout(function() {
                vm.dataInsumosProducto = angular.copy(vm.dataInsumosProductoSafe);
            },300);
        }

        function export_file_insumos() {

            if (vm.dataInsumosProducto.length <= 0)
                return;

            var name_file = 'ISUMOS_' + vm.obj_producto_seleccionado.ID_REFERENCIA;

            alasql("SELECT * INTO XLSX('" + name_file + ".xlsx',{headers:true}) FROM ? ", [vm.dataInsumosProducto]);
        };

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        };

        angular.activarBloqueoTAB(true);
    }
}());



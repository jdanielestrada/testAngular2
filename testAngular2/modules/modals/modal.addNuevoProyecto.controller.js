(function () {
    'use strict';
    angular
        .module('appRTA')
        .controller('modalFrmAddNuevoProyecto', modalFrmAddNuevoProyecto);

    modalFrmAddNuevoProyecto.$inject = ['modalService', 'parametrosService', 'configService', 'RTAService', '$scope', '$uibModalInstance', '$timeout', 'listProductosSeleccionados'];

    function modalFrmAddNuevoProyecto(modalService, parametrosService, configService, RTAService, $scope, $uibModalInstance, $timeout, listProductosSeleccionados) {
        var vm = $scope;

        vm.cancel = cancel;
        vm.guardar_item = guardar_item;
        vm.cambio_cantidad_producto = cambio_cantidad_producto;

        vm.obj_producto_seleccionado = {};
        vm.list_productos_desarrollados = [];
        vm.data_materiales_producto = [];
        vm.dataInsumosProductoSafe = [];
        vm.dataInsumosProducto = [];

        get_productos_desarrollados();
        
        function cambio_cantidad_producto() {
            if (!_.isNumber(vm.obj_producto_seleccionado.CANTIDAD) || parseFloat(vm.obj_producto_seleccionado.CANTIDAD) < 1)
                vm.obj_producto_seleccionado.CANTIDAD = 1;

            vm.dataInsumosProducto.forEach((item) => {
                item.CANTIDAD_REQUERIDA = parseFloat(item.CANTIDAD_BASE) * parseFloat(vm.obj_producto_seleccionado.CANTIDAD);
            });
        }

        function get_productos_desarrollados() {

            vm.objectDialog.LoadingDialog("...");
            RTAService.getProductosDesarrollados()
                .then(function (data) {
              
                    if (data.data.length > 0 && data.data[0].length > 0) {

                        vm.list_productos_desarrollados = data.data[0];
                        vm.list_productos_desarrollados.forEach(function (item, index) {
                            item.D_REFERENCIA = item.ID_REFERENCIA.trim() + " - " + item.DESCRIPCION.trim();

                            item.ID_REFERENCIA = item.ID_REFERENCIA.trim();
                            item.DESCRIPCION = item.DESCRIPCION.trim();
                        });

                        vm.list_productos_desarrollados.push({
                            ID_ITEM: 0,
                            D_REFERENCIA: "..."
                        });

                        vm.list_productos_desarrollados.forEach(function (item, index) {
                            item.id = item.ID_ITEM;
                            item.text = item.D_REFERENCIA;

                            if (item.ID_ITEM === 0)
                                item.selected = true;
                        });
                        
                        $timeout(function () {
                            $("#seleccion_proyecto").select2({
                                data: _.sortBy(vm.list_productos_desarrollados, 'text'),
                                language: "es"
                            });

                            vm.objectDialog.HideDialog();
                        }, 300);

                        $timeout(function () {
                            var $eventSelect = $("#seleccion_proyecto");
                            $eventSelect.on("select2:select", function (e) {

                                vm.obj_producto_seleccionado = {};
                                vm.obj_producto_seleccionado = e.params.data;
                                get_materiales_productos_desarrollados();

                                $timeout(function () {
                                    vm.$apply();
                                }, 0);
                            });
                        }, 300);

                    } else {
                        toastr.error("Ocurrió un error al tratar de obtener los tipos de proyectos.");
                    }
                });
        }
        
        function get_materiales_productos_desarrollados() {

            vm.objectDialog.LoadingDialog("...");
            RTAService.getMaterialesProductosDesarrollados(vm.obj_producto_seleccionado.ID_ITEM)
                .then(function(data) {
                    vm.objectDialog.HideDialog();
                    angular.activarFancybox();
                    if (data.data.length > 0 && data.data[0].length > 0) {
                        //vm.data_materiales_producto = data.data[0];
                        //vm.obj_producto_seleccionado.data_materiales_producto = _.sortBy(data.data[0], 'DESCRIPCION_C');

                        vm.dataInsumosProductoSafe = _.sortBy(data.data[0], 'DESCRIPCION_C');
                        vm.dataInsumosProducto = angular.copy(vm.dataInsumosProductoSafe);

                        //vm.obj_producto_seleccionado.data_materiales_producto.forEach((item) => {
                        //    item.CANTIDAD_REQUERIDA_BASE = item.CANTIDAD_REQUERIDA;
                        //});

                    } else {
                        toastr.warning("No se logró obtener los datos relacionados al producto seleccionado, intentelo de nuevo.");
                    }
                    
                });
        }

        function guardar_item() {

            if (!isRegistroValido(vm.obj_producto_seleccionado.ID_ITEM)) {
                toastr.warning("Debe seleccionar un producto.");
                return;
            }

            /*verificar si la referencia fué previamente seleccionada*/
            let data_producto_seleccion_previa = _.where(listProductosSeleccionados, { ID_ITEM: vm.obj_producto_seleccionado.ID_ITEM });
            if (data_producto_seleccion_previa.length > 0) {
                toastr.warning("El producto ya se encuentra seleccionado.");
                return;
            }

            if (!isRegistroValido(vm.obj_producto_seleccionado.CANTIDAD) || parseInt(vm.obj_producto_seleccionado.CANTIDAD) < 1) {
                toastr.warning("Debe ingresar una cantidad válida del producto.");
                return;
            }

            if (!isRegistroValido(vm.obj_producto_seleccionado.MARGEN)) {
                toastr.warning("Debe ingresar un margen válido del producto.");
                return;
            }

            if (!isRegistroValido(vm.obj_producto_seleccionado.EMPAQUE_H)) {
                toastr.warning("Debe ingresar un empaque H válido del producto.");
                return;
            }
            if (!isRegistroValido(vm.obj_producto_seleccionado.EMPAQUE_W)) {
                toastr.warning("Debe ingresar un empaque W válido del producto.");
                return;
            }
            if (!isRegistroValido(vm.obj_producto_seleccionado.EMPAQUE_D)) {
                toastr.warning("Debe ingresar un empaque D válido del producto.");
                return;
            }
            if (!isRegistroValido(vm.obj_producto_seleccionado.CUBICAGE_C)) {
                toastr.warning("Debe ingresar un cubicage C válido del producto.");
                return;
            }
            if (!isRegistroValido(vm.obj_producto_seleccionado.CUBICAGE_K)) {
                toastr.warning("Debe ingresar un cubicage K válido del producto.");
                return;
            }
            
            if (!isRegistroValido(vm.dataInsumosProducto) || vm.dataInsumosProducto.length < 1) {
                toastr.warning("No se permite agregar el producto, éste no cuenta con el detalle de material requerido.");
                return;
            }
            
            vm.obj_producto_seleccionado.data_insumo_producto = vm.dataInsumosProducto;
            
            $uibModalInstance.close(vm.obj_producto_seleccionado);
        }

        function isRegistroValido(valor) {
            
            if (valor === null ||
                valor === undefined ||
                valor === "" ) {
                return false;
            }

            return true;
        }

        //vm.HH = function(valor) {
        //    if (valor === null ||
        //        valor === undefined ||
        //        valor === "" ||
        //        parseInt(valor) < 1) {
        //        return false;
        //    }

        //    return true;
        //};

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        };

        angular.activarBloqueoTAB(true);
    }
}());



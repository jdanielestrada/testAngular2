(function () {
    'use strict';
    angular
        .module('appRTA')
        .controller('modalFrmAddNuevoProyecto', modalFrmAddNuevoProyecto);

    modalFrmAddNuevoProyecto.$inject = ['modalService', 'parametrosService', 'configService', 'RTAService', '$scope', '$uibModalInstance', '$timeout'];

    function modalFrmAddNuevoProyecto(modalService, parametrosService, configService, RTAService, $scope, $uibModalInstance, $timeout) {
        var vm = $scope;

        vm.cancel = cancel;
        vm.guardar_item = guardar_item;

        vm.obj_producto_seleccionado = {};
        vm.list_productos_desarrollados = [];
        vm.data_materiales_producto = [];

        get_productos_desarrollados();
        
        function get_productos_desarrollados() {

            vm.objectDialog.LoadingDialog("...");
            RTAService.getProductosDesarrollados()
                .then(function (data) {
                    vm.objectDialog.HideDialog();

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
                        }, 300);

                        $timeout(function () {
                            var $eventSelect = $("#seleccion_proyecto");
                            $eventSelect.on("select2:select", function (e) {

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
                        vm.data_materiales_producto = data.data[0];
                    } else {
                        toastr.warning("No se logró obtener los datos relacionados al producto seleccionado, intentelo de nuevo.");
                    }
                    
                });
        }

        function guardar_item() {
            $uibModalInstance.close();
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        };

        angular.activarBloqueoTAB(true);
    }
}());



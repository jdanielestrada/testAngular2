/**
 * @author: desarrollo web
 */
(function () {
    'use strict';

    angular.module('appRTA')
        .controller('gestionEspesores', gestionEspesores);

    gestionEspesores.$inject = ['$upload', 'parametrosService', '$scope', 'configService', 'loginService', '$timeout', '$location', '$cookieStore', '$rootScope', '$uibModal', 'RTAService', 'modalService', '$constants'];

    function gestionEspesores($upload, parametrosService, $scope, configService, loginService, $timeout, $location, $cookieStore, $rootScope, $uibModal, RTAService, modalService, $constants) {
        var vm = $scope;

        function init() {

            vm.limpiar_formulario = limpiar_formulario;
            //vm.validar_adjunto = validar_adjunto;
            //vm.delete_adjunto = delete_adjunto;
            //vm.guardar_producto = guardar_producto;

            vm.obj_producto_seleccionado = {};
            vm.list_adjuntos = [];
            vm.list_productos_desarrollados = [];
            vm.objDataEspesor = {
                tipoEspesor: "",
                referencia: "",
                espesor:""

            };



            get_productos_desarrollados_for_gestion_imagen();

            function limpiar_formulario() {
                vm.list_adjuntos = [];
                vm.obj_producto_seleccionado = {};
                $('#seleccion_proyecto').val(null).trigger('change');

                $timeout(() => {
                    vm.$apply();
                }, 0);
            }
            
            function get_productos_desarrollados_for_gestion_imagen() {

                vm.objectDialog.LoadingDialog("...");
                RTAService.getProductosDesarrolladosForGestionImagen()
                    .then(function (data) {

                        if (data.data.length > 0 && data.data[0].length > 0) {

                            vm.list_productos_desarrollados = data.data[0];
                            vm.list_productos_desarrollados.forEach(function (item, index) {
                                item.D_REFERENCIA = item.ID_ITEM.trim() + " - " + item.ID_REFERENCIA.trim() + " - " + item.DESCRIPCION.trim();

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


            vm.insertEspesores = function () {


                if (vm.objDataEspesor.tipoEspesor === "") {
                    toastr.info('Debe ingreaar tipo espesor');
                    return;
                }
                if (vm.objDataEspesor.espesor === "") {
                    toastr.info('Debe ingresar el espesor');
                    return;
                }

                if (vm.objDataEspesor.espesor === "") {
                    toastr.info('Debe ingresar el espesor');
                    return;
                }

                swal("DATOS actualizados", "Se actualizo el costo correctamente", "success");
                return;


                RTAService.insertEspesores(vm.objDataEspesor)

                    .then(function (result) {

                        if (result.MSG === "OK") {
                            console.log('Registros actualizados correctamente');

                            swal("DATOS actualizados", "Se actualizo el costo correctamente", "success");

                        }
                        else {

                            toastr.warning(result.MSG);
                            sweetAlert("ERROR", "No se actualizaron los datos", "error");
                        }

                    });



            }



    
        };

        //#region Control User Session

        vm.cookieUser = {};
        vm.cookieUser = $cookieStore.get('servlog');

        if (!_.isNull(vm.cookieUser)) {
            if (vm.cookieUser.hasSession && parseInt(vm.cookieUser.UserData.ID_USUARIO) === parseInt(loginService.UserData.ID_USUARIO)) {
                if ($location.$$path == "/gestionEspesores" && angular.verficar_perfil_usuario("gestionEspesores")) {

                    angular.VerificarVersionApp();
                    $rootScope.$$childHead.showmodal = false;
                    init();

                } else {
                    loginService.cerrarSesion();
                }
            } else {
                loginService.cerrarSesion();
            }
        } else {
            loginService.cerrarSesion();
        }
        //#endregion
    };
}());


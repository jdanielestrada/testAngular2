/**
 * @author: Jose Daniel Estrada Pulgarin.
 * @email : jdanielestrada18@gmail.com
 * @github: github.com/jdanielestrada
 */
(function () {
    'use strict';

    angular.module('appRTA')
           .controller('cotProductoDesarrollado', cotProductoDesarrollado);

    cotProductoDesarrollado.$inject = ['parametrosService', '$scope', 'configService', 'loginService', '$timeout', '$location', '$cookieStore', '$rootScope', '$uibModal', 'RTAService', 'modalService', '$constants'];

    function cotProductoDesarrollado(parametrosService, $scope, configService, loginService, $timeout, $location, $cookieStore, $rootScope, $uibModal, RTAService, modalService, $constants) {
        var vm = $scope;
        
        function init() {

            vm.show_modal_seleccion_proyecto = show_modal_seleccion_proyecto;
            
            $timeout(function() {
                $("#dpFechaCotizacion").datetimepicker({
                    dayViewHeaderFormat: "MMMM YYYY",
                    locale: "es",
                    //sideBySide: true,
                    minDate: moment(),
                    defaultDate: moment(),
                    showClear: true,
                    widgetPositioning: {
                        horizontal: "left",
                        vertical: "bottom"
                    },
                    format: "DD/MMMM/YYYY"
                });

                $timeout(function() {
                    $("[class*=date]").on("keypress", function(e) { e.preventDefault(); });
                }, 50);

            }, 300);

            function show_modal_seleccion_proyecto() {
                modalService.modalFormAddNuevoProyecto();
            }

            function get_consecutivo_cotizacion() {

                //vm.objectDialog.LoadingDialog("...");
                RTAService.getTiposProyectos()
                    .then(function (data) {
                        //vm.objectDialog.HideDialog();

                        if (data.data.length > 0 && data.data[0].length > 0) {

                            vm.list_tipos_proyectos = data.data[0];
                            vm.list_tipos_proyectos.push({
                                C_ESTADO_COTIZACION: 0,
                                D_ESTADO_COTIZACION: "..."
                            });

                            vm.list_tipos_proyectos.forEach(function (item, index) {
                                item.id = item.C_ESTADO_COTIZACION;
                                item.text = item.D_ESTADO_COTIZACION;

                                if (item.C_ESTADO_COTIZACION === 0)
                                    item.selected = true;
                            });

                            $timeout(function () {
                                $("#seleccion_proyecto").select2({
                                    data: vm.list_tipos_proyectos,
                                    language: "es"
                                });
                            }, 300);

                        } else {
                            toastr.error("Ocurrió un error al tratar de obtener los tipos de proyectos.");
                        }
                    });
            }
        };
        
        //#region Control User Session
        
        vm.cookieUser = {};
        vm.cookieUser = $cookieStore.get('servlogGProd');

        if (!_.isNull(vm.cookieUser)) {
            if (vm.cookieUser.hasSession && parseInt(vm.cookieUser.UserData.cs_IdUsuario) === parseInt(loginService.UserData.cs_IdUsuario)) {
                if ($location.$$path == "/cotProductoDesarrollado" && angular.verficar_perfil_usuario("cotProductoDesarrollado")) {

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


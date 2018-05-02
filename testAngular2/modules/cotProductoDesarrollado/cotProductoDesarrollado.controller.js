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
            vm.remover_producto = remover_producto;
            vm.guardar = guardar;

            vm.list_productos_seleccionados = [];

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

            function guardar() {
                let template_evaluacion = null;

                var elem = document.getElementById("evaluacion_empl");
                var domClone = elem.cloneNode(true);

                var $printSection = document.getElementById("printSection");

                if (!$printSection) {
                    $printSection = document.createElement("div");
                    $printSection.id = "printSection";
                    document.body.appendChild($printSection);
                } else {
                    document.getElementById("printSection").remove();
                    $printSection = document.createElement("div");
                    $printSection.id = "printSection";
                    document.body.appendChild($printSection);
                }

                $printSection.appendChild(domClone);

                //clonamos el div, y eliminamos los input, se envia el resultado a la API
                var htmlTemp = $("#printSection");
                //htmlTemp.find("input").remove();
                htmlTemp.find("div.ng-hide").remove();
                htmlTemp.find("i.ng-hide").remove();
                htmlTemp.find("span.ng-hide").remove();

                //htmlTemp.find("#bootstrap").attr('href', 'http://192.168.1.43//EvaluacionDesempenio/Assets/VendorReferences/Bootstrap/css/bootstrap.css');
                //htmlTemp.find("#app_styles").attr('href', 'http://192.168.1.43//EvaluacionDesempenio/Assets/Css/estilos_pdf_file.css');

                //obtenemos el innerHTML del elemento clonado
                template_evaluacion = htmlTemp.html();

            }

            function show_modal_seleccion_proyecto() {
                modalService.modalFormAddNuevoProyecto(vm.list_productos_seleccionados)
                    .then((producto) => {
                        vm.list_productos_seleccionados.push(producto);
                        angular.activarFancybox();
                    });
            }

            function remover_producto(producto) {

                let indice_producto = 0;
                vm.list_productos_seleccionados.forEach(function(item, index) {
                    if (item.ID_ITEM === producto.ID_ITEM)
                        indice_producto = index;
                });

                vm.list_productos_seleccionados.splice(indice_producto, 1);
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
        vm.cookieUser = $cookieStore.get('servlog');

        if (!_.isNull(vm.cookieUser)) {
            if (vm.cookieUser.hasSession && parseInt(vm.cookieUser.UserData.ID_USUARIO) === parseInt(loginService.UserData.ID_USUARIO)) {
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


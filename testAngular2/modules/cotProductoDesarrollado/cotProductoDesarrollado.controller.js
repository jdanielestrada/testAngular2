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

            //OBJ

            vm.obj_encabezado_cotizacion = {

                documento_cliente: "",
                nombres_cliente  : "",
                apellidos_cliente: "",
                fecha_cotizacion : "",
                cs_id_usuario: loginService.UserData.ID_USUARIO,
                tipo_cotizacion: loginService.UserData.TIPO_DOCUMENTO,
                cs_cotizacion    : ""

            }
            vm.swMostrarItems = false;


            //ARRYS

            vm.listaCotizacionesUsuario         = [];
            vm.listaDetalleCotizacion           = [];
            vm.listaMaterialesByItemCotizacion  = [];


            console.log(loginService.UserData);

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


            vm.getCotizacionesByUsusario= function() {

                 vm.objectDialog.LoadingDialog("...");

                 RTAService.getCotizacionesByUsusario(loginService.UserData.ID_USUARIO)
                    .then(function (data) {
                        vm.objectDialog.HideDialog();
                        angular.activarFancybox();
                        if (data.data.length > 0 && data.data[0].length > 0) {
                            vm.listaCotizacionesUsuario = data.data[0];

                        } else {
                            toastr.warning("No se encontró ninguna cotización realizada por el usuario" + loginService.UserData.NOMBRES_USUARIO + ' ' + loginService.UserData.APELLIDOS_USUARIO);
                        }

                    });
            }

            vm.getCotizacionesByUsusario();

            vm.generarConsecutivoCotizacion = function () {

                //validaciones

                if (vm.obj_encabezado_cotizacion.documento_cliente === null ||
                    vm.obj_encabezado_cotizacion.documento_cliente === undefined ||
                    vm.obj_encabezado_cotizacion.documento_cliente === "") {
                    toastr.warning("Debe ingresar un documento de cliente");
                    return;
                }

                if (vm.obj_encabezado_cotizacion.nombres_cliente === null ||
                    vm.obj_encabezado_cotizacion.nombres_cliente === undefined ||
                    vm.obj_encabezado_cotizacion.nombres_cliente === "") {
                    toastr.warning("Debe ingresar los NOMBRES del cliente");
                    return;
                }

                if (vm.obj_encabezado_cotizacion.apellidos_cliente === null ||
                    vm.obj_encabezado_cotizacion.apellidos_cliente === undefined ||
                    vm.obj_encabezado_cotizacion.apellidos_cliente === "") {
                    toastr.warning("Debe ingresar APELLIDOS del cliente");
                    return;
                }


                let fecha_ct = $('#dpFechaCotizacion').data("DateTimePicker").date();
                vm.obj_encabezado_cotizacion.fecha_cotizacion = fecha_ct == null ? null : moment(fecha_ct).format("YYYY-MM-DD");

                if (vm.obj_encabezado_cotizacion.fecha_cotizacion === "" || vm.obj_encabezado_cotizacion.fecha_cotizacion === null) {
                    toastr.warning('Debe soleccionar una fecha');
                    return;
                };


                //vm.objectDialog.LoadingDialog("...");
                console.log(vm.obj_encabezado_cotizacion);

                RTAService.generarConsecutivoCotizacion(vm.obj_encabezado_cotizacion.tipo_cotizacion, vm.obj_encabezado_cotizacion.cs_id_usuario)
                    .then(function (result) {
                        if (result.MSG === "OK") {
                            vm.obj_encabezado_cotizacion.cs_cotizacion = result.OUT_CS_COTIZACION;
                            vm.insertEncabezadoCotizacion();
                        }
                        else {
                            toastr.error(result.MSG);
                        }

                    });
            };

            vm.insertEncabezadoCotizacion = function () {


                RTAService.insertEncabezadoCotizacion(vm.obj_encabezado_cotizacion)
                    .then(function (result) {

                        if (result.MSG === "GUARDADO") {
                            swal("SE HA INICIADO LA COTIZACIÓN CORRECTAMENTE", "", "success");
                            vm.swMostrarItems = true;
                        }
                        else {
                            console.log(result.MSG);

                        }

                    });
            };

            vm.getDetalleCotizacion = function (item) {

                let csIdCotizacion = item.CS_ID_COTIZACION;

                vm.objectDialog.LoadingDialog("...");

                RTAService.getDetalleCotizacion(csIdCotizacion)
                   .then(function (data)
                   {
                       vm.objectDialog.HideDialog();
                       angular.activarFancybox();
                       if (data.data.length > 0 && data.data[0].length > 0)
                       {
                           vm.listaDetalleCotizacion = data.data[0];

                       } else {
                           toastr.warning("No se encontró items asociados a la cotización");
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


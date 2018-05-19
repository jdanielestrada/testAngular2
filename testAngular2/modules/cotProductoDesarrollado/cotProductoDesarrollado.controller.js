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
            vm.remover_producto              = remover_producto;
            vm.guardar                       = guardar;
            vm.ver_modal_cotizaciones        = ver_modal_cotizaciones;
            vm.generarConsecutivoCotizacion  = generarConsecutivoCotizacion;
            vm.limpiar_formulario            = limpiar_formulario;
            vm.editar_producto = editar_producto;
            vm.cerrar_cotizacion = cerrar_cotizacion;
            vm.ver_detalle_item_cot = ver_detalle_item_cot;

            vm.list_productos_seleccionados = [];

            vm.obj_encabezado_cotizacion = {
                documento_cliente: "",
                nombres_cliente: "",
                apellidos_cliente: "",
                fecha_cotizacion: "",
                cs_id_usuario: loginService.UserData.ID_USUARIO,
                tipo_cotizacion: loginService.UserData.TIPO_DOCUMENTO,
                cs_cotizacion: null,
                ESTADO_COTIZACION: 1
            };

            vm.swMostrarItems = false;
            
            vm.listaCotizacionesUsuario         = [];
            vm.listaDetalleCotizacion           = [];
            vm.listaMaterialesByItemCotizacion  = [];
            
            $timeout(function() {
                $("#dpFechaCotizacion").datetimepicker({
                    dayViewHeaderFormat: "MMMM YYYY",
                    locale: "es",
                    //sideBySide: true,
                    //minDate: moment(),
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
            
            function ver_detalle_item_cot(item) {
                modalService.modalFormDetalleItemCot(item);
            }

            function cerrar_cotizacion() {

                let request = {
                    CS_H_COTIZACION: vm.obj_encabezado_cotizacion.cs_h_cotizacion,
                    ESTADO_COTIZACION: 2,//cerrado
                    ID_USUARIO: loginService.UserData.ID_USUARIO
                };

                vm.objectDialog.LoadingDialog("...");
                RTAService.updateEstadoHCotizaciones(request)
                    .then(function (result) {

                        vm.objectDialog.HideDialog();

                        if (result.MSG === "OK") {
                            swal("COTIZACIÓN CERRADA CORRECTAMENTE.", "", "success");
                            limpiar_formulario();
                        } else {
                            console.error(result.MSG);
                            toastr.error(result.MSG);
                        }
                    });
            }

            function editar_producto(producto) {
                
            }

            function ver_modal_cotizaciones() {

                modalService.modalFormBuscarCotizaciones()
                    .then((cotizacion) => {
                        console.log("dt_cotizacion", cotizacion);
                        limpiar_formulario();
                         
                        vm.obj_encabezado_cotizacion.documento_cliente = cotizacion.DOCUMENTO_CLIENTE;
                        vm.obj_encabezado_cotizacion.nombres_cliente = cotizacion.NOMBRES_CLIENTE;
                        vm.obj_encabezado_cotizacion.apellidos_cliente = cotizacion.APELLIDOS_CLIENTE;
                        vm.obj_encabezado_cotizacion.fecha_cotizacion = cotizacion.FECHA_COTIZACION;
                        $('#dpFechaCotizacion').data("DateTimePicker").date(moment(cotizacion.FECHA_COTIZACION));

                        vm.obj_encabezado_cotizacion.tipo_cotizacion = cotizacion.TIPO_COTIZACION;
                        vm.obj_encabezado_cotizacion.cs_cotizacion = cotizacion.CS_TIPO_COTIZACION;
                        vm.obj_encabezado_cotizacion.cs_h_cotizacion = cotizacion.CS_ID_COTIZACION;
                        vm.obj_encabezado_cotizacion.ESTADO_COTIZACION = cotizacion.ESTADO_COTIZACION;
                        vm.obj_encabezado_cotizacion.email = cotizacion.EMAIL_CLIENTE;

                        if (cotizacion.listaDetalleCotizacion.length > 0) {
                            vm.list_productos_seleccionados = cotizacion.listaDetalleCotizacion;
                            vm.swMostrarItems = true;
                            angular.activarFancybox();
                        }

                        $timeout(() => {
                            vm.$apply();
                        }, 0);
                    });
            }

            function guardar() {
                //let template_evaluacion = null;

                //var elem = document.getElementById("evaluacion_empl");
                //var domClone = elem.cloneNode(true);

                //var $printSection = document.getElementById("printSection");

                //if (!$printSection) {
                //    $printSection = document.createElement("div");
                //    $printSection.id = "printSection";
                //    document.body.appendChild($printSection);
                //} else {
                //    document.getElementById("printSection").remove();
                //    $printSection = document.createElement("div");
                //    $printSection.id = "printSection";
                //    document.body.appendChild($printSection);
                //}

                //$printSection.appendChild(domClone);

                ////clonamos el div, y eliminamos los input, se envia el resultado a la API
                //var htmlTemp = $("#printSection");
                ////htmlTemp.find("input").remove();
                //htmlTemp.find("div.ng-hide").remove();
                //htmlTemp.find("i.ng-hide").remove();
                //htmlTemp.find("span.ng-hide").remove();

                ////htmlTemp.find("#bootstrap").attr('href', 'http://192.168.1.43//EvaluacionDesempenio/Assets/VendorReferences/Bootstrap/css/bootstrap.css');
                ////htmlTemp.find("#app_styles").attr('href', 'http://192.168.1.43//EvaluacionDesempenio/Assets/Css/estilos_pdf_file.css');

                ////obtenemos el innerHTML del elemento clonado
                //template_evaluacion = htmlTemp.html();

            }

            function show_modal_seleccion_proyecto() {
                modalService.modalFormAddNuevoProyecto(vm.list_productos_seleccionados)
                    .then((producto) => {
                        guardar_producto_seleccionado(producto);
                    });
            }

            function guardar_producto_seleccionado(producto) {

                producto.CS_H_COTIZACION = vm.obj_encabezado_cotizacion.cs_h_cotizacion;
                producto.ID_USUARIO = loginService.UserData.ID_USUARIO;

                vm.objectDialog.LoadingDialog("...");
                RTAService.insertProductosCotizacion(producto)
                    .then(function (result) {

                        vm.objectDialog.HideDialog();

                        if (result.MSG === "OK") {
                            toastr.success("Producto Agregado Correctamente.");
                            producto.CS_ID_DT_COTIZACION = result.OUT_CS_ID_DT_COTIZACION;
                            vm.list_productos_seleccionados.push(producto);
                            angular.activarFancybox();
                        } else {
                            console.error(result.MSG);
                            toastr.error("Ocurrió un error al tratar de insertar el producto, intentelo nuevamente.");
                        }
                    });
            }

            function remover_producto(producto) {

                let text_confirm = "Está seguro de eliminar el item de la cotización?";
                modalService.modalFormConfirmacion(text_confirm)
                    .then(() => {

                        vm.objectDialog.LoadingDialog("...");
                        RTAService.deleteProductoDtCotizacion(producto)
                            .then(function (result) {

                                vm.objectDialog.HideDialog();
                                if (result.MSG === "OK") {
                                    toastr.success("Producto Eliminado Correctamente.");

                                    let indice_producto = 0;
                                    vm.list_productos_seleccionados.forEach(function(item, index) {
                                        if (item.CS_ID_DT_COTIZACION === producto.CS_ID_DT_COTIZACION)
                                            indice_producto = index;
                                    });

                                    vm.list_productos_seleccionados.splice(indice_producto, 1);
                                } else {
                                    console.error(result.MSG);
                                    toastr.error("Ocurrió un error al tratar de eliminar el producto, intentelo nuevamente.");
                                }
                            });
                    });
            }
            
            function generarConsecutivoCotizacion() {
                
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


                if (vm.obj_encabezado_cotizacion.cs_cotizacion !== undefined &&
                    vm.obj_encabezado_cotizacion.cs_cotizacion !== null &&
                    vm.obj_encabezado_cotizacion.cs_cotizacion !== 0) {
                    
                    vm.swMostrarItems = true;

                } else {
                    vm.objectDialog.LoadingDialog("...");
                    console.log(vm.obj_encabezado_cotizacion);

                    RTAService.generarConsecutivoCotizacion(vm.obj_encabezado_cotizacion.tipo_cotizacion, vm.obj_encabezado_cotizacion.cs_id_usuario)
                        .then(function (result) {

                            vm.objectDialog.HideDialog();

                            if (result.MSG === "OK") {
                                vm.obj_encabezado_cotizacion.cs_cotizacion = result.OUT_CS_COTIZACION;
                             
                                vm.insertEncabezadoCotizacion();
                            }
                            else {
                                toastr.error(result.MSG);
                            }

                        });
                }
            };
      
            vm.insertEncabezadoCotizacion = function () {
                RTAService.insertEncabezadoCotizacion(vm.obj_encabezado_cotizacion)
                    .then(function (result) {

                        if (result.MSG === "OK") {
                            swal("SE HA INICIADO LA COTIZACIÓN CORRECTAMENTE", "", "success");
                            vm.swMostrarItems = true;
                            vm.obj_encabezado_cotizacion.cs_h_cotizacion = result.OUT_CS_H_COTIZACION;
                        }
                        else {
                            console.log(result.MSG);
                        }
                    });
            };

            function limpiar_formulario() {
                vm.obj_encabezado_cotizacion.documento_cliente = "";
                vm.obj_encabezado_cotizacion.nombres_cliente   = "";
                vm.obj_encabezado_cotizacion.apellidos_cliente = "";
                vm.obj_encabezado_cotizacion.email             = "";
                vm.obj_encabezado_cotizacion.cs_cotizacion     = null;
                vm.obj_encabezado_cotizacion.cs_h_cotizacion   = null;
                vm.list_productos_seleccionados                = [];
                vm.swMostrarItems = false;
                vm.obj_encabezado_cotizacion.ESTADO_COTIZACION = 1;
           
                $('#dpFechaCotizacion').data("DateTimePicker").date(moment());

                $timeout(() => {
                    vm.$apply();
                }, 0);
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


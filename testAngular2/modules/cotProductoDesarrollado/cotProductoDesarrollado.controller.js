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
                cs_id_usuario    : "",
                tipo_cotizacion  : "",
                cs_cotizacion    : ""

            }
            vm.swMostrarItems = false;

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

            function generarConsecutivoCotizacion() {

                vm.obj_encabezado_cotizacion.tipo_cotizacion = 'I';
                vm.obj_encabezado_cotizacion.cs_id_usuario = 2;
                //vm.objectDialog.LoadingDialog("...");
                RTAService.generarConsecutivoCotizacion(vm.obj_encabezado_cotizacion.tipo_cotizacion, vm.obj_encabezado_cotizacion.cs_id_usuario)
                    .then(function (data) {
                        if (result.MSG === "GUARDADO") {
                            vm.obj_encabezado_cotizacion.cs_cotizacion = result.OUT_CS_COTIZACION;
                        }
                        else
                        {
                            toastr.error(result.MSG);
                        }

                    });
            };

            function insertEncabezadoCotizacion() {
                
                //validaciones

                if (vm.obj_encabezado_cotizacion.documento_cliente === null      ||
                    vm.obj_encabezado_cotizacion.documento_cliente === undefined ||
                    vm.obj_encabezado_cotizacion.documento_cliente === "")
                {
                    toastr.warning("Debe ingresar un documento de cliente");
                    return;
                }

                if (vm.obj_encabezado_cotizacion.nombres_cliente === null      ||
                    vm.obj_encabezado_cotizacion.nombres_cliente === undefined ||
                    vm.obj_encabezado_cotizacion.nombres_cliente === "")
                {
                    toastr.warning("Debe ingresar los NOMBRES del cliente");
                    return;
                }

                if (vm.obj_encabezado_cotizacion.apellidos_cliente === null      ||
                    vm.obj_encabezado_cotizacion.apellidos_cliente === undefined ||
                    vm.obj_encabezado_cotizacion.apellidos_cliente === "")
                {
                    toastr.warning("Debe ingresar APELLIDOS del cliente");
                    return;
                }


                let fecha_ct = $('#dpFechaCotizacion').data("DateTimePicker").date();
                vm.obj_encabezado_cotizacion.fecha_cotizacion = fecha_ct == null ? null : moment(fecha_ct).format("YYYY-MM-DD");

                if (vm.obj_encabezado_cotizacion.fecha_cotizacion === "" || vm.obj_encabezado_cotizacion.fecha_cotizacion === null) {
                    toastr.warning('Debe soleccionar una fecha');
                    return;
                };

                RTAService.insert_encabezado_cotizacion(vm.obj_encabezado_cotizacion)
                  .then(function (result) {

                      if (result.MSG === "GUARDADO") 
                      {
                          swal("SE HA INICIADO LA COTIZACIÓN ", "", "success");
                          vm.swMostrarItems = true;
                      }
                      else 
                      {
                          console.log(result.MSG);
                      
                      }

                  });
            };


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


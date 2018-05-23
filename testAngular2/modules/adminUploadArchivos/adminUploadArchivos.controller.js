﻿/**
 * @author: desarrollo web
 */
(function () {
    'use strict';

    angular.module('appRTA')
           .controller('adminUploadArchivos', adminUploadArchivos);

    adminUploadArchivos.$inject = ['parametrosService', '$scope', 'configService', 'loginService', '$timeout', '$location', '$cookieStore', '$rootScope', '$uibModal', 'RTAService', 'modalService', '$constants'];

    function adminUploadArchivos(parametrosService, $scope, configService, loginService, $timeout, $location, $cookieStore, $rootScope, $uibModal, RTAService, modalService, $constants) {
        var vm = $scope;

        function init() {


            vm.swArchivoCargado = 1;
            //CARGAR ARCHIVO CSV 

            $('#submit-file').on("click", function (e) {
                e.preventDefault();
                $('#files').parse({
                    config: {
                        delimiter: "auto",
                        complete: displayHTMLTable,
                    },
                    before: function (file, inputElem) {
                        //console.log("Parsing file...", file);
                    },
                    error: function (err, file) {
                        //console.log("ERROR:", err, file);
                    },
                    complete: function () {
                        //console.log("Done with all files");
                    }
                });
            });

            function displayHTMLTable(results) {

                var table = "<table class='table'>";
                var data = results.data;
                var array = [];
                console.log(results.data);
                vm.arrayDataCostosMdc = [];
                for (var i = 0; i < data.length; i++) {
                    table += "<tr>";
                    var row = data[i];
                    var cells = row.join(",").split(",");
                    array.push(cells)
                    for (var j = 0; j < cells.length; j++) {
                        table += "<td>";
                        table += cells[j];
                        table += "</th>";
                    }
                    table += "</tr>";
                }
                table += "</table>";

                vm.swArchivoCargado = 1;
                //MOSTRAR DATA CARGADA
                $("#parsed_csv_list").html(table);

                //LOGICA ASIGNAR PORIEDADES ARRAY 
                var arrayFinal = [];
                var keyDes = "";

                for (var j = 0; j < array.length; j++) {
                    var arrayDT = array[j];

                    var objXX = {};

                    for (var k = 0; k < arrayDT.length; k++) {

                        if (k === 0) {
                            keyDes = "REFERENCIA";
                        }

                        if (k === 1) {
                            keyDes = "DESCRIPCION";
                        }

                        if (k === 2) {
                            keyDes = "COSTOMDC";
                        }

                        objXX[keyDes] = arrayDT[k];
                    }

                    arrayFinal.push(objXX);
                }
                vm.arrayDataCostosMdc = arrayFinal;
            }


            //FUNCIONES 
            vm.insertarArchivoCostosMdc = insertarArchivoCostosMdc;
            vm.getCostosProductosInsumosRtaMdc = getCostosProductosInsumosRtaMdc;

            //ARREGLOS
            //vm.arrayDataCostosMdc = [];
            vm.arrayDataUpload = [];
            vm.listaCostosProductosRtaMdc = [];

            //vm.arrayDataCostosMdc = [{ "REFERENCIA": "XXX", "DESCRIPCION": "XXXX", "COSTOMDC": "1200" }, { "REFERENCIA": "IMMF0654", "DESCRIPCION": "MINIFIX 8 X 34 15MM", "COSTOMDC": "1000" }, { "REFERENCIA": "HMPLUS30", "DESCRIPCION": "PEGANTE HM PLUS 30 GR (GOTERO)", "COSTOMDC": "1100" }, { "REFERENCIA": "PEREXMIN", "DESCRIPCION": "PERNO EXPANSION MINIFIX", "COSTOMDC": "1200" }, { "REFERENCIA": "B4x8x2", "DESCRIPCION": "BOLSAS EMPAQUE 4x8x2 PEQUENA", "COSTOMDC": "1300" }]


            //OBJETOS
            vm.objHeaderCostosMdc = {

                csIdUsuario: loginService.UserData.ID_USUARIO
            }


            vm.objHeaderCostosCalculados = {
                pjCambio: "",
                lapsoCorteMes: "",
                tomaMayorMenor: "",
                aumentarDismuir: "",
                flexibilidad: ""
            }

            /*
                INSERTAR ARCHIVO COSTOS MDC 
            */
            function insertarArchivoCostosMdc() {

                //ELIMINAR LA PRIMERA POSICION DEL ARRAY
                vm.arrayDataCostosMdc.shift();

                //ELIMINAR LA ULT POSICION DE ARRAY
                vm.arrayDataCostosMdc.pop();

                console.log('ARRAY DATA COSTOS MDC' + vm.arrayDataCostosMdc);

                //VALIDAR ARCHIVO CARGADO               
                if (vm.arrayDataCostosMdc.length === 0) {
                    toastr.info('Para guardar debe cargar un archivo');

                    return;
                }

                //OBJETO
                vm.dataCostosMdc =
                {
                    dataHeader: vm.objHeaderCostosMdc,
                    dataDetalle: vm.arrayDataCostosMdc
                }

                //CALL SERVICES
                RTAService.insertarArchivoCostosMdc(vm.dataCostosMdc)
                .then(function (result) {
                    if (result.MSG === "OK") {
                        console.log('Registros almacenados correctamente');
                        toastr.success('Registros almacenados correctamente');

                        swal("REGISTROS ALMACENADOS", "Los registros se guardaron correctamente", "success");
                        vm.objHeaderCostosMdc = {
                            csIdUsuario: loginService.UserData.ID_USUARIO
                        }
                        vm.arrayDataCostosMdc = [];
                        $("#parsed_csv_list").empty();
                        vm.swArchivoCargado = 0;
                    }
                    else {
                        toastr.error(result.MSG);
                        sweetAlert("ERROR", "Ocurrio un error guardando los datos , favor intente de nuevo", "error");
                    }

                });


            }


            /*
                CONSULTAR COTOS PRODUCTOS RTA VS MDC 
            */

            function getCostosProductosInsumosRtaMdc() {

                //vm.objHeaderCostosCalculados = {
                //    pjCambio: "",
                //    lapsoCorteMes: "",
                //    tomaMayorMenor: "",
                //    aumentarDismuir: "",
                //    flexibilidad: ""
                //}

                if (vm.objHeaderCostosCalculados.pjCambio === "") {
                    toastr.info('Debe ingresar un % de cambio');
                    return;
                }


                if (vm.objHeaderCostosCalculados.flexibilidad === "") {
                    toastr.info('Debe ingresar la flexibilidad');
                    return;
                }

                //vm.objectDialog.LoadingDialog("...");
                RTAService.getCostosProductosInsumosRtaMdc()
                    .then(function (data) {
                        vm.objectDialog.HideDialog();
                        if (data.data.length > 0 && data.data[0].length > 0) {
                            vm.listaCostosProductosRtaMdc = data.data[0];

                            vm.listaCostosProductosRtaMdc.forEach(function (item) {

                                //SI EL COSTO MDC ES MAYOR SE COLOCA SINO SE COLOCA EL DE RTA
                                if (item.COSTO_MDC > item.COSTO_RTA) {
                                    item.MAYOR_VALOR = item.COSTO_MDC;
                                } else {
                                    item.MAYOR_VALOR = item.COSTO_RTA;
                                }

                                //cALCULAR VARIACIÓN PORCENTUAL 
                                item.VARIACION = (((item.COSTO_MDC - item.COSTO_RTA) / item.COSTO_RTA) * 100).toFixed(2);
                               

                                //ASIGNAR COSTO FINAL 

                                if (item.VARIACION > parseFloat(vm.objHeaderCostosCalculados.pjCambio) || item.VARIACION > parseFloat(vm.objHeaderCostosCalculados.flexibilidad)) {
                                    item.SW_ALERTA = 1;
                                    item.COSTO_FINAL_RTA = item.MAYOR_VALOR;

                                } else {
                                    item.COSTO_FINAL_RTA = item.MAYOR_VALOR + item.MAYOR_VALOR * (parseFloat (vm.objHeaderCostosCalculados.pjCambio) / 100);
                                    item.SW_ALERTA = 0;
                                }



                            });
                        }
                        else {
                            toastr.error("Ocurrió un error al tratar de obtener los últimos costos de insumos");
                        }
                    });
            }


            vm.inserCostosCalculados=function() {
                swal("Datos almacenados correctamente", "", "success");
                vm.listaCostosProductosRtaMdc = [];
                vm.objHeaderCostosCalculados = {
                    pjCambio: "",
                    lapsoCorteMes: "",
                    tomaMayorMenor: "",
                    aumentarDismuir: "",
                    flexibilidad: ""
                }

            }

            //getCostosProductosInsumosRtaMdc();


        };//FIN INIT()


        vm.cookieUser = {};
        vm.cookieUser = $cookieStore.get('servlog');

        if (!_.isNull(vm.cookieUser)) {
            if (vm.cookieUser.hasSession && parseInt(vm.cookieUser.UserData.ID_USUARIO) === parseInt(loginService.UserData.ID_USUARIO)) {
                if ($location.$$path == "/adminUploadArchivos" && angular.verficar_perfil_usuario("adminUploadArchivos")) {

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


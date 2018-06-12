/**
 * @author: desarrollo web
 */
(function () {
    'use strict';

    angular.module('appRTA')
           .controller('uploadImagenProducto', uploadImagenProducto);

    uploadImagenProducto.$inject = ['$upload', 'parametrosService', '$scope', 'configService', 'loginService', '$timeout', '$location', '$cookieStore', '$rootScope', '$uibModal', 'RTAService', 'modalService', '$constants'];

    function uploadImagenProducto($upload, parametrosService, $scope, configService, loginService, $timeout, $location, $cookieStore, $rootScope, $uibModal, RTAService, modalService, $constants) {
        var vm = $scope;

        function init() {

            vm.limpiar_formulario = limpiar_formulario;
            vm.validar_adjunto = validar_adjunto;
            vm.delete_adjunto = delete_adjunto;
            vm.guardar_producto = guardar_producto;

            vm.obj_registro_nuevo_producto = {
                codigo_producto: "",
                referencia: "",
                adjunto: [],
                log_user: loginService.UserData.ID_USUARIO
            };

            vm.list_adjuntos = [];
            
            function limpiar_formulario() {
                vm.list_adjuntos = [];

                vm.obj_registro_nuevo_producto.codigo_producto = "";
                vm.obj_registro_nuevo_producto.referencia = "";
                vm.obj_registro_nuevo_producto.adjunto = [];

                $timeout(() => {
                    vm.$apply();
                }, 0);
            }

            function validar_adjunto(files) {
          
                vm.list_adjuntos = [];

                for (var i = 0; i < files.length; i++) {

                    var ext = (files[i].name).split(".");
                    ext = ext[ext.length - 1].toUpperCase();

                    if (ext !== "PNG" && ext !== "JPG" && ext !== "JPEG") {
                        toastr.warning("Solo se puede cargar archivos de imagenes.");
                        return;
                    }

                    vm.list_adjuntos.push(files[i]);
                }
            };

            function delete_adjunto(index) {
                vm.list_adjuntos.splice(index, 1);
            };

            function guardar_producto() {

                if (vm.obj_registro_nuevo_producto.codigo_producto === undefined||
                    vm.obj_registro_nuevo_producto.codigo_producto === null||
                    vm.obj_registro_nuevo_producto.codigo_producto === "") {

                    toastr.warning("Es requerido ingresar el código del producto.");
                    return;
                }

                if (vm.obj_registro_nuevo_producto.referencia === undefined ||
                    vm.obj_registro_nuevo_producto.referencia === null ||
                    vm.obj_registro_nuevo_producto.referencia === "") {

                    toastr.warning("Es requerido ingresar la referencia del producto.");
                    return;
                }
                
                if (vm.list_adjuntos.length === 0) {
                    toastr.warning("Es requerido adjuntar una imagen.");
                    return;
                }

                vm.obj_registro_nuevo_producto.adjunto = vm.list_adjuntos;

                $upload.upload({
                    url: configService.ApiUrls.UrlGestionCotizaciones + "almacenar_imagen_producto",
                    method: "POST",
                    headers: { 'Content-Type': 'multipart/form-data' },
                    file: vm.obj_registro_nuevo_producto.adjunto,
                    data: vm.obj_registro_nuevo_producto
                }).success(function (result, status, headers, config) {

                    if (result.MSG === "OK") {
                        swal({
                            type: "success",
                            text: "Archivo almacenado correctamente."
                        });

                        limpiar_formulario();
                    } else {
                        toastr.error("Error: " + result.MSG);
                    }

                }).error(function (data, status, headers, config) {
                    console.error("almacenar_imagen_producto", data);
                });
            }
        };

        //#region Control User Session

        vm.cookieUser = {};
        vm.cookieUser = $cookieStore.get('servlog');

        if (!_.isNull(vm.cookieUser)) {
            if (vm.cookieUser.hasSession && parseInt(vm.cookieUser.UserData.ID_USUARIO) === parseInt(loginService.UserData.ID_USUARIO)) {
                if ($location.$$path == "/uploadImagenProducto" && angular.verficar_perfil_usuario("uploadImagenProducto")) {

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


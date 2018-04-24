/**
 * @author: Jose Daniel Estrada Pulgarin.
 * @email : jdanielestrada18@gmail.com
 * @github: github.com/jdanielestrada
 */
(function () {
    "use strict";

    angular
      .module('appRTA')
      .factory('modalService', modalService);

    modalService.$inject = ['RTAService', 'parametrosService', '$uibModal', '$timeout'];

    /* @ngInject */
    function modalService(RTAService, parametrosService, $uibModal, $timeout) {
        return {
            modalFormConfirmacion: modalFormConfirmacion,
            modalFormSeleccionarEspacioTiemposMaquina: modalFormSeleccionarEspacioTiemposMaquina,
            modalFormNotificacion: modalFormNotificacion,
            modalFormReporteMaquina: modalFormReporteMaquina,
            modalFormReporteServiciosEspeciales: modalFormReporteServiciosEspeciales,
            modalFormShowReportesGestionOP: modalFormShowReportesGestionOP,
            modalFormConfirmarInicioGestionOPConEtapaPreviaPendiente: modalFormConfirmarInicioGestionOPConEtapaPreviaPendiente,
            modalFormOperariosCO: modalFormOperariosCO,
            modalFormMaquinasGestionEtapa: modalFormMaquinasGestionEtapa,
            modalFormOrdenesProduccionForGestionOperario: modalFormOrdenesProduccionForGestionOperario,
            modalFormOrdenesEntregaCliente: modalFormOrdenesEntregaCliente,
            modalFormIngresoPiezasCortadasEntregaOP: modalFormIngresoPiezasCortadasEntregaOP,
            modalFormSeleccionSucursal: modalFormSeleccionSucursal,
            modalFormConfirmacionSeleccionMaquina: modalFormConfirmacionSeleccionMaquina,
            modalFormResumenPlaneacionOP: modalFormResumenPlaneacionOP,
            modalFormResumenPlaneacionEtapasOPDia: modalFormResumenPlaneacionEtapasOPDia,
            modalFormOrdenesProduccionForAnulacionGestionOperario: modalFormOrdenesProduccionForAnulacionGestionOperario,
            modalFormResumenPlaneacionOPPanelControl: modalFormResumenPlaneacionOPPanelControl,
            modalFormGestionMaquinas: modalFormGestionMaquinas,
            modalFormConfirmacionGenerico: modalFormConfirmacionGenerico,
            modalFormMotivosSuspensionEtapa: modalFormMotivosSuspensionEtapa,
            modalFormGestionCreacionTicket: modalFormGestionCreacionTicket,
            modalFormDetalleGestionEtapasOP: modalFormDetalleGestionEtapasOP,
            modalFormConfirmacionInicioGestionOP: modalFormConfirmacionInicioGestionOP,
            modalFormOrdenesZunchado: modalFormOrdenesZunchado,
            modalFormDetalleTRProducto: modalFormDetalleTRProducto
        };

        function modalFormDetalleTRProducto(solicitud) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmDetalleTRProducto.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmDetalleTR",
                size: "dt-transferencias",
                resolve: {
                    solicitud: function () {
                        return solicitud;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormOrdenesZunchado(c_centro_operacion) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmOrdenesZunchado.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmOrdenesZunchado",
                size: "maquinas-gestion-etapa",
                resolve: {
                    c_centro_operacion: function () {
                        return c_centro_operacion;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormConfirmacionInicioGestionOP(etapa) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmConfirmacionInicioGestionOP.html",
                backdrop: "static",
                keyboard: false,
                windowClass: 'modal-success',
                controller: "modalConfirmacionInicioGestionOP",
                resolve: {
                    etapa: function () {
                        return etapa;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormDetalleGestionEtapasOP(solicitud) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmDetalleGestionEtapasOP.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmDetalleGestionEtapasOP",
                resolve: {
                    solicitud: function () {
                        return solicitud;
                    }
                }
            });

            return modalInstance.result;
        }

        /**
         * 
         * @param {} request *row_id_maquina *data_operario 
         * @returns {} 
         */
        function modalFormGestionCreacionTicket(request) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmSeleccionTipoFallaMaq.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmCreaciónTicketNovedadMaq",
                size: "tipo-falla-maquina",
                resolve: {
                    request: function () {
                        return request;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormMotivosSuspensionEtapa(solicitud, data_operario) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmMotivosSuspensionEtapa.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmMotivosSuspensionEtapa",
                size: "resumen-planeacion-panel-control",
                resolve: {
                    solicitud: function () {
                        return solicitud;
                    },
                    data_operario: function () {
                        return data_operario;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormConfirmacionGenerico(message) {
            var modalHtml = '<div class="modal-body">' + message + '</div>';
            modalHtml += '<div class="modal-footer"><button class="btn btn-primary btn-lg" ng-click="ok()">SI</button><button class="btn btn-warning btn-lg" ng-click="cancel()">No</button></div>';

            var modalInstance = $uibModal.open({
                template: modalHtml,
                controller: "modalFrmConfirmacion",
                //windowClass: 'center-modal', // http://stackoverflow.com/questions/23170392/center-angular-modal-ui
                backdrop: false
            });

            return modalInstance.result;
        }

        function modalFormGestionMaquinas(c_grupo_servicio, is_srv_especial, data_operario) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmGestionMaquinas.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmGestionMaquinas",
                size: "maquinas-gestion-etapa",
                resolve: {
                    c_grupo_servicio: function () {
                        return c_grupo_servicio;
                    },
                    is_srv_especial: function () {
                        return is_srv_especial;
                    },
                    data_operario: function () {
                        return data_operario;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormResumenPlaneacionOPPanelControl(solicitud) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmResumenPlaneacionOpPanelControl.html",
                backdrop   : "static",
                keyboard   : false,
                controller : "modalFrmResumenPlaneacionOpPanelControl",
                size       : "resumen-planeacion-panel-control",
                resolve: {
                    solicitud: function () {
                        return solicitud;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormOrdenesProduccionForAnulacionGestionOperario(c_centro_operacion, cedula_operario, c_grupo_servicio, is_srv_especial) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmOrdenesProduccionForAnulacionGestionOperario.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmOrdenesProduccionForAnulacionGestionOperario",
                size: "maquinas-gestion-etapa",
                resolve: {
                    c_centro_operacion: function () {
                        return c_centro_operacion;
                    },
                    cedula_operario: function () {
                        return cedula_operario;
                    },
                    c_grupo_servicio: function () {
                        return c_grupo_servicio;
                    },
                    is_srv_especial: function () {
                        return is_srv_especial;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormResumenPlaneacionEtapasOPDia(data_etapas_programadas) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmResumenPlaneacionEtapasOPDia.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmResumenPlaneacionEtapasOPDia",
                size: "resumen-planeacion-etapas-dia",
                resolve: {
                    dataEtapasProgramadas: function () {
                        return data_etapas_programadas;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormResumenPlaneacionOP(solicitud) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmResumenPlaneacionOP.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmResumenPlaneacionOP",
                size: "srv-programado",
                resolve: {
                    solicitud: function () {
                        return solicitud;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormConfirmacionSeleccionMaquina(objDataGestionEtapa) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmConfirmacionSeleccionMaquina.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmConfirmacionSeleccionMaquina",
                resolve: {
                    objDataGestionEtapa: function () {
                        return objDataGestionEtapa;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormSeleccionSucursal() {
            var modalInstance = $uibModal.open({
                templateUrl: "frmSeleccionSucursal.html",
                backdrop   : "static",
                keyboard   : false,
                size       : "seleccion-sucursal",
                controller : "modalFrmSeleccionSucursal"
            });

            return modalInstance.result;
        }

        function modalFormIngresoPiezasCortadasEntregaOP(cs_id_orden_produccion) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmIngresoPiezasCortadasEntregaOP.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmIngresoPiezasCortadasEntregaOP",
                resolve: {
                    cs_id_orden_produccion: function () {
                        return cs_id_orden_produccion;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormOrdenesEntregaCliente(c_centro_operacion) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmOrdenesEntregaCliente.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmOrdenesEntregaCliente",
                size: "maquinas-gestion-etapa",
                resolve: {
                    c_centro_operacion: function () {
                        return c_centro_operacion;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormOrdenesProduccionForGestionOperario(data_to_modal) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmOrdenesProduccionForGestionOperario.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmOrdenesProduccionForGestionOperario",
                size: "maquinas-gestion-etapa",
                resolve: {
                    data_to_modal: function () {
                        return data_to_modal;
                    }

                    //c_centro_operacion: function () {
                    //    return c_centro_operacion;
                    //},
                    //data_operario: function () {
                    //    return data_operario;
                    //},
                    //c_grupo_servicio: function () {
                    //    return c_grupo_servicio;
                    //},
                    //is_srv_especial: function () {
                    //    return is_srv_especial;
                    //},
                    //is_gestion_nueva: function () {
                    //    return is_gestion_nueva;
                    //}
                }
            });
            
            return modalInstance.result;
        }

        function modalFormMaquinasGestionEtapa(c_grupo_servicio, is_srv_especial, cedula_operario) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmMaquinasGestionEtapa.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmMaquinasGestionEtapa",
                size: "maquinas-gestion-etapa",
                resolve: {
                    c_grupo_servicio: function () {
                        return c_grupo_servicio;
                    },
                    is_srv_especial: function () {
                        return is_srv_especial;
                    },
                    cedula_operario: function () {
                        return cedula_operario;
                    }
                }
            });

            return modalInstance.result;
        }

        function modalFormOperariosCO() {
            var modalInstance = $uibModal.open({
                templateUrl: "frmOperariosCO.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmOperariosCO",
                size: "operarios-co"
            });

            return modalInstance.result;
        }

        function modalFormConfirmarInicioGestionOPConEtapaPreviaPendiente(data_etapa_previa) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmConfirmarInicioGestionOPConEtapaPreviaPendiente.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmConfirmarInicioGestionOPConEtapaPreviaPendiente",
                resolve: {
                    dataEtapaPrevia: function () {
                        return data_etapa_previa;
                    }
                }
                //size: "lg"
            });

            return modalInstance.result;
        }

        function modalFormShowReportesGestionOP() {
            var modalInstance = $uibModal.open({
                templateUrl: "frmShowReportesGestionOP.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmShowReportesGestionOP",
                //size: "lg"
            });

            return modalInstance.result;
        }

        function modalFormReporteServiciosEspeciales() {
            var modalInstance = $uibModal.open({
                templateUrl: "frmReporteServiciosEspeciales.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmReporteServiciosEspeciales",
                size: "reportes"
            });

            return modalInstance.result;
        }

        function modalFormReporteMaquina() {
            var modalInstance = $uibModal.open({
                templateUrl: "frmReporteMaquina.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmReportes",
                size: "reportes"
            });

            return modalInstance.result;
        }
        
        function modalFormConfirmacion(message) {
            var modalHtml = '<div class="modal-body">' + message + '</div>';
            modalHtml += '<div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">SI</button><button class="btn btn-warning" ng-click="cancel()">No</button></div>';

            var modalInstance = $uibModal.open({
                template: modalHtml,
                controller: "modalFrmConfirmacion",
                //windowClass: 'center-modal', // http://stackoverflow.com/questions/23170392/center-angular-modal-ui
                backdrop: false
            });

            return modalInstance.result;
        }

        function modalFormNotificacion(message, windowClass) {
            var modalHtml = '<div class="modal-body" style="padding: 50px;padding-left: 15px;padding-right: 15px;text-align: center;">' + message + '</div>';
            modalHtml += '<div class="modal-footer text-center"><button class="btn btn-default" ng-click="ok()" style="font-size: 18px;">Salir</button></div>';

            var modalInstance = $uibModal.open({
                template: modalHtml,
                controller: "modalFrmNotificacion",
                windowClass: windowClass + " center-modal",
                backdrop: "static",
                keyboard: false
            });

            return modalInstance.result;
        }

        function modalFormSeleccionarEspacioTiemposMaquina(solicitud) {
            var modalInstance = $uibModal.open({
                templateUrl: "frmSeleccionarEspacioTiemposMaquina.html",
                backdrop: "static",
                keyboard: false,
                controller: "modalFrmSeleccionarEspacioTiemposMaquina",
                size: "lg",
                resolve: {
                    solicitud: function () {
                        return solicitud;
                    }
                }
            });
            
            return modalInstance.result;
        }
        
    }
})();

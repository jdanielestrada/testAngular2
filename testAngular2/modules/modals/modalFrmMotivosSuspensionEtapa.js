(function () {
    'use strict';
    angular
        .module('appRTA')
        .controller('modalFrmMotivosSuspensionEtapa', modalFrmMotivosSuspensionEtapa);

    modalFrmMotivosSuspensionEtapa.$inject = ['modalService', 'parametrosService', 'configService', 'RTAService', '$scope', '$uibModalInstance', 'solicitud', 'data_operario'];

    function modalFrmMotivosSuspensionEtapa(modalService, parametrosService, configService, RTAService, $scope, $uibModalInstance, solicitud, data_operario) {
        var vm = $scope;

        vm.motivo_suspension_selected = motivo_suspension_selected;

        get_motivos_suspension_etapa();

        vm.list_motivos_suspension_etapa = [];
        function get_motivos_suspension_etapa() {

            vm.objectDialog.LoadingDialog("...");
            RTAService.getMotivosSuspensionEtapa(solicitud.c_grupo_servicio, solicitud.c_centro_operacion_orden_produccion)
                .then(function (data) {
                    vm.objectDialog.HideDialog();
                    if (data.data.length > 0 && data.data[0].length > 0) {
          
                        /*si la etapa no fue iniciada en tiempo extra laboral no mostrar el tipo de suspensión para op extra laboral*/
                        if (!solicitud.sw_extra_laboral) {
                            vm.list_motivos_suspension_etapa = data.data[0].filter(function(item) {
                                return parseInt(item.c_motivo_suspension_etapa) !== 6;
                            });
                        } else {
                            vm.list_motivos_suspension_etapa = data.data[0];
                        }

                    } else {
                        toastr.error("Error al obtener la lista de motivos para realizar la suspensión de la etapa.");
                        vm.list_motivos_suspension_etapa = [];
                    }
                });
        }

        function motivo_suspension_selected(motivo) {
            if (parseInt(parametrosService.MPARAMETROS.PROD_MOT_SUSP_MAQ_PARADA) === parseInt(motivo.c_motivo_suspension_etapa)) {
                let request= {
                    row_id_maquina: solicitud.row_id_maquina,
                    motivo: motivo,
                    data_operario: data_operario
                }
                gestion_creacion_ticket(request);
            } else {
                $uibModalInstance.close(motivo);
            }
        }

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        function gestion_creacion_ticket(request) {
            
            modalService.modalFormGestionCreacionTicket(request)
                .then(function () {
                    $uibModalInstance.close(request.motivo);
                })
                .catch(function () {
                    //vm.cancel();
                });
        }
        
        angular.activarBloqueoTAB(true);
    }
}());



(function () {
    'use strict';
    angular
        .module('appRTA')
        .controller('busquedaCostosMdc', busquedaCostosMdc);

    busquedaCostosMdc.$inject = ['loginService', 'modalService', 'parametrosService', 'configService', 'RTAService', '$scope', '$uibModalInstance', '$timeout'];

    function busquedaCostosMdc(loginService, modalService, parametrosService, configService, RTAService, $scope, $uibModalInstance, $timeout) {
        var vm = $scope;
        
        vm.cancel = cancel;
        vm.getDetalleCotizacion = getDetalleCotizacion;

        vm.listaHistoricoCostosMdc = [];
        vm.listaDetalleCotizacion  = [];

        getHistoricoCostosMdc();

        function getDetalleCotizacion(item) {

            item.listaDetalleCotizacion = [];

            let csIdCotizacion = item.CS_ID_COTIZACION;

            vm.objectDialog.LoadingDialog("...");

            RTAService.getDetalleCotizacion(csIdCotizacion)
               .then(function (data) {
                   vm.objectDialog.HideDialog();
                   
                   if (data.data.length > 0 && data.data[0].length > 0) {
                       vm.listaDetalleCotizacion = data.data[0];

                       item.listaDetalleCotizacion = vm.listaDetalleCotizacion;

                   } else {
                       toastr.warning("No se encontró items asociados a la cotización");
                       vm.listaDetalleCotizacion = [];
                   }

                   $uibModalInstance.close(item);
               });
        }

        function getHistoricoCostosMdc() {

             vm.objectDialog.LoadingDialog("...");

            RTAService.getHistoricoCostosMdc()
                .then(function (data) {
                    vm.objectDialog.HideDialog();
                    
                    if (data.data.length > 0 && data.data[0].length > 0) {
                        vm.listaHistoricoCostosMdc = data.data[0];

                    } else {
                        toastr.warning("No se encontró ningun costo MDC ");
                        vm.listaHistoricoCostosMdc = [];
                    }
                });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        };

        angular.activarBloqueoTAB(true);
    }
}());



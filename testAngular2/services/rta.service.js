/**
 * @author: Jose Daniel Estrada Pulgarin.
 * @email : jdanielestrada18@gmail.com
 * @github: github.com/jdanielestrada
 */
(function () {
    "use strict";

    angular
      .module('appRTA')
      .factory('RTAService', RTAService);

    RTAService.$inject = ['$http', 'configService', '$rootScope'];

    function RTAService($http, configService, $rootScope) {
        return {
            importarConectorUNOE2                          : importarConectorUNOE2,

            getParametrosMulti                             : getParametrosMulti,
            getSolicitudesPendientesAprobacionOp           : getSolicitudesPendientesAprobacionOp,
            insertAprobacionOrdenProduccion                : insertAprobacionOrdenProduccion,
            getEstadosSolicitudAprobacionOp                : getEstadosSolicitudAprobacionOp,
            getSolicitudesByFiltro                         : getSolicitudesByFiltro,
            getSolicitudByToken                            : getSolicitudByToken,
            getOrdenesProduccion                           : getOrdenesProduccion,
            getPlaneacionesOp                              : getPlaneacionesOp,
            getDtOrdenesProduccionByIdHOp                  : getDtOrdenesProduccionByIdHOp,
            getIndicadorDespieceForOrdenProduccion         : getIndicadorDespieceForOrdenProduccion,
            getTiposEnchapeOrdenProduccion                 : getTiposEnchapeOrdenProduccion,
            updateHOrdenesProduccion                       : updateHOrdenesProduccion,
            getCargaProduccionMaquinasByCo                 : getCargaProduccionMaquinasByCo,
            getServiciosEspecialesOp                       : getServiciosEspecialesOp,
            getEstadosOp                                   : getEstadosOp,
            getOrdenesProduccionFiltro                     : getOrdenesProduccionFiltro,
            getClienteByCedula                             : getClienteByCedula,
            getContactoClienteCorporativo                  : getContactoClienteCorporativo,
            getDtSolTrCantos                               : getDtSolTrCantos,
            getDtSolTrTableros                             : getDtSolTrTableros,
            getOrdenesProduccionOrderby                    : getOrdenesProduccionOrderby,
            getCentrosOperacion                            : getCentrosOperacion,
            getDiasFestivos                                : getDiasFestivos,
            getDiasLaborales                               : getDiasLaborales,
            getPlaneacionByOp                              : getPlaneacionByOp,
            getOrdenesProduccionProgramadas                : getOrdenesProduccionProgramadas,
            getMaquinasOperariosServiciosEspecialesOp      : getMaquinasOperariosServiciosEspecialesOp,
            getServiciosIncluidosOp                        : getServiciosIncluidosOp,
            getDatosForServiciosIncluidosOp                : getDatosForServiciosIncluidosOp,
            getDtSolTr                                     : getDtSolTr,
            getDataPickingOrdenesProduccion                : getDataPickingOrdenesProduccion,
            getDtPickingOrdenesProduccion                  : getDtPickingOrdenesProduccion,
            updateDatosPickingOrdenProduccion              : updateDatosPickingOrdenProduccion,
            getEmpleadoFiltro                              : getEmpleadoFiltro,
            getDataForBarcodeOp                            : getDataForBarcodeOp,
            getDatosEmpleado                               : getDatosEmpleado,
            getDataEtapaByBarcode                          : getDataEtapaByBarcode,
            insertGestionEtapaOp                           : insertGestionEtapaOp,
            forgotPassword                                 : forgotPassword,
            getDataPickingOrdenesProduccionFiltro          : getDataPickingOrdenesProduccionFiltro,
            getOrdenesProduccionControl                    : getOrdenesProduccionControl,
            getOrdenesProduccionControlFiltro              : getOrdenesProduccionControlFiltro,
            insertPjElaboradoOperario                      : insertPjElaboradoOperario,
            getPlaneacionByOpPanelControl                  : getPlaneacionByOpPanelControl,
            getServiciosIncluidosOpByCodOp                 : getServiciosIncluidosOpByCodOp,
            getPorcentajesOperariosEtapa                   : getPorcentajesOperariosEtapa,
            updatePjElaboradoOperario                      : updatePjElaboradoOperario,
            anularOrdenProduccion                          : anularOrdenProduccion,
            getGruposServicios                             : getGruposServicios,
            getEtapasOpPendienteAsignacionGrupoServicio    : getEtapasOpPendienteAsignacionGrupoServicio,
            updateEtapasOpPendienteAsignacionGrupoServicio : updateEtapasOpPendienteAsignacionGrupoServicio,
            getDatosMaquinasAfectadasReprogramacion        : getDatosMaquinasAfectadasReprogramacion,
            inicializarOrdenProduccion                     : inicializarOrdenProduccion,
            getDespiecesOvForOrdenProduccion               : getDespiecesOvForOrdenProduccion,
            getOperarioByMaquinaHorarioLaboral             : getOperarioByMaquinaHorarioLaboral,
            getDataEtapaForAnulacionGestionOperario        : getDataEtapaForAnulacionGestionOperario,
            anularGestionEtapa                             : anularGestionEtapa,
            getMadeservicios                               : getMadeservicios,
            getOpAsociadasOrdenVenta                       : getOpAsociadasOrdenVenta,
            updateCentroOperacionOp                        : updateCentroOperacionOp,
            getSegmentacionesCliente                       : getSegmentacionesCliente,
            getOrdenesProduccionSegmentacion               : getOrdenesProduccionSegmentacion,
            getDoctoTransferencia                          : getDoctoTransferencia,
            getPlantillaByConectorSiesa                    : getPlantillaByConectorSiesa,
            getRetazosOrdenProduccion                      : getRetazosOrdenProduccion,
            getMaquinasCentroOperacion                     : getMaquinasCentroOperacion,
            getMaquinasCentroOperacionFuncion              : getMaquinasCentroOperacionFuncion,
            getOrdenesProduccionAsignadasMaquina           : getOrdenesProduccionAsignadasMaquina,
            reasignarMaquina                               : reasignarMaquina,
            getDatetimeFromServer                          : getDatetimeFromServer,
            getDisponibilidadEspaciosTiemposMaquina        : getDisponibilidadEspaciosTiemposMaquina,
            getDtTipoServiciosEtapa                        : getDtTipoServiciosEtapa,
            getProductosOrdenesProduccion                  : getProductosOrdenesProduccion,
            getHorasValleEtapaOp                           : getHorasValleEtapaOp,
            getOrdenesProduccionProgramadasFiltro          : getOrdenesProduccionProgramadasFiltro,
            getReporteOrdenesProduccionMaquina             : getReporteOrdenesProduccionMaquina,
            getMaquinasCentroOperacionSinFuncionMaquina    : getMaquinasCentroOperacionSinFuncionMaquina,
            desprogramarOrdenProduccion                    : desprogramarOrdenProduccion,
            getAllIpPorPv                                  : getAllIpPorPv,
            getSucursales                                  : getSucursales,
            getReporteServiciosEspeciales                  : getReporteServiciosEspeciales,
            insertEntregaProductoCliente                   : insertEntregaProductoCliente,
            getEtapaPreviaPendienteByBarcode               : getEtapaPreviaPendienteByBarcode,
            getPermisosProgramacionOpExpressByCo           : getPermisosProgramacionOpExpressByCo,
            getOperariosMaquinaCo                          : getOperariosMaquinaCo,
            getMaquinasCentroOperacionForGestionEtapa      : getMaquinasCentroOperacionForGestionEtapa,
            getOrdenesEntregaCliente                       : getOrdenesEntregaCliente,
            getSaldoCantidadPiezasCortadasEntregadasCliente: getSaldoCantidadPiezasCortadasEntregadasCliente,
            getInformacionEntregaOpCliente                 : getInformacionEntregaOpCliente,
            getDiasLaboralesCoWithConfigOpExpress          : getDiasLaboralesCoWithConfigOpExpress,
            getVersionAppFromServer                        : getVersionAppFromServer,
            getOpsForGestionOperario                       : getOpsForGestionOperario,
            getDataEtapaForGestionOperario                 : getDataEtapaForGestionOperario,
            insertCantidadProduccionEtapasByFecha          : insertCantidadProduccionEtapasByFecha,
            getOpsForAnulacionGestionOperario              : getOpsForAnulacionGestionOperario,
            updateAusenciaOperarioMaquina                  : updateAusenciaOperarioMaquina,
            getDetalleNovedadesMaquina                     : getDetalleNovedadesMaquina,
            getDatosTipologia                              : getDatosTipologia,
            getDatosSolicitante                            : getDatosSolicitante,
            insertTicket                                   : insertTicket,
            getMotivosSuspensionEtapa                      : getMotivosSuspensionEtapa,
            insertMotivoSuspensionEtapa                    : insertMotivoSuspensionEtapa,
            updateMotivoSuspensionEtapa                    : updateMotivoSuspensionEtapa,
            getOpsForGestionOperarioExtraLaboral           : getOpsForGestionOperarioExtraLaboral,
            getFechaDisponibilidad                         : getFechaDisponibilidad,
            getSuspensionesEtapaOperario                   : getSuspensionesEtapaOperario,
            getDtGestionEtapasOp                           : getDtGestionEtapasOp,
            getOpsForInicioGestionOperario                 : getOpsForInicioGestionOperario,
            getListOpsForGestionOperarioByGrupoServicio    : getListOpsForGestionOperarioByGrupoServicio,
            getOpsServEspecialesForInicioGestionOperario   : getOpsServEspecialesForInicioGestionOperario
        };

        function getOpsServEspecialesForInicioGestionOperario(c_centro_operacion, cedula_operario, c_grupo_servicio, is_srv_especial) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion
                    + "get_ops_serv_especiales_for_inicio_gestion_operario", JSON.stringify({
                        c_centro_operacion: c_centro_operacion,
                        cedula_operario   : cedula_operario,
                        c_grupo_servicio  : c_grupo_servicio,
                        is_srv_especial   : is_srv_especial
                    }))
                .then(getOpsServEspecialesForInicioGestionOperarioComplete)
                .catch(getOpsServEspecialesForInicioGestionOperarioError);

            function getOpsServEspecialesForInicioGestionOperarioComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOpsServEspecialesForInicioGestionOperarioError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOpsServEspecialesForInicioGestionOperario', error);
                return error;
            }
        }
        
        function getListOpsForGestionOperarioByGrupoServicio(c_centro_operacion, c_grupo_servicio) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion
                    + "get_list_ops_for_gestion_operario_by_grupo_servicio", JSON.stringify({
                        c_centro_operacion: c_centro_operacion,
                        c_grupo_servicio: c_grupo_servicio
                    }))
                .then(getListOpsForGestionOperarioByGrupoServicioComplete)
                .catch(getListOpsForGestionOperarioByGrupoServicioError);

            function getListOpsForGestionOperarioByGrupoServicioComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getListOpsForGestionOperarioByGrupoServicioError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getListOpsForGestionOperarioByGrupoServicio', error);
                return error;
            }
        }
        
        function getOpsForInicioGestionOperario(c_centro_operacion, c_grupo_servicio) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion
                    + "get_ops_for_inicio_gestion_operario", JSON.stringify({
                        c_centro_operacion: c_centro_operacion,
                        c_grupo_servicio: c_grupo_servicio
                    }))
                .then(getOpsForInicioGestionOperarioComplete)
                .catch(getOpsForInicioGestionOperarioError);

            function getOpsForInicioGestionOperarioComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOpsForInicioGestionOperarioError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOpsForInicioGestionOperario', error);
                return error;
            }
        }

        function getDtGestionEtapasOp(cs_id_orden_produccion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_dt_gestion_etapas_op/" + cs_id_orden_produccion)
                .then(getDtGestionEtapasOpComplete)
                .catch(getDtGestionEtapasOpFailed);

            function getDtGestionEtapasOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDtGestionEtapasOpFailed(error) {
                $rootScope.progressbar.reset();
                toastr.error('XHR falló en getDtGestionEtapasOp', error);
                return error;
            }
        }

        function getSuspensionesEtapaOperario(cs_id_orden_produccion, cedula_operario, c_grupo_servicio) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_suspensiones_etapa_operario/" + cs_id_orden_produccion + "/" + cedula_operario + "/" + c_grupo_servicio)
                .then(getSuspensionesEtapaOperarioComplete)
                .catch(getSuspensionesEtapaOperarioFailed);

            function getSuspensionesEtapaOperarioComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getSuspensionesEtapaOperarioFailed(error) {
                $rootScope.progressbar.reset();
                toastr.error('XHR falló en getSuspensionesEtapaOperario', error);
                return error;
            }
        }

        function getFechaDisponibilidad(centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlNuevaOrden + "getFechaDisponibilidad/" + centro_operacion)
                .then(getFechaDisponibilidadComplete)
                .catch(getFechaDisponibilidadFailed);

            function getFechaDisponibilidadComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getFechaDisponibilidadFailed(error) {
                $rootScope.progressbar.reset();
                toastr.error('XHR falló en getFechaDisponibilidad', error);
                return error;
            }
        }

        function getOpsForGestionOperarioExtraLaboral(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion
                    + "get_ops_for_gestion_operario_extra_laboral", JSON.stringify(request))
                .then(getOpsForGestionOperarioExtraLaboralComplete)
                .catch(getOpsForGestionOperarioExtraLaboralError);

            function getOpsForGestionOperarioExtraLaboralComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOpsForGestionOperarioExtraLaboralError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOpsForGestionOperarioExtraLaboral', error);
                return error;
            }
        }
        

        function updateMotivoSuspensionEtapa(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "update_motivo_suspension_etapa", JSON.stringify(request))
                .then(updateMotivoSuspensionEtapaComplete)
                .catch(updateMotivoSuspensionEtapaError);

            function updateMotivoSuspensionEtapaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function updateMotivoSuspensionEtapaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en updateMotivoSuspensionEtapa', error);
                return error;
            }
        }

        function insertMotivoSuspensionEtapa(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "insert_motivo_suspension_etapa", JSON.stringify(request))
                .then(insertMotivoSuspensionEtapaComplete)
                .catch(insertMotivoSuspensionEtapaError);

            function insertMotivoSuspensionEtapaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function insertMotivoSuspensionEtapaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en insertMotivoSuspensionEtapa', error);
                return error;
            }
        }

        function getMotivosSuspensionEtapa(c_grupo_servicio, c_centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_motivos_suspension_etapa/" + c_grupo_servicio + "/" + c_centro_operacion)
                        .then(getMotivosSuspensionEtapaComplete)
                        .catch(getMotivosSuspensionEtapaError);

            function getMotivosSuspensionEtapaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getMotivosSuspensionEtapaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getMotivosSuspensionEtapa', error);
                return error;
            }
        }

        function insertTicket(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlPeticiones + "PostTicket/", JSON.stringify(request))
                .then(insertTicketComplete)
                .catch(insertTicketError);

            function insertTicketComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function insertTicketError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en insertTicket', error);
                return error;
            }
        }

        function getDatosSolicitante(id_usuario) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_datos_solicitante_by_id_usuario/" + id_usuario)
                        .then(getDatosSolicitanteComplete)
                        .catch(getDatosSolicitanteError);

            function getDatosSolicitanteComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDatosSolicitanteError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDatosSolicitante', error);
                return error;
            }
        }
        
        function getDatosTipologia(id_area) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_datos_tipologia/" + id_area)
                        .then(getDatosTipologiaComplete)
                        .catch(getDatosTipologiaError);

            function getDatosTipologiaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDatosTipologiaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDatosTipologia', error);
                return error;
            }
        }

        function getDetalleNovedadesMaquina(c_novedad, c_tipo_maquina) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_detalle_novedades_maquina/" + c_novedad + "/" + c_tipo_maquina)
                        .then(getDetalleNovedadesMaquinaComplete)
                        .catch(getDetalleNovedadesMaquinaError);

            function getDetalleNovedadesMaquinaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDetalleNovedadesMaquinaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDetalleNovedadesMaquina', error);
                return error;
            }
        }

        function updateAusenciaOperarioMaquina(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "update_ausencia_operario_maquina", JSON.stringify(request))
                .then(updateAusenciaOperarioMaquinaComplete)
                .catch(updateAusenciaOperarioMaquinaError);

            function updateAusenciaOperarioMaquinaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function updateAusenciaOperarioMaquinaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en updateAusenciaOperarioMaquina', error);
                return error;
            }
        }

        function getOpsForAnulacionGestionOperario(c_centro_operacion, cedula_operario, c_grupo_servicio, is_srv_especial) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion
                    + "get_ops_for_anulacion_gestion_operario", JSON.stringify({
                        c_centro_operacion: c_centro_operacion,
                        cedula_operario: cedula_operario,
                        c_grupo_servicio: c_grupo_servicio,
                        is_srv_especial: is_srv_especial
                    }))
                .then(getOpsForAnulacionGestionOperarioComplete)
                .catch(getOpsForAnulacionGestionOperarioError);

            function getOpsForAnulacionGestionOperarioComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOpsForAnulacionGestionOperarioError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOpsForAnulacionGestionOperario', error);
                return error;
            }
        }

        function insertCantidadProduccionEtapasByFecha(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion
                    + "insert_cantidad_produccion_etapas_by_fecha", JSON.stringify(request))
                .then(insertCantidadProduccionEtapasByFechaComplete)
                .catch(insertCantidadProduccionEtapasByFechaError);

            function insertCantidadProduccionEtapasByFechaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function insertCantidadProduccionEtapasByFechaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en insertCantidadProduccionEtapasByFecha', error);
                return error;
            }
        }

        function getDataEtapaForGestionOperario(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_data_etapa_for_gestion_operario", JSON.stringify(request))
                        .then(getDataEtapaForGestionOperarioComplete)
                        .catch(getDataEtapaForGestionOperarioError);

            function getDataEtapaForGestionOperarioComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDataEtapaForGestionOperarioError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDataEtapaForGestionOperario', error);
                return error;
            }
        }
       
        function getOpsForGestionOperario(c_centro_operacion, cedula_operario, c_grupo_servicio, is_srv_especial) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion
                    + "get_ops_for_gestion_operario", JSON.stringify({
                        c_centro_operacion: c_centro_operacion,
                        cedula_operario   : cedula_operario,
                        c_grupo_servicio  : c_grupo_servicio,
                        is_srv_especial   : is_srv_especial
                    }))
                .then(getOpsForGestionOperarioComplete)
                .catch(getOpsForGestionOperarioError);

            function getOpsForGestionOperarioComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOpsForGestionOperarioError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOpsForGestionOperario', error);
                return error;
            }
        }

        function getDiasLaboralesCoWithConfigOpExpress(c_centro_operacion, c_grupo_servicio) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_dias_laborales_co_with_config_op_express/" + c_centro_operacion + "/" + c_grupo_servicio)
                        .then(getDiasLaboralesCoWithConfigOpExpressComplete)
                        .catch(getDiasLaboralesCoWithConfigOpExpressError);

            function getDiasLaboralesCoWithConfigOpExpressComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDiasLaboralesCoWithConfigOpExpressError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDiasLaboralesCoWithConfigOpExpress', error);
                return error;
            }
        }

        function getInformacionEntregaOpCliente(cs_id_orden_produccion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_informacion_entrega_op_cliente/" + cs_id_orden_produccion)
                        .then(getInformacionEntregaOpClienteComplete)
                        .catch(getInformacionEntregaOpClienteError);

            function getInformacionEntregaOpClienteComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getInformacionEntregaOpClienteError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getInformacionEntregaOpCliente', error);
                return error;
            }
        }

        function getSaldoCantidadPiezasCortadasEntregadasCliente(cs_id_orden_produccion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_saldo_cantidad_piezas_cortadas_entregadas_cliente/" + cs_id_orden_produccion)
                        .then(getSaldoCantidadPiezasCortadasEntregadasClienteComplete)
                        .catch(getSaldoCantidadPiezasCortadasEntregadasClienteError);

            function getSaldoCantidadPiezasCortadasEntregadasClienteComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getSaldoCantidadPiezasCortadasEntregadasClienteError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getSaldoCantidadPiezasCortadasEntregadasCliente', error);
                return error;
            }
        }

        function getOrdenesEntregaCliente(c_centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_ordenes_entrega_cliente/" + c_centro_operacion)
                        .then(getOrdenesEntregaClienteComplete)
                        .catch(getOrdenesEntregaClienteError);

            function getOrdenesEntregaClienteComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOrdenesEntregaClienteError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOrdenesEntregaCliente', error);
                return error;
            }
        }

        function getMaquinasCentroOperacionForGestionEtapa(c_centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_maquinas_centro_operacion_for_gestion_etapa/" + c_centro_operacion)
                        .then(getMaquinasCentroOperacionForGestionEtapaComplete)
                        .catch(getMaquinasCentroOperacionForGestionEtapaError);

            function getMaquinasCentroOperacionForGestionEtapaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getMaquinasCentroOperacionForGestionEtapaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getMaquinasCentroOperacionForGestionEtapa', error);
                return error;
            }
        }

        function getOperariosMaquinaCo(c_centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_operarios_maquina_co/" + c_centro_operacion)
                        .then(getOperariosMaquinaCoComplete)
                        .catch(getOperariosMaquinaCoError);

            function getOperariosMaquinaCoComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOperariosMaquinaCoError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOperariosMaquinaCo', error);
                return error;
            }
        }

        function getPermisosProgramacionOpExpressByCo(c_centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_permisos_programacion_op_express_by_co/" + c_centro_operacion)
                        .then(getPermisosProgramacionOpExpressByCoComplete)
                        .catch(getPermisosProgramacionOpExpressByCoError);

            function getPermisosProgramacionOpExpressByCoComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getPermisosProgramacionOpExpressByCoError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getPermisosProgramacionOpExpressByCo', error);
                return error;
            }
        }

        function getEtapaPreviaPendienteByBarcode(barcode_etapa) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_etapa_previa_pendiente_by_barcode/" + barcode_etapa)
                        .then(getEtapaPreviaPendienteByBarcodeComplete)
                        .catch(getEtapaPreviaPendienteByBarcodeError);

            function getEtapaPreviaPendienteByBarcodeComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getEtapaPreviaPendienteByBarcodeError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getEtapaPreviaPendienteByBarcode', error);
                return error;
            }
        }

        function insertEntregaProductoCliente(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "insert_entrega_producto_cliente", JSON.stringify(request))
                        .then(insertEntregaProductoClienteComplete)
                        .catch(insertEntregaProductoClienteError);

            function insertEntregaProductoClienteComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function insertEntregaProductoClienteError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en insertEntregaProductoCliente', error);
                return error;
            }
        }

        function getReporteServiciosEspeciales(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_reporte_servicios_especiales", JSON.stringify(request))
                        .then(getReporteServiciosEspecialesComplete)
                        .catch(getReporteServiciosEspecialesError);

            function getReporteServiciosEspecialesComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getReporteServiciosEspecialesError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getReporteServiciosEspeciales', error);
                return error;
            }
        }

        function getSucursales(idUsuario, idCia) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "getSucursales/" + idUsuario + "/" + idCia)
                        .then(getSucursalesComplete)
                        .catch(getSucursalesError);

            function getSucursalesComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getSucursalesError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getSucursales', error);
                return error;
            }
        }

        function getAllIpPorPv() {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_all_ip")
                        .then(getAllIpPorPvComplete)
                        .catch(getAllIpPorPvError);

            function getAllIpPorPvComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getAllIpPorPvError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getAllIpPorPv', error);
                return error;
            }
        }

        function desprogramarOrdenProduccion(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "desprogramar_orden_produccion", JSON.stringify(request))
                .then(desprogramarOrdenProduccionComplete)
                .catch(desprogramarOrdenProduccionError);

            function desprogramarOrdenProduccionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function desprogramarOrdenProduccionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en desprogramarOrdenProduccion', error);
                return error;
            }
        }

        function getMaquinasCentroOperacionSinFuncionMaquina(c_centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_maquinas_centro_operacion_sin_funcion_maquina/" + c_centro_operacion)
                        .then(getMaquinasCentroOperacionSinFuncionMaquinaComplete)
                        .catch(getMaquinasCentroOperacionSinFuncionMaquinaError);

            function getMaquinasCentroOperacionSinFuncionMaquinaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getMaquinasCentroOperacionSinFuncionMaquinaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getMaquinasCentroOperacionSinFuncionMaquina', error);
                return error;
            }
        }

        function getReporteOrdenesProduccionMaquina(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_reporte_ordenes_produccion_maquina", JSON.stringify(request))
                        .then(getReporteOrdenesProduccionMaquinaComplete)
                        .catch(getReporteOrdenesProduccionMaquinaError);

            function getReporteOrdenesProduccionMaquinaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getReporteOrdenesProduccionMaquinaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getReporteOrdenesProduccionMaquina', error);
                return error;
            }
        }

        function getOrdenesProduccionProgramadasFiltro(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_ordenes_produccion_programadas_filtro", JSON.stringify(request))
                        .then(getOrdenesProduccionProgramadasFiltroComplete)
                        .catch(getOrdenesProduccionProgramadasFiltroError);

            function getOrdenesProduccionProgramadasFiltroComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOrdenesProduccionProgramadasFiltroError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOrdenesProduccionProgramadasFiltro', error);
                return error;
            }
        }

        function getHorasValleEtapaOp(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_horas_valle_etapa_op", JSON.stringify(request))
                        .then(getHorasValleEtapaOpComplete)
                        .catch(getHorasValleEtapaOpError);

            function getHorasValleEtapaOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getHorasValleEtapaOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getHorasValleEtapaOp', error);
                return error;
            }
        }

        function getProductosOrdenesProduccion(cs_id_orden_produccion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_productos_ordenes_produccion/" + cs_id_orden_produccion )
                        .then(getProductosOrdenesProduccionComplete)
                        .catch(getProductosOrdenesProduccionError);

            function getProductosOrdenesProduccionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getProductosOrdenesProduccionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getProductosOrdenesProduccion', error);
                return error;
            }
        }

        function getDtTipoServiciosEtapa(cs_id_orden_produccion, c_grupo_servicio) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_dt_tipo_servicios_etapa/" + cs_id_orden_produccion + "/" + c_grupo_servicio)
                        .then(getDtTipoServiciosEtapaComplete)
                        .catch(getDtTipoServiciosEtapaError);

            function getDtTipoServiciosEtapaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDtTipoServiciosEtapaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDtTipoServiciosEtapa', error);
                return error;
            }
        }

        function getDisponibilidadEspaciosTiemposMaquina(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_disponibilidad_espacios_tiempos_maquina", JSON.stringify(request))
                .then(getDisponibilidadEspaciosTiemposMaquinaComplete)
                .catch(getDisponibilidadEspaciosTiemposMaquinaError);

            function getDisponibilidadEspaciosTiemposMaquinaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDisponibilidadEspaciosTiemposMaquinaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDisponibilidadEspaciosTiemposMaquina', error);
                return error;
            }
        }

        function reasignarMaquina(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "reasignar_maquina", JSON.stringify(request))
                .then(reasignarMaquinaComplete)
                .catch(reasignarMaquinaError);

            function reasignarMaquinaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function reasignarMaquinaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en reasignarMaquina', error);
                return error;
            }
        }

        function getOrdenesProduccionAsignadasMaquina(c_centro_operacion, row_id_maquina_reemplazo) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_ordenes_produccion_asignadas_maquina/" + c_centro_operacion + "/" + row_id_maquina_reemplazo)
                        .then(getOrdenesProduccionAsignadasMaquinaComplete)
                        .catch(getOrdenesProduccionAsignadasMaquinaError);

            function getOrdenesProduccionAsignadasMaquinaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOrdenesProduccionAsignadasMaquinaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOrdenesProduccionAsignadasMaquina', error);
                return error;
            }
        }

        function getMaquinasCentroOperacionFuncion(c_centro_operacion, c_funcion_maquina, row_id_maquina_reemplazo) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_maquinas_centro_operacion_funcion/" + c_centro_operacion + "/" + c_funcion_maquina + "/" + row_id_maquina_reemplazo)
                        .then(getMaquinasCentroOperacionFuncionComplete)
                        .catch(getMaquinasCentroOperacionFuncionError);

            function getMaquinasCentroOperacionFuncionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getMaquinasCentroOperacionFuncionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getMaquinasCentroOperacionFuncion', error);
                return error;
            }
        }

        function getMaquinasCentroOperacion(c_centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_maquinas_centro_operacion/" + c_centro_operacion)
                        .then(getMaquinasCentroOperacionComplete)
                        .catch(getMaquinasCentroOperacionError);

            function getMaquinasCentroOperacionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getMaquinasCentroOperacionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getMaquinasCentroOperacion', error);
                return error;
            }
        }

        function getRetazosOrdenProduccion(cs_id_orden_produccion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_retazos_orden_produccion/" + cs_id_orden_produccion)
                        .then(getRetazosOrdenProduccionComplete)
                        .catch(getRetazosOrdenProduccionError);

            function getRetazosOrdenProduccionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getRetazosOrdenProduccionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getRetazosOrdenProduccion', error);
                return error;
            }
        }


        function getPlantillaByConectorSiesa(conectorsiesa) {
            return $http.get(configService.ApiUrls.UrlTercerosUnoeNodejs + "getPlantillaByConectorSiesa/" + conectorsiesa)
                .then(getPlantillaByConectorSiesaComplete)
                .catch(getPlantillaByConectorSiesaFailed);

            function getPlantillaByConectorSiesaComplete(response) {
                return response.data;
            }

            function getPlantillaByConectorSiesaFailed(error) {
                logger.error('XHR falló en getPlantillaByConectorSiesa', error);
                return error;
            }
        }

        function getDoctoTransferencia(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_docto_transferencia", JSON.stringify(request))
                .then(getDoctoTransferenciaComplete)
                .catch(getDoctoTransferenciaError);

            function getDoctoTransferenciaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDoctoTransferenciaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDoctoTransferencia', error);
                return error;
            }
        }

        function getOrdenesProduccionSegmentacion(c_centro_operacion, c_segmentacion_cliente) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_ordenes_produccion_segmentacion/" + c_centro_operacion + "/" + c_segmentacion_cliente)
                        .then(getOrdenesProduccionSegmentacionComplete)
                        .catch(getOrdenesProduccionSegmentacionError);

            function getOrdenesProduccionSegmentacionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOrdenesProduccionSegmentacionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOrdenesProduccionSegmentacion', error);
                return error;
            }
        }

        function getSegmentacionesCliente() {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_segmentaciones_cliente")
                        .then(getSegmentacionesClienteComplete)
                        .catch(getSegmentacionesClienteError);

            function getSegmentacionesClienteComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getSegmentacionesClienteError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getSegmentacionesCliente', error);
                return error;
            }
        }

        function updateCentroOperacionOp(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "update_centro_operacion_op", JSON.stringify(request))
                .then(updateCentroOperacionOpComplete)
                .catch(updateCentroOperacionOpError);

            function updateCentroOperacionOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function updateCentroOperacionOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en updateCentroOperacionOp', error);
                return error;
            }
        }

        function getOpAsociadasOrdenVenta(cs_id_orden, c_centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_op_asociadas_orden_venta/" + cs_id_orden + "/" + c_centro_operacion)
                        .then(getOpAsociadasOrdenVentaComplete)
                        .catch(getOpAsociadasOrdenVentaError);

            function getOpAsociadasOrdenVentaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOpAsociadasOrdenVentaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOpAsociadasOrdenVenta', error);
                return error;
            }
        }

        function getMadeservicios() {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_madeservicios")
                        .then(getMadeserviciosComplete)
                        .catch(getMadeserviciosError);

            function getMadeserviciosComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getMadeserviciosError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getMadeservicios', error);
                return error;
            }
        }

        function anularGestionEtapa(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "anular_gestion_etapa", JSON.stringify(request))
                .then(anularGestionEtapaComplete)
                .catch(anularGestionEtapaError);

            function anularGestionEtapaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function anularGestionEtapaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en anularGestionEtapa', error);
                return error;
            }
        }

        function getDataEtapaForAnulacionGestionOperario(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_data_etapa_for_anulacion_gestion_operario", JSON.stringify(request))
                        .then(getDataEtapaForAnulacionGestionOperarioComplete)
                        .catch(getDataEtapaForAnulacionGestionOperarioError);

            function getDataEtapaForAnulacionGestionOperarioComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDataEtapaForAnulacionGestionOperarioError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDataEtapaForAnulacionGestionOperario', error);
                return error;
            }
        }

        function getOperarioByMaquinaHorarioLaboral(row_id_maquina, horario_inicio_etapa) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_operario_by_maquina_horario_laboral/" + row_id_maquina + "/" + horario_inicio_etapa)
                        .then(getOperarioByMaquinaHorarioLaboralComplete)
                        .catch(getOperarioByMaquinaHorarioLaboralError);

            function getOperarioByMaquinaHorarioLaboralComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOperarioByMaquinaHorarioLaboralError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOperarioByMaquinaHorarioLaboral', error);
                return error;
            }
        }

        function getDespiecesOvForOrdenProduccion(cs_id_orden_produccion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_despieces_ov_for_orden_produccion/" + cs_id_orden_produccion)
                        .then(getDespiecesOvForOrdenProduccionComplete)
                        .catch(getDespiecesOvForOrdenProduccionError);

            function getDespiecesOvForOrdenProduccionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDespiecesOvForOrdenProduccionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDespiecesOvForOrdenProduccion', error);
                return error;
            }
        }

        function inicializarOrdenProduccion(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "inicializar_orden_produccion", JSON.stringify(request))
                .then(inicializarOrdenProduccionComplete)
                .catch(inicializarOrdenProduccionError);

            function inicializarOrdenProduccionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function inicializarOrdenProduccionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en inicializarOrdenProduccion', error);
                return error;
            }
        }

        function getDatosMaquinasAfectadasReprogramacion(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_datos_maquinas_afectadas_reprogramacion", JSON.stringify(request))
                .then(getDatosMaquinasAfectadasReprogramacionComplete)
                .catch(getDatosMaquinasAfectadasReprogramacionError);

            function getDatosMaquinasAfectadasReprogramacionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDatosMaquinasAfectadasReprogramacionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDatosMaquinasAfectadasReprogramacion', error);
                return error;
            }
        }
        
        function updateEtapasOpPendienteAsignacionGrupoServicio(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "update_etapas_op_pendiente_asignacion_grupo_servicio", JSON.stringify(request))
                .then(updateEtapasOpPendienteAsignacionGrupoServicioComplete)
                .catch(updateEtapasOpPendienteAsignacionGrupoServicioError);

            function updateEtapasOpPendienteAsignacionGrupoServicioComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function updateEtapasOpPendienteAsignacionGrupoServicioError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en updateEtapasOpPendienteAsignacionGrupoServicio', error);
                return error;
            }
        }

        function getEtapasOpPendienteAsignacionGrupoServicio(cs_id_orden_produccion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_etapas_op_pendiente_asignacion_grupo_servicio/" + cs_id_orden_produccion)
                        .then(getEtapasOpPendienteAsignacionGrupoServicioComplete)
                        .catch(getEtapasOpPendienteAsignacionGrupoServicioError);

            function getEtapasOpPendienteAsignacionGrupoServicioComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getEtapasOpPendienteAsignacionGrupoServicioError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getEtapasOpPendienteAsignacionGrupoServicio', error);
                return error;
            }
        }

        function getGruposServicios() {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_grupos_servicios" )
                        .then(getGruposServiciosComplete)
                        .catch(getGruposServiciosError);

            function getGruposServiciosComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getGruposServiciosError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getGruposServicios', error);
                return error;
            }
        }

        function anularOrdenProduccion(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "anular_orden_produccion", JSON.stringify(request))
                .then(anularOrdenProduccionComplete)
                .catch(anularOrdenProduccionError);

            function anularOrdenProduccionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function anularOrdenProduccionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en anularOrdenProduccion', error);
                return error;
            }
        }

        function updatePjElaboradoOperario(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "update_pj_elaborado_operario", JSON.stringify(request))
                .then(updatePjElaboradoOperarioComplete)
                .catch(updatePjElaboradoOperarioError);

            function updatePjElaboradoOperarioComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function updatePjElaboradoOperarioError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en updatePjElaboradoOperario', error);
                return error;
            }
        }

        function getPorcentajesOperariosEtapa(cs_id_orden_produccion, c_grupo_servicio) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_porcentajes_operarios_etapa/" + cs_id_orden_produccion + "/" + c_grupo_servicio)
                        .then(getPorcentajesOperariosEtapaByCodOpComplete)
                        .catch(getPorcentajesOperariosEtapaByCodOpError);

            function getPorcentajesOperariosEtapaByCodOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getPorcentajesOperariosEtapaByCodOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getPorcentajesOperariosEtapaByCodOp', error);
                return error;
            }
        }

        function getServiciosIncluidosOpByCodOp(c_centro_operacion_op, cs_id_orden_produccion_co) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_servicios_incluidos_op_by_cod_op/" + c_centro_operacion_op + "/" + cs_id_orden_produccion_co)
                        .then(getServiciosIncluidosOpByCodOpComplete)
                        .catch(getServiciosIncluidosOpByCodOpError);

            function getServiciosIncluidosOpByCodOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getServiciosIncluidosOpByCodOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getServiciosIncluidosOpByCodOp', error);
                return error;
            }
        }

        function getPlaneacionByOpPanelControl(cs_id_orden_produccion, c_grupo_servicio) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_planeacion_by_op_panel_control/" + cs_id_orden_produccion + "/" + c_grupo_servicio)
                        .then(getPlaneacionByOpPanelControlComplete)
                        .catch(getPlaneacionByOpPanelControlError);

            function getPlaneacionByOpPanelControlComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getPlaneacionByOpPanelControlError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getPlaneacionByOpPanelControl', error);
                return error;
            }
        }

        function insertPjElaboradoOperario(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "insert_pj_elaborado_operario", JSON.stringify(request))
                        .then(insertPjElaboradoOperarioComplete)
                        .catch(insertPjElaboradoOperarioError);

            function insertPjElaboradoOperarioComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function insertPjElaboradoOperarioError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en insertPjElaboradoOperario', error);
                return error;
            }
        }

        function getOrdenesProduccionControlFiltro(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_ordenes_produccion_control_filtro", JSON.stringify(request))
                        .then(getOrdenesProduccionControlFiltroComplete)
                        .catch(getOrdenesProduccionControlFiltroError);

            function getOrdenesProduccionControlFiltroComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOrdenesProduccionControlFiltroError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOrdenesProduccionControlFiltro', error);
                return error;
            }
        }

        function getOrdenesProduccionControl(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_ordenes_produccion_control", JSON.stringify(request))
                        .then(getOrdenesProduccionControlComplete)
                        .catch(getOrdenesProduccionControlError);

            function getOrdenesProduccionControlComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOrdenesProduccionControlError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOrdenesProduccionControl', error);
                return error;
            }
        }
        
        function getDataPickingOrdenesProduccionFiltro(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_data_picking_ordenes_produccion_filtro", JSON.stringify(request))
                .then(getDataPickingOrdenesProduccionFiltroComplete)
                .catch(getDataPickingOrdenesProduccionFiltroError);

            function getDataPickingOrdenesProduccionFiltroComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDataPickingOrdenesProduccionFiltroError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDataPickingOrdenesProduccionFiltro', error);
                return error;
            }
        }

        function forgotPassword(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlForgotPassword + "ForgotPassword", JSON.stringify(request))
                .then(forgotPasswordComplete)
                .catch(forgotPasswordError);

            function forgotPasswordComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function forgotPasswordError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en forgotPassword', error);
                return error;
            }
        }

        function insertGestionEtapaOp(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "insert_gestion_etapa_op", JSON.stringify(request))
                .then(insertGestionEtapaOpComplete)
                .catch(insertGestionEtapaOpError);

            function insertGestionEtapaOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function insertGestionEtapaOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en insertGestionEtapaOp', error);
                return error;
            }
        }

        function getDataEtapaByBarcode(barcode_etapa, cedula_operario, c_centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_data_etapa_by_barcode/" + barcode_etapa + "/" + cedula_operario + "/" + c_centro_operacion)
                        .then(getDataEtapaByBarcodeComplete)
                        .catch(getDataEtapaByBarcodeError);

            function getDataEtapaByBarcodeComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDataEtapaByBarcodeError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDataEtapaByBarcode', error);
                return error;
            }
        }
        function getDatosEmpleado(cedula) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_datos_empleado/" + cedula)
                        .then(getDatosEmpleadoComplete)
                        .catch(getDatosEmpleadoError);

            function getDatosEmpleadoComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDatosEmpleadoError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDatosEmpleado', error);
                return error;
            }
        }

        function getDataForBarcodeOp(c_centro_operacion_orden_produccion, cs_id_orden_produccion_co) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_data_for_barcode_op/" + c_centro_operacion_orden_produccion + "/" + cs_id_orden_produccion_co)
                        .then(getDataForBarcodeOpComplete)
                        .catch(getDataForBarcodeOpError);

            function getDataForBarcodeOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDataForBarcodeOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDataForBarcodeOp', error);
                return error;
            }
        }

        function getEmpleadoFiltro(filtro) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_empleado_filtro/" + filtro)
                        .then(getEmpleadoFiltroComplete)
                        .catch(getEmpleadoFiltroError);

            function getEmpleadoFiltroComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getEmpleadoFiltroError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getEmpleadoFiltro', error);
                return error;
            }
        }

        function updateDatosPickingOrdenProduccion(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "update_datos_picking_orden_produccion", JSON.stringify(request))
                .then(updateDatosPickingOrdenProduccionComplete)
                .catch(updateDatosPickingOrdenProduccionError);

            function updateDatosPickingOrdenProduccionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function updateDatosPickingOrdenProduccionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en updateDatosPickingOrdenProduccion', error);
                return error;
            }
        }

        function getDtPickingOrdenesProduccion(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_dt_picking_ordenes_produccion", JSON.stringify(request))
                        .then(getDtPickingOrdenesProduccionComplete)
                        .catch(getDtPickingOrdenesProduccionError);

            function getDtPickingOrdenesProduccionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDtPickingOrdenesProduccionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDtPickingOrdenesProduccion', error);
                return error;
            }
        }

        function getDataPickingOrdenesProduccion(c_centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_data_picking_ordenes_produccion/" + c_centro_operacion)
                        .then(getDataPickingOrdenesProduccionComplete)
                        .catch(getDataPickingOrdenesProduccionError);

            function getDataPickingOrdenesProduccionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDataPickingOrdenesProduccionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDataPickingOrdenesProduccion', error);
                return error;
            }
        }
        function getDtSolTr(cs_id_orden, item_orden) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_dt_sol_tr/" + cs_id_orden + "/" + item_orden)
                        .then(getDtSolTrComplete)
                        .catch(getDtSolTrError);

            function getDtSolTrComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDtSolTrError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDtSolTr', error);
                return error;
            }
        }

        function getDatosForServiciosIncluidosOp(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_datos_for_servicios_incluidos_op", JSON.stringify(request))
                        .then(getDatosForServiciosIncluidosOpComplete)
                        .catch(getDatosForServiciosIncluidosOpError);

            function getDatosForServiciosIncluidosOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDatosForServiciosIncluidosOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDatosForServiciosIncluidosOp', error);
                return error;
            }
        }

        function getServiciosIncluidosOp(cs_id_orden_produccion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_servicios_incluidos_op/" + cs_id_orden_produccion)
                        .then(getServiciosIncluidosOpComplete)
                        .catch(getServiciosIncluidosOpError);

            function getServiciosIncluidosOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getServiciosIncluidosOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getServiciosIncluidosOp', error);
                return error;
            }
        }

        function getMaquinasOperariosServiciosEspecialesOp(c_centro_operacion,c_grupo_servicio) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_maquinas_operarios_servicios_especiales_op/" + c_centro_operacion+"/"+c_grupo_servicio)
                        .then(getMaquinasOperariosServiciosEspecialesOpComplete)
                        .catch(getMaquinasOperariosServiciosEspecialesOpError);

            function getMaquinasOperariosServiciosEspecialesOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getMaquinasOperariosServiciosEspecialesOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getMaquinasOperariosServiciosEspecialesOp', error);
                return error;
            }
        }

        function getOrdenesProduccionProgramadas(c_centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_ordenes_produccion_programadas/" + c_centro_operacion)
                        .then(getOrdenesProduccionProgramadasComplete)
                        .catch(getOrdenesProduccionProgramadasError);

            function getOrdenesProduccionProgramadasComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOrdenesProduccionProgramadasError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOrdenesProduccionProgramadas', error);
                return error;
            }
        }

        function getPlaneacionByOp(cs_id_orden_produccion, c_grupo_servicio) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_planeacion_by_op/" + cs_id_orden_produccion + "/" + c_grupo_servicio)
                        .then(getPlaneacionByOpComplete)
                        .catch(getPlaneacionByOpError);

            function getPlaneacionByOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getPlaneacionByOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getPlaneacionByOp', error);
                return error;
            }
        }

        function getDiasLaborales(c_centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_dias_laborales/" + c_centro_operacion)
                        .then(getDiasLaboralesComplete)
                        .catch(getDiasLaboralesError);

            function getDiasLaboralesComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDiasLaboralesError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDiasLaborales', error);
                return error;
            }
        }

        function getDiasFestivos() {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_dias_festivos")
                        .then(getDiasFestivosComplete)
                        .catch(getDiasFestivosError);

            function getDiasFestivosComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDiasFestivosError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDiasFestivos', error);
                return error;
            }
        }

        function getCentrosOperacion() {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_centros_operacion" )
                        .then(getCentrosOperacionComplete)
                        .catch(getCentrosOperacionError);

            function getCentrosOperacionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getCentrosOperacionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getCentrosOperacion', error);
                return error;
            }
        }
        function getDatetimeFromServer() {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_datetime_from_server")
                        .then(getDatetimeFromServerComplete)
                        .catch(getDatetimeFromServerError);

            function getDatetimeFromServerComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDatetimeFromServerError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDatetimeFromServer', error);
                return error;
            }
        }
        function getVersionAppFromServer(id_aplicacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlCheckVersionsApp + "get_version_app_from_server/" + id_aplicacion)
                        .then(getVersionAppFromServerComplete)
                        .catch(getVersionAppFromServerError);

            function getVersionAppFromServerComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getVersionAppFromServerError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getVersionAppFromServer', error);
                return error;
            }
        }
        

        function getOrdenesProduccionOrderby(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_ordenes_produccion_orderby", JSON.stringify(request))
                        .then(getOrdenesProduccionOrderbyComplete)
                        .catch(getOrdenesProduccionOrderbyError);

            function getOrdenesProduccionOrderbyComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOrdenesProduccionOrderbyError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOrdenesProduccionOrderby', error);
                return error;
            }
        }

        function getDtSolTrTableros(cs_id_orden) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_dt_sol_tr_tableros/" + cs_id_orden)
                        .then(getDtSolTrTablerosComplete)
                        .catch(getDtSolTrTablerosError);

            function getDtSolTrTablerosComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDtSolTrTablerosError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDtSolTrTableros', error);
                return error;
            }
        }

        function getDtSolTrCantos(cs_id_orden) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_dt_sol_tr_cantos/" + cs_id_orden)
                        .then(getDtSolTrCantosComplete)
                        .catch(getDtSolTrCantosError);

            function getDtSolTrCantosComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDtSolTrCantosError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDtSolTrCantos', error);
                return error;
            }
        }

        function getContactoClienteCorporativo(cs_id_contacto_cliente_corpo) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_contacto_cliente_corporativo/" + cs_id_contacto_cliente_corpo)
                        .then(getContactoClienteCorporativoComplete)
                        .catch(getContactoClienteCorporativoError);

            function getContactoClienteCorporativoComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getContactoClienteCorporativoError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getContactoClienteCorporativo', error);
                return error;
            }
        }

        function getClienteByCedula(documento_cliente) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_cliente_by_cedula/" + documento_cliente)
                        .then(getClienteByCedulaComplete)
                        .catch(getClienteByCedulaError);

            function getClienteByCedulaComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getClienteByCedulaError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getClienteByCedula', error);
                return error;
            }
        }

        function getOrdenesProduccionFiltro(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_ordenes_produccion_filtro", JSON.stringify(request))
                        .then(getOrdenesProduccionFiltroComplete)
                        .catch(getOrdenesProduccionFiltroError);

            function getOrdenesProduccionFiltroComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOrdenesProduccionFiltroError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOrdenesProduccionFiltro', error);
                return error;
            }
        }

        function getEstadosOp() {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_estados_op" )
                        .then(getEstadosOpComplete)
                        .catch(getEstadosOpError);

            function getEstadosOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getEstadosOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getEstadosOp', error);
                return error;
            }
        }

        function getServiciosEspecialesOp(cs_id_orden_produccion_co) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_servicios_especiales_op/" + cs_id_orden_produccion_co)
                        .then(getServiciosEspecialesOpComplete)
                        .catch(getServiciosEspecialesOpError);

            function getServiciosEspecialesOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getServiciosEspecialesOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getServiciosEspecialesOp', error);
                return error;
            }
        }

        function getCargaProduccionMaquinasByCo(c_centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_carga_produccion_maquinas_by_co/" + c_centro_operacion)
                        .then(getCargaProduccionMaquinasByCoComplete)
                        .catch(getCargaProduccionMaquinasByCoError);

            function getCargaProduccionMaquinasByCoComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getCargaProduccionMaquinasByCoError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getCargaProduccionMaquinasByCo', error);
                return error;
            }
        }

        function updateHOrdenesProduccion(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "update_h_ordenes_produccion", JSON.stringify(request))
                .then(updateHOrdenesProduccionComplete)
                .catch(updateHOrdenesProduccionError);

            function updateHOrdenesProduccionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function updateHOrdenesProduccionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en updateHOrdenesProduccion', error);
                return error;
            }
        }

        function getTiposEnchapeOrdenProduccion(cs_id_orden_produccion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_tipos_enchape_orden_produccion/" + cs_id_orden_produccion)
                        .then(getTiposEnchapeOrdenProduccionComplete)
                        .catch(getTiposEnchapeOrdenProduccionError);

            function getTiposEnchapeOrdenProduccionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getTiposEnchapeOrdenProduccionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getTiposEnchapeOrdenProduccion', error);
                return error;
            }
        }

        function getIndicadorDespieceForOrdenProduccion(cs_h_indicadores_despiece) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_indicador_despiece_for_orden_produccion/" + cs_h_indicadores_despiece)
                        .then(getIndicadorDespieceForOrdenProduccionComplete)
                        .catch(getIndicadorDespieceForOrdenProduccionError);

            function getIndicadorDespieceForOrdenProduccionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getIndicadorDespieceForOrdenProduccionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getIndicadorDespieceForOrdenProduccion', error);
                return error;
            }
        }
        
        function getDtOrdenesProduccionByIdHOp(cs_id_orden_produccion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_dt_ordenes_produccion_by_id_h_op/" + cs_id_orden_produccion)
                        .then(getDtOrdenesProduccionByIdHOpComplete)
                        .catch(getDtOrdenesProduccionByIdHOpError);

            function getDtOrdenesProduccionByIdHOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getDtOrdenesProduccionByIdHOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getDtOrdenesProduccionByIdHOp', error);
                return error;
            }
        }

        function getPlaneacionesOp() {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_planeaciones_op")
                        .then(getPlaneacionesOpComplete)
                        .catch(getPlaneacionesOpError);

            function getPlaneacionesOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getPlaneacionesOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getPlaneacionesOp', error);
                return error;
            }
        }

        function getOrdenesProduccion(c_centro_operacion) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_ordenes_produccion/" + c_centro_operacion)
                        .then(getOrdenesProduccionComplete)
                        .catch(getOrdenesProduccionError);

            function getOrdenesProduccionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getOrdenesProduccionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getOrdenesProduccion', error);
                return error;
            }
        }

        function getSolicitudByToken(token) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_solicitud_by_token", JSON.stringify({ token: token }))
                        .then(getSolicitudByTokenComplete)
                        .catch(getSolicitudByTokenError);

            function getSolicitudByTokenComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getSolicitudByTokenError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getSolicitudByToken', error);
                return error;
            }
        }

        function getSolicitudesByFiltro(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "get_solicitudes_by_filtro", JSON.stringify(request))
                        .then(getSolicitudesByFiltroComplete)
                        .catch(getSolicitudesByFiltroOpError);

            function getSolicitudesByFiltroComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getSolicitudesByFiltroOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getSolicitudesByFiltro', error);
                return error;
            }
        }

        function getEstadosSolicitudAprobacionOp() {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_estados_solicitud_aprobacion_op")
                        .then(getEstadosSolicitudAprobacionOpComplete)
                        .catch(getEstadosSolicitudAprobacionOpError);

            function getEstadosSolicitudAprobacionOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getEstadosSolicitudAprobacionOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getEstadosSolicitudAprobacionOp', error);
                return error;
            }
        }

        function insertAprobacionOrdenProduccion(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "insert_aprobacion_orden_produccion", JSON.stringify(request))
                .then(insertAprobacionOrdenProduccionComplete)
                .catch(insertAprobacionOrdenProduccionError);

            function insertAprobacionOrdenProduccionComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function insertAprobacionOrdenProduccionError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en insertAprobacionOrdenProduccion', error);
                return error;
            }
        }

        function getSolicitudesPendientesAprobacionOp(id_usuario_autorizador) {
            $rootScope.progressbar.start();
            return $http.get(configService.ApiUrls.UrlGestionProduccion + "get_solicitudes_pendientes_aprobacion_op/" + id_usuario_autorizador)
                        .then(getSolicitudesPendientesAprobacionOpComplete)
                        .catch(getSolicitudesPendientesAprobacionOpError);

            function getSolicitudesPendientesAprobacionOpComplete(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getSolicitudesPendientesAprobacionOpError(error) {
                $rootScope.progressbar.reset();
                toastr.error('Error en getSolicitudesPendientesAprobacionOp', error);
                return error;
            }
        }

        function getParametrosMulti(request) {
            $rootScope.progressbar.start();
            return $http.post(configService.ApiUrls.UrlGestionProduccion + "getparametrosmulti", JSON.stringify({ 'parametros': request }))
                        .then(getParametrosMultiCompleto)
                        .catch(getParametrosMultiError);

            function getParametrosMultiCompleto(response) {
                $rootScope.progressbar.complete();
                return response.data;
            }

            function getParametrosMultiError(error) {
                $rootScope.progressbar.reset();
                console.log('Error en getParametrosMulti', error);
                return error;
            }
        }

        function getInstanciaWebApiUnoEE() {
            //return "http://localhost:1577"; solo usarlo para probar el conector de forma local
            return $rootScope.SucursalToDisplay === undefined ? "" : $rootScope.SucursalToDisplay.conector_unoe;
        }

        function getUrlConectorUnoE() {
            return configService.ApiUrls.UrlConectorUNOE + getInstanciaWebApiUnoEE() + "/api/request/";
        }

        function importarConectorUNOE2(xmlPlantilla, usuario, tipoOperacion, centroOperacion, mensajeDetalle, tiempo) {

            //console.log("importarConectorUNOE2", moment().format('HH:mm:ss'));
            return $http.post(configService.ApiUrls.UrlApiUNOEE + "ImportarUNE2",
                JSON.stringify({
                    "template": xmlPlantilla,
                    "usuario": usuario,
                    "tipoOperacion": tipoOperacion,
                    "centroOperacion": centroOperacion,
                    "mensajeDetalle": mensajeDetalle,
                    "nombreAplicacion": "POS_TR",
                    "time": tiempo == undefined ? null : tiempo,
                    "token": generarAlfaNumerico("0123456789abcdefghijkmnlopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ", 20)

                }))
                .then(importarConectorUNOEComplete)
                .catch(importarConectorUNOEFailed);

            function importarConectorUNOEComplete(response) {
                //console.log("ejecutado correcta/ el cntor 1!!", moment().format('HH:mm:ss'));
                return response.data;
            }

            function importarConectorUNOEFailed(error) {
                toastr.error('XHR falló en importarConectorUNOE', error);
                return error;
            }
        }

        /**
         * genera codigo alfanumerico
         * http://jquery-manual.blogspot.com/2013/09/generar-codigo-aleatorio-partir-de.html
         * @param  {string} chars    secuencia de caracteres que formarán parte de la creación
         * @param  {int} longitud    la cantidad de secuencia que se devolvérán
         * @return {string}          secuencia aleatoria creada
         */
        function generarAlfaNumerico(chars, longitud) {
            var code = "";
            for (var x = 0; x < longitud; x++) {
                var rand = Math.floor(Math.random() * chars.length);
                code += chars.substr(rand, 1);
            }
            return code;
        }
    }
})();

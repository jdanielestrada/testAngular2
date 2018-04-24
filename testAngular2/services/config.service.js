(function () {
    "use strict";

    angular.module('appRTA')
           .factory('configService', function ($location) {

            var protocolo = $location.protocol();
            var host      = $location.host();
            var puerto    = $location.port();

            var urlbase = protocolo + "://" + host + ":" + puerto;

            var pathApiMVC = "";
            var pathApiNode = "";

            if (host === "localhost") {
                //URL para probar local
                pathApiMVC = "http://localhost:1576";
                //NODE URL LOCAL
                pathApiNode = "http://localhost:1600";

                urlbase = "http://192.168.1.43";
            } else {
                pathApiMVC = urlbase + "/TiMeter/WebApiTickets";
                pathApiNode = urlbase + "/webapinode_pos";
            }

            //urlbase = "http://192.168.1.43";
            //pathApiMVC = urlbase + "/TiMeter/WebApiTickets";
            //pathApiNode = urlbase + "/webapinode_pos";

            var configService = {
                ApiUrls: {
                    //UrlGestionProduccion  : "http://localhost:1600/produccion/gestion_produccion/",
                    UrlGestionProduccion   : pathApiNode + "/produccion/gestion_produccion/",
                    UrlCheckVersionsApp    : pathApiNode + "/app_versions/check_versions_app/",
                    UrlNuevaOrden          : pathApiNode + "/pos/nuevaorden/",
                    UrlForgotPassword      : pathApiMVC + "/api/ForgotPassword/",
                    UrlGestionProduccionMVC: pathApiMVC + "/api/AtencionTicket/",
                    UrlPeticiones          : pathApiMVC + "/api/Peticiones/",
                    UrlTercerosUnoeNodejs  : pathApiNode + "/terceros/unoe/",
                    UrlApiUNOEE            : urlbase + "/WebApiUNOEE/api/request/",
                   
                },
                variables: {
                    Dominio: urlbase
                }
            };
            return configService;
        });
}());



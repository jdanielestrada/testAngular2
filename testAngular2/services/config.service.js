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

                urlbase = 'http://192.168.1.20';
            } else {
                
                //pathApiNode = urlbase + "/webapinode_pos";
            }

            //urlbase = "http://192.168.1.43";
            //pathApiMVC = urlbase + "/TiMeter/WebApiTickets";
            //pathApiNode = urlbase + "/webapinode_pos";

            var configService = {
                ApiUrls: {
                    
                    UrlGestionCotizaciones: pathApiNode + "/cotizaciones/gestion_cotizaciones/",
                    
                },
                variables: {
                    Dominio: urlbase
                }
            };
            return configService;
        });
}());



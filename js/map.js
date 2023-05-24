function initMap() {

    /* ### Mapa con las coordenadas ### */
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: { lat: 20.640977, lng: -87.093951 },
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map'
            ]
        },
        streetViewControl: false
    });
    /* ### Fin Mapa con las coordenadas ### */

    /* ### Estilos del mapa ### */
    var styledMapType = new google.maps.StyledMapType(
        [{
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "stylers": [{
                    "visibility": "off"
                }]
            }
        ], { name: 'Celosías Hernández' });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    /* ### Fin Estilos del mapa ### */
    /* ### Íconos en el mapa ### */
    var icon = 'img/core-img/marcador.png';

    var contentCelosia = '<div class="info-window">' +
        '<h3 class="color">Celosías Hernández</h3>' +
        '<div class="info-content">' +
        '<p class="text-dark">¡Encontraste nuestra ubicación! Ven a visitarnos</p>' +
        '</div>' +
        '</div>';

    var infowindowCelosia = new google.maps.InfoWindow({
        content: contentCelosia
    });

    var marker = new google.maps.Marker({
        position: { lat: 20.640977, lng: -87.093951 },
        map: map,
        title: 'Celosías Hernández',
        icon: icon
    });

    marker.addListener('click', function() {
        infowindowCelosia.open(map, marker);
    });
}
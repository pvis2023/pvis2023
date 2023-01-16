var map;
var popup;
var isClick = false;

window.onload = function() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhcmlzbWExMSIsImEiOiJjazM1M3dra2cwZjM0M2NwZXhmdWEybHIyIn0.ALDvfHZ6cPKoika-aEL65A';

    popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    
    map = new mapboxgl.Map({
        container: 'main-map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [126.95, 37.55],
        zoom: 10
    });

    setTimeout(makeMap, 500);
}

function makeMap() {
    map.on('load', function() {
        map.loadImage('https://pvis2023.github.io//pvis2023/assets/images/placeholder.png', function(error, image) {
            if(error) throw error;
            map.addImage('place-holder', image);
        })
    });

    var geojson = {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    };

    geojson.data.features.push({
        type:'Feature',
        geometry: {
            type:'Point',
            coordinates: [126.9864882, 37.5692044]
        },
        properties: {
            name: '양연화로',
            type: 'Pork Belly',
            image: 'place-holder'
        }
    });

    map.addSource('test', geojson);
    map.addLayer({
        id: 'test',
        type: 'symbol',
        source: 'test',
        layout: {
            'icon-image': '{image}',
            'icon-size': .05,
            'icon-allow-overlap': true
        }
    });

    mouseHoverNode();
}

function mouseHoverNode() {
    var layer = 'test';

    /*map.on('mouseenter', layer, function(e) {
        map.getCanvas().style.cursor = 'pointer';

        var coordinates = e.features[0].geometry.coordinates.slice();
        var name = e.features[0].properties.name;
        var type = e.features[0].properties.type;
        var description = `<b>${name}</b><br>${type}`;

        while(Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360: -360;
        }

        popup
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
    });

    map.on('mouseleave', layer, function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    })*/

    map.on('click', layer, function() {
        if(!isClick) {
            map.getCanvas().style.cursor = 'pointer';

            var coordinates = e.features[0].geometry.coordinates.slice();
            var name = e.features[0].properties.name;
            var type = e.features[0].properties.type;
            var description = `<b>${name}</b><br>${type}`;

            while(Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360: -360;
            }

            popup
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
        }

        else {
            map.getCanvas().style.cursor = '';
            popup.remove();
        }
    })
}
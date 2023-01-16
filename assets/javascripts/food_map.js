window.onload = function() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhcmlzbWExMSIsImEiOiJjazM1M3dra2cwZjM0M2NwZXhmdWEybHIyIn0.ALDvfHZ6cPKoika-aEL65A';
    
    const map = new mapboxgl.Map({
        container: 'main-map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [126.95, 37.55],
        zoom: 10
    });

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
            image: 'place-holder'
        }
    });

    map.addSource('test', geojson);
    map.addLayer({
        id: 'test',
        type: 'symbol',
        source: 'test',
        layout: {
            'icon-image': '{image}'
        }
    });
}

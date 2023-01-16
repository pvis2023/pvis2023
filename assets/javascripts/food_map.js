var map;
var popup;

window.onload = function() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhcmlzbWExMSIsImEiOiJjazM1M3dra2cwZjM0M2NwZXhmdWEybHIyIn0.ALDvfHZ6cPKoika-aEL65A';

    popup = new mapboxgl.Popup();
    
    map = new mapboxgl.Map({
        container: 'main-map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [126.95, 37.55],
        zoom: 12
    });

    console.log(Mobile());
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
            image: 'place-holder',
            img: 'food_1'
        }
    });

    geojson.data.features.push({
        type:'Feature',
        geometry: {
            type:'Point',
            coordinates: [126.9838844, 37.5727213]
        },
        properties: {
            name: '이문설렁탕',
            type: 'Soup',
            image: 'place-holder',
            img: 'food_2'
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

    /*map.on('click', function(e) {
        map.getCanvas().style.cursor = '';
        popup.remove();
    })*/

    map.on('click', layer, function(e) {
        map.getCanvas().style.cursor = 'pointer';

        var coordinates = e.features[0].geometry.coordinates.slice();
        var name = e.features[0].properties.name;
        var type = e.features[0].properties.type;
        var img = e.features[0].properties.img;
        var description = `
            <h2>${name}</h2>
            <div style='width:100%; margin: 0 auto;">
                <img src="https://pvis2023.github.io//pvis2023/assets/images/foods/${img}_1.jpg" style="float:left;margin-right:10px;">
            </div>
        `;
        console.log(description);

        while(Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360: -360;
        }

        popup
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });
}

function Mobile() {return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}

var main_map;
var popup;

var travel_data = [
    {
        'header': 'Accommodations',
        'link': '/pvis2023/pages/travels/hotels',
        'date_link': '2023-01-14',
        'date_text': 'January 14, 2023',
        'content': `
            <p> 
                Introducing accommodations near Jonggak Station in Seoul. 
            </p>
        `
    },
    {
        'header': 'Restaurants',
        'link': '/pvis2023/pages/travels/foods',
        'date_link': '2023-01-14',
        'date_text': 'January 14, 2023',
        'content': `
            <p> 
                Introducing restaurants near Jonggak Station in Seoul. 
            </p>
        `
    },
    {
        'header': 'Tourist Attractions',
        'link': '/pvis2023/pages/travels/tours',
        'date_link': '2023-01-14',
        'date_text': 'January 14, 2023',
        'content': `
            <p> 
                Introducing tourist attractions near Jonggak Station in Seoul.
            </p>
        `
    }
];

window.addEventListener('load', function() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhcmlzbWExMSIsImEiOiJjazM1M3dra2cwZjM0M2NwZXhmdWEybHIyIn0.ALDvfHZ6cPKoika-aEL65A';

    popup = new mapboxgl.Popup();
    
    main_map = new mapboxgl.Map({
        container: 'main-map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [126.987, 37.569],
        zoom: 13.5
    });

    main_map.addControl(new mapboxgl.NavigationControl());

    makeMap();
    generate_travel_content();
});

function generate_travel_content() {
    var elem = document.getElementsByClassName('entries-grid')[0];

    var htmls = ``;
    for(var data of travel_data) {
        htmls += `
        <article class="entry">
            <header class="entry-header">
                <h3 class="entry-title">
                    <a href="${data['link']}" rel="bookmark">${data['header']}</a>
                </h3>
            </header>
            <footer class="entry-meta">
                <ul>
                    <li>
                        <span class="icon icon-calendar"></span>
                        <time class="entry-time" datetime="${data['date_link']}T00:00:00+00:00">${data['date_text']}</time>
                    </li>
                </ul>
            </footer>
            <div class="entry-excerpt">
                ${data['content']}
                <p>
                    <a href="${data['link']}" class="more-link">
                        Read More
                        <span class="icon icon--arrow-right"></span>
                    </a>
                </p>
            </div>
        </article>
        `;
    }

    elem.innerHTML = htmls;
}

function makeMap() {
    main_map.on('load', function() {
        var icon_size;
        if(Mobile()) { icon_size = .08; }
        else { icon_size = .12; }

        main_map.loadImage('/pvis2023/assets/images/maps/tour.png', function(error, image) {
            if(error) throw error;
            main_map.addImage('tour', image);

            var geojson = {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: []
                }
            };

            for(var i=0;i<tour_data.length;i++) {
                var data = tour_data[i];

                geojson.data.features.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [data['x'], data['y']]
                    },
                    properties: {
                        name: data['name'],
                        idx: data['idx'],
                        type: data['type'],
                        address: data['address'],
                        map: data['map'],
                        distance: data['distance'],
                        image: 'tour'
                    }
                });
            }

            main_map.addSource('tour', geojson);
            main_map.addLayer({
                id: 'tour',
                type: 'symbol',
                source: 'tour',
                layout: {
                    'icon-image': '{image}',
                    'icon-size': icon_size,
                    'icon-allow-overlap': true
                }
            });
        });

        main_map.loadImage('/pvis2023/assets/images/maps/restaurant.png', function(error, image) {
            if(error) throw error;
            main_map.addImage('food', image);

            var geojson = {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: []
                }
            };

            for(var i=0;i<food_data.length;i++) {
                var data = food_data[i];

                geojson.data.features.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [data['x'], data['y']]
                    },
                    properties: {
                        name: data['name'],
                        idx: data['idx'],
                        menu: data['menu'],
                        address: data['address'],
                        map: data['map'],
                        distance: data['distance'],
                        price: data['price'],
                        image: 'food'
                    }
                });
            }

            main_map.addSource('food', geojson);
            main_map.addLayer({
                id: 'food',
                type: 'symbol',
                source: 'food',
                layout: {
                    'icon-image': '{image}',
                    'icon-size': icon_size,
                    'icon-allow-overlap': true
                }
            });
        });

        main_map.loadImage('/pvis2023/assets/images/maps/conference.png', function(error, image) {
            if(error) throw error;
            main_map.addImage('conference', image);

            var geojson = {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: []
                }
            };

            for(var i=0;i<conf_data.length;i++) {
                var data = conf_data[i];

                geojson.data.features.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [data['x'], data['y']]
                    },
                    properties: {
                        image: 'conference'
                    }
                });
            }

            main_map.addSource('conference', geojson);
            main_map.addLayer({
                id: 'conference',
                type: 'symbol',
                source: 'conference',
                layout: {
                    'icon-image': '{image}',
                    'icon-size': icon_size,
                    'icon-allow-overlap': true
                }
            });
        });

        main_map.loadImage('/pvis2023/assets/images/maps/5_star.png', function(error, image) {
            if(error) throw error;
            main_map.addImage('5_star', image);
        });

        main_map.loadImage('/pvis2023/assets/images/maps/4_star.png', function(error, image) {
            if(error) throw error;
            main_map.addImage('4_star', image);
        });

        main_map.loadImage('/pvis2023/assets/images/maps/3_star.png', function(error, image) {
            if(error) throw error;
            main_map.addImage('3_star', image);
        });
    
        var geojson = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: []
            }
        };
    
        for(var i=0;i<hotel_data.length;i++) {
            var data = hotel_data[i];
    
            var images;
            if(data['star'] == '★★★★★') {
                images = '5_star';
            } else if(data['star'] == '★★★★') {
                images = '4_star';
            } else {
                images = '3_star';
            }
    
            geojson.data.features.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [data['x'], data['y']]
                },
                properties: {
                    name: data['name'],
                    star: data['star'],
                    idx: data['idx'],
                    address: data['address'],
                    map: data['map'],
                    distance: data['distance'],
                    price: data['price'],
                    image: images
                }
            });
        }
    
        main_map.addSource('accomodation', geojson);
        main_map.addLayer({
            id: 'accomodation',
            type: 'symbol',
            source: 'accomodation',
            layout: {
                'icon-image': '{image}',
                'icon-size': icon_size,
                'icon-allow-overlap': true
            }
        });
    
        mouseHoverNode();
    });
}

function mouseHoverNode() {
    main_map.on('click', ['food', 'tour', 'accomodation'], function(e) {
        main_map.getCanvas().style.cursor = 'pointer';

        var coordinates = e.features[0].geometry.coordinates.slice();
        var name = e.features[0].properties.name;
        var menu = e.features[0].properties.menu;
        var idx = e.features[0].properties.idx;
        var address = e.features[0].properties.address;
        var map = e.features[0].properties.map;
        var distance = e.features[0].properties.distance;
        var price = e.features[0].properties.price;
        var type = e.features[0].properties.type;
        var star = e.features[0].properties.star;

        var layer = e.features[0].layer.id;
        var description;

        if(layer == 'food') {
            description = `
                <h4>${name}</h2>
                <div style="width:100%; margin: 0 auto;">
                    <img src="https://pvis2023.github.io//pvis2023/assets/images/foods/food_${idx}_1.jpg" class="mapimg1">
                    <img src="https://pvis2023.github.io//pvis2023/assets/images/foods/food_${idx}_2.jpg" class="mapimg2">
                </div>
                <br>
                <div style="float:none;">
                    <table>
                        <tbody class="maptable">
                            <tr>
                                <td><b>Menu</b></td>
                                <td>${menu}</td>
                            </tr>
                            <tr>
                                <td><b>Address</b></td>
                                <td>${address}</td>
                            </tr>
                            <tr>
                                <td><b>How to go?</b></td>
                                <td><a href=${map}>Google Map</a></td>
                            </tr>
                            <tr>
                                <td><b>Distance</b></td>
                                <td>${distance}</td>
                            </tr>
                            <tr>
                                <td><b>Price</b></td>
                                <td>${price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        }
        else if(layer == 'accomodation') {
            description = `
                <h4>${name}</h2>
                <div style="width:100%; margin: 0 auto;">
                    <img src="https://pvis2023.github.io//pvis2023/assets/images/hotels/hotel_${idx}_1.jpg" class="mapimg1">
                    <img src="https://pvis2023.github.io//pvis2023/assets/images/hotels/hotel_${idx}_2.jpg" class="mapimg2">
                </div>
                <br>
                <div style="float:none;">
                    <table>
                        <tbody class="maptable">
                            <tr>
                                <td><b>Star</b></td>
                                <td>${star}</td>
                            </tr>
                            <tr>
                                <td><b>Address</b></td>
                                <td>${address}</td>
                            </tr>
                            <tr>
                                <td><b>How to go?</b></td>
                                <td><a href=${map}>Google Map</a></td>
                            </tr>
                            <tr>
                                <td><b>Distance</b></td>
                                <td>${distance}</td>
                            </tr>
                            <tr>
                                <td><b>Price</b></td>
                                <td>${price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        }

        else {
            description = `
                <h4>${name}</h2>
                <div style="width:100%; margin: 0 auto;">
                    <img src="https://pvis2023.github.io//pvis2023/assets/images/tours/tour_${idx}_1.jpg" class="mapimg1">
                    <img src="https://pvis2023.github.io//pvis2023/assets/images/tours/tour_${idx}_2.jpg" class="mapimg2">
                </div>
                <br>
                <div style="float:none;">
                    <table>
                        <tbody class="maptable">
                            <tr>
                                <td><b>Type</b></td>
                                <td>${type}</td>
                            </tr>
                            <tr>
                                <td><b>Address</b></td>
                                <td>${address}</td>
                            </tr>
                            <tr>
                                <td><b>How to go?</b></td>
                                <td><a href=${map}>Google Map</a></td>
                            </tr>
                            <tr>
                                <td><b>Distance</b></td>
                                <td>${distance}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        }

        while(Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360: -360;
        }

        popup
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(main_map);
    });
}

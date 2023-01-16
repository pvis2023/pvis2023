var main_map;
var popup;

var food_data = [
    {
        'name':'Yangyeon Hwaro (양연화로)',
        'idx':'1',
        'x':126.9864882,
        'y':37.5692044,
        'menu':'Pork Belly',
        'address':'18, Samil-daero 17-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%A2%85%EB%A1%9C%EA%B5%AC+%EA%B4%80%EC%B2%A0%EB%8F%99+%EC%82%BC%EC%9D%BC%EB%8C%80%EB%A1%9C17%EA%B8%B8+%EC%96%91%EC%97%B0%ED%99%94%EB%A1%9C+%EC%A2%85%EB%A1%9C%EC%A7%81%EC%98%81%EC%A0%90/data=!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e620495f65:0x7a07d74e60a03319!2m2!1d126.9864882!2d37.5692044!3e3?hl=en',
        'distance':'Walk: 5min',
        'price':'15,000 won'
    },
    {
        'name':'Imun Seolnongtang (이문 설렁탕)',
        'idx':'2',
        'x':126.9839377,
        'y':37.5726592,
        'menu':'Sullungtang (Soup)',
        'address':'38-13, Ujeongguk-ro, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jongno-gu,+Ujeongguk-ro,+%EC%9D%B4%EB%AC%B8%EC%84%A4%EB%86%8D%ED%83%95/data=!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e8338e4637:0xedad10537399c4f7!2m2!1d126.9839377!2d37.5726592!3e3?hl=en',
        'distance':'Walk: 15min',
        'price':'20,000 won'
    },
    {
        'name':'Daeryeon-Jip (대련집)',
        'idx':'3',
        'x':126.988871,
        'y':37.5683648,
        'menu':'Kalguksu (Noodle soup), Bossam (Boiled Pork)',
        'address':'37, Jong-ro 16-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jongno-gu,+Gwansu-dong,+%EB%8C%80%EB%A0%A8%EC%A7%91/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e65f645309:0xdca7fc1f03706d63!2m2!1d126.988871!2d37.5683648!3e3?hl=en',
        'distance':'Walk: 10min',
        'price':'8,000 ~ 29,000 won'
    },
    {
        'name':'Cheongwaok (청와옥)',
        'idx':'4',
        'x':126.9900341,
        'y':37.565982,
        'menu':'Sundae Soup',
        'address':'110, Eulji-ro, Jung-gu, Seoul, Republic of Korea',
        'map':'http://google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jung-gu,+Eulji-ro,+%EC%B2%AD%EC%99%80%EC%98%A5+%EC%9D%84%EC%A7%80%EB%A1%9C3%EA%B0%80%EC%A7%81%EC%98%81%EC%A0%90/data=!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e14fc527a5:0xcfd915e715b92022!2m2!1d126.9900341!2d37.565982!3e3?hl=en',
        'distance':'Walk: 20min',
        'price':'9,000 won'
    },
    {
        'name':'Euljiro-Meeting Room (을지로 미팅룸)',
        'idx':'5',
        'x':126.9910392,
        'y':37.565358,
        'menu':'Fusion Western Food',
        'address':'19, Eulji-ro 12-gil, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jung-gu,+Euljiro+3(sam)-ga,+Eulji-ro+12-gil,+%EC%9D%84%EC%A7%80%EB%A1%9C%EB%AF%B8%ED%8C%85%EB%A3%B8/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e412a0fbcd:0x292a7d451ea5af85!2m2!1d126.9910392!2d37.565358!3e3?hl=en',
        'distance':'Walk: 25min',
        'price':'20,000 won'
    },
    {
        'name':'Baekbujangjip-Dalkhanmari (백부장집 닭한마리)',
        'idx':'6',
        'x':126.9824387,
        'y':37.571689,
        'menu':'Samgyetang (Chicken Soup)',
        'address':'100-1, Sambong-ro, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jongno-gu,+Gongpyeong-dong,+Jong-ro+7-gil,+%EB%B0%B1%EB%B6%80%EC%9E%A5%EC%A7%91+%EB%8B%AD%ED%95%9C%EB%A7%88%EB%A6%AC+%EB%B3%84%EA%B4%80/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca3c503daf1dd:0x776f530a11fc2c1c!2m2!1d126.9824387!2d37.571689!3e3?hl=en',
        'distance':'Walk: 20min',
        'price':'24,000 won'
    },
    {
        'name':'Janggun-Gulbossam (장군 굴보쌈)',
        'idx':'7',
        'x':126.9907493,
        'y':37.5699048,
        'menu':'Bossam (Boiled Pork)',
        'address':'22, Supyo-ro 20-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+%EC%A2%85%EB%A1%9C3%EA%B0%80+%EC%9E%A5%EA%B5%B0%EA%B5%B4%EB%B3%B4%EC%8C%88/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e74762efbf:0xa52dae39542a5e5f!2m2!1d126.9907493!2d37.5699048!3e3?hl=en',
        'distance':'Walk: 15min',
        'price':'29,000 ~ 45,000 won'
    },
    {
        'name':'Myeongdong Kyoja (명동 교자)',
        'idx':'8',
        'x':126.985609,
        'y':37.5625266,
        'menu':'Noodle, Dumpling',
        'address':'29, Myeongdong 10-gil, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jung-gu,+Myeongdong+10-gil,+%EB%AA%85%EB%8F%99%EA%B5%90%EC%9E%90+%EB%B3%B8%EC%A0%90/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2f00d41b15b:0x7d50d5b6b0623a1d!2m2!1d126.985609!2d37.5625266!3e3?hl=en',
        'distance':'Walk: 25min',
        'price':'10,000 won'
    },
    {
        'name':'Earthen Pot (뚝배기집)',
        'idx':'9',
        'x':126.9884726,
        'y':37.5695341,
        'menu':'Stew',
        'address':'12, Jong-ro 16-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jongno-gu,+Jong-ro+16-gil,+%EB%9A%9D%EB%B0%B0%EA%B8%B0%EC%A7%91/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e652d313cd:0x79dfc0fca409e363!2m2!1d126.9884726!2d37.5695341!3e3?hl=en',
        'distance':'Walk: 10min',
        'price':'7,000 won'
    },
    {
        'name':'Seafood Restaurant 1978 (해물점 1978)',
        'idx':'11',
        'x':126.9846443,
        'y':37.5687777,
        'menu':'Seafood',
        'address':'63-1, Cheonggyecheon-ro, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Haemuljeom+1978,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca3e22e62ad75:0x8203c79476e36cce!2m2!1d126.9846443!2d37.5687777!3e3?hl=en',
        'distance':'Walk: 10min',
        'price':'30,000 won'
    },
    {
        'name':'Jaengban-Jip 8292 (쟁반집 8292)',
        'idx':'12',
        'x':126.9841135,
        'y':37.5691831,
        'menu':'Meat',
        'address':'17, Jong-ro 8-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jongno-gu,+Jong-ro+8-gil,+%EC%9F%81%EB%B0%98%EC%A7%918292+%EC%A2%85%EB%A1%9C%EC%A0%90/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca33edf7466b7:0x9aa78714d9d102!2m2!1d126.9841135!2d37.5691831!3e3?hl=en',
        'distance':'Walk: 10min',
        'price':'43,000 won'
    },
    {
        'name':'Matchandeul-Wangsogeumgui (맛찬들왕소금구이)',
        'idx':'13',
        'x':126.9854441,
        'y':37.5690969,
        'menu':'Pork',
        'address':'35, Samil-daero 17-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jongno-gu,+Samil-daero+17-gil,+%EB%A7%9B%EC%B0%AC%EB%93%A4%EC%99%95%EC%86%8C%EA%B8%88%EA%B5%AC%EC%9D%B4+%EC%A2%85%EB%A1%9C%EC%A0%90/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e8bbb495bd:0x7f0beed72db39996!2m2!1d126.9854441!2d37.5690969!3e3?hl=en',
        'distance':'Walk: 10min',
        'price':'17,000 won'
    },
    {
        'name':'Wangbi-Jip (왕비집)',
        'idx':'14',
        'x':126.9864333,
        'y':37.5615613,
        'menu':'Rib',
        'address':'24, Samil-daero 15-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'http://google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jung-gu,+Myeongdong+8ga-gil,+%EC%99%95%EB%B9%84%EC%A7%91+%EB%AA%85%EB%8F%99%EB%B3%B8%EC%A0%90+(Wangbijib+Myeongdong+Main+store)/data=!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2fa83250987:0x24dbed09d0e63240!2m2!1d126.9864333!2d37.5615613!3e3?hl=en',
        'distance':'Walk: 10min',
        'price':'42,000 ~ 45,000 won'
    }
];

window.onload = function() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhcmlzbWExMSIsImEiOiJjazM1M3dra2cwZjM0M2NwZXhmdWEybHIyIn0.ALDvfHZ6cPKoika-aEL65A';

    popup = new mapboxgl.Popup();
    
    main_map = new mapboxgl.Map({
        container: 'main-map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [126.95, 37.55],
        zoom: 12
    });

    setTimeout(makeMap, 500);
}

function makeMap() {
    main_map.on('load', function() {
        main_map.loadImage('https://pvis2023.github.io//pvis2023/assets/images/placeholder.png', function(error, image) {
            if(error) throw error;
            main_map.addImage('place-holder', image);
        })
    });

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
            type:'Feature',
            geometry:{
                type:'Point',
                coordinates: [data['x'], data['y']]
            },
            properties: {
                name: data['name'],
                menu: data['menu'],
                idx: data['idx'],
                address: data['address'],
                map: data['map'],
                distance: data['distance'],
                price: data['price'],
                image: 'place-holder'
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
            'icon-size': .05,
            'icon-allow-overlap': true
        }
    });

    var geojson2 = {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    };

    geojson2.data.features.push({
        type:'Feature',
        geometry:{
            type:'Point',
            coordinates: [126.9871527, 37.5686145]
        },
        properties: {
            image: 'conference'
        }
    });

    main_map.addSource('conference', geojson);
    main_map.addLayer({
        id: 'conference',
        type: 'symbol',
        source: 'conference',
        layout: {
            'icon-image': '{image}',
            'icon-size': .05,
            'icon-allow-overlap': true
        }
    });

    setTimeout(mouseHoverNode, 500);
    //mouseHoverNode();
}

function mouseHoverNode() {
    var layer = 'food';

    main_map.on('click', layer, function(e) {
        main_map.getCanvas().style.cursor = 'pointer';

        var coordinates = e.features[0].geometry.coordinates.slice();
        var name = e.features[0].properties.name;
        var menu = e.features[0].properties.menu;
        var idx = e.features[0].properties.idx;
        var address = e.features[0].properties.address;
        var map = e.features[0].properties.map;
        var distance = e.features[0].properties.distance;
        var price = e.features[0].properties.price;

        var description = `
            <h4>${name}</h2>
            <div style="width:100%; margin: 0 auto;">
                <img src="https://pvis2023.github.io//pvis2023/assets/images/foods/food_${idx}_1.jpg" style="float:left;margin-right:10px;width:180px; height:180px;">
                <img src="https://pvis2023.github.io//pvis2023/assets/images/foods/food_${idx}_2.jpg" style="float:left;width:180px; height:180px;">
            </div>
            <br>
            <div style="float:none;">
                <table>
                    <tbody>
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
        console.log(description);

        while(Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360: -360;
        }

        popup
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(main_map);
    });
}

function Mobile() {return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}

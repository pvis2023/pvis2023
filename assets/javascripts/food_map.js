$(document).ready(function() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhcmlzbWExMSIsImEiOiJjazM1M3dra2cwZjM0M2NwZXhmdWEybHIyIn0.ALDvfHZ6cPKoika-aEL65A';
    
    var map = new mapboxgl.Map({
        container: 'main-map',
        style: 'mapbox://styles/kharisma11/ck9m5mk1b0ps11io8iets480d',
        center: [126.6548550, 37.3839120],
        zoom: 12.6
    });
})
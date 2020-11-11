mapboxgl.accessToken = 'token';


function success(pos){
    const coords = [pos.coords.longitude ,pos.coords.latitude];
    mapInit(coords);
}

function error(err){
    mapInit([72.877426, 19.076090])
}

navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
})


function mapInit(coords){
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: coords,
    zoom: 15,
    });
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }),
        'top-left'
        );

}

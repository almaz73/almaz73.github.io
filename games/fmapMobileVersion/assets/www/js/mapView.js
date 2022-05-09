var E=E||{};

function initMap(){


    E.GETArr ={city: "kazan", coordinates: "55.78507,49.12"};

    var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png',
        cloudmadeUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18}),
        map = new L.Map('map', {layers: [cloudmade], center: new L.LatLng(+E.GETArr.coordinates.split(",")[0], +E.GETArr.coordinates.split(",")[1]), zoom: 12 });
    linesLayerGroup = new L.LayerGroup();
    vertexLayerGroup = new L.LayerGroup();
    vertexBig = new L.LayerGroup();
    busStopLayerGroup = new L.LayerGroup();
    map.addLayer(vertexLayerGroup);
    map.addLayer(vertexBig);
    map.addLayer(linesLayerGroup);
    map.addLayer(busStopLayerGroup);
    E.map=map;
}






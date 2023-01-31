var mapCase = L.map('map-case').setView([50.073658, 14.418540], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapCase);

var greenIcon = new L.Icon({
  iconUrl: 'images/map-marker-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [41, 41],
  iconAnchor: [20, 41],
  popupAnchor: [1, -41],
  shadowSize: [41, 41]
});

var greyIcon = new L.Icon({
  iconUrl: 'images/map-marker-grey.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [1, -25],
  shadowSize: [41, 25]
});

// var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'});
// var greyIcon = new LeafIcon({iconUrl: 'leaf-grey.png'});

var marker = L.marker([52.5200, 13.4050], {icon: greenIcon}).addTo(mapCase).bindPopup("SITE 1"); // site1
var marker = L.marker([49.1951, 16.6068], {icon: greyIcon}).addTo(mapCase).bindPopup("SITE 2"); // site2

var border = { "type": "Feature", "properties": { "NAME": "KLATOVY" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 13.28394, 49.39119 ], [ 13.28178, 49.39256 ], [ 13.27894, 49.39225 ], [ 13.27492, 49.39847 ], [ 13.27136, 49.39906 ], [ 13.26764, 49.39967 ], [ 13.266, 49.39994 ], [ 13.26569, 49.40189 ], [ 13.26564, 49.40225 ], [ 13.27542, 49.41175 ], [ 13.27664, 49.41536 ], [ 13.27931, 49.41428 ], [ 13.27806, 49.40564 ], [ 13.27994, 49.40414 ], [ 13.28375, 49.40619 ], [ 13.2865, 49.40675 ], [ 13.29558, 49.40858 ], [ 13.29606, 49.40867 ], [ 13.29831, 49.40483 ], [ 13.30675, 49.4002 ], [ 13.30706, 49.39742 ], [ 13.30403, 49.39578 ], [ 13.30525, 49.38972 ], [ 13.30092, 49.38694 ], [ 13.29894, 49.38567 ], [ 13.29881, 49.38558 ], [ 13.29675, 49.38428 ], [ 13.29747, 49.38297 ], [ 13.30119, 49.37619 ], [ 13.30025, 49.37442 ], [ 13.29969, 49.37439 ], [ 13.29669, 49.37417 ], [ 13.29469, 49.37981 ], [ 13.28989, 49.38055 ], [ 13.28778, 49.38528 ], [ 13.29006, 49.38653 ], [ 13.28822, 49.38847 ], [ 13.28394, 49.39119 ] ] ] } }


function getColor(d) {
    if (d == 'KLATOVY') {
      return '#800026';
    } else { return '#FFEDA0';}
}
function style(feature) {
    return {
        fillColor: getColor(feature.properties.NAME),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(border, {style: style}).addTo(mapCase);

var imageUrl = 'images/case/mcda-map4.png';
var errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/110/110686.png';
var altText = 'MCDA result';
var latLngBounds = L.latLngBounds([[50.1881128, 14.2137163], [49.912771, 14.7392248]]);


var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
    opacity: 0.5,
    errorOverlayUrl: errorOverlayUrl,
    alt: altText,
    interactive: false
}).addTo(mapCase);

var mapCase = L.map('map-case').setView([50.054658, 14.458540], 11);

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

var marker = L.marker([50.030294,14.440091], {icon: greenIcon}).addTo(mapCase).bindPopup("Address: U Krčkého nádraží, 140 00 Praha 4, Czechia"); // site1



var imageUrl = 'images/case/mcda-map.png';
var errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/110/110686.png';
var altText = 'MCDA result';
var latLngBounds = L.latLngBounds([[50.1881128, 14.2137163], [49.912771, 14.7392248]]);


var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
    opacity: 1,
    errorOverlayUrl: errorOverlayUrl,
    alt: altText,
    interactive: false
}).addTo(mapCase);

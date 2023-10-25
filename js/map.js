
var map = L.map('map').setView([55.1604, 14.8669], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

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

var blackIcon = new L.Icon({
  iconUrl: 'images/map-marker-black.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [1, -25],
  shadowSize: [41, 25]
});

// var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'});
// var greyIcon = new LeafIcon({iconUrl: 'leaf-grey.png'});

var marker = L.marker([52.5200, 13.4050], {icon: greenIcon}).addTo(map).bindPopup("I live here. I love it here."); // Berlin
var marker = L.marker([48.3652, 10.8960], {icon: blackIcon}).addTo(map).bindPopup("I am working here (remotely) as a geospatial specialist in a data enginnering team at credium."); // Augsburg
var marker = L.marker([49.1951, 16.6068], {icon: greyIcon}).addTo(map).bindPopup("I used to work here (remotely) as a junior programmer at SAFE TREES."); // Brno
var marker = L.marker([60.6749, 17.1413], {icon: greyIcon}).addTo(map).bindPopup("I have lived here for a year during my Erasmus."); // Gävle
var marker = L.marker([50.0755, 14.4378], {icon: greyIcon}).addTo(map).bindPopup("I have lived, earned my Bachelor's and Master's degree, and worked here as telecom/geospatial engineer at YUNGO."); // Prague
var marker = L.marker([49.4130, 14.6775], {icon: greyIcon}).addTo(map).bindPopup("I studied here at the technical high school"); // Tabor
var marker = L.marker([49.4509, 14.3600], {icon: greyIcon}).addTo(map).bindPopup("I was born here."); // Milevsko


var latlngs = [
    [49.4509, 14.3600],
    [49.4130, 14.6775],
    [50.0755, 14.4378],
    [60.6749, 17.1413],
];
var polyline = L.polyline(latlngs, {color: 'grey', dashArray: '1, 5', dashOffset: '40', opacity: 0.4}).addTo(map);

var latlngs = [
    [50.0755, 14.4378],
    [49.1951, 16.6068],
    [52.5200, 13.4050],
    [50.0755, 14.4378],
];
var polyline = L.polyline(latlngs, {color: 'grey', dashArray: '1, 5', dashOffset: '40', opacity: 0.4}).addTo(map);

var latlngs = [
    [52.5200, 13.4050],
    [48.3652, 10.8960],
];
var polyline = L.polyline(latlngs, {color: 'grey', dashArray: '1, 5', dashOffset: '40', opacity: 0.4}).addTo(map);

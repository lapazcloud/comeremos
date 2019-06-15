var mymap = L.map('map').setView([-16.504896, -68.130038], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoieWFtaWx1cmJpbmEiLCJhIjoiY2p3d3I3Nmw3MGtqeTRicGY2YWhoZzZhNiJ9.POxLxW1dfss0z1zzvyj2AA'
}).addTo(mymap);

var circle = L.circle([-16.504896, -68.130038], {
    color: '#DE643D',
    fillColor: '#DE643D',
    fillOpacity: 0.5,
    radius: 50
}).addTo(mymap);

fetch('https://api.foursquare.com/v2/venues/explore?client_id=OWFZVHVJEKKGWMV2QZBWDTYQAJ0TDDDK3LD2FOFVCRWJ5GX0&client_secret=OLURNLSRIUGMDNJWDT4P1U4PC4LUC1X4OOXENVCQ5JJLRWDE&v=20180323&ll=-16.504896,-68.130038&query=restaurant')
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        json.response.groups[0].items.forEach(function(venue) {
        L.marker([venue.venue.location.lat, venue.venue.location.lng])
        .addTo(mymap)
        .bindPopup("<h2 class='title'>" + venue.venue.name + "</h2><p class='subtitle'>" + venue.venue.categories[0].shortName + "</p>");
    });
})
    .catch(function() {
});


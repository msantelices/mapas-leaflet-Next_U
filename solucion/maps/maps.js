// Seting map - Initialize the map on the "map" div with a given center and zoom
export const renderMap = (lat, lng, zoom) => {
    return L.map('map', {
        center: [lat, lng], 
        zoom: zoom,
    });
}

// Adding map
export const baseLayer = (map) => {
    return L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

// Avalaible maps to use in tileLayer
// 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
// 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}'


// Single marker
export const marker = (map, lat, lng) => L.marker([lat, lng]).addTo(map); 

// Markers from an array of data + custom icon
export const markers = (map, data) => {
    let travelIcon = L.icon({
        iconUrl: './maps/pin.png',
        iconSize: [38], // format [x, y]      
    });

    return (
        data.forEach((item) => {
            L.marker([item.lat, item.lng], { icon: travelIcon })
                .addTo(map)
                .bindPopup(item.name)
        })
    )
};

// Circle
export const circle = (map, lat, lng) => {
    return L.circle([lat, lng], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500 //meters
    }).addTo(map);
};

// Poligon
export const polygon = (map, array) => {
    return L.polygon(array).addTo(map);
} 

// Click on map - Alert 
export const onMapClickAlert = (e) => {
    return alert("You clicked the map at " + e.latlng);
}; 


// Click on map - Pop up
export const onMapClick = (map, e) => {
    L.popup()
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
};  

// Click on map - Zoom
export const zoomClick = (map, e, zoom) => {
    let coor = e.latlng;
    map.setView([coor.lat, coor.lng], zoom)
};

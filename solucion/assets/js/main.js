import { renderMap, baseLayer, marker, markers, circle, polygon, onMapClick, zoomClick  } from '../../maps/maps.js'
import data from '../../data/places.js'

const map = renderMap(51.505, -0.09, 6);
const places = data.places;

baseLayer(map);

marker(map, 51.514, -0.095);

markers(map, places);

circle(map, 51.505, -0.09);

const arrayExample = [
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]; 

polygon(map,arrayExample);

map.on('click', (e) => {
    onMapClick(map, e);
});

map.on('click', (e) => {
    zoomClick(map, e, 15);
});
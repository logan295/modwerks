const shopMapElement = document.getElementById('shop-map');

if (shopMapElement && window.L) {
  const location = [45.420246, -122.65838];
  const map = L.map(shopMapElement, {
    scrollWheelZoom: false,
    dragging: !window.matchMedia('(max-width: 760px)').matches,
    touchZoom: false,
  }).setView(location, 15);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.circleMarker(location, {
    radius: 11,
    color: '#fff',
    weight: 3,
    fillColor: '#d82331',
    fillOpacity: 1,
  }).addTo(map).bindPopup('<strong>Modwerks</strong><br>221 Foothills Rd<br>Lake Oswego, OR 97034');
}

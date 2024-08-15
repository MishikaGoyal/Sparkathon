// components/StoreMap.js

'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icons in Leaflet when using Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const StoreMap = ({ itemLocations = [] }) => {
  return (
    <MapContainer center={[13.0485, 77.4992]} zoom={7} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {itemLocations.length > 0 && itemLocations.map((location, index) => (
        <Marker key={index} position={[center.latitude, center.longitude]}>
          <Popup>{location.itemName}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default StoreMap;

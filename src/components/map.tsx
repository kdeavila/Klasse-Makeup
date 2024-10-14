
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => {
    useEffect(() => {

        const map = L.map('map').setView([51.505, -0.09], 20);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        const customIcon = L.icon({
            iconUrl: '/leaflet/marker-icon-2x.png',
            shadowUrl: '/leaflet/marker-shadow.png',
        });

        L.marker([51.505, -0.09], { icon: customIcon }).addTo(map)
            .bindPopup('Tienda Klasse Makeup')
            .openPopup();

        return () => {
            map.remove();
        };
    }, []);

    return <div id="map" className="h-96 w-full max-w-4xl z-0" />;
};

export default MapComponent;

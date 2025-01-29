import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Filter, X } from 'lucide-react';
import { DAILY_DATA } from '../../data/dailyData';
import { HOTEL_AREAS } from '../../data/hotelData';
import { ROMANTIC_SPOTS } from '../../data/romanticData';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Correction pour les icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapView = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const center = [50.0617, 19.9373];

  // Création des icônes personnalisées
  const createCustomIcon = (color) => {
    return L.divIcon({
      className: 'custom-marker-container',
      html: `<div class="custom-marker" style="background-color: ${color}"></div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    });
  };

  const icons = {
    food: createCustomIcon('#E76F51'),
    sight: createCustomIcon('#2A9D8F'),
    bar: createCustomIcon('#E9C46A'),
    cafe: createCustomIcon('#F4A261'),
    hotel: createCustomIcon('#264653'),
    romantic: createCustomIcon('#FF69B4')
  };

  const getAllSpots = () => {
    let spots = [];

    // Spots journaliers
    DAILY_DATA.forEach(day => {
      day.mainProgram.forEach(spot => {
        if (spot.coordinates && Array.isArray(spot.coordinates)) {
          spots.push({
            ...spot,
            category: spot.type,
            source: 'daily'
          });
        }
      });
      
      // Spots secrets
      if (day.secretSpots) {
        Object.entries(day.secretSpots).forEach(([category, categorySpots]) => {
          categorySpots.forEach(spot => {
            if (spot.coordinates && Array.isArray(spot.coordinates)) {
              spots.push({
                ...spot,
                category: category,
                source: 'secret'
              });
            }
          });
        });
      }
    });

    // Spots romantiques
    ROMANTIC_SPOTS.forEach(category => {
      category.spots.forEach(spot => {
        if (spot.coordinates && Array.isArray(spot.coordinates)) {
          spots.push({
            ...spot,
            category: 'romantic',
            source: 'romantic'
          });
        }
      });
    });

    // Hôtels recommandés
    HOTEL_AREAS.forEach(area => {
      if (area.coordinates && Array.isArray(area.coordinates)) {
        spots.push({
          name: area.name,
          coordinates: area.coordinates,
          description: area.description,
          category: 'hotel',
          source: 'hotel'
        });
      }
    });

    return spots;
  };

  const filteredSpots = getAllSpots().filter(spot => 
    activeFilter === 'all' || spot.category === activeFilter
  );

  const filters = [
    { id: 'all', name: 'Tout voir', icon: '🗺️' },
    { id: 'food', name: 'Restaurants', icon: '🍽️' },
    { id: 'sight', name: 'À voir', icon: '🏛️' },
    { id: 'bar', name: 'Bars', icon: '🍺' },
    { id: 'cafe', name: 'Cafés', icon: '☕' },
    { id: 'romantic', name: 'Romantique', icon: '💕' },
    { id: 'hotel', name: 'Hôtels', icon: '🏨' }
  ];

  return (
    <div className="absolute inset-0">
      {/* Bouton filtres */}
      <div className="absolute right-4 top-4 z-[1000]">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
        >
          {isFiltersOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Filter className="w-6 h-6 text-gray-700" />
          )}
        </button>

        {/* Menu des filtres */}
        {isFiltersOpen && (
          <div className="absolute top-16 right-0 bg-white rounded-2xl shadow-lg p-4 w-48">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-xl ${
                  activeFilter === filter.id 
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-gray-50'
                }`}
              >
                <span>{filter.icon}</span>
                <span>{filter.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Carte */}
      <div className="h-full">
        <MapContainer
          center={center}
          zoom={14}
          className="h-full w-full"
          scrollWheelZoom={true}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://carto.com">CARTO</a>'
          />
          
          {/* Marqueurs */}
          {filteredSpots.map((spot, index) => {
            if (!spot.coordinates || !Array.isArray(spot.coordinates)) return null;
            
            return (
              <Marker
                key={`${spot.name}-${index}`}
                position={spot.coordinates}
                icon={icons[spot.category] || icons.sight}
              >
                <Popup className="custom-popup">
                  <div className="p-3">
                    <h3 className="font-karla text-lg font-bold text-accent-navy">
                      {spot.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{spot.description}</p>
                    {spot.address && (
                      <p className="text-sm text-gray-500 mt-2">📍 {spot.address}</p>
                    )}
                    {spot.specialty && (
                      <p className="text-sm text-primary mt-1">✨ {spot.specialty}</p>
                    )}
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView; 
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useKrakowPlanner } from '../../context/PlannerContext';
import { Navigation } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Correction pour l'icône de marqueur Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Overview = () => {
  const { setActiveTab } = useKrakowPlanner();

  return (
    <div className="fixed inset-0">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 bg-cover bg-center" 
           style={{ 
             backgroundImage: 'url(/images/yevhenii-dubrovskyi-lpeOGbQ7eqg-unsplash.jpg)',
             backgroundPosition: 'center'
           }}
           aria-label="Photo de Yevhenii Dubrovskyi sur Unsplash"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Contenu */}
      <div className="relative h-full flex flex-col justify-between p-6 text-white">
        <div className="flex justify-between items-start pt-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🏰</span>
            <span className="font-karla font-bold">Local Guide</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              2024
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="font-dm-serif text-5xl">
              Découvrir<br />Cracovie
            </h1>
            <p className="text-white/80 font-inter">
              Guide local pour explorer la ville comme un habitant
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              3 jours d'aventures
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              15+ lieux secrets
            </span>
          </div>

          <button
            onClick={() => setActiveTab('map')}
            className="w-full bg-white text-accent-navy font-medium py-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg"
          >
            <span>Commencer l'aventure</span>
            <Navigation className="w-4 h-4" />
          </button>

          <div className="text-xs text-white/60 text-center mt-4">
            Photo par <a href="https://unsplash.com/fr/@dbr0vskyi" className="underline">Yevhenii Dubrovskyi</a> sur <a href="https://unsplash.com" className="underline">Unsplash</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview; 
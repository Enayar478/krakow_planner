// src/data/hotelData.js
export const HOTEL_AREAS = [
  {
    name: "Vieille Ville",
    description: "Quartier historique, proche de tout",
    advantages: ["Central", "Historique", "Animé"],
    coordinates: [50.0617, 19.9373]
  },
  {
    name: "Kazimierz",
    description: "Quartier juif historique, branché",
    advantages: ["Authentique", "Restaurants", "Vie nocturne"],
    coordinates: [50.0516, 19.9449]
  },
  {
    name: "Kleparz",
    description: "Quartier authentique au nord de la vieille ville",
    advantages: [
      "Prix plus abordables",
      "Marché local authentique",
      "10 min à pied du centre"
    ],
    atmosphere: "Local et calme",
    coordinates: [50.0685, 19.9420],
    boundaries: {
      north: "ul. Prądnicka",
      south: "Planty",
      east: "ul. Pawia",
      west: "al. Słowackiego"
    },
    recommendedStreets: [
      {
        name: "ul. Długa",
        description: "Rue commerçante locale",
        coordinates: [50.0666, 19.9428]
      }
    ]
  },
  {
    name: "Podgórze",
    description: "Quartier en mutation au sud de la Vistule",
    advantages: [
      "Quartier émergent",
      "Prix attractifs",
      "Proche de l'usine Schindler"
    ],
    atmosphere: "En développement, authentique",
    coordinates: [50.0474, 19.9456],
    boundaries: {
      north: "Vistule",
      south: "ul. Wielicka",
      east: "ul. Klimeckiego",
      west: "ul. Kalwaryjska"
    },
    recommendedStreets: [
      {
        name: "ul. Lwowska",
        description: "Artère principale du quartier",
        coordinates: [50.0467, 19.9467]
      }
    ]
  }
];
// src/data/romanticData.js
export const ROMANTIC_SPOTS = [
  {
    category: "Coucher de soleil",
    spots: [
      {
        name: "Berges Vistule côté Podgórze",
        description: "Près du pont Powstańców",
        bestTime: "Soir",
        atmosphere: "Paisible",
        tip: "Idéal pour un pique-nique au coucher du soleil",
        coordinates: [50.0485, 19.9425]
      },
      {
        name: "Kładka Bernatka",
        description: "Pont piéton avec vue panoramique",
        bestTime: "Crépuscule",
        atmosphere: "Romantique",
        tip: "Possibilité d'accrocher un cadenas d'amour",
        address: "Kładka Ojca Bernatka",
        coordinates: [50.0476, 19.9463]
      },
      {
        name: "Terrasse PURO Hotel",
        description: "Vue panoramique sur la ville",
        atmosphere: "Chic",
        bestTime: "Coucher de soleil",
        tip: "Réservation conseillée pour les non-résidents",
        address: "ul. Halicka 14A",
        coordinates: [50.0489, 19.9450]
      }
    ]
  },
  {
    category: "Jardins secrets",
    spots: [
      {
        name: "Jardin botanique",
        address: "ul. Kopernika 27",
        description: "Oasis de verdure en plein centre",
        bestTime: "Journée",
        atmosphere: "Paisible",
        tip: "Plus calme en fin d'après-midi",
        coordinates: [50.0637, 19.9571]
      },
      {
        name: "Parc Decjusza",
        description: "Caché derrière Wawel",
        atmosphere: "Mystérieux",
        bestTime: "Matin ou fin d'après-midi",
        tip: "Peu de touristes connaissent cet endroit",
        address: "ul. Księcia Józefa 20",
        coordinates: [50.0544, 19.9352]
      },
      {
        name: "Jardin sur le toit",
        description: "Galerie Kazimierz",
        atmosphere: "Moderne",
        bestTime: "Après-midi",
        tip: "Vue unique sur le quartier juif",
        address: "ul. Podgórska 34",
        coordinates: [50.0520, 19.9504]
      }
    ]
  },
  {
    category: "Cafés romantiques",
    spots: [
      {
        name: "Café Camelot",
        description: "Cour intérieure cachée",
        atmosphere: "Vintage",
        specialty: "Chocolat chaud maison",
        tip: "Demander une table dans la cour intérieure",
        address: "ul. Świętego Tomasza 17",
        coordinates: [50.0637, 19.9380]
      },
      {
        name: "Café Młynek",
        description: "Terrasse cachée avec vue",
        atmosphere: "Bohème",
        bestTime: "Après-midi",
        tip: "Essayer leurs gâteaux maison",
        address: "Plac Wolnica 7",
        coordinates: [50.0491, 19.9445]
      }
    ]
  },
  {
    category: "Spots historiques",
    spots: [
      {
        name: "Remparts Wawel",
        description: "Vue sur la Vistule",
        bestTime: "Crépuscule",
        atmosphere: "Médiévale",
        tip: "Moins fréquenté après 18h",
        address: "Wawel 5",
        coordinates: [50.0547, 19.9360]
      },
      {
        name: "Movida",
        description: "Bar à vins dans une cave médiévale",
        atmosphere: "Romantique",
        type: "wine",
        specialty: "Vins d'Europe de l'Est",
        tip: "Parfait pour un verre en tête à tête",
        address: "ul. Miodowa 15",
        coordinates: [50.0520, 19.9475]
      }
    ]
  },
  {
    category: "Restaurants intimes",
    spots: [
      {
        name: "Starka",
        description: "Restaurant polonais raffiné",
        address: "ul. Józefa 14",
        atmosphere: "Romantique",
        price: "€€€",
        specialty: "Vodkas artisanales maison",
        tip: "Demander une table dans l'alcôve",
        coordinates: [50.0515, 19.9470]
      },
      {
        name: "Pod Baranem",
        description: "Restaurant traditionnel polonais",
        atmosphere: "Élégant",
        price: "€€",
        specialty: "Cuisine polonaise raffinée",
        tip: "Réserver la table près de la cheminée",
        address: "ul. Gertrudy 21",
        coordinates: [50.0557, 19.9397]
      }
    ]
  }
];

// Spots supplémentaires qui peuvent être romantiques selon le moment
export const ROMANTIC_MOMENTS = [
  {
    name: "Place du marché",
    bestTime: "Tôt le matin",
    description: "Avant l'arrivée des touristes, quand les stands s'installent",
    tip: "Y aller au lever du soleil pour voir la ville s'éveiller",
    address: "Rynek Główny",
    coordinates: [50.0617, 19.9373]
  },
  {
    name: "Berges de la Vistule",
    bestTime: "Soirée d'été",
    description: "Bars éphémères et ambiance décontractée",
    tip: "Idéal pour une promenade digestive après le dîner",
    address: "Bulwar Wołyński",
    coordinates: [50.0485, 19.9425]
  }
];
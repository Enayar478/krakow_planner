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
          tip: "Idéal pour un pique-nique au coucher du soleil"
        },
        {
          name: "Kładka Bernatka",
          description: "Pont piéton avec vue panoramique",
          bestTime: "Crépuscule",
          atmosphere: "Romantique",
          tip: "Possibilité d'accrocher un cadenas d'amour"
        },
        {
          name: "Terrasse PURO Hotel",
          description: "Vue panoramique sur la ville",
          atmosphere: "Chic",
          bestTime: "Coucher de soleil",
          tip: "Réservation conseillée pour les non-résidents"
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
          tip: "Plus calme en fin d'après-midi"
        },
        {
          name: "Parc Decjusza",
          description: "Caché derrière Wawel",
          atmosphere: "Mystérieux",
          bestTime: "Matin ou fin d'après-midi",
          tip: "Peu de touristes connaissent cet endroit"
        },
        {
          name: "Jardin sur le toit",
          description: "Galerie Kazimierz",
          atmosphere: "Moderne",
          bestTime: "Après-midi",
          tip: "Vue unique sur le quartier juif"
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
          tip: "Demander une table dans la cour intérieure"
        },
        {
          name: "Café Młynek",
          description: "Terrasse cachée avec vue",
          atmosphere: "Bohème",
          bestTime: "Après-midi",
          tip: "Essayer leurs gâteaux maison"
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
          tip: "Moins fréquenté après 18h"
        },
        {
          name: "Movida",
          description: "Bar à vins dans une cave médiévale",
          atmosphere: "Romantique",
          type: "wine",
          specialty: "Vins d'Europe de l'Est",
          tip: "Parfait pour un verre en tête à tête"
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
          tip: "Demander une table dans l'alcôve"
        },
        {
          name: "Pod Baranem",
          description: "Restaurant traditionnel polonais",
          atmosphere: "Élégant",
          price: "€€",
          specialty: "Cuisine polonaise raffinée",
          tip: "Réserver la table près de la cheminée"
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
      tip: "Y aller au lever du soleil pour voir la ville s'éveiller"
    },
    {
      name: "Berges de la Vistule",
      bestTime: "Soirée d'été",
      description: "Bars éphémères et ambiance décontractée",
      tip: "Idéal pour une promenade digestive après le dîner"
    }
  ];
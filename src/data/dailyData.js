// src/data/dailyData.js
export const DAILY_DATA = [
  {
    day: 1,
    title: "Mercredi - Vieille Ville",
    mainProgram: [
      {
        time: "11:30",
        name: "Bar Mleczny Pod Temidą",
        type: "food",
        address: "ul. Grodzka 43",
        description: "Milk bar authentique",
        price: "€",
        specialty: "Kotlet schabowy",
        mustTry: ["Żurek", "Kotlet schabowy", "Pierogi"],
        coordinates: [50.0578, 19.9374]
      },
      {
        time: "13:30-16:30",
        name: "Tour du Rynek + Basilique",
        type: "sight",
        description: "Plus grande place médiévale d'Europe + Retable de Veit Stoss",
        highlights: ["Halle aux Draps", "Tour de l'Hôtel de Ville", "Retable gothique"],
        coordinates: [50.0617, 19.9373],
        address: "Rynek Główny"
      },
      {
        time: "17:00",
        name: "Café Noworolski",
        type: "cafe",
        description: "Pause café historique Art nouveau",
        atmosphere: "Historique",
        specialty: "Gâteaux traditionnels",
        coordinates: [50.0619, 19.9377],
        address: "Rynek Główny 1"
      },
      {
        time: "19:30",
        name: "Pod Baranem",
        type: "food",
        address: "ul. Gertrudy 21",
        description: "Restaurant traditionnel polonais raffiné",
        price: "€€",
        specialty: "Żurek",
        mustTry: ["Canard rôti", "Żurek", "Vins polonais"],
        coordinates: [50.0557, 19.9397]
      },
      {
        time: "22:00",
        name: "Mercy Brown",
        type: "bar",
        address: "ul. Straszewskiego 28",
        description: "Bar secret derrière une bibliothèque",
        atmosphere: "Années 20, jazz live",
        specialty: "Cocktails d'époque",
        price: "€€",
        secretTip: "Le mot de passe change chaque semaine, demander gentiment au bibliothécaire",
        coordinates: [50.0589, 19.9334]
      }
    ],
    secretSpots: {
      bars: [
        {
          name: "Sababa",
          address: "ul. Szeroka 2",
          description: "Bar caché derrière un frigo",
          type: "cocktail",
          price: "€€",
          atmosphere: "Mystérieux",
          bestTime: "Soirée",
          coordinates: [50.0518, 19.9478]
        },
        {
          name: "Pauza In Garden",
          address: "ul. Rajska 12",
          description: "Rooftop caché avec vue",
          type: "rooftop",
          bestTime: "Coucher du soleil",
          atmosphere: "Branché",
          coordinates: [50.0644, 19.9321]
        },
        {
          name: "Movida",
          address: "ul. Miodowa 15",
          description: "Bar à vins dans une cave médiévale",
          type: "wine",
          atmosphere: "Romantique",
          specialty: "Vins d'Europe de l'Est",
          coordinates: [50.0520, 19.9475]
        },
        {
          name: "Alchemia",
          description: "Bar historique de Kazimierz",
          address: "ul. Estery 5",
          coordinates: [50.0516, 19.9449]
        }
      ],
      food: [
        {
          name: "Pierogarnia Krakowiacy",
          address: "ul. Szewska 23",
          description: "Meilleurs pierogis traditionnels",
          price: "€",
          specialty: "Pierogis variés",
          coordinates: [50.0632, 19.9369]
        },
        {
          name: "Café Camelot",
          address: "ul. Świętego Tomasza 17",
          description: "Cave médiévale romantique",
          atmosphere: "Vintage",
          specialty: "Chocolat chaud maison",
          coordinates: [50.0637, 19.9380]
        },
        {
          name: "Przystanek Pierogarnia",
          description: "Meilleurs pierogis traditionnels",
          address: "ul. Bonerowska 14",
          coordinates: [50.0559, 19.9469]
        }
      ]
    }
  },
  {
    day: 2,
    title: "Jeudi - Auschwitz + Kazimierz",
    mainProgram: [
      {
        time: "10:45",
        name: "Arrivée Auschwitz",
        type: "visit",
        description: "RDV 30 min avant la visite",
        important: ["Pièce d'identité obligatoire", "Petit sac uniquement", "Bouteille d'eau"],
        address: "Więźniów Oświęcimia 20, 32-603 Oświęcim",
        coordinates: [50.0273, 19.2021]
      },
      {
        time: "11:15-15:30",
        name: "Visite guidée",
        type: "visit",
        description: "Visite guidée en français",
        coordinates: [50.0273, 19.2021]
      },
      {
        time: "17:30",
        name: "Retour Cracovie",
        type: "transport"
      },
      {
        time: "19:00",
        name: "Klezmer Hois",
        type: "food",
        address: "ul. Szeroka 6",
        description: "Restaurant juif traditionnel avec musique live",
        atmosphere: "Authentique",
        price: "€€",
        specialty: "Cuisine juive traditionnelle",
        coordinates: [50.0516, 19.9478]
      },
      {
        time: "21:30",
        name: "Alchemia",
        type: "bar",
        address: "ul. Estery 5",
        description: "Bar mythique de Kazimierz",
        atmosphere: "Alternative",
        price: "€",
        specialty: "Bières locales",
        coordinates: [50.0520, 19.9463]
      }
    ],
    secretSpots: {
      bars: [
        {
          name: "Taawa",
          address: "ul. Józefa 36",
          description: "Rooftop vue sur synagogues",
          type: "cocktail",
          bestTime: "Coucher du soleil",
          coordinates: [50.0508, 19.9485]
        },
        {
          name: "Eszeweria",
          address: "ul. Józefa 9",
          description: "Déco bizarre de grand-mère",
          atmosphere: "Vintage",
          specialty: "Vodkas maison",
          coordinates: [50.0516, 19.9467]
        },
        {
          name: "Singer",
          address: "ul. Estery 20",
          description: "Tables avec machines à coudre",
          atmosphere: "Unique",
          specialty: "Bières locales",
          coordinates: [50.0521, 19.9470]
        },
        {
          name: "BeerGallery Dominikańska",
          address: "ul. Dominikańska 3",
          description: "Caves médiévales",
          type: "beer",
          specialty: "150+ bières artisanales",
          coordinates: [50.0587, 19.9381]
        }
      ],
      food: [
        {
          name: "Marchewka z Groszkiem",
          address: "ul. Kupa 6",
          description: "Cuisine polonaise authentique",
          price: "€",
          atmosphere: "Familial",
          coordinates: [50.0513, 19.9475]
        },
        {
          name: "Hamsa",
          address: "ul. Szeroka 2",
          description: "Cuisine israélienne authentique",
          specialty: "Hummus",
          atmosphere: "Moderne",
          price: "€€",
          coordinates: [50.0518, 19.9478]
        }
      ]
    }
  },
  {
    day: 3,
    title: "Vendredi - Wawel + Podgórze",
    mainProgram: [
      {
        time: "09:00",
        name: "Château Wawel",
        type: "sight",
        description: "Visite du château royal",
        highlights: ["Cathédrale", "Chambres d'État", "Dragon"],
        address: "Wawel 5",
        coordinates: [50.0547, 19.9360]
      },
      {
        time: "12:00",
        name: "Przystanek Pierogarnia",
        type: "food",
        description: "Meilleurs pierogis de Cracovie",
        price: "€",
        specialty: "Pierogis artisanaux",
        address: "ul. Józefińska 4",
        coordinates: [50.0474, 19.9456]
      },
      {
        time: "14:00-17:00",
        name: "Podgórze + Schindler",
        type: "visit",
        description: "Quartier historique + usine de Schindler",
        address: "ul. Lipowa 4",
        coordinates: [50.0474, 19.9608]
      },
      {
        time: "19:30",
        name: "Starka",
        type: "food",
        address: "ul. Józefa 14",
        description: "Restaurant polonais raffiné",
        price: "€€€",
        specialty: "Vodkas artisanales maison",
        atmosphere: "Romantique",
        coordinates: [50.0515, 19.9470]
      },
      {
        time: "22:00",
        name: "BeerGallery + Taawa",
        type: "bar",
        description: "Bar à bières puis rooftop",
        price: "€€",
        coordinates: [50.0587, 19.9381]
      }
    ],
    secretSpots: {
      bars: [
        {
          name: "Forum Przestrzenie",
          description: "Friche industrielle cool",
          atmosphere: "Alternative",
          specialty: "Vue sur la Vistule",
          address: "ul. Marii Konopnickiej 28",
          coordinates: [50.0478, 19.9334]
        },
        {
          name: "Weźże Krafta",
          description: "Bar dans un bunker",
          type: "beer",
          atmosphere: "Underground",
          address: "ul. Dolnych Młynów 10",
          coordinates: [50.0465, 19.9455]
        },
        {
          name: "Hevre",
          address: "ul. Meiselsa 18",
          description: "Ancienne synagogue",
          atmosphere: "Historique",
          type: "cocktail",
          coordinates: [50.0520, 19.9455]
        }
      ],
      food: [
        {
          name: "Zajezdnia",
          address: "ul. św. Wawrzyńca 12",
          description: "Restaurant local",
          price: "€",
          atmosphere: "Industriel",
          coordinates: [50.0497, 19.9482]
        },
        {
          name: "Stara Zajezdnia",
          description: "Brasserie dans ancien dépôt",
          specialty: "Bières maison",
          atmosphere: "Industriel chic",
          address: "ul. św. Wawrzyńca 12",
          coordinates: [50.0497, 19.9482]
        }
      ]
    }
  }
];
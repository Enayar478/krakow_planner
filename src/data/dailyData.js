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
          coordinates: [50.0617, 19.9373]
        },
        {
          time: "17:00",
          name: "Café Noworolski",
          type: "cafe",
          description: "Pause café historique Art nouveau",
          atmosphere: "Historique",
          specialty: "Gâteaux traditionnels",
          coordinates: [50.0619, 19.9377]
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
            bestTime: "Soirée"
          },
          {
            name: "Pauza In Garden",
            address: "ul. Rajska 12",
            description: "Rooftop caché avec vue",
            type: "rooftop",
            bestTime: "Coucher du soleil",
            atmosphere: "Branché"
          },
          {
            name: "Movida",
            address: "ul. Miodowa 15",
            description: "Bar à vins dans une cave médiévale",
            type: "wine",
            atmosphere: "Romantique",
            specialty: "Vins d'Europe de l'Est"
          }
        ],
        food: [
          {
            name: "Pierogarnia Krakowiacy",
            address: "ul. Szewska 23",
            description: "Meilleurs pierogis traditionnels",
            price: "€",
            specialty: "Pierogis variés"
          },
          {
            name: "Café Camelot",
            description: "Cave médiévale romantique",
            atmosphere: "Vintage",
            specialty: "Chocolat chaud maison"
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
          important: ["Pièce d'identité obligatoire", "Petit sac uniquement", "Bouteille d'eau"]
        },
        {
          time: "11:15-15:30",
          name: "Visite guidée",
          type: "visit",
          description: "Visite guidée en français"
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
          specialty: "Cuisine juive traditionnelle"
        },
        {
          time: "21:30",
          name: "Alchemia",
          type: "bar",
          address: "ul. Estery 5",
          description: "Bar mythique de Kazimierz",
          atmosphere: "Alternative",
          price: "€",
          specialty: "Bières locales"
        }
      ],
      secretSpots: {
        bars: [
          {
            name: "Taawa",
            address: "ul. Józefa 36",
            description: "Rooftop vue sur synagogues",
            type: "cocktail",
            bestTime: "Coucher du soleil"
          },
          {
            name: "Eszeweria",
            address: "ul. Józefa 9",
            description: "Déco bizarre de grand-mère",
            atmosphere: "Vintage",
            specialty: "Vodkas maison"
          },
          {
            name: "Singer",
            address: "ul. Estery 20",
            description: "Tables avec machines à coudre",
            atmosphere: "Unique",
            specialty: "Bières locales"
          },
          {
            name: "BeerGallery Dominikańska",
            address: "ul. Dominikańska 3",
            description: "Caves médiévales",
            type: "beer",
            specialty: "150+ bières artisanales"
          }
        ],
        food: [
          {
            name: "Marchewka z Groszkiem",
            address: "ul. Kupa 6",
            description: "Cuisine polonaise authentique",
            price: "€",
            atmosphere: "Familial"
          },
          {
            name: "Hamsa",
            description: "Cuisine israélienne authentique",
            specialty: "Hummus",
            atmosphere: "Moderne",
            price: "€€"
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
          highlights: ["Cathédrale", "Chambres d'État", "Dragon"]
        },
        {
          time: "12:00",
          name: "Przystanek Pierogarnia",
          type: "food",
          description: "Meilleurs pierogis de Cracovie",
          price: "€",
          specialty: "Pierogis artisanaux"
        },
        {
          time: "14:00-17:00",
          name: "Podgórze + Schindler",
          type: "visit",
          description: "Quartier historique + usine de Schindler"
        },
        {
          time: "19:30",
          name: "Starka",
          type: "food",
          address: "ul. Józefa 14",
          description: "Restaurant polonais raffiné",
          price: "€€€",
          specialty: "Vodkas artisanales maison",
          atmosphere: "Romantique"
        },
        {
          time: "22:00",
          name: "BeerGallery + Taawa",
          type: "bar",
          description: "Bar à bières puis rooftop",
          price: "€€"
        }
      ],
      secretSpots: {
        bars: [
          {
            name: "Forum Przestrzenie",
            description: "Friche industrielle cool",
            atmosphere: "Alternative",
            specialty: "Vue sur la Vistule"
          },
          {
            name: "Weźże Krafta",
            description: "Bar dans un bunker",
            type: "beer",
            atmosphere: "Underground"
          },
          {
            name: "Hevre",
            address: "ul. Meiselsa 18",
            description: "Ancienne synagogue",
            atmosphere: "Historique",
            type: "cocktail"
          }
        ],
        food: [
          {
            name: "Zajezdnia",
            address: "ul. św. Wawrzyńca 12",
            description: "Restaurant local",
            price: "€",
            atmosphere: "Industriel"
          },
          {
            name: "Stara Zajezdnia",
            description: "Brasserie dans ancien dépôt",
            specialty: "Bières maison",
            atmosphere: "Industriel chic"
          }
        ]
      }
    }
  ];
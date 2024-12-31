#!/bin/bash

# Vérification si le dossier existe déjà
if [ -d "krakow_planner" ]; then
    echo "Le dossier krakow_planner existe déjà!"
    exit 1
fi

# Création du dossier principal
mkdir krakow_planner
cd krakow_planner

# Création des dossiers principaux
mkdir -p src/{components,data,hooks,styles,utils,context}
mkdir public

# Création des sous-dossiers de components
mkdir -p src/components/{layout,daily,spots,romantic,hotels,shared}

# Création des fichiers dans components/layout
touch src/components/layout/{Header,Navigation,Layout}.jsx

# Création des fichiers dans components/daily
touch src/components/daily/{DailySchedule,ScheduleItem,DayFilter}.jsx

# Création des fichiers dans components/spots
touch src/components/spots/{SecretSpots,SpotCard,SpotFilter}.jsx

# Création des fichiers dans components/romantic
touch src/components/romantic/{RomanticSpots,CategorySection}.jsx

# Création des fichiers dans components/hotels
touch src/components/hotels/{HotelAreas,AreaCard}.jsx

# Création des fichiers dans components/shared
touch src/components/shared/{Card,Icon,Button}.jsx

# Création des fichiers dans data
touch src/data/{dailyData,hotelData,romanticData,practicalTips}.js

# Création des fichiers dans hooks
touch src/hooks/{useFilter,useActiveTab}.js

# Création des fichiers dans utils
touch src/utils/{constants,helpers}.js

# Création du fichier de contexte
touch src/context/PlannerContext.jsx

# Création des fichiers racine
touch src/App.jsx
touch src/styles/globals.css
touch public/index.html
touch {.gitignore,package.json,README.md,tailwind.config.js}

# Création du contenu de base pour package.json
echo '{
  "name": "krakow_planner",
  "version": "1.0.0",
  "description": "Application de planification pour un voyage à Cracovie",
  "main": "src/App.jsx",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "lucide-react": "^0.263.1",
    "tailwindcss": "^3.4.1",
    "@tailwindcss/forms": "^0.5.7"
  }
}' > package.json

# Création du contenu de base pour .gitignore
echo 'node_modules/
.env
.env.local
build/
.DS_Store
*.log' > .gitignore

# Création du contenu de base pour tailwind.config.js
echo 'module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}' > tailwind.config.js

# Création du contenu de base pour README.md
echo '# Krakow Planner

Application de planification pour un voyage à Cracovie. Inclut :
- Planning journalier
- Spots secrets
- Lieux romantiques
- Recommandations d'\''hôtels
- Conseils pratiques

## Installation

```bash
npm install
npm start
```' > README.md

echo "Structure du projet créée avec succès!"
ls -R
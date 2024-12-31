// src/components/layout/Header.jsx
import { Map } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-6 mb-6 text-white">
      <div className="flex items-center gap-3">
        <Map className="w-8 h-8" />
        <div>
          <h1 className="text-3xl font-bold mb-2">Voyage à Cracovie</h1>
          <p className="text-sm opacity-90">5-8 février 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
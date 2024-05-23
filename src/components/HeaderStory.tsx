import React from 'react';
import { Link } from 'react-router-dom';

const HeaderVariant3: React.FC = () => {
  return (
    <header className="p-4 bg-glass2 shadow-md flex items-center relative">
      <div className="absolute left-4">
        <Link to="/">
          <img src="/Logo.png" alt="Narrative Nest Logo" className="h-8" />
        </Link>
      </div>
      <div className="mx-auto text-xl font-bold text-center text-brown-600">
        NARRATIVE NEST
      </div>
      <div className="absolute right-4 flex items-center space-x-4">
        <Link to="/storyboard" className="bg-brown-500 text-white px-4 py-2 rounded hover:bg-brown-600">
          New Storyboard
        </Link>
        <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default HeaderVariant3;

import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
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

    </header>
  );
};

export default Header;

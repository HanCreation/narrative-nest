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
      <nav className="absolute right-4 flex items-center space-x-4">
        <Link to="/login" className="text-brown-600 hover:text-brown-800 font-semibold">Login</Link>
        <Link to="/sign-up" className="bg-brown-500 text-white px-3 py-2 rounded hover:bg-brown-600">Get Started</Link>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-white shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">Narrative Nest</div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/login" className="text-gray-700 hover:text-gray-900">Login</Link></li>
          <li><Link to="/get-started" className="bg-brown-500 text-white px-3 py-1 rounded hover:bg-brown-600">Get Started</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

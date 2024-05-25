// Importing react library
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  // Returning Header3
  return (
    // Navigation Bar
    <header className="p-4 bg-glass2 shadow-md flex items-center relative">
      <div className="absolute left-4">
        {/* Link to Home Page */}
        <Link to="/">
          <img src="/Logo.png" alt="Narrative Nest Logo" className="h-8" />
        </Link>
      </div>
      <div className="mx-auto text-xl font-bold text-center text-brown-600">
        NARRATIVE NEST
      </div>
    </header>
    // Navigation Bar End
  );
};

// Exporting Header3 Page
export default Header;

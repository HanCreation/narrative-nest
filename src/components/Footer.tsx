// Importing necessary react library
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  // Returning Footer Page
  return (
    <footer className="p-4 bg-glass2 backdrop-blur-xs text-center">
      <div className="text-xl font-bold mb-4">

        
        {/* Back To Home Page */}
        <Link to="/">NARRATIVE NEST</Link>
      </div>
      <div className="border-t border-brown-600 py-4">
        <div className="text-sm mt-2">
          &copy; 2024 <span className="mx-2">|</span>
          <a href="/privacy" className="text-gray-700 hover:text-gray-900">
            Privacy
          </a>
          <span className="mx-2">|</span>
          <a href="/terms" className="text-gray-700 hover:text-gray-900">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

// Exporting Footer Page
export default Footer;

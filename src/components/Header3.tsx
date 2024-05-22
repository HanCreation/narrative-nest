import React from 'react';

const HeaderVariant: React.FC = () => {
  return (
    <header className="p-4 bg-white shadow-md flex items-center justify-center relative">
      <div className="absolute left-4">
        <img src="/Logo.png" alt="Narrative Nest Logo" className="h-8" />
      </div>
      <div className="text-xl font-bold text-center text-brown-600">
        NARRATIVE NEST
      </div>
      
    </header>
  );
};

export default HeaderVariant;

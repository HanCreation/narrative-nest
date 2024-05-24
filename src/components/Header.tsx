import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShareAlt } from '@fortawesome/free-solid-svg-icons';
// Initial commit by Dean Hans
interface HeaderProps {
  initialTitle: string;
  onTitleChange: (newTitle: string) => void;
}

const Header: React.FC<HeaderProps> = ({ initialTitle, onTitleChange }) => {
  const [title, setTitle] = useState(initialTitle);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    onTitleChange(newTitle);
  };

  return (
    <header className="p-4 bg-glass backdrop-blur-sm shadow-md flex items-center justify-center relative">
      <div className="absolute left-4 flex items-center space-x-4">
        <button className="text-sm">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>
      <div className="text-center text-brown-800">
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="text-xl font-bold border-none outline-none bg-transparent text-center mx-auto"
        />
      </div>
      <div className="absolute right-4 flex items-center space-x-4">
        <button className="text-sm">
          <FontAwesomeIcon icon={faShareAlt} size="lg" />
        </button>
        <button className="bg-brown-500 text-white px-6 py-1 rounded-lg  font-semibold hover:bg-brown-600">
          Export
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;

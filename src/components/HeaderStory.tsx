import React, { useState } from 'react';

interface HeaderProps {
  initialTitle: string;
  onTitleChange: (newTitle: string) => void;
}

const HeaderStory: React.FC<HeaderProps> = ({ initialTitle, onTitleChange }) => {
  const [title, setTitle] = useState(initialTitle);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    onTitleChange(newTitle);
  };

  return (
    <header className="p-4 bg-white shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <button className="mr-4">
          <span className="material-icons">menu</span>
        </button>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="text-xl font-bold border-none outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button>
          <span className="material-icons">share</span>
        </button>
        <button className="bg-brown-500 text-white px-3 py-1 rounded hover:bg-brown-600">
          Export
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default HeaderStory;

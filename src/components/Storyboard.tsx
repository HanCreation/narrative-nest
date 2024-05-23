import React, { useState } from 'react';
import Header from './Header.tsx';
import ImageCard from './ImageCard';
import Footer from './Footer.tsx';
import { Helmet } from 'react-helmet';
const Storyboard: React.FC = () => {
  const [storyboardTitle, setStoryboardTitle] = useState("UNNAMED STORYBOARD");
  const [basePrompt, setBasePrompt] = useState("");

  const handleTitleChange = (newTitle: string) => {
    setStoryboardTitle(newTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/Background.png')`, backdropFilter: 'blur(10px)' }}>
      <Helmet>
        <title>Storyboard - Narrative Nest</title>
      </Helmet>
      <Header initialTitle={storyboardTitle} onTitleChange={handleTitleChange} />
      <div className="flex-grow p-4">
        <div className="p-4 flex flex-col items-center w-full">
          <div className="w-full max-w-screen-lg mb-4">
            <input
              type="text"
              value={basePrompt}
              onChange={(e) => setBasePrompt(e.target.value)}
              placeholder="Enter base prompt"
              className="w-full p-2 border rounded mb-2"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center w-full max-w-screen-lg">
            {Array(9).fill(null).map((_, index) => (
              <ImageCard key={index} basePrompt={basePrompt} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Storyboard;

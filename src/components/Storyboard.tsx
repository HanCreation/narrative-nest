// Importing necessary page and react library
import React, { useState } from "react";
import Header from "./Header.tsx";
import ImageCard from "./ImageCard";
import Footer from "./Footer.tsx";
import { Helmet } from "react-helmet";
import { useUser } from "../contexts/user-context.tsx";

const Storyboard: React.FC = () => {
  // Set Initial Storyboard Title and Base Prompt
  const [storyboardTitle, setStoryboardTitle] = useState("UNNAMED STORYBOARD");
  const [basePrompt, setBasePrompt] = useState("");

  const user = useUser();

  // Change Storyboard Title Function
  const handleTitleChange = (newTitle: string) => {
    setStoryboardTitle(newTitle);
  };

  // Return Storyboard Page
  return (
    //  Make the background same as the background from the assets
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/Background.png')`,
        backdropFilter: "blur(10px)",
      }}
    >
      {/* HELMET: manage changes to the document head in a React application. It allows
       to set elements like the title, meta tags, and other attributes within the 
       <head> of HTML document dynamically from React components. */}
      <Helmet>
        <title>Storyboard - Narrative Nest</title>
      </Helmet>

      {/* Taking Header component and putting it to a function */}
      <Header
        initialTitle={storyboardTitle}
        onTitleChange={handleTitleChange}
      />

      {/* Storyboard Maker Section */}
      <div className="flex-grow p-4">
        <div className="p-4 flex flex-col items-center w-full">
          <div className="w-full max-w-screen-lg mb-4">
            {/* User Prompt Receiver */}
            <input
              type="text"
              value={basePrompt}
              onChange={(e) => setBasePrompt(e.target.value)}
              placeholder="Enter base prompt"
              className="w-full p-2 border rounded mb-2"
            />
          </div>

          {/* 9 Blank Image Space for Storyboard Result and Receive User Prompt Input to ImageCard  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center w-full max-w-screen-lg">
            {Array(9)
              .fill(null)
              .map((_, index) => (
                <ImageCard key={index} basePrompt={basePrompt} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Exporting Storyboard page
export default Storyboard;

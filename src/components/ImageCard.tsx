// Importing necessary page and react library
import React, { useEffect, useState } from "react";
import { client } from "@gradio/client";
import { FiArrowRight, FiEdit3 } from "react-icons/fi";
import { ClipLoader } from "react-spinners";
import { useUser } from "../contexts/user-context";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

// Defines an interface for base prompt
interface ImageCardProps {
  basePrompt: string;
}

// Define a function to take user prompt and insert it to SDXL-Lightining API
// for generating storyboard images
const ImageCard: React.FC<ImageCardProps> = ({ basePrompt }) => {
  // State Management
  // Storing user input prompt
  const [prompt, setPrompt] = useState("");
  // Storing generated images
  const [image, setImage] = useState<string | null>(null);

  const user = useUser();

  // To indicate image generation is in progress
  const [loading, setLoading] = useState(false);
  // Storing additional notes
  const [notes, setNotes] = useState("");

  // Handling if user submitted the prompt
  const handleSubmit = async () => {
    // Indicate image generation is in process
    setLoading(true);

    // Combining base prompt and user prompt
    const fullPrompt = `${basePrompt} ${prompt}`;

    // Try Catch Function to calls API to generate an image based on fullprompt
    try {
      const app = await client("ByteDance/SDXL-Lightning");
      const result = await app.predict("/generate_image", [
        fullPrompt,
        "8-Step",
      ]);
      // If generating image was successful return images
      // If generating image failed return error to user
      if (result.data && Array.isArray(result.data) && result.data[0].url) {
        setImage(result.data[0].url);
      } else {
        console.error("Failed to retrieve image URL from API response.");
      }
      // Handling any errors
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      // Sets loading to false once API call is complete, wether successful or not
      setLoading(false);
    }
  };

  useEffect(() => {

    if(image ==  null) return;

    const imageRequest = {
      image: image,
      basePrompt: basePrompt,
      prompt: prompt,
      notes: notes,
      uid: user?.uid,
    }

    addDoc(collection(db, 'StoryBoards'),imageRequest) 

  }, [image])

  // Returning image card
  return (
    <div className="p-4 bg-[#5C352B]/30 backdrop-blur-lg rounded-lg shadow-md relative w-72">
      {/* Image Display Section */}
      <div className="w-full h-48 bg-gray-300 rounded-t-lg mb-2 flex items-center justify-center overflow-hidden">
        {/* Conditional Rendering */}
        {/* Display a loading spinner if loading is true */}
        {loading ? (
          <ClipLoader color="#5C352B" />
        ) : // Display the image if image is not null
        image ? (
          <img src={image} className="object-cover h-full w-full" />
        ) : (
          // Display a place holder text "No Image" if no image is available
          <span className="text-gray-500">No Image</span>
        )}
      </div>
      {/* Image Display Section End */}

      <div className="p-2 bg-white/70 backdrop-blur-lg rounded-b-lg flex flex-col">
        {/* Prompt input section */}
        <div className="flex items-center space-x-2 mb-2">
          {/* Text area for prompt input */}
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your imagination..."
            className="w-full p-2 border rounded resize-none bg-transparent text-black focus:outline-none h-20"
          />
          {/* Button to triggers handle submit function */}
          <button onClick={handleSubmit} className="text-gray-600 p-2">
            <FiArrowRight size={24} />
          </button>
        </div>
        {/* Prompt input section End */}

        {/* Notes Input Section */}
        <div className="flex items-center space-x-2 border-t border-[#5C352B] pt-2 mt-2">
          {/* Pencil Icon */}
          <FiEdit3 className="text-gray-600" />

          {/* Text area for notes input */}
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Shot Notes"
            className="w-full p-2 border rounded resize-none bg-transparent text-black focus:outline-none h-10"
          />
        </div>
        {/* Notes Input Section End */}
      </div>
    </div>
  );
};

// Exporting Image Card page
export default ImageCard;

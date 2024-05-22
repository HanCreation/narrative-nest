import React, { useState } from 'react';
import { client } from "@gradio/client";
import { FiArrowRight, FiEdit3 } from 'react-icons/fi';
import { ClipLoader } from 'react-spinners';

interface ImageCardProps {
  basePrompt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ basePrompt }) => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    const fullPrompt = `${basePrompt} ${prompt}`;
    try {
      const app = await client("ByteDance/SDXL-Lightning");
      const result = await app.predict("/generate_image", [fullPrompt, "8-Step"]);

      if (result.data && Array.isArray(result.data) && result.data[0].url) {
        setImage(result.data[0].url);
      } else {
        console.error('Failed to retrieve image URL from API response.');
      }
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-[#5C352B]/30 backdrop-blur-lg rounded-lg shadow-md relative w-72">
      <div className="w-full h-48 bg-gray-300 rounded-t-lg mb-2 flex items-center justify-center overflow-hidden">
        {loading ? (
          <ClipLoader color="#5C352B" />
        ) : (
          image ? <img src={image} className="object-cover h-full w-full" /> : <span className="text-gray-500">No Image</span>
        )}
      </div>
      <div className="p-2 bg-white/70 backdrop-blur-lg rounded-b-lg flex flex-col">
        <div className="flex items-center space-x-2 mb-2">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your imagination..."
            className="w-full p-2 border rounded resize-none bg-transparent text-black focus:outline-none h-20"
          />
          <button onClick={handleSubmit} className="text-gray-600 p-2">
            <FiArrowRight size={24} />
          </button>
        </div>
        <div className="flex items-center space-x-2 border-t border-[#5C352B] pt-2 mt-2">
          <FiEdit3 className="text-gray-600" />
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Shot Notes"
            className="w-full p-2 border rounded resize-none bg-transparent text-black focus:outline-none h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

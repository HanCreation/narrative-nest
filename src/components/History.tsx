// Importing necessary page and react library
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import HeaderStory from "./HeaderStory";

const HistoryPage: React.FC = () => {
  // Returning History Page
  return (
    //  Make the background same as the background from the assets
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/Background.png')` }}
    >
      {/* HELMET: manage changes to the document head in a React application. It allows
       to set elements like the title, meta tags, and other attributes within the 
       <head> of HTML document dynamically from React components. */}
      <Helmet>
        <title>History - Narrative Nest</title>
      </Helmet>

      {/* Taking Header Story Component */}
      <HeaderStory />

      {/* History Page */}
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h2 className="text-5xl font-bold mb-10 text-brown-800">
          Your Storyboards
        </h2>

        {/* Using image from assets */}
        <div className="border-t border-brown-600 py-24">
          <div className="flex flex-col items-center mb-10">
            <img
              src="/EmptyHistory3.png"
              alt="Empty History"
              className="w-48 mb-4"
            />
            <p className="text-lg text-center text-brown-800 mb-4">
              No storyboards yet! Click 'New Storyboard' to start visualize your
              story.
            </p>

            {/* Link to Storyboard Maker Page */}
            <Link
              to="/storyboard"
              className="bg-brown-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-brown-600"
            >
              New Storyboard
            </Link>
          </div>
        </div>
      </main>
      {/* History Page End */}

      {/* Taking Footer Section */}
      <Footer />
    </div>
  );
};

// Returning History Page
export default HistoryPage;

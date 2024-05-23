import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header2 from './Header2';
import Footer from './Footer';
import HeaderStory from './HeaderStory';
const HistoryPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/Background.png')` }}>
      <Helmet>
        <title>History - Narrative Nest</title>
      </Helmet>
      <HeaderStory />
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h2 className="text-5xl font-bold mb-10 text-brown-800">Your Storyboards</h2>
        <div className="border-t border-brown-600 py-24">
        <div className="flex flex-col items-center mb-10">
          <img src="/EmptyHistory3.png" alt="Empty History" className="w-48 mb-4" />
          <p className="text-lg text-center text-brown-800 mb-4">
            No storyboards yet! Click 'New Storyboard' to start visualize your story.
          </p>
          <Link to="/storyboard" className="bg-brown-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-brown-600">
            New Storyboard
          </Link>
        </div>
        </div>
        
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage;

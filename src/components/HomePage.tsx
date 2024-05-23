import React from 'react';
import { Helmet } from 'react-helmet';
import Header2 from './Header2';
import Footer from './Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/Background.png')` }}>
      <Helmet>
        <title>Narrative Nest</title>
      </Helmet>
      <Header2 />
      <main className="flex-grow p-8">
        <section className="text-center mb-16">
          <img src="/narrative-nest-logo.png" alt="Narrative Nest" className="mx-auto mb-10" />
          <h1 className="text-6xl font-bold mb-10 text-brown-800">Visualize It as You Narrate It</h1>
          <button className="bg-brown-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-brown-600">
            Get Started
          </button>
        </section>
        <section className="text-center mb-16 text-brown-800">
          <h2 className="text-4xl font-bold mb-4">Create Your Storyboard Instantly</h2>
          <p className="text-lg mb-8 font-regular">Got a minute? Forget minutes, visualize your story in seconds</p>
          <div className="flex justify-center items-center space-x-8">
            <img src="/Flow.png" alt="Storyboard Process" className="mx-auto mb-2" />
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-5xl font-bold mb-20 text-brown-800 text-center">The Importance of Storyboarding</h2>
          <div className="flex justify-center items-center space-x-8">
            <img src="/Importance.webp" alt="Importance of Storyboarding" className="w-1/3" />
            <p className="text-left text-lg text-brown-800 font-semibold w-1/2">
              Storyboarding is a crucial step in the creative process, as it allows for visual planning, effective communication and collaboration among production team members, structuring of the narrative, problem-solving, increased efficiency and cost-effectiveness, creative exploration, and continuity and consistency throughout the project. By mapping out the sequence of events, camera angles, character movements, and other visual elements before actual production begins, storyboarding facilitates a more cohesive and engaging final product, particularly in fields such as film, video production, animation, and interactive media.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

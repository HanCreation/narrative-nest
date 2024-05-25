// Importing necessary page and react library
import React from "react";
import { Helmet } from "react-helmet";
import Header2 from "./Header2";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  // Returning home page
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
        <title>Narrative Nest</title>
      </Helmet>

      {/* Taking header 2 component */}
      <Header2 />

      <main className="flex-grow p-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          {/* Using image from assets */}
          <img
            src="/narrative-nest-logo.png"
            alt="Narrative Nest"
            className="mx-auto mb-10"
          />
          <h1 className="text-6xl font-bold mb-10 text-brown-800">
            Visualize It as You Narrate It
          </h1>
          {/* Link to sign up page */}
          <Link
            to="/sign-up"
            className="bg-brown-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-brown-600"
          >
            Get Started
          </Link>
        </section>
        {/* Hero Section End */}

        {/* Page Section */}
        <section className="text-center mb-16 text-brown-800">
          <h2 className="text-4xl font-bold mb-4">
            Create Your Storyboard Instantly
          </h2>
          <p className="text-lg mb-8 font-regular">
            Got a minute? Forget minutes, visualize your story in seconds
          </p>
          {/* Using image from assets */}
          <div className="flex justify-center items-center space-x-8">
            <img
              src="/Flow.png"
              alt="Storyboard Process"
              className="mx-auto mb-2"
            />
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-5xl font-bold mb-20 text-brown-800 text-center">
            The Importance of Storyboarding
          </h2>
          {/* Using image from assets */}
          <div className="flex justify-center items-center space-x-8">
            <img
              src="/Importance.webp"
              alt="Importance of Storyboarding"
              className="w-1/3"
            />
            <p className="text-left text-lg text-brown-800 font-semibold w-1/2">
              Storyboarding is a crucial step in the creative process, as it
              allows for visual planning, effective communication and
              collaboration among production team members, structuring of the
              narrative, problem-solving, increased efficiency and
              cost-effectiveness, creative exploration, and continuity and
              consistency throughout the project. By mapping out the sequence of
              events, camera angles, character movements, and other visual
              elements before actual production begins, storyboarding
              facilitates a more cohesive and engaging final product,
              particularly in fields such as film, video production, animation,
              and interactive media.
            </p>
          </div>
        </section>
        {/* Page Section End */}
      </main>

      {/* Taking Footer Section */}
      <Footer />
    </div>
  );
};

// Exporting homepage
export default HomePage;

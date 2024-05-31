// Importing necessary page and react library
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header3 from "./Header3";
import Footer from "./Footer";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy function to navigate to history page, without any logic
    // Login Logic to be added in the future if possible
    // Navigate directly to history page upon form submission
    navigate("/history");

    
  };

  // Returning Login Page
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
        <title>Login - Narrative Nest</title>
      </Helmet>

      {/* Taking Header3 Component */}
      <Header3 />

      {/* Submission Box */}
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="bg-white bg-opacity-25  backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-6 text-brown-800">Hi Again!</h2>
          
          {/* Calling handleSubmit Form */}
          <form onSubmit={handleSubmit}>
          
            {/* User email form */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
              value={userEmail} onChange={(e) => setUserEmail(e.target.value)}
            />
            {/* User Password form */}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-brown-500 text-white px-4 py-2 rounded-lg hover:bg-brown-600"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-brown-800">
            So, you're new here?{" "}
            {/* Link to Sign up page */}
            <Link to="/sign-up" className="underline">
              Sign Up
            </Link>
          </p>
        </div>
      </main>
      {/* Submission Box End */}
      
      {/* Taking Footer Section */}
      <Footer />
    </div>

  );
};

// Exporting Login Page
export default LoginPage;

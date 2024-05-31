// Importing necessary page and react library
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import Header3 from "./Header3";
import Footer from "./Footer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy function to navigate to history page, without any logic
    // Signup Logic to be added in the future if possible
    // Navigate directly to history page upon form submission
    // navigate("/history");

    if(password === "" || confirmPassword === "" || userEmail === "") {
      alert("Empty fileds");
    }

    if(password !== confirmPassword) {
      alert("Password does not match");
    }

    let creds : any = await createUserWithEmailAndPassword(auth, userEmail, password)
      .catch(err => { alert("Error creating user")})
    navigate("/history");
  };

  // Returning Sign Up Page
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
        <title>Sign Up - Narrative Nest</title>
      </Helmet>

      {/* Taking Header 3 Component */}
      <Header3 />

      {/* Submission Box */}
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="bg-glass2 bg-opacity-25 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-6 text-brown-800">
            Hello There!
          </h2>

          {/* Calling handleSubmit Form */}
          <form onSubmit={handleSubmit}>
            {/* User email form */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            {/* User Password form */}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* User Confirm Password form */}
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 mb-4 border rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* Term and Condition form */}
            <div className="flex items-center mb-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-brown-800">
                I agree with{" "}
                <label className="underline">Terms and Service</label>
              </label>
            </div>

            {/* Sign in Button */}
            <button
              type="submit"
              className="w-full bg-brown-500 text-white px-4 py-2 rounded-lg hover:bg-brown-600"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm text-brown-800">
            {/* Link to login page */}
            You are back?{" "}
            <Link to="/login" className="underline hover:text-brown-600">
              Login
            </Link>
          </p>
        </div>
      </main>

      {/* Taking Footer Section */}
      <Footer />
    </div>
  );
};

// Exporting Sign Up Page
export default SignUpPage;

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header3 from './Header3';
import Footer from './Footer';

const SignUpPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/Background.png')` }}>
      <Helmet>
        <title>Sign Up - Narrative Nest</title>
      </Helmet>
      <Header3 />
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="bg-glass2 bg-opacity-25 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-6 text-brown-800">Hello There!</h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 mb-4 border rounded"
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-brown-800">
                I agree with <Link to="/terms" className="underline">Terms and Service</Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-brown-500 text-white px-4 py-2 rounded-lg hover:bg-brown-600"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm text-brown-800">
            You are back? <Link to="/login" className="underline hover:text-brown-600">Login</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;

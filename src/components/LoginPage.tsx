import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header3 from './Header3';
const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate directly to history page upon form submission
    navigate('/history');
  };
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/Background.png')` }}>
      <Helmet>
        <title>Login - Narrative Nest</title>
      </Helmet>
      <Header3 />
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="bg-white bg-opacity-25  backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-6 text-brown-800">Hi Again!</h2>
          <form onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="w-full bg-brown-500 text-white px-4 py-2 rounded-lg hover:bg-brown-600"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-brown-800">
            So, you're new here? <Link to="/sign-up" className="underline">Sign Up</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;

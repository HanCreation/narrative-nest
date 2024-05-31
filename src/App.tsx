// Importing necessary page and react library
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import History from "./components/History";
// import Create from './components/Create';
import Storyboard from "./components/Storyboard";
import UserContextProvider from "./contexts/user-context";

const App: React.FC = () => {
  // Returning App Page
  return (
    // ROUTER: wraps the entire application. It enables the use of React Router for managing navigation within the app.
    <Router>
      <UserContextProvider>
        {/* ROUTES: container for all the Route components. It defines how different URLs in the application map to different components. */}
        <Routes>
          {/*ROUTE: specifies the component to render when the URL matches the path. */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/history" element={<History />} />
          {/* <Route path="/create" element={<Create />} /> */}
          <Route path="/storyboard" element={<Storyboard />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
};

// Exporting App page
export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '/src/components/HomePage.tsx';
import LoginPage from '/src/components/LoginPage';
import Storyboard from '/src/components/Storyboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/storyboard" element={<Storyboard />} />
      </Routes>
    </Router>
  );
};

export default App;

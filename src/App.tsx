import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
// import History from './components/History';
// import Create from './components/Create';
import Storyboard from './components/Storyboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />  
        {/* <Route path="/history" element={<History />} /> */}
        {/* <Route path="/create" element={<Create />} /> */}
        <Route path="/storyboard" element={<Storyboard />} />
      </Routes>
    </Router>
  );
};

export default App;

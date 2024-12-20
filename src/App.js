import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/RegistrationForm';
import Login from './components/LogInForm';
import HomePage from './components/HomePage';
import ProtectedRoute from './components/ProtectedRoute';
import Quiz from './components/Quiz';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/quiz"
          element={<ProtectedRoute isLoggedIn={isLoggedIn} element={<Quiz />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

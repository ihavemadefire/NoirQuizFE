import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = ({ isLoggedIn, handleLogout }) => {
  return (
    <div className="home-container">
      {!isLoggedIn ? (
        <div>
          <h1>Welcome to the Film Noir Quiz!</h1>
          <Link to="/login">
            <button>Log In</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      ) : (
        <div>
          <h1>Welcome Back!</h1>
          <Link to="/quiz">
            <button>Take the Quiz</button>
          </Link>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;

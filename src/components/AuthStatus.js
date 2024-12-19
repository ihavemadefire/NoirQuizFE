import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const verifyLogin = async () => {
      const token = localStorage.getItem('access');
      if (!token) return;

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/protected/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Login verification failed.', error);
      }
    };

    verifyLogin();
  }, []);

  return <div>{isLoggedIn ? 'Swordfish' : 'You are not logged in'}</div>;
};

export default AuthStatus;
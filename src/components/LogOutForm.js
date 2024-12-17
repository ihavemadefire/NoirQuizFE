import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await axios.post('/api/logout/', {}, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      });
      localStorage.removeItem('token'); // Clear token
      alert('You have logged out successfully.');
    } catch (error) {
      alert('Logout failed.');
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;

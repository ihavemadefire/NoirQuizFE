import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(''); // Add the error state here

  const handleRegister = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (password !== confirmPassword) {
      setError("Passwords do not match."); // Set the error message
      return; // Prevent form submission
    }

    setError(''); // Clear any previous error message

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/users/signup/', {
        email,
        username,
        password,
        confirm_password: confirmPassword,
      });
      setMessage('Registration successful! You can now log in.');
    } catch (error) {
      setMessage('Error registering. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if it exists */}
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Register;

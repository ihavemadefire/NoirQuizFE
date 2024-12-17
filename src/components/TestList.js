import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestList = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get('http://127.0.0.1:8000/api/tests/')
      .then((response) => {
        setTests(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Test List</h1>
      <ul>
        {tests.map((test) => (
          <li key={test.id}>
            <h3>{test.name}</h3>
            <p>{test.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestList;

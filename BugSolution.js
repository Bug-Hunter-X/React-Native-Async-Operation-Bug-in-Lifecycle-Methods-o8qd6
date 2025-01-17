// BugSolution.js
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to track if component is mounted
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        if (isMounted) {
          setData(jsonData);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError('Error fetching data');
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => { isMounted = false; }; // Cleanup function
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      {/* Render data */}
    </div>
  );
};

export default MyComponent;
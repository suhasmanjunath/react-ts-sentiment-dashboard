import React, { useState, useEffect } from 'react';

const SentimentSummary: React.FC = () => {
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    // Mock real-time score updates
    const interval = setInterval(() => {
      const randomScore = Math.random() * 2 - 1; // Random score between -1 and 1
      setAverageScore((prev) => (prev + randomScore) / 2);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Current Sentiment Summary</h2>
      <p>Average Sentiment Score: {averageScore.toFixed(2)}</p>
    </div>
  );
};

export default SentimentSummary;

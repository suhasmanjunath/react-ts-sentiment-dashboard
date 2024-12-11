import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

const RealTimeDataFeed: React.FC = () => {
  useEffect(() => {
    const socket = io('http://localhost:4000');
    socket.on('newSentiment', (data) => {
      console.log('Real-Time Sentiment Data:', data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Real-Time Data Feed</h2>
      <p>Listening for new sentiment updates...</p>
    </div>
  );
};

export default RealTimeDataFeed;

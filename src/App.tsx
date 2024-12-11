import React from 'react';
import SentimentChart from './components/SentimentChart';
import SentimentSummary from './components/SentimentSummary';
import RealTimeDataFeed from './components/RealTimeDataFeed';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1 style={{ fontFamily: "Playwrite HR Lijeva" }}>Real-Time Sentiment Analysis Dashboard</h1>
      </header>
      <main>
        <SentimentSummary />
        <SentimentChart />
        <RealTimeDataFeed />
      </main>
    </div>
  );
};

export default App;

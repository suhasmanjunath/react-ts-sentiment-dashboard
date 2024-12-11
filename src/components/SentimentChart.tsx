import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

const SentimentChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: 'Sentiment Score',
        data: [],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  });

  const updateChartData = (label: string, score: number) => {
    setChartData((prevState) => ({
      ...prevState,
      labels: [...prevState.labels, label],
      datasets: [
        {
          ...prevState.datasets[0],
          data: [...prevState.datasets[0].data, score],
        },
      ],
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLabel = new Date().toLocaleTimeString();
      const randomScore = Math.random() * 2 - 1; // Random score between -1 and 1
      updateChartData(randomLabel, randomScore);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Sentiment Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default SentimentChart;

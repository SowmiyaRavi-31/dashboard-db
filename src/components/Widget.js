import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import useDashboardStore from '../store/useDashboardStore';

Chart.register(...registerables);

const Widget = ({ categoryId, widget }) => {
  const { removeWidget } = useDashboardStore();
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Connected', 'Not Connected'],
        datasets: [
          {
            data: [2, 2],
            backgroundColor: ['#36A2EB', '#FFCE56'],
          },
        ],
      },
    });
    return () => chartInstance.destroy();
  }, []);

  return (
    <div className="widget">
      <h3>{widget.title}</h3>
      <canvas ref={chartRef} className="chart" />
      <p><strong>Name:</strong> {widget.name}</p>
      <p><strong>Description:</strong> {widget.description}</p>
      <button onClick={() => removeWidget(categoryId, widget.id)}>✖</button>
    </div>
  );
};

export default Widget;

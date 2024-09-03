import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function AttendanceChart() {
  const data = {
    labels: ['Present', 'Absent'],
    datasets: [{
      label: 'Attendance',
      data: [90, 30],
      backgroundColor: ['#39FF14', '#D5D0CB'],
      borderColor: ['#39FF14', '#D5D0CB']
    }]
  };

  const options = {
    cutout: '70%', // Adjust this to control the inner radius
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = 'bolder 30px sans-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const val1 = data.datasets[0].data[0];
      const val2 = data.datasets[0].data[1];
      const sum = val1 + val2;
      ctx.fillText(`${val1} of ${sum}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
    }
  };

  return (
    <div style={{ width: '25%', height: '25%', margin: 'auto', padding: '20px' }}>
      <Doughnut
        data={data}
        options={options}
        plugins={[textCenter]}
      />
    </div>
  );
}

export default AttendanceChart;

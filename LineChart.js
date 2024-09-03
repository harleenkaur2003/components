import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Jan', 
    Average_Performance: 44,
    Your_Performance: 35
  },
  {
    name: 'Feb',
    Average_Performance: 36,
    Your_Performance: 25
  },
  {
    name: 'Mar',
    Average_Performance:  34,
    Your_Performance: 90,
  },
  {
    name: 'Apr',
    Average_Performance: 45,
    Your_Performance: 61
  },
  {
    name: 'May',
    Average_Performance: 33,
    Your_Performance:  54
  },
  {
    name: 'Jun',
    Average_Performance: 56,
    Your_Performance: 67
  },
  {
    name: 'Jul',
    Average_Performance: 47,
    Your_Performance: 59
  },
];

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-10} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
          {payload.value}
        </text>
      </g>
    );
  }
}

const PerformanceLineChart = () => (
  <div style={{ width: '600px', height: '400px' }}>
    <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis tick={false} /> {/* Hides the numbers on the y-axis */}
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Your_Performance" stroke="#8884d8" label={<CustomizedLabel />} />
        <Line type="monotone" dataKey="Average_Performance" stroke="#82ca9d" />
      </LineChart>
  </div>
);

export default PerformanceLineChart;

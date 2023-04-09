import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const studentMarks = [
    {
      id: 1,
      name: "John",
      maths: 75,
      science: 80,
      english: 85,
    },
    {
      id: 2,
      name: "Mary",
      maths: 90,
      science: 85,
      english: 80,
    },
    {
      id: 3,
      name: "Alice",
      maths: 80,
      science: 75,
      english: 70,
    },
    {
      id: 4,
      name: "Bob",
      maths: 70,
      science: 80,
      english: 75,
    },
    {
      id: 5,
      name: "Emma",
      maths: 85,
      science: 90,
      english: 85,
    },
    {
      id: 6,
      name: "Tom",
      maths: 75,
      science: 70,
      english: 80,
    },
    {
      id: 7,
      name: "Sarah",
      maths: 90,
      science: 80,
      english: 90,
    },
    {
      id: 8,
      name: "Alex",
      maths: 80,
      science: 85,
      english: 75,
    },
    {
      id: 9,
      name: "Emily",
      maths: 75,
      science: 80,
      english: 80,
    },
    {
      id: 10,
      name: "Max",
      maths: 85,
      science: 90,
      english: 90,
    },
  ];

  return (
    <div>
      <LineChart width={1000} height={500} data={studentMarks}>
        <Line dataKey="maths" stroke="#8884d8"></Line>
        <Line dataKey="science" stroke="#82ca9d"></Line> 
        <Line dataKey="english"></Line>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Dashboard;

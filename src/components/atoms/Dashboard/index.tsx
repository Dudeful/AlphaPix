import React from 'react';
import './styles.css';

interface IDashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<IDashboardProps> = ({ children }) => {
  return <div className="dashboard-div"></div>;
};

export default Dashboard;

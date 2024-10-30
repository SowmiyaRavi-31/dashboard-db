// Dashboard.js
import React, { useEffect } from 'react';
import useDashboardStore from '../store/useDashboardStore';
import Category from './Category.js';

const Dashboard = () => {
  const { categories } = useDashboardStore();

  return (
    <div className="dashboard">
      <h1>CNAPP Dashboard</h1>
      <div className="dashboard-sections">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

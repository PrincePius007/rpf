import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Dashboard;

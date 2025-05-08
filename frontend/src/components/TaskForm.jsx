import React, { useState } from 'react';
import axios from '../axios';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/tasks', { title, address });
      setTitle('');
      setAddress('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter address"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

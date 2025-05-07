// import React, { useState } from 'react';
// import axios from 'axios';

import axios from "axios";
import React, { useState } from "react";

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://127.0.0.1:8000/api/tasks', { title,address });
    setTitle('');
    setAddress('');
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

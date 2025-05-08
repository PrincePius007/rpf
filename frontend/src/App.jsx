import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './components/Dashbord';

function App() {
  const [user, setUser] = useState(null); // Tracks logged-in user

  const handleLogin = (userData) => {
    setUser(userData); // Set user after login
  };

  const handleLogout = () => {
    setUser(null); // Clear user when logging out
  };

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav>
          {!user ? (
            <>
              <Link to="/login">Login</Link> | <Link to="/register">Register</Link>|<Link to="/login">Logout</Link>
            </>
              
          ) : (
            <>
              <span>Welcome, {user.name}</span> 
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </nav>

        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route
            path="/"
            element={
              user ? (
                <>
                  <h1>Task Manager</h1>
                  <TaskForm />
                  <TaskList />
                </>
              ) : (
                <p>Please login to manage tasks.</p>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

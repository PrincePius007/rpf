import { useState } from 'react';
import API from '../axios';
import { getCSRFToken } from '../axios';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await getCSRFToken(); // <-- add this line
      const res = await API.post('/register', form);
      localStorage.setItem('token', res.data.token);
      window.location.href = "/login";
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error('Registration error:', error);
      }
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <p style={{ color: 'red' }}>{errors.name[0]}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      {errors.email && <p style={{ color: 'red' }}>{errors.email[0]}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
      />
      {errors.password && <p style={{ color: 'red' }}>{errors.password[0]}</p>}

      <button type="submit">Register</button>
    </form>
  );
}

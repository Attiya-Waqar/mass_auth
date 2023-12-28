import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormHeader from '../components/form_header';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
         Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include', // Include credentials if needed
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Login failed');
    }

    const data = await response.json();
    console.log(data); // Handle success data or store token

    // Redirect to another page or update state upon successful login
  } catch (error) {
    setError(error.message);
    console.error('Error:', error);
  }
};

  return (
    <>
    < FormHeader />
      <div className="row justify-content-center mt-5 p-5">
        <div className="col-2 py-3">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group py-4">
              <label className="" htmlFor="username">Username:</label>
              <input className="form-control bg-secondary text-white"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input className="form-control bg-secondary text-white"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="row justify-content-between">
              <div className="col-auto">
                <button className="btn btn-outline-secondary mt-3" type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </div>
              <div className="row mt-3">
                <Link to="/register" style={{fontSize:'1vw'}}>Dont have an account?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

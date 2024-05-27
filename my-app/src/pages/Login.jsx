import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      localStorage.setItem('loggedIn', 'true');
      navigate('/profile');
    } else {
      alert('Неверное имя пользователя или пароль');
    }
  };

  return (
    <div className="login-container1">
      <h2 className="form-heading1">Вход</h2>
      <form className="login-form1" onSubmit={handleLogin}>
        <div className="form-group1">
          <label className="username1">Имя пользователя</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group1">
          <label className="password">Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;

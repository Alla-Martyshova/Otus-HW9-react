import React, { useState } from 'react'
import axios from 'axios'
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://localhost:5000/api/login', {
        username,
        password,
      });

      console.log('Успешная авторизация:', response.data);
    } 
    catch (err) {     
      setError('Ошибка при отправке запроса');
    } 
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <label>
          Имя пользователя:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit">Вход</button>
    </form>
  );
};

export default Login
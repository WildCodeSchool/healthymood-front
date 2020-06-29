import React, { useState, useContext } from 'react';
import API from '../Serveurs/API';
import AuthContext from '../authContext';

export default function LoginPage (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setName] = useState('');
  const { setToken } = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    API.post('/auth/login', { username, email, password }).then(res => res.data).then((data) => {
      setToken(data.token);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor='username' required name='username'>Name : </label>
        <input id='username' type='text' value={username} onChange={(e) => setName(e.target.value)} />
        <label htmlFor='email' name='email'>Email : </label>
        <input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor='password' name='password'>Password : </label>
        <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type='submit' value='Go' />
      </form>
    </div>
  );
}

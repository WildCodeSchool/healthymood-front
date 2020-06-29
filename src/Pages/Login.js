import React, { useState, useContext } from 'react';
import API from '../Services/API';
import AuthContext from '../Context/authContext';

export default function LoginPage (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    API.post('/auth/login', { email, password }).then(res => res.data).then((data) => {
      setToken(data.token);
    });
  };
  const { token } = useContext(AuthContext);
  console.log(token); // bon@jour.com abcdef
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email' name='email'>Email : </label>
        <input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor='password' name='password'>Password : </label>
        <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type='submit' value='Go' />
      </form>
    </div>
  );
}

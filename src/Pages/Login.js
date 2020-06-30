import React, { useState, useContext } from 'react';
import API from '../Services/API';
import AuthContext from '../Context/authContext';
import '../Styles/Login.css';
import { useHistory } from 'react-router-dom';

export default function LoginPage (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { setToken, setIsConnected } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    API.post('/auth/login', { email, password })
      .then((res) => res.data)
      .then((data) => {
        setToken(data.token);
        setLoading(false);
        setIsConnected(true);
        history.push('/');
      });
  };
  const { token } = useContext(AuthContext);
  console.log(token);
  return (
    <div className='login-page'>
      <h1>Login</h1>
      <form className='form-login' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email' name='email'>
            Email :{' '}
          </label>
          <input
            id='email'
            type='email'
            value={email}
            placeholder='exemple@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password' name='password'>
            Password :{' '}
          </label>
          <input
            id='password'
            type='password'
            value={password}
            placeholder='Votre mot de passe'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='btn' type='submit' disabled={!!loading}>
          Connexion
        </button>
      </form>
    </div>
  );
}

// bon@jour.com abcdef

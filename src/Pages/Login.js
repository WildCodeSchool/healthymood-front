import React, { useState, useContext } from 'react';
import API from '../Services/API';
import AuthContext from '../Context/authContext';
import '../Styles/Login.css';
import { useHistory, Link } from 'react-router-dom';

export default function LoginPage (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { setToken, setIsConnected } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    API.post('/auth/login', { email, password })
      .then((res) => res.data)
      .then((data) => {
        setToken(data.token);
        setIsConnected(true);

        history.push('/');
      })
      .catch((err) => {
        console.error(err);
        window.alert('Mot de passe ou email incorrect.');
      });
  };

  return (
    <div className='login-page'>
      <form className='form-login' onSubmit={handleSubmit}>
        <h1 className='title-login'>Se connecter</h1>
        <div className='form-group'>
          <label htmlFor='email' name='email'>
            Email :
          </label>
          <input
            id='email'
            type='email'
            value={email}
            placeholder='Votre adresse e-mail'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password' name='password'>
            Mot de passe :
          </label>
          <input
            id='password'
            type='password'
            value={password}
            placeholder='Votre mot de passe'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='btn-connexion' type='submit'>
          Connexion
        </button>
        <h6>
          Vous n'avez pas de compte ?
          <Link to='/register'> Créez un compte ici</Link>
        </h6>
      </form>
    </div>
  );
}

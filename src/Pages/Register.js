import React, { useState } from 'react';
import API from '../Services/API';
import '../Styles/Register.css';
import { useHistory, Link } from 'react-router-dom';

export default function RegisterPage () {
  const [email, setEmail] = useState('');
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { username, email, password };
    API.post('/users', payload)
      .then((res) => {
        alert("Vous êtes désormais inscrit."); // eslint-disable-line
        history.push('/');
      })
      .catch((err) => {
        console.error(err);
        window.alert(
          'Un email similaire est déjà existant ou un champs est vide.'
        );
      });
  };

  return (
    <div className='register-page'>
      <form className='form-login' onSubmit={handleSubmit}>
        <h1>Inscription</h1>
        <div className='form-group'>
          <label htmlFor='username' required name='username'>
            Pseudo :
          </label>
          <input
            id='username'
            type='text'
            value={username}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='Votre pseudo'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email' required name='email'>
            Email :
          </label>
          <input
            id='email'
            type='email'
            value={email}
            placeholder='Votre adresse e-mail'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password' required name='password'>
            Mot de passe :
          </label>
          <input
            id='password'
            type='password'
            value={password}
            placeholder='Votre mot de passe'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='btn-connexion' type='submit'>
          S'enregistrer
        </button>
        <h6>
          Vous avez déjà un compte ?
          <Link to='/login'> Connectez vous ici </Link>
        </h6>
      </form>
    </div>
  );
}

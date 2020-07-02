import React, { useState } from 'react';
import '../Styles/Compte.css';
import API from '../Services/API';

const MonCompte = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const id = 1;

  const handleSubmit = (event) => {
    event.preventDefault();
    API.patch(`/users/${id}`, { email, password })
      .then((res) => res.data)
      .then((data) => {

      })
      .catch((err) => {
        console.error(err);
        window.alert('Mot de passe ou email incorrect.');
      });
  };

  return (
    <div className='compte-page'>
      <h1 className='title-compte'>Changer ses infos</h1>
      <form className='form-compte' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email' name='email'>
            Email :
          </label>
          <input
            id='email'
            type='email'
            value={email}
            placeholder='NouvelEmail@gmail.com'
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
            placeholder='Votre nouveau mot de passe'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='btn-connexion' type='submit'>
          Actualiser
        </button>
      </form>
    </div>
  );
};

export default MonCompte;

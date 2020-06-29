import React, { useState } from 'react';
import API from '../Services/API';
import '../Styles/Register.css';
import { Link } from 'react-router-dom';

export default function RegisterPage (props) {
  const [email, setEmail] = useState('');
  const [username, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const payload = { username, email, password };
    API.post('/users', payload).then((res) => {
      alert('registered !'); // eslint-disable-line
      setLoading(false);
    });
  };

  return (
    <div className='login-page'>
      <h1>Register</h1>
      <form className='form-login' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='username'
          required
          name='username'>
            Name : 
          </label>
        <input id='username' 
          type='text' 
          value={username} 
          onChange={(e) => setName(e.target.value)}
        />
        </div>
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
        <Link to='/'>
        <button className='btn' type='submit' disabled={!!loading}>Connexion</button>
        </Link>
      </form>
    </div>
  );
}

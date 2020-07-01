import React, { useContext, useState } from 'react';
import './Styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import RecipesPage from './Pages/RecipesPage';
import Article from './Pages/Article';
import './Styles/Variables.css';
import Search from './Components/Search';
import Recipe from './Components/Recipe';
import AuthContext from './Context/authContext';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import SecretPage from './Pages/Secret';

function PrivateRoute ({ children, ...rest }) {
  const { token } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={
        ({ location }) =>
          token ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          ) // eslint-disable-line
      } // eslint-disable-line
    />
  );
}

function App () {
  const [isConnected, setIsConnected] = useState(
    JSON.parse(window.localStorage.getItem('isConnected'))
  );
  const [token, setToken] = useState(window.localStorage.getItem('authToken'));
  const setTokenInLocalStorage = (token) => {
    window.localStorage.setItem('authToken', token);
    setToken(token);
  };

  const setIsConnectedInLocalStorage = (connected) => {
    window.localStorage.setItem('isConnected', connected);
    setIsConnected(connected);
  };

  const handleLogOut = () => {
    setTokenInLocalStorage('');
    setIsConnectedInLocalStorage(false);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          token,
          setToken: setTokenInLocalStorage,
          setIsConnected: setIsConnectedInLocalStorage,
          connected: isConnected,
          setLogOut: handleLogOut
        }}
      >
        <Router>
          <div className='App'>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/recettes' component={RecipesPage} />
              <Route exact path='/conseils-astuces' component={Article} />
              <Route exact path='/rechercher' component={Search} />
              <Route exact path='/recettes/:slug' component={Recipe} />
              <Route
                exact
                path='/recettes/categorie/:id'
                component={RecipesPage}
              />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/register' component={RegisterPage} />
              <PrivateRoute exact path='/liste-de-course'>
                <SecretPage />
              </PrivateRoute>
              <PrivateRoute exact path='/secret'>
                <SecretPage />
              </PrivateRoute>
              <PrivateRoute exact path='/mon-compte'>
                <SecretPage />
              </PrivateRoute>
            </Switch>
            <Footer />
          </div>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;

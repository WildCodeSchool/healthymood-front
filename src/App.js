/* eslint-disable no-lone-blocks */
import React, { useContext, useState, useEffect } from 'react';
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
import ConseilsAstuces from './Pages/ConseilsAstuces';
import Article from './Pages/Article';
import './Styles/Variables.css';
import Search from './Components/Search';
import Recipe from './Components/Recipe';
import SendRecipe from './Pages/SendRecipe';
import AuthContext from './Context/authContext';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import ScrollToTop from './Scripts/ScrollToTop';
import FavoriteContext from './Context/favoriteContext';
import FavoriteUser from './Pages/FavoriteUser';
import API from './Services/API';
import Pages from './Pages/Pages';

// messaging.onMessage((payload) => console.log('Message received. ', payload));

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
  const [favorite, setFavorite] = useState([]);

  const [isConnected, setIsConnected] = useState(
    JSON.parse(window.localStorage.getItem('isConnected'))
  );

  const [token, setToken] = useState(window.localStorage.getItem('authToken'));
  useEffect(() => {
    {
      isConnected
        ? API.get('/favorites')
          .then((res) => res.data)
          .then((data) => {
            setFavorite(data.data);
          })
          .catch((err) => {
            console.error(err);
            window.alert('Erreur lors de la récupération des favoris');
          })
        : setFavorite(null);
    }
  }, [isConnected]);

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

  const handleSubmitFavorite = (recipe_id) => { // eslint-disable-line
    API.post('/favorites', {
      recipe_id
    })
      .then((res) => res.data)
      .then((data) => {
        const favExist = favorite.find((fav) => fav.recipe_id === recipe_id); //eslint-disable-line
        if (!favExist) {
          setFavorite((favorite) => [...favorite, { recipe_id }]); //eslint-disable-line
        } else {
          setFavorite(
            (favorite) => favorite.filter((fav) => fav.recipe_id !== recipe_id) //eslint-disable-line
          );
        }
      })
      .catch((err) => {
        console.error(err);
        window.alert("Erreur lors de l'ajout d'un favoris");
      });
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken: setTokenInLocalStorage,
        setIsConnected: setIsConnectedInLocalStorage,
        connected: isConnected,
        setLogOut: handleLogOut
      }}
    >
      <FavoriteContext.Provider
        value={{
          favorite,
          setFavorite,
          handleSubmitFavorite
        }}
      >
        <Router>
          <ScrollToTop />
          <div className='App'>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/recettes' component={RecipesPage} />
              <Route path='/conseils-astuces' component={ConseilsAstuces} />
              <Route exact path='/article/:slug' component={Article} />
              <Route path='/rechercher' component={Search} />
              <Route exact path='/recettes/:slug' component={Recipe} />
              <Route
                exact
                path='/recettes/categorie/:id'
                component={RecipesPage}
              />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/register' component={RegisterPage} />
              <Route exact path='/info/:slug' component={Pages} />
              <Route exact path='/envoyer-recette' component={SendRecipe} />
              <PrivateRoute exact path='/compte/favoris'>
                <FavoriteUser />
              </PrivateRoute>
            </Switch>
            <Footer />
          </div>
        </Router>
      </FavoriteContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
